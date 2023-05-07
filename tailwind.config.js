module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				body: ['Poppins', 'sans-serif'],
			},
			transitionDuration: {
				'1500': '1500ms',
				'2000': '2000ms',
			},
		},
	},
	darkMode: 'class',
	plugins: [require('tailwindcss-animate')],
}
