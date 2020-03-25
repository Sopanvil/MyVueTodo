<template>
  <div class="container">
    <div class="row">
      <div class="tasks-title animated fadeInLeft">
        <p>Ваши Задачи</p>
      </div>
    </div>
    <div class="row">
      <div v-for="(t, index) in tasks" :key="index" class="tasks col-md-12 animated fadeInRight">
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
      ]
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
</style>
