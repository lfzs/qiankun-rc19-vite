import { createApp } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
createApp(App).mount('#root')

registerMicroApps([{
  name: 'micro',
  container: document.querySelector('#container'),
  activeRule: '/micro',
  entry: 'http://localhost:7002/index.html',
}])

start()
