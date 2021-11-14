import {mapState} from 'vuex'

export default {
  data () {
    return {
      clearPage: true
    }
  },
  computed: {
    ...mapState('global', ['isPageTransition'])
  },
  watch: {
    isPageTransition () {
      if (this.isPageTransition) this.clearPage = true
    }
  },
  mounted () {
    setTimeout(() => {this.clearPage = false}, 20)
  }
}