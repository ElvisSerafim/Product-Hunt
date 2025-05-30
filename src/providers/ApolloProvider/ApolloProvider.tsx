"use client";

import { useApolloClient } from "@/graphql/clients/ApolloClient";
import { ApolloNextAppProvider } from "@apollo/client-integration-nextjs";

export function ApolloProvider({ children }: React.PropsWithChildren) {
  const makeClient = useApolloClient();
  return (
    <ApolloNextAppProvider makeClient={() => makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
