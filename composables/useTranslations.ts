declare global {
  namespace NodeJS {
    interface Process {
      translations: Record<string, string>
    }
  }

  interface Window {
    translations: Record<string, string>
  }
}

export function useTranslations() {
  const nuxtApp = useNuxtApp()

  if (nuxtApp.ssrContext) {
    return process.translations
  }

  return window.translations
}
