<template lang="pug">
.students
  input-search
  .main-title 
    img.main-title-background(src="@/assets/images/title-bg.png")
    p Hufflepuff 
  .Students-group
    house(v-for="h in 4" :key="h")
</template>

<script>
import InputSearch from "@/components/input.vue";
export default {
  name: "Students",
  components: {
    InputSearch,
  },
};
</script>

<style lang="stylus">
.students
  display grid
  grid-template-columns 1fr
  grid-auto-rows minmax(50px, max-content)
  justify-items center
  align-items start
  @media screen and (min-width: 1440px)
    grid-template-rows 90px 1fr
  & .main-title
    display grid
    position relative
    place-items center
    font-family: Grenze Gotisch;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 53px;
    text-align: center;
    color: #120000;
    animation float 12s ease-in-out infinite
    @media screen and (min-width: 1440px)
      display none
    .main-title-background
      width 278px
      height 96px
      @media screen and (min-width: 768px)
        width 634px
        height 219px
    & p
      position absolute
      top 20px
      @media screen and (min-width: 768px)
        font-size 72px
        top 80px
  & .students-group
    @media screen and (min-width: 1440px)
      display grid
      grid-template-columns repeat(4, 1fr)
      width 100%
      height 100%
      place-content center
      place-items center
</style>
