<template lang="pug">
.search
  .background-search
  input.input-search(type="text", placeholder="Search")
</template>

<script>
export default {
  name: "Input",
};
</script>

<style lang="stylus">

.search
  display grid
  width 80%
  height 36px
  position relative
  z-index 1
  @media screen and (min-width: 768px)
    height 82px
  @media screen and (min-width: 1440px)
    width 50%
  & .background-search
    width 100%
    height 100%
    background #CACACA
    border-radius 5px
    filter blur(10px)
  & .input-search
    width 100%
    height 100%
    background rgba(0,0,0,0)
    border-top-style hidden
    border-left-style hidden
    border-right-style hidden
    border-bottom 1px solid white
    outline none
    position absolute
    z-index 5
    color #FFFFFF
    font-family: Grenze;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.59);
    @media screen and (min-width: 768px)
      font-size 36px
      line-height 53px

.input-search::placeholder
  color white
  font-family: Grenze;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.59);
  @media screen and (min-width: 768px)
    font-size 36px
    line-height 53px
</style>
