
<template>
  <div class="searchComponent">
      <div class="container">
            <b-card-header header-tag="header" class="p-1" role="tab">
                <h2>
                        <b-button block v-b-toggle="'accordion-' + category.replace(/\s+/g, '')" variant="info">{{category}}</b-button>
                    </h2>
            </b-card-header>
            <b-collapse :id="'accordion-' + category.replace(/\s+/g, '')" visible accordion="my-accordion" role="tabpanel" v-model="visible">
            <b-card-body>
                    <section v-if="errored">
                        <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
                    </section>
                    <section v-else>
                        <div v-if="loading">Loading...</div>
                        <div v-else class="row">
                            <div v-for="result in results" :key="result.index" class="col col-4" :id="result.strDrink.replace(/\s+/g, '')">
                                <ul class="list-group" v-if="!details">
                                    <li class="list-group-item">
                                        <router-link :to="{ name: 'Drink', hash: '#' + result.strDrink.replace(/\s+/g, '') }">
                                            <p > {{result.strDrink}}</p>
                                        </router-link>
                                    </li>
                                </ul>
                                    <DrinkDetails v-if="details" :details = "result.strDrink" @open-collapse='openCollapse'/>
                            </div>
                        </div>
                    </section>
            </b-card-body>
            </b-collapse>
      </div>
  </div> 
</template>

<script>
import axios from 'axios';
import DrinkDetails from '@/components/DrinkDetails.vue'
export default {
  name: 'SearchComponent',
  data() {
    return{
      results: null,
      loading: true,
      errored: false,
      visible: false
      
    }
  },
  props: ['category', 'details'],
  mounted () {
    this.getDrinksByCategory();
  },
  methods:{
    getDrinksByCategory(){
      //let url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + this.category 
      
      axios.get('/filter.php?c=' + this.category).then((response) => {
        this.results = response.data.drinks;
      }).catch( error => { console.log(error)
        this.errored = true;
       })
       .finally(() => this.loading = false)
    },
    openCollapse(){
      this.visible = true;
    }
  },
  components: {
    DrinkDetails
  }
}
</script>


