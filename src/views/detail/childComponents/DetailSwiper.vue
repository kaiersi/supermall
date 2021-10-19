<template>
  <swiper class="swiper" :isImgLoad="isImgLoad">
    <swiper-item v-for="(item,index) in images" :key="index">
        <img :src="item" @load="imgLoad">
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
      images: {
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
    //   console.log(this.loadCounter);
      if(this.loadCounter == this.images.length) {
        this.isImgLoad = true;
        console.log('swiperimg loaded count' + this.loadCounter);
      }
    //   // console.log(this.loadCounter);
    //   if(this.loadCounter == 1){
    //     this.$emit('swpImgLoad');
    //   }
    }
  },
}
</script>

<style scoped>
  .swiper{
    height: 350px;

  }
</style>