<template>
  <a-layout class="layout login-layout">

    <a-layout-content class="login-layout__bd">
      <header class="login-layout__hd">
        <img class="login-layout__logo" src="@/assets/imgs/logo.png">
        <p class="login-layout__desc">易仓云BI 登录系统</p>
      </header>
      <router-view />
    </a-layout-content>

    <a-layout-footer style="text-align: center">Copyright 2019©深圳易仓科技有限公司.All Rights Reserved</a-layout-footer>
  </a-layout>
</template>

<style lang="less" scoped>
  .login-layout {
    width: 100%;
    height: 100vh;
    background-image: url(../assets/imgs/TVYTbAXWheQpRcWDaDMu.svg);
    background-repeat: no-repeat;
    background-position: center 110px;
    background-size: 100%;
    overflow: auto;
  }
  .login-layout__hd {
    margin-bottom: 40px;
    text-align: center;
  }
  .login-layout__desc {
    margin-top: 12px;
    margin-bottom: 0;
    color: rgba(0, 0, 0, .45);
    font-size: 14px;
  }
  .login-layout__bd {
    padding: 32px 0 20px;
    flex: 1 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
