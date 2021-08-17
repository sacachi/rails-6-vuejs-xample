<template>
  <div class="dashboard-editor-container">
    <panel-group />
    <chart/>
  </div>

</template>

<script>
import PanelGroup from "../../components/Dashboard/PanelGroup";
import Chart from "../../components/Dashboard/Chart";
import {mapActions} from "vuex";
  export default {
    name: "Dashboard",
    components:{Chart, PanelGroup},
    mounted() {
      this.fetchSuperAdminBookings()
      this.fetchSuperAdminRevenues()
    },
    methods:{
      ...mapActions('dashboard', [ 'fetchSuperAdminBookings', 'fetchSuperAdminRevenues'])
    }
  }
</script>

<style scoped>

</style>
