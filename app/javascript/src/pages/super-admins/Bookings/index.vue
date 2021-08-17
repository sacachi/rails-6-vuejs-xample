<template>
  <div class="app-container">
    <el-card>
      <Header/>
      <TableData/>
      <el-dialog title="Thêm mới đơn hàng" :visible="visibleBooking" top="60px" width="800px" @close="closeModal" >
        <Modal ref="resetField"/>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
  import Modal from './partial/Modal'
  import TableData from './partial/Table'
  import Header from './partial/Filter'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    components: {
      Modal,
      TableData,
      Header
    },
    computed: {
      ...mapGetters(['visibleBooking', 'total', 'bookings']),
      getTitle() {
        return 'Quản lý booking'
      }
    },
    mounted() {
      this.fetchBookings()
    },
    methods: {
      ...mapActions('booking', ['fetchBookings', 'createBooking']),
      ...mapMutations('booking', ['SET_VISIBLE_BOOKING']),
      closeModal() {
        this.$refs.resetField.resetForm()
        this.SET_VISIBLE_BOOKING(false)
      }
    }
  }
</script>
