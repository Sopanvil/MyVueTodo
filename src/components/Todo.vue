<template>
  <div class="container">
    <div class="row">
      <div class="tasks-title animated fadeInLeft">
        <p>Ваши Задачи {{newTask}}</p>
      </div>
    </div>
    <div class="row">
      <div class="tasks-input offset-md-2 col-md-7">
        <input class="tasks-input-text" type="text" v-model="newTask" placeholder="Создайте вашу задачу">
        <input class="tasks-input-button" type="button" value="+">
      </div>

    </div>
    <div class="row">
      <div v-for="(t, index) in tasks" :key="index" class="tasks col animated fadeInRight">
        {{t.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data: function() {
    return {
      tasks: [
        {
          title: "Мой понедельник",
          todos: [
            {
              title: "Завтрак",
              isActive: true
            },
            {
              title: "Работа",
              isActive: true
            }
          ]
        }
      ],
      newTask: ''
    };
  }
};
</script>

<style>
.tasks{
  color: #000;
  background-color: #fff;
}
.tasks-title{
  font-weight: 700;
  font-size: 75px;
  color: #fff;
}
.tasks-input-text{
  padding: 10px 100px 10px 100px;
  margin-bottom: 25px;
}
.tasks-input-button{
  padding: 10px 100px 10px 100px;
  margin-bottom: 25px;
}
</style>
