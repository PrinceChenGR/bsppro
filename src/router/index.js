import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path:'/',
        redirect:'/Login'
    },
    {
        path:'/Login',
        component:()=>import('../view/Login.vue')
    },
    {
        path:'/Register',
        component:()=>import('../view/Register.vue')
    },
    {
        path:'/Index',
        component:()=>import('../view/Index.vue')
    }
]

const router = new Router({
    routes,
    mode:'history'
})

// router.beforeEach((to,from,next)=>{
//     next();
// })

export default router;