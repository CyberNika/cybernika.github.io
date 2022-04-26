<script setup lang="ts">
</script>

<template>
  <div wrapper flex justify-center pt-1>
    <div
      p="x-5 y-6 lg:x-10 lg:y-8 xl:x-12 xl:y-10"
      m-y-auto max-w-screen-xl rounded-lg
      bg="amber-100 opacity-15 dark:yellow-50 dark:opacity-10"
      xl:flex
    >
      <div
        mb-3
        sm="w-xs float-left mr-6 mb-0"
        md="w-1/2 float-left"
        xl="float-none"
      >
        <img src="/me.jpg" rounded>
      </div>

      <div mt--1 xl:flex-1 text-lg font-serif>
        <p>
          嗨，我是 Stephen，一名互联网从业者。在用的 ID 是 SuperStack 和 SuperStackPro。
        </p>
        <p mt-4>
          我在十三朝古都洛阳出生，现和女朋友居住在北京。我们养了只可爱的蓝白，叫做「发财」。还养了只聪明的布偶，叫做「胖胖」。未来我们还会拥有自己的狗子，可能是柯基或是哈士奇。
        </p>
        <p mt-4>
          我本科毕业于西安电子科技大学，就读智能科学与技术专业。大三暑期去到上海，在饿了么实习数月。毕业后转向北京，加入字节跳动，而后在教育、电商、内容等多个行业头部公司工作。
        </p>
        <p mt-4>
          我曾是一名前端开发工程师，公司的快速发展，让我有机会做了全栈开发，也有幸成为了 Team Leader。但人总是想要改变和突破，于是我鼓足勇气选择了离开，去试着做些更有趣、更有挑战的事情。
        </p>
        <p mt-4>
          <span>你可以给我</span>
          <RouterLink to="/#say-hi" class-name="bold">留言</RouterLink>
          <span>，也可以通过电子邮箱</span>
          <a href="mailto:superstack.pro@gmail.com"> superstack.pro@gmail.com </a>
          <span>找到我。希望我们有机会可以聊一聊。</span>
        </p>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: single
</route>
