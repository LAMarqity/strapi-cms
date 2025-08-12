'use strict';

module.exports = (config, webpack) => {
  // Add regenerator-runtime polyfill to fix async/await issues
  if (config.entry && Array.isArray(config.entry)) {
    config.entry.unshift('regenerator-runtime/runtime');
  } else if (config.entry && config.entry.main && Array.isArray(config.entry.main)) {
    config.entry.main.unshift('regenerator-runtime/runtime');
  } else {
    // Handle different entry structures
    const originalEntry = config.entry;
    config.entry = {
      main: ['regenerator-runtime/runtime', originalEntry]
    };
  }
  
  return config;
};