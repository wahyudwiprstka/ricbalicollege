import { getUserLocale } from "@/lib/locale";
import { getRequestConfig } from "next-intl/server";
export default getRequestConfig(async () => {
  const locale = getUserLocale() || "en";

  return {
    locale,
    messages: (await import(`../app/locales/${locale}/translation.json`))
      .default,
  };
});
