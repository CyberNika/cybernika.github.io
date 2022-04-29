<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer
    flex="~ col lg:row"
    justify-between items-center
    p="y-4 " wrapper
    border="t-1 t-gray-200 dark:t-slate-700"
    text="xs sm:sm gray-400"
  >
    <span
      order="2 xl:none"
      m="t-1 xl:t-0"
    >
      <span>© 2017-2022 | </span>
      <a href="https://superstack.pro">SUPERSTACK.PRO</a>
      <span> | </span>
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">京ICP备18064894号-1</a>
    </span>

    <span font-mono>
      Created with ❤ by
      <a href="https://github.com/SuperStackPro" target="__blank">Stephen</a>
    </span>
  </footer>
</template>
