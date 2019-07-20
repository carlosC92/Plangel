<template>
    <div class="cuenta-maestra">
        <NavBar/>
        <CuentaMaestra/>
    </div>
    
</template>


<script>
import NavBar from '@/components/admin/NavBar.vue';
import CuentaMaestra from '@/components/admin/CuentaMaestra.vue';
export default {
    name:'Invitados',
    components:{
        NavBar,
        CuentaMaestra
    }
}
</script>


<style scoped>
    .cuenta-maestra{
    padding: 0px;
    background-color: #F0F0F7;
    min-height: 100%;
    overflow: hidden;
    }
</style>

