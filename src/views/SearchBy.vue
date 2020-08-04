<template>
  <div class="ByName">
    <h1 class="Title" v-if="searchType === 'name'">Search by name</h1>
    <h1 class="Title" v-else>Search by the first letter</h1>
    <div class="SearchContainer">
      <InstructionCard
        :examples="instructions"
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
      <Item
        v-for="(item, index) in cocktails"
        :key="index"
        :item="item"
        class="Item"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Item from "@/components/Item.vue";
import InstructionCard from "@/components/InstructionCard.vue";

export default {
  name: "SearchBy",
  data() {
    return {
      query: "",
      cocktails: [],
      COCKTAIL_EXAMPLES: ["Margarita", "Piña Colada", "Rose"],
      LETTER_EXAMPLES: ["A", "R", "P"]
    };
  },
  components: {
    Item,
    InstructionCard
  },
  computed: {
    searchType() {
      return this.$route.name === "ByName" ? "name" : "firstletter";
    },
    instructions() {
      return this.searchType === "name"
        ? this.COCKTAIL_EXAMPLES
        : this.LETTER_EXAMPLES;
    }
  },
  methods: {
    async searchHandler() {
      const search = this.searchType === "name" ? "s" : "f";
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?${search}=${this.query}`
      );
      this.cocktails = response.data.drinks.map(drink => {
        return {
          id: drink.idDrink,
          img: drink.strDrinkThumb,
          title: drink.strDrink,
          category: drink.strCategory,
          glass: drink.strGlass
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
  max-width: 1100px;
  margin: auto;
  grid-template-columns: fit-content(80%);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;

  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(3, 220px);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 250px);
  }
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
