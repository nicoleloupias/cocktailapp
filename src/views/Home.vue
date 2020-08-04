<template>
  <div class="home">
    <img src="../assets/logo.png" class="Logo" />
    <h1>The Cocktail app 🍹✨</h1>
    <div class="Options">
      <p>Welcome! What are you looking for?</p>
      <button @click="optionChangedHandler('ByName')">Search by name</button>
      <button @click="optionChangedHandler('FirstLetter')">
        Search by the first letter
      </button>
      <button @click="optionChangedHandler('SearchIngredient')">
        Search an ingredient
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    optionChangedHandler(route) {
      this.$router.push({ name: route });
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  max-width: 500px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

.Logo {
  max-width: 400px;
  width: 100%;
}
h1 {
  font-size: 40px;
}

.Options {
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  button {
    background: rgba(white, 0.2);
    box-shadow: 1px 0px 4px 0px rgba(black, 0.1);
    color: #2b2b2b;
    border-radius: 24px;
    font-size: 15px;
    font-family: "Raleway";
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in;
    outline: 0;

    &:hover {
      background: rgba(white, 0.4);
    }
  }
}
</style>
