import { createRouter, createWebHistory } from 'vue-router'

// import Start from '../views/Start.vue';
import BoardWords from '../views/BoardWords.vue';
import CellWords from '../views/CellWords.vue';
import InfoWords from '../views/InfoWords.vue';
import MainPage from '../views/MainPage.vue';
import PoleWords from '../views/PoleWords.vue';



const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage
    },
    {
        path: '/cell',
        name: 'Cell',
        component: CellWords
    },
    
    {
        path: '/board',
        name: 'BoardWords',
        component: BoardWords
    },
    {
        path: '/pole',
        name: 'PoleWords',
        component: PoleWords
    },
    {
        path: '/info',
        name: 'InfoWords',
        component: InfoWords
    },
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router