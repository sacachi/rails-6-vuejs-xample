<template>
  <div class="app-container">
    <el-card>
      <Header/>
      <TableData/>
      <el-dialog title="Quản lý danh sách phí dịch vụ" :visible="visibleServiceCharge" top="60px" width="800px" @close="closeModal" >
        <Modal ref="resetField"/>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import Header from "./partial/Filter"
import TableData from "./partial/Table"
import Modal from "./partial/Modal"
import {mapGetters, mapMutations} from "vuex";
export default {
  name: "index",
  components: {
    Header, TableData, Modal
  },
  computed: {
    ...mapGetters(['visibleServiceCharge'])
  },
  methods: {
    ...mapMutations('serviceCharge', ['SET_VISIBLE_SERVICE_CHARGE']),
    closeModal() {
      this.SET_VISIBLE_SERVICE_CHARGE(false)
    }
  }
}
</script>

<style scoped>

</style>
