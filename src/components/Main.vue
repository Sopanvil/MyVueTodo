<template>
  <div class="container">
    <div class="row">
      <div class="main-text">
        <p class="main-text-title animated fadeInUp d-flex justify-content-center">Заметки</p>
        <p class="main-text-text animated fadeInUp d-flex justify-content-center">Lorem Ipsum - В то время н</p>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
.main-text{
color: aliceblue;
margin-top: 100px;
}
.main-text-title{
animation-duration: 1.5s;
font-weight: 700;
font-size: 75px;
}
.main-text-text{
animation-delay: 0.2s;
animation-duration: 1.5s;
font-size: 24px;
}
.container {
  border: linear-gradient(90deg, #df001ec2, #6f1da7f1, #100acc) 5px;
  padding: 100px;
  background: linear-gradient(90deg, #df001ec2, #6f1da7f1, #100acc);
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
</style>