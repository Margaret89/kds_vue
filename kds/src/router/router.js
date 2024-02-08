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
import Archive from "@/pages/Archive.vue";
import ArchiveSelect from "@/pages/ArchiveSelect.vue";
import ArchiveRemadeLog from "@/pages/ArchiveRemadeLog.vue";
import EmployeeIdentification from "@/pages/EmployeeIdentification.vue";
import EmployeeIdentificationProblems from "@/pages/EmployeeIdentificationProblems.vue";
import EmployeeCode from "@/pages/EmployeeCode.vue";
import EmployeeCodeFound from "@/pages/EmployeeCodeFound.vue";
import EmployeePassword from "@/pages/EmployeePassword.vue";
import EmployeePasswordWrong from "@/pages/EmployeePasswordWrong.vue";

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
  {
    path: '/archive',
    name: 'archive',
    component: Archive
  },
  {
    path: '/archive-select',
    name: 'archive-select',
    component: ArchiveSelect
  },
  {
    path: '/archive-remade-log',
    name: 'archive-remade-log',
    component: ArchiveRemadeLog
  },
  {
    path: '/employee-identification',
    name: 'employee-identification',
    component: EmployeeIdentification
  },
  {
    path: '/employee-identification-problems',
    name: 'employee-identification-problems',
    component: EmployeeIdentificationProblems
  },
  {
    path: '/employee-code',
    name: 'employee-code',
    component: EmployeeCode
  },
  {
    path: '/employee-code-found',
    name: 'employee-code-found',
    component: EmployeeCodeFound
  },
  {
    path: '/employee-password',
    name: 'employee-password',
    component: EmployeePassword
  },
  {
    path: '/employee-password-wrong',
    name: 'employee-password-wrong',
    component: EmployeePasswordWrong
  },
];

const router = createRouter({
// history: createWebHistory(process.env.BASE_URL),
history: createWebHistory(),
routes,
linkActiveClass: "active"
})

export default router