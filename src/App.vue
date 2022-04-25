<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: '你好，我是 SuperStack',
  meta: [
    { name: 'keywords', content: 'SuperStack,SuperStackPro,博客,前端,JavaScript,旅行,你好世界,Stephen' },
    { name: 'description', content: 'SuperStack 的个人主页' },
    { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
  ],
  link: [
    { rel: 'stylesheet', href: 'https://cdn.staticfile.org/gitalk/1.7.2/gitalk.min.css' },
  ],
})
</script>

<template>
  <RouterView />
</template>
