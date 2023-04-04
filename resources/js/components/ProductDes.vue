<template>
    <div>
        <Header></Header>
        <div class="container">
            <section>
                <img src="http://loremflickr.com/640/480/food" alt="" />
            </section>
            <section class="description">
                <h1 class="price">{{ product.title }}</h1>
                <div>
                    <h2 class="price">{{ product.price }}</h2>
                    <p class="price">{{ product.description }}</p>
                </div>
            </section>
            <button style="color: red;" @click="DeleteProduct(product.id)">Delete Product</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Header from "../pages/Header.vue";
export default {
    name: "productDescription",
    components: {
        Header,
    },
    mounted() {
        this.isloading = true;
        let token = localStorage.getItem("token");
        if (!token) {
            this.$router.push({ name: "LoginView" });
        }
    },
    data() {
        return {
            product: {},
        };

    },

    async created() {
        // Fetch the product details from your data source or API
        const productId = this.$route.params.id;
        const fetchedProduct = await axios.get(
            "https://62de763b9c47ff309e73ff4e.mockapi.io/user/" + productId
        );

        this.product = fetchedProduct.data;
        console.log(this.product);
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
    },

    methods: {
        DeleteProduct(item) {
            this.product = Object.fromEntries(
                Object.entries(this.product).filter(([id, value]) => id !== item)
            );
            console.log(item);
        }

    },
};
</script>

<style scoped>
.container {
    border: 2px solid rgb(240, 240, 240);
    widows: 100%;
    height: auto;
    margin: auto;
    padding: 20px;
    margin-top: 30px;
}

.container section {
    width: 100%;
    height: 40vh;
}

.container section img {
    width: 100%;
    height: 40vh;
}

.description {
    padding-top: 10px;
}
</style>
