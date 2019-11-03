<template>
    <div class="container-fluid nopadding">
        <h4 class="text-center">Generar Abono</h4>
        <div class="col-xs-12 generarAbono"> 
  <!--           <div class="col-xs-12 titularData">
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
            </div>   -->       
            <div class="form-group col-xs-12">
                <label for="estate">¿Cuanto desea abonar?</label>
                <input type="number" class="form-control backgroundGray" v-model="mount" id="estate">
            </div>  
            <div class="form-group col-xs-12" :class="[payment_type != 'Tarjeta' ? 'd-none' : '']">
                <label for="card-element">
                Tarjeta de credito o debito
                </label>
                <div id="card-element">
                <!-- A Stripe Element will be inserted here. -->
                </div>

                <!-- Used to display form errors. -->
                <div id="card-errors" role="alert"></div>
            </div>
            <div class="col-xs-12 paymentOptions nopadding">
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-8 containerCheckbox">
                        <p-radio value= "Cargo" v-model="payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "Suscripcion" v-model="payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "Paypal" v-model="payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "Virtual" v-model="payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "Tienda" class="pretty p-image p-plain" v-model="payment_type" name="checkbox1">
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
                        <p-radio value= "Tarjeta" v-model="payment_type" class="pretty p-image p-plain" name="checkbox1">
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
                        <p-radio value= "Swift" v-model="payment_type" class="pretty p-image p-plain" name="checkbox1">
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
        <button type="button" class="btnEnviar" @click="makePayment()">Aceptar</button>                               
    </div>
  
</template>


<script>
var stripe = Stripe('pk_test_SmiUVwWeN1V2C5JBpDoBljE4');
var elements = stripe.elements();
var style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};
import axios from 'axios';
export default {
    name:'abonoModal',
    data() {
        return {
            mount : 0,
            payment_type : 'Paypal',
            card : null
        }
    },

    mounted() {
        this.drawStripeForm(); 
        this.handleStripeForm() 
    },

    methods: {
        async makePayment(){
            let data = {
                    paymentType : this.payment_type,
                    amount : this.mount,
                    reservation_id : this.$route.params.id_reservation
                }
            if(this.payment_type == 'Tarjeta' || this.payment_type == 'Suscripcion'){
                await this.createTokenStripe()
                .then(function(result) {
                    if (result.error) {
                    var errorElement = document.getElementById('card-errors');
                    errorElement.textContent = result.error.message;
                    } else {
                    data.tokenStripe = result.token
                    }
                });
            }
           axios({
                method : 'post',
                url : 'http://apiplan.smuffi.pet/reservation/'+this.$route.params.id_reservation+'/payments' ,
                data : data
            })
            .then(response => {
                this.$emit('successPayment');
            }).catch(error => {
                console.log(error)
            }) 
        },
        drawStripeForm(){
            this.card = elements.create('card', {style: style});
            this.card.mount('#card-element');
        },
        handleStripeForm(){
            this.card.addEventListener('change', function(event) {
            var displayError = document.getElementById('card-errors');
                if (event.error) {
                    displayError.textContent = event.error.message;
                } else {
                    displayError.textContent = '';
                }
            });
        },
        createTokenStripe(){
            return stripe.createToken(this.card);
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

  .d-none{
      display: none;
  }

  .generarAbono .titularData p:first-of-type{
    font-family: GothamBold;
    color: #4D4F5C;
  }

  .generarAbono p{
      font-family: GothamMedium;
      color: #787886;
  }

  .StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
