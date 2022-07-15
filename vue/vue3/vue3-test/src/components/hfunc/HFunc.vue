<template>
</template>

<script  lang='ts'>
import { h } from 'vue'

export default {
  setup () {
    const reset = () => {
      // 某些重置逻辑
    }

    // expose 只能被调用一次。
    // 如果需要暴露多个 property，则它们
    // 必须全部包含在传递给 expose 的对象中。

    return () => h('div', 12)
  }
}
</script>

<style lang='less' scoped>
</style>
