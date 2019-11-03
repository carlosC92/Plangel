<template>
     <nav id="navbar" class="navbar navbar-default">
        <div class="col-xs-12">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span> 
                </button>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right flexbox">
                    <li><router-link to="/admin/invitados">Invitados</router-link></li>
                    <li><router-link to="/admin/asistentes">Asistentes</router-link></li>
                    <li><router-link to="/admin/cuentaMaestra">Cuenta maestra</router-link></li>
                    <!-- <li><router-link to="/admin/callCenter">Call Center</router-link></li>
                    <li><a href="#">Sms</a></li>
                    <li><a href="#">Notificaciones</a></li>
                    <li><a href="#">Correo</a></li>
                    <li><a href="#">Soporte</a></li>-->
                    <li> 
                        <a href="#">{{user_logged.eventName}}</a>                   
                        <img :src="user_logged.imgCoverCircle" alt="">
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            user_logged : null
        }
    },
    created() {
        this.user_logged = JSON.parse(localStorage.getItem('logged'));
    },
}
</script>

<style scoped>

.navbar{
    border: none;
    border-radius: 0px;
    z-index: 1;
    margin-bottom: 0px;
    background-color: #FFFFFF;
    box-shadow: 0 -2px 8px 0 #00000033;
}

.flexbox{
    display: flex;
    align-items: center;
    justify-content: center;
}
.navbar button,li{
    z-index: 1;
}
.navbar ul{
    padding: 1em 0;
}

.navbar ul > *+*{
    margin-left: 30px;
}

.navbar ul li:nth-child(3) a{
    padding-right: 0px;
}

.navbar ul li:last-of-type{
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar ul li:last-of-type img{
    height: 40px;
}

.navbar ul li:last-of-type a {
    font-family: SourceRegular;
    font-size: 15px;
    color: #43425D;
    position: relative;
    text-transform: none;
}

.navbar ul li:last-of-type::before{
    content: '';
    position: absolute;
    border-left: 1px solid #43425D;
    width: 20px;
    height: 50%;
    left: -10px;
}

.navbar ul li:last-of-type a i{
    margin-left: 10px;
    color: #43425D;
}

.navbar ul li a{
    font-family: SourceBold;
    color: #43425D !important;
    text-transform: uppercase;
    font-size: 15px;
}
</style>

