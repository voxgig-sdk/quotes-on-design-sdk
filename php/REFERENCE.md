# QuotesOnDesign PHP SDK Reference

Complete API reference for the QuotesOnDesign PHP SDK.


## QuotesOnDesignSDK

### Constructor

```php
require_once __DIR__ . '/quotesondesign_sdk.php';

$client = new QuotesOnDesignSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `QuotesOnDesignSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = QuotesOnDesignSDK::test();
```


### Instance Methods

#### `Post($data = null)`

Create a new `PostEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): QuotesOnDesignUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## PostEntity

```php
$post = $client->Post();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `int` | No | The ID for the author of the post |
| `categories` | `array` | No | The terms assigned to the post in the category taxonomy |
| `comment_status` | `string` | No | Whether or not comments are open on the post |
| `content` | `array` | No |  |
| `date` | `string` | No | The date the post was published, in the site's timezone |
| `date_gmt` | `string` | No | The date the post was published, as GMT |
| `excerpt` | `array` | No |  |
| `featured_media` | `int` | No | The ID of the featured media for the post |
| `format` | `string` | No | The format for the post |
| `guid` | `array` | No |  |
| `id` | `int` | No | Unique identifier for the post |
| `link` | `string` | No | URL to the post |
| `meta` | `array` | No | Meta fields |
| `modified` | `string` | No | The date the post was last modified, in the site's timezone |
| `modified_gmt` | `string` | No | The date the post was last modified, as GMT |
| `ping_status` | `string` | No | Whether or not the post can be pinged |
| `slug` | `string` | No | An alphanumeric identifier for the post unique to its type |
| `status` | `string` | No | A named status for the post |
| `sticky` | `bool` | No | Whether or not the post should be treated as sticky |
| `tags` | `array` | No | The terms assigned to the post in the post_tag taxonomy |
| `template` | `string` | No | The theme file to use to display the post |
| `title` | `array` | No |  |
| `type` | `string` | No | Type of post |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Post()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Post()->load(["id" => 1]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PostEntity`

Create a new `PostEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new QuotesOnDesignSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

