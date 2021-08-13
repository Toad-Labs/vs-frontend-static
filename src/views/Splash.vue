<template>
  <section class="flex h-screen">
    <!-- Background image -->
    <div
      class="
        z-0
        fixed
        bg-cover bg-center
        inset-0
        bg-splash-img
        min-w-300px
        filter
        blur-sm
      "
    ></div>
    <div class="flex flex-col justify-center items-center m-auto">
      <!-- English or French -->
      <div class="z-10 bg-white h-auto min-w-300px w-300px xl:w-500px">
        <img
          class="h-auto w-64 container mx-auto pt-6 xl:w-2/3 xl:mx-0 xl:px-6"
          src="../assets/sig-blk-en.svg"
          alt="Government of Canada / Gouvernement du Canada"
        />
        <div class="flex w-max container py-11 mx-auto font-display">
          <router-link
            class="
              focus:ring-1 focus:ring-black focus:ring-offset-2
              px-4
              bg-blue-deep
              text-white
              border border-blue-deep
              active:bg-blue-deep
              hover:bg-blue-hover
              text-center text-md
              h-11
              xl:h-10
              w-28
              xl:w-138px
              py-3.5
              mr-6
              rounded
              leading-3
              shadow-md
            "
            id="english-button"
            data-cy="english-button"
            role="button"
            draggable="false"
            to="/en"
            lang="en"
            >English</router-link
          >
          <router-link
            class="
              focus:ring-1 focus:ring-black focus:ring-offset-2
              px-4
              bg-blue-deep
              text-white
              border border-blue-deep
              active:bg-blue-deep
              hover:bg-blue-hover
              text-center text-md
              h-11
              xl:h-10
              w-28
              xl:w-138px
              py-3.5
              rounded
              leading-3
              shadow-md
            "
            id="french-button"
            data-cy="french-button"
            role="button"
            draggable="false"
            to="/fr"
            lang="fr"
            >Français</router-link
          >
        </div>
      </div>
      <!-- Terms & Conditions -->
      <div
        class="
          relative
          py-8
          bg-gray-mild
          text-p
          h-auto
          min-w-300px
          w-300px
          flex
          justify-between
          container
          p-6
          xl:w-500px xl:items-center
        "
      >
        <div class="w-28 text-base xl:text-p xl:w-max font-body">
          <a
            class="
              inline-block
              w-28
              xl:w-max
              mr-0
              hover:underline
              text-blue-mild
              splash-link
              text-lg
            "
            href="https://www.canada.ca/en/transparency/terms.html"
            lang="en"
            >Terms &amp; conditions</a
          >
          <span class="text-gray-light"> • </span>
          <a
            class="
              inline-block
              hover:underline
              text-blue-mild
              font-body
              text-lg
            "
            href="https://www.canada.ca/fr/transparence/avis.html"
            lang="fr"
            >Avis</a
          >
        </div>
        <img
          class="h-auto w-24 xl:w-28"
          src="../assets/wmms-blk.svg"
          :alt="$t('canadaLogoFooter')"
        />
      </div>
    </div>
  </section>
</template>
