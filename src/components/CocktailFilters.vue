<template>
  <div class="CocktailFilters">
    <select v-model="filters.orderBy"
      >Order by
      <option
        v-for="(option, index) in optionsOrderBy"
        :key="index"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
const initialFilters = {
  orderBy: ""
};
export default {
  name: "CocktailFilters",
  data() {
    return {
      optionsOrderBy: [
        { value: "", text: "Order by" },
        { value: "ASC", text: "Asc" },
        { value: "DESC", text: "Desc" }
      ],
      filters: { ...initialFilters }
    };
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
<style lang="scss" scoped></style>
