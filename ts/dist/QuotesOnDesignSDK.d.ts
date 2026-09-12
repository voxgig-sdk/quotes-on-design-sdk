import { PostEntity } from './entity/PostEntity';
export type * from './QuotesOnDesignTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { QuotesOnDesignEntityBase } from './QuotesOnDesignEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class QuotesOnDesignSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Post(entopts?: Record<string, any>): PostEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): QuotesOnDesignSDK;
    tester(testopts?: any, sdkopts?: any): QuotesOnDesignSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof QuotesOnDesignSDK;
export { stdutil, config, BaseFeature, QuotesOnDesignEntityBase, QuotesOnDesignSDK, SDK, };
