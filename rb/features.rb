# QuotesOnDesign SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module QuotesOnDesignFeatures
  def self.make_feature(name)
    case name
    when "base"
      QuotesOnDesignBaseFeature.new
    when "ratelimit"
      QuotesOnDesignRatelimitFeature.new
    when "retry"
      QuotesOnDesignRetryFeature.new
    when "test"
      QuotesOnDesignTestFeature.new
    when "timeout"
      QuotesOnDesignTimeoutFeature.new
    else
      QuotesOnDesignBaseFeature.new
    end
  end
end
