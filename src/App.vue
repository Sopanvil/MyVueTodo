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
          <router-link :to="{ name: 'main' }" class="col-md-6">
            Главная
          </router-link>
          <router-link :to="{ name: 'todos' }" class="col-md-6">
            Задачи
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {};
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
}
body {
  background-color: #000;
}
.navbarios {
  background-color: #fff;
  margin-bottom: 100px;
}
a {
  padding: 0 20px 0 20px;
  color: #000;
  font-size: 25px;
  text-decoration: none;
  transition: all 0.3s;
}
a:hover {
  color: #fff;
  background-color: #000;
  text-decoration: none;
}

.header-text {
  font-weight: 700;
  color: #000;
}
</style>
