<script setup lang="ts">
const goNextPage = (evt: MouseEvent) => {
  evt.preventDefault()

  window.scrollTo({
    top: innerHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div
    class="home-section"
    mx-auto max-w-screen-xl h-screen
    font-serif
  >
    <div class="content animate__animated animate__fadeIn animate__slow">
      <h1
        font-bold
        text="4xl lg:5xl xl:6xl"
      >
        <p>嗨，我是 Stephen</p>
        <p>
          很开心在这里<span class="home-section-title-magic">遇见你 🎈</span>
        </p>
      </h1>

      <p mt-7 text-xl>
        我是一个斜杠青年，现居北京，以软件开发为生。梦想成为一条咸鱼，热爱旅行和摄影，对写作和设计都有很大兴趣。正在为未来的角色转变做些努力，希望有一天可以和她一起带只狗子看看这个世界。
      </p>

      <p mt-3 text-xl>
        继续往下，了解更多我的
        <a href="" font-bold class="anchor" @click="goNextPage">
          故事
        </a>
        。也可以访问我的
        <a line-through cursor-not-allowed opacity-80>博客</a>
        ，或者看看我的
        <a line-through cursor-not-allowed opacity-80>作品</a>
        ，或是简单打个
        <Link class-name="anchor" to="/#say-hi">
          招呼
        </Link>
        &nbsp;😉
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
