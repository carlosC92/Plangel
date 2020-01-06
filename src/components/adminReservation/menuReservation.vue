<template>
    <div class="col-xs-12 menuReservation">
           <sidebarOptions v-on:showModalTransporte="eventModal" v-on:modalSolicitarLlamada="showModalSolLlam"/>
        <modal v-model="modalTransporte" size="lg" :footer="false">
            <modalTransporte v-on:requetTransportationSuccess="handleTransportationSuccess()"/>
        </modal>  
        <modal v-model="modalSolicitarLlamada" :footer="false">
            <solicitarLlamadaModal v-on:requestCallSuccess="handleAskCallSuccess()"/>
        </modal>  
        <vue-snotify></vue-snotify>
        <Loader :loader = loader></Loader>
        <ul> 
            <li>  
                <dropdown ref="dropdown">
                <a class="dropdown-toggle"><img src="@/assets/img/IconNuevaHabitacion.png" class="imgDropdown">Nuevo</a>
                    <template slot="dropdown">
                        <li><a @click="modalAbono=true" role="button">Nuevo Abono</a></li>
                        <li><a @click="modalTicket=true" role="button">Nuevo Ticket</a></li>
                    </template>
                </dropdown>  
            </li>         
            <!-- <li><a data-toggle="modal" data-target="#generatePay"><img src="img/IconGenerarAbono.png">Generar abono</a></li> -->
            <li><a @click="modalMisAbonos=true"><img class="imgDropdown" src="@/assets/img/IconMisAbonos.png">Abonos</a></li>
            <li><a @click="modalCronograma=true"><img class="imgDropdown" src="@/assets/img/IconCronograma.png">Cronograma</a></li>
            <li><a @click="modalNotificarAbono=true"><img class="imgDropdown" src="@/assets/img/IconNotificarAbono.png">Datos bancarios</a></li>
        </ul>
        <div class="col-xs-8 dataReservation">
            <div class="form-group col-xs-12 nopadding">
                <label for="estate">Titular</label>
                <input v-model="fullName" type="estate" class="form-control backgroundGray" id="estate" readonly>
            </div>
            <div class="form-group col-xs-12 nopadding">
                <label for="estate">Celular</label>
                <input v-if="reservation_info" v-model="reservation_info.phone" type="estate" class="form-control backgroundGray" id="estate" readonly>
            </div>          
            <div class="form-group col-xs-12 nopadding">
                <label for="estate">Correo</label>
                <input v-if="reservation_info" v-model="reservation_info.email" type="estate" class="form-control backgroundGray" id="estate" readonly>
            </div>
            <div class="col-xs-12 nopadding text-right">
                <span>Clave de reservación:</span><span>{{reservation_info.key}}</span>
            </div>
        
        </div>

        <div class="col-xs-4 statement">
            <h4>Estado de cuenta</h4>
            <div class="col-xs-12 dataStatement backgroundGray nopadding" v-if="reservation_info">
                <div class="col-xs-12 bedrooms">
                    <div class="col-xs-12 nopadding" v-for="(room,index) in reservation_info.rooms.data" :key="room.id">
                        <span>Ticket {{index+1}}</span>
                        <span class="pull-right">${{room.category.data.occupation.data[0].price}}</span>
                    </div>              
                </div>
                <div class="col-xs-12 pull-right">
                    <p>Total reserva</p>
                    <p>${{total_reservation}} MXN</p>
                    <p>Total abonado</p>
                    <p>${{total_payment}} MXN</p>
                    <p>Saldo</p>
                    <p>${{balance}} MXN</p>
                </div>
                <div class="col-xs-12 fechaLimiteBox">
                    <span>Fecha limite de pago:</span><span>26/20/2020</span>
                </div>
            </div>
        </div>

        <div class="col-xs-8">
            <hr>

            <div class="col-xs-12 event-info" style="margin-bottom:20px;" v-for="room in reservation_info.rooms.data" :key="room.id">
                <div class="col-xs-2 options pull-right nopadding">
                    <img src="@/assets/img/iconPrint.svg" alt="">    
                    <img src="@/assets/img/iconEdit.svg" alt="">
                    <img @click="deleteReservationRoom(room.idRoom)" src="@/assets/img/iconClose.svg" alt="">
                </div>
                <h5>Detalles:</h5>
                <div class="col-xs-12 nopadding eventPrice">
                    <span>Ticket {{room.category.data.type}}</span>
                    <span class="pull-right">${{room.category.data.occupation.data[0].price}} MXN</span>
                </div>
                <div class="col-xs-12 nopadding">
                    <p>Evento</p>
                    <p>Concierto Luis Miguel</p>
                </div>
                <div class="col-xs-8 eventInfo nopadding-left">
                    <div class="col-xs-5 nopadding dates">
                        <p>Fecha de entrada:</p>
                        <p>{{dateFormat(room.dateIn)}}</p>
                    </div>
                    <div class="col-xs-5 nopadding dates">
                        <p>Fecha de salida:</p>
                        <p>{{dateFormat(room.dateOut)}}</p>
                    </div>
                    <div class="col-xs-12 nopadding">
                        <p>Titular</p>
                        <p v-if="room">{{room.name}}</p>
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
        
        <modal v-model="modalAbono" size="lg" :footer="false">
            <AbonoModal v-on:successPayment="onSuccessPayment()"/>      
        </modal>

        <modal v-model="modalMisAbonos" size="lg" :footer="false">
           <MisAbonosModal  :reloadModal="reloadModal" v-on:modalReloaded="changeModalReload()"/>
        </modal>

        <modal v-model="modalCronograma" size="xlg" :footer="false">
            <programa-modal :cronograma="event.chronology"/>
        </modal>

        <modal v-model="modalNotificarAbono" size="lg" :footer="false">
            <NotificarAbonoModal/>
        </modal>

        <modal v-model="modalTicket" :footer="false">
            <TicketModal @newTicket="onNewTicket($event)"/>
        </modal>  
    </div>
    
</template>



<script>

import ProgramaModal from '../modals/programaModal.vue';
import AbonoModal from '../modals/abonoModal.vue';
import MisAbonosModal from '../modals/misAbonosModal.vue'
import NotificarAbonoModal from '../modals/notificarAbonoModal.vue'
import TicketModal from '../modals/ticketModal.vue'
import Loader from '../Loader.vue'
import axios from 'axios';
import moment from 'moment';
import SidebarOptions from '@/components/SidebarOptions.vue';
import modalTransporte from '@/components/modals/modalTransporte.vue';
import solicitarLlamadaModal from '@/components/modals/solicitarLlamadaModal.vue';
export default {
    name: 'MenuReservation',
    components:{
        ProgramaModal,
        AbonoModal,
        SidebarOptions,
        modalTransporte,
        solicitarLlamadaModal,
        MisAbonosModal,
        NotificarAbonoModal,
        TicketModal,
        Loader
    },
    data() {
        return {
            modalAbono: false,
            modalTicket: false,
            modalMisAbonos: false,
            modalCronograma: false,
            modalNotificarAbono: false,
            reservation_info : {
                rooms : {
                    data : null
                }
            },
            payments : {
                data:[]
            },
            loader : null,
            event : {},
            total : 0,
            reloadModal : false,
            modalTransporte:false,
            modalSolicitarLlamada:false
        }
    },

    async created() {     
        this.loader = true;
        await Promise.all([this.getReservationInfo(), this.getEvent(),this.getPayments()]); 
        this.loader= false;
        
    },

   computed: {
        fullName:function () {
            if(this.reservation_info != null){
                return this.reservation_info.name+' '+this.reservation_info.lastname
            }
            return '';
           
        },

        total_reservation(){
            let total = 0;
            if(this.reservation_info.rooms.data != null && this.reservation_info.rooms.data.length > 0){
                this.reservation_info.rooms.data.forEach(room => {
                    total += room.category.data.occupation.data[0].price
                });
            }
            return total;
        },
        

         total_payment(){
            let total = 0;
            if(this.payments != null && this.payments.data.length > 0){
                this.payments.data.forEach(payment => {
                    total += payment.amount
                });
            }
            return total;
        },
        balance(){
            return this.total_reservation - this.total_payment;
        }
   },
   methods: {
        eventModal(modal){
            this.modalTransporte = modal
        },
        showModalSolLlam(modal){
            this.modalSolicitarLlamada = modal;
        },

        async onNewTicket(response){
            this.modalTicket = false;
            this.loader = true;
            if(response.status == "success"){
                this.$snotify.success(response.message,'Reservacion creada con exito', {
                timeout: 2500,
                showProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true
                });
            await this.updateRooms()
            this.loader = false;
            }else{
                this.$snotify.success(response.message,'Error', {
                    timeout: 2500,
                    showProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true
                });
            }
        },

        handleTransportationSuccess : function(){
            this.modalTransporte = false;
            this.$snotify.success('Nos pondremos en contacto a la brevedad posible','Solicitud exitosa', {
                timeout: 2500,
                showProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true
            });
        },
        handleAskCallSuccess : function(){
            this.solicitarLlamadaModal = false;
            this.$snotify.error('Horario de llamada no disponible','Error', {
                timeout: 2500,
                showProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true
            });
        },
        getEvent : function(){
            return axios.get('http://apiplan.smuffi.pet/event/'+ this.$route.params.id_event)
            .then( response =>{
                this.event = response.data.data;
            })
            .catch( error => {
                console.log(error);
            });
        },
        onSuccessPayment : function(){
            this.modalAbono = false;
            this.$snotify.success('Su abono fue agregado exitosamente','Abono exitoso', {
                timeout: 2500,
                showProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true
            });
            this.reloadModal = true
        },

        changeModalReload : function(){
            this.reloadModal = false;
        },
        getReservationInfo : function (){
            return axios.get('http://apiplan.smuffi.pet/event/'+this.$route.params.id_event+'/reservation/'+this.$route.params.id_reservation)
            .then( response => {
                this.reservation_info = response.data.data;
            })
            .catch( error => {
                console.log(error)
            }); 
        },

        updateRooms : function(){
            return axios.get('http://apiplan.smuffi.pet/reservation/'+this.$route.params.id_reservation+'/room/')
            .then( response => {
                this.reservation_info.rooms = response.data;
            })
            .catch( error => {
                console.log(error)
            }); 
        },

        dateFormat(date){
            let dateFormat =  moment(date,'YYYY-MM-DD');
            moment.locale();
            return dateFormat.format('L')
        },

        getPayments: function (){
            return axios.get('http://apiplan.smuffi.pet/reservation/'+this.$route.params.id_reservation+'/payments',{
                params: {
                    status : 'Pagado'
                }
            })
            .then( response => {
                this.payments = response.data;
            })
            .catch( error => {
                console.log(error)
            });
            
        },

        async deleteReservationRoom(id_room){
            this.loader = true;
            await axios.delete('http://apiplan.smuffi.pet/reservation/'+this.$route.params.id_reservation+'/room/'+id_room)
            .then( async response => {
                this.loader = false;
                    await this.getReservationInfo();
                this.$snotify.success('El ticket se elimino exitosamente','Ticket eliminado', {
                timeout: 2500,
                showProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true
            });
            })
            .catch( error => {
                this.loader = false;
                console.log(error)
            });
        }
       
   },
}
</script>


<style>

label{
    text-transform: uppercase;
    font-family: GothamBold;
    font-size: 12px;

}

hr{
    width: 100%
}

.statement h4{
    font-family: GothamMedium;
    color: #707070;
    font-size: 25px;
}

.backgroundGray{
    background: #e9eef3;
}

.statement .dataStatement{
    border: 1px solid #F4EFF7;
    border-radius: 10px;
    padding-top: 20px;
}

.statement .dataStatement .bedrooms div{
    margin-bottom: 15px;
}
.nopadding{
    padding: 0px;
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
.dataReservation >div:last-of-type span:first-of-type{
    font-family: GothamBook;
    font-size: 16px;
}

.dataReservation >div:last-of-type span:nth-of-type(2){
    font-family: GothamBold;
    color: #1b95cb;
    font-size: 18px;
}
.btnEnviar{
    background: linear-gradient(to right, #21A8C1 , #E81F76);
    border-radius: 50px;
    padding: 1em;
    width: 250px;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
    font-size: 17px;
}

.modal-xlg{
    width: 90%;
    margin: 30px auto;
}

.menuReservation > ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-left:0px;
}

.imgDropdown{
    margin-right: 10px;
    margin-bottom: 3px;
}

.menuReservation ul{
    font-family: GothamBold;
    color: #9E968D;
}

.menuReservation ul:hover{
    color: #087590;
    cursor: pointer;
    text-decoration-color: #087590;
}

/* EVENT TICKET */

.event-info{
    border-radius: 10px;
    background: #FFFFFF;
    padding: 30px;
    box-shadow :0px 3px 10px 2px #d4d1d1;
    margin-top: 30px;
}

.event-info h5{
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

.event-info div:nth-of-type(3) p:first-of-type{
    
    font-family: GothamBold;
    color: #807f88;
    font-size: 13px;  
}

.event-info div:nth-of-type(3) p:nth-of-type(2){
    font-family: GothamBold;
    color: #4D4F5C;
    font-size:  20px;
}

.event-info div:nth-of-type(2) p:first-of-type{
    font-family: GothamBold;
    color: #807f88;
    font-size: 13px;
}

.event-info > div:nth-of-type(2) p:nth-of-type(2){
    font-family: GothamBold;
    color: #43425D;
    font-size: 17px;
}

.event-info .dates p:first-of-type{
    font-family: GothamBold;
    color: #807f88;
    font-size: 11px;
}

.event-info .dates p:nth-child(2){
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

.event-info > div{
    margin-bottom: 15px;
}

.qrCode img{
    width: 100%;
    height: 100%;
}

.event-info .options {
    opacity:0;
}

.event-info:hover .options{
    opacity:1;
}

.event-info .options img{
    width: 17px;
    height: 17px;
    margin-right: 10px;
}
</style>
