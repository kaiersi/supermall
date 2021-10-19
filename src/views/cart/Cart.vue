<template>
  <div id="cart">
    <nav-bar class="cart-navbar"><span slot="center">购物车({{length}})</span></nav-bar>
    <scroll class="scroll" ref="scroll">
      <cart-list :list="list" @imgLoad="imgLoad"></cart-list>
    </scroll>
    <cart-bottom-bar class="bottom-bar" :list="list"></cart-bottom-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll'
import CartList from './childComponents/CartList.vue'
import CartBottomBar from './childComponents/CartBottomBar.vue'

import {mapGetters} from 'vuex'
import {debounce} from '../../common/utils.js'

export default {
  name: 'cart',
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters({
      length: 'productLength',
      list: 'productList',
    })
  },
  methods: {
    imgLoad() {
      this.newRefresh();
    },
    newRefresh(){
      console.log('new refresh');
      this.$refs.scroll.refresh();
    }
  },
  created() {
    this.newRefresh = debounce(this.newRefresh);
    console.log('created');
  },
}
</script>

<style scoped>
    #cart{
      height: calc(100vh - 49px);
      overflow: hidden;
    }
    .cart-navbar{
      position: relative;
      background-color: var(--color-tint);
      color: white;
      text-align: center;
      z-index: 2;
    }
    .scroll{
      height: calc(100vh - 44px - 49px);
      overflow: hidden;
    }
    .bottom-bar{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 49px;
    }
</style>