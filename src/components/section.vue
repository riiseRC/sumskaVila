<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 sm6 md3>
                <v-card class="card" light>
                    <v-card-title> <v-icon> airline_seat_flat</v-icon> Sobe :</v-card-title>
                    <hr>
                    <v-card-text>3</v-card-text>
                    <v-card-text>2</v-card-text>
                    <v-card-text>1</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3>
                <v-card class="card" light>
                    <v-card-title>Osnovna Oprema :</v-card-title>
                    <hr>
                    <v-card-text>Posteljina</v-card-text>
                    <v-card-text>Rucnici</v-card-text>
                    <v-card-text>WC papir</v-card-text>
                    <v-card-text>Sapun</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3>
                <v-card class="card" light>
                    <v-card-title>Grijanje :</v-card-title>
                    <hr>
                    <v-card-text>Centralno</v-card-text>
                    <v-card-text>Grijalica</v-card-text>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 md3>
                <v-card class="card" light>
                    <v-card-title> <v-icon> add_to_queue</v-icon> :</v-card-title>
                    <hr>
                    <v-card-text>Parking</v-card-text>
                    <v-card-text>TV</v-card-text>
                    <v-card-text>Dorucak</v-card-text>
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
    background-color: rgb(224, 224, 196);
}

</style>
