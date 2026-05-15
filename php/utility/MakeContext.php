<?php
declare(strict_types=1);

// QuotesOnDesign SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class QuotesOnDesignMakeContext
{
    public static function call(array $ctxmap, ?QuotesOnDesignContext $basectx): QuotesOnDesignContext
    {
        return new QuotesOnDesignContext($ctxmap, $basectx);
    }
}
