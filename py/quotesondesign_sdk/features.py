# QuotesOnDesign SDK feature factory

from quotesondesign_sdk.feature.base_feature import QuotesOnDesignBaseFeature
from quotesondesign_sdk.feature.ratelimit_feature import QuotesOnDesignRatelimitFeature
from quotesondesign_sdk.feature.retry_feature import QuotesOnDesignRetryFeature
from quotesondesign_sdk.feature.test_feature import QuotesOnDesignTestFeature
from quotesondesign_sdk.feature.timeout_feature import QuotesOnDesignTimeoutFeature


_FEATURES = {
    "base": lambda: QuotesOnDesignBaseFeature(),
    "ratelimit": lambda: QuotesOnDesignRatelimitFeature(),
    "retry": lambda: QuotesOnDesignRetryFeature(),
    "test": lambda: QuotesOnDesignTestFeature(),
    "timeout": lambda: QuotesOnDesignTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
