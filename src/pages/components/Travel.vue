<script setup lang="ts">
import { ref } from 'vue'

import ChinaTravelMap from './ChinaTravelMap.vue'
import WorldTravelMap from './WorldTravelMap.vue'

const travelMapTypes = [
  { value: 'CHINA', title: '中国', icon: 'i-carbon-map' },
  { value: 'WORLD', title: '世界', icon: 'i-carbon-earth-southeast-asia' },
]

const activeMapType = ref(travelMapTypes[0].value)
</script>

<template>
  <div class="home-section" h-screen text-center>
    <h3 class="home-section-title">
      <p>我想出去走一走</p>
      <p>看看这个大世界</p>
    </h3>

    <div mt-6 overflow-hidden whitespace-nowrap h="3/5">
      <div
        :class="{
          'travel-map': true,
          'opacity-0': activeMapType !== 'CHINA',
          '-translate-x-full': activeMapType !== 'CHINA',
        }"
      >
        <ChinaTravelMap />
      </div>

      <div
        :class="{
          'travel-map': true,
          'opacity-0': activeMapType !== 'WORLD',
          '-translate-x-full': activeMapType === 'WORLD',
        }"
      >
        <WorldTravelMap />
      </div>
    </div>

    <ul text="lg center lg:xl" mt-1>
      <li
        v-for="item of travelMapTypes"
        :key="item.value"
        :title="item.title"
        p-1 mx-2 inline-block
        leading-1
        cursor-pointer
        hover:opacity-80
        :class="item.value === activeMapType ? 'opacity-80' : 'opacity-20'"
        @click="activeMapType = item.value"
      >
        <span :class="item.icon" />
      </li>
    </ul>
  </div>
</template>

<style>
.travel-map {
  @apply inline-block w-full h-full align-middle;
  transition: opacity 0.35s, transform 0.5s;
}
</style>
