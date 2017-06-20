var fs = require('fs'),
    headerString = '',
    cfg,
    hasHeaderFile;

module.exports = {
    hooks: {
        // called on each book & each language book
        'init': function() {
            cfg = this.config.get('pluginsConfig.localized-header'), _this = this;

            try {
                fs.statSync(this.resolve(cfg.filename));
                hasHeaderFile = true;
            } catch (e) {
                hasHeaderFile = false;
                return;
            }

            deprecationWarning(this);

            this.readFileAsString(cfg.filename)
                .then(function(data) {
                    return _this.renderBlock('markdown', data);
                }, this.log.error)
                .then(function(html) {
                    headerString = html;
                }, this.log.error);
        },
        'page:before': function(page) {
            // append to the website renderer only
            if (this.output.name !== 'website' || !hasHeaderFile) return page;
            page.content = '\n{% localizedheader %}' + headerString + '{% endlocalizedheader%}' + page.content;
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

function deprecationWarning(ctx) {

    if (!hasHeaderFile) return;

    // search website.css for deprecated style selector
    ctx.readFileAsString(ctx.config.get('styles.website'))
        .then(function(css) {
            var lines = css.split('\n');

            for (var i = 0; i < lines.length; i++) {
                if (lines[i].search('#page-header') !== -1) {
                    return ctx.log.warn(
                        '[localized-header] the css selector \'#page-header\'' +
                        'is deprecated, use \'.localized-header\' instead.'
                    )
                }
            };
        })
        .catch(function(err) {
            // no style file present, ignore
        });
}
