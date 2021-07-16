<template>
  <v-navigation-drawer app permanent>
    <router-link to="/" exact>
      <v-img src="@/assets/LOGOAE_WEB.png" alt="" width="100%" />
    </router-link>
      <v-list shaped>
        <v-subheader>Menu</v-subheader>
        <v-list-item-group v-momdel="selectedMenu" mandatory color="primary">
          <v-list-item v-for="([icon, title, route], i) in menus" :key="i" link @click="onClickMenu(route)">
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-tile-title>{{ title }}</v-list-tile-title>
            </v-list-item-content>

          </v-list-item> 
        </v-list-item-group> 
      </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        selectMenu:0 ,
         menus: [
           ['mdi-apps-box' , 'Stock' , '/stock'] ,
           ['mdi-chart-line-stacked' , 'Report' , '/report'],
           ['mdi-information' , 'About' , '/about'] ,
         ]
      }
    },
    methods: {
      onClickMenu(link){
        this.$route.push(link)
      }
    },
  }
</script>

<style>
</style>