<template>
  <div>
    <el-container style="min-height:100vh; border: 1px solid #eee; width: 100%">
      <user-left-menu />
      <el-container>
        <el-header style="font-size: 16px">
          <el-row>
            <el-col :span="12" style="display: flex">
              <hamburger style="margin-right: 10px"/>
              <Breadcrumb/>
            </el-col>
            <el-col :span="12">
              <div style="display: inline-block; float: right" @click="logout_user">
                <i class="fas fa-bell" ></i>
                <i class="fas fa-sign-out-alt log-out" ></i>
                <span @click="logout_user">Logout</span>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import UserLeftMenu from "./partial/user_left_menu"
import Hamburger from "../components/Hamburger"
import Breadcrumb from '../components/Breadcrumb'
import {JWT_USER_KEY, BREADCUMB_USER} from '../utils/constant'
import {mapGetters, mapMutations} from "vuex"
export default {
  components:{
    Hamburger,
    UserLeftMenu,
    Breadcrumb
  },
  computed:{
    ...mapGetters(['isCollapsed'])
  },
  mounted(){
    this.getLeftMenu()
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  methods:{
    ...mapMutations('app', ['SET_BREAD_CUMB']),
    getLeftMenu(){
      let str = this.$route.name
      this.SET_BREAD_CUMB(BREADCUMB_USER[str])
    },
    logout_user(){
      localStorage.removeItem(JWT_USER_KEY)
      setTimeout(() => {
        window.location.href = '/users/login'
        this.$message.success('Đăng xuất thành công')
      })
    }
  }
};
</script>

<style>
.el-header {
  background-color: #f4f3ef;
  color: #333;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
}
.el-main{
  background-color: #f4f3ef ;
}
.el-icon-arrow-down:before {content: "\E790" !important; }
.el-submenu__icon-arrow { font-size: 14px !important;; }
.el-submenu__title i { color: #00122E !important; }
.log-out:hover{
  cursor: pointer;
}
</style>
