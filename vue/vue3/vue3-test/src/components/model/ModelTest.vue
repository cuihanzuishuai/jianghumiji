<template>
  <span>子modelMsg：{{ test }}</span>
  <br>
  <span>inject: {{ injectData }}</span>

  <!-- directive -->
  <input type="range" v-focus v-fixed:[position]=distance>
  <div v-test></div>
</template>

<script setup lang='ts'>
import { inject, ref, watch, render, h } from 'vue'

const position = ref('bottom')
const distance = ref(200)
setTimeout(() => {
  position.value = 'top'
  distance.value = 100
}, 2000)

const props = defineProps({
  test: {
    type: String
  },
  testModifiers: {
    default: () => ({})
  }
})

const test = ref(props.test)

watch(
  () => props.test,
  () => {
    test.value = props.test
  }
)

const emits = defineEmits(['update:test'])

setTimeout(() => {
  emits('update:test', 'model2')
}, 2000)

const injectData = inject('count')

const isOpen = ref(false)

function open () {
  isOpen.value = true
  // throw Error()
}
defineExpose({ isOpen, open })




h('h1', {}, '123')

</script>

<style lang='less' scoped>
</style>
