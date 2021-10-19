<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  #tab-bar{
    display: flex;
    height: 49px;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #EEE9E9;

    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.19);
    font-size: 14px;
  }
  #tab-bar > div{
    flex: 1;
    text-align: center;
  }
</style>