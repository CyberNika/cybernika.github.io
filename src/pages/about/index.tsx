import React from "react";
import { Link } from "gatsby";

import Layout from "@/components/Layout";
import Helmet from "@/components/Helmet";
import ME from "@/assets/images/me.jpg";

import "./index.less";

const About = () => {
  return (
    <>
      <Helmet title="关于我" />

      <Layout>
        <div className="container about-container">
          <div className="about-content animate__animated animate__fadeIn animate__slow">
            <div className="about-photo-container">
              <img src={ME} className="about-photo" />
            </div>

            <div className="about-main serif">
              <p>
                我是「赛博·尼卡」，在用的 ID 是 CyberNika。
              </p>
              <p>
                我在十三朝古都洛阳出生，现和女朋友居住在北京。我们养了只可爱的蓝白，叫做「发财」。未来我们还会拥有自己的狗子，可能是柯基或是哈士奇。
              </p>
              <p>
                我本科毕业于西安电子科技大学，就读智能科学与技术专业。
              </p>
              <p>
                我是一名软件开发工程师，人总是想要改变和突破，试着做些更有趣、更有挑战的事情。
              </p>
              <p>
                你可以给我
                <Link to="/#say-hi" className="bold">
                  留言
                </Link>
                ，也可以通过电子邮箱{" "}
                <a href="mailto:cybernika.net@gmail.com">cybernika.net@gmail.com</a>。希望我们有机会可以聊一聊。
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
