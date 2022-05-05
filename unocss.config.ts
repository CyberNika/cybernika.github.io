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
    ['wrapper-l', 'pl-6 sm:pl-10 md:pl-15 xl:pl-20 2xl:pl-40'],
    ['wrapper-r', 'pr-6 sm:pr-10 md:pr-15 xl:pr-20 2xl:pr-40'],
    ['wrapper-x', 'wrapper-l wrapper-r'],
    ['wrapper-t', 'pt-4 sm:pt-5 xl:pt-6'],
    ['wrapper-b', 'pb-4 sm:pb-5 xl:pb-6'],
    ['wrapper-y', 'wrapper-t wrapper-b'],
    ['wrapper', 'wrapper-x wrapper-y'],
    ['content', 'm-x-auto max-w-screen-lg'],
    ['page-title', 'text-4xl font-bold font-serif mb-6'],
    ['link', 'underline underline-offset-5 font-bold decoration-1 decoration-divider-light dark:decoration-divider-dark hover:opacity-90'],
    ['through', 'line-through cursor-not-allowed opacity-80'],
  ],
  theme: {
    colors: {
      // brand: '#be123c',
      brand: '#475569',
      light: {
        soft: '#fffef7',
      },
      divider: {
        light: '#475569',
        dark: '#e2e8f0',
      },
      // brand: '#c2410c',
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
  safelist: ['prose'],
})
