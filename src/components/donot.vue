<template>
    <v-container fluid>
        <v-layout row wrap class="text-alight-center">
            <v-flex xs12 sm6 md6 >
                <v-card class="card">
                    <v-card-title>Nije ukljuceno :</v-card-title>
                    <hr>
                    <v-card-text>WI-FI</v-card-text>
                    <v-card-text>Perilica</v-card-text>
                    <v-card-text>Klima uređaj</v-card-text>
                    <v-card-text>detektor ugljikovog monoksida</v-card-text>
                    <v-card-text>detektor dima</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6 >
                <v-card class="card">
                    <v-card-title>Sigurnosna oprema</v-card-title>
                    <hr>
                    <v-card-text>Prva pomoc</v-card-text>
                    <v-card-text>aparat za gasenje pozara</v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data(){
        return{

        }
    }    
}
</script>

<style scoped>
.card{
    margin: 5px 5px;
}
</style>
