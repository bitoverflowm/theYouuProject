//import GhostContentAPI from '@tryghost/content-api';
import GhostAdminAPI from '@tryghost/admin-api'

const api = new GhostAdminAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: 'v5.0',
});

module.exports = api;