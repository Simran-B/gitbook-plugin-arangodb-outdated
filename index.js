var note = '';
var version = '';

module.exports = {
    hooks: {
        // called on each book & each language book
        'init': function() {
            var versionMajorMinor = /(^v?\d+\.\d+)/.exec(this.book.version);
            if (versionMajorMinor && versionMajorMinor[1]) {
                version = versionMajorMinor[1];
            }
            note = '{% hint \'warning\' %}\n'
            if (version) {
                note += 'ArangoDB ' + version + 'reached End of Life (EOL) and is no longer supported.\n\n'
            }
            note += 'This documentation is outdated. Please see the most recent version here:\n' +
                    '[**Latest Manual**](https://docs.arangodb.com/latest/Manual/)\n' +
                    '{% endhint %}\n\n';
        },
        'page:before': function(page) {
            // append to the website renderer only
            if (this.output.name !== 'website') return page;
            page.content = note + page.content;
            return page;
        }
    }
};
