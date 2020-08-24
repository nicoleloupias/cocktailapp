<template>
  <div class="home">
    <h1 class="Title">The Cocktail app 🍹✨</h1>
    <p class="Subtitle">
      Welcome! What are you looking for?
    </p>
    <div class="Options">
      <button @click="optionChangedHandler('ByName')">
        Search by name
      </button>
      <button
        @click="optionChangedHandler('FirstLetter')"
      >
        Search by the first letter
      </button>
      <button
        @click="
          optionChangedHandler('SearchIngredient')
        "
      >
        Search an ingredient
      </button>
    </div>
    <img src="../assets/logo.png" class="Logo" />
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
  margin: auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 80px minmax(200px, 1fr);
  justify-content: center;
  max-width: 90%;

  @media screen and (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .Logo {
    width: 100%;
    grid-column: 2/-1;
    grid-row: 1/-1;
    justify-self: flex-end;
    align-self: flex-end;

    @media screen and (max-width: 800px) {
      margin: 20px 0;
    }
  }
  .Title {
    grid-column: 1/-1;
    grid-row: 1;
    align-self: flex-start;
    justify-self: flex-start;
    @media screen and (max-width: 800px) {
      margin-bottom: 20px;
      justify-self: center;
    }
  }
  .Subtitle {
    font-weight: bold;
    grid-column: 1/3;
    justify-self: flex-start;
    grid-row: 2/-1;
  }
  .Options {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    grid-column: 1/2;
    grid-row: 2/-1;
    width: 250px;

    @media screen and (max-width: 800px) {
      margin-top: 0;
    }

    button {
      background: #dde8fd;
      box-shadow: 1px 0px 4px 0px rgba(black, 0.1);
      color: #2b2b2b;
      border-radius: 24px;
      font-size: 15px;
      font-family: "Raleway";
      border: 0;
      padding: 13px 20px;
      margin-top: 20px;
      cursor: pointer;
      transition: all 0.2s ease-in;
      outline: 0;

      &:hover {
        background: rgba(white, 0.4);
      }
    }
  }
}
</style>
