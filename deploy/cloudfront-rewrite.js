// CloudFront Function (cloudfront-js-2.0), viewer-request. S3 REST origins
// have no index document, so map /cv and /cv/ onto cv/index.html.
//
// Deployed on distribution E17ZOVS4YQNCX7 under the name `demo-binaryc-at`;
// this file is the source of record. Publish changes with:
//   aws cloudfront update-function --name demo-binaryc-at ... && publish-function
async function handler(event) {
    var request = event.request;
    var uri = request.uri;

    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }

    return request;
}
