<template>
  <PageLayout>
    <template #header>
      <AppPageHeader title="Get the app" />
    </template>
    <template #body>
      <img
        src="/assets/mobile.webp"
        class="mx-auto blur-[0.4px] md:blur-[0.5px] lg:blur-[0.6px] mt-[1rem] md:mt-[2rem] lg:mt-[3rem] w-[20rem] md:w-[25rem] lg:w-[30rem]"
      />

      <div
        class="fixed inset-0 bg-gradient-to-b from-transparent from-[10rem] to-30% md:to-35% lg:to-45% to-gray-300 dark:to-gray-950"
      />

      <div
        class="absolute drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.3)] mt-44 md:mt-52 lg:mt-56 px-8 md:px-12 lg:px-24 max-w-[480px] md:max-w-[600px] lg:max-w-[768px]"
      >
        <p class="text-center leading-6 md:leading-8 lg:leading-10 text-lg md:text-xl lg:text-2xl">
          LoL Champion Rotation<br />
          <span class="text-2xl md:text-3xl lg:text-4xl">Mobile</span>
        </p>
        <p
          class="text-center pt-4 md:pt-5 lg:pt-6 font-thin text-base md:text-lg lg:text-xl leading-5 md:leading-6 lg:leading-7"
        >
          Check the free champion rotation, stats, and history on the go with iOS or Android. Enjoy
          faster performance, notifications, and features optimized for mobile use.
        </p>

        <MobileShowcaseQrs />
      </div>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../common/PageLayout.vue'
import AppPageHeader from '../../menu/AppPageHeader.vue'
import MobileShowcaseQrs from './MobileShowcaseQrs.vue'
</script>
