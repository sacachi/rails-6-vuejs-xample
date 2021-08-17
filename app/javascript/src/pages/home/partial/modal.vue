<template>
  <div id="modal-coupon">
    <el-form ref="form" :model="editBooking"  label-width="140px">
      <el-form-item label="Tên" prop="name">
        <el-input v-model="editBooking.customer.name" placeholder="Vui lòng nhập tên của bạn"></el-input>
      </el-form-item>
      <el-form-item label="Số điện thoại" prop="phone">
        <el-input type="number" v-model="editBooking.customer.phone" placeholder="098-6688-888"></el-input>
      </el-form-item>
      <el-form-item label="Dịch vụ:">
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
            {{ service.full_name }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

<!--      <el-form-item label="Giới tính" prop="gender">-->
<!--        <el-radio-group v-model="editBooking.customer.gender">-->
<!--          <el-radio label="male">Nam</el-radio>-->
<!--          <el-radio label="female">Nữ</el-radio>-->
<!--          <el-radio label="other">Khác</el-radio>-->
<!--        </el-radio-group>-->
<!--      </el-form-item>-->
      <el-row>
        <el-col :span="11">
          <el-form-item label="Tỉnh/Thành phố" prop="prefecture">
            <el-select v-model="editBooking.customer.prefecture_id" filterable placeholder="Chọn tỉnh" @change="handleChangePrefecture" style="width: 100%">
              <el-option
                  v-for="item in prefectures"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Quận/Huyện" prop="city">
            <el-select v-model="editBooking.customer.city_id" filterable placeholder="Chọn quận/huyện"@change="handleChangeCity" style="width: 100%">
              <el-option
                  v-for="item in cities"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Phường/xã" filterable prop="commune">
            <el-select v-model="editBooking.customer.commune_id" placeholder="Chọn phường/xã" style="width: 100%">
              <el-option
                  v-for="item in communes"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Địa chỉ" prop="address">
            <el-input v-model="editBooking.customer.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="13">
          <el-form-item label="Chuyên viên" prop="barber">
            <el-select filterable v-model="editBooking.barber_id" placeholder="Chọn chuyên viên" style="width: 100%">
              <el-option
                  v-for="item in barbersFront"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>

          <div class="box-detail-booking" style="margin-left: 45px">
              <div class="services" v-for="(service, index) in editBooking.detail.services" :key="index">
                <el-row>
                  <el-col :span="11">
                    {{ service.name }}
                  </el-col>
                  <el-col :span="13">
                    {{service.price}} VNĐ
                  </el-col>
                </el-row>
              </div>
            <div class="service-charge">
              <div v-for="(service_charge, index) in editBooking.detail.service_charges" :key="index">
                <el-row>
                  <el-col :span="11">
                    {{ service_charge.name }}
                  </el-col>
                  <el-col :span="13">
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
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="info" @click="SET_VISIBLE_MODAL_BOOKING(false)">Huỷ</el-button>
        <el-button type="danger" @click="submitForm('form')">Đăng ký</el-button>
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
    ...mapGetters(['servicesFront', 'barbersFront', 'editBooking', 'bookingRules', 'prefectures', 'cities', 'communes', 'frontServiceCharges']),
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
#modal-coupon{
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
