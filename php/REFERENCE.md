# QuotesOnDesign PHP SDK Reference

Complete API reference for the QuotesOnDesign PHP SDK.


## QuotesOnDesignSDK

### Constructor

```php
require_once __DIR__ . '/quotes-on-design_sdk.php';

$client = new QuotesOnDesignSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
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

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

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

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## PostEntity

```php
$post = $client->Post();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Post()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Post()->load(["id" => "post_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): PostEntity`

Create a new `PostEntity` instance with the same client and
options.

#### `getName(): string`

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

