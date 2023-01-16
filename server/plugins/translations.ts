export default defineNitroPlugin(async (nitro) => {
  console.log('NITRO STARTED')

  const response = await fetch('https://httpbin.org/get')
  const translations = await response.json()

  nitro.hooks.hook('render:html', (html) => {
    console.log('NITRO HANDLING REQUEST')

    html.bodyAppend.push(
      `<script>window.translations=${JSON.stringify(translations)}</script>`,
    )
  })

  process.translations = translations
})
