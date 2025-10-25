<template>
  <PageLayout>
    <template #header>
      <AppPageHeader title="Support" />
    </template>

    <template #body>
      <div class="pt-4 pb-8">
        <p>
          If you need help or have feedback, contact us at
          <a class="font-bold" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a
          >.
        </p>
        <p>
          You can also send feedback in-app via the
          <span class="font-bold">menu icon (☰) → Send Feedback</span>.
        </p>
        <br />
        <p>Resources:</p>
        <span>• <a class="font-bold" href="/mobile/privacy">Privacy Policy</a></span>
      </div>
    </template>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../common/PageLayout.vue'
import AppPageHeader from '../menu/AppPageHeader.vue'

const supportEmail = 'support@championrotation.lol'
</script>
