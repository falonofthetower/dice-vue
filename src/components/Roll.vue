<template>
  <div>
    <div :class="computedClass">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    computedClass() {
      return 'die die-face-' + this.roll.value.toString();
    }
  },
  props: {
    roll: {
      type: Object,
      required: true
    }
  },
};
</script>

<style scoped lang="scss">

.die {
  background-repeat: no-repeat;
  background-position: center; /* Center the image */
  height: 200px;
}

.die-face-1 {
  background-image: url("./../../public/die_face_1.svg");
}

.die-face-2 {
  background-image: url("./../../public/die_face_2.svg");
}

.die-face-3 {
  background-image: url("./../../public/die_face_2.svg");
}

.die-face-4 {
  background-image: url("./../../public/die_face_4.svg");
}

.die-face-5 {
  background-image: url("./../../public/die_face_5.svg");
}

.die-face-6 {
  background-image: url("./../../public/die_face_6.svg");
}

</style>
