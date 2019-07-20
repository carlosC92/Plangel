<template>
    <div class="event">
        <NavBar/>
        <Event @openModal="openModal" @closeModal="closeModal"/>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Event from '@/components/Event.vue'


export default {
    name:'event',
    components:{
        NavBar,
        Event,
    },
    methods: {
        openModal(value){
            this.$emit('openModal',value)
        },
        closeModal(value){
            this.$emit('closeModal',value)
        }
    },
}
</script>
