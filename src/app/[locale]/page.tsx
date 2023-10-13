import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("home");
  return <h1>{t("hello.hi-i-am-stephen")}</h1>;
}
