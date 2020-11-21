<template>
  <div id="app">
    <!-- Nav -->
    <div class="bg-white sticky">
      <div class="flex justify-between w-5/6 mx-auto pt-3 pb-3 bg-white">
        <div class="md:mt-3">
          <img src="./assets/images/logo.svg" alt="Logo Image" />
        </div>
        <div class="mt-2 deskNav">
          <a
            href=""
            class="px-4 hover:text-green-500 active pb-6 hover:font-medium"
            >Home</a
          >
          <a
            href=""
            class="px-4 hover:text-green-500 active pb-6 hover:font-medium"
            >About</a
          >
          <a
            href=""
            class="px-4 hover:text-green-500 active pb-6 hover:font-medium"
            >Contact</a
          >
          <a
            href=""
            class="px-4 hover:text-green-500 active pb-6 hover:font-medium"
            >Blog</a
          >
          <a
            href=""
            class="px-4 hover:text-green-500 active pb-6 hover:font-medium"
            >Career</a
          >
        </div>
        <button
          class="navBt hoverBt shadow-sm hover:bg-blue-400 focus:outline-none focus:shadow-outline bg-gradient-to-r from-primary to-secondary py-3 px-10 rounded-full font-medium text-gray-100 text-sm"
        >
          Request Invite
        </button>
        <button class="md:hidden" @click="nav = !nav">
          <img :src="toggle" alt="" class="transition" />
        </button>
      </div>
    </div>

    <div
      :class="
        nav
          ? 'activeBackground'
          : 'bg-gray-300 background bg-mobile-background md:bg-desktop-background md:bg-auto  bg-no-repeat bg-contain'
      "
    >
      <!-- Header Section -->
      <div
        class="w-11/12 mx-auto md:w-11/12 header flex-auto md:flex-row pb-16"
      >
        <div class="md:w-6/12 md:float-right">
          <img src="./assets/images/image-mockups.png" alt="" class="mock" />
        </div>
        <div
          class="md:w-4/12 md:pt-24 md:pb-32"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <h1
            class="text-3xl md:text-5xl md:text-left pt-6 leading-tight font-medium"
          >
            Next generation digital banking
          </h1>
          <p class="text-gray-600 md:text-left pt-4 text-center">
            Take your financial life online. Your Easy account will be a
            one-stop-shop for spending, saving, budgeting, investing and much
            more.
          </p>
          <button
            class="md:float-left shadow-xs hoverBt hover:bg-blue-400 mx-auto mt-8 focus:outline-none focus:shadow-outline bg-gradient-to-r from-primary to-secondary py-3 px-10 rounded-full font-medium text-gray-100 text-sm"
          >
            Request Invite
          </button>
        </div>
        <transition name="fade">
          <div
            v-if="nav"
            class="w-5/6 mt-12 absolute inset-0 md:w-2/6 mx-auto bg-white rounded-sm shadow-sm h-64 text-center font-medium text-gray-800 flex-row"
          >
            <p class="p-2 mt-4">Home</p>
            <p class="p-2">About</p>
            <p class="p-2">Contact</p>
            <p class="p-2">Blog</p>
            <p class="p-2">Careers</p>
          </div>
        </transition>
      </div>
      <!-- Second Frame -->
      <div class="bg-gray-200 pb-32">
        <div class="flex flex-col w-10/12 mx-auto">
          <div
            class="pt-8"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <h1
              class="text-3xl font-medium md:text-left text-gray-700 md:text-4xl w-9/12 md:w-11/12 md:ml-0 leading-tight mx-auto text-center"
            >
              Why choose Easybank?
            </h1>
            <p class="text-gray-600 md:text-left md:w-6/12 text-center pt-4">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
          <div class="md:flex md:flex-row justify-between">
            <div class="md:w-2/7">
              <div class="mt-16">
                <img
                  src="./assets/images/icon-online.svg"
                  alt=""
                  class="mx-auto md:ml-0"
                />
              </div>
              <h2 class="text-center text-2xl md:text-left font-medium pt-6">
                Online Banking
              </h2>
              <p class="text-gray-600 md:text-left text-center pt-4">
                Our modern web and applications allow you to keep track of your
                finances wherever you are in the world
              </p>
            </div>
            <div class="md:w-2/7">
              <div class="mt-16">
                <img
                  src="./assets/images/icon-budgeting.svg"
                  alt=""
                  class="mx-auto md:ml-0"
                />
              </div>
              <h2 class="text-center text-2xl md:text-left font-medium pt-6">
                Simple Budgeting
              </h2>
              <p class="text-gray-600 md:text-left text-center pt-4">
                See exactly where your money goes each month. Recieve
                notifications when you are close to hitting your limits.
              </p>
            </div>
            <div class="md:w-2/7">
              <div class="mt-16">
                <img
                  src="./assets/images/icon-onboarding.svg"
                  alt=""
                  class="mx-auto md:ml-0"
                />
              </div>
              <h2 class="text-center text-2xl md:text-left font-medium pt-6">
                Fast Onboarding
              </h2>
              <p class="text-gray-600 md:text-left text-center pt-4">
                We don't do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </div>
            <div class="md:w-2/7">
              <div class="mt-16">
                <img
                  src="./assets/images/icon-api.svg"
                  alt=""
                  class="mx-auto md:ml-0"
                />
              </div>
              <h2 class="text-center text-2xl font-medium md:text-left pt-6">
                Open API
              </h2>
              <p class="text-gray-600 md:text-left text-center pt-4">
                Manage your savings, investments, pensions,and much more from
                one account.Tracking your money has never been easier.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Article Section -->
      <div class="bg-gray-300">
        <div class="flex flex-col w-10/12 mx-auto">
          <div
            class="pt-16"
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-delay="300"
          >
            <h1
              class="text-3xl font-medium md:text-left text-gray-700 md:text-4xl w-10/12 md:w-11/12 md:ml-0 leading-tight mx-auto text-center"
            >
              Latest Articles
            </h1>
          </div>
          <div class="md:flex md:flex-row justify-between mt-8 pb-16">
            <div class="pb-8 md:w-2/7">
              <div class="bg-gray-100 rounded-md">
                <img
                  src="./assets/images/image-currency.jpg"
                  class="imageHeight"
                  alt=""
                />
                <div class="w-5/6 mx-auto mt-8">
                  <h5 class="text-xs text-gray-500 font-medium text-left">
                    By Claire Robinson
                  </h5>
                  <h3
                    class="text-lg text-gray-700 font-medium text-left cursor-pointer hover:text-blue-500 leading-tight mt-4"
                  >
                    Recieve money in any currency with no fees
                  </h3>
                  <p
                    class="text-sm text-gray-500 font-light text-left leading-snug mt-4 pb-6"
                  >
                    The world is getting smaller and we are getting more mobile.
                    So why should you be forced to only recieve money in a
                    single....
                  </p>
                </div>
              </div>
            </div>
            <div class="pb-8 md:w-2/7">
              <div class="bg-gray-100 rounded-md">
                <img
                  src="./assets/images/image-restaurant.jpg"
                  alt=""
                  class="imageHeight"
                />
                <div class="w-5/6 mx-auto mt-8">
                  <h5 class="text-xs text-gray-500 font-medium text-left">
                    By Claire Robinson
                  </h5>
                  <h3
                    class="text-lg text-gray-700 font-medium text-left cursor-pointer hover:text-blue-500 leading-tight mt-4"
                  >
                    Recieve money in any currency with no fees
                  </h3>
                  <p
                    class="text-sm text-gray-500 font-light text-left leading-snug mt-4 pb-6"
                  >
                    The world is getting smaller and we are getting more mobile.
                    So why should you be forced to only recieve money in a
                    single....
                  </p>
                </div>
              </div>
            </div>
            <div class="pb-8 md:w-2/7">
              <div class="bg-gray-100 rounded-md">
                <img
                  src="./assets/images/image-plane.jpg"
                  alt=""
                  class="imageHeight"
                />
                <div class="w-5/6 mx-auto mt-8">
                  <h5 class="text-xs text-gray-500 font-medium text-left">
                    By Claire Robinson
                  </h5>
                  <h3
                    class="text-lg text-gray-700 font-medium text-left cursor-pointer hover:text-blue-500 leading-tight mt-4"
                  >
                    Recieve money in any currency with no fees
                  </h3>
                  <p
                    class="text-sm text-gray-500 font-light text-left leading-snug mt-4 pb-6"
                  >
                    The world is getting smaller and we are getting more mobile.
                    So why should you be forced to only recieve money in a
                    single....
                  </p>
                </div>
              </div>
            </div>
            <div class="pb-8 md:w-2/7">
              <div class="bg-gray-100 rounded-md">
                <img
                  src="./assets/images/image-confetti.jpg"
                  alt=""
                  class="imageHeight"
                />
                <div class="w-5/6 mx-auto mt-8">
                  <h5 class="text-xs text-gray-500 font-medium text-left">
                    By Claire Robinson
                  </h5>
                  <h3
                    class="text-lg text-gray-700 font-medium text-left cursor-pointer hover:text-blue-500 leading-tight mt-4"
                  >
                    Recieve money in any currency with no fees
                  </h3>
                  <p
                    class="text-sm text-gray-500 font-light text-left leading-snug mt-4 pb-6"
                  >
                    The world is getting smaller and we are getting more mobile.
                    So why should you be forced to only recieve money in a
                    single....
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer -->
      <div class="footer pb-12">
        <div
          class="flex flex-col md:flex-row md:justify-between w-10/12 mx-auto"
        >
          <div class="w-7/12 mx-auto md:flex md:flex-row md:ml-0">
            <div class="mt-6 w-12/12 md:w-3/12 md:ml-0 mx-auto md:mt-12">
              <div class="md:mt-2">
                <img
                  src="./assets/images/footerLogo.svg"
                  alt=""
                  class="mx-auto md:ml-0"
                />
              </div>
              <div class="flex flex-row justify-between mt-8">
                <img src="./assets/images/icon-facebook.svg" alt="" />
                <img src="./assets/images/icon-youtube.svg" alt="" />
                <img src="./assets/images/icon-twitter.svg" alt="" />
                <img src="./assets/images/icon-pinterest.svg" alt="" />
                <img src="./assets/images/icon-instagram.svg" alt="" />
              </div>
            </div>
            <div
              class="md:flex md:flex-row md:justify-between md:w-6/12 md:mt-10"
            >
              <div
                class="text-white text-xs font-light flex flex-col mt-4 md:mt-0"
              >
                <a href="" class="py-2 hover:text-blue-400">About Us</a>
                <a href="" class="py-2 hover:text-blue-400">Contact</a>
                <a href="" class="py-2 hover:text-blue-400">Blog</a>
              </div>
              <div class="text-white text-xs font-light flex flex-col">
                <a href="" class="py-2 hover:text-blue-400">Careers</a>
                <a href="" class="py-2 hover:text-blue-400">Support</a>
                <a href="" class="py-2 hover:text-blue-400">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-8 md:mt-12">
            <div class="w-8/12 mx-auto md:w-10/12 md:ml-12">
              <button
                class="hover:bg-blue-400 hoverBt mx-auto focus:outline-none focus:shadow-outline bg-gradient-to-r from-primary to-secondary py-3 px-10 rounded-full font-medium text-gray-100 text-sm"
              >
                Request Invite
              </button>
            </div>
            <p class="mt-4 text-gray-500 text-center">
              &copy; Easybank. All Rights Reserved.
            </p>
          </div>
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
.activeBackground {
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.65) 0%,
      rgba(128, 128, 128, 0.25) 100%
    ),
    #ffffff;
}
.active:hover {
  border-bottom: 4px solid rgb(45, 196, 45);
}
.hoverBt:hover {
  background: linear-gradient(90deg, #1d8a3a 0%, #197d96 100%);
}
.border {
  border: 5px solid red;
}
.width {
  width: 23%;
}
.imageHeight {
  height: 13rem;
  width: 100%;
}
.footer {
  background-color: hsl(233, 26%, 24%);
}
@media (min-width: 768px) {
  .background {
    background-position-x: 35rem !important;
    background-position-y: -17rem !important;
  }
  .mock {
    margin-top: -17%;
    margin-left: 17%;
  }
  .header {
    margin-left: 8%;
  }
}
@media (max-width: 768px) {
  .deskNav,
  .navBt {
    display: none;
  }
}
</style>
