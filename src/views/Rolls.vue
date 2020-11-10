<template>
  <div class="container">
    <div class="row">
      <div v-for="roll in rolls" :key="roll.id" class="col-md-4">
        <Roll :roll="roll"/>
      </div>
    </div>
  </div>
</template>

<script>
import Roll from "@/components/Roll";

export default {
  components: {
    Roll
  },
  created() {
    this.$store.dispatch("getNewRolls");
  },
  computed: {
    rolls() {
      return this.$store.state.rolls;
    },
  }
};
</script>

<style scoped lang="scss">
.spinner {
  font-size: 7rem;
  text-align: center;
}
</style>

