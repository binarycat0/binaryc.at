// CloudFront Function (runtime: cloudfront-js-2.0), viewer-request event.
//
// S3 REST origins have no concept of an index document, so a request for
// /about or /about/ would 404 against the object key. Astro's directory
// build format writes about/index.html, so rewrite both onto that key.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.split('/').pop().includes('.')) {
    // Extensionless path: /about -> /about/index.html
    request.uri = uri + '/index.html';
  }

  return request;
}
