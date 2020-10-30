<template>
  <div class="drinkDetails col my-4" :id="details.replace(/\s+/g, '')">
  {{this.detailsList.strDrink}}
    <div v-for="detail in this.detailsList.slice(0,1)" :key="detail.idDrink" class="single-detail">
      <div v-if="detail.strDrink">
          <h3 v-if="details">{{details}}</h3>
          <!-- <h4>Length: {{this.detailsList.length}}</h4> -->
          <img :src="detail.strDrinkThumb" alt="drink image">
          <div class="content">
            <p><strong>Instructions:</strong> {{detail.strInstructions}}</p>
            <strong>Ingredients:</strong> 
            <div class="ingredients" v-for='index in 15' :key='index'>
                <p v-if="detail['strIngredient' + index]">{{detail['strIngredient' + index]}}</p>
            </div>
          </div>
      </div>
        
    </div>
    
  </div> 
</template>

<script>
import axios from 'axios';
export default {
  name: 'DrinkDetails',
  data() {
    return{
      detailsList: [],
    }
  },
  props: ['details'],
  watch: { 
    search: function(newVal, oldVal) { // watch it
      console.log('Prop changed: ', newVal, ' | was: ', oldVal)
    }
  },
  mounted () {
    
    if(window.localStorage.getItem(this.details)){
        this.detailsList = JSON.parse(window.localStorage.getItem(this.details));
    }
    else{
        this.getDrinksDetails();
    }
    let el = window.location.href.split("/#/drink#")[1];
    if(el){
      setTimeout(function(){ 
        document.getElementById(el).scrollIntoView(); }, 500);
      }
    //console.log(this.details.replace(/\s+/g, ''), el);
    if(el == this.details.replace(/\s+/g, '')){
      this.$emit('open-collapse');
    }
    //this.getDrinksDetails();
  },
  methods:{
    getDrinksDetails(){
      //let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + this.details
      
      axios.get('/search.php?s=' + this.details).then((response) => {
        this.detailsList = response.data.drinks;
        window.localStorage.setItem(this.details, JSON.stringify(response.data.drinks));
      }).catch( error => { console.log(error); });
    }
  },
}
</script>

<style scoped>
img{
    max-width:100%;
    height:auto;
    object-fit :cover;
}
h3{
    height: 60px;
}
.ingredients{
  display:inline-block;
}
.single-detail{
  position: relative;
}
.content{
    position: relative;
    box-shadow: 0 0 5px 2px rgba(0,0,0,.1);
    background: white;
    width: 100%;
    display: block;
    /* bottom: 10%; */
    
    min-height: 250px;
}
</style>


