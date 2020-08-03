<template>
  <div class="Ingredients">
    <h1 class="Title">Search an ingredient</h1>
    <form @submit.prevent="searchHandler">
      <input
        class="SearchBar"
        type="text"
        v-model="query"
        placeholder="Search"
      />
      <button class="SearchBtn"><font-awesome-icon icon="search" /></button>
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
          title: i.strIngredient,
          desc: i.strDescription,
          ingredientType: i.strType
        };
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.Title {
  margin-left: 40px;
}
.ItemContainer {
  display: grid;
  grid-template-columns: fit-content(80%);
  justify-content: center;
  margin: 40px 0;
}
.Item {
  width: 300px;
}

.SearchBar {
  width: 320px;
  margin-top: 40px;
  margin-left: 40px;
  padding: 12px 24px;
  background-color: transparent;
  transition: transform 0.3s ease-in-out;
  font-size: 14px;
  line-height: 18px;
  border-radius: 50px;
  border: 1px solid #2b2b2b;
  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: #e5e5e5;
    font-weight: bold;
  }
  &:hover,
  &:focus {
    padding: 12px 24px;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #2b2b2b;
    border-radius: 0;
  }
}

.SearchBtn {
  margin-left: -40px;
  background: transparent;
  outline: 0;
  cursor: pointer;
  border: 0;
  color: #2b2b2b;
}
</style>
