"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "post",
        "accessor": "Post",
        "op": "list",
        "method": "GET",
        "path": "/posts/",
        "args": [],
        "select": {
            "embed": "v1",
            "orderby": "v1",
            "page": "v1",
            "per_page": "v1"
        },
        "headers": [],
        "query": [
            "orderby",
            "per_page",
            "page",
            "_embed"
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
        "query": [
            "_embed"
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
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map