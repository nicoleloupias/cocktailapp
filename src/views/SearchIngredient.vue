<template>
  <div class="Ingredients">
    <h1 class="Title">Search an ingredient</h1>
    <form @submit.prevent="searchHandler">
      <input class="SearchBar" type="text" v-model="query" />
      <button>Search</button>
    </form>
    <div class="ItemContainer">
      <Ingredient
        v-for="(item, index) in ingredients"
        :key="index"
        :item="item"
        class="Item"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Ingredient from "@/components/Ingredient.vue";

export default {
  name: "Ingredients",
  data() {
    return {
      query: "",
      ingredients: []
    };
  },
  components: {
    Ingredient
  },
  methods: {
    async searchHandler() {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${this.query}`
      );
      this.ingredients = response.data.ingredients.map(i => {
        return {
          id: i.idIngredient,
          name: i.strIngredient,
          desc: i.strDescription,
          ingredientType: i.strType
        };
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.Title,
.SearchBar {
  margin-left: 40px;
}
.ItemContainer {
  display: grid;
  grid-template-columns: fit-content(80%);
  justify-content: center;
  margin: 100px 0;
}
</style>
