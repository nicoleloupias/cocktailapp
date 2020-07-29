<template>
  <div class="ByName">
    <h1 v-if="searchType === 'name'">Search by name</h1>
    <h1 v-else>Search by the first letter</h1>
    <form @submit.prevent="searchHandler">
      <input type="text" v-model="query" />
      <button>Search</button>
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
      console.log(this.$route);
      return this.$route.name === "ByName" ? "name" : "firstletter";
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
.ItemContainer {
  margin: auto;
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;

  .Item {
    margin-left: 20px;
  }
}
</style>
