
import { Context } from './Context'


class QuotesOnDesignError extends Error {

  isQuotesOnDesignError = true

  sdk = 'QuotesOnDesign'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  QuotesOnDesignError
}

