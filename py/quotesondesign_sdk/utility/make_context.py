# QuotesOnDesign SDK utility: make_context

from quotesondesign_sdk.core.context import QuotesOnDesignContext


def make_context_util(ctxmap, basectx):
    return QuotesOnDesignContext(ctxmap, basectx)
