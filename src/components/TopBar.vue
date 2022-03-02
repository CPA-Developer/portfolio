<template>
  <div class="hello">
    <nav>
      <router-link class="link" to="/">Home</router-link> 
      <router-link class="link" to="/">About</router-link> 
      <router-link class="link" to="/">Interest</router-link> 
      <router-link class="link" to="/">Contact</router-link> 
      <router-link class="link" to="/">Coup</router-link> 
    </nav>
  </div>
</template>

<script>
export default {
  name: 'topBar',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.link{
  padding-right: 2rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
