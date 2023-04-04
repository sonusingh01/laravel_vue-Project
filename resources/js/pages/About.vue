<template>
    <div>
        <Header></Header>
        <div :class="{ active: isActive }" :style="[isActive ? { color: textcolor } : {
            color: textcolors
        }]">
            <h1>About Us</h1>
            <p>
                We are a team of developers who are passionate about Vue.js and
                creating great web applications.
            </p>
        </div>
    </div>
</template>
<script>
import Header from "./Header.vue";
export default {
    name: "AboutView",
    components: {
        Header,
    },
    data() {
        return {
            isActive: true,
            textcolor: "red",
            textcolors: "green"
        }
    },
};
</script>

<style scoped>
h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    line-height: 1.5;
}

.active {
    background-color: rgb(220, 220, 230);
}
</style>
