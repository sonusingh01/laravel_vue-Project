import './bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import {createApp} from 'vue'
import { createPinia } from 'pinia'
import router from "./routes.js"
import App from './components/App.vue'
const pinia = createPinia()
createApp(App).use(router).use(pinia)
.mount("#app")              