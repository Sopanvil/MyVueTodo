<template>
  <div class="container">
    <div class="row">
      
        <p class="main-text-title animated fadeInUp">Заметки </p>
        <p class="main-text-text animated fadeInUp ">При использовании модификаторов порядок имеет значение, потому что код генерируется в том же порядке. Поэтому v-on:click.prevent.self будет предотвращать все клики, в то время как v-on:click.self.prevent будет предотвращать клики только на самом элементе. </p>
      
    </div> 
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
.container {
  color: #fff;
}
.main-text-title{
/* text-align: center; */
animation-duration: 1.5s;
font-weight: 700;
font-size: 75px;
}
.main-text-text{
animation-delay: 0.2s;
animation-duration: 1.5s;
font-size: 24px;
}
</style>