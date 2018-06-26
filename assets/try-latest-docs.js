function replaceGenericLink() {
    var latestLink = document.querySelector("a.latest-docs");
    var url = /^(https?:\/\/.+?)(\/devel|\d+\.\d+)?(\/.*)/.exec(window.location.href);
    if (latestLink && url) {
        latestLink.href = 'https://docs.arangodb.com/latest' + url[3];
        latestLink.innerHTML = '<strong>Try latest</strong>';
    }
}

gitbook.events.bind('start', function(e, config) {
    replaceGenericLink();
});

gitbook.events.bind('page.change', function() {
    replaceGenericLink();
});
