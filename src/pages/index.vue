<script setup lang="ts">
import Hello from './components/Hello.vue'
import Travel from './components/Travel.vue'
import Skill from './components/Skill.vue'
import Photo from './components/Photo.vue'
// import Other from './components/Other.vue'
</script>

<template>
  <Hello content font-serif />
  <Travel content font-serif />
  <Skill content font-serif wrapper-y />
  <Photo content font-serif wrapper-y />
  <!-- <Other content font-serif wrapper-y /> -->
</template>

<style>
.home-section {
  @apply relative flex flex-col justify-center;
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

<route lang="yaml">
meta:
  layout: home
</route>
