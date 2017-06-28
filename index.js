var fs = require('fs'),
    headerString = '',
    cfg;

module.exports = {
    hooks: {
        // called on each book & each language book
        'init': function() {
            cfg = this.config.get('pluginsConfig.localized-header'), _this = this;

            headerString = '{% hint \'warning\' %}' +
                           'This documentation is outdated. Please see the most recent version here:' +
                           '[**Latest Manual**](https://docs.arangodb.com/latest/Manual/)' +
                           '{% endhint %}';
            _this.renderBlock('markdown', headerString)
                .then(function(html) {
                    headerString = html;
                }, this.log.error);

        },
        'page:before': function(page) {
            // append to the website renderer only
            if (this.output.name !== 'website') return page;
            page.content = '\n' + headerString + page.content;
            return page;
        }
    }
};
