import { registerApplication, start } from 'single-spa';

registerApplication(
  '@single-spa/welcome',
  () => System
    .import('https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'),
  (location) => location.pathname === '/',
);

registerApplication({
  name: '@phantomxjoker/app-alpha',
  app: () => System.import('@phantomxjoker/app-alpha'),
  activeWhen: ['/app-alpha'],
});

registerApplication({
  name: '@phantomxjoker/app-beta',
  app: () => System.import('@phantomxjoker/app-beta'),
  activeWhen: ['/app-beta'],
});

start({
  urlRerouteOnly: true,
});
