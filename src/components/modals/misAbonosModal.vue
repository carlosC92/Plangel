<template>
<div class="container-fluid nopadding myPayments">
    <h4 class="text-center">Mis abonos</h4>
    <div class="col-xs-10 col-xs-offset-1 text-center">        
        <p>Saldo pendiente</p>
        <p>$13,500 MXN</p>
        <div class="col-xs-4">
            <p>Total reserva:</p>
            <p>$15,000 MXN</p>          
        </div>
        <div class="col-xs-4 pull-right">
            <p>Total pagado:</p>
            <p>$1,500</p>
        </div>
        <table>
            <tr>
                <th>Monto</th>
                <th>Tipo</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Estado</th>
            </tr>
            <tr>
                <td>$9,928</td>
                <td>Cargo</td>
                <td>7/08/2018</td>
                <td>12:33 Hrs</td>
                <td>Confirmado</td>
            </tr>
            <tr>
                <td>$9,928</td>
                <td>Cargo</td>
                <td>7/08/2018</td>
                <td>12:33 Hrs</td>
                <td>Confirmado</td>
            </tr>
            <tr>
                <td>$9,928</td>
                <td>Cargo</td>
                <td>7/08/2018</td>
                <td>12:33 Hrs</td>
                <td>Confirmado</td>
            </tr>
        </table>
    </div>
    <button data-dismiss="modal" data-toggle="modal" data-target="#generatePay" class="btnEnviar">Nuevo Abono</button>
</div>  
         
</template>


<script>
export default {
    name:'misAbonosModal'
}
</script>

<style scoped>
 .myPayments > div > p:not(:nth-child(2)){
    font-family: GothamMedium;
    color: #787886;  
  }

  .myPayments > div > p:nth-child(2){
    font-family: GothamBold;
    color: #21A8C1;  
    font-size: 20px;
  }

  .myPayments > div div p:first-child{
    font-family: GothamBold;
    color: #43425D;  
  }

  .myPayments table{
    width: 80%;
    margin: 30px auto;

  }

  .myPayments table tr th{
      background: #F5F6FA;
  }

  .myPayments table tr th, .myPayments table tr td{
      text-align: center;
      height: 50px;
      width: 20%;
  }

  .myPayments table tr td{
      border-bottom: 1px solid #d6d3d3;
    
  }
</style>
