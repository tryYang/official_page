

export const allroutes = [


    {
        path: '/',
        component: () => import("@/views/home/index.vue"),
        name: 'home',
        meta: {
            title: '首页',
            hidden: false,
            icon: 'HomeFilled'
        }
    },

    //bilibili
    {
        path: '/bilibili',
        component: () => import("@/views/offical_page/bilibili/index.vue"),
        name: 'bilibili',
        meta: {
            title: '哔哩哔哩',
            hidden: false,
            icon: "DataAnalysis"
        }
    }

]
