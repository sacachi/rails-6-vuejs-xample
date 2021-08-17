<template>
  <div id="note-table">
    <el-table :data="services" style="width: 100%">
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
      <el-table-column prop="action" width='150' fixed="right">
        <template slot-scope="scope">
          <el-button
            type="success"
            size="mini"
            class="mr-2 edit-btn"
            @click="editAdminService(scope.row)"
          >
            Điều chỉnh giá
          </el-button>
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
      this.fetchAdminServices()
    },
    computed: {
      ...mapGetters(['services']),
    },
    methods: {
      ...mapActions('service', ['fetchAdminServices', 'removeService']),
      ...mapMutations('service', ['SET_EDIT_SERVICE', 'SET_VISIBLE_SERVICE', 'SET_SERVICE_IS_EDIT']),
      editAdminService(data){
        this.SET_EDIT_SERVICE(data)
        this.SET_VISIBLE_SERVICE(true)
        this.SET_SERVICE_IS_EDIT(true)
      },
      onConfirm(data){
        this.removeService(data.id)
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
