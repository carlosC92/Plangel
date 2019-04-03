<template>
  <div class="events">
    <NavBar/>
    <Events/>
  </div>
</template>

<script>
// @ is an alias to /src
import Events from '@/components/Events.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'home',
  components: {
    Events,
    NavBar
  }
}
</script>
