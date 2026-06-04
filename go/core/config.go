package core

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
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "category",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "comment_status",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "content",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "date",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "date_gmt",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "excerpt",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "featured_media",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "format",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "guid",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "link",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "meta",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "modified",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "modified_gmt",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "ping_status",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "slug",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 16,
					},
					map[string]any{
						"name": "status",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 17,
					},
					map[string]any{
						"name": "sticky",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 18,
					},
					map[string]any{
						"name": "tag",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 19,
					},
					map[string]any{
						"name": "template",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 20,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 21,
					},
					map[string]any{
						"name": "type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 22,
					},
				},
				"name": "post",
				"op": map[string]any{
					"list": map[string]any{
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
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
										map[string]any{
											"example": "date",
											"kind": "query",
											"name": "orderby",
											"orig": "orderby",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "per_page",
											"orig": "per_page",
											"reqd": false,
											"type": "`$INTEGER`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
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
											"active": true,
										},
									},
									"query": []any{
										map[string]any{
											"example": false,
											"kind": "query",
											"name": "embed",
											"orig": "embed",
											"reqd": false,
											"type": "`$BOOLEAN`",
											"active": true,
										},
									},
								},
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
