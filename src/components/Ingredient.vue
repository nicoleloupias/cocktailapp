<template>
  <div class="Ingredient">
    <p class="Title">{{ item.name }}</p>
    <p class="Desc">{{ item.desc }}</p>
    <button v-if="!favourite" @click="favouriteItemHandler">
      Add to favourite
    </button>
    <button v-if="favourite" @click="deleteFavouriteItemHandler">Delete</button>
  </div>
</template>

<script>
import VueTypes from "vue-types";
import { mapMutations } from "vuex";
export default {
  name: "Ingredient",
  props: {
    item: VueTypes.shape({
      id: VueTypes.string,
      name: VueTypes.string.isRequired,
      desc: VueTypes.string.isRequired,
      ingredientType: VueTypes.string.isRequired
    }).loose,
    favourite: VueTypes.bool.def(false)
  },
  methods: {
    ...mapMutations(["addNewFavourite", "deleteFavourite"]),
    favouriteItemHandler() {
      this.addNewFavourite({ ...this.item, type: "ingredient" });
    },
    deleteFavouriteItemHandler() {
      this.deleteFavourite(this.item.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.Ingredient {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(white, 0.2);
  box-shadow: 1px 0px 4px 0px rgba(black, 0.1);
  padding: 30px;
  border-radius: 24px;

  p {
    margin: 10px;
  }
  .Title {
    font-weight: bold;
    font-size: 25px;
  }
  .Desc {
    line-height: 1.7;
    height: 300px;
    width: 250px;
    overflow: auto;
    padding: 10px;
  }
}
</style>
