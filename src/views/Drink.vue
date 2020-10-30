<template>
  <div class="drink">
    <h1>This is the drink details </h1>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
    <p>Search: <input type="text" v-model="search" placeholder="Search title.."/></p>
      <div v-if="loading">Loading...</div>
      <div v-else v-for="categories in info" :key="categories.index">
          <SearchComponent :category = "categories.strCategory" :details="details" :search = "search"/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import SearchComponent from '@/components/SearchComponent.vue'

export default {
  name: 'Drink',
  data (){
    return {
      search: '',
      info: null,
      loading: true,
      errored: false,
      details: true
    }
  },
  mounted () {
    axios
      .get('/list.php?c=list')
      .then(response => (this.info = response.data.drinks))
      .catch(error => {
        console.log(error)
        this.errored = true;
        })
        .finally(() => this.loading = false)
  },
  components: {
    SearchComponent
  }
}
</script>
