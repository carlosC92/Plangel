<template>
    <div class="col-xs-12 menuReservation">
        <ul> 
            <li>  
                <dropdown ref="dropdown">
                <a class="dropdown-toggle"><img src="@/assets/img/IconNuevaHabitacion.png" class="imgDropdown">Nuevo</a>
                    <template slot="dropdown">
                        <li><a @click="modalAbono=true" role="button">Nuevo Abono</a></li>
                        <li><a @click="modalTicket=true" role="button">Nuevo Ticket</a></li>
                    </template>
                </dropdown>  
            </li>         
            <!-- <li><a data-toggle="modal" data-target="#generatePay"><img src="img/IconGenerarAbono.png">Generar abono</a></li> -->
            <li><a @click="modalMisAbonos=true"><img class="imgDropdown" src="@/assets/img/IconMisAbonos.png">Abonos</a></li>
            <li><a @click="modalCronograma=true"><img class="imgDropdown" src="@/assets/img/IconCronograma.png">Cronograma</a></li>
            <li><a @click="modalNotificarAbono=true"><img class="imgDropdown" src="@/assets/img/IconNotificarAbono.png">Datos bancarios</a></li>
        </ul>
        <modal v-model="modalAbono" size="lg" :footer="false">
            <AbonoModal/>      
        </modal>

        <modal v-model="modalMisAbonos" size="lg" :footer="false">
           <MisAbonosModal/>
        </modal>

        <modal v-model="modalCronograma" size="xlg" :footer="false">
            <programa-modal/>
        </modal>

        <modal v-model="modalNotificarAbono" size="lg" :footer="false">
            <NotificarAbonoModal/>
        </modal>

        <modal v-model="modalTicket" :footer="false">
            <TicketModal/>
        </modal>  
    </div>
    
</template>



<script>

import ProgramaModal from '../modals/programaModal.vue';
import AbonoModal from '../modals/abonoModal.vue';
import MisAbonosModal from '../modals/misAbonosModal.vue'
import NotificarAbonoModal from '../modals/notificarAbonoModal.vue'
import TicketModal from '../modals/ticketModal.vue'
export default {
    name: 'MenuReservation',
    components:{
        ProgramaModal,
        AbonoModal,
        MisAbonosModal,
        NotificarAbonoModal,
        TicketModal
    },
    data() {
        return {
            modalAbono: false,
            modalTicket: false,
            modalMisAbonos: false,
            modalCronograma: false,
            modalNotificarAbono: false,
        }
    },
}
</script>

<style>

.btnEnviar{
    background: linear-gradient(to right, #21A8C1 , #E81F76);
    border-radius: 50px;
    padding: 1em;
    width: 250px;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
    font-size: 17px;
}

.modal-xlg{
    width: 90%;
    margin: 30px auto;
}

.menuReservation > ul{
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding-left:0px;
}

.imgDropdown{
    margin-right: 10px;
    margin-bottom: 3px;
}

.menuReservation ul{
    font-family: GothamBold;
    color: #9E968D;
}

.menuReservation ul:hover{
    color: #087590;
    cursor: pointer;
    text-decoration-color: #087590;
}
</style>
