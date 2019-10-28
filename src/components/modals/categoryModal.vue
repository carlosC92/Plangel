<template>
    <div class="container-fluid categoryModal">
        <h3 class="text-center">Categoría ABC</h3>
        <div class="col-xs-12 nopadding d-flex m-b-15">
            <div class="col-xs-6">
                <img class="w-100" src="../../assets/img/ImgHotel.png" alt="">
                <div class="col-xs-12 nopadding d-flex justify-content-betwen m-t-15">
                    <img src="../../assets/img/category_gallery_1.png" alt="">
                    <img src="../../assets/img/category_gallery_2.png" alt="">
                    <img src="../../assets/img/category_gallery_3.png" alt="">
                    <img src="../../assets/img/category_gallery_4.png" alt="">
                </div>
            </div>
            <div class="col-xs-6 category-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pretium mauris lectus consectetur adipiscing elit. Praesent nisl nunc, euismod eu aliquet porta, tristique ac mauris. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                <ul>
                    <li>Vestibulum purus magna</li>
                    <li>Vestibulum purus magna</li>
                    <li>Vestibulum purus magna</li>
                    <li>Vestibulum purus magna</li>
                    <li>Vestibulum purus magna</li>
                    <li>Vestibulum purus magna</li>
                </ul>
                <div class="col-xs-12 text-center category-price">
                    <p>Todo incluido</p>
                    <p>$2,900 MXN</p>
                    <small>Aproximado por persona por noche</small>
                </div>
            </div>
        </div>
       <button type="button" class="btnEnviar">Reservar</button> 

        <div class="col-xs-12 nopadding m-t-15">
            <div class="col-xs-12 col-sm-6 col-md-3 hotelHab" @click="categoryModal=true">
                <img src="@/assets/img/event/ImgDetallesHotel.png" alt="">
                <div class="col-xs-12 hotelDescription">
                    <p>TODO INCLUIDO</p>
                    <p>$3,900 MXN</p>
                    <p>Precio por persona por noche</p>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 hotelHab">
                <img src="@/assets/img/event/ImgDetallesHotel.png" alt="">
                <div class="col-xs-12 hotelDescription">
                    <p>CATEGORÍA 1</p>
                    <p>$2,900 MXN</p>
                    <p>Precio por persona por noche</p>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 hotelHab">
                <img src="@/assets/img/event/ImgDetallesHotel.png" alt="">
                <div class="col-xs-12 hotelDescription">
                    <p>CATEGORÍA 2</p>
                    <p>$2,500 MXN</p>
                    <p>Precio por persona por noche</p>
                </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-3 hotelHab">
                <img src="@/assets/img/event/ImgDetallesHotel.png" alt="">
                <div class="col-xs-12 hotelDescription">
                    <p>CATEGORÍA 3</p>
                    <p>$1,800 MXN</p>
                    <p>Precio por persona por noche</p>
                </div>
            </div>

        </div>
    </div>             
</template>


<script>
export default {
    name:"categoryModal",
}
</script>

<style scoped>

.category-info p:first-of-type{
    font-family: SourceRegular;
    color: #4D4F5C;
    font-size: 15px;
}


ul{
    columns: 2;
    padding-left: 10px;
    font-family: SourceRegular;
    color: #4D4F5C;
    font-size: 14px;
    line-height: 30px;
}

.categoryModal h3{
    font-family: GothamBold;
    color: #a8a7a7;
}


.category-price p:first-of-type{
    color:#E81F76;
    font-size: 25px;
    font-family: SourceBold;
    margin-bottom: 0px;
}

.category-price p:nth-of-type(2){
    color:#4D4F5C;
    font-size: 25px;
    font-family: SourceBold;
    margin-bottom: 0px;
}



.hotelHab img{
    width: 100%;
}

  .hotelHab .hotelDescription{
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    border-radius: 0px 0px 10px 10px;
    box-shadow :-1px 5px 10px 2px #d4d1d1;
    padding: 10px;
    text-align: center;
}

  .hotelHab .hotelDescription p:first-of-type{
    font-family: GothamBold;
    color: #1b95cb;
}

 .hotelHab .hotelDescription p:nth-of-type(2){
    font-family: GothamMedium;
    color: #4C4650;
}

 .hotelHab .hotelDescription p:nth-of-type(3){
    font-family: GothamBook;
    color: #9E968D;
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


}


/*==========================================
=            ESCRITO EXTRAPEQUEÑO (320px)            =
==========================================*/

@media (max-width: 767px) {

}

</style>

