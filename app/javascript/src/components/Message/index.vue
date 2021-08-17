<template>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: "index",
    computed: {
      ...mapGetters['messageObject']
    },
    watch: {
      'messageObject': {
        function (object) {
          this.$message(object)
        },
        deep: true
      }
    }
  }
</script>

<style scoped>

</style>
