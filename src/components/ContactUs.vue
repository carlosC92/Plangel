<template>
    <div class="contact">
        <vue-snotify></vue-snotify>
        <Loader :loader = loader></Loader>
        <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2 flexbox">
            <div class="col-xs-12 col-lg-5 descriptionContact text-right">
                <h2>Contáctanos</h2>
                <p class="colorGray" >Comunícate con nosotros, con gusto te resolveremos todas tus dudas</p>
            </div>
            <div class="col-xs-12 col-lg-6 col-lg-push-1 boxContact">
                <form>
                    <div class="form-group col-xs-12">
                        <label for="name">Nombre</label>
                        <input v-validate type="text" required name="name" v-model="name" class="form-control" id="name">
                        <p v-show="errors.has('name')" class="text-center color-red">{{ errors.first('name') }}</p>
                    </div>
                    <div class="form-group col-xs-12">
                        <label for="cel">Celular</label>
                        <input v-validate type="number" name="phone" v-model="phone" class="form-control " required>
                        <p class="text-center color-red">{{ errors.first('phone') }}</p>
                    </div>
                    <div class="form-group col-xs-12">
                        <label for="email">Email</label>
                        <input v-validate type="email" name="email" v-model="email" class="form-control" required>
                        <p class="text-center color-red">{{ errors.first('email') }}</p>
                    </div>
                    <div class="form-group col-xs-12">
                        <label for="message">Mensaje</label>
                        <textarea v-validate rows="5" name="message" v-model="message" class="form-control" required></textarea>
                        <p class="text-center color-red">{{ errors.first('message') }}</p>
                    </div>
                    <div class="col-xs-12">
                        <button type="button" @click="validate()" class="btnEnviar">ENVIAR</button>
                    </div>              
                </form>
                <img class="circuloAzulForm hidden-xs" src="../assets/img/CirculoAzul_2x.png" alt="Circulo Azul Evento Listo">
            </div>

            
        </div>
        <img class="circuloleft hidden-xs" src="../assets/img/Circulos5.png" alt="Circulo5 Evento Listo">
    </div>
</template>

<script>
import axios from 'axios';
import Loader from './Loader.vue'
export default {
    name:'ContactUs',
    data() {
        return {
            name : null,
            email : null,
            phone : null,
            message :null,
            loader : null
        }
    },
    components :{
        Loader
    },
    methods: {
        sendMessage(){  
            return axios.post('http://api.plangel.com/contact',{
                name : this.name,
                phone : this.phone,
                message : this.message,
                email : this.email
            })
        },
        mounted() {
            this.$validator.localize('es', {
                messages: {
                    required: (field) => '* ' + field + 'es requerido'
                },
                attributes: {
                    name: 'name'
                } 
            })
        },
        validate(){
            this.$validator.localize('es');
            this.$validator.validateAll()
            .then(async (response) => {
                this.loader = true;
                await this.sendMessage() 
                .then(response => {
                    this.loader = false;
                    this.$snotify.success('Le responderemos a la brevedad posible','Mensaje enviado', {
                        timeout: 1500,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
                    });  
                })
                .catch(error => {
                    this.loader = false;
                    console.log(error)
                });
            })
            .catch(() => {

            });   
        }
    },
}
</script>



<style scoped>


textarea{
    resize: none;
}

.flexbox{
    display: flex;
    justify-items: center;
    align-items: center;
}

.colorGray{
    color: #707070;
}

.boxContact{
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow :-1px 5px 10px 2px #d4d1d1;
    padding: 3em 2em;
}

.btnEnviar{
    background: linear-gradient(to right, #21A8C1 , #E81F76);
    border-radius: 50px;
    padding: .7em 5em;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
}

.contact{
    height: calc(100% - 100px);
    position: relative;
}

.contact > div:not(:first-of-type):not(:nth-of-type(2)){
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}


.descriptionContact h2{
    font-family: GothamMedium;
    font-size: 40px;
}

.descriptionContact p {
    font-family: GothamBookItalic;
    font-size: 25px;
}

textarea{
     background-color: #e9eef3;
}
.boxContact label{
    font-family: GothamBold;
}

.boxContact input:not([type=checkbox]){
    height: 50px;
    border: none;
}

input[type=checkbox]:not(:checked) + label{
    border-radius: 50%;
}


.circuloleft{
    position: absolute;
    left: -250px;
    width: 550px;
    z-index: 0;
}

.circuloAzulForm{
    position: absolute;
    right: -45px;
    height: 75px;
    top: 10px;
    z-index: -1;
}

.pretty{
    margin-left: 15px;
}

</style>
