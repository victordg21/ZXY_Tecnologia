import { createRouter, createWebHistory} from 'vue-router'

import Home from './views/HomePage.vue'
import Contact from './views/ContactPage.vue'
import Services from './views/ServicePage.vue'
import Clients from './views/ClientsPage.vue'

const routes = [{
    path: '/',
    name: 'Home',
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
},
{
    path: '/Clients',
    name: 'Clients',
    component: Clients
}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;