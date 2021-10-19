<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    data() {
        return {
            scroll: null,
        }
    },
    methods: {
        scrollTo(x, y, time=300) {
            this.scroll.scrollTo(x,y,time);
        },
        refresh(){
            this.scroll.refresh();
            console.log('refreshing...');
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        }

    },
    mounted () {
        this.scroll = new BScroll(this.$refs.wrapper,{
            probeType:3,
            click:true,
            pullUpLoad:true,
        });
        
        this.scroll.on('scroll',position => {
            this.$emit('contentScroll', position);
        })
        this.scroll.on('pullingUp',() => {
            this.$emit('pullingUp');
            console.log('上拉加载');
        })
    },
}
</script>

<style scoped>
    .wrapper{
        overflow: hidden;
    }
</style>