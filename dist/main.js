module.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e,n){"use strict";t.exports=n(10)},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n(0),o=(n.n(r),n(11)),i=(n.n(o),this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),s=function(t){function e(){var e=t.call(this)||this;return e.observer=null,e.target=null,e.state={isVisible:!1},e}return i(e,t),e.prototype.componentWillReceiveProps=function(t){this.props.shouldShow!==t.shouldShow&&this.setState({isVisible:t.shouldShow})},e.prototype.componentDidMount=function(){!0===this.props.shouldShow?this.showImage():!1!==this.props.shouldShow&&this.target&&(this.observer=new IntersectionObserver(this.handleIntersect.bind(this),{rootMargin:"20px",threshold:0}),this.observer.observe(this.target)),console.log(this.target)},e.prototype.componentDidUpdate=function(){},e.prototype.getClassName=function(){var t=this.props,e=t.className,n=t.loadingClassName,r=n||"is-loading",o=this.state.isVisible;return!o&&e?e+" "+r:o?e||"":r},e.prototype.showImage=function(){var t=this;this.setState({isVisible:!0},function(){t.observer=null})},e.prototype.handleIntersect=function(t){var e=this,n=this.props,r=n.initialImage,o=n.image;t.forEach(function(t){if(t.intersectionRatio>0)if(r){var n=new Image;n.src=o,n.onload=function(){return e.showImage()}}else e.showImage()})},e}(r.Component)},function(t,e,n){"use strict";function r(t,e){var n=o({},t);return e.forEach(function(t){n.hasOwnProperty(t)&&delete n[t]}),n}e.a=r;var o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}},function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0),o=(n.n(r),n(1)),i=n(2),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){var t=this,e=this.props,o=e.children,s=e.initialImage,c=e.image,a=e.style,l=e.tagType,h=this.state.isVisible?u({},this.props.style,{backgroundImage:"url("+c+")"}):u({},a,{backgroundImage:"url("+s+")"}),f=l||"div",p=n.i(i.a)(this.props,["tagType","children","shouldShow","initialImage","style"]);return r.createElement(f,u({},p,{className:this.getClassName(),style:h,ref:function(e){t.target=e}}),o)},e}(o.a)},function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n(0),o=(n.n(r),n(1)),i=n(2),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.render=function(){var t=this,e=this.props,o=e.initialImage,s=e.image,c=this.state.isVisible?s:o,a=n.i(i.a)(this.props,["image","shouldShow","initialImage"]);return r.createElement("img",u({},a,{className:this.getClassName(),src:c,ref:function(e){t.target=e}}))},e}(o.a)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(4);n.d(e,"Image",function(){return r.a});var o=n(3);n.d(e,"BackgroundImage",function(){return o.a})},function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,n){"use strict";var r={};t.exports=r},function(t,e,n){"use strict";function r(t,e,n,r,i,s,u,c){if(o(e),!t){var a;if(void 0===e)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,i,s,u,c],h=0;a=new Error(e.replace(/%s/g,function(){return l[h++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}}var o=function(t){};t.exports=r},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,c=r(t),a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var l in n)i.call(n,l)&&(c[l]=n[l]);if(o){u=o(n);for(var h=0;h<u.length;h++)s.call(n,u[h])&&(c[u[h]]=n[u[h]])}}return c}},function(t,e,n){"use strict";function r(t){for(var e=arguments.length-1,n="Minified React error #"+t+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+t,r=0;r<e;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);throw e=Error(n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."),e.name="Invariant Violation",e.framesToPop=1,e}function o(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||b}function i(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||b}function s(){}function u(t,e,n){this.props=t,this.context=e,this.refs=m,this.updater=n||b}function c(t,e,n,r,o,i,s){return{$$typeof:j,type:t,key:e,ref:n,props:s,_owner:i}}function a(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(t){return e[t]})}function l(t,e,n,r){if(C.length){var o=C.pop();return o.result=t,o.keyPrefix=e,o.func=n,o.context=r,o.count=0,o}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function h(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>C.length&&C.push(t)}function f(t,e,n,o){var i=typeof t;if("undefined"!==i&&"boolean"!==i||(t=null),null===t||"string"===i||"number"===i||"object"===i&&t.$$typeof===x)return n(o,t,""===e?"."+p(t,0):e),1;var s=0;if(e=""===e?".":e+":",Array.isArray(t))for(var u=0;u<t.length;u++){i=t[u];var c=e+p(i,u);s+=f(i,c,n,o)}else if("function"==typeof(c=k&&t[k]||t["@@iterator"]))for(t=c.call(t),u=0;!(i=t.next()).done;)i=i.value,c=e+p(i,u++),s+=f(i,c,n,o);else"object"===i&&(n=""+t,r("31","[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return s}function p(t,e){return"object"==typeof t&&null!==t&&null!=t.key?a(t.key):e.toString(36)}function d(t,e){t.func.call(t.context,e,t.count++)}function y(t,e,n){var r=t.result,o=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?v(t,r,n,_.thatReturnsArgument):null!=t&&(c.isValidElement(t)&&(t=c.cloneAndReplaceKey(t,o+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(P,"$&/")+"/")+n)),r.push(t))}function v(t,e,n,r,o){var i="";null!=n&&(i=(""+n).replace(P,"$&/")+"/"),e=l(e,i,r,o),null==t||f(t,"",y,e),h(e)}var g=n(9),m=n(7);n(8);var _=n(6),b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}};o.prototype.isReactComponent={},o.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&r("85"),this.updater.enqueueSetState(this,t,e,"setState")},o.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},s.prototype=o.prototype;var I=i.prototype=new s;I.constructor=i,g(I,o.prototype),I.isPureReactComponent=!0;var O=u.prototype=new s;O.constructor=u,g(O,o.prototype),O.unstable_isAsyncReactComponent=!0,O.render=function(){return this.props.children};var w={Component:o,PureComponent:i,AsyncComponent:u},E={current:null},R=Object.prototype.hasOwnProperty,j="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,T={key:!0,ref:!0,__self:!0,__source:!0};c.createElement=function(t,e,n){var r,o={},i=null,s=null,u=null,a=null;if(null!=e)for(r in void 0!==e.ref&&(s=e.ref),void 0!==e.key&&(i=""+e.key),u=void 0===e.__self?null:e.__self,a=void 0===e.__source?null:e.__source,e)R.call(e,r)&&!T.hasOwnProperty(r)&&(o[r]=e[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var h=Array(l),f=0;f<l;f++)h[f]=arguments[f+2];o.children=h}if(t&&t.defaultProps)for(r in l=t.defaultProps)void 0===o[r]&&(o[r]=l[r]);return c(t,i,s,u,a,E.current,o)},c.createFactory=function(t){var e=c.createElement.bind(null,t);return e.type=t,e},c.cloneAndReplaceKey=function(t,e){return c(t.type,e,t.ref,t._self,t._source,t._owner,t.props)},c.cloneElement=function(t,e,n){var r=g({},t.props),o=t.key,i=t.ref,s=t._self,u=t._source,a=t._owner;if(null!=e){if(void 0!==e.ref&&(i=e.ref,a=E.current),void 0!==e.key&&(o=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(h in e)R.call(e,h)&&!T.hasOwnProperty(h)&&(r[h]=void 0===e[h]&&void 0!==l?l[h]:e[h])}var h=arguments.length-2;if(1===h)r.children=n;else if(1<h){l=Array(h);for(var f=0;f<h;f++)l[f]=arguments[f+2];r.children=l}return c(t.type,o,i,s,u,a,r)},c.isValidElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===j};var k="function"==typeof Symbol&&Symbol.iterator,x="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/\/+/g,C=[],S={forEach:function(t,e,n){if(null==t)return t;e=l(null,null,e,n),null==t||f(t,"",d,e),h(e)},map:function(t,e,n){if(null==t)return t;var r=[];return v(t,r,null,e,n),r},count:function(t){return null==t?0:f(t,"",_.thatReturnsNull,null)},toArray:function(t){var e=[];return v(t,e,null,_.thatReturnsArgument),e}};t.exports={Children:{map:S.map,forEach:S.forEach,count:S.count,toArray:S.toArray,only:function(t){return c.isValidElement(t)||r("143"),t}},Component:w.Component,PureComponent:w.PureComponent,unstable_AsyncComponent:w.AsyncComponent,createElement:c.createElement,cloneElement:c.cloneElement,isValidElement:c.isValidElement,createFactory:c.createFactory,version:"16.0.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:E,assign:g}}},function(t,e){"undefined"!=typeof window&&function(t,e){"use strict";function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||l(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?o/n:this.isIntersecting?1:0}function r(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=i(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(){return t.performance&&performance.now&&performance.now()}function i(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function u(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t,e){var n=Math.max(t.top,e.top),r=Math.min(t.bottom,e.bottom),o=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-o,u=r-n;return s>=0&&u>=0&&{top:n,bottom:r,left:o,right:i,width:s,height:u}}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):l()}function l(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t,e){for(var n=e;n;){if(n==t)return!0;n=f(n)}return!1}function f(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)return void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}));var p=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},r.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,u(t,"resize",this._checkForIntersections,!0),u(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():l();this._observationTargets.forEach(function(r){var i=r.element,s=a(i),u=this._rootContainsTarget(i),c=r.entry,l=t&&u&&this._computeTargetAndRootIntersection(i,e),h=r.entry=new n({time:o(),target:i,boundingClientRect:s,rootBounds:e,intersectionRect:l});c?t&&u?this._hasCrossedThreshold(c,h)&&this._queuedEntries.push(h):c&&c.isIntersecting&&this._queuedEntries.push(h):this._queuedEntries.push(h)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,r){if("none"!=t.getComputedStyle(n).display){for(var o=a(n),i=o,s=f(n),u=!1;!u;){var l=null,h=1==s.nodeType?t.getComputedStyle(s):{};if("none"==h.display)return;if(s==this.root||s==e?(u=!0,l=r):s!=e.body&&s!=e.documentElement&&"visible"!=h.overflow&&(l=a(s)),l&&!(i=c(l,i)))break;s=f(s)}return i}},r.prototype._getRootRect=function(){var t;if(this.root)t=a(this.root);else{var n=e.documentElement,r=e.body;t={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},r.prototype._rootIsInDom=function(){return!this.root||h(e,this.root)},r.prototype._rootContainsTarget=function(t){return h(this.root||e,t)},r.prototype._registerInstance=function(){p.indexOf(this)<0&&p.push(this)},r.prototype._unregisterInstance=function(){var t=p.indexOf(this);-1!=t&&p.splice(t,1)},t.IntersectionObserver=r,t.IntersectionObserverEntry=n}(window,document)}]);
//# sourceMappingURL=main.js.map