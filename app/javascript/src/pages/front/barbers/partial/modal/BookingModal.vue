<template>
  <div id="modal-booking-barber">
    <el-form ref="form" :model="editBooking" :rules="bookingRules">
      <el-form-item prop="name">
        <el-input v-model="editBooking.customer.name" placeholder="Họ và tên"></el-input>
      </el-form-item>
      <el-form-item prop="phone">
        <el-input type="number" v-model="editBooking.customer.phone" placeholder="Số điện thoại"></el-input>
      </el-form-item>
      <el-form-item prop="address">
        <el-input v-model="editBooking.customer.address" placeholder="Địa chỉ"></el-input>
      </el-form-item>
      <el-form-item >
        <div>Dịch vụ:</div>
        <el-checkbox-group
            v-model="editBooking.service_ids"
            @change = "changeService"
        >
          <el-checkbox
              v-for="service in servicesFront"
              :key="service.id"
              :label="service.id"
              name="service_ids"
              :value="service.id"
          >
            {{ service.service_name }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-row>
          <div class="box-detail-booking">
            <div class="services" v-for="(service, index) in editBooking.detail.services" :key="index">
              <el-row>
                <el-col :span="12">
                  {{ service.service_name }}
                </el-col>
                <el-col :span="12" style="text-align: right">
                  {{service.price}} VNĐ
                </el-col>
              </el-row>
            </div>
            <div class="service-charge">
              <div v-for="(service_charge, index) in editBooking.detail.service_charges" :key="index">
                <el-row>
                  <el-col :span="12">
                    {{ service_charge.name }}
                  </el-col>
                  <el-col :span="12" style="text-align: right">
                    {{service_charge.price}} VNĐ
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="booking-total-money">
              <el-row>
                <el-col :span="11">
                  Tổng
                </el-col>
                <el-col :span="13">
                  {{total}} VNĐ
                </el-col>
              </el-row>
            </div>
          </div>
      </el-row>
      <el-form-item style="margin-top: 20px">
        <el-button type="info" @click="SET_VISIBLE_MODAL_BOOKING(false)">Huỷ</el-button>
        <el-button type="danger" @click="submitForm('form')">Đặt thợ ngay</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  data: function () {
    return {
    }
  },
  mounted() {
    this.fetchPrefectures()
    this.fetchBarbersFront()
    this.fetchFrontServiceCharges()
    this.SET_DETAIL_TOTAL(this.total)
  },
  computed: {
    ...mapGetters(['servicesFront', 'bookingRules', 'barbersFront', 'editBooking', 'bookingRules', 'prefectures', 'cities', 'communes', 'frontServiceCharges']),
    total: function () {
      let reducer = (accumulator, currentValue) => accumulator + currentValue;
      let sumServiceCharges = this.editBooking.detail.service_charges.map(e => e.price).reduce(reducer, 0)
      let sumServices = this.editBooking.detail.services.map(e => e.price).reduce(reducer, 0)
      return sumServiceCharges + sumServices
    }
  },
  watch: {
    'total': function () {
      this.SET_DETAIL_TOTAL(this.total)
    }
  },
  methods: {
    ...mapMutations('booking', ['SET_VISIBLE_MODAL_BOOKING', 'SET_DETAIL_TOTAL']),
    ...mapActions('barber', ['fetchBarbersFront']),
    ...mapActions('booking', ['createBooking', 'fetchPrefectureBarbers', 'fetchCityBarbers',]),
    ...mapActions('location', ['fetchPrefectures', 'fetchCities', 'fetchCommunes']),
    ...mapActions('serviceCharge', ['fetchFrontServiceCharges']),
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          this.createBooking(this.editBooking)
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.$refs['form'].resetFields();
    },
    handleChangePrefecture(value) {
      this.fetchCities(value)
      this.fetchPrefectureBarbers(value)
    },
    handleChangeCity(value) {
      this.fetchCommunes(value)
      this.fetchCityBarbers(value)
    },
    changeService(value){
      this.editBooking.detail.services = this.servicesFront.filter(e => value.includes(e.id))
    }
  }
}
</script>
<style lang="scss">
#modal-booking-barber{
  .el-form-item{
    margin-bottom: 20px;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
  .el-input-number .el-input__inner {
    text-align: left;
  }
}
.box-detail-booking{
  padding: 20px;
  border: 1px dashed #d4d4d4;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%)
}
.service-charge{
  padding-bottom:8px ;
  border-bottom: 2px solid #999999;
}
.booking-total-money {
  margin-top: 8px;
  font-weight: 500;
  font-size: 18px;
}

</style>
