<template>
  <div>
    <h1 class="Title">
      Search by
      {{
        searchType === "name"
          ? "name"
          : "the first letter"
      }}
    </h1>
    <div class="SearchContainer">
      <InstructionCard
        v-if="searchType === 'name'"
        :examples="instructions"
        class="InstructionCard"
      />
      <InstructionCard v-else class="InstructionCard">
        <template #title>
          <p>
            Click on one of these letters
          </p>
        </template>
      </InstructionCard>
      <form
        @submit.prevent="searchName"
        v-if="searchType === 'name'"
      >
        <input
          class="SearchBar"
          type="text"
          v-model="query"
          placeholder="Search"
        />
        <button class="SearchBtn">
          <font-awesome-icon icon="search" />
        </button>
      </form>
      <LettersContainer
        class="LettersContainer"
        @letterClicked="searchFirstLetter"
        v-else
      />
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
import LettersContainer from "@/components/LettersContainer.vue";

export default {
  name: "SearchBy",
  data() {
    return {
      query: "",
      cocktails: [],
      COCKTAIL_EXAMPLES: [
        "Margarita",
        "Piña Colada",
        "Rose"
      ],
      LETTER_EXAMPLES: ["A", "R", "P"]
    };
  },
  components: {
    Item,
    InstructionCard,
    LettersContainer
  },
  computed: {
    searchType() {
      return this.$route.name === "ByName"
        ? "name"
        : "firstletter";
    },
    instructions() {
      return this.searchType === "name"
        ? this.COCKTAIL_EXAMPLES
        : this.LETTER_EXAMPLES;
    }
  },
  methods: {
    searchFirstLetter(letter) {
      this.getData("f", letter);
    },
    searchName() {
      this.getData("s", this.query);
    },
    async getData(searchType, query) {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?${searchType}=${query}`
      );
      this.handleData(response);
    },
    handleData(response) {
      this.cocktails = response.data.drinks.map(
        drink => {
          return {
            id: drink.idDrink,
            img: drink.strDrinkThumb,
            title: drink.strDrink,
            category: drink.strCategory,
            glass: drink.strGlass
          };
        }
      );
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
  border: 0;
  transition: all 0.3s ease-in-out;
  box-shadow: 1px 0px 4px 0px rgba(black, 0.1);

  &::placeholder {
    color: #2b2b2b;
  }
  &:hover,
  &:focus {
    padding: 12px 24px;
    outline: 0;
    border-radius: 0;
    box-shadow: 1px 0px 4px 0px rgba(black, 0.3);
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

  @media screen and (min-width: 800px) {
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
.LettersContainer {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 300px;

  @media screen and (min-width: 700px) {
    max-width: 500px;
  }
}
</style>
