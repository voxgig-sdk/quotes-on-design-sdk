// Typed models for the QuotesOnDesign SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Post {
  author?: number
  category?: any[]
  comment_status?: string
  content?: Record<string, any>
  date?: string
  date_gmt?: string
  excerpt?: Record<string, any>
  featured_media?: number
  format?: string
  guid?: Record<string, any>
  id?: number
  link?: string
  meta?: Record<string, any>
  modified?: string
  modified_gmt?: string
  ping_status?: string
  slug?: string
  status?: string
  sticky?: boolean
  tag?: any[]
  template?: string
  title?: Record<string, any>
  type?: string
}

export interface PostLoadMatch {
  id: number
}

export type PostListMatch = Partial<Post>

