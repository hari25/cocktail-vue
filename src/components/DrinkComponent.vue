
<template>
  <div class="drinks">
   
    <div v-for="category in categories" :key="category.index">
          <h2>{{category}}</h2>
          <p>{{getDrinksByCategory(category)}}</p>
          <!-- <h3>There are {{results.length}} items</h3> -->
          <div v-for="result in results" :key="result.index">
            <p>Name: {{result.strDrink}}</p>
            <p>ID: {{result.idDrink}} </p>
            <img v-bind:src="result.strDrinkThumb">
            <!-- <DrinkDetails :details = "result"/> -->
          </div>
    </div>
  </div> 
</template>

<script>
import axios from 'axios';
//import DrinkDetails from '@/components/DrinkDetails.vue'
export default {
  name: 'DrinkComponent',
  data() {
    return{
      results: []
    }
  },
  props: ['categories'],
  mounted () {
    this.getDrinksByCategory();
  },
  methods:{
    getDrinksByCategory(category){
      let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + category
      
      axios.get(url).then((response) => {
        this.results = response.data.drinks;
      }).catch( error => { console.log(error); });
    }
  },
  components: {
    //DrinkDetails
  }
}
</script>


