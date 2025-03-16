'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "81a3d52e61c188df928c2c2f63cc61d8",
"version.json": "1e98a4f7390d2e9d9ad60c99fb0aff05",
"index.html": "ae9b734ab9d00995489ebd0331ed8824",
"/": "ae9b734ab9d00995489ebd0331ed8824",
"main.dart.js": "18a325a81791559c2b895235830c0e31",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c81f25a8d1362ede544c1913a9c96ac1",
".git/config": "43c6ebba82991a34aed4238747237d6d",
".git/objects/61/64d6e0cbb814cd26dad3a31dc6d6e53ce645e3": "66f42d929a6f082e98244d3f188c6222",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/34c36bdf5283d606ff92e5c967eb8c46d5123d": "abce23df2d2e0b2566ecb73e5fba0ba6",
".git/objects/93/742518f31f84ad521c006ba59f608dddd3d30f": "dbe550b2b228905cb0894705ba8a3cc9",
".git/objects/5f/0d9f8a079ced0b15a8b7e5e280e589fe04495b": "a4596bbbd074d9b3006869c3bad104ad",
".git/objects/9d/34038c1472d89c566dad35912acd2cc8e3eb86": "5504fc2f402fdbc3c57eaf66224035f3",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/d3956c3a25d7cc72131a8a5a9ab86a9c496ed9": "32f36c6b67b8ea68213aa5d657b74bac",
".git/objects/f4/49a5fdb5da7a340c2504c238a470f212d2704b": "88be5b32b916dcb13cbb113a2812f52f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/2f425d831598f36e78b55c987fd3d41ded8d5f": "9b1c56ffc578871ceae018d2740e2178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/4ac296af8a0132deb1a316a7f00eca99d2ba57": "ea2b1b4e204e311429fbd76bee05a255",
".git/objects/c8/5072aa297579e700ecdb4e85844bc36972d753": "f864b396b5f8d7c76cfa54e48d6ca640",
".git/objects/c1/2f72f7cb2b7d68c53c6aa515b18b81df10a5da": "7499fc5764eb7f9a33f2a279a4715264",
".git/objects/7d/5ee574cc714bd72c320cc5e078716a89e7f2e7": "eb45dbafac50d09708f40e1164e75c0a",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/b0bd01b421853cb9698c4999a697c98950470d": "c54549d488eaa78e0abfc625806d7aae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/fffd53863c8da573a62f99a9e709f76435e4d8": "41267bc8badd8a78f8dc9dd64cf15588",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/09d62bb58b6f63c25c00a66925bc9a90cbf5b1": "09e7d0f125c8fc039aeaf0097cce624b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/99/4a81adf54a7924ed98da29a53b4ace568da25a": "769da06eac66a6c3476278d239080be9",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/64230f9f03a1b0e62d68c918046fb99cbd45d7": "827182ec9c65604db19ff3e97eb44c90",
".git/objects/a0/5675098abb90ca296266c7299166c15c0e4d1d": "d2e04ab4a824d2341433c609d01a2a4c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/a9/1c91dbf7d6ea3f47cbba0ea9625bf9bc30ad1a": "3cd3d5d767234932fa2b9a2eccbb899d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9e02ae80b227a28a252f6eb25324c9305a7a5a": "8bc14d136037d0298f71683ac8c631cc",
".git/objects/b7/e7258b9fd6c3f4e8e7ff4b096017d4122d4c5d": "976a0e5e1250c5d3b06bb0caac7dc159",
".git/objects/db/dd4a0cd48a6c50d6a35c81da6c769e09954ada": "1af14b84e5885db7d476917881a15aeb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/e79518c4cb8adc62bdc832c6ab945e8226ac4c": "457b0dd5bd68d3266958db2cf3e0e341",
".git/objects/f6/69d0dcb5579e8248cbaf2084ea193f3d938785": "1c0008e48a0721bec09c1900aad54ae7",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/98b10e70c56aa94eaa126d552da9892d6067b2": "b08e94835ed22b2a078f14986a221b15",
".git/objects/23/8a284b959cb9479caae80f374ce077c5e717da": "c173eca53598899ee92bec8d6cd68cc7",
".git/objects/15/9d75d2170c5a8b1f846224813068351d3d76e1": "96ba5a3117ed22e428183c2100694556",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/49/58ab991fa90ff5a0ac274610e03e421ce09a0d": "a1991daa57dfec8ab430b17caabbd6b3",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "55f54a28393b1f19e993c6e3324ef089",
".git/logs/refs/heads/main": "55f54a28393b1f19e993c6e3324ef089",
".git/logs/refs/remotes/origin/HEAD": "e5aa129c08e6f9f0b080d0d5f8fcce94",
".git/logs/refs/remotes/origin/main": "709416a07dd5d69ad89d393f38d23ccd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c90740fb7d6257e28ad79b78d73cf19f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c90740fb7d6257e28ad79b78d73cf19f",
".git/index": "73b606be80f12eca6195c18e562611eb",
".git/COMMIT_EDITMSG": "e6e3c90726f954012f8d20a338492a66",
".git/FETCH_HEAD": "e3756e4fafa86e59cc0e0302338f1f57",
"assets/AssetManifest.json": "e33fe2f11747d94f7c93ce83dbdd96e4",
"assets/NOTICES": "b600f5f6ac170a1866d8f1d55cec955c",
"assets/arham/car.jpg": "5725d278f749005cb04b8952835a6259",
"assets/arham/star.json": "45ac46c096667dbe506ab850658d6a29",
"assets/arham/girl.jpeg": "b0a71100cbb6041ed616cefaf97e2365",
"assets/arham/car2.jpeg": "377fbeaaf0c4b43b22a3ef763015166f",
"assets/FontManifest.json": "d60060feaa534fc0e34155748d69612b",
"assets/AssetManifest.bin.json": "1f88657fb90b9e610714635f080c3484",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5994659e09d11c5440d5743cddf331f8",
"assets/fonts/fiji.ttf": "ec1b2f280f4da66724d41ecd5275ef27",
"assets/fonts/baloo.ttf": "77fa01809501615f05339207ab9bad49",
"assets/fonts/baloo2.ttf": "77fa01809501615f05339207ab9bad49",
"assets/fonts/MaterialIcons-Regular.otf": "83ae931c6ce66f70529f4a0ef3c4169a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
