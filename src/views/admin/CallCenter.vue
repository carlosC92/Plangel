<template>
    <div class="callCenter">
        <NavBar/>
        <CallCenter/>
    </div>
    
</template>

<script>
import NavBar from '@/components/admin/NavBar.vue';
import CallCenter from '@/components/admin/CallCenter.vue';

export default {
    name:'callCenter',
    components:{
        NavBar,
        CallCenter
    }
}
</script>

<style>

.callCenter{
    padding: 0px;
    background-color: #F0F0F7;
    min-height: 100%;
    overflow: hidden;
}

</style>
