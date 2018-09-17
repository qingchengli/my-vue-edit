import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tags: []
  },
  mutations: {
    addTag (state, obj) {
      let isNew = true
      state.tags.forEach(item => {
        if (item.name === obj.name) {
          isNew = false
        }
      })
      if (isNew) {
        state.tags.push(obj)
      }
    },
    deleteTag (state, tag) {
      state.tags.splice(state.tags.indexOf(tag), 1)
    }
  }
})

export default store
