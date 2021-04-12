import React from "react";

import Layout from "@/components/Layout";
import Helmet from "@/components/Helmet";
import ME from "@/assets/images/me.jpg";

import "./index.less";

const About = () => {
  return (
    <>
      <Helmet title="关于" />

      <Layout>
        <div className="container about-container">
          <div className="about-content animate__animated animate__fadeIn animate__slow">
            <div className="about-photo-container">
              <img src={ME} className="about-photo" />
            </div>

            <div className="about-main serif">
              <p>
                我叫赵学兵，你可以叫我「雪饼」或是「Stephen」。在用的 ID 是
                heynext，意思是「你好，未来」，和「你好，世界」相呼应。
              </p>
              <p>
                我在十三朝古都洛阳出生，现和女朋友居住在北京。我们养了只可爱的蓝白，叫做「发财」。未来我们还会拥有自己的狗子，可能是柯基或是哈士奇。
              </p>
              <p>
                我出生于 1994 年的秋季，2017 年本科毕业于西安电子科技大学。2016
                年暑期我在饿了么实习，那是在上海，那年我大三。2017
                年闲来无事的我来到北京，在今日头条实习，毕业后成为了正式员工，也是那个时候，公司改名叫字节跳动。
              </p>
              <p>
                我是一名前端开发工程师。公司的快速发展，让我有机会做了全栈开发，也有幸成为了
                Team
                Leader。但人总是想要改变和突破，于是我离开了，去做些更有挑战的事情。
              </p>
              <p>
                你可以给我
                <a href="/#say-hi" className="bold">
                  留言
                </a>
                ，也可以通过电子邮箱 stephen.zxb@gmail.com 或是微信 stephen_zxb
                找到我。希望我们有机会可以聊一聊。
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
