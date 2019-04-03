<template>
  <div class="home">
    <NavBar/>
    <Home/>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'home',
  components: {
    Home,
    NavBar
  }
}
</script>
