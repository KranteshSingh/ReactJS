import Raven from 'raven-js';

function init() {
  Raven.config('https://b9c5a4bd701f4f3ea06aff3d35a35e5a@sentry.io/1804470', {
    release: '1-0-0',
    environment: 'development-test'
  }).install();
}

function log(error) {
  Raven.captureException(error);
}

export default {
  init,
  log
};
