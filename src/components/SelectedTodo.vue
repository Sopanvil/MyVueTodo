<template>
  <div class="container">
    <div class="row">
        <router-link :to="{ name: 'todos' }">
        >Обратно
        </router-link>
    </div>
    <div class="row">
      <h1>Выбранная Заметка - {{ tasksArr.task }}</h1>
    </div>
    <!-- Форма -->
    <div class="row">
      <div class="tasks-input  col-md-4 col-xs-12">
        <input
          class="tasks-input-text"
          type="text"
          v-model="newTodo"
          placeholder="Создайте todo"
        />
      </div>
      <div class="tasks-input-b col-md-6  col-xs-12">
        <input
          class="tasks-input-button"
          type="button"
          value="Добавить"
          @click="addTodoInArr(newTodo)"
        />
      </div>
    </div>
    <!-- Список Todo  -->
    <div class="row">
      <div class="todo-list">
        <div v-for="(td, index) in tasksArr.todos" :key="index">
          <input type="text" v-model="td.todo" />
          <input type="checkbox" v-model="td.isDone" />
        </div>
      </div>
    </div>
    <div class="row" v-if="tasksArr.todos.length != 0">
      <button class="save-task" type="submit" @click="addNewTodo()">
        Сохранить
      </button>
      <button class="cancel-changes" type="submit" @click="cancelChanges()">
        Отменить изменения
      </button>
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
      tasksArr: [],
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
    ...mapActions(["findTasks", "addTodo", "saveArr"]),
    // Запись текущих данных todo по текущей задаче
    activateData() {
      this.tasksArr = this.tasks[this.id];
    },
    addTodoInArr(todo) {
      this.tasksArr.todos.push({
        todo: todo,
        isDone: false,
      });
      this.newTodo = "";
    },
    // Отмена внесенных данных
    cancelChanges() {
      this.findTasks();
      this.activateData();
    },
    addNewTodo() {
      this.saveArr(this.tasksArr);
    },
  },
};
</script>

<style scoped>
h1,
label {
  color: #fff;
}
.todo-list-checkbox {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0 0 20px;
  background-color: #fff;
}
.save-task,
.cancel-changes {
  padding: 0 20px 0 20px;
  border: none;
  background-color: #fff;
  color: #000;
  font-size: 25px;
  transition: all 0.3s;
}
.save-task:hover,
.cancel-changes:hover {
  color: #fff;
  background-color: #3a3a3a;
  text-decoration: none;
}
a {
margin: 0;
  background-color: #fff;
  padding: 0 20px 0 20px;
  color: #000;
  font-size: 25px;
  text-decoration: none;
  transition: all 0.3s;
}
a:hover {
  color: #fff;
  background-color: #3a3a3a;
  text-decoration: none;
}
</style>
