import axios from 'axios';
import _ from 'lodash';

export const CONFIG = {
  DEBUG: false,
  HOST: 'https://5c8z3wzla6.execute-api.us-west-2.amazonaws.com/dev/mail',
};

function addDomain(request) {
  request.url = request.url || '';
  // if the url is not matching a protocol, assign the base URL
  if (!/\:\/\//.test(request.url) && typeof CONFIG.HOST !== 'undefined') {
    const base = CONFIG.HOST.replace(/\/$/, '');
    const url = request.url.replace(/^\//, '');
    request.url = `${base}/${url}`;
  }
  CONFIG.DEBUG && console.log('Starting Request', request);
  return request;
}

async function addHeaders(request) {
  //   const token_type = Session.token_type;
  //   const access_token = Session.request_token;
  //   request.headers.Authorization = `${token_type} ${access_token}`;
  // request.headers.appversion = DeviceInfo.getReadableVersion();

  // const { width, height } = Dimensions.get('window');
  // const deviceInfo = {
  //   version: DeviceInfo.getReadableVersion(),
  //   versionMajor: DeviceInfo.getVersion(),
  //   versionMinor: DeviceInfo.getBuildNumber(),
  //   width,
  //   height,
  //   model: DeviceInfo.getDeviceId(),
  // };
  // request.headers.deviceinfo = JSON.stringify(deviceInfo);
  request.headers['content-type'] = 'application/json; charset=utf-8';
  return request;
}

function parseResponseSuccess(response) {
  const { data } = response;
  if (data) {
    return Promise.resolve(data);
  }

  return Promise.resolve(response);
}

function parseResponseError(error) {
  if (error.response) {
    const status = error.response.status;
    let message = _.get(error, 'response.data.error_description');
    if (message) {
      return Promise.reject({ status, message: `Error [L002]: ${message}` });
    }
    message = _.get(error, 'response.data.message');
    if (message) {
      return Promise.reject({ status, message: `Error [L001]: ${message}` });
    }
    return Promise.reject({ status, message: `Error [L003]: ${message}` });
  }
  const status = error.code === 'ECONNABORTED' ? 408 : 400;
  return Promise.reject({ status, message: error.message });
}

export const HTTP = axios.create({
  timeout: 10 * 1000, // 10 sec
});
HTTP.interceptors.request.use(addDomain);
HTTP.interceptors.request.use(addHeaders);
HTTP.interceptors.response.use(parseResponseSuccess, parseResponseError);
