(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{648:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),_mixins_localize_mixin_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(13);class NotificationManager extends Object(_mixins_localize_mixin_js__WEBPACK_IMPORTED_MODULE_2__.a)(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_1__.a){static get template(){return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_0__.a`
    <style>
      paper-toast {
        z-index: 1;
      }
    </style>

    <ha-toast
      id="toast"
      no-cancel-on-outside-click="[[_cancelOnOutsideClick]]"
    ></ha-toast>
`}static get properties(){return{hass:Object,_cancelOnOutsideClick:{type:Boolean,value:!1}}}ready(){super.ready();__webpack_require__.e(41).then(__webpack_require__.bind(null,324))}showDialog({message}){this.$.toast.show(message)}}customElements.define("notification-manager",NotificationManager)}}]);
//# sourceMappingURL=26c0aede79d95874dc4d.chunk.js.map