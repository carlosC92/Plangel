<template>
    <nav id="navbar" class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span> 
                </button>
                <router-link to="/" class="brand">
                    <img id="brand-image" src="../assets/img/logo.png" alt="IdearamaStudio" class="navbar-brand">
                </router-link>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><router-link to="/">¿Quienes Somos?</router-link></li>
                    <li><router-link to="/howWork">¿Como Funciona?</router-link></li>
                    <li><router-link to="/events">Eventos</router-link></li>
                    <li><a href="#">Historial</a></li>
                    <li><router-link to="/contactUs">Contacto</router-link></li>
                    <li><a class="btnLogin" href="#">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar{
    border: none;
    border-radius: 0px;
    z-index: 1;
    margin-bottom: 0px;
    background-color: #FFFFFF;
}
.navbar button,li{
    z-index: 1;
}
.navbar ul{
    padding: 1.3em 0;
}


.navbar ul li a{
    font-family: GothamMedium;
    color: #4C4650;
    font-size: 18px;
}

.navbar-brand { 
    height: 90px;
    position: relative;
    left: 0;
    top:0;
}

.btnLogin{
    background: #FFFFFF;
    border-radius: 50px;
    padding-left: 2em !important;
    padding-right: 2em !important;
    color: #4C4650 !important;
    font-family: GothamBold;
    border: 2px solid #4C4650;
}

</style>
