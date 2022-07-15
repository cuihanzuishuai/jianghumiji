<template>
  <ul class="iot-cascader-menu">
    <li :class="['iot-cascader-menu-item', option.active ? 'iot-cascader-menu-item-active' : '']"
      v-for="option in options" @click="change(option)">
      <div class="iot-cascader-menu-item-content">{{ option.label }}</div>
      <div class="iot-cascader-menu-item-expand-icon" v-if="option.children?.length">></div>
    </li>
  </ul>
  <!-- <a-input v-model:value="(option as Option).addValue"></a-input> -->
  <template v-for="option in options">
    <template v-if="option.children?.length && option.showNext">
      <cascader-menu v-model:options="option.children"></cascader-menu>
    </template>
  </template>
</template>

<script setup lang='ts'>
import cascaderMenu from './cascaderMenu.vue'
import { Option } from './option'
import { ref, reactive, PropType } from 'vue'
import EventBus from '../../utils/eventBus'

const props = defineProps({
  options: {
    type: Object as PropType<Option[]>,
    required: true
  }
})

const options = reactive(props.options)

const emits = defineEmits(['update:options'])

function change (option: Option) {
  // 节点存在下级时展开；不存在下级时收起下拉，选择完成
  if (option.children?.length) {
    resetOption(options)
    option.showNext = true
    option.active = true
  } else {
    EventBus.emit("change", option)
  }
}

function resetOption (options) {
  options.forEach(item => {
    item.showNext = false
    item.active = false
    if (item.children?.length) {
      resetOption(item.children)
    }
  })
}

</script>

<style lang='less' scoped>
.iot-cascader-menu {
  min-width: 110px;
  max-width: 150px;
  height: 180px;
  margin: -4px 0;
  padding: 4px 0;
  overflow: auto;
  border-right: 1px solid #f0f0f0;

  .iot-cascader-menu-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 5px 12px;
    overflow: hidden;
    line-height: 22px;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
    transition: all .3s;

    .iot-cascader-menu-item-content {
      flex: 1;
      text-align: left;
    }

    .iot-cascader-menu-item-expand-icon {
      margin-left: 4px;
      color: #00000073;
      font-size: 10px;
    }
  }

  .iot-cascader-menu-item-active {
    font-weight: 500;
    background: #FAFAFA;
  }
}
</style>
