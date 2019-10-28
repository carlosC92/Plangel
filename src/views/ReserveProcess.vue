<template>
<div class="reserveProcess col-xs-12">
    <NavBar/>
    <Loader :loader = loader></Loader>
    <BarProgress :steps="steps" :actual_step ="actual_step"/>
    <component class="margin_bottom" :loader="loader" :dataReserveProcess="dataReservaProcess" :is="currentStepComponent" :changinStep="changinStep" @loading ="changeLoader($event)" v-on:validateForm="updateValidation($event)" />
    <div class="col-xs-12 col-md-6 col-md-offset-3 buttonsContainer" style="margin-bottom: 20px">
        <div class="col-xs-12 col-md-6">
            <button type="button" @click="prevStep" class="btnBack">REGRESAR</button>
        </div>    
        <div class="col-xs-12 col-md-6">
            <button type="button" v-if="currentStepComponent != 'CheckOut'" @click="nextStep" class="btnEnviar">CONTINUAR</button>
            <button type="button" v-else @click="modalPago=true" role="button" class="btnEnviar">CONTINUAR</button>
        </div>                
    </div> 

    <modal v-model="modalPago"  size="lg" :footer="false">
        <ModalPago :dataReserveProcess="dataReservaProcess" />      
    </modal>  
</div>


</template>


<script>
import Loader from '@/components/Loader.vue'
import NavBar from '@/components/NavBar.vue'
import BarProgress from '@/components/BarProgress.vue'
import ContactInformation from '@/components/ContactInformation.vue'
import Ticket from '@/components/Ticket.vue'
import CheckOut from '@/components/CheckOut.vue'
import ModalPago from '@/components/modals/pagoModal.vue';
export default {
    name: 'ReserveProcess',
    components:{
        NavBar,
        BarProgress,
        ContactInformation,
        Ticket,
        CheckOut,
        ModalPago,
        Loader

    },
    data() {
        return {
            modalPago : false,
            steps:[
                {'name': 'Datos de contacto'},
                {'name': 'Pase'},
                {'name': 'Checkout'},             
            ],
            actual_step : 0,
            stepsComponents:['ContactInformation','Ticket','CheckOut'],
            dataReservaProcess:{

            },
            changeStep : false,
            changinStep : null,
            loader : null,
        }
    },

     watch: {
        changeStep:function(){
            if(this.changeStep){
                this.nextStep()
            }else{
                this.changinStep = false
            } 
        },
        
    },

    computed: {
        currentStepComponent:function(){
            return this.stepsComponents[this.actual_step]
        }
    },


    methods: {
        
        nextStep:function(){
            this.changinStep = true
            if((this.actual_step < this.steps.length-1) && this.changeStep){
                this.actual_step++     
                this.changeStep = false      
            }
        },

        prevStep:function(){
            if(this.actual_step > 0){
                this.actual_step--
            }  
        },  
        updateValidation:function(response){
            this.changeStep = response.passValidation
            this.changinStep = false
        },
        changeLoader:function(status){
            this.loader = status;
        }
    },

}
</script>


<style scoped>
.margin_bottom{
    margin-bottom: 40px;
}

.btnEnviar{
    background: linear-gradient(to right, #21A8C1 , #E81F76);
    border-radius: 50px;
    padding: .7em 2em;
    width: 200px;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
}




.btnBack{
    background: gray;
    border-radius: 50px;
    padding: .7em 2em;
    width: 200px;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
    font-size: 17px;
}



/*=============================================
 =            ESCRITORIO GRANDE (1366px)            =
 =============================================*/
 
 @media(min-width:1200px) {
     .reserveProcess{
         padding: 0px;
     }

}

@media (max-width: 766px) and (min-width: 600px){
   .reserveProcess .buttonsContainer > div{
        width: 50%;
    }

     .reserveProcess .buttonsContainer > div:nth-of-type(2){
         margin-top: 0px !important;
    }

}


/*==========================================
=            ESCRITO EXTRAPEQUEÑO (320px)            =
==========================================*/

@media (max-width: 767px) {

    .reserveProcess .buttonsContainer > div:nth-of-type(2){
         margin-top: 10px;
    }

    .btnBack{
        width: 200px;
    }

}

</style>
