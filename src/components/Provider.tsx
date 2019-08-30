import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from 'types'

type ProviderProps = Theme & { children: React.ReactChild }

const Provider = ({ children, breakpoints, ...props }: ProviderProps) => (
	<ThemeProvider theme={{ breakpoints, ...props }}>
		{children}
	</ThemeProvider>
)

Provider.defaultProps = {
	breakpoints: {
		xs: { width: 0 },
		sm: { width: 480 },
		md: { width: 768 },
		lg: { width: 992 },
		xl: { width: 1280 },
	},
} as Theme

export default Provider
