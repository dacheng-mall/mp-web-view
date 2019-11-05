import uri from 'url';
import _ from 'lodash';
import router from 'umi/router';

export const jump = (pathname, search, state) => {
  pathname = _.startsWith(pathname, '/') ? pathname : '/' + pathname;
  const path = uri.parse(pathname);
  path.query = search;
  router.push(uri.format(path), state);
};

export function decodeQrcodeQuery(q) {
  const _q = decodeURIComponent(q);
  const [url, query] = _q.split('?');
  const res = Object.create(null);
  res.url = url;
  res.query = Object.create(null);
  if (query) {
    res.query = parseQuery(query);
  }
  return res;
}
export function uri1(url, query = {}, startWithLine) {
  return (function(q) {
    let res = '';
    for (let key in q) {
      res += `${key}=${q[key]}&`;
    }
    if (res !== '') {
      res = res.replace(/&$/, '');
      res = `?${res}`;
    }
    if (startWithLine && !/^\//.test(url)) {
      return `/${url}${res}`;
    }
    return `${url}${res}`;
  })(query);
}
export function parseQuery(query) {
  const _q = query.replace(/^\?/, '');
  const res = Object.create(null);
  _q.split('&').map(item => {
    const [key, value] = item.split('=');
    res[key] = value;
  });
  return res;
}
