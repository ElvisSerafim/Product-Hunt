"use client";
import { HttpLink, ApolloLink, concat } from "@apollo/client";
import { PRODUCT_HUNT_ACCESS_TOKEN_COOKIE } from "@/utils/constants";
import { ApolloClient, InMemoryCache } from "@apollo/client-integration-nextjs";
import { getCookie } from "cookies-next";
import { relayStylePagination } from "@apollo/client/utilities";

export function useApolloClient() {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_PRODUCT_HUNT_BASE_URL}/v2/api/graphql`,
  });

  const authMiddleware = new ApolloLink((operation, forward) => {
    const token = getCookie(PRODUCT_HUNT_ACCESS_TOKEN_COOKIE);

    try {
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : "",
        },
      });
    } catch (err) {
      console.warn("Error parsing token from cookies:", err);
    }

    return forward(operation);
  });

  return new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            posts: relayStylePagination(["order"]),
          },
        },
      },
    }),
  });
}
