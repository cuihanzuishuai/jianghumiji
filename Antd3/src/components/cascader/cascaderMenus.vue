<template>
  <div class="iot-cascader-menus">
    <cascader-menu v-model:options="options"></cascader-menu>
  </div>
</template>

<script setup lang='ts'>
import cascaderMenu from './cascaderMenu.vue'
import { Option } from './option'

import { ref, PropType } from 'vue'

const props = defineProps({
  options: {
    type: Object as PropType<Option[]>,
    required: true
  }
})

const emits = defineEmits(['update:options'])

</script>

<style lang='less' scoped>
.iot-cascader-menus {
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
}
</style>
