package voxgigquotesondesignsdk

import (
	"github.com/voxgig-sdk/quotes-on-design-sdk/go/core"
	"github.com/voxgig-sdk/quotes-on-design-sdk/go/entity"
	"github.com/voxgig-sdk/quotes-on-design-sdk/go/feature"
	_ "github.com/voxgig-sdk/quotes-on-design-sdk/go/utility"
)

// Type aliases preserve external API.
type QuotesOnDesignSDK = core.QuotesOnDesignSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type QuotesOnDesignEntity = core.QuotesOnDesignEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type QuotesOnDesignError = core.QuotesOnDesignError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewPostEntityFunc = func(client *core.QuotesOnDesignSDK, entopts map[string]any) core.QuotesOnDesignEntity {
		return entity.NewPostEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewQuotesOnDesignSDK = core.NewQuotesOnDesignSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewQuotesOnDesignSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *QuotesOnDesignSDK  { return NewQuotesOnDesignSDK(nil) }
func Test() *QuotesOnDesignSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
