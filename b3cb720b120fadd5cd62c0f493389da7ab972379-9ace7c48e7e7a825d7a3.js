(self.webpackChunkblog=self.webpackChunkblog||[]).push([[206],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},8067:function(e,t,n){"use strict";n.d(t,{Z:function(){return Re}});var r=n(4942),o=n(7294),i=n(4983),a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:n(3376).Z,theme:a};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var s=/\r\n|\r|\n/,f=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=l({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=l({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var h=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,i=l({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(i.style=a.plain),void 0!==o&&(i.style=void 0!==i.style?l({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return i[n[0]];var a=r?{display:"inline-block"}:{},c=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[a].concat(c))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,i=e.token,a=l({},y(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?l({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),u(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var i=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,i=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],i=0,a=0,c=[],u=[c];a>-1;){for(;(i=r[a]++)<o[a];){var l=void 0,d=t[a],y=n[a][i];if("string"==typeof y?(d=a>0?d:["plain"],l=y):(d=p(d,y.type),y.alias&&(d=p(d,y.alias)),l=y.content),"string"==typeof l){var h=l.split(s),m=h.length;c.push({types:d,content:h[0]});for(var g=1;g<m;g++)f(c),u.push(c=[]),c.push({types:d,content:h[g]})}else a++,t.push(d),n.push(l),r.push(0),o.push(l.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return f(c),u}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),m=h,g=o.createContext({notes:[]});var v,b,T,O,w=n(5697),E=n.n(w),A=n(4839),k=n.n(A),C=n(2993),S=n.n(C),j=n(6494),P=n.n(j),N="bodyAttributes",L="htmlAttributes",x="titleAttributes",I={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},_=(Object.keys(I).map((function(e){return I[e]})),"charset"),D="cssText",M="href",R="http-equiv",F="innerHTML",q="itemprop",B="name",H="property",z="rel",U="src",Y="target",W={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},K="defaultTitle",Z="defer",V="encodeSpecialCharacters",$="onChangeClientState",J="titleTemplate",G=Object.keys(W).reduce((function(e,t){return e[W[t]]=t,e}),{}),Q=[I.NOSCRIPT,I.SCRIPT,I.STYLE],X="data-react-helmet",ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},te=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},ne=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oe=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},ie=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},ae=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ce=function(e){var t=pe(e,I.TITLE),n=pe(e,J);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=pe(e,K);return t||r||void 0},ue=function(e){return pe(e,$)||function(){}},le=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return re({},e,t)}),{})},se=function(e,t){return t.filter((function(e){return void 0!==e[I.BASE]})).map((function(e){return e[I.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},fe=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ge("Helmet: "+e+' should be of type "Array". Instead found type "'+ee(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===z&&"canonical"===e[n].toLowerCase()||u===z&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==F&&c!==D&&c!==q||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=P()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},pe=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},de=(v=Date.now(),function(e){var t=Date.now();t-v>16?(v=t,e(t)):setTimeout((function(){de(e)}),0)}),ye=function(e){return clearTimeout(e)},he="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||de:n.g.requestAnimationFrame||de,me="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ye:n.g.cancelAnimationFrame||ye,ge=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ve=null,be=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;we(I.BODY,r),we(I.HTML,o),Oe(f,p);var d={baseTag:Ee(I.BASE,n),linkTags:Ee(I.LINK,i),metaTags:Ee(I.META,a),noscriptTags:Ee(I.NOSCRIPT,c),scriptTags:Ee(I.SCRIPT,l),styleTags:Ee(I.STYLE,s)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},Te=function(e){return Array.isArray(e)?e.join(""):e},Oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=Te(e)),we(I.TITLE,t)},we=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(X),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(X):n.getAttribute(X)!==a.join(",")&&n.setAttribute(X,a.join(","))}},Ee=function(e,t){var n=document.head||document.querySelector(I.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===F)n.innerHTML=t.innerHTML;else if(r===D)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(X,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},Ae=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ke=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[W[n]||n]=e[n],t}),t)},Ce=function(e,t,n){switch(e){case I.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[X]=!0,i=ke(n,r),[o.createElement(I.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var o=Ae(n),i=Te(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+ae(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+ae(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case N:case L:return{toComponent:function(){return ke(t)},toString:function(){return Ae(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[X]=!0,r);return Object.keys(t).forEach((function(e){var n=W[e]||e;if(n===F||n===D){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===F||e===D)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+ae(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Se=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:Ce(I.BASE,t,r),bodyAttributes:Ce(N,n,r),htmlAttributes:Ce(L,o,r),link:Ce(I.LINK,i,r),meta:Ce(I.META,a,r),noscript:Ce(I.NOSCRIPT,c,r),script:Ce(I.SCRIPT,u,r),style:Ce(I.STYLE,l,r),title:Ce(I.TITLE,{title:f,titleAttributes:p},r)}},je=k()((function(e){return{baseTag:se([M,Y],e),bodyAttributes:le(N,e),defer:pe(e,Z),encode:pe(e,V),htmlAttributes:le(L,e),linkTags:fe(I.LINK,[z,M],e),metaTags:fe(I.META,[B,_,R,H,q],e),noscriptTags:fe(I.NOSCRIPT,[F],e),onChangeClientState:ue(e),scriptTags:fe(I.SCRIPT,[U,F],e),styleTags:fe(I.STYLE,[D],e),title:ce(e),titleAttributes:le(x,e)}}),(function(e){ve&&me(ve),e.defer?ve=he((function(){be(e,(function(){ve=null}))})):(be(e),ve=null)}),Se)((function(){return null})),Pe=(b=je,O=T=function(e){function t(){return te(this,t),ie(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!S()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case I.SCRIPT:case I.NOSCRIPT:return{innerHTML:t};case I.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return re({},r,((t={})[n.type]=[].concat(r[n.type]||[],[re({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case I.TITLE:return re({},o,((t={})[r.type]=a,t.titleAttributes=re({},i),t));case I.BODY:return re({},o,{bodyAttributes:re({},i)});case I.HTML:return re({},o,{htmlAttributes:re({},i)})}return re({},o,((n={})[r.type]=re({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=re({},t);return Object.keys(e).forEach((function(t){var r;n=re({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[G[n]||n]=e[n],t}),t)}(oe(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case I.LINK:case I.META:case I.NOSCRIPT:case I.SCRIPT:case I.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=oe(e,["children"]),r=re({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(b,r)},ne(t,null,[{key:"canUseDOM",set:function(e){b.canUseDOM=e}}]),t}(o.Component),T.propTypes={base:E().object,bodyAttributes:E().object,children:E().oneOfType([E().arrayOf(E().node),E().node]),defaultTitle:E().string,defer:E().bool,encodeSpecialCharacters:E().bool,htmlAttributes:E().object,link:E().arrayOf(E().object),meta:E().arrayOf(E().object),noscript:E().arrayOf(E().object),onChangeClientState:E().func,script:E().arrayOf(E().object),style:E().arrayOf(E().object),title:E().string,titleAttributes:E().object,titleTemplate:E().string},T.defaultProps={defer:!0,encodeSpecialCharacters:!0},T.peek=b.peek,T.rewind=function(){var e=b.rewind();return e||(e=Se({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},O);Pe.renderStatic=Pe.rewind;function Ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ne(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function xe(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return Ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ie(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function Ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _e(e){return"https://play.rust-lang.org/?edition=2021&code="+encodeURIComponent(e)}var De={};var Me={Note:function(e){var t=e.children,n=o.useContext(g);n.notes.push(t);var r=n.notes.length;return o.createElement("sup",{id:"fnref-"+r},o.createElement("a",{href:"#fn-"+r,className:"footnote-ref"},r))},Notes:function(){var e=o.useContext(g);return o.createElement("ol",{className:"footnotes"},e.notes.map((function(e,t){return o.createElement("li",{key:t,id:"fn-"+(t+1)},e,o.createElement("a",{href:"#fnref-"+(t+1),className:"footnote-backref"},"↩"))})))},h1:function(e){return o.createElement(o.Fragment,null,o.createElement("h1",null,e.children),o.createElement(Pe,null,o.createElement("meta",{charSet:"utf-8"}),o.createElement("title",null,e.children),o.createElement("meta",{property:"og:title",content:e.children}),o.createElement("meta",{property:"og:site_name",content:"Sahand's blog"})))},img:function(e){var t,n=(null!==(t=e.alt)&&void 0!==t?t:"").split("#@"),r=n[0],i=n[1],a=JSON.parse(null!=i?i:"{}"),c=e.src;return c.startsWith("http")||(c="/images/"+c),o.createElement("a",{className:"img-container",href:c,target:"_blank"},o.createElement("img",Object.assign({},e,{style:a,alt:r,src:c})))},pre:function(e){var t=function(e){var t=e.split(",").map((function(e){return e.trim()})),n=t[0].split("-")[1],r=null!=t.find((function(e){return"no_pg"==e})),o=t.filter((function(e){return e.startsWith("btn")})).map((function(e){return e.substring(4,e.length-1).split("|")}))[0],i=t.find((function(e){return e.startsWith("multipart:")}));return null!=i&&(i=i.split(":")[1]),{lang:n,no_playground:r,multipart:null==i?void 0:{id:i},button:o}}(e.children.props.className||""),n=function(e){for(var t,n="",r="",o=!1,i=xe(e.split("\n"));!(t=i()).done;){var a=t.value,c=a.trim();"// <hide>"!=c&&"// </hide>"!=c?(n+="\n"+a,o||(r+="\n"+a)):o=!o}return{full:n.trim(),preview:r.trim()}}(e.children.props.children.trim());null!=t.multipart&&function(e,t){null==De[e]&&(De[e]=[]),De[e].push(t)}(t.multipart.id,n.full);var r=null;return t.lang&&t.lang.includes("rust")&&!t.no_playground&&(r=o.createElement("div",{className:"playground-button"},o.createElement("a",{target:"_blank",href:_e(n.full)},"Rust Playground"))),t.button&&(r=o.createElement("div",{className:"playground-button"},o.createElement("a",{target:"_blank",href:t.button[1]},t.button[0]))),o.createElement(m,Object.assign({},c,{theme:void 0,code:n.preview,language:t.lang}),(function(e){var t=e.className,n=e.style,i=e.tokens,a=e.getLineProps,c=e.getTokenProps;return o.createElement("div",{style:{position:"relative"}},r,o.createElement("pre",{className:t,style:n},i.map((function(e,t){return o.createElement("div",a({line:e,key:t}),e.map((function(e,t){return o.createElement("span",c({token:e,key:t}))})))}))))}))},p:function(e){var t=e.children;Array.isArray(t)||(t=[t]);for(var n,r=[],i=0,a=xe(t);!(n=a()).done;){var c=n.value;"string"==typeof c?r.push(c):r.push(o.cloneElement(c,Le(Le({},c.props),{},{dir:"ltr",key:i}))),i++}return o.createElement("div",Object.assign({},e,{className:"text"}),r)}};function Re(e){var t=e.children,n=o.useState([]),r=n[0],a=n[1];return o.useLayoutEffect((function(){requestAnimationFrame((function(){a([]),De={}}))}),[]),o.createElement("div",{className:"main-container-wrapper"},o.createElement("div",{className:"main-container"},o.createElement(g.Provider,{value:{notes:r}},o.createElement(i.Zo,{components:Me},t))))}}}]);
//# sourceMappingURL=b3cb720b120fadd5cd62c0f493389da7ab972379-9ace7c48e7e7a825d7a3.js.map