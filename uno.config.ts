import {
  createLocalFontProcessor,
} from '@unocss/preset-web-fonts/local'
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
    ['btn', 'px-4 py-2 rounded inline-block bg-red-600 text-white cursor-pointer !outline-none hover:bg-black disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 transition-all duration-300'],
    ['btn-primary', 'px-6 py-3 rounded bg-red-600 text-white font-semibold cursor-pointer !outline-none hover:bg-black transition-all duration-300'],
    ['btn-secondary', 'px-6 py-3 rounded bg-transparent text-black border-2 border-black font-semibold cursor-pointer !outline-none hover:bg-black hover:text-white transition-all duration-300'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-red-600'],
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
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
