<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters('configuration', [
      'numberOfDigits',
      'range'
    ])
  },
  methods: {
    ...mapMutations('configuration', [
      'setNumberOfDigits',
      'setRange'
    ])
  }
}
</script>
