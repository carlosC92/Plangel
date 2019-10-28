<template>
    <div class="container-fluid nopadding">
        <h4 class="text-center">Metodos de pago</h4>
        <div class="col-xs-12 generarAbono">       
            <div class="col-xs-12 paymentOptions nopadding">
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio v-model="dataReserveProcess.payment_type" value= "Cargo" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio v-model="dataReserveProcess.payment_type" class="pretty p-image p-plain" name="checkbox1" value= "Suscripcion">
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
                        <p-radio value= "Paypal" v-model="dataReserveProcess.payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "Tarjeta" v-model="dataReserveProcess.payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "4" v-model="dataReserveProcess.payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "Tarjeta" v-model="dataReserveProcess.payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "Swift" v-model="dataReserveProcess.payment_type" class="pretty p-image p-plain" name="checkbox1">
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
        <button type="button" class="btnEnviar" @click="showData()">Aceptar</button>                               
    </div>
  
</template>
<script>
import axios from 'axios';
export default {
    name:'pagoModal',
    data() {
        return {
            payment_type : 'Paypal'
        }
    },
    props:{
        dataReserveProcess :{
            type : Object,
            default : null
        } 
    },
    methods: {
        showData(){
            this.dataReserveProcess.payments.payment_type = this.payment_type
            axios({
                method : 'post',
                url : 'http://apiplan.smuffi.pet/event/'+ this.$route.params.id_event+'/frontendReservation',
                data : {
                    idEvent : this.$route.params.id_event,
                    name : this.dataReserveProcess.name,
                    lastname : this.dataReserveProcess.lastname,
                    email : this.dataReserveProcess.email,
                    phone : this.dataReserveProcess.phone,
                    rooms : [
                        {
                            idEvent : this.$route.params.id_event,
                            name : this.dataReserveProcess.name+this.dataReserveProcess.lastname,
                            dateIn : "2020-09-19",                     
                            dateOut : "2020-09-21",
                            idOccupation : this.dataReserveProcess.rooms[0].ticket_occupation,
                            idCategory : this.dataReserveProcess.rooms[0].ticket_category
                        }
                    ],
                    payment : {
                        paymentType : this.dataReserveProcess.payment_type,
                        amount : 2000
                        
                    }
                }
            }).then(response => {
                console.log(response)
                window.open(response.data.data.details.data.url);
            }).catch(error => {
                console.log(error)
            })
        }
    },
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
