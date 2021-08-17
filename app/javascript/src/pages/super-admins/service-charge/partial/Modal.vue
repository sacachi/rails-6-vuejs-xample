<template>
  <div id="modal-coupon">
    <el-form ref="form" :model="editServiceCharge" :rules="serviceChargeRules" label-width="140px">
      <el-form-item label="Tên dịch vụ" prop="name">
        <el-input v-model="editServiceCharge.name" placeholder="Nhập tên dịch vụ"></el-input>
      </el-form-item>
      <el-form-item label="Giá" prop="price">
        <el-input-number v-model="editServiceCharge.price" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">{{
            getBtnTitle
          }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['editServiceCharge', 'serviceChargeRules', 'serviceChargeIsEdit']),
    getBtnTitle() {
      return this.serviceChargeIsEdit ? 'Cập nhật' : 'Thêm mới'
    }
  },
  methods: {
    ...mapActions('serviceCharge', ['createServiceCharge', 'updateServiceCharge']),
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          if (this.serviceChargeIsEdit) {
            this.updateServiceCharge(this.editServiceCharge)
          } else {
            this.createServiceCharge(this.editServiceCharge)
          }
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.$refs['form'].resetFields();
    }
  }
}
</script>
<style lang="scss">
#modal-coupon{
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 100%;
  }
  .el-input-number .el-input__inner {
    text-align: left;
  }
}

</style>
