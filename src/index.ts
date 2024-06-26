import { createJWKS, createKeyPair, signJwt } from "./tools";
import { serve } from "bun";
import { config } from "./config";

process.on("SIGINT", () => {
  console.log("Ctrl-C was pressed");
  process.exit();
});

console.log("starting server with config ", config.validate().get());

const keypair = createKeyPair();
const JWKS = createJWKS({
  ...keypair,
  jwksOrigin: config.get("jwksOrigin"),
});

const kid = () => JWKS.keys[0].kid;

const server = serve({
  async fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === config.get("jwksPath"))
      return new Response(JSON.stringify(JWKS));
    if (url.pathname === "/sign" && req.method === "POST") {
      const body = await req.json();
      return new Response(
        JSON.stringify(
          signJwt(
            keypair.privateKey,
            body,
            kid(),
            config.get("jkuHeaderValue"),
          ),
        ),
      );
    }
    return new Response("404!");
  },
});

console.log(`server listening on ${server.port}`);
