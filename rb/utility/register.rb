# QuotesOnDesign SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

QuotesOnDesignUtility.registrar = ->(u) {
  u.clean = QuotesOnDesignUtilities::Clean
  u.done = QuotesOnDesignUtilities::Done
  u.make_error = QuotesOnDesignUtilities::MakeError
  u.feature_add = QuotesOnDesignUtilities::FeatureAdd
  u.feature_hook = QuotesOnDesignUtilities::FeatureHook
  u.feature_init = QuotesOnDesignUtilities::FeatureInit
  u.fetcher = QuotesOnDesignUtilities::Fetcher
  u.make_fetch_def = QuotesOnDesignUtilities::MakeFetchDef
  u.make_context = QuotesOnDesignUtilities::MakeContext
  u.make_options = QuotesOnDesignUtilities::MakeOptions
  u.make_request = QuotesOnDesignUtilities::MakeRequest
  u.make_response = QuotesOnDesignUtilities::MakeResponse
  u.make_result = QuotesOnDesignUtilities::MakeResult
  u.make_point = QuotesOnDesignUtilities::MakePoint
  u.make_spec = QuotesOnDesignUtilities::MakeSpec
  u.make_url = QuotesOnDesignUtilities::MakeUrl
  u.param = QuotesOnDesignUtilities::Param
  u.prepare_auth = QuotesOnDesignUtilities::PrepareAuth
  u.prepare_body = QuotesOnDesignUtilities::PrepareBody
  u.prepare_headers = QuotesOnDesignUtilities::PrepareHeaders
  u.prepare_method = QuotesOnDesignUtilities::PrepareMethod
  u.prepare_params = QuotesOnDesignUtilities::PrepareParams
  u.prepare_path = QuotesOnDesignUtilities::PreparePath
  u.prepare_query = QuotesOnDesignUtilities::PrepareQuery
  u.graphql_body = QuotesOnDesignUtilities::GraphqlBody
  u.graphql_errors = QuotesOnDesignUtilities::GraphqlErrors
  u.result_basic = QuotesOnDesignUtilities::ResultBasic
  u.result_body = QuotesOnDesignUtilities::ResultBody
  u.result_headers = QuotesOnDesignUtilities::ResultHeaders
  u.transform_request = QuotesOnDesignUtilities::TransformRequest
  u.transform_response = QuotesOnDesignUtilities::TransformResponse
}
