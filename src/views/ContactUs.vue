<template>
    <div class="contactus">
        <NavBar/>
        <ContactUs/>
    </div>
    
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import ContactUs from '@/components/ContactUs.vue'
export default {
    name: "contactus",
    components:{
        NavBar,
        ContactUs
    }
}
</script>

<style scoped>
    .contactus{
    padding: 0px;
    background-color: #FCFCFC;
    min-height: 100vh;
    height: 100vh;
    overflow: hidden;
    position: relative;
    }
</style>








