import type { UserModule } from './types'

import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
      // If there's a saved position (user pressed back/forward), use it
      if (savedPosition) {
        return savedPosition
      }
      // If there's a hash (anchor), scroll to it
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        }
      }
      // Otherwise scroll to top
      return { top: 0, behavior: 'smooth' }
    },
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
