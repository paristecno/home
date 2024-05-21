import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  // otras configuraciones de Astro
  outDir: 'dist' // Este es el directorio de salida por defecto
  ,

  integrations: [react(), tailwind()]
});