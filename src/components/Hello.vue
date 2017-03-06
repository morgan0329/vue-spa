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
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  import { ajax } from 'common'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      checkPhoneNumber () {
        this.msg = '你已经按了下一步按钮了。'

        ajax.get('https://qmobile.hdfax.com/my/myInfo')
          .then(data => {
            if (data.status === '1') {
              this.myInfoData = data.results
            }
          }, () => {
            this.myInfoData = null
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
