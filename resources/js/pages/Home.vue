<template>
    <div>
        <Header></Header>
        <div class="Filter_section">
            <h1>Filter</h1>
            <h4>Category</h4>
            <div>
                <label for="select-option">Select an option:</label>
                <select id="select-option" v-model="selectedOption" @change="filterItems">

                    <option value="">-- Select category --</option>
                    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
                </select>
            </div>


            <h4>price</h4>
            <div>
                <label>
                    <input type="radio" v-model="price" value="100to300" @change="getProduct" />
                    1-300
                </label>
                <label>
                    <input type="radio" v-model="price" value="301to600" @change="getProduct" />
                    301-600
                </label>
                <label>
                    <input type="radio" v-model="price" value="601to1000" @change="getProduct" />
                    601-1000
                </label>
                <!-- <select id="select-option" v-model="selectedOption" @change="filterItems">

                    <option value="">-- Select category --</option>
                    <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
                </select> -->
            </div>
        </div>
        <div class="home">
            <h1>Our Product</h1>
            <div class="cards">

                <div class="card" v-for="user in filteredDetails" :key="user.id">
                    <img src="http://loremflickr.com/640/480/food" alt="Card Image" />
                    <h2>{{ user.title }}</h2>
                    <p>Price : {{ user.price }}</p>
                    <p>Category : {{ user.category }}</p>
                    <!-- <a href="#" class="btn"   @click="activate(user.id)" >Learn More</a> -->
                    <router-link :to="{ name: 'product', params: { id: user.id } }" class="btn">View Product</router-link>
                </div>
            </div>
        </div>

        <div></div>
    </div>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
// import SliderView from "../components/Slider.vue"
export default {
    name: "homeview",
    components: {
        Header,
        // SliderView
    },

    data() {
        return {
            price: null,
            FinalData: [],
            UserDetails: [],
            msg: "Hello World",
            isActive: true,
            hasError: false,
            selectedOption: '',
            options: [
                { value: 'Mouse', text: 'Mouse' },
                { value: 'Chicken', text: 'Chicken' },
                { value: 'Shoes', text: 'Shoes' }
            ],
            filteredDetails: [],
            filterPrice: []
        };

    },
    beforeCreate() {
        console.log('beforeCreate hook called', this.msg);
    },
    beforeMount() {
        console.log("before mounted ")
    },
    computed: {
        filteredItems() {
            if (!this.selectedOption) {
                // if no option selected, return all items
                return this.UserDetails;
            } else {
                // filter items by selected option
                return this.UserDetails.filter(item => item.category === this.selectedOption);
            }


        },
        getProducts() {
            const priceRange = this.price.split('to');
            const filteredProducts = this.filteredDetails.filter(({ price }) => {
                return priceRange[1] ? price > Number(priceRange[0]) && price < Number(priceRange[1]) : price === Number(priceRange[0])
            })
            return filteredProducts;

        }
    },
    methods: {
        filterItems() {
            // assign filtered items to data property
            this.filteredDetails = this.filteredItems;
        },
        getProduct() {
            this.filterPrice = this.getProducts

            console.log(this.filterPrice)
        }



    },

    async mounted() {
        const response = await axios.get(
            "https://62de763b9c47ff309e73ff4e.mockapi.io/user"
        );
        this.UserDetails = response.data;

        this.filteredDetails = this.UserDetails;
        this.filterPrice =  this.filteredDetails;
      
        const data = this.filteredDetails
        const result = data.sort((a, b) => {
            if (a.price < b.price) {
                return 1
            } if (a.price > b.price) {
                return -1
                return 0
            }
        })

    },
};
</script>
<style>
.home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

}

.cards {
    display: flex;
    margin: 20px;
    padding: 30px;
    flex-wrap: wrap;
}

.card {
    width: 300px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px;
}

.Filter_section {
    width: 300px;
    height: 70vh;
    margin-left: 50px;
    position: fixed;
    margin-top: 40px;

}

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
}

.card h2 {
    margin-top: 0;
}

.card p {
    margin-bottom: 10px;
}

.btn {
    display: inline-block;
    background-color: #2196f3;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
}
</style>
