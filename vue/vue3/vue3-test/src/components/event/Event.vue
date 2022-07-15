<template>
  <div class="foo" @click.self="clickFoo">
    <div class="bar" @click.middle="clickBar"></div>
  </div>
  <span v-pre>{{ this will not be compiled }}</span>
  <div v-cloak>
    {{ message }}
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
const message = ref('123')

function clickFoo () {
  console.log('clickFoo', clickFoo)
}
function clickBar () {
  console.log('clickBar', clickBar)
}
</script>

<style scoped>
.foo {
  width: 200px;
  height: 200px;
  border: 1px solid red;

}

.bar {
  width: 100px;
  height: 100px;
  border: 1px solid blue;
}

[v-cloak] {
  display: none;
}
</style>
