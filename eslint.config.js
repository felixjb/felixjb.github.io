import js from "@eslint/js";
import { defineConfig, includeIgnoreFile } from "eslint/config";
import path from "node:path";

const gitignorePath = path.resolve(import.meta.dirname, ".gitignore");

export default defineConfig([
  includeIgnoreFile(gitignorePath, { gitignoreResolution: true }),
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    ignores: ["commitlint.config.js"],
  },
]);
