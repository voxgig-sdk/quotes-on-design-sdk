# QuotesOnDesign SDK exists test

import pytest
from quotesondesign_sdk import QuotesOnDesignSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = QuotesOnDesignSDK.test(None, None)
        assert testsdk is not None
