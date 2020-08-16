"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var __defineProperty = Object.defineProperty;
  var __hasOwnProperty = Object.prototype.hasOwnProperty;

  var __commonJS = function __commonJS(callback, module) {
    return function () {
      if (!module) {
        module = {
          exports: {}
        };
        callback(module.exports, module);
      }

      return module.exports;
    };
  };

  var __markAsModule = function __markAsModule(target) {
    return __defineProperty(target, "__esModule", {
      value: true
    });
  };

  var __exportStar = function __exportStar(target, module) {
    __markAsModule(target);

    if (_typeof(module) === "object" || typeof module === "function") {
      var _loop = function _loop(key) {
        if (__hasOwnProperty.call(module, key) && !__hasOwnProperty.call(target, key) && key !== "default") __defineProperty(target, key, {
          get: function get() {
            return module[key];
          },
          enumerable: true
        });
      };

      for (var key in module) {
        _loop(key);
      }
    }

    return target;
  };

  var __toModule = function __toModule(module) {
    if (module && module.__esModule) return module;
    return __exportStar(__defineProperty({}, "default", {
      value: module,
      enumerable: true
    }), module);
  }; // node_modules/bs-custom-file-input/dist/bs-custom-file-input.js


  var require_bs_custom_file_input = __commonJS(function (exports, module) {
    /*!
     * bsCustomFileInput v1.3.4 (https://github.com/Johann-S/bs-custom-file-input)
     * Copyright 2018 - 2020 Johann-S <johann.servoire@gmail.com>
     * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
     */
    (function (global, factory) {
      _typeof(exports) === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.bsCustomFileInput = factory());
    })(exports, function () {
      "use strict";

      var Selector = {
        CUSTOMFILE: '.custom-file input[type="file"]',
        CUSTOMFILELABEL: ".custom-file-label",
        FORM: "form",
        INPUT: "input"
      };
      var textNodeType = 3;

      var getDefaultText = function getDefaultText2(input) {
        var defaultText = "";
        var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

        if (label) {
          defaultText = label.textContent;
        }

        return defaultText;
      };

      var findFirstChildNode = function findFirstChildNode2(element) {
        if (element.childNodes.length > 0) {
          var childNodes = [].slice.call(element.childNodes);

          for (var i = 0; i < childNodes.length; i++) {
            var node = childNodes[i];

            if (node.nodeType !== textNodeType) {
              return node;
            }
          }
        }

        return element;
      };

      var restoreDefaultText = function restoreDefaultText2(input) {
        var defaultText = input.bsCustomFileInput.defaultText;
        var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

        if (label) {
          var element = findFirstChildNode(label);
          element.textContent = defaultText;
        }
      };

      var fileApi = !!window.File;
      var FAKE_PATH = "fakepath";
      var FAKE_PATH_SEPARATOR = "\\";

      var getSelectedFiles = function getSelectedFiles2(input) {
        if (input.hasAttribute("multiple") && fileApi) {
          return [].slice.call(input.files).map(function (file) {
            return file.name;
          }).join(", ");
        }

        if (input.value.indexOf(FAKE_PATH) !== -1) {
          var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
          return splittedValue[splittedValue.length - 1];
        }

        return input.value;
      };

      function handleInputChange() {
        var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

        if (label) {
          var element = findFirstChildNode(label);
          var inputValue = getSelectedFiles(this);

          if (inputValue.length) {
            element.textContent = inputValue;
          } else {
            restoreDefaultText(this);
          }
        }
      }

      function handleFormReset() {
        var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
          return !!input.bsCustomFileInput;
        });

        for (var i = 0, len = customFileList.length; i < len; i++) {
          restoreDefaultText(customFileList[i]);
        }
      }

      var customProperty = "bsCustomFileInput";
      var Event = {
        FORMRESET: "reset",
        INPUTCHANGE: "change"
      };
      var bsCustomFileInput2 = {
        init: function init(inputSelector, formSelector) {
          if (inputSelector === void 0) {
            inputSelector = Selector.CUSTOMFILE;
          }

          if (formSelector === void 0) {
            formSelector = Selector.FORM;
          }

          var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
          var formList = [].slice.call(document.querySelectorAll(formSelector));

          for (var i = 0, len = customFileInputList.length; i < len; i++) {
            var input = customFileInputList[i];
            Object.defineProperty(input, customProperty, {
              value: {
                defaultText: getDefaultText(input)
              },
              writable: true
            });
            handleInputChange.call(input);
            input.addEventListener(Event.INPUTCHANGE, handleInputChange);
          }

          for (var _i = 0, _len = formList.length; _i < _len; _i++) {
            formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

            Object.defineProperty(formList[_i], customProperty, {
              value: true,
              writable: true
            });
          }
        },
        destroy: function destroy() {
          var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
            return !!form.bsCustomFileInput;
          });
          var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input2) {
            return !!input2.bsCustomFileInput;
          });

          for (var i = 0, len = customFileInputList.length; i < len; i++) {
            var input = customFileInputList[i];
            restoreDefaultText(input);
            input[customProperty] = void 0;
            input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
          }

          for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
            formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

            formList[_i2][customProperty] = void 0;
          }
        }
      };
      return bsCustomFileInput2;
    });
  }); // bs-custom-file-input.js


  var bs_custom_file_input = __toModule(require_bs_custom_file_input());

  bs_custom_file_input.default.init();
})();

