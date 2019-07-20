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
        <div class="form-group col-xs-12 col-md-6">
            <label for="nameEvent">Tipo de pase</label>
            <select v-model="ticket_type" class="form-control">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
        </div>
        <div v-for="(item, index) in assistants" :key="index" class="form-group col-xs-12">
            <label for="nameEvent">Nombre Asistente {{index+1}}</label>
            <input v-validate ="'required'" name="assistant" v-model="assistant_list[index]" type="text" class="form-control">
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
export default {
    name: 'Ticket',
    props:{
        changinStep : Boolean,
        dataReserveProcess :{
            type : Object,
            default : null
        } 
    },
    data() {
        return {
            ticket_type: 2,
            tickets_number : 1,
            assistants : 1,
            assistant_list:[this.dataReserveProcess.contact_data.name],
            validated : false,
        }
    },

    created() {
        if(this.dataReserveProcess.ticket_data){
            this.dataReserveProcess.ticket_data.assistant_list.forEach((assistant,index) => {
                this.assistant_list[index] = assistant
            });
            this.ticket_type = this.dataReserveProcess.ticket_data.ticket_type
            this.tickets_number = this.dataReserveProcess.ticket_data.tickets_number
            this.assistants = this.dataReserveProcess.ticket_data.assistants
        } 
    },
    
    computed: {
        subTotal(){
            return this.tickets_number * this.ticket_price 
        },
        ticket_price: function(){
            return parseInt(this.ticket_type) * 1000
        },
    },

    watch: {  
        tickets_number: function(){
            if(this.tickets_number < this.assistant_list.length){
                this.assistant_list.splice(this.tickets_number,1)
            }
            this.assistants = parseInt(this.tickets_number);
        },
        changinStep:function(){
            this.validateForm();
        },

         validated :function(){
            if(!this.errors.items.length){
                    this.dataReserveProcess.ticket_data = {
                        ticket_type:this.ticket_type,
                        tickets_number : this.tickets_number,
                        assistants: this.assistants,
                        assistant_list: this.assistant_list,
                        ticket_price : this.ticket_price  
                    }
                            
                this.$emit('validateForm',{'passValidation':true, 'data':this.dataReserveProcess.ticket_data}); 
                  
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
