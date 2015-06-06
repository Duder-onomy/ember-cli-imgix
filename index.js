/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-imgix',

  included: function(app) {
    this.app.import(app.bowerDirectory + '/blueimp-md5/js/md5.js');
    this.app.import(app.bowerDirectory + '/lodash/lodash.js');
    this.app.import(app.bowerDirectory + '/uri.js/src/URI.js');
    this.app.import(app.bowerDirectory + '/imgix-core-js/dist/imgix-core-js.umd.js');
    this.app.import(app.bowerDirectory + '/ember-cli-imgix-core-js-shim/imgix-core-js-shim.js');
  }
};
