<template>
  <div class="container">
    <div class="row">
      <div v-for="roll in rolls" :key="roll" lass="col-md-4">
        <Roll :roll="roll"/>
      </div>
    </div>
  </div>
</template>

<script>
import Roll from '@/components/Roll.vue'

export default {
  components: {
    Roll
  },
  props: {
    rolls: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
.spinner {
  font-size: 7rem;
  text-align: center;
}
</style>

