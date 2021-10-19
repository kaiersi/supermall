<template>
  <div @click="divClick">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :style="activeColor">
        <slot name="item-text"></slot>
      </div>
  </div>
</template>

<script>
export default {
    // data() {
    //     return {
    //         isActive: false
    //     }
    // },
    props: {
        path: {
            type: String
        },
        itemColor: {
            type: String,
            default: 'pink'
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.path) != -1; 
        },
        activeColor() {
            return this.isActive ? {color: this.itemColor} : {}; 
        }
    },
    methods: {
        divClick() {
            this.$router.replace(this.path);
            // console.log('div clicked');
            // console.log(this.$route.path);
        }
    },
}
</script>

<style scoped>
  img{
      width: 25px;
      vertical-align: middle;
      margin-top: 3px;
      margin-bottom: 1px;
  }
</style>