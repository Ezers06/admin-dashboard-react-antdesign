import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPath from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPath(), react()],
});
