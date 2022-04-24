<script setup lang="ts">
import { ref } from 'vue'

const travelMapTypes = [
  { value: 'CHINA', title: '中国', icon: 'i-carbon-map' },
  { value: 'WORLD', title: '世界', icon: 'i-carbon-earth-southeast-asia' },
]

const activeMapType = ref(travelMapTypes[0].value)
</script>

<template>
  <div class="home-section">
    <h3 class="home-section-title">
      <p>我热爱编程</p>
      <p>
        相信优雅的代码和艺术<span class="home-section-title-magic">可以改变人们的生活</span>
      </p>
    </h3>

    <h3 class="home-section-title">
      <p>我钟爱挑战</p>
      <p>
        认为不断尝试和勇于探索<span class="home-section-title-magic">可以让我们成长</span>
      </p>
    </h3>

    <div overflow-x-auto mt-15>
      <div h-320px w-680px lg:w-full lg:h-35vh class="skill-chart">
        xxxx
      </div>
    </div>
  </div>
</template>

<style>
</style>
