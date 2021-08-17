<template>
  <div class="left-menu">
    <div style="text-align: center; padding: 15px 0">
      <img v-if="isCollapsed"
           style="width: 40px; height: 40px; padding: 3px 0px"
           src='../../../packs/images/img.png' />
      <img v-else
           style="width: 140px; height: 42px; padding: 3px 0px"
           src='../../../packs/images/logo-store-full.png' />
      <div style="padding: 0px 10px; margin-top: 6px">
        <hr>
      </div>
    </div>
    <el-menu v-for="(item, index) in adminLeftMenu" class="el-menu-vertical-demo" :collapse='isCollapsed' :key="index">
        <router-link :to="{name: item.componentName}" @click.native="breadCumb(item.name)" v-if="!item.sub">
          <el-menu-item >
            <i :class= item.class></i>
            <span v-if="!isCollapsed">{{item.name}}</span>
          </el-menu-item>
        </router-link>
      <el-submenu :index= item.index v-else>
        <div v-for="(element, index2) in item.sub_menu" :key="index2">
          <router-link :to="{name: element.componentName}" @click.native="breadCumb(element.name)">
            <template slot="title">
              <i :class= item.class></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <el-menu-item>{{element.name}}</el-menu-item>
          </router-link>
        </div>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

import {mapGetters, mapMutations} from "vuex";
export default {
  name: "AdminLeftMenu",
  computed:{
    ...mapGetters([ 'isCollapsed', 'adminLeftMenu' ])
  },
  data(){
    return{

    }
  },
  methods:{
    // ...mapMutations('app', ['SET_BREAD_CUMB']),
    breadCumb(value){
      // this.SET_BREAD_CUMB(value)
    }
  }
}
</script>

<style>
ul.el-menu {
  border-right: none !important;
}
.left-menu{
  background-color: white;
  color: #00122E;
  font-weight: 450;
}

.icon-left-menu-1{
  font-size: 24px;
  margin-right: 15px;
}
.icon-left-menu-2{
  font-size: 24px;
  margin-right: 20px;
}
.icon-left-menu-3{
  font-size: 24px;
  margin-right: 15px;
  margin-left: -5px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}
a{
  text-decoration: none;
  color: #303133;
}
a:hover {
  color: #303133;
}
a:visited {
  color: #303133;
}
.el-menu-item.is-active{
  color: #303133;
}
</style>
