
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { QuotesOnDesignSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = QuotesOnDesignSDK.test()
    equal(testsdk instanceof QuotesOnDesignSDK, true,
      'QuotesOnDesignSDK.test() must return a client synchronously')
  })

})
