<template>
  <div class="container">
    <div class="weui-navbar">
      <div class="weui-navbar__item weui-bar__item_on">
        恒大金服/登录
      </div>
    </div>
    <h1>User Login</h1>

    <form id="loginForm" method="post" autocomplete="off">
      <input type="hidden" value="" name="byTpk" id="loginFormByTpk"/>
      <input type="hidden" value="" name="byKek" id="loginFormByKek"/>
      <input type="hidden" value="" name="marketChannel" id="marketChannel"/>
      <input type="hidden" value="" name="returnURL" id="returnURL"/>
      <!--input type="hidden" value="" name="phoneNumber" id="phoneNumber"/-->
      <input type="hidden" value="" name="promotionCode" id="promotionCode"/>
      <input type="hidden" value="" name="uuid" id="wxInfoUUID"/>

      <div class="weui-cells inputBox">
        <div class="weui-cell">
          <div class="weui-cell__hd phoneImg">
            <i slot="icon" class="ion-person"></i>
          </div>
          <div class="weui-cell__bd weui-cell_primary">
            <p v-cloak>{{phoneNumber}}</p>
          </div>
          <div class="weui-cell__ft pointOut" v-on:click="updatePhoneNumber()">更换</div>
        </div>

        <div class="weui-cell passImg">
          <div class="weui-cell__hd">
            <i slot="icon" class="ion-person"></i>
          </div>
          <div class="weui-cell__bd weui-cell_primary">
            <input class="weui-input" id="plainLoginPassword" name="plainLoginPassword" type="text" placeholder="输入登录密码" maxlength="20" autocomplete="off" autocapitalize="off" />
          </div>
          <div class="weui-cell__ft pointOut" v-on:click="switchDisplayType()" id="switchDisplayType">显示</div>

          <input style="display:none" class="weui-input" id="ignoreInput" name="ignoreInput" type="text" />  <!-- 防止当form中只有一个input时，点击回车会自动提交表单 -->
        </div>
      </div>
      <div class="weui-cells__tips tips_text_right tipsForgetPassword" id="tipsForgetPassword">
        <a href="javascript:;" v-on:click="forgetPasswordLink()">忘记密码</a>
      </div>
    </form>

    <div class="weui-btn-area submitLogin">
      <a class="weui-btn weui-btn_primary" href="javascript:;" v-on:click="submitLogin()">登录</a>
    </div>
  </div>
</template>
<script>
  var _v = null

  export default {
    name: 'UserLogin',
    data () {
      return {
        phoneNumber: '180'
      }
    },
    created: function () {
      _v = this
      console.log('hello' + JSON.stringify(_v.$route.params))
    },
    ready: function () {
    },
    methods: {}
  }
</script>
</script>
</script>
</script>
