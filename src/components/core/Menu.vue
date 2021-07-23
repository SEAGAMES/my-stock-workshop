<template>
  <v-navigation-drawer app permanent>
    <router-link to="/stock" exact>
      <v-img src="@/assets/LOGOAE_WEB.png" alt="" width="80%" />
    </router-link>
    <v-list shaped>
      <v-subheader>Menu</v-subheader>
      <v-list-item-group v-model="selectMenu" mandatory color="primary">
        <v-list-item
          v-for="([icon, title, route], index) in menus"
          :key="index"
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      selectMenu: 0,
      menus: [
        ["mdi-apps-box", "Stock", "/stock"],
        ["mdi-chart-line-stacked", "Report", "/report"],
        ["mdi-information", "About", "/about"],
      ],
    };
  },
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch(() => { });
    }
  },
  // watch:{
  //   $route(to, from) {
  //     this.selectMenu = this.menus.findIndex(menu => menu[2] == to.path)
  //   }
  // }
};
</script>

<style>
</style>