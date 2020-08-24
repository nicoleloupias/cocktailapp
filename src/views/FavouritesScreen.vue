<template>
  <div class="Favourites">
    <h1 class="Title">Your favourites 💖</h1>
    <div class="Container">
      <div
        class="Cocktails"
        v-if="favouriteCocktails.length !== 0"
      >
        <h2 class="Heading2">Cocktails</h2>
        <CocktailFilters
          @update-filter="handleUpdateFilter"
        />
        <ListContainer
          v-if="filteredCocktails.length !== 0"
          tag="transition-group"
          name="list"
        >
          <Item
            v-for="(item, index) in filteredCocktails"
            :key="index"
            :item="item"
            favourite
            class="Item"
          />
        </ListContainer>
        <div class="NoCocktails" v-else>
          <p>
            You don't have any cocktail with those
            features.
          </p>
        </div>
      </div>
      <div
        class="Ingredients"
        v-if="favouriteIngredients.length !== 0"
      >
        <h2 class="Heading2">Ingredients</h2>
        <ListContainer
          tag="transition-group"
          name="list"
          item="Ingredients"
        >
          <Ingredient
            v-for="(item,
            index) in favouriteIngredients"
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
          favouriteIngredients.length === 0 &&
            favouriteCocktails.length === 0
        "
      >
        <p>You don't have any favourites yet!</p>
        <p>
          Go to the Home section and search some
          cocktails and ingredients first. ✨
        </p>
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
    ...mapGetters([
      "favouriteCocktails",
      "favouriteIngredients"
    ]),
    filteredCocktails() {
      const cocktails = [...this.favouriteCocktails];
      return cocktails
        .sort((a, b) => {
          if (this.filters.orderBy == "ASC") {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0;
          } else if (this.filters.orderBy == "DESC") {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
          }
          return 0;
        })
        .filter(cocktail => {
          if (this.filters.glassType) {
            return (
              cocktail.glass.toLowerCase() ===
              this.filters.glassType.toLowerCase()
            );
          }
          return cocktail;
        });
    }
  },
  data() {
    return {
      filters: {
        orderBy: "",
        glassType: ""
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
  width: 90%;

  @media screen and (min-width: 700px) {
    width: 70%;
  }

  @media screen and (min-width: 1200px) {
    width: fit-content;
  }
}

.Ingredients,
.Cocktails {
  background: rgba(white, 0.3);
  padding: 0 30px;
  border-radius: 24px;
}

.NoFavourites {
  background-color: rgba(#f9d1a9, 0.8);
  border-radius: 24px;
  padding: 20px;
  box-shadow: 1px 0px 4px 0px rgba(black, 0.1);
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

.NoCocktails {
  padding: 30px;
  margin-bottom: 50px;

  @media screen and (min-width: 700px) {
    width: 450px;
  }
  @media screen and (min-width: 1200px) {
    width: 1000px;
  }
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
