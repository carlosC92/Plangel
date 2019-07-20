<template>
    <div class="invitados">
        <NavBar/>
        <div class="col-xs-10 col-xs-offset-1 nopadding">
            <h4>Invitados</h4>
            <div class="col-xs-9 no-padding-left">
                <div class="col-xs-12 newGuestsContainer">
                    <h5>Nuevos(s) invitado(s)</h5>
                    <div class="col-xs-4 upload-btn-wrapper no-padding-left">
                        <button class="uploadBtn" for="file-input">
                            <img src="img/iconExcel.svg"/>Subir Archivo Excel
                        </button>
                        <input id="file-input" type="file"/>
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
        
                    <hr class="col-xs-12 nopadding">
        
                    <div class="col-xs-4 upload-btn-wrapper no-padding-left">
                        <button @click="agregarInvitadoModal=true" role="button" class="uploadBtn" for="file-input">
                            <img src="img/iconAgregarInvitado.svg"/>Agregar Invitado
                        </button>
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
            </div>
            
            <div class="col-xs-3 no-padding-right">
                <div class="col-xs-12 massiveForwardingContainer">
                    <h5>Reenvio Masivo</h5>
                    <div class="col-xs-12 nopadding">
                        <select class="mySelector">
                            <option>Tipo de Invitación</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div class="col-xs-12 nopadding">
                        <select class="mySelector">
                            <option>Tipo de Invitación</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
        
                    <div class="col-xs-12">
                        <button class="btn btnGreen">Enviar a todos</button>
                    </div>  
                </div>
            </div>
            
            <ListaInvitados/>

            <modal v-model="agregarInvitadoModal" :footer="false">
                <agregarInvitadoModal/>
            </modal>  
            
        </div>
    </div>
    
</template>


<script>
import agregarInvitadoModal from '@/components/modals/agregarInvitadoModal.vue';
import NavBar from '@/components/admin/NavBar.vue';
import ListaInvitados from '@/components/admin/ListaInvitados.vue';
export default {
    name:'Invitados',
    components:{
        NavBar,
        ListaInvitados,
        agregarInvitadoModal
    },
     data() {
        return {
            agregarInvitadoModal: false,
        }
    },
}
</script>

<style>

.invitados{
    padding: 0px;
    background-color: #F0F0F7;
    min-height: 100%;
    overflow: hidden;
}

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
  font-family: GothamBook;
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
}

.btnGreen, .btnGreen:hover, .btnGreen:focus, .btnWhite:active{
    background: #21A8C1;
    color: white;
}

.btnWhite, .btnWhite:hover, .btnWhite:focus, .btnWhite:active{
    background: white;
    color: #21A8C1;
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
    font-family: GothamBook;
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
</style>
