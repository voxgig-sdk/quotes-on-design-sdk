# Typed models for the QuotesOnDesign SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Post:
    author: Optional[int] = None
    category: Optional[list] = None
    comment_status: Optional[str] = None
    content: Optional[dict] = None
    date: Optional[str] = None
    date_gmt: Optional[str] = None
    excerpt: Optional[dict] = None
    featured_media: Optional[int] = None
    format: Optional[str] = None
    guid: Optional[dict] = None
    id: Optional[int] = None
    link: Optional[str] = None
    meta: Optional[dict] = None
    modified: Optional[str] = None
    modified_gmt: Optional[str] = None
    ping_status: Optional[str] = None
    slug: Optional[str] = None
    status: Optional[str] = None
    sticky: Optional[bool] = None
    tag: Optional[list] = None
    template: Optional[str] = None
    title: Optional[dict] = None
    type: Optional[str] = None


@dataclass
class PostLoadMatch:
    id: int


@dataclass
class PostListMatch:
    author: Optional[int] = None
    category: Optional[list] = None
    comment_status: Optional[str] = None
    content: Optional[dict] = None
    date: Optional[str] = None
    date_gmt: Optional[str] = None
    excerpt: Optional[dict] = None
    featured_media: Optional[int] = None
    format: Optional[str] = None
    guid: Optional[dict] = None
    id: Optional[int] = None
    link: Optional[str] = None
    meta: Optional[dict] = None
    modified: Optional[str] = None
    modified_gmt: Optional[str] = None
    ping_status: Optional[str] = None
    slug: Optional[str] = None
    status: Optional[str] = None
    sticky: Optional[bool] = None
    tag: Optional[list] = None
    template: Optional[str] = None
    title: Optional[dict] = None
    type: Optional[str] = None

