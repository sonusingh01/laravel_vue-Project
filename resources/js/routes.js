import HomeView from "./pages/Home.vue"
import AboutView from "./pages/About.vue"
import ContactView from "./pages/Contact.vue"
import ServicView from "./pages/Service.vue"
import LoginView from "./pages/Login.vue"
import RegisterView from "./pages/Register.vue"
import ProductDes from "./components/ProductDes.vue"
import PostsView from "./pages/PostView.vue"
import AuthorView from "./pages/AuthorView.vue"
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
    {
        path: '/products/:id',
        name: 'product',
        component: ProductDes
      },
      {
        path: '/post',
        name: 'posts',
        component: PostsView
      },
      {
        path: '/author',
        name: 'author',
        component: AuthorView
      },
   
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
    
export default router