!function(){"use strict";const e=1620555878677,t=`cache${e}`,s=["/client/client.43e5faed.js","/client/inject_styles.5607aec6.js","/client/index.8e988fdc.js","/client/portfolio.da59fc02.js","/client/services.28b106a0.js","/client/contact.fcce389c.js","/client/about.6d0db8bb.js","/client/index.a072359d.js","/client/[slug].758b812b.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/home-hero.jpg","/index.css","/logo-192.png","/logo-512.png","/manifest.json","/tailwind.css"]),c=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),n=s.protocol.startsWith("http"),a=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&c.has(s.pathname),o="only-if-cached"===t.request.cache&&!i;!n||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const c=await s.match(t);if(c)return c;throw e}}(t.request))())}))}();
