<?php
declare(strict_types=1);

// QuotesOnDesign SDK configuration

class QuotesOnDesignConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "QuotesOnDesign",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://quotesondesign.com/wp-json/wp/v2",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "post" => [],
                ],
            ],
            "entity" => [
        'post' => [
          'fields' => [
            [
              'name' => 'author',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'categories',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'comment_status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'content',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'date_gmt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'excerpt',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'featured_media',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'format',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'guid',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'id',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'link',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'meta',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'modified',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'modified_gmt',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ping_status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'slug',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'sticky',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'tags',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'template',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'type',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'post',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'embed',
                        'orig' => 'embed',
                        'type' => '`$BOOLEAN`',
                      ],
                      [
                        'example' => 'date',
                        'kind' => 'query',
                        'name' => 'orderby',
                        'orig' => 'orderby',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 10,
                        'kind' => 'query',
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/posts/',
                  'parts' => [
                    'posts',
                  ],
                  'select' => [
                    'exist' => [
                      'embed',
                      'orderby',
                      'page',
                      'per_page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$INTEGER`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => false,
                        'kind' => 'query',
                        'name' => 'embed',
                        'orig' => 'embed',
                        'type' => '`$BOOLEAN`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/posts/{id}',
                  'parts' => [
                    'posts',
                    '{id}',
                  ],
                  'select' => [
                    'exist' => [
                      'embed',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return QuotesOnDesignFeatures::make_feature($name);
    }
}
