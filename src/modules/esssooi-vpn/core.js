'use strict';

module.exports = {
  async provisionClient(userId) {
    return {
      userId,
      service: "ESSOOI_VPN",
      status: 'pending',
      timestamp: new Date().toISOString(),
      message: 'Provisionnement client WireGuard en cours...',
      nextStep: 'ovh-deploy'
    };
  },

  async getStatus() {
    return {
      service: "ESSOOI_VPN",
      version: '0.1.0',
      healthy: true,
      nodes: [],
      clients: 0,
      message: 'MVP Peginti Ultra - pret pour OVH integration'
    };
  },

  async listNodes() {
    return {
      nodes: [
        { id: 'ovh-gra-1', region: 'GRA (France)', status: 'pending' },
        { id: 'ovh-sbc-1', region: 'SBC (Afrique)', status: 'pending' }
      ]
    };
  }
};
