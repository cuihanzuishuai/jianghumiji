import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import ModelTest from './components/model/ModelTest.vue'

const app = createApp(App)

app.config.performance = true

app.config.globalProperties.fooooo = 'bar'
app.config.globalProperties.getFooooo = () => console.log('barrrrr')


app.component('ModelTest', ModelTest)

app.config.errorHandler = (err, vm, info) => {
  console.log('err', err)
  console.log('vm', vm)
  console.log('info', info)
}

app.config.warnHandler = function (msg, vm, trace) {
  console.log('msg, vm, trace', msg, vm, trace)
  // `trace` 是组件的继承关系追踪
}

// directive
app.directive('focus', {
  mounted (el) {
    // console.log('el', el)
    el.focus()
  }
})

app.directive('fixed', (el, binding) => {
  // console.log('binding', binding)
  console.log('el', el)
  const position = binding.arg || 'top'
  el.style.position = 'fixed'
  el.style.bottom = 'auto'
  el.style.top = 'auto'
  el.style[position] = binding.value + 'px'
})

// app.directive('fixed', {
//   mounted (el, binding) {
//     console.log('binding', binding)
//     console.log('el', el)
//     const position = binding.arg || 'top'
//     el.style.position = 'fixed'
//     el.style[position] = binding.value + 'px'
//   },
//   updated (el, binding) {
//     console.log('binding', binding)
//     const position = binding.arg || 'top'
//     el.style.bottom = 'auto'
//     el.style.top = 'auto'
//     el.style[position] = binding.value + 'px'
//   }
// })

app.directive('test', {
  template: `
  <div>
    <span>66666666666<span>
  </div>
  `
})

app.use(Antd)
app.mount('#app')

// setTimeout(() => app.unmount(), 5000)
