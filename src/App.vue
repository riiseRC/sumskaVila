<template>
  <v-app light class="blue lighten-1">
    <app-menu></app-menu>
    <router-view></router-view>
  </v-app>
</template>

<script>
  import menu from './components/menu.vue'

  export default {
    components:{
      'app-menu': menu,
      },

    data () {
      return {
        methods(){
          
          },
      }
    }
  }
</script>
<style scoped>

</style>
