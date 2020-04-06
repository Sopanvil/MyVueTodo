import Vue from 'vue'
import VueRouter from 'vue-router'

import Tasks from './components/Tasks'
import SelectedTodo from './components/SelectedTodo'
import Main from './components/Main'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/todos',
            name: 'todos',
            component: Tasks,
        },
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/todos/:id',
            name: 'todo',
            component: SelectedTodo
        }
    ],
    mode: 'history'
})