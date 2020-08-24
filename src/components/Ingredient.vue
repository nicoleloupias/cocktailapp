<template>
  <div class="Ingredient">
    <p class="Title">{{ item.title }}</p>
    <p class="Desc">{{ item.desc }}</p>
    <button
      class="AddBtn"
      v-if="!favourite"
      @click="favouriteItemHandler"
    >
      Add to favourites
      <font-awesome-icon icon="heart" />
    </button>
    <button
      class="DeleteBtn"
      v-if="favourite"
      @click="deleteFavouriteItemHandler"
    >
      Delete <font-awesome-icon icon="trash" />
    </button>
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
      title: VueTypes.string.isRequired,
      desc: VueTypes.string.isRequired,
      ingredientType: VueTypes.string.isRequired
    }).loose,
    favourite: VueTypes.bool.def(false)
  },
  methods: {
    ...mapMutations([
      "addNewFavourite",
      "deleteFavourite"
    ]),
    favouriteItemHandler() {
      this.addNewFavourite({
        ...this.item,
        type: "ingredient"
      });
    },
    deleteFavouriteItemHandler() {
      this.deleteFavourite(this.item);
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
    margin-bottom: 30px;
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

  .AddBtn,
  .DeleteBtn {
    padding: 12px;
    border-radius: 24px;
    box-shadow: 1px 0px 4px 0px rgba(black, 0.1);
    font-size: 13px;
    border: 2px solid transparent;
    cursor: pointer;
    outline: 0;
    margin-top: auto;
    transition: all 0.2s ease-in;
  }
  .AddBtn {
    background-color: #dde8fd;

    &:hover {
      color: #2b2b2b;
      background: transparent;
      border: 2px solid #dde8fd;
    }
  }
  .DeleteBtn {
    background-color: #d68686;

    &:hover {
      color: #2b2b2b;
      background: transparent;
      border: 2px solid #d68686;
    }
  }
}
</style>
