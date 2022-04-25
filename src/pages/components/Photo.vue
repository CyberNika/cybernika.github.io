<script setup lang="ts">
const photos = [
  {
    name: '自然',
    thumb: '/photos/nature.jpg',
  },
  {
    name: '雪山',
    thumb: '/photos/mountain-1.jpg',
  },
  {
    name: '建筑',
    thumb: '/photos/building.jpg',
  },
  {
    name: '街头',
    thumb: '/photos/city.jpg',
  },
  {
    name: '城市',
    thumb: '/photos/city-1.jpg',
  },
  {
    name: '人',
    thumb: '/photos/people.jpg',
  },
  {
    name: '海',
    thumb: '/photos/sea.jpg',
  },
  {
    name: '夜晚',
    thumb: '/photos/night.jpg',
  },
]
</script>

<template>
  <div class="home-section" lg:mt-5 font-serif text-center>
    <h3 class="home-section-title">
      <p>
        灵魂和身体<span class="home-section-title-magic">总有一个要在路上</span>
      </p>
      <p>而我，更想让它们相伴而行</p>
    </h3>

    <ul
      flex="~ wrap"
      justify-center
      m="t-10 -x-2"
      animate="sway count-infinite alternate"
      cursor-not-allowed
    >
      <li
        v-for="item of photos"
        :key="item.name"
        class="photo-item"
        relative m-2
        h="20 sm:25 lg:32 xl:45"
        rounded="md lg:lg" overflow-hidden
        after:absolute after:left-0 after:top-0
        after:content-none after:w-full after:h-full
        dark:after:shadow-none dark:after:bg-gray-800 dark:after:bg-opacity-30
      >
        <img
          :src="item.thumb"
          :alt="item.name"
        >
        <label
          pos="absolute bottom-2 left-3"
          text="white shadow-sm sm sm:md xl:lg"
          font-sans opacity-80
        >
          {{ item.name }}
        </label>
      </li>
    </ul>
  </div>
</template>

<style>
.photo-item::after {
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.6);
}
</style>
