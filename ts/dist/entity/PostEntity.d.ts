import { QuotesOnDesignEntityBase } from '../QuotesOnDesignEntityBase';
import type { QuotesOnDesignSDK } from '../QuotesOnDesignSDK';
import type { Control } from '../types';
import type { Post, PostLoadMatch, PostListMatch } from '../QuotesOnDesignTypes';
declare class PostEntity extends QuotesOnDesignEntityBase<Post> {
    constructor(client: QuotesOnDesignSDK, entopts: any);
    make(this: PostEntity): PostEntity;
    load(this: any, reqmatch?: PostLoadMatch, ctrl?: Control): Promise<PostEntity>;
    list(this: any, reqmatch?: PostListMatch, ctrl?: Control): Promise<PostEntity[]>;
}
export { PostEntity };
