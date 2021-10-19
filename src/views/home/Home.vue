<template>
<div id="home">
  <nav-bar class="home-navbar"><div slot="center">购物街</div></nav-bar>
    <tab-control 
        class="tab-control-rep" 
        :titleList="titleList" 
        :tabIndex="tabIndex"
        @tabClick="tabClick" 
        v-show="showTab"></tab-control>
  <scroll 
      class="scrollDiv" 
      ref="scroll" 
      @contentScroll="contentScroll" 
      @pullingUp="pullingUp">
    <home-swiper :banners="banners" @swpImgLoad="swpImgLoad"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <feature-view></feature-view>
    <tab-control 
        class="tab-control" 
        ref="tab"
        :titleList="titleList" 
        :tabIndex="tabIndex"
        @tabClick="tabClick" ></tab-control>
    <goods-list :data="goods[contentType]" @imageLoad="imgLoaded"></goods-list>
  </scroll>
  <back-top @click.native="backClick" v-show="showBackTop"></back-top>
</div>
</template>


<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendView from './childComponents/RecommendView.vue'
import FeatureView from './childComponents/FeatureView.vue'

import TabControl from 'components/content/tabControl/TabControl.vue'
import goodsList from 'components/content/goods/goodsList.vue'
import backTop from 'components/content/backTop/backTop.vue'

import {getHomeMultiData,getHomeData} from 'network/home'
import {debounce} from '../../common/utils.js'

console.log('cxx --- ');

export default {
  name: 'home',
  data() {
    return {
      banners: [],
      recommend: [],
      titleList: ['流行','新款','精选'],
      goods: {
        'pop':{page: 0, list: []},
        'new':{page: 0, list: []},
        'sell':{page: 0, list: []},
      },
      contentType: 'pop',
      typeList: ['pop','new','sell'],
      showBackTop: false,
      tabOffset: 625,
      tabIndex: 0,
      showTab: false,
    }
  },
  components: {
    NavBar,HomeSwiper,RecommendView,FeatureView,TabControl,goodsList,Scroll,backTop
  },
  created () {
    this.getHomeMultiData();
    this.loadGoodsData('pop');
    this.loadGoodsData('new');
    this.loadGoodsData('sell');
  },
  mounted () {
    this.newRefresh = debounce(this.$refs.scroll.refresh);
    // this.$refs.scroll.$el.onclick = function(){
    //   console.log('scroll clicked')
    // }
    // this.$toast.$el.onclick = function(){
    //   console.log('toast clicked')
    // }
  },
  methods: {
    getHomeMultiData(){
      getHomeMultiData().then( res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
        // console.log(this.banners);
      });
    },
    loadGoodsData(type) {
      let page = this.goods[type].page + 1;
      getHomeData(type, page).then( res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        // console.log(res.data);
      })
    },
    imgLoaded(){
      this.$refs.scroll.refresh();
      if(this.goods[this.contentType].page > 1) {
        this.$refs.scroll.finishPullUp();
        console.log('imgloaded finishPullUp');
      }
    },
    swpImgLoad(){
      setTimeout(() => {
        this.tabOffset = this.$refs.tab.$el.offsetTop;
      }, 100);
    },

    tabClick(index){
      this.contentType = this.typeList[index];

      this.$refs.scroll.scrollTo(0, -this.tabOffset)
      this.tabIndex = index;
      // console.log(index);
    },
    backClick(){
      this.$refs.scroll.scrollTo(0, 0);
    },
    pullingUp(){
      this.loadGoodsData(this.contentType);
    },
    contentScroll(position){
      if(-position.y < 1000) {
        this.showBackTop = false;
      } else {
        this.showBackTop = true;
      }

      // console.log(position);
      if(-position.y > this.tabOffset) {
        this.showTab = true;
      } else {
        this.showTab = false;
      }
    },
    newRefresh(){
      
    }
  }
}
</script>

<style scoped>
  #home{
    height: 100vh;
  }
  .home-navbar{
    position: relative;
    background-color: var(--color-tint);
    color: white;
    text-align: center;
    z-index: 2;
  }
  .tab-control{
    z-index: 3;
  }
  .tab-control-rep{
    position: fixed;
    top: 44px;
    left: 0px;
    right: 0px;
    z-index: 3;

  }
  
  .scrollDiv{
    height: calc(100vh - 93px);
  }

</style>