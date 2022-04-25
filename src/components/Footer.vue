<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer
    flex="~ col xl:row"
    justify-between items-center
    p="y5 x10"
    border="t-1 t-gray-300 dark:t-gray-700"
    text="xs sm:sm gray-400"
    font="mono"
  >
    <span
      order="2 xl:none"
      m="t-1 xl:t-0"
    >
      © 2017-2022 |
      <a href="https://superstack.pro">SUPERSTACK.PRO</a> |
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
        京ICP备18064894号-1
      </a>
    </span>

    <span>
      Created with ❤ by
      <a href="https://github.com/SuperStackPro" target="__blank">
        Stephen
      </a>
    </span>
  </footer>
</template>
