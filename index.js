var note = '';
var version = '';
var eolDate = '';

module.exports = {
    book: {
        assets: "./assets",
        js: [
            "try-latest-docs.js"
        ]
    },
    hooks: {
        // called on each book & each language book
        'init': function() {
            var versionMajorMinor = /(^v?\d+\.\d+)/.exec(this.config.get('version'));
            if (versionMajorMinor && versionMajorMinor[1]) {
                version = versionMajorMinor[1];
            }
            eolDate = this.config.get('pluginsConfig.arangodb-outdated.eolDate');
            note = '{% hint \'warning\' %}\n';
            if (version) {
                note += 'ArangoDB ' + version;
            } else {
                note += 'This version of ArangoDB';
            }
            if (eolDate) {
                var currentDate = new Date().toISOString();
                if (currentDate >= date) {
                    note += ' reached End of Life (EOL) on ' + eolDate + ' and is no longer supported.\n\n';
                } else {
                    note += ' reaches End of Life (EOL) on ' + eolDate + ' and will no longer be supported.\n\n';
                }
            } else {
                note += ' reached End of Life (EOL) and is no longer supported.\n\n';
            }
            
            note += 'This documentation is outdated. Please see the most recent version here:\n' +
                    '<a href="https://docs.arangodb.com/latest/Manual/" class="latest-docs"><strong>Latest Manual</strong></a>\n' +
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
