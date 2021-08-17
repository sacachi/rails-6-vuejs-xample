<template>
  <div id="hamburger-bar">
    <div class="hamburger-span" @click="toggleClick">
      <span class="navbar-toggler-bar bar1 "></span>
      <span class="navbar-toggler-bar bar2 hamburger" :class="{'is-active':isActive}"></span>
      <span class="navbar-toggler-bar bar3"></span>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'Hamburger',
  data(){
    return{
      isActive: false
    }
  },
  computed:{
    ...mapGetters(['isCollapsed'])
  },
  methods: {
    ...mapMutations('app',['SET_IS_COLLAPSED']),
    toggleClick() {
      this.isActive = !this.isActive
      this.SET_IS_COLLAPSED(!this.isCollapsed)
    }
  }
}
</script>

<style lang="scss">
#hamburger-bar{
  .bar2{
    margin: 6px 0px;
  }
  .hamburger-span{
    margin-top: 23px;
  }
  .hamburger-span :hover{
    cursor: pointer;
    .bar2{
      width: 18px;
    }
  }
  .navbar-toggler-bar {
    display: block;
    position: relative;
    width: 24px;
    height: 1px;
    border-radius: 1px;
    background: #66615B;
  }
  .hamburger.is-active {
    width: 18px ;
  }
}
</style>
