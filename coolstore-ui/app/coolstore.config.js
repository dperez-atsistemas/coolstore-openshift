var config =
{
  API_ENDPOINT: (process.env.COOLSTORE_GW_ENDPOINT != null ? process.env.COOLSTORE_GW_ENDPOINT  : process.env.COOLSTORE_GW_SERVICE + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE),
  SECURE_API_ENDPOINT: (process.env.SECURE_COOLSTORE_GW_ENDPOINT != null ? process.env.SECURE_COOLSTORE_GW_ENDPOINT  : process.env.SECURE_COOLSTORE_GW_SERVICE + '-' + process.env.SECURE_COOLSTORE_GW_SERVICE),
  SSO_ENABLED: process.env.SSO_URL ? true : false,
  API_KEY: '?user_key=6167941de39fe0002892669da8ee4562',
  API_GW: 'https://api-2445582949711.production.gw.apicast.io'
};

module.exports = config;
//"https://api-2445582949711.production.gw.apicast.io/products?user_key=6167941de39fe0002892669da8ee4562"
