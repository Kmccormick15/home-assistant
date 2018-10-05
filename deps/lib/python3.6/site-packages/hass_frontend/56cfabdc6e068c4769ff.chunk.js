(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{641:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_app_layout_app_toolbar_app_toolbar_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(122),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),_components_ha_menu_button_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(135),_resources_ha_style_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(121);class HaPanelIframe extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_2__.a{static get template(){return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__.a`
    <style include='ha-style'>
      iframe {
        border: 0;
        width: 100%;
        height: calc(100% - 64px);
      }
    </style>
    <app-toolbar>
      <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
      <div main-title>[[panel.title]]</div>
    </app-toolbar>

    <iframe
      src='[[panel.config.url]]'
      sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
      allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
    ></iframe>
    `}static get properties(){return{panel:{type:Object},narrow:{type:Boolean},showMenu:{type:Boolean}}}}customElements.define("ha-panel-iframe",HaPanelIframe)}}]);
//# sourceMappingURL=56cfabdc6e068c4769ff.chunk.js.map