import BackTop from "components/content/backTop/BackTop";


export const backToMixin = {
  components: {
    BackTop,
  },
  data() {
    return {
      isBackShow: false
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 200)
    },
  }
}


