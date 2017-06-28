var fs = require('fs');
var note = '';

module.exports = {
    hooks: {
        // called on each book & each language book
        'init': function() {
            note = '{% hint \'warning\' %}\n' +
                   'This documentation is outdated. Please see the most recent version here:\n' +
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
