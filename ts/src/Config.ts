
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'QuotesOnDesign',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$INTEGER`"
        },
        {
          "name": "categories",
          "type": "`$ARRAY`"
        },
        {
          "name": "comment_status",
          "type": "`$STRING`"
        },
        {
          "name": "content",
          "type": "`$OBJECT`"
        },
        {
          "name": "date",
          "type": "`$STRING`"
        },
        {
          "name": "date_gmt",
          "type": "`$STRING`"
        },
        {
          "name": "excerpt",
          "type": "`$OBJECT`"
        },
        {
          "name": "featured_media",
          "type": "`$INTEGER`"
        },
        {
          "name": "format",
          "type": "`$STRING`"
        },
        {
          "name": "guid",
          "type": "`$OBJECT`"
        },
        {
          "name": "id",
          "type": "`$INTEGER`"
        },
        {
          "name": "link",
          "type": "`$STRING`"
        },
        {
          "name": "meta",
          "type": "`$OBJECT`"
        },
        {
          "name": "modified",
          "type": "`$STRING`"
        },
        {
          "name": "modified_gmt",
          "type": "`$STRING`"
        },
        {
          "name": "ping_status",
          "type": "`$STRING`"
        },
        {
          "name": "slug",
          "type": "`$STRING`"
        },
        {
          "name": "status",
          "type": "`$STRING`"
        },
        {
          "name": "sticky",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "tags",
          "type": "`$ARRAY`"
        },
        {
          "name": "template",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$OBJECT`"
        },
        {
          "name": "type",
          "type": "`$STRING`"
        }
      ],
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
              "parts": [
                "posts"
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
              }
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
              "parts": [
                "posts",
                "{id}"
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
              }
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
  config
}

