<template>
  <div>
    <header>
      <div class="pb-2 sm:pb-4 sm:border-b sm:border-gray-infomd">
        <!-- Hidden heading -->
        <h2 class="sr-only">{{ $t("siteHeaderInfo") }}</h2>
        <!-- Language toggle on desktop -->
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
          <router-link
            id="lang-toggle-full"
            class="px-5 py-1 font-body underline text-blue-link"
            :aria-label="
              $t('changeLanguageTo') +
              (changeLanguageTo === 'fr' ? 'français' : 'english')
            "
            tabindex="0"
            :to="'/' + changeLanguageTo"
            :lang="changeLanguageTo"
          >
            {{ $t("changeLanguage") }}
          </router-link>
        </div>
        <!-- end lang toggle desktop -->

        <!-- start gc logo with mobile lang toggle -->
        <!-- src={language === "en" ? "../../assets/sig-blk-en.svg" : "../../assets/sig-blk-fr.svg"} -->
        <div
          className="flex flex-col sm:flex-row container w-full mx-auto py-1 px-5 justify-between items-center"
        >
          <div className="flex flex-row items-center w-full justify-between">
            <img
              className="h-5 xs:h-7 sm:h-8 md:h-9 mx-3 xs:mx-0"
              src="../../assets/sig-blk-en.svg"
              alt="canada logo en"
            />
            <router-link
              id="lang-toggle-small"
              class="
                sm:hidden
                m-3
                sm:m-0
                font-semibold font-body
                underline
                text-blue-link
              "
              :aria-label="
                $t('changeLanguageTo') +
                (changeLanguageTo === 'fr' ? 'français' : 'english')
              "
              tabindex="0"
              :to="'/' + changeLanguageTo"
              :lang="changeLanguageTo"
            >
              {{ $t("changeLanguageAbrv") }}
            </router-link>
          </div>
          <!-- end gc logo -->
          <!-- start gc search bar -->
          <div className=" sm:flex hidden w-full sm:w-80 sm:h-10">
            <form
              className="w-full inline-flex border border-gray-infomd mx-2 sm:mx-0"
            >
              <input
                id="searchbar"
                :aria-label="$t('searchCanada')"
                type="text"
                :placeholder="$t('searchCanada')"
                className="w-full placeholder-gray-light text-gray-dark font-body py-1 px-2 focus:outline-none"
              />

              <button
                id="searchbutton"
                title="Search bar button"
                type="submit"
                class="
                  bg-blue-deep
                  text-white text-center
                  p-2
                  rounded-none
                  hover:bg-gray-dark
                  active:bg-gray-dark
                  focus:bg-gray-dark
                "
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <!-- end search bar -->
        </div>
      </div>
      <div class="sm:flex hidden">
        <Menu
          class="
            sm:pt-3
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
      <div class="sm:py-4">
        <Banner :title="$t('bannerTitle')" :body="$t('bannerBody')"></Banner>
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import Menu from "../atoms/Menu.vue";
import Banner from "../atoms/Banner.vue";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
export default {
  name: "TheHeader",
  components: {
    Menu,
    Banner,
  },
  setup() {
    const changeLanguageTo = computed(() =>
      useI18n().locale.value == "fr" ? "en" : "fr"
    );
    return { changeLanguageTo };
  },
};
</script>
