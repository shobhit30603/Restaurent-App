<template>
<Header/>
<h1>hello,update Restaurent</h1>
<form class="add">
<input type="text" name="name" placeholder="Enter Name" v-model="restaurent.name"/>
<input type="text" name="address" placeholder="Enter address" v-model="restaurent.address"/>
<input type="text" name="contact" placeholder="Enter contact" v-model="restaurent.contact"/>
<button type="button" v-on:click="updaterestaurent"> update Restaurent</button>
</form>
</template>
<script>
import Header from "./Header.vue"
import axios from "axios"
export default{
    name:"update",
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
       async updaterestaurent(){
         console.log(this.restaurent)
            const result= await axios.put("http://localhost:3000/restaurent/"+this.$route.params.id,{
            name:this.restaurent.name,
            address:this.restaurent.address,
            contact:this.restaurent.contact,
            });
            if(result.status==200){
                this.$router.push({name:"Home"})
            }

        }
    },

   async mounted(){
        let user=localStorage.getItem("user-info");
        if(!user){
             this.$router.push({name:"Signup"})
        }
        const result=await axios.get('http://localhost:3000/restaurent/'+this.$route.params.id)
       this.restaurent=result.data;
       
    }
}
</script>