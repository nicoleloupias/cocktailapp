<template>
  <div class="Item">
    <img class="Img" :src="item.img" />
    <p class="Title">{{ item.title }}</p>
    <p class="Category">{{ item.category }}</p>
    <p class="Glass">{{ item.glass }}</p>
    <button
      class="AddBtn"
      v-if="!favourite"
      @click="favouriteItemHandler"
    >
      Add to favourite
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
  name: "Item",
  props: {
    item: VueTypes.shape({
      id: VueTypes.string,
      img: VueTypes.string,
      title: VueTypes.string.isRequired,
      category: VueTypes.string.isRequired,
      glass: VueTypes.string.isRequired
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
        type: "cocktail"
      });
    },
    deleteFavouriteItemHandler() {
      this.deleteFavourite(this.item);
    }
  }
};
</script>
<style lang="scss" scoped>
.Item {
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

  .Img {
    border: 1px solid rgba(white, 0.4);
    width: 150px;
  }

  .Title {
    font-weight: bold;
    font-size: 25px;
    text-align: center;
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
