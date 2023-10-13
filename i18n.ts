import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  return {
    messages: {
      ...(await import(`./messages/${locale}/common.json`)).default,
      home: (await import(`./messages/${locale}/home.json`)).default,
    },
  };
});
