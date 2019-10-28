<template>
<div class="container-fluid nopadding myPayments">
    <h4 class="text-center">Agregar Invitado</h4>
    <div class="col-xs-10 col-xs-offset-1 text-center">        
        <div class="form-group col-xs-12">
            <label for="nameEvent">Nombre del invitado</label>
            <input v-if="user" type="text" v-model="user.name" class="form-control">
            <input v-else type="text" v-model="name" value="" class="form-control">
        </div>

        <div class="form-group col-xs-12">
            <label for="nameEvent">Correo eletrónico</label>
            <input v-if="user" type="email" v-model="user.email" class="form-control">
            <input v-else type="email" v-model="email" class="form-control">
        </div>

        <div class="form-group col-xs-12">
            <label for="nameEvent">Móvil</label>
            <input v-if="user" type="text" v-model="user.phone" class="form-control">
            <input v-else type="text" v-model="phone" class="form-control">
        </div>

        <div class="form-group col-xs-12">
            <label for="nameEvent">Observaciones</label>
            <input v-if="user" type="text" v-model="user.observations" class="form-control">
            <input v-else type="text" v-model="observations" class="form-control">
        </div>
    </div>
    <button data-dismiss="modal" @click="saveGuest()" data-toggle="modal" data-target="#generatePay" class="btnGuardar">Guardar</button>
</div>  
         
</template>


<script>
import axios from 'axios';
export default {
    name:'agregarInvitadosModal',
    props :{
        user :{
            required : false,
            type : Object,
            defaul: null
        }
    },
    data() {
        return {
            name: null,
            email : null,
            phone : null,
            observations : null,
        }
    },
    methods: {
        saveGuest(){
            axios.put('http://api.plangel.com/event/29/guest/3', {
                name: this.user ? this.user.name : this.name,
                email: this.user ? this.user.email : this.email,
                phone: this.user ? this.user.phone : this.phone,         
                observations : this.user ? this.user.observations : this.observations,
                relationship : "Tio",
                importance : "Muy Importante",
                idUser : 1          
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
}
</script>


<style scoped>
    label{
        font-size: 13px;
    }

    .btnGuardar{
        background: #21A8C1;
        padding: 1em;
        width: 150px;
        border: none;
        color: white;
        font-family: GothamMedium;
        margin:0 auto;
        display:block;
        font-size: 15px;
    }
</style>
