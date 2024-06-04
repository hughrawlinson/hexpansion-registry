import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "static",
  outDir: "dist",
  site: "https://hughrawlinson.github.io/",
  base: "/hexpansion-registry/",
});
