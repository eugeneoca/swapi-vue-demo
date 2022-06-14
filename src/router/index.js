import { createRouter, createWebHashHistory } from 'vue-router'
import Films from "@/components/Films.vue";
import Starships from "@/components/Starships.vue";
import Home from "@/components/Home.vue";



const routes = [
  { path: '/', component: Home },
  { path: '/films', component: Films },
  { path: '/starships', component: Starships },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;