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
			"slug": "quotes-on-design",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"short": "The ID for the author of the post",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "categories",
						"short": "The terms assigned to the post in the category taxonomy",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "comment_status",
						"short": "Whether or not comments are open on the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "content",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "date",
						"short": "The date the post was published, in the site's timezone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date_gmt",
						"short": "The date the post was published, as GMT",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "excerpt",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "featured_media",
						"short": "The ID of the featured media for the post",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "format",
						"short": "The format for the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "guid",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the post",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "link",
						"short": "URL to the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "meta",
						"short": "Meta fields",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "modified",
						"short": "The date the post was last modified, in the site's timezone",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "modified_gmt",
						"short": "The date the post was last modified, as GMT",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ping_status",
						"short": "Whether or not the post can be pinged",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "slug",
						"short": "An alphanumeric identifier for the post unique to its type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "A named status for the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sticky",
						"short": "Whether or not the post should be treated as sticky",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "tags",
						"short": "The terms assigned to the post in the post_tag taxonomy",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "template",
						"short": "The theme file to use to display the post",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"short": "Type of post",
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
