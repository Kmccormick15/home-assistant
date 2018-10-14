(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{322:function(module,__webpack_exports__,__webpack_require__){"use strict";/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const directives=new WeakMap,isDirective=o=>"function"===typeof o&&directives.has(o),isCEPolyfill=window.customElements!==void 0&&window.customElements.polyfillWrapFlushCallback!==void 0,reparentNodes=(container,start,end=null,before=null)=>{let node=start;while(node!==end){const n=node.nextSibling;container.insertBefore(node,before);node=n}},removeNodes=(container,startNode,endNode=null)=>{let node=startNode;while(node!==endNode){const n=node.nextSibling;container.removeChild(node);node=n}},noChange={},marker=`{{lit-${(Math.random()+"").slice(2)}}}`,nodeMarker=`<!--${marker}-->`,markerRegex=new RegExp(`${marker}|${nodeMarker}`),rewritesStyleAttribute=(()=>{const el=document.createElement("div");el.setAttribute("style","{{bad value}}");return"{{bad value}}"!==el.getAttribute("style")})();/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 *//**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class Template{constructor(result,element){this.parts=[];this.element=element;let index=-1,partIndex=0;const nodesToRemove=[],_prepareTemplate=template=>{const content=template.content,walker=document.createTreeWalker(content,133,null,!1);let previousNode,currentNode;while(walker.nextNode()){index++;previousNode=currentNode;const node=currentNode=walker.currentNode;if(1===node.nodeType){if(node.hasAttributes()){const attributes=node.attributes;let count=0;for(let i=0;i<attributes.length;i++){if(0<=attributes[i].value.indexOf(marker)){count++}}while(0<count--){const stringForPart=result.strings[partIndex],name=lastAttributeNameRegex.exec(stringForPart)[2],attributeLookupName=rewritesStyleAttribute&&"style"===name?"style$":/^[a-zA-Z-]*$/.test(name)?name:name.toLowerCase(),attributeValue=node.getAttribute(attributeLookupName),strings=attributeValue.split(markerRegex);this.parts.push({type:"attribute",index,name,strings});node.removeAttribute(attributeLookupName);partIndex+=strings.length-1}}if("TEMPLATE"===node.tagName){_prepareTemplate(node)}}else if(3===node.nodeType){const nodeValue=node.nodeValue;if(0>nodeValue.indexOf(marker)){continue}const parent=node.parentNode,strings=nodeValue.split(markerRegex),lastIndex=strings.length-1;partIndex+=lastIndex;for(let i=0;i<lastIndex;i++){parent.insertBefore(""===strings[i]?createMarker():document.createTextNode(strings[i]),node);this.parts.push({type:"node",index:index++})}parent.insertBefore(""===strings[lastIndex]?createMarker():document.createTextNode(strings[lastIndex]),node);nodesToRemove.push(node)}else if(8===node.nodeType){if(node.nodeValue===marker){const parent=node.parentNode,previousSibling=node.previousSibling;if(null===previousSibling||previousSibling!==previousNode||previousSibling.nodeType!==Node.TEXT_NODE){parent.insertBefore(createMarker(),node)}else{index--}this.parts.push({type:"node",index:index++});nodesToRemove.push(node);if(null===node.nextSibling){parent.insertBefore(createMarker(),node)}else{index--}currentNode=previousNode;partIndex++}else{let i=-1;while(-1!==(i=node.nodeValue.indexOf(marker,i+1))){this.parts.push({type:"node",index:-1})}}}}};_prepareTemplate(element);for(const n of nodesToRemove){n.parentNode.removeChild(n)}}}const isTemplatePartActive=part=>-1!==part.index,createMarker=()=>document.createComment(""),lastAttributeNameRegex=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class template_instance_TemplateInstance{constructor(template,processor,options){this._parts=[];this.template=template;this.processor=processor;this.options=options}update(values){let i=0;for(const part of this._parts){if(part!==void 0){part.setValue(values[i])}i++}for(const part of this._parts){if(part!==void 0){part.commit()}}}_clone(){const fragment=isCEPolyfill?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),parts=this.template.parts;let partIndex=0,nodeIndex=0;const _prepareInstance=fragment=>{const walker=document.createTreeWalker(fragment,133,null,!1);let node=walker.nextNode();while(partIndex<parts.length&&null!==node){const part=parts[partIndex];if(!isTemplatePartActive(part)){this._parts.push(void 0);partIndex++}else if(nodeIndex===part.index){if("node"===part.type){const part=this.processor.handleTextExpression(this.options);part.insertAfterNode(node);this._parts.push(part)}else{this._parts.push(...this.processor.handleAttributeExpressions(node,part.name,part.strings,this.options))}partIndex++}else{nodeIndex++;if("TEMPLATE"===node.nodeName){_prepareInstance(node.content)}node=walker.nextNode()}}};_prepareInstance(fragment);if(isCEPolyfill){document.adoptNode(fragment);customElements.upgrade(fragment)}return fragment}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class template_result_TemplateResult{constructor(strings,values,type,processor){this.strings=strings;this.values=values;this.type=type;this.processor=processor}getHTML(){const l=this.strings.length-1;let html="",isTextBinding=!0;for(let i=0;i<l;i++){const s=this.strings[i];html+=s;const close=s.lastIndexOf(">");isTextBinding=(-1<close||isTextBinding)&&-1===s.indexOf("<",close+1);if(!isTextBinding&&rewritesStyleAttribute){html=html.replace(lastAttributeNameRegex,(match,p1,p2,p3)=>{return"style"===p2?`${p1}style$${p3}`:match})}html+=isTextBinding?nodeMarker:marker}html+=this.strings[l];return html}getTemplateElement(){const template=document.createElement("template");template.innerHTML=this.getHTML();return template}}class template_result_SVGTemplateResult extends template_result_TemplateResult{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const template=super.getTemplateElement(),content=template.content,svgElement=content.firstChild;content.removeChild(svgElement);reparentNodes(content,svgElement.firstChild);return template}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const isPrimitive=value=>null===value||!("object"===typeof value||"function"===typeof value);class AttributeCommitter{constructor(element,name,strings){this.dirty=!0;this.element=element;this.name=name;this.strings=strings;this.parts=[];for(let i=0;i<strings.length-1;i++){this.parts[i]=this._createPart()}}_createPart(){return new parts_AttributePart(this)}_getValue(){const strings=this.strings,l=strings.length-1;let text="";for(let i=0;i<l;i++){text+=strings[i];const part=this.parts[i];if(part!==void 0){const v=part.value;if(null!=v&&(Array.isArray(v)||"string"!==typeof v&&v[Symbol.iterator])){for(const t of v){text+="string"===typeof t?t:t+""}}else{text+="string"===typeof v?v:v+""}}}text+=strings[l];return text}commit(){if(this.dirty){this.dirty=!1;this.element.setAttribute(this.name,this._getValue())}}}class parts_AttributePart{constructor(comitter){this.value=void 0;this.committer=comitter}setValue(value){if(value!==noChange&&(!isPrimitive(value)||value!==this.value)){this.value=value;if(!isDirective(value)){this.committer.dirty=!0}}}commit(){while(isDirective(this.value)){const directive=this.value;this.value=noChange;directive(this)}if(this.value===noChange){return}this.committer.commit()}}class parts_NodePart{constructor(options){this.value=void 0;this._pendingValue=void 0;this.options=options}appendInto(container){this.startNode=container.appendChild(createMarker());this.endNode=container.appendChild(createMarker())}insertAfterNode(ref){this.startNode=ref;this.endNode=ref.nextSibling}appendIntoPart(part){part._insert(this.startNode=createMarker());part._insert(this.endNode=createMarker())}insertAfterPart(ref){ref._insert(this.startNode=createMarker());this.endNode=ref.endNode;ref.endNode=this.startNode}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive=this._pendingValue;this._pendingValue=noChange;directive(this)}const value=this._pendingValue;if(value===noChange){return}if(isPrimitive(value)){if(value!==this.value){this._commitText(value)}}else if(value instanceof template_result_TemplateResult){this._commitTemplateResult(value)}else if(value instanceof Node){this._commitNode(value)}else if(Array.isArray(value)||value[Symbol.iterator]){this._commitIterable(value)}else if(value.then!==void 0){this._commitPromise(value)}else{this._commitText(value)}}_insert(node){this.endNode.parentNode.insertBefore(node,this.endNode)}_commitNode(value){if(this.value===value){return}this.clear();this._insert(value);this.value=value}_commitText(value){const node=this.startNode.nextSibling;value=null==value?"":value;if(node===this.endNode.previousSibling&&node.nodeType===Node.TEXT_NODE){node.textContent=value}else{this._commitNode(document.createTextNode("string"===typeof value?value:value+""))}this.value=value}_commitTemplateResult(value){const template=this.options.templateFactory(value);if(this.value&&this.value.template===template){this.value.update(value.values)}else{const instance=new template_instance_TemplateInstance(template,value.processor,this.options),fragment=instance._clone();instance.update(value.values);this._commitNode(fragment);this.value=instance}}_commitIterable(value){if(!Array.isArray(this.value)){this.value=[];this.clear()}const itemParts=this.value;let partIndex=0,itemPart;for(const item of value){itemPart=itemParts[partIndex];if(itemPart===void 0){itemPart=new parts_NodePart(this.options);itemParts.push(itemPart);if(0===partIndex){itemPart.appendIntoPart(this)}else{itemPart.insertAfterPart(itemParts[partIndex-1])}}itemPart.setValue(item);itemPart.commit();partIndex++}if(partIndex<itemParts.length){itemParts.length=partIndex;this.clear(itemPart&&itemPart.endNode)}}_commitPromise(value){this.value=value;value.then(v=>{if(this.value===value){this.setValue(v);this.commit()}})}clear(startNode=this.startNode){removeNodes(this.startNode.parentNode,startNode.nextSibling,this.endNode)}}class parts_BooleanAttributePart{constructor(element,name,strings){this.value=void 0;this._pendingValue=void 0;if(2!==strings.length||""!==strings[0]||""!==strings[1]){throw new Error("Boolean attributes can only contain a single expression")}this.element=element;this.name=name;this.strings=strings}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive=this._pendingValue;this._pendingValue=noChange;directive(this)}if(this._pendingValue===noChange){return}const value=!!this._pendingValue;if(this.value!==value){if(value){this.element.setAttribute(this.name,"")}else{this.element.removeAttribute(this.name)}}this.value=value;this._pendingValue=noChange}}class PropertyCommitter extends AttributeCommitter{constructor(element,name,strings){super(element,name,strings);this.single=2===strings.length&&""===strings[0]&&""===strings[1]}_createPart(){return new PropertyPart(this)}_getValue(){if(this.single){return this.parts[0].value}return super._getValue()}commit(){if(this.dirty){this.dirty=!1;this.element[this.name]=this._getValue()}}}class PropertyPart extends parts_AttributePart{}let eventOptionsSupported=!1;try{const options={get capture(){eventOptionsSupported=!0;return!1}};window.addEventListener("test",options,options);window.removeEventListener("test",options,options)}catch(_e){}class parts_EventPart{constructor(element,eventName,eventContext){this.value=void 0;this._pendingValue=void 0;this.element=element;this.eventName=eventName;this.eventContext=eventContext}setValue(value){this._pendingValue=value}commit(){while(isDirective(this._pendingValue)){const directive=this._pendingValue;this._pendingValue=noChange;directive(this)}if(this._pendingValue===noChange){return}const newListener=this._pendingValue,oldListener=this.value,shouldRemoveListener=null==newListener||null!=oldListener&&(newListener.capture!==oldListener.capture||newListener.once!==oldListener.once||newListener.passive!==oldListener.passive);if(shouldRemoveListener){this.element.removeEventListener(this.eventName,this,this._options)}this._options=getOptions(newListener);if(null!=newListener&&(null==oldListener||shouldRemoveListener)){this.element.addEventListener(this.eventName,this,this._options)}this.value=newListener;this._pendingValue=noChange}handleEvent(event){const listener="function"===typeof this.value?this.value:"function"===typeof this.value.handleEvent?this.value.handleEvent:()=>null;listener.call(this.eventContext||this.element,event)}}const getOptions=o=>o&&(eventOptionsSupported?{capture:o.capture,passive:o.passive,once:o.once}:o.capture);/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const defaultTemplateProcessor=new class{handleAttributeExpressions(element,name,strings,options){const prefix=name[0];if("."===prefix){const comitter=new PropertyCommitter(element,name.slice(1),strings);return comitter.parts}if("@"===prefix){return[new parts_EventPart(element,name.slice(1),options.eventContext)]}if("?"===prefix){return[new parts_BooleanAttributePart(element,name.slice(1),strings)]}const comitter=new AttributeCommitter(element,name,strings);return comitter.parts}handleTextExpression(options){return new parts_NodePart(options)}};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function templateFactory(result){let templateCache=templateCaches.get(result.type);if(templateCache===void 0){templateCache=new Map;templateCaches.set(result.type,templateCache)}let template=templateCache.get(result.strings);if(template===void 0){template=new Template(result,result.getTemplateElement());templateCache.set(result.strings,template)}return template}const templateCaches=new Map,render_parts=new WeakMap,render=(result,container,options)=>{let part=render_parts.get(container);if(part===void 0){removeNodes(container,container.firstChild);render_parts.set(container,part=new parts_NodePart(Object.assign({templateFactory:templateFactory},options)));part.appendInto(container)}part.setValue(result);part.commit()},lit_html_html=(strings,...values)=>new template_result_TemplateResult(strings,values,"html",defaultTemplateProcessor),svg=(strings,...values)=>new template_result_SVGTemplateResult(strings,values,"svg",defaultTemplateProcessor),walkerNodeFilter=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 *//**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 *//**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function removeNodesFromTemplate(template,nodesToRemove){const{element:{content},parts}=template,walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),part=parts[partIndex],nodeIndex=-1,removeCount=0;const nodesToRemoveInTemplate=[];let currentRemovingNode=null;while(walker.nextNode()){nodeIndex++;const node=walker.currentNode;if(node.previousSibling===currentRemovingNode){currentRemovingNode=null}if(nodesToRemove.has(node)){nodesToRemoveInTemplate.push(node);if(null===currentRemovingNode){currentRemovingNode=node}}if(null!==currentRemovingNode){removeCount++}while(part!==void 0&&part.index===nodeIndex){part.index=null!==currentRemovingNode?-1:part.index-removeCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex);part=parts[partIndex]}}nodesToRemoveInTemplate.forEach(n=>n.parentNode.removeChild(n))}const countNodes=node=>{let count=node.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const walker=document.createTreeWalker(node,walkerNodeFilter,null,!1);while(walker.nextNode()){count++}return count},nextActiveIndexInTemplateParts=(parts,startIndex=-1)=>{for(let i=startIndex+1;i<parts.length;i++){const part=parts[i];if(isTemplatePartActive(part)){return i}}return-1};function insertNodeIntoTemplate(template,node,refNode=null){const{element:{content},parts}=template;if(null===refNode||refNode===void 0){content.appendChild(node);return}const walker=document.createTreeWalker(content,walkerNodeFilter,null,!1);let partIndex=nextActiveIndexInTemplateParts(parts),insertCount=0,walkerIndex=-1;while(walker.nextNode()){walkerIndex++;const walkerNode=walker.currentNode;if(walkerNode===refNode){insertCount=countNodes(node);refNode.parentNode.insertBefore(node,refNode)}while(-1!==partIndex&&parts[partIndex].index===walkerIndex){if(0<insertCount){while(-1!==partIndex){parts[partIndex].index+=insertCount;partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}return}partIndex=nextActiveIndexInTemplateParts(parts,partIndex)}}}/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const getTemplateCacheKey=(type,scopeName)=>`${type}--${scopeName}`;let compatibleShadyCSSVersion=!0;if("undefined"===typeof window.ShadyCSS){compatibleShadyCSSVersion=!1}else if("undefined"===typeof window.ShadyCSS.prepareTemplateDom){console.warn(`Incompatible ShadyCSS version detected.`+`Please update to at least @webcomponents/webcomponentsjs@2.0.2 and`+`@webcomponents/shadycss@1.3.1.`);compatibleShadyCSSVersion=!1}const shadyTemplateFactory=scopeName=>result=>{const cacheKey=getTemplateCacheKey(result.type,scopeName);let templateCache=templateCaches.get(cacheKey);if(templateCache===void 0){templateCache=new Map;templateCaches.set(cacheKey,templateCache)}let template=templateCache.get(result.strings);if(template===void 0){const element=result.getTemplateElement();if(compatibleShadyCSSVersion){window.ShadyCSS.prepareTemplateDom(element,scopeName)}template=new Template(result,element);templateCache.set(result.strings,template)}return template},TEMPLATE_TYPES=["html","svg"],removeStylesFromLitTemplates=scopeName=>{TEMPLATE_TYPES.forEach(type=>{const templates=templateCaches.get(getTemplateCacheKey(type,scopeName));if(templates!==void 0){templates.forEach(template=>{const{element:{content}}=template,styles=new Set;Array.from(content.querySelectorAll("style")).forEach(s=>{styles.add(s)});removeNodesFromTemplate(template,styles)})}})},shadyRenderSet=new Set,prepareTemplateStyles=(renderedDOM,template,scopeName)=>{shadyRenderSet.add(scopeName);const styles=renderedDOM.querySelectorAll("style");if(0===styles.length){return}const condensedStyle=document.createElement("style");for(let i=0;i<styles.length;i++){const style=styles[i];style.parentNode.removeChild(style);condensedStyle.textContent+=style.textContent}removeStylesFromLitTemplates(scopeName);insertNodeIntoTemplate(template,condensedStyle,template.element.content.firstChild);window.ShadyCSS.prepareTemplateStyles(template.element,scopeName);if(window.ShadyCSS.nativeShadow){const style=template.element.content.querySelector("style");renderedDOM.insertBefore(style.cloneNode(!0),renderedDOM.firstChild)}else{template.element.content.insertBefore(condensedStyle,template.element.content.firstChild);const removes=new Set([condensedStyle]);removeNodesFromTemplate(template,removes)}},shady_render_render=(result,container,options)=>{const scopeName=options.scopeName,hasRendered=render_parts.has(container);render(result,container,Object.assign({templateFactory:shadyTemplateFactory(scopeName)},options));if(container instanceof ShadowRoot&&compatibleShadyCSSVersion&&result instanceof template_result_TemplateResult){if(!shadyRenderSet.has(scopeName)){const part=render_parts.get(container),instance=part.value;prepareTemplateStyles(container,instance.template,scopeName)}if(!hasRendered){window.ShadyCSS.styleElement(container.host)}}},fromBooleanAttribute=value=>null!==value,toBooleanAttribute=value=>value?"":null,notEqual=(value,old)=>{return old!==value&&(old===old||value===value)},defaultPropertyDeclaration={attribute:!0,type:String,reflect:!1,hasChanged:notEqual},microtaskPromise=new Promise(resolve=>resolve(!0)),STATE_HAS_UPDATED=1,STATE_UPDATE_REQUESTED=1<<2,STATE_IS_REFLECTING=1<<3;/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class UpdatingElement extends HTMLElement{constructor(){super();this._updateState=0;this._instanceProperties=void 0;this._updatePromise=microtaskPromise;this._changedProperties=new Map;this._reflectingProperties=void 0;this.initialize()}static get observedAttributes(){this._finalize();const attributes=[];for(const[p,v]of this._classProperties){const attr=this._attributeNameForProperty(p,v);if(attr!==void 0){this._attributeToPropertyMap.set(attr,p);attributes.push(attr)}}return attributes}static createProperty(name,options=defaultPropertyDeclaration){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const superProperties=Object.getPrototypeOf(this)._classProperties;if(superProperties!==void 0){superProperties.forEach((v,k)=>this._classProperties.set(k,v))}}this._classProperties.set(name,options);if(this.prototype.hasOwnProperty(name)){return}const key="symbol"===typeof name?Symbol():`__${name}`;Object.defineProperty(this.prototype,name,{get(){return this[key]},set(value){const oldValue=this[name];this[key]=value;this._requestPropertyUpdate(name,oldValue,options)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized){return}const superCtor=Object.getPrototypeOf(this);if("function"===typeof superCtor._finalize){superCtor._finalize()}this._finalized=!0;this._attributeToPropertyMap=new Map;const props=this.properties,propKeys=[...Object.getOwnPropertyNames(props),...("function"===typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(props):[])];for(const p of propKeys){this.createProperty(p,props[p])}}static _attributeNameForProperty(name,options){const attribute=options!==void 0&&options.attribute;return!1===attribute?void 0:"string"===typeof attribute?attribute:"string"===typeof name?name.toLowerCase():void 0}static _valueHasChanged(value,old,hasChanged=notEqual){return hasChanged(value,old)}static _propertyValueFromAttribute(value,options){const type=options&&options.type;if(type===void 0){return value}const fromAttribute=type===Boolean?fromBooleanAttribute:"function"===typeof type?type:type.fromAttribute;return fromAttribute?fromAttribute(value):value}static _propertyValueToAttribute(value,options){if(options===void 0||options.reflect===void 0){return}const toAttribute=options.type===Boolean?toBooleanAttribute:options.type&&options.type.toAttribute||String;return toAttribute(value)}initialize(){this.renderRoot=this.createRenderRoot();this._saveInstanceProperties()}_saveInstanceProperties(){for(const[p]of this.constructor._classProperties){if(this.hasOwnProperty(p)){const value=this[p];delete this[p];if(!this._instanceProperties){this._instanceProperties=new Map}this._instanceProperties.set(p,value)}}}_applyInstanceProperties(){for(const[p,v]of this._instanceProperties){this[p]=v}this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){if(this._updateState&STATE_HAS_UPDATED){if(window.ShadyCSS!==void 0){window.ShadyCSS.styleElement(this)}}else{this.requestUpdate()}}disconnectedCallback(){}attributeChangedCallback(name,old,value){if(old!==value){this._attributeToProperty(name,value)}}_propertyToAttribute(name,value,options=defaultPropertyDeclaration){const ctor=this.constructor,attrValue=ctor._propertyValueToAttribute(value,options);if(attrValue!==void 0){const attr=ctor._attributeNameForProperty(name,options);if(attr!==void 0){this._updateState=this._updateState|STATE_IS_REFLECTING;if(null===attrValue){this.removeAttribute(attr)}else{this.setAttribute(attr,attrValue)}this._updateState=this._updateState&~STATE_IS_REFLECTING}}}_attributeToProperty(name,value){if(!(this._updateState&STATE_IS_REFLECTING)){const ctor=this.constructor,propName=ctor._attributeToPropertyMap.get(name);if(propName!==void 0){const options=ctor._classProperties.get(propName);this[propName]=ctor._propertyValueFromAttribute(value,options)}}}requestUpdate(name,oldValue){if(name!==void 0){const options=this.constructor._classProperties.get(name)||defaultPropertyDeclaration;return this._requestPropertyUpdate(name,oldValue,options)}return this._invalidate()}_requestPropertyUpdate(name,oldValue,options){if(!this.constructor._valueHasChanged(this[name],oldValue,options.hasChanged)){return this.updateComplete}if(!this._changedProperties.has(name)){this._changedProperties.set(name,oldValue)}if(!0===options.reflect){if(this._reflectingProperties===void 0){this._reflectingProperties=new Map}this._reflectingProperties.set(name,options)}return this._invalidate()}async _invalidate(){if(!this._hasRequestedUpdate){this._updateState=this._updateState|STATE_UPDATE_REQUESTED;let resolver;const previousValidatePromise=this._updatePromise;this._updatePromise=new Promise(r=>resolver=r);await previousValidatePromise;this._validate();resolver(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&STATE_UPDATE_REQUESTED}_validate(){if(this._instanceProperties){this._applyInstanceProperties()}if(this.shouldUpdate(this._changedProperties)){const changedProperties=this._changedProperties;this.update(changedProperties);this._markUpdated();if(!(this._updateState&STATE_HAS_UPDATED)){this._updateState=this._updateState|STATE_HAS_UPDATED;this.firstUpdated(changedProperties)}this.updated(changedProperties)}else{this._markUpdated()}}_markUpdated(){this._changedProperties=new Map;this._updateState=this._updateState&~STATE_UPDATE_REQUESTED}get updateComplete(){return this._updatePromise}shouldUpdate(){return!0}update(){if(this._reflectingProperties!==void 0&&0<this._reflectingProperties.size){for(const[k,v]of this._reflectingProperties){this._propertyToAttribute(k,this[k],v)}this._reflectingProperties=void 0}}updated(){}firstUpdated(){}}UpdatingElement._attributeToPropertyMap=new Map;UpdatingElement._finalized=!0;UpdatingElement._classProperties=new Map;UpdatingElement.properties={};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const query=_query((target,selector)=>target.querySelector(selector)),queryAll=_query((target,selector)=>target.querySelectorAll(selector));function _query(queryFn){return selector=>(proto,propName)=>{Object.defineProperty(proto,propName,{get(){return queryFn(this.renderRoot,selector)},enumerable:!0,configurable:!0})}}__webpack_require__.d(__webpack_exports__,"a",function(){return lit_element_LitElement});__webpack_require__.d(__webpack_exports__,"b",function(){return lit_html_html});__webpack_require__.d(__webpack_exports__,"c",function(){return svg});/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */class lit_element_LitElement extends UpdatingElement{update(changedProperties){super.update(changedProperties);const templateResult=this.render();if(templateResult instanceof template_result_TemplateResult){this.constructor.render(templateResult,this.renderRoot,{scopeName:this.localName,eventContext:this})}}render(){}}lit_element_LitElement.render=shady_render_render}}]);
//# sourceMappingURL=aba0301e0349ad1ccbba.chunk.js.map