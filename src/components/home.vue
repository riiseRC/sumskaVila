<template>
    <v-app  class="blue lighten-1">
        <app-welcome></app-welcome>
        <app-section></app-section>    
        <app-introg></app-introg>    
        <app-donot></app-donot>
        <app-footer></app-footer>
    </v-app>
</template>

<script>
  import welcome from './welcome.vue'
  import section from './section.vue'
  import introg from './introGallery.vue'
  import donot from './donot.vue'
  import footer from './footer.vue'

export default {
    components:{
        'app-welcome': welcome,
        'app-section': section,
        'app-introg': introg,
        'app-donot': donot,
        'app-footer': footer,
    },
    data(){
        return{

        }
    }    
}
</script>

<style scoped>

</style>
