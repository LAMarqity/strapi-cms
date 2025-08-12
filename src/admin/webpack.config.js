'use strict';

module.exports = (config, webpack) => {
  // Add regenerator-runtime polyfill to fix async/await issues
  config.entry.main.unshift('regenerator-runtime/runtime');
  
  return config;
};