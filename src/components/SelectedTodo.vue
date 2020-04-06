<template>
  <div class="container">
    <div class="row">
      <h1>Выбранная Заметка - {{ task }}</h1>
    </div>
    <div class="row">
      <div class="tasks-input animated fadeInLeft col-md-4 col-xs-12">
        <input
          class="tasks-input-text"
          type="text"
          v-model="newTodo"
          placeholder="Создайте задачу"
        />
      </div>
      <div class="tasks-input-b col-md-6 animated fadeInLeft col-xs-12">
        <input
          class="tasks-input-button"
          type="button"
          value="Добавить"
          @click="addNewTodo(newTodo, id)"
        />
      </div>
    </div>
    <div class="row">
      <div class="">
        <div v-for="(td, index) in todos" :key="index">
          <label>{{ td.todo }}</label>
          <input type="checkbox" v-model="td.isDone" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todo",
  data() {
    return {
      id: this.$route.params.id,
      task: "",
      todos: "",
      newTodo: "",
    };
  },
  mounted() {
    this.findTasks();
    this.activateData();
  },
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    ...mapActions(["findTasks", "addTodo"]),
    activateData() {
      (this.task = this.tasks[this.id].task),
        (this.todos = this.tasks[this.id].todos);
    },
    addNewTodo(todo, id) {
      this.addTodo([todo, id]);
      this.newTodo = "";
    },
  },
};
</script>

<style scoped>
h1,
label {
  color: #fff;
}
</style>
