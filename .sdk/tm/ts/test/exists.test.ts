
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { QuotesOnDesignSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await QuotesOnDesignSDK.test()
    equal(null !== testsdk, true)
  })

})
