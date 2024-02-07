import { createWebHistory, createRouter } from "vue-router";
import Content from "@/pages/Content.vue";
import Typography from "@/pages/Typography.vue";
import SplashPage from "@/pages/SplashPage.vue";
import Registration from "@/pages/Registration.vue";

const routes = [
  {
    path: '/',
    name: 'content',
    component: Content
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/splash',
    name: 'SplashPage',
    component: SplashPage
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
];

const router = createRouter({
// history: createWebHistory(process.env.BASE_URL),
history: createWebHistory(),
routes,
linkActiveClass: "active"
})

export default router