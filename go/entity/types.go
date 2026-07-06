// Typed models for the QuotesOnDesign SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Post is the typed data model for the post entity.
type Post struct {
	Author *int `json:"author,omitempty"`
	Category *[]any `json:"category,omitempty"`
	CommentStatus *string `json:"comment_status,omitempty"`
	Content *map[string]any `json:"content,omitempty"`
	Date *string `json:"date,omitempty"`
	DateGmt *string `json:"date_gmt,omitempty"`
	Excerpt *map[string]any `json:"excerpt,omitempty"`
	FeaturedMedia *int `json:"featured_media,omitempty"`
	Format *string `json:"format,omitempty"`
	Guid *map[string]any `json:"guid,omitempty"`
	Id *int `json:"id,omitempty"`
	Link *string `json:"link,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Modified *string `json:"modified,omitempty"`
	ModifiedGmt *string `json:"modified_gmt,omitempty"`
	PingStatus *string `json:"ping_status,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
	Sticky *bool `json:"sticky,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Template *string `json:"template,omitempty"`
	Title *map[string]any `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
}

// PostLoadMatch is the typed request payload for Post.LoadTyped.
type PostLoadMatch struct {
	Id int `json:"id"`
}

// PostListMatch is the typed request payload for Post.ListTyped.
type PostListMatch struct {
	Author *int `json:"author,omitempty"`
	Category *[]any `json:"category,omitempty"`
	CommentStatus *string `json:"comment_status,omitempty"`
	Content *map[string]any `json:"content,omitempty"`
	Date *string `json:"date,omitempty"`
	DateGmt *string `json:"date_gmt,omitempty"`
	Excerpt *map[string]any `json:"excerpt,omitempty"`
	FeaturedMedia *int `json:"featured_media,omitempty"`
	Format *string `json:"format,omitempty"`
	Guid *map[string]any `json:"guid,omitempty"`
	Id *int `json:"id,omitempty"`
	Link *string `json:"link,omitempty"`
	Meta *map[string]any `json:"meta,omitempty"`
	Modified *string `json:"modified,omitempty"`
	ModifiedGmt *string `json:"modified_gmt,omitempty"`
	PingStatus *string `json:"ping_status,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Status *string `json:"status,omitempty"`
	Sticky *bool `json:"sticky,omitempty"`
	Tag *[]any `json:"tag,omitempty"`
	Template *string `json:"template,omitempty"`
	Title *map[string]any `json:"title,omitempty"`
	Type *string `json:"type,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
