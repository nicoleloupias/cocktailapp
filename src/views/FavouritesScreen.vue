<template>
  <div class="Favourites">
    <h1>Your favourites 💖</h1>

    <div class="Container">
      <div class="Cocktails" v-if="favouriteCocktails.length !== 0">
        <h2 class="Heading2">Cocktails</h2>
        <CocktailFilters @update-filter="handleUpdateFilter" />
        <div class="ItemContainer">
          <Item
            v-for="(item, index) in filteredCocktails"
            :key="index"
            :item="item"
            favourite
            class="Item"
          />
        </div>
      </div>
      <div class="Ingredients" v-if="favouriteIngredients.length !== 0">
        <h2 class="Heading2">Ingredients</h2>
        <div class="IngredientsContainer">
          <Ingredient
            v-for="(item, index) in favouriteIngredients"
            :key="index"
            :item="item"
            favourite
            class="Ingredient"
          />
        </div>
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

export default {
  name: "Favourites",
  computed: {
    ...mapState(["favourites"]),
    ...mapGetters(["favouriteCocktails", "favouriteIngredients"]),
    filteredCocktails() {
      console.log("hola");
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
    CocktailFilters
  },
  methods: {
    handleUpdateFilter(filters) {
      this.filters = { ...filters };
    }
  }
};
</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
}

.Container {
  margin: auto;
  background: #ffffff4a;
  width: fit-content;
  padding: 0 30px;
}
.ItemContainer,
.IngredientsContainer {
  display: grid;
  grid-template-columns: fit-content(80%);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 220px);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 250px);
  }
}

.ItemContainer {
  margin-bottom: 100px;
}

.Heading2 {
  background: #404040;
  padding: 20px;
  margin: 0 -30px;
  color: white;
}

.NoFavourites {
  padding: 20px;
  margin-top: 50px;
}
</style>
