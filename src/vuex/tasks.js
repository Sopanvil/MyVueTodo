import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],
  },
  mutations: {
    updateTasks(state, tasks) {
      state.tasks = tasks;
    },
    setTask(state, task) {
      state.tasks.push({
        task: task,
        todos: [],
      });
    },
    deleteTask(state, id) {
      state.tasks.splice(id, 1);
    },
    setTodo(state, [todo, id]) {
      state.tasks[id].todos.push({
        todo: todo,
        isDone: false,
      });
    },
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
