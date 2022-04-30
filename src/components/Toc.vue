<script setup lang="ts">
interface TocNode {
  level: number
  title: string
  anchor: string
  children?: TocNode[]
}

const props = defineProps<{
  items: TocNode[]
}>()
</script>

<template>
  <ul>
    <li v-for="(item, index) of props.items" :key="index">
      <a
        decoration-1 decoration-divider-light
        dark:decoration-divider-dark
        hover="underline underline-offset-5"
        :href="item.anchor"
      >
        {{ item.title }}
      </a>

      <Toc v-if="item.children" pl-4 :items="item.children" />
    </li>
  </ul>
</template>
