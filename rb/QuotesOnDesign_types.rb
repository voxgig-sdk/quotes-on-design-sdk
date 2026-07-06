# frozen_string_literal: true

# Typed models for the QuotesOnDesign SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Post entity data model.
#
# @!attribute [rw] author
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] comment_status
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [Hash, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] date_gmt
#   @return [String, nil]
#
# @!attribute [rw] excerpt
#   @return [Hash, nil]
#
# @!attribute [rw] featured_media
#   @return [Integer, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] guid
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] modified
#   @return [String, nil]
#
# @!attribute [rw] modified_gmt
#   @return [String, nil]
#
# @!attribute [rw] ping_status
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] sticky
#   @return [Boolean, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] template
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Post = Struct.new(
  :author,
  :category,
  :comment_status,
  :content,
  :date,
  :date_gmt,
  :excerpt,
  :featured_media,
  :format,
  :guid,
  :id,
  :link,
  :meta,
  :modified,
  :modified_gmt,
  :ping_status,
  :slug,
  :status,
  :sticky,
  :tag,
  :template,
  :title,
  :type,
  keyword_init: true
)

# Request payload for Post#load.
#
# @!attribute [rw] id
#   @return [Integer]
PostLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Post#list.
#
# @!attribute [rw] author
#   @return [Integer, nil]
#
# @!attribute [rw] category
#   @return [Array, nil]
#
# @!attribute [rw] comment_status
#   @return [String, nil]
#
# @!attribute [rw] content
#   @return [Hash, nil]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] date_gmt
#   @return [String, nil]
#
# @!attribute [rw] excerpt
#   @return [Hash, nil]
#
# @!attribute [rw] featured_media
#   @return [Integer, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] guid
#   @return [Hash, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] link
#   @return [String, nil]
#
# @!attribute [rw] meta
#   @return [Hash, nil]
#
# @!attribute [rw] modified
#   @return [String, nil]
#
# @!attribute [rw] modified_gmt
#   @return [String, nil]
#
# @!attribute [rw] ping_status
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] sticky
#   @return [Boolean, nil]
#
# @!attribute [rw] tag
#   @return [Array, nil]
#
# @!attribute [rw] template
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [Hash, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
PostListMatch = Struct.new(
  :author,
  :category,
  :comment_status,
  :content,
  :date,
  :date_gmt,
  :excerpt,
  :featured_media,
  :format,
  :guid,
  :id,
  :link,
  :meta,
  :modified,
  :modified_gmt,
  :ping_status,
  :slug,
  :status,
  :sticky,
  :tag,
  :template,
  :title,
  :type,
  keyword_init: true
)

