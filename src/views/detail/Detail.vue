<template>
  <div class="detail">
    <detail-navbar class="navbar" @navClick="navClick" ref="navbar"></detail-navbar>
    <scroll class="scroll" ref="scroll" @contentScroll="contentScroll">
        <detail-swiper :images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="goodsInfoImgLoad"></detail-goods-info>
        <detail-params :paramInfo="paramsInfo" ref="params"/>
        <detail-comment-info :commentInfo="commentInfo" ref="comment"/>
        <goods-list :data="recommend" @imageLoad="recommendImgLoad" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar class="bottomBar" @addCart="addCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="showBackTop"></back-top>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'

import DetailNavbar from './childComponents/DetailNavbar.vue'
import DetailSwiper from './childComponents/DetailSwiper.vue'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
import DetailParams from './childComponents/DetailParams.vue'
import DetailCommentInfo from "./childComponents/DetailCommentInfo"
import goodsList from "components/content/goods/goodsList"
import DetailBottomBar from "./childComponents/DetailBottomBar"
import backTop from 'components/content/backTop/backTop.vue'


import {getDetailData, getRecommendData, Goods, Shop, GoodsParam} from 'network/detail'
import {debounce,throttle} from '../../common/utils.js'

export default {
    name:'detail',
    data() {
        return {
            counter: 0,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramsInfo: {},
            commentInfo: {},
            recommend: {list: []},
            ElementOffset: [0, 1000, 2000, 3000],
            showBackTop: false,
        }
    },
    components: {
        Scroll,
        DetailSwiper,
        DetailNavbar,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParams,
        DetailCommentInfo,
        goodsList,
        DetailBottomBar,
        backTop,
    },
    methods: {
        goodsInfoImgLoad() {
            this.newRefresh();
            this.updateOffset();
        },
        recommendImgLoad(){
            // console.log('new refresh');
            this.newRefresh();
            this.updateOffset();
        },
        navClick(index){
            this.$refs.scroll.scrollTo(0, -this.ElementOffset[index], 100)
            // console.log(index);
        },
        backClick(){
            this.$refs.scroll.scrollTo(0, 0);
        },
        updateOffset(){
            // console.log(this.ElementOffset);
            this.ElementOffset[1] = this.$refs.params.$el.offsetTop;
            this.ElementOffset[2] = this.$refs.comment.$el.offsetTop;
            this.ElementOffset[3] = this.$refs.recommend.$el.offsetTop;
        },
        contentScroll(position){
            this.updateBackTop(position);
            this.updateIndex(position);
        },
        newRefresh(){
            // console.log('refreshing');
            this.$refs.scroll.refresh();
        },
        updateBackTop(position){
            if(-position.y < 1000) {
                this.showBackTop = false;
            } else {
                this.showBackTop = true;
            }
            // console.log('updateBackTop');
        },
        updateIndex(position){
            // console.log('updateIndex');
            if(-position.y > 0 && -position.y < this.ElementOffset[1]) {
                this.$refs.navbar.currentIndex = 0;
            }
            if(-position.y > this.ElementOffset[1] && -position.y < this.ElementOffset[2]) {
                this.$refs.navbar.currentIndex = 1;
            }
            if(-position.y > this.ElementOffset[2] && -position.y < this.ElementOffset[3]) {
                this.$refs.navbar.currentIndex = 2;
            }
            if(-position.y > this.ElementOffset[3]) {
                this.$refs.navbar.currentIndex = 3;
            }
        },
        addCart(){
            // console.log(this.$route);
            // console.log(this.goods);
            
            let product = {
                iid: this.$route.query.iid,
                image: this.topImages[0],
                title: this.goods.title,
                desc: this.goods.desc,
                price: parseInt(this.goods.realPrice),
                quantity: 1,
                isChecked: false,
            }
            this.$store.commit('addProduct', product);
            console.log(this.$toast);
            this.$toast.showMessage('成功加入到购物车', 1000);
        }
    },
    created(){
        // console.log(this.$route.query.iid);
        getDetailData(this.$route.query.iid)
        .then(res => {
            const data = res.result;
            this.topImages = data.itemInfo.topImages;
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        
            this.detailInfo = data.detailInfo;
            this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        
            if(data.rate.cRate !== 0) {
                this.commentInfo = data.rate.list[0]
            }
            // console.log(this.goods);
            // console.log(this.topImages);
        });
        getRecommendData()
        .then( res => {
            this.recommend.list = res.data.list;
            // console.log(this.recommend);
        });

        this.newRefresh = debounce(this.newRefresh, 100);
        // console.log(this.newRefresh);
        // this.updateIndex = throttle(this.updateIndex, 300)
        this.updateBackTop = throttle(this.updateBackTop, 300)
        // console.log('created');
    },
    mounted(){
        // this.ElmtOffset = this.$refs.params
    },
}
</script>

<style scoped>
    .detail{
        position: relative;
        z-index: 2;
        background-color: white;
    }
    .navbar{
        position: relative;
        background-color: white;
    }
    .scroll{
        height: calc(100vh - 93px);
        background-color: white;
        position: relative;
    }
    .bottomBar{
        z-index: 3;
    }
</style>