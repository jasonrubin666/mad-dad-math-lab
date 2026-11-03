# Mad Dad Math Lab

Web version of the Scratch game [Mad Dad Math Lab](https://scratch.mit.edu/projects/818082244/), playable on desktop and iPad (touch).

- `docs/` — the packaged game, served by GitHub Pages
- `MadDad.sb3` — Scratch project source
- `tools/build.js` — rebuilds `docs/` from the `.sb3` using the TurboWarp packager

## Rebuild after editing in Scratch

1. Download the project from Scratch (File → Save to your computer) and replace `MadDad.sb3`.
2. Run:

```bash
npm i @turbowarp/packager && node tools/build.js MadDad.sb3 /tmp/web.zip && rm -rf docs && unzip -q /tmp/web.zip -d docs && touch docs/.nojekyll
```

Then re-add the iPad meta tags and icons to `docs/index.html` (see git history).
