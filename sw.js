const C='signbridge-v1',A=['/','/index.html','/manifest.json','/icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);
// Cache app shell + CDN libraries (Leaflet, MediaPipe). Map tiles/APIs stay network-only.
const cdn=/unpkg\.com|cdn\.jsdelivr\.net|storage\.googleapis\.com\/mediapipe/.test(u.host+u.pathname);
if(u.origin!==location.origin&&!cdn)return;
e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match('/'))))});
