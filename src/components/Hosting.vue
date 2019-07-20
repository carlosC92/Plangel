<template>
    <div class="col-xs-12 col-md-8 col-md-offset-2 nopadding images">
        <div class="col-xs-12 nopadding">
            <div class="hidden-lg col-xs-12 containerCheckbox">
                    <label class="container">Mi nombre no aparece en la lista (Agregar manualmente)
                            <input type="checkbox">
                            <span class="checkmark"></span>              
                    </label>
            </div>
            <div class="form-group col-xs-12 col-md-7">
                <label for="nameEvent">Nombre</label>
                <input type="text" class="form-control" id="nameEvent">
            </div>
            <div class="hidden-xs col-md-5 containerCheckbox">
                <label class="container">Mi nombre no aparece en la lista (Agregar manualmente)
                        <input type="checkbox">
                        <span class="checkmark"></span>              
                </label>
            </div>
        </div>
        
        <div class="form-group col-xs-12 col-md-4">
            <label for="nameEvent">Correo Electronico</label>
            <input type="text" class="form-control" id="nameEvent">
        </div>
        <div class="form-group col-xs-12 col-md-4">
            <label for="nameEvent">Celular</label>
            <input type="text" class="form-control" id="nameEvent">
        </div>
        <div class="form-group col-xs-12 col-md-4">
            <label for="nameEvent">Numero de habitaciones</label>
            <input type="number" class="form-control" id="nameEvent">
        </div>

        <!-- Opciones de hoteles -->
        <div class="col-xs-12">
            <div class="col-xs-12 nopadding hotel">
                <div class="hidden-xs col-md-2 nopadding">
                    <img src="img/cancun.jpg" alt="">
                </div>
                <div class="col-xs-12 col-md-2 text-center">
                    <img src="img/component (1).png" alt="">
                    <p>Cancun Q.Roo</p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                
                <div class="col-xs-12 col-md-4 hotelDescription">      
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium mauris lectus consectetur adipiscing elit.</p>        
                </div>

                <div class="col-xs-12 col-md-3 hotelCatogories">      
                    <p>Todo Incluido</p>
                    <p>$3,900 MXN</p>
                    <p>Precio por persona noche</p>         
                </div>
                <div class="col-xs-1">
                    <input type="radio">
                </div> 
                    
            </div>
            <div class="col-xs-12 nopadding hotel">
                <div class="col-xs-2 nopadding">
                    <img src="img/cancun.jpg" alt="">
                </div>
                <div class="col-xs-2 text-center">
                    <img src="img/component (1).png" alt="">
                    <p>Cancun Q.Roo</p>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                
                <div class="col-xs-4 hotelDescription">      
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium mauris lectus consectetur adipiscing elit.</p>        
                </div>

                <div class="col-xs-3 hotelCatogories">      
                    <p>Todo Incluido</p>
                    <p>$3,900 MXN</p>
                    <p>Precio por persona noche</p>         
                </div>
                <div class="col-xs-1">
                    <input type="radio">
                </div> 
                    
            </div>
        </div>

    </div>


</template>


<script>
export default {
    name: 'Hosting'
}
</script>