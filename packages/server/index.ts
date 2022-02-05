import express from "express";
import proxy from "express-http-proxy";
import cors from "cors";

const TESTNET_API_PORT = process.env.TESTNET_API_PORT;
export const TESTNET_API = `http://localhost:${TESTNET_API_PORT}`;
const app = express();
const port = process.env.PORT ?? 3001;

app.use(cors());

app.use('/', proxy(TESTNET_API));

app.listen(port, () => {
  console.log(`Henesis API Proxy listening at http://localhost:${port}`);
});
