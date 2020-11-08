<template>
  <h5 class="card-title">{{ roll.value }}</h5>
</template>

<script>
export default {
  props: {
    roll: {
      type: Object,
      required: true
    }
  },
};
</script>
