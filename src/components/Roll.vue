<template>
  <div>
    <button v-on:click="reroll" :class="computedClass">
    </button>
  </div>
</template>

<script>

import api from "@/api";

export default {
  computed: {
    computedClass() {
      return 'die die-face-' + this.roll.value.toString();
    }
  },
  methods: {
    reroll: function () {
      api.getRolls().then(response => {
        this.roll = response.data[0];
        this.isLoading = false;
      });
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
  background-size: 200px 200px;
  height: 200px;
  width: 200px;
  border: none;
  background-color: white;
}

button:focus {
  outline: none;
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
