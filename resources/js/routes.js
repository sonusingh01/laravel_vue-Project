import HomeView from "./pages/Home.vue"
import AboutView from "./pages/About.vue"
import ContactView from "./pages/Contact.vue"
import ServicView from "./pages/Service.vue"
import LoginView from "./pages/Login.vue"
import RegisterView from "./pages/Register.vue"
import {createRouter, createWebHistory} from "vue-router";
const routes=[
    {
        name:"HomeView",
        path:'/',
        component:HomeView
    },
    {
        name:"AboutView",
        path:'/about',
        component:AboutView
    },
    {
        name:"ServiceView",
        path:'/service',
        component:ServicView
    },
    {
        name:"ContactView",
        path:'/contact',
        component:ContactView
    },
    {
        name:"LoginView",
        path:'/login',
        component:LoginView
    },
    {
        name:"RegisterView",
        path:'/register',
        component:RegisterView
    },
   
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
    
export default router