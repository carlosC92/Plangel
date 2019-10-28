<template>
  <div id="app" class="container-fluid">
    <router-view/>
  </div>
</template>


<script>

export default {
}
</script>

<style>
@font-face {
	font-family: SourceBold;
	src: url("./assets/fonts/SourceSansPro-Bold.otf") format("opentype");
}

@font-face {
	font-family: SourceRegular;
	src: url("./assets/fonts/SourceSansPro-Regular.otf") format("opentype");
}

@font-face {
	font-family: GothamBook;
	src: url("./assets/fonts/GothamBook.ttf") format("opentype");
}

@font-face{
    font-family: GothamBold;
    src: url("./assets/fonts/Gotham-Bold.otf") format("opentype");
}

@font-face {
	font-family: GothamBookItalic;
	src: url("./assets/fonts/Gotham-BookItalic.otf") format("opentype");
}

@font-face {
	font-family: GothamMedium;
	src: url("./assets/fonts/GothamMedium.ttf") format("opentype");
}

.color-red{
    color:red;
}

.d-flex{
    display: flex !important;
}

input:not([type=checkbox]),.form-group select{
    height: 55px;
    background-color: #e9eef3;
    border: none;
    font-size: 22px;
}

label{
    text-transform: uppercase;
    font-family: GothamBold;
    font-size: 15px;

}

html {
    width: 100%;
    height: 100%;
}

body{
    width: 100%;
    height: 100%;
}
#app{
    padding: 0px;
    background-color: #FCFCFC;
    min-height: 100%;
    height: 100%;
}

.m-t-15{
    margin-top: 15px;
}

.m-b-15{
    margin-bottom: 15px;
}
.nopadding{
  padding: 0px !important;
}

.w-100{
    width: 100%;
}

.h-100{
    height: 100%;
}

.justify-content-betwen{
    justify-content: space-between;
}

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

</style>
