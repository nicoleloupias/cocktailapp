<template>
  <div class="Ingredients">
    <h1 class="Title">Search an ingredient</h1>
    <div class="SearchContainer">
      <InstructionCard
        :examples="INGREDIENTS_EXAMPLES"
        class="InstructionCard"
      ></InstructionCard>
      <form @submit.prevent="searchHandler">
        <input
          class="SearchBar"
          type="text"
          v-model="query"
          placeholder="Search"
        />
        <button class="SearchBtn"><font-awesome-icon icon="search" /></button>
      </form>
    </div>
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
import InstructionCard from "@/components/InstructionCard.vue";

export default {
  name: "Ingredients",
  data() {
    return {
      query: "",
      ingredients: [],
      INGREDIENTS_EXAMPLES: ["Vodka", "Rum", "Gin"]
    };
  },
  components: {
    Ingredient,
    InstructionCard
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
  margin-bottom: 40px;
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
  width: 200px;
  padding: 12px 24px;
  background-color: rgba(white, 0.1);
  transition: transform 0.3s ease-in-out;
  font-size: 14px;
  line-height: 18px;
  border-radius: 50px;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  box-shadow: 1px 0px 4px 0px rgba(black, 0.1);

  &::placeholder {
    color: #2b2b2b;
  }
  &:hover,
  &:focus {
    padding: 12px 24px;
    outline: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid white;
    border-radius: 0;
  }

  @media screen and (min-width: 700px) {
    width: 340px;
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
.SearchContainer {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }
}
.InstructionCard {
  width: 200px;
  margin-bottom: 30px;

  @media screen and (min-width: 700px) {
    margin-bottom: 0px;
    margin-right: 20px;
  }
}
</style>
