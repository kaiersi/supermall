<template>
  <swiper :isImgLoad="isImgLoad">
    <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imgLoad">
        </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
  data() {
    return {
      loadCounter: 0,
      isImgLoad: false,
    }
  },
  props: {
      banners: {
          type: Array,
          default: []
      },
  },
  components: {
      Swiper,SwiperItem
  },
  methods: {
    imgLoad() {
      this.loadCounter++;
      if(this.loadCounter == this.banners.length) {
        this.isImgLoad = true;
        console.log('swiperimg loaded count' + this.loadCounter);
      }
      // console.log(this.loadCounter);
      if(this.loadCounter == 1){
        this.$emit('swpImgLoad');
      }
    }
  },
}
</script>

<style>

</style>