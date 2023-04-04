<template>
    <div class="header">
        <div class="logo">
            <router-link to="/">My Website</router-link>
        </div>
        <nav>
            <ul>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <router-link to="/service">Services</router-link>
                </li>
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
        </nav>
        <nav>
            <ul>
                <li v-if="!isLoggedIn">
                    <router-link to="/login">Login</router-link>
                </li>
                <li v-if="!isLoggedIn">
                    <router-link to="/register">Register</router-link>
                </li>
                <li v-if="isLoggedIn">
                    <a href="#" v-on:click="logout">Logout</a>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    name: "Header",
    data() {
        return {
            isLoggedIn: false, // Set the initial state of isLoggedIn to false
        };
    },
    methods: {
        logout() {
            localStorage.clear();
            this.isLoggedIn = false; // Set isLoggedIn to false when the user logs out
            this.$router.push({ name: "SignIn" });
        },
    },
    mounted() {
        // Check if the user is logged in
        const token = localStorage.getItem("token");
        if (token) {
            this.isLoggedIn = true; // Set isLoggedIn to true if the user is logged in
        }
    },
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1ecec;
    padding: 1rem;
}

.logo {
    font-size: 2rem;
    font-weight: bold;
}

nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
}

nav li {
    margin-right: 1rem;
}

nav a {
    text-decoration: none;
    color: #333;
}

nav a:hover {
    color: #777;
}</style>
