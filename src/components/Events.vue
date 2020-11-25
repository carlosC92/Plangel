<template>
    <div class="col-xs-12 events nopadding">
        <vue-snotify></vue-snotify>
        <Loader :loader = loader></Loader>
        <div class="col-xs-12 divImgHeader text-center">
            <img src="../assets/img/home/Bg_Header.png" class="img-responsive" alt="Background Evento Listo">   
            <div class="col-xs-12 col-md-8 col-md-offset-2">
                    <h1 class="colorWhite">Encuentra tu evento</h1>
            </div>       
            <div class="col-xs-6 col-xs-offset-3 searchBar">
                <div class="example">
                    <input type="text" v-model="eventToSearch" @keyup="search" placeholder="Conciertos, bodas, congresos... encuentra cualquier evento" name="search">
                    <button type="button"><font-awesome-icon icon="search" /></button>
                </div>         
            </div> 
        </div>
        <div class="col-xs-12">
            <h2 class="colorGray">Eventos destacados</h2>

            
            <Carrousel style="z-index:1" v-if="event_search.length > 0" :events='event_search'></Carrousel>
            <Carrousel style="z-index:1" v-else :events='events'></Carrousel>
           
            <img class="circleEvents" src="@/assets/img/CirculoRojo.png" alt="">
            <img class="rotateImg circleEvent2 hidden-xs" src="@/assets/img/Circulos2.png" alt="">
            
        </div>

<!-- 
        <div class="col-xs-12 nextEvents">
            <h2 class="colorGray">Proximos Eventos</h2>
            <Carrousel :events='events.proximos_eventos'></Carrousel>
        </div>

        <div class="col-xs-12 nextEvents">
            <h2 class="colorGray">Conciertos</h2>

            <Carrousel :events='events.proximos_eventos'></Carrousel>
        </div>

        <div class="col-xs-12 nextEvents">
            <h2 class="colorGray">Congreso Simposio</h2>

           <Carrousel :events='events.proximos_eventos'></Carrousel>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';
import Loader from './Loader.vue'

// import events from '../events.json'
import Carrousel from './Carrousel.vue'
export default {
   name:'Events',
   components: {
       Carrousel,
       Loader
       },
   data() {
       return {
            events: [],
            loader : null,
            eventToSearch : '',
            event_search : []
       }
   },
    created() {   
        this.loader = true    
        axios.get('http://plangel.opticascontreras.com/events')
        .then(response => {
            this.events = response.data.data;
            this.loader = false
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    },
   methods: {
        search(e){ 
           if(this.eventToSearch != ""  && event.key == "Enter"){
            this.loader = true   
            axios.get('http://plangel.opticascontreras.com/event/'+this.eventToSearch+'/search')
            .then(response => {
                this.event_search = response.data.data;
                this.loader = false
                if(response.data.data.length == 0){
                    this.$snotify.error('No se encontraron eventos','Sin resultados', {
                        timeout: 1000,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
                    });
                }
                console.log(response)
            })
            .catch(error => {
                this.loader = false
                this.$snotify.error('Porfavor intentelo de nuevo','Ocurrio un error', {
                        timeout: 1000,
                        showProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true
                });
            })
           }
           
       }
   },
}
</script>

<style scoped>

/*Search Bar*/
.slick-slide img{
    display: inline;
}
.searchBar{
    position: absolute;
    bottom: -25px;
}

.searchBar .example{
    box-shadow: -1px 6px 20px #b1b1b1;
    border-radius: 50px;
}
.searchBar .example input[type=text] {
    font-size: 17px;
    border: 0px;
    float: left;
    color: #afaca7;
    width: 80%;
    background: white;
    border-radius:50px 0px 0px 50px;
    padding: 15px 0px 15px 15px;
    outline: none;
    font-family: GothamBook;
  }
  
  .searchBar .example button {
    float: left;
    width: 20%;
    background: white;
    color: #9E968D;
    font-size: 17px;
    border: 0px;
    cursor: pointer;
    border-radius:0px 50px 50px 0px;
    padding: 15px;
    outline: none;
    height: 54px;
  }
  
  
  .searchBar .example::after {
    content: "";
    clear: both;
    display: table;
  }




/*Events*/



.divImgHeader{
    padding: 0px;
    z-index: 1
}
.divImgHeader img{
    width: 100%;
    padding: 0px;
    height: 30vh;
    min-height: 200px;

}


.divImgHeader > div:first-of-type{
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}


.divImgHeader > div h1{
    font-family: GothamMedium;
    font-size: 40px;
}

.divImgHeader > div p{
    font-family: GothamBookItalic;
    font-size: 20px;
    display: block;
}

.events{
    background: #FCFCFC;
}

.events h2{
    font-family: GothamMedium;
    line-height: 3em;
}

.flexBox{
    display: flex;
}

.animationEventsBox{
    transition: .5s;
}


.event > a > img{
    width: 100%
}

.circleEvents{
    position: absolute;
    top: 50%;
    left: -5.33%;
    z-index: 0;
}

.event{
    margin: 20px 0px;
}


.event > div span img{
    width: 10px;
    vertical-align: initial;
    margin-right: .4em;
    display: inline;
}

.eventDescription{
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    border-radius: 0px 0px 10px 10px;
    box-shadow :-1px 5px 10px 2px #d4d1d1;
    padding: 5px 15px 15px 15px;
}

.eventDescription :nth-child(1),:nth-child(2){
    font-family: GothamMedium;
}

.eventDescription :nth-child(3),:nth-child(4){
    font-family: GothamBook;
}


.featuredEvents{
    max-height: 530px;
}

.upcomingEvents{
    max-height: 400px;
}

.concerts{
    max-height: 410px;
    margin-bottom: 20px;
}

.rotateImg{
    transform: rotate(90deg)
}

.circleEvent2{
    position: absolute;
    top: 10%;
    left: 90%;
    z-index: 0
}

.position-relative{
    position: relative;
    left: 0;
}
</style>
