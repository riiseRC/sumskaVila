<template>
    <v-app class="blue lighten-1">
        <v-container fluid v-show="list">
            <img v-for="(item, x) in items"
                    :key="x"
                    :src="item"
                    @click="open"
                    class="img sm3 md3 lg3"/>
        </v-container>
        <div class="resp" v-show="show">
            <v-img :src="currentImg">
                <v-btn flat class="left" @click="counterP"><v-icon>keyboard_arrow_left</v-icon></v-btn>
                <v-btn flat class="right" @click="counterM"><v-icon>keyboard_arrow_right</v-icon></v-btn>
                <div flat @click="exit" class="exit"><v-icon dark>highlight_off</v-icon></div>
            </v-img>
        </div>
    </v-app>
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
            ],
            counter: 0,
            currentImg : '',
            show : false,
            list : true
        }
    },
        methods:{
            counterP: function() {
                this.currentImg = this.items[this.counter];
                
                if(this.counter == (this.items.length-1)){
                    this.counter = 0;
                }else{
                    this.counter++;
                }
            },
            counterM: function(){
                this.currentImg = this.items[this.counter];
                console.log(this.counter);
                
                if(this.counter == 0){
                    this.counter = (this.items.length-1);
                }else{
                    this.counter--;
                }  
            },
            open: function(e){
                console.log(e.target.src);
                this.currentImg = e.target.src;
                this.show = true;
                this.list = false;
            },
            exit: function(){
                this.show = false;
                this.list = true;
            }
        }
}

</script>

<style scoped>
.img{
    width: 200px;
    height: 200px;
    margin: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0px -1px 23px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -1px 23px 0px rgba(0,0,0,0.75);
    box-shadow: 0px -1px 23px 0px rgba(0,0,0,0.75);
}
.resp{
    min-width: 70%;
    margin: 20px auto;
    text-align: center;
    -webkit-box-shadow: 0px -1px 23px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -1px 23px 0px rgba(0,0,0,0.75);
    box-shadow: 0px -1px 23px 0px rgba(0,0,0,0.75);
    border: 2px solid rgb(65, 63, 63);
}
.left{
    float: left;
    color: #f0f8ff;
    height: 100%;
    background-color: rgba(0, 0, 255, 0.034);
}
.right{
    float: right;
    color: #f0f8ff;
    height: 100%;
    background-color: rgba(0, 0, 255, 0.027);
}
.right:hover{
    top: 0px;
    height: 100%;
    margin: 5px 0px;
    background-color: rgba(0, 0, 255, 0.342);
}
.left:hover{
    top: 0px;
    height: 100%;
    margin: 5px 0px;
    background-color: rgba(0, 0, 255, 0.349);
}
.exit{
    background-color: rgba(0, 0, 255, 0.055);
    width: 50%;
    margin: 0px auto; 
}
.exit:hover{
    background-color: rgba(59, 59, 255, 0.692);
    padding: 5px;
    width: 100%;
    transition: 0.5s;
}
@media screen and (max-width: 700px){
.resp{
    width: 95%;
}
}
/* return this.images[Math.abs(this.currentNumber) % this.images.length]; */
</style>


