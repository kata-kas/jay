/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				marquee: 'marquee 25s linear infinite',
				marquee2: 'marquee2 25s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				marquee2: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0%)' },
				},
			},
			backgroundImage: {
				text_shadow: {
					'background-image': 'linear-gradient(95.98deg,#3b268b -11.21%,transparent 58.33%),linear-gradient(89.77deg,#4027a4 1.4%,hsla(0,0%,7%,0) 85.2%)'
				}
			}
		},
	},
	plugins: [],
}
