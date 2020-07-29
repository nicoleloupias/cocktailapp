<template>
  <div class="Item">
    <img :src="item.img" class="Img" />
    <p class="Title">{{ item.title }}</p>
    <p class="Category">{{ item.category }}</p>
    <p class="Glass">{{ item.glass }}</p>
    <button @click="favouriteItemHandler">Add to favourite</button>
  </div>
</template>

<script>
import VueTypes from "vue-types";
import { mapMutations } from "vuex";
export default {
  name: "Item",
  props: {
    item: VueTypes.shape({
      img: VueTypes.string,
      title: VueTypes.string.isRequired,
      category: VueTypes.string.isRequired,
      glass: VueTypes.string.isRequired
    }).loose
  },
  methods: {
    ...mapMutations(["addNewFavourite"]),
    favouriteItemHandler() {
      this.addNewFavourite(this.item);
    }
  }
};
</script>
<style lang="scss" scoped>
.Item {
  p {
    margin: 10px;
  }
  .Img {
    width: 200px;
  }
  .Title {
    font-weight: bold;
    font-size: 25px;
  }
}
</style>
