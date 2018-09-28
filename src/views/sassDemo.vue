<template>
    <div class="container">
       
        <a href="">testtesttesttesttest</a>
        <div class="mover"></div>
        <div class="board">

        </div>
        <div class="btn button">
            馬上參加
            <span class="one"></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

            
        }

    },created(){
        // let root = document.documentElement;

        // root.addEventListener("mousemove", e => {
        // root.style.setProperty('--mouse-x', e.clientX + "px");
        // root.style.setProperty('--mouse-y', e.clientY + "px");
        // });

    }
}
</script>
<style lang="sass" scoped>
@import "../assets/global"
.container
     background-color: $base-colour
     color: $font-size-base
.mover
  width: 50px
  height: 50px
  background: red
  position: absolute
  left: var(--mouse-x)
  top: var(--mouse-y)

a 
  color: gray
  @include transition(color .3s ease)
  &:hover 
    color: black

// use of keyframes bgcolor
+keyframes(bgcolor)
  0%
    background-color: #ffccf2
  50%
    background-color: #ccffcc
  100%
    background-color: #ccffff

    
.board
  width: 100vW
  height: 100vH
  @include animation('bgcolor 5s 3')

.button
    cursor: pointer
    color: #ffffff
    overflow: hidden
    position: relative
    border-radius: 5px
    border: 5px solid #ffffff
    background: transparent
    transition: all 2s ease
    font-size: 1.2em
    transform: translate(0%, 40%)
    z-index: 5

 
+keyframes(btn-wave)
  0%
    transform: rotate(0deg) scale(1)
  50%
    transform: rotate(180deg) scale(0.975)
  100%
    transform: rotate(360deg) scale(1) 
 
.button .span
    position: absolute
    content: ''
    top: 1.5em
    left: 50%
    width: 20em
    height: 20em
    opacity: 0.2
    background: #fb0000
    margin-left: -10em
    border-radius: 35.5%
    transform-origin: 50% 50%
    z-index: -1
    animation: btn-wave 5s infinite linear
    transition: all 1s ease, top 0.5s ease

</style>
