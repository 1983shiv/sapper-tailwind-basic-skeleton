!function(){"use strict";const e=1620622295669,t=`cache${e}`,s=["/client/client.61160eaf.js","/client/inject_styles.5607aec6.js","/client/index.d2769f30.js","/client/Image.df852270.js","/client/_commonjsHelpers.91583ccb.js","/client/portfolio.8223cd08.js","/client/services.42cde36b.js","/client/contact.6f4c3195.js","/client/about.fa8b517f.js","/client/SvelteSeo.bf02affc.js","/client/[permalink].415402f5.js","/client/Tags.b9e463f0.js","/client/posts.20544ba0.js","/client/PostList.8b97bd83.js","/client/index.6e79cbe6.js","/client/[slug].bfdc2843.js","/client/[tag].3cc721dc.js"].concat(["/service-worker-index.html","/app1.png","/app2.png","/favicon.png","/g/g/seo2-400-400.png","/g/g/seo2-400-400.webp","/g/home-hero-1200.jpg","/g/home-hero-1200.webp","/g/home-hero-400.jpg","/g/home-hero-400.webp","/g/home-hero-800.jpg","/g/home-hero-800.webp","/g/seo2-400.png","/g/seo2-400.webp","/global.css","/home-hero.jpg","/index.css","/logo-192.png","/logo-512.png","/manifest.json","/seo2.png","/tailwind.css"]),c=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),n=s.protocol.startsWith("http"),o=s.hostname===self.location.hostname&&s.port!==self.location.port,a=s.host===self.location.host&&c.has(s.pathname),i="only-if-cached"===t.request.cache&&!a;!n||o||i||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const c=await s.match(t);if(c)return c;throw e}}(t.request))())}))}();
