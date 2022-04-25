<script setup lang="ts">
import VChart from 'vue-echarts'

import { initWorldMap } from '../composables/map'

const worldMapOption = initWorldMap()
</script>

<template>
  <v-chart autoresize :option="worldMapOption" />
</template>
