<template>
  <div class="container">
    <div class="row">
      <div class="tasks-title animated fadeInLeft col-6">
        <p>Ваши Задачи</p>
      </div>
    </div>
    <div class="row">
      <div class="tasks-input animated fadeInLeft col-md-4 col-xs-12">
        <input
          class="tasks-input-text"
          type="text"
          v-model="newTask"
          placeholder="Создайте задачу"
        />
      </div>
      <div class="tasks-input-b col-md-6 animated fadeInLeft col-xs-12">
        <input
          class="tasks-input-button"
          type="button"
          value="Добавить"
          @click="addTodoTask(newTask)"
        />
      </div>
    </div>
    <div class="row">
      <div
        v-for="(t, index) in tasks"
        :key="index"
        class="tasks col animated fadeInLeft col-md-12"
      >
        <label @click="al(index)">{{ t.task }}</label>
        <button type="submit" @click="removeTask(index)">Удалить</button>
        <router-link :to="'/todos/' + index" class="col-md-6">
          Перейти
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Tasks",
  data() {
    return {
      newTask: "",
    };
  },
  mounted() {
    this.findTasks();
  },
  computed: {
    ...mapGetters(["tasks"]),
  },
  methods: {
    ...mapActions(["addTask", "removeTask", "findTasks"]),
    al(id) {
      console.log(id);
    },
    addTodoTask(text) {
      this.addTask(text);
      this.newTask = "";
    },
    removeTodoTask(id) {
      console.log(id);
      this.removeTask(id);
    },
  },
};
</script>

<style>
.tasks {
  margin-top: 50px;
  font-weight: 700;
  font-size: 30px;
  padding: 10px;
  color: #000;
  background-color: #fff;
}
.tasks-todo {
  font-weight: 700;
  font-size: 30px;
  color: #000;
  background-color: #fff;
}
.tasks-title {
  padding-right: 0;
  padding-left: 0;
  font-weight: 700;
  font-size: 75px;
  color: #fff;
}
.tasks-input {
  padding-right: 0;
  padding-left: 0;
}
.tasks-input-b {
  padding-right: 0;
  padding-left: 0;
}
.tasks-input-text {
  border: none;
  padding: 10px;
  width: 100%;
  margin-bottom: 25px;
}
.tasks-input-button {
  border: none;
  border-left: #000 1px solid;
  background-color: #fff;
  padding: 10px 50px 10px 50px;
}
</style>
