<template>
  <div id="note-table">
    <el-table :data="bookings" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <h5>Thông tin khách hàng</h5>
          <div class="row">
            <div class="col-md-4 col-xs-12">
              Tên KH: {{props.row.customer.name}}
            </div>
            <div class="col-md-4 col-xs-12">
              SĐT KH: {{props.row.customer.phone}}
            </div>
            <div class="col-md-4 col-xs-12">
              Địa chỉ: {{props.row.customer.address}} {{props.row.customer.commune_name}} {{props.row.customer.city_name}} {{props.row.customer.prefecture_name}}
            </div>
          </div>
          <h5>Thông tin chuyên viên</h5>
          <div class="row">
            <div class="col-md-4 col-xs-12">
              <p>Tên chuyên viên: {{props.row.barber.name}}</p>
              <p>Email chuyên viên: {{props.row.barber.email}}</p>
            </div>
            <div class="col-md-4 col-xs-12">
              SĐT chuyên viên: {{props.row.barber.phone}}
            </div>
            <div class="col-md-4 col-xs-12">
              Địa chỉ: {{props.row.barber.address}} {{props.row.barber.commune_name}} {{props.row.barber.city_name}} {{props.row.barber.prefecture_name}}
            </div>
          </div>
          <h5>Thông tin booking</h5>
            <div v-for="(item, index) in props.row.detail.services" :key="index">
              <span class="mr-2">{{item.name}}:</span>
              <span>{{item.price}}</span>
            </div>
          <div>
            <div v-for="(item, index) in props.row.detail.service_charges" :key="index">
              <span class="mr-2">{{item.name}}</span>
              <span>{{item.price}}</span>
            </div>
          </div>
          <div>
            <span class="strong">Tổng: </span><span>{{props.row.detail.total}}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Ngày book" sortable>
        <template slot-scope="scope">
          <div class="name-booking">{{scope.row.created_at}}</div>
        </template>
      </el-table-column>
      <el-table-column label="Status">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <el-tag type="primary" @click="updateStatus(scope.row.id, 'new')">
              Mới
            </el-tag>
            <el-tag type="success"  @click="updateStatus(scope.row.id, 'completed')">
              Hoàn thành
            </el-tag>
            <el-tag type="danger"  @click="updateStatus(scope.row.id, 'canceled')">
              Huỷ
            </el-tag>
            <div slot="reference" class="name-wrapper">
              <el-tag
                :type="scope.row.status.key === 'new' ? 'primary' : scope.row.status.key === 'completed' ? 'success' : 'danger'"
                disable-transitions>{{scope.row.status.value}}
              </el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Khách hàng" sortable>
        <template slot-scope="scope">
          <div class="name-booking">
            {{scope.row.customer.name}}
            <br>
            {{scope.row.customer.phone}}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="Tỉnh" sortable>
        <template slot-scope="scope">
          <div class="name-booking">{{scope.row.customer.prefecture_name}}</div>
        </template>
      </el-table-column>
      <el-table-column label="Tp/Huyện" sortable>
        <template slot-scope="scope">
          <div class="name-booking">{{scope.row.customer.city_name}}</div>
        </template>
      </el-table-column>
      <el-table-column label="Địa chỉ">
        <template slot-scope="scope">
          <div class="name-booking">{{scope.row.customer.address}} {{scope.row.customer.commune_name}}</div>
        </template>
      </el-table-column>
      <el-table-column label="Thợ" sortable>
        <template slot-scope="scope">
          <div class="name-booking">{{scope.row.barber.name}} <br> {{scope.row.barber.phone}}</div>
        </template>
      </el-table-column>
    </el-table>
    <pagination @pagination="handlePagination" />
  </div>
</template>
<script>
  import { mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    mounted() {
      this.fetchBookings()
    },
    computed: {
      ...mapGetters(['bookings']),
    },
    methods: {
      ...mapActions('booking', ['fetchBookings', 'removeBooking', 'updateBookingStatus']),
      ...mapMutations('booking', ['SET_EDIT_BOOKING', 'SET_VISIBLE_BOOKING', 'SET_BOOKING_IS_EDIT']),
      ...mapMutations('page', ['SET_PER_PAGE', 'SET_PAGE']),
      async updateStatus(bookingId, status) {
        await this.updateBookingStatus({id: bookingId, status: status})
        this.fetchBookings()
      },
      editBooking(data){
        this.SET_EDIT_BOOKING(Object.assign({}, data))
        this.SET_VISIBLE_BOOKING(true)
        this.SET_BOOKING_IS_EDIT(true)
      },
      onConfirm(data){
        this.removeBooking(data.id)
      },
      handlePagination() {
        this.fetchBookings()
      }
    }
  }
</script>
<style lang="scss">
#coupon-table{
  th .cell, .el-table .sort-caret.ascending {
    color: #51cbce;
  }
  .btn-plus{
    font-size: .8571em;
    border-radius: 20px;
    padding: 5px 15px;
    background-color: #51bcda;
    color: #fff;
    border-width: 2px;
    font-weight: 600;
    line-height: 1.35em;
    text-transform: uppercase;
    margin: 10px 1px;
    border: none;
  }
}
</style>
