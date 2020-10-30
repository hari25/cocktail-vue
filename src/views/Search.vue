<template>
  <div class="search">
    <h1>This is the search page</h1>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else class="accordion" role="tablist">
      <div v-if="loading">Loading...</div>
      <b-card no-body class="mb-1" v-else v-for="categories in info" :key="categories.index">
          <!-- {{categories.strCategory}} -->
          <SearchComponent :category = "categories.strCategory"/>
      </b-card>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import SearchComponent from '@/components/SearchComponent.vue'

export default {
  name: 'Search',
  data (){
    return {
      info: null,
      loading: true,
      errored: false
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
