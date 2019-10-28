<template>
<div class="container-fluid nopadding myPayments">
    <h4 class="text-center">Historial Emails</h4>
    <div class="col-xs-12 text-center">     
        <h2 v-if="emails.length == 0" class="form-control">Sin emails</h2>
        <table v-else>
            <tr>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Status</th>
            </tr>
            <tr>
                <td>Save the date</td>
                <td>25/06/2019</td>
                <td>Leido</td>
            </tr>
            <tr>
                <td>Save the date</td>
                <td>25/06/2019</td>
                <td>Leido</td>
            </tr>
            <tr>
                <td>Save the date</td>
                <td>25/06/2019</td>
                <td>Leido</td>
            </tr>
        </table>
    </div>
</div>  
         
</template>


<script>
import axios from 'axios';
export default {
    name:'emailHistorialModal',
    props :{
        id : {
            type : Number,
            default : null,
            required : false
        }
    },
    data() {
        return {
            emails : {}
        }
    },
    watch: {
        async id(){
            await this.getEmails()
                .then( response => {
                    this.emails = response.data.data;
                    console.log(response);
                })
                .catch( error => {
                    console.log(error);
                })
        }
    },
    methods: {
        getEmails(){
            return axios.get('http://api.plangel.com/reservation/'+this.id+'/emailHistory')
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
