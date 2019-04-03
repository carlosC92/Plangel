<template>
  <div class="howWork">
    <NavBar/>
    <HowWork/>
  </div>
</template>

<script>
// @ is an alias to /src
import HowWork from '@/components/HowWork.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'howWork',
  components: {
    HowWork,
    NavBar
  }
}
</script>
