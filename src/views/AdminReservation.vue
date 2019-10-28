<template>
    <div class="adminreservation">
        <NavBar/>
        <div class="col-xs-8 col-xs-offset-2 adminReservation">
            <h2>Administra tu reserva</h2>
            <MenuReservation/>

      <!--   <div class="col-xs-8">
                <hr>
            <div class="col-xs-12 bedroom">
                <div class="col-xs-2 options pull-right nopadding">
                    <img src="img/iconEdit.svg" alt="">
                    <img src="img/iconClose.svg" alt="">
                </div>
                <h5>Detalles:</h5>
                <div class="col-xs-12 nopadding bedroomPrice">
                    <span>Habitacion 1</span>
                    <span class="pull-right">$9,600 MXN</span>
                </div>
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-4 nopadding dates">
                        <p>Fecha de entrada:</p>
                        <p>29/09/18</p>
                    </div>
                    <div class="col-xs-4 nopadding dates">
                        <p>Fecha de salida:</p>
                        <p>31/09/18</p>
                    </div>
                    <div class="col-xs-4">
                        <p>2 Noches</p>
                    </div>
                </div>
                <div class="col-xs-12 nopadding bedroomInfo">
                    <div class="col-xs-4 nopadding-left">
                        <p>Titular</p>
                        <p>Dany Rodríguez</p>
                    </div>
                    <div class="col-xs-4">
                        <p>Plan de alimentos</p>
                        <p>Plan Europeo</p>
                    </div>
                    <div class="col-xs-4 ">
                        <p>Acompañantes</p>
                        <ul>
                            <li>Lucía Villarreal Estrella</li>
                            <li>Andrés Hernández Villarreal</li>
                        </ul>
                    </div>
                    <div class="col-xs-4 nopadding-left">
                        <p>Ocupación</p>
                        <p>Doble</p>
                    </div>
                    <div class="col-xs-4">
                        <p>Categoría</p>
                        <p>Estándar</p>
                    </div>
                    <div class="col-xs-4">
                        <p>Menores</p>
                        <ul>
                            <li>Lucía Villarreal Estrella (3 años)</li>
                            <li>Andrés Hernández Villarreal(6 años)</li>
                        </ul>
                    </div>
                </div>
            </div>
          
        </div> -->
        </div>

     
        
    </div>
    
    
    
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import MenuReservation from '@/components/adminReservation/menuReservation.vue'
export default {
    name: "adminreservation",
    components:{
        NavBar,
        MenuReservation,
    },
}
</script>


<style scoped>
.adminReservation h2{
    font-family: GothamMedium;
    color: #707070;
    text-align: center;
    line-height: 100px;
}


.backgroundGray{
    background: #e9eef3;
}

.nopadding{
    padding: 0px;
}

.nopadding-left{
    padding-left: 0px;
}

.imgCenter{
    width: 100%;
}

.menuReservation > ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
}

.menuReservation ul li img{
    margin-right: 10px;
    margin-bottom: 3px;
}

.menuReservation ul li a{
    font-family: GothamBold;
    color: #9E968D;
}

.menuReservation ul li a:hover{
    color: #087590;
    cursor: pointer;
    text-decoration-color: #087590;
}

input:not([type=checkbox]){
    height: 50px;
    border: none;
}






.bedroom{
    border-radius: 10px;
    background: #FFFFFF;
    padding: 30px;
    box-shadow :0px 3px 10px 2px #d4d1d1;
    margin-top: 30px;
}

.bedroom .options {
    opacity:0;
}

.bedroom div:nth-of-type(3) p{
    font-family: GothamBold;
    color: #43425D;
    font-size: 17px;
}


.bedroom:hover .options{
    opacity:1;
}


.bedroom .options img{
    width: 17px;
    height: 17px;
    margin-right: 10px;
}

.bedroom h5{
    text-transform: uppercase;
    font-family: GothamBold;
    color: #807f88;
    font-size: 11px;
}

.bedroomPrice span:first-of-type{
    font-family: GothamBold;
    color: #4D4F5C;
    font-size:  20px;
}

.bedroomPrice span:nth-of-type(2){
    font-family: GothamBold;
    color: #1b95cb;
    font-size:  20px;
}



.bedroom .dates p:first-of-type{
    font-family: GothamBold;
    color: #807f88;
    font-size: 11px;
}

.bedroom .dates p:nth-child(2){
    font-family: GothamBold;
    color: #21A8C1;
    font-size: 17px;
}

.bedroomInfo > div p:first-of-type {
    font-family: GothamBold;
    color: #807f88;
    font-size: 11px;
}



.bedroomInfo > div p:nth-of-type(2) {
    font-family: GothamBold;
    color: #43425D;
    font-size: 17px;
}

.bedroomInfo > div ul {
    font-family: GothamBold;
    color: #43425D;
    font-size: 13px;
}

.bedroom > div{
    margin-bottom: 15px;
}

.modal-body h4{
    font-family: GothamBold;
    color: #707070;
    font-size: 30px;
    line-height: 60px;
}


</style>







