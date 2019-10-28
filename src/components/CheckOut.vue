<template>
    <div class="col-xs-12 col-md-8 col-md-offset-2 nopadding checkout">
       
        <div class="col-xs-12 col-sm-7 col-md-8 reservationInfo">
            <h2>Check Out</h2>
            <p>Titular</p>
            <p>{{fullName}}</p>
            <p>{{dataReserveProcess.cel}}</p>
            <p>{{dataReserveProcess.email}}</p>
        </div>
        <div class="col-xs-12 col-sm-5 col-md-4 statement">
            <h4>Estado de cuenta</h4>
            <div class="col-xs-12 dataStatement">
                <div class="col-xs-12 bedrooms">
                    <div v-for="(ticket, index) in dataReserveProcess.rooms" :key="index" class="col-xs-12 nopadding">
                        <span>Ticket {{index+1}}</span>
                        <span class="pull-right">${{ticket.ticket_price}}</span>
                    </div>          
                </div>
                <div class="col-xs-12 pull-right">
                    <p>Total reserva</p>
                    <p>${{totalReservation}}</p>
                </div>
            </div>
        </div>

        <div class="col-xs-12 toPay">
            <div class="col-xs-12 col-md-6 nopadding info">
                <div class="col-xs-4 text-center">
                    <p>{{dataReserveProcess.assistants}} Event Pass</p>
                    <p>${{totalReservation}}</p>
                </div>
                <div class="col-xs-4 text-center">
                    <p>Fecha de entrada</p>
                    <p>09 / 07 / 2018</p>
                </div>
                <div class="col-xs-4 text-center">
                    <p>Fecha de salida</p>
                    <p>09 / 07 / 2018</p>
                </div>
                <div class="col-xs-4 text-center">
                    <p>Ocupacion</p>
                    <p>N/A</p>
                </div>
                <div class="col-xs-4 text-center">
                    <p>Categoría</p>
                    <p>N/A</p>
                </div>
                <div class="col-xs-4 text-center">
                    <p>Plan</p>
                    <p>All Access</p>
                </div>
            </div>        
            <div class="col-xs-12 col-md-5 col-md-push-1 infoBooking">
                <div class="col-xs-6 col-md-12 nopadding">
                    <p>Titular</p>
                    <p>{{fullName}}</p>
                </div>
                
                <div class="col-xs-6 col-md-12 nopadding">
                    <p>Acompañantes</p>
                    <ul>
                        <li v-for="(assistant, index) in dataReserveProcess.rooms" :key="index">{{assistant.name}}</li>
                    </ul>
                </div>
              <!--   <div class="col-xs-6">
                    <p>Menores</p>
                    <p>1 (8 años)</p>
                </div> -->
            </div>             
        </div>
        
        <!-- <div class="col-xs-12 toPay">
            <div class="col-xs-6 nopadding info">
                <div class="col-xs-4">
                    <p>1 Habitacion</p>
                    <p>$2000 MXN</p>
                </div>
                <div class="col-xs-4">
                    <p>Fecha de entrada</p>
                    <p>09 / 07 / 2018</p>
                </div>
                <div class="col-xs-4">
                    <p>Fecha de salida</p>
                    <p>09 / 07 / 2018</p>
                </div>
                <div class="col-xs-4">
                    <p>Ocupacion</p>
                    <p>N/A</p>
                </div>
                <div class="col-xs-4">
                    <p>Categoría</p>
                    <p>N/A</p>
                </div>
                <div class="col-xs-4">
                    <p>Plan</p>
                    <p>All Access</p>
                </div>
            </div>        
            <div class="col-xs-5 col-xs-push-1 nopadding infoBooking">
                <p>Titular</p>
                <p>Javier Hernandez Lozano</p>
                <div class="col-xs-6 nopadding">
                    <p>Acompañantes</p>
                    <ul>
                        <li>Lucía Villarreal Estrella</li>
                        <li>Andrés Hernández Villarreal</li>
                    </ul>
                </div>
                <div class="col-xs-6">
                    <p>Menores</p>
                    <p>1 (8 años)</p>
                </div>
            </div>
        </div>

        <div class="col-xs-12 toPay">
            <div class="col-xs-6 nopadding info">
                <div class="col-xs-4">
                    <p>Transporte</p>
                    <p>$2000 MXN</p>
                </div>
                <div class="col-xs-4">
                    <p>Fecha de entrada</p>
                    <p>09 / 07 / 2018</p>
                </div>
                <div class="col-xs-4">
                    <p>Fecha de salida</p>
                    <p>09 / 07 / 2018</p>
                </div>
                <div class="col-xs-4">
                    <p>Ocupacion</p>
                    <p>N/A</p>
                </div>
                <div class="col-xs-4">
                    <p>Categoría</p>
                    <p>N/A</p>
                </div>
                <div class="col-xs-4">
                    <p>Plan</p>
                    <p>All Access</p>
                </div>
            </div>        
            <div class="col-xs-5 col-xs-push-1 nopadding infoBooking">
                <p>Titular</p>
                <p>Javier Hernandez Lozano</p>
                <div class="col-xs-6 nopadding">
                    <p>Acompañantes</p>
                    <ul>
                        <li>Lucía Villarreal Estrella</li>
                        <li>Andrés Hernández Villarreal</li>
                    </ul>
                </div>
                <div class="col-xs-6">
                    <p>Menores</p>
                    <p>1 (8 años)</p>
                </div>
            </div>                                   
        </div> -->

    </div> 
</template>


<script>

export default {
    name:'CheckOut',
    props:{
        dataReserveProcess :{
            type : Object,
            default : null
        } 
    },
    computed: {
        fullName(){
            return this.dataReserveProcess.name + ' ' + this.dataReserveProcess.lastname
        },

        totalReservation(){
            return this.dataReserveProcess.payments.mount
        }
    },
}
</script>


<style scoped>

.checkout .reservationInfo p:not(:nth-of-type(2)){
    font-family: GothamBook;
    color: #43425D;
}

.checkout .reservationInfo p:nth-of-type(2){
    font-family: GothamBold;
    color: #43425D;
}

.checkout .accountStatus h4{
    font-family: GothamMedium;
    color: #707070;
}

.checkout .accountStatus div{
    background-color: #F4EFF7;
    border-radius: 10px;
}
.checkout .accountStatus div p{
    font-family: GothamBold;
    color: #4C4650;
    display: inline;
    text-transform: uppercase;
    font-size: 13px;
    line-height: 30px;
}

.checkout .accountStatus div span{
    font-family: GothamBold;
    color: #4C4650;
    font-size: 13px;
    line-height: 30px;
}

.checkout .toPay{
    border-radius: 10px;
    background-color:#FFFFFF ;
    margin-bottom: 20px;
    box-shadow: -1px 5px 10px 2px #d4d1d1;
    margin-top: 40px;
    padding: 10px
}

.checkout .toPay .info > div:first-of-type p:first-of-type{
    font-family: GothamBold;
    color: #4D4F5C;
    font-size: 18px;
    margin-bottom: 0px;
}


.checkout .toPay .infoBooking::before {
    content: '';
    width: 100%;
    position: absolute;
    height: 90%;
    border-left: 2px solid #9E968D;
    top: 5%;
    left: -15%;
}


.checkout .toPay .info > div {
    margin-top: 20px;
}

.checkout .toPay .info > div:first-of-type p:last-of-type{
    font-family: GothamMedium;
    color: #E81F76;
    font-size: 18px;
    margin-bottom: 0px;
}


.checkout .toPay .info > div:not(:first-of-type) p:first-of-type{
    font-family: GothamBook;
    color: #808495;
}

.checkout .toPay .info > div:not(:first-of-type) p:last-of-type{
    font-family: GothamBook;
    color: #43425D;
}


.checkout .toPay .infoBooking > p:first-of-type {
    margin-top: 20px;
}

.checkout .toPay .infoBooking > div {
    margin-top: 20px;
}

.checkout .toPay .infoBooking p{
    font-family: GothamBook;
}

.checkout .toPay .infoBooking > p:first-of-type{
    color:#808495;
}

.checkout .toPay .infoBooking > p:last-of-type{
    color:#43425D;
}

.checkout .toPay .infoBooking > div:first-of-type p{
    color:#43425D
}

.checkout .toPay .infoBooking > div:nth-of-type(2) ul{
    text-decoration: none;
    list-style: none;
    font-family: GothamBold;
    color: #4C4650;
    padding-left: 0px;
}


.statement h4{
    font-family: GothamMedium;
    color: #707070;
    font-size: 25px;
}

.statement .dataStatement{
    background-color: #e9eef3;
    border: 1px solid #e9eef3;
    border-radius: 10px;
    padding: 20px 0px;
}

.statement .dataStatement .bedrooms div{
    margin-bottom: 15px;
}

.statement .dataStatement .bedrooms div span{
    font-family: GothamBold;
    color: #4C4650;
}


.statement .dataStatement > :nth-child(2) {
    float: right;
    text-align: right;
}


.statement .dataStatement > :nth-child(2) > p:nth-of-type(odd) {
    font-family: GothamBook;
    color: #9E968D;
    margin: 0px;
}

.statement .dataStatement > :nth-child(2) > p:nth-of-type(even) {
    font-family: GothamBold;
    color: #4C4650;
    margin: 0px;
    margin-bottom: 10px;
}

.statement .dataStatement > :nth-child(2) > p:last-of-type {
    font-family: GothamMedium;
    color: #4C4650;
    font-size: 18px;
}


/*=============================================
 =            ESCRITORIO GRANDE (1366px)            =
 =============================================*/
 
 @media(min-width:1200px) {


}



/*===========================================
=            ESCRITORIO MEDIANO (1024px)            =
===========================================*/



@media(max-width:1199px) and (min-width: 1024px){

   
    
}


/*========================================
=            ESCRITORIO PEQUEÑO (768px)            =
========================================*/

@media (max-width: 1023px) and (min-width: 768px) {


}

@media (max-width: 767px) and (min-width: 600px){
    .checkout > div:first-child, .checkout > div:nth-child(2){
        width: 50%;
    }
}


/*==========================================
=            ESCRITO EXTRAPEQUEÑO (320px)            =
==========================================*/

@media (max-width: 767px) {
    .infoBooking > div{
        text-align: center;
    }
}

</style>
