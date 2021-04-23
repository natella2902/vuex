<template>
  <header class="navbar">
    Vuex {{ counter }} ( {{ dblCounter }} )
    <button class="btn primary" @click="addFive">Push 5</button>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  // methods: {
  //   addFive() {
  //     console.log('!!!')
  //     return this.$store.state.count += 10
  //   }
  //   add () {
  //     this.$store.commit('add', 5)
  //   }
  // },
  methods: {
    ...mapMutations('count', ['add']),
    addFive () {
      this.add({
        value: 5
      })
    }
  },
  computed: {
   ...mapGetters('count', ['counter', 'dblCounter'])
  }
}
</script>
