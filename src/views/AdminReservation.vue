<template>
    <div class="adminreservation">
        <NavBar/>
        <div class="col-xs-8 col-xs-offset-2 adminReservation">
            <h2>Administra tu reserva</h2>
            <MenuReservation/>
             <div class="col-xs-8 dataReservation">
            <div class="form-group col-xs-12 nopadding">
                <label for="estate">Titular</label>
                <input type="estate" class="form-control backgroundGray" id="estate">
            </div>
            <div class="form-group col-xs-12 nopadding">
                <label for="estate">Celular</label>
                <input type="estate" class="form-control backgroundGray" id="estate">
            </div>          
            <div class="form-group col-xs-12 nopadding">
                <label for="estate">Correo</label>
                <input type="estate" class="form-control backgroundGray" id="estate">
            </div>
            <div class="col-xs-12 nopadding text-right">
                <span>Clave de reservación:</span><span>RP414124</span>
            </div>
            
        </div>
        <div class="col-xs-4 statement">
            <h4>Estado de cuenta</h4>
            <div class="col-xs-12 dataStatement backgroundGray nopadding">
                <div class="col-xs-12 bedrooms">
                    <div class="col-xs-12 nopadding">
                        <span>Habitacion 1</span>
                        <span class="pull-right">$9,600</span>
                    </div>
                    <div class="col-xs-12 nopadding ">
                        <span>Habitacion 2</span>
                        <span class="pull-right">$8,400</span>  
                    </div>                 
                </div>
                <div class="col-xs-12 pull-right">
                    <p>Total reserva</p>
                    <p>$7,900 MXN</p>
                    <p>Total abonado</p>
                    <p>$2,500 MXN</p>
                    <p>Saldo</p>
                    <p>$5,400 MXN</p>
                </div>
                <div class="col-xs-12 fechaLimiteBox">
                    <span>Fecha limite de pago:</span><span>26/20/2020</span>
                </div>
            </div>
        </div>

        <div class="col-xs-8">
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
            <div class="col-xs-12 event">
                <div class="col-xs-2 options pull-right nopadding">
                    <img src="img/iconPrint.svg" alt="">    
                    <img src="img/iconEdit.svg" alt="">
                    <img src="img/iconClose.svg" alt="">
                </div>
                <h5>Detalles:</h5>
                <div class="col-xs-12 nopadding eventPrice">
                    <span>Ticket Vip</span>
                    <span class="pull-right">$9,600 MXN</span>
                </div>
                <div class="col-xs-12 nopadding">
                    <p>Evento</p>
                    <p>Concierto Luis Miguel</p>
                </div>
                <div class="col-xs-8 eventInfo nopadding-left">
                    <div class="col-xs-5 nopadding dates">
                        <p>Fecha de entrada:</p>
                        <p>29/09/18</p>
                    </div>
                    <div class="col-xs-5 nopadding dates">
                        <p>Fecha de salida:</p>
                        <p>31/09/18</p>
                    </div>
                    <div class="col-xs-12 nopadding">
                        <p>Titular</p>
                        <p>Dany Rodríguez</p>
                    </div>
                    <div class="col-xs-6 nopadding">
                        <p>Zona</p>
                        <p>Plan Europeo</p>           
                    </div>
                    <div class="col-xs-6 nopadding">
                        <p>Asiento</p>
                        <p>Plan Europeo</p>           
                    </div>
                </div>
                <div class="col-xs-4 qrCode text-center">
                    <img src="@/assets/img/codigoqr.jpeg">
                </div>
            </div>
        </div>
        </div>

        <sidebarOptions v-on:showModalTransporte="eventModal" v-on:modalSolicitarLlamada="showModalSolLlam"/>
        <modal v-model="modalTransporte" size="lg" :footer="false">
            <modalTransporte/>
        </modal>  
        <modal v-model="modalSolicitarLlamada" :footer="false">
            <solicitarLlamadaModal/>
        </modal>  
        
    </div>
    
    
    
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import SidebarOptions from '@/components/SidebarOptions.vue'
import MenuReservation from '@/components/adminReservation/menuReservation.vue'
import modalTransporte from '@/components/modals/modalTransporte.vue';
import solicitarLlamadaModal from '@/components/modals/solicitarLlamadaModal.vue';
export default {
    name: "adminreservation",
    components:{
        NavBar,
        MenuReservation,
        SidebarOptions,
        modalTransporte,
        solicitarLlamadaModal
    },
    data() {
        return {
            modalTransporte:false,
            modalSolicitarLlamada:false
        }
    },
    methods: {
        eventModal(modal){
            this.modalTransporte = modal
        },
        showModalSolLlam(modal){
            this.modalSolicitarLlamada = modal;
        }
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

label{
    text-transform: uppercase;
    font-family: GothamBold;
    font-size: 12px;

}

.dataReservation >div:last-of-type span:first-of-type{
    font-family: GothamBook;
    font-size: 16px;
}

.dataReservation >div:last-of-type span:nth-of-type(2){
    font-family: GothamBold;
    color: #1b95cb;
    font-size: 18px;
}

.statement h4{
    font-family: GothamMedium;
    color: #707070;
    font-size: 25px;
}

.statement .dataStatement{
    border: 1px solid #F4EFF7;
    border-radius: 10px;
    padding-top: 20px;
}

.statement .dataStatement .bedrooms div{
    margin-bottom: 15px;
}

.statement .dataStatement .bedrooms div span{
    font-family: GothamBold;
    color: #4C4650;
}


.statement .fechaLimiteBox{
    margin-top: 15px;
}

.statement .fechaLimiteBox span:first-of-type{
    font-family: GothamBook;
    margin: 0px;
}

.statement .fechaLimiteBox span:nth-of-type(2){
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

hr{
    width: 100%
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


.event{
    border-radius: 10px;
    background: #FFFFFF;
    padding: 30px;
    box-shadow :0px 3px 10px 2px #d4d1d1;
    margin-top: 30px;
}

.event h5{
    text-transform: uppercase;
    font-family: GothamBold;
    color: #807f88;
    font-size: 11px;
}

.eventPrice span:first-of-type{
    font-family: GothamBold;
    color: #4D4F5C;
    font-size:  20px;
}


.eventPrice span:nth-of-type(2){
    font-family: GothamBold;
    color: #1b95cb;
    font-size:  20px;
}

.event div:nth-of-type(3) p:first-of-type{
    
    font-family: GothamBold;
    color: #807f88;
    font-size: 13px;  
}

.event div:nth-of-type(3) p:nth-of-type(2){
    font-family: GothamBold;
    color: #4D4F5C;
    font-size:  20px;
}

.event div:nth-of-type(2) p:first-of-type{
    font-family: GothamBold;
    color: #807f88;
    font-size: 13px;
}

.event > div:nth-of-type(2) p:nth-of-type(2){
    font-family: GothamBold;
    color: #43425D;
    font-size: 17px;
}

.event .dates p:first-of-type{
    font-family: GothamBold;
    color: #807f88;
    font-size: 11px;
}

.event .dates p:nth-child(2){
    font-family: GothamBold;
    color: #21A8C1;
    font-size: 17px;
}

.eventInfo > div p:first-of-type {
    font-family: GothamBold;
    color: #807f88;
    font-size: 11px;
}

hr{
    width: 100%
}

.eventInfo > div p:nth-of-type(2) {
    font-family: GothamBold;
    color: #43425D;
    font-size: 17px;
}

.event > div{
    margin-bottom: 15px;
}

.qrCode img{
    width: 100%;
    height: 100%;
}

.event .options {
    opacity:0;
}

.event:hover .options{
    opacity:1;
}

.event .options img{
    width: 17px;
    height: 17px;
    margin-right: 10px;
}
</style>







