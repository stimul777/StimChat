<template>
  <div>
    <vChat/>
  </div>
</template>

<script>
import VueSocketIO from 'vue-socket.io'

import vChat from './components/chat/Chat.vue'
// import foo from "foo"



export default {
  name: 'App',
  components: {
    vChat
  }
}
</script>

<style>

</style>
