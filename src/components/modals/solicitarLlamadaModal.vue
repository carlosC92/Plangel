<template>
    <div class="container-fluid nopadding">
        <h4 class="text-center">Solicitar Llamada</h4>
            <div class="form-group col-xs-6">
                <label for="name">Nombre</label>
                <input type="text" class="form-control" id="name">
            </div>
            <div class="form-group col-xs-6">
            <label for="topic">Correo Electrónico</label>
            <input type="text" class="form-control" id="topic">
            </div>
            <div class="form-group col-xs-12">
                <label for="cel">Celular</label>
                <input type="tel" class="form-control" id="cel">
            </div>
            <button data-dismiss="modal" @click="askCall()" data-toggle="modal" data-target="#generatePay" class="btnEnviar">Solicitar</button>
        
    </div>
</template>



<script>

import axios from 'axios';
export default {
    name: 'MenuReservation',
    methods: {
          async askCall(){
           await axios.post('http://apiplan.smuffi.pet/reservation/'+this.$route.params.id_reservation+'/callNow',)
            .then( response => {
                this.$emit('requestCallSuccess');
            })
            .catch( error => {
                this.$emit('requestCallSuccess');
                console.log(error);
            })
        }        
    },
}
</script>