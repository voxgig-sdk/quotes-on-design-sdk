# QuotesOnDesign SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module QuotesOnDesignFeatures
  def self.make_feature(name)
    case name
    when "base"
      QuotesOnDesignBaseFeature.new
    when "test"
      QuotesOnDesignTestFeature.new
    else
      QuotesOnDesignBaseFeature.new
    end
  end
end
