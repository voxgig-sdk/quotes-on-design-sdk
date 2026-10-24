import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "post",
    "accessor": "Post",
    "op": "list",
    "method": "GET",
    "path": "/posts/",
    "args": [],
    "select": {
      "embed": "v1",
      "orderby": "date",
      "page": 1,
      "per_page": 10
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "orderby",
      "per_page",
      "page",
      "_embed"
    ],
    "queryArgs": [
      {
        "name": "embed",
        "wire": "_embed"
      },
      {
        "name": "orderby",
        "wire": "orderby"
      },
      {
        "name": "page",
        "wire": "page"
      },
      {
        "name": "per_page",
        "wire": "per_page"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": [
      {
        "id": 1234,
        "date": "2023-01-15T10:30:00",
        "date_gmt": "2023-01-15T10:30:00",
        "modified": "2023-01-15T10:30:00",
        "modified_gmt": "2023-01-15T10:30:00",
        "slug": "sample-design-quote",
        "status": "publish",
        "type": "post",
        "link": "https://quotesondesign.com/sample-design-quote/",
        "title": {
          "rendered": "Author Name"
        },
        "content": {
          "rendered": "<p>Design is not just what it looks like and feels like. Design is how it works.</p>",
          "protected": false
        },
        "excerpt": {
          "rendered": "<p>Design is not just what it looks like and feels like.</p>",
          "protected": false
        }
      }
    ],
    "idField": "id"
  },
  {
    "entity": "post",
    "accessor": "Post",
    "op": "load",
    "method": "GET",
    "path": "/posts/{id}",
    "args": [
      {
        "name": "id",
        "wire": "id",
        "value": "p1"
      }
    ],
    "select": {
      "embed": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "_embed"
    ],
    "queryArgs": [
      {
        "name": "embed",
        "wire": "_embed"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "id": 1234,
      "date": "2023-01-15T10:30:00",
      "date_gmt": "2023-01-15T10:30:00",
      "modified": "2023-01-15T10:30:00",
      "modified_gmt": "2023-01-15T10:30:00",
      "slug": "sample-design-quote",
      "status": "publish",
      "type": "post",
      "link": "https://quotesondesign.com/sample-design-quote/",
      "title": {
        "rendered": "Author Name"
      },
      "content": {
        "rendered": "<p>Design is not just what it looks like and feels like. Design is how it works.</p>",
        "protected": false
      },
      "excerpt": {
        "rendered": "<p>Design is not just what it looks like and feels like.</p>",
        "protected": false
      }
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})
