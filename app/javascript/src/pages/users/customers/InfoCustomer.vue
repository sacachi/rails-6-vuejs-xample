<template>
  <div id="sign-up-user">
    <div class="container-sign-up-user" >
      <div class="title">Đăng ký tài khoản</div>
      <p class="description">Vui lòng điền thông tin vào mẫu bên dưới</p>
      <el-form ref="form" :model="editUser" :rules="rules">
        <div class="form-sign-in">
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Họ và tên</el-col>
            <el-col :span="15">
              <el-form-item prop="name">
                <el-input  v-model="editUser.name"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Email</el-col>
            <el-col :span="15">
              <el-form-item prop="email">
                <el-input v-model="editUser.email"  placeholder="example@example.com"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Điện thoại</el-col>
            <el-col :span="15">
              <el-form-item prop="phone">
                <el-input v-model="editUser.phone" placeholder="0123-45-6789"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Giới tính</el-col>
            <el-col :span="15">
              <el-form-item prop="gender">
                <el-radio-group v-model="editUser.gender">
                  <el-radio :label="'male'">Nam</el-radio>
                  <el-radio :label="'female'">Nữ</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Địa chỉ</el-col>
            <el-col :span="15">
              <el-form-item prop="address">
                <el-input  v-model="editUser.address" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Mật khẩu</el-col>
            <el-col :span="15">
              <el-form-item prop="password">
                <el-input type="password" v-model="editUser.password"  placeholder="******"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  style="align-items: center">
            <el-col :span="8" class="label-control">Xác nhận mật khẩu</el-col>
            <el-col :span="15">
              <el-form-item prop="password_confirm">
                <el-input type="password" v-model="editUser.password_confirm"  placeholder="******"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div style="text-align: center">
          <el-form-item>
            <el-button class="btn-sign-up" @click="create_customer('form')">会員登録する</el-button>
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
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Vui lòng nhập mật khẩu'));
      } else {
        if (this.editUser.password_confirm !== '') {
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.editUser.password) {
        callback(new Error('Mật khẩu không khớp'));
      } else {
        callback();
      }
    };
    return{
      rules: {
        name: [
          { required: true, message: 'Không được để trống họ tên', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Không được để trống email', trigger: 'blur' },
          { required: true, pattern:/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i, message: 'Định dạng email không đúng', trigger: 'blur' },
        ],
        gender: [
          { required: true, message: 'Vui lòng chọn giới tính', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: 'Vui lòng nhập số điện thoại', trigger: 'blur' },
        ],
        password: [
          {required: true, message: 'Vui lòng nhập mật khẩu', trigger: 'blur'},
          { validator: validatePass, trigger: 'blur' },
          {min: 6, message: 'Mật khẩu có ít nhất 6 ký tự'}
        ],
        password_confirm: [
          {required: true, message: 'Vui lòng nhập nhập mật khẩu xác nhận', trigger: 'blur'},
          { validator: validatePass2, trigger: 'blur' }
        ],
      },
      noteBooking:''
    }
  },
  computed:{
    ...mapGetters(['editUser'])
  },
  methods: {
    // ...mapActions('customer', ['createUser']),
    async create_customer(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          this.createUser(this.editUser)
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
#sign-up-user{
  margin-top: 70px;
  .container-sign-up-user{
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
