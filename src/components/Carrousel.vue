<template>
     <slick :options="slickOptions">
        <div class="col-xs-12 col-md-6 event animationEventsBox" v-for="(featuredEvent, index) in events" :key="index">
            <router-link :to="'event/'+index">
                <img :src="featuredEvent.img1 ? 'https://www.youandmeplanners.com/'+featuredEvent.img1 : require('@/assets/img/events/ImgDestacado1.png')" alt="Evento Destacado 4">
            </router-link>
            <div class="col-xs-12 eventDescription">
                <p class="colorGreen">{{featuredEvent.date}}</p>
                <p>{{featuredEvent.eventName}}</p>
                <p class="colorGray">Desde ${{featuredEvent.price}} por persona</p>
                <span class="colorGray"><img src="@/assets/img/events/iconPinMap.svg" alt="Evento Listo Location">{{featuredEvent.location}}</span>
            </div>
        </div>       
    </slick>
</template>

<script>
import Slick from 'vue-slick';
export default {
    name:'Carrousel',
    components: { Slick },
    props: { events : Array},
    data() {
       return {
            slickOptions: {
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 1500,
                responsive: [
                     {
                        breakpoint: 1800,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 1023,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 764,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]  
            },
        }
    },
}
</script>

<style scoped>

div:focus{
    outline: none;
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

.event:hover{
    width: calc(100% + 10px) !important;
}

.animationEventsBox{
    transition: .5s;
}


.event > a > img{
    width: 100%;
    height: 345px;
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

.eventDescription span img{
    display: inline;
}

.featuredEvents{
    max-height: 530px;
}

.upcomingEvents{
    max-height: 400px;
}
</style>
