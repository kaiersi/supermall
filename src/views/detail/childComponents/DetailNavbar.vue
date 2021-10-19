<template>
  <nav-bar class="navbar">
      <div class="left" slot="left" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="center" slot="center">
          <span :class="{active: currentIndex == index}" v-for="(item,index) in list" :key="item" @click="navClick(index)">{{item}}</span>
      </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';

export default {
    data() {
        return {
            list: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0,
        }
    },
    components: {
        NavBar,
    },
    methods: {
        backClick() {
            this.$router.back(-1);
        },
        navClick(index){
            this.currentIndex = index;
            this.$emit('navClick', index);
        }
    },
}
</script>

<style scoped>
    .navbar{
        position: relative;
        text-align: center;
        
        z-index: 3;
    }
    .navbar .left{
        line-height: 44px;
    }
    .navbar img{
        vertical-align: middle;
    }
    .navbar .center{
        display: flex;
        justify-content: space-around;
    }
    .active{
        color: var(--color-tint);
    }
</style>