<template>
  <header class="fixed z-50 inset-x-0 py-2 bg-inherit">
    <div class="lg:max-w-[768px] md:max-w-[600px] max-w-[480px] mx-auto">
      <slot name="header"></slot>
    </div>
  </header>
  <main class="lg:max-w-[768px] md:max-w-[600px] max-w-[480px] mx-auto pt-[72px]">
    <slot name="body"></slot>
  </main>
</template>
