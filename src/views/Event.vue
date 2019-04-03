<template>
    <div class="event">
        <NavBar/>
        <Event/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Event from '@/components/Event.vue'


export default {
    name:'event',
    components:{
        NavBar,
        Event
    }
}
</script>
