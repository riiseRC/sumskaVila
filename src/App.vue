<template>
  <v-app class="body" light >
    <app-menu></app-menu>
    <app-welcome></app-welcome>
    <app-section></app-section>
    <introgallery></introgallery>
    <donot></donot>
    <dno></dno>
  </v-app>
</template>

<script>
  import welcome from './components/welcome.vue'
  import menu from './components/menu.vue'
  import section from './components/section.vue'
  import introGallery from './components/introGallery.vue'
  import donot from './components/donot.vue'
  import footer from './components/footer.vue'

  export default {
    components:{
      'app-menu': menu,
      'app-welcome': welcome,
      'app-section': section,
      'introgallery': introGallery,
      'donot' : donot,
      'dno': footer  
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
.body{
  background-color: rgb(173, 216, 230);
}
</style>
