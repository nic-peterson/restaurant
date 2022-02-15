/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_cardGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _assets_adam_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _assets_tom_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);






const about = function () {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  
  const adamPic = new Image();
  adamPic.src = _assets_adam_jpeg__WEBPACK_IMPORTED_MODULE_1__;

  const owner1 = {
    name: "Chef Adam Rosenblum",
    img: adamPic,
    desc: `Chef Adam opened Causwells in 2014`,
    id: "owner-adam"
  }
  
  const owner1Card = (0,_functions_cardGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(owner1);

  const tomPic = new Image();
  tomPic.src = _assets_tom_jpeg__WEBPACK_IMPORTED_MODULE_2__;

  const owner2 = {
    name: "Tom Patella",
    img: tomPic,
    desc: `Tom is a former art teacher`,
    id: "owner-tom"
  }

  const owner2Card = (0,_functions_cardGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(owner2);
  
  about.setAttribute("class", "about");
  about.appendChild(owner1Card);
  about.appendChild(owner2Card);

  content.appendChild(about);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createCard = function(obj) {
    const {name, img, desc, id} = obj;
    const card = document.createElement("div")
    card.setAttribute("class", "card");
    card.setAttribute("id", id);

    card.innerHTML=`<div class="card-name">${name}</div>
    <img loading="lazy" src="${img}" class="card-img">
    <div class="card-desc">${desc}</div>`;

    return card;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCard);

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/52a752c9675d53004a39.jpeg";

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/166a84ee596c7631fe9b.jpeg";

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 6 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 8 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 10 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 11 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 12 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(16), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(17), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(18), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body,\nhtml {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  color: black;\n  font-family: barlow-regular, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: barlow-regular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n@font-face {\n  font-family: bebasneue-regular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n#content {\n  background: linear-gradient(\n      0deg,\n      rgba(255, 255, 255, 0.8),\n      rgba(255, 255, 255, 0.8)\n    ),\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  height: 100%;\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n#nav {\n  display: flex;\n  column-gap: 3rem;\n  cursor: pointer;\n  margin: 2rem 0;\n  font-family: bebasneue-regular, sans-serif;\n  font-size: 2.5rem;\n  color: #9f7640;\n  align-items: center;\n  justify-content: center;\n}\n\n/*\n#logo {\n  background: url(\"./assets/causwells.png\");\n  width: 392px;\n  height: 153px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 0;\n  margin-bottom: 10px;\n}\n*/\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n}\n\n.about .menu .contact {\n  font-family: barlow-regular, sans-serif;\n}\n.contact {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n}\n\n#restaurant-name {\n  font-weight: bold;\n}\n\n.contact-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.hours-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 1rem;\n}\n\n.meal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.meal-title {\n  font-weight: bold;\n  justify-content: center;\n}\n\nimg {\n  height: 200px;\n  width: 300px;\n}\n\n.menu-container {\n  display: grid;\n  grid: 1fr 1fr / 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.menu-container > .name {\n  font-weight: bold;\n}\n\n.about {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 1rem;\n}\n\n.about .card {\n\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;EAC3B,4CAAuC;AACzC;;AAEA;EACE,8BAA8B;EAC9B,4CAA0C;AAC5C;;AAEA;EACE;;;;;2CAKqC;EACrC,YAAY;;EAEZ,2BAA2B;EAC3B,4BAA4B;EAC5B,sBAAsB;;EAEtB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,0CAA0C;EAC1C,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;;;;;;;;;CAUC;;AAED;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,uCAAuC;AACzC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;;AAErB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;;AAEA","sourcesContent":["body,\nhtml {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  color: black;\n  font-family: barlow-regular, sans-serif;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: barlow-regular;\n  src: url(\"./assets/Barlow-Regular.ttf\");\n}\n\n@font-face {\n  font-family: bebasneue-regular;\n  src: url(\"./assets/BebasNeue-Regular.ttf\");\n}\n\n#content {\n  background: linear-gradient(\n      0deg,\n      rgba(255, 255, 255, 0.8),\n      rgba(255, 255, 255, 0.8)\n    ),\n    url(\"./assets/MainBackground.jpeg\");\n  height: 100%;\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n#nav {\n  display: flex;\n  column-gap: 3rem;\n  cursor: pointer;\n  margin: 2rem 0;\n  font-family: bebasneue-regular, sans-serif;\n  font-size: 2.5rem;\n  color: #9f7640;\n  align-items: center;\n  justify-content: center;\n}\n\n/*\n#logo {\n  background: url(\"./assets/causwells.png\");\n  width: 392px;\n  height: 153px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 0;\n  margin-bottom: 10px;\n}\n*/\n\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n}\n\n.about .menu .contact {\n  font-family: barlow-regular, sans-serif;\n}\n.contact {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n}\n\n#restaurant-name {\n  font-weight: bold;\n}\n\n.contact-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.contact-info {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.hours-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 1rem;\n}\n\n.meal {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.meal-title {\n  font-weight: bold;\n  justify-content: center;\n}\n\nimg {\n  height: 200px;\n  width: 300px;\n}\n\n.menu-container {\n  display: grid;\n  grid: 1fr 1fr / 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n  gap: 1rem;\n}\n\n.menu-container > .name {\n  font-weight: bold;\n}\n\n.about {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 1rem;\n}\n\n.about .card {\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 13 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 14 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 15 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e7eb634d040a6f384033.ttf";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/12e3683f9192436a7be8.ttf";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/8f0fc4f54fff9b6dfe58.jpeg";

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions_cardGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



const menu = function () {
  const content = document.querySelector("#content");
  const menu = document.createElement("div");
  menu.setAttribute("class", "menu");

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("class", "menu-container");

  const chicken = {
    name: "CRISPY CHICKEN $15",
    img: "../assets/chicken.jpeg",
    desc: "roasted garlic aioli, pickle, cilantro slaw",
    id: "menu-chicken",
  };
  const americana = {
    name: "AMERICANA BURGER $20",
    img: "../assets/americana.jpeg",
    desc: "cheese, sauce, lettuce, pickle, onion",
    id: "menu-americana",
  };
  const salad = {
    name: "MELON & HERB SALAD $12",
    img: "../assets/melon.jpeg",
    desc: "melon, cucumber, queso fresco",
    id: "menu-salad",
  };
  const ricotta = {
    name: "HOUSE MADE RICOTTA $14",
    img: "../assets/ricotta.jpeg",
    desc: "rosemary honey, lavosh",
    id: "menu-ricotta",
  };
  const arr = [chicken, americana, salad, ricotta];
  arr.forEach((elt) => {
    const menuItem = (0,_functions_cardGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])(elt);
    menuContainer.appendChild(menuItem);
  });

  menu.appendChild(menuContainer);
  content.appendChild(menu);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);



/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


const contact = function () {
  const content = document.querySelector("#content");

  const contact = document.createElement("div");
  contact.setAttribute("class", "contact");
  contact.innerHTML = `
  <div class="contact-section">
    <div class="section-title" id="restaurant-name">Causwells</div>
    <div class="contact-info">
        <p id="address">2346 Chestnut Street, San Francisco, CA 94123
        </p>
        <p id="phone-num">415-447-6081</p>
        <p id="email">info@causwells.com</p>
    </div>
  </div>
  <div class="hours-section">
    <div class="section-title">Hours</div>
    <div class="meal" id="dinner">
        <div class="meal-title">Dinner</div>
        <div class="meal-hours">Tuesday - Sunday 5PM - 10PM</div>
    </div>
    <div class="meal" id="brunch">
        <div class="meal-title">Brunch</div>
        <div class="meal-hours">Friday - Sunday 10AM - 3PM</div>
    </div>
    <div class="meal" id="monday">
        <div class="meal-title">Monday-CLOSED</div>
    </div>
  </div>`;
  
  /*
  // set contact div that will have two sub-containers: 
  // contactSection && hoursSection
  const contact = document.createElement("div");
  const contactInfoArr = ["2346 Chestnut Street", "San Francisco", "CA 94123"];
  contact.setAttribute("class", "contact");


  // contactSection
  const contactSection = document.createElement("div");
  contactSection.setAttribute("class", "contact-section");


  // Section title
  const contactTitle = document.createElement("div");
  contactTitle.textContent = "Contact";
  contactTitle.setAttribute("class", "title");


  // Restaurant name
  const restaurantName = document.createElement("div");
  restaurantName.textContent = "Causwells";
  restaurantName.setAttribute("class", "sub-title");

  // loop through array to add contact info like addy & phone #
  const contactInfo = document.createElement("div");
  contactInfo.setAttribute("class", "contact-info");
  contactInfoArr.forEach((elt) => {
    const contactItem = document.createElement("div");
    contactItem.setAttribute("class", "contact-info-items");
    contactItem.textContent = elt;
    contactInfo.appendChild(contactItem);
  });

  contactSection.appendChild(contactTitle);
  contactSection.appendChild(restaurantName);
  contactSection.appendChild(contactInfo);
  contact.appendChild(contactSection);
  
  // hoursSection
  const hoursSection = document.createElement("div");
  hoursSection.setAttribute("class", "hours-section")

  // section title
  const hoursTitle = document.createElement("div");
  hoursTitle.textContent = "Hours";
  hoursTitle.setAttribute("class", "sub-title");

  hoursSection.appendChild(hoursTitle);

  // Group the section into meals
  // dinner meal section
  const dinner = document.createElement("div");
  dinner.setAttribute("class", "meal");

  // dinner title
  const dinnerTitle = document.createElement("div");
  dinnerTitle.setAttribute("class", "meal-title");
  dinnerTitle.textContent = "Dinner";

  // dinner hours
  const dinnerHours = document.createElement("div");
  dinnerHours.setAttribute("class", "meal-hours");
  dinnerHours.textContent = "Tuesday - Sunday 5PM - 10PM"

  dinner.appendChild(dinnerTitle);
  dinner.appendChild(dinnerHours)
  
  // brunch section
  const brunch = document.createElement("div");
  brunch.setAttribute("class", "meal");
  
  // brunch title
  const brunchTitle = document.createElement("div");
  brunchTitle.setAttribute("class", "meal-title");
  brunchTitle.textContent = "Brunch";

  // brunch hours
  const brunchHours = document.createElement("div");
  brunchHours.setAttribute("class", "meal-hours");
  brunchHours.textContent = "Friday - Sunday 10AM - 3PM"

  brunch.appendChild(brunchTitle);
  brunch.appendChild(brunchHours);

  // monday section -- just title because closed Mondays
  const monday = document.createElement("div");
  monday.setAttribute("class", "meal");
  monday.textContent = "Monday - CLOSED";

  hoursSection.appendChild(dinner);
  hoursSection.appendChild(brunch);
  hoursSection.appendChild(monday);
  */




  /*
  contact.appendChild(contactTitle);
  contact.appendChild(restaurantName);
  contact.appendChild(contactInfo);
  */

  //contact.appendChild(hoursSection);
  content.appendChild(contact);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);



const initialLoad = function () {
  const content = document.querySelector("#content");  
  const navBar = (0,_nav__WEBPACK_IMPORTED_MODULE_1__["default"])();
  content.appendChild(navBar);
  (0,_pages_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);



const nav = function () {
  const optionsArr = ['about', 'menu', 'contact'];

  const nav = document.createElement("div");
  nav.setAttribute("id", "nav");

  optionsArr.forEach(elt => {
    const element = document.createElement("div");
    element.setAttribute("id", `nav-${elt}`);
    element.setAttribute("class", "nav-item");
    element.textContent = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(elt);
    nav.appendChild(element);
  })
  
  return nav;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nav);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalizeFirstLetter": () => (/* binding */ capitalizeFirstLetter)
/* harmony export */ });
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const render = function () {
  const content = document.querySelector("#content");
  content.style = "";
  while (content.children.length > 1) {
    content.children[1].remove();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _functions_initialLoad__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21);
/* harmony import */ var _functions_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);







(0,_functions_initialLoad__WEBPACK_IMPORTED_MODULE_3__["default"])();

const aboutBtn = document.querySelector("#nav-about");
const menuBtn = document.querySelector("#nav-menu");
const contactBtn = document.querySelector("#nav-contact");

aboutBtn.addEventListener("click", function () {
  (0,_functions_render__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_pages_about__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

menuBtn.addEventListener("click", function () {
  (0,_functions_render__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

contactBtn.addEventListener("click", function () {
  (0,_functions_render__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvY2FyZEdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3BhZ2VzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvaW5pdGlhbExvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9mdW5jdGlvbnMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZnVuY3Rpb25zL2hlbHBlckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Z1bmN0aW9ucy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYXJkIGZyb20gXCIuLi9mdW5jdGlvbnMvY2FyZEdlbmVyYXRvclwiO1xuaW1wb3J0IEFkYW0gZnJvbSBcIi4uL2Fzc2V0cy9hZGFtLmpwZWdcIjtcbmltcG9ydCBUb20gZnJvbSBcIi4uL2Fzc2V0cy90b20uanBlZ1wiO1xuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cblxuY29uc3QgYWJvdXQgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgXG4gIGNvbnN0IGFkYW1QaWMgPSBuZXcgSW1hZ2UoKTtcbiAgYWRhbVBpYy5zcmMgPSBBZGFtO1xuXG4gIGNvbnN0IG93bmVyMSA9IHtcbiAgICBuYW1lOiBcIkNoZWYgQWRhbSBSb3NlbmJsdW1cIixcbiAgICBpbWc6IGFkYW1QaWMsXG4gICAgZGVzYzogYENoZWYgQWRhbSBvcGVuZWQgQ2F1c3dlbGxzIGluIDIwMTRgLFxuICAgIGlkOiBcIm93bmVyLWFkYW1cIlxuICB9XG4gIFxuICBjb25zdCBvd25lcjFDYXJkID0gY3JlYXRlQ2FyZChvd25lcjEpO1xuXG4gIGNvbnN0IHRvbVBpYyA9IG5ldyBJbWFnZSgpO1xuICB0b21QaWMuc3JjID0gVG9tO1xuXG4gIGNvbnN0IG93bmVyMiA9IHtcbiAgICBuYW1lOiBcIlRvbSBQYXRlbGxhXCIsXG4gICAgaW1nOiB0b21QaWMsXG4gICAgZGVzYzogYFRvbSBpcyBhIGZvcm1lciBhcnQgdGVhY2hlcmAsXG4gICAgaWQ6IFwib3duZXItdG9tXCJcbiAgfVxuXG4gIGNvbnN0IG93bmVyMkNhcmQgPSBjcmVhdGVDYXJkKG93bmVyMik7XG4gIFxuICBhYm91dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFib3V0XCIpO1xuICBhYm91dC5hcHBlbmRDaGlsZChvd25lcjFDYXJkKTtcbiAgYWJvdXQuYXBwZW5kQ2hpbGQob3duZXIyQ2FyZCk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcbiIsImNvbnN0IGNyZWF0ZUNhcmQgPSBmdW5jdGlvbihvYmopIHtcbiAgICBjb25zdCB7bmFtZSwgaW1nLCBkZXNjLCBpZH0gPSBvYmo7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZFwiKTtcbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcblxuICAgIGNhcmQuaW5uZXJIVE1MPWA8ZGl2IGNsYXNzPVwiY2FyZC1uYW1lXCI+JHtuYW1lfTwvZGl2PlxuICAgIDxpbWcgbG9hZGluZz1cImxhenlcIiBzcmM9XCIke2ltZ31cIiBjbGFzcz1cImNhcmQtaW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImNhcmQtZGVzY1wiPiR7ZGVzY308L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNhcmQ7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9CYXJsb3ctUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9CZWJhc05ldWUtUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9NYWluQmFja2dyb3VuZC5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBiYXJsb3ctcmVndWxhciwgc2Fucy1zZXJpZjtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBiYXJsb3ctcmVndWxhcjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogYmViYXNuZXVlLXJlZ3VsYXI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgICAwZGVnLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSxcXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOClcXG4gICAgKSxcXG4gICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxuICBmb250LWZhbWlseTogYmViYXNuZXVlLXJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiAjOWY3NjQwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKlxcbiNsb2dvIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvY2F1c3dlbGxzLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDM5MnB4O1xcbiAgaGVpZ2h0OiAxNTNweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbiovXFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5hYm91dCAubWVudSAuY29udGFjdCB7XFxuICBmb250LWZhbWlseTogYmFybG93LXJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3Vycy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMXJlbTtcXG59XFxuXFxuLm1lYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDFmciAxZnIgLyAxZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgPiAubmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXQgLmNhcmQge1xcblxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULFlBQVk7RUFDWix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNENBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLDRDQUEwQztBQUM1Qzs7QUFFQTtFQUNFOzs7OzsyQ0FLcUM7RUFDckMsWUFBWTs7RUFFWiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjs7RUFFdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLDBDQUEwQztFQUMxQyxpQkFBaUI7RUFDakIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7Ozs7Ozs7Ozs7Q0FVQzs7QUFFRDtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBOztBQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IGJhcmxvdy1yZWd1bGFyLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IGJhcmxvdy1yZWd1bGFyO1xcbiAgc3JjOiB1cmwoXFxcIi4vYXNzZXRzL0Jhcmxvdy1SZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBiZWJhc25ldWUtcmVndWxhcjtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9CZWJhc05ldWUtUmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIDBkZWcsXFxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLFxcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KVxcbiAgICApLFxcbiAgICB1cmwoXFxcIi4vYXNzZXRzL01haW5CYWNrZ3JvdW5kLmpwZWdcXFwiKTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2x1bW4tZ2FwOiAzcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxuICBmb250LWZhbWlseTogYmViYXNuZXVlLXJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGNvbG9yOiAjOWY3NjQwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4vKlxcbiNsb2dvIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9hc3NldHMvY2F1c3dlbGxzLnBuZ1xcXCIpO1xcbiAgd2lkdGg6IDM5MnB4O1xcbiAgaGVpZ2h0OiAxNTNweDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbiovXFxuXFxuLnRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5hYm91dCAubWVudSAuY29udGFjdCB7XFxuICBmb250LWZhbWlseTogYmFybG93LXJlZ3VsYXIsIHNhbnMtc2VyaWY7XFxufVxcbi5jb250YWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4jcmVzdGF1cmFudC1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uY29udGFjdC1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3Vycy1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcm93LWdhcDogMXJlbTtcXG59XFxuXFxuLm1lYWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZWFsLXRpdGxlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQ6IDFmciAxZnIgLyAxZnIgMWZyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1jb250YWluZXIgPiAubmFtZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBjb2x1bW4tZ2FwOiAxcmVtO1xcbn1cXG5cXG4uYWJvdXQgLmNhcmQge1xcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgY3JlYXRlQ2FyZCBmcm9tIFwiLi4vZnVuY3Rpb25zL2NhcmRHZW5lcmF0b3JcIjtcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBtZW51ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIik7XG5cbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51LWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBjaGlja2VuID0ge1xuICAgIG5hbWU6IFwiQ1JJU1BZIENISUNLRU4gJDE1XCIsXG4gICAgaW1nOiBcIi4uL2Fzc2V0cy9jaGlja2VuLmpwZWdcIixcbiAgICBkZXNjOiBcInJvYXN0ZWQgZ2FybGljIGFpb2xpLCBwaWNrbGUsIGNpbGFudHJvIHNsYXdcIixcbiAgICBpZDogXCJtZW51LWNoaWNrZW5cIixcbiAgfTtcbiAgY29uc3QgYW1lcmljYW5hID0ge1xuICAgIG5hbWU6IFwiQU1FUklDQU5BIEJVUkdFUiAkMjBcIixcbiAgICBpbWc6IFwiLi4vYXNzZXRzL2FtZXJpY2FuYS5qcGVnXCIsXG4gICAgZGVzYzogXCJjaGVlc2UsIHNhdWNlLCBsZXR0dWNlLCBwaWNrbGUsIG9uaW9uXCIsXG4gICAgaWQ6IFwibWVudS1hbWVyaWNhbmFcIixcbiAgfTtcbiAgY29uc3Qgc2FsYWQgPSB7XG4gICAgbmFtZTogXCJNRUxPTiAmIEhFUkIgU0FMQUQgJDEyXCIsXG4gICAgaW1nOiBcIi4uL2Fzc2V0cy9tZWxvbi5qcGVnXCIsXG4gICAgZGVzYzogXCJtZWxvbiwgY3VjdW1iZXIsIHF1ZXNvIGZyZXNjb1wiLFxuICAgIGlkOiBcIm1lbnUtc2FsYWRcIixcbiAgfTtcbiAgY29uc3Qgcmljb3R0YSA9IHtcbiAgICBuYW1lOiBcIkhPVVNFIE1BREUgUklDT1RUQSAkMTRcIixcbiAgICBpbWc6IFwiLi4vYXNzZXRzL3JpY290dGEuanBlZ1wiLFxuICAgIGRlc2M6IFwicm9zZW1hcnkgaG9uZXksIGxhdm9zaFwiLFxuICAgIGlkOiBcIm1lbnUtcmljb3R0YVwiLFxuICB9O1xuICBjb25zdCBhcnIgPSBbY2hpY2tlbiwgYW1lcmljYW5hLCBzYWxhZCwgcmljb3R0YV07XG4gIGFyci5mb3JFYWNoKChlbHQpID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGNyZWF0ZUNhcmQoZWx0KTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKTtcbiAgfSk7XG5cbiAgbWVudS5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7XG5cbiIsImltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5jb25zdCBjb250YWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFjdFwiKTtcbiAgY29udGFjdC5pbm5lckhUTUwgPSBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWN0LXNlY3Rpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwic2VjdGlvbi10aXRsZVwiIGlkPVwicmVzdGF1cmFudC1uYW1lXCI+Q2F1c3dlbGxzPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhY3QtaW5mb1wiPlxuICAgICAgICA8cCBpZD1cImFkZHJlc3NcIj4yMzQ2IENoZXN0bnV0IFN0cmVldCwgU2FuIEZyYW5jaXNjbywgQ0EgOTQxMjNcbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBpZD1cInBob25lLW51bVwiPjQxNS00NDctNjA4MTwvcD5cbiAgICAgICAgPHAgaWQ9XCJlbWFpbFwiPmluZm9AY2F1c3dlbGxzLmNvbTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJob3Vycy1zZWN0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5Ib3VyczwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtZWFsXCIgaWQ9XCJkaW5uZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtdGl0bGVcIj5EaW5uZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaG91cnNcIj5UdWVzZGF5IC0gU3VuZGF5IDVQTSAtIDEwUE08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVhbFwiIGlkPVwiYnJ1bmNoXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLXRpdGxlXCI+QnJ1bmNoPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWhvdXJzXCI+RnJpZGF5IC0gU3VuZGF5IDEwQU0gLSAzUE08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibWVhbFwiIGlkPVwibW9uZGF5XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLXRpdGxlXCI+TW9uZGF5LUNMT1NFRDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gO1xuICBcbiAgLypcbiAgLy8gc2V0IGNvbnRhY3QgZGl2IHRoYXQgd2lsbCBoYXZlIHR3byBzdWItY29udGFpbmVyczogXG4gIC8vIGNvbnRhY3RTZWN0aW9uICYmIGhvdXJzU2VjdGlvblxuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFjdEluZm9BcnIgPSBbXCIyMzQ2IENoZXN0bnV0IFN0cmVldFwiLCBcIlNhbiBGcmFuY2lzY29cIiwgXCJDQSA5NDEyM1wiXTtcbiAgY29udGFjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3RcIik7XG5cblxuICAvLyBjb250YWN0U2VjdGlvblxuICBjb25zdCBjb250YWN0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhY3RTZWN0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFjdC1zZWN0aW9uXCIpO1xuXG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCBjb250YWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgY29udGFjdFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidGl0bGVcIik7XG5cblxuICAvLyBSZXN0YXVyYW50IG5hbWVcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiQ2F1c3dlbGxzXCI7XG4gIHJlc3RhdXJhbnROYW1lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ViLXRpdGxlXCIpO1xuXG4gIC8vIGxvb3AgdGhyb3VnaCBhcnJheSB0byBhZGQgY29udGFjdCBpbmZvIGxpa2UgYWRkeSAmIHBob25lICNcbiAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0SW5mby5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvbnRhY3QtaW5mb1wiKTtcbiAgY29udGFjdEluZm9BcnIuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgY29uc3QgY29udGFjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3RJdGVtLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY29udGFjdC1pbmZvLWl0ZW1zXCIpO1xuICAgIGNvbnRhY3RJdGVtLnRleHRDb250ZW50ID0gZWx0O1xuICAgIGNvbnRhY3RJbmZvLmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtKTtcbiAgfSk7XG5cbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xuICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWN0SW5mbyk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xuICBcbiAgLy8gaG91cnNTZWN0aW9uXG4gIGNvbnN0IGhvdXJzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJzU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvdXJzLXNlY3Rpb25cIilcblxuICAvLyBzZWN0aW9uIHRpdGxlXG4gIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBob3Vyc1RpdGxlLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICBob3Vyc1RpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3ViLXRpdGxlXCIpO1xuXG4gIGhvdXJzU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc1RpdGxlKTtcblxuICAvLyBHcm91cCB0aGUgc2VjdGlvbiBpbnRvIG1lYWxzXG4gIC8vIGRpbm5lciBtZWFsIHNlY3Rpb25cbiAgY29uc3QgZGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGlubmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVhbFwiKTtcblxuICAvLyBkaW5uZXIgdGl0bGVcbiAgY29uc3QgZGlubmVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaW5uZXJUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lYWwtdGl0bGVcIik7XG4gIGRpbm5lclRpdGxlLnRleHRDb250ZW50ID0gXCJEaW5uZXJcIjtcblxuICAvLyBkaW5uZXIgaG91cnNcbiAgY29uc3QgZGlubmVySG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaW5uZXJIb3Vycy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lYWwtaG91cnNcIik7XG4gIGRpbm5lckhvdXJzLnRleHRDb250ZW50ID0gXCJUdWVzZGF5IC0gU3VuZGF5IDVQTSAtIDEwUE1cIlxuXG4gIGRpbm5lci5hcHBlbmRDaGlsZChkaW5uZXJUaXRsZSk7XG4gIGRpbm5lci5hcHBlbmRDaGlsZChkaW5uZXJIb3VycylcbiAgXG4gIC8vIGJydW5jaCBzZWN0aW9uXG4gIGNvbnN0IGJydW5jaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJydW5jaC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lYWxcIik7XG4gIFxuICAvLyBicnVuY2ggdGl0bGVcbiAgY29uc3QgYnJ1bmNoVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicnVuY2hUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lYWwtdGl0bGVcIik7XG4gIGJydW5jaFRpdGxlLnRleHRDb250ZW50ID0gXCJCcnVuY2hcIjtcblxuICAvLyBicnVuY2ggaG91cnNcbiAgY29uc3QgYnJ1bmNoSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicnVuY2hIb3Vycy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lYWwtaG91cnNcIik7XG4gIGJydW5jaEhvdXJzLnRleHRDb250ZW50ID0gXCJGcmlkYXkgLSBTdW5kYXkgMTBBTSAtIDNQTVwiXG5cbiAgYnJ1bmNoLmFwcGVuZENoaWxkKGJydW5jaFRpdGxlKTtcbiAgYnJ1bmNoLmFwcGVuZENoaWxkKGJydW5jaEhvdXJzKTtcblxuICAvLyBtb25kYXkgc2VjdGlvbiAtLSBqdXN0IHRpdGxlIGJlY2F1c2UgY2xvc2VkIE1vbmRheXNcbiAgY29uc3QgbW9uZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9uZGF5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVhbFwiKTtcbiAgbW9uZGF5LnRleHRDb250ZW50ID0gXCJNb25kYXkgLSBDTE9TRURcIjtcblxuICBob3Vyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoZGlubmVyKTtcbiAgaG91cnNTZWN0aW9uLmFwcGVuZENoaWxkKGJydW5jaCk7XG4gIGhvdXJzU2VjdGlvbi5hcHBlbmRDaGlsZChtb25kYXkpO1xuICAqL1xuXG5cblxuXG4gIC8qXG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdFRpdGxlKTtcbiAgY29udGFjdC5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gIGNvbnRhY3QuYXBwZW5kQ2hpbGQoY29udGFjdEluZm8pO1xuICAqL1xuXG4gIC8vY29udGFjdC5hcHBlbmRDaGlsZChob3Vyc1NlY3Rpb24pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDtcbiIsImltcG9ydCBhYm91dCBmcm9tIFwiLi4vcGFnZXMvYWJvdXRcIjtcbmltcG9ydCBuYXYgZnJvbSBcIi4vbmF2XCI7XG5cbmNvbnN0IGluaXRpYWxMb2FkID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpOyAgXG4gIGNvbnN0IG5hdkJhciA9IG5hdigpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gIGFib3V0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0aWFsTG9hZDtcbiIsImltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gXCIuL2hlbHBlckZ1bmN0aW9uc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IG5hdiA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3Qgb3B0aW9uc0FyciA9IFsnYWJvdXQnLCAnbWVudScsICdjb250YWN0J107XG5cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmF2XCIpO1xuXG4gIG9wdGlvbnNBcnIuZm9yRWFjaChlbHQgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYG5hdi0ke2VsdH1gKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2LWl0ZW1cIik7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVGaXJzdExldHRlcihlbHQpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSlcbiAgXG4gIHJldHVybiBuYXY7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBuYXY7XG4iLCJmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCB7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyfTsiLCJjb25zdCByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnRlbnQuc3R5bGUgPSBcIlwiO1xuICB3aGlsZSAoY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG4gICAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0MDogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBhYm91dCBmcm9tIFwiLi9wYWdlcy9hYm91dFwiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vcGFnZXMvY29udGFjdFwiO1xuaW1wb3J0IGludGlhbExvYWQgZnJvbSBcIi4vZnVuY3Rpb25zL2luaXRpYWxMb2FkXCI7XG5pbXBvcnQgcmVuZGVyIGZyb20gXCIuL2Z1bmN0aW9ucy9yZW5kZXJcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmludGlhbExvYWQoKTtcblxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdi1hYm91dFwiKTtcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hdi1tZW51XCIpO1xuY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmF2LWNvbnRhY3RcIik7XG5cbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlcigpO1xuICBhYm91dCgpO1xufSk7XG5cbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgcmVuZGVyKCk7XG4gIG1lbnUoKTtcbn0pO1xuXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gIHJlbmRlcigpO1xuICBjb250YWN0KCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==