<template lang="pug">
.houses
  .main-title 
    img.main-title-background(src="@/assets/images/title-bg.png")
    p Houses 
  .houses-group
    house(v-for="(h,index) in housesAndMembersCount" :key="index" :houseData="h")
</template>

<script>
import InputSearch from "@/components/input.vue";
import House from "@/components/house.vue";
export default {
  name: "Houses",
  components: {
    InputSearch,
    House,
  },
  inject: ["mseInfo"],
  computed: {
    housesAndMembersCount() {
      let Gryffindor = Object.values(this.mseInfo.datos).filter(
        (h) => h.house === "Gryffindor"
      );
      let Slytherin = Object.values(this.mseInfo.datos).filter(
        (h) => h.house === "Slytherin"
      );
      let Hufflepuff = Object.values(this.mseInfo.datos).filter(
        (h) => h.house === "Hufflepuff"
      );
      let RavenClaw = Object.values(this.mseInfo.datos).filter(
        (h) => h.house === "Ravenclaw"
      );

      return [Gryffindor, Slytherin, Hufflepuff, RavenClaw];
    },
  },
};
</script>

<style lang="stylus">
.houses
  display grid
  grid-template-columns 1fr
  grid-auto-rows minmax(50px, max-content)
  justify-items center
  align-items start
  @media screen and (min-width: 1440px)
    grid-template-rows 1fr
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
  & .houses-group
    @media screen and (min-width: 1440px)
      display grid
      grid-template-columns repeat(4, 1fr)
      width 100%
      height 100%
      place-content center
      place-items center
</style>
