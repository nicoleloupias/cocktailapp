<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>¡Welcome to The Cocktail app!</h1>
    <p>¿What do you want to search?</p>
    <select @change="optionChangedHandler($event)">
      <option value="">Pick a choice</option>
      <option value="ByName">Search by Name</option>
      <option value="FirstLetter">Search by first letter</option>
      <option value="IngredientsList">See all the ingredients</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    optionChangedHandler(event) {
      this.$router.push({ name: event.target.value });
    }
  }
};
</script>
