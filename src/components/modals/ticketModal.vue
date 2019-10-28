<template>
    <div class="container-fluid nopadding">
        <Loader :loader = loader></Loader>
        <div class="col-xs-12 nopadding">
            <img class="imgCenter" src="../../assets/img/component.png"/>
        </div>
        <div class="form-group col-xs-12 col-md-6">
            <label for="nameEvent">Numero de pases</label>
            <input v-model="tickets_number" type="number" class="form-control">
        </div>
        <div v-for="(item, index) in assistants" :key="index" class="form-group col-xs-12 nopadding">
            <div class="col-xs-8">
                <label for="nameEvent">Nombre Asistente {{index+1}}</label>
                <input v-validate ="'required'" name="assistant" v-model="assistant_list[index].name" type="text" class="form-control">
            </div>  
            <div class="col-xs-4">
                <label for="nameEvent">Tipo de pase</label>
                <select v-model="assistant_list[index].ticket_type"  @change="getPriceTicket(assistant_list[index].ticket_price)" class="form-control">
                    <option v-for="(item, index) in tickets_type" :key="index">{{item.type}}</option>
                </select>
            </div>       
        </div>
        <div class="form-group col-xs-6">
            <label for="city">Precio</label>
            <input v-model="ticket_price"  type="text" class="form-control">
        </div>
        <div class="form-group col-xs-6">
            <label for="estate">Sub total</label>
            <input v-model="subTotal" type="text" class="form-control">
        </div>  
        <div class="col-xs-12">
            <button type="button" class="btnEnviar" @click="buyTicket()">Aceptar</button>           
        </div>  
           
    </div>
</template>



<script>
import axios from 'axios';
import Loader from '../Loader.vue'
export default {
    components : {
        Loader
    },
    name:"TicketModal",
     data() {
        return {
            ticket_price : 0,
            tickets_number : 1,
            assistants : 1,
            tickets_type : [],
            payments : {
                mount : 0
            },
            loader : null,
            assistant_list: [
                {  
                    name: null,
                    ticket_type: null,
                    ticket_price: null,
                    ticket_id: null,
                    category_id: null
                }
            ],
            validated : false,

        }
    },

    async created() {
        this.loader = true
        await this.getTickets()
    },

    computed: {
        subTotal(){
           let total = 0;
            this.assistant_list.forEach(assistant => {
                total += parseInt(assistant.ticket_price)
            });
            return parseInt(total)
        },
    },
    watch: {  
        tickets_number: function(){
            if(this.tickets_number < this.assistant_list.length){
                this.assistant_list.pop()
                this.assistants = parseInt(this.tickets_number);
            }else{
                this.assistants = parseInt(this.tickets_number);
                this.assistant_list.push(
                    {
                        name: '' , 
                        ticket_type : this.tickets_type[0].type, 
                        ticket_price : this.tickets_type[0].occupation.data[0].price,
                        ticket_id: this.tickets_type[0].occupation.data[0].idOccupation,
                        category_id: this.tickets_type[0].occupation.data[0].idCategory
                    }
                )
            }
        }
            
    },
    methods: {
        getTickets: function(){
            return axios.get('http://apiplan.smuffi.pet/event/'+this.$route.params.id_event+'/category')
                .then( response => {
                this.tickets_type = response.data.data;
                this.assistant_list.push(
                    {
                        name: '',
                        ticket_type: this.tickets_type[0].type,
                        ticket_price: this.tickets_type[0].occupation.data[0].price,
                        ticket_id: this.tickets_type[0].occupation.data[0].idOccupation,
                        category_id: this.tickets_type[0].occupation.data[0].idCategory
                    }
                )
                this.loader = false
            })
            .catch(error => {
                this.loader = false
                console.log(error);
            });          
        },
        getPriceTicket : function(ticket_price){
            this.ticket_price = ticket_price;
        },
        buyTicket : async function(){
            await axios.post('http://apiplan.smuffi.pet/reservation/'+this.$route.params.id_reservation+'/room',
            {
                idEvent : "29",
                name : this.assistant_list[0].name,
                idOccupation : this.assistant_list[0].ticket_id,
                dateIn : "2020-09-18",
                dateOut : "2020-09-20",
                idCategory : this.assistant_list[0].category_id
            })
            .then(() => {
                this.$emit('newTicket',{
                    message: 'Se creo exitosamente la reservacion',
                    status : 'success'
                });
            })
            .catch( () => {
                this.$emit('newTicket',{
                    message: 'Ocurrio un error al intentar crear la reservacion, intentelo de nuevo.',
                    status : 'error'
                });
            });          
        }
    },
}
</script>

<style scoped>
    img{
        width: 100%;
    }
</style>
