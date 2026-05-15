<?php
declare(strict_types=1);

// QuotesOnDesign SDK utility: feature_add

class QuotesOnDesignFeatureAdd
{
    public static function call(QuotesOnDesignContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
