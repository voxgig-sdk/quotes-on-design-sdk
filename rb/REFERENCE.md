# QuotesOnDesign Ruby SDK Reference

Complete API reference for the QuotesOnDesign Ruby SDK.


## QuotesOnDesignSDK

### Constructor

```ruby
require_relative 'quotes-on-design_sdk'

client = QuotesOnDesignSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
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

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

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

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## PostEntity

```ruby
post = client.Post
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | ``$INTEGER`` | No |  |
| `category` | ``$ARRAY`` | No |  |
| `comment_status` | ``$STRING`` | No |  |
| `content` | ``$OBJECT`` | No |  |
| `date` | ``$STRING`` | No |  |
| `date_gmt` | ``$STRING`` | No |  |
| `excerpt` | ``$OBJECT`` | No |  |
| `featured_media` | ``$INTEGER`` | No |  |
| `format` | ``$STRING`` | No |  |
| `guid` | ``$OBJECT`` | No |  |
| `id` | ``$INTEGER`` | No |  |
| `link` | ``$STRING`` | No |  |
| `meta` | ``$OBJECT`` | No |  |
| `modified` | ``$STRING`` | No |  |
| `modified_gmt` | ``$STRING`` | No |  |
| `ping_status` | ``$STRING`` | No |  |
| `slug` | ``$STRING`` | No |  |
| `status` | ``$STRING`` | No |  |
| `sticky` | ``$BOOLEAN`` | No |  |
| `tag` | ``$ARRAY`` | No |  |
| `template` | ``$STRING`` | No |  |
| `title` | ``$OBJECT`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Post.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Post.load({ "id" => "post_id" })
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

