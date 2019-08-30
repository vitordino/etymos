type CssConstraint = number | string

export type Breakpoint = { width: number; gutter?: number }
export type Breakpoints = { [key: string]: Breakpoint }
export type Theme = { breakpoints: Breakpoints }

export type Constraints = { above?: CssConstraint; below?: CssConstraint }

export type renderProps<T = undefined> = {
	render?: (arg: T) => React.ReactNode
	children?: React.ReactNode | ((arg: T) => React.ReactNode)
}
