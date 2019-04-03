<template>
    <div class="col-xs-12 col-md-10 col-md-offset-1 events">
        <div class="col-xs-12 featuredEvents">
            <h2 class="colorGray">Eventos destacados</h2>

            <div class="animationEventsBox flexBox position-relative">
                <div class="col-xs-6 col-md-3 event" v-for="(featuredEvent, index) in events.eventos_destacados" :key="index">
                    <router-link :to="'event/'+index">
                        <img :src="require('@/assets/img/events/'+featuredEvent.image)" alt="Evento Destacado 4">
                    </router-link>
                    <div class="col-xs-12 eventDescription nopadding">
                        <p class="colorGreen">{{featuredEvent.date}}</p>
                        <p>{{featuredEvent.eventName}}</p>
                        <p class="colorGray">Desde ${{featuredEvent.price}} por persona</p>
                        <span class="colorGray"><img src="@/assets/img/events/iconPinMap.svg" alt="Evento Listo Location">{{featuredEvent.location}}</span>
                    </div>
                </div>
               
            </div>
            <img class="circleEvents" src="img/CirculoRojo.png" alt="">
            <img class="rotateImg circleEvent2" src="img/Circulos2.png" alt="">
            
        </div>


        <div class="col-xs-12 nextEvents">
            <h2 class="colorGray">Proximos Eventos</h2>

            <div class="animationEventsBox flexBox position-relative">
                <div class="col-xs-6 col-md-3 event" v-for="(nextEvents, index) in events.proximos_eventos" :key="index">
                    <router-link :to="'event/'+index">
                        <img :src="require('@/assets/img/events/'+nextEvents.image)" alt="Evento Destacado 4">
                    </router-link>
                    <div class="col-xs-12 eventDescription nopadding">
                        <p class="colorGreen">{{nextEvents.date}}</p>
                        <p>{{nextEvents.eventName}}</p>
                        <p class="colorGray">Desde ${{nextEvents.price}} por persona</p>
                        <span class="colorGray"><img src="@/assets/img/events/iconPinMap.svg" alt="Evento Listo Location">{{nextEvents.location}}</span>
                    </div>
                </div>           
            </div>
        </div>

        <div class="col-xs-12 nextEvents">
            <h2 class="colorGray">Conciertos</h2>

            <div class="animationEventsBox flexBox position-relative">
                <div class="animationEventsBox flexBox position-relative">
                    <div class="col-xs-6 col-md-3 event" v-for="(nextEvents, index) in events.proximos_eventos" :key="index">
                        <router-link :to="'event/'+index">
                            <img :src="require('@/assets/img/events/'+nextEvents.image)" alt="Evento Destacado 4">
                        </router-link>
                        <div class="col-xs-12 eventDescription nopadding">
                            <p class="colorGreen">{{nextEvents.date}}</p>
                            <p>{{nextEvents.eventName}}</p>
                            <p class="colorGray">Desde ${{nextEvents.price}} por persona</p>
                            <span class="colorGray"><img src="@/assets/img/events/iconPinMap.svg" alt="Evento Listo Location">{{nextEvents.location}}</span>
                        </div>
                    </div>           
                </div>
            </div>
        </div>

        <div class="col-xs-12 nextEvents">
            <h2 class="colorGray">Congreso Simposio</h2>

            <div class="animationEventsBox flexBox position-relative">
                <div class="animationEventsBox flexBox position-relative">
                    <div class="col-xs-6 col-md-3 event" v-for="(nextEvents, index) in events.proximos_eventos" :key="index">
                        <router-link :to="'event/'+index">
                            <img :src="require('@/assets/img/events/'+nextEvents.image)" alt="Evento Destacado 4">
                        </router-link>
                        <div class="col-xs-12 eventDescription nopadding">
                            <p class="colorGreen">{{nextEvents.date}}</p>
                            <p>{{nextEvents.eventName}}</p>
                            <p class="colorGray">Desde ${{nextEvents.price}} por persona</p>
                            <span class="colorGray"><img src="@/assets/img/events/iconPinMap.svg" alt="Evento Listo Location">{{nextEvents.location}}</span>
                        </div>
                    </div>           
                </div>       
            </div>
        </div>
    </div>
</template>

<script>
import events from '../events.json'
export default {
   name:'Events',
   data() {
       return {
           events: events
       }
   },
}
</script>

<style scoped>


/*Search Bar*/

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


.colorGreen{
    color : #21A8C1;
}

.colorWhite{
    color:white;
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


.event {
    flex-shrink: 0;
    transition: .5s;
    z-index: 1;
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


.event > div span img{
    width: 10px;
    vertical-align: initial;
    margin-right: .4em;

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
    top: 40px;
    right: -10vw;
    z-index: 0
}

.position-relative{
    position: relative;
    left: 0;
}
</style>
