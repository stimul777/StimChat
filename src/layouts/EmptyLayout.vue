<template>
  <v-container grid-list-xs>
    <v-card height="30em">
      <v-row style="margin: 0">
        <SideBar />
        <ChatBody />
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import SideBar from "@/views/SideBar";
import ChatBody from "@/views/ChatBody";

export default {
  components: {
    SideBar,
    ChatBody
  },
  data: () => ({})
};
</script>
