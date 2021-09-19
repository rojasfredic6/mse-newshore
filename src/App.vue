<template lang="pug">
#app
  router-view
</template>

<script>
import { api } from "@/api/index.js";

export default {
  name: "App",
  data() {
    return {
      datos: "",
    };
  },
  created() {
    api().then((response) => (this.datos = response.data));
  },
  provide() {
    const mseInfo = {};

    Object.defineProperty(mseInfo, "datos", {
      enumerable: true,
      get: () => this.datos,
    });

    return { mseInfo };
  },
};
</script>

<style lang="stylus">
@import './assets/style/_variables.styl';

*
  margin 0
  padding 0
  box-sizing border-box
  // border 1px solid tomato
#app
  width 100%
  height 100vh
  background-image url('./assets/images/thumb-1920-1102284.jpg')
  background-position center
  background-repeat no-repeat
  background-size cover
  border-radius 10px
  overflow scroll
</style>
