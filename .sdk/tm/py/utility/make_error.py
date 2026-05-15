# QuotesOnDesign SDK utility: make_error

from __future__ import annotations
from core.operation import QuotesOnDesignOperation
from core.result import QuotesOnDesignResult
from core.control import QuotesOnDesignControl
from core.error import QuotesOnDesignError


def make_error_util(ctx, err):
    if ctx is None:
        from core.context import QuotesOnDesignContext
        ctx = QuotesOnDesignContext({}, None)

    op = ctx.op
    if op is None:
        op = QuotesOnDesignOperation({})
    opname = op.name
    if opname == "" or opname == "_":
        opname = "unknown operation"

    result = ctx.result
    if result is None:
        result = QuotesOnDesignResult({})
    result.ok = False

    if err is None:
        err = result.err
    if err is None:
        err = ctx.make_error("unknown", "unknown error")

    errmsg = ""
    if isinstance(err, QuotesOnDesignError):
        errmsg = err.msg
    elif hasattr(err, "msg") and err.msg is not None:
        errmsg = err.msg
    elif isinstance(err, str):
        errmsg = err
    else:
        errmsg = str(err)

    msg = "QuotesOnDesignSDK: " + opname + ": " + errmsg
    msg = ctx.utility.clean(ctx, msg)

    result.err = None

    spec = ctx.spec

    if ctx.ctrl.explain is not None:
        ctx.ctrl.explain["err"] = {"message": msg}

    sdk_err = QuotesOnDesignError("", msg, ctx)
    sdk_err.result = ctx.utility.clean(ctx, result)
    sdk_err.spec = ctx.utility.clean(ctx, spec)

    if isinstance(err, QuotesOnDesignError):
        sdk_err.code = err.code

    ctx.ctrl.err = sdk_err

    if ctx.ctrl.throw_err is False:
        return result.resdata, None

    return None, sdk_err
