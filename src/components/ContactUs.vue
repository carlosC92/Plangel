<template>
    <div class="contact">
        <div class="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
            <div class="col-xs-12 col-lg-5 descriptionContact text-right">
                <h2>Contáctanos</h2>
                <p class="colorGray" >Comunícate con nosotros, con gusto te resolveremos todas tus dudas</p>
            </div>
            <div class="col-xs-12 col-lg-6 col-lg-push-1 boxContact">
                <form action="/action_page.php">
                    <div class="form-group col-xs-12">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" id="name">
                    </div>
                    <div class="form-group col-xs-12 col-md-6">
                    <label for="topic">Asunto</label>
                    <input type="text" class="form-control" id="topic">
                    </div>
                    <div class="form-group col-xs-12 col-md-6">
                        <label for="cel">Celular</label>
                        <input type="tel" class="form-control" id="cel">
                    </div>
                    <div class="form-group col-xs-12">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="col-xs-12">
                        <button type="submit" class="btnEnviar">ENVIAR</button>
                    </div>              
                </form>
                <img class="circuloAzulForm hidden-xs" src="../assets/img/CirculoAzul_2x.png" alt="Circulo Azul Evento Listo">
            </div>

            
        </div>
        <img class="circuloleft hidden-xs" src="../assets/img/Circulos5.png" alt="Circulo5 Evento Listo">
    </div>
</template>

<script>
export default {
    name:'ContactUs'
}
</script>



<style scoped>



.colorGray{
    color: #707070;
}

.boxContact{
    border: 1px solid #FFFFFF;
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow :-1px 5px 10px 2px #d4d1d1;
    padding: 3em 2em;
}

.btnEnviar{
    background: linear-gradient(to right, #21A8C1 , #E81F76);
    border-radius: 50px;
    padding: .7em 5em;
    width: 200px;
    border: none;
    color: white;
    font-family: GothamMedium;
    margin:0 auto;
    display:block;
}

.contact{
    height: calc(100% - 170px);
    position: relative;
}

.contact > div{
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}


.descriptionContact h2{
    font-family: GothamMedium;
    font-size: 40px;
}

.descriptionContact p {
    font-family: GothamBookItalic;
    font-size: 25px;
}

.boxContact label{
    font-family: GothamBold;
}

.boxContact input:not([type=checkbox]){
    height: 50px;
    background-color: #F4EFF7;
    border: none;
}

input[type=checkbox]:not(:checked) + label{
    border-radius: 50%;
}


.circuloleft{
    position: absolute;
    left: -250px;
    width: 550px;
    z-index: 0;
    bottom: 0
}

.circuloAzulForm{
    position: absolute;
    right: -45px;
    height: 75px;
    top: 10px;
    z-index: -1;
}

.pretty{
    margin-left: 15px;
}

</style>
