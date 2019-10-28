<template>
    <div class="col-xs-12 col-md-6 col-md-offset-3 nopadding organizer organization">
        <form>
        <div class="col-xs-12 nopadding">
            <img class="imgCenter" src="../assets/img/component.png"/>
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
        </form>                
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'Ticket',
    props:{
        changinStep : Boolean,
        dataReserveProcess :{
            type : Object,
            default : null,
            required :false
        },
        loader :{
            type : Boolean,
            default : null
        } 
    },
    data() {
        return {
            ticket_price : 0,
            tickets_number : 1,
            assistants : 1,
            tickets_type : [],
            subTotal : 0,
            payments : {
                mount : 0
            },
            assistant_list:[
                {
                    name: null , 
                    ticket_type : null, 
                    ticket_price : null,
                    ticket_category : null,
                    ticket_occupation : null
                }
            ],
            validated : false,
        }
    },

    async created() {
        this.$emit('loading',true);
        if(this.dataReserveProcess.ticket_data){
            this.dataReserveProcess.ticket_data.assistant_list.forEach((assistant,index) => {
                this.assistant_list[index] = assistant
            });
            this.ticket_type = this.dataReserveProcess.ticket_data.ticket_type
            this.tickets_number = this.dataReserveProcess.ticket_data.tickets_number
            this.assistants = this.dataReserveProcess.ticket_data.assistants
        }
        await this.getTickets()
        this.$emit('loading',false);
    },

    watch: {  

        assistant_list: function(){
            let total = 0;
            this.assistant_list.forEach(assistant => {
                total += assistant.ticket_price
            });
            this.subTotal =  parseInt(total)
        },
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
                        ticket_category : this.tickets_type[0].occupation.data[0].idCategory,
                        ticket_occupation : this.tickets_type[0].occupation.data[0].idOccupation
                    }
                )
            }
            
        },
        changinStep:function(){
            this.validateForm();
        },

         validated :function(){
            if(!this.errors.items.length){

                        this.dataReserveProcess.tickets_number = this.tickets_number,
                        this.dataReserveProcess.assistants = this.assistants,
                        this.dataReserveProcess.rooms = this.assistant_list,
                        this.dataReserveProcess.payments = {
                            mount : this.subTotal
                        }
  
                            
                this.$emit('validateForm',{'passValidation':true, 'data':this.dataReserveProcess}); 
                  
            }else{
                this.$emit('validateForm',false)  
            }
            this.validated = false
        }
        
    },
    methods: {
        validateForm:function(){
            this.$validator.validateAll().then(() => {
                this.validated = true;
                }).catch(() => {
                    console.log('error')
            });   
        },
        getPriceTicket : function(ticket_price){
            this.ticket_price = ticket_price;
        },
        getTickets: function(){
            return axios.get('http://apiplan.smuffi.pet/event/'+this.$route.params.id_event+'/category')
            .then(response => {
            this.tickets_type = response.data.data
            this.assistant_list[0] =
                {
                    name: this.dataReserveProcess.name,
                    ticket_type: this.tickets_type[0].type,
                    ticket_price: this.tickets_type[0].occupation.data[0].price,
                    ticket_category : this.tickets_type[0].occupation.data[0].idCategory,
                    ticket_occupation : this.tickets_type[0].occupation.data[0].idOccupation
                }
            this.subTotal = this.tickets_type[0].occupation.data[0].price
            this.ticket_price = this.tickets_type[0].occupation.data[0].price
            console.log(this.tickets_type)
            })
            .catch(error => {
                console.log(error)
            }) 
        }
    },
}
</script>


<style>
    .imgCenter{
        max-height: 200px;
        width: 100%;
    }
</style>
