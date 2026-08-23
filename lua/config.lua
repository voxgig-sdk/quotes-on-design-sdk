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
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["short"] = "The ID for the author of the post",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "categories",
            ["short"] = "The terms assigned to the post in the category taxonomy",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "comment_status",
            ["short"] = "Whether or not comments are open on the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "content",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "date",
            ["short"] = "The date the post was published, in the site's timezone",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "date_gmt",
            ["short"] = "The date the post was published, as GMT",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "excerpt",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "featured_media",
            ["short"] = "The ID of the featured media for the post",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "format",
            ["short"] = "The format for the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "guid",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the post",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "link",
            ["short"] = "URL to the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "meta",
            ["short"] = "Meta fields",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "modified",
            ["short"] = "The date the post was last modified, in the site's timezone",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "modified_gmt",
            ["short"] = "The date the post was last modified, as GMT",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "ping_status",
            ["short"] = "Whether or not the post can be pinged",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "slug",
            ["short"] = "An alphanumeric identifier for the post unique to its type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "status",
            ["short"] = "A named status for the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "sticky",
            ["short"] = "Whether or not the post should be treated as sticky",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "tags",
            ["short"] = "The terms assigned to the post in the post_tag taxonomy",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "template",
            ["short"] = "The theme file to use to display the post",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "title",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "type",
            ["short"] = "Type of post",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "post",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "embed",
                      ["orig"] = "embed",
                      ["type"] = "`$BOOLEAN`",
                    },
                    {
                      ["example"] = "date",
                      ["kind"] = "query",
                      ["name"] = "orderby",
                      ["orig"] = "orderby",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "per_page",
                      ["orig"] = "per_page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/posts/",
                ["parts"] = {
                  "posts",
                },
                ["select"] = {
                  ["exist"] = {
                    "embed",
                    "orderby",
                    "page",
                    "per_page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                  ["query"] = {
                    {
                      ["example"] = false,
                      ["kind"] = "query",
                      ["name"] = "embed",
                      ["orig"] = "embed",
                      ["type"] = "`$BOOLEAN`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/posts/{id}",
                ["parts"] = {
                  "posts",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "embed",
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
