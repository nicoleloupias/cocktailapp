<template>
  <div class="ByName">
    <h1 class="Title" v-if="searchType === 'name'">Search by name</h1>
    <h1 class="Title" v-else>Search by the first letter</h1>
    <form @submit.prevent="searchHandler">
      <input class="SearchBar" type="text" v-model="query" />
      <button>Search <font-awesome-icon icon="search" /></button>
    </form>
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

export default {
  name: "SearchBy",
  data() {
    return {
      query: "",
      cocktails: []
    };
  },
  components: {
    Item
  },
  computed: {
    searchType() {
      return this.$route.name === "ByName" ? "name" : "firstletter";
    }
  },
  methods: {
    async searchHandler() {
      const search = this.searchType === "name" ? "s" : "f";
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?${search}=${this.query}`
      );
      console.log(response);
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
.Title,
.SearchBar {
  margin-left: 40px;
}

.ItemContainer {
  display: grid;
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
</style>
