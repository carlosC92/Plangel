<template>
    <div class="col-xs-8 col-xs-offset-2 nopadding destinations">  
        <div class="col-xs-9">
            <div class="form-group col-xs-6">
                <label for="nameEvent">Categoria</label>
                <input type="number" class="form-control" id="nameEvent">
            </div>
            <div class="form-group col-xs-6">
                <label for="nameEvent">Ocupación</label>
                <input type="number" class="form-control" id="nameEvent">
            </div>
            <div class="form-group col-xs-6">
                <label for="nameEvent">Check in</label>
                <input type="number" class="form-control" id="nameEvent">
            </div>
            <div class="form-group col-xs-6">
                <label for="nameEvent">Check out</label>
                <input type="number" class="form-control" id="nameEvent">
            </div>
            <div class="form-group col-xs-12">
                <label for="nameEvent">Acompañantes</label>
                <input type="number" class="form-control" id="nameEvent">
            </div>
            <div class="col-xs-12">
                <p>MENORES EN LA HABITACIÓN</p>
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider round"></span>
                </label>                          
            </div>
            <div class="col-xs-12 child nopadding">
                <div class="form-group col-xs-6">
                    <label for="nameEvent">Nombre</label>
                    <input type="text" class="form-control" id="nameEvent">
                </div>
                <div class="form-group col-xs-4">
                    <label for="nameEvent">Edad</label>
                    <input type="number" class="form-control" id="nameEvent">
                </div>
                <div class="col-xs-2">
                    <a href="#">Añadir</a>
                </div>
            </div>
        </div>  
    
        <div class="col-xs-3 reservationStatus">
            <h4>Estado de reserva</h4>
            <div class="col-xs-12 pase">
                <h5>Pase</h5>
                <div class="col-xs-12 nopadding">
                    <p>1 Vip</p>
                    <p class="pull-right">$980</p>
                </div>
                <div class="col-xs-6 nopadding pull-right">
                    <p>Sub Total</p>
                    <p>$980 MXN</p>
                </div>
                
            </div>
            <div class="col-xs-12 hospedaje">
                <h5>Hospedaje</h5>
                <div class="col-xs-12 nopadding">
                    <p>2 Adultos</p>
                    <p>$3,500</p>
                </div>
                <div class="col-xs-12 nopadding">
                    <p>1 Menor (9 años)</p>
                    <p>$2,400</p>
                </div>
                <div class="col-xs-12 nopadding">
                    <p>1 Infante (2 años)</p>
                    <p>$2,100</p>
                </div> 
                <div class="col-xs-6 nopadding pull-right">
                    <p>Sub Total</p>
                    <p>$7,900 MXN</p>
                </div>            
            </div>
            <div class="col-xs-4 nopadding total pull-right">
                <p>Total</p>
                <p>$8700</p>
            </div>
        </div>  
    </div>
</template>


<script>
export default {
    name:'Reservation'
}
</script>
