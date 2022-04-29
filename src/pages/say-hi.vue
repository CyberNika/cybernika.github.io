<script setup lang="ts">
const { t } = useI18n()

onMounted(() => {
  const gitalk = new (window as any).Gitalk({
    clientID: '804e292e507bd1aed363',
    clientSecret: 'cab3e3f17bd07094c51f28bf97ffbe62c072143f',
    repo: 'heynext.github.io',
    owner: 'heynext',
    admin: ['heynext'],
    number: 4,
  })

  gitalk.render('gitalk-container')
})
</script>

<template>
  <h1 content page-title>
    {{ t('say-hi.title') }}
  </h1>

  <div id="gitalk-container" animate-fade-in animate-count-1 animate-duration-1s font-sans />
</template>
