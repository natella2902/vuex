<template>
  <div class="container with-nav">
    <the-navbar></the-navbar>
    <div class="card">
      <h1> {{ titleUpperCase }}</h1>
      <h2>Счетчик {{ counter }}</h2>
      <button class="btn" @click="addOne">Push</button>
      <button class="btn danger" @click="asyncIncrement({ value: 100, duration: 300})">Push 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar'
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  components: {TheNavbar},
  // data() {
  //   return {
  //     count: 0
  //   }
  // },
  methods: {
    // increment() {
    //   return this.$store.state.count++
    // }
    ...mapMutations('count', ['add']),
    addOne() {
      this.add({value: 1})
    },
    // add () {
    //   this.$store.commit('add', {
    //     value: 50
    //   })
    // }
    ...mapActions('count', ['asyncIncrement'])
    // asyncAdd () {
    //   this.$store.dispatch('asyncIncrement', {
    //     value: 10,
    //     duration: 3000
    //   })
    // }
  },
  computed: {
    ...mapGetters('count', ['counter']),
    ...mapGetters(['titleUpperCase'])
    // counter () {
    //   return this.$store.getters.counter
    // }
  }
}
</script>
