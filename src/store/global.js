export default {
  namespaced: true,
  state: {
    isPageTransition: false
  },
  actions: {
  },
  mutations: {
    setPageTransition (state, status) {
      state.isPageTransition = status
    }
  },
}