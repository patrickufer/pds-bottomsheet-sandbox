# PDS + react-spring-bottom-sheet + NextJS - Minimal Repo

Made to demonstrate BottomSheet PDS PButton bug

## Setup

Make sure you authenticate your NPM_TOKEN to be able to install PDS library: https://designsystem.porsche.com/latest/start-coding/introduction

From root dir run
`pnpm i`
then
`pnpm run dev`

## Summary of issue

When React Spring Bottom Sheet `blocking={true}` is enabled, PDS button no longer are clickable (HTML5 `<button>` elements still work). When blocking is disabled via `blocking={false}`, PDS button work again (but you lose all accessibility enhancements of the bottom sheet associated with `blocking`).

Link to [React Spring Bottom Sheet](https://github.com/stipsan/react-spring-bottom-sheet)
