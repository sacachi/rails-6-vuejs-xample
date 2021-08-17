<template>
<div class="container">
  <el-form :model="editBarber">
    <el-row>
      <el-col :span="11">
        <el-form-item label="Tỉnh/Thành phố" prop="prefecture">
          <el-select v-model="editBarber.prefecture_id" filterable placeholder="Chọn tỉnh" @change="handleChangePrefecture" style="width: 100%">
            <el-option
                v-for="item in prefectures"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="11" style="float: right">
        <el-form-item label="Quận/Huyện" prop="city">
          <el-select v-model="editBarber.city_id" filterable placeholder="Chọn quận/huyện"@change="handleChangeCity" style="width: 100%">
            <el-option
                v-for="item in cities"
                :key="item.id"
                :label="item.name"
                :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "FilterBarbers",
  mounted() {
    this.fetchPrefectures()
    this.SET_EDIT_BARBER(Object.assign({}, this.newBarber))
  },
  computed:{
    ...mapGetters(['editBarber', 'prefectures', 'cities', 'newBarber'])
  },
  methods:{
    ...mapActions('booking', ['createBooking', 'fetchPrefectureBarbers', 'fetchCityBarbers',]),
    ...mapActions('location', ['fetchPrefectures', 'fetchCities', 'fetchCommunes']),
    ...mapMutations('barber', ['SET_EDIT_BARBER']),
    handleChangePrefecture(value){
      this.fetchCities(value)
      this.fetchPrefectureBarbers(value)
    },
    handleChangeCity(value){
      this.fetchCommunes(value)
      this.fetchCityBarbers(value)
    }
  }
}
</script>

<style scoped>

</style>