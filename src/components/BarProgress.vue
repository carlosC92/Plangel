<template>
    <div class="col-xs-12 col-md-6 col-md-offset-3 optionCreateEvent ">
        <ul class="nopadding">
            <li v-for="(step,index) in steps" :key="index" :class="[index == actual_step ? 'selectedOptionCreateEvent colorGreen' : 'colorGray']">{{step.name}}</li>
        </ul>
    </div>
</template>


<script>
export default {
    name: 'BarProgress',
    props :{
        steps : Array,
        actual_step: Number
    },
}
</script>

<style scoped>

.colorGray{
    color: #9E968D;
}

.colorGreen{
    color: #087590;
}

.optionCreateEvent{
    position: relative;
    margin-top: 50px;
    margin-bottom: 50px;
}

.imgCenter{
    display: block;
    margin: 0px auto;
}

.optionCreateEvent:after{
    content: '';
    position: absolute;
    width: calc(100% - 30px);
    height: 2px;
    bottom: 0px;
    left: 15px;
    background: #e7e4e0;
}

.optionCreateEvent ul{
    list-style: none;
    display: flex;
    justify-content: space-between
}

.optionCreateEvent ul li{
    position: relative;
    text-transform: uppercase;
    font-family: GothamBold;
    font-size: 18px;
}

.optionCreateEvent .selectedOptionCreateEvent:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -8px;
    left: 0;
    background: #21A8C1;
}

.containerCheckbox {
    margin-top: 40px;
    font-family: GothamBook;
    position: relative;
}


.containerCheckbox .container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    padding-top:3px;
    font-size: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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

}

@media (max-width: 766px) and (min-width: 600px){
}


/*==========================================
=            ESCRITO EXTRAPEQUEÑO (320px)            =
==========================================*/

@media (max-width: 767px) {

    .optionCreateEvent ul li{
        font-size: 12px;
    }
}
</style>
