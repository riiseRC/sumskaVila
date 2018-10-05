<template>
    <v-container fluid>
        <v-layout row wrap class="text-alight-center">
            <v-flex xs12 sm6 md6 >
                <v-card class="card">
                    <v-card-title>Nije ukljuceno :</v-card-title>
                    <hr>
                    <v-card-text>1</v-card-text>
                    <v-card-text>2</v-card-text>
                    <v-card-text>3</v-card-text>
                    <v-card-text>4</v-card-text>
                    <v-card-text>5</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md6 >
                <v-card class="card">
                    <v-card-title>Sigurnosna oprema</v-card-title>
                    <hr>
                    <v-card-text>1</v-card-text>
                    <v-card-text>2</v-card-text>
                    <v-card-text>3</v-card-text>
                    <v-card-text>4</v-card-text>
                    <v-card-text>5</v-card-text>
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
