const cache_name = "cache_v1.0.2"

self.addEventListener("install",e=>{
    self.skipWaiting();
    e.waitUntil(
        caches.open(cache_name).then(cache=>{
            return cache.addAll(["./","./logo/192.png","./logo/512.png","./models/college24.glb","./models/mesh8.glb","./advertisement.png","./a-frame/1-2-0.min.js","./a-frame/aframe_environment.min.js","./a-frame/teleport-control.min.js"])
        })
    )
});

self.addEventListener("activate", e=>{
    e.waitUntil(
        caches.keys().then(keys=>{
            console.log(keys)
            return Promise.all(keys
                .filter(key=>key !== cache_name)
                .map(key=> caches.delete(key))
            )
        })
    )
})

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response||fetch(e.request)
        })
    );
})