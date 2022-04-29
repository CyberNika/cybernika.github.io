<script setup lang="ts">
const { t } = useI18n()

const props = defineProps<{ slug: string }>()

const postsRoot = '../../../posts'
const postPath = `${postsRoot}/${props.slug}.md`

const modules = import.meta.glob('../../../posts/*.md')
const Content = modules[postPath]

console.log({ slug: props.slug, postPath, modules, Content })
</script>

<template>
  <div wrapper>
    <h1 wrapper-center page-title>
      {{ t('about.title') }}
    </h1>

    <Content />
  </div>
</template>
