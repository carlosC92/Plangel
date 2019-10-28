<template>
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
                    <button type="submit"><font-awesome-icon icon="search" /></button>
                    <input type="text" placeholder="Buscar" name="search">
                </form>
            </div>
        </div>

        <div class="col-xs-12 tableGuests">
            <table>
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Celular</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Obervaciones</th>
                    <th scope="col">Proximo contacto</th>
                    <th scope="col">Historial</th>
                    <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(invitado,index) in invitados" :key="index">
                        <td data-label="Nombre">{{invitado.name}}</td>
                        <td data-label="Celular">{{invitado.phone}}</td>
                        <td data-label="Mail">{{invitado.email}}</td>
                        <td data-label="Observaciones">{{invitado.observations}}</td>
                        <td data-label="Proximo Contacto">25/JUN/2018</td>
                        <td>
                          <dropdown ref="dropdown">
                            <btn type="primary" class="btn btnGreen dropdown-toggle dropdown-toggle">Historial<span class="caret"></span></btn>
                            <template class="dropdown-menu" slot="dropdown">
                                <li><a href="#">Llamadas</a></li>
                                <li><a href="#">Emails</a></li>
                                <li><a href="#">SMS</a></li>
                            </template>
                          </dropdown>
                        </td>
                        <td>
                          <dropdown ref="dropdown">
                            <btn type="primary" class="btn btnWhite dropdown-toggle dropdown-toggle">Acciones<span class="caret"></span></btn>
                            <template class="dropdown-menu" slot="dropdown">
                                <li><a href="#">Reservar</a></li>
                                <li><a  @click="editarGuest(invitado)" href="#">Editar</a></li>
                                <li><a href="#">Contactar Ahora</a></li>
                                <li><a href="#">Reenviar Invitacion</a></li>
                                <li><a href="#">Reenviar SMS</a></li>
                            </template>
                          </dropdown>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> 
        <modal v-model="editarInvitado" :footer="false">
            <editarInvitado :user = "selectedUser"/>
        </modal>  
    </div>

</template>

<script>
import editarInvitado from '@/components/modals/agregarInvitadoModal.vue';
import axios from 'axios';
export default {
    name:'ListaInvitados',
    components:{
        editarInvitado
    },
    data() {
        return {
            invitados : {},
            editarInvitado : false,
            selectedUser : null, 
        }
    },
    created() {
        axios.get('http://api.plangel.com/event/29/guest')
        .then(response => {
            this.invitados = response.data.data;
        })
        .catch(error => {
            console.log(error)
        })
    },

    methods: {
        editarGuest(user){
            this.editarInvitado = !this.editarInvitado
            this.selectedUser = user;
        }
    },
}
</script>


<style>


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
/*Search Bar*/

form.searchBar{
    width:75%;
}

form.searchBar svg{

    font-size: 17px;
}

form.searchBar input[type=text] {
    font-size: 17px;
    float: left;
    color: #afaca7;
    width: 90%;
    background: white;
    outline: none;
    font-family: GothamBook;
    border: 1px solid #E8E9EC;
    border-left: 0px;
    border-radius: 0px 5px 5px 0px;
    height: 45px;
  }
  
  form.searchBar button {
    float: left;
    width: 10%;
    background: white;
    color: #9E968D;
    border: 0px;
    cursor: pointer;
    padding: 11px 0px;
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
    font-family: GothamBook;
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