<template>
  <div class="hello">
    <div class="weui-navbar">
      <div class="weui-navbar__item weui-bar__item_on">
        恒大金服
      </div>
    </div>

    <div class="weui-cells weui-cells_form inputBox">
      <div class="weui-cell">
        <div class="weui-cell__hd phoneImg">
          <i slot="icon" class="ion-person"></i>
        </div>
        <div class="weui-cell__bd weui_cell_primary">
          <input class="weui-input" id="phoneNumber" name="phoneNumber" type="tel" placeholder="输入手机号" maxlength="11">
        </div>
      </div>
    </div>

    <div class="weui-btn-area verifyPhoneNumber">
      <a class="weui-btn weui-btn_primary" href="javascript:;" v-on:click="checkPhoneNumber">下一步</a>
    </div>

    <h1>{{ msg }}</h1>

  </div>
</template>

<script>
  import axios from '@/common/http'
  import router from '@/router'

  export default {
    name: 'UserInputPhoneNumber',
    data () {
      return {
        msg: ''
      }
    },
    methods: {
      checkPhoneNumber () {
        var _v = this
        _v.msg = '你已经按了按钮'

        var options = {
          url: '/common/isRegistered',
          params: {'phoneNumber': this.$el.querySelector('#phoneNumber').value},
          method: 'get'
        }

        axios(options)
          .then(function (response) {
            console.log(response.status)

            if (response.status === 200) {
              console.log(response.data)

              if (response.data.isRegistered === 1) {
                _v.msg = '您输入的帐号已注册，请输入密码'
                router.push({
                  path: '/user/login'
                })
              } else {
                _v.msg = '您输入的帐号未注册，请先注册'
                router.push({
                  path: '/user/register'
                })
              }
            } else {
              console.log('wrong')
            }
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

