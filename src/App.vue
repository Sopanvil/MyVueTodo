<template date-vide-bg="from_main_html/ocean.mp4">
  <div id="app">
    <div class="navbarios">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <h1 class="header-text">MyTrLogic</h1>
          </div>
        </div>
        <div class="row">
          <router-link to="/" class="col-md-6">Home</router-link>
          <router-link to="/todos" class="col-md-6">Todos</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      bookmarks: [
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
#app {
  font-family: "Montserrat", sans-serif;
}
body {
  /* background: linear-gradient(90deg, #fff, #fffffff1); */
  background-color: #000;
}
.navbarios{
  background-color: #fff;
  margin-bottom: 100px;
  /* border-bottom: 3px solid #000; */
}
a {
  padding: 0 10px 0 10px;
  color: #000;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.3s;
}
a:hover {
  color: #fff;
  background-color: #000;
  text-decoration: none;
}
a:focus {
  color: #fff;
  background-color: #000;
  text-decoration: none;
}
/* a:active {
  color: #1a1a1a;
  background-color: #929292;
  text-decoration: none;

} */
.header-text{
  font-weight: 700 ;
  color: #000;
}
</style>