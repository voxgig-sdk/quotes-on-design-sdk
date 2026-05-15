<?php
declare(strict_types=1);

// QuotesOnDesign SDK utility: result_headers

class QuotesOnDesignResultHeaders
{
    public static function call(QuotesOnDesignContext $ctx): ?QuotesOnDesignResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
