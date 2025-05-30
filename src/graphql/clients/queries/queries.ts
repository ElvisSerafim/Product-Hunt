import { gql } from "@apollo/client";

export const TODAY_POSTS_QUERY = gql`
  query todayPosts {
    posts {
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
    }
  }
`;
