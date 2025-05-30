/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query Posts($first: Int, $cursor: String) {\n    posts(order: RANKING, first: $first, after: $cursor) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          tagline\n          description\n          votesCount\n          featuredAt\n          thumbnail {\n            url\n          }\n          makers {\n            name\n            followers {\n              totalCount\n            }\n            following {\n              totalCount\n            }\n            madePosts {\n              totalCount\n            }\n            twitterUsername\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n": typeof types.PostsDocument,
    "\n  query todayPosts($first: Int, $cursor: String) {\n    posts(order: NEWEST, first: $first, after: $cursor) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          tagline\n          description\n          votesCount\n          featuredAt\n          thumbnail {\n            url\n          }\n          makers {\n            name\n            followers {\n              totalCount\n            }\n            following {\n              totalCount\n            }\n            madePosts {\n              totalCount\n            }\n            twitterUsername\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n": typeof types.TodayPostsDocument,
};
const documents: Documents = {
    "\n  query Posts($first: Int, $cursor: String) {\n    posts(order: RANKING, first: $first, after: $cursor) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          tagline\n          description\n          votesCount\n          featuredAt\n          thumbnail {\n            url\n          }\n          makers {\n            name\n            followers {\n              totalCount\n            }\n            following {\n              totalCount\n            }\n            madePosts {\n              totalCount\n            }\n            twitterUsername\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n": types.PostsDocument,
    "\n  query todayPosts($first: Int, $cursor: String) {\n    posts(order: NEWEST, first: $first, after: $cursor) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          tagline\n          description\n          votesCount\n          featuredAt\n          thumbnail {\n            url\n          }\n          makers {\n            name\n            followers {\n              totalCount\n            }\n            following {\n              totalCount\n            }\n            madePosts {\n              totalCount\n            }\n            twitterUsername\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n": types.TodayPostsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Posts($first: Int, $cursor: String) {\n    posts(order: RANKING, first: $first, after: $cursor) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          tagline\n          description\n          votesCount\n          featuredAt\n          thumbnail {\n            url\n          }\n          makers {\n            name\n            followers {\n              totalCount\n            }\n            following {\n              totalCount\n            }\n            madePosts {\n              totalCount\n            }\n            twitterUsername\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query Posts($first: Int, $cursor: String) {\n    posts(order: RANKING, first: $first, after: $cursor) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          tagline\n          description\n          votesCount\n          featuredAt\n          thumbnail {\n            url\n          }\n          makers {\n            name\n            followers {\n              totalCount\n            }\n            following {\n              totalCount\n            }\n            madePosts {\n              totalCount\n            }\n            twitterUsername\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query todayPosts($first: Int, $cursor: String) {\n    posts(order: NEWEST, first: $first, after: $cursor) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          tagline\n          description\n          votesCount\n          featuredAt\n          thumbnail {\n            url\n          }\n          makers {\n            name\n            followers {\n              totalCount\n            }\n            following {\n              totalCount\n            }\n            madePosts {\n              totalCount\n            }\n            twitterUsername\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n"): (typeof documents)["\n  query todayPosts($first: Int, $cursor: String) {\n    posts(order: NEWEST, first: $first, after: $cursor) {\n      totalCount\n      edges {\n        node {\n          id\n          name\n          tagline\n          description\n          votesCount\n          featuredAt\n          thumbnail {\n            url\n          }\n          makers {\n            name\n            followers {\n              totalCount\n            }\n            following {\n              totalCount\n            }\n            madePosts {\n              totalCount\n            }\n            twitterUsername\n          }\n        }\n      }\n      pageInfo {\n        endCursor\n        startCursor\n        hasNextPage\n        hasPreviousPage\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;