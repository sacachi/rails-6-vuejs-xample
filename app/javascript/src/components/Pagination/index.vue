<template>
  <div :class="{'hidden':hidden}" class="pagination-container float-right">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { scrollTo } from '../../utils/scroll-to'

export default {
  name: 'Pagination',
  props: {
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['total', 'per_page', 'pageSizes', 'page']),
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.SET_PAGE(val)
      }
    },
    pageSize: {
      get() {
        return this.per_page
      },
      set(val) {
        this.SET_PER_PAGE(val)
      }
    }
  },
  methods: {
    ...mapMutations('page', ['SET_PAGE', 'SET_PER_PAGE']),
    handleSizeChange(val) {
      this.$emit('pagination')
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    },
    handleCurrentChange(val) {
      this.$emit('pagination')
      if (this.autoScroll) {
        scrollTo(0, 800)
      }
    }
  }
}
</script>

<style scoped>
.pagination-container {
  background: #fff;
  padding: 10px 0;
}
.pagination-container.hidden {
  display: none;
}
</style>
