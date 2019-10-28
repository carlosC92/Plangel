<template>
    <div :class="[loader ? '' :  'd-none',modal ? 'modal-size' : 'full-page']">
        <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
   
</template>

<script>
export default {
    name:'Loader',
    props:{
        loader : Boolean,
        modal :{
          type : Boolean,
          required :false
        }
    },

    watch: {
      loader(){
         document.body.style.overflow = this.loader ? 'hidden' : ''
      }
    },
}
</script>

<style>

.d-none{
    display: none !important;
}

.modal-size{
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.5;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
}

.full-page{
    width: 100vw;
    height: 100vh;
    background: white;
    opacity: 0.5;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 90px;
}

.lds-roller {
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 64px;
  height: 64px;
}
.lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 32px 32px;
}
.lds-roller div:after {
  content: " ";
  display: block;
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00c0d7;
  margin: -3px 0 0 -3px;
}
.lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.lds-roller div:nth-child(1):after {
  top: 50px;
  left: 50px;
}
.lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.lds-roller div:nth-child(2):after {
  top: 54px;
  left: 45px;
}
.lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.lds-roller div:nth-child(3):after {
  top: 57px;
  left: 39px;
}
.lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.lds-roller div:nth-child(4):after {
  top: 58px;
  left: 32px;
}
.lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.lds-roller div:nth-child(5):after {
  top: 57px;
  left: 25px;
}
.lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.lds-roller div:nth-child(6):after {
  top: 54px;
  left: 19px;
}
.lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.lds-roller div:nth-child(7):after {
  top: 50px;
  left: 14px;
}
.lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.lds-roller div:nth-child(8):after {
  top: 45px;
  left: 10px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>