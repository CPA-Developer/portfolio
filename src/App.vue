<template>
  <div id="app">
   
    <Topbar/>
    <Home/>
  </div>
</template>
<script>
 import Home from './views/HomeView.vue'
import Topbar from '@/components/TopBar.vue'
export default {
  name: "app",
  components: {
    Home,
   Topbar   
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
body{
  margin:0%;
}
</style>
