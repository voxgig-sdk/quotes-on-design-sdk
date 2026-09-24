-- QuotesOnDesign SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "QuotesOnDesign",
      slug = "quotes-on-design",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["ratelimit"] = {
        ["options"] = {
          ["active"] = false,
          ["burst"] = 5,
          ["rate"] = 5,
        },
        ["optspec"] = {
          ["now"] = "`$FUNCTION`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["retry"] = {
        ["options"] = {
          ["active"] = false,
          ["factor"] = 2,
          ["maxDelay"] = 2000,
          ["minDelay"] = 50,
          ["retries"] = 2,
          ["statuses"] = {
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          },
        },
        ["optspec"] = {
          ["jitter"] = "`$BOOLEAN`",
          ["sleep"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["optspec"] = {
          ["entity"] = "`$MAP`",
          ["net"] = "`$MAP`",
        },
        ["strict"] = false,
        ["transport"] = "base",
      },
      ["timeout"] = {
        ["options"] = {
          ["active"] = false,
          ["ms"] = 30000,
        },
        ["optspec"] = {
          ["clearTimer"] = "`$FUNCTION`",
          ["setTimer"] = "`$FUNCTION`",
        },
        ["strict"] = false,
        ["transport"] = "wrap",
      },
    },
    options = {
      base = "https://quotesondesign.com/wp-json/wp/v2",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["post"] = {},
      },
    },
    entity = {
      ["post"] = {
        ["fields"] = {
          {
            ["name"] = "author",
            ["title"] = "Author",
            ["type"] = "`$INTEGER`",
            ["short"] = "The ID for the author of the post",
          },
          {
            ["name"] = "categories",
            ["title"] = "Categories",
            ["type"] = "`$ARRAY`",
            ["short"] = "The terms assigned to the post in the category taxonomy",
          },
          {
            ["name"] = "comment_status",
            ["title"] = "Comment Status",
            ["type"] = "`$STRING`",
            ["short"] = "Whether or not comments are open on the post",
          },
          {
            ["name"] = "content",
            ["title"] = "Content",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "date",
            ["title"] = "Date",
            ["type"] = "`$STRING`",
            ["short"] = "The date the post was published, in the site's timezone",
            ["format"] = "date-time",
          },
          {
            ["name"] = "date_gmt",
            ["title"] = "Date Gmt",
            ["type"] = "`$STRING`",
            ["short"] = "The date the post was published, as GMT",
            ["format"] = "date-time",
          },
          {
            ["name"] = "excerpt",
            ["title"] = "Excerpt",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "featured_media",
            ["title"] = "Featured Media",
            ["type"] = "`$INTEGER`",
            ["short"] = "The ID of the featured media for the post",
          },
          {
            ["name"] = "format",
            ["title"] = "Format",
            ["type"] = "`$STRING`",
            ["short"] = "The format for the post",
          },
          {
            ["name"] = "guid",
            ["title"] = "Guid",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["title"] = "Id",
            ["type"] = "`$INTEGER`",
            ["short"] = "Unique identifier for the post",
          },
          {
            ["name"] = "link",
            ["title"] = "Link",
            ["type"] = "`$STRING`",
            ["short"] = "URL to the post",
            ["format"] = "uri",
          },
          {
            ["name"] = "meta",
            ["title"] = "Meta",
            ["type"] = "`$OBJECT`",
            ["short"] = "Meta fields",
          },
          {
            ["name"] = "modified",
            ["title"] = "Modified",
            ["type"] = "`$STRING`",
            ["short"] = "The date the post was last modified, in the site's timezone",
            ["format"] = "date-time",
          },
          {
            ["name"] = "modified_gmt",
            ["title"] = "Modified Gmt",
            ["type"] = "`$STRING`",
            ["short"] = "The date the post was last modified, as GMT",
            ["format"] = "date-time",
          },
          {
            ["name"] = "ping_status",
            ["title"] = "Ping Status",
            ["type"] = "`$STRING`",
            ["short"] = "Whether or not the post can be pinged",
          },
          {
            ["name"] = "slug",
            ["title"] = "Slug",
            ["type"] = "`$STRING`",
            ["short"] = "An alphanumeric identifier for the post unique to its type",
          },
          {
            ["name"] = "status",
            ["title"] = "Status",
            ["type"] = "`$STRING`",
            ["short"] = "A named status for the post",
          },
          {
            ["name"] = "sticky",
            ["title"] = "Sticky",
            ["type"] = "`$BOOLEAN`",
            ["short"] = "Whether or not the post should be treated as sticky",
          },
          {
            ["name"] = "tags",
            ["title"] = "Tags",
            ["type"] = "`$ARRAY`",
            ["short"] = "The terms assigned to the post in the post_tag taxonomy",
          },
          {
            ["name"] = "template",
            ["title"] = "Template",
            ["type"] = "`$STRING`",
            ["short"] = "The theme file to use to display the post",
          },
          {
            ["name"] = "title",
            ["title"] = "Title",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "type",
            ["title"] = "Type",
            ["type"] = "`$STRING`",
            ["short"] = "Type of post",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "post",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/posts/",
                ["segments"] = {
                  {
                    ["lit"] = "posts",
                  },
                },
                ["parts"] = {
                  "posts",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["query"] = {
                    {
                      ["name"] = "embed",
                      ["orig"] = "embed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                    {
                      ["name"] = "orderby",
                      ["orig"] = "orderby",
                      ["type"] = "`$STRING`",
                      ["kind"] = "query",
                      ["example"] = "date",
                    },
                    {
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 1,
                    },
                    {
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "query",
                      ["example"] = 10,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "embed",
                    "orderby",
                    "page",
                    "per_page",
                  },
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/posts/{id}",
                ["segments"] = {
                  {
                    ["lit"] = "posts",
                  },
                  {
                    ["var"] = "id",
                  },
                },
                ["parts"] = {
                  "posts",
                  "{id}",
                },
                ["rename"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["args"] = {
                  ["params"] = {
                    {
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["type"] = "`$INTEGER`",
                      ["kind"] = "param",
                      ["reqd"] = true,
                    },
                  },
                  ["query"] = {
                    {
                      ["name"] = "embed",
                      ["orig"] = "embed",
                      ["type"] = "`$BOOLEAN`",
                      ["kind"] = "query",
                      ["example"] = false,
                    },
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "embed",
                    "id",
                  },
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
