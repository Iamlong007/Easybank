<template>
  <div id="app">
    <div class="bg-white sticky">
      <div class="flex justify-between w-5/6 mx-auto pt-3 pb-3 bg-white">
        <div>
          <img src="./assets/images/logo.svg" alt="Logo Image" />
        </div>

        <button class="lg:hidden" @click="nav = !nav">
          <img :src="toggle" alt="" class="transition" />
        </button>
      </div>
    </div>

    <div class="bg-mobile-background bg-gray-300 bg-no-repeat bg-contain">
      <div class="w-11/12 mx-auto">
        <!-- <transition name="fade">
          <div
            v-if="nav"
            class="w-4/6 sm:w-3/6 absolute inset-0 md:w-2/6 mx-auto bg-white rounded-sm shadow-sm h-auto text-center font-medium text-gray-800 flex-row"
          >
            <p class="p-2">Home</p>
            <p class="p-2">About</p>
            <p class="p-2">Contact</p>
            <p class="p-2">Blog</p>
            <p class="p-2">Careers</p>
          </div>
        </transition> -->
        <div class="w-11/12 mx-auto flex-col">
          <img src="./assets/images/image-mockups.png" alt="" class="mock" />
          <h1 class="text-3xl pt-6 font-medium">
            Next generation digital banking
          </h1>
          <p class="text-gray-600 pt-4 text-center">
            Take your financial life online. Your Easy account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <button
            class="mx-auto mt-8 focus:outline-none focus:shadow-outline bg-gradient-to-r from-primary to-secondary py-3 px-10 rounded-full font-medium text-gray-100 text-sm"
          >
            Request Invite
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: false,
      menu: require("./assets/images/icon-hamburger.svg"),
      close: require("./assets/images/icon-close.svg"),
    };
  },
  computed: {
    toggle() {
      if (this.nav === false) {
        return this.menu;
      }
      return this.close;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Public sans";
  color: #2c3e50;
  overflow: hidden;
}
/* .nav {
  height: 600px;
} */
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}
.mock {
  margin-top: -30%;
}
</style>
