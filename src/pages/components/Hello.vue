<script setup lang="ts">
const { t } = useI18n()

const goNextPage = (evt: MouseEvent) => {
  evt.preventDefault()

  window.scrollTo({
    top: innerHeight,
  })
}
</script>

<template>
  <div
    class="home-section"
    h-screen
  >
    <div content animate-fade-in animate-count-1 animate-duration-1s>
      <h1
        font-bold
        leading="tight"
        text="4xl lg:5xl"
      >
        <p>{{ t('home.hello.hi-i-am-stephen') }}</p>
        <p>
          {{ t('home.hello.nice-to-meet-you-here.1') }}<span class="home-section-title-magic">{{ t('home.hello.nice-to-meet-you-here.2') }}</span>
        </p>
      </h1>

      <p mt-5 text-xl>
        我是一个斜杠青年，现居北京，以软件开发为生。梦想成为一条咸鱼，热爱旅行和摄影，对写作和设计都有很大兴趣。正在为过得更好做些努力，希望有一天可以和她一起带只狗子看看这个世界。
      </p>

      <p mt-3 text-xl>
        <span>继续往下，了解更多我的</span>
        <a class="anchor" href="" @click="goNextPage">故事</a>
        <span>。也可以访问我的</span>
        <RouterLink class="anchor" to="/blog">
          <span>博客</span>
        </RouterLink>
        <span>，或者看看我的</span>
        <a line-through cursor-not-allowed opacity-80>作品</a>
        <!-- <span>，或是简单打个</span>
        <RouterLink class="anchor" to="/say-hi">
          <span>招呼</span>
        </RouterLink> -->
        😉
      </p>
    </div>

    <div
      title="了解更多我的故事"
      pos="absolute bottom-20 left-2/4"
      text="lg lg:xl"
      px-5
      transform="translate-x--1/2"
      cursor-pointer
      text-gray-500
      @click="goNextPage"
    >
      <span
        i-carbon-chevron-down
        animate-bounce
      />
    </div>
  </div>
</template>

<style scoped>
.anchor {
  @apply underline underline-offset-5 font-bold;
  @apply decoration-1 decoration-divider-light;
  @apply dark:decoration-divider-dark;
  @apply hover:opacity-90;
}
</style>
