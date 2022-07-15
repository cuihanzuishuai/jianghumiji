<template>
  <HeaderComp>
    <template #header>header</template>
    <template #default="{ num: myNum }">{{ myNum }}</template>
    <template #footer>footer</template>
  </HeaderComp>

  <br>

  <span>父modelMsg： {{ modelMsg }}</span>

  <br>
  <ModelTest ref="ModelTestRef" v-model:test.upCase="modelMsg"></ModelTest>

  <div ref="root">ref</div>

  <Table></Table>

  <a-button @click="click">error</a-button>

  <Setup></Setup>

  <!-- <Event></Event> -->

  <CustomRef></CustomRef>

  <HFunc></HFunc>
</template>

<script setup lang="ts">
import HeaderComp from './slot/Header.vue'
import ModelTest from './model/ModelTest.vue'
import Table from './antd/Table.vue'
import Setup from './setup/Setup.vue'
import Event from './event/Event.vue'
import CustomRef from './customRef/CustomRef.vue'
import HFunc from './hfunc/HFunc.vue'


import { provide, ref, toRef, toRefs, reactive, watchEffect, watch, vModelText, getCurrentInstance, ComponentInternalInstance, onErrorCaptured } from 'vue'

const modelMsg = ref('model')
const count = ref(0)
// setInterval(() => {
//   count.value++
// }, 1000)

provide('count', count)
// provide('count', computed(() => count.value))


const book = reactive({
  author: 'Vue Team',
  year: '2020',
  title: 'Vue 3 Guide',
  description: 'You are reading this book right now ;)',
  price: 'free'
})

const { author } = toRefs(book)
author.value = 'cc'

const yearRef = toRef(book, 'year')
yearRef.value = '2022'


const root = ref()
watchEffect(() => {
})


// watch
const numbers = reactive([1, 2, 3, 4])
watch(
  () => [...numbers],
  (value, preValue) => {
    // console.log('value, preValue', value, preValue)
  }
)
numbers.push(5)



const ModelTestRef = ref<InstanceType<typeof ModelTest>>()

function click () {
  // ModelTestRef.value?.open()
  throw Error()
}


const proxy = getCurrentInstance()?.appContext.app.config.globalProperties
// console.log('currentInstance', currentInstance?.appContext.app.config.globalProperties.$foo)
// console.log('proxy', proxy)


onErrorCaptured((err, instance, info) => {
  console.log('err', err)
  console.log('instance', instance)
  console.log('info', info)
  return false
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
