<template>
  <a-form
    class="login-form"
    :form="form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        type="text"
        size="large"
        v-decorator="[
          'user_code',
          { rules: [{ required: true, message: '请输入您的账号！' }] }
        ]"
        placeholder="账号"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        type="password"
        size="large"
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入您的密码！' }] }
        ]"
        placeholder="密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        type="text"
        size="large"
        v-decorator="[
          'company_code',
          { rules: [{ required: true, message: '请输入客户代码！' }] }
        ]"
        placeholder="客户代码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          { valuePropName: 'checked', initialValue: true }
        ]"
      >
        自动登录
      </a-checkbox>
      <a class="login-form-forgot" href="">
        忘记密码
      </a>
      <a-button type="primary" size="large" html-type="submit" class="login-form-button">
        登录
      </a-button>
      或
      <router-link :to="{ name: 'UserRegister' }">
        注册账号
      </router-link>
    </a-form-item>
  </a-form>
</template>

<script>
import { login } from '@/api/login.js'
export default {
  name: 'LoginIndex',
  mounted () {
    // console.log(localStorage.getItem('auth-token'))
  },
  data () {
    return {
      form: this.$form.createForm(this, { name: 'normal_login' })
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          const { remember, ...params } = values

          login(params).then(res => {
            const { error, message, data } = res

            if (error !== 0) {
              this.$notification.error({
                message: '登录失败',
                description: message
              })
            }

            if (data && data.user_token) {
              this.$store.dispatch('global/login', { ...data, ...values })
                .then(() => {
                  this.$router.push('/')
                })
            }
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
  .login-form {
    margin-left: auto;
    margin-right: auto;
    width: 368px;

    .login-form-forgot { float: right; }
    .login-form-button { width: 100%; }
    .ant-input { background-color: #fff; }
  }
</style>
