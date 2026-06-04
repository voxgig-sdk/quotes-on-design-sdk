# QuotesOnDesign SDK

Fetch design-related quotes curated by Chris Coyier, served through the standard WordPress REST API

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Quotes on Design API

[Quotes on Design](https://quotesondesign.com/) is a long-running collection of short quotations about design, typography, craft and creative practice, curated by Chris Coyier. The site is built on WordPress, and each quote is stored as a regular WordPress post, which means the public [WordPress REST API](https://developer.wordpress.org/rest-api/) at `https://quotesondesign.com/wp-json/wp/v2` is the de-facto API for the collection.

What you can do with it:

- List quotes via `GET /posts` with the usual WP REST query parameters (`per_page`, `page`, `search`, `orderby`).
- Fetch a single quote with `GET /posts/{id}`.
- Pull a random selection with `GET /posts?orderby=rand` (historically the canonical "random quote" call, though reliability has varied over time).
- Each post returns the quote body in `content.rendered` and the attributed author in `title.rendered`.

Operational notes: there is no authentication, no documented rate limit, and CORS is not enabled — so requests are best made from a server or build step rather than directly from a browser. Because the endpoint is just WordPress, any standard WP REST client (or plain `fetch`) works.

## Try it

**TypeScript**
```bash
npm install quotes-on-design
```

**Python**
```bash
pip install quotes-on-design-sdk
```

**PHP**
```bash
composer require voxgig/quotes-on-design-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/quotes-on-design-sdk/go
```

**Ruby**
```bash
gem install quotes-on-design-sdk
```

**Lua**
```bash
luarocks install quotes-on-design-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { QuotesOnDesignSDK } from 'quotes-on-design'

const client = new QuotesOnDesignSDK({})

// List all posts
const posts = await client.Post().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o quotes-on-design-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "quotes-on-design": {
      "command": "/abs/path/to/quotes-on-design-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Post** | A single design quote stored as a WordPress post, exposed under `GET /posts` and `GET /posts/{id}`; the quote text lives in `content.rendered` and the attributed author in `title.rendered`. | `/posts/` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from quotesondesign_sdk import QuotesOnDesignSDK

client = QuotesOnDesignSDK({})

# List all posts
posts, err = client.Post(None).list(None, None)

# Load a specific post
post, err = client.Post(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'quotesondesign_sdk.php';

$client = new QuotesOnDesignSDK([]);

// List all posts
[$posts, $err] = $client->Post(null)->list(null, null);

// Load a specific post
[$post, $err] = $client->Post(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/quotes-on-design-sdk/go"

client := sdk.NewQuotesOnDesignSDK(map[string]any{})

// List all posts
posts, err := client.Post(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "QuotesOnDesign_sdk"

client = QuotesOnDesignSDK.new({})

# List all posts
posts, err = client.Post(nil).list(nil, nil)

# Load a specific post
post, err = client.Post(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("quotes-on-design_sdk")

local client = sdk.new({})

-- List all posts
local posts, err = client:Post(nil):list(nil, nil)

-- Load a specific post
local post, err = client:Post(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = QuotesOnDesignSDK.test()
const result = await client.Post().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = QuotesOnDesignSDK.test(None, None)
result, err = client.Post(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = QuotesOnDesignSDK::test(null, null);
[$result, $err] = $client->Post(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Post(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = QuotesOnDesignSDK.test(nil, nil)
result, err = client.Post(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Post(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Quotes on Design API

- Upstream: [https://quotesondesign.com/](https://quotesondesign.com/)
- API docs: [https://developer.wordpress.org/rest-api/reference/posts/](https://developer.wordpress.org/rest-api/reference/posts/)

- The site does not publish an explicit licence for API responses.
- Quotes are attributed to their original speakers/authors; preserve that attribution when displaying them.
- The collection is curated by Chris Coyier — a courtesy link back to [quotesondesign.com](https://quotesondesign.com/) is appropriate.
- CORS is not enabled, so calls must be made server-side rather than from the browser.

---

Generated from the Quotes on Design API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
