<template>
    <div class="container-fluid nopadding">
        <h4 class="text-center">Solicitar Llamada</h4>
        <form action="/action_page.php">
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
            <button data-dismiss="modal" data-toggle="modal" data-target="#generatePay" class="btnEnviar">Solicitar</button>
        </form>
        
    </div>
</template>
