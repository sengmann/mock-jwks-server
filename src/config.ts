import Convict from "convict";

export const config = Convict({
  jkuHeaderValue: {
    arg: "jkuHeaderValue",
    default: "https://localhost:3000/jwks",
    env: "JKU_HEADER_VALUE",
    format: String,
    doc: "If defined the value for the JKU header will be set to this value. If not defined the header will not be set.",
  },
  jwksOrigin: {
    arg: "jwksOrigin",
    default: undefined as any as string,
    env: "JWKS_BASE",
    format: String,
    doc: "The origin for the certificate",
  },
  jwksPath: {
    arg: "jwksPath",
    default: "/.well-known/jwks.json",
    env: "JWKS_PATH",
    doc: "The path to the JWKS endpoint",
  },
});
