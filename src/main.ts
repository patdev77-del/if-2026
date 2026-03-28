import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'

// ---------------------------------------------------------------------------
// Router — routes are pre-configured, views are stubbed (Day 3 exercise)
// ---------------------------------------------------------------------------
import HomeView from './views/HomeView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ContactView from './views/ContactView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/projects', component: ProjectsView },
    { path: '/contact', component: ContactView }
  ]
})

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------
createApp(App).use(router).mount('#app')
