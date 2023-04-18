import { createRouter, createWebHistory} from 'vue-router'

import Home from './views/HomePage.vue'
import Contact from './views/ContactPage.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
},
{
    path: '/Contact',
    name: 'Contact',
    component: Contact
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;