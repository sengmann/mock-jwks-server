# mock-jwks-server

Testing JWKS is a pain. This is a simple server that serves a JWKS for testing purposes. It is based
on [mock-jwks](https://www.npmjs.com/package/mock-jwks).

## Usage

You can run the server directly with bun.

```bash
bun run start
```

Can be used with Docker as well.

```bash
docker run -p 3000:3000 sirion182/mock-jwks-server:tagname
```

When started the server will serve the JWKS at the JWKS_PATH like `http://localhost:3000/.well-known/jwks.json`.

To sign a token use the `/sign` endpoint. The endpoint expects a POST request with a JSON body containing the token. It
will return a signed token.

```bash
curl -X POST \
     -H 'Content-Type: application/json' \
     -d '{ "title":"foo","body":"bar", "id": 1, ' \
     localhost:3000/sign
```

## Configuration

| name           | env              | arg            | doc                                                                                                           | nullab  | default                       |
|----------------|------------------|----------------|---------------------------------------------------------------------------------------------------------------|---------|-------------------------------|
| jkuHeaderValue | JKU_HEADER_VALUE | jkuHeaderValue | If defined the value for the JKU header will be set to this value. If not defined the header will not be set. | unknown | "https://localhost:3000/jwks" |
| jwksOrigin     | JWKS_BASE        | jwksOrigin     | The origin for the certificate                                                                                | unknown | null                          |
| jwksPath       | JWKS_PATH        | jwksPath       | The path to the JWKS endpoint                                                                                 | unknown | "/.well-known/jwks.json"      |
