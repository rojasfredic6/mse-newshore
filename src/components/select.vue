<template lang="pug">
select.sortBy(name="Sort by", v-model="sortBy", @change="sendSort()")
  option(value="") Sort by
  option Name
  option Last Name
</template>

<script>
import { bus } from "@/main.js";

export default {
  name: "Select",
  data() {
    return {
      sortBy: "",
    };
  },
  methods: {
    sendSort() {
      bus.$emit("sortValue", this.sortBy);
    },
  },
};
</script>

<style lang="stylus">

select
  outline none
  font-family: Grenze;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-image: url('../assets/images/papel-viejo-vintage-envejecido_34266-957.png')
  background-position center
  background-repeat no-repeat
  background-size 110% 115%
  &::after
    content: "";
    width: 0.8em;
    height: 0.5em;
    background-color: #777;
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
    & option
      outline none
</style>
