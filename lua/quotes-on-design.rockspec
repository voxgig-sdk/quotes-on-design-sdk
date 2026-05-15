package = "voxgig-sdk-quotes-on-design"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/quotes-on-design-sdk.git"
}
description = {
  summary = "QuotesOnDesign SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["quotes-on-design_sdk"] = "quotes-on-design_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
