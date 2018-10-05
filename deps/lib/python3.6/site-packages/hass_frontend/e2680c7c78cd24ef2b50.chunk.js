(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{156:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),_polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30),_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(90),_polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(39),_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(36);/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const template=_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__.a`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class\$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class\$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;template.setAttribute("strip-whitespace","");Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__.a)({_template:template,is:"paper-checkbox",behaviors:[_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__.a],hostAttributes:{role:"checkbox","aria-checked":!1,tabindex:0},properties:{ariaActiveAttribute:{type:String,value:"aria-checked"}},attached:function(){Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__.a)(this,function(){var inkSize=this.getComputedStyleValue("--calculated-paper-checkbox-ink-size").trim();if("-1px"===inkSize){var checkboxSizeText=this.getComputedStyleValue("--calculated-paper-checkbox-size").trim(),units="px",unitsMatches=checkboxSizeText.match(/[A-Za-z]+$/);if(null!==unitsMatches){units=unitsMatches[0]}var checkboxSize=parseFloat(checkboxSizeText),defaultInkSize=8/3*checkboxSize;if("px"===units){defaultInkSize=Math.floor(defaultInkSize);if(defaultInkSize%2!==checkboxSize%2){defaultInkSize++}}this.updateStyles({"--paper-checkbox-ink-size":defaultInkSize+units})}})},_computeCheckboxClass:function(checked,invalid){var className="";if(checked){className+="checked "}if(invalid){className+="invalid"}return className},_computeCheckmarkClass:function(checked){return checked?"":"hidden"},_createRipple:function(){this._rippleContainer=this.$.checkboxContainer;return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__.b._createRipple.call(this)}})},216:function(module,__webpack_exports__,__webpack_require__){"use strict";var _polymer_paper_icon_button_paper_icon_button_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(62),_polymer_paper_input_paper_input_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(61),_polymer_paper_item_paper_icon_item_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(214),_polymer_paper_item_paper_item_body_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(198),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4),_vaadin_vaadin_combo_box_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(254),_state_badge_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(126),_common_entity_compute_state_name_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(28),_mixins_localize_mixin_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(13),_mixins_events_mixin_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(14);class HaEntityPicker extends Object(_mixins_events_mixin_js__WEBPACK_IMPORTED_MODULE_10__.a)(Object(_mixins_localize_mixin_js__WEBPACK_IMPORTED_MODULE_9__.a)(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_5__.a)){static get template(){return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__.a`
    <style>
      paper-input > paper-icon-button {
        width: 24px;
        height: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
    </style>
    <vaadin-combo-box-light
      items="[[_states]]"
      item-value-path="entity_id"
      item-label-path="entity_id"
      value="{{value}}"
      opened="{{opened}}"
      allow-custom-value="[[allowCustomEntity]]"
      on-change='_fireChanged'
    >
      <paper-input autofocus="[[autofocus]]" label="[[_computeLabel(label, localize)]]" class="input" value="[[value]]" disabled="[[disabled]]">
        <paper-icon-button slot="suffix" class="clear-button" icon="hass:close" no-ripple="" hidden$="[[!value]]">Clear</paper-icon-button>
        <paper-icon-button slot="suffix" class="toggle-button" icon="[[_computeToggleIcon(opened)]]" hidden="[[!_states.length]]">Toggle</paper-icon-button>
      </paper-input>
      <template>
        <style>
          paper-icon-item {
            margin: -10px;
          }
        </style>
        <paper-icon-item>
          <state-badge state-obj="[[item]]" slot="item-icon"></state-badge>
          <paper-item-body two-line="">
            <div>[[_computeStateName(item)]]</div>
            <div secondary="">[[item.entity_id]]</div>
          </paper-item-body>
        </paper-icon-item>
      </template>
    </vaadin-combo-box-light>
`}static get properties(){return{allowCustomEntity:{type:Boolean,value:!1},hass:{type:Object,observer:"_hassChanged"},_hass:Object,_states:{type:Array,computed:"_computeStates(_hass, domainFilter, entityFilter)"},autofocus:Boolean,label:{type:String},value:{type:String,notify:!0},opened:{type:Boolean,value:!1,observer:"_openedChanged"},domainFilter:{type:String,value:null},entityFilter:{type:Function,value:null},disabled:Boolean}}_computeLabel(label,localize){return label===void 0?localize("ui.components.entity.entity-picker.entity"):label}_computeStates(hass,domainFilter,entityFilter){if(!hass)return[];let entityIds=Object.keys(hass.states);if(domainFilter){entityIds=entityIds.filter(eid=>eid.substr(0,eid.indexOf("."))===domainFilter)}let entities=entityIds.sort().map(key=>hass.states[key]);if(entityFilter){entities=entities.filter(entityFilter)}return entities}_computeStateName(state){return Object(_common_entity_compute_state_name_js__WEBPACK_IMPORTED_MODULE_8__.a)(state)}_openedChanged(newVal){if(!newVal){this._hass=this.hass}}_hassChanged(newVal){if(!this.opened){this._hass=newVal}}_computeToggleIcon(opened){return opened?"hass:menu-up":"hass:menu-down"}_fireChanged(ev){ev.stopPropagation();this.fire("change")}}customElements.define("ha-entity-picker",HaEntityPicker)},638:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _polymer_app_layout_app_header_layout_app_header_layout_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(155),_polymer_app_layout_app_header_app_header_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(154),_polymer_app_layout_app_toolbar_app_toolbar_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(122),_polymer_paper_button_paper_button_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(55),_polymer_paper_checkbox_paper_checkbox_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(156),_polymer_paper_input_paper_input_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(61),_polymer_paper_input_paper_textarea_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(213),_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(4),_components_entity_ha_entity_picker_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(216),_components_ha_menu_button_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(135),_resources_ha_style_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(121),_mixins_events_mixin_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(14);class HaPanelDevState extends Object(_mixins_events_mixin_js__WEBPACK_IMPORTED_MODULE_12__.a)(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_8__.a){static get template(){return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__.a`
    <style include="ha-style">
      :host {
        -ms-user-select: initial;
        -webkit-user-select: initial;
        -moz-user-select: initial;
      }

      .content {
        padding: 16px;
      }

      ha-entity-picker, .state-input, paper-textarea {
        display: block;
        max-width: 400px;
      }

      .entities th {
        text-align: left;
      }

      .entities tr {
        vertical-align: top;
      }

      .entities tr:nth-child(odd) {
        background-color: var(--table-row-background-color, #fff)
      }

      .entities tr:nth-child(even) {
        background-color: var(--table-row-alternative-background-color, #eee)
      }
      .entities td {
        padding: 4px;
      }
      .entities paper-icon-button {
        height: 24px;
        padding: 0;
      }
      .entities td:nth-child(3) {
        white-space: pre-wrap;
        word-break: break-word;
      }

      .entities a {
        color: var(--primary-color);
      }
    </style>

    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
          <div main-title>States</div>
        </app-toolbar>
      </app-header>

      <div class='content'>
        <div>
          <p>
            Set the representation of a device within Home Assistant.<br />
            This will not communicate with the actual device.
          </p>

          <ha-entity-picker
            autofocus
            hass="[[hass]]"
            value="{{_entityId}}"
            allow-custom-entity
          ></ha-entity-picker>
          <paper-input
            label="State"
            required
            value='{{_state}}'
            class='state-input'
          ></paper-input>
          <paper-textarea label="State attributes (JSON, optional)" value='{{_stateAttributes}}'></paper-textarea>
          <paper-button on-click='handleSetState' raised>Set State</paper-button>
        </div>

        <h1>Current entities</h1>
        <table class='entities'>
          <tr>
            <th>Entity</th>
            <th>State</th>
            <th hidden$='[[narrow]]'>
              Attributes
              <paper-checkbox checked='{{_showAttributes}}'></paper-checkbox>
            </th>
          </tr>
          <tr>
            <th><paper-input label="Filter entities" type="search" value='{{_entityFilter}}'></paper-input></th>
            <th><paper-input label="Filter states" type="search" value='{{_stateFilter}}'></paper-input></th>
            <th hidden$='[[!computeShowAttributes(narrow, _showAttributes)]]'><paper-input label="Filter attributes" type="search" value='{{_attributeFilter}}'></paper-input></th>
          </tr>
          <tr hidden$='[[!computeShowEntitiesPlaceholder(_entities)]]'>
            <td colspan="3">No entities</td>
          </tr>
          <template is='dom-repeat' items='[[_entities]]' as='entity'>
            <tr>
              <td>
                <paper-icon-button
                  on-click='entityMoreInfo'
                  icon='hass:open-in-new'
                  alt="More Info" title="More Info"
                  >
                </paper-icon-button>
                <a href='#' on-click='entitySelected'>[[entity.entity_id]]</a>
              </td>
              <td>[[entity.state]]</td>
              <template is='dom-if' if='[[computeShowAttributes(narrow, _showAttributes)]]'>
                <td>[[attributeString(entity)]]</td>
              </template>
            </tr>
          </template>
        </table>
      </div>
    </app-header-layout>
    `}static get properties(){return{hass:{type:Object},narrow:{type:Boolean,value:!1},showMenu:{type:Boolean,value:!1},_entityId:{type:String,value:""},_entityFilter:{type:String,value:""},_stateFilter:{type:String,value:""},_attributeFilter:{type:String,value:""},_state:{type:String,value:""},_stateAttributes:{type:String,value:""},_showAttributes:{type:Boolean,value:!0},_entities:{type:Array,computed:"computeEntities(hass, _entityFilter, _stateFilter, _attributeFilter)"}}}entitySelected(ev){var state=ev.model.entity;this._entityId=state.entity_id;this._state=state.state;this._stateAttributes=JSON.stringify(state.attributes,null,"  ");ev.preventDefault()}entityMoreInfo(ev){ev.preventDefault();this.fire("hass-more-info",{entityId:ev.model.entity.entity_id})}handleSetState(){var attr,attrRaw=this._stateAttributes.replace(/^\s+|\s+$/g,"");try{attr=attrRaw?JSON.parse(attrRaw):{}}catch(err){alert("Error parsing JSON: "+err);return}this.hass.callApi("POST","states/"+this._entityId,{state:this._state,attributes:attr})}computeEntities(hass,_entityFilter,_stateFilter,_attributeFilter){return Object.keys(hass.states).map(function(key){return hass.states[key]}).filter(function(value){if(!value.entity_id.includes(_entityFilter.toLowerCase())){return!1}if(!value.state.includes(_stateFilter.toLowerCase())){return!1}if(""!==_attributeFilter){var attributeFilter=_attributeFilter.toLowerCase(),colonIndex=attributeFilter.indexOf(":"),multiMode=-1!==colonIndex,keyFilter=attributeFilter,valueFilter=attributeFilter;if(multiMode){keyFilter=attributeFilter.substring(0,colonIndex).trim();valueFilter=attributeFilter.substring(colonIndex+1).trim()}for(var attributeKeys=Object.keys(value.attributes),i=0,key;i<attributeKeys.length;i++){key=attributeKeys[i];if(key.includes(keyFilter)&&!multiMode){return!0}if(!key.includes(keyFilter)&&multiMode){continue}var attributeValue=value.attributes[key];if(null!==attributeValue&&JSON.stringify(attributeValue).toLowerCase().includes(valueFilter)){return!0}}return!1}return!0}).sort(function(entityA,entityB){if(entityA.entity_id<entityB.entity_id){return-1}if(entityA.entity_id>entityB.entity_id){return 1}return 0})}computeShowEntitiesPlaceholder(_entities){return 0===_entities.length}computeShowAttributes(narrow,_showAttributes){return!narrow&&_showAttributes}attributeString(entity){var output="",i,keys,key,value;for(i=0,keys=Object.keys(entity.attributes);i<keys.length;i++){key=keys[i];value=entity.attributes[key];if(!Array.isArray(value)&&value instanceof Object){value=JSON.stringify(value,null,"  ")}output+=key+": "+value+"\n"}return output}}customElements.define("ha-panel-dev-state",HaPanelDevState)}}]);
//# sourceMappingURL=e2680c7c78cd24ef2b50.chunk.js.map