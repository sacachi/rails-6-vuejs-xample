<template>
  <div style="font-size: 20px">{{ breadCrumbs }}</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "index",
  computed:{
    ...mapGetters(['breadCrumbs'])
  }
}
</script>
