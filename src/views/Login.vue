<template>
    <div class="login">
        <NavBar2/>
        <Login/>
    </div>
    
</template>

<script>

import NavBar2 from '@/components/NavBar2.vue'
import Login from '@/components/Login.vue'
export default {
    name: "login",
    components:{
        NavBar2,
        Login
    }
}
</script>

<style scoped>
    .login{
    padding: 0px;
    background-color: #FCFCFC;
    min-height: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    background: url(../assets/img/Bg_gradient.png);
    background-repeat: no-repeat;
    background-size: 100%;
}
.colorGray{
    color: #707070;
}

.noPadding{
    padding: 0px;
}

.nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color: transparent
}


.btnLogin{
    background: #087590;
    border-radius: 50px;
    padding-left: 2em !important;
    padding-right: 2em !important;
    color: white !important;
    font-family: GothamBold;
    border: 1px solud black;
}

.btnLogin:hover{
    background: white !important;
    color: #21A8C1 !important;
}

.imageBox img{
    display: block;
    width: 100%;
    height: auto;
    border-radius: 20px 0px 0px 20px;
    max-height: 523px;
}

hr{
    margin-top: 0px;
}

.circleLogin{
    position: absolute;
    left: -2%;
    top: 10%;
    transform: rotate(180deg)
}

.containLogin{
    background: #FFFFFF;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.formBox{
    padding: 2em 4em;
}

.formBox h2{
    font-family: GothamBookItalic;
    letter-spacing: 2px;
}

.formBox  p{
    font-family: GothamMedium;
    color: #4C4650;
    line-height: 50px;
}

.formBox label{
    font-family: GothamBold;
    font-size: 12px;
    font-weight: bold;
}

.formBox input:not([type=checkbox]){
    height: 50px;
    background-color: #F4EFF7;
    border: none;
}

.btnEnviar{
    background: linear-gradient(to right, #21A8C1 , #E81F76);
    border-radius: 50px;
    padding: 1em 3em;
    width: 15em;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
    margin-top: 20px;
}
</style>








