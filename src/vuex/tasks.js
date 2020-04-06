import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    // Обновление данных из localStorage
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
    // Добавление задачи
    setTask(state, task) {
      state.tasks.push({
        task: task,
        todos: [],
      });
    },
    deleteTask(state, id) {
      state.tasks.splice(id, 1);
    },
    // Добавление todo
    setTodo(state, [todo, id]) {
      state.tasks[id].todos.push({
        todo: todo,
        isDone: false,
      });
    },
    setArrTask(state, tasksArr){
        state.tasks.todos = tasksArr
    },
    // Сохранение данных в localStorage
    saveTask(state) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit("setTask", task);
      commit("saveTask");
    },
    removeTask({ commit }, id) {
      commit("deleteTask", id);
      commit("saveTask");
    },
    addTodo({ commit }, [todo, id]) {
      commit("setTodo", [todo, id]);
      commit("saveTask");
    },
    saveArr({ commit }, tasksArr){
        commit("setArrTask", tasksArr);
        commit("saveTask");
    },
    // Проверка задач на наличие
    findTasks({ commit }) {
      if (JSON.parse(localStorage.getItem("tasks")) != null) {
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        commit("updateTasks", tasks);
      }
    },
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
});
