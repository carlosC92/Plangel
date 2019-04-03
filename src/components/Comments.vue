<template>
          <div class="col-xs-12 divComments">
          <h2 class="text-center">Usuarios en todo México organizan con Evento Listo</h2>
          <p class="colorGray text-center">La herramienta #1 en organización de eventos en destino</p>

          <div class="col-xs-12 col-md-8 col-md-offset-2 comments text-center nopadding" >
              <div :style="{left : -(buttonClicked*100) +'%'}" class="comment" v-for="(comment,index) in comments" :key="index">
                  <img :src="comment.image" alt="">
                   <p>{{comment.comment}}</p>
                  <p>{{comment.personName}}</p>
              </div>

          </div>   
          <div class="hidden-xs col-xs-2 col-xs-offset-5 bottomSlider">
              <li>
                  <ul :class="{selected : buttonClicked == index }"  v-for="(comment,index) in (comments.length/COMMENTSPERPAGE)" @click="click" class="circle" :key="index"></ul>
              </li>
          </div>    
      </div>
</template>
<script>
export default {
    name:"Comments",
    data() {
        return {
            comments:[
                {image: require('@/assets/img/home/ImgUser1.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser2.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser3.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser1.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser2.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser3.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser2.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser2.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser2.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser2.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser2.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},
                {image: require('@/assets/img/home/ImgUser2.png'),
                comment: 'Vestibulum pulvinar vulputate tincidunt. Suspendisse eu nibh est. Ut eros ante, pretium vitae',
                personName: 'Sara Duarte'},

            ],
            
            COMMENTSPERPAGE:3,
            buttonClicked : 0
        }  
    },
    methods: {
        click(event){
          this.buttonClicked =  [...event.target.parentNode.children].findIndex(c => c == event.target)
        }  
    },
}
</script>

<style scoped>

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

