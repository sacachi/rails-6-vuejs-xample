<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {JWT_USER_KEY, JWT_ADMIN_KEY} from "./utils/constant";

const default_layout = 'blank'
export default {
  data: function () {
    return {
      message: "App!",
      token_customer:'',
      token_store:''
    }
  },
 mounted(){
    // await this.getToken()
    // if(this.token_customer){
    //   this.fetchCurrentCustomer()
    // }
    // if (this.token_store){
    //   this.fetchCurrentStore()
    // }
  },
  computed:{
    layout(){
      return(this.$route.meta.layout || default_layout) + '-layout'
    }
  },
  methods:{
    // ...mapActions('app', ['fetchCurrentCustomer', 'fetchCurrentStore']),
    getToken() {
      this.token_customer = localStorage.getItem(JWT_USER_KEY)
      this.token_store = localStorage.getItem(JWT_ADMIN_KEY)
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
