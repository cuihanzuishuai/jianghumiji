<template>
  setup
</template>

<script>
import { ref } from 'vue'
export default {
  setup (props, context) {
    console.log('props, context', props, context)
    const name = ref('cc')
    return {
      name
    }
  }
}
</script>

<style lang='less' scoped>
</style>
