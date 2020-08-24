<template>
  <div class="CocktailFilters">
    <select v-model="filters.orderBy" class="Select"
      >Order by
      <option
        v-for="(option, index) in optionsOrderBy"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <select v-model="filters.glassType" class="Select">
      <option
        v-for="(option, index) in glassesTypes"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}</option
      >
    </select>
  </div>
</template>

<script>
import axios from "axios";
const initialFilters = {
  orderBy: "",
  glassType: ""
};
export default {
  name: "CocktailFilters",
  data() {
    return {
      optionsOrderBy: [
        { value: "", text: "Order by alphabetically" },
        { value: "ASC", text: "Ascending" },
        { value: "DESC", text: "Descending" }
      ],
      filters: { ...initialFilters },
      glassesTypes: []
    };
  },
  async created() {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list"
    );
    this.glassesTypes = [
      { value: "", text: "Filter by glass type" },
      ...response.data.drinks.map(glass => {
        return {
          value: glass.strGlass,
          text: glass.strGlass
        };
      })
    ];
  },
  watch: {
    filters: {
      handler(value) {
        this.$emit("update-filter", value);
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
.CocktailFilters {
  .Select {
    padding: 12px 24px;
    background-color: #ffffff42;
    font-size: 14px;
    line-height: 18px;
    border-radius: 50px;
    border: 1px solid white;
    margin-left: 10px;
    &:focus {
      outline: 0;
    }
    @media screen and (max-width: 700px) {
      margin-bottom: 10px;
    }
  }
}
</style>
