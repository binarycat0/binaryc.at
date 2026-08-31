// CloudFront Function (cloudfront-js-2.0), viewer-request. S3 REST origins
// have no index document, so map /about and /about/ onto about/index.html.
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.split('/').pop().includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
