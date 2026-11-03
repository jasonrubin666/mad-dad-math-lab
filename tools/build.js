const fs = require('fs');
const Packager = require('@turbowarp/packager');
(async () => {
  const [src, out] = process.argv.slice(2);
  const project = await Packager.loadProject(fs.readFileSync(src));
  const p = new Packager.Packager();
  p.project = project;
  p.options.target = 'zip';
  p.options.app.windowTitle = 'Mad Dad Math Lab';
  p.options.app.packageName = 'mad-dad-math-lab';
  p.options.loadingScreen.text = 'Mad Dad Math Lab';
  p.options.loadingScreen.progressBar = true;
  p.options.appearance.accent = '#ff4c4c';
  p.options.controls.fullscreen.enabled = true;
  p.options.projectId = '818082244';
  // iPad: no text selection, long-press callouts, or double-tap/pinch zoom on the stage
  p.options.custom.css = `
html, body { touch-action: none; overscroll-behavior: none; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; -webkit-tap-highlight-color: transparent; }
`;
  p.options.custom.js = `
document.addEventListener('gesturestart', e => e.preventDefault());
document.addEventListener('dblclick', e => e.preventDefault(), { passive: false });
`;
  const result = await p.package();
  fs.writeFileSync(out, Buffer.from(result.data));
  console.log('wrote', out, result.data.byteLength);
})().catch(e => { console.error(e); process.exit(1); });
