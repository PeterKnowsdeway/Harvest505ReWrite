<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <input type="text" v-model="message">
  <button @click="postMessage">Send Meassage</button>
</template>

<script>

import { doHardWork } from './worker-api';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
  margin-top: 60px;
}
</style>
