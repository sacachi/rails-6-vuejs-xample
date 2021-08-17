<template>
  <div class="container">
    <div class="row" v-if="barbers.length > 0">
      <div class="col-md-4 col-xs-12" v-for="barber in barbers">
        <div class="card">
          <div class="card-body">
            <p class="name-barber"><i class="fas fa-user"></i>: {{barber.name}}</p>
            <p>
              <span class="mr-2"><i class="fas fa-mobile-alt"></i>: {{barber.phone}}</span>
              <span class="mr-2"><i class="fas fa-venus-mars"></i>: {{barber.gender}}</span>
              <span><i class="fas fa-heart"></i>: {{ barber.age }} tuổi </span>
            </p>
            <div>
              <button class="btn btn-danger mr-2 button-booking" @click="registrationBooking(barber)">
                Đặt Thợ Ngay
              </button>
              <button class="btn btn-success mr-2 button-price" @click="showDetail(barber)">
                Xem Bảng Giá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>
        Hiện không có chuyên viên nào hoạt động trong khu vực của quý khách
      </p>
      <p>
        Quý khách có thể chọn khu vực khác hoặc quay lại vào một thời điểm khác.
      </p>

    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations} from "vuex";

export default {
  name: "BodyBarbers",
  computed:{
    ...mapGetters(['barbers', 'editBooking', 'frontServiceCharges'])
  },
  methods:{
    ...mapMutations('booking', ['SET_VISIBLE_MODAL_BOOKING', 'SET_EDIT_BOOKING']),
    ...mapMutations('barber', ['SET_VISIBLE_MODAL_TABLE_PRICE']),
    ...mapActions('barber', ['showBarber']),
    registrationBooking(data){
      this.SET_VISIBLE_MODAL_BOOKING(true)
      this.showBarber(data.id)

      this.editBooking.detail = {
        service_charges: this.frontServiceCharges,
        services: [],
      }
      this.editBooking.customer = {}
      this.editBooking.service_ids = []
      this.SET_EDIT_BOOKING(Object.assign({}, this.editBooking))
    },
    showDetail(data){
      this.SET_VISIBLE_MODAL_TABLE_PRICE(true)
      this.showBarber(data.id)
    }
  }
}
</script>

<style scoped>
  /* .button-booking:hover{
    background-color:#185798;
    border-color: #185798;
  }
  .button-price:hover{
    background-color: #28a745;
    border-color: #28a745;
  }
  .button-price{
    color: white;
    background-color: #67c23a;
    border-color: #67c23a;
  }
  .button-booking{
    background-color: #409eff;
    border-color: #409eff;
    color: white;
  } */
  .name-barber{
    font-weight: bold;
  }
</style>
