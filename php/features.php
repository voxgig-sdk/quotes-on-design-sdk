<?php
declare(strict_types=1);

// QuotesOnDesign SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class QuotesOnDesignFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new QuotesOnDesignBaseFeature();
            case "test":
                return new QuotesOnDesignTestFeature();
            default:
                return new QuotesOnDesignBaseFeature();
        }
    }
}
