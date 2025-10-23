import { defineConfig } from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

export default defineConfig({
  presets: [presetWind3()],
  preflights: [
    {
      getCSS: () => '*{margin:0;padding:0;} body{overflow:hidden;}',
    },
  ],
})
