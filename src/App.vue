<template>
  <v-app>
   <Header v-if="false"/>    
   <Menu v-if="false"/>
   <Content/>
  </v-app>
  
</template>

<script>
import Content from './components/core/Content.vue'
import Header from './components/core/Header.vue'
import Menu from './components/core/Menu.vue'
export default {
  name : "App" ,
  components: {
    Header ,
    Menu,
    Content
  }
}
</script>

<style>

</style>