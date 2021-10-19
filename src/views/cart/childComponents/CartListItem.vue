<template>
  <div class="cartListItem">
      <div class="checkButton" @load="imgLoad" 
      :class="{checked: product.isChecked}" @click="checkClick"></div>
      <img class="image" :src="product.image" alt="">
      <div class="textDiv">
          <p class="title">{{product.title}}</p>
          <p class="desc">{{product.desc}}</p>
          <span class="price">￥{{product.price}}</span>
          <span class="quantity">x{{product.quantity}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            default(){
                return {}
            }
        },
    },
    mounted () {
        // console.log(this.product);
    },
    methods: {
        imgLoad() {
            this.$emit('imgLoad');
        },
        checkClick(){
            // console.log(this.product);
            // this.$store.commit('switchCheck', this.product.iid);
            this.product.isChecked = !this.product.isChecked;
            
            // console.log(this.product == this.$store.state.productList[0]);
            // console.log(this.$store.state.productList[0].isChecked);
        },
    },

}
</script>

<style scoped>
    .cartListItem{
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-bottom: 1px solid rgba(128, 128, 128, 0.4);
    }
    .checkButton{
        width: 20px;
        height: 20px;
        margin: 0 4px;
        border: 1px solid gray;
        border-radius: 10px;
    }
    .checkButton.checked{
        background-image: url('~assets/img/cart/yes.svg');
        background-size: cover;
        border: none;
    }
    .image{
        width: 100px;
        height: 150px;
        border-radius: 9px;
        object-fit: cover;
    }
    .textDiv{
        position: relative;
        flex: 1;
        width: 200px;
        height: 150px;
        margin: 0 10px;

    }
    .textDiv .title, .textDiv .desc{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .textDiv .title{
        width: 100%;
    }
    .textDiv .desc{
        width: 95%;
        padding: 13px 0;
        font-size: 13px;
        color: rgba(0, 0, 0, 0.6);
    }
    .textDiv .price{
        position: absolute;
        left: 0;
        bottom: 0;

        color: #ff4500;
    }
    .textDiv .quantity{
        position: absolute;
        right: 0;
        bottom: 0;
    }
</style>