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
        path:'/Index',
        component:()=>import('../view/BspIndex.vue'),
        children:[
            {
                path:'/Index/Sy',
                component:()=>import('../view/Index.vue')
            },
            {
                path:'/Index/',
                component:()=>import('../view/Index.vue')
            },
            {
                path:'/Index/ServiceAdviser',
                component:()=>import('../view/ServiceAdviser.vue')
            }
        ]
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