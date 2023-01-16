<template>
  <div>
    {{ translations.origin }}
    {{ translations.url }}
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { useTranslations } from './composables/useTranslations'

const translations = useTranslations()

console.log({ translations })
</script>
