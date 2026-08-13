# QuotesOnDesign SDK feature factory

from quotesondesign_sdk.feature.base_feature import QuotesOnDesignBaseFeature
from quotesondesign_sdk.feature.test_feature import QuotesOnDesignTestFeature


def _make_feature(name):
    features = {
        "base": lambda: QuotesOnDesignBaseFeature(),
        "test": lambda: QuotesOnDesignTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
