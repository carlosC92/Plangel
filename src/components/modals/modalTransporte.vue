<template>
    <div class="container-fluid nopadding">
        <h4 class="text-center">Transporte</h4>
        <div class="col-xs-12">
            <div class="col-xs-3 col-xs-push-3 flexbox">
                <div class="icon-aereo"></div>
                <span>Aereo</span>
                <label class="container-checkbox">
                    <input type="radio" checked="checked" name="radio">
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="col-xs-3 col-xs-push-3 flexbox">
                <div class="icon-terrestre"></div>
                <span>Terrestre</span>
                <label class="container-checkbox">
                    <input type="radio" name="radio">
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="col-xs-12">
                <div class="form-group col-xs-12">
                    <label for="name">Nombre del titular</label>
                    <input v-model="name" type="text" class="form-control">
                </div>
                <div class="form-group col-xs-6">
                    <label for="name">Correo Electrónico</label>
                    <input v-model="email" type="email" class="form-control">
                </div>
                <div class="form-group col-xs-6">
                    <label for="name">Celular</label>
                    <input v-model="phone" type="number" class="form-control">
                </div>
                <div class="form-group col-xs-6">
                    <label for="name">Num. Adultos</label>
                    <input v-model="adults" type="number" class="form-control">
                </div>
                <div class="form-group col-xs-6">
                    <label for="name">Num. Menores</label>
                    <input v-model="minors" type="number" class="form-control">
                </div>
                <div class="form-group col-xs-6">
                    <label for="name">Fecha de ida</label>
                    <date-picker v-model="dateIn" :lang="lang"></date-picker>
                </div>
                <div class="form-group col-xs-6">
                    <label for="name">Fecha de vuelta</label>
                     <date-picker v-model="dateOut" :lang="lang"></date-picker>
                </div>
                <div class="form-group col-xs-6">
                    <label for="name">Origen</label>
                    <input v-model="origin" type="text" class="form-control">
                </div>
                <div class="form-group col-xs-6">
                    <label for="name">Destino</label>
                    <input v-model="destination" type="text" class="form-control">
                </div>
            </div>
        </div>
        <button @click="requestTransportation()" class="btnEnviar">Solicitar</button>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import axios from 'axios';
export default {
    components: { DatePicker },
    data() {
        return {
            name : null,
            email : null,
            phone : null,
            adults : 0,
            minors : 0,
            origin : null,
            destination : null,
            dateIn: '',
            dateOut: '',
            lang: {
                days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
                placeholder: {
                date: 'Seleccione una fecha',
                dateRange: 'Select Date Range'
                }
            },
        }
    },
    methods: {
        async requestTransportation(){
           await axios.post('http://apiplan.smuffi.pet/transport',{
                idReservation : this.$route.id_reservation,
                name : this.name,
                phone : this.phone,
                email : this.email,
                children : this.minors,
                dateIn : this.dateIn,
                dateOut : this.dateOut
            }).then( response => {
                this.$emit('requetTransportationSuccess');
            })
            .catch( error => {
                console.log(error);
            })
        }
    },
}
</script>

<style scoped>

    .mx-datepicker{
        width: 100%;
    }
    .flexbox{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .container-checkbox {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

/* Hide the browser's default radio button */
    .container-checkbox input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }

/* Create a custom radio button */
    .checkmark {
        position: absolute;
        top: -7px;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #eee;
    }

/* On mouse-over, add a grey background color */
    .container-checkbox:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the radio button is checked, add a blue background */
    .container-checkbox input:checked ~ .checkmark {
        background-color: #2196F3;
    }

    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }
    .container-checkbox input:checked ~ .checkmark:after {
        display: block;
    }

    .icon-aereo{
        background-color: #9e968d;
        -webkit-mask: url(../../assets/img/plane-departure-solid.svg) no-repeat center;
        mask: url(../../assets/img/plane-departure-solid.svg) no-repeat center;
        width: 50px;
        height: 50px;
    }

    .icon-terrestre{
        background-color: #9e968d;
        -webkit-mask: url(../../assets/img/car-solid.svg) no-repeat center;
        mask: url(../../assets/img/car-solid.svg) no-repeat center;
        width: 50px;
        height: 50px;
    }
</style>
