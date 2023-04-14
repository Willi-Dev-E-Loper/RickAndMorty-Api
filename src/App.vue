<script>
import ListCharacters from "@/components/ListCharacters.vue";
export default {
  components: {ListCharacters},
  setup(){

  }
}
</script>

<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <ListCharacters></ListCharacters>
  </div>
</template>

<style scoped>
*{
  box-sizing: border-box;
  margin:0;
  padding: 0;
}
body{
  background-color: #82f149;
  color: azure;
  font-family: "Segoe UI", Tahoma,Geneva,Verdana,sans-serif;
}
h1{
  margin-bottom: 3rem;
  text-align: center;
}
.container{
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img{
  width: 100%;
}
</style>
