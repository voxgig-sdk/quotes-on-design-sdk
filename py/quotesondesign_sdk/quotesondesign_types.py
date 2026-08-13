# Typed models for the QuotesOnDesign SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Post(TypedDict, total=False):
    author: int
    categories: list
    comment_status: str
    content: dict
    date: str
    date_gmt: str
    excerpt: dict
    featured_media: int
    format: str
    guid: dict
    id: int
    link: str
    meta: dict
    modified: str
    modified_gmt: str
    ping_status: str
    slug: str
    status: str
    sticky: bool
    tags: list
    template: str
    title: dict
    type: str


class PostLoadMatch(TypedDict):
    id: int


class PostListMatch(TypedDict, total=False):
    author: int
    categories: list
    comment_status: str
    content: dict
    date: str
    date_gmt: str
    excerpt: dict
    featured_media: int
    format: str
    guid: dict
    id: int
    link: str
    meta: dict
    modified: str
    modified_gmt: str
    ping_status: str
    slug: str
    status: str
    sticky: bool
    tags: list
    template: str
    title: dict
    type: str
