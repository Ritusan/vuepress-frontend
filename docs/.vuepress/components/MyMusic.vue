<template>
  <div>
    this is music section.
  </div>
</template>

<script>
  export default {
    name: 'music',
    mounted () {
      console.log(this.getSum(100))
    },
    methods: {
      getSum(n) {
        if(n == 1){
          return 1
        }
        return this.getSum(n-1) + n
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>