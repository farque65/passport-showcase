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
					connectPurple: '#6F3FF5',
					gitcoinpurple: '#6f3ff5',
					infoElementBorder: '#D5BDFF',
					infoElementBG: '#F6F0FF',
				},
				yellow: '#FFF8DB',
				blue: {
					darkblue: '#0E0333',
				},
				green: {
					jade: '#02E2AC',
				},
			},
		},
	},
	plugins: [],
};
