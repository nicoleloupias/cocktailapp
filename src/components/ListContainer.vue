<template>
  <div :is="tag" :name="name" :class="`${item}Container`">
    <slot></slot>
  </div>
</template>

<script>
import VueTypes from "vue-types";

export default {
  name: "ListContainer",
  props: {
    tag: VueTypes.string.def("div"),
    name: VueTypes.string.def(""),
    item: VueTypes.string.def("Item")
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.ItemContainer,
.IngredientsContainer {
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 450px;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
  padding: 30px 0;
}

.ItemContainer {
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(2, 220px);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 250px);
  }
}

.IngredientsContainer {
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(1, 300px);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 300px);
  }
}
</style>
