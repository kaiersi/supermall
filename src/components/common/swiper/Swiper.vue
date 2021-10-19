<template>
    <div id="hy-swiper">
        <div ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <!-- <div class="indicator">

        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            baseWidth: 0,
            animDuration: 200,
            moveRatio: 0.15,
            slideCount:0,
            swiperStyle: {},
            currentIndex: 0,
            currentOffset:0,
            startX: 0,
            scrolling: false,
        }
    },
    props: {
        isImgLoad: {
            type: Boolean,
            default: false
        },
    },
    methods: {
        handleDom(){
            let swiper = this.$refs.swiper;
            let slideList = document.querySelectorAll('.slide')
            let length = slideList.length;

            this.baseWidth = swiper.offsetWidth;
            this.swiperStyle = swiper.style;
            this.slideCount = length;

            var firstNode = slideList[0].cloneNode(true);
            var lastNode = slideList[length - 1].cloneNode(true);


            // console.log(length);
            swiper.appendChild(firstNode);
            swiper.insertBefore(lastNode,slideList[0]);
            

            this.setTransform((this.currentIndex + 1) * -this.baseWidth);
            this.currentOffset = -this.baseWidth;
            // console.log('handle dom');
        },

        touchStart(e) {
            if(this.scrolling){return}
            this.startX = e.touches[0].pageX;
            // console.log(this.startX);
        },
        touchMove(e) {
            let dest = e.touches[0].pageX - this.startX + this.currentOffset;
            // console.log(this.currentOffset);
            this.setTransform(dest);
        },
        touchEnd(e) {
            let OffsetX = e.changedTouches[0].pageX - this.startX;
            // console.log(OffsetX);

            if(OffsetX > 0 && OffsetX > this.baseWidth * this.moveRatio){
                this.currentIndex--;
            } else if(OffsetX < 0 && Math.abs(OffsetX) > this.baseWidth * this.moveRatio){
                this.currentIndex++;
            }

            this.scrollContent();
        },

        setTransform(dest){
            this.swiperStyle.transform = `translate3d(${dest}px, 0, 0)`;
        },
        scrollContent(){
            this.scrolling = true;
            let dest = -(this.currentIndex+1) * this.baseWidth;
            // console.log(dest);
            this.swiperStyle.transition = `transform ${this.animDuration}ms`;
            this.setTransform(dest)
            this.currentOffset = dest;

            this.checkPosition();
            this.scrolling = false;
        },
        checkPosition(){
            setTimeout(() => {
                this.swiperStyle.transition = '';
                if(this.currentIndex < 0) {
                    let dest = -this.slideCount * this.baseWidth;
                    this.setTransform(dest)
                    this.currentIndex = this.slideCount - 1;
                    this.currentOffset = dest;
                }else if(this.currentIndex > this.slideCount - 1) {
                    let dest = -this.baseWidth;
                    this.setTransform(dest)
                    this.currentIndex = 0;
                    this.currentOffset = dest;
                }
            }, this.animDuration);
        }
    },
    watch: {
        isImgLoad(newValue, oldValue) {
            if( newValue == true){
                this.handleDom();
            }
        }
    },
}
</script>

<style scoped>
    #hy-swiper{
        overflow: hidden;
    }
    #hy-swiper div{
        display: flex;
        position: relative;

        /* overflow: hidden; */
    }
</style>