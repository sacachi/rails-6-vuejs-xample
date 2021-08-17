<template>
  <div class="app-container">
    <el-card>
      <Header/>
      <TableData/>
      <el-dialog :title="getTitle" :visible="visibleService" top="60px" width="800px" @close="closeModal" >
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
      ...mapGetters(['visibleService', 'total', 'services']),
      getTitle() {
        return 'Quản lý danh sách dịch vụ'
      }
    },
    mounted() {
    },
    methods: {
      ...mapActions('service', ['fetchServices', 'createService']),
      ...mapMutations('service', ['SET_VISIBLE_SERVICE']),
      closeModal() {
        this.$refs.resetField.resetForm()
        this.SET_VISIBLE_SERVICE(false)
        this.fetchServices()
      }
    }
  }
</script>
