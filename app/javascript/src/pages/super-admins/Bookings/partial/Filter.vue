<template>
  <div class="filter-container" style="float: right">
    <div style="float: right; margin-right: 50px">
      <el-button
        class="filter-item mr-2"
        @click="filterBooking('new')"
      >
        Booking mới
      </el-button>
      <el-button
        type="success"
        class="filter-item mr-2"
        @click="filterBooking('canceled')"
      >
        Booking Đã Huỷ
      </el-button>
      <el-button
        type="success"
        class="filter-item mr-2"
        @click="filterBooking('completed')"
      >
        Booking Hoàn Thành
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapMutations('booking', ['SET_EDIT_BOOKING', 'SET_BOOKING_IS_EDIT', 'SET_VISIBLE_BOOKING']),
    ...mapActions('booking', ['fetchBookings']),
    filterBooking(status) {
      this.fetchBookings(status)

    }
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

