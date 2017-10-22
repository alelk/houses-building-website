const icons48px_white = '{store,menu}';
const icons24px_white = 'call';

const materialDesignFolders = '{action,alert,av,communication,navigation}';

module.exports = [{
    src: './node_modules/material-design-icons/'+ materialDesignFolders +
    '/drawable-mdpi/ic_' + icons48px_white + '_white_48dp.png',
    destImage: './src/img/sprite-48px-white.png',
    destCSS: './src/img/sprite-48px-white.css',
    imgPath: './sprite-48px-white.png',
    cssOpts: {
        cssClass: function (item) {
            return '.' + item.name.slice(0, -4) + '48px';
        }
    }
}, {
    src: './node_modules/material-design-icons/'+ materialDesignFolders +
    '/drawable-mdpi/ic_' + icons24px_white + '_white_24dp.png',
    destImage: './src/img/sprite-24px-white.png',
    destCSS: './src/img/sprite-24px-white.css',
    imgPath: './sprite-24px-white.png',
    cssOpts: {
        cssClass: function (item) {
            return '.' + item.name.slice(0, -4) + '24px';
        }
    }
}];