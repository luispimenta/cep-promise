(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('isomorphic-unfetch')) :
  typeof define === 'function' && define.amd ? define(['isomorphic-unfetch'], factory) :
  (global = global || self, global.cep = factory(global.fetch));
}(this, (function (fetch) { 'use strict';

  fetch = fetch && Object.prototype.hasOwnProperty.call(fetch, 'default') ? fetch['default'] : fetch;

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var CepPromiseError = /*#__PURE__*/function (_Error) {
    _inherits(CepPromiseError, _Error);

    var _super = _createSuper(CepPromiseError);

    function CepPromiseError() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          message = _ref.message,
          type = _ref.type,
          errors = _ref.errors;

      _classCallCheck(this, CepPromiseError);

      _this = _super.call(this);
      _this.name = 'CepPromiseError';
      _this.message = message;
      _this.type = type;
      _this.errors = errors;
      return _this;
    }

    return CepPromiseError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var ServiceError = /*#__PURE__*/function (_Error) {
    _inherits(ServiceError, _Error);

    var _super = _createSuper(ServiceError);

    function ServiceError() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          message = _ref.message,
          service = _ref.service;

      _classCallCheck(this, ServiceError);

      _this = _super.call(this);
      _this.name = 'ServiceError';
      _this.message = message;
      _this.service = service;
      return _this;
    }

    return ServiceError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  function fetchCorreiosService(cepWithLeftPad) {
    var proxyURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var url = "".concat(proxyURL, "https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente");
    var options = {
      method: 'POST',
      body: "<?xml version=\"1.0\"?>\n<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:cli=\"http://cliente.bean.master.sigep.bsb.correios.com.br/\">\n  <soapenv:Header />\n  <soapenv:Body>\n    <cli:consultaCEP>\n      <cep>".concat(cepWithLeftPad, "</cep>\n    </cli:consultaCEP>\n  </soapenv:Body>\n</soapenv:Envelope>"),
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
        'cache-control': 'no-cache'
      }
    };
    return fetch(url, options).then(analyzeAndParseResponse)["catch"](throwApplicationError);
  }

  function analyzeAndParseResponse(response) {
    if (response.ok) {
      return response.text().then(parseSuccessXML).then(extractValuesFromSuccessResponse);
    }

    return response.text().then(parseAndextractErrorMessage).then(throwCorreiosError);
  }

  function parseSuccessXML(xmlString) {
    try {
      var _xmlString$replace$ma;

      var returnStatement = (_xmlString$replace$ma = xmlString.replace(/\r?\n|\r/g, '').match(/<return>(.*)<\/return>/)[0]) !== null && _xmlString$replace$ma !== void 0 ? _xmlString$replace$ma : '';
      var cleanReturnStatement = returnStatement.replace('<return>', '').replace('</return>', '');
      var parsedReturnStatement = cleanReturnStatement.split(/</).reduce(function (result, exp) {
        var splittenExp = exp.split('>');

        if (splittenExp.length > 1 && splittenExp[1].length) {
          result[splittenExp[0]] = splittenExp[1];
        }

        return result;
      }, {});
      return parsedReturnStatement;
    } catch (e) {
      throw new Error('Não foi possível interpretar o XML de resposta.');
    }
  }

  function parseAndextractErrorMessage(xmlString) {
    try {
      var _xmlString$match$;

      var returnStatement = (_xmlString$match$ = xmlString.match(/<faultstring>(.*)<\/faultstring>/)[0]) !== null && _xmlString$match$ !== void 0 ? _xmlString$match$ : '';
      var cleanReturnStatement = returnStatement.replace('<faultstring>', '').replace('</faultstring>', '');
      return cleanReturnStatement;
    } catch (e) {
      throw new Error('Não foi possível interpretar o XML de resposta.');
    }
  }

  function throwCorreiosError(translatedErrorMessage) {
    throw new Error(translatedErrorMessage);
  }

  function extractValuesFromSuccessResponse(xmlObject) {
    return {
      cep: xmlObject.cep,
      state: xmlObject.uf,
      city: xmlObject.cidade,
      neighborhood: xmlObject.bairro,
      street: xmlObject.end
    };
  }

  function throwApplicationError(error) {
    var serviceError = new ServiceError({
      message: error.message,
      service: 'correios'
    });

    if (error.name === 'FetchError') {
      serviceError.message = 'Erro ao se conectar com o serviço dos Correios.';
    }

    throw serviceError;
  }

  function fetchViaCepService(cepWithLeftPad) {
    var proxyURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var url = "".concat(proxyURL, "https://viacep.com.br/ws/").concat(cepWithLeftPad, "/json/");
    var options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    };
    return fetch(url, options).then(analyzeAndParseResponse$1).then(checkForViaCepError).then(extractCepValuesFromResponse)["catch"](throwApplicationError$1);
  }

  function analyzeAndParseResponse$1(response) {
    if (response.ok) {
      return response.json();
    }

    throw Error('Erro ao se conectar com o serviço ViaCEP.');
  }

  function checkForViaCepError(responseObject) {
    if (responseObject.erro === true) {
      throw new Error('CEP não encontrado na base do ViaCEP.');
    }

    return responseObject;
  }

  function extractCepValuesFromResponse(responseObject) {
    return {
      cep: responseObject.cep.replace('-', ''),
      state: responseObject.uf,
      city: responseObject.localidade,
      neighborhood: responseObject.bairro,
      street: responseObject.logradouro
    };
  }

  function throwApplicationError$1(error) {
    var serviceError = new ServiceError({
      message: error.message,
      service: 'viacep'
    });

    if (error.name === 'FetchError') {
      serviceError.message = 'Erro ao se conectar com o serviço ViaCEP.';
    }

    throw serviceError;
  }

  function fetchWideNetService(cepWithLeftPad) {
    var proxyURL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var url = "".concat(proxyURL, "https://cep.widenet.host/busca-cep/api/cep/").concat(cepWithLeftPad, ".json");
    var options = {
      method: 'GET',
      mode: 'cors',
      headers: {
        'content-type': 'application/json;charset=utf-8'
      }
    };
    return fetch(url, options).then(analyzeAndParseResponse$2).then(checkForWideNetError).then(extractCepValuesFromResponse$1)["catch"](throwApplicationError$2);
  }

  function analyzeAndParseResponse$2(response) {
    if (response.ok) {
      return response.json();
    }

    throw Error('Erro ao se conectar com o serviço WideNet.');
  }

  function checkForWideNetError(object) {
    if (object.ok === false || object.status !== 200) {
      throw new Error('CEP não encontrado na base do WideNet.');
    }

    return object;
  }

  function extractCepValuesFromResponse$1(object) {
    return {
      cep: object.code.replace('-', ''),
      state: object.state,
      city: object.city,
      neighborhood: object.district,
      street: object.address
    };
  }

  function throwApplicationError$2(error) {
    var serviceError = new ServiceError({
      message: error.message,
      service: 'widenet'
    });

    if (error.name === 'FetchError') {
      serviceError.message = 'Erro ao se conectar com o serviço WideNet.';
    }

    throw serviceError;
  }

  var PROXY_URL = 'https://proxier.now.sh/api?url=';

  /* istanbul ignore next */

  function isBrowser() {
    return typeof window !== 'undefined';
  }
  /* istanbul ignore next */


  function injectProxy(Service) {
    return function (cepWithLeftPad) {
      return Service(cepWithLeftPad, PROXY_URL);
    };
  }

  var CorreiosService = isBrowser() ? injectProxy(fetchCorreiosService) : fetchCorreiosService;
  var ViaCepService = fetchViaCepService;
  var WideNetService = fetchWideNetService;

  var reverse = function reverse(promise) {
    return new Promise(function (resolve, reject) {
      return Promise.resolve(promise).then(reject, resolve);
    });
  };

  Promise.any = function (iterable) {
    return reverse(Promise.all(_toConsumableArray(iterable).map(reverse)));
  };

  var Promise$1 = Promise;

  var CEP_SIZE = 8;
  function cepPromise (cepRawValue) {
    return Promise$1.resolve(cepRawValue).then(validateInputType).then(removeSpecialCharacters).then(validateInputLength).then(leftPadWithZeros).then(fetchCepFromServices)["catch"](handleServicesError)["catch"](throwApplicationError$3);
  }

  function validateInputType(cepRawValue) {
    var cepTypeOf = _typeof(cepRawValue);

    if (cepTypeOf === 'number' || cepTypeOf === 'string') {
      return cepRawValue;
    }

    throw new CepPromiseError({
      message: 'Erro ao inicializar a instância do CepPromise.',
      type: 'validation_error',
      errors: [{
        message: 'Você deve chamar o construtor utilizando uma String ou um Number.',
        service: 'cep_validation'
      }]
    });
  }

  function removeSpecialCharacters(cepRawValue) {
    return cepRawValue.toString().replace(/\D+/g, '');
  }

  function leftPadWithZeros(cepCleanValue) {
    return '0'.repeat(CEP_SIZE - cepCleanValue.length) + cepCleanValue;
  }

  function validateInputLength(cepWithLeftPad) {
    if (cepWithLeftPad.length <= CEP_SIZE) {
      return cepWithLeftPad;
    }

    throw new CepPromiseError({
      message: "CEP deve conter exatamente ".concat(CEP_SIZE, " caracteres."),
      type: 'validation_error',
      errors: [{
        message: "CEP informado possui mais do que ".concat(CEP_SIZE, " caracteres."),
        service: 'cep_validation'
      }]
    });
  }

  function fetchCepFromServices(cepWithLeftPad) {
    return Promise$1.any([WideNetService(cepWithLeftPad), CorreiosService(cepWithLeftPad), ViaCepService(cepWithLeftPad)]);
  }

  function handleServicesError(aggregatedErrors) {
    if (aggregatedErrors.length !== undefined) {
      throw new CepPromiseError({
        message: 'Todos os serviços de CEP retornaram erro.',
        type: 'service_error',
        errors: aggregatedErrors
      });
    }

    throw aggregatedErrors;
  }

  function throwApplicationError$3(_ref) {
    var message = _ref.message,
        type = _ref.type,
        errors = _ref.errors;
    throw new CepPromiseError({
      message: message,
      type: type,
      errors: errors
    });
  }

  return cepPromise;

})));
