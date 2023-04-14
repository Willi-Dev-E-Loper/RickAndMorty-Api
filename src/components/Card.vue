<template>
  <div class="character" >
    <img :src="character.image" class="card-img-top" :alt="character.name">
    <div class="character_info">
      <h3>{{character.name}}</h3>
      <div class="status">
        <span :class="
       character.status === 'Alive' ? 'alive' :
        character.status === 'Dead' ? 'dead' :
        'default' "></span>
        <span> {{character.status}} - {{character.species}}</span>
      </div>
      <div class="origin">
        <span>
          Origin: {{character.origin.name}}
        </span>
      </div>
      <div class="location">
        <span>
          Location: {{character.location.name}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props:['character']
}
</script>

<style scoped>


.character:hover h3 {
  color: #f5ed33
;
}


.character{
  background-color: #428b4b;
  border-radius: 20px;
  box-shadow: 0 0 10px 1px beige;
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
}
.character:hover{
  transform: scale(1.05);

}
.character span {
  color: #59b6bb
;
}
.character h3 {
  color: aliceblue;
  margin-bottom: 0.5rem;
}
.character_info {
  padding: 1.5rem;
}
.character_info .status {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.character_info .status span {
  color: #9ac444;
}
.character_info .status span:first-child {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.character_info .status .alive {
  background-color: #b2d85f;
}
.character_info .status .dead {
  background-color: red;
}
.character_info .status .default {
  background-color: white;
}
.character_info .origen {
  margin-bottom: 0.5rem;
}

</style>