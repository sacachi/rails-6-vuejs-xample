<template>
  <div id="sign-up-admin">
    <div class="container-sign-up-admin" >
      <div class="title">Đăng ký tài khoản</div>
      <p class="description">Vui lòng điền thông tin bên dưới</p>
      <el-form ref="form" :model="editAdmin" :rules="rules">
        <div class="form-sign-in">
          <el-form-item label="Email" prop="email">
            <el-input v-model="editAdmin.email"  placeholder="example@example.com"></el-input>
          </el-form-item>
          <el-form-item label="Tên" prop="barber.name">
            <el-input v-model="editAdmin.barber.name" placeholder="Nhập tên"></el-input>
          </el-form-item>
          <el-form-item label="Số điện thoại" prop="barber.phone">
            <el-input v-model="editAdmin.barber.phone" placeholder="Nhập số điện thoại"></el-input>
          </el-form-item>
          <el-form-item label="Ngày sinh" prop="barber.birth_day">
            <el-date-picker
                v-model="editAdmin.barber.birth_day"
                type="date"
                placeholder="20/01/1990"
                format="dd/MM/yyyy"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="Giới tính" prop="barber.gender">
            <el-radio-group v-model="editAdmin.barber.gender">
              <el-radio label="male">Nam</el-radio>
              <el-radio label="female">Nữ</el-radio>
              <el-radio label="other">Khác</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Tỉnh/Thành phố" prop="barber.prefecture_id">
            <el-select v-model="editAdmin.barber.prefecture_id" placeholder="Chọn tỉnh" @change="handleChangePrefecture">
              <el-option
                v-for="item in prefectures"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Quận/Huyện" prop="barber.city_id">
            <el-select v-model="editAdmin.barber.city_id" placeholder="Chọn quận/huyện" @change="handleChangeCity">
              <el-option
                v-for="item in cities"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Phường/xã" prop="barber.commune_id">
            <el-select v-model="editAdmin.barber.commune_id" placeholder="Chọn phường/xã">
              <el-option
                v-for="item in communes"
                :key="item.id"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Địa chỉ" prop="address">
            <el-input v-model="editAdmin.barber.address" placeholder="Nhập địa chỉ"></el-input>
          </el-form-item>
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Mật khẩu</el-col>
            <el-col :span="15">
              <el-form-item prop="password">
                <el-input type="password" v-model="editAdmin.password"  placeholder="******"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Xác nhận mật khẩu</el-col>
            <el-col :span="15">
              <el-form-item prop="password_confirmation">
                <el-input type="password" v-model="editAdmin.password_confirmation"  placeholder="******"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <router-link :to="{name: 'AdminLogin'}" class="grid-content" style="margin:10px 0">※ Quay lại trang đăng nhập</router-link>
            </el-col>
          </el-row>
        </div>
        <div style="text-align: center">
          <el-form-item>
            <el-button class="btn-sign-up" @click="submitForm('form')">Đăng ký</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SignUp",
  mounted() {
    this.fetchPrefectures()
  },
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Vui lòng nhập mật khẩu'));
      } else {
        if (this.editAdmin.password_confirmation !== '') {
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.editAdmin.password) {
        callback(new Error('Mật khẩu không khớp'));
      } else {
        callback();
      }
    };
    return{
      rules: {
        email: [
          { required: true, message: 'Vui lòng nhập email', trigger: 'blur' },
          { required: true, pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i, message: 'Định dạng email không đúng', trigger: 'blur' },
        ],
        password: [
          {required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur'},
          { validator: validatePass, trigger: 'blur' },
          {min: 6, message: 'Mật khẩu có ít nhất 6 ký tự'}
        ],
        password_confirmation: [
          {required: true, message: 'Vui lòng nhập mật khẩu xác nhận', trigger: 'blur'},
          { validator: validatePass2, trigger: 'blur' }
        ],
        barber: {
          name: [{ required: true, message: 'Vui lòng nhập tên', trigger: 'blur' }],
          phone: [
            { required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur' },
            { required: true, pattern:/((09|03|07|08|05)+([0-9]{8})\b)/g, message: 'Định dạng số điện thoại không đúng', trigger: 'blur' },
          ],
          gender: [{ required: true, message: 'Vui lòng chọn giới tính', trigger: 'blur' }],
          prefecture_id: [{ required: true, message: 'Vui lòng chọn tỉnh', trigger: 'blur' }],
          city_id: [{ required: true, message: 'Vui lòng chọn thành phố', trigger: 'blur' }],
          commune_id: [{ required: true, message: 'Vui lòng chọn phường/xã', trigger: 'blur' }],
        }
      },
      noteBooking:''
    }
  },
  computed:{
    ...mapGetters(['editAdmin', 'prefectures', 'cities', 'communes'])
  },
  methods: {
    ...mapActions('admin', ['createAdmin']),
    ...mapActions('location', ['fetchPrefectures', 'fetchCities', 'fetchCommunes']),
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          this.createAdmin(this.editAdmin)
        } else {
          return false
        }
      })
    },
    handleChangePrefecture(value) {
      this.fetchCities(value)
    },
    handleChangeCity(value) {
      this.fetchCommunes(value)
    }
  }
}
</script>

<style lang="scss">
#sign-up-admin{
  margin-top: 70px;
  .container-sign-up-admin{
    max-width: 650px;
    margin: auto;
    font-family: "Helvetica Neue", "Helvetica", "游ゴシック体",
    "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN",
    "メイリオ", Meiryo, sans-serif;
  }
  .form-sign-in{
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    padding: 32px;
    margin-bottom: 32px;
  }
  .title{
    font-size: 32px;
    color: #00122E;
    letter-spacing: 2.13px;
    text-align: center;
    margin-bottom: 40px;
    font-weight:600
  }
  .description{
    font-size: 14px;
    color: #00122E;
    letter-spacing: 0.93px;
    line-height: 16.8px;
    margin-bottom: 32px;
  }
  .item-login{
    margin-top: 16px;
  }
  .label-control{
    font-weight: 600;
    text-align: left;
    font-size: 16px;
    color: #00122E;
    letter-spacing: 1.07px;
  }
  .label-control-not-require{
    font-weight: 600;
    text-align: left;
    font-size: 16px;
    color: #00122E;
    letter-spacing: 1.07px;
  }
  .label-control::after{
    content: "*";
    color: red;
    margin-left: 3px;
  }
  .term{
    font-family: HiraginoSans-W4;
    font-size: 14px;
    color: #00122E;
    letter-spacing: 0.93px;
  }
  .btn-sign-up{
    width:150px;
    margin:30px auto;
    border-radius: 30px;
    background: #00122E;
    color: #ffffff
  }
  .validate-checkbox{
    .el-form-item__error{
      margin-left: -10px
    }
  }
  .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #20CF98;
  }
  .el-form-item__error{
    font-weight: 600;
    font-size: 12px;
    color: #FF5555;
    letter-spacing: 0.8px;
    ont-family: "Helvetica Neue", "Helvetica", "游ゴシック体", "Yu Gothic", YuGothic, "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif;
  }
}
</style>
