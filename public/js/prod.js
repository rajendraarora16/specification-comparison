!function(t){"use strict";if("function"==typeof bootstrap)bootstrap("promise",t);else if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define(t);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=t}else{if("undefined"==typeof window&&"undefined"==typeof self)throw new Error("This environment was not anticipated by Q. Please file a bug.");var e="undefined"!=typeof window?window:self,n=e.Q;e.Q=t(),e.Q.noConflict=function(){return e.Q=n,this}}}(function(){"use strict";var a=!1;try{throw new Error}catch(t){a=!!t.stack}var o,i=w(),e=function(){},p=function(){var n={task:void 0,next:null},e=n,r=!1,o=void 0,i=!1,s=[];function a(){for(var t,e;n.next;)t=(n=n.next).task,n.task=void 0,(e=n.domain)&&(n.domain=void 0,e.enter()),u(t,e);for(;s.length;)u(t=s.pop());r=!1}function u(t,e){try{t()}catch(t){if(i)throw e&&e.exit(),setTimeout(a,0),e&&e.enter(),t;setTimeout(function(){throw t},0)}e&&e.exit()}if(p=function(t){e=e.next={task:t,domain:i&&process.domain,next:null},r||(r=!0,o())},"object"==typeof process&&"[object process]"===process.toString()&&process.nextTick)i=!0,o=function(){process.nextTick(a)};else if("function"==typeof setImmediate)o="undefined"!=typeof window?setImmediate.bind(window,a):function(){setImmediate(a)};else if("undefined"!=typeof MessageChannel){var t=new MessageChannel;t.port1.onmessage=function(){o=c,(t.port1.onmessage=a)()};var c=function(){t.port2.postMessage(0)};o=function(){setTimeout(a,0),c()}}else o=function(){setTimeout(a,0)};return p.runAfter=function(t){s.push(t),r||(r=!0,o())},p}(),n=Function.call;function t(t){return function(){return n.apply(t,arguments)}}var u,c=t(Array.prototype.slice),f=t(Array.prototype.reduce||function(t,e){var n=0,r=this.length;if(1===arguments.length)for(;;){if(n in this){e=this[n++];break}if(++n>=r)throw new TypeError}for(;n<r;n++)n in this&&(e=t(e,this[n],n));return e}),s=t(Array.prototype.indexOf||function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),r=t(Array.prototype.map||function(r,o){var i=this,s=[];return f(i,function(t,e,n){s.push(r.call(o,e,n,i))},void 0),s}),l=Object.create||function(t){function e(){}return e.prototype=t,new e},d=t(Object.prototype.hasOwnProperty),h=Object.keys||function(t){var e=[];for(var n in t)d(t,n)&&e.push(n);return e},v=t(Object.prototype.toString);u="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var y="From previous event:";function m(t,e){if(a&&e.stack&&"object"==typeof t&&null!==t&&t.stack&&-1===t.stack.indexOf(y)){for(var n=[],r=e;r;r=r.source)r.stack&&n.unshift(r.stack);n.unshift(t.stack);var o=n.join("\n"+y+"\n");t.stack=function(t){for(var e=t.split("\n"),n=[],r=0;r<e.length;++r){var o=e[r];!b(o)&&(-1===(i=o).indexOf("(module.js:")&&-1===i.indexOf("(node.js:"))&&o&&n.push(o)}var i;return n.join("\n")}(o)}}function g(t){var e=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(e)return[e[1],Number(e[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(n)return[n[1],Number(n[2])];var r=/.*@(.+):(\d+)$/.exec(t);return r?[r[1],Number(r[2])]:void 0}function b(t){var e=g(t);if(!e)return!1;var n=e[0],r=e[1];return n===o&&i<=r&&r<=z}function w(){if(a)try{throw new Error}catch(t){var e=t.stack.split("\n"),n=g(0<e[0].indexOf("@")?e[1]:e[2]);if(!n)return;return o=n[0],n[1]}}function _(t){return t instanceof C?t:I(t)?(e=t,n=j(),_.nextTick(function(){try{e.then(n.resolve,n.reject,n.notify)}catch(t){n.reject(t)}}),n.promise):D(t);var e,n}function j(){var o,i=[],s=[],t=l(j.prototype),e=l(C.prototype);if(e.promiseDispatch=function(t,e,n){var r=c(arguments);i?(i.push(r),"when"===e&&n[1]&&s.push(n[1])):_.nextTick(function(){o.promiseDispatch.apply(o,r)})},e.valueOf=function(){if(i)return e;var t=E(o);return x(t)&&(o=t),t},e.inspect=function(){return o?o.inspect():{state:"pending"}},_.longStackSupport&&a)try{throw new Error}catch(t){e.stack=t.stack.substring(t.stack.indexOf("\n")+1)}function n(n){o=n,e.source=n,f(i,function(t,e){_.nextTick(function(){n.promiseDispatch.apply(n,e)})},void 0),s=i=void 0}return t.promise=e,t.resolve=function(t){o||n(_(t))},t.fulfill=function(t){o||n(D(t))},t.reject=function(t){o||n(L(t))},t.notify=function(n){o||f(s,function(t,e){_.nextTick(function(){e(n)})},void 0)},t}function k(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var e=j();try{t(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}return e.promise}function $(o){return k(function(t,e){for(var n=0,r=o.length;n<r;n++)_(o[n]).then(t,e)})}function C(o,i,e){void 0===i&&(i=function(t){return L(new Error("Promise does not support operation: "+t))}),void 0===e&&(e=function(){return{state:"unknown"}});var s=l(C.prototype);if(s.promiseDispatch=function(t,e,n){var r;try{r=o[e]?o[e].apply(s,n):i.call(s,e,n)}catch(t){r=L(t)}t&&t(r)},s.inspect=e){var t=e();"rejected"===t.state&&(s.exception=t.reason),s.valueOf=function(){var t=e();return"pending"===t.state||"rejected"===t.state?s:t.value}}return s}function T(t,e,n,r){return _(t).then(e,n,r)}function E(t){if(x(t)){var e=t.inspect();if("fulfilled"===e.state)return e.value}return t}function x(t){return t instanceof C}function I(t){return(e=t)===Object(e)&&"function"==typeof t.then;var e}(_.resolve=_).nextTick=p,_.longStackSupport=!1,"object"==typeof process&&process&&process.env&&process.env.Q_DEBUG&&(_.longStackSupport=!0),(_.defer=j).prototype.makeNodeResolver=function(){var n=this;return function(t,e){t?n.reject(t):2<arguments.length?n.resolve(c(arguments,1)):n.resolve(e)}},_.Promise=k,(_.promise=k).race=$,k.all=Q,k.reject=L,(k.resolve=_).passByCopy=function(t){return t},C.prototype.passByCopy=function(){return this},_.join=function(t,e){return _(t).join(e)},C.prototype.join=function(t){return _([this,t]).spread(function(t,e){if(t===e)return t;throw new Error("Can't join: not the same: "+t+" "+e)})},_.race=$,C.prototype.race=function(){return this.then(_.race)},(_.makePromise=C).prototype.toString=function(){return"[object Promise]"},C.prototype.then=function(e,n,o){var r=this,i=j(),s=!1;return _.nextTick(function(){r.promiseDispatch(function(t){s||(s=!0,i.resolve(function(t){try{return"function"==typeof e?e(t):t}catch(t){return L(t)}}(t)))},"when",[function(t){s||(s=!0,i.resolve(function(t){if("function"==typeof n){m(t,r);try{return n(t)}catch(t){return L(t)}}return L(t)}(t)))}])}),r.promiseDispatch(void 0,"when",[void 0,function(t){var e,n,r=!1;try{n=t,e="function"==typeof o?o(n):n}catch(t){if(r=!0,!_.onerror)throw t;_.onerror(t)}r||i.notify(e)}]),i.promise},_.tap=function(t,e){return _(t).tap(e)},C.prototype.tap=function(e){return e=_(e),this.then(function(t){return e.fcall(t).thenResolve(t)})},_.when=T,C.prototype.thenResolve=function(t){return this.then(function(){return t})},_.thenResolve=function(t,e){return _(t).thenResolve(e)},C.prototype.thenReject=function(t){return this.then(function(){throw t})},_.thenReject=function(t,e){return _(t).thenReject(e)},_.nearer=E,_.isPromise=x,_.isPromiseAlike=I,_.isPending=function(t){return x(t)&&"pending"===t.inspect().state},C.prototype.isPending=function(){return"pending"===this.inspect().state},_.isFulfilled=function(t){return!x(t)||"fulfilled"===t.inspect().state},C.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},_.isRejected=function(t){return x(t)&&"rejected"===t.inspect().state},C.prototype.isRejected=function(){return"rejected"===this.inspect().state};var R,N,S,F=[],O=[],B=[],A=!0;function P(){F.length=0,O.length=0,A||(A=!0)}function L(e){var t,n,r=C({when:function(t){return t&&function(e){if(A){var n=s(O,e);-1!==n&&("object"==typeof process&&"function"==typeof process.emit&&_.nextTick.runAfter(function(){var t=s(B,e);-1!==t&&(process.emit("rejectionHandled",F[n],e),B.splice(t,1))}),O.splice(n,1),F.splice(n,1))}}(this),t?t(e):this}},function(){return this},function(){return{state:"rejected",reason:e}});return t=r,n=e,A&&("object"==typeof process&&"function"==typeof process.emit&&_.nextTick.runAfter(function(){-1!==s(O,t)&&(process.emit("unhandledRejection",n,t),B.push(t))}),O.push(t),n&&void 0!==n.stack?F.push(n.stack):F.push("(no stack) "+n)),r}function D(n){return C({when:function(){return n},get:function(t){return n[t]},set:function(t,e){n[t]=e},delete:function(t){delete n[t]},post:function(t,e){return null==t?n.apply(void 0,e):n[t].apply(n,e)},apply:function(t,e){return n.apply(t,e)},keys:function(){return h(n)}},void 0,function(){return{state:"fulfilled",value:n}})}function M(t,e,n){return _(t).spread(e,n)}function U(t,e,n){return _(t).dispatch(e,n)}function Q(t){return T(t,function(o){var i=0,s=j();return f(o,function(t,e,n){var r;x(e)&&"fulfilled"===(r=e.inspect()).state?o[n]=r.value:(++i,T(e,function(t){o[n]=t,0==--i&&s.resolve(o)},s.reject,function(t){s.notify({index:n,value:t})}))},void 0),0===i&&s.resolve(o),s.promise})}function q(o){if(0===o.length)return _.resolve();var i=_.defer(),s=0;return f(o,function(t,e,n){var r=o[n];s++,T(r,function(t){i.resolve(t)},function(){0==--s&&i.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))},function(t){i.notify({index:n,value:t})})},void 0),i.promise}function H(t){return T(t,function(t){return t=r(t,_),T(Q(r(t,function(t){return T(t,e,e)})),function(){return t})})}_.resetUnhandledRejections=P,_.getUnhandledReasons=function(){return F.slice()},_.stopUnhandledRejectionTracking=function(){P(),A=!1},P(),_.reject=L,_.fulfill=D,_.master=function(n){return C({isDef:function(){}},function(t,e){return U(n,t,e)},function(){return _(n).inspect()})},_.spread=M,C.prototype.spread=function(e,t){return this.all().then(function(t){return e.apply(void 0,t)},t)},_.async=function(e){return function(){function t(t,e){var n,r;if("undefined"==typeof StopIteration){try{n=o[t](e)}catch(t){return L(t)}return n.done?_(n.value):T(n.value,i,s)}try{n=o[t](e)}catch(t){return"[object StopIteration]"===v(r=t)||r instanceof u?_(t.value):L(t)}return T(n,i,s)}var o=e.apply(this,arguments),i=t.bind(t,"next"),s=t.bind(t,"throw");return i()}},_.spawn=function(t){_.done(_.async(t)())},_.return=function(t){throw new u(t)},_.promised=function(n){return function(){return M([this,Q(arguments)],function(t,e){return n.apply(t,e)})}},_.dispatch=U,C.prototype.dispatch=function(t,e){var n=this,r=j();return _.nextTick(function(){n.promiseDispatch(r.resolve,t,e)}),r.promise},_.get=function(t,e){return _(t).dispatch("get",[e])},C.prototype.get=function(t){return this.dispatch("get",[t])},_.set=function(t,e,n){return _(t).dispatch("set",[e,n])},C.prototype.set=function(t,e){return this.dispatch("set",[t,e])},_.del=_.delete=function(t,e){return _(t).dispatch("delete",[e])},C.prototype.del=C.prototype.delete=function(t){return this.dispatch("delete",[t])},_.mapply=_.post=function(t,e,n){return _(t).dispatch("post",[e,n])},C.prototype.mapply=C.prototype.post=function(t,e){return this.dispatch("post",[t,e])},_.send=_.mcall=_.invoke=function(t,e){return _(t).dispatch("post",[e,c(arguments,2)])},C.prototype.send=C.prototype.mcall=C.prototype.invoke=function(t){return this.dispatch("post",[t,c(arguments,1)])},_.fapply=function(t,e){return _(t).dispatch("apply",[void 0,e])},C.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},_.try=_.fcall=function(t){return _(t).dispatch("apply",[void 0,c(arguments,1)])},C.prototype.fcall=function(){return this.dispatch("apply",[void 0,c(arguments)])},_.fbind=function(t){var e=_(t),n=c(arguments,1);return function(){return e.dispatch("apply",[this,n.concat(c(arguments))])}},C.prototype.fbind=function(){var t=this,e=c(arguments);return function(){return t.dispatch("apply",[this,e.concat(c(arguments))])}},_.keys=function(t){return _(t).dispatch("keys",[])},C.prototype.keys=function(){return this.dispatch("keys",[])},_.all=Q,C.prototype.all=function(){return Q(this)},_.any=q,C.prototype.any=function(){return q(this)},_.allResolved=(R=H,N="allResolved",S="allSettled",function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(N+" is deprecated, use "+S+" instead.",new Error("").stack),R.apply(R,arguments)}),C.prototype.allResolved=function(){return H(this)},_.allSettled=function(t){return _(t).allSettled()},C.prototype.allSettled=function(){return this.then(function(t){return Q(r(t,function(t){function e(){return t.inspect()}return(t=_(t)).then(e,e)}))})},_.fail=_.catch=function(t,e){return _(t).then(void 0,e)},C.prototype.fail=C.prototype.catch=function(t){return this.then(void 0,t)},_.progress=function(t,e){return _(t).then(void 0,void 0,e)},C.prototype.progress=function(t){return this.then(void 0,void 0,t)},_.fin=_.finally=function(t,e){return _(t).finally(e)},C.prototype.fin=C.prototype.finally=function(e){if(!e||"function"!=typeof e.apply)throw new Error("Can't apply finally callback");return e=_(e),this.then(function(t){return e.fcall().then(function(){return t})},function(t){return e.fcall().then(function(){throw t})})},_.done=function(t,e,n,r){return _(t).done(e,n,r)},C.prototype.done=function(t,e,n){var r=function(t){_.nextTick(function(){if(m(t,o),!_.onerror)throw t;_.onerror(t)})},o=t||e||n?this.then(t,e,n):this;"object"==typeof process&&process&&process.domain&&(r=process.domain.bind(r)),o.then(void 0,r)},_.timeout=function(t,e,n){return _(t).timeout(e,n)},C.prototype.timeout=function(t,e){var n=j(),r=setTimeout(function(){e&&"string"!=typeof e||((e=new Error(e||"Timed out after "+t+" ms")).code="ETIMEDOUT"),n.reject(e)},t);return this.then(function(t){clearTimeout(r),n.resolve(t)},function(t){clearTimeout(r),n.reject(t)},n.notify),n.promise},_.delay=function(t,e){return void 0===e&&(e=t,t=void 0),_(t).delay(e)},C.prototype.delay=function(n){return this.then(function(t){var e=j();return setTimeout(function(){e.resolve(t)},n),e.promise})},_.nfapply=function(t,e){return _(t).nfapply(e)},C.prototype.nfapply=function(t){var e=j(),n=c(t);return n.push(e.makeNodeResolver()),this.fapply(n).fail(e.reject),e.promise},_.nfcall=function(t){var e=c(arguments,1);return _(t).nfapply(e)},C.prototype.nfcall=function(){var t=c(arguments),e=j();return t.push(e.makeNodeResolver()),this.fapply(t).fail(e.reject),e.promise},_.nfbind=_.denodeify=function(n){var r=c(arguments,1);return function(){var t=r.concat(c(arguments)),e=j();return t.push(e.makeNodeResolver()),_(n).fapply(t).fail(e.reject),e.promise}},C.prototype.nfbind=C.prototype.denodeify=function(){var t=c(arguments);return t.unshift(this),_.denodeify.apply(void 0,t)},_.nbind=function(n,r){var o=c(arguments,2);return function(){var t=o.concat(c(arguments)),e=j();return t.push(e.makeNodeResolver()),_(function(){return n.apply(r,arguments)}).fapply(t).fail(e.reject),e.promise}},C.prototype.nbind=function(){var t=c(arguments,0);return t.unshift(this),_.nbind.apply(void 0,t)},_.nmapply=_.npost=function(t,e,n){return _(t).npost(e,n)},C.prototype.nmapply=C.prototype.npost=function(t,e){var n=c(e||[]),r=j();return n.push(r.makeNodeResolver()),this.dispatch("post",[t,n]).fail(r.reject),r.promise},_.nsend=_.nmcall=_.ninvoke=function(t,e){var n=c(arguments,2),r=j();return n.push(r.makeNodeResolver()),_(t).dispatch("post",[e,n]).fail(r.reject),r.promise},C.prototype.nsend=C.prototype.nmcall=C.prototype.ninvoke=function(t){var e=c(arguments,1),n=j();return e.push(n.makeNodeResolver()),this.dispatch("post",[t,e]).fail(n.reject),n.promise},_.nodeify=function(t,e){return _(t).nodeify(e)},C.prototype.nodeify=function(e){if(!e)return this;this.then(function(t){_.nextTick(function(){e(null,t)})},function(t){_.nextTick(function(){e(t)})})},_.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var z=w();return _}),function(t,e){"object"==typeof exports?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t)}(this,function(t){function e(t){this._targetElement=void 0!==t.length?t:[t],void 0===window._progressjsId&&(window._progressjsId=1),void 0===window._progressjsIntervals&&(window._progressjsIntervals={}),this._options={theme:"blue",overlayMode:!1,considerTransition:!0}}function p(r,a){var u=this;100<=a&&(a=100),r.hasAttribute("data-progressjs")&&setTimeout(function(){void 0!==u._onProgressCallback&&u._onProgressCallback.call(u,r,a),(t=c(r)).style.width=parseInt(a)+"%";var t=t.querySelector(".progressjs-percent"),e=parseInt(t.innerHTML.replace("%","")),n=parseInt(a),o=function(t,e,n){var r=Math.abs(e-n);r<3?s=30:r<20?s=20:intervanIn=1,0!=e-n&&(t.innerHTML=(i?++e:--e)+"%",setTimeout(function(){o(t,e,n)},s))},i=!0;n<e&&(i=!1);var s=10;o(t,e,n)},50)}function c(t){return t=parseInt(t.getAttribute("data-progressjs")),document.querySelector('.progressjs-container > .progressjs-progress[data-progressjs="'+t+'"] > .progressjs-inner')}function o(t){for(var e=0,n=this._targetElement.length;e<n;e++){var r=this._targetElement[e];if(r.hasAttribute("data-progressjs")){var o=c(r);(o=parseInt(o.style.width.replace("%","")))&&p.call(this,r,o+(t||1))}}}var n=function(t){if("object"==typeof t)return new e(t);if("string"==typeof t){if(t=document.querySelectorAll(t))return new e(t);throw Error("There is no element with given selector.")}return new e(document.body)};return n.version="0.1.0",n.fn=e.prototype={clone:function(){return new e(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){var e,n=this._options,r={};for(e in n)r[e]=n[e];for(e in t)r[e]=t[e];return this._options=r,this},start:function(){(void 0!==this._onBeforeStartCallback&&this._onBeforeStartCallback.call(this),document.querySelector(".progressjs-container"))||((t=document.createElement("div")).className="progressjs-container",document.body.appendChild(t));for(var t=0,e=this._targetElement.length;t<e;t++){var n=this._targetElement[t];if(!n.hasAttribute("data-progressjs")){var r,o,i,s=n;"body"===s.tagName.toLowerCase()?(r=s.clientWidth,o=s.clientHeight):(r=s.offsetWidth,o=s.offsetHeight);for(var a=i=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)i+=s.offsetLeft,a+=s.offsetTop,s=s.offsetParent;s=a,n.setAttribute("data-progressjs",window._progressjsId),(a=document.createElement("div")).className="progressjs-progress progressjs-theme-"+this._options.theme,a.style.position="body"===n.tagName.toLowerCase()?"fixed":"absolute",a.setAttribute("data-progressjs",window._progressjsId);var u=document.createElement("div");u.className="progressjs-inner";var c=document.createElement("div");c.className="progressjs-percent",c.innerHTML="1%",u.appendChild(c),this._options.overlayMode&&"body"===n.tagName.toLowerCase()?(a.style.left=0,a.style.right=0,a.style.top=0,a.style.bottom=0):(a.style.left=i+"px",a.style.top=s+"px",a.style.width=r+"px",this._options.overlayMode&&(a.style.height=o+"px")),a.appendChild(u),document.querySelector(".progressjs-container").appendChild(a),p(n,1),++window._progressjsId}}return this},set:function(t){for(var e=0,n=this._targetElement.length;e<n;e++)p.call(this,this._targetElement[e],t);return this},increase:function(t){return o.call(this,t),this},autoIncrease:function(t,e){var n=this,r=parseInt(this._targetElement[0].getAttribute("data-progressjs"));return void 0!==window._progressjsIntervals[r]&&clearInterval(window._progressjsIntervals[r]),window._progressjsIntervals[r]=setInterval(function(){o.call(n,t)},e),this},end:function(){t:{void 0!==this._onBeforeEndCallback&&(!0===this._options.considerTransition?c(this._targetElement[0]).addEventListener(function(){var t,e=document.createElement("fakeelement"),n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in n)if(void 0!==e.style[t])return n[t]}(),this._onBeforeEndCallback,!1):this._onBeforeEndCallback.call(this));for(var t=parseInt(this._targetElement[0].getAttribute("data-progressjs")),e=0,n=this._targetElement.length;e<n;e++){var r=this._targetElement[e],o=c(r);if(!o)break t;var i=1;parseInt(o.style.width.replace("%",""))<100&&(p.call(this,r,100),i=500),function(t,e){setTimeout(function(){t.parentNode.className+=" progressjs-end",setTimeout(function(){t.parentNode.parentNode.removeChild(t.parentNode),e.removeAttribute("data-progressjs")},1e3)},i)}(o,r)}if(window._progressjsIntervals[t])try{clearInterval(window._progressjsIntervals[t]),window._progressjsIntervals[t]=null,delete window._progressjsIntervals[t]}catch(t){}}return this},onbeforeend:function(t){if("function"!=typeof t)throw Error("Provided callback for onbeforeend was not a function");return this._onBeforeEndCallback=t,this},onbeforestart:function(t){if("function"!=typeof t)throw Error("Provided callback for onbeforestart was not a function");return this._onBeforeStartCallback=t,this},onprogress:function(t){if("function"!=typeof t)throw Error("Provided callback for onprogress was not a function");return this._onProgressCallback=t,this}},t.progressJs=n});var ProgressBar=function(){function t(){this.pb=new progressJs,this._interval=null}return t.prototype.start=function(){var t=this;this.pb.start(),this._interval=setInterval(function(){t.pb.increase(Math.trunc(Math.random()))},100)},t.prototype.stop=function(){this.pb.end(),clearInterval(this._interval)},t}(),SpecLoader=function(){function t(){this.options={url:"/load?url="},this.progressBar=new ProgressBar}return t.prototype.get=function(t,e,n){var r,o=this;this.progressBar.start(),r=$.map(t,function(t){return o._makeRequest(t)}),Q.all(r).then(void 0,function(t){o.progressBar.stop(),n(t)}).done(function(t){t&&(o.progressBar.stop(),e(t))})},t.prototype._makeRequest=function(t){var e=this.options.url+t;return Q.promise(function(r,o){$.get(e,function(t,e,n){"error"===e&&o("Error occured: "+n.status+" "+n.statusText),t?r(t):o("No products found!")})})},t}(),Notify=function(){function t(t){this._$container=$(t)}return t.prototype.show=function(t){var e=this;this._$container.html(t).fadeIn(),setTimeout(function(){e.hide()},4e3)},t.prototype.hide=function(){this._$container.fadeOut()},t}(),SpecForm=function(){function e(t,e,n){this.$formContainer=$(t),this.$tableContainer=$(e),this._options=$.extend(!0,{minFieldsCount:2,maxFieldsCount:5},n),this._fieldsCount=0,this._init()._initElements()._initEvents(),this.specLoader=new SpecLoader,this.notify=new Notify(".alert-danger")}return e.BUTTON_TEXT={REGULAR:"Compare Specification",IN_PROGRESS:"Fetching ..."},e.prototype._init=function(){var t;for(t=0;t<this._options.minFieldsCount;t++)this._addField();return this},e.prototype._initElements=function(){return this.$urlFields=this.$formContainer.find("._url-input"),this.$btn=this.$formContainer.find("._btn-compare"),this.$btnDemo=this.$formContainer.find("._btn-demo"),this.$btnInc=this.$formContainer.find(".j-inc"),this.$btnDec=this.$formContainer.find(".j-dec"),this.$loader=$(".loader-fetch"),this},e.prototype._initEvents=function(){var t=this;return this.$btnDemo.on("click",function(){$("._url-input").val("https://www.lazada.sg/products/samsung-galaxy-s8-64gb-midnight-black-i106217842-s108237124.html")}),this.$btn.on("click",function(){t._isButtonEnabled()&&t._isValid()&&t._process()}),this.$formContainer.on("click",".j-inc",function(){$(this).attr("disabled")||(t._fieldsCount<t._options.maxFieldsCount&&t._addField(),t._checkIfControlEnabled())}).on("click",".j-dec",function(){$(this).attr("disabled")||(t._fieldsCount>t._options.minFieldsCount&&t._removeField(),t._checkIfControlEnabled())}).on("click",".j-predefine",function(){t._predefineFields()}),this},e.prototype._checkIfControlEnabled=function(){return this._fieldsCount===this._options.minFieldsCount?this.$btnDec.attr("disabled","disabled"):this.$btnDec.removeAttr("disabled"),this._fieldsCount===this._options.maxFieldsCount?this.$btnInc.attr("disabled","disabled"):this.$btnInc.removeAttr("disabled"),this},e.prototype._isValid=function(){var n=!0,r="";return this.$urlFields.each(function(){var t=$(this),e=$.trim(t.val().toLowerCase());t.removeClass("s-invalid"),0===e.length&&(n=!1,r="Product url field is empty."),-1===e.indexOf("https://www.lazada.sg")&&(n=!1,r="Only https://www.lazada.sg are allowed"),n?t.removeClass("s-invalid"):t.addClass("s-invalid")}),n||this.notify.show(r),n},e.prototype._process=function(){var e=this,t=$.map(this.$urlFields,function(t){return $.trim($(t).val())});this._disableButton(),this._removeTable(),this.specLoader.get(t,function(t){e._renderTable(t),e._enableButton()},function(t){e.notify.show(t),e._enableButton()})},e.prototype._renderField=function(){return $('<div class="_form_item"><input class="_url-lbl _url-input" placeholder="Enter Lazada sg url '+this._fieldsCount+' here" type="text"/></div>')},e.prototype._addField=function(){var t,e=this.$formContainer.find("._form_item:last");return this._fieldsCount++,t=this._renderField(),0<e.length?t.insertAfter(e):this.$formContainer.prepend(t),this.$urlFields=this.$formContainer.find("._url-input"),this},e.prototype._removeField=function(){this.$formContainer.find("._form_item:last").remove(),this._fieldsCount--,this.$urlFields=this.$formContainer.find("._url-input")},e.prototype._predefineFields=function(){this.$urlFields.each(function(t){e.URLS[t]&&$(this).val(e.URLS[t])})},e.prototype._renderTable=function(t){var e,n,r,o,i,s,a,u=[],c={};for(e=0;e<t.length;e++)$.each(t[e],function(t){c.hasOwnProperty(t)||(c[t]="",u.push(t))});for(r=$("<table>"),o=$("<thead>"),i=$("<tr>"),s=$("<th>"),i.append(s),e=0;e<t.length;e++)(s=$("<th>")).html("Item "+(e+1)),i.append(s);for(o.append(i),r.append(o),e=0;e<u.length;e++){for(a=u[e],i=$('<tr class="b-table_row">'),s=$("<th>").html(a),i.append(s),n=0;n<t.length;n++)s=$("<td>").html(t[n].hasOwnProperty(a)?t[n][a]:"&mdash;"),i.append(s);r.append(i)}this.$tableContainer.html(r)},e.prototype._removeTable=function(){this.$tableContainer.empty()},e.prototype._disableButton=function(){this.$btn.text(e.BUTTON_TEXT.IN_PROGRESS),this.$loader.css("display","block"),this.$btn.attr("disabled","disabled")},e.prototype._enableButton=function(){this.$btn.text(e.BUTTON_TEXT.REGULAR),this.$loader.css("display","none"),this.$btn.removeAttr("disabled")},e.prototype._isButtonEnabled=function(){return!this.$btn.attr("disabled")},e}(),App=void $(function(){new SpecForm(".form-specification",".j-spec-table")});