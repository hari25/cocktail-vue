<template>
  <div id="app">
    <div id="nav" class="bg-light align-middle mb-4">
      <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav justify-content-center">
            <li class="nav-item active col-4">
              <router-link to="/">Home</router-link> 
            </li>
            <li class="nav-item col-4">
              <router-link to="/search">Search</router-link>  
            </li>
            <li class="nav-item col-4">
              <router-link to="/drink">Drink</router-link>
            </li>
            
          </ul>
        </div>
      </nav>
      </div>
    </div>
    <div class="spacer"></div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
    position: sticky;
    top: 0;
    left: 0;
    padding: 0;
    width: 100%;
    z-index: 1;
    height: 80px;
    -webkit-box-shadow: 0 8px 6px -6px #333;
    -moz-box-shadow: 0 8px 6px -6px #333;
    box-shadow: 0 8px 6px -6px #333;
}
.container{
  height:100%;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.navbar{
  height:100%;
}
ul.navbar-nav{
  width:100%;
}
</style>
