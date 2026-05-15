<?php
declare(strict_types=1);

// QuotesOnDesign SDK utility: prepare_body

class QuotesOnDesignPrepareBody
{
    public static function call(QuotesOnDesignContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
