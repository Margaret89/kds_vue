import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router/router'

createApp(App).mount('#app')

const app = createApp(App)

app.use(router).mount('#app');
