<template>
  <v-row style="margin: 0">
    <v-container style="border: 1px solid black; height:2%; margin: 0;"
      >Шапка
    </v-container>
    <v-container style="border: 1px solid black; height:80%">
      Рабочая область
    </v-container>
    <MessagePanel />
  </v-row>
</template>

<script>
import MessagePanel from "@/components/MessagePanel";

export default {
  name: "chatBody",
  components: {
    MessagePanel
  },
  data: () => ({})
};
</script>
