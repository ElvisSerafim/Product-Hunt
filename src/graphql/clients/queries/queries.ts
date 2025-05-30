import { gql } from "@apollo/client";

export const TODAY_POSTS_QUERY = gql`
  query Posts($order: PostsOrder, $first: Int, $cursor: String) {
    posts(order: $order, first: $first, after: $cursor) {
      totalCount
      edges {
        node {
          id
          name
          tagline
          description
          votesCount
          featuredAt
          thumbnail {
            url
          }
          makers {
            name
            followers {
              totalCount
            }
            following {
              totalCount
            }
            madePosts {
              totalCount
            }
            twitterUsername
          }
        }
      }
      pageInfo {
        endCursor
        startCursor
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;
