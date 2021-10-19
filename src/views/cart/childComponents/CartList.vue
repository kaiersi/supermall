<template>
  <div>
    <cart-list-item 
        v-for="(item, index) in list" 
        :key="index" 
        :product="item"
        @imgLoad="imgLoad"
    ></cart-list-item>
  </div>
</template>

<script>
import CartListItem from './CartListItem.vue'

export default {
    name: 'cartList',
    props: {
        list: {
            type: Array,
            default(){
                return []
            }
        },
    },
    components: {
        CartListItem,
    },
    mounted () {
        // console.log(this.list);
    },
    methods: {
        imgLoad() {
            this.$emit('imgLoad');
        }
    },
}
</script>

<style scoped>

</style>