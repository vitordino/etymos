import React from 'react'
import styled from 'styled-components'
import { render, unmountComponentAtNode } from 'react-dom'

import {
	Provider,
	useTheme,
	useWindowSize,
	useMediaQuery,
	useBreakpoints,
	useCurrentBreakpoint,
	above,
} from '../src'

const StyledAbove = styled.div`
	display: none;
	${above('md')`
		display: block;
	`}
`

const Test = () => {
	const theme = useTheme()
	const windowSize = useWindowSize()
	const mediaQuery = useMediaQuery({ above: 'md' })
	const breakpoints = useBreakpoints()
	const currentBreakpoint = useCurrentBreakpoint()
	return (
		<div>
			<pre>window size: {JSON.stringify(windowSize)}</pre>
			<pre>window size: {JSON.stringify(windowSize)}</pre>
			<pre>{mediaQuery ? 'lorem ipsum above' : 'lorem ipsum below'}</pre>
			<pre>all breakpoints {JSON.stringify(theme.breakpoints)}</pre>
			<pre>visible breakpoints {JSON.stringify(breakpoints)}</pre>
			<pre>current breakpoint {JSON.stringify(currentBreakpoint)}</pre>
			<StyledAbove>styled above</StyledAbove>
		</div>
	)
}

describe('Etymos', () => {
	let node: Element

	beforeEach(() => {
		node = document.createElement('div')
	})

	afterEach(() => {
		unmountComponentAtNode(node)
	})

	it('renders without breaking', () => {
		render(
			<Provider>
				<Test />
			</Provider>,
			node,
			() => {
				expect(node.innerHTML).toContain('lorem ipsum')
			},
		)
	})
})
