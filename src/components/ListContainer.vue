<template>
  <div :is="tag" :name="name" :class="`${item}Container`">
    <slot></slot>
  </div>
</template>

<script>
import Item from "@/components/Item.vue";
import Ingredient from "@/components/Ingredient.vue";
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
  },
  components: {
    Item,
    Ingredient
  }
};
</script>
<style lang="scss" scoped>
.ItemContainer,
.IngredientsContainer {
  display: grid;
  grid-template-columns: 300px;
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
  padding-bottom: 30px;
}

.ItemContainer {
  margin-bottom: 100px;
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 220px);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 250px);
  }
}

.IngredientsContainer {
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 300px);
  }
}
</style>
