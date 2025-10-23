import { defineConfig } from 'unocss'
import { presetWind3 } from '@unocss/preset-wind3'

export default defineConfig({
  presets: [presetWind3()],
  preflights: [
    {
      getCSS: () => `
                * { margin: 0; padding: 0; user-select: none; }
                html, body { width: 100%; height: 100%; overflow: hidden; font-family: "HarmonyOS_Regular", sans-serif; }
                #root { width: 100vw; height: 100vh; }
                @media all and (max-height: 490px) { .footer { display: none; } }
            `,
    },
  ],
  rules: [
    ['animate-spin', { animation: 'spin 2s linear infinite' }],
    ['@keyframes spin', { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }],
  ],
})
