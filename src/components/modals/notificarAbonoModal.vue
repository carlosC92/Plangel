<template>
    <div class="container-fluid nopadding notifyPayment">
        <h4 class="text-center">Notificar Abono</h4>
        <div class="col-xs-10 col-xs-offset-1">        
            <h5>Intrucciones para subir un voucher</h5>
            <p>Favor de depositar o transferir a la siguiente cuenta bancaria, el importe de su abono. Después, siga los pasos enlistados.</p>

            <h5>PARA TRANSFERENCIAS DESDE MÉXICO:</h5>
            <table>
                <tr>
                    <th>Razón Social</th>
                    <th>Banco</th>
                    <th>Sucursal</th>
                </tr>
                <tr>
                    <td>Love Planners S.A. de C.V.</td>
                    <td>Banamex</td>
                    <td>7011</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Número de Tarjeta</th>
                    <th>Cuenta</th>
                    <th>Clabe</th>
                </tr>
                <tr>
                    <td>4098 5130 0482 3033</td>
                    <td>3453328</td>
                    <td>002910701134533283</td>
                </tr>
            </table>

            <h5>PARA TRANSFERENCIAS DESDE EE.UU FOR TRANSFERS FROM U.S.:</h5>
            <table>
                <tr>
                    <th>Account Holder</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                </tr>
                <tr>
                    <td>Love Planners S.A. de C.V.</td>
                    <td>Calle 31 #211 x 8 Planta Alta</td>
                    <td>999 196 2147</td>
                </tr>
            </table>

            <table>
                <tr>
                    <th>ABA Citibank</th>
                    <th>SWIFT Citibank</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>021000098</td>
                    <td>CITIUS33</td>
                    <td>contacto@eventolisto.com</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th>Clabe Account</th>
                </tr>
                <tr>
                    <td>002910701134533283</td>
                </tr>
            </table>
            <ol>
                <li>Seleccione el Submenú "Mis Abonos".</li>
                <li>Del listado, seleccione el registro que corresponda al importe y contenga un botón azul. Esto abrirá una nueva ventana.</li>
                <li>Seleccione la imagen o utilice su teléfono para tomar y subir la imagen.</li>
                <li>Presione el botón "Enviar Voucher"</li>
            </ol>
            <p>Cualquier duda, comuníquese con nosotros y con gusto le atenderemos.</p>
        </div>
        <button type="button" class="btnEnviar">Aceptar</button>
    </div>       
</template>

<script>
export default {
    name:'notificarAbonoModal'
}
</script>

<style scoped>

  .notifyPayment h5{
    font-family: GothamBold;
    color: #707070;
    text-transform: uppercase;
    text-align: center;
    font-size: 18px;
    line-height: 60px;
  }


  .notifyPayment > div p{
    font-family: GothamMedium;
    color: #707070;
    text-align: center;
    }

    .notifyPayment > div p:last-child{
        font-family: GothamMedium;
        color: #222121;
        text-align: center;
        font-size: 15px;
    }

    .notifyPayment > div table{
        width: 100%;    
    }

    .notifyPayment > div table th,td{
        width: 33.33%;
        height: 30px;
    }

    .notifyPayment > div ol{
        padding-left: 15px;
        font-family: GothamMedium;
        color: #707070;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .notifyPayment > div ol li {
        margin-bottom: 10px;
    }
</style>
