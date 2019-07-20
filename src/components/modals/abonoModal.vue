<template>
    <div class="container-fluid nopadding">
        <h4 class="text-center">Generar Abono</h4>
        <div class="col-xs-12 generarAbono"> 
            <div class="col-xs-12 titularData">
                <h5>Titular</h5>
                <p>Javier Hernandez Lozano</p>
                <p>+58 999 162 3846</p>
                <p>javhernandezloz93@email.com</p>
            </div>
            <div class="col-xs-6">
                <h5>Hotel</h5>
                <p>Barcelo Maya Grande Resort</p>
            </div>
            <div class="col-xs-6">
                <h5>Evento</h5>
                <p>Boda Alan y paulina</p>
            </div>         
            <div class="form-group col-xs-12">
                <label for="estate">¿Cuanto desea abonar?</label>
                <input type="estate" class="form-control backgroundGray" id="estate">
            </div>  
            <div class="col-xs-12 paymentOptions nopadding">
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio class="pretty p-image p-plain" name="checkbox1">
                            <img class="image" src="../../assets/img/Checkin.png">
                           Depositos a cuenta, cargando comprobante.
                        </p-radio>
                    </div>
                    <div class="col-xs-1">
                        <p>35%</p>
                    </div>
                    <div class="col-xs-3">
                        <p>$6,000 MXN</p>
                    </div>
                </div>
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio class="pretty p-image p-plain" name="checkbox1">
                            <img class="image" src="../../assets/img/Checkin.png">
                           Tarjeta recurrente.
                        </p-radio>
                    </div>
                    <div class="col-xs-1">
                        <p>3.5%</p>
                    </div>
                    <div class="col-xs-3">
                        <p>$2,000 MXN</p>
                    </div>
                </div>
                
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio class="pretty p-image p-plain" name="checkbox1">
                            <img class="image" src="../../assets/img/Checkin.png">
                            Paypal.
                        </p-radio>
                    </div>
                    <div class="col-xs-1">
                        <p>4.5%</p>
                    </div>
                    <div class="col-xs-3">
                        <p>$6,270 MXN</p>
                    </div>
                </div>
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio class="pretty p-image p-plain" name="checkbox1">
                            <img class="image" src="../../assets/img/Checkin.png">
                            Tarjetas de Crédito/Débito emitidas en México.
                        </p-radio>
                    </div>
                    <div class="col-xs-1">
                        <p>35%</p>
                    </div>
                    <div class="col-xs-3">
                        <p>$6,000 MXN</p>
                    </div>
                </div>

                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio class="pretty p-image p-plain" name="checkbox1">
                            <img class="image" src="../../assets/img/Checkin.png">
                            Pago en autoservicio(7 eleven,Farmacias del ahorro,extra).
                        </p-radio>
                    </div>
                    <div class="col-xs-1">
                        <p>35%</p>
                    </div>
                    <div class="col-xs-3">
                        <p>$6,000 MXN</p>
                    </div>
                </div>
                
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio class="pretty p-image p-plain" name="checkbox1">
                                <img class="image" src="../../assets/img/Checkin.png">
                            Tarjeta de crédito/débito otros países.
                        </p-radio>
                    </div>
                    <div class="col-xs-1">
                        <p>4%</p>
                    </div>
                    <div class="col-xs-3">
                        <p>$6,000 MXN</p>
                    </div>
                </div>
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio class="pretty p-image p-plain" name="checkbox1">
                            <img class="image" src="../../assets/img/Checkin.png">
                            Swift Interbancaria.
                        </p-radio>
                    </div>
                    <div class="col-xs-1">
                        <p>8%</p>
                    </div>
                    <div class="col-xs-3">
                        <p>$6,000 MXN</p>
                    </div>
                </div>
            </div>     
        </div>  
        <button type="button" class="btnEnviar">Aceptar</button>                               
    </div>
  
</template>


<script>
export default {
    name:'abonoModal',
}
</script>

<style>
    .state label{
        font-size: 13px;  
    }
  .generarAbono .titularData h5{
    font-family: GothamBookItalic;
    color: #808495;
  }

  .generarAbono .titularData p:first-of-type{
    font-family: GothamBold;
    color: #4D4F5C;
  }

  .generarAbono p{
      font-family: GothamMedium;
      color: #787886;
  }
</style>
