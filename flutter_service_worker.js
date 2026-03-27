'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1152db287229883bcd01e242907a4680",
".git/config": "e06b80edbfc5a2ca7491e5bfaf589ec6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "62df94ee9bcd1aa17bc0657c873b28cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "58a646ae142326e43ad92c2dcd160313",
".git/logs/refs/heads/main": "58a646ae142326e43ad92c2dcd160313",
".git/logs/refs/remotes/origin/HEAD": "04281b9ad06279426c916c9e48b7d507",
".git/logs/refs/remotes/origin/main": "45f7a87805eebe8816c5b4f89e799d30",
".git/objects/0b/d6259d30cf0329e15373093a9d2baa4c7ce22d": "a3d5dd9946f4aa066f2124c8e53ade7b",
".git/objects/0f/d1c1dc7c305d0e51bb87e2a3c28775911a31fa": "4ab7b4180be505e46ebac21b1fdd44f5",
".git/objects/22/f02232dc2161113717e8431899f4be3cc98c1b": "cc4b965c08be64df5979be1be93775f5",
".git/objects/27/a472a581366cc681d7b62cb4646f2262b06a89": "844264341d7c649bc21cc21e2cd78479",
".git/objects/2d/9fab92661de325701f75fb795d54c9c4536f21": "5c0b339a66516ba9b8c7a79249bc1adb",
".git/objects/38/42f104bc40f206b4a3f9ec949312d349225ef6": "66da78fb1d8723ca01330395ef073f5f",
".git/objects/39/d816dbffa1630945cac181543ffb1a90393b03": "357ba2dcf46bf4e8e853f1f7ee01e5aa",
".git/objects/48/a325431afd6151f30ecf3d9a69d3523f009ff8": "fa2c46ce53a834dae8aa3bd19291a8cb",
".git/objects/49/722afaabc5cc6b9d0d1acc5de4d39302fa562b": "1d6bcddbee711a378285e2a9866fbb24",
".git/objects/52/1d8d3a566b568bff74229d396eca19ea66285f": "5464f21e5f290c0109859cf800052fd1",
".git/objects/64/233a9e9589b022576fca2cc18396d3744173c4": "da7b172a865e18f1f7bfee6a8bdad670",
".git/objects/67/92fbfd31422c52f7e4a738a84761c88fcfe044": "60fa2204842b341253fd388116567bf4",
".git/objects/76/8993c55619c878ce0e9089e4e880cad8c6ca30": "40d15e60f9e9c10497cfbf51d1c63bda",
".git/objects/76/b21304320836e4d39dc89f9b5c1b087577d0e7": "f5fdc1009fc146a6229587452348ee87",
".git/objects/89/06339baf4b1668636bc8cedc3b7c5bc4817291": "a6928e7cce88eed4f8b526afd030a40d",
".git/objects/9e/570ceb4af98bffe705a5921a035256970f8600": "3d44a7415f8b8f74be6da8b63507d3b2",
".git/objects/9f/4020ee94116522ef7fe522642ede25c41c6708": "671514ae99f0a2f18bac445bcd574f43",
".git/objects/a4/c7ead3710612f57c28529bfa130e9fc009be25": "5b8b01c773747194904c16bbac9e0f7e",
".git/objects/ce/8d121bb9360ecd55332c9c40b644dfd45219f5": "992db52bc240284f016d00c717e547da",
".git/objects/d4/5c3d326b80cb08c19ed83737821527d6d36522": "584bc61b46c14decb4703fb02123d71b",
".git/objects/d5/c56b186370d534e0e3bb9122fca75174f54896": "1df965a69c8d0512853df6aeef371554",
".git/objects/d6/a3d65080a0d7fd021a12fca08bb6eb9976e2f9": "d45ddb64fbd5e32eaea57a53453a02d3",
".git/objects/e7/ff5ab2efafb7be4230932f3aad3819d58ebbb5": "93f6cafe55d81b192ccc9840eff03226",
".git/objects/ec/3a51c1189e147a6dad03330338476a520b6ec8": "f97b05c14353dc8b378b496b317d6274",
".git/objects/ed/fbd42b9f2bf570f43a0fcb9a08b4c9e66c67d4": "df1e06803de97427d3ba9cfb681b0caa",
".git/objects/f4/777a0bd306c801819cd140524c75b81ba9a777": "6df4f188f92a815eaff928ba84151faf",
".git/objects/pack/pack-1b058f412393e80a7dfc18c1c848d7580147ba4b.idx": "4fd71a9209311a7b8534fd582e14fb4f",
".git/objects/pack/pack-1b058f412393e80a7dfc18c1c848d7580147ba4b.pack": "a6973a5e6e8d00dd8c8e619af2b02879",
".git/packed-refs": "2f91f956a5ad4144797de2ccdc99ccf7",
".git/refs/heads/main": "6f38ebab12ec929ec5f5f7535ab1ce79",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6f38ebab12ec929ec5f5f7535ab1ce79",
"assets/AssetManifest.bin": "b63c3423bcf64010948779b61b231fa3",
"assets/AssetManifest.bin.json": "2368e781e5803b064c4306af8d9ce2a8",
"assets/assets/puppy_dark.png": "9decffee4c771dd32ce7d5f045dcea5f",
"assets/assets/puppy_light.png": "de2e0c856a3c4ba902dfb166a1d914e7",
"assets/assets/puzzles.json": "a2fe269dad4cf9eaac05fc53f7a12445",
"assets/assets/scorpio.png": "d564b166e9d751f55a8f46588354b4e1",
"assets/assets/symbol_grid.png": "3990ba0e1647842300ab81a13f530484",
"assets/assets/trash_bins.png": "1c2cfa0842383590e4da993345f85fe5",
"assets/assets/uncover/1.png": "a457ebccdc0f185ce45ac1a8174a3e78",
"assets/assets/uncover/2.png": "257ef535dec4a2544b40e6c07477d82d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "017e5481d0565c7d6d19b512d7819afa",
"assets/NOTICES": "f95b4f9267cd79cadbca7aab496b9b97",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "d0859ef0a89bd0a09e91f775d987dcc2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1e45ac0515bfaed19ad2451c70592892",
"/": "1e45ac0515bfaed19ad2451c70592892",
"main.dart.js": "d48214c2c9e7763ae31436e84769699e",
"manifest.json": "7d30dba5c9a8c44620dedaf09a5d3355",
"version.json": "d151dd79eff5b2f885d5235897bfa72f"};
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
