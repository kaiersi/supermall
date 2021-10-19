<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item,index) in titleList" :key="index" :class="{active: index==currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },
    props: {
        titleList: {
            type: Array,
            default: []
        },
        tabIndex: {
            type: Number,
            default: 0
        },
    },
    watch: {
        tabIndex(newValue, oldValue) {
            this.currentIndex = newValue;
        }
    },
    methods: {
        itemClick(index) {
            this.currentIndex = index;
            // console.log('itemclicked');
            this.$emit('tabClick', index);
        }
    },
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        height: 40px;

        background-color: white;

        font-size: 15px;
        line-height: 40px;
        text-align: center;
    }
    .tab-control-item{
        flex: 1;
    }
    .tab-control-item span{
        padding: 3px;
    }
    .active{
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 3px solid var(--color-tint);
    }
</style>