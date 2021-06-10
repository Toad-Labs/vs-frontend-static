<template>
  <div>
    <header>
      <div class="pb-2 sm:pb-4 border-b border-gray-infomd">
        <!-- Hidden heading -->
        <h2 class="sr-only">Site Header Information</h2>
        <div
          class="
            sm:flex
            hidden
            w-full
            mx-auto
            p-5
            items-center
            justify-end
            bg-gray-dark
          "
        ></div>
        <div
          class="
            sm:flex
            hidden
            w-full
            mx-auto
            container
            px-1
            items-center
            justify-end
          "
        >
          <!-- Language toggle on desktop -->

          <a id="lang-toggle-full" class="px-5 py-1 font-body underline text-blue-link">
            Français
            <!-- {language === "en" ? "English" : "Français"} -->
          </a>

          <!-- end lang toggle desktop -->
        </div>

        <!-- start gc logo -->
        <!-- src={language === "en" ? "../../assets/sig-blk-en.svg" : "../../assets/sig-blk-fr.svg"} -->
        <div
          className="flex flex-col sm:flex-row container w-full mx-auto py-1 px-5 justify-between items-center"
        >
          <div className="flex flex-row items-center w-full justify-between">
            <img
              className="h-7  sm:h-8 md:h-8 mx-3 sm:mx-0 "
              src="../../assets/sig-blk-en.svg"
              alt="canada logo en"
            />
            <a
              id="lang-toggle-small"
              class="sm:hidden m-3 sm:m-0 font-semibold font-body underline text-blue-link"
            >
              FR
              <!-- {language === "en" ? "EN" : "FR"} -->
            </a>
          </div>
          <!-- end gc logo -->
          <!-- start gc search bar -->
          <div className="inline-flex w-full sm:w-80 sm:h-10">
            <form
              className="w-full inline-flex border border-solid border-gray-light mx-2 sm:mx-0"
            >
              <input
                id="searchbar"
                aria-label="Search"
                type="text"
                placeholder="Search Canada.ca"
                className="w-full placeholder-gray-light text-gray-medium font-body py-1 px-2 focus:outline-none"
              />

              <button
                id="searchbutton"
                title="Search bar button"
                type="submit"
                class="
                  bg-blue-primary
                  text-white text-center
                  p-2
                  rounded-none
                  hover:bg-gray-dark
                  active:bg-gray-dark
                  focus:bg-gray-dark
                "
              >
                <span id="search-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
              </button>
            </form>
          </div>
          <!-- end search bar -->
        </div>
      </div>
      <div class="sm:flex hidden">
        <Menu
          class="
            w-full
            mx-auto
            container
            items-center
            justify-start
            text-gray-dark
          "
          text="menu"
        ></Menu>
      </div>
      <div>
         <Banner title="Service Canada Labs" body="This site will change as we test ideas" ></Banner>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Menu from "../atoms/Menu.vue";
import Banner from "../atoms/Banner.vue";
export default {
  name: "TheHeader",
  components: {
    Menu,
    Banner,
  },
  setup() {
    return {};
  },
};
</script>
