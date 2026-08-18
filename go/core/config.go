package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "QuotesOnDesign",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://quotesondesign.com/wp-json/wp/v2",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"post": map[string]any{},
			},
		},
		"entity": map[string]any{
			"post": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "author",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "categories",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "comment_status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date_gmt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "excerpt",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "featured_media",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "format",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "guid",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "link",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "meta",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "modified",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modified_gmt",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ping_status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sticky",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "tags",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "template",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"type": "`$STRING`",
					},
				},
				"name": "post",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "embed",
											"orig": "embed",
											"type": "`$BOOLEAN`",
										},
										map[string]any{
											"example": "date",
											"kind": "query",
											"name": "orderby",
											"orig": "orderby",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/posts/",
								"parts": []any{
									"posts",
								},
								"select": map[string]any{
									"exist": []any{
										"embed",
										"orderby",
										"page",
										"per_page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "embed",
											"orig": "embed",
											"type": "`$BOOLEAN`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/posts/{id}",
								"parts": []any{
									"posts",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"embed",
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
