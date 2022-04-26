<script setup lang="ts">
import Hello from './components/Hello.vue'
import Travel from './components/Travel.vue'
import Skill from './components/Skill.vue'
import Photo from './components/Photo.vue'
import Other from './components/Other.vue'
</script>

<template>
  <div class="home" mx-auto max-w-screen-xl font-serif>
    <Hello />
    <Travel />
    <Skill />
    <Photo />
    <Other />
  </div>
</template>

<style>
.home-section {
  @apply wrapper relative flex flex-col justify-center;
}

.home-section-title {
  @apply text-2xl leading-snug;
  @apply lg:text-3xl;
  @apply xl:text-4xl;
}

.home-section-title + .home-section-title {
  @apply mt-xl;
}

.home-section-title-magic {
  @apply block sm:inline;
}
</style>
