<template>
  <div class="goods-list" v-if="data.list.length != 0">
      <goods-list-item :data="item" v-for="(item,index) in data.list" :key="index" @imageLoad="imageLoad">
      </goods-list-item>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem.vue'

export default {
    data() {
        return {
            loadCounter: 0
        }
    },
    props: {
        data: {
            type: Object,
            default:function(){
                return {};
            },
        },
    },
    components: {
        goodsListItem,
    },
    methods: {
        imageLoad() {
            this.loadCounter++;
            // if(this.loadCounter == this.data.list.length) {
            //     console.log('all img loaded count'+this.loadCounter);
            //     this.$emit('imageLoad');
            // }
            this.$emit('imageLoad');
        }
    },
    watch: {
        data(newValue, oldValue) {
            if(newValue.list != oldValue) {
                console.log('data changed');
                this.loadCounter = 0;
            }
        }
    },
    mounted () {
        // console.log(this.data);
        // console.log(Object.keys(this.data));
    },
    
}
</script>

<style  scoped>
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>