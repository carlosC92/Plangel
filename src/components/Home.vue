<template>
  <div class="col-xs-12 whoWeAre nopadding">
      <div class="col-xs-12 divImgHeader">
              <img src="../assets/img/home/Bg_Header.png" class="img-responsive" alt="Background Evento Listo">   
              <div class="col-xs-12 col-md-8 col-md-offset-2 text-center colorWhite">
                      <h2>Tenemos más de 10 años de experiencia</h2>
                      <p>en la organizacion de eventos en destino</p>
              </div>              
      </div>
      <div class="col-xs-12 description">
          <img class="hidden-xs" src="../assets/img/home/Ipad.png" alt="Ipad Evento Listo">
          <div class="col-xs-12 col-md-5 colorGray">
              <h2>¡Ya disponible!</h2>
              <p>Ahora ponemos nuestro poderoso software de gestión de eventos en tus manos para que puedas organizar cualquier evento de forma simple y eficiente.</p>
              <a href="#" class="colorLila">Comienza ahora</a><i class="colorLila fa fa-arrow-right"></i>
          </div>
          <img class="circleDiv" src="../assets/img/home/Circulos2.png" alt="">
      </div>

      <div class="col-xs-12 ourAllies text-center">
          <img src="../assets/img/home/Circulos3.svg" alt="">
          <h2>Nuestros Aliados </h2>
          <div class="col-xs-12 col-md-10 col-md-offset-1 nopadding">
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel1.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel2.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel3.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel4.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel1.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel2.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel3.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel4.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel1.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel2.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel3.png" alt=""></div>
              <div class="col-xs-6 col-md-2"><img src="../assets/img/home/LogoHotel4.png" alt=""></div>
          </div>
          
      </div>

    <Comments/>

      <div class="col-xs-12 divImgBottom">
          <img src="../assets/img/home/Bg_Header.png" class="img-responsive" alt="Background Evento Listo"> 
          <div class="col-xs-12 col-md-10 col-md-offset-1">
              <div class="col-xs-12 col-md-6">
                  <h2 class="colorWhite">¡Organiza tu primer evento ahora!</h2>  
              </div>
              <div class="col-xs-12 col-md-6 text-center">
                  <a class="colorWhite buttonWhite" href="#">Comenzar</a>
              </div>
          </div>
        
      </div>
  </div>
</template>
<script>
import Comments from './Comments.vue'
export default {
  name: 'WhoWeAre',
  components:{
      Comments
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*How work*/

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


.divImgHeader > div{
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


.description {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    overflow: hidden;
}

.description >div h2{
    font-family: GothamMedium;
    line-height: 3em;
}

.description >div p{
    font-family: GothamBook;
    line-height: 1.5em;
    font-size: 18px;
    padding-right: 9em;
}

.description >div a{
    font-family: GothamBook;
    font-size: 18px;
    margin-right: .5em;
    line-height: 3em;
}

.circleDiv{
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: -2vw;
}

.ourAllies{
    background-color: #F4EFF7;
}

.ourAllies > img{
    margin: 0 auto;
    width: 100px;
}

.ourAllies h2{
    font-family: GothamMedium;
    line-height: 1.5em;
    color: #4C4650;
}

.ourAllies > div{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-bottom: 60px;
    margin-top: 60px;
}

.ourAllies > div > div img{
    width: 100%;
}

.divComments{
    background-color: #fcfcfc;
}





.divComments h2{
    font-family: GothamMedium;
    line-height: 1.5em;
    color: #4C4650;
}

.divComments p{
    font-family: GothamBook;
    line-height: 1.5em;
    font-size: 18px;
}

.comments{
    position: relative;
    display: flex;
    overflow: hidden;
    padding: 50px 0;
    flex-wrap: nowrap;
}

.comments > div{
    margin-left: 3.33%;
}



.comment {
    border: 1px solid #e9e6e6;
    border-radius: 3%;
    background: white;
    width: 30%;
    flex-shrink: 0;
    position: relative;
    padding: 0 1.5em;
    transition: 1s;
    left: 0;
}

.comment img{
    display: block;
    height: 100px;
    top: -50px;
    position: relative;
    margin: 0 auto;
    border: 4px solid #E81F76;
   border-radius: 50%;
}


.divImgBottom{
    padding: 0px;
    z-index: 1
}
.divImgBottom img{
    width: 100%;
    padding: 0px;
    height: 30vh;
    min-height: 200px;

}


.divImgBottom > div{
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}

.divImgBottom > div{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}



.divImgBottom > div h2{
    font-family: GothamMedium;
    font-size: 40px;
    line-height: 1.5em;
}

.divImgBottom > div a{
    font-family: GothamBook;
    font-size: 20px;
}

.divImgBottom > div a:hover{
    color: black;
    text-decoration: none;
    background-color: white;
    transition: 1.5s;
}

.buttonWhite{
    border: 2px solid white;
    border-radius: 50px;
    padding: .8em 8em;
    text-decoration: none;
}

.bottomSlider li{
    display: flex;
}

.bottomSlider li *+*{
    margin-left: auto;
}

.circle{
  border: 3px solid #82235F;
  border-radius: 50%;
  height: 13px;
  width: 13px; 
  padding: 5px;
}

.selected{
    background-color:#82235F;
    cursor: pointer;
}

.circle:hover{
    background-color:#82235F;
    cursor: pointer;
}

</style>
