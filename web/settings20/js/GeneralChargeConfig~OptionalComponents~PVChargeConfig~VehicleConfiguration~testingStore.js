(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["GeneralChargeConfig~OptionalComponents~PVChargeConfig~VehicleConfiguration~testingStore"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/RangeInput.vue?vue&type=template&id=1e17783d&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/RangeInput.vue?vue&type=template&id=1e17783d&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\n\nvar _withScopeId = function _withScopeId(n) {\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"pushScopeId\"])(\"data-v-1e17783d\"), n = n(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"popScopeId\"])(), n;\n};\n\nvar _hoisted_1 = {\n  class: \"form-row mb-1\"\n};\nvar _hoisted_2 = {\n  class: \"col-md-8\"\n};\nvar _hoisted_3 = {\n  class: \"form-row vaRow mb-1\"\n};\nvar _hoisted_4 = {\n  key: 0,\n  class: \"col-2 col-form-label valueLabel\"\n};\nvar _hoisted_5 = {\n  class: \"col\"\n};\nvar _hoisted_6 = [\"min\", \"max\", \"step\"];\nvar _hoisted_7 = {\n  key: 0,\n  class: \"form-row alert alert-info my-1 small\"\n};\nvar _hoisted_8 = {\n  class: \"col\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  var _component_font_awesome_icon = Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"resolveComponent\"])(\"font-awesome-icon\");\n\n  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_1, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"label\", {\n    onClick: _cache[0] || (_cache[0] = function () {\n      return $options.toggleHelp && $options.toggleHelp.apply($options, arguments);\n    }),\n    class: \"col-md-4 col-form-label\"\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createTextVNode\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($props.title) + \" \", 1\n  /* TEXT */\n  ), _ctx.$slots.help ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createBlock\"])(_component_font_awesome_icon, {\n    key: 0,\n    icon: $data.showHelp ? ['fas', 'question-circle'] : ['far', 'question-circle'],\n    class: Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"normalizeClass\"])($data.showHelp ? 'text-info' : '')\n  }, null, 8\n  /* PROPS */\n  , [\"icon\", \"class\"])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_3, [$options.label ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"label\", _hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"toDisplayString\"])($options.label), 1\n  /* TEXT */\n  )) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"button\", {\n    class: \"col-1 btn btn-block btn-info\",\n    type: \"button\",\n    onClick: _cache[1] || (_cache[1] = function () {\n      return $options.decrement && $options.decrement.apply($options, arguments);\n    })\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n    icon: ['fas', 'step-backward']\n  })]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"withDirectives\"])(Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"input\", Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"mergeProps\"])({\n    type: \"range\",\n    class: \"form-control-range rangeInput\",\n    min: $props.min,\n    max: $props.max,\n    step: $props.step,\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = function ($event) {\n      return $options.sliderValue = $event;\n    })\n  }, _ctx.$attrs), null, 16\n  /* FULL_PROPS */\n  , _hoisted_6), [[vue__WEBPACK_IMPORTED_MODULE_0__[\"vModelText\"], $options.sliderValue, void 0, {\n    number: true\n  }]])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"button\", {\n    class: \"col-1 btn btn-block btn-info\",\n    type: \"button\",\n    onClick: _cache[3] || (_cache[3] = function () {\n      return $options.increment && $options.increment.apply($options, arguments);\n    })\n  }, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createVNode\"])(_component_font_awesome_icon, {\n    icon: ['fas', 'step-forward']\n  })])]), $data.showHelp ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"openBlock\"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementBlock\"])(\"div\", _hoisted_7, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createElementVNode\"])(\"div\", _hoisted_8, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"renderSlot\"])(_ctx.$slots, \"help\", {}, undefined, true)])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[\"createCommentVNode\"])(\"v-if\", true)])]);\n}\n\n//# sourceURL=webpack:///./src/components/RangeInput.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/RangeInput.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/RangeInput.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ \"./node_modules/core-js/modules/es.number.constructor.js\");\n/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ \"./node_modules/@fortawesome/vue-fontawesome/index.es.js\");\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__[\"library\"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faQuestionCircle\"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faQuestionCircle\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faStepForward\"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__[\"faStepBackward\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"RangeInput\",\n  inheritAttrs: false,\n  props: {\n    title: String,\n    modelValue: {\n      type: Number\n    },\n    unit: String,\n    min: {\n      type: Number,\n      default: 0\n    },\n    max: {\n      type: Number,\n      default: 100\n    },\n    step: {\n      type: Number,\n      default: 1\n    },\n    labels: {\n      type: Array\n    }\n  },\n  emits: [\"update:modelValue\"],\n  data: function data() {\n    return {\n      showHelp: false\n    };\n  },\n  computed: {\n    label: function label() {\n      var currentLabel;\n\n      if (this.labels && this.sliderValue != undefined) {\n        if (this.sliderValue < this.labels.length) {\n          currentLabel = this.labels[this.sliderValue].label;\n        } else {\n          console.error(\"index out of bounds: \" + this.sliderValue);\n        }\n      } else {\n        currentLabel = this.sliderValue;\n      }\n\n      if (typeof currentLabel == \"number\") {\n        currentLabel = currentLabel.toLocaleString(undefined, {\n          minimumFractionDigits: this.precision,\n          maximumFractionDigits: this.precision\n        });\n\n        if (this.unit) {\n          currentLabel += \" \" + this.unit;\n        }\n      }\n\n      return currentLabel;\n    },\n    precision: function precision() {\n      if (!isFinite(this.step)) return 0;\n      var e = 1,\n          p = 0;\n\n      while (Math.round(this.step * e) / e !== this.step) {\n        e *= 10;\n        p++;\n      }\n\n      return p;\n    },\n    sliderValue: {\n      get: function get() {\n        if (this.labels) {\n          var myValue = undefined;\n\n          for (var index = 0; index < this.labels.length; index++) {\n            if (this.labels[index].value == this.modelValue) {\n              myValue = index;\n              break;\n            }\n          }\n\n          if (myValue === undefined && this.modelValue !== undefined) {\n            console.warn(\"sliderValue: not found in values: \", this.modelValue, \"using min as default: \", this.min);\n            return this.min;\n          } else {\n            return myValue;\n          }\n        }\n\n        return this.modelValue;\n      },\n      set: function set(newSliderValue) {\n        if (this.labels) {\n          var myValue = this.labels[newSliderValue].value;\n          this.$emit(\"update:modelValue\", myValue);\n        } else {\n          this.$emit(\"update:modelValue\", newSliderValue);\n        }\n      }\n    },\n    value: {\n      get: function get() {\n        return this.modelValue;\n      },\n      set: function set(newValue) {\n        this.$emit(\"update:modelValue\", newValue);\n      }\n    }\n  },\n  methods: {\n    toggleHelp: function toggleHelp() {\n      this.showHelp = !this.showHelp && this.$slots.help !== undefined;\n    },\n    increment: function increment() {\n      var newSliderValue = Math.min(this.sliderValue + this.step, this.max); // rounding needed!\n\n      this.sliderValue = Math.round(newSliderValue * Math.pow(10, this.precision)) / Math.pow(10, this.precision);\n    },\n    decrement: function decrement() {\n      var newSliderValue = Math.max(this.sliderValue - this.step, this.min); // rounding needed!\n\n      this.sliderValue = Math.round(newSliderValue * Math.pow(10, this.precision)) / Math.pow(10, this.precision);\n    }\n  },\n  components: {\n    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_4__[\"FontAwesomeIcon\"]\n  }\n});\n\n//# sourceURL=webpack:///./src/components/RangeInput.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"\\n.vaRow[data-v-1e17783d] {\\n\\t/* vertical alignment of content in rows */\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"/opt/openWB-dev/openwb-ui-settings/src/components/RangeInput.vue\"],\"names\":[],\"mappings\":\";AAuMA;CACC,0CAA0C;CAC1C,aAAa;CACb,mBAAmB;AACpB\",\"file\":\"RangeInput.vue\",\"sourcesContent\":[\"<template>\\n\\t<div class=\\\"form-row mb-1\\\">\\n\\t\\t<label v-on:click=\\\"toggleHelp\\\" class=\\\"col-md-4 col-form-label\\\">\\n\\t\\t\\t{{ title }}\\n\\t\\t\\t<font-awesome-icon\\n\\t\\t\\t\\tv-if=\\\"$slots.help\\\"\\n\\t\\t\\t\\t:icon=\\\"\\n\\t\\t\\t\\t\\tshowHelp\\n\\t\\t\\t\\t\\t\\t? ['fas', 'question-circle']\\n\\t\\t\\t\\t\\t\\t: ['far', 'question-circle']\\n\\t\\t\\t\\t\\\"\\n\\t\\t\\t\\t:class=\\\"showHelp ? 'text-info' : ''\\\"\\n\\t\\t\\t/>\\n\\t\\t</label>\\n\\t\\t<div class=\\\"col-md-8\\\">\\n\\t\\t\\t<div class=\\\"form-row vaRow mb-1\\\">\\n\\t\\t\\t\\t<label v-if=\\\"label\\\" class=\\\"col-2 col-form-label valueLabel\\\">\\n\\t\\t\\t\\t\\t{{ label }}\\n\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\\"col-1 btn btn-block btn-info\\\"\\n\\t\\t\\t\\t\\ttype=\\\"button\\\"\\n\\t\\t\\t\\t\\t@click=\\\"decrement\\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<font-awesome-icon :icon=\\\"['fas', 'step-backward']\\\" />\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t<div class=\\\"col\\\">\\n\\t\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\t\\ttype=\\\"range\\\"\\n\\t\\t\\t\\t\\t\\tclass=\\\"form-control-range rangeInput\\\"\\n\\t\\t\\t\\t\\t\\t:min=\\\"min\\\"\\n\\t\\t\\t\\t\\t\\t:max=\\\"max\\\"\\n\\t\\t\\t\\t\\t\\t:step=\\\"step\\\"\\n\\t\\t\\t\\t\\t\\tv-model.number=\\\"sliderValue\\\"\\n\\t\\t\\t\\t\\t\\tv-bind=\\\"$attrs\\\"\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\\"col-1 btn btn-block btn-info\\\"\\n\\t\\t\\t\\t\\ttype=\\\"button\\\"\\n\\t\\t\\t\\t\\t@click=\\\"increment\\\"\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<font-awesome-icon :icon=\\\"['fas', 'step-forward']\\\" />\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div v-if=\\\"showHelp\\\" class=\\\"form-row alert alert-info my-1 small\\\">\\n\\t\\t\\t\\t<div class=\\\"col\\\">\\n\\t\\t\\t\\t\\t<slot name=\\\"help\\\"></slot>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</template>\\n\\n<script>\\nimport { library } from \\\"@fortawesome/fontawesome-svg-core\\\";\\nimport {\\n\\tfaQuestionCircle as fasQuestionCircle,\\n\\tfaStepForward as fasStepForward,\\n\\tfaStepBackward as fasStepBackward,\\n} from \\\"@fortawesome/free-solid-svg-icons\\\";\\nimport { faQuestionCircle as farQuestionCircle } from \\\"@fortawesome/free-regular-svg-icons\\\";\\nimport { FontAwesomeIcon } from \\\"@fortawesome/vue-fontawesome\\\";\\n\\nlibrary.add(\\n\\tfasQuestionCircle,\\n\\tfarQuestionCircle,\\n\\tfasStepForward,\\n\\tfasStepBackward\\n);\\n\\nexport default {\\n\\tname: \\\"RangeInput\\\",\\n\\tinheritAttrs: false,\\n\\tprops: {\\n\\t\\ttitle: String,\\n\\t\\tmodelValue: { type: Number },\\n\\t\\tunit: String,\\n\\t\\tmin: { type: Number, default: 0 },\\n\\t\\tmax: { type: Number, default: 100 },\\n\\t\\tstep: { type: Number, default: 1 },\\n\\t\\tlabels: { type: Array },\\n\\t},\\n\\temits: [\\\"update:modelValue\\\"],\\n\\tdata() {\\n\\t\\treturn {\\n\\t\\t\\tshowHelp: false,\\n\\t\\t};\\n\\t},\\n\\tcomputed: {\\n\\t\\tlabel() {\\n\\t\\t\\tvar currentLabel;\\n\\t\\t\\tif (this.labels && this.sliderValue != undefined) {\\n\\t\\t\\t\\tif (this.sliderValue < this.labels.length) {\\n\\t\\t\\t\\t\\tcurrentLabel = this.labels[this.sliderValue].label;\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tconsole.error(\\\"index out of bounds: \\\" + this.sliderValue);\\n\\t\\t\\t\\t}\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tcurrentLabel = this.sliderValue;\\n\\t\\t\\t}\\n\\t\\t\\tif (typeof currentLabel == \\\"number\\\") {\\n\\t\\t\\t\\tcurrentLabel = currentLabel.toLocaleString(undefined, {\\n\\t\\t\\t\\t\\tminimumFractionDigits: this.precision,\\n\\t\\t\\t\\t\\tmaximumFractionDigits: this.precision,\\n\\t\\t\\t\\t});\\n\\t\\t\\t\\tif (this.unit) {\\n\\t\\t\\t\\t\\tcurrentLabel += \\\" \\\" + this.unit;\\n\\t\\t\\t\\t}\\n\\t\\t\\t}\\n\\t\\t\\treturn currentLabel;\\n\\t\\t},\\n\\t\\tprecision() {\\n\\t\\t\\tif (!isFinite(this.step)) return 0;\\n\\t\\t\\tvar e = 1,\\n\\t\\t\\t\\tp = 0;\\n\\t\\t\\twhile (Math.round(this.step * e) / e !== this.step) {\\n\\t\\t\\t\\te *= 10;\\n\\t\\t\\t\\tp++;\\n\\t\\t\\t}\\n\\t\\t\\treturn p;\\n\\t\\t},\\n\\t\\tsliderValue: {\\n\\t\\t\\tget() {\\n\\t\\t\\t\\tif (this.labels) {\\n\\t\\t\\t\\t\\tvar myValue = undefined;\\n\\t\\t\\t\\t\\tfor (let index = 0; index < this.labels.length; index++) {\\n\\t\\t\\t\\t\\t\\tif (this.labels[index].value == this.modelValue) {\\n\\t\\t\\t\\t\\t\\t\\tmyValue = index;\\n\\t\\t\\t\\t\\t\\t\\tbreak;\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\tif (\\n\\t\\t\\t\\t\\t\\tmyValue === undefined &&\\n\\t\\t\\t\\t\\t\\tthis.modelValue !== undefined\\n\\t\\t\\t\\t\\t) {\\n\\t\\t\\t\\t\\t\\tconsole.warn(\\n\\t\\t\\t\\t\\t\\t\\t\\\"sliderValue: not found in values: \\\",\\n\\t\\t\\t\\t\\t\\t\\tthis.modelValue,\\n\\t\\t\\t\\t\\t\\t\\t\\\"using min as default: \\\",\\n\\t\\t\\t\\t\\t\\t\\tthis.min\\n\\t\\t\\t\\t\\t\\t);\\n\\t\\t\\t\\t\\t\\treturn this.min;\\n\\t\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\t\\treturn myValue;\\n\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t}\\n\\t\\t\\t\\treturn this.modelValue;\\n\\t\\t\\t},\\n\\t\\t\\tset(newSliderValue) {\\n\\t\\t\\t\\tif (this.labels) {\\n\\t\\t\\t\\t\\tvar myValue = this.labels[newSliderValue].value;\\n\\t\\t\\t\\t\\tthis.$emit(\\\"update:modelValue\\\", myValue);\\n\\t\\t\\t\\t} else {\\n\\t\\t\\t\\t\\tthis.$emit(\\\"update:modelValue\\\", newSliderValue);\\n\\t\\t\\t\\t}\\n\\t\\t\\t},\\n\\t\\t},\\n\\t\\tvalue: {\\n\\t\\t\\tget() {\\n\\t\\t\\t\\treturn this.modelValue;\\n\\t\\t\\t},\\n\\t\\t\\tset(newValue) {\\n\\t\\t\\t\\tthis.$emit(\\\"update:modelValue\\\", newValue);\\n\\t\\t\\t},\\n\\t\\t},\\n\\t},\\n\\tmethods: {\\n\\t\\ttoggleHelp() {\\n\\t\\t\\tthis.showHelp = !this.showHelp && this.$slots.help !== undefined;\\n\\t\\t},\\n\\t\\tincrement() {\\n\\t\\t\\tvar newSliderValue = Math.min(\\n\\t\\t\\t\\tthis.sliderValue + this.step,\\n\\t\\t\\t\\tthis.max\\n\\t\\t\\t);\\n\\t\\t\\t// rounding needed!\\n\\t\\t\\tthis.sliderValue =\\n\\t\\t\\t\\tMath.round(newSliderValue * Math.pow(10, this.precision)) /\\n\\t\\t\\t\\tMath.pow(10, this.precision);\\n\\t\\t},\\n\\t\\tdecrement() {\\n\\t\\t\\tvar newSliderValue = Math.max(\\n\\t\\t\\t\\tthis.sliderValue - this.step,\\n\\t\\t\\t\\tthis.min\\n\\t\\t\\t);\\n\\t\\t\\t// rounding needed!\\n\\t\\t\\tthis.sliderValue =\\n\\t\\t\\t\\tMath.round(newSliderValue * Math.pow(10, this.precision)) /\\n\\t\\t\\t\\tMath.pow(10, this.precision);\\n\\t\\t},\\n\\t},\\n\\tcomponents: {\\n\\t\\tFontAwesomeIcon,\\n\\t},\\n};\\n</script>\\n\\n<style scoped>\\n.vaRow {\\n\\t/* vertical alignment of content in rows */\\n\\tdisplay: flex;\\n\\talign-items: center;\\n}\\n</style>\\n\"]}]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/components/RangeInput.vue?./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"0236212b\", content, false, {\"sourceMap\":true,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./src/components/RangeInput.vue?./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1");

/***/ }),

/***/ "./src/components/RangeInput.vue":
/*!***************************************!*\
  !*** ./src/components/RangeInput.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RangeInput_vue_vue_type_template_id_1e17783d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RangeInput.vue?vue&type=template&id=1e17783d&scoped=true */ \"./src/components/RangeInput.vue?vue&type=template&id=1e17783d&scoped=true\");\n/* harmony import */ var _RangeInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RangeInput.vue?vue&type=script&lang=js */ \"./src/components/RangeInput.vue?vue&type=script&lang=js\");\n/* empty/unused harmony star reexport *//* harmony import */ var _RangeInput_vue_vue_type_style_index_0_id_1e17783d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css */ \"./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css\");\n/* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js */ \"./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/exportHelper.js\");\n/* harmony import */ var _opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nconst __exports__ = /*#__PURE__*/_opt_openWB_dev_openwb_ui_settings_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_RangeInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_RangeInput_vue_vue_type_template_id_1e17783d_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]],['__scopeId',\"data-v-1e17783d\"],['__file',\"src/components/RangeInput.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (__exports__);\n\n//# sourceURL=webpack:///./src/components/RangeInput.vue?");

/***/ }),

/***/ "./src/components/RangeInput.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./src/components/RangeInput.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./RangeInput.vue?vue&type=script&lang=js */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/RangeInput.vue?vue&type=script&lang=js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* empty/unused harmony star reexport */ \n\n//# sourceURL=webpack:///./src/components/RangeInput.vue?");

/***/ }),

/***/ "./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css":
/*!***********************************************************************************************!*\
  !*** ./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_style_index_0_id_1e17783d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--6-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/RangeInput.vue?vue&type=style&index=0&id=1e17783d&scoped=true&lang=css\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_style_index_0_id_1e17783d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_style_index_0_id_1e17783d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_style_index_0_id_1e17783d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_style_index_0_id_1e17783d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack:///./src/components/RangeInput.vue?");

/***/ }),

/***/ "./src/components/RangeInput.vue?vue&type=template&id=1e17783d&scoped=true":
/*!*********************************************************************************!*\
  !*** ./src/components/RangeInput.vue?vue&type=template&id=1e17783d&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_template_id_1e17783d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist??ref--0-1!./RangeInput.vue?vue&type=template&id=1e17783d&scoped=true */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/@vue/cli-service/node_modules/vue-loader-v16/dist/index.js?!./src/components/RangeInput.vue?vue&type=template&id=1e17783d&scoped=true\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_cli_service_node_modules_vue_loader_v16_dist_index_js_ref_0_1_RangeInput_vue_vue_type_template_id_1e17783d_scoped_true__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/RangeInput.vue?");

/***/ })

}]);