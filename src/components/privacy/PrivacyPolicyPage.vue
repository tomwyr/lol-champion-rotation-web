<template>
  <PageLayout>
    <template #header>
      <AppPageHeader title="Privacy policy" />
    </template>

    <template #body>
      <p class="pt-4">
        <span class="font-bold">Effective Date: 26.06.2025</span>
        <br />
        <br />
        <span>
          LoL Champion Rotation respects your privacy. We do not collect, store, or share any
          personal information, usage data, or cookies when you use our web app.
        </span>
        <br />
        <br />
        <span>
          We do not use analytics, tracking tools, or third-party cookies. Your activity remains
          private and is not monitored by us in any way.
        </span>
        <br />
        <br />
        <span> If you have any questions about the policy, feel free to contact us at </span>
        <a class="font-bold" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a>
        <span>.</span>
      </p>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../common/PageLayout.vue'
import AppPageHeader from '../menu/AppPageHeader.vue'

const supportEmail = 'support@championrotation.lol'
</script>
