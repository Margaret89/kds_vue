import { createWebHistory, createRouter } from "vue-router";
import Content from "@/pages/Content.vue";
import Typography from "@/pages/Typography.vue";
import SplashPage from "@/pages/SplashPage.vue";
import Registration from "@/pages/Registration.vue";
import Live from "@/pages/Live.vue";
import LiveSingleItem from "@/pages/LiveSingleItem.vue";
import LiveHold from "@/pages/LiveHold.vue";
import LiveHoldAfter from "@/pages/LiveHoldAfter.vue";
import LiveLatingOrders from "@/pages/LiveLatingOrders.vue";
import LiveSidebar from "@/pages/LiveSidebar.vue";
import LiveTrash from "@/pages/LiveTrash.vue";
import Trash from "@/pages/Trash.vue";
import TrashSelection from "@/pages/TrashSelection.vue";
import TrashPopup from "@/pages/TrashPopup.vue";

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
  {
    path: '/live',
    name: 'live',
    component: Live
  },
  {
    path: '/live-single-item',
    name: 'live-single-item',
    component: LiveSingleItem
  },
  {
    path: '/live-hold',
    name: 'live-hold',
    component: LiveHold
  },
  {
    path: '/live-hold-after',
    name: 'live-hold-after',
    component: LiveHoldAfter
  },
  {
    path: '/live-lating-orders',
    name: 'live-lating-orders',
    component: LiveLatingOrders
  },
  {
    path: '/live-sidebar',
    name: 'live-sidebar',
    component: LiveSidebar
  },
  {
    path: '/live-trash',
    name: 'live-trash',
    component: LiveTrash
  },
  {
    path: '/trash',
    name: 'trash',
    component: Trash
  },
  {
    path: '/trash-selection',
    name: 'trash-selection',
    component: TrashSelection
  },
  {
    path: '/trash-popup',
    name: 'trash-popup',
    component: TrashPopup
  },
];

const router = createRouter({
// history: createWebHistory(process.env.BASE_URL),
history: createWebHistory(),
routes,
linkActiveClass: "active"
})

export default router