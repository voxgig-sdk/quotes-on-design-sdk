# QuotesOnDesign SDK utility: feature_add
module QuotesOnDesignUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
