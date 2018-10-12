<template>
<div>
    <v-toolbar class="tlbr blue darken-4" dark>
          <img class="logo" src="http://dreamicus.com/data/fairy/fairy-03.jpg"><img>
            <v-toolbar-title dark> 
            <router-link to="/">
            <h4>Šumska Vila</h4></router-link>
            </v-toolbar-title>
          <!-- <img src="http://www.transparentpng.com/download/fairy-tattoos/BrZEpi-fairy-tattoos-transparent-background.png"></img> -->
          
          <v-spacer></v-spacer>
          <v-toolbar-side-icon class="hidden-md-and-up" @click="open = !open"></v-toolbar-side-icon>
          <v-toolbar-items class="hidden-sm-and-down">

            <router-link to="/galerija" exact><v-btn flat top>galerija</v-btn></router-link>
            <router-link to="/info" exact><v-btn flat top><v-icon left>info</v-icon>Info </v-btn></router-link>
            <router-link to="/"><v-btn flat top><v-icon left >home</v-icon> </v-btn></router-link>
        </v-toolbar-items>
    </v-toolbar>

        <v-list dark v-if="open" class="hidden-md-and-up blue darken-3">
            <v-list-tile>
                <router-link to="/galerija" ><v-btn flat center>galerija</v-btn></router-link>          
            </v-list-tile>
            <v-list-tile>
                <router-link to="/info"><v-btn flat center><v-icon left>info</v-icon>Info </v-btn></router-link>
            </v-list-tile>
            <v-list-tile>
                <router-link to="/"><v-btn flat ><v-icon left center>home</v-icon> </v-btn></router-link>
            </v-list-tile>
        </v-list>
</div>
</template>

<script>
export default {
    data(){
        return{
            open: false,
            showit: false
        }
    }    
}
</script>

<style scoped>
.logo{
    max-height: 55px;
}
.router-link-exact-active{
  background-color:rgb(51, 51, 255);
}
</style>
