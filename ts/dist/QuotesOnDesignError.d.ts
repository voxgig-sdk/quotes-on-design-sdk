import { Context } from './Context';
declare class QuotesOnDesignError extends Error {
    isQuotesOnDesignError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { QuotesOnDesignError };
