<template>
  <section class="chat">
    <div class="chat__message"></div>
    <input class="chat__input">
    <button class="chat__btn-send-message">Отправить</button>

  </section>
</template>

<script>
export default {
  // data {

  // },

  methods: {
    // connection() {
    //  const socket = io.connect(); 
    // }
  }
}
</script>


<style lang="less" scoped>
  .chat {
    width: 70%;
    height: 300px;
    margin: 0 auto;
    border: 1px solid black;

    .chat__message {
      width: 50%;
      height: 100px;
      margin: 0 auto;
      border: 1px solid green;
    }

    .chat__input {
      width: 30%;
      height: 50px;
    }
  }
</style>
