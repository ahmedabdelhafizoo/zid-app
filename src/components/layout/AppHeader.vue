<template>
  <header class="header shadow-sm py-3">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <!-- logo image -->
        <a href="#" class="header__logo">
          <img src="@/assets/images/logo.svg" alt="logo image" />
        </a>
        <!-- end logo image -->

        <!-- toggle nav btn -->
        <button
          class="header__toggle-nav-btn btn btn--purple p-2 d-lg-none"
          @click="toggleNavBar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
        <!-- end toggle nav btn -->

        <!-- header nav -->
        <ul
          class="header__nav d-flex align-items-center me-auto"
          :class="{ show: showNavBar }"
        >
          <li class="align-self-start d-block d-lg-none">
            <button
              class="header__toggle-nav-btn btn btn--purple p-2"
              @click="toggleNavBar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </li>
          <li class="header__nav__link">
            <a href="#">الرئيسية</a>
          </li>
          <li class="header__nav__link">
            <a href="#">التصنيفات</a>
          </li>
          <li class="header__nav__link">
            <a href="#">التطبيقات</a>
          </li>
          <li class="header__nav__link">
            <a href="#">طور تطبيق</a>
          </li>
        </ul>
        <!-- end header nav -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      showNavBar: false,
    };
  },
  methods: {
    toggleNavBar() {
      this.showNavBar = !this.showNavBar;
    },
  },
};
</script>
