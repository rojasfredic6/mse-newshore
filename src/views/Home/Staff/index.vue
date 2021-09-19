<template lang="pug">
.staff
  input-search
  SelectSort
  .main-title 
    img.main-title-background(src="@/assets/images/title-bg.png")
    p Staff 
  .staff-group
    InfoCard(v-for="(card, index) in staffCharacters" :key="card[index]" :characterInfo="card")
</template>

<script>
import InputSearch from "@/components/input.vue";
import InfoCard from "@/components/infoCard.vue";
import SelectSort from "@/components/select.vue";
import { bus } from "@/main.js";
export default {
  name: "Staff",
  components: {
    InputSearch,
    InfoCard,
    SelectSort,
  },
  data() {
    return {
      inputTexto: "",
      sortValue: "",
    };
  },
  inject: ["mseInfo"],
  created() {
    bus.$on("searchInput", (data) => (this.inputTexto = data));
    bus.$on("sortValue", (data) => (this.sortValue = data));
  },
  computed: {
    staffCharacters() {
      let staff;

      if (this.sortValue === "Name") {
        staff = Object.values(this.mseInfo.datos)
          .sort(this.sortByName)
          .filter((s) => s.hogwartsStaff == true);
      } else if (this.sortValue === "Last Name") {
        staff = Object.values(this.mseInfo.datos)
          .sort(this.sortByLastName)
          .filter((s) => s.hogwartsStaff == true);
      } else {
        staff = Object.values(this.mseInfo.datos).filter(
          (s) => s.hogwartsStaff == true
        );
      }

      if (this.inputTexto.length !== 0) {
        staff = staff.filter((s) =>
          s.name.toLowerCase().includes(this.$data.inputTexto.toLowerCase())
        );
      }

      return staff;
    },
  },
  methods: {
    sortByName(a, b) {
      const namA = a.name.toUpperCase();
      const namB = b.name.toUpperCase();

      let comparison = 0;
      if (namA > namB) {
        comparison = 1;
      } else if (namA < namB) {
        comparison = -1;
      }
      return comparison;
    },
    sortByLastName(a, b) {
      const splitA = a.name.split(" ");
      const splitB = b.name.split(" ");
      const namA = splitA[1].toUpperCase();
      const namB = splitB[1].toUpperCase();

      let comparison = 0;
      if (namA > namB) {
        comparison = 1;
      } else if (namA < namB) {
        comparison = -1;
      }
      return comparison;
    },
  },
};
</script>

<style lang="stylus">
.staff
  display grid
  grid-template-columns 1fr
  grid-auto-rows minmax(50px, max-content)
  justify-items center
  align-items start
  @media screen and (min-width: 1440px)
    grid-template-rows 90px 1fr
  & input-search
    z-index 2
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
  & .staff-group
    padding-bottom 20px
    @media screen and (min-width: 1440px)
      display grid
      grid-template-columns repeat(4, 1fr)
      width 100%
      height 100%
      place-content center
      place-items center
</style>
