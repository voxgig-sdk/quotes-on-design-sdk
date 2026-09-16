
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'QuotesOnDesign',
        slug: "quotes-on-design",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://quotesondesign.com/wp-json/wp/v2",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      post: {
      },

    }
  }


  entity = {
    "post": {
      "fields": [
        {
          "name": "author",
          "short": "The ID for the author of the post",
          "type": "`$INTEGER`"
        },
        {
          "name": "categories",
          "short": "The terms assigned to the post in the category taxonomy",
          "type": "`$ARRAY`"
        },
        {
          "name": "comment_status",
          "short": "Whether or not comments are open on the post",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "date",
          "short": "The date the post was published, in the site's timezone",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "date_gmt",
          "short": "The date the post was published, as GMT",
          "type": "`$STRING`"
        },
        {
          "name": "excerpt",
          "type": "`$OBJECT`"
        },
        {
          "name": "featured_media",
          "short": "The ID of the featured media for the post",
          "type": "`$INTEGER`"
        },
        {
          "name": "format",
          "short": "The format for the post",
          "type": "`$STRING`"
        },
        {
          "name": "guid",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the post",
          "type": "`$INTEGER`"
        },
        {
          "format": "uri",
          "name": "link",
          "short": "URL to the post",
          "type": "`$STRING`"
        },
        {
          "name": "meta",
          "short": "Meta fields",
          "type": "`$OBJECT`"
        },
        {
          "format": "date-time",
          "name": "modified",
          "short": "The date the post was last modified, in the site's timezone",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "modified_gmt",
          "short": "The date the post was last modified, as GMT",
          "type": "`$STRING`"
        },
        {
          "name": "ping_status",
          "short": "Whether or not the post can be pinged",
          "type": "`$STRING`"
        },
        {
          "name": "slug",
          "short": "An alphanumeric identifier for the post unique to its type",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "short": "A named status for the post",
          "type": "`$STRING`"
        },
        {
          "name": "sticky",
          "short": "Whether or not the post should be treated as sticky",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "tags",
          "short": "The terms assigned to the post in the post_tag taxonomy",
          "type": "`$ARRAY`"
        },
        {
          "name": "template",
          "short": "The theme file to use to display the post",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$OBJECT`"
        },
        {
          "name": "type",
          "short": "Type of post",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "post",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": false,
                    "kind": "query",
                    "name": "embed",
                    "orig": "embed",
                    "type": "`$BOOLEAN`"
                  },
                  {
                    "example": "date",
                    "kind": "query",
                    "name": "orderby",
                    "orig": "orderby",
                    "type": "`$STRING`"
                  },
                  {
                    "example": 1,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "type": "`$INTEGER`"
                  },
                  {
                    "example": 10,
                    "kind": "query",
                    "name": "per_page",
                    "orig": "per_page",
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/posts/",
              "segments": [
                {
                  "lit": "posts"
                }
              ],
              "select": {
                "exist": [
                  "embed",
                  "orderby",
                  "page",
                  "per_page"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "posts"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$INTEGER`"
                  }
                ],
                "query": [
                  {
                    "example": false,
                    "kind": "query",
                    "name": "embed",
                    "orig": "embed",
                    "type": "`$BOOLEAN`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/posts/{id}",
              "segments": [
                {
                  "lit": "posts"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "embed",
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "posts",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

