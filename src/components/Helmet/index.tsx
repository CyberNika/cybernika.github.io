import React, { FC } from "react";
import { Helmet as ReactHelmet } from "react-helmet";

interface HelmetProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

const TITLE = "你好 · 世界 | 你好 · 未来";

const Helmet: FC<HelmetProps> = ({ title = TITLE, children }) => {
  return (
    <ReactHelmet>
      <meta charSet="utf-8" />
      <title>{title}</title>

      {children}
    </ReactHelmet>
  );
};

export default Helmet;
