<template>
  <div id="note-table">
    <el-table :data="serviceCharges" style="width: 100%">
      <el-table-column
          label="Tên dịch vụ"
      >
        <template slot-scope="scope">
          <div class="name-service">{{scope.row.name}}</div>
        </template>
      </el-table-column>
      <el-table-column
          label="Giá"
      >
        <template slot-scope="scope">
          <div class="price">{{scope.row.price}}</div>
        </template>
      </el-table-column>

      <el-table-column prop="action" width='250' fixed="right">
        <template slot-scope="scope">
          <el-button
              type="success"
              size="mini"
              class="mr-2 edit-btn"
              @click="editServiceCharge(scope.row)"
          >
            Chỉnh sửa
          </el-button>
          <el-popconfirm
              title="Bạn muốn xoá dịch vụ này。"
              confirm-button-text="Xoá"
              cancel-button-text="Không"
              @onConfirm="onConfirm(scope.row)"
          >
            <el-button
                type="danger"
                slot="reference"
                size="mini"
                class="remove-btn"
            >
              Xoá
            </el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
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
      this.fetchServiceCharges()
    },
    computed: {
      ...mapGetters(['serviceCharges']),
    },
    methods: {
      ...mapActions('serviceCharge', ['fetchServiceCharges', 'removeServiceCharge']),
      ...mapMutations('serviceCharge', ['SET_EDIT_SERVICE_CHARGE', 'SET_VISIBLE_SERVICE_CHARGE', 'SET_SERVICE_CHARGE_IS_EDIT']),
      editServiceCharge(data){
        this.SET_EDIT_SERVICE_CHARGE(data)
        this.SET_VISIBLE_SERVICE_CHARGE(true)
        this.SET_SERVICE_CHARGE_IS_EDIT(true)
      },
      onConfirm(data){
        this.removeServiceCharge(data.id)
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
