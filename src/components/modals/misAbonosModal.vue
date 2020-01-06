<template>
<div class="container-fluid nopadding myPayments">
    <Loader :loader = loader :modal = true></Loader>
    <h4 class="text-center">Mis abonos</h4>
    <div class="col-xs-10 col-xs-offset-1 text-center">        
      <!--   <p>Saldo pendiente</p>
        <p>$13,500 MXN</p>
        <div class="col-xs-4">
            <p>Total reserva:</p>
            <p>$15,000 MXN</p>          
        </div>
        <div class="col-xs-4 pull-right">
            <p>Total pagado:</p>
            <p>$1,500</p>
        </div> -->
        <table>
            <tr>
                <th>Monto</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
                <th></th>
            </tr>
            <tr v-for="payment in payments.data" :key="payment.id">
                <td>${{payment.amountPayment}}</td>
                <td>{{payment.paymentType}}</td>
                <td>7/08/2018</td>
                <td>12:33 Hrs</td>
                <td>{{payment.status}}</td>
                <td>
                    <div class="upload-btn-wrapper" v-if="payment.paymentType == 'Cargo'"  @change="onFileChange(payment.idPayment,payment.amountPayment,$event)">
                        <button class="btn">Subir voucher</button>
                        <input type="file" name="myfile" />
                    </div>
                </td>
            </tr>
        </table>
    </div>
    <button data-dismiss="modal" data-toggle="modal" data-target="#generatePay" class="btnEnviar">Nuevo Abono</button>
</div>  
         
</template>


<script>
import axios from 'axios';
import Loader from '../Loader.vue'
export default {
    name:'misAbonosModal',
     props:{
        reloadModal :{
            type : Boolean,
            default : false
        } 
    },
    components:{
        Loader
    },
    data() {
        return {
            payments : [],
            loader : null
        }
    },
    async created() {  
        this.loader = true;   
        await this.getPayments()
        .then(response => {
            this.payments = response.data;
            this.loader = false;
            console.log(response);
        })
        .catch(error => {
            this.loader = false;
            console.log(error)
        })
    },

    watch: {
        reloadModal : async function(){
            if(this.reloadModal){
                this.loader = true;
                this.$emit('modalReloaded');
                await this.getPayments()  
                .then(response => {
                    this.payments = response.data;
                    this.loader = false;
                    console.log(response);
                })
                .catch(error => {
                    this.loader = false;
                    console.log(error)
                });         
            } 
        }
    },
    methods: {
        getPayments(){
            return axios.get('http://apiplan.smuffi.pet/reservation/'+this.$route.params.id_reservation+'/payments')
        },

        onFileChange(paymend_id,payment_mount,e){
            let formData = new FormData();
            formData.append('reservation_id',this.$route.params.id_reservation);
            formData.append('payment_id',paymend_id);
            formData.append('amount',payment_mount);
            formData.append('voucher',e.target.files[0]);
            
            axios.post('http://apiplan.smuffi.pet/reservation/3526/voucher/9330',
            formData,
            {
                
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            ).then(function(){
                console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        }
        
    },
}
</script>

<style scoped>
 .myPayments > div > p:not(:nth-child(2)){
    font-family: GothamMedium;
    color: #787886;  
  }

  .myPayments > div > p:nth-child(2){
    font-family: GothamBold;
    color: #21A8C1;  
    font-size: 20px;
  }

  .myPayments > div div p:first-child{
    font-family: GothamBold;
    color: #43425D;  
  }

  .myPayments table{
    width: 80%;
    margin: 30px auto;

  }

  .myPayments table tr th{
      background: #F5F6FA;
  }

  .myPayments table tr th, .myPayments table tr td{
      text-align: center;
      height: 50px;
      width: 20%;
  }

  .myPayments table tr td{
      border-bottom: 1px solid #d6d3d3;
    
  }

  .upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
    border: 2px solid gray;
    color: gray;
    background-color: white;
    border-radius: 8px;
    font-size: 12px;
    font-weight: bold;
    height: 100% !important;
}

.upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}
</style>
