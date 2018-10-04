<template>
    <v-footer class="footer" dark height="auto">
        <v-flex>
            <v-card>
                <v-card-title>Info</v-card-title>
                <v-spacer></v-spacer>
            <v-btn flat
                v-for="(x, i) in socialMedia"
                :key="i"
                :src="x.src">
                <a :href=x.src target="_blank">{{x.name}}</a>
            </v-btn>
            </v-card>
        </v-flex>
    </v-footer>
</template>

<script>
export default {
    data(){
        return{
            socialMedia: [
                {name :'facebook', src: 'http://www.instagram.com'},
                {name :'insta', src: '#'},
                {name :'tripadv', src: '#'}
            ],
        }
    }    
}
</script>

<style scoped>
.footer{
    border-top: 2px solid rgb(129, 123, 123);
}
</style>

