<template lang="pug">
.house-container
  .house-container-logo
    img.house-logo(src="@/assets/images/Hufflepuf.png")
  .house-container-info
    p.quantity 100
    p.type Members
  p Hufflepuff
</template>

<script>
export default {
  name: "House",
};
</script>

<style lang="stylus">
.house-container
  display grid
  min-width 163px
  min-height 163px
  position relative
  justify-items center
  z-index 0
  @media screen and (min-width: 768px)
    min-width 371px
    min-height 371px
  @media screen and (min-width: 1440px)
    max-width 301px
    max-height 301px
  & p
    font-family Grenze;
    font-style normal;
    font-weight normal;
    font-size 36px;
    line-height 53px;
    text-align center;
    color #FFFFFF;
    text-shadow 5px 3px 1px rgba(0, 0, 0, 0.83)
    @media screen and (min-width: 768px)
      font-size 72px
      line-height 107px
  & .house-container-logo
    width 163px
    height 163px
    background-color #E3A900
    border-radius 100%
    @media screen and (min-width: 768px)
      width 371px
      height 371px
    @media screen and (min-width: 1440px)
      max-width 301px
      max-height 301px
    & .house-logo
      width 163px
      height 163px
      border-radius 100%
      @media screen and (min-width: 768px)
        width 371px
        height 371px
      @media screen and (min-width: 1440px)
        max-width 301px
        max-height 301px

.house-container-info
  width 163px
  height 163px
  display none
  border-radius 100%
  position absolute
  z-index 10
  @media screen and (min-width: 768px)
    width 371px
    height 371px
  @media screen and (min-width: 1440px)
    max-width 301px
    max-height 301px
  & .quantity
    font-family: Grenze;
    font-style: normal;
    font-weight: normal;
    font-size: 77px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 3px 2px rgba(0, 0, 0, 0.99);
    @media screen and (min-width: 768px)
      font-size 144px
  & .type
    font-family: Grenze;
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 3px 2px #000000;

    @media screen and (min-width: 768px)
      font-size 64px

.house-container:hover
  & .house-container-info
    background-color rgba(100,99,99,.76)
    display grid
    align-content center
</style>
