<template>
    <Header></Header>
    <div class="container">
      <h1>Sign In</h1>
      <form @submit.prevent="handleSubmission">
        <input type="email" placeholder="Email" v-model="email" />
        <span v-if="msg.email" style="color: red">{{ msg.email }}</span>
        <input type="password" placeholder="Password" v-model="password" />
        <span v-if="msg.password" style="color: red">{{ msg.password }}</span>
        <button :disabled="isLoading">
          <div class="spinner-border" role="status" v-if="isLoading">
            <span class="visually-hidden">Loading...</span>
          </div>
          
          <span v-else>Submit</span>
        </button>
      </form>
  
      <router-link to="/sign-up">Sign-Up</router-link>
    </div>
  </template>
  <script>
  import axios from "axios";
  import Header from "./Header.vue";
  export default {
    name: "SignIn",
    components:{
        Header
    },
  
    data() {
      return {
        isLoading: false,
        email: "",
        password: "",
        msg: [],
        disabled: [true, true],
      };
    },
    watch: {
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
      validateEmail(value) {
        if (/[a-zA-Z0-9.]*@[a-z]*[.a-z]*/.test(value)) {
          this.msg["email"] = "";
          this.disabled = [false, this.disabled[1]];
        } else {
          this.msg["email"] = "Invalid Email Address";
          this.disabled = [true, this.disabled[1]];
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
      async handleSubmission() {
        debugger
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
          const formdata = {
            email: this.email,
            password: this.password,
          };
          const response = await axios.post(
            "http://localhost:3000/api/login",
            formdata
          );
          if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            this.$router.push({ name: "HomeView" });
          }
        } catch (error) {
         alert("Invalied")
          // Handle error here
        } finally {
          setTimeout(() => {
            this.isLoading = false;
          
          }, 3000);
        }
      },
    },
    mounted() {
      let token = localStorage.getItem("token");
      console.log(token);
      if (token) {
        this.$router.push({ name: "HomeView" });
      }
    },
  };
  </script>
  
  <style  scoped>
  .logo {
    width: 100px;
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
  .container form {
    display: flex;
    flex-direction: column;
  }
  .container input {
    margin: 10px;
    width: 300px;
    height: 30px;
    text-align: center;
  }
  .container button {
    width: 309px;
    padding: 10px;
    margin: 5px;
    font-size: 15px;
    background-color: rgb(36, 108, 74);
    color: white;
  }
  </style>
  