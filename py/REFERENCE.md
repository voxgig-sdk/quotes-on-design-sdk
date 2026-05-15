# QuotesOnDesign Python SDK Reference

Complete API reference for the QuotesOnDesign Python SDK.


## QuotesOnDesignSDK

### Constructor

```python
from quotes-on-design_sdk import QuotesOnDesignSDK

client = QuotesOnDesignSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `QuotesOnDesignSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = QuotesOnDesignSDK.test()
```


### Instance Methods

#### `Post(data=None)`

Create a new `PostEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## PostEntity

```python
post = client.Post()
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

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.Post().list({})
```

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.Post().load({"id": "post_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PostEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = QuotesOnDesignSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

