<template>
<img class="logo" src="../assets/signup.png"/>
<h1>Sign Up</h1>

<div class="register">
<input type="text" v-model="name" placeholder="Enter Name"/>
<input type="text"  v-model="email" placeholder="Enter Email"/>
<input type="Password"  v-model="password" placeholder="Enter Password"/>
<button v-on:click="signUp" >Sign up</button>
<p>
<router-link to="/login">Login</router-link>
</p>
</div>
</template>

<script>
import axios from 'axios'
export default{
    name:"Signup",
    data(){
      return{
        name:"",
        email:"",
        password:""
      }
    },
    methods:{
       async signUp(){
           let result= await axios.post("http://localhost:3000/user",{
            name:this.name,
            email:this.email,
            password:this.password
           });
           console.log(result);
           if(result.status==201){
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:"Home"})
           }
        }
    },
     mounted(){
        let user=localStorage.getItem("user-info");
        if(user){
             this.$router.push({name:"Home"})
        }
    }
}
</script>

<style>

</style>