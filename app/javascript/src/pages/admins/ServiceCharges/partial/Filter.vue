<template>
  <div class="filter-container" style="float: right">
    <div style="float: right; margin-right: 50px">
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapMutations('serviceCharge', ['SET_EDIT_SERVICE_CHARGE', 'SET_SERVICE_CHARGE_IS_EDIT', 'SET_VISIBLE_SERVICE_CHARGE']),
    addNewServiceCharge() {
      this.SET_VISIBLE_SERVICE_CHARGE(true)
      this.SET_SERVICE_CHARGE_IS_EDIT(false)
      this.SET_EDIT_SERVICE_CHARGE({})
    },
  }
}
</script>

<style scoped>
.filter-item{
  background: #039BE5;
  border-radius: 100px;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0.93px;
  color: white;
}
.filter-container{
  display:flex;
  justify-content: space-between;
  margin-top: 20px
}
.title-page{
  font-size: 14px;
  color: #00122E;
  letter-spacing: 0.93px;
}
.filter-item:focus, .filter-item:hover {
  color: #FFFFFF;
  background-color: #039BE5;
}
</style>

