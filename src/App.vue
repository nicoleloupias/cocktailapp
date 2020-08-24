<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/favourites"
        >Your favourites</router-link
      >
    </div>
    <notifications
      position="bottom right"
      classes="notification"
    />
    <transition name="fade" mode="out-in">
      <router-view id="Content" />
    </transition>
    <footer>
      <p>
        Made by
        <a
          href="https://www.nicoleloupias.com/"
          target="_blank"
        >
          Nicole Loupias.
        </a>
      </p>
      <div class="SocialLinks">
        <a
          class="SocialLink"
          target="_blank"
          href="https://www.linkedin.com/in/nicole-loupias/"
        >
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            size="lg"
          />
          <p>Nicole Loupias</p>
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap");

* {
  margin: 0;
}

body {
  background-color: #f99e9d;
}

#app {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  color: #2b2b2b;
  min-height: 100vh;
}

#Content {
  min-height: calc(100vh - 80px);
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
    font-family: "Raleway";
    padding: 10px 20px;
    color: white;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &.router-link-exact-active {
      color: #2b2b2b;
      font-weight: bold;
      background: rgba(white, 0.6);
    }

    &:not(:first-child) {
      margin-left: 20px;
    }
    &:hover {
      background: rgba(black, 0.1);
    }
  }
}

.notification {
  padding: 20px;
  font-size: 15px;
  border-left: 5px solid #187fe7;
  color: white;
  margin: 0 5px 5px;

  &.error {
    background: #e54d42;
    border-left-color: #b82e24;
  }
  &.success {
    background: #68cd86;
    border-left-color: #42a85f;
  }
}

footer {
  color: white;
  font-size: 12px;
  padding: 10px;
  background-color: rgba(#2b2b2b, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: white;
  }
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }

  .SocialLinks {
    .SocialLink {
      text-decoration: none;
      color: #a6dbeb;
      text-shadow: 1px 0px 5px #969696;
      font-weight: bold;
      font-size: 15px;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;

      p {
        margin-left: 5px;
      }
    }

    .SocialLink:hover {
      color: #2b2b2b;
    }

    @media screen and (max-width: 700px) {
      margin-top: 10px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
