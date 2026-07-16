<?php
declare(strict_types=1);

// QuotesOnDesign SDK base feature

class QuotesOnDesignBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(QuotesOnDesignContext $ctx, array $options): void {}
    public function PostConstruct(QuotesOnDesignContext $ctx): void {}
    public function PostConstructEntity(QuotesOnDesignContext $ctx): void {}
    public function SetData(QuotesOnDesignContext $ctx): void {}
    public function GetData(QuotesOnDesignContext $ctx): void {}
    public function GetMatch(QuotesOnDesignContext $ctx): void {}
    public function SetMatch(QuotesOnDesignContext $ctx): void {}
    public function PrePoint(QuotesOnDesignContext $ctx): void {}
    public function PreSpec(QuotesOnDesignContext $ctx): void {}
    public function PreRequest(QuotesOnDesignContext $ctx): void {}
    public function PreResponse(QuotesOnDesignContext $ctx): void {}
    public function PreResult(QuotesOnDesignContext $ctx): void {}
    public function PreDone(QuotesOnDesignContext $ctx): void {}
    public function PreUnexpected(QuotesOnDesignContext $ctx): void {}
}
