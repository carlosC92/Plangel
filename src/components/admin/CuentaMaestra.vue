<template>
     <div class="col-xs-12">
        <h4>Cuenta Maestra</h4>

        <div class="col-xs-4 no-padding-left">
            <div class="col-xs-12 backgroundWhite tableContainer">
                <table>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Servicios contratados</th>
                        <th scope="col">Costo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(servicio,index) in servicios.data" :key="index">
                            <td data-label="#">{{index+1}}</td>
                            <td data-label="Servicios contratados">{{servicio.text}}</td>
                            <td data-label="Costo">${{servicio.price}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-6 pull-right text-right nopadding">
                        <p>Total Servicios: ${{total_servicios}}</p>
                    </div>
                </div>              
            </div>   
        </div>


        <div class="col-xs-5">
            <div class="col-xs-12 backgroundWhite tableContainer">
                <table>
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Abonos</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr v-for="(abono,index) in abonos.data" :key="index">
                            <td data-label="#">{{index+1}}</td>
                            <td data-label="Abonos">{{abono.text}}</td>
                            <td data-label="Fecha">{{abono.date}}</td>
                            <td data-label="Ingreso">${{abono.price}}</td>
                        </tr>
                    </tbody>
                </table>
                <div class="col-xs-12 nopadding">
                    <div class="col-xs-6 pull-right text-right nopadding">
                        <p>Total Abono: ${{total_abonos}}</p>
                    </div>
                </div>              
            </div>   
        </div>
        
        <div class="col-xs-3 no-padding-right">
            <div class="col-xs-12 backgroundWhite balances">
                <h5 class="text-center">Mi saldo</h5>
                <p class="text-center">${{saldo}} MXN</p>
               <!--  <p class="text-center">Cuenta: 018245532677</p>
                <div class="col-12 nopadding payments">
                    <div class="col-xs-6 nopadding">
                        <p>Últimos Pagos:</p>
                    </div>
                    <div class="col-xs-6 nopadding">
                        <p>$29,784.00</p>
                        <p>$29,784.00</p>
                        <p>$29,784.00</p>
                    </div>
                </div> -->
    
                <div class="col-xs-12">
                    <button class="btn btnGreen">Realizar Pago</button>
                </div>  
            </div> 
        </div>
       
    </div>  
</template>


<script>
import axios from 'axios'
export default {
    name:"CuentaMaestra",
    data() {
        return {
            abonos : null,
            servicios : null
        }
    },
    async created() {
        await this.getAbonos()
        await this.getServicios()
    },
    computed: {
        total_servicios(){
            let total = 0;
            if(this.servicios.data.length > 0){
                this.servicios.data.forEach(servicio => {
                total += +servicio.price;
                });
            }
            return total;
        },
        total_abonos(){
            let total = 0;
            if(this.abonos.data.length > 0){
                this.abonos.data.forEach(abono => {
                total += +abono.price;
                });
            }
            return total;
        },
        saldo(){
            return this.total_servicios-this.total_abonos 
        }
    },
    methods: {
        getAbonos(){
            return axios.get('http://apiplan.smuffi.pet/event/143/packages?type=Abono')
            .then( response => {
                this.abonos = response.data;
            })
            .catch( error => {
                
            })
        },
        getServicios(){
            return axios.get('http://apiplan.smuffi.pet/event/143/packages?type=Cargo')
            .then( response => {
                this.servicios = response.data;
            })
            .catch( error => {
                
            })
        }   
    },
}
</script>

<style scoped>

h4{
    font-family: SourceRegular;
}

.backgroundWhite{
    background-color: white;
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

.tableContainer table{
    margin-top: 20px;
    margin-bottom: 20px;
}

.tableContainer div:first-of-type p:first-of-type{
    font-family: SourceRegular;
    font-size: 17px;
}

.tableContainer div:first-of-type p:nth-of-type(2){
    font-family: SourceBold;
    font-size: 25px;
}


.tableContainer div:last-of-type{
    margin-bottom: 20px;
}

.balances > div{
    margin-top: 20px;
    margin-bottom: 20px;
}

.balances h5{
    font-family: SourceRegular;
    color: #43425D;
}

.balances > p:first-of-type{
    font-family: SourceBold;
    font-size: 25px;
    color: #21A8C1;
}

.balances >p:nth-of-type(2){
    font-family: SourceRegular;
}

.nopadding{
    padding: 0px;
}

.no-padding-right{
    padding-right: 0px;
}

.payments > div{
    text-align: center;
}

.payments > div p{
    font-family: SourceRegular;
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
  }
  table td {
    padding:2em .625em;
  }
  
  table th {
    font-family: SourceBold;
    font-size: .70em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }

  table td{
    font-family: SourceRegular;
    font-size: .80em;
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
