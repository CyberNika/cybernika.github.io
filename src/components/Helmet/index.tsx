import React, { FC } from "react";
import { Helmet as ReactHelmet } from "react-helmet";

interface HelmetProps {
  title?: string;
  description?: string;
  keywords?: string[];
}

const TITLE = "CyberNika | 赛博·尼卡";

const Helmet: FC<HelmetProps> = ({ title = TITLE, children }) => {
  return (
    <ReactHelmet>
      <title>{title}</title>

      {children}
    </ReactHelmet>
  );
};

export default Helmet;
