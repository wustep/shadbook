import js from "@eslint/js"
import globals from "globals"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{ ignores: ["dist"] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			"react-refresh/only-export-components": [
				"warn",
				{ allowConstantExport: true },
			],
			/* Import rules */
			"import/first": "warn",
			"no-restricted-imports": [
				"error",
				{
					patterns: [
						{
							group: [".*", "./*", "../*"],
							message:
								"Use absolute imports starting with '@/' instead of relative imports",
						},
					],
				},
			],
			"import/no-duplicates": "error",
			"import/order": [
				"error",
				{
					groups: [["builtin", "external", "internal", "parent", "sibling"]],
					"newlines-between": "always",
					alphabetize: { order: "asc", caseInsensitive: true },
					distinctGroup: true,
					pathGroups: [
						{
							pattern: "@/**",
							group: "internal",
							position: "after",
						},
						{
							pattern: "**/*.css",
							group: "unknown",
							position: "before",
						},
					],
					pathGroupsExcludedImportTypes: ["builtin"],
				},
			],
			"sort-imports": [
				"error",
				{
					ignoreCase: true,
					ignoreDeclarationSort: true,
					allowSeparatedGroups: false,
					memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
				},
			],
		},
	},
)
