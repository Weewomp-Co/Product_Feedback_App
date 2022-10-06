import { createStitches } from "@stitches/react"

export const { styled } = createStitches({
	theme: {
		colors: {
			white300: '#F7F8FD',
			white600: '#F2F4FF',
			white900: '#FFFFFF',
			blue300: '#62BCFA',
			blue600: '#4661E6',
			purple: '#AD1FEA',
			red: "#D73737",
			orange: '#F49F85',
			grey300: '#647196',
			grey600: '#3A4374',
			grey900: '#4661E6',
		},
		fontSizes: {
			h1: '1.5rem',
			h2: '1.25rem',
			h3: '1.125rem',
			h4: '0.875rem',
			body1: '1rem',
			body2: '0.9375rem',
			body3: '0.8125rem'
		},
		fonts: {
			jost: "'Jost', sans-serif"
		},
		fontWeights: {
			regular: 400,
			semibold: 600,
			bold: 700
		},
		lineHeights: {
			h1: '2.1875rem',
			h2: '1.8125rem',
			h3: '1.625rem',
			h4: '1.25rem',
			body1: '1.4375rem',
			body2: '1.375rem',
			body3: '1.1875rem'
		},
		letterSpacings: {
			h1: '-0.33px',
			h2: '-0.25px',
			h3: '-0.25px',
			h4: '-0.2px',
		},
	}
})
