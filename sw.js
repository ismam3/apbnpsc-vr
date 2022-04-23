self.addEventListener("install",e=>{
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./logo/192.png","./logo/512.png","./models/college24.glb","./models/mesh8.glb","./advertisement.png"])
        })
    )
});

self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(response=>{
            return response||fetch(e.request)
        })
    );
})