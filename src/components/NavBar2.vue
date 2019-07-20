<template>
   <nav id="navbar" class="navbar">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span> 
                </button>
                <router-link to="/" class="brand">
                    <img id="brand-image" src="../assets/img/Logo_Blanco.png" alt="IdearamaStudio" class="navbar-brand">
                </router-link>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/">¿Quienes Somos?</router-link></li>
                    <li><router-link to="/howWork">¿Como Funciona?</router-link></li>
                    <li><router-link to="/events">Eventos</router-link></li>
                    <li><a href="#">Historial</a></li>
                    <li><router-link to="/contactUs">Contacto</router-link></li>
                    <li><router-link class="btnLogin" to="/login">Login</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
    name:"NavBar2"
}
</script>

<style scoped>

.navbar{
    z-index: 1;
    margin-bottom: 0px;
}
.navbar button,li{
    z-index: 1;
}
.navbar ul{
    padding: 1.3em 0;
}

.navbar ul li:nth-child(3) a{
    padding-right: 0px;
}


.navbar ul li a{
    font-family: GothamMedium;
    color: white;
    font-size: 18px;
}


.navbar-brand { 
    height: 90px;
    position: relative;
    left: 0;
    top: 0;
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
</style>
