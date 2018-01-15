// New copy task for font files
module.exports = {
  copyFontAwesome: {
    src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  copyMaterialIcons: {
    src: ['{{ROOT}}/node_modules/ionic2-material-icons/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  }
};
