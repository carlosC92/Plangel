<template>
    <div class="col-xs-12 col-md-4 col-md-offset-4 nopadding"> 
        <form>
        <div class="form-group col-xs-12" >
            <span>{{errors.first('nombre')}}</span>
            <label for="nombre">Nombre</label>
            <input v-if="contact_data"  v-model="contact_data.name" v-validate ="'required'" name="nombre" type="text"  class="form-control">
            <input v-else v-model="name" v-validate ="'required'" name="nombre" type="text"  class="form-control">
        </div>
        <div class="form-group col-xs-12">
            <span>{{errors.first('apellido')}}</span>
            <label for="apellido">Apellido</label>
            <input v-if="contact_data" v-model="contact_data.second_name" v-validate ="'required'" name="apellido" type="text" class="form-control">
            <input v-else v-model="second_name" v-validate ="'required'" name="apellido" type="text" class="form-control">
        </div>
        <div class="form-group col-xs-12">
            <span>{{errors.first('email')}}</span>
            <label for="email">Correo Electrónico</label>
            <input v-if="contact_data" v-model="contact_data.email" v-validate ="'required|email'" name="email" type="text" class="form-control">
            <input v-else v-model="email" v-validate ="'required|email'" name="email" type="text" class="form-control">
        </div>
        <div class="form-group col-xs-12">
            <span>{{errors.first('celular')}}</span>
            <label for="estate">Celular</label>
            <vue-tel-input v-if="contact_data" v-model="contact_data.cel" v-validate = "'required'" name="celular"></vue-tel-input>
            <vue-tel-input @onInput="hola()" v-else v-model="cel" v-validate = "'required'" name="celular" type="numeric"></vue-tel-input>

        </div>
        </form>
    </div>
</template>

<script>
import VueTelInput from 'vue-tel-input';
export default {
    components:{VueTelInput},
    name:'ContactInformation',
    props:{
        changinStep : Boolean,
        dataReserveProcess :{
            type : Object,
            default : null
        } 
    },
    data() {
        return {
            name : null,
            second_name : null,
            email : null,
            cel : null,
            validated : false,
        }
    },

    computed: {
        contact_data(){
            return this.dataReserveProcess.contact_data
        }
    },

    watch: {

        changinStep:function(){
            this.validateForm();
        },
        validated :function(){
            if(!this.errors.items.length){
                if(!this.dataReserveProcess.contact_data){
                    this.dataReserveProcess.contact_data = {
                        name:this.name,
                        second_name: this.second_name,
                        email: this.email,
                        cel: this.cel  
                    }
                }
                
                            
                this.$emit('validateForm',{'passValidation':true, 'data':this.dataReserveProcess.contact_data}); 
                  
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
                });   
            }
        },
        hola(){
         console.log('hola')
        }


}
</script>


<style>
input:invalid {
    border: 1px solid red;
}
</style>
