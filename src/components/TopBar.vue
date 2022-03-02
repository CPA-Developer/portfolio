<template>
  <div class="container">
    <nav class="nav-links">
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
.container{
  background-color: rgb(23, 22, 54);
  
}
.link{
  //font-weight: 500;
  font-family: 'Trebuchet MS', sans-serif;
   transition: 0.3s color ease;
   padding-top: 2rem;
   padding-bottom: .6rem;
   //color: white;

  &:hover{
  color: rgb(79, 170, 206);}
}
.nav-links{

position: relative;
display: flex;
flex:1;
justify-content: flex-end;



.link{
  padding-right: .8rem;
}
.link:last-child{
  padding-right: 2rem;
}

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
 color: white;
 font-size: 100%;
  text-decoration: none;
  font-weight: normal;
}
</style>
