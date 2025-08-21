// import {
//   createLocalFontProcessor,
// } from '@unocss/preset-web-fonts/local'
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
    ['btn', 'px-4 py-2 rounded inline-block bg-red-600 text-white cursor-pointer !outline-none hover:bg-black disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-black'],
    ['btn-primary', 'px-6 py-3 rounded bg-red-600 text-white font-semibold cursor-pointer !outline-none hover:bg-black transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-black'],
    ['btn-secondary', 'px-6 py-3 rounded bg-transparent text-black border-2 border-black font-semibold cursor-pointer !outline-none hover:bg-black hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-black'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ring-offset-white dark:ring-offset-black rounded'],
  ],
  theme: {
    colors: {
      redline: {
        red: '#e32521',
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: {
          name: 'DM Sans',
          weights: ['400', '500', '600', '700'],
        },
        serif: {
          name: 'DM Serif Display',
          weights: ['400', '700'],
        },
        mono: {
          name: 'DM Mono',
          weights: ['400', '500', '600'],
        },
        racing: {
          name: 'Racing Sans One',
          weights: ['400'],
        },
        nunito: {
          name: 'Nunito Sans',
          weights: ['400', '500', '600', '700', '800'],
        },
      },
      // processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left font-normal font-medium font-semibold font-bold font-extrabold font-racing font-nunito font-sans font-serif font-mono'.split(' '),
})
