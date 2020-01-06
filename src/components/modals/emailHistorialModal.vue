<template>
<div class="container-fluid nopadding myPayments">
    <Loader :loader = loader :modal = true></Loader>
    <h4 class="text-center">Historial Emails</h4>
    <div class="col-xs-12 text-center">     
        <h2 v-if="emails.length == 0">Sin emails</h2>
        <table v-else>
            <tr>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Status</th>
            </tr>
            <tr v-for="(email,index) in emails" :key="index">
                <td>Save the date</td>
                <td>{{email.dateCreate}}</td>
                <td v-if="email.attend == 1 ">Leido</td>
                <td v-else>Sin leer</td>
            </tr>
        </table>
    </div>
</div>  
         
</template>


<script>
import Loader from '@/components/Loader.vue'
import axios from 'axios';
export default {
    name:'emailHistorialModal',
    props :{
        user : {
            type : Object,
            default : null,
            required : false
        }
    },
    components:{
        Loader
    },
    data() {
        return {
            emails : {},
            loader : false,
        }
    },
    watch: {
        async user(){
            this.loader = true;
            await this.getEmails()
                .then( response => {
                    this.emails = response.data.data;
                    this.loader = false;
                    console.log(response);
                })
                .catch( error => {
                    this.loader = false;
                    console.log(error);
                })
        }
    },
    methods: {
        getEmails(){
            return axios.get('http://apiplan.smuffi.pet/guest/'+this.user.idGuests+'/emailHistory')
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
