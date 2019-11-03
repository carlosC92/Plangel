<template>
    <div class="col-xs-12 event nopadding">
        <div class="col-xs-12 nopadding divImgHeader">
            <img :src="event.imgCover" alt="Background Evento Listo">   
            <div class="col-xs-12 col-md-5">
                <span class="colorWhite"><img src="@/assets/img/event/iconPinMap.svg" alt="Evento Listo Location"> Cancun, Q.Roo</span>
                <span class="colorWhite"><img src="@/assets/img/event/iconCategoria.svg" alt="Evento Listo Location"> Simposio</span>
                <span class="colorWhite"><img src="@/assets/img/event/IconTipoEvento2.svg" alt="Evento Listo Location"> Publico</span>
            </div>
            <div class="col-xs-12 col-md-6 col-lg-6 col-lg-offset-1">
                <p>{{headerDate}}</p>
                <h2 class="colorWhite">{{event.eventName}}</h2>
                <button @click="confirmAssist" type="button" class="btnConfirm">CONFIRMAR ASISTENCIA</button>
            </div>              
        </div>
        <div class="col-xs-12 col-lg-8 col-lg-offset-2">
            <div class="col-xs-12 col-lg-7 eventInfo">
                <p class="colorGray">{{event.message}}</p>              
            </div>
            <div class="col-xs-12 col-lg-5 pull-right eventDates">
                <h4 class="colorGray">Fecha del Evento</h4>
                <div class="col-xs-12 col-sm-6 col-md-12">
                    <div class="col-xs-12 date">
                        <div class="col-xs-3">
                            <img src="@/assets/img/event/iconCalendarStar.svg">
                        </div>
                        <div class="col-xs-9 pull-right">
                            <div class="col-xs-12">
                                <p>Del</p>
                                <p>{{dateInOut.eventStart}}</p>
                            </div>
                            <div class="col-xs-12">
                                <p>Al</p>
                                <p>{{dateInOut.eventEnd}}</p>
                            </div>
                        </div>                  
                    </div> 
                </div> 
            </div>
        </div>
        
            

        <div class="col-xs-12 col-md-8 col-md-offset-2 nopadding galeryEvent" v-if="event.gallery.lenght > 0" >
            <h4 class="colorGray">Galeria del evento</h4>
            <div class="col-xs-12">
                <gallery :images="images" :index="index" @close="index = null"></gallery>
                <div
                class="image col-xs-4 backgroundFull"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')', height: '200px' }"
                ></div>
            </div>       
        </div> 
        
        <div class="col-xs-12 nopadding backgrounGrey">   
            <div class="col-xs-12 col-md-8 col-md-offset-2">
                <h4 class="text-center colorGray">Ponentes</h4>

                <div class="col-xs-12 speakers text-center nopadding">
                    <div class="speaker" v-for="(speaker,index) in speakers" :key="index">
                        <img :src="speaker.imagen" alt="">
                        <p>{{speaker.description}}</p>
                        <p>{{speaker.name}}</p>
                    </div>

                </div> 
            </div>    
        </div>  
        <div class="col-xs-12 col-md-8 col-md-offset-2">
            <h4 class="colorGray">Actividades del evento</h4>   
            <div class="col-xs-12 nopadding eventActivities">
                <div class="col-xs-12 col-sm-6" v-for="(element, index) in event.chronology.data" :key="index">
                    <div class="col-xs-12 nopadding eventActivity">
                        <div class="col-xs-5 nopadding">
                            <img :src="element.image" alt="">
                        </div>
                        <div class="col-xs-7 activityDescription text-center">      
                            <p>{{element.type}}</p>
                            <p>{{dateFormat(element.date)}}</p> 
                            <p>09:00 AM a 13:00 PM</p>        
                        </div>  
                    </div>
                </div>                                 
            </div> 
            <button type="button" class="btnCron" @click="modalPrograma=true">Programa</button>  
        </div>      
        <div class="col-xs-12 reservation">
            <img src="@/assets/img/event/LogoHotel1.png" class="logoHotel" alt="">
            <div class="col-xs-12 col-md-8 col-md-offset-2 nopadding">
                <div class="col-xs-12 col-sm-6 col-md-3 hotelHab" @click="categoryModal=true"  v-for="(element, index) in event.hotel.data.categories.data" :key="index">
                    <img :src="element.image" alt="">
                    <div class="col-xs-12 hotelDescription">
                        <p>{{element.type}}</p>
                        <p>${{element.occupation.data[0].price}} MXN</p>
                        <p>Precio por persona por noche</p>
                    </div>
                </div>
            </div>
    
            <button class="btnEnviar" @click="confirmAssist">RESERVAR</button>
    
        </div> 
        <div class="col-xs-12 text-center sponsorsContainer nopadding" v-if="event.sponsor.data.length > 0">
            <h4 class="colorGray">Patrocinadores</h4>
            <div class="col-xs-12 col-md-10 col-md-offset-1 sponsors nopadding">
                <div v-for="(item, index) in event.sponsor.data" :key="index" class="col-xs-6 col-sm-4 col-md-2"><img :src="item.image" alt=""></div>
            </div>
        </div>

        <modal v-model="modalPrograma" size="xlg" :footer="false">
           <programaModal :cronograma="event.chronology"/>
        </modal>

        <modal v-model="categoryModal" size="lg" :header="false" :footer="false">
           <categoryModal/>
        </modal>
        
    </div>
</template>


<script>
 import VueGallery from 'vue-gallery';
import programaModal from './modals/programaModal.vue'
import categoryModal from './modals/categoryModal.vue'
import moment from 'moment';
import axios from 'axios';
export default {
    name:'Event',
    components:{
        programaModal,
        categoryModal,
        'gallery': VueGallery
    },
    computed: {
        headerDate(){
            let formDate = moment(this.event.eventDate,'YYYY-MM-DD');
            moment.locale();
            return formDate.format('LL');
        },
        dateInOut(){
            let eventStart = moment(this.event.dateIn,'YYYY-MM-DD');
            let eventEnd = moment(this.event.dateOut,'YYYY-MM-DD');
            moment.locale();
            return {
                eventStart : eventStart.format('L'),
                eventEnd :  eventEnd.format('L')
            }
        },
      
    },
    data() {
        return {
            index: null,
            event : null,
            speakers : null,
            images:[
                require("../assets/img/event/ImgGaleria1.png"),
        
                require("../assets/img/event/ImgGaleria2.png"),
        
                require("../assets/img/event/ImgGaleria3.png"),
        
                require("../assets/img/event/ImgGaleria4.png"),
        
                require("../assets/img/event/ImgGaleria5.png"),
        
                require("../assets/img/event/ImgGaleria6.png"),
        
                require("../assets/img/event/ImgDestacada.png"),
             
            ],
            modalPrograma : false,
            categoryModal : false,
        }
    },
     mounted() {
        this.getEventData();
        this.getSpeakers();
    },
    methods: {
        dateFormat(date){
            let dateFormat =  moment(date,'YYYY-MM-DD');
            moment.locale();
            return dateFormat.format('L')
        },
        confirmAssist(e){
            e.preventDefault()
            this.$router.push({
                name : 'reserveProcess', 
                params : {id_event : this.$route.params.id}
            })
        },
        async getEventData(){
           await axios.get('http://apiplan.smuffi.pet/event/'+ this.$route.params.id)
            .then(response => {
                this.event = response.data.data;
                console.log(response.data.data)
                
            })
            .catch(error => {
                console.log(error)
            })
        },

        async getSpeakers(){
           await axios.get('http://apiplan.smuffi.pet/event/'+ this.$route.params.id+'/speakers')
            .then(response => {
                this.speakers = response.data.data;
                console.log(response.data.data)
                
            })
            .catch(error => {
                console.log(error)
            })
        }
    },
}
</script>


<style scoped>
.backgroundFull{
    background-size: cover;
}
/*Event*/
.colorGreen{
    color : #21A8C1;
}

.colorWhite{
    color:#FFFFFF;
}

.colorGray{
    color:#707070;
}

.colorLila{
   color: #E81F76;
}

.nopadding{
    padding: 0px;
}

.divImgHeader{
    background: #4C4650;
    z-index: 1;
    position: relative;
}

.divImgHeader::after{
    content: '';
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 0%;
    right: 0%;
    opacity: 0.5;
    background-image: linear-gradient(to right,#7b777e , #7b777e, transparent 65%);
}

.divImgHeader > img{
    width: 100%;
    padding: 0px;
    min-height: 200px;
    max-height: 600px;
}


.divImgHeader > div:first-of-type{
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 2;
}

.divImgHeader > div:first-of-type span img{
    filter: brightness(0) invert(1);
}

.divImgHeader > div:first-of-type span:nth-of-type(2) img{
    width: 15px;
}

.divImgHeader > div:nth-of-type(2){
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
}

.divImgHeader > div:nth-of-type(2) h2{
    font-size: 50px;
}

.divImgHeader > div:nth-of-type(2) p{
    font-family: GothamMedium;
    color: white;
    font-size: 20px;
}

.eventInfo > p{
    font-family: GothamBook;
    font-size: 20px;
    margin-top: 30px;
}

.arrows{
    padding: 10px 0;
    list-style: none;
}

.arrows li {
    display: inline;
    font-size: 18px;
}

.arrows *+*:before {
    content: ' \02C3';
    font-size: 15px;
    padding: 8px;
    color: #9E968D;
}

.arrows li a { 
   font:15px GothamBook;  
   letter-spacing: -1px; 
   text-decoration: none;
}

.arrows li:nth-of-type(1) a { color: hsl(0, 0%, 70%); } 
.arrows li:nth-of-type(2) a { color: hsl(0, 0%, 65%); } 
.arrows li:nth-of-type(3) a { color: hsl(0, 0%, 50%); } 
.arrows li:nth-of-type(4) a { color: hsl(0, 0%, 45%); } 


.event > div:not(:first-of-type){
    margin-top: 40px;
}
.event p{
    font-family: GothamBook;
}

.sponsors{
    margin-top: 60px;
    margin-bottom: 40px;
}

.sponsors h2{
    line-height: 100px;
}

.sponsors > div{
    margin-top: 10px;
}

.sponsors > div img{
    width: 168px;
    height: 107px
}

.speakers{
    display: flex;
    flex-flow: row wrap;
    margin-top: 60px;
    margin-bottom: 40px;
}

.speaker {
    border: 1px solid #e9e6e6;
    border-radius: 3%;
    background: white;
    width: 30%;
    padding: 0 1.5em;
    display: inline-block;
    margin: auto;
    margin-top: 6%;
}

.speaker img{
    display: block;
    height: 100px;
    top: -50px;
    position: relative;
    margin: 0 auto;
    border: 4px solid #E81F76;
    border-radius: 50%;
}

.event h2,h4{
    font-family: GothamMedium;
}

.event span{
    font-family: GothamBook;
    margin-right: 2em;
}

.event span > img{
    width: 10px;
    vertical-align: initial;
    margin-right: .4em;
}

h4{
    font-family: GothamMedium;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
}

.event .imgEvent{
    width: 100%;
    margin-top: 20px;
}

.dates{
    padding-left: 1em;
    font-family: GothamBook;
}

/*Fechas del evento*/

    .eventDates .date{
    border-radius: 10px;
    background: #FFFFFF;
    box-shadow :0px 3px 10px 2px #d4d1d1;
    margin-top: 20px;
    padding: 10px;
    position: relative;
  }

  .eventDates .date > div:first-of-type{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
  }
  
  .eventDates .date img{
    height: 50px;
  }
  
  .eventDates .date div p:first-of-type{
    font-family: GothamBook;
    color: #A4AFB7;
    text-align: left;
  }
  
  .eventDates .date div p:last-of-type{
    font-family: GothamBold;
    color: #1b95cb;
    text-align: left ;
    font-size: 25px;
    letter-spacing: 2px;
  }


/*Galeria evento*/

.gallery{
    margin-top: 60px;
}

.gallery div img{
    width: 100%;
    height: 100%;
}

.item{
    margin-bottom: 20px;
}
/*Reservation*/


.reservation{  
    background: #e9eef3;
    z-index: 0;
    margin-top: 50px;
}

.reservation > div{
    margin-top: 30px;
    margin-bottom: 30px;
}

.reservation p{
    font-family: GothamBook;
    color: #4C4650;
   
}

.logoHotel{
    display: block;
    margin: 0px auto;
    margin-top: 30px;
}


.hotelHab img{
    width: 100%;
    height: 145px;
    max-height: 145px;
}

 .reservation .hotelHab .hotelDescription{
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    border-radius: 0px 0px 10px 10px;
    box-shadow :-1px 5px 10px 2px #d4d1d1;
    padding: 10px;
    text-align: center;
}

 .reservation .hotelHab .hotelDescription p:first-of-type{
    font-family: GothamBold;
    color: #1b95cb;
}

.reservation .hotelHab .hotelDescription p:nth-of-type(2){
    font-family: GothamMedium;
    color: #4C4650;
}

.reservation .hotelHab .hotelDescription p:nth-of-type(3){
    font-family: GothamBook;
    color: #9E968D;
}


.fotoHotel{
    width: 100%
}


.galeria::after, .videos::after{
    content: '';
    position: absolute;
    height: 50px;
    width: 40px;
    top: 20%;
    right: 0;
    border-right: 2px solid #9E968D;
    border-radius: 1px;
}


.optionHotel img{
    display: block;
    width: 40px;
    margin: 0px auto;
    padding: 20px 0px;
}

.optionHotel p{
    font-family: GothamBook;
    font-size: 12px;
    color: #4C4650;
}

.optionHotel :nth-last-of-type(2) img{
    padding-top: 23px !important;  
}

.optionHotel :nth-last-of-type(2) p{
    padding-top: 2px !important;  
}

.habHotel{
    border: 1px solid #F4EFF7;
    border-radius: 10px;
    background-color: #F4EFF7;
    margin-bottom: 20px;
}

.habDescription :first-child{
    color: #E81F76;
    font-family: GothamBold;
}



.habDescription :nth-child(2){
    color: #4C4650;
    font-family: GothamMedium;
    font-size: 18px;
}

.habDescription :nth-child(3){
    color: #9E968D;
    font-family: GothamBook;
    margin: 0px;
}

.habHotel > :nth-child(3){
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.backgrounGrey{
    background: #e9eef3;
}


.btnCron{
    background: #FCFCFC;
    border-radius: 50px;
    padding: 1em;
    width: 15%;
    border: 2px solid #E81F76;
    color: #E81F76;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
    text-transform: uppercase;
}

.btnEnviar{
    background: linear-gradient(to right, #21A8C1 , #E81F76);
    border-radius: 50px;
    padding: 1em 3em;
    width: 20%;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
    margin-top: 20px;
    font-size: 15px;
    margin-bottom: 50px;
}

.btnConfirm{
    background: linear-gradient(to right, #21A8C1 , #E81F76);
    border-radius: 50px;
    padding: 1em 3em;
    width: 40%;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
    margin-top: 20px;   
    font-size: 15px;
}

.share{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 20px;
}

.share img{
    width: 25px;
    margin: auto;
}

.share span{
    font-family: GothamBook;
    color: #707070;
    padding-right: 10px;
    font-size: 15px;
}


.eventActivities{
    margin-top: 40px;
}


.eventActivity{
    border: 1px solid #F4EFF7;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    box-shadow: 0px 1px 20px 10px #ecebeb;
}

.eventActivity div > img{
       width: 100%;
    height: 100%;
    max-height: 120px;
    border-radius: 10px;
}

.activityDescription{
    padding: 15px
}

.activityDescription p:first-of-type {
    color: #1b95cb;
    font-family: GothamBold;
}

.activityDescription p:nth-of-type(2){
    color: #4D4F5C;
    font-family: GothamMedium;
}

.activityDescription p:nth-of-type(3),p:nth-of-type(4){
    color: #43425D;
    font-family: GothamBook;
}

.menuOptions{
    position: fixed;
    left: 0px;
    top: 15%;
    width: 120px;
    padding-left: 10px;
    border: 1px solid #F4EFF7;
    border-left: none;
    border-radius: 10px;
    box-shadow: 0px 1px 20px 10px #ecebeb;
    padding-top: 10px;
    padding-bottom: 10px; 
    z-index: 0;
}


.menuOptions div{
    width: 80%;
}

.menuOptions img{
    width: 40%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 32.8px;
}

.menuOptions *+*{
    margin-top: 10px;
}

.option{
    position: relative;
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
    width: 100%;
    bottom: 0px;
    left: 0px;
    border-bottom: 2px solid #9E968D;
    border-radius: 1px;
}


  /*Cronograma*/

  .modal-xlg{
    width: 90%;
    margin: 30px auto;
}

  
.cronograma .date {
    display: flex;
    align-content: center;
    justify-content: center;
    text-align: center;
}

.cronograma .date >  div {
    background: #21A8C1;
    border-radius: 50%;
    padding: 3px 10px;
    margin-bottom: 20px;
}

.cronograma .date >  div  p:first-child{
    font-family: GothamBold;
    font-size: 13px;
    color: white;
    margin: 0px;
}

.cronograma .date >  div  p:last-child{
    font-family: GothamBook;
    font-size: 11px;
    color: white;
    text-transform: uppercase;
    margin: 0px;
}

.cronograma .date > p{
    background: #21A8C1;
    border-radius: 50%;
    display: inline-block;
    width: 30px;
}

.crogramActivity{
    border: 1px solid #F4EFF7;
    border-radius: 10px;
    margin-bottom: 20px;
    display: flex;
    box-shadow: 0px 1px 15px 1px #ecebeb; 
}

.cronograma .crogramActivity::before{
    content: '';
    position: absolute;
    width: 5px;
    height: 22px;
    background: #21A8C1;
    top: -22px;
    left: 49.7%;
}

.cronograma .crogramActivity:not(:last-of-type)::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 22px;
    background: #21A8C1;
    bottom: -22px;
    left: 49.7%;
}

.crogramActivity > div:not(:first-child){
    padding: 20px 0px;
}

.crogramActivity > div:nth-child(3){
    padding-left: 15px;
    padding-right: 15px;
}

.crogramActivity .activityData > p:first-of-type{
    font-family: GothamBold;
    color: #21A8C1;
}

.crogramActivity .activityData > p:nth-of-type(2){
    font-family: GothamBold;
    color: #43425D;
}

.crogramActivity .activityData > p:nth-of-type(3){
    font-family: GothamBold;
    color: #43425D;
}


.crogramActivity .activityData h5{
    font-family: GothamBold;
    color: #4D4F5C;  
}

.crogramActivity .activityData > div p:first-child{
    font-family: GothamBold;
    color :#808495;
    font-size: 9px;
}

.crogramActivity .activityData > div p:nth-child(2){
    font-family: GothamBold;
    color :#43425D;
    font-size: 12px;
}

.crogramActivity .activityInfo p{
    font-family: GothamBold;
}

.crogramActivity .activityInfo p:nth-of-type(odd){
    color: #808495;
    font-size: 11px;
}

.crogramActivity .activityInfo p:nth-of-type(even){
    color: #4D4F5C;
    font-size: 13px;
	font-family: GothamBook;
}

.crogramActivity .hotelDescription > p{
    color: #E81F76;
    font-family: GothamBold;
    text-transform: uppercase;
}

.crogramActivity .hotelDescription > div:first-of-type img{
    width: 80px;
    height: 70px;
    display: inline-block;

}

.crogramActivity .hotelDescription > div:nth-of-type(2){
    padding: 10px 5px;
}

.crogramActivity .hotelDescription > div:nth-of-type(2) h5{
    font-family: GothamBold;
    color: #43425D;
    margin: 0px;
    font-size: 18px;
}

.crogramActivity .hotelDescription > div:nth-of-type(2) i{
color: #EEC520;
}

.crogramActivity .hotelDescription > div:nth-of-type(2) p{
    font-family: GothamMedium;
    color: #79798b;
    font-size: 12px;
}

.crogramActivity .hotelDescription > div:nth-of-type(3) p{
    font-family: GothamMedium;
    color: #79798b;
    font-size: 12px;
}


/*=============================================
 =            ESCRITORIO GRANDE (1366px)            =
 =============================================*/
 
 @media(min-width:1200px) {


}



/*===========================================
=            ESCRITORIO MEDIANO (1024px)            =
===========================================*/



@media(max-width:1199px) and (min-width: 1024px){

   
    
}


/*========================================
=            ESCRITORIO PEQUEÑO (768px)            =
========================================*/

@media (max-width: 1023px) and (min-width: 768px) {

    .speaker{
        width: 49%;
    }
}

@media (max-width: 766px) and (min-width: 600px){
    .eventDates > div{
        width: 50%;
    }

    .sponsors > div{
       width: 33.33333333%;
    }
    .reservation > div > div{
        width: 50%;
    }
}


/*==========================================
=            ESCRITO EXTRAPEQUEÑO (320px)            =
==========================================*/

@media (max-width: 767px) {
    .btnConfirm{
        padding: 1em;
        font-size: 12px;
        width: 60%
    }

    .event span{
        font-size: 10px;
    }

    .divImgHeader > div:nth-of-type(2) {
        margin-top: 15px;
    }

    .divImgHeader > div:nth-of-type(2) p {
        font-size: 15px;
    }

    .divImgHeader > div:nth-of-type(2) h2{
        font-size: 20px;
        margin-top: 0px
    }
    .eventDates .date div p:last-of-type{
        font-size: 20px
    }

    .speaker {
        width: 100%;
        margin-top: 50px;
    }

    .btnCron{
        width: 50%;
    }

    .btnEnviar{
        width: 50%;
        margin-left: auto;
    }

    .sponsors img{
        width: 120px;
    }

    .eventInfo > p{
        margin-top: 0px;
    }

    .divImgHeader > div:first-of-type {
        left: 2%;
    }
}

</style>
