import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      clickMenu: false,
      posts: [
        { id: '1', state: 'save_post', title: 'first post', tags: ['css', 'html', 'javascript'] },
        { id: '2', state: 'save_post', title: 'second post', tags: ['css', 'php', 'javascript'] },
        { id: '3', state: 'save_post', title: 'third post', tags: ['css', 'c#', 'javascript'] },
        { id: '4', state: 'save_post', title: 'fourth post', tags: ['css', 'ruby', 'javascript'] },
        { id: '5', state: 'save_post', title: 'fifth post', tags: ['css', 'java', 'javascript'] },
        { id: '6', state: 'save_post', title: 'sixth post', tags: ['css', 'python', 'javascript'] }
      ]
    }
  },
  mutations: {
    CLOSE_MENU (state) {
      state.clickMenu = !state.clickMenu
    },
    SAVE_POST(state, id) {
      state.posts.find(post => post.id === id).state = 'save_post';
    },
    COMMEND_POST(state, id) {
      state.posts.find(post => post.id === id).state = 'commend_post';
    }  
  },
  actions: {
    closeMenu({ commit }){
      commit('CLOSE_MENU')
    },
    savePost ({ commit }, id) {
      commit('SAVE_POST', id);
    },
    commendPost({ commit }, id) {
      commit('COMMEND_POST', id)
    }
  },
  modules: {
  }
})
