# QuotesOnDesign SDK utility: make_context
require_relative '../core/context'
module QuotesOnDesignUtilities
  MakeContext = ->(ctxmap, basectx) {
    QuotesOnDesignContext.new(ctxmap, basectx)
  }
end
