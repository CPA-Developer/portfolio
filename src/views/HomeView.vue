<template>
  <div class="home">
    <Topbar />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from '@/components/TopBar.vue'

export default {
  name: 'HomeView',
  components: {
    Topbar
  }
}
</script>
