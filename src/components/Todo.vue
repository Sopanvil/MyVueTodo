<template>
  <div class="container">
    <div class="row">
      <div class="tasks-title animated fadeInLeft col-6">
        <p>Ваши Задачи {{newTask}}</p>
      </div>
    </div>
    <div class="row">
      <div class="tasks-input animated fadeInRight col-md-4 col-xs-12">
        <input class="tasks-input-text " type="text" v-model="newTask" placeholder="Создайте задачу">
      </div>
      <div class="tasks-input-b col-md-6 animated fadeInRight col-xs-12">
        <input class="tasks-input-button" type="button" value="Добавить">
      </div>
    </div>
    <div class="row">
      <div v-for="(t, index) in tasks" :key="index" class="tasks col animated fadeInLeft col-md-12">
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
hr{
  border-bottom: 1px solid #fff;
}
.tasks{
  margin-top: 100px;
  font-weight: 700;
  font-size: 30px;
  padding: 10px;
  color: #000;
  background-color: #fff;
/* animation-delay: 0.2s;
animation-duration: 1.5s; */


}
.tasks-title{
  padding-right: 0;
  padding-left: 0;
  font-weight: 700;
  font-size: 75px;
  color: #fff;
}
.tasks-input{
  padding-right: 0;
  padding-left: 0;
}
.tasks-input-b{
  padding-right: 0;
  padding-left: 0;
}
.tasks-input-text{
  border: none;
  /* border: #000 1px solid; */
  padding: 10px;
  width: 100%;

  /* border-bottom: 2px solid #080bd1; */
  margin-bottom: 25px;
}
.tasks-input-button{
  /* font-weight: bold; */
  border: none;
  border-left: #000 1px solid;
  background-color: #fff;
  padding: 10px 50px 10px 50px;
  /* margin-left: 5px; */
}
</style>
