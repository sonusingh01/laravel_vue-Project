<template>
    <Header></Header>
    <div class="container">
   
      <h1>SignUp</h1>
      <form action="" @submit.prevent="handleSubmission" >
      <input type="text"  placeholder="Name" v-model="name" />
      <span v-if="msg.name" style="color:red">{{ msg.name }}</span>
      <input type="email"  placeholder="Email"  v-model="email"/>
      <span v-if="msg.email" style="color:red">{{ msg.email }}</span>
      <input type="password" placeholder="Password"  v-model="password"/>
        <span v-if="msg.password" style="color:red">{{ msg.password }}</span>
          <button :disabled="isLoading">
            <div class="spinner-border" role="status" v-if="isLoading">
            <span class="visually-hidden">Loading...</span>
          </div>
          <span v-else>Submit</span>
        </button>
      </form>
      <p>
        <router-link to="/sign-in">Login</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import axios from "axios"
  import Header from "./Header.vue";
  
  export default {
    name: "RegisterView",
    components:{
        Header
    },
    data() {
     return {
      isLoading: false,
      name:"",
      email:"",
      password:"",
      msg: [],
      disabled: [true, true],
     }
  },
  watch: {
    name(value) {
        // binding this to the data value in the email input
        // this.email = value;
        this.validateName(value);
      },
      email(value) {
        // binding this to the data value in the email input
        // this.email = value;
        this.validateEmail(value);
      },
      password(value) {
        // this.password = value;
        this.validatePassword(value);
      },
    },
  methods: {
    validateName(value) {
        
        if (value.length < 20) {
          this.msg['name'] = '';
            this.disabled = [false, this.disabled[1]]
        } else {
          this.msg['name'] = 'Invalid name';
      this.disabled = [true, this.disabled[1]]
        }
      },
    validateEmail(value){
        if (/[a-zA-Z0-9.]*@[a-z]*[.a-z]*/.test(value))
    {
      this.msg['email'] = '';
      this.disabled = [false, this.disabled[1]]
    } else{
      this.msg['email'] = 'Invalid Email Address';
      this.disabled = [true, this.disabled[1]]
    } 
      },
      validatePassword(value) {
        let difference = 8 - value.length;
        if (value.length < 8) {
          this.msg["password"] =
            "Must be 8 characters! " + difference + " characters left";
          this.disabled = [this.disabled[1], true];
        } else {
          this.msg["password"] = "";
          this.disabled = [this.disabled[1], false];
        }
      },
    async handleSubmission(){
      if (!this.name) {
      this.msg["name"] = "Please enter your name";
      return
      }
      if (!this.email) {
      this.msg["email"] = "Please enter your email";
      return;
    }
    if (!this.password) {
      this.msg["password"] = "Please enter your password";
      return;
    }
    
      try {
          this.isLoading = true;
  
          // const hashedPassword = await hashPassword(this.password);
         const formdata={
        name:this.name,
        email:this.email,
        password:this.password,
      }
          const response = await axios.post(
            "http://localhost:3000/api/register",
            formdata
          );
          if (response.status === 201) {
            this.$router.push({name:"SignIn"})
          }
        } catch (error) {
          console.log(error);
          // Handle error here
        } finally {
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        } 
  
    },
   
  },
  
  }
  </script>
  
  <style scoped>
  .logo{
    width:100px;
  }
  .container {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    padding: 20px;
    margin: 20px;
    margin: auto;
    height: 30%;
  }
  .container form{
    display: flex;
    flex-direction: column;
  }
  .container input {
    margin: 10px;
    width: 300px;
    height: 30px;
    text-align: center;
  }
  .container button{
      width: 309px;
      padding: 10px;
      margin: 5px;
      font-size: 15px;
      background-color: rgb(36, 108, 74);
      color:white
  }
  </style>
  