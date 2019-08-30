import React from 'react'
import styled from 'styled-components'
import { render } from 'react-dom'
import styled from 'styled-components'
import {
	Provider,
	above,
	useTheme,
	useWindowSize,
	useMediaQuery,
	useBreakpoints,
	useCurrentBreakpoint,
} from '../src'
import 'wipe.css'

const StyledAbove = styled.pre`
	display: none;
	${above('md')`
		display: block;
	`}
`

const StyledBelow = styled.pre`
	${above('md')`
		display: none;
	`}
`

const App = () => {
	const theme = useTheme()
	const windowSize = useWindowSize()
	const mediaQuery = useMediaQuery({ above: 'md' })
	const visibleBreakpoints = useBreakpoints()
	const currentBreakpoint = useCurrentBreakpoint()
	return (
		<div style={{maxWidth: 600, margin: 'auto', padding: '1rem'}}>
			<h1 style={{fontSize: '3rem', marginBottom: '1rem'}}>ἔτυμος</h1>
			<StyledAbove>StyledAbove</StyledAbove>
			<StyledBelow>StyledBelow</StyledBelow>
			<br/>
			<pre>window size: {JSON.stringify(windowSize, null, 2)}</pre>
			<br/>
			<pre>{mediaQuery ? 'lorem ipsum above' : 'lorem ipsum below'}</pre>
			<br/>
			<pre>visible breakpoints: {JSON.stringify(visibleBreakpoints)}</pre>
			<br/>
			<pre>current breakpoint: {JSON.stringify(currentBreakpoint)}</pre>
			<br/>
			<pre>all breakpoints: {JSON.stringify(theme.breakpoints, null, 2)}</pre>
		</div>
	)
}

render(<Provider><App/></Provider>, document.querySelector('#root'))
