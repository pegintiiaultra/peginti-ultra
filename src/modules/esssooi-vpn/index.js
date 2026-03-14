'use strict';

const core = require('./core');

module.exports = {
  nom: 'ESSOOI_VPN',
  version: '0.1.0',
  core,
  
  init() {
    console.log('🚀 ESSOOI VPN module OK');
    return this;
  }
};
