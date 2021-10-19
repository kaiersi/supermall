<template>
  <div class="root" v-if="Object.keys(goods).length != 0">
      <div class="info-title">
          <span>{{goods.title}}</span>
      </div>
      <div class="info-price">
          <span>{{goods.realPrice}}</span>
          <span>{{goods.oldPrice}}</span>
          <span>{{goods.discount}}</span>
      </div>
      <div class="info-other">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-services">
          <div v-for="index in goods.services.length-1" :key="index">
              <img :src="goods.services[index].icon"/>
              <span>{{goods.services[index].name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        goods: {
            type: Object,
            default: function(){
                return {}
            }
        },
    },
    created () {
        setTimeout(() => {
            
        // console.log(this.goods);
        }, 500);
    },
}
</script>

<style scoped>
    .info-title{
        padding: 5px;
        font-size:18px;
        font-weight: 700;
    }
    .info-price{
        padding: 5px;
    }
    .info-price span:nth-child(1){
        font-size: 30px;
        color: var(--color-tint);
        margin-right: 8px;
    }
    .info-price span:nth-child(2){
        color: var(--color-text);
        text-decoration: line-through;
        margin-right: 5px;
    }
    .info-price span:nth-child(3){
        padding: 4px;
        border-radius: 8px;

        vertical-align: top;

        font-size: 14px;
        background-color: var(--color-tint);
        color: white;
    }
    .info-other{
        display: flex;
        margin-top: 10px;
        padding: 5px;

        justify-content: space-between;
    }
    .info-services{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        padding: 5px;
        font-size: 14px;
    }
    .info-services img{
        width: 16px;
    }
</style>