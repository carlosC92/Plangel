<template>
    <div class="asistentes">
        <NavBar/>
        <ListaAsistentes/>

    </div>
    
</template>


<script>
import NavBar from '@/components/admin/NavBar.vue';
import ListaAsistentes from '@/components/admin/ListaAsistentes.vue';
export default {
    name:'Invitados',
    components:{
        NavBar,
        ListaAsistentes,
    }
}
</script>

<style>

.asistentes{
    padding: 0px;
    background-color: #F0F0F7;
    min-height: 100%;
    overflow: hidden;
}

.upload-btn-wrapper{
    position: relative;
    overflow: hidden;
}

.no-padding-left{
    padding-left: -0px;
}

input[type=file]{
    position: absolute;
    top: -29px;
    bottom: 0;
    right: 10px;
    width: 90%;
    height: 100px;
    opacity: 0;
    cursor: pointer;
}

.uploadBtn{
    background-color:#E8E9EC;
    font-family: GothamBook;
    color: #21A8C1;
    border: 1px solid #A4AFB7;
    border-radius: 7px;
    padding: 10px 20px;
    font-size: 13px;
    width: 100%;
    text-align: center;
}

.uploadBtn img{
    height: 20px;
    margin-right: 10px;
}

/* Selector Input */

select{
  /* styling */
  background-color: white;
  border: 0px;
  border-radius: 4px;
  display: inline-block;
  font: inherit;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  color: #27272b;
  font-family: GothamBook;
  height: 42px;
  width: 100%;
  font-size: 13px;

  /* reset */

  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;  
}

.mySelector{
    background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position:
    calc(100% - 20px) calc(1em + 6px),
    calc(100% - 15px) calc(1em + 6px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
}


/* Button Green */

.btn{
    width: 100%;
    height: 42px;
}

.btnGreen{
    background: #21A8C1;
    color: white;
}
/*New Guest */

.newGuestsContainer{
    border: 1px solid #CACED5;
    border-radius: 10px;
    padding: 10px 20px;
}

.newGuestsContainer div {
    margin-top: 15px;
    margin-bottom: 15px;
}

 h5{
    font-family: GothamBook;
    color: #4D4F5C;
    line-height: 30px;
}

hr{
    border-top: 1px solid #CACED5;
    width: 90%;
}

/* Reenvio Masivo */

.massiveForwardingContainer{
    border: 1px solid #CACED5;
    border-radius: 10px;
    padding: 10px 20px;
}

.massiveForwardingContainer > div{
    margin-top: 6%;
    margin-bottom: 5%;
}
</style>
