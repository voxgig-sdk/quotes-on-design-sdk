<?php
declare(strict_types=1);

// QuotesOnDesign SDK utility: result_body

class QuotesOnDesignResultBody
{
    public static function call(QuotesOnDesignContext $ctx): ?QuotesOnDesignResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
