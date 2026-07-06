<?php
declare(strict_types=1);

// Typed models for the QuotesOnDesign SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Post entity data model. */
class Post
{
    public ?int $author = null;
    public ?array $category = null;
    public ?string $comment_status = null;
    public ?array $content = null;
    public ?string $date = null;
    public ?string $date_gmt = null;
    public ?array $excerpt = null;
    public ?int $featured_media = null;
    public ?string $format = null;
    public ?array $guid = null;
    public ?int $id = null;
    public ?string $link = null;
    public ?array $meta = null;
    public ?string $modified = null;
    public ?string $modified_gmt = null;
    public ?string $ping_status = null;
    public ?string $slug = null;
    public ?string $status = null;
    public ?bool $sticky = null;
    public ?array $tag = null;
    public ?string $template = null;
    public ?array $title = null;
    public ?string $type = null;
}

/** Request payload for Post#load. */
class PostLoadMatch
{
    public int $id;
}

/** Request payload for Post#list. */
class PostListMatch
{
    public ?int $author = null;
    public ?array $category = null;
    public ?string $comment_status = null;
    public ?array $content = null;
    public ?string $date = null;
    public ?string $date_gmt = null;
    public ?array $excerpt = null;
    public ?int $featured_media = null;
    public ?string $format = null;
    public ?array $guid = null;
    public ?int $id = null;
    public ?string $link = null;
    public ?array $meta = null;
    public ?string $modified = null;
    public ?string $modified_gmt = null;
    public ?string $ping_status = null;
    public ?string $slug = null;
    public ?string $status = null;
    public ?bool $sticky = null;
    public ?array $tag = null;
    public ?string $template = null;
    public ?array $title = null;
    public ?string $type = null;
}

