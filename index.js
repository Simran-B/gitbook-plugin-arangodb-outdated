var fs = require('fs'),
    headerString = '',
    cfg;

module.exports = {
    hooks: {
        // called on each book & each language book
        'init': function() {
            cfg = this.config.get('pluginsConfig.localized-header'), _this = this;

            /*
            this.readFileAsString(cfg.filename)
                .then(function(data) {
                    return _this.renderBlock('markdown', data);
                }, this.log.error)
                .then(function(html) {
                    headerString = html;
                }, this.log.error);
            */
            headerString = 'This documentation is outdated. Please see the latest version here: ';
        },
        'page:before': function(page) {
            // append to the website renderer only
            if (this.output.name !== 'website') return page;
            var newPage = 'https://docs.arangodb.com/3.1/Manual/' + page.filePath
                .replace(/README\.md$/, 'index.html')
                .replace(/\.md$/, '.html');
            page.content = '\n{% localizedheader %}' + headerString + newPage + '{% endlocalizedheader%}' + page.content;
            return page;
        }
    },
    blocks: {
        'localizedheader': {
            process: function(block) {
                var hline = cfg.hline ? '<hr>' : '';
                return '<div id="page-header" class="localized-header">' + block.body + hline + '</div>';
            }
        }
    }
};
