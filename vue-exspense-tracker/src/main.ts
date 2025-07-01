import './assets/style.css'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(Toast, {
  position: 'top-right',
  timeout: 5000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: true,
  hideProgressBar: false,
  progress: 'bar',
  transition: 'Vue-Toastification__fade',
  maxToasts: 5,
  newestOnTop: false,
  rtl: false,
})
app.mount('#app')
