import { CodegenConfig } from "@graphql-codegen/cli";

import { GRAPHQL_API } from "./src/utils/constants";

const config: CodegenConfig = {
  schema: GRAPHQL_API,
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/state-management/graphql/api-generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql"
      }
    }
  },
  ignoreNoDocuments: true
};

export default config;
