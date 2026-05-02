export default defineNuxtConfig({
  compatibilityDate: '2026-03-21',
  srcDir: 'src/',
  serverDir: 'src/server',
  components: [{ path: '~/components', pathPrefix: false }],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  css: ['~/assets/base.css', '~/assets/index.css'],
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    apiAccessKey: process.env.API_ACCESS_KEY,
  },
  vite: {
    optimizeDeps: {
      include: [
        '@heroicons/vue/24/solid',
        '@heroicons/vue/24/outline',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'date-fns',
        '@headlessui/vue',
      ],
    },
  },
  app: {
    head: {
      title: 'LoL Champion Rotation',
      link: [{ rel: 'icon', href: '/favicon.ico' }],
      htmlAttrs: { lang: '', class: 'h-full' },
      script: [
        {
          innerHTML: `
          const mode = localStorage.getItem('themeMode');
          if (mode === 'dark') document.documentElement.classList.add('dark');
        `,
          tagPosition: 'head',
        },
      ],
    },
  },
})
