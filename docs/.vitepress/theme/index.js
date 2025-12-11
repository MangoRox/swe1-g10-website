
import './homepage.css' // <--- Import your custom CSS
import './style.css'
// docs/.vitepress/theme/index.ts

import DefaultTheme from 'vitepress/theme'
 
import { Gallery } from '@miletorix/vitepress-gallery' // [!code ++]
import '@miletorix/vitepress-gallery/style.css' // [!code ++]

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('Gallery', Gallery) // [!code ++]
  }
}
