<template>
  <div id="note-table">
    <el-table :data="barbers" style="width: 100%">
      <el-table-column
          label="Tên - SĐT"
      >
        <template slot-scope="scope">
          <div class="name-service">
            {{scope.row.name}}
            <br>
            {{scope.row.phone}}
          </div>
        </template>
      </el-table-column>
      <el-table-column
          label="Tuổi"
      >
        <template slot-scope="scope">
          <div class="price">{{scope.row.age}}</div>
        </template>
      </el-table-column>
      <el-table-column
          label="Giới tính"
      >
        <template slot-scope="scope">
          <div class="price">{{scope.row.gender_name}}</div>
        </template>
      </el-table-column>
      <el-table-column
          label="Tỉnh/thành phố"
      >
        <template slot-scope="scope">
          <div>{{scope.row.prefecture.name}}</div>
        </template>
      </el-table-column>
      <el-table-column
          label="Quận/huyện"
      >
        <template slot-scope="scope">
          <div>{{scope.row.city.name}}</div>
        </template>
      </el-table-column>
      <el-table-column
          label="Phường/xã"
      >
        <template slot-scope="scope">
          <div>{{scope.row.commune.name}}</div>
        </template>
      </el-table-column>
      <el-table-column
          label="Địa chỉ"
      >
        <template slot-scope="scope">
          <div class="price">{{scope.row.address}}</div>
        </template>
      </el-table-column>

      <el-table-column prop="action" width='250' fixed="right">
        <template slot-scope="scope">
          <el-button
              type="success"
              size="mini"
              class="mr-2 edit-btn"
              @click="editBarber(scope.row)"
          >
            Chỉnh sửa
          </el-button>
          <el-popconfirm
              title="Bạn muốn xoá người này"
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
      this.fetchBarbers()
    },
    computed: {
      ...mapGetters(['barbers']),
    },
    methods: {
      ...mapActions('barber', ['fetchBarbers', 'removeBarber']),
      ...mapActions('location', ['fetchCities', 'fetchCommunes']),
      ...mapMutations('barber', ['SET_EDIT_BARBER', 'SET_VISIBLE_BARBER', 'SET_BARBER_IS_EDIT']),
      editBarber(data){
        this.SET_EDIT_BARBER(Object.assign({}, data))
        this.SET_VISIBLE_BARBER(true)
        this.SET_BARBER_IS_EDIT(true)
        this.fetchCities(data.prefecture.id)
        this.fetchCommunes(data.city.id)
      },
      onConfirm(data){
        this.removeBarber(data.id)
      },
      handlePagination() {
        this.fetchBarbers()
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
