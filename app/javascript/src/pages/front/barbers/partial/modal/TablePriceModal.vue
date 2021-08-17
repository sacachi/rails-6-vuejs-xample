<template>
  <div>
    <el-card style="margin-bottom: 20px">
      <p class="name-barber">
        <span class="mr-2"><i class="fas fa-user"></i>: {{editBarber.name}}</span>
        <span><i class="fas fa-mobile-alt"></i>: {{editBarber.phone}}</span>
      </p>
      <p><i class="fas fa-building"></i>: {{editBarber.building}}</p>
      <p>
        <span class="mr-2"><i class="fas fa-venus-mars"></i>: {{editBarber.gender}}</span>
        <span class="mr-2"><i class="fas fa-heart"></i>: {{ editBarber.age }} tuổi </span>
      </p>
    </el-card>
    <el-card >
      <el-row v-for="(serviceFront, index) in servicesFront" :key="index" style="margin-bottom: 10px">
        <el-col :span="14">{{serviceFront.service_name}}</el-col>
        <el-col :span="10">{{serviceFront.price}} VNĐ</el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "TablePriceModal",
  computed:{
    ...mapGetters(['servicesFront', 'editBarber'])
  }
}
</script>

<style scoped>

</style>