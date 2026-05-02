<template>
  <SideMenu>
    <AppPageHeader title="Menu" class="pb-4" @close="closeSideMenu" />

    <DarkModeToggle />
    <PrivacyPolicyTile />
    <MobileShowcaseTile />

    <RiotPolicyNote class="mt-auto" />
  </SideMenu>
</template>
