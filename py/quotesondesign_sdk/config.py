# QuotesOnDesign SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "QuotesOnDesign",
            "slug": "quotes-on-design",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://quotesondesign.com/wp-json/wp/v2",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "post": {},
            },
        },
        "entity": {
      "post": {
        "fields": [
          {
            "name": "author",
            "title": "Author",
            "type": "`$INTEGER`",
            "short": "The ID for the author of the post",
          },
          {
            "name": "categories",
            "title": "Categories",
            "type": "`$ARRAY`",
            "short": "The terms assigned to the post in the category taxonomy",
          },
          {
            "name": "comment_status",
            "title": "Comment Status",
            "type": "`$STRING`",
            "short": "Whether or not comments are open on the post",
          },
          {
            "name": "content",
            "title": "Content",
            "type": "`$OBJECT`",
          },
          {
            "name": "date",
            "title": "Date",
            "type": "`$STRING`",
            "short": "The date the post was published, in the site's timezone",
            "format": "date-time",
          },
          {
            "name": "date_gmt",
            "title": "Date Gmt",
            "type": "`$STRING`",
            "short": "The date the post was published, as GMT",
            "format": "date-time",
          },
          {
            "name": "excerpt",
            "title": "Excerpt",
            "type": "`$OBJECT`",
          },
          {
            "name": "featured_media",
            "title": "Featured Media",
            "type": "`$INTEGER`",
            "short": "The ID of the featured media for the post",
          },
          {
            "name": "format",
            "title": "Format",
            "type": "`$STRING`",
            "short": "The format for the post",
          },
          {
            "name": "guid",
            "title": "Guid",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$INTEGER`",
            "short": "Unique identifier for the post",
          },
          {
            "name": "link",
            "title": "Link",
            "type": "`$STRING`",
            "short": "URL to the post",
            "format": "uri",
          },
          {
            "name": "meta",
            "title": "Meta",
            "type": "`$OBJECT`",
            "short": "Meta fields",
          },
          {
            "name": "modified",
            "title": "Modified",
            "type": "`$STRING`",
            "short": "The date the post was last modified, in the site's timezone",
            "format": "date-time",
          },
          {
            "name": "modified_gmt",
            "title": "Modified Gmt",
            "type": "`$STRING`",
            "short": "The date the post was last modified, as GMT",
            "format": "date-time",
          },
          {
            "name": "ping_status",
            "title": "Ping Status",
            "type": "`$STRING`",
            "short": "Whether or not the post can be pinged",
          },
          {
            "name": "slug",
            "title": "Slug",
            "type": "`$STRING`",
            "short": "An alphanumeric identifier for the post unique to its type",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "A named status for the post",
          },
          {
            "name": "sticky",
            "title": "Sticky",
            "type": "`$BOOLEAN`",
            "short": "Whether or not the post should be treated as sticky",
          },
          {
            "name": "tags",
            "title": "Tags",
            "type": "`$ARRAY`",
            "short": "The terms assigned to the post in the post_tag taxonomy",
          },
          {
            "name": "template",
            "title": "Template",
            "type": "`$STRING`",
            "short": "The theme file to use to display the post",
          },
          {
            "name": "title",
            "title": "Title",
            "type": "`$OBJECT`",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "short": "Type of post",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "post",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/posts/",
                "segments": [
                  {
                    "lit": "posts",
                  },
                ],
                "parts": [
                  "posts",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "embed",
                      "orig": "embed",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                    {
                      "name": "orderby",
                      "orig": "orderby",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "date",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 1,
                    },
                    {
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                      "example": 10,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "embed",
                    "orderby",
                    "page",
                    "per_page",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/posts/{id}",
                "segments": [
                  {
                    "lit": "posts",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "posts",
                  "{id}",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$INTEGER`",
                      "kind": "param",
                      "reqd": True,
                    },
                  ],
                  "query": [
                    {
                      "name": "embed",
                      "orig": "embed",
                      "type": "`$BOOLEAN`",
                      "kind": "query",
                      "example": False,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "embed",
                    "id",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
