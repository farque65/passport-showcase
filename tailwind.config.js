/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				purple: {
					darkpurple: '#0E0333',
					gitcoinpurple: '#6f3ff5',
				},
				yellow: '#FFF8DB',
				blue: {
					darkblue: '#0E0333',
				},
				green: {
					jade: '#02E2AC',
				},
			},
			fontFamily: {
				miriamlibre: ['miriam libre'],
				librefranklin: ['Libre Franklin'],
				body: ['Libre Franklin'],
			},
		},
	},
	plugins: [],
};
