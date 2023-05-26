<template>
  <HeaderComponent></HeaderComponent>
  <input type="text" v-model="message">
  <button @click="postMessage">Send Meassage</button>
</template>

<script>

import { doHardWork } from './worker-api'
import HeaderComponent from './components/global/header/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data() {
    return {
      message: "",
      time: new Date()
    }
  },
  mounted() {
    setInterval(() => {
      this.time = new Date();
    }, 300)
  },
  methods: {
    async postMessage() {
     const result = doHardWork()
     console.log('uppercase result', result)
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
