# QuotesOnDesign Ruby SDK Reference

Complete API reference for the QuotesOnDesign Ruby SDK.


## QuotesOnDesignSDK

### Constructor

```ruby
require_relative 'QuotesOnDesign_sdk'

client = QuotesOnDesignSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `QuotesOnDesignSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = QuotesOnDesignSDK.test
```


### Instance Methods

#### `Post(data = nil)`

Create a new `Post` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## PostEntity

```ruby
post = client.Post
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `Integer` | No | The ID for the author of the post |
| `categories` | `Array` | No | The terms assigned to the post in the category taxonomy |
| `comment_status` | `String` | No | Whether or not comments are open on the post |
| `content` | `Hash` | No |  |
| `date` | `String` | No | The date the post was published, in the site's timezone |
| `date_gmt` | `String` | No | The date the post was published, as GMT |
| `excerpt` | `Hash` | No |  |
| `featured_media` | `Integer` | No | The ID of the featured media for the post |
| `format` | `String` | No | The format for the post |
| `guid` | `Hash` | No |  |
| `id` | `Integer` | No | Unique identifier for the post |
| `link` | `String` | No | URL to the post |
| `meta` | `Hash` | No | Meta fields |
| `modified` | `String` | No | The date the post was last modified, in the site's timezone |
| `modified_gmt` | `String` | No | The date the post was last modified, as GMT |
| `ping_status` | `String` | No | Whether or not the post can be pinged |
| `slug` | `String` | No | An alphanumeric identifier for the post unique to its type |
| `status` | `String` | No | A named status for the post |
| `sticky` | `Boolean` | No | Whether or not the post should be treated as sticky |
| `tags` | `Array` | No | The terms assigned to the post in the post_tag taxonomy |
| `template` | `String` | No | The theme file to use to display the post |
| `title` | `Hash` | No |  |
| `type` | `String` | No | Type of post |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Post.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Post.load({ "id" => 1 })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PostEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = QuotesOnDesignSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

