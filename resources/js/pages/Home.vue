<template>
    <div>
    <Header></Header>
    <div class="home">
      <h1>Welcome to My Website</h1>
      
      <div class="cards">
        <div class="card">
          <img src="https://picsum.photos/200/300" alt="Card Image">
          <h2>Card Title 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at ipsum ut massa sagittis convallis.</p>
          <a href="#" class="btn">Learn More</a>
        </div>
  
        <div class="card">
          <img src="https://picsum.photos/200/300" alt="Card Image">
          <h2>Card Title 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at ipsum ut massa sagittis convallis.</p>
          <a href="#" class="btn">Learn More</a>
        </div>
  
        <div class="card">
          <img src="https://picsum.photos/200/300" alt="Card Image">
          <h2>Card Title 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at ipsum ut massa sagittis convallis.</p>
          <a href="#" class="btn">Learn More</a>
        </div>
      </div>
    </div>
  
      <div>
        
      </div>
    </div>
</template>
<script>
import Header from "./Header.vue";
// import SliderView from "../components/Slider.vue"
export default {
    name:"homeview",
    components:{
        Header,
        // SliderView
}
}
</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
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