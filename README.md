# binaryc.at

Personal CV site. https://binaryc.at

Static [Astro](https://astro.build) site, hosted on S3 behind CloudFront.

## Editing

All content lives in [`src/data/cv.ts`](src/data/cv.ts) — one typed object.
The page renders whatever is in it, so adding a role means adding an entry,
not touching markup.

## Commands

| Command | Does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:4321 |
| `npm run build` | Static build into `dist/` |
| `npm run preview` | Serve the built output locally |
| `npm run check` | Type-check the Astro and TypeScript files |

## Deploying

See [DEPLOY.md](DEPLOY.md) for the one-time AWS setup, then:

```sh
BUCKET=... DISTRIBUTION_ID=... ./scripts/deploy.sh
```

## Notes

- Light and dark themes follow the OS setting; there is no toggle.
- The print stylesheet is maintained — `⌘P` produces a usable PDF of the CV.
