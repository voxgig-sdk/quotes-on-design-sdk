# QuotesOnDesign SDK configuration


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
            "test": {
        "options": {
          "active": False,
        },
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
            "short": "The ID for the author of the post",
            "type": "`$INTEGER`",
          },
          {
            "name": "categories",
            "short": "The terms assigned to the post in the category taxonomy",
            "type": "`$ARRAY`",
          },
          {
            "name": "comment_status",
            "short": "Whether or not comments are open on the post",
            "type": "`$STRING`",
          },
          {
            "name": "content",
            "type": "`$OBJECT`",
          },
          {
            "name": "date",
            "short": "The date the post was published, in the site's timezone",
            "type": "`$STRING`",
          },
          {
            "name": "date_gmt",
            "short": "The date the post was published, as GMT",
            "type": "`$STRING`",
          },
          {
            "name": "excerpt",
            "type": "`$OBJECT`",
          },
          {
            "name": "featured_media",
            "short": "The ID of the featured media for the post",
            "type": "`$INTEGER`",
          },
          {
            "name": "format",
            "short": "The format for the post",
            "type": "`$STRING`",
          },
          {
            "name": "guid",
            "type": "`$OBJECT`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the post",
            "type": "`$INTEGER`",
          },
          {
            "name": "link",
            "short": "URL to the post",
            "type": "`$STRING`",
          },
          {
            "name": "meta",
            "short": "Meta fields",
            "type": "`$OBJECT`",
          },
          {
            "name": "modified",
            "short": "The date the post was last modified, in the site's timezone",
            "type": "`$STRING`",
          },
          {
            "name": "modified_gmt",
            "short": "The date the post was last modified, as GMT",
            "type": "`$STRING`",
          },
          {
            "name": "ping_status",
            "short": "Whether or not the post can be pinged",
            "type": "`$STRING`",
          },
          {
            "name": "slug",
            "short": "An alphanumeric identifier for the post unique to its type",
            "type": "`$STRING`",
          },
          {
            "name": "status",
            "short": "A named status for the post",
            "type": "`$STRING`",
          },
          {
            "name": "sticky",
            "short": "Whether or not the post should be treated as sticky",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "tags",
            "short": "The terms assigned to the post in the post_tag taxonomy",
            "type": "`$ARRAY`",
          },
          {
            "name": "template",
            "short": "The theme file to use to display the post",
            "type": "`$STRING`",
          },
          {
            "name": "title",
            "type": "`$OBJECT`",
          },
          {
            "name": "type",
            "short": "Type of post",
            "type": "`$STRING`",
          },
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
                      "example": False,
                      "kind": "query",
                      "name": "embed",
                      "orig": "embed",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "example": "date",
                      "kind": "query",
                      "name": "orderby",
                      "orig": "orderby",
                      "type": "`$STRING`",
                    },
                    {
                      "example": 1,
                      "kind": "query",
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                    },
                    {
                      "example": 10,
                      "kind": "query",
                      "name": "per_page",
                      "orig": "per_page",
                      "type": "`$INTEGER`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/posts/",
                "parts": [
                  "posts",
                ],
                "select": {
                  "exist": [
                    "embed",
                    "orderby",
                    "page",
                    "per_page",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
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
                      "reqd": True,
                      "type": "`$INTEGER`",
                    },
                  ],
                  "query": [
                    {
                      "example": False,
                      "kind": "query",
                      "name": "embed",
                      "orig": "embed",
                      "type": "`$BOOLEAN`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/posts/{id}",
                "parts": [
                  "posts",
                  "{id}",
                ],
                "select": {
                  "exist": [
                    "embed",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
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
