import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_1lynnkgT.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/ca/agenda.astro.mjs');
const _page1 = () => import('./pages/ca/agenda/_---slug_.astro.mjs');
const _page2 = () => import('./pages/ca/contacto.astro.mjs');
const _page3 = () => import('./pages/ca/recursos.astro.mjs');
const _page4 = () => import('./pages/ca/recursos/_---slug_.astro.mjs');
const _page5 = () => import('./pages/ca.astro.mjs');
const _page6 = () => import('./pages/en/agenda.astro.mjs');
const _page7 = () => import('./pages/en/agenda/_---slug_.astro.mjs');
const _page8 = () => import('./pages/en/contacto.astro.mjs');
const _page9 = () => import('./pages/en/recursos.astro.mjs');
const _page10 = () => import('./pages/en/recursos/_---slug_.astro.mjs');
const _page11 = () => import('./pages/en.astro.mjs');
const _page12 = () => import('./pages/es/agenda.astro.mjs');
const _page13 = () => import('./pages/es/agenda/_---slug_.astro.mjs');
const _page14 = () => import('./pages/es/contacto.astro.mjs');
const _page15 = () => import('./pages/es/recursos.astro.mjs');
const _page16 = () => import('./pages/es/recursos/_---slug_.astro.mjs');
const _page17 = () => import('./pages/es.astro.mjs');
const _page18 = () => import('./pages/rss.xml.astro.mjs');
const pageMap = new Map([
    ["src/pages/ca/agenda/index.astro", _page0],
    ["src/pages/ca/agenda/[...slug].astro", _page1],
    ["src/pages/ca/contacto/index.astro", _page2],
    ["src/pages/ca/recursos/index.astro", _page3],
    ["src/pages/ca/recursos/[...slug].astro", _page4],
    ["src/pages/ca/index.astro", _page5],
    ["src/pages/en/agenda/index.astro", _page6],
    ["src/pages/en/agenda/[...slug].astro", _page7],
    ["src/pages/en/contacto/index.astro", _page8],
    ["src/pages/en/recursos/index.astro", _page9],
    ["src/pages/en/recursos/[...slug].astro", _page10],
    ["src/pages/en/index.astro", _page11],
    ["src/pages/es/agenda/index.astro", _page12],
    ["src/pages/es/agenda/[...slug].astro", _page13],
    ["src/pages/es/contacto/index.astro", _page14],
    ["src/pages/es/recursos/index.astro", _page15],
    ["src/pages/es/recursos/[...slug].astro", _page16],
    ["src/pages/es/index.astro", _page17],
    ["src/pages/rss.xml.js", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "dc5a915c-a808-42fe-bff4-22e2d8932bc6"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
