<template>
  <div class="app-container">
    <el-card>
      <Header/>
      <TableData/>
      <el-dialog :title="getTitle" :visible="visibleBarber" top="60px" width="800px" @close="closeModal" >
        <Modal/>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import Header from './partial/Filter'
import Modal from './partial/Modal'
import TableData from './partial/Table'
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "index",
  components: {
    Header, Modal, TableData
  },
  computed: {
    ...mapGetters(['visibleBarber', 'barberIsEdit']),
    getTitle() {
      return this.barberIsEdit ? 'Cập nhật' : 'Thêm mới'
    }
  },
  methods: {
    ...mapMutations('barber', ['SET_VISIBLE_BARBER']),
    closeModal() {
      this.SET_VISIBLE_BARBER(false)
    }
  }
}
</script>

<style scoped>

</style>
