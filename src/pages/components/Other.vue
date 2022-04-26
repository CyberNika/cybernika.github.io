<script setup lang="ts">
// const links = [
//   { title: '博客', link: '/blog' },
//   { title: '作品', link: '/gallery' },
//   { title: '摄影', link: '/gallery11' },
//   { title: '源码', link: 'https://github.com/snokier/site' },
//   { title: '关于', link: '/about' },
// ]

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
  <div class="home-section" mt-5>
    <h3 class="home-section-title" font-serif text-center>
      <p>
        给我留言
      </p>
    </h3>

    <div font-sans id="gitalk-container" />
  </div>
</template>

<style>
</style>
