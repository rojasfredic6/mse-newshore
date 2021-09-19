<template lang="pug">
.home
  .home-header
    font-awesome-icon.menu(:icon="['fas', 'bars']")
    img.header-title(src="../../assets/images/c25ec717bf8fc35288b79d0172f509a0.png")
    img.header-logo(src="../../assets/images/Hogwarts_Main_Crest.png")
    .header-nav
      ul.header-nav-list
        li 
          p Houses
        li 
          p Staff
        li
          p All Characters
        li
          p Repo Info.
  .home-main
    router-view
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="stylus">
@import '../../assets/style/_variables.styl';

.home
  display grid
  width 100vw
  min-height 100vh
  grid-template-rows 260px  minmax((calc(100% - 260px)), max-content)
  grid-template-columns 1fr
  grid-template-areas "header""main"
  @media screen and (min-width: 768px)
    grid-template-rows 505px  minmax((calc(100% - 505px)), max-content)
  @media screen and (min-width: 1440px)
    grid-template-rows 393px minmax((calc(100% - 393px)), max-content)
  & .home-header
    display grid
    grid-area header
    position relative
    justify-items center
    padding-top 15px
    & .header-nav
      visibility hidden
      width 100%
      display grid
      & .header-nav-list
        display grid
        grid-template-columns repeat(4, 1fr)
        list-style none
        font-family: Grenze Gotisch;
        font-style: normal;
        font-weight: normal;
        font-size: 36px;
        line-height: 53px;
        text-align: center;
        color: #120000;
        place-items center
        & li
          display grid
          position relative
          place-self stretch
          background-image url('../../assets/images/title-bg.png')
          background-position center
          background-repeat no-repeat
          background-size contain
          animation float 12s ease-in-out infinite
          & p
            place-self center
            position absolute
            top 10px
      @media screen and (min-width: 1440px)
        visibility visible
    @media screen and (min-width: 1440px)
      grid-template-rows 297px minmax((calc(100% - 297px)), max-content)
      grid-template-columns 1fr
    & .menu
      width 25px
      height 25px
      top 14px
      left 11px
      position absolute
      color white
      @media screen and (min-width: 768px)
        width 57px
        height 57px
        top 39px
        left 33px
      @media screen and (min-width: 1440px)
        visibility hidden
    & .header-title
      width 275px
      height 66px
      animation float 8s ease-in-out infinite
      transform translateY(0px)
      @media screen and (min-width: 768px)
        width 627px
        height 150px
      @media screen and (min-width: 1440px)
        width 683px
        height 167px
        place-self center
    & .header-logo
      width 126px
      height 126px
      filter drop-shadow(0px 6px 4px #000000);
      @media screen and (min-width: 768px)
        width 287px
        height 288px
      @media screen and (min-width: 1440px)
        position absolute
        top 34px
        left 51px
        width 263px
        height 263px
  & .home-main
    display grid
    grid-area main
</style>
