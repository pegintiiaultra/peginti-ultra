'use strict';

module.exports = {
  async deployNode(region = 'gra') {
    return {
      nodeId: `ovh-${region}-${Date.now()}`,
      region,
      status: 'deploying',
      instanceType: 'c2-15', // OVH Public Cloud
      wireguard: {
        port: 51820,
        endpoint: `${region}.ovh.net`,
        allowedIPs: '0.0.0.0/0'
      },
      eta: '2min'
    };
  },

  async listOVHInstances() {
    // TODO: OVH API v2
    return {
      total: 2,
      regions: ['GRA9 (France)', 'SBC1 (Afrique)'],
      ready: 0
    };
  }
};
