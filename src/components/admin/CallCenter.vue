<template>

    <div class="col-xs-10 col-xs-offset-1 nopadding">
        <div class="col-xs-12">
            <h2>CallCenter</h2>
            <h5>Proxima Llamada</h5>
            <div class="col-xs-5 containerButtons">
                 
                <div class="col-xs-4 nopadding">
                    <button class="button100 bg-white border-t-rad-left icon-marcar">Marcar</button>
                </div>

                <div class="col-xs-4 nopadding">
                    <button class="button100 bg-white border-left-right icon-reasignar">Reasignar</button>
                </div>

                <div class="col-xs-4 nopadding">
                    <button class="button100 bg-white border-t-rad-right icon-contestar">Contestar</button>
                </div>

                <div class="col-xs-3 nopadding">
                    <button class="button70 bg-black border-b-rad-left icon-no-contesto">No Contesto</button>
                </div>  

                <div class="col-xs-3 nopadding">
                    <button class="button70  border-white border-left-right bg-black border-rad-right icon-colgo">Colgo</button>
                </div>  
                <div class="col-xs-3 nopadding">
                    <button class="button70  border-white border-right-2 bg-black border-rad-right icon-se-corto">se corto</button>
                </div>  
                <div class="col-xs-3 nopadding">
                    <button class="button70 bg-black border-b-rad-right icon-no-asistira">no asistira</button>
                </div>                  
            </div>

            <div class="col-xs-6 col-xs-push-1 data-container">

                <div class="col-xs-12 white-card">
                    <div class="col-xs-12">
                        <h5>Detalles:</h5>
                        <h4>Nombre del evento</h4>      
                    </div>
                    
                    <div class="col-xs-9 eventInfo nopadding">
                        <div class="col-xs-6">
                            <p>Fecha:</p>
                            <p>29/09/18</p>
                        </div>
                        <div class="col-xs-6">
                            <p>Sede:</p>
                            <p>Hotel Barceló</p>
                        </div>
                        <div class="col-xs-6">
                            <p>Destino:</p>
                            <p>Tulum, Q.Roo</p>
                        </div>
                        <div class="col-xs-6">
                            <p>Categoria:</p>
                            <p>Familiar</p>
                        </div>
                    </div>
                    <div class="col-xs-3 event-costs">
                        <p>Costos:</p>
                        <p>$2,950 MXN</p>
                        <p>$2,950 MXN</p>
                        <p>$2,950 MXN</p>
                    </div>
                    <div class="col-xs-6">
                        <a @click="modalPrograma=true" href="#"><img src="@/assets/img/IconCronograma.png" alt="">Cronograma</a>
                    </div>
                </div>

                 <div class="col-xs-12 white-card">
                    <div class="col-xs-12">
                    <h5>Detalles del contacto:</h5>   
                    </div>
                    
                    <div class="col-xs-9 contact-info nopadding">
                        <div class="col-xs-4">
                            <p>Nombre:</p>
                            <p>José Francisco</p>
                        </div>
                        <div class="col-xs-4">
                            <p>Apellido:</p>
                            <p>Gómez Ortíz</p>
                        </div>
                        <div class="col-xs-4">
                            <p>Reserva:</p>
                            <p># de reserva</p>
                        </div>
                        <div class="col-xs-4">
                            <p>Celular:</p>
                            <p>9991574930</p>
                        </div>
                        <div class="col-xs-4">
                            <p>Correo electrónico:</p>
                            <p>jofra278@gmail.com</p>
                        </div>
                        <div class="col-xs-4">
                            <p>Pase:</p>
                            <p>Tipo de pase</p>
                        </div>
                    </div>
                    <div class="col-xs-3 contact-payments">
                        <p>Total: <span>$29,784</span></p>
                        <p>Abonado: <span>$14,784</span></p>
                        <p>Pendiente: <span>$15,000</span></p>
                    </div>
                    <div class="col-xs-12">
                        <dropdown class="col-xs-3" ref="dropdown">
                            <btn type="primary" class="btn btnGreen dropdown-toggle dropdown-toggle">Nueva<span class="pad-left caret"></span></btn>
                            <template class="dropdown-menu" slot="dropdown">
                                <li><a href="#">Reserva</a></li>
                                <li><a href="#">Abono</a></li>
                                <li><a href="#">Llamada</a></li>
                                <li><a href="#">Observar</a></li>
                                <li><a href="#">Pase</a></li>
                            </template>
                        </dropdown>

                        <dropdown class="col-xs-3" ref="dropdown">
                            <btn type="primary" class="btn btnWhite dropdown-toggle dropdown-toggle">Historial<span class="pad-left caret"></span></btn>
                            <template class="dropdown-menu" slot="dropdown">
                                <li><a href="#">Llamadas</a></li>
                                <li><a href="#">Emails</a></li>
                                <li><a href="#">SMS</a></li>
                            </template>
                        </dropdown>

                        <dropdown class="col-xs-3" ref="dropdown">
                            <btn type="primary" class="btn btnWhite dropdown-toggle dropdown-toggle">Reenviar<span class="caret"></span></btn>
                            <template class="dropdown-menu" slot="dropdown">
                                <li><a href="#">Reenviar Invitacion</a></li>
                                <li><a href="#">Reenviar SMS</a></li>
                            </template>
                        </dropdown>
                    </div>
                </div>      

            </div>
            
        </div>

         <modal v-model="modalPrograma" size="xlg" :footer="false">
           <programaModal/>
        </modal>
    </div>
        
    
</template>

<script>
import programaModal from '@/components/modals/programaModal.vue'
export default {
    name: 'CallCenter',
    components:{
        programaModal
    },
    data() {
        return {
            modalPrograma : false
        }
    },
}
</script>

<style scoped>
    .flex{
        display: flex;
        align-items: center;
        justify-items: center;
    }
    .btn .caret{
        margin-left: 10px;
    }
    .data-container > *+*{
        margin-top: 20px;
    }

    .white-card{
        background: white;     
        border-radius: 10px;
        padding: 15px; 
    }

    .white-card h3{
        font-family: SourceRegular;
        color: #43425D;
        text-transform: uppercase
    }

    .white-card h4{
        font-family: SourceBold;
        color: black;
        text-transform: uppercase
    }
    .border-white{
        border-color: white;
    }

    .bg-white{
        background: white;
    }

    .bg-black{
        background: #43425D;
        color:white;
    }
    .button100{
        width: 100%;
        height: 80px;
        border: 0px;
        padding-top: 50px;
        position: relative;
        text-transform: uppercase;
        font-family: SourceRegular;
        outline: none;
    }

     .button70{
        width: 100%;
        height: 80px;
        border: 0px;
        padding-top: 50px;
        position: relative;
        text-transform: uppercase;
        font-family: SourceRegular;
        outline: none;
    }

    .button100:hover{
        background: #21A8C1;
        color: white;
    }

    .button70:hover{
        color: #E81F76;
    }

     .button70:before{
        position: absolute;
        top: 20%;
    }

    .button100:before{
        position: absolute;
        top: 20%;
    }
    
    .icon-marcar:before{
        width: 25px;
        height: 30px;
        content: '';
         -webkit-mask: url(../../assets/img/iconTelefono.svg) no-repeat 50% 50%;
        mask: url(../../assets/img/iconContestar.svg) no-repeat 50% 50%;
        -webkit-mask-size: cover;
        mask-size: cover;
        left: calc(50% - 15px);
        background: #4D4F5C;
    }

    .icon-reasignar:before{
        content: url('../../assets/img/iconReasignar.svg');
        width: 30px;
        height: 30px;
        content: '';
         -webkit-mask: url(../../assets/img/iconReasignar.svg) no-repeat 50% 50%;
        mask: url(../../assets/img/iconReasignar.svg) no-repeat 50% 50%;
        -webkit-mask-size: cover;
        mask-size: cover;
        left: calc(50% - 15px);
        background: #4D4F5C;
    }

    .icon-contestar:before{
        width: 25px;
        height: 30px;
        content: '';
        -webkit-mask: url(../../assets/img/iconContestar.svg) no-repeat 50% 50%;
        mask: url(../../assets/img/iconContestar.svg) no-repeat 50% 50%;
        -webkit-mask-size: cover;
        mask-size: cover;
        left: calc(50% - 15px);
        background: #4D4F5C;
    }

    .icon-no-contesto:before{
        width: 25px;
        height: 25px;
        left: calc(50% - 10px);
        content: '';
        -webkit-mask: url(../../assets/img/iconNoContesto.svg) no-repeat 50% 50%;
        mask: url(../../assets/img/iconNoContesto.svg) no-repeat 50% 50%;
        -webkit-mask-size: cover;
        mask-size: cover;
        background: white;
    }

    .icon-colgo::before{
        width: 30px;
        height: 30px;
        left: calc(50% - 15px);
        content: '';
        -webkit-mask: url(../../assets/img/iconTerminarLlamada.svg) no-repeat 50% 50%;
        mask: url(../../assets/img/iconTerminarLlamada.svg) no-repeat 50% 50%;
        -webkit-mask-size: cover;
        mask-size: cover;
        background: white;
    }

    .icon-se-corto:before{
        width: 25px;
        height: 25px;
        left: calc(50% - 10px);
        content: '';
        -webkit-mask: url(../../assets/img/iconSeCorto.svg) no-repeat 50% 50%;
        mask: url(../../assets/img/iconSeCorto.svg) no-repeat 50% 50%;
        -webkit-mask-size: cover;
        mask-size: cover;
        background: white;
    }

    .icon-no-asistira:before{
        width: 30px;
        height: 30px;
        left: calc(50% - 15px);
        display: inline-block;
        content: '';
        -webkit-mask: url(../../assets/img/iconNoAsistira.svg) no-repeat 50% 50%;
        mask: url(../../assets/img/iconNoAsistira.svg) no-repeat 50% 50%;
        -webkit-mask-size: cover;
        mask-size: cover;
        background: white;
    }


    
    .icon-marcar:hover:before,
    .icon-reasignar:hover:before,
    .icon-contestar:hover:before{
        background: white;
    }

    .icon-no-contesto:hover:before,
    .icon-colgo:hover:before,
    .icon-colgo:hover:before,
    .icon-se-corto:hover:before,
    .icon-no-asistira:hover:before{
        background: #E81F76;
    }


    .border-right-2{
        border-right: 1px;
        border-style: solid;
         border-color: #E9E9F0
    }


    .border-left-right{
        border-top: 0px;
        border-bottom: 0px;
        border-right: 1px;
        border-left: 1px;
        border-style: solid;
        border-color: #E9E9F0
    }
    .border-t-rad-left{
        border-top-left-radius: 10px;
    }

    .border-t-rad-right{
        border-top-right-radius: 10px;
    }

    .border-b-rad-left{
        border-bottom-left-radius: 10px;
    }

    .border-b-rad-right{
        border-bottom-right-radius: 10px;
    }
    
    .data-container:last-child{
        margin-bottom: 100px;
    }

    .contact-info > div > p:first-child,
    .eventInfo > div > p:first-child{
        color: #808495;
        font-family: SourceRegular;
        font-size: 13px;
    }

    .contact-info > div > p:last-child,
    .eventInfo > div > p:last-child{
        color:  #43425D;
        font-family: SourceRegular;
    }

    .event-costs p:first-child{
        color: #808495;
        font-family: SourceRegular;
    }
    .event-costs p:not(:first-child){
        color: #E81F76;
        font-family: SourceBold; 
    }

    .contact-payments > p{
        font-family: SourceRegular;
        color: #43425D;
        font-weight: bold;
    }

    .contact-payments > p:first-of-type span{
        color: #808495;
    }
    .contact-payments > p:nth-child(2) span{
        color: #4AD991;
    }
     .contact-payments > p:nth-child(3) span{
        color: #E81F76;
    }
</style>
