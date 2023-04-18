import { createRouter, createWebHistory} from 'vue-router'

import Home from './views/HomePage.vue'
import Contact from './views/ContactPage.vue'
import Services from './views/ServicePage.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/Contact',
    name: 'Contact',
    component: Contact
},
{
    path: '/Services',
    name: 'Services',
    component: Services
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;