# Matomo + NextJS - Minimal Repo

Made to demonstrate BottomSheet PII bug

## Setup

Replace the environment variables with your own inside `.env`

```txt
NEXT_PUBLIC_MATOMO_URL=replace-with-yours-here
NEXT_PUBLIC_MATOMO_SITE_ID=replace-with-yours-here
```

## Summary of issue

We can see fields marked with `data-matomo-mask` on Matomo screen recordings when those fields are placed inside of the BottomSheet component.

Link to [React Spring Bottom Sheet](https://github.com/stipsan/react-spring-bottom-sheet)