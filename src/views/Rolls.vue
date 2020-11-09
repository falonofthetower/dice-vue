<template>
  <div class="container">
    <div v-show="isLoading" class="spinner">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
    <div class="row">
      <div v-for="roll in rolls" :key="roll.id" class="col-md-4">
        <Roll :roll="roll"/>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import Roll from "@/components/Roll";

export default {
  components: {
    Roll
  },
  data() {
      return {
      rolls: [],
      isLoading: true,
    };
  },
  created() {
    api.getRolls().then(response => {
      this.rolls = response.data;
      this.isLoading = false;
    });
  }
};
</script>

<style scoped lang="scss">
.spinner {
  font-size: 7rem;
  text-align: center;
}
</style>

