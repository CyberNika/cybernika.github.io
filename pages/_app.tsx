import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import { NormalLayout } from "@/layouts";

import "@/styles/globals.css";
import "@/styles/home.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout || ((page) => <NormalLayout>{page}</NormalLayout>);

  return getLayout(<Component {...pageProps} />);
}

export default appWithTranslation(MyApp as any);
