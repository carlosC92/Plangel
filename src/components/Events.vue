<template>
    <div class="col-xs-12 events">
        <div class="col-xs-12">
            <h2 class="colorGray">Eventos destacados</h2>

            <Carrousel style="z-index:1" :key="events" :events='events'></Carrousel>
           
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
// import events from '../events.json'
import Carrousel from './Carrousel.vue'
export default {
   name:'Events',
   components: {Carrousel},
   data() {
       return {
            events: [],
       }
   },
   created() {
        axios.get('http://api.plangel.com/events')
        .then(response => {
            this.events = response.data.data;
        })
        .catch(error => {
            console.log(error)
        })
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

form.example{
    box-shadow: -1px 6px 20px #b1b1b1;
    border-radius: 50px;
}
form.example input[type=text] {
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
  
  form.example button {
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
  }
  
  
  form.example::after {
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
