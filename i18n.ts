import { headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => ({
    messages: (await import(`@/messages/${locale}.json`)).default,
    timeZone: headers().get("x-time-zone") || "Asia/Taipei",
}));
