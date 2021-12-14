<template>
  <div>
    <div class="box">
      sdsdssdergfg
    </div>
  </div>
</template>

<script>
  export default {
    name: 'rem',
    data(){
      return {

      }
    },
    mounted(){
      this.getRem()
    },
    methods: {
      getRem() {
        let html = document.getElementsByTagName('html')[0]
        let oWidth = document.body.clientWidth || document.documentElement.clientWidth
        // html.style.fontSize = oWidth / 75 + 'px'
        console.log(html)
        console.log(oWidth)
      }
    },
  }
</script>

<style lang="scss" scoped>
.box {
  width: 1rem;
  height: 100px;
  background: red;
}
</style>