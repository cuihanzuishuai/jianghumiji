<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active < all" @click="clear">清理</button>
    <div v-if="todos.length">
      <li v-for="(todo, i) in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
        <span class="remove-btn" @click="removeTodo(i)">X</span>
      </li>
    </div>
    <div v-else>暂无数据</div>
    <div>
      全选
      <input type="checkbox" v-model="allDone" />
      <span>{{ active }} / {{ all }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed } from "vue"

interface Todo {
  title: string,
  done: Boolean
}

const title = ref('')
const todos = ref<Todo[]>([{ title: '吃饭', done: true }, { title: '睡觉', done: false }, { title: '打游戏', done: false }])

const showModal = ref(false)

function addTodo() {
  if (!title.value) {
    showModal.value = true
    setTimeout(() => {
      showModal.value = false
    }, 1500)
    return
  }
  todos.value.push({
    title: title.value,
    done: false,
  })
  title.value = ''
}
function clear() {
  todos.value = todos.value.filter((v) => !v.done)
}
const active = computed(() => {
  return todos.value.filter((v) => v.done).length
})
const all = computed(() => todos.value.length)
const allDone = computed({
  get: function() {
    return active.value === todos.value.length
  },
  set: function(value: boolean) {
    todos.value.forEach((todo: Todo) => {
      todo.done = value
    })
  },
})
function removeTodo(i: number) {
  todos.value.splice(i, 1)
}
</script>

