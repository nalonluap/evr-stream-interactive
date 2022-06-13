<script>
export default {
  components: {},

  props: {
    words: Array,
  },

  data() {
    return {
      visible: true
    };
  },

  created() {
    // format the value using the column's 'formatValue' method
  
  },

  methods: {
    
  },
};
</script>

<template>
  <div v-for='index in 25' :key='index'>
    {{ "A" }}
  </div>
</template>

<style lang="scss" scoped>
div {
  user-select: none;
  width: 60px;
  height: 60px;
  border: 1px solid gray;
  color: rgb(222, 219, 219);
  font-size: 2rem;
  display: grid;
  place-items: center;
}
div.animate {
  animation: scale 0.1s;
  animation-iteration-count: 1;
}
div.wiggle {
  animation: wiggle 0.3s;
  animation-iteration-count: 3;
}
div.flip {
  animation: flip 0.5s;
  animation-iteration-count: 1;
}

@keyframes wiggle {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes flip {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
