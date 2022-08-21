<template>
<Header/>
<h1>hello,Add Restaurent</h1>
<form class="add">
<input type="text" name="name" placeholder="Enter Name" v-model="restaurent.name"/>
<input type="text" name="address" placeholder="Enter address" v-model="restaurent.address"/>
<input type="text" name="contact" placeholder="Enter contact" v-model="restaurent.contact"/>
<button type="button" v-on:click="addrestaurent"> Add new Restaurent</button>
</form>
</template>
<script>
import Header from "./Header.vue"
import axios from "axios"
export default{
    name:"Add",
    components:{
        Header,
    },
    data(){
        return{
            restaurent:{
                name:"",
                address:"",
                contact:""
            }
        }
    },

    methods:{
         async addrestaurent(){
            console.log(this.restaurent)
            const result= await axios.post("http://localhost:3000/restaurent",{
            name:this.restaurent.name,
            address:this.restaurent.address,
            contact:this.restaurent.contact,
            });
            if(result.status==201){
                this.$router.push({name:"Home"})
            }
        }
    },
     mounted(){
       let user=localStorage.getItem("user-info");
        if(!user){
             this.$router.push({name:"Signup"})
        }
    }
}
</script>