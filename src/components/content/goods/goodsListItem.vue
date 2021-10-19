<template>
  <div class="goods-item">
      <img v-lazy="imgSrc" alt="" @load="imageLoad" @click="itemClick">
      <div class="goods-info">
        <p>{{data.title}}</p>
        <span class="price">{{data.price}}</span>
        <span class="collect">{{data.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: {}
        },
    },
    computed: {
        imgSrc() {
            return this.data.image || this.data.show.img;
            // console.log(this.data);
            // return this.data.show.img || this.data.image;
        }
    },
    methods: {
        imageLoad() {
            this.$emit('imageLoad');
        },
        itemClick(){
            // console.log(this.data);
            this.$router.push({
                path: 'detail',
                query: {
                    iid: this.data.iid
                }
            })
        }
    },
}
</script>

<style scoped>
    
    .goods-item{
        width: 46%;
        padding-bottom: 8px;
    }
    
    .goods-item img{
        width: 100%;
        border-radius: 5px;
    }
    .goods-info{
        font-size: 12px;
        text-align: center;
        
        vertical-align: middle;
    }
    .goods-info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goods-info .price{
        color: var(--color-high-text);
        margin-right: 20px;

    }
    .goods-info .collect{
        position: relative;
    }
    .goods-info .collect::before{
        content: '';
        position: absolute;
        left: -13px;
        top: -1px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
    }



</style>