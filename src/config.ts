import Convict from "convict";

export const config = Convict({
  jkuHeaderValue: {
    arg: "jkuHeaderValue",
    default: "https://localhost:3000/jwks",
    env: "JKU_HEADER_VALUE",
    format: String,
    nullable: true,
    doc: "If defined the value for the JKU header will be set to this value. If not defined the header will not be set.",
  },
  jwksOrigin: {
    arg: "jwksOrigin",
    default: null as any as string,
    env: "JWKS_BASE",
    format: String,
    nullable: true,
    doc: "The origin for the certificate",
  },
  jwksPath: {
    arg: "jwksPath",
    default: "/.well-known/jwks.json",
    env: "JWKS_PATH",
    format: String,
    doc: "The path to the JWKS endpoint",
  },
});
