<template>
    <div class="col-xs-12 col-md-8 col-md-offset-2 boxLogin">
        <div class="col-xs-12 containLogin noPadding">
            <div class="col-xs-6 noPadding imageBox hidden-xs">
                <img src="../assets/img/image2login.png" alt="">
            </div>
            <div class="col-xs-12 col-md-6 noPadding formBox">
                <h2 class="colorGray text-center">Registrate</h2>
                <form action="/action_page.php">
                    <div class="form-group col-xs-12">
                        <label for="email">CORREO ELECTRÓNICO</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="form-group col-xs-12">
                        <label for="pwd">CONTRASEÑA</label>
                        <input type="pwdword" class="form-control" id="pass">
                    </div>
                    <div class="form-group col-xs-12">
                        <label for="pwd">CONTRASEÑA</label>
                        <input type="pwdword" class="form-control" id="pass">
                    </div>
                    <div class="col-xs-12">
                        <div class="pretty p-image p-plain">
                            <input type="checkbox" />
                            <div class="state">
                                <img class="image" src="../assets/img/Checkin.png">
                                <label>Acepto los Términos y Condiciones</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 text-center">
                        <button type="submit" class="btnEnviar">REGISTRARSE</button>
                        <p>¿Ya tienes cuenta?</p>
                        <router-link to="/login">Inicia sesión aquí</router-link>
                    </div>   
                </form>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Register"
}
</script>


<style scoped>
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

.boxLogin{
    height: calc(100% - 120px);
    position: relative;
}


.imageBox img{
    display: block;
    width: 100%;
    border-radius: 20px 0px 0px 20px;
    height: 100%;
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
    display: flex;
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
    background-color: #e9eef3;
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