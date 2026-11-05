const C='signbridge-v5-location-isl-nav';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['/','/index.html','/manifest.json','/icon.svg'])))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>clients.claim())));
// Network first (so updates and new models appear), cache as offline fallback. Map tiles/APIs are not cached.
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);
const cdn=/unpkg\.com|cdn\.jsdelivr\.net|storage\.googleapis\.com\/mediapipe/.test(u.host+u.pathname);if(u.origin!==location.origin&&!cdn)return;
e.respondWith(fetch(e.request).then(r=>{if(r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp))}return r}).catch(()=>caches.match(e.request).then(h=>h||caches.match('/'))))});
