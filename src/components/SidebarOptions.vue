<template>
    <div class="nopadding menuOptions text-center">
       <!--  <div id="adminReservation" class="option">
            <div class="icon-admin-evento"></div>
            <p>Administrar Reservacion</p>
        </div> -->
        <div id="transporte" class="option" @click="showModalTransporte">
            <div class="icon-transporte"></div>
            <p>Transporte</p>
        </div>
        <div id="callCenter" class="option" @click="showModalSolicitarLlamada">
            <div class="icon-solicitar-llamada"></div>
            <p>Solicitar llamada del Call Center</p>
        </div>
        <div id="openTicket" class="option">
            <router-link to="/contactUs"></router-link>
            <div class="icon-abrir-ticket"></div>
            <p>Abrir ticket de soporte</p>
        </div>
        <div id="frequentQuestions" class="option">
            <div class="icon-preguntas-frecuentes"></div>
            <p>Preguntas Frecuentes</p>
        </div>

    </div>
</template>

<script>
export default {
    name:"SidebarOptions",
    data() {
        return {
            modalTransporte:false,
            modalSolicitarLlamada: false
        }
    },
    methods: {
        showModalTransporte(){
            this.$emit('showModalTransporte', !this.modalTransporte)
        },
        showModalSolicitarLlamada(){
            this.$emit('modalSolicitarLlamada', !this.modalSolicitarLlamada)
        }
    },
}
</script>

<style scoped>

.menuOptions{
    position: fixed;
    left: 0px;
    top: 14%;
    width: 120px;
    padding-left: 10px;
    border: 1px solid #F4EFF7;
    border-left: none;
    border-radius: 10px;
    box-shadow: 0px 1px 20px 10px #ecebeb;
    padding-top: 10px;
    padding-bottom: 10px; 
}


.icon-admin-evento{
    background-color: #9e968d;
    -webkit-mask: url(../assets/img/iconAdminEvento.svg) no-repeat center;
    mask: url(../assets/img/iconAdminEvento.svg) no-repeat center;
    height: 30px;
}

.icon-transporte{
    background-color: #9e968d;
    -webkit-mask: url(../assets/img/iconTransporte.png) no-repeat center;
    mask: url(../assets/img/iconTransporte.png) no-repeat center;
    height: 40px;
}

.icon-solicitar-llamada{
    background-color: #9e968d;
    -webkit-mask: url(../assets/img/iconLlamada.svg) no-repeat center;
    mask: url(../assets/img/iconLlamada.svg) no-repeat center;
    height: 40px;
}

.icon-abrir-ticket{
    background-color: #9e968d;
    -webkit-mask: url(../assets/img/iconTicket.svg) no-repeat center;
    mask: url(../assets/img/iconTicket.svg) no-repeat center;
    height: 25px;
}

.icon-preguntas-frecuentes{
    background-color: #9e968d;
    -webkit-mask: url(../assets/img/iconFAQ.svg) no-repeat center;
    mask: url(../assets/img/iconFAQ.svg) no-repeat center;
    height: 35px;
}


.menuOptions > .option:hover p{
    color: #23527c
}

.option:hover .icon-admin-evento,
.option:hover .icon-transporte,
.option:hover .icon-solicitar-llamada,
.option:hover .icon-abrir-ticket,
.option:hover .icon-preguntas-frecuentes{
    background-color: #23527c;
}


.menuOptions > div > div{
    margin-top: 10px;
    margin-bottom: 10px;
}

.option a{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 1;
}

.option{
    position: relative;
    cursor: pointer;
}

.option p{
    font-family: GothamBook;
    color: #9E968D;
    font-size: 13px;
}


.menuOptions .option:not(:last-of-type) p{
    padding-bottom: 20px;
}


.menuOptions div:not(:last-of-type)::before{
    content:'';
   position: absolute;
    height: 50px;
    width: 80%;
    bottom: 0px;
    left: 10px;
    border-bottom: 2px solid #9E968D;
    border-radius: 1px;
    
}

</style>
