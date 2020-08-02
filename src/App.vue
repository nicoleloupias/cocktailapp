<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/favourites">Your favourites</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap");

* {
  margin: 0;
}

body {
  background-image: linear-gradient(
    180deg,
    rgba(130, 197, 218, 1) 0%,
    rgba(171, 142, 197, 1) 100%
  );
  min-height: 100vh;
}

#app {
  font-family: "Noto Sans SC", Helvetica, Arial, sans-serif;
  color: #2b2b2b;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(black, 0.1);
}

::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 50, 0.5);
  border-radius: 10px;
  box-shadow: 0 0 0 1px rgba(white, 0.3);
}

h1 {
  font-size: 50px;
  letter-spacing: 2px;
  color: white;
}
#nav {
  padding: 30px;

  a {
    background: rgba(white, 0.2);
    box-shadow: 1px 0px 4px 0px rgba(black, 0.1);
    border-radius: 24px;
    font-family: "Noto Sans SC";
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &.router-link-exact-active {
      color: #2b2b2b;
      text-decoration: underline;
      background: rgba(white, 0.6);
    }

    &:not(:first-child) {
      margin-left: 20px;
    }
    &:hover {
      background: rgba(white, 0.4);
    }
  }
}
</style>
