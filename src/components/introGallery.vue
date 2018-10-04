<template>
    <v-container fluid>
        <v-carousel class="carl">
            <v-carousel-item fill-height
                v-for="(item,i) in items"
                :key="i"
                :src="item">
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            items: [
                'https://i.postimg.cc/bN3GD38x/26a5d813-be91-4935-85e5-2de23cf6354e.jpg',
                'https://i.postimg.cc/L5VJVVPM/11b9e735-cf1e-4874-86f6-b9210e97c96c.jpg',
                'https://i.postimg.cc/pLmd9vsv/ebc6f3d9-d774-4c50-a492-90ebf7bc64ed.jpg',
                'https://i.postimg.cc/T3B3gssD/ae0469f3-2242-42ff-aa47-84b9cabf3ec7.jpg',
                'https://i.postimg.cc/K8WRQj14/98e57bf0-1638-4761-8a27-8456d3d3157e.jpg',
                'https://i.postimg.cc/jqh2mZDp/97443db9-8cfe-4620-8ef8-56d7085b8eef.jpg',
                'https://i.postimg.cc/WpmqjsHf/6c383962-a280-496c-964e-20be89ce5df2.jpg',
                'https://i.postimg.cc/QdCFp1xR/72c7c71c-77bd-4f85-82fc-0d09aca029e4.jpg',
                'https://i.postimg.cc/FzGKSHtr/7466afdb-7a48-495d-8c0d-d18e353257f2.jpg',
                'https://i.postimg.cc/FKJ16vSp/827b04a2-0c67-4186-bb4a-b26cb7596720.jpg',
                'https://i.postimg.cc/sDVQgtFf/8f6944c5-809f-4b4a-acf2-bb863973e6d1.jpg',
                'https://i.postimg.cc/TY7wY1qQ/951824f4-c424-4925-8db7-1ab0a374443e.jpg',
                'https://i.postimg.cc/fys3XPJK/5b6746a3-218f-4fac-a5c3-a584c98ff3e0.jpg',
                'https://i.postimg.cc/4dV7YGNy/3cd285df-612f-44df-b2ad-ee552e63f10f.jpg',
                'https://i.postimg.cc/CKZfVD3j/1bc0f0de-f3a7-44f1-abc1-5cefc582b4e6.jpg'
            // https://postimg.cc/gallery/dpp6an14/
            ]
        }
    }    
}
</script>

<style scoped>
.carl{
    border: 3px solid rgb(192, 190, 190);
}
</style>
