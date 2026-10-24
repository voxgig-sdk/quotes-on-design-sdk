# QuotesOnDesign SDK utility: prepare_body
require_relative 'media'
module QuotesOnDesignUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return QuotesOnDesignUtilities.raw_body(ctx.reqdata) if QuotesOnDesignUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
