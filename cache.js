self.addEventListener("fetch", event => {
    async function cacheAndReturnRequest() {
      // Get the response from the server.
      const fetchResponse = await fetch(event.request.url);
      // Open the app's cache.
      const cache = await caches.open("cache-señas");
      // Put the response in cache.
      cache.put(event.request.url, fetchResponse.clone());
      // And return the response.
      return fetchResponse.
    }
  
    event.respondWith(cacheAndReturnRequest());
  });