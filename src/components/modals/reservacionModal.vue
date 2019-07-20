<template>
<div class="container-fluid nopadding myPayments">
    <h4 class="text-center">Datos del Titular de la Reserva</h4>
    <div class="col-xs-10 col-xs-offset-1 text-center">        
        <div class="form-group col-xs-12">
            <label for="nameEvent">Nombre del invitado</label>
            <input type="text" class="form-control">
        </div>

        <div class="form-group col-xs-12">
            <label for="nameEvent">Correo eletrónico</label>
            <input type="email" class="form-control">
        </div>

        <div class="form-group col-xs-12">
            <label for="nameEvent">Móvil</label>
            <input type="text" class="form-control">
        </div>

        <div class="form-group col-xs-12">
            <label for="nameEvent">Numero de habitaciones</label>
            <input type="text" class="form-control">
        </div>
    </div>
    <button data-dismiss="modal" data-toggle="modal" data-target="#generatePay" class="btnGuardar">Solicitar</button>
</div>  
         
</template>


<script>
export default {
    name:'reservacionModal'
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
