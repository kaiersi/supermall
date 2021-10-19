<template>
    <div id="bottomBar">
        <div class="bottom_left">
            <div class="service">
                <i class="icon"></i>
                <span>客服</span>
            </div>
            <div class="shop">
                <i class="icon"></i>
                <span>店铺</span>
            </div>
            <div class="collect">
                <i class="icon"></i>
                <span>收藏</span>
            </div>
        </div>
        <div class="bottom_right">
            <div class="cart" @click="addCart">
                加入购物车
            </div>
            <div class="buy">
                购买
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        addCart() {
            this.$emit('addCart');
        }
    },

}
</script>

<style scoped>
#bottomBar{
    display: flex;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    font-size: 12px;
    text-align: center;
    box-shadow: 0 0 1px gray;
    background-color: white;
}
.bottom_left {
  display: flex;
  flex: 1;
}
.bottom_left > div {
  flex: 1;
  border-right: 1px solid rgba(128, 128, 128, 0.2);
}
.bottom_left .icon {
  display: block;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  width: 20px;
  height: 21px;
  margin: 10px auto 0;
}
.service .icon {
  background-position: 0 -48px;
}
.shop .icon {
  background-position: 0 -91px;
}
.bottom_right {
  display: flex;
  flex: 1;
}
.bottom_right > div {
  flex: 1;
  line-height: 49px;
}
.cart {
  background-color: rgb(255, 174, 0);
}
.buy {
  background-color: var(--color-tint);
  color: white;
}
</style>