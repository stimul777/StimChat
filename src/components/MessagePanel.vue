<template>
  <v-col class="row">
    <div class="btn">
      <!-- <button class="btn-add-video"></button>
      <button class="btn-add-photo"></button>
      <button class="btn-add-file"></button> -->
      <button class="btn-action"></button>
    </div>
    <v-textarea dense no-resize solo height="70px"></v-textarea>
    <v-btn>:)</v-btn>
    <v-btn>Send</v-btn>
  </v-col>
</template>

<style scoped>
/* My Stile */
.btn-action {
  height: 40px;
  width: 40px;
  border: none;
  background: url("../images/actions/add-icon.svg") no-repeat;
}

.btn-add-file {
  height: 40px;
  width: 40px;
  background: url("../images/actions/icon-file.svg") no-repeat;
}

.btn-add-photo {
  height: 40px;
  width: 40px;
  background: url("../images/actions/icon-photo.svg") no-repeat;
}

.btn-add-video {
  height: 40px;
  width: 40px;
  background: url("../images/actions/icon-video.svg") no-repeat;
}
/* Default style */
/* .v-btn--is-elevated {
  box-shadow: none;
}

.v-btn--has-bg {
  background-color: #ffffff !important;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 40px;
  min-width: 40px;
} */
</style>
