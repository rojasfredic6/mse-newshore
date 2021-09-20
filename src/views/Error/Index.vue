<template lang="pug">
.Error-container
  img(src="@/assets/images/mapa-del-merodeador.png" alt="mapa del meriodador")
  p Did you got lost?!
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style lang="stylus">
.Error-container
  width 100%
  height 100%
  display grid
  position relative
  place-items center
  padding-bottom 20px
  & img
    height 500px
  & p
    position absolute
    font-family: Grenze Gotisch;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    color: #120000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.59);
    @media screen and (min-width: 768px)
      background-image url('../../assets/images/title-bg.png')
      background-position center
      background-repeat no-repeat
      background-size 100%
      padding 50px
</style>
