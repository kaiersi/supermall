<template>
<div class="recommend">
  <div v-for="(item,index) in recommend" class="recommend-item" :key="index">
      <a :href="item.link">
        <img :src="item.image">
        <div>{{item.title}}</div>
      </a>
  </div>
</div>
</template>

<script>
export default {
    props: {
        recommend: {
            type: Array,
            default: []
        },
    },
}
</script>

<style scoped>
    .recommend{
        display: flex;
        padding-top: 12px;
        padding-bottom: 20px;
        margin-bottom: 5px;
        border-bottom: 8px solid #eeeeee;
        text-align: center;
    }
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 80%;
        margin-bottom: 5px;
    }

</style>