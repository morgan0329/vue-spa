<template>
  <div id="app">
    <router-view></router-view>


    <div class="weui-tabbar">
      <a href="javascript:;" class="weui-tabbar__item weui-bar__item_on">
                    <span style="display: inline-block;position: relative;">
                      <span class="weui-tabbar__icon">
                        <i slot="icon" class="ion-home"></i>
                      </span>
                        <!--span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span-->
                    </span>
        <p class="weui-tabbar__label">微信</p>
      </a>
      <a href="javascript:;" class="weui-tabbar__item">
                      <span class="weui-tabbar__icon">
                        <i slot="icon" class="ion-search"></i>
                      </span>
        <p class="weui-tabbar__label">通讯录</p>
      </a>
      <a href="javascript:;" class="weui-tabbar__item">
                    <span style="display: inline-block;position: relative;">
                      <span class="weui-tabbar__icon">
                        <i slot="icon" class="ion-chatboxes"></i>
                      </span>
                        <!--span class="weui-badge weui-badge_dot" style="position: absolute;top: 0;right: -6px;"></span-->
                    </span>
        <p class="weui-tabbar__label">发现</p>
      </a>
      <a href="javascript:;" class="weui-tabbar__item">
                      <span class="weui-tabbar__icon">
                        <i slot="icon" class="ion-person"></i>
                      </span>
        <p class="weui-tabbar__label">我</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
