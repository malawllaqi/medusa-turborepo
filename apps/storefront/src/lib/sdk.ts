import Medusa from "@medusajs/js-sdk";
import { env } from "../env";

let MEDUSA_BACKEND_URL = "http://localhost:9000";

if (env.NEXT_PUBLIC_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
}
export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: env.NODE_ENV === "development",
  publishableKey: env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY,
});
