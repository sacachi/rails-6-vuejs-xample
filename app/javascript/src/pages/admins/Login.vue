<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">
      <div class="title-container">
        <h3 class="login-form-title">Đăng nhập</h3>
        <p class="login-form-text">Vui lòng nhập email và mật khẩu sau đó bấm đăng nhập</p>
      </div>
      <div class="login-form-body">
        <el-row>
          <el-col :span="8">
            <div class="login-form-sub-title">Email</div>
          </el-col>
          <el-col :span="16">
            <el-form-item prop="email">
              <el-input
                  class="input-login"
                  ref="email"
                  v-model="loginForm.email"
                  name="email"
                  type="text"
                  tabindex="1"
                  autocomplete="on"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <div class="login-form-sub-title">Mật khẩu</div>
          </el-col>
          <el-col :span="16">
            <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
              <el-form-item prop="password">
                <el-input
                    input-login
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    name="password"
                    tabindex="2"
                    autocomplete="on"
                    @keyup.native="checkCapslock"
                    @blur="capsTooltip = false"
                    @keyup.enter.native="handleLogin"
                />
              </el-form-item>
            </el-tooltip>
          </el-col>
        </el-row>
      </div>
      <div style="text-align: center">
        <el-button style="width:150px;margin:30px auto; border-radius: 30px; background: #00122E; color: #ffffff" @click="handleLogin">Đăng nhập</el-button>
        <p>Bấm vào đây nếu chưa đăng ký thành viên</p>
        <el-button :loading="loading" style="width:150px;margin:30px auto; border-radius: 30px; background: #20CF98; color: #ffffff" @click="resignForm">Đăng ký</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validEmail } from '../../utils/validate'
import {mapActions} from "vuex";

export default {
  name: 'Login',
  data() {
    const validateLoginEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error('Email chưa đúng định dạng'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('Mật khẩu tối thiểu 6 ký tự'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        email: '',
        password: ''
      },
      loginRules: {
        email: [
            { required: true, message: 'Vui lòng nhập email', trigger: 'blur' },
            { required: true, trigger: 'blur', validator: validateLoginEmail }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  mounted() {
    if (this.loginForm.email === '') {
      this.$refs.email.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    ...mapActions('admin', ['loginAdmin']),
    resignForm(){
      this.$router.push('/admins/sign_up')
    },
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loginAdmin(this.loginForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>
<style lang="scss" scoped>
$bg:#ffffff;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  margin-top: 70px;
  min-height: 100%;
  width: 100%;
  background-color: $bg;

  .login-form {
    position: relative;
    width: 620px;
    max-width: 100%;
    padding: 30px 35px 0;
    margin: 0 auto;
    &-title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-size: 32px;
      color: #00122E;
      letter-spacing: 2.13px;
      text-align: center;
    }
    &-text {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-size: 14px;
      color: #00122E;
      letter-spacing: 0.93px;
      line-height: 16.8px;
      text-align: center;
    }
    &-body {
      padding: 22px 22px 0px 22px;
      border: 1px solid #E8E8E8;
    }
    &-sub-title {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      font-size: 16px;
      color: #00122E;
      letter-spacing: 1.07px;
      margin-top: 10px;
    }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .logo{
    width: 120px;
    height: 50px;
  }
  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>