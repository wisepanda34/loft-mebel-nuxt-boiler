<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtLoadingIndicator
          :height="5"
          :duration="3000"
          :throttle="400"
        />
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
<script setup>
  const app = useAppConfig()

  useHead({
    title: app.name,
    titleTemplate: `%s - by ${app.author.name}`,
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content: 'Loft furniture nuxt3'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  })
</script>
