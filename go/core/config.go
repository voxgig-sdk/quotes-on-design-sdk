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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Author",
						"type": "`$INTEGER`",
						"short": "The ID for the author of the post",
					},
					map[string]any{
						"name": "categories",
						"title": "Categories",
						"type": "`$ARRAY`",
						"short": "The terms assigned to the post in the category taxonomy",
					},
					map[string]any{
						"name": "comment_status",
						"title": "Comment Status",
						"type": "`$STRING`",
						"short": "Whether or not comments are open on the post",
					},
					map[string]any{
						"name": "content",
						"title": "Content",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "date",
						"title": "Date",
						"type": "`$STRING`",
						"short": "The date the post was published, in the site's timezone",
						"format": "date-time",
					},
					map[string]any{
						"name": "date_gmt",
						"title": "Date Gmt",
						"type": "`$STRING`",
						"short": "The date the post was published, as GMT",
						"format": "date-time",
					},
					map[string]any{
						"name": "excerpt",
						"title": "Excerpt",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "featured_media",
						"title": "Featured Media",
						"type": "`$INTEGER`",
						"short": "The ID of the featured media for the post",
					},
					map[string]any{
						"name": "format",
						"title": "Format",
						"type": "`$STRING`",
						"short": "The format for the post",
					},
					map[string]any{
						"name": "guid",
						"title": "Guid",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$INTEGER`",
						"short": "Unique identifier for the post",
					},
					map[string]any{
						"name": "link",
						"title": "Link",
						"type": "`$STRING`",
						"short": "URL to the post",
						"format": "uri",
					},
					map[string]any{
						"name": "meta",
						"title": "Meta",
						"type": "`$OBJECT`",
						"short": "Meta fields",
					},
					map[string]any{
						"name": "modified",
						"title": "Modified",
						"type": "`$STRING`",
						"short": "The date the post was last modified, in the site's timezone",
						"format": "date-time",
					},
					map[string]any{
						"name": "modified_gmt",
						"title": "Modified Gmt",
						"type": "`$STRING`",
						"short": "The date the post was last modified, as GMT",
						"format": "date-time",
					},
					map[string]any{
						"name": "ping_status",
						"title": "Ping Status",
						"type": "`$STRING`",
						"short": "Whether or not the post can be pinged",
					},
					map[string]any{
						"name": "slug",
						"title": "Slug",
						"type": "`$STRING`",
						"short": "An alphanumeric identifier for the post unique to its type",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "A named status for the post",
					},
					map[string]any{
						"name": "sticky",
						"title": "Sticky",
						"type": "`$BOOLEAN`",
						"short": "Whether or not the post should be treated as sticky",
					},
					map[string]any{
						"name": "tags",
						"title": "Tags",
						"type": "`$ARRAY`",
						"short": "The terms assigned to the post in the post_tag taxonomy",
					},
					map[string]any{
						"name": "template",
						"title": "Template",
						"type": "`$STRING`",
						"short": "The theme file to use to display the post",
					},
					map[string]any{
						"name": "title",
						"title": "Title",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"short": "Type of post",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "post",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/posts/",
								"segments": []any{
									map[string]any{
										"lit": "posts",
									},
								},
								"parts": []any{
									"posts",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "embed",
											"orig": "embed",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
										map[string]any{
											"name": "orderby",
											"orig": "orderby",
											"type": "`$STRING`",
											"kind": "query",
											"example": "date",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 1,
										},
										map[string]any{
											"name": "per_page",
											"orig": "per_page",
											"type": "`$INTEGER`",
											"kind": "query",
											"example": 10,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"embed",
										"orderby",
										"page",
										"per_page",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/posts/{id}",
								"segments": []any{
									map[string]any{
										"lit": "posts",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"posts",
									"{id}",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$INTEGER`",
											"kind": "param",
											"reqd": true,
										},
									},
									"query": []any{
										map[string]any{
											"name": "embed",
											"orig": "embed",
											"type": "`$BOOLEAN`",
											"kind": "query",
											"example": false,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"embed",
										"id",
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
