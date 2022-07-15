<template>
  <div class="iot-search-cascader" :style="{ width: width + 'px' }">
    <a-input v-model:value="inputValue.label"></a-input>
    <div class="iot-select-dropdown">
      <cascader-menus v-model:options="options"></cascader-menus>
    </div>
  </div>
</template>

<script setup lang='ts'>

import cascaderMenus from './cascaderMenus.vue'
import { Options, Option } from './option'
import EventBus from '../../utils/eventBus'
import { ref, PropType, reactive, onMounted } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    default: 200
  },
  options: {
    type: Array as PropType<Options>,
    required: true
  }
})

const options = reactive(props.options)

function addFlag (options) {
  options.forEach(item => {
    item.showNext = false
    item.active = false
    item.addValue = ''
    if (item.children?.length) {
      addFlag(item.children)
    }
  })
}

addFlag(options)
console.log('options', options)

const emits = defineEmits(['update:options'])

const inputValue: { label: string, value: string | number } = reactive({
  label: '',
  value: ''
})

onMounted(() => {
  EventBus.on("change", (option) => {
    console.log('option', option)
    inputValue.value = (option as Option).value
    inputValue.label = (option as Option).label
  })
})

</script>

<style lang='less' scoped>
.iot-search-cascader {
  margin-left: 200px;
  position: relative;

  .ant-input {
    caret-color: transparent;
  }

  .iot-select-dropdown {
    min-width: 110px;
    color: #000000;
    z-index: 1050;
    box-sizing: border-box;
    padding: 4px 0;
    overflow: hidden;
    font-size: 14px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
    position: absolute;
    top: 32px;
    left: 0;
  }
}
</style>
