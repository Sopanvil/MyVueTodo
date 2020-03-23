<template date-vide-bg="from_main_html/ocean.mp4">
  <div id="app">
    <div class="navbarios">
      <div class="container">
        <div class="row">
          <div class="col-md-2 offset-md-5">
            <h1 class="header-text">TODOS</h1>
          </div>
        </div>
        <div class="row">
            <router-link to="/" class="col-md-6">Home</router-link>
            <router-link to="/todos" class="col-md-6">Todos</router-link>
          
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
}
body {
  background: linear-gradient(90deg, #0111ebc2, #541f77f1, #cc0a54);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}
@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
}
a {
  color: aliceblue;
  font-size: 20px;
  text-decoration: none;
}
a:hover {
  color: rgb(0, 0, 0);
  background-color: aliceblue;
  text-decoration: none;
  transition: all 0.6s ease-in-out;
}

</style>



  git config --global user.email "lenivkov12@gmail.com"
  git config --global user.name "Sopanvil"