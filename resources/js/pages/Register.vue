<template>
    <div>
        <Header></Header>
        
        <div class="container">
            <h1>Register Page</h1>
            <form>
                <label>
                    UserName:
                    <input type="text" v-model="name" />
                  
                </label>
                <label>
                    Email:
                    <input type="email" v-model="email" />
                </label>
                <label>
                    Password:
                    <input type="password" v-model="password" />
                </label>
                <button type="submit" @click.prevent="login">Register</button>
            </form>
            <p v-if="error">{{ error }}</p>
        </div>

    </div>
</template>
  
<script>
import Header from "./Header.vue"
export default {
    name: "LoginView",
    components: {
        Header
    },
    data() {
        return {
            name:"",
            email: '',
            password: '',
            error: ''
        }
    },
    watch: {
        name: function (newVal) {
            this.validateName(newVal)
        },
        email: function (newVal) {
            this.validateEmail(newVal)
        },
        password: function (newVal) {
            this.validatePassword(newVal)
        }
    },
    methods: {
        validateName(name) {
            this.error = 'name is required'
        },
        validateEmail(email) {
            if (!email) {
                this.error = 'Email is required'
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                this.error = 'Invalid email format'
            } else {
                this.error = ''
            }
        },


        validatePassword(password) {
            this.error = 'Password is required'
        },
        login() {
            // login logic
        }
    }
}
</script>
<style scoped>
.container{
    width: 50%;
    margin: auto;
}
h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
}

label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

input[type="email"],
input[type="text"],
input[type="password"] {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button[type="submit"] {
    font-size: 1rem;
    padding: 0.5rem;
    border: none;
    border-radius: 3px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
}

p {
    color: red;
}
</style>
