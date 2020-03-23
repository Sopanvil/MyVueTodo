import Vue from 'vue'
import VueRouter from 'vue-router'

import Todo from './components/Todo'
import Main from './components/Main'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/todos',
            name: 'todo',
            component: Todo
        },
        {
            path: '/',
            name: 'main',
            component: Main
        }
    ],
    mode: 'history'
})