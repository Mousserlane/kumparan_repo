require('babel-core/register')({
  ignore: /node_modules\//
});
var jsdom = require('jsdom');
require.extensions['png'] = function(){return null}

global.document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = {userAgent: 'node.js'};

function no_op(){
  return {};
}

require.extensions['.css'] = no_op;
require.extensions['.svg'] = no_op;
require.extensions['.png'] = no_op;
