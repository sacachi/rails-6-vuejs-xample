<template>
  <div id="modal-coupon">
    <el-form ref="form" :model="editBarber" :rules="barberRules" label-width="140px">
      <el-form-item label="Email" prop="admin.email">
        <el-input v-model="editBarber.admin.email" placeholder="Nhập email"></el-input>
      </el-form-item>
      <el-form-item label="Tên" prop="name">
        <el-input v-model="editBarber.name" placeholder="Nhập tên"></el-input>
      </el-form-item>
      <el-form-item label="Số điện thoại" prop="phone">
        <el-input type="number" v-model="editBarber.phone" placeholder="Nhập số điện thoại"></el-input>
      </el-form-item>
      <el-form-item label="Ngày sinh" prop="birth_day">
        <el-date-picker
          v-model="editBarber.birth_day"
          type="date"
          format="dd/MM/yyyy"
          placeholder="Chọn ngày sinh vd: 20/02/1990">
      </el-date-picker>
      </el-form-item>
      <el-form-item label="Giới tính" prop="gender">
        <el-radio-group v-model="editBarber.gender">
          <el-radio label="male">Nam</el-radio>
          <el-radio label="female">Nữ</el-radio>
          <el-radio label="other">Khác</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Tỉnh/Thành phố" prop="prefecture">
        <el-select v-model="editBarber.prefecture_id" placeholder="Chọn tỉnh" @change="handleChangePrefecture">
          <el-option
              v-for="item in prefectures"
              :key="item.id"
              :label="item.name"
              :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Quận/Huyện" prop="city">
        <el-select v-model="editBarber.city_id" placeholder="Chọn quận/huyện" @change="handleChangeCity">
          <el-option
              v-for="item in cities"
              :key="item.id"
              :label="item.name"
              :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Phường/xã" prop="commune">
        <el-select v-model="editBarber.commune_id" placeholder="Chọn phường/xã">
          <el-option
              v-for="item in communes"
              :key="item.id"
              :label="item.name"
              :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Địa chỉ" prop="address">
        <el-input v-model="editBarber.address" placeholder="Nhập địa chỉ"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">{{
            getBtnTitle
          }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  mounted() {
    this.fetchPrefectures()
  },
  computed: {
    ...mapGetters(['editBarber', 'barberRules', 'barberIsEdit', 'prefectures', 'cities', 'communes']),
    getBtnTitle() {
      return this.barberIsEdit ? 'Cập nhật' : 'Thêm mới'
    }
  },
  methods: {
    ...mapActions('barber', ['createBarber', 'updateBarber']),
    ...mapActions('location', ['fetchPrefectures', 'fetchCities', 'fetchCommunes']),
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          if (this.barberIsEdit) {
            this.updateBarber(this.editBarber)
          } else {
            this.createBarber(this.editBarber)
          }
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
    },
    handleChangeCity(value) {
      this.fetchCommunes(value)
    },
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

</style>
