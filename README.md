# a note from the author (vitordino, 2021)

this lib was created over 3 years ago (it’s foundation dating around 5).

since then, the landscape on CSS-in-JS has changed drastically, i strongly believe now that [stitches](https://github.com/modulz/stitches) not only solves most of what this lib proposes but also is a better replacement for `styled-components` as a whole — apart from runtime interpolations.

due to the aforementioned reasons, i’m declaring this lib deprecated. **if you’re using this lib, your code will still work**.

As this is just a thin layer of abstractions on top of `styled-components`, it might still make sense for you to maintain it on a project that’s already in production.

huge thanks to everyone that used, contributed, sent feedbacks or interacted with over the years.

---

# ἔτυμος

[![npm package][npm-badge]][npm]
[![Travis][travis-badge]][travis]
[![Coveralls][coveralls-badge]][coveralls]
[![Bundlephobia][bundlephobia-badge]][bundlephobia]

> **etymos** is a responsive, mobile-first, toolkit for `react` + `styled-components`.

---

### installation

yarn:

```
yarn add etymos
```

npm:

```
npm install etymos --save
```

---

## usage

this package provides a `Provider`, some `hooks` and a `styled-components` helper

### `Provider`

receives a `breakpoints` prop (if not present, this package provides a default)

this prop is an object with other objects containing _at least_ a `width` number (in pixels), but it can contain more entries (useful together with [`mapTheme`](#maptheme) function)

```jsx
const breakpoints = {
  hey: { width: 0 },
  thats: { width: 480 },
  rad: { width: 768 },
}

const App = () => (
  <Provider breakpoints={breakpoints}>
    <pre>hey, app here</pre>
  </Provider>
)
```

### hooks

provides data derived from closest `<Provider/>` and / or `window size`<sup>\*</sup>

<sub>
  *: although the folowing hooks are `ssr` friendly (not breaking the build), the correct result will only return when rendering browser. by default, when `window` is not available, it will fallback to 0, and return/render mobile results.
</sub>

#### `useTheme`

outputs an `object` with:

- `breakpoints`: breakpoints object as described on Provider

#### `useWindowSize`

outputs an `object` with numeric: `innerHeight` & `innerWidth`

when `ssr`, both will return `0`

#### `useMediaQuery`

receives an object with optional `above` and `below` parameters and returns a boolean. both parameters can be one of:

- a string denoting a breakpoint

- a number of pixels

the default parameters are `below: 0`, `above: Infinity`, therefore, if no parameters are provided, it will always return `true`

#### `useBreakpoints`

returns an array of strings denoting the breakpoint that are visible eg. on a tablet, we should get something like `['xs', 'sm', 'md']`

#### `useCurrentBreakpoint`

returns a string denoting the biggest visible breakpoint, following the example, on a tablet we should get something like `'md'`

---

### styled-components helpers

#### `above`

a `media query` helper utility to use inside `styled-components`. receives a string denoting the breakpoint, and a template literal with the `css` that should be rendered:

```jsx
const AboveMD = styled.div`
  display: none;
  ${above('md')`
    display: block;
 `}
`
```

#### `mapBreakpoints`

this helper will create props with your breakpoints keys, that will be treated by a function (receiving the value defined, as other props) and will be rendered inside an `above` blocks for the corresponding defined breakpoints props.

```jsx
const Spacer = styled.div`
  display: block;
  ${mapBreakpoints(
    (value, props) => `
    margin: ${value}rem;
  `,
  )}
`

const App = () => (
  <Provider>
    <Spacer xs={0} md={1} />
  </Provider>
)
```

#### `mapTheme`

similar to `mapBreakpoints` this helper can read entries on each breakpoint (defined by the `breakpoints` object) and treat them with a function that will render inside `above` blocks.

```jsx
const breakpoints = {
  sm: { width: 0, gutter: 0.5 },
  md: { width: 0 },
  lg: { width: 0, gutter: 1 },
}

const Spacer = styled.div`
  display: block;
  ${mapTheme(
    (value, props) =>
      value.gutter &&
      `
    margin: ${value.gutter}rem;
  `,
  )}
`

const App = () => (
  <Provider breakpoints={breakpoints}>
    <Spacer />
  </Provider>
)
```

---

### contributing

this repo is open to [`issues`](https://github.com/vitordino/etymos/issues) and [`pull requests`](https://github.com/vitordino/etymos/pulls)

---

#### thanks

<sub>mostly of this lib was done with [@leonardodino](https://github.com/leonardodino) great help and probably wouldn't be possible without it.</sub>

[npm-badge]: https://img.shields.io/npm/v/etymos.svg?style=flat-square
[npm]: https://npmjs.org/package/etymos
[travis-badge]: https://img.shields.io/travis/vitordino/etymos/master.svg?style=flat-square
[travis]: https://travis-ci.org/vitordino/etymos
[coveralls-badge]: https://img.shields.io/coveralls/vitordino/etymos/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/vitordino/etymos
[bundlephobia-badge]: https://img.shields.io/bundlephobia/minzip/etymos.svg?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=etymos
