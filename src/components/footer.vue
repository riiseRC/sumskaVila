<template>
<v-container>
    <v-footer class="footer" dark height="auto">
             <v-flex sm9 md9 lg9>
                 <p>Copyright</p>
                 <p>edited by riise</p>
            </v-flex>
            <v-flex sm3 md3 lg3 class="flex1">
            <v-btn class="links right container" flat
                v-for="(x, i) in socialMedia"
                :key="i"
                :src="x.src">
                <a :href=x.src target="_blank">{{x.name}}</a>
            </v-btn>
            </v-flex>           
    </v-footer>
</v-container>
</template>

<script>
export default {
    data(){
        return{
            socialMedia: [
                {name :'facebook', src: 'http://www.facebook.com'},
                {name :'insta', src: 'http://www.instagram.com'},
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
.links{
    font-size: 11px;
}
p{
    margin: 15px;
    text-align: center;
}
.flex1{
    border-right: 1px solid #333;
}
</style>

