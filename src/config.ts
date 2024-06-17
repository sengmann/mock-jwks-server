import Convict from "convict";

export const config = Convict({
  jkuHeaderValue: {
    arg: "jkuHeaderValue",
    default: "https://localhost:3000/jwks",
    env: "JKU_HEADER_VALUE",
    format: String,
  },
  jwksBase: {
    arg: "jwksBase",
    default: undefined as any as string,
    env: "JWKS_BASE",
    format: String,
  },
  jwksPath: {
    arg: "jwksPath",
    default: "/.well-known/jwks.json",
  },
});
