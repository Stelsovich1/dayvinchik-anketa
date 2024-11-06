import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-plugin-prettier";

export default [
  // Базовая конфигурация ESLint
  js.configs.recommended,

  // Конфигурация для TypeScript
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tsParser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint,
      prettier: prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "import/first": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "prettier/prettier": "error",
    },
  },

  // Конфигурация для Prettier
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      prettier: prettier,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },

  // Игнорирование определенных файлов
  {
    ignores: ["dist"],
  },
];
