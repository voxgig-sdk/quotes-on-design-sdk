-- Typed models for the QuotesOnDesign SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Post
---@field author? number
---@field category? table
---@field comment_status? string
---@field content? table
---@field date? string
---@field date_gmt? string
---@field excerpt? table
---@field featured_media? number
---@field format? string
---@field guid? table
---@field id? number
---@field link? string
---@field meta? table
---@field modified? string
---@field modified_gmt? string
---@field ping_status? string
---@field slug? string
---@field status? string
---@field sticky? boolean
---@field tag? table
---@field template? string
---@field title? table
---@field type? string

---@class PostLoadMatch
---@field id number

---@class PostListMatch

local M = {}

return M
