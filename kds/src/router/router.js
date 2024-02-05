import { createRouter, createWebHistory } from 'vue-router'
import Typography from '../pages/Typography.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/typography',
            name: 'typography',
            component: Typography
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import('../views/AboutView.vue')
        // },
        // {
        //     path: '/contact',
        //     name: 'contact',
        //     component: () => import('../views/ContactView.vue')
        // }
    ]
});

// Redirects route from index.html to '/' when initially load Extension
router.beforeEach((to) => {
    if(to.path === "/index.html") return '/';
});
export default router;


// import { createRouter, createWebHistory } from 'vue-router'
// // import Main from '../pages/Main.vue'
// import Typography from '../pages/Typography.vue'
// // import Campains from '../pages/Campains.vue'
// // import CreateCampaign from '../pages/CreateCampaign.vue'
// // import Auth from '../pages/Auth.vue'
// // import Leads from '../pages/Leads.vue'
// // import Profile from '../pages/Profile.vue'
// // import Users from '../pages/Users.vue'
// // import SettingBussiness from '../pages/SettingBussiness.vue'
// // import SettingBuilding from '../pages/SettingBuilding.vue'
// // import SettingIntegrations from '../pages/SettingIntegrations.vue'
// // import SettingLeads from '../pages/SettingLeads.vue'
// // import SettingNotice from '../pages/SettingNotice.vue'

// const routes = [
//   // {
//   //   path: '/',
//   //   component: Main
//   // },
//   {
//     path: '/typography',
//     component: Typography
//   },
//   // {
//   //   path: '/campains',
//   //   component: Campains
//   // },
//   // {
//   //   path: '/create-campain',
//   //   component: CreateCampaign
//   // },
//   // {
//   //   path: '/auth',
//   //   component: Auth
//   // },
//   // {
//   //   path: '/leads',
//   //   component: Leads
//   // },
//   // {
//   //   path: '/profile',
//   //   component: Profile
//   // },
//   // {
//   //   path: '/users',
//   //   component: Users
//   // },
//   // {
//   //   path: '/setting-bussiness',
//   //   component: SettingBussiness
//   // },
//   // {
//   //   path: '/setting-building',
//   //   component: SettingBuilding
//   // },
//   // {
//   //   path: '/setting-integrations',
//   //   component: SettingIntegrations
//   // },
//   // {
//   //   path: '/setting-leads',
//   //   component: SettingLeads
//   // },
//   // {
//   //   path: '/setting-notice',
//   //   component: SettingNotice
//   // },
 
// ]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
//   linkActiveClass: "active"
// })

// export default router
