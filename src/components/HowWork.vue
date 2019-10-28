<template>
    <div class="col-xs-12 howWork">
        <div class="col-xs-12 divImgHeader">
            <img src="../assets/img/how_work/Bg_Header.png" class="img-responsive" alt="Background Evento Listo">   
            <div class="col-xs-12 col-md-8 col-md-offset-2">
                <h1>¿Tienes un evento en destino que organizar?</h1>
                <p>Nosotros te ayudamos a que todo salga perfecto</p>
            </div>                
        </div>

        <div class="col-xs-12 col-lg-10 col-lg-offset-1 howWorkImages nopadding">
            <h2>¿Como Funciona?</h2>
            
            <div class="howWorkObjects">
                <div class="col-xs-6 col-sm-4">
                    <img src="../assets/img/how_work/Icono1.png" alt="Crea tu evento">
                    <h4>CREA TU EVENTO</h4>
                    <p>Cuéntanos los detalles importantes para hacer una página personalizada.</p>
                </div>
                <div class="col-xs-6 col-sm-4">
                    <img src="../assets/img/how_work/Icono2.png" alt="Realiza invitaciones">
                    <h4>REALIZA INVITACIONES</h4>
                    <p>Crea una invitación digital y envíala a todos tus invitados por correo y SMS.</p>
                </div>
                <div class="col-xs-6 col-sm-4">
                    <img src="../assets/img/how_work/Icono3.png" alt="Confimar asistencia">
                    <h4>CONFIRMA ASISTENCIA</h4>
                    <p>Usa nuestro Call Center para llamarle a todos los invitados, aclarar dudas y confirmar asistencias.</p>
                </div>
                <div class="col-xs-6 col-sm-4">
                    <img src="../assets/img/how_work/Icono4.png" alt="Realizar cobranzar">
                    <h4>REALIZA COBRANZA</h4>
                    <p>Los invitados podran separar con un abono e ir pagando poco a poco. Tú tendrás una consola con informacion en tiempo real.</p>
                </div>
                <div class="col-xs-6 col-sm-4">
                    <img src="../assets/img/how_work/Icono5.png" alt="Consolidacion">
                    <h4>CONSOLIDACIÓN</h4>
                    <p>Cada invitado tendrá su consola de administracion para realizar cambios.</p>
                </div>
                <div class="col-xs-6 col-sm-4">
                    <img src="../assets/img/how_work/Icono6.png" alt="Accesos">
                    <h4>ACCESOS</h4>
                    <p>Envía cupones de acceso. Los invitados podrán imprimir su pase y hacer check in.</p>
                </div>
            </div>
            <div class="col-xs-8 col-xs-offset-2">
                <router-link to="/contactUs" class="button">COMENZAR</router-link>
            </div>           
        </div>
            <img src="../assets/img/how_work/Circulos4.png" class="circle circleDiv hidden-xs" alt="Circulos Evento Listo">
            <img src="../assets/img/how_work/CirculoDesenfoque.png" class="circle circleRedTop" alt="Circulos Evento Listo">
            <img src="../assets/img/how_work/CirculoAzul.png" class="circle circleBlueTop" alt="Circulos Evento Listo">
    </div>
</template>

<script>
export default {
    name:'HowWork'
}
</script>

<style scoped>
.howWork{
    padding: 0px;
    overflow: hidden;
    z-index: 0;
}

.howWork > :first-child{
    padding: 0px;
    z-index: 1;
}

.howWork > :first-child img{
    width: 100%;
    padding: 0px;
    height: 30vh;
    min-height: 200px;
  
}

.howWork > :first-child div{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}



.howWork > :first-child h1{
    font-family: GothamMedium;
    text-align: center;
    color: white;
    font-size: 40px;
}

.howWork > :first-child p{
    font-family: GothamBookItalic;
    font-size: 20px;
    display: block;
    text-align: center;
    color: white;

}

.nopadding{
    padding: 0px;
}


.howWork > :nth-child(2) h2{
    font-family: GothamMedium;
    color: #707070;
    text-align: center;
    line-height: 3em;
}

.howWorkObjects img{
    display: block;
    margin : auto;
}



.howWorkObjects  > div{
    text-align: center;
    color: #707070;
    margin-top: 20px;
}


.howWorkImages > :nth-child(3){
    text-align: center;
}


.howWork > :nth-child(2) > :nth-child(7) h4{
    margin-top: 20px !important;
}


.howWork > :nth-child(2) > div h4{
    font-family: GothamMedium;
}

.howWork > :nth-child(2) > div p{
    font-family: GothamBook;
}

.howWork > :nth-child(2) > :nth-child(8) {
    margin-top: 50px;
    margin-bottom: 50px;
    height: auto !important;
}

.button{
    border-radius: 31px;
    background: linear-gradient(to right, #E81F76 , #21A8C1);
    font-family: GothamMedium;
    color: white;
    padding: 10px;
    display: inline-block;
    width: 200px;
    margin-bottom: 15px;
    margin-top: 15px;
    text-align: center
    
}

.circleDiv{
    overflow: hidden;
    position: absolute;
    bottom: 0;
    right: -20vh;

}

.circleRedTop{
    overflow: hidden;
    position: absolute;
    top: 30vh;
    z-index: 0;
    left: 2vw;
}

.circleBlueTop{
    overflow: hidden;
    position: absolute;
    top: 35vh;
    left:-1vw;
    height: 50px;
    filter: blur(2px)
}


.howWorkObjects{
    display: flex;
    flex-wrap: wrap; 
}


</style>

