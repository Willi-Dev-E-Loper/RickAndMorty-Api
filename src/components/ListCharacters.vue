<script>
import {useStore} from "vuex";
import {onMounted, computed, watch, ref} from "vue";
import Card from "@/components/Card.vue";
export default{
  components:{
    Card
  },
  setup(){
    const store = useStore()
    const characters = computed(()=>{
      return store.state.characterFilter
    })
    const charactersSection = ref(null)
    onMounted(() => {
      store.dispatch('getCharacters')
      window.addEventListener('scroll', loadMore)
    })
    function loadMore() {
      const bottom = charactersSection.value.getBoundingClientRect().bottom
      const windowHeight = window.innerHeight
      if (bottom <= windowHeight) {
        store.dispatch('getCharacters')
      }
    }
    return{
      characters,
      charactersSection
    }
  }
}
</script>
<template>
  <section ref="charactersSection">
    <div class="characters">
      <div class="character-item" v-for="character in characters" :key="character.id">
        <Card :character="character" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.characters{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 3rem 0;
}

</style>
