import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['wrapper', 'px-6 py-4 sm:px-10 sm:py-5 md:px-15 xl:py-6'],
  ],
  theme: {
    colors: {
    },
    animation: {
      keyframes: {
        sway: '{from{transform:translate3d(-20px,0,0) }to{transform:translate3d(20px,0,0)}}',
      },
      durations: {
        sway: '3s',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {},
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
