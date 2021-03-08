<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    width="200"
    height="30em"
    mini-variant-width="45"
    stateless
    temporary
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-btn>LOG OUT</v-btn>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: " HOME", icon: "mdi-home-city" },
      { title: " CHAT", icon: "mdi-account" },
      { title: " SETTINGS", icon: "mdi-account-group-outline" }
    ],
    mini: true
  })
};
</script>
