import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import './theme.css'

createApp(App)
    .use(store)
    .mount('#app')
