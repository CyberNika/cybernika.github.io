<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <footer
    flex justify-between items-center flex-col
    py-5 px-10
    border-t border-t-gray-300
    text-xs text-gray-400 font-mono
    xl:flex-row
    sm:text-sm
  >
    <span
      mt-1 order-2
      xl:order-none xl:mt-0
    >
      © 2017-2021 |
      <a href="https://heynext.xyz">HEYNEXT.XYZ</a> |
      <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
        京ICP备18064894号-1
      </a>
    </span>

    <span>
      Created with ❤ by
      <a href="https://github.com/heynext" target="__blank">
        Stephen
      </a>
    </span>
  </footer>
</template>
