<template>
  <div id="app">
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
    <keep-alive exclude="detail,cart">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue'
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
import store from '@/store'
import toast from './components/common/toast'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

FastClick.attach(document.body);

Vue.use(toast);
// Vue.use(VueLazyload);
console.log(require('./assets/img/common/placeholder.png'));
Vue.use(VueLazyload, {
  preload: 1.3,
  loading: require('./assets/img/common/placeholder.png'),
  attempt: 1,
});

export default {
  name: 'App',
  components: {
    MainTabBar
  },
  store: store,
}
</script>

<style scoped>
  @import "assets/css/base.css";

  .main-tab-bar{
    z-index: 1;
  }
</style>
