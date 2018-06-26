function replaceGenericLink() {
    var latestLink = document.querySelector("a.latest-docs");
    var root = gitbook.state.root;
    var url = window.location.href;
    var idx = root.lastIndexOf('/', root.length-2);
    if (latestLink && idx > 7 && url.indexOf(root) === 0) {
        var book = root.slice(idx);
        var path = book + url.slice(root.length);
        latestLink.href = 'https://docs.arangodb.com/latest' + path;
        latestLink.innerHTML = '<strong>Try latest</strong>';
    }
}

gitbook.events.bind('start', function(e, config) {
    replaceGenericLink();
});

gitbook.events.bind('page.change', function(e) {
    replaceGenericLink();
});
