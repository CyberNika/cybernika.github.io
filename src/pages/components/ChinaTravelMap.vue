<script setup lang="ts">
import VChart from 'vue-echarts'

import { initChinaMap } from '../composables/map'

const chinaMapOption = initChinaMap()
</script>

<template>
  <v-chart autoresize :option="chinaMapOption" />
</template>
