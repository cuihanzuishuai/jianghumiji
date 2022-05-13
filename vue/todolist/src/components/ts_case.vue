<template>
  <button type="button" @click="count++">count is: {{ count }}</button>
  <button type="button" @click="$emit('change', 123)">emit change</button>
  <button type="button" @click="$emit('udpate', 'aaa')">emit update</button>
 
</template>

<script setup lang="ts">
import { computed, reactive, Ref, ref } from 'vue';

// 1. props 定义方式
interface Props {
  msg: string,
  age?: number
}

const props = defineProps<Props>()


// 2. emits 定义方式
interface Emits {
  (e: 'change', id: number): void
  (e: 'udpate', value:string):void
}
const emit = defineEmits<Emits>()


// 3. ref 定义方式
//  3.1 自动推断为 Ref<Number>
const count = ref(0)
//  3.2 手动指定
const num_or_string: Ref<Number|string> = ref(0)


// 4. reactive
//   4.1 自动推断
const book = reactive({ title: 'Vue 3 Guide' })
//   4.2 手动指定
interface Book {
  title: string,
  num?:number
}
const book2:Book = reactive({ title: 'Vue 3 Guide' })


// 5. computed
//   5.1 自动推断 ComputedRef<number>
const double = computed(() => count.value * 2)
//   5.2 手动指定
const double2 = computed<number>(()=> count.value * 2)


// 6. event handler
//   6.1 默认是 any 类型(默认编译不过的)
// function handleChanged(evt) {
//   console.log(`handle changed ${evt}`)
// }
//   6.2 手动指定 Event 类型
function handleChanged2(evt: Event) {
  console.log(`handle changed2 ${evt.target}`)
}

// TODO 还有 provie/inject 等好几个.
// https://vuejs.org/guide/typescript/composition-api.html#typing-provide-inject


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
