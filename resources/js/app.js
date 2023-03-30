import './bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


import {createApp} from 'vue'
import router from "./routes.js"
import App from './components/App.vue'

createApp(App).use(router).mount("#app")