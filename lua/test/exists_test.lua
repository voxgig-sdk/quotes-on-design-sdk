-- QuotesOnDesign SDK exists test

local sdk = require("quotes-on-design_sdk")

describe("QuotesOnDesignSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
