<template>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter">
    <title>Your Page Title</title>
  </head>
  <body>
     <HeaderComponent></HeaderComponent>
    <main>
      <h1 class="sr-only">Content</h1>
      <form>
        <fieldset>
          <legend>Message</legend>
          <div>
            <label for="message">Message:</label>
            <input type="text" id="message" v-model="message" aria-label="Message" title="Enter your message">
          </div>
          <button type="button" @click="postMessage">Send Message</button>
        </fieldset>
      </form>
    </main>
  </body>
</html>
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
