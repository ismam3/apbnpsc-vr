if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(registration=>{
        console.log("Service Worker registered!");
        console.log(registration);
    }).catch(error=>{
        console.log("Service Worker registration failed")
        console.log(error);
    })
}

document.querySelector('a-scene').addEventListener('enter-vr', function () {
    document.querySelector("#cameraRig").setAttribute("position","0 0.3 0");
    document.querySelector("#controller").setAttribute("teleport-controls","cameraRig: #cameraRig;teleportOrigin: #head;startEvents:starttouch;endEvents:endtouch;curveShootingSpeed:20;hitCylinderRadius:0.4;collisionEntities: [mesh]");
 });
document.querySelector('a-scene').addEventListener('exit-vr', function () {
    document.querySelector("#cameraRig").setAttribute("position","0 1.6 0");
    document.querySelector("#controller").setAttribute("teleport-controls","cameraRig: #cameraRig;teleportOrigin: #head;startEvents:starttouch;endEvents:endtouch;curveShootingSpeed:5;hitCylinderRadius:0.1;collisionEntities: [mesh]")
 });