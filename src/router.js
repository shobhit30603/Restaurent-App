import Home from "./components/Home.vue"
import Signup from "./components/Signup.vue"
import Login from "./components/Login.vue"
import Add from "./components/Add.vue"
import update from "./components/update.vue"


import {createRouter,createWebHistory} from "vue-router"

const routes=[
    {
    name:"Home",
    component:Home,
    path:'/',
},
{
    name:"Signup",
    component:Signup,
    path:'/sign-up',
},
{
    name:"Login",
    component:Login,
    path:'/login',
},
{
    name:"Add",
    component:Add,
    path:'/add',
},
{
    name:"update",
    component:update,
    path:'/update/:id',
},




];
const router=createRouter({
    history:createWebHistory(),
    routes,
});
export default router;