<template>
  <div class="Favourites">
    <h1 class="Title">Your favourites 💖</h1>
    <div class="Container">
      <div class="Cocktails" v-if="favouriteCocktails.length !== 0">
        <h2 class="Heading2">Cocktails</h2>
        <CocktailFilters @update-filter="handleUpdateFilter" />
        <ListContainer tag="transition-group" name="list">
          <Item
            v-for="(item, index) in filteredCocktails"
            :key="index"
            :item="item"
            favourite
            class="Item"
          />
        </ListContainer>
      </div>
      <div class="Ingredients" v-if="favouriteIngredients.length !== 0">
        <h2 class="Heading2">Ingredients</h2>
        <ListContainer tag="transition-group" name="list" item="Ingredients">
          <Ingredient
            v-for="(item, index) in favouriteIngredients"
            :key="index"
            :item="item"
            favourite
            class="Ingredient"
          />
        </ListContainer>
      </div>
      <div
        class="NoFavourites"
        v-if="
          favouriteIngredients.length === 0 && favouriteCocktails.length === 0
        "
      >
        You don't have any favourites yet!
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Item from "@/components/Item.vue";
import Ingredient from "@/components/Ingredient.vue";
import CocktailFilters from "@/components/CocktailFilters.vue";
import ListContainer from "@/components/ListContainer.vue";

export default {
  name: "Favourites",
  computed: {
    ...mapState(["favourites"]),
    ...mapGetters(["favouriteCocktails", "favouriteIngredients"]),
    filteredCocktails() {
      const cocktails = [...this.favouriteCocktails];
      return cocktails.sort((a, b) => {
        if (this.filters.orderBy == "ASC") {
          return a.title - b.title;
        } else if (this.filters.orderBy == "DESC") {
          return b.title - a.title;
        }
        return 0;
      });
    }
  },
  data() {
    return {
      filters: {
        orderBy: ""
      }
    };
  },
  components: {
    Item,
    Ingredient,
    CocktailFilters,
    ListContainer
  },
  methods: {
    handleUpdateFilter(filters) {
      this.filters = { ...filters };
    }
  }
};
</script>
<style lang="scss" scoped>
.Title {
  text-align: center;
}

.Container {
  margin: auto;
  margin-top: 50px;
  width: 70%;

  @media screen and (min-width: 1200px) {
    width: fit-content;
  }
}

.Ingredients,
.Cocktails,
.NoFavourites {
  background: rgba(white, 0.3);
  padding: 0 30px;
  border-radius: 24px;
}

.Heading2 {
  background: #404040;
  padding: 20px;
  margin: 0 -30px;
  margin-bottom: 30px;
  color: white;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

.NoFavourites {
  padding: 20px;
  margin-top: 50px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
}
.list-enter-active {
  transition-delay: 0.2s;
}
</style>
