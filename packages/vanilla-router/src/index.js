import { BASENAME_REGEXP, PARAMETER_REGEXP, URL_REGEXP } from './constants';

export default (function () {
  /** @type {Router} */
  let instance = null;
  /**
   * Create a new Router.
   * @class
   * @param {HTMLElement} root
   * @param {object} [options]
   */
  function Router(root, options) {
    if (!(root instanceof HTMLElement)) {
      throw new Error(
        `arguments[0] requires a HTMLElement but got a ${typeof root}`,
      );
    }

    this.root = root;
    this.routes = new Map();
    this.base = options.base || '/';
  }
  /**
   * @function
   * @memberof Router
   * @return {Router}
   */
  Router.prototype.initialize = function () {
    /** @type {number} */
    this.intervalId = setInterval(
      () => this.route(window.location.pathname),
      200,
    );
    return this;
  };
  /**
   * @function
   * @memberof Router
   * @param {string} path - request pathname
   * @param {boolean} replace
   * @void
   */
  Router.prototype.setCurrentPath = function (path, replace) {
    // 현재와 같은 경로를 요청할 경우 경로를 재설정하지 않는다.
    if (this.current === path) return;

    const state = '';
    if (replace === true) {
      window.history.replaceState(state, '', path);
    } else {
      window.history.pushState(state, '', path);
    }
  };
  /**
   * 라우터에 저장 할 path를 정규표현식으로 컴파일하여 리턴한다.
   * @param {string} path
   * @returns {RegExp} matcher
   * @example
   * // returns /^\/posts\/([^\/]+)$/
   * compilePath('/posts/:id');
   */
  Router.prototype.pathToRegexp = function (path) {
    return new RegExp(`^${path.replace(PARAMETER_REGEXP, URL_REGEXP)}$`);
  };
  /**
   * 라우터에 저장 할 path parameters 정보를 배열로 리턴한다.
   * @param {string} path
   * @returns {array} params
   * @example
   * // returns [ 'getting-started', 'install' ]
   * getUrlParams('/docs/getting-started/install');
   */
  Router.prototype.getParameters = function (path) {
    return path.replace(BASENAME_REGEXP, '').match(/(\w+(-*\w*)*)/g);
  };
  /**
   * 요청한 url의 path parameters 정보와 라우터의 path parameters 정보를 매핑한다.
   * @param {string} path
   * @param {array} params
   * @returns
   */
  Router.prototype.setParameters = function (path, params) {
    return path
      .replace(BASENAME_REGEXP, '')
      .match(/(\w+(-*\w*)*)/g)
      .reduce((acc, current, idx) => ({ ...acc, [params[idx]]: current }), {});
  };
  /**
   * @function
   * @memberof Router
   * @param {string} path
   * @param {function} callback
   * @void
   */
  Router.prototype.addRoute = function (path, callback) {
    if (typeof callback !== 'function') {
      throw new Error(
        `Router.addRoute() requires a callback function but got a ${toString.call(
          callback,
        )}`,
      );
    }

    this.routes.set(this.pathToRegexp(path), {
      params: this.getParameters(path),
      callback,
    });
  };
  /**
   * @function
   * @memberof Router
   * @void
   */
  Router.prototype.route = function (path) {
    // 같은 경로를 요청할 경우 경로를 재설정하지 않는다.
    if (this.current === path) return;
    this.current = path;

    const match = this.match(path);

    if (match.callback) {
      match.callback({
        root: this.root,
        params: match.params,
      });
    } else if (this.errorCallback) {
      this.errorCallback();
    } else {
      // 메인으로 이동
      this.setCurrentPath(this.base, true);
    }
  };
  /**
   * @function
   * @memberof Router
   * @return {object}
   */
  Router.prototype.match = function (path) {
    let match;
    const { routes } = this;

    if (path != null) {
      match = routes.get([...routes.keys()].find((regexp) => regexp.test(path)))
        || {};

      if (match.params) {
        match.params = this.setParameters(path, match.params);
      }

      return match;
    }
    return null;
  };
  /**
   * @function
   * @memberof Router
   * @param {function} callback
   * @void
   */
  Router.prototype.onRouteError = function (callback) {
    this.errorCallback = callback;
  };

  return {
    /**
     * Get the Router instance.
     * @param {HTMLElement} root
     * @param {object} options
     * @returns {Router}
     *
     * @example
     * ```js
     * const htmlEl = document.getElementById('id');
     * const router = createHashRouter(htmlEl, {
     *      base: '/'
     * })
     * ```
     */
    createHistoryRouter(root, options) {
      if (!instance) {
        instance = new Router(root, options).initialize();
        /**
         * Listen to click event
         * @type {window} - The target of the event.
         * @listens document:click
         *
         * <a>아닌 element의 clickEvent로 라우팅이 실행되어야 할 경우
         * 1. event.target -> dataset에 대상 attriubute 값이 존재하는지 확인 -> stopPropagation
         * 2. 이벤트 실행 흐름 상에 존재하는 지 확인 -> stopPropagation
         */
        document.addEventListener(
          'click',
          (event) => {
            const path = event.composedPath().find(({ dataset }) => dataset?.resourcePath);

            if (path) {
              instance.setCurrentPath(path.dataset.resourcePath);

              event.preventDefault();
              event.stopPropagation();
            }
          },
          true,
        );
        /**
         * Listen to popstate event.
         * @type {window} - The target of the event.
         * @listens window:popstate
         */
        window.addEventListener('popstate', () => instance.route(window.location.pathname));
      }
      return instance;
    },
  };
}());
