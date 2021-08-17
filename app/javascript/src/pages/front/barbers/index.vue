<template>
  <div id="barbers-index">
    <header-barbers/>
    <filter-barbers/>
    <body-barbers/>
    <el-dialog title="Gửi Yêu cầu" :visible="visibleModalBooking" top="20px" width="80%" @close="closeModal" >
      <booking-modal/>
    </el-dialog>
    <el-dialog title="Bảng giá dịch vụ" :visible="visibleModalTablePrice" top="20px" width="80%" @close="SET_VISIBLE_MODAL_TABLE_PRICE(false)" >
      <TablePriceModal/>
    </el-dialog>
  </div>
</template>

<script>
import BookingModal from "./partial/modal/BookingModal";
import HeaderBarbers from './partial/HeaderBarbers';
import FilterBarbers from "./partial/FilterBarbers";
import BodyBarbers from "./partial/BodyBarbers";
import TablePriceModal from "./partial/modal/TablePriceModal";
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  components:{
    BookingModal, BodyBarbers, HeaderBarbers, FilterBarbers, TablePriceModal
  },
  mounted() {
    this.fetchBarbersFront()
    this.fetchFrontServiceCharges()
  },
  computed:{
    ...mapGetters(['visibleModalBooking', 'visibleModalTablePrice'])
  },
  methods:{
    ...mapMutations('booking', ['SET_VISIBLE_MODAL_BOOKING']),
    ...mapMutations('barber', ['SET_VISIBLE_MODAL_TABLE_PRICE']),
    ...mapActions('barber', ['fetchBarbersFront']),
    ...mapActions('serviceCharge', ['fetchFrontServiceCharges']),
    closeModal(){
      this.SET_VISIBLE_MODAL_BOOKING(false)
    }
  }
}
</script>

<style scoped>
@media (max-width: 420px) {
  .container{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
