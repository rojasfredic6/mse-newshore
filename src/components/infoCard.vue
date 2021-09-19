<template lang="pug">
.infoCard-container
    h1.infoCard-title {{ characterInfo.hogwartsStudent ? 'Student Information' : 'Character Information'}}
    .infoCard-picture
      img.picture(:src="characterInfo.image")
    .infoCard-Description
      ul.infoCard-nav
        li 
          p Name
            br
            span.info {{ characterInfo.name }}
        li 
          p Specie
            br
            span.info {{ characterInfo.species }}
        li 
          p Ascendency
            br
            span.info {{ characterInfo.ancestry || "Unknown" }}
        li
          p Patronus
            br
            span.info {{ characterInfo.patronus || "Unknown"}}
</template>

<script>
export default {
  name: "Card",
  props: {
    characterInfo: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="stylus">
.infoCard-container
  width 340px
  height 340px
  background-image url('../assets/images/papel-viejo-vintage-envejecido_34266-957.png')
  background-position center
  background-repeat no-repeat
  background-size 100% 100%
  display grid
  grid-template-areas "title title""picture description"
  grid-template-columns 55% 45%
  grid-template-rows 90px 1fr
  @media screen and (min-width: 768px)
    grid-template-rows 180px 1fr
    width 693px
    height 693px
  @media screen and (min-width: 1440px)
    grid-template-rows 90px 1fr
    width 340px
    height 340px
  & .infoCard-title
    grid-area title
    font-family: Grenze Gotisch;
    font-style: italic;
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    color: #000000;
    display grid
    align-items end
    @media screen and (min-width: 760px)
      font-size 50px
    @media screen and (min-width: 1440px)
      font-size 25px
  & .infoCard-picture
    grid-area picture
    display grid
    place-items center
    & .picture
      width 130px
      height 173px
      box-shadow inset 0px 4px 4px rgba(0, 0, 0, 0.48)
      border-radius 10px
      @media screen and (min-width: 768px)
        width 258px
        height 351px
      @media screen and (min-width: 1440px)
        width 130px
        height 173px
  & .infoCard-Description
    grid-area description
    display grid
    justify-items start
    & .infoCard-nav
      display grid
      list-style none
      font-family: Grenze Gotisch;
      font-style: italic;
      font-weight: bold;
      font-size: 18px;
      text-align: left;
      color: #000000;
      @media screen and (min-width: 760px)
        font-size 30px
      @media screen and (min-width: 1440px)
        font-size 18px
      & .info
        font-size 16px
        font-weight 300 !important
        @media screen and (min-width: 760px)
          font-size 26px
          font-style normal
          text-indent 5px
        @media screen and (min-width: 760px)
          font-size 16px
          font-style normal
          text-indent 5px
</style>
