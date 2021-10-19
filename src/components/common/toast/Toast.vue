<template>
  <div id="toast">
      <div class="fade" ref="messageDiv">
          {{message}}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'default',
        }
    },
    methods: {
        showMessage(message, delay) {
            this.show = true;
            this.message = message;
            this.$refs.messageDiv.classList.remove('fade')

            setTimeout(() => {
                this.$refs.messageDiv.classList.add('fade')
            }, delay);
            // setTimeout(() => {
            //     this.show = false;
            // }, delay + 500);
        }
    },
    mounted() {
        // setTimeout(() => {
        //     this.showMessage('123456',2000)
        // }, 1000);
        // setTimeout(() => {
        //     this.showMessage('2333',1000)
        // }, 4000);
    },
}
</script>

<style scoped>
#toast{
    position: fixed;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    z-index: 9;
    pointer-events: none;
    
    display: flex;
    justify-content: center;
    align-items: center;
}
#toast > div{
    padding: 4px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    opacity: 1;
}
#toast > div.fade{
    opacity: 0;
    transition: 0.5s;
}
</style>