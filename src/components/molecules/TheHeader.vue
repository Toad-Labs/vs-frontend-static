<template>
  <div>
    <header>
      <div class="bg-gray-200">
         <!-- Hidden heading -->
          <h2 class="sr-only">Site Header Information</h2>
                  <div
          class="w-full mx-auto  p-5 flex items-center justify-end bg-gray-default"
        >

        </div>
        <div
          class="sm:flex hidden w-full mx-auto container px-1 items-center justify-end bg-pink-300"
        >

          <!-- Language toggle on desktop -->
         
              <a class="  bg-blue-300 m-1 font-body underline">
              Français
               <!-- {language === "en" ? "English" : "Français"} -->
              </a>
         
            <!-- end lang toggle desktop -->
        </div>
       

      

        <!-- start gc logo -->
         <!-- src={language === "en" ? "../../assets/sig-blk-en.svg" : "../../assets/sig-blk-fr.svg"} -->
        <div className="flex flex-col sm:flex-row container w-full mx-auto p-3 justify-between items-center bg-yellow-200 ">
          
          <div className="flex flex-row items-center w-full justify-between bg-green-200">
            <img
              className="h-6  sm:h-8 md:h-8 lg:h-7 xl:h-8  "
              src="../../assets/sig-blk-en.svg"
              alt="canada logo en"
            />
          <a class="sm:hidden  bg-blue-300 m-3 sm:m-0 font-semibold font-body underline">
              FR
               <!-- {language === "en" ? "EN" : "FR"} -->
              </a>
          </div>
            
          <!-- end gc logo -->
          <!-- start gc search bar -->
          <div className="inline-flex w-full sm:w-80 sm:h-10">
            <form
              className="w-full inline-flex border border-solid border-gray-light-100"
            >
              <input
                type="text"
                placeholder="Search Canada.ca"
                className="w-full placeholder-text-gray text-text-gray font-body py-1 px-2 focus:outline-none"
              />

              <button
                title="Search bar button"
                type="submit"
                class="
                  bg-primary-main
                  text-white 
                  text-center 
                  p-2
                  rounded-none
                 
                  hover:bg-gray-default
                  active:bg-gray-default
                  focus:bg-gray-default
                "
              >
                <span
                  >  
                  
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
    </header>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>
