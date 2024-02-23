import { createApp } from 'vue'
import App from './App.vue'

const render = (props = {}) => {
  createApp(App).mount(props.container ?? '#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}
async function bootstrap() {
  await Promise.resolve()
}
async function mount(props) {
  render(props)
  await Promise.resolve()
}
async function unmount() {
  await Promise.resolve()
}

window.micro = {
  bootstrap,
  mount,
  unmount,
}
