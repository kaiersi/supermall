<template>
  <div class="cartBottomBar">
      <div class="checkButton" 
      :class="{checked: isCheckAll}" @click="checkClick"></div>
      <span class="text1">全选</span>
      <span class="text2">合计:￥{{totalPrice}}</span>
      <div class="rightButton">去计算({{list.length}})</div>
  </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default(){
                return []
            }
        },
    },
    computed: {
        totalPrice() {
            if(this.list.length == 0){
                return 0;
            } else {
                let result = this.list.filter(item => item.isChecked == true)
                if(result.length == 0){
                    return 0;
                }
                result = result.reduce((total, current) => {
                    return total + current.price * current.quantity
                }, 0)
                return result
            }
        },
        isCheckAll() {
            if(this.list.length == 0){
                return false;
            }
            return this.list.every(item => item.isChecked)
        }
    },
    methods: {
        checkClick() {
            let targetState = !this.isCheckAll;
            for (const item of this.list) {
                item.isChecked = targetState;
            }
        }
    },
}
</script>

<style>
    .cartBottomBar{
        height: 40px;
        line-height: 40px;
        z-index: 1;

        background-color: #EEE9E9;
    }
    .checkButton{
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 10px 3px;
        border: 1px solid gray;
        border-radius: 10px;
    }
    .checkButton.checked{
        background-image: url('~assets/img/cart/yes.svg');
        background-size: cover;
        border: none;
    }
    .text1{
        vertical-align: top;
        font-size: 12px;
        margin-right: 10px;
    }
    .text2{
        vertical-align: top;
        font-size: 13px;
    }
    .rightButton{
        display: inline-block;
        height: 100%;
        padding: 0 10px;
        position: absolute;
        right: 0;

        vertical-align: top;
        background-color: red;

        font-size: 12px;
        color: white;
    }
    
</style>