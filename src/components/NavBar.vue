<template>
<navbar>
    <router-link to="/" slot="brand">
        <img id="brand-image" src="../assets/img/logo.png" alt="IdearamaStudio" class="img-responsive navbar-brand">
    </router-link>
  <template slot="collapse">
    <navbar-nav right>
       <!-- <dropdown tag="li">
            <a class="dropdown-toggle" role="button">Idiomas<span class="caret"></span></a>
            <template slot="dropdown">
            <li><a @click="changeLocale('en')" role="button">{{ $t('Ingles') }}</a></li>
            <li><a @click="changeLocale('es')" role="button">{{ $t('Español') }}</a></li>
            </template>
        </dropdown> -->
        <ul data-toggle="dropdown" class="dropdown-menu">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">JavaScript</a></li>
        </ul>
        <li><router-link to="/">¿Quienes Somos?</router-link></li>
        <li><router-link to="/howWork">¿Como Funciona?</router-link></li>
        <li><router-link to="/events">Eventos</router-link></li>
        <!-- <li><a href="#">Historial</a></li> -->
        <li><router-link to="/contactUs">Contacto</router-link></li>
        <li><router-link class="btnLogin" to="/login">Login</router-link></li>
    </navbar-nav>
  </template>
</navbar>
</template>

<script>
import i18n from '@/lang/i18n';
export default {
    name: 'NavBar',
    methods: {
        changeLocale(locale) {
            i18n.locale = locale;
        }
    }
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
