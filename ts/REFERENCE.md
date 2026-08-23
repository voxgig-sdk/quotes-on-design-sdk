# QuotesOnDesign TypeScript SDK Reference

Complete API reference for the QuotesOnDesign TypeScript SDK.


## QuotesOnDesignSDK

### Constructor

```ts
new QuotesOnDesignSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `QuotesOnDesignSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = QuotesOnDesignSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `QuotesOnDesignSDK` instance in test mode.


### Instance Methods

#### `Post(data?: object)`

Create a new `Post` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PostEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `QuotesOnDesignSDK.test()`.

**Returns:** `QuotesOnDesignSDK` instance in test mode.


---

## PostEntity

```ts
const post = client.Post()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `author` | `number` | No | The ID for the author of the post |
| `categories` | `any[]` | No | The terms assigned to the post in the category taxonomy |
| `comment_status` | `string` | No | Whether or not comments are open on the post |
| `content` | `Record<string, any>` | No |  |
| `date` | `string` | No | The date the post was published, in the site's timezone |
| `date_gmt` | `string` | No | The date the post was published, as GMT |
| `excerpt` | `Record<string, any>` | No |  |
| `featured_media` | `number` | No | The ID of the featured media for the post |
| `format` | `string` | No | The format for the post |
| `guid` | `Record<string, any>` | No |  |
| `id` | `number` | No | Unique identifier for the post |
| `link` | `string` | No | URL to the post |
| `meta` | `Record<string, any>` | No | Meta fields |
| `modified` | `string` | No | The date the post was last modified, in the site's timezone |
| `modified_gmt` | `string` | No | The date the post was last modified, as GMT |
| `ping_status` | `string` | No | Whether or not the post can be pinged |
| `slug` | `string` | No | An alphanumeric identifier for the post unique to its type |
| `status` | `string` | No | A named status for the post |
| `sticky` | `boolean` | No | Whether or not the post should be treated as sticky |
| `tags` | `any[]` | No | The terms assigned to the post in the post_tag taxonomy |
| `template` | `string` | No | The theme file to use to display the post |
| `title` | `Record<string, any>` | No |  |
| `type` | `string` | No | Type of post |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Post().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Post().load({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PostEntity` instance with the same client and
options.

#### `client()`

Return the parent `QuotesOnDesignSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new QuotesOnDesignSDK({
  feature: {
    test: { active: true },
  }
})
```

