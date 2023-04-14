import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

import './assets/main.css'
const store = createStore({
    state:{
        characters: [],
        characterFilter: [],
        currentPage: 1

    },
    mutations:{
        setCharacter(state,payload){
            if (state.characters.length===0  ){
                state.characters = payload
            }else{
                state.characters = state.characters.concat(payload)
            }
        },
        setCharacterFilter(state, payload){
            if (state.characters.length===0  ){
                state.characterFilter = payload
            }else{
                state.characterFilter = state.characterFilter.concat(payload)
            }
        },
        setCurrentPage(state, payload){
            state.currentPage = payload
        }
    },
    actions:{
        async getCharacters(context){
            try {
                const response = await fetch( "https://rickandmortyapi.com/api/character?page="+context.state.currentPage)
                const data = await response.json()
                context.commit('setCharacter', data.results)
                context.commit('setCharacterFilter', data.results)
                context.commit('setCurrentPage', context.state.currentPage + 1)
                console.log(data)

            }catch (error){
                console.log(error)
            }
        }
    }
})
createApp(App).use(store).mount('#app')
