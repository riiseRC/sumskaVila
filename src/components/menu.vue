<template>
<div>
    <v-toolbar class="tlbr" dark>
          <img class="logo" src="http://dreamicus.com/data/fairy/fairy-03.jpg"><img>
          <v-toolbar-title dark> <a href="/"> Šumska Vila </a></v-toolbar-title>
          <!-- <img src="http://www.transparentpng.com/download/fairy-tattoos/BrZEpi-fairy-tattoos-transparent-background.png"></img> -->
          <v-spacer></v-spacer>
          <v-toolbar-side-icon class="hidden-md-and-up" @click="open = !open"></v-toolbar-side-icon>
          <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Galerija</v-btn>
          <v-btn flat>
              <v-icon>info</v-icon>
              Info</v-btn>
        </v-toolbar-items>
    </v-toolbar>

        <v-list v-if="open" class="hidden-md-and-up menuList">
            <v-list-tile>
          <v-btn flat><a href="">Galerija</a></v-btn>
            </v-list-tile>
            <v-list-tile>
          <v-btn flat><a href=""><v-icon left>info</v-icon>info</a></v-btn>
            </v-list-tile>
        </v-list>
</div>
</template>

<script>
export default {
    data(){
        return{
            open: false
        }
    }    
}
</script>

<style scoped>
.logo{
    max-height: 55px;
}
.tlbr{
    background-color: rgb(30, 124, 153);
}
.menuList{
    background-color: rgb(39, 169, 209);
}
</style>
