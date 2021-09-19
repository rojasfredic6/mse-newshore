<template lang="pug">
#app
  router-view
</template>

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
