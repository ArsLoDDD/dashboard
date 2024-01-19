const colors = require('tailwindcss/colors')

module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		extend: {
			width: {
				87: '87%',
			},
			height: {},
			colors: {
				'gray-title': '#838383',
				'gray-item': '#9197B3',
				'gray-bg': '',
				'gray-bg-item': '',
				'purple-bg-item-menu': '#5932EA',
				'green-status': '#00B087',
				'green-status-bg': '#16C09861',
				'red-status': '#DF0404',
				'red-status-bg': '#FFC5C5',
				'btn-gray': '#F5F5F5',
				'btn-gray-border': '#EEEEEE',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans'],
				dmsans: ['DM Sans', 'mono'],
			},
			spacing: {},
			transitionDuration: {
				1500: '1500ms',
			},
		},
	},
	plugins: [],
}
