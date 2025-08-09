import { writeFileSync, readFileSync } from 'fs';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

import Nameplate from '../src/og/Nameplate';
import ProjectsGrid from '../src/og/ProjectsGrid';
import SingleProject from '../src/og/SingleProject';
import Terminal from '../src/og/Terminal';
import Blueprint from '../src/og/Blueprint';
import StackBadges from '../src/og/StackBadges';
import HeadshotSignature from '../src/og/HeadshotSignature';
import CodeOverlay from '../src/og/CodeOverlay';

const WIDTH = 1200, HEIGHT = 630;

async function renderToPng(element: JSX.Element, outPath: string) {
  const fontData = readFileSync('public/assets/fonts/Inter_28pt-SemiBold.ttf'); // adjust path/font
  const svg = await satori(element, {
    width: WIDTH,
    height: HEIGHT,
    fonts: [{ name: 'Inter', data: fontData, weight: 600, style: 'normal' }],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();
  writeFileSync(outPath, png);
  console.log('✔', outPath);
}

(async () => {
  await renderToPng(Nameplate({}), 'public/og-home-nameplate.png');
  await renderToPng(ProjectsGrid({}), 'public/og-home-projects.png');
  await renderToPng(SingleProject({ project: 'Pollyglot', oneLiner: 'Realtime EN→ES/FR/JA translator' }), 'public/og-pollyglot.png');
  await renderToPng(Terminal({}), 'public/og-home-terminal.png');
  await renderToPng(Blueprint(), 'public/og-home-blueprint.png');
  await renderToPng(StackBadges({}), 'public/og-home-stack.png');
  await renderToPng(HeadshotSignature({}), 'public/og-home-headshot.png');
  await renderToPng(CodeOverlay({}), 'public/og-home-code.png');
})();
