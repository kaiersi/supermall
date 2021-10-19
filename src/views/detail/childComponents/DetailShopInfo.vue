<template>
  <div v-if="Object.keys(shop).length != 0">
      <div class="shop-title">
          <img :src="shop.logo" alt="">
          <span>{{shop.name}}</span>
      </div>
          
      <div class="shop-detail">
        <div class="shop-desc-1">
            <div>{{shop.fans}}</div>
            <div>总销量</div>
        </div>
        <div class="shop-desc-2">
            <div>{{shop.goodsCount}}</div>
            <div>全部宝贝</div>
        </div>
        <table class="shop-score">
            <tr class="score-row" v-for="item in shop.score" :key="item.name">
                <td>{{item.name}}</td>
                <td class="style1" :class="{isBetter: item.isBetter}">{{item.score}}</td>
                <td class="style2" :class="{isBetter: item.isBetter}">
                    <span>{{item.isBetter ? '高' : '低'}}</span>
                </td>
            </tr>
        </table>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        shop: {
            type: Object,
            default: function() {
                return {}
            }
        },
    },
}
</script>

<style scoped>
    .shop-title{
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 8px;
    }
    .shop-title img{
        width: 60px;
        margin-right: 8px;
        border-radius: 60px;
        vertical-align: middle;
    }
    .shop-detail{
        display: flex;
        justify-content: space-around;
        text-align: center;
    }
    .shop-desc-1{
        width: 22%;
    }
    .shop-desc-2{
        width: 22%;
    }
    .shop-score{
        xwidth: 45%;
        text-align: left;

        font-size: 15px;
    }
    .shop-score td{
        padding-right: 10px;
    }

    .shop-desc-1 > div:nth-child(1){
        font-size: 20px;
        font-weight: 700;
        padding: 5px;
    }
    .shop-desc-1 > div:nth-child(2){
        font-size: 14px;
    }
    .shop-desc-2 > div:nth-child(1){
        font-size: 20px;
        font-weight: 700;
        padding: 5px;
    }
    .shop-desc-2 > div:nth-child(2){
        font-size: 14px;
    }


    .style1{
        color: green;
    }
    .style2 span{
        color: white;
        background-color: green;
    }
    .style1.isBetter{
        color: red;
    }
    .style2.isBetter span{
        color: white;
        background-color: red;
    }
</style>