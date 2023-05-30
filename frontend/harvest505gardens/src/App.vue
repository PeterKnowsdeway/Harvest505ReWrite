<template>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Your Page Title</title>
  </head>
  <body>
    <div class="app">
      <HeaderComponent></HeaderComponent>
      <main class="content">
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
      <FooterComponent></FooterComponent>
  </div>
  </body>
</html>
</template>

<script>

import { doHardWork } from './util/worker-api'
import HeaderComponent from './components/global/header/HeaderComponent.vue'
import FooterComponent from './components/global/footer/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
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

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

</style>
