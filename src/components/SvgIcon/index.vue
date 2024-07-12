<template>
  <svg :style="{ width, height }">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: {
    type: String
  },
  color: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '30px'
  },
  height: {
    type: String,
    default: '30px'
  }
})
</script>
<script lang="ts">
export default {
  name: 'svg_Y'
}
</script>
<style scoped></style>
