<template>
<div class="container-fluid nopadding myPayments">
    <h4 class="text-center">Historial Llamadas</h4>
    <div class="col-xs-12 text-center">        
        <table>
            <tr>
                <th>Fecha de contacto</th>
                <th>Hora</th>
                <th>Estado</th>
                <th>Observacion</th>
                <th>Tiempo(s)</th>
            </tr>
            <tr v-for="(call,index) in calls" :key="index">
                <td>25/05/30</td>
                <td>05:30pm</td>
                <td>Mérida</td>
                <td>No contesto</td>
                <td>5 min</td>
            </tr>
            <tr>
                <td>25/05/30</td>
                <td>05:30pm</td>
                <td>Mérida</td>
                <td>No contesto</td>
                <td>5 min</td>

            </tr>
            <tr>
                <td>25/05/30</td>
                <td>05:30pm</td>
                <td>Mérida</td>
                <td>No contesto</td>
                <td>5 min</td>

            </tr>
        </table>
    </div>
</div>  
         
</template>


<script>
import axios from 'axios';
export default {
    props : {
        user :{
            type:Object,
            default : null,
        }
    },
    data() {
        return {
            calls : null
        }
    },
    name:'llamadasHistorialModal',

    watch: {
        user: function (){
            this.getCallHistory();
        }
    },

    methods: {
        getCallHistory(){
            axios.get('http://apiplan.smuffi.pet/guest/'+this.user.idGuests+'/call')
            .then(response => {
                this.calls  = response.data;
            })
            .catch(error => {
                console.log(error)
            })
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
</style>
