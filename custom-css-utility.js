const headingUtilities = {
	'.heading-1': {
		fontSize: '2.25rem',
		fontWeight: 'bold',
		marginTop: '1rem',
		marginBottom: '0.5rem',
	},
	'.heading-2': {
		fontSize: '1.875rem',
		fontWeight: '600',
		marginTop: '1rem',
		marginBottom: '0.5rem',
	},
	'.heading-3': {
		fontSize: '1.5rem',
		fontWeight: '600',
		marginTop: '1rem',
		marginBottom: '0.5rem',
	},
	'.heading-4': {
		fontSize: '1.25rem',
		fontWeight: '500',
		marginTop: '1rem',
		marginBottom: '0.5rem',
	},
	'.heading-5': {
		fontSize: '1.125rem',
		fontWeight: '500',
		marginTop: '1rem',
		marginBottom: '0.5rem',
	},
	'.heading-6': {
		fontSize: '1rem',
		fontWeight: '500',
		marginTop: '1rem',
		marginBottom: '0.5rem',
	},
	'h1, h2, h3, h4, h5, h6': {
		margin: 0,
		fontWeight: 'normal',
	},
};

export default function customCssUtility({ addUtilities }) {
	const newUtilities = {
		'.flex-full-center': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		...headingUtilities,
	};

	addUtilities(newUtilities, ['responsive', 'hover']);
}
