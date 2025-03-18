/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,mdx,md}"],
	theme: {
		extend: {
			fontFamily: {
				caveat: ["Caveat Brush", "serif"],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: "2rem",
				},
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						h1: {
							fontSize: theme("fontSize.5xl")[0],
							"@media screen(lg)": {
								fontSize: theme("fontSize.6xl")[0],
							},
						},
						h2: {
							fontSize: theme("fontSize.4xl")[0],
							"@media screen(lg)": {
								fontSize: theme("fontSize.5xl")[0],
							},
						},
						h3: {
							fontSize: theme("fontSize.3xl")[0],
							"@media screen(lg)": {
								fontSize: theme("fontSize.4xl")[0],
							},
						},
						h4: {
							fontSize: theme("fontSize.2xl")[0],
							"@media screen(lg)": {
								fontSize: theme("fontSize.3xl")[0],
							},
						},
						h5: {
							fontSize: theme("fontSize.xl")[0],
							"@media screen(lg)": {
								fontSize: theme("fontSize.2xl")[0],
							},
						},
						h6: {
							fontSize: theme("fontSize.lg")[0],
							"@media screen(lg)": {
								fontSize: theme("fontSize.xl")[0],
							},
						},
						pre: {
							backgroundColor: "transparent",
						},
						p: {
							fontSize: theme("fontSize.lg")[0],
							lineHeight: theme("lineHeight.loose"),
						},
						li: {
							fontSize: theme("fontSize.lg")[0],
							lineHeight: theme("lineHeight.loose"),
						},
						hr: {
							borderColor: theme("colors.gray[700]"),
						},
						a: {
							color: theme("colors.gray[700]"),
							"&:hover": {
								textDecoration: "underline",
							},
						},
						strong: {
							fontWeight: "700",
						},
						img: {
							width: "100%",
						},
						"--tw-prose-body": theme("colors.gray[700]"),
						"--tw-prose-headings": theme("colors.gray[700]"),
						"--tw-prose-lead": theme("colors.gray[700]"),
						"--tw-prose-links": theme("colors.gray[700]"),
						"--tw-prose-bold": theme("colors.gray[700]"),
						"--tw-prose-counters": theme("colors.gray[700]"),
						"--tw-prose-bullets": theme("colors.gray[700]"),
						"--tw-prose-hr": theme("colors.gray[700]"),
						"--tw-prose-quotes": theme("colors.gray[700]"),
						"--tw-prose-quote-borders": theme("colors.gray[700]"),
						"--tw-prose-captions": theme("colors.gray[700]"),
						"--tw-prose-code": theme("colors.gray[700]"),
						"--tw-prose-pre-code": theme("colors.gray[700]"),
						"--tw-prose-pre-bg": theme("colors.gray[700]"),
						"--tw-prose-th-borders": theme("colors.gray[700]"),
						"--tw-prose-td-borders": theme("colors.gray[700]"),
					},
				},
			}),
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
