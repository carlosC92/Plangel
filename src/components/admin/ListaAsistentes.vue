<template>
     <div class="col-xs-10 col-xs-offset-1 nopadding">
         <vue-snotify></vue-snotify>
        <h4>Asistentes</h4>

       <!--  <div class="col-xs-9 no-padding-left">
            <div class="col-xs-12 newGuestsContainer">
                <h5>Nuevos Reserva</h5>
                <div class="col-xs-4 upload-btn-wrapper no-padding-left">
                    <button  @click="reservacionModal=true" class="uploadBtn" for="file-input">Añadir Titular de Reserva</button>
                </div>
                <div class="col-xs-5">
                    <select class="mySelector">
                        <option>Tipo de Invitación</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div class="col-xs-3">
                    <button class="btn btnGreen">Agregar</button>
                </div>
            </div>       
        </div> -->
        
        <div class="col-xs-12 nopadding listGuests">
            <div class="col-xs-12 header nopadding">
                <div class="col-xs-2"><h5>Lista de invitados</h5></div>
                <div class="col-xs-3">
                    <span>Filtrador por:</span>
                    <select class="mySelector">
                        <option>Mail abierto</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div class="col-xs-2">
                    <span>Ver</span>
                    <select class="mySelector">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <div class="col-xs-5">
                    <span>Resultados</span>
                    <form class="searchBar" action="/action_page.php">
                        <button type="submit"><i class="fa fa-search"></i></button>
                        <input type="text" placeholder="Buscar" name="search">
                    </form>
                </div>
            </div>

            <div class="col-xs-12 tableGuests">
                <table>
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                       <!--  <th scope="col">Datos del contacto</th>
                        <th scope="col">Detalles de reserva</th>
                        <th scope="col">Estado de cuenta</th> -->
                        <th scope="col">Proximo contacto</th>
                        <th scope="col">Historial</th>
                        <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr v-for="(assistant,index) in assistants.data" :key="index">
                            <td data-label="Nombre">{{assistant.name}}</td>
                            <td data-label="Tipo">Familiar</td>
                           <!--  <td data-label="Datos del contacto"><a href="#">Ver datos</a></td>
                            <td data-label="Detalles de reserva"><a href="#">Ver detalles</a></td>
                            <td data-label="Estado de cuenta"><a href="#">Ver Estado de Cuenta</a></td> -->
                            <td data-label="Proximo Contacto">25/JUN/2018</td>
                            <td>
                                <dropdown ref="dropdown">
                                    <btn type="primary" class="btn btnGreen dropdown-toggle dropdown-toggle">Historial<span class="caret"></span></btn>
                                    <template class="dropdown-menu" slot="dropdown">
                                        <li><a @click="llamadasHistorialModal=true" href="#">Llamadas</a></li>
                                        <li><a @click="showEmailHistory(assistant.idReservation)" href="#">Emails</a></li>
                                        <!-- <li><a href="#">SMS</a></li> -->
                                    </template>
                                </dropdown>
                            </td>
                            <td>
                                <dropdown ref="dropdown">
                                    <btn type="primary" class="btn btnWhite dropdown-toggle dropdown-toggle">Acciones<span class="caret"></span></btn>
                                    <template class="dropdown-menu" slot="dropdown">
                                        <li><a href="#">Reservar</a></li>
                                        <li><a href="#">Editar</a></li>
                                        <li><a @click="callNow(assistant)">Contactar Ahora</a></li>
                                        <li><a @click="sendEmail(assistant)">Reenviar Invitacion</a></li>
                                        <li><a @click="sendSMS(assistant)">Reenviar SMS</a></li>
                                    </template>
                                </dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>

        <div class="col-xs-6 nopadding">
            <ul class="pagination">
                <li><a href="#">Primero</a></li>
                <li class="active"><a href="#" >1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">Ultimo</a></li>
            </ul>
        </div>
    <modal v-model="reservacionModal" :footer="false">
        <ReservacionModal/>
    </modal>  
    <modal v-model="llamadasHistorialModal" :footer="false">
        <LlamadasHistorialModal/>
    </modal>  
    <modal v-model="emailHistorialModal" :footer="false">
        <EmailHistorialModal :id = "idReservation"/>
    </modal> 
    </div>  
</template>


<script>
import axios from 'axios';
import ReservacionModal from '@/components/modals/reservacionModal.vue';
import EmailHistorialModal from '@/components/modals/emailHistorialModal.vue';
import LlamadasHistorialModal from '@/components/modals/llamadasHistorialModal.vue';
export default {
    name : "ListaInvitados",
    components:{
        ReservacionModal,
        LlamadasHistorialModal,
        EmailHistorialModal
    },
    data() {
        return {
            reservacionModal: false,
            llamadasHistorialModal:false,
            emailHistorialModal : false,
            assistants : null,
            idReservation : null
        }
    },

    async created() {
        await this.getAssistants()
        .then( response => {          
            this.assistants = response.data
            console.log(response)
        })
        .catch( error => {
            console.log(error)
        })
    },

    methods: {
        getAssistants(){
            return axios.get('http://apiplan.smuffi.pet/event/143/assistant');
        },


        showEmailHistory(idReservation){
            this.idReservation = idReservation;
            this.emailHistorialModal = true;
        },
         callNow(user){
          axios.post('http://apiplan.smuffi.pet/guest/'+user.idGuests+'/callNow')
          .then(function (response) {
              this.$snotify.success('Se programo la llamada exitosamente.','Llamada Programada', {
                        timeout: 1000,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
              });
          })
          .catch( (error) => {
            console.log(error);
              this.$snotify.error('Horario de llamada no disponible','Ocurrio un error', {
                        timeout: 1000,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
              });
          });
        },
        sendEmail(user){
          axios.post('http://apiplan.smuffi.pet/guest/'+user.idGuests+'/email',{
            type : 'save_the_date'
          })
          .then((response) => {
              this.$snotify.success('La invitacion se envio exitosamente.','Invitacion enviada', {
                        timeout: 1000,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
              });
          })
          .catch( (error) => {
              this.$snotify.error('Ocurrio un error intentelo de nuevo.','Error inesperado', {
                        timeout: 1000,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
              });
          });
        },
        sendSMS(user){
          axios.get('http://apiplan.smuffi.pet/guest/'+user.idGuests+'/SMSWelcome')
          .then( (response) => {
              this.$snotify.success('El SMS se envio exitosamente.','SMS enviado con exito', {
                        timeout: 1000,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
              });
          })
          .catch( (error) => {
               this.$snotify.error('Ocurrio un error intentelo de nuevo.','Error inesperado', {
                        timeout: 1000,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
              });
          });
        },
    },
}
</script>


<style scoped>

.upload-btn-wrapper{
    position: relative;
    overflow: hidden;
}

.no-padding-left{
    padding-left: -0px;
}

input[type=file]{
    position: absolute;
    top: -29px;
    bottom: 0;
    right: 10px;
    width: 90%;
    height: 100px;
    opacity: 0;
    cursor: pointer;
}

.uploadBtn{
    background-color:#E8E9EC;
    font-family: GothamBook;
    color: #21A8C1;
    border: 1px solid #A4AFB7;
    border-radius: 7px;
    padding: 10px 20px;
    font-size: 13px;
    width: 100%;
    text-align: center;
}

.uploadBtn img{
    height: 20px;
    margin-right: 10px;
}

h4{
    font-family: SourceRegular;
}

/* Selector Input */

select{
  /* styling */
  background-color: white;
  border: 0px;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  color: #27272b;
  font-family: SourceRegular;
  height: 42px;
  width: 100%;
  font-size: 13px;

  /* reset */

  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;  
}

.mySelector{
    background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em + 6px),
    calc(100% - 15px) calc(1em + 6px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
}


/* Button Green */

.btn{
    width: 100%;
    height: 42px;
    font-family: SourceRegular;
}

.btnGreen{
    background: #21A8C1;
    color: white;
}
/*New Guest */

.newGuestsContainer{
    border: 1px solid #CACED5;
    border-radius: 10px;
    padding: 10px 20px;
}

.newGuestsContainer div {
    margin-top: 15px;
    margin-bottom: 15px;
}

 h5{
    font-family: SourceRegular;
    color: #4D4F5C;
    line-height: 30px;
}

hr{
    border-top: 1px solid #CACED5;
    width: 90%;
}

/* Reenvio Masivo */

.massiveForwardingContainer{
    border: 1px solid #CACED5;
    border-radius: 10px;
    padding: 10px 20px;
}

.massiveForwardingContainer > div{
    margin-top: 6%;
    margin-bottom: 5%;
}


/*Search Bar*/

form.searchBar{
    width:75%;
}

form.searchBar input[type=text] {
    font-size: 17px;
    float: left;
    color: #afaca7;
    width: 90%;
    background: white;
    border-left: none;
    padding: 10px 0px 10px 0px;
    outline: none;
    font-family: SourceRegular;
    border: 1px solid #E8E9EC;
    border-left: 0px;
    border-radius: 0px 5px 5px 0px;
  }
  
  form.searchBar button {
    float: left;
    width: 10%;
    background: white;
    color: #9E968D;
    font-size: 17px;
    border: 0px;
    cursor: pointer;
    padding: 10px 0px 10px 0px;
    outline: none;
    border: 1px solid #E8E9EC;
    border-right: 0px;
    border-radius: 5px 0px 0px 5px;

  }
  
  
  form.searchBar::after {
    content: "";
    clear: both;
    display: table;
  }




/* Invitados */

.nopadding{
    padding: 0px;
}

.no-padding-right{
    padding-right: 0px;
}

.listGuests{
    background: #FFFFFF;
    margin: 40px 0;
}

.listGuests .header{
    margin-top: 15px;
    display: flex;
}

.listGuests .header > div{
    display: flex;
    align-items: center;
}

.listGuests .header > div span{
    font-family: SourceRegular;
    font-size: 12px;
}


.listGuests .header > div:nth-of-type(2) select{
    width: 60%;
}

.listGuests .header > div select{
    border: 1px solid #E8E9EC;
    width:65%;
    margin-left: auto;
}

.listGuests .header > div .searchBar{
    margin-left: auto;
}

.pagination>.active>a{
    background-color: #21A8C1 !important;
    border-color: #21A8C1;
}


/* Tables */ 

table {
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: initial;
  }
  
  table thead {
    background-color: #f8f8f8;
    padding: .35em;
  }

  table tbody tr{
    border-bottom: 3px solid #F5F6FA;
  }
  
  table th{
    padding: 2em .625em;
    text-align: center; 
    vertical-align: middle;
  }
  table td {
    padding:2em .625em;
    text-align: center; 
    vertical-align: middle;
  }
  
  table th {
    font-family: SourceBold;
    font-size: .70em;
    letter-spacing: .1em;
    text-transform: uppercase;
    text-align: center; 
    vertical-align: middle;
  }

  table td{
    font-family: SourceRegular;
    font-size: .80em;
    text-align: center; 
    vertical-align: middle;
  }
  
  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }
  
    table caption {
      font-size: 1.3em;
    }
    
    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    
    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: .625em;
    }
    
    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: .8em;
      text-align: right;
    }
    
    table td::before {
      /*
      * aria-label has no advantage, it won't be read inside a table
      content: attr(aria-label);
      */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    table td:last-child {
      border-bottom: 0;
    }
}
</style>

