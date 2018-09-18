<template>
    <div class="container">
       
        <a href="">testtesttesttesttest</a>
        <div class="mover"></div>
        <div class="board">

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

</style>
