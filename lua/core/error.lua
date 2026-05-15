-- QuotesOnDesign SDK error

local QuotesOnDesignError = {}
QuotesOnDesignError.__index = QuotesOnDesignError


function QuotesOnDesignError.new(code, msg, ctx)
  local self = setmetatable({}, QuotesOnDesignError)
  self.is_sdk_error = true
  self.sdk = "QuotesOnDesign"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function QuotesOnDesignError:error()
  return self.msg
end


function QuotesOnDesignError:__tostring()
  return self.msg
end


return QuotesOnDesignError
