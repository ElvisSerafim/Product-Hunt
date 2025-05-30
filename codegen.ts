import { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";
import { cookies } from "next/headers";

const config: CodegenConfig = {
  schema: {
    [`${process.env.NEXT_PUBLIC_PRODUCT_HUNT_BASE_URL}/v2/api/graphql`]: {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_DEV_TOKEN}`,
      },
    },
  },
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
