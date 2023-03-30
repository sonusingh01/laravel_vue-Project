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
              
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/register">Register</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header",
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
}
</style>
