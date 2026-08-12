(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function b_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g0={exports:{}},dc={},v0={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),R_=Symbol.for("react.portal"),P_=Symbol.for("react.fragment"),L_=Symbol.for("react.strict_mode"),N_=Symbol.for("react.profiler"),I_=Symbol.for("react.provider"),D_=Symbol.for("react.context"),U_=Symbol.for("react.forward_ref"),F_=Symbol.for("react.suspense"),O_=Symbol.for("react.memo"),k_=Symbol.for("react.lazy"),Wf=Symbol.iterator;function z_(t){return t===null||typeof t!="object"?null:(t=Wf&&t[Wf]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,y0={};function ua(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||_0}ua.prototype.isReactComponent={};ua.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ua.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function S0(){}S0.prototype=ua.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=y0,this.updater=n||_0}var Ah=Th.prototype=new S0;Ah.constructor=Th;x0(Ah,ua.prototype);Ah.isPureReactComponent=!0;var Xf=Array.isArray,M0=Object.prototype.hasOwnProperty,Ch={current:null},E0={key:!0,ref:!0,__self:!0,__source:!0};function w0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,i)&&!E0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:mo,type:t,key:s,ref:a,props:r,_owner:Ch.current}}function B_(t,e){return{$$typeof:mo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===mo}function H_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yf=/\/+/g;function Nc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?H_(""+t.key):e.toString(36)}function gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case mo:case R_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Nc(a,0):i,Xf(r)?(n="",t!=null&&(n=t.replace(Yf,"$&/")+"/"),gl(r,e,n,"",function(c){return c})):r!=null&&(bh(r)&&(r=B_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Yf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Xf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Nc(s,o);a+=gl(s,e,n,l,r)}else if(l=z_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Nc(s,o++),a+=gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ao(t,e,n){if(t==null)return t;var i=[],r=0;return gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function V_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _n={current:null},vl={transition:null},G_={ReactCurrentDispatcher:_n,ReactCurrentBatchConfig:vl,ReactCurrentOwner:Ch};function T0(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=ua;it.Fragment=P_;it.Profiler=N_;it.PureComponent=Th;it.StrictMode=L_;it.Suspense=F_;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G_;it.act=T0;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=x0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Ch.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)M0.call(e,l)&&!E0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:mo,type:t.type,key:r,ref:s,props:i,_owner:a}};it.createContext=function(t){return t={$$typeof:D_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:I_,_context:t},t.Consumer=t};it.createElement=w0;it.createFactory=function(t){var e=w0.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:U_,render:t}};it.isValidElement=bh;it.lazy=function(t){return{$$typeof:k_,_payload:{_status:-1,_result:t},_init:V_}};it.memo=function(t,e){return{$$typeof:O_,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};it.unstable_act=T0;it.useCallback=function(t,e){return _n.current.useCallback(t,e)};it.useContext=function(t){return _n.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return _n.current.useDeferredValue(t)};it.useEffect=function(t,e){return _n.current.useEffect(t,e)};it.useId=function(){return _n.current.useId()};it.useImperativeHandle=function(t,e,n){return _n.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return _n.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return _n.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return _n.current.useMemo(t,e)};it.useReducer=function(t,e,n){return _n.current.useReducer(t,e,n)};it.useRef=function(t){return _n.current.useRef(t)};it.useState=function(t){return _n.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return _n.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return _n.current.useTransition()};it.version="18.3.1";v0.exports=it;var Le=v0.exports;const j_=b_(Le);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_=Le,X_=Symbol.for("react.element"),Y_=Symbol.for("react.fragment"),$_=Object.prototype.hasOwnProperty,q_=W_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K_={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$_.call(e,i)&&!K_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:X_,type:t,key:s,ref:a,props:r,_owner:q_.current}}dc.Fragment=Y_;dc.jsx=A0;dc.jsxs=A0;g0.exports=dc;var _=g0.exports,Vu={},C0={exports:{}},zn={},b0={exports:{}},R0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var P=N.length;N.push(q);e:for(;0<P;){var b=P-1>>>1,Q=N[b];if(0<r(Q,q))N[b]=q,N[P]=Q,P=b;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],P=N.pop();if(P!==q){N[0]=P;e:for(var b=0,Q=N.length,ce=Q>>>1;b<ce;){var V=2*(b+1)-1,H=N[V],K=V+1,$=N[K];if(0>r(H,P))K<Q&&0>r($,H)?(N[b]=$,N[K]=P,b=K):(N[b]=H,N[V]=P,b=V);else if(K<Q&&0>r($,P))N[b]=$,N[K]=P,b=K;else break e}}return q}function r(N,q){var P=N.sortIndex-q.sortIndex;return P!==0?P:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,f=null,h=3,p=!1,v=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=N)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(N){if(y=!1,x(N),!v)if(n(l)!==null)v=!0,W(I);else{var q=n(c);q!==null&&ie(S,q.startTime-N)}}function I(N,q){v=!1,y&&(y=!1,u(L),L=-1),p=!0;var P=h;try{for(x(q),f=n(l);f!==null&&(!(f.expirationTime>q)||N&&!D());){var b=f.callback;if(typeof b=="function"){f.callback=null,h=f.priorityLevel;var Q=b(f.expirationTime<=q);q=t.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&i(l),x(q)}else i(l);f=n(l)}if(f!==null)var ce=!0;else{var V=n(c);V!==null&&ie(S,V.startTime-q),ce=!1}return ce}finally{f=null,h=P,p=!1}}var A=!1,C=null,L=-1,w=5,M=-1;function D(){return!(t.unstable_now()-M<w)}function F(){if(C!==null){var N=t.unstable_now();M=N;var q=!0;try{q=C(!0,N)}finally{q?k():(A=!1,C=null)}}else A=!1}var k;if(typeof g=="function")k=function(){g(F)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,J=Y.port2;Y.port1.onmessage=F,k=function(){J.postMessage(null)}}else k=function(){m(F,0)};function W(N){C=N,A||(A=!0,k())}function ie(N,q){L=m(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,W(I))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var P=h;h=q;try{return N()}finally{h=P}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var P=h;h=N;try{return q()}finally{h=P}},t.unstable_scheduleCallback=function(N,q,P){var b=t.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?b+P:b):P=b,N){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=P+Q,N={id:d++,callback:q,priorityLevel:N,startTime:P,expirationTime:Q,sortIndex:-1},P>b?(N.sortIndex=P,e(c,N),n(l)===null&&N===n(c)&&(y?(u(L),L=-1):y=!0,ie(S,P-b))):(N.sortIndex=Q,e(l,N),v||p||(v=!0,W(I))),N},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(N){var q=h;return function(){var P=h;h=q;try{return N.apply(this,arguments)}finally{h=P}}}})(R0);b0.exports=R0;var Z_=b0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_=Le,kn=Z_;function me(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var P0=new Set,$a={};function ls(t,e){Ks(t,e),Ks(t+"Capture",e)}function Ks(t,e){for($a[t]=e,t=0;t<e.length;t++)P0.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gu=Object.prototype.hasOwnProperty,J_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$f={},qf={};function ex(t){return Gu.call(qf,t)?!0:Gu.call($f,t)?!1:J_.test(t)?qf[t]=!0:($f[t]=!0,!1)}function tx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nx(t,e,n,i){if(e===null||typeof e>"u"||tx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Kt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Kt[t]=new xn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Kt[e]=new xn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Kt[t]=new xn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Kt[t]=new xn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Kt[t]=new xn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Kt[t]=new xn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Kt[t]=new xn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Kt[t]=new xn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Kt[t]=new xn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rh,Ph);Kt[e]=new xn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rh,Ph);Kt[e]=new xn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rh,Ph);Kt[e]=new xn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Kt[t]=new xn(t,1,!1,t.toLowerCase(),null,!1,!1)});Kt.xlinkHref=new xn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Kt[t]=new xn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,i){var r=Kt.hasOwnProperty(e)?Kt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nx(e,n,r,i)&&(n=null),i||r===null?ex(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=Q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),As=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),ju=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),Wu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),Kf=Symbol.iterator;function ma(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,Ic;function La(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Dc=!1;function Uc(t,e){if(!t||Dc)return"";Dc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Dc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?La(t):""}function ix(t){switch(t.tag){case 5:return La(t.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return t=Uc(t.type,!1),t;case 11:return t=Uc(t.type.render,!1),t;case 1:return t=Uc(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case As:return"Portal";case ju:return"Profiler";case Nh:return"StrictMode";case Wu:return"Suspense";case Xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case L0:return(t._context.displayName||"Context")+".Provider";case Ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case ar:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function rx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function D0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sx(t){var e=D0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bo(t){t._valueTracker||(t._valueTracker=sx(t))}function U0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=D0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ul(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function $u(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function F0(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function qu(t,e){F0(t,e);var n=Tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ku(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ku(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ku(t,e,n){(e!=="number"||Ul(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Na=Array.isArray;function Bs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Zu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(me(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(me(92));if(Na(n)){if(1<n.length)throw Error(me(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function O0(t,e){var n=Tr(e.value),i=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ep(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function k0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?k0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,z0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function qa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ka={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ax=["Webkit","ms","Moz","O"];Object.keys(ka).forEach(function(t){ax.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ka[e]=ka[t]})});function B0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ka.hasOwnProperty(t)&&ka[t]?(""+e).trim():e+"px"}function H0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=B0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ox=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ju(t,e){if(e){if(ox[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(me(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(me(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(me(61))}if(e.style!=null&&typeof e.style!="object")throw Error(me(62))}}function ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function Uh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nd=null,Hs=null,Vs=null;function tp(t){if(t=_o(t)){if(typeof nd!="function")throw Error(me(280));var e=t.stateNode;e&&(e=gc(e),nd(t.stateNode,t.type,e))}}function V0(t){Hs?Vs?Vs.push(t):Vs=[t]:Hs=t}function G0(){if(Hs){var t=Hs,e=Vs;if(Vs=Hs=null,tp(t),e)for(t=0;t<e.length;t++)tp(e[t])}}function j0(t,e){return t(e)}function W0(){}var Fc=!1;function X0(t,e,n){if(Fc)return t(e,n);Fc=!0;try{return j0(t,e,n)}finally{Fc=!1,(Hs!==null||Vs!==null)&&(W0(),G0())}}function Ka(t,e){var n=t.stateNode;if(n===null)return null;var i=gc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(me(231,e,typeof n));return n}var id=!1;if(Xi)try{var ga={};Object.defineProperty(ga,"passive",{get:function(){id=!0}}),window.addEventListener("test",ga,ga),window.removeEventListener("test",ga,ga)}catch{id=!1}function lx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var za=!1,Fl=null,Ol=!1,rd=null,cx={onError:function(t){za=!0,Fl=t}};function ux(t,e,n,i,r,s,a,o,l){za=!1,Fl=null,lx.apply(cx,arguments)}function dx(t,e,n,i,r,s,a,o,l){if(ux.apply(this,arguments),za){if(za){var c=Fl;za=!1,Fl=null}else throw Error(me(198));Ol||(Ol=!0,rd=c)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Y0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function np(t){if(cs(t)!==t)throw Error(me(188))}function hx(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(me(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return np(r),t;if(s===i)return np(r),e;s=s.sibling}throw Error(me(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(me(189))}}if(n.alternate!==i)throw Error(me(190))}if(n.tag!==3)throw Error(me(188));return n.stateNode.current===n?t:e}function $0(t){return t=hx(t),t!==null?q0(t):null}function q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q0(t);if(e!==null)return e;t=t.sibling}return null}var K0=kn.unstable_scheduleCallback,ip=kn.unstable_cancelCallback,fx=kn.unstable_shouldYield,px=kn.unstable_requestPaint,Lt=kn.unstable_now,mx=kn.unstable_getCurrentPriorityLevel,Fh=kn.unstable_ImmediatePriority,Z0=kn.unstable_UserBlockingPriority,kl=kn.unstable_NormalPriority,gx=kn.unstable_LowPriority,Q0=kn.unstable_IdlePriority,hc=null,Ti=null;function vx(t){if(Ti&&typeof Ti.onCommitFiberRoot=="function")try{Ti.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var ci=Math.clz32?Math.clz32:yx,_x=Math.log,xx=Math.LN2;function yx(t){return t>>>=0,t===0?32:31-(_x(t)/xx|0)|0}var Po=64,Lo=4194304;function Ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ia(o):(s&=a,s!==0&&(i=Ia(s)))}else a=n&~r,a!==0?i=Ia(a):s!==0&&(i=Ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ci(e),r=1<<n,i|=t[n],e&=~r;return i}function Sx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ci(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Sx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function J0(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ci(e),t[e]=n}function Ex(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ci(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Oh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ci(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function eg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tg,kh,ng,ig,rg,ad=!1,No=[],mr=null,gr=null,vr=null,Za=new Map,Qa=new Map,cr=[],wx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(e.pointerId)}}function va(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_o(e),e!==null&&kh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Tx(t,e,n,i,r){switch(e){case"focusin":return mr=va(mr,t,e,n,i,r),!0;case"dragenter":return gr=va(gr,t,e,n,i,r),!0;case"mouseover":return vr=va(vr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Za.set(s,va(Za.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Qa.set(s,va(Qa.get(s)||null,t,e,n,i,r)),!0}return!1}function sg(t){var e=jr(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=Y0(n),e!==null){t.blockedOn=e,rg(t.priority,function(){ng(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _l(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=od(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);td=i,n.target.dispatchEvent(i),td=null}else return e=_o(n),e!==null&&kh(e),t.blockedOn=n,!1;e.shift()}return!0}function sp(t,e,n){_l(t)&&n.delete(e)}function Ax(){ad=!1,mr!==null&&_l(mr)&&(mr=null),gr!==null&&_l(gr)&&(gr=null),vr!==null&&_l(vr)&&(vr=null),Za.forEach(sp),Qa.forEach(sp)}function _a(t,e){t.blockedOn===e&&(t.blockedOn=null,ad||(ad=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,Ax)))}function Ja(t){function e(r){return _a(r,t)}if(0<No.length){_a(No[0],t);for(var n=1;n<No.length;n++){var i=No[n];i.blockedOn===t&&(i.blockedOn=null)}}for(mr!==null&&_a(mr,t),gr!==null&&_a(gr,t),vr!==null&&_a(vr,t),Za.forEach(e),Qa.forEach(e),n=0;n<cr.length;n++)i=cr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)sg(n),n.blockedOn===null&&cr.shift()}var Gs=Qi.ReactCurrentBatchConfig,Bl=!0;function Cx(t,e,n,i){var r=ht,s=Gs.transition;Gs.transition=null;try{ht=1,zh(t,e,n,i)}finally{ht=r,Gs.transition=s}}function bx(t,e,n,i){var r=ht,s=Gs.transition;Gs.transition=null;try{ht=4,zh(t,e,n,i)}finally{ht=r,Gs.transition=s}}function zh(t,e,n,i){if(Bl){var r=od(t,e,n,i);if(r===null)Yc(t,e,i,Hl,n),rp(t,i);else if(Tx(r,t,e,n,i))i.stopPropagation();else if(rp(t,i),e&4&&-1<wx.indexOf(t)){for(;r!==null;){var s=_o(r);if(s!==null&&tg(s),s=od(t,e,n,i),s===null&&Yc(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Yc(t,e,i,null,n)}}var Hl=null;function od(t,e,n,i){if(Hl=null,t=Uh(i),t=jr(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Y0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function ag(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mx()){case Fh:return 1;case Z0:return 4;case kl:case gx:return 16;case Q0:return 536870912;default:return 16}default:return 16}}var fr=null,Bh=null,xl=null;function og(){if(xl)return xl;var t,e=Bh,n=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return xl=r.slice(t,1<i?1-i:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function ap(){return!1}function Bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Io:ap,this.isPropagationStopped=ap,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),e}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hh=Bn(da),vo=Ct({},da,{view:0,detail:0}),Rx=Bn(vo),kc,zc,xa,fc=Ct({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xa&&(xa&&t.type==="mousemove"?(kc=t.screenX-xa.screenX,zc=t.screenY-xa.screenY):zc=kc=0,xa=t),kc)},movementY:function(t){return"movementY"in t?t.movementY:zc}}),op=Bn(fc),Px=Ct({},fc,{dataTransfer:0}),Lx=Bn(Px),Nx=Ct({},vo,{relatedTarget:0}),Bc=Bn(Nx),Ix=Ct({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=Bn(Ix),Ux=Ct({},da,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Fx=Bn(Ux),Ox=Ct({},da,{data:0}),lp=Bn(Ox),kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Bx[t])?!!e[t]:!1}function Vh(){return Hx}var Vx=Ct({},vo,{key:function(t){if(t.key){var e=kx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=Bn(Vx),jx=Ct({},fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Bn(jx),Wx=Ct({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),Xx=Bn(Wx),Yx=Ct({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),$x=Bn(Yx),qx=Ct({},fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Kx=Bn(qx),Zx=[9,13,27,32],Gh=Xi&&"CompositionEvent"in window,Ba=null;Xi&&"documentMode"in document&&(Ba=document.documentMode);var Qx=Xi&&"TextEvent"in window&&!Ba,lg=Xi&&(!Gh||Ba&&8<Ba&&11>=Ba),up=" ",dp=!1;function cg(t,e){switch(t){case"keyup":return Zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function Jx(t,e){switch(t){case"compositionend":return ug(e);case"keypress":return e.which!==32?null:(dp=!0,up);case"textInput":return t=e.data,t===up&&dp?null:t;default:return null}}function ey(t,e){if(bs)return t==="compositionend"||!Gh&&cg(t,e)?(t=og(),xl=Bh=fr=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lg&&e.locale!=="ko"?null:e.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ty[t.type]:e==="textarea"}function dg(t,e,n,i){V0(i),e=Vl(e,"onChange"),0<e.length&&(n=new Hh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ha=null,eo=null;function ny(t){Mg(t,0)}function pc(t){var e=Ls(t);if(U0(e))return t}function iy(t,e){if(t==="change")return e}var hg=!1;if(Xi){var Hc;if(Xi){var Vc="oninput"in document;if(!Vc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Vc=typeof fp.oninput=="function"}Hc=Vc}else Hc=!1;hg=Hc&&(!document.documentMode||9<document.documentMode)}function pp(){Ha&&(Ha.detachEvent("onpropertychange",fg),eo=Ha=null)}function fg(t){if(t.propertyName==="value"&&pc(eo)){var e=[];dg(e,eo,t,Uh(t)),X0(ny,e)}}function ry(t,e,n){t==="focusin"?(pp(),Ha=e,eo=n,Ha.attachEvent("onpropertychange",fg)):t==="focusout"&&pp()}function sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pc(eo)}function ay(t,e){if(t==="click")return pc(e)}function oy(t,e){if(t==="input"||t==="change")return pc(e)}function ly(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var hi=typeof Object.is=="function"?Object.is:ly;function to(t,e){if(hi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Gu.call(e,r)||!hi(t[r],e[r]))return!1}return!0}function mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,e){var n=mp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mp(n)}}function pg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mg(){for(var t=window,e=Ul();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ul(t.document)}return e}function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cy(t){var e=mg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&pg(n.ownerDocument.documentElement,n)){if(i!==null&&jh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=gp(n,s);var a=gp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uy=Xi&&"documentMode"in document&&11>=document.documentMode,Rs=null,ld=null,Va=null,cd=!1;function vp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cd||Rs==null||Rs!==Ul(i)||(i=Rs,"selectionStart"in i&&jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Va&&to(Va,i)||(Va=i,i=Vl(ld,"onSelect"),0<i.length&&(e=new Hh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function Do(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ps={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Gc={},gg={};Xi&&(gg=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function mc(t){if(Gc[t])return Gc[t];if(!Ps[t])return t;var e=Ps[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gg)return Gc[t]=e[n];return t}var vg=mc("animationend"),_g=mc("animationiteration"),xg=mc("animationstart"),yg=mc("transitionend"),Sg=new Map,_p="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function br(t,e){Sg.set(t,e),ls(e,[t])}for(var jc=0;jc<_p.length;jc++){var Wc=_p[jc],dy=Wc.toLowerCase(),hy=Wc[0].toUpperCase()+Wc.slice(1);br(dy,"on"+hy)}br(vg,"onAnimationEnd");br(_g,"onAnimationIteration");br(xg,"onAnimationStart");br("dblclick","onDoubleClick");br("focusin","onFocus");br("focusout","onBlur");br(yg,"onTransitionEnd");Ks("onMouseEnter",["mouseout","mouseover"]);Ks("onMouseLeave",["mouseout","mouseover"]);Ks("onPointerEnter",["pointerout","pointerover"]);Ks("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,dx(i,e,void 0,t),t.currentTarget=null}function Mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;xp(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;xp(r,o,c),s=l}}}if(Ol)throw t=rd,Ol=!1,rd=null,t}function xt(t,e){var n=e[pd];n===void 0&&(n=e[pd]=new Set);var i=t+"__bubble";n.has(i)||(Eg(e,t,2,!1),n.add(i))}function Xc(t,e,n){var i=0;e&&(i|=4),Eg(n,t,i,e)}var Uo="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[Uo]){t[Uo]=!0,P0.forEach(function(n){n!=="selectionchange"&&(fy.has(n)||Xc(n,!1,t),Xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uo]||(e[Uo]=!0,Xc("selectionchange",!1,e))}}function Eg(t,e,n,i){switch(ag(e)){case 1:var r=Cx;break;case 4:r=bx;break;default:r=zh}n=r.bind(null,e,n,t),r=void 0,!id||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Yc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=jr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}X0(function(){var c=s,d=Uh(n),f=[];e:{var h=Sg.get(t);if(h!==void 0){var p=Hh,v=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":p=Gx;break;case"focusin":v="focus",p=Bc;break;case"focusout":v="blur",p=Bc;break;case"beforeblur":case"afterblur":p=Bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Xx;break;case vg:case _g:case xg:p=Dx;break;case yg:p=$x;break;case"scroll":p=Rx;break;case"wheel":p=Kx;break;case"copy":case"cut":case"paste":p=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=cp}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var g=c,x;g!==null;){x=g;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=Ka(g,u),S!=null&&y.push(io(g,S,x)))),m)break;g=g.return}0<y.length&&(h=new p(h,v,null,n,d),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==td&&(v=n.relatedTarget||n.fromElement)&&(jr(v)||v[Yi]))break e;if((p||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?jr(v):null,v!==null&&(m=cs(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=op,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=cp,S="onPointerLeave",u="onPointerEnter",g="pointer"),m=p==null?h:Ls(p),x=v==null?h:Ls(v),h=new y(S,g+"leave",p,n,d),h.target=m,h.relatedTarget=x,S=null,jr(d)===c&&(y=new y(u,g+"enter",v,n,d),y.target=x,y.relatedTarget=m,S=y),m=S,p&&v)t:{for(y=p,u=v,g=0,x=y;x;x=ds(x))g++;for(x=0,S=u;S;S=ds(S))x++;for(;0<g-x;)y=ds(y),g--;for(;0<x-g;)u=ds(u),x--;for(;g--;){if(y===u||u!==null&&y===u.alternate)break t;y=ds(y),u=ds(u)}y=null}else y=null;p!==null&&yp(f,h,p,y,!1),v!==null&&m!==null&&yp(f,m,v,y,!0)}}e:{if(h=c?Ls(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var I=iy;else if(hp(h))if(hg)I=oy;else{I=sy;var A=ry}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(I=ay);if(I&&(I=I(t,c))){dg(f,I,n,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Ku(h,"number",h.value)}switch(A=c?Ls(c):window,t){case"focusin":(hp(A)||A.contentEditable==="true")&&(Rs=A,ld=c,Va=null);break;case"focusout":Va=ld=Rs=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,vp(f,n,d);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":vp(f,n,d)}var C;if(Gh)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else bs?cg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(lg&&n.locale!=="ko"&&(bs||L!=="onCompositionStart"?L==="onCompositionEnd"&&bs&&(C=og()):(fr=d,Bh="value"in fr?fr.value:fr.textContent,bs=!0)),A=Vl(c,L),0<A.length&&(L=new lp(L,t,null,n,d),f.push({event:L,listeners:A}),C?L.data=C:(C=ug(n),C!==null&&(L.data=C)))),(C=Qx?Jx(t,n):ey(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(d=new lp("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=C))}Mg(f,e)})}function io(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ka(t,n),s!=null&&i.unshift(io(t,s,r)),s=Ka(t,e),s!=null&&i.push(io(t,s,r))),t=t.return}return i}function ds(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ka(n,s),l!=null&&a.unshift(io(n,l,o))):r||(l=Ka(n,s),l!=null&&a.push(io(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var py=/\r\n?/g,my=/\u0000|\uFFFD/g;function Sp(t){return(typeof t=="string"?t:""+t).replace(py,`
`).replace(my,"")}function Fo(t,e,n){if(e=Sp(e),Sp(t)!==e&&n)throw Error(me(425))}function Gl(){}var ud=null,dd=null;function hd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,Mp=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof Mp<"u"?function(t){return Mp.resolve(null).then(t).catch(_y)}:fd;function _y(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ja(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ja(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ha=Math.random().toString(36).slice(2),Mi="__reactFiber$"+ha,ro="__reactProps$"+ha,Yi="__reactContainer$"+ha,pd="__reactEvents$"+ha,xy="__reactListeners$"+ha,yy="__reactHandles$"+ha;function jr(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yi]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ep(t);t!==null;){if(n=t[Mi])return n;t=Ep(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[Mi]||t[Yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(me(33))}function gc(t){return t[ro]||null}var md=[],Ns=-1;function Rr(t){return{current:t}}function yt(t){0>Ns||(t.current=md[Ns],md[Ns]=null,Ns--)}function gt(t,e){Ns++,md[Ns]=t.current,t.current=e}var Ar={},cn=Rr(Ar),Cn=Rr(!1),es=Ar;function Zs(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function jl(){yt(Cn),yt(cn)}function wp(t,e,n){if(cn.current!==Ar)throw Error(me(168));gt(cn,e),gt(Cn,n)}function wg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(me(108,rx(t)||"Unknown",r));return Ct({},n,i)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,es=cn.current,gt(cn,t),gt(Cn,Cn.current),!0}function Tp(t,e,n){var i=t.stateNode;if(!i)throw Error(me(169));n?(t=wg(t,e,es),i.__reactInternalMemoizedMergedChildContext=t,yt(Cn),yt(cn),gt(cn,t)):yt(Cn),gt(Cn,n)}var ki=null,vc=!1,qc=!1;function Tg(t){ki===null?ki=[t]:ki.push(t)}function Sy(t){vc=!0,Tg(t)}function Pr(){if(!qc&&ki!==null){qc=!0;var t=0,e=ht;try{var n=ki;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ki=null,vc=!1}catch(r){throw ki!==null&&(ki=ki.slice(t+1)),K0(Fh,Pr),r}finally{ht=e,qc=!1}}return null}var Is=[],Ds=0,Xl=null,Yl=0,jn=[],Wn=0,ts=null,zi=1,Bi="";function zr(t,e){Is[Ds++]=Yl,Is[Ds++]=Xl,Xl=t,Yl=e}function Ag(t,e,n){jn[Wn++]=zi,jn[Wn++]=Bi,jn[Wn++]=ts,ts=t;var i=zi;t=Bi;var r=32-ci(i)-1;i&=~(1<<r),n+=1;var s=32-ci(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,zi=1<<32-ci(e)+r|n<<r|i,Bi=s+t}else zi=1<<s|n<<r|i,Bi=t}function Wh(t){t.return!==null&&(zr(t,1),Ag(t,1,0))}function Xh(t){for(;t===Xl;)Xl=Is[--Ds],Is[Ds]=null,Yl=Is[--Ds],Is[Ds]=null;for(;t===ts;)ts=jn[--Wn],jn[Wn]=null,Bi=jn[--Wn],jn[Wn]=null,zi=jn[--Wn],jn[Wn]=null}var On=null,Fn=null,Et=!1,si=null;function Cg(t,e){var n=Xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,Fn=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,Fn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ts!==null?{id:zi,overflow:Bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,Fn=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vd(t){if(Et){var e=Fn;if(e){var n=e;if(!Ap(t,e)){if(gd(t))throw Error(me(418));e=_r(n.nextSibling);var i=On;e&&Ap(t,e)?Cg(i,n):(t.flags=t.flags&-4097|2,Et=!1,On=t)}}else{if(gd(t))throw Error(me(418));t.flags=t.flags&-4097|2,Et=!1,On=t}}}function Cp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Oo(t){if(t!==On)return!1;if(!Et)return Cp(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hd(t.type,t.memoizedProps)),e&&(e=Fn)){if(gd(t))throw bg(),Error(me(418));for(;e;)Cg(t,e),e=_r(e.nextSibling)}if(Cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(me(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Fn=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Fn=null}}else Fn=On?_r(t.stateNode.nextSibling):null;return!0}function bg(){for(var t=Fn;t;)t=_r(t.nextSibling)}function Qs(){Fn=On=null,Et=!1}function Yh(t){si===null?si=[t]:si.push(t)}var My=Qi.ReactCurrentBatchConfig;function ya(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(me(309));var i=n.stateNode}if(!i)throw Error(me(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(me(284));if(!n._owner)throw Error(me(290,t))}return t}function ko(t,e){throw t=Object.prototype.toString.call(e),Error(me(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bp(t){var e=t._init;return e(t._payload)}function Rg(t){function e(u,g){if(t){var x=u.deletions;x===null?(u.deletions=[g],u.flags|=16):x.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Mr(u,g),u.index=0,u.sibling=null,u}function s(u,g,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<g?(u.flags|=2,g):x):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,x,S){return g===null||g.tag!==6?(g=nu(x,u.mode,S),g.return=u,g):(g=r(g,x),g.return=u,g)}function l(u,g,x,S){var I=x.type;return I===Cs?d(u,g,x.props.children,S,x.key):g!==null&&(g.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ar&&bp(I)===g.type)?(S=r(g,x.props),S.ref=ya(u,g,x),S.return=u,S):(S=Cl(x.type,x.key,x.props,null,u.mode,S),S.ref=ya(u,g,x),S.return=u,S)}function c(u,g,x,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=iu(x,u.mode,S),g.return=u,g):(g=r(g,x.children||[]),g.return=u,g)}function d(u,g,x,S,I){return g===null||g.tag!==7?(g=Qr(x,u.mode,S,I),g.return=u,g):(g=r(g,x),g.return=u,g)}function f(u,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=nu(""+g,u.mode,x),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Co:return x=Cl(g.type,g.key,g.props,null,u.mode,x),x.ref=ya(u,null,g),x.return=u,x;case As:return g=iu(g,u.mode,x),g.return=u,g;case ar:var S=g._init;return f(u,S(g._payload),x)}if(Na(g)||ma(g))return g=Qr(g,u.mode,x,null),g.return=u,g;ko(u,g)}return null}function h(u,g,x,S){var I=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return I!==null?null:o(u,g,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Co:return x.key===I?l(u,g,x,S):null;case As:return x.key===I?c(u,g,x,S):null;case ar:return I=x._init,h(u,g,I(x._payload),S)}if(Na(x)||ma(x))return I!==null?null:d(u,g,x,S,null);ko(u,x)}return null}function p(u,g,x,S,I){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,o(g,u,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Co:return u=u.get(S.key===null?x:S.key)||null,l(g,u,S,I);case As:return u=u.get(S.key===null?x:S.key)||null,c(g,u,S,I);case ar:var A=S._init;return p(u,g,x,A(S._payload),I)}if(Na(S)||ma(S))return u=u.get(x)||null,d(g,u,S,I,null);ko(g,S)}return null}function v(u,g,x,S){for(var I=null,A=null,C=g,L=g=0,w=null;C!==null&&L<x.length;L++){C.index>L?(w=C,C=null):w=C.sibling;var M=h(u,C,x[L],S);if(M===null){C===null&&(C=w);break}t&&C&&M.alternate===null&&e(u,C),g=s(M,g,L),A===null?I=M:A.sibling=M,A=M,C=w}if(L===x.length)return n(u,C),Et&&zr(u,L),I;if(C===null){for(;L<x.length;L++)C=f(u,x[L],S),C!==null&&(g=s(C,g,L),A===null?I=C:A.sibling=C,A=C);return Et&&zr(u,L),I}for(C=i(u,C);L<x.length;L++)w=p(C,u,L,x[L],S),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?L:w.key),g=s(w,g,L),A===null?I=w:A.sibling=w,A=w);return t&&C.forEach(function(D){return e(u,D)}),Et&&zr(u,L),I}function y(u,g,x,S){var I=ma(x);if(typeof I!="function")throw Error(me(150));if(x=I.call(x),x==null)throw Error(me(151));for(var A=I=null,C=g,L=g=0,w=null,M=x.next();C!==null&&!M.done;L++,M=x.next()){C.index>L?(w=C,C=null):w=C.sibling;var D=h(u,C,M.value,S);if(D===null){C===null&&(C=w);break}t&&C&&D.alternate===null&&e(u,C),g=s(D,g,L),A===null?I=D:A.sibling=D,A=D,C=w}if(M.done)return n(u,C),Et&&zr(u,L),I;if(C===null){for(;!M.done;L++,M=x.next())M=f(u,M.value,S),M!==null&&(g=s(M,g,L),A===null?I=M:A.sibling=M,A=M);return Et&&zr(u,L),I}for(C=i(u,C);!M.done;L++,M=x.next())M=p(C,u,L,M.value,S),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?L:M.key),g=s(M,g,L),A===null?I=M:A.sibling=M,A=M);return t&&C.forEach(function(F){return e(u,F)}),Et&&zr(u,L),I}function m(u,g,x,S){if(typeof x=="object"&&x!==null&&x.type===Cs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Co:e:{for(var I=x.key,A=g;A!==null;){if(A.key===I){if(I=x.type,I===Cs){if(A.tag===7){n(u,A.sibling),g=r(A,x.props.children),g.return=u,u=g;break e}}else if(A.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ar&&bp(I)===A.type){n(u,A.sibling),g=r(A,x.props),g.ref=ya(u,A,x),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===Cs?(g=Qr(x.props.children,u.mode,S,x.key),g.return=u,u=g):(S=Cl(x.type,x.key,x.props,null,u.mode,S),S.ref=ya(u,g,x),S.return=u,u=S)}return a(u);case As:e:{for(A=x.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(u,g.sibling),g=r(g,x.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=iu(x,u.mode,S),g.return=u,u=g}return a(u);case ar:return A=x._init,m(u,g,A(x._payload),S)}if(Na(x))return v(u,g,x,S);if(ma(x))return y(u,g,x,S);ko(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,x),g.return=u,u=g):(n(u,g),g=nu(x,u.mode,S),g.return=u,u=g),a(u)):n(u,g)}return m}var Js=Rg(!0),Pg=Rg(!1),$l=Rr(null),ql=null,Us=null,$h=null;function qh(){$h=Us=ql=null}function Kh(t){var e=$l.current;yt($l),t._currentValue=e}function _d(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){ql=t,$h=Us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(An=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},Us===null){if(ql===null)throw Error(me(308));Us=t,ql.dependencies={lanes:0,firstContext:t}}else Us=Us.next=t;return e}var Wr=null;function Zh(t){Wr===null?Wr=[t]:Wr.push(t)}function Lg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Zh(e)):(n.next=r.next,r.next=n),e.interleaved=n,$i(t,i)}function $i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function Qh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ji(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(t,n)}return r=i.interleaved,r===null?(e.next=e,Zh(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Oh(t,n)}}function Rp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,i){var r=t.updateQueue;or=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;a=0,d=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,y=o;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=Ct({},f,h);break e;case 2:or=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);is|=a,t.lanes=a,t.memoizedState=f}}function Pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(me(191,r));r.call(i)}}}var xo={},Ai=Rr(xo),so=Rr(xo),ao=Rr(xo);function Xr(t){if(t===xo)throw Error(me(174));return t}function Jh(t,e){switch(gt(ao,e),gt(so,t),gt(Ai,xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qu(e,t)}yt(Ai),gt(Ai,e)}function ea(){yt(Ai),yt(so),yt(ao)}function Ig(t){Xr(ao.current);var e=Xr(Ai.current),n=Qu(e,t.type);e!==n&&(gt(so,t),gt(Ai,n))}function ef(t){so.current===t&&(yt(Ai),yt(so))}var Tt=Rr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kc=[];function tf(){for(var t=0;t<Kc.length;t++)Kc[t]._workInProgressVersionPrimary=null;Kc.length=0}var Ml=Qi.ReactCurrentDispatcher,Zc=Qi.ReactCurrentBatchConfig,ns=0,At=null,Ot=null,jt=null,Ql=!1,Ga=!1,oo=0,Ey=0;function tn(){throw Error(me(321))}function nf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!hi(t[n],e[n]))return!1;return!0}function rf(t,e,n,i,r,s){if(ns=s,At=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ml.current=t===null||t.memoizedState===null?Cy:by,t=n(i,r),Ga){s=0;do{if(Ga=!1,oo=0,25<=s)throw Error(me(301));s+=1,jt=Ot=null,e.updateQueue=null,Ml.current=Ry,t=n(i,r)}while(Ga)}if(Ml.current=Jl,e=Ot!==null&&Ot.next!==null,ns=0,jt=Ot=At=null,Ql=!1,e)throw Error(me(300));return t}function sf(){var t=oo!==0;return oo=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?At.memoizedState=jt=t:jt=jt.next=t,jt}function qn(){if(Ot===null){var t=At.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=jt===null?At.memoizedState:jt.next;if(e!==null)jt=e,Ot=t;else{if(t===null)throw Error(me(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},jt===null?At.memoizedState=jt=t:jt=jt.next=t}return jt}function lo(t,e){return typeof e=="function"?e(t):e}function Qc(t){var e=qn(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((ns&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=f,a=i):l=l.next=f,At.lanes|=d,is|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,hi(i,e.memoizedState)||(An=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,At.lanes|=s,is|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jc(t){var e=qn(),n=e.queue;if(n===null)throw Error(me(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);hi(s,e.memoizedState)||(An=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Dg(){}function Ug(t,e){var n=At,i=qn(),r=e(),s=!hi(i.memoizedState,r);if(s&&(i.memoizedState=r,An=!0),i=i.queue,af(kg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,co(9,Og.bind(null,n,i,r,e),void 0,null),Wt===null)throw Error(me(349));ns&30||Fg(n,e,r)}return r}function Fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Og(t,e,n,i){e.value=n,e.getSnapshot=i,zg(e)&&Bg(t)}function kg(t,e,n){return n(function(){zg(e)&&Bg(t)})}function zg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!hi(t,n)}catch{return!0}}function Bg(t){var e=$i(t,1);e!==null&&ui(e,t,1,-1)}function Lp(t){var e=yi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ay.bind(null,At,t),[e.memoizedState,t]}function co(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=At.updateQueue,e===null?(e={lastEffect:null,stores:null},At.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Hg(){return qn().memoizedState}function El(t,e,n,i){var r=yi();At.flags|=t,r.memoizedState=co(1|e,n,void 0,i===void 0?null:i)}function _c(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var a=Ot.memoizedState;if(s=a.destroy,i!==null&&nf(i,a.deps)){r.memoizedState=co(e,n,s,i);return}}At.flags|=t,r.memoizedState=co(1|e,n,s,i)}function Np(t,e){return El(8390656,8,t,e)}function af(t,e){return _c(2048,8,t,e)}function Vg(t,e){return _c(4,2,t,e)}function Gg(t,e){return _c(4,4,t,e)}function jg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wg(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,jg.bind(null,e,t),n)}function of(){}function Xg(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Yg(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function $g(t,e,n){return ns&21?(hi(n,e)||(n=J0(),At.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=n)}function wy(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=Zc.transition;Zc.transition={};try{t(!1),e()}finally{ht=n,Zc.transition=i}}function qg(){return qn().memoizedState}function Ty(t,e,n){var i=Sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(t))Zg(e,n);else if(n=Lg(t,e,n,i),n!==null){var r=gn();ui(n,t,i,r),Qg(n,e,i)}}function Ay(t,e,n){var i=Sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))Zg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,hi(o,a)){var l=e.interleaved;l===null?(r.next=r,Zh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Lg(t,e,r,i),n!==null&&(r=gn(),ui(n,t,i,r),Qg(n,e,i))}}function Kg(t){var e=t.alternate;return t===At||e!==null&&e===At}function Zg(t,e){Ga=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Oh(t,n)}}var Jl={readContext:$n,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},Cy={readContext:$n,useCallback:function(t,e){return yi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:Np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,El(4194308,4,jg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return El(4194308,4,t,e)},useInsertionEffect:function(t,e){return El(4,2,t,e)},useMemo:function(t,e){var n=yi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=yi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ty.bind(null,At,t),[i.memoizedState,t]},useRef:function(t){var e=yi();return t={current:t},e.memoizedState=t},useState:Lp,useDebugValue:of,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Lp(!1),e=t[0];return t=wy.bind(null,t[1]),yi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=At,r=yi();if(Et){if(n===void 0)throw Error(me(407));n=n()}else{if(n=e(),Wt===null)throw Error(me(349));ns&30||Fg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Np(kg.bind(null,i,s,t),[t]),i.flags|=2048,co(9,Og.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=yi(),e=Wt.identifierPrefix;if(Et){var n=Bi,i=zi;n=(i&~(1<<32-ci(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=oo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ey++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},by={readContext:$n,useCallback:Xg,useContext:$n,useEffect:af,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:Yg,useReducer:Qc,useRef:Hg,useState:function(){return Qc(lo)},useDebugValue:of,useDeferredValue:function(t){var e=qn();return $g(e,Ot.memoizedState,t)},useTransition:function(){var t=Qc(lo)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Dg,useSyncExternalStore:Ug,useId:qg,unstable_isNewReconciler:!1},Ry={readContext:$n,useCallback:Xg,useContext:$n,useEffect:af,useImperativeHandle:Wg,useInsertionEffect:Vg,useLayoutEffect:Gg,useMemo:Yg,useReducer:Jc,useRef:Hg,useState:function(){return Jc(lo)},useDebugValue:of,useDeferredValue:function(t){var e=qn();return Ot===null?e.memoizedState=t:$g(e,Ot.memoizedState,t)},useTransition:function(){var t=Jc(lo)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Dg,useSyncExternalStore:Ug,useId:qg,unstable_isNewReconciler:!1};function ii(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function xd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xc={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Sr(t),s=ji(i,r);s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ui(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=gn(),r=Sr(t),s=ji(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=xr(t,s,r),e!==null&&(ui(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gn(),i=Sr(t),r=ji(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(ui(e,t,i,n),Sl(e,t,i))}};function Ip(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!to(n,i)||!to(r,s):!0}function Jg(t,e,n){var i=!1,r=Ar,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=bn(e)?es:cn.current,i=e.contextTypes,s=(i=i!=null)?Zs(t,r):Ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&xc.enqueueReplaceState(e,e.state,null)}function yd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Qh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=bn(e)?es:cn.current,r.context=Zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xc.enqueueReplaceState(r,r.state,null),Kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ta(t,e){try{var n="",i=e;do n+=ix(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function eu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Py=typeof WeakMap=="function"?WeakMap:Map;function ev(t,e,n){n=ji(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tc||(tc=!0,Ld=i),Sd(t,e)},n}function tv(t,e,n){n=ji(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Sd(t,e),typeof i!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Up(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Py;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=jy.bind(null,t,e,n),e.then(t,t))}function Fp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Op(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ji(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var Ly=Qi.ReactCurrentOwner,An=!1;function mn(t,e,n,i){e.child=t===null?Pg(e,null,n,i):Js(e,t.child,n,i)}function kp(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=rf(t,e,n,i,s,r),n=sf(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(Et&&n&&Wh(e),e.flags|=1,mn(t,e,i,r),e.child)}function zp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!mf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nv(t,e,s,i,r)):(t=Cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:to,n(a,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Mr(s,i),t.ref=e.ref,t.return=e,e.child=t}function nv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(to(s,i)&&t.ref===e.ref)if(An=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(An=!0);else return e.lanes=t.lanes,qi(t,e,r)}return Md(t,e,n,i,r)}function iv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(Os,In),In|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(Os,In),In|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(Os,In),In|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(Os,In),In|=i;return mn(t,e,r,n),e.child}function rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Md(t,e,n,i,r){var s=bn(n)?es:cn.current;return s=Zs(e,s),js(e,r),n=rf(t,e,n,i,s,r),i=sf(),t!==null&&!An?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(Et&&i&&Wh(e),e.flags|=1,mn(t,e,n,r),e.child)}function Bp(t,e,n,i,r){if(bn(n)){var s=!0;Wl(e)}else s=!1;if(js(e,r),e.stateNode===null)wl(t,e),Jg(e,n,i),yd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=$n(c):(c=bn(n)?es:cn.current,c=Zs(e,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Dp(e,a,i,c),or=!1;var h=e.memoizedState;a.state=h,Kl(e,i,a,r),l=e.memoizedState,o!==i||h!==l||Cn.current||or?(typeof d=="function"&&(xd(e,n,d,i),l=e.memoizedState),(o=or||Ip(e,n,o,i,h,l,c))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ng(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:ii(e.type,o),a.props=c,f=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=$n(l):(l=bn(n)?es:cn.current,l=Zs(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Dp(e,a,i,l),or=!1,h=e.memoizedState,a.state=h,Kl(e,i,a,r);var v=e.memoizedState;o!==f||h!==v||Cn.current||or?(typeof p=="function"&&(xd(e,n,p,i),v=e.memoizedState),(c=or||Ip(e,n,c,i,h,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Ed(t,e,n,i,s,r)}function Ed(t,e,n,i,r,s){rv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Tp(e,n,!1),qi(t,e,s);i=e.stateNode,Ly.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Js(e,t.child,null,s),e.child=Js(e,null,o,s)):mn(t,e,o,s),e.memoizedState=i.state,r&&Tp(e,n,!0),e.child}function sv(t){var e=t.stateNode;e.pendingContext?wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wp(t,e.context,!1),Jh(t,e.containerInfo)}function Hp(t,e,n,i,r){return Qs(),Yh(r),e.flags|=256,mn(t,e,n,i),e.child}var wd={dehydrated:null,treeContext:null,retryLane:0};function Td(t){return{baseLanes:t,cachePool:null,transitions:null}}function av(t,e,n){var i=e.pendingProps,r=Tt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(Tt,r&1),t===null)return vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Mc(a,i,0,null),t=Qr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Td(n),e.memoizedState=wd,t):lf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ny(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Mr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Mr(o,s):(s=Qr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Td(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=wd,i}return s=t.child,t=s.sibling,i=Mr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function lf(t,e){return e=Mc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function zo(t,e,n,i){return i!==null&&Yh(i),Js(e,t.child,null,n),t=lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ny(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=eu(Error(me(422))),zo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Mc({mode:"visible",children:i.children},r,0,null),s=Qr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Js(e,t.child,null,a),e.child.memoizedState=Td(a),e.memoizedState=wd,s);if(!(e.mode&1))return zo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(me(419)),i=eu(s,i,void 0),zo(t,e,a,i)}if(o=(a&t.childLanes)!==0,An||o){if(i=Wt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(t,r),ui(i,t,r,-1))}return pf(),i=eu(Error(me(421))),zo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Wy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Fn=_r(r.nextSibling),On=e,Et=!0,si=null,t!==null&&(jn[Wn++]=zi,jn[Wn++]=Bi,jn[Wn++]=ts,zi=t.id,Bi=t.overflow,ts=e),e=lf(e,i.children),e.flags|=4096,e)}function Vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_d(t.return,e,n)}function tu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(mn(t,e,i.children,n),i=Tt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,n,e);else if(t.tag===19)Vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(Tt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),tu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}tu(e,!0,n,null,s);break;case"together":tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(me(153));if(e.child!==null){for(t=e.child,n=Mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Iy(t,e,n){switch(e.tag){case 3:sv(e),Qs();break;case 5:Ig(e);break;case 1:bn(e.type)&&Wl(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt($l,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(Tt,Tt.current&1),e.flags|=128,null):n&e.child.childLanes?av(t,e,n):(gt(Tt,Tt.current&1),t=qi(t,e,n),t!==null?t.sibling:null);gt(Tt,Tt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(Tt,Tt.current),i)break;return null;case 22:case 23:return e.lanes=0,iv(t,e,n)}return qi(t,e,n)}var lv,Ad,cv,uv;lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ad=function(){};cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Xr(Ai.current);var s=null;switch(n){case"input":r=$u(t,r),i=$u(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=Zu(t,r),i=Zu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gl)}Ju(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($a.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($a.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Sa(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function nn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Dy(t,e,n){var i=e.pendingProps;switch(Xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(e),null;case 1:return bn(e.type)&&jl(),nn(e),null;case 3:return i=e.stateNode,ea(),yt(Cn),yt(cn),tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Oo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,si!==null&&(Dd(si),si=null))),Ad(t,e),nn(e),null;case 5:ef(e);var r=Xr(ao.current);if(n=e.type,t!==null&&e.stateNode!=null)cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(me(166));return nn(e),null}if(t=Xr(Ai.current),Oo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[ro]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Da.length;r++)xt(Da[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":Zf(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":Jf(i,s),xt("invalid",i)}Ju(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Fo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Fo(i.textContent,o,t),r=["children",""+o]):$a.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&xt("scroll",i)}switch(n){case"input":bo(i),Qf(i,s,!0);break;case"textarea":bo(i),ep(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=k0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Mi]=e,t[ro]=i,lv(t,e,!1,!1),e.stateNode=t;e:{switch(a=ed(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Da.length;r++)xt(Da[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":Zf(t,i),r=$u(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),xt("invalid",t);break;case"textarea":Jf(t,i),r=Zu(t,i),xt("invalid",t);break;default:r=i}Ju(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?H0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&qa(t,l):typeof l=="number"&&qa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($a.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&Lh(t,s,l,a))}switch(n){case"input":bo(t),Qf(t,i,!1);break;case"textarea":bo(t),ep(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Bs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Bs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nn(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(me(166));if(n=Xr(ao.current),Xr(Ai.current),Oo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:Fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return nn(e),null;case 13:if(yt(Tt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Fn!==null&&e.mode&1&&!(e.flags&128))bg(),Qs(),e.flags|=98560,s=!1;else if(s=Oo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(me(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(me(317));s[Mi]=e}else Qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nn(e),s=!1}else si!==null&&(Dd(si),si=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Tt.current&1?kt===0&&(kt=3):pf())),e.updateQueue!==null&&(e.flags|=4),nn(e),null);case 4:return ea(),Ad(t,e),t===null&&no(e.stateNode.containerInfo),nn(e),null;case 10:return Kh(e.type._context),nn(e),null;case 17:return bn(e.type)&&jl(),nn(e),null;case 19:if(yt(Tt),s=e.memoizedState,s===null)return nn(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Sa(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Zl(t),a!==null){for(e.flags|=128,Sa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(Tt,Tt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>na&&(e.flags|=128,i=!0,Sa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Zl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return nn(e),null}else 2*Lt()-s.renderingStartTime>na&&n!==1073741824&&(e.flags|=128,i=!0,Sa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=Tt.current,gt(Tt,i?n&1|2:n&1),e):(nn(e),null);case 22:case 23:return ff(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?In&1073741824&&(nn(e),e.subtreeFlags&6&&(e.flags|=8192)):nn(e),null;case 24:return null;case 25:return null}throw Error(me(156,e.tag))}function Uy(t,e){switch(Xh(e),e.tag){case 1:return bn(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),yt(Cn),yt(cn),tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ef(e),null;case 13:if(yt(Tt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(me(340));Qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(Tt),null;case 4:return ea(),null;case 10:return Kh(e.type._context),null;case 22:case 23:return ff(),null;case 24:return null;default:return null}}var Bo=!1,an=!1,Fy=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Cd(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Gp=!1;function Oy(t,e){if(ud=Bl,t=mg(),jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(l=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++d===i&&(l=a),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(dd={focusedElem:t,selectionRange:n},Bl=!1,ze=e;ze!==null;)if(e=ze,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ze=t;else for(;ze!==null;){e=ze;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,m=v.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:ii(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(me(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ze=t;break}ze=e.return}return v=Gp,Gp=!1,v}function ja(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Cd(e,n,s)}r=r.next}while(r!==i)}}function yc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function bd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dv(t){var e=t.alternate;e!==null&&(t.alternate=null,dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[ro],delete e[pd],delete e[xy],delete e[yy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hv(t){return t.tag===5||t.tag===3||t.tag===4}function jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(i!==4&&(t=t.child,t!==null))for(Rd(t,e,n),t=t.sibling;t!==null;)Rd(t,e,n),t=t.sibling}function Pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}var Yt=null,ri=!1;function Ji(t,e,n){for(n=n.child;n!==null;)fv(t,e,n),n=n.sibling}function fv(t,e,n){if(Ti&&typeof Ti.onCommitFiberUnmount=="function")try{Ti.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:an||Fs(n,e);case 6:var i=Yt,r=ri;Yt=null,Ji(t,e,n),Yt=i,ri=r,Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Yt.removeChild(n.stateNode));break;case 18:Yt!==null&&(ri?(t=Yt,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),Ja(t)):$c(Yt,n.stateNode));break;case 4:i=Yt,r=ri,Yt=n.stateNode.containerInfo,ri=!0,Ji(t,e,n),Yt=i,ri=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Cd(n,e,a),r=r.next}while(r!==i)}Ji(t,e,n);break;case 1:if(!an&&(Fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){bt(n,e,o)}Ji(t,e,n);break;case 21:Ji(t,e,n);break;case 22:n.mode&1?(an=(i=an)||n.memoizedState!==null,Ji(t,e,n),an=i):Ji(t,e,n);break;default:Ji(t,e,n)}}function Wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fy),e.forEach(function(i){var r=Xy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Jn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Yt=o.stateNode,ri=!1;break e;case 3:Yt=o.stateNode.containerInfo,ri=!0;break e;case 4:Yt=o.stateNode.containerInfo,ri=!0;break e}o=o.return}if(Yt===null)throw Error(me(160));fv(s,a,r),Yt=null,ri=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pv(e,t),e=e.sibling}function pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(e,t),_i(t),i&4){try{ja(3,t,t.return),yc(3,t)}catch(y){bt(t,t.return,y)}try{ja(5,t,t.return)}catch(y){bt(t,t.return,y)}}break;case 1:Jn(e,t),_i(t),i&512&&n!==null&&Fs(n,n.return);break;case 5:if(Jn(e,t),_i(t),i&512&&n!==null&&Fs(n,n.return),t.flags&32){var r=t.stateNode;try{qa(r,"")}catch(y){bt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&F0(r,s),ed(o,a);var c=ed(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?H0(r,f):d==="dangerouslySetInnerHTML"?z0(r,f):d==="children"?qa(r,f):Lh(r,d,f,c)}switch(o){case"input":qu(r,s);break;case"textarea":O0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Bs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Bs(r,!!s.multiple,s.defaultValue,!0):Bs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ro]=s}catch(y){bt(t,t.return,y)}}break;case 6:if(Jn(e,t),_i(t),i&4){if(t.stateNode===null)throw Error(me(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){bt(t,t.return,y)}}break;case 3:if(Jn(e,t),_i(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ja(e.containerInfo)}catch(y){bt(t,t.return,y)}break;case 4:Jn(e,t),_i(t);break;case 13:Jn(e,t),_i(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(df=Lt())),i&4&&Wp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(an=(c=an)||d,Jn(e,t),an=c):Jn(e,t),_i(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ze=t,d=t.child;d!==null;){for(f=ze=d;ze!==null;){switch(h=ze,p=h.child,h.tag){case 0:case 11:case 14:case 15:ja(4,h,h.return);break;case 1:Fs(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){bt(i,n,y)}}break;case 5:Fs(h,h.return);break;case 22:if(h.memoizedState!==null){Yp(f);continue}}p!==null?(p.return=h,ze=p):Yp(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=B0("display",a))}catch(y){bt(t,t.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){bt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Jn(e,t),_i(t),i&4&&Wp(t);break;case 21:break;default:Jn(e,t),_i(t)}}function _i(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hv(n)){var i=n;break e}n=n.return}throw Error(me(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qa(r,""),i.flags&=-33);var s=jp(t);Pd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=jp(t);Rd(t,o,a);break;default:throw Error(me(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ky(t,e,n){ze=t,mv(t)}function mv(t,e,n){for(var i=(t.mode&1)!==0;ze!==null;){var r=ze,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Bo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||an;o=Bo;var c=an;if(Bo=a,(an=l)&&!c)for(ze=r;ze!==null;)a=ze,l=a.child,a.tag===22&&a.memoizedState!==null?$p(r):l!==null?(l.return=a,ze=l):$p(r);for(;s!==null;)ze=s,mv(s),s=s.sibling;ze=r,Bo=o,an=c}Xp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ze=s):Xp(t)}}function Xp(t){for(;ze!==null;){var e=ze;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||yc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ii(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ja(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(me(163))}an||e.flags&512&&bd(e)}catch(h){bt(e,e.return,h)}}if(e===t){ze=null;break}if(n=e.sibling,n!==null){n.return=e.return,ze=n;break}ze=e.return}}function Yp(t){for(;ze!==null;){var e=ze;if(e===t){ze=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ze=n;break}ze=e.return}}function $p(t){for(;ze!==null;){var e=ze;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{bd(e)}catch(l){bt(e,s,l)}break;case 5:var a=e.return;try{bd(e)}catch(l){bt(e,a,l)}}}catch(l){bt(e,e.return,l)}if(e===t){ze=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ze=o;break}ze=e.return}}var zy=Math.ceil,ec=Qi.ReactCurrentDispatcher,cf=Qi.ReactCurrentOwner,Yn=Qi.ReactCurrentBatchConfig,lt=0,Wt=null,It=null,qt=0,In=0,Os=Rr(0),kt=0,uo=null,is=0,Sc=0,uf=0,Wa=null,wn=null,df=0,na=1/0,Oi=null,tc=!1,Ld=null,yr=null,Ho=!1,pr=null,nc=0,Xa=0,Nd=null,Tl=-1,Al=0;function gn(){return lt&6?Lt():Tl!==-1?Tl:Tl=Lt()}function Sr(t){return t.mode&1?lt&2&&qt!==0?qt&-qt:My.transition!==null?(Al===0&&(Al=J0()),Al):(t=ht,t!==0||(t=window.event,t=t===void 0?16:ag(t.type)),t):1}function ui(t,e,n,i){if(50<Xa)throw Xa=0,Nd=null,Error(me(185));go(t,n,i),(!(lt&2)||t!==Wt)&&(t===Wt&&(!(lt&2)&&(Sc|=n),kt===4&&ur(t,qt)),Rn(t,i),n===1&&lt===0&&!(e.mode&1)&&(na=Lt()+500,vc&&Pr()))}function Rn(t,e){var n=t.callbackNode;Mx(t,e);var i=zl(t,t===Wt?qt:0);if(i===0)n!==null&&ip(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ip(n),e===1)t.tag===0?Sy(qp.bind(null,t)):Tg(qp.bind(null,t)),vy(function(){!(lt&6)&&Pr()}),n=null;else{switch(eg(i)){case 1:n=Fh;break;case 4:n=Z0;break;case 16:n=kl;break;case 536870912:n=Q0;break;default:n=kl}n=Ev(n,gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gv(t,e){if(Tl=-1,Al=0,lt&6)throw Error(me(327));var n=t.callbackNode;if(Ws()&&t.callbackNode!==n)return null;var i=zl(t,t===Wt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ic(t,i);else{e=i;var r=lt;lt|=2;var s=_v();(Wt!==t||qt!==e)&&(Oi=null,na=Lt()+500,Zr(t,e));do try{Vy();break}catch(o){vv(t,o)}while(!0);qh(),ec.current=s,lt=r,It!==null?e=0:(Wt=null,qt=0,e=kt)}if(e!==0){if(e===2&&(r=sd(t),r!==0&&(i=r,e=Id(t,r))),e===1)throw n=uo,Zr(t,0),ur(t,i),Rn(t,Lt()),n;if(e===6)ur(t,i);else{if(r=t.current.alternate,!(i&30)&&!By(r)&&(e=ic(t,i),e===2&&(s=sd(t),s!==0&&(i=s,e=Id(t,s))),e===1))throw n=uo,Zr(t,0),ur(t,i),Rn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(me(345));case 2:Br(t,wn,Oi);break;case 3:if(ur(t,i),(i&130023424)===i&&(e=df+500-Lt(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){gn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=fd(Br.bind(null,t,wn,Oi),e);break}Br(t,wn,Oi);break;case 4:if(ur(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ci(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zy(i/1960))-i,10<i){t.timeoutHandle=fd(Br.bind(null,t,wn,Oi),i);break}Br(t,wn,Oi);break;case 5:Br(t,wn,Oi);break;default:throw Error(me(329))}}}return Rn(t,Lt()),t.callbackNode===n?gv.bind(null,t):null}function Id(t,e){var n=Wa;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=ic(t,e),t!==2&&(e=wn,wn=n,e!==null&&Dd(e)),t}function Dd(t){wn===null?wn=t:wn.push.apply(wn,t)}function By(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!hi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~uf,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ci(e),i=1<<n;t[n]=-1,e&=~i}}function qp(t){if(lt&6)throw Error(me(327));Ws();var e=zl(t,0);if(!(e&1))return Rn(t,Lt()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var i=sd(t);i!==0&&(e=i,n=Id(t,i))}if(n===1)throw n=uo,Zr(t,0),ur(t,e),Rn(t,Lt()),n;if(n===6)throw Error(me(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,wn,Oi),Rn(t,Lt()),null}function hf(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(na=Lt()+500,vc&&Pr())}}function rs(t){pr!==null&&pr.tag===0&&!(lt&6)&&Ws();var e=lt;lt|=1;var n=Yn.transition,i=ht;try{if(Yn.transition=null,ht=1,t)return t()}finally{ht=i,Yn.transition=n,lt=e,!(lt&6)&&Pr()}}function ff(){In=Os.current,yt(Os)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gy(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:ea(),yt(Cn),yt(cn),tf();break;case 5:ef(i);break;case 4:ea();break;case 13:yt(Tt);break;case 19:yt(Tt);break;case 10:Kh(i.type._context);break;case 22:case 23:ff()}n=n.return}if(Wt=t,It=t=Mr(t.current,null),qt=In=e,kt=0,uo=null,uf=Sc=is=0,wn=Wa=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Wr=null}return t}function vv(t,e){do{var n=It;try{if(qh(),Ml.current=Jl,Ql){for(var i=At.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ql=!1}if(ns=0,jt=Ot=At=null,Ga=!1,oo=0,cf.current=null,n===null||n.return===null){kt=1,uo=e,It=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=qt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Fp(a);if(p!==null){p.flags&=-257,Op(p,a,o,s,e),p.mode&1&&Up(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Up(s,c,e),pf();break e}l=Error(me(426))}}else if(Et&&o.mode&1){var m=Fp(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Op(m,a,o,s,e),Yh(ta(l,o));break e}}s=l=ta(l,o),kt!==4&&(kt=2),Wa===null?Wa=[s]:Wa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=ev(s,l,e);Rp(s,u);break e;case 1:o=l;var g=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(yr===null||!yr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=tv(s,o,e);Rp(s,S);break e}}s=s.return}while(s!==null)}yv(n)}catch(I){e=I,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function _v(){var t=ec.current;return ec.current=Jl,t===null?Jl:t}function pf(){(kt===0||kt===3||kt===2)&&(kt=4),Wt===null||!(is&268435455)&&!(Sc&268435455)||ur(Wt,qt)}function ic(t,e){var n=lt;lt|=2;var i=_v();(Wt!==t||qt!==e)&&(Oi=null,Zr(t,e));do try{Hy();break}catch(r){vv(t,r)}while(!0);if(qh(),lt=n,ec.current=i,It!==null)throw Error(me(261));return Wt=null,qt=0,kt}function Hy(){for(;It!==null;)xv(It)}function Vy(){for(;It!==null&&!fx();)xv(It)}function xv(t){var e=Mv(t.alternate,t,In);t.memoizedProps=t.pendingProps,e===null?yv(t):It=e,cf.current=null}function yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Uy(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,It=null;return}}else if(n=Dy(n,e,In),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);kt===0&&(kt=5)}function Br(t,e,n){var i=ht,r=Yn.transition;try{Yn.transition=null,ht=1,Gy(t,e,n,i)}finally{Yn.transition=r,ht=i}return null}function Gy(t,e,n,i){do Ws();while(pr!==null);if(lt&6)throw Error(me(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(me(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ex(t,s),t===Wt&&(It=Wt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,Ev(kl,function(){return Ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Yn.transition,Yn.transition=null;var a=ht;ht=1;var o=lt;lt|=4,cf.current=null,Oy(t,n),pv(n,t),cy(dd),Bl=!!ud,dd=ud=null,t.current=n,ky(n),px(),lt=o,ht=a,Yn.transition=s}else t.current=n;if(Ho&&(Ho=!1,pr=t,nc=r),s=t.pendingLanes,s===0&&(yr=null),vx(n.stateNode),Rn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tc)throw tc=!1,t=Ld,Ld=null,t;return nc&1&&t.tag!==0&&Ws(),s=t.pendingLanes,s&1?t===Nd?Xa++:(Xa=0,Nd=t):Xa=0,Pr(),null}function Ws(){if(pr!==null){var t=eg(nc),e=Yn.transition,n=ht;try{if(Yn.transition=null,ht=16>t?16:t,pr===null)var i=!1;else{if(t=pr,pr=null,nc=0,lt&6)throw Error(me(331));var r=lt;for(lt|=4,ze=t.current;ze!==null;){var s=ze,a=s.child;if(ze.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ze=c;ze!==null;){var d=ze;switch(d.tag){case 0:case 11:case 15:ja(8,d,s)}var f=d.child;if(f!==null)f.return=d,ze=f;else for(;ze!==null;){d=ze;var h=d.sibling,p=d.return;if(dv(d),d===c){ze=null;break}if(h!==null){h.return=p,ze=h;break}ze=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ze=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ze=a;else e:for(;ze!==null;){if(s=ze,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ja(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ze=u;break e}ze=s.return}}var g=t.current;for(ze=g;ze!==null;){a=ze;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,ze=x;else e:for(a=g;ze!==null;){if(o=ze,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:yc(9,o)}}catch(I){bt(o,o.return,I)}if(o===a){ze=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,ze=S;break e}ze=o.return}}if(lt=r,Pr(),Ti&&typeof Ti.onPostCommitFiberRoot=="function")try{Ti.onPostCommitFiberRoot(hc,t)}catch{}i=!0}return i}finally{ht=n,Yn.transition=e}}return!1}function Kp(t,e,n){e=ta(n,e),e=ev(t,e,1),t=xr(t,e,1),e=gn(),t!==null&&(go(t,1,e),Rn(t,e))}function bt(t,e,n){if(t.tag===3)Kp(t,t,n);else for(;e!==null;){if(e.tag===3){Kp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(yr===null||!yr.has(i))){t=ta(n,t),t=tv(e,t,1),e=xr(e,t,1),t=gn(),e!==null&&(go(e,1,t),Rn(e,t));break}}e=e.return}}function jy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=gn(),t.pingedLanes|=t.suspendedLanes&n,Wt===t&&(qt&n)===n&&(kt===4||kt===3&&(qt&130023424)===qt&&500>Lt()-df?Zr(t,0):uf|=n),Rn(t,e)}function Sv(t,e){e===0&&(t.mode&1?(e=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):e=1);var n=gn();t=$i(t,e),t!==null&&(go(t,e,n),Rn(t,n))}function Wy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sv(t,n)}function Xy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(me(314))}i!==null&&i.delete(e),Sv(t,n)}var Mv;Mv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Cn.current)An=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return An=!1,Iy(t,e,n);An=!!(t.flags&131072)}else An=!1,Et&&e.flags&1048576&&Ag(e,Yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(t,e),t=e.pendingProps;var r=Zs(e,cn.current);js(e,n),r=rf(null,e,i,t,r,n);var s=sf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,Wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Qh(e),r.updater=xc,e.stateNode=r,r._reactInternals=e,yd(e,i,t,n),e=Ed(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Wh(e),mn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$y(i),t=ii(i,t),r){case 0:e=Md(null,e,i,t,n);break e;case 1:e=Bp(null,e,i,t,n);break e;case 11:e=kp(null,e,i,t,n);break e;case 14:e=zp(null,e,i,ii(i.type,t),n);break e}throw Error(me(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Md(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),Bp(t,e,i,r,n);case 3:e:{if(sv(e),t===null)throw Error(me(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ng(t,e),Kl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ta(Error(me(423)),e),e=Hp(t,e,i,n,r);break e}else if(i!==r){r=ta(Error(me(424)),e),e=Hp(t,e,i,n,r);break e}else for(Fn=_r(e.stateNode.containerInfo.firstChild),On=e,Et=!0,si=null,n=Pg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qs(),i===r){e=qi(t,e,n);break e}mn(t,e,i,n)}e=e.child}return e;case 5:return Ig(e),t===null&&vd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,hd(i,r)?a=null:s!==null&&hd(i,s)&&(e.flags|=32),rv(t,e),mn(t,e,a,n),e.child;case 6:return t===null&&vd(e),null;case 13:return av(t,e,n);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Js(e,null,i,n):mn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),kp(t,e,i,r,n);case 7:return mn(t,e,e.pendingProps,n),e.child;case 8:return mn(t,e,e.pendingProps.children,n),e.child;case 12:return mn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,gt($l,i._currentValue),i._currentValue=a,s!==null)if(hi(s.value,a)){if(s.children===r.children&&!Cn.current){e=qi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ji(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_d(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(me(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),_d(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}mn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=$n(r),i=i(r),e.flags|=1,mn(t,e,i,n),e.child;case 14:return i=e.type,r=ii(i,e.pendingProps),r=ii(i.type,r),zp(t,e,i,r,n);case 15:return nv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ii(i,r),wl(t,e),e.tag=1,bn(i)?(t=!0,Wl(e)):t=!1,js(e,n),Jg(e,i,r),yd(e,i,r,n),Ed(null,e,i,!0,t,n);case 19:return ov(t,e,n);case 22:return iv(t,e,n)}throw Error(me(156,e.tag))};function Ev(t,e){return K0(t,e)}function Yy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,e,n,i){return new Yy(t,e,n,i)}function mf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $y(t){if(typeof t=="function")return mf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ih)return 11;if(t===Dh)return 14}return 2}function Mr(t,e){var n=t.alternate;return n===null?(n=Xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Cl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")mf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Cs:return Qr(n.children,r,s,e);case Nh:a=8,r|=8;break;case ju:return t=Xn(12,n,e,r|2),t.elementType=ju,t.lanes=s,t;case Wu:return t=Xn(13,n,e,r),t.elementType=Wu,t.lanes=s,t;case Xu:return t=Xn(19,n,e,r),t.elementType=Xu,t.lanes=s,t;case I0:return Mc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:a=10;break e;case N0:a=9;break e;case Ih:a=11;break e;case Dh:a=14;break e;case ar:a=16,i=null;break e}throw Error(me(130,t==null?t:typeof t,""))}return e=Xn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Qr(t,e,n,i){return t=Xn(7,t,i,e),t.lanes=n,t}function Mc(t,e,n,i){return t=Xn(22,t,i,e),t.elementType=I0,t.lanes=n,t.stateNode={isHidden:!1},t}function nu(t,e,n){return t=Xn(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=Xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function qy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function gf(t,e,n,i,r,s,a,o,l){return t=new qy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qh(s),t}function Ky(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:As,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return Ar;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(me(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(me(171))}if(t.tag===1){var n=t.type;if(bn(n))return wg(t,n,e)}return e}function Tv(t,e,n,i,r,s,a,o,l){return t=gf(n,i,!0,t,r,s,a,o,l),t.context=wv(null),n=t.current,i=gn(),r=Sr(n),s=ji(i,r),s.callback=e??null,xr(n,s,r),t.current.lanes=r,go(t,r,i),Rn(t,i),t}function Ec(t,e,n,i){var r=e.current,s=gn(),a=Sr(r);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=ji(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,a),t!==null&&(ui(t,r,a,s),Sl(t,r,a)),a}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vf(t,e){Zp(t,e),(t=t.alternate)&&Zp(t,e)}function Zy(){return null}var Av=typeof reportError=="function"?reportError:function(t){console.error(t)};function _f(t){this._internalRoot=t}wc.prototype.render=_f.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(me(409));Ec(t,e,null,null)};wc.prototype.unmount=_f.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rs(function(){Ec(null,t,null,null)}),e[Yi]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ig();t={blockedOn:null,target:t,priority:e};for(var n=0;n<cr.length&&e!==0&&e<cr[n].priority;n++);cr.splice(n,0,t),n===0&&sg(t)}};function xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function Qy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=rc(a);s.call(c)}}var a=Tv(e,i,t,0,null,!1,!1,"",Qp);return t._reactRootContainer=a,t[Yi]=a.current,no(t.nodeType===8?t.parentNode:t),rs(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=rc(l);o.call(c)}}var l=gf(t,0,!1,null,null,!1,!1,"",Qp);return t._reactRootContainer=l,t[Yi]=l.current,no(t.nodeType===8?t.parentNode:t),rs(function(){Ec(e,l,n,i)}),l}function Ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=rc(a);o.call(l)}}Ec(e,a,t,r)}else a=Qy(n,e,t,r,i);return rc(a)}tg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ia(e.pendingLanes);n!==0&&(Oh(e,n|1),Rn(e,Lt()),!(lt&6)&&(na=Lt()+500,Pr()))}break;case 13:rs(function(){var i=$i(t,1);if(i!==null){var r=gn();ui(i,t,1,r)}}),vf(t,1)}};kh=function(t){if(t.tag===13){var e=$i(t,134217728);if(e!==null){var n=gn();ui(e,t,134217728,n)}vf(t,134217728)}};ng=function(t){if(t.tag===13){var e=Sr(t),n=$i(t,e);if(n!==null){var i=gn();ui(n,t,e,i)}vf(t,e)}};ig=function(){return ht};rg=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};nd=function(t,e,n){switch(e){case"input":if(qu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=gc(i);if(!r)throw Error(me(90));U0(i),qu(i,r)}}}break;case"textarea":O0(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};j0=hf;W0=rs;var Jy={usingClientEntryPoint:!1,Events:[_o,Ls,gc,V0,G0,hf]},Ma={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},e1={bundleType:Ma.bundleType,version:Ma.version,rendererPackageName:Ma.rendererPackageName,rendererConfig:Ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=$0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ma.findFiberByHostInstance||Zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{hc=Vo.inject(e1),Ti=Vo}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xf(e))throw Error(me(200));return Ky(t,e,null,n)};zn.createRoot=function(t,e){if(!xf(t))throw Error(me(299));var n=!1,i="",r=Av;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=gf(t,1,!1,null,null,n,!1,i,r),t[Yi]=e.current,no(t.nodeType===8?t.parentNode:t),new _f(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(me(188)):(t=Object.keys(t).join(","),Error(me(268,t)));return t=$0(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return rs(t)};zn.hydrate=function(t,e,n){if(!Tc(e))throw Error(me(200));return Ac(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!xf(t))throw Error(me(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Av;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Tv(e,null,t,1,n??null,r,!1,s,a),t[Yi]=e.current,no(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new wc(e)};zn.render=function(t,e,n){if(!Tc(e))throw Error(me(200));return Ac(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!Tc(t))throw Error(me(40));return t._reactRootContainer?(rs(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[Yi]=null})}),!0):!1};zn.unstable_batchedUpdates=hf;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Tc(n))throw Error(me(200));if(t==null||t._reactInternals===void 0)throw Error(me(38));return Ac(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426";function Cv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cv)}catch(t){console.error(t)}}Cv(),C0.exports=zn;var t1=C0.exports,Jp=t1;Vu.createRoot=Jp.createRoot,Vu.hydrateRoot=Jp.hydrateRoot;/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bv=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=Le.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>Le.createElement("svg",{ref:l,...i1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:bv("lucide",r),...o},[...a.map(([c,d])=>Le.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(t,e)=>{const n=Le.forwardRef(({className:i,...r},s)=>Le.createElement(r1,{ref:s,iconNode:e,className:bv(`lucide-${n1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Rv=ft("Activity",s1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],em=ft("ArrowUpRight",a1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],l1=ft("Calendar",o1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Ea=ft("Camera",c1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Pv=ft("ChevronRight",u1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],h1=ft("Clock",d1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Lv=ft("Compass",f1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],m1=ft("Cpu",p1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],tm=ft("ExternalLink",g1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],sc=ft("Globe",v1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],x1=ft("House",_1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],S1=ft("MapPin",y1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],E1=ft("Moon",M1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]],T1=ft("Newspaper",w1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],C1=ft("Pause",A1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],yf=ft("Play",b1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Nv=ft("Radio",R1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Sf=ft("RefreshCw",P1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]],Cc=ft("Rocket",L1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],I1=ft("RotateCcw",N1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Mf=ft("Search",D1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Iv=ft("Shield",U1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],O1=ft("Smartphone",F1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Ef=ft("Sparkles",k1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],B1=ft("Target",z1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],V1=ft("Volume2",H1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],j1=ft("VolumeX",G1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],X1=ft("Wifi",W1);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Dv=ft("Zap",Y1);function $1({activeTab:t,setActiveTab:e,totalSatellites:n,nextLaunch:i,onRefresh:r}){const[s,a]=Le.useState(""),[o,l]=Le.useState(!1);Le.useEffect(()=>{const d=()=>{a(new Date().toUTCString().replace("GMT","UTC"))};d();const f=setInterval(d,1e3);return()=>clearInterval(f)},[]);const c=d=>{e(d),setTimeout(()=>{window.dispatchEvent(new Event("resize"))},50)};return _.jsxs("header",{className:"header-hud",children:[_.jsxs("div",{className:"brand-section",onClick:()=>c("home"),children:[_.jsx("div",{className:"brand-logo-icon",children:_.jsx(sc,{size:16})}),_.jsx("div",{children:_.jsxs("h1",{className:"brand-title",children:["SPACEX ORBIT ",_.jsx("span",{className:"brand-badge",children:"LIVE v2.5"})]})})]}),_.jsxs("nav",{className:"nav-tabs",children:[_.jsxs("button",{className:`nav-tab-btn ${t==="home"?"active":""}`,onClick:()=>c("home"),children:[_.jsx(x1,{size:14})," ",_.jsx("span",{children:"Overview"})]}),_.jsxs("button",{className:`nav-tab-btn ${t==="news"?"active":""}`,onClick:()=>c("news"),children:[_.jsx(T1,{size:14})," ",_.jsx("span",{children:"News"})]}),_.jsxs("button",{className:`nav-tab-btn ${t==="globe"?"active":""}`,onClick:()=>c("globe"),children:[_.jsx(sc,{size:14})," ",_.jsx("span",{children:"3D Orbit"})]}),_.jsxs("button",{className:`nav-tab-btn ${t==="simulator"?"active":""}`,onClick:()=>c("simulator"),children:[_.jsx(Cc,{size:14})," ",_.jsx("span",{children:"Simulator"})]}),_.jsxs("button",{className:`nav-tab-btn ${t==="launches"?"active":""}`,onClick:()=>c("launches"),children:[_.jsx(Nv,{size:14})," ",_.jsx("span",{children:"Manifest"})]}),_.jsxs("button",{className:`nav-tab-btn ${t==="starlink"?"active":""}`,onClick:()=>c("starlink"),children:[_.jsx(Rv,{size:14})," ",_.jsx("span",{children:"Starlink"})]}),_.jsxs("button",{className:`nav-tab-btn ${t==="rockets"?"active":""}`,onClick:()=>c("rockets"),children:[_.jsx(Iv,{size:14})," ",_.jsx("span",{children:"Fleet"})]}),_.jsxs("button",{className:`nav-tab-btn ${t==="future"?"active":""}`,onClick:()=>c("future"),style:{border:t==="future"?"1px solid #ffd700":"1px solid rgba(255, 215, 0, 0.35)",color:t==="future"?"#000000":"#ffd700",background:t==="future"?"#ffd700":"rgba(255, 215, 0, 0.05)"},children:[_.jsx(Ef,{size:14,color:t==="future"?"#000000":"#ffd700"})," ",_.jsx("span",{children:"Roadmap"})]})]}),_.jsxs("div",{className:"header-actions",children:[_.jsxs("div",{className:"telemetry-clock",children:[_.jsx("span",{className:"pulse-dot"}),_.jsx("span",{children:s||"UTC 00:00:00"})]}),_.jsx("button",{className:"btn-icon",onClick:r,title:"Refresh Telemetry Data",children:_.jsx(Sf,{size:15})}),_.jsx("button",{className:"btn-icon",onClick:()=>l(!o),title:o?"Mute Telemetry Sound":"Enable Telemetry Sound",children:o?_.jsx(V1,{size:15,color:"#00f0ff"}):_.jsx(j1,{size:15})})]})]})}function q1({onNavigate:t,totalSatellites:e,nextLaunch:n}){return _.jsx("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"100vh",background:"#000000",color:"#ffffff",zIndex:10,WebkitOverflowScrolling:"touch",display:"flex",flexDirection:"column"},children:_.jsxs("div",{style:{position:"relative",width:"100%",flex:1,minHeight:"100vh",backgroundColor:"#000000",backgroundImage:"linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.55) 60%, #000000 100%), url('/assets/starship_mars_hero.jpg')",backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat",display:"flex",flexDirection:"column",justify:"center",padding:"80px 6%",boxSizing:"border-box"},children:[_.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(5, 5, 8, 0.85)",backdropFilter:"blur(16px)",border:"1px solid rgba(255, 255, 255, 0.2)",padding:"6px 14px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"var(--font-mono)",letterSpacing:"2px",color:"#00f0ff",width:"fit-content",marginBottom:"20px"},children:[_.jsx("span",{className:"pulse-dot"})," SPACEX ORBITAL TELEMETRY HUB // MULTIPLANETARY MISSION ARCHITECTURE"]}),_.jsx("h1",{style:{fontFamily:"var(--font-heading)",fontSize:"clamp(2.4rem, 6vw, 5.2rem)",fontWeight:"900",letterSpacing:"2px",textTransform:"uppercase",lineHeight:"1.05",margin:"0 0 20px 0",maxWidth:"960px",color:"#ffffff",textShadow:"0 10px 30px rgba(0,0,0,0.95)"},children:"MAKING HUMANITY MULTIPLANETARY."}),_.jsx("p",{style:{fontSize:"clamp(1.0rem, 1.6vw, 1.25rem)",color:"#cbd5e1",maxWidth:"760px",lineHeight:"1.6",marginBottom:"36px",fontWeight:"300",textShadow:"0 4px 12px rgba(0,0,0,0.9)"},children:"Real-time SGP4 orbital tracking of 6,800+ Earth satellites, mission-synced Falcon 9 & Starship 3D launch telemetry, and SpaceX deep space Mars colonization roadmaps."}),_.jsxs("div",{style:{display:"flex",gap:"14px",flexWrap:"wrap",alignItems:"center"},children:[_.jsxs("button",{className:"btn-primary",style:{padding:"16px 28px",fontSize:"0.92rem",letterSpacing:"1px",textTransform:"uppercase",fontWeight:"700",borderRadius:"4px",display:"inline-flex",alignItems:"center",justify:"center",gap:"10px"},onClick:()=>t("globe"),children:[_.jsx(sc,{size:18})," LAUNCH 3D ORBIT TRACKER"]}),_.jsxs("button",{className:"btn-secondary",style:{padding:"16px 28px",fontSize:"0.92rem",letterSpacing:"1px",textTransform:"uppercase",fontWeight:"700",borderRadius:"4px",display:"inline-flex",alignItems:"center",justify:"center",gap:"10px"},onClick:()=>t("simulator"),children:[_.jsx(Cc,{size:18})," SIMULATE STARSHIP FLIGHT"]}),_.jsxs("button",{className:"btn-secondary",style:{padding:"16px 28px",fontSize:"0.92rem",letterSpacing:"1px",textTransform:"uppercase",fontWeight:"700",borderRadius:"4px",borderColor:"rgba(255, 215, 0, 0.45)",color:"#ffd700",display:"inline-flex",alignItems:"center",justify:"center",gap:"10px"},onClick:()=>t("future"),children:[_.jsx(Ef,{size:18,color:"#ffd700"})," EXPLORE MARS ROADMAP"]})]})]})})}const K1="https://api.spaceflightnewsapi.net/v4/articles",nm=[{id:101,title:"SpaceX Prepares Starship Flight Test 6 for Orbital Fuel Transfer Test at Starbase",summary:"SpaceX engineers at Boca Chica have completed full-duration static fire tests on Super Heavy Booster 13 and Starship 31, paving the way for the next orbital launch attempt.",url:"https://x.com/SpaceX",news_site:"SpaceX Direct",published_at:new Date(Date.now()-2*3600*1e3).toISOString(),image_url:"/assets/starship_mars_hero.jpg",featured:!0},{id:102,title:"Starlink Direct-to-Cell Constellation Passes 200 Satellites in Orbit",summary:"SpaceX has successfully deployed over 200 eNodeB Direct-to-Cell satellites, offering unmodified LTE cellular phone coverage in global dead zones in partnership with T-Mobile.",url:"https://www.spacex.com/launches",news_site:"Spaceflight Now",published_at:new Date(Date.now()-5*3600*1e3).toISOString(),image_url:"/assets/starlink_patch.jpg",featured:!1},{id:103,title:"NASA Artemis III Lunar Landing System Hardware Tests Enter Final Phase",summary:"NASA astronauts completed vacuum chamber testing of the Starship HLS crew elevator and docking mechanism at Marshall Space Flight Center.",url:"https://www.spacex.com/launches",news_site:"NASA Spaceflight",published_at:new Date(Date.now()-14*3600*1e3).toISOString(),image_url:"/assets/falcon_heavy_patch.jpg",featured:!1},{id:104,title:"Falcon Heavy Deploys Next-Gen US Space Force Geostationary Payload",summary:"A SpaceX Falcon Heavy rocket executed a triple-booster ignition from LC-39A at Kennedy Space Center, placing classified defense satellites into direct GEO orbit.",url:"https://x.com/SpaceX",news_site:"Space News",published_at:new Date(Date.now()-28*3600*1e3).toISOString(),image_url:"/assets/falcon_heavy_patch.jpg",featured:!1}],Z1={async getLatestSpaceNews(t=15){try{const e=new AbortController,n=setTimeout(()=>e.abort(),3500),i=await fetch(`${K1}/?limit=${t}&ordering=-published_at`,{signal:e.signal});if(clearTimeout(n),!i.ok)throw new Error(`HTTP ${i.status}`);const r=await i.json();return r&&r.results&&r.results.length>0?r.results.map(s=>({id:s.id,title:s.title,summary:s.summary,url:s.url,news_site:s.news_site||"Space News",published_at:s.published_at,image_url:s.image_url||"/assets/starship_mars_hero.jpg"})):nm}catch(e){return console.warn("Using fallback space news feed:",e),nm}}};function Q1(){const[t,e]=Le.useState([]),[n,i]=Le.useState(!0),[r,s]=Le.useState(""),[a,o]=Le.useState("all"),l=async()=>{i(!0);const h=await Z1.getLatestSpaceNews(20);e(h),i(!1)};Le.useEffect(()=>{l()},[]);const c=t.filter(h=>h.title.toLowerCase().includes(r.toLowerCase())||h.summary.toLowerCase().includes(r.toLowerCase())||h.news_site.toLowerCase().includes(r.toLowerCase())?a==="spacex"?h.title.toLowerCase().includes("spacex")||h.title.toLowerCase().includes("starship")||h.title.toLowerCase().includes("falcon"):a==="starlink"?h.title.toLowerCase().includes("starlink"):a==="nasa"?h.title.toLowerCase().includes("nasa")||h.title.toLowerCase().includes("artemis")||h.title.toLowerCase().includes("moon"):!0:!1),d=c[0]||t[0],f=c.length>1?c.slice(1):c;return _.jsxs("div",{className:"launches-view-container",children:[_.jsxs("div",{className:"section-header",children:[_.jsxs("div",{children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontFamily:"monospace",fontSize:"0.8rem",fontWeight:"bold",marginBottom:"4px"},children:[_.jsx("span",{className:"pulse-dot"})," LIVE TELEMETRY NEWS FEED"]}),_.jsx("h2",{className:"section-title",children:"Space & Launch Operations News"}),_.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem",marginTop:"4px"},children:"Real-time breaking spaceflight news, Starship updates, satellite launches & astronomy discoveries"})]}),_.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[_.jsxs("div",{className:"search-input-wrapper",style:{minWidth:"260px"},children:[_.jsx(Mf,{size:16,className:"search-icon"}),_.jsx("input",{type:"text",placeholder:"Search Space News...",value:r,onChange:h=>s(h.target.value)})]}),_.jsx("button",{className:"btn-secondary",onClick:l,title:"Refresh News Feed",children:_.jsx(Sf,{size:15})})]})]}),_.jsxs("div",{className:"filter-pill-container",style:{marginBottom:"24px"},children:[_.jsx("button",{className:`filter-pill ${a==="all"?"active":""}`,onClick:()=>o("all"),children:"All Space News"}),_.jsx("button",{className:`filter-pill ${a==="spacex"?"active":""}`,onClick:()=>o("spacex"),children:"SpaceX & Starship"}),_.jsx("button",{className:`filter-pill ${a==="starlink"?"active":""}`,onClick:()=>o("starlink"),children:"Starlink & Comms"}),_.jsx("button",{className:`filter-pill ${a==="nasa"?"active":""}`,onClick:()=>o("nasa"),children:"NASA & Artemis"})]}),n?_.jsxs("div",{style:{padding:"60px",textAlign:"center",color:"#00f0ff",fontFamily:"monospace"},children:[_.jsx("div",{className:"pulse-dot",style:{margin:"0 auto 16px auto",width:"14px",height:"14px"}}),"ACQUIRING LIVE SPACEFLIGHT NEWS FEED..."]}):_.jsxs(_.Fragment,{children:[d&&_.jsx("div",{className:"glass-panel",style:{padding:"24px",marginBottom:"28px",borderLeft:"4px solid #00f0ff"},children:_.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px",alignItems:"center"},children:[_.jsx("img",{src:d.image_url,alt:d.title,style:{width:"100%",height:"240px",objectFit:"cover",borderRadius:"4px",border:"1px solid rgba(255,255,255,0.1)"},onError:h=>{h.target.src="/assets/starship_mars_hero.jpg"}}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[_.jsxs("span",{className:"brand-badge",style:{background:"rgba(0,240,255,0.15)",color:"#00f0ff"},children:["FEATURED STORY // ",d.news_site]}),_.jsxs("span",{style:{fontSize:"0.78rem",color:"#94a3b8",fontFamily:"monospace",display:"flex",alignItems:"center",gap:"4px"},children:[_.jsx(h1,{size:13})," ",new Date(d.published_at).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]}),_.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:"800",lineHeight:"1.3"},children:d.title}),_.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.92rem",lineHeight:"1.5"},children:d.summary}),_.jsxs("a",{href:d.url,target:"_blank",rel:"noreferrer",className:"btn-primary",style:{textDecoration:"none",width:"fit-content",marginTop:"8px"},children:["Read Full Story ",_.jsx(tm,{size:15})]})]})]})}),_.jsx("div",{className:"launches-grid",children:f.map(h=>_.jsxs("div",{className:"glass-panel launch-card",style:{padding:"20px"},children:[_.jsxs("div",{children:[_.jsx("img",{src:h.image_url,alt:h.title,style:{width:"100%",height:"160px",objectFit:"cover",borderRadius:"4px",marginBottom:"14px",border:"1px solid rgba(255,255,255,0.08)"},onError:p=>{p.target.src="/assets/starship_patch.jpg"}}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"8px"},children:[_.jsx("span",{style:{fontSize:"0.72rem",color:"#00f0ff",fontFamily:"monospace",fontWeight:"bold"},children:h.news_site}),_.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8",fontFamily:"monospace"},children:new Date(h.published_at).toLocaleDateString([],{month:"short",day:"numeric"})})]}),_.jsx("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.1rem",fontWeight:"700",lineHeight:"1.35",marginBottom:"8px"},children:h.title}),_.jsx("p",{style:{fontSize:"0.84rem",color:"#94a3b8",lineHeight:"1.45",display:"-webkit-box",WebkitLineClamp:"3",WebkitBoxOrient:"vertical",overflow:"hidden"},children:h.summary})]}),_.jsx("div",{style:{paddingTop:"14px",marginTop:"14px",borderTop:"1px solid rgba(255,255,255,0.08)",display:"flex",justifyContent:"flex-end"},children:_.jsxs("a",{href:h.url,target:"_blank",rel:"noreferrer",style:{color:"#00f0ff",fontSize:"0.8rem",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px",fontWeight:"600"},children:["Read Article ",_.jsx(tm,{size:13})]})})]},h.id))})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="170",Xs={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},J1=0,im=1,eS=2,Uv=1,tS=2,Fi=3,Cr=0,on=1,Ei=2,Er=0,Ys=1,Ud=2,rm=3,sm=4,nS=5,Vr=100,iS=101,rS=102,sS=103,aS=104,oS=200,lS=201,cS=202,uS=203,Fd=204,Od=205,dS=206,hS=207,fS=208,pS=209,mS=210,gS=211,vS=212,_S=213,xS=214,kd=0,zd=1,Bd=2,ia=3,Hd=4,Vd=5,Gd=6,jd=7,Tf=0,yS=1,SS=2,wr=0,MS=1,ES=2,wS=3,TS=4,AS=5,CS=6,bS=7,Fv=300,ra=301,sa=302,Wd=303,Xd=304,bc=306,Yd=1e3,Yr=1001,$d=1002,di=1003,RS=1004,Go=1005,wi=1006,ru=1007,$r=1008,Ki=1009,Ov=1010,kv=1011,ho=1012,Af=1013,ss=1014,Hi=1015,yo=1016,Cf=1017,bf=1018,aa=1020,zv=35902,Bv=1021,Hv=1022,li=1023,Vv=1024,Gv=1025,$s=1026,oa=1027,jv=1028,Rf=1029,Wv=1030,Pf=1031,Lf=1033,bl=33776,Rl=33777,Pl=33778,Ll=33779,qd=35840,Kd=35841,Zd=35842,Qd=35843,Jd=36196,eh=37492,th=37496,nh=37808,ih=37809,rh=37810,sh=37811,ah=37812,oh=37813,lh=37814,ch=37815,uh=37816,dh=37817,hh=37818,fh=37819,ph=37820,mh=37821,Nl=36492,gh=36494,vh=36495,Xv=36283,_h=36284,xh=36285,yh=36286,PS=3200,LS=3201,Nf=0,NS=1,dr="",Gn="srgb",fa="srgb-linear",Rc="linear",pt="srgb",hs=7680,am=519,IS=512,DS=513,US=514,Yv=515,FS=516,OS=517,kS=518,zS=519,om=35044,lm="300 es",Vi=2e3,ac=2001;class us{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Il=Math.PI/180,oc=180/Math.PI;function So(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(rn[t&255]+rn[t>>8&255]+rn[t>>16&255]+rn[t>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[n&63|128]+rn[n>>8&255]+"-"+rn[n>>16&255]+rn[n>>24&255]+rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]).toLowerCase()}function $t(t,e,n){return Math.max(e,Math.min(n,t))}function BS(t,e){return(t%e+e)%e}function su(t,e,n){return(1-n)*t+n*e}function wa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Mn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const HS={DEG2RAD:Il};class $e{constructor(e=0,n=0){$e.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,s,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],f=i[7],h=i[2],p=i[5],v=i[8],y=r[0],m=r[3],u=r[6],g=r[1],x=r[4],S=r[7],I=r[2],A=r[5],C=r[8];return s[0]=a*y+o*g+l*I,s[3]=a*m+o*x+l*A,s[6]=a*u+o*S+l*C,s[1]=c*y+d*g+f*I,s[4]=c*m+d*x+f*A,s[7]=c*u+d*S+f*C,s[2]=h*y+p*g+v*I,s[5]=h*m+p*x+v*A,s[8]=h*u+p*S+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*s,p=c*s-a*l,v=n*f+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=f*y,e[1]=(r*c-d*i)*y,e[2]=(o*i-r*a)*y,e[3]=h*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-o*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(au.makeScale(e,n)),this}rotate(e){return this.premultiply(au.makeRotation(-e)),this}translate(e,n){return this.premultiply(au.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const au=new Ke;function $v(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VS(){const t=fo("canvas");return t.style.display="block",t}const cm={};function Ua(t){t in cm||(cm[t]=!0,console.warn(t))}function GS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function jS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function WS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ot={enabled:!0,workingColorSpace:fa,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===pt&&(t.r=Wi(t.r),t.g=Wi(t.g),t.b=Wi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===pt&&(t.r=qs(t.r),t.g=qs(t.g),t.b=qs(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===dr?Rc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const um=[.64,.33,.3,.6,.15,.06],dm=[.2126,.7152,.0722],hm=[.3127,.329],fm=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pm=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot.define({[fa]:{primaries:um,whitePoint:hm,transfer:Rc,toXYZ:fm,fromXYZ:pm,luminanceCoefficients:dm,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:um,whitePoint:hm,transfer:pt,toXYZ:fm,fromXYZ:pm,luminanceCoefficients:dm,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}});let fs;class XS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=fo("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Wi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Wi(n[i]/255)*255):n[i]=Wi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YS=0;class qv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ou(r[a].image)):s.push(ou(r[a]))}else s=ou(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ou(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $S=0;class ln extends us{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Yr,r=Yr,s=wi,a=$r,o=li,l=Ki,c=ln.DEFAULT_ANISOTROPY,d=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=So(),this.name="",this.source=new qv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yd:e.x=e.x-Math.floor(e.x);break;case Yr:e.x=e.x<0?0:1;break;case $d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yd:e.y=e.y-Math.floor(e.y);break;case Yr:e.y=e.y<0?0:1;break;case $d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Fv;ln.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],v=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+y)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,I=(u+1)/2,A=(d+h)/4,C=(f+y)/4,L=(v+m)/4;return x>S&&x>I?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=C/i):S>I?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=L/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-v)*(m-v)+(f-y)*(f-y)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(f-y)/g,this.z=(h-d)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qS extends us{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class as extends qS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Kv extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class KS extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=di,this.minFilter=di,this.wrapR=Yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],v=s[a+2],y=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(f!==y||l!==h||c!==p||d!==v){let m=1-o;const u=l*h+c*p+d*v+f*y,g=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const I=Math.sqrt(x),A=Math.atan2(I,u*g);m=Math.sin(m*A)/I,o=Math.sin(o*A)/I}const S=o*g;if(l=l*m+h*S,c=c*m+p*S,d=d*m+v*S,f=f*m+y*S,m===1-o){const I=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=I,c*=I,d*=I,f*=I}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[a],h=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+d*f+l*p-c*h,e[n+1]=l*v+d*h+c*f-o*p,e[n+2]=c*v+d*p+o*h-l*f,e[n+3]=d*v-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*d*f+c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f-h*p*v;break;case"YXZ":this._x=h*d*f+c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f+h*p*v;break;case"ZXY":this._x=h*d*f-c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f-h*p*v;break;case"ZYX":this._x=h*d*f-c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f+h*p*v;break;case"YZX":this._x=h*d*f+c*p*v,this._y=c*p*f+h*d*v,this._z=c*d*v-h*p*f,this._w=c*d*f-h*p*v;break;case"XZY":this._x=h*d*f-c*p*v,this._y=c*p*f-h*d*v,this._z=c*d*v+h*p*f,this._w=c*d*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,n=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*d,this.y=i+l*d+o*c-s*f,this.z=r+l*f+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lu.copy(this).projectOnVector(e),this.sub(lu)}reflect(e){return this.sub(lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lu=new B,mm=new os;class Mo{constructor(e=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jo.copy(i.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),Wo.subVectors(this.max,Ta),ps.subVectors(e.a,Ta),ms.subVectors(e.b,Ta),gs.subVectors(e.c,Ta),er.subVectors(ms,ps),tr.subVectors(gs,ms),Ir.subVectors(ps,gs);let n=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Ir.z,Ir.y,er.z,0,-er.x,tr.z,0,-tr.x,Ir.z,0,-Ir.x,-er.y,er.x,0,-tr.y,tr.x,0,-Ir.y,Ir.x,0];return!cu(n,ps,ms,gs,Wo)||(n=[1,0,0,0,1,0,0,0,1],!cu(n,ps,ms,gs,Wo))?!1:(Xo.crossVectors(er,tr),n=[Xo.x,Xo.y,Xo.z],cu(n,ps,ms,gs,Wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new B,new B,new B,new B,new B,new B,new B,new B],ei=new B,jo=new Mo,ps=new B,ms=new B,gs=new B,er=new B,tr=new B,Ir=new B,Ta=new B,Wo=new B,Xo=new B,Dr=new B;function cu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Dr.fromArray(t,s);const o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=n.dot(Dr),d=i.dot(Dr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const ZS=new Mo,Aa=new B,uu=new B;class Eo{constructor(e=new B,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Aa.subVectors(e,this.center);const n=Aa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Aa.copy(e.center).add(uu)),this.expandByPoint(Aa.copy(e.center).sub(uu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new B,du=new B,Yo=new B,nr=new B,hu=new B,$o=new B,fu=new B;class wo{constructor(e=new B,n=new B(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){du.copy(e).add(n).multiplyScalar(.5),Yo.copy(n).sub(e).normalize(),nr.copy(this.origin).sub(du);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Yo),o=nr.dot(this.direction),l=-nr.dot(Yo),c=nr.lengthSq(),d=Math.abs(1-a*a);let f,h,p,v;if(d>0)if(f=a*l-o,h=a*o-l,v=s*d,f>=0)if(h>=-v)if(h<=v){const y=1/d;f*=y,h*=y,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(du).addScaledVector(Yo,h),p}intersectSphere(e,n){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){hu.subVectors(n,e),$o.subVectors(i,e),fu.crossVectors(hu,$o);let a=this.direction.dot(fu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;nr.subVectors(this.origin,e);const l=o*this.direction.dot($o.crossVectors(nr,$o));if(l<0)return null;const c=o*this.direction.dot(hu.cross(nr));if(c<0||l+c>a)return null;const d=-o*nr.dot(fu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,a,o,l,c,d,f,h,p,v,y,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,f,h,p,v,y,m)}set(e,n,i,r,s,a,o,l,c,d,f,h,p,v,y,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=v,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*d,p=a*f,v=o*d,y=o*f;n[0]=l*d,n[4]=-l*f,n[8]=c,n[1]=p+v*c,n[5]=h-y*c,n[9]=-o*l,n[2]=y-h*c,n[6]=v+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,v=c*d,y=c*f;n[0]=h+y*o,n[4]=v*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*d,n[9]=-o,n[2]=p*o-v,n[6]=y+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,v=c*d,y=c*f;n[0]=h-y*o,n[4]=-a*f,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*d,n[9]=y-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*d,p=a*f,v=o*d,y=o*f;n[0]=l*d,n[4]=v*c-p,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=p*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,v=o*l,y=o*c;n[0]=l*d,n[4]=y-h*f,n[8]=v*f+p,n[1]=f,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=p*f+v,n[10]=h-y*f}else if(e.order==="XZY"){const h=a*l,p=a*c,v=o*l,y=o*c;n[0]=l*d,n[4]=-f,n[8]=c*d,n[1]=h*f+y,n[5]=a*d,n[9]=p*f-v,n[2]=v*f-p,n[6]=o*d,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,JS)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ir.crossVectors(i,Pn),ir.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ir.crossVectors(i,Pn)),ir.normalize(),qo.crossVectors(Pn,ir),r[0]=ir.x,r[4]=qo.x,r[8]=Pn.x,r[1]=ir.y,r[5]=qo.y,r[9]=Pn.y,r[2]=ir.z,r[6]=qo.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],f=i[5],h=i[9],p=i[13],v=i[2],y=i[6],m=i[10],u=i[14],g=i[3],x=i[7],S=i[11],I=i[15],A=r[0],C=r[4],L=r[8],w=r[12],M=r[1],D=r[5],F=r[9],k=r[13],Y=r[2],J=r[6],W=r[10],ie=r[14],N=r[3],q=r[7],P=r[11],b=r[15];return s[0]=a*A+o*M+l*Y+c*N,s[4]=a*C+o*D+l*J+c*q,s[8]=a*L+o*F+l*W+c*P,s[12]=a*w+o*k+l*ie+c*b,s[1]=d*A+f*M+h*Y+p*N,s[5]=d*C+f*D+h*J+p*q,s[9]=d*L+f*F+h*W+p*P,s[13]=d*w+f*k+h*ie+p*b,s[2]=v*A+y*M+m*Y+u*N,s[6]=v*C+y*D+m*J+u*q,s[10]=v*L+y*F+m*W+u*P,s[14]=v*w+y*k+m*ie+u*b,s[3]=g*A+x*M+S*Y+I*N,s[7]=g*C+x*D+S*J+I*q,s[11]=g*L+x*F+S*W+I*P,s[15]=g*w+x*k+S*ie+I*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],v=e[3],y=e[7],m=e[11],u=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+y*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*d-s*l*d)+m*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*d-i*c*d)+u*(-r*o*d-n*l*f+n*o*h+r*a*f-i*a*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],v=e[12],y=e[13],m=e[14],u=e[15],g=f*m*c-y*h*c+y*l*p-o*m*p-f*l*u+o*h*u,x=v*h*c-d*m*c-v*l*p+a*m*p+d*l*u-a*h*u,S=d*y*c-v*f*c+v*o*p-a*y*p-d*o*u+a*f*u,I=v*f*l-d*y*l-v*o*h+a*y*h+d*o*m-a*f*m,A=n*g+i*x+r*S+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=g*C,e[1]=(y*h*s-f*m*s-y*r*p+i*m*p+f*r*u-i*h*u)*C,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*u+i*l*u)*C,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*C,e[4]=x*C,e[5]=(d*m*s-v*h*s+v*r*p-n*m*p-d*r*u+n*h*u)*C,e[6]=(v*l*s-a*m*s-v*r*c+n*m*c+a*r*u-n*l*u)*C,e[7]=(a*h*s-d*l*s+d*r*c-n*h*c-a*r*p+n*l*p)*C,e[8]=S*C,e[9]=(v*f*s-d*y*s-v*i*p+n*y*p+d*i*u-n*f*u)*C,e[10]=(a*y*s-v*o*s+v*i*c-n*y*c-a*i*u+n*o*u)*C,e[11]=(d*o*s-a*f*s-d*i*c+n*f*c+a*i*p-n*o*p)*C,e[12]=I*C,e[13]=(d*y*r-v*f*r+v*i*h-n*y*h-d*i*m+n*f*m)*C,e[14]=(v*o*r-a*y*r-v*i*l+n*y*l+a*i*m-n*o*m)*C,e[15]=(a*f*r-d*o*r+d*i*l-n*f*l-a*i*h+n*o*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,f=o+o,h=s*c,p=s*d,v=s*f,y=a*d,m=a*f,u=o*f,g=l*c,x=l*d,S=l*f,I=i.x,A=i.y,C=i.z;return r[0]=(1-(y+u))*I,r[1]=(p+S)*I,r[2]=(v-x)*I,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+u))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+x)*C,r[9]=(m-g)*C,r[10]=(1-(h+y))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const a=vs.set(r[4],r[5],r[6]).length(),o=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);const c=1/s,d=1/a,f=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=d,ti.elements[5]*=d,ti.elements[6]*=d,ti.elements[8]*=f,ti.elements[9]*=f,ti.elements[10]*=f,n.setFromRotationMatrix(ti),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Vi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(o===Vi)p=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ac)p=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Vi){const l=this.elements,c=1/(n-e),d=1/(i-r),f=1/(a-s),h=(n+e)*c,p=(i+r)*d;let v,y;if(o===Vi)v=(a+s)*f,y=-2*f;else if(o===ac)v=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vs=new B,ti=new vt,QS=new B(0,0,0),JS=new B(1,1,1),ir=new B,qo=new B,Pn=new B,gm=new vt,vm=new os;class fi{constructor(e=0,n=0,i=0,r=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vm.setFromEuler(this),this.setFromQuaternion(vm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class If{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const _m=new B,_s=new os,Pi=new vt,Ko=new B,Ca=new B,tM=new B,nM=new os,xm=new B(1,0,0),ym=new B(0,1,0),Sm=new B(0,0,1),Mm={type:"added"},iM={type:"removed"},xs={type:"childadded",child:null},pu={type:"childremoved",child:null};class Dt extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new B,n=new fi,i=new os,r=new B(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ke}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new If,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,n){return _s.setFromAxisAngle(e,n),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(xm,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(Sm,e)}translateOnAxis(e,n){return _m.copy(e).applyQuaternion(this.quaternion),this.position.add(_m.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xm,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(Sm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ko.copy(e):Ko.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ca,Ko,this.up):Pi.lookAt(Ko,Ca,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),_s.setFromRotationMatrix(Pi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mm),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(iM),pu.child=e,this.dispatchEvent(pu),pu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mm),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ca,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new B,Li=new B,mu=new B,Ni=new B,ys=new B,Ss=new B,Em=new B,gu=new B,vu=new B,_u=new B,xu=new Rt,yu=new Rt,Su=new Rt;class oi{constructor(e=new B,n=new B,i=new B){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ni.subVectors(e,n),r.cross(ni);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ni.subVectors(r,n),Li.subVectors(i,n),mu.subVectors(e,n);const a=ni.dot(ni),o=ni.dot(Li),l=ni.dot(mu),c=Li.dot(Li),d=Li.dot(mu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*d)*h,v=(a*d-o*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return xu.setScalar(0),yu.setScalar(0),Su.setScalar(0),xu.fromBufferAttribute(e,n),yu.fromBufferAttribute(e,i),Su.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(xu,s.x),a.addScaledVector(yu,s.y),a.addScaledVector(Su,s.z),a}static isFrontFacing(e,n,i,r){return ni.subVectors(i,n),Li.subVectors(e,n),ni.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ni.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return oi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return oi.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ys.subVectors(r,i),Ss.subVectors(s,i),gu.subVectors(e,i);const l=ys.dot(gu),c=Ss.dot(gu);if(l<=0&&c<=0)return n.copy(i);vu.subVectors(e,r);const d=ys.dot(vu),f=Ss.dot(vu);if(d>=0&&f<=d)return n.copy(r);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(ys,a);_u.subVectors(e,s);const p=ys.dot(_u),v=Ss.dot(_u);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(Ss,o);const m=d*v-p*f;if(m<=0&&f-d>=0&&p-v>=0)return Em.subVectors(s,r),o=(f-d)/(f-d+(p-v)),n.copy(r).addScaledVector(Em,o);const u=1/(m+y+h);return a=y*u,o=h*u,n.copy(i).addScaledVector(ys,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=BS(e,1),n=$t(n,0,1),i=$t(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Mu(a,s,e+1/3),this.g=Mu(a,s,e),this.b=Mu(a,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Gn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gn){const i=Zv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return ot.fromWorkingColorSpace(sn.copy(this),e),Math.round($t(sn.r*255,0,255))*65536+Math.round($t(sn.g*255,0,255))*256+Math.round($t(sn.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(sn.copy(this),n);const i=sn.r,r=sn.g,s=sn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(sn.copy(this),n),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Gn){ot.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b;return e!==Gn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+n,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(rr),e.getHSL(Zo);const i=su(rr.h,Zo.h,n),r=su(rr.s,Zo.s,n),s=su(rr.l,Zo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Qe;Qe.NAMES=Zv;let rM=0;class Lr extends us{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=So(),this.name="",this.blending=Ys,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fd,this.blendDst=Od,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fd&&(i.blendSrc=this.blendSrc),this.blendDst!==Od&&(i.blendDst=this.blendDst),this.blendEquation!==Vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==am&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class la extends Lr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new B,Qo=new $e;class Ci{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=om,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qo.fromBufferAttribute(this,n),Qo.applyMatrix3(e),this.setXY(n,Qo.x,Qo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=wa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Mn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),i=Mn(i,this.array),r=Mn(r,this.array),s=Mn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==om&&(e.usage=this.usage),e}}class Qv extends Ci{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jv extends Ci{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Xt extends Ci{constructor(e,n,i){super(new Float32Array(e),n,i)}}let sM=0;const Vn=new vt,Eu=new Dt,Ms=new B,Ln=new Mo,ba=new Mo,Gt=new B;class vn extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($v(e)?Jv:Qv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Eu.lookAt(e),Eu.updateMatrix(),this.applyMatrix4(Eu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(Ln.min,ba.min),Ln.expandByPoint(Gt),Gt.addVectors(Ln.max,ba.max),Ln.expandByPoint(Gt)):(Ln.expandByPoint(ba.min),Ln.expandByPoint(ba.max))}Ln.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Gt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),Gt.add(Ms)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new B,l[L]=new B;const c=new B,d=new B,f=new B,h=new $e,p=new $e,v=new $e,y=new B,m=new B;function u(L,w,M){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,w),v.fromBufferAttribute(s,M),d.sub(c),f.sub(c),p.sub(h),v.sub(h);const D=1/(p.x*v.y-v.x*p.y);isFinite(D)&&(y.copy(d).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(D),o[L].add(y),o[w].add(y),o[M].add(y),l[L].add(m),l[w].add(m),l[M].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,w=g.length;L<w;++L){const M=g[L],D=M.start,F=M.count;for(let k=D,Y=D+F;k<Y;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new B,S=new B,I=new B,A=new B;function C(L){I.fromBufferAttribute(r,L),A.copy(I);const w=o[L];x.copy(w),x.sub(I.multiplyScalar(I.dot(w))).normalize(),S.crossVectors(A,w);const D=S.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,D)}for(let L=0,w=g.length;L<w;++L){const M=g[L],D=M.start,F=M.count;for(let k=D,Y=D+F;k<Y;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ci(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,d=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,m),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(d),l.add(d),c.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),d.subVectors(a,s),f.subVectors(r,s),d.cross(f),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*d;for(let u=0;u<d;u++)h[v++]=c[p++]}return new Ci(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wm=new vt,Ur=new wo,Jo=new Eo,Tm=new B,el=new B,tl=new B,nl=new B,wu=new B,il=new B,Am=new B,rl=new B;class ct extends Dt{constructor(e=new vn,n=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],f=s[l];d!==0&&(wu.fromBufferAttribute(f,e),a?il.addScaledVector(wu,d):il.addScaledVector(wu.sub(n),d))}n.add(il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(Jo.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Jo,Tm)===null||Ur.origin.distanceToSquared(Tm)>(e.far-e.near)**2))&&(wm.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(wm),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){const m=h[v],u=a[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,I=x;S<I;S+=3){const A=o.getX(S),C=o.getX(S+1),L=o.getX(S+2);r=sl(this,u,e,i,c,d,f,A,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=v,u=y;m<u;m+=3){const g=o.getX(m),x=o.getX(m+1),S=o.getX(m+2);r=sl(this,a,e,i,c,d,f,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,y=h.length;v<y;v++){const m=h[v],u=a[m.materialIndex],g=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,I=x;S<I;S+=3){const A=S,C=S+1,L=S+2;r=sl(this,u,e,i,c,d,f,A,C,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,u=y;m<u;m+=3){const g=m,x=m+1,S=m+2;r=sl(this,a,e,i,c,d,f,g,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aM(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Cr,o),l===null)return null;rl.copy(o),rl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(rl);return c<n.near||c>n.far?null:{distance:c,point:rl.clone(),object:t}}function sl(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,el),t.getVertexPosition(l,tl),t.getVertexPosition(c,nl);const d=aM(t,e,n,i,el,tl,nl,Am);if(d){const f=new B;oi.getBarycoord(Am,el,tl,nl,f),r&&(d.uv=oi.getInterpolatedAttribute(r,o,l,c,f,new $e)),s&&(d.uv1=oi.getInterpolatedAttribute(s,o,l,c,f,new $e)),a&&(d.normal=oi.getInterpolatedAttribute(a,o,l,c,f,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};oi.getNormal(el,tl,nl,h.normal),d.face=h,d.barycoord=f}return d}class ai extends vn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function v(y,m,u,g,x,S,I,A,C,L,w){const M=S/C,D=I/L,F=S/2,k=I/2,Y=A/2,J=C+1,W=L+1;let ie=0,N=0;const q=new B;for(let P=0;P<W;P++){const b=P*D-k;for(let Q=0;Q<J;Q++){const ce=Q*M-F;q[y]=ce*g,q[m]=b*x,q[u]=Y,c.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[u]=A>0?1:-1,d.push(q.x,q.y,q.z),f.push(Q/C),f.push(1-P/L),ie+=1}}for(let P=0;P<L;P++)for(let b=0;b<C;b++){const Q=h+b+J*P,ce=h+b+J*(P+1),V=h+(b+1)+J*(P+1),H=h+(b+1)+J*P;l.push(Q,ce,H),l.push(ce,V,H),N+=6}o.addGroup(p,N,w),p+=N,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ca(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=ca(t[n]);for(const r in i)e[r]=i[r]}return e}function oM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function e_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const lM={clone:ca,merge:pn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Lr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ca(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class t_ extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new B,Cm=new $e,bm=new $e;class Tn extends t_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=oc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oc*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,Cm,bm),n.subVectors(bm,Cm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Il*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Es=-90,ws=1;class dM extends Dt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Es,ws,e,n);r.layers=this.layers,this.add(r);const s=new Tn(Es,ws,e,n);s.layers=this.layers,this.add(s);const a=new Tn(Es,ws,e,n);a.layers=this.layers,this.add(a);const o=new Tn(Es,ws,e,n);o.layers=this.layers,this.add(o);const l=new Tn(Es,ws,e,n);l.layers=this.layers,this.add(l);const c=new Tn(Es,ws,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(f,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class n_ extends ln{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:ra,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends as{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new n_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:wi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ai(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:ca(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Er});s.uniforms.tEquirect.value=n;const a=new ct(r,s),o=n.minFilter;return n.minFilter===$r&&(n.minFilter=wi),new dM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Tu=new B,fM=new B,pM=new Ke;class lr{constructor(e=new B(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tu.subVectors(i,n).cross(fM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Tu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||pM.getNormalMatrix(e),r=this.coplanarPoint(Tu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Eo,al=new B;class Df{constructor(e=new lr,n=new lr,i=new lr,r=new lr,s=new lr,a=new lr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Vi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],f=r[6],h=r[7],p=r[8],v=r[9],y=r[10],m=r[11],u=r[12],g=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,m-p,S-u).normalize(),i[1].setComponents(l+s,h+c,m+p,S+u).normalize(),i[2].setComponents(l+a,h+d,m+v,S+g).normalize(),i[3].setComponents(l-a,h-d,m-v,S-g).normalize(),i[4].setComponents(l-o,h-f,m-y,S-x).normalize(),n===Vi)i[5].setComponents(l+o,h+f,m+y,S+x).normalize();else if(n===ac)i[5].setComponents(o,f,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(al.x=r.normal.x>0?e.max.x:e.min.x,al.y=r.normal.y>0?e.max.y:e.min.y,al.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(al)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function i_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mM(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,d),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const d=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,d);else{f.sort((p,v)=>p.start-v.start);let h=0;for(let p=1;p<f.length;p++){const v=f[h],y=f[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,v=f.length;p<v;p++){const y=f[p];t.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class Pc extends vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,f=e/o,h=n/l,p=[],v=[],y=[],m=[];for(let u=0;u<d;u++){const g=u*h-a;for(let x=0;x<c;x++){const S=x*f-s;v.push(S,-g,0),y.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const x=g+c*u,S=g+c*(u+1),I=g+1+c*(u+1),A=g+1+c*u;p.push(x,S,A),p.push(S,I,A)}this.setIndex(p),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.width,e.height,e.widthSegments,e.heightSegments)}}var gM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,SM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,EM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,TM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,AM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,RM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,OM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,BM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,HM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,VM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XM="gl_FragColor = linearToOutputTexel( gl_FragColor );",YM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$M=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,KM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ZM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,JM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,iE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,rE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ME=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,TE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,CE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,NE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,DE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,VE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,XE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,e2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,t2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,i2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,s2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,c2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,h2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,p2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,E2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,w2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,T2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,b2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,N2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,D2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,F2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,O2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,B2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,X2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Y2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:gM,alphahash_pars_fragment:vM,alphamap_fragment:_M,alphamap_pars_fragment:xM,alphatest_fragment:yM,alphatest_pars_fragment:SM,aomap_fragment:MM,aomap_pars_fragment:EM,batching_pars_vertex:wM,batching_vertex:TM,begin_vertex:AM,beginnormal_vertex:CM,bsdfs:bM,iridescence_fragment:RM,bumpmap_pars_fragment:PM,clipping_planes_fragment:LM,clipping_planes_pars_fragment:NM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:DM,color_fragment:UM,color_pars_fragment:FM,color_pars_vertex:OM,color_vertex:kM,common:zM,cube_uv_reflection_fragment:BM,defaultnormal_vertex:HM,displacementmap_pars_vertex:VM,displacementmap_vertex:GM,emissivemap_fragment:jM,emissivemap_pars_fragment:WM,colorspace_fragment:XM,colorspace_pars_fragment:YM,envmap_fragment:$M,envmap_common_pars_fragment:qM,envmap_pars_fragment:KM,envmap_pars_vertex:ZM,envmap_physical_pars_fragment:lE,envmap_vertex:QM,fog_vertex:JM,fog_pars_vertex:eE,fog_fragment:tE,fog_pars_fragment:nE,gradientmap_pars_fragment:iE,lightmap_pars_fragment:rE,lights_lambert_fragment:sE,lights_lambert_pars_fragment:aE,lights_pars_begin:oE,lights_toon_fragment:cE,lights_toon_pars_fragment:uE,lights_phong_fragment:dE,lights_phong_pars_fragment:hE,lights_physical_fragment:fE,lights_physical_pars_fragment:pE,lights_fragment_begin:mE,lights_fragment_maps:gE,lights_fragment_end:vE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:xE,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:SE,map_fragment:ME,map_pars_fragment:EE,map_particle_fragment:wE,map_particle_pars_fragment:TE,metalnessmap_fragment:AE,metalnessmap_pars_fragment:CE,morphinstance_vertex:bE,morphcolor_vertex:RE,morphnormal_vertex:PE,morphtarget_pars_vertex:LE,morphtarget_vertex:NE,normal_fragment_begin:IE,normal_fragment_maps:DE,normal_pars_fragment:UE,normal_pars_vertex:FE,normal_vertex:OE,normalmap_pars_fragment:kE,clearcoat_normal_fragment_begin:zE,clearcoat_normal_fragment_maps:BE,clearcoat_pars_fragment:HE,iridescence_pars_fragment:VE,opaque_fragment:GE,packing:jE,premultiplied_alpha_fragment:WE,project_vertex:XE,dithering_fragment:YE,dithering_pars_fragment:$E,roughnessmap_fragment:qE,roughnessmap_pars_fragment:KE,shadowmap_pars_fragment:ZE,shadowmap_pars_vertex:QE,shadowmap_vertex:JE,shadowmask_pars_fragment:e2,skinbase_vertex:t2,skinning_pars_vertex:n2,skinning_vertex:i2,skinnormal_vertex:r2,specularmap_fragment:s2,specularmap_pars_fragment:a2,tonemapping_fragment:o2,tonemapping_pars_fragment:l2,transmission_fragment:c2,transmission_pars_fragment:u2,uv_pars_fragment:d2,uv_pars_vertex:h2,uv_vertex:f2,worldpos_vertex:p2,background_vert:m2,background_frag:g2,backgroundCube_vert:v2,backgroundCube_frag:_2,cube_vert:x2,cube_frag:y2,depth_vert:S2,depth_frag:M2,distanceRGBA_vert:E2,distanceRGBA_frag:w2,equirect_vert:T2,equirect_frag:A2,linedashed_vert:C2,linedashed_frag:b2,meshbasic_vert:R2,meshbasic_frag:P2,meshlambert_vert:L2,meshlambert_frag:N2,meshmatcap_vert:I2,meshmatcap_frag:D2,meshnormal_vert:U2,meshnormal_frag:F2,meshphong_vert:O2,meshphong_frag:k2,meshphysical_vert:z2,meshphysical_frag:B2,meshtoon_vert:H2,meshtoon_frag:V2,points_vert:G2,points_frag:j2,shadow_vert:W2,shadow_frag:X2,sprite_vert:Y2,sprite_frag:$2},Ne={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Si={basic:{uniforms:pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:pn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:pn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:pn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:pn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:pn([Ne.points,Ne.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:pn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:pn([Ne.common,Ne.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:pn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:pn([Ne.sprite,Ne.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:pn([Ne.common,Ne.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:pn([Ne.lights,Ne.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Si.physical={uniforms:pn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const ol={r:0,b:0,g:0},Or=new fi,q2=new vt;function K2(t,e,n,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,d,f=null,h=0,p=null;function v(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?n:e).get(x)),x}function y(g){let x=!1;const S=v(g);S===null?u(o,l):S&&S.isColor&&(u(S,1),x=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===bc)?(d===void 0&&(d=new ct(new ai(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:ca(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),Or.copy(x.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(q2.makeRotationFromEuler(Or)),d.material.toneMapped=ot.getTransfer(S.colorSpace)!==pt,(f!==S||h!==S.version||p!==t.toneMapping)&&(d.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ct(new Pc(2,2),new Zi({name:"BackgroundMaterial",uniforms:ca(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ot.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,x){g.getRGB(ol,e_(t)),i.buffers.color.setClear(ol.r,ol.g,ol.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(g,x=1){o.set(g),l=x,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:y,addToRenderList:m}}function Z2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,D,F,k,Y){let J=!1;const W=f(k,F,D);s!==W&&(s=W,c(s.object)),J=p(M,k,F,Y),J&&v(M,k,F,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(M,D,F,k),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function d(M){return t.deleteVertexArray(M)}function f(M,D,F){const k=F.wireframe===!0;let Y=i[M.id];Y===void 0&&(Y={},i[M.id]=Y);let J=Y[D.id];J===void 0&&(J={},Y[D.id]=J);let W=J[k];return W===void 0&&(W=h(l()),J[k]=W),W}function h(M){const D=[],F=[],k=[];for(let Y=0;Y<n;Y++)D[Y]=0,F[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:k,object:M,attributes:{},index:null}}function p(M,D,F,k){const Y=s.attributes,J=D.attributes;let W=0;const ie=F.getAttributes();for(const N in ie)if(ie[N].location>=0){const P=Y[N];let b=J[N];if(b===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(b=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(b=M.instanceColor)),P===void 0||P.attribute!==b||b&&P.data!==b.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function v(M,D,F,k){const Y={},J=D.attributes;let W=0;const ie=F.getAttributes();for(const N in ie)if(ie[N].location>=0){let P=J[N];P===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(P=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(P=M.instanceColor));const b={};b.attribute=P,P&&P.data&&(b.data=P.data),Y[N]=b,W++}s.attributes=Y,s.attributesNum=W,s.index=k}function y(){const M=s.newAttributes;for(let D=0,F=M.length;D<F;D++)M[D]=0}function m(M){u(M,0)}function u(M,D){const F=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;F[M]=1,k[M]===0&&(t.enableVertexAttribArray(M),k[M]=1),Y[M]!==D&&(t.vertexAttribDivisor(M,D),Y[M]=D)}function g(){const M=s.newAttributes,D=s.enabledAttributes;for(let F=0,k=D.length;F<k;F++)D[F]!==M[F]&&(t.disableVertexAttribArray(F),D[F]=0)}function x(M,D,F,k,Y,J,W){W===!0?t.vertexAttribIPointer(M,D,F,Y,J):t.vertexAttribPointer(M,D,F,k,Y,J)}function S(M,D,F,k){y();const Y=k.attributes,J=F.getAttributes(),W=D.defaultAttributeValues;for(const ie in J){const N=J[ie];if(N.location>=0){let q=Y[ie];if(q===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const P=q.normalized,b=q.itemSize,Q=e.get(q);if(Q===void 0)continue;const ce=Q.buffer,V=Q.type,H=Q.bytesPerElement,K=V===t.INT||V===t.UNSIGNED_INT||q.gpuType===Af;if(q.isInterleavedBufferAttribute){const $=q.data,se=$.stride,ue=q.offset;if($.isInstancedInterleavedBuffer){for(let fe=0;fe<N.locationSize;fe++)u(N.location+fe,$.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let fe=0;fe<N.locationSize;fe++)x(N.location+fe,b/N.locationSize,V,P,se*H,(ue+b/N.locationSize*fe)*H,K)}else{if(q.isInstancedBufferAttribute){for(let $=0;$<N.locationSize;$++)u(N.location+$,q.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let $=0;$<N.locationSize;$++)m(N.location+$);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let $=0;$<N.locationSize;$++)x(N.location+$,b/N.locationSize,V,P,b*H,b/N.locationSize*$*H,K)}}else if(W!==void 0){const P=W[ie];if(P!==void 0)switch(P.length){case 2:t.vertexAttrib2fv(N.location,P);break;case 3:t.vertexAttrib3fv(N.location,P);break;case 4:t.vertexAttrib4fv(N.location,P);break;default:t.vertexAttrib1fv(N.location,P)}}}}g()}function I(){L();for(const M in i){const D=i[M];for(const F in D){const k=D[F];for(const Y in k)d(k[Y].object),delete k[Y];delete D[F]}delete i[M]}}function A(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const F in D){const k=D[F];for(const Y in k)d(k[Y].object),delete k[Y];delete D[F]}delete i[M.id]}function C(M){for(const D in i){const F=i[D];if(F[M.id]===void 0)continue;const k=F[M.id];for(const Y in k)d(k[Y].object),delete k[Y];delete F[M.id]}}function L(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function Q2(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,f){f!==0&&(t.drawArraysInstanced(i,c,d,f),n.update(d,i,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let v=0;v<f;v++)p+=d[v];n.update(p,i,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)a(c[v],d[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,f);let v=0;for(let y=0;y<f;y++)v+=d[y]*h[y];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function J2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const L=C===yo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ki&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Hi&&!L)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:I,maxSamples:A}}function ew(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new lr,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=d(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?d(null):c();else{const g=s?0:i,x=g*4;let S=u.clippingState||null;l.value=S,S=d(v,h,x,p);for(let I=0;I!==x;++I)S[I]=n[I];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,h,p,v){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const u=p+y*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,S=p;x!==y;++x,S+=4)a.copy(f[x]).applyMatrix4(g,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function tw(t){let e=new WeakMap;function n(a,o){return o===Wd?a.mapping=ra:o===Xd&&(a.mapping=sa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wd||o===Xd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class r_ extends t_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const zs=4,Rm=[.125,.215,.35,.446,.526,.582],Gr=20,Au=new r_,Pm=new Qe;let Cu=null,bu=0,Ru=0,Pu=!1;const Hr=(1+Math.sqrt(5))/2,Ts=1/Hr,Lm=[new B(-Hr,Ts,0),new B(Hr,Ts,0),new B(-Ts,0,Hr),new B(Ts,0,Hr),new B(0,Hr,-Ts),new B(0,Hr,Ts),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Nm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Cu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Um(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cu,bu,Ru),this._renderer.xr.enabled=Pu,e.scissorTest=!1,ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ra||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cu=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wi,minFilter:wi,generateMipmaps:!1,type:yo,format:li,colorSpace:fa,depthBuffer:!1},r=Im(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Im(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nw(s)),this._blurMaterial=iw(s,e,n)}return r}_compileMaterial(e){const n=new ct(this._lodPlanes[0],e);this._renderer.compile(n,Au)}_sceneToCubeUV(e,n,i,r){const o=new Tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(Pm),d.toneMapping=wr,d.autoClear=!1;const p=new la({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),v=new ct(new ai,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Pm),y=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;ll(r,g*x,u>2?x:0,x,x),d.setRenderTarget(r),y&&d.render(v,o),d.render(e,o)}v.geometry.dispose(),v.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ra||e.mapping===sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Um()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ct(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ll(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Au)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Lm[(r-s-1)%Lm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new ct(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Gr-1),y=s/v,m=isFinite(s)?1+Math.floor(d*y):Gr;m>Gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const u=[];let g=0;for(let C=0;C<Gr;++C){const L=C/y,w=Math.exp(-L*L/2);u.push(w),C===0?g+=w:C<m&&(g+=2*w)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],I=3*S*(r>x-zs?r-x+zs:0),A=4*(this._cubeSize-S);ll(n,I,A,3*S,2*S),l.setRenderTarget(n),l.render(f,Au)}}function nw(t){const e=[],n=[],i=[];let r=t;const s=t-zs+1+Rm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-zs?l=Rm[a-t+zs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,v=6,y=3,m=2,u=1,g=new Float32Array(y*v*p),x=new Float32Array(m*v*p),S=new Float32Array(u*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,L=A>2?0:-1,w=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];g.set(w,y*v*A),x.set(h,m*v*A);const M=[A,A,A,A,A,A];S.set(M,u*v*A)}const I=new vn;I.setAttribute("position",new Ci(g,y)),I.setAttribute("uv",new Ci(x,m)),I.setAttribute("faceIndex",new Ci(S,u)),e.push(I),r>zs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Im(t,e,n){const i=new as(t,e,n);return i.texture.mapping=bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ll(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function iw(t,e,n){const i=new Float32Array(Gr),r=new B(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Dm(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Um(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Uf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wd||l===Xd,d=l===ra||l===sa;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Nm(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||d&&p&&r(p)?(n===null&&(n=new Nm(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function sw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ua("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function aw(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const y=p[v];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,v=f.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let x=0,S=g.length;x<S;x+=3){const I=g[x+0],A=g[x+1],C=g[x+2];h.push(I,A,A,C,C,I)}}else if(v!==void 0){const g=v.array;y=v.version;for(let x=0,S=g.length/3-1;x<S;x+=3){const I=x+0,A=x+1,C=x+2;h.push(I,A,A,C,C,I)}}else return;const m=new($v(h)?Jv:Qv)(h,1);m.version=y;const u=s.get(f);u&&e.remove(u),s.set(f,m)}function d(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function ow(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*a,v),n.update(p,i,v))}function d(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let m=0;for(let u=0;u<v;u++)m+=p[u];n.update(m,i,1)}function f(h,p,v,y){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/a,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,v);let u=0;for(let g=0;g<v;g++)u+=p[g]*y[g];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function lw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function cw(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let M=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const v=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let I=o.attributes.position.count*S,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*A*4*f),L=new Kv(C,I,A,f);L.type=Hi,L.needsUpdate=!0;const w=S*4;for(let D=0;D<f;D++){const F=u[D],k=g[D],Y=x[D],J=I*A*4*D;for(let W=0;W<F.count;W++){const ie=W*w;v===!0&&(r.fromBufferAttribute(F,W),C[J+ie+0]=r.x,C[J+ie+1]=r.y,C[J+ie+2]=r.z,C[J+ie+3]=0),y===!0&&(r.fromBufferAttribute(k,W),C[J+ie+4]=r.x,C[J+ie+5]=r.y,C[J+ie+6]=r.z,C[J+ie+7]=0),m===!0&&(r.fromBufferAttribute(Y,W),C[J+ie+8]=r.x,C[J+ie+9]=r.y,C[J+ie+10]=r.z,C[J+ie+11]=Y.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new $e(I,A)},i.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const y=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function uw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,f=e.get(l,d);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class s_ extends ln{constructor(e,n,i,r,s,a,o,l,c,d=$s){if(d!==$s&&d!==oa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===$s&&(i=ss),i===void 0&&d===oa&&(i=aa),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const a_=new ln,Fm=new s_(1,1),o_=new Kv,l_=new KS,c_=new n_,Om=[],km=[],zm=new Float32Array(16),Bm=new Float32Array(9),Hm=new Float32Array(4);function pa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Om[r];if(s===void 0&&(s=new Float32Array(r),Om[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Lc(t,e){let n=km[e];n===void 0&&(n=new Int32Array(e),km[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function fw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Hm.set(i),t.uniformMatrix2fv(this.addr,!1,Hm),Bt(n,i)}}function gw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Bm.set(i),t.uniformMatrix3fv(this.addr,!1,Bm),Bt(n,i)}}function vw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;zm.set(i),t.uniformMatrix4fv(this.addr,!1,zm),Bt(n,i)}}function _w(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function Sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function Mw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function Aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Fm.compareFunction=Yv,s=Fm):s=a_,n.setTexture2D(e||s,r)}function Cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||l_,r)}function bw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||c_,r)}function Rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||o_,r)}function Pw(t){switch(t){case 5126:return dw;case 35664:return hw;case 35665:return fw;case 35666:return pw;case 35674:return mw;case 35675:return gw;case 35676:return vw;case 5124:case 35670:return _w;case 35667:case 35671:return xw;case 35668:case 35672:return yw;case 35669:case 35673:return Sw;case 5125:return Mw;case 36294:return Ew;case 36295:return ww;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Aw;case 35679:case 36299:case 36307:return Cw;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return Rw}}function Lw(t,e){t.uniform1fv(this.addr,e)}function Nw(t,e){const n=pa(e,this.size,2);t.uniform2fv(this.addr,n)}function Iw(t,e){const n=pa(e,this.size,3);t.uniform3fv(this.addr,n)}function Dw(t,e){const n=pa(e,this.size,4);t.uniform4fv(this.addr,n)}function Uw(t,e){const n=pa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Fw(t,e){const n=pa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ow(t,e){const n=pa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function kw(t,e){t.uniform1iv(this.addr,e)}function zw(t,e){t.uniform2iv(this.addr,e)}function Bw(t,e){t.uniform3iv(this.addr,e)}function Hw(t,e){t.uniform4iv(this.addr,e)}function Vw(t,e){t.uniform1uiv(this.addr,e)}function Gw(t,e){t.uniform2uiv(this.addr,e)}function jw(t,e){t.uniform3uiv(this.addr,e)}function Ww(t,e){t.uniform4uiv(this.addr,e)}function Xw(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||a_,s[a])}function Yw(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||l_,s[a])}function $w(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||c_,s[a])}function qw(t,e,n){const i=this.cache,r=e.length,s=Lc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||o_,s[a])}function Kw(t){switch(t){case 5126:return Lw;case 35664:return Nw;case 35665:return Iw;case 35666:return Dw;case 35674:return Uw;case 35675:return Fw;case 35676:return Ow;case 5124:case 35670:return kw;case 35667:case 35671:return zw;case 35668:case 35672:return Bw;case 35669:case 35673:return Hw;case 5125:return Vw;case 36294:return Gw;case 36295:return jw;case 36296:return Ww;case 35678:case 36198:case 36298:case 36306:case 35682:return Xw;case 35679:case 36299:case 36307:return Yw;case 35680:case 36300:case 36308:case 36293:return $w;case 36289:case 36303:case 36311:case 36292:return qw}}class Zw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Pw(n.type)}}class Qw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Kw(n.type)}}class Jw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Lu=/(\w+)(\])?(\[|\.)?/g;function Vm(t,e){t.seq.push(e),t.map[e.id]=e}function eT(t,e,n){const i=t.name,r=i.length;for(Lu.lastIndex=0;;){const s=Lu.exec(i),a=Lu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Vm(n,c===void 0?new Zw(o,t,e):new Qw(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Jw(o),Vm(n,f)),n=f}}}class Dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);eT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Gm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const tT=37297;let nT=0;function iT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const jm=new Ke;function rT(t){ot._getMatrix(jm,ot.workingColorSpace,t);const e=`mat3( ${jm.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case Rc:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+iT(t.getShaderSource(e),a)}else return r}function sT(t,e){const n=rT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function aT(t,e){let n;switch(e){case MS:n="Linear";break;case ES:n="Reinhard";break;case wS:n="Cineon";break;case TS:n="ACESFilmic";break;case CS:n="AgX";break;case bS:n="Neutral";break;case AS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cl=new B;function oT(){ot.getLuminanceCoefficients(cl);const t=cl.x.toFixed(4),e=cl.y.toFixed(4),n=cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fa).join(`
`)}function cT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fa(t){return t!==""}function Xm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(t){return t.replace(dT,fT)}const hT=new Map;function fT(t,e){let n=Ze[e];if(n===void 0){const i=hT.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Sh(n)}const pT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $m(t){return t.replace(pT,mT)}function mT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Uv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===tS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function vT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ra:case sa:e="ENVMAP_TYPE_CUBE";break;case bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _T(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case sa:e="ENVMAP_MODE_REFRACTION";break}return e}function xT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Tf:e="ENVMAP_BLENDING_MULTIPLY";break;case yS:e="ENVMAP_BLENDING_MIX";break;case SS:e="ENVMAP_BLENDING_ADD";break}return e}function yT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ST(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=gT(n),c=vT(n),d=_T(n),f=xT(n),h=yT(n),p=lT(n),v=cT(s),y=r.createProgram();let m,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fa).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Fa).join(`
`),u.length>0&&(u+=`
`)):(m=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fa).join(`
`),u=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wr?"#define TONE_MAPPING":"",n.toneMapping!==wr?Ze.tonemapping_pars_fragment:"",n.toneMapping!==wr?aT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,sT("linearToOutputTexel",n.outputColorSpace),oT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fa).join(`
`)),a=Sh(a),a=Xm(a,n),a=Ym(a,n),o=Sh(o),o=Xm(o,n),o=Ym(o,n),a=$m(a),o=$m(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=g+m+a,S=g+u+o,I=Gm(r,r.VERTEX_SHADER,x),A=Gm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,I),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function C(D){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(I).trim(),Y=r.getShaderInfoLog(A).trim();let J=!0,W=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(J=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,I,A);else{const ie=Wm(r,I,"vertex"),N=Wm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+F+`
`+ie+`
`+N)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(k===""||Y==="")&&(W=!1);W&&(D.diagnostics={runnable:J,programLog:F,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:u}})}r.deleteShader(I),r.deleteShader(A),L=new Dl(r,y),w=uT(r,y)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,tT)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=nT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=A,this}let MT=0;class ET{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new wT(e),n.set(e,i)),i}}class wT{constructor(e){this.id=MT++,this.code=e,this.usedTimes=0}}function TT(t,e,n,i,r,s,a){const o=new If,l=new ET,c=new Set,d=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,D,F,k){const Y=F.fog,J=k.geometry,W=w.isMeshStandardMaterial?F.environment:null,ie=(w.isMeshStandardMaterial?n:e).get(w.envMap||W),N=ie&&ie.mapping===bc?ie.image.height:null,q=v[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const P=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,b=P!==void 0?P.length:0;let Q=0;J.morphAttributes.position!==void 0&&(Q=1),J.morphAttributes.normal!==void 0&&(Q=2),J.morphAttributes.color!==void 0&&(Q=3);let ce,V,H,K;if(q){const Ye=Si[q];ce=Ye.vertexShader,V=Ye.fragmentShader}else ce=w.vertexShader,V=w.fragmentShader,l.update(w),H=l.getVertexShaderID(w),K=l.getFragmentShaderID(w);const $=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),ue=k.isInstancedMesh===!0,fe=k.isBatchedMesh===!0,Ue=!!w.map,Ee=!!w.matcap,Fe=!!ie,U=!!w.aoMap,Ve=!!w.lightMap,Ie=!!w.bumpMap,Ce=!!w.normalMap,he=!!w.displacementMap,ke=!!w.emissiveMap,le=!!w.metalnessMap,R=!!w.roughnessMap,E=w.anisotropy>0,j=w.clearcoat>0,ee=w.dispersion>0,re=w.iridescence>0,ne=w.sheen>0,we=w.transmission>0,pe=E&&!!w.anisotropyMap,Se=j&&!!w.clearcoatMap,We=j&&!!w.clearcoatNormalMap,oe=j&&!!w.clearcoatRoughnessMap,Me=re&&!!w.iridescenceMap,Re=re&&!!w.iridescenceThicknessMap,Be=ne&&!!w.sheenColorMap,be=ne&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,He=!!w.specularColorMap,Je=!!w.specularIntensityMap,O=we&&!!w.transmissionMap,ge=we&&!!w.thicknessMap,te=!!w.gradientMap,ae=!!w.alphaMap,Te=w.alphaTest>0,ve=!!w.alphaHash,Xe=!!w.extensions;let et=wr;w.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(et=t.toneMapping);const tt={shaderID:q,shaderType:w.type,shaderName:w.name,vertexShader:ce,fragmentShader:V,defines:w.defines,customVertexShaderID:H,customFragmentShaderID:K,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:fe,batchingColor:fe&&k._colorsTexture!==null,instancing:ue,instancingColor:ue&&k.instanceColor!==null,instancingMorph:ue&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:fa,alphaToCoverage:!!w.alphaToCoverage,map:Ue,matcap:Ee,envMap:Fe,envMapMode:Fe&&ie.mapping,envMapCubeUVHeight:N,aoMap:U,lightMap:Ve,bumpMap:Ie,normalMap:Ce,displacementMap:h&&he,emissiveMap:ke,normalMapObjectSpace:Ce&&w.normalMapType===NS,normalMapTangentSpace:Ce&&w.normalMapType===Nf,metalnessMap:le,roughnessMap:R,anisotropy:E,anisotropyMap:pe,clearcoat:j,clearcoatMap:Se,clearcoatNormalMap:We,clearcoatRoughnessMap:oe,dispersion:ee,iridescence:re,iridescenceMap:Me,iridescenceThicknessMap:Re,sheen:ne,sheenColorMap:Be,sheenRoughnessMap:be,specularMap:Ge,specularColorMap:He,specularIntensityMap:Je,transmission:we,transmissionMap:O,thicknessMap:ge,gradientMap:te,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:ae,alphaTest:Te,alphaHash:ve,combine:w.combine,mapUv:Ue&&y(w.map.channel),aoMapUv:U&&y(w.aoMap.channel),lightMapUv:Ve&&y(w.lightMap.channel),bumpMapUv:Ie&&y(w.bumpMap.channel),normalMapUv:Ce&&y(w.normalMap.channel),displacementMapUv:he&&y(w.displacementMap.channel),emissiveMapUv:ke&&y(w.emissiveMap.channel),metalnessMapUv:le&&y(w.metalnessMap.channel),roughnessMapUv:R&&y(w.roughnessMap.channel),anisotropyMapUv:pe&&y(w.anisotropyMap.channel),clearcoatMapUv:Se&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:We&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:be&&y(w.sheenRoughnessMap.channel),specularMapUv:Ge&&y(w.specularMap.channel),specularColorMapUv:He&&y(w.specularColorMap.channel),specularIntensityMapUv:Je&&y(w.specularIntensityMap.channel),transmissionMapUv:O&&y(w.transmissionMap.channel),thicknessMapUv:ge&&y(w.thicknessMap.channel),alphaMapUv:ae&&y(w.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ce||E),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!J.attributes.uv&&(Ue||ae),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:k.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:Q,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,decodeVideoTexture:Ue&&w.map.isVideoTexture===!0&&ot.getTransfer(w.map.colorSpace)===pt,decodeVideoTextureEmissive:ke&&w.emissiveMap.isVideoTexture===!0&&ot.getTransfer(w.emissiveMap.colorSpace)===pt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ei,flipSided:w.side===on,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Xe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&w.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function u(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)M.push(D),M.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(g(M,w),x(M,w),M.push(t.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function g(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function S(w){const M=v[w.type];let D;if(M){const F=Si[M];D=lM.clone(F.uniforms)}else D=w.uniforms;return D}function I(w,M){let D;for(let F=0,k=d.length;F<k;F++){const Y=d[F];if(Y.cacheKey===M){D=Y,++D.usedTimes;break}}return D===void 0&&(D=new ST(t,M,w,s),d.push(D)),D}function A(w){if(--w.usedTimes===0){const M=d.indexOf(w);d[M]=d[d.length-1],d.pop(),w.destroy()}}function C(w){l.remove(w)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:d,dispose:L}}function AT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Km(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,v,y,m){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:y,group:m},t[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=y,u.group=m),e++,u}function o(f,h,p,v,y,m){const u=a(f,h,p,v,y,m);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(f,h,p,v,y,m){const u=a(f,h,p,v,y,m);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(f,h){n.length>1&&n.sort(f||CT),i.length>1&&i.sort(h||Km),r.length>1&&r.sort(h||Km)}function d(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function bT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Zm,t.set(i,[a])):r>=s.length?(a=new Zm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function RT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new B,color:new Qe};break;case"SpotLight":n={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return t[e.id]=n,n}}}function PT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LT=0;function NT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function IT(t){const e=new RT,n=PT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new vt,a=new vt;function o(c){let d=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,v=0,y=0,m=0,u=0,g=0,x=0,S=0,I=0,A=0,C=0;c.sort(NT);for(let w=0,M=c.length;w<M;w++){const D=c[w],F=D.color,k=D.intensity,Y=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=F.r*k,f+=F.g*k,h+=F.b*k;else if(D.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(D.sh.coefficients[W],k);C++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ie=D.shadow,N=n.get(D);N.shadowIntensity=ie.intensity,N.shadowBias=ie.bias,N.shadowNormalBias=ie.normalBias,N.shadowRadius=ie.radius,N.shadowMapSize=ie.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=J,i.directionalShadowMatrix[p]=D.shadow.matrix,g++}i.directional[p]=W,p++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(F).multiplyScalar(k),W.distance=Y,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,i.spot[y]=W;const ie=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,ie.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[y]=ie.matrix,D.castShadow){const N=n.get(D);N.shadowIntensity=ie.intensity,N.shadowBias=ie.bias,N.shadowNormalBias=ie.normalBias,N.shadowRadius=ie.radius,N.shadowMapSize=ie.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=J,S++}y++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const ie=D.shadow,N=n.get(D);N.shadowIntensity=ie.intensity,N.shadowBias=ie.bias,N.shadowNormalBias=ie.normalBias,N.shadowRadius=ie.radius,N.shadowMapSize=ie.mapSize,N.shadowCameraNear=ie.camera.near,N.shadowCameraFar=ie.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=J,i.pointShadowMatrix[v]=D.shadow.matrix,x++}i.point[v]=W,v++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(k),W.groundColor.copy(D.groundColor).multiplyScalar(k),i.hemi[u]=W,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==v||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==u||L.numDirectionalShadows!==g||L.numPointShadows!==x||L.numSpotShadows!==S||L.numSpotMaps!==I||L.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,L.directionalLength=p,L.pointLength=v,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=u,L.numDirectionalShadows=g,L.numPointShadows=x,L.numSpotShadows=S,L.numSpotMaps=I,L.numLightProbes=C,i.version=LT++)}function l(c,d){let f=0,h=0,p=0,v=0,y=0;const m=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),h++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Qm(t){const e=new IT(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function DT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Qm(t),e.set(r,[o])):s>=a.length?(o=new Qm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class UT extends Lr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=PS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FT extends Lr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const OT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zT(t,e,n){let i=new Df;const r=new $e,s=new $e,a=new Rt,o=new UT({depthPacking:LS}),l=new FT,c={},d=n.maxTextureSize,f={[Cr]:on,[on]:Cr,[Ei]:Ei},h=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:OT,fragmentShader:kT}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new vn;v.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ct(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uv;let u=this.type;this.render=function(A,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),M=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Er),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const k=u!==Fi&&this.type===Fi,Y=u===Fi&&this.type!==Fi;for(let J=0,W=A.length;J<W;J++){const ie=A[J],N=ie.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||k===!0||Y===!0){const b=this.type!==Fi?{minFilter:di,magFilter:di}:{};N.map!==null&&N.map.dispose(),N.map=new as(r.x,r.y,b),N.map.texture.name=ie.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const P=N.getViewportCount();for(let b=0;b<P;b++){const Q=N.getViewport(b);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),F.viewport(a),N.updateMatrices(ie,b),i=N.getFrustum(),S(C,L,N.camera,ie,this.type)}N.isPointLightShadow!==!0&&this.type===Fi&&g(N,L),N.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(w,M,D)};function g(A,C){const L=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new as(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,L,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,L,p,y,null)}function x(A,C,L,w){let M=null;const D=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)M=D;else if(M=L.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=M.uuid,k=C.uuid;let Y=c[F];Y===void 0&&(Y={},c[F]=Y);let J=Y[k];J===void 0&&(J=M.clone(),Y[k]=J,C.addEventListener("dispose",I)),M=J}if(M.visible=C.visible,M.wireframe=C.wireframe,w===Fi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=t.properties.get(M);F.light=L}return M}function S(A,C,L,w,M){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Fi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const k=e.update(A),Y=A.material;if(Array.isArray(Y)){const J=k.groups;for(let W=0,ie=J.length;W<ie;W++){const N=J[W],q=Y[N.materialIndex];if(q&&q.visible){const P=x(A,q,w,M);A.onBeforeShadow(t,A,C,L,k,P,N),t.renderBufferDirect(L,null,k,P,A,N),A.onAfterShadow(t,A,C,L,k,P,N)}}}else if(Y.visible){const J=x(A,Y,w,M);A.onBeforeShadow(t,A,C,L,k,J,null),t.renderBufferDirect(L,null,k,J,A,null),A.onAfterShadow(t,A,C,L,k,J,null)}}const F=A.children;for(let k=0,Y=F.length;k<Y;k++)S(F[k],C,L,w,M)}function I(A){A.target.removeEventListener("dispose",I);for(const L in c){const w=c[L],M=A.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const BT={[kd]:zd,[Bd]:Gd,[Hd]:jd,[ia]:Vd,[zd]:kd,[Gd]:Bd,[jd]:Hd,[Vd]:ia};function HT(t,e){function n(){let O=!1;const ge=new Rt;let te=null;const ae=new Rt(0,0,0,0);return{setMask:function(Te){te!==Te&&!O&&(t.colorMask(Te,Te,Te,Te),te=Te)},setLocked:function(Te){O=Te},setClear:function(Te,ve,Xe,et,tt){tt===!0&&(Te*=et,ve*=et,Xe*=et),ge.set(Te,ve,Xe,et),ae.equals(ge)===!1&&(t.clearColor(Te,ve,Xe,et),ae.copy(ge))},reset:function(){O=!1,te=null,ae.set(-1,0,0,0)}}}function i(){let O=!1,ge=!1,te=null,ae=null,Te=null;return{setReversed:function(ve){if(ge!==ve){const Xe=e.get("EXT_clip_control");ge?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const et=Te;Te=null,this.setClear(et)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?$(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ve){te!==ve&&!O&&(t.depthMask(ve),te=ve)},setFunc:function(ve){if(ge&&(ve=BT[ve]),ae!==ve){switch(ve){case kd:t.depthFunc(t.NEVER);break;case zd:t.depthFunc(t.ALWAYS);break;case Bd:t.depthFunc(t.LESS);break;case ia:t.depthFunc(t.LEQUAL);break;case Hd:t.depthFunc(t.EQUAL);break;case Vd:t.depthFunc(t.GEQUAL);break;case Gd:t.depthFunc(t.GREATER);break;case jd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=ve}},setLocked:function(ve){O=ve},setClear:function(ve){Te!==ve&&(ge&&(ve=1-ve),t.clearDepth(ve),Te=ve)},reset:function(){O=!1,te=null,ae=null,Te=null,ge=!1}}}function r(){let O=!1,ge=null,te=null,ae=null,Te=null,ve=null,Xe=null,et=null,tt=null;return{setTest:function(Ye){O||(Ye?$(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(Ye){ge!==Ye&&!O&&(t.stencilMask(Ye),ge=Ye)},setFunc:function(Ye,St,Ae){(te!==Ye||ae!==St||Te!==Ae)&&(t.stencilFunc(Ye,St,Ae),te=Ye,ae=St,Te=Ae)},setOp:function(Ye,St,Ae){(ve!==Ye||Xe!==St||et!==Ae)&&(t.stencilOp(Ye,St,Ae),ve=Ye,Xe=St,et=Ae)},setLocked:function(Ye){O=Ye},setClear:function(Ye){tt!==Ye&&(t.clearStencil(Ye),tt=Ye)},reset:function(){O=!1,ge=null,te=null,ae=null,Te=null,ve=null,Xe=null,et=null,tt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],v=null,y=!1,m=null,u=null,g=null,x=null,S=null,I=null,A=null,C=new Qe(0,0,0),L=0,w=!1,M=null,D=null,F=null,k=null,Y=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(N)[1]),W=ie>=1):N.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),W=ie>=2);let q=null,P={};const b=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),ce=new Rt().fromArray(b),V=new Rt().fromArray(Q);function H(O,ge,te,ae){const Te=new Uint8Array(4),ve=t.createTexture();t.bindTexture(O,ve),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Xe=0;Xe<te;Xe++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(ge+Xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return ve}const K={};K[t.TEXTURE_2D]=H(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=H(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=H(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=H(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(t.DEPTH_TEST),a.setFunc(ia),Ie(!1),Ce(im),$(t.CULL_FACE),U(Er);function $(O){d[O]!==!0&&(t.enable(O),d[O]=!0)}function se(O){d[O]!==!1&&(t.disable(O),d[O]=!1)}function ue(O,ge){return f[O]!==ge?(t.bindFramebuffer(O,ge),f[O]=ge,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ge),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function fe(O,ge){let te=p,ae=!1;if(O){te=h.get(ge),te===void 0&&(te=[],h.set(ge,te));const Te=O.textures;if(te.length!==Te.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ve=0,Xe=Te.length;ve<Xe;ve++)te[ve]=t.COLOR_ATTACHMENT0+ve;te.length=Te.length,ae=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,ae=!0);ae&&t.drawBuffers(te)}function Ue(O){return v!==O?(t.useProgram(O),v=O,!0):!1}const Ee={[Vr]:t.FUNC_ADD,[iS]:t.FUNC_SUBTRACT,[rS]:t.FUNC_REVERSE_SUBTRACT};Ee[sS]=t.MIN,Ee[aS]=t.MAX;const Fe={[oS]:t.ZERO,[lS]:t.ONE,[cS]:t.SRC_COLOR,[Fd]:t.SRC_ALPHA,[mS]:t.SRC_ALPHA_SATURATE,[fS]:t.DST_COLOR,[dS]:t.DST_ALPHA,[uS]:t.ONE_MINUS_SRC_COLOR,[Od]:t.ONE_MINUS_SRC_ALPHA,[pS]:t.ONE_MINUS_DST_COLOR,[hS]:t.ONE_MINUS_DST_ALPHA,[gS]:t.CONSTANT_COLOR,[vS]:t.ONE_MINUS_CONSTANT_COLOR,[_S]:t.CONSTANT_ALPHA,[xS]:t.ONE_MINUS_CONSTANT_ALPHA};function U(O,ge,te,ae,Te,ve,Xe,et,tt,Ye){if(O===Er){y===!0&&(se(t.BLEND),y=!1);return}if(y===!1&&($(t.BLEND),y=!0),O!==nS){if(O!==m||Ye!==w){if((u!==Vr||S!==Vr)&&(t.blendEquation(t.FUNC_ADD),u=Vr,S=Vr),Ye)switch(O){case Ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ud:t.blendFunc(t.ONE,t.ONE);break;case rm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ud:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case rm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case sm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}g=null,x=null,I=null,A=null,C.set(0,0,0),L=0,m=O,w=Ye}return}Te=Te||ge,ve=ve||te,Xe=Xe||ae,(ge!==u||Te!==S)&&(t.blendEquationSeparate(Ee[ge],Ee[Te]),u=ge,S=Te),(te!==g||ae!==x||ve!==I||Xe!==A)&&(t.blendFuncSeparate(Fe[te],Fe[ae],Fe[ve],Fe[Xe]),g=te,x=ae,I=ve,A=Xe),(et.equals(C)===!1||tt!==L)&&(t.blendColor(et.r,et.g,et.b,tt),C.copy(et),L=tt),m=O,w=!1}function Ve(O,ge){O.side===Ei?se(t.CULL_FACE):$(t.CULL_FACE);let te=O.side===on;ge&&(te=!te),Ie(te),O.blending===Ys&&O.transparent===!1?U(Er):U(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const ae=O.stencilWrite;o.setTest(ae),ae&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ke(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(O){M!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),M=O)}function Ce(O){O!==J1?($(t.CULL_FACE),O!==D&&(O===im?t.cullFace(t.BACK):O===eS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),D=O}function he(O){O!==F&&(W&&t.lineWidth(O),F=O)}function ke(O,ge,te){O?($(t.POLYGON_OFFSET_FILL),(k!==ge||Y!==te)&&(t.polygonOffset(ge,te),k=ge,Y=te)):se(t.POLYGON_OFFSET_FILL)}function le(O){O?$(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function R(O){O===void 0&&(O=t.TEXTURE0+J-1),q!==O&&(t.activeTexture(O),q=O)}function E(O,ge,te){te===void 0&&(q===null?te=t.TEXTURE0+J-1:te=q);let ae=P[te];ae===void 0&&(ae={type:void 0,texture:void 0},P[te]=ae),(ae.type!==O||ae.texture!==ge)&&(q!==te&&(t.activeTexture(te),q=te),t.bindTexture(O,ge||K[O]),ae.type=O,ae.texture=ge)}function j(){const O=P[q];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{t.texSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{t.texSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{t.texImage2D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{t.texImage3D.apply(t,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(O){ce.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),ce.copy(O))}function be(O){V.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),V.copy(O))}function Ge(O,ge){let te=c.get(ge);te===void 0&&(te=new WeakMap,c.set(ge,te));let ae=te.get(O);ae===void 0&&(ae=t.getUniformBlockIndex(ge,O.name),te.set(O,ae))}function He(O,ge){const ae=c.get(ge).get(O);l.get(ge)!==ae&&(t.uniformBlockBinding(ge,ae,O.__bindingPointIndex),l.set(ge,ae))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},q=null,P={},f={},h=new WeakMap,p=[],v=null,y=!1,m=null,u=null,g=null,x=null,S=null,I=null,A=null,C=new Qe(0,0,0),L=0,w=!1,M=null,D=null,F=null,k=null,Y=null,ce.set(0,0,t.canvas.width,t.canvas.height),V.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:se,bindFramebuffer:ue,drawBuffers:fe,useProgram:Ue,setBlending:U,setMaterial:Ve,setFlipSided:Ie,setCullFace:Ce,setLineWidth:he,setPolygonOffset:ke,setScissorTest:le,activeTexture:R,bindTexture:E,unbindTexture:j,compressedTexImage2D:ee,compressedTexImage3D:re,texImage2D:Me,texImage3D:Re,updateUBOMapping:Ge,uniformBlockBinding:He,texStorage2D:We,texStorage3D:oe,texSubImage2D:ne,texSubImage3D:we,compressedTexSubImage2D:pe,compressedTexSubImage3D:Se,scissor:Be,viewport:be,reset:Je}}function Jm(t,e,n,i){const r=VT(i);switch(n){case Bv:return t*e;case Vv:return t*e;case Gv:return t*e*2;case jv:return t*e/r.components*r.byteLength;case Rf:return t*e/r.components*r.byteLength;case Wv:return t*e*2/r.components*r.byteLength;case Pf:return t*e*2/r.components*r.byteLength;case Hv:return t*e*3/r.components*r.byteLength;case li:return t*e*4/r.components*r.byteLength;case Lf:return t*e*4/r.components*r.byteLength;case bl:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Qd:return Math.max(t,16)*Math.max(e,8)/4;case qd:case Zd:return Math.max(t,8)*Math.max(e,8)/2;case Jd:case eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case dh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nl:case gh:case vh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Xv:case _h:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xh:case yh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function VT(t){switch(t){case Ki:case Ov:return{byteLength:1,components:1};case ho:case kv:case yo:return{byteLength:2,components:1};case Cf:case bf:return{byteLength:2,components:4};case ss:case Af:case Hi:return{byteLength:4,components:1};case zv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function GT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $e,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,E){return p?new OffscreenCanvas(R,E):fo("canvas")}function y(R,E,j){let ee=1;const re=le(R);if((re.width>j||re.height>j)&&(ee=j/Math.max(re.width,re.height)),ee<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ne=Math.floor(ee*re.width),we=Math.floor(ee*re.height);f===void 0&&(f=v(ne,we));const pe=E?v(ne,we):f;return pe.width=ne,pe.height=we,pe.getContext("2d").drawImage(R,0,0,ne,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ne+"x"+we+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function m(R){return R.generateMipmaps}function u(R){t.generateMipmap(R)}function g(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,E,j,ee,re=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=E;if(E===t.RED&&(j===t.FLOAT&&(ne=t.R32F),j===t.HALF_FLOAT&&(ne=t.R16F),j===t.UNSIGNED_BYTE&&(ne=t.R8)),E===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(ne=t.R8UI),j===t.UNSIGNED_SHORT&&(ne=t.R16UI),j===t.UNSIGNED_INT&&(ne=t.R32UI),j===t.BYTE&&(ne=t.R8I),j===t.SHORT&&(ne=t.R16I),j===t.INT&&(ne=t.R32I)),E===t.RG&&(j===t.FLOAT&&(ne=t.RG32F),j===t.HALF_FLOAT&&(ne=t.RG16F),j===t.UNSIGNED_BYTE&&(ne=t.RG8)),E===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(ne=t.RG8UI),j===t.UNSIGNED_SHORT&&(ne=t.RG16UI),j===t.UNSIGNED_INT&&(ne=t.RG32UI),j===t.BYTE&&(ne=t.RG8I),j===t.SHORT&&(ne=t.RG16I),j===t.INT&&(ne=t.RG32I)),E===t.RGB_INTEGER&&(j===t.UNSIGNED_BYTE&&(ne=t.RGB8UI),j===t.UNSIGNED_SHORT&&(ne=t.RGB16UI),j===t.UNSIGNED_INT&&(ne=t.RGB32UI),j===t.BYTE&&(ne=t.RGB8I),j===t.SHORT&&(ne=t.RGB16I),j===t.INT&&(ne=t.RGB32I)),E===t.RGBA_INTEGER&&(j===t.UNSIGNED_BYTE&&(ne=t.RGBA8UI),j===t.UNSIGNED_SHORT&&(ne=t.RGBA16UI),j===t.UNSIGNED_INT&&(ne=t.RGBA32UI),j===t.BYTE&&(ne=t.RGBA8I),j===t.SHORT&&(ne=t.RGBA16I),j===t.INT&&(ne=t.RGBA32I)),E===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(ne=t.RGB9_E5),E===t.RGBA){const we=re?Rc:ot.getTransfer(ee);j===t.FLOAT&&(ne=t.RGBA32F),j===t.HALF_FLOAT&&(ne=t.RGBA16F),j===t.UNSIGNED_BYTE&&(ne=we===pt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function S(R,E){let j;return R?E===null||E===ss||E===aa?j=t.DEPTH24_STENCIL8:E===Hi?j=t.DEPTH32F_STENCIL8:E===ho&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ss||E===aa?j=t.DEPTH_COMPONENT24:E===Hi?j=t.DEPTH_COMPONENT32F:E===ho&&(j=t.DEPTH_COMPONENT16),j}function I(R,E){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==di&&R.minFilter!==wi?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),L(E),E.isVideoTexture&&d.delete(E)}function C(R){const E=R.target;E.removeEventListener("dispose",C),M(E)}function L(R){const E=i.get(R);if(E.__webglInit===void 0)return;const j=R.source,ee=h.get(j);if(ee){const re=ee[E.__cacheKey];re.usedTimes--,re.usedTimes===0&&w(R),Object.keys(ee).length===0&&h.delete(j)}i.remove(R)}function w(R){const E=i.get(R);t.deleteTexture(E.__webglTexture);const j=R.source,ee=h.get(j);delete ee[E.__cacheKey],a.memory.textures--}function M(R){const E=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let re=0;re<E.__webglFramebuffer[ee].length;re++)t.deleteFramebuffer(E.__webglFramebuffer[ee][re]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const j=R.textures;for(let ee=0,re=j.length;ee<re;ee++){const ne=i.get(j[ee]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(j[ee])}i.remove(R)}let D=0;function F(){D=0}function k(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function Y(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function J(R,E){const j=i.get(R);if(R.isVideoTexture&&he(R),R.isRenderTargetTexture===!1&&R.version>0&&j.__version!==R.version){const ee=R.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(j,R,E);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+E)}function W(R,E){const j=i.get(R);if(R.version>0&&j.__version!==R.version){V(j,R,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+E)}function ie(R,E){const j=i.get(R);if(R.version>0&&j.__version!==R.version){V(j,R,E);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+E)}function N(R,E){const j=i.get(R);if(R.version>0&&j.__version!==R.version){H(j,R,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+E)}const q={[Yd]:t.REPEAT,[Yr]:t.CLAMP_TO_EDGE,[$d]:t.MIRRORED_REPEAT},P={[di]:t.NEAREST,[RS]:t.NEAREST_MIPMAP_NEAREST,[Go]:t.NEAREST_MIPMAP_LINEAR,[wi]:t.LINEAR,[ru]:t.LINEAR_MIPMAP_NEAREST,[$r]:t.LINEAR_MIPMAP_LINEAR},b={[IS]:t.NEVER,[zS]:t.ALWAYS,[DS]:t.LESS,[Yv]:t.LEQUAL,[US]:t.EQUAL,[kS]:t.GEQUAL,[FS]:t.GREATER,[OS]:t.NOTEQUAL};function Q(R,E){if(E.type===Hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===wi||E.magFilter===ru||E.magFilter===Go||E.magFilter===$r||E.minFilter===wi||E.minFilter===ru||E.minFilter===Go||E.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,q[E.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,q[E.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,q[E.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,P[E.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,P[E.minFilter]),E.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,b[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===di||E.minFilter!==Go&&E.minFilter!==$r||E.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ce(R,E){let j=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const ee=E.source;let re=h.get(ee);re===void 0&&(re={},h.set(ee,re));const ne=Y(E);if(ne!==R.__cacheKey){re[ne]===void 0&&(re[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),re[ne].usedTimes++;const we=re[R.__cacheKey];we!==void 0&&(re[R.__cacheKey].usedTimes--,we.usedTimes===0&&w(E)),R.__cacheKey=ne,R.__webglTexture=re[ne].texture}return j}function V(R,E,j){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const re=ce(R,E),ne=E.source;n.bindTexture(ee,R.__webglTexture,t.TEXTURE0+j);const we=i.get(ne);if(ne.version!==we.__version||re===!0){n.activeTexture(t.TEXTURE0+j);const pe=ot.getPrimaries(ot.workingColorSpace),Se=E.colorSpace===dr?null:ot.getPrimaries(E.colorSpace),We=E.colorSpace===dr||pe===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let oe=y(E.image,!1,r.maxTextureSize);oe=ke(E,oe);const Me=s.convert(E.format,E.colorSpace),Re=s.convert(E.type);let Be=x(E.internalFormat,Me,Re,E.colorSpace,E.isVideoTexture);Q(ee,E);let be;const Ge=E.mipmaps,He=E.isVideoTexture!==!0,Je=we.__version===void 0||re===!0,O=ne.dataReady,ge=I(E,oe);if(E.isDepthTexture)Be=S(E.format===oa,E.type),Je&&(He?n.texStorage2D(t.TEXTURE_2D,1,Be,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,Be,oe.width,oe.height,0,Me,Re,null));else if(E.isDataTexture)if(Ge.length>0){He&&Je&&n.texStorage2D(t.TEXTURE_2D,ge,Be,Ge[0].width,Ge[0].height);for(let te=0,ae=Ge.length;te<ae;te++)be=Ge[te],He?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,Me,Re,be.data):n.texImage2D(t.TEXTURE_2D,te,Be,be.width,be.height,0,Me,Re,be.data);E.generateMipmaps=!1}else He?(Je&&n.texStorage2D(t.TEXTURE_2D,ge,Be,oe.width,oe.height),O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,Me,Re,oe.data)):n.texImage2D(t.TEXTURE_2D,0,Be,oe.width,oe.height,0,Me,Re,oe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){He&&Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Be,Ge[0].width,Ge[0].height,oe.depth);for(let te=0,ae=Ge.length;te<ae;te++)if(be=Ge[te],E.format!==li)if(Me!==null)if(He){if(O)if(E.layerUpdates.size>0){const Te=Jm(be.width,be.height,E.format,E.type);for(const ve of E.layerUpdates){const Xe=be.data.subarray(ve*Te/be.data.BYTES_PER_ELEMENT,(ve+1)*Te/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,ve,be.width,be.height,1,Me,Xe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,oe.depth,Me,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Be,be.width,be.height,oe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,oe.depth,Me,Re,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Be,be.width,be.height,oe.depth,0,Me,Re,be.data)}else{He&&Je&&n.texStorage2D(t.TEXTURE_2D,ge,Be,Ge[0].width,Ge[0].height);for(let te=0,ae=Ge.length;te<ae;te++)be=Ge[te],E.format!==li?Me!==null?He?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,Me,be.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Be,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,Me,Re,be.data):n.texImage2D(t.TEXTURE_2D,te,Be,be.width,be.height,0,Me,Re,be.data)}else if(E.isDataArrayTexture)if(He){if(Je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ge,Be,oe.width,oe.height,oe.depth),O)if(E.layerUpdates.size>0){const te=Jm(oe.width,oe.height,E.format,E.type);for(const ae of E.layerUpdates){const Te=oe.data.subarray(ae*te/oe.data.BYTES_PER_ELEMENT,(ae+1)*te/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,oe.width,oe.height,1,Me,Re,Te)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,Re,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Be,oe.width,oe.height,oe.depth,0,Me,Re,oe.data);else if(E.isData3DTexture)He?(Je&&n.texStorage3D(t.TEXTURE_3D,ge,Be,oe.width,oe.height,oe.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,Re,oe.data)):n.texImage3D(t.TEXTURE_3D,0,Be,oe.width,oe.height,oe.depth,0,Me,Re,oe.data);else if(E.isFramebufferTexture){if(Je)if(He)n.texStorage2D(t.TEXTURE_2D,ge,Be,oe.width,oe.height);else{let te=oe.width,ae=oe.height;for(let Te=0;Te<ge;Te++)n.texImage2D(t.TEXTURE_2D,Te,Be,te,ae,0,Me,Re,null),te>>=1,ae>>=1}}else if(Ge.length>0){if(He&&Je){const te=le(Ge[0]);n.texStorage2D(t.TEXTURE_2D,ge,Be,te.width,te.height)}for(let te=0,ae=Ge.length;te<ae;te++)be=Ge[te],He?O&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,Me,Re,be):n.texImage2D(t.TEXTURE_2D,te,Be,Me,Re,be);E.generateMipmaps=!1}else if(He){if(Je){const te=le(oe);n.texStorage2D(t.TEXTURE_2D,ge,Be,te.width,te.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Re,oe)}else n.texImage2D(t.TEXTURE_2D,0,Be,Me,Re,oe);m(E)&&u(ee),we.__version=ne.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function H(R,E,j){if(E.image.length!==6)return;const ee=ce(R,E),re=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+j);const ne=i.get(re);if(re.version!==ne.__version||ee===!0){n.activeTexture(t.TEXTURE0+j);const we=ot.getPrimaries(ot.workingColorSpace),pe=E.colorSpace===dr?null:ot.getPrimaries(E.colorSpace),Se=E.colorSpace===dr||we===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const We=E.isCompressedTexture||E.image[0].isCompressedTexture,oe=E.image[0]&&E.image[0].isDataTexture,Me=[];for(let ae=0;ae<6;ae++)!We&&!oe?Me[ae]=y(E.image[ae],!0,r.maxCubemapSize):Me[ae]=oe?E.image[ae].image:E.image[ae],Me[ae]=ke(E,Me[ae]);const Re=Me[0],Be=s.convert(E.format,E.colorSpace),be=s.convert(E.type),Ge=x(E.internalFormat,Be,be,E.colorSpace),He=E.isVideoTexture!==!0,Je=ne.__version===void 0||ee===!0,O=re.dataReady;let ge=I(E,Re);Q(t.TEXTURE_CUBE_MAP,E);let te;if(We){He&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ge,Re.width,Re.height);for(let ae=0;ae<6;ae++){te=Me[ae].mipmaps;for(let Te=0;Te<te.length;Te++){const ve=te[Te];E.format!==li?Be!==null?He?O&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,0,0,ve.width,ve.height,Be,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,Ge,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,0,0,ve.width,ve.height,Be,be,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te,Ge,ve.width,ve.height,0,Be,be,ve.data)}}}else{if(te=E.mipmaps,He&&Je){te.length>0&&ge++;const ae=le(Me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ge,Ge,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(oe){He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me[ae].width,Me[ae].height,Be,be,Me[ae].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,Me[ae].width,Me[ae].height,0,Be,be,Me[ae].data);for(let Te=0;Te<te.length;Te++){const Xe=te[Te].image[ae].image;He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,0,0,Xe.width,Xe.height,Be,be,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,Ge,Xe.width,Xe.height,0,Be,be,Xe.data)}}else{He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Be,be,Me[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,Be,be,Me[ae]);for(let Te=0;Te<te.length;Te++){const ve=te[Te];He?O&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,0,0,Be,be,ve.image[ae]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Te+1,Ge,Be,be,ve.image[ae])}}}m(E)&&u(t.TEXTURE_CUBE_MAP),ne.__version=re.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function K(R,E,j,ee,re,ne){const we=s.convert(j.format,j.colorSpace),pe=s.convert(j.type),Se=x(j.internalFormat,we,pe,j.colorSpace),We=i.get(E),oe=i.get(j);if(oe.__renderTarget=E,!We.__hasExternalTextures){const Me=Math.max(1,E.width>>ne),Re=Math.max(1,E.height>>ne);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ne,Se,Me,Re,E.depth,0,we,pe,null):n.texImage2D(re,ne,Se,Me,Re,0,we,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Ce(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,re,oe.__webglTexture,0,Ie(E)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,re,oe.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(R,E,j){if(t.bindRenderbuffer(t.RENDERBUFFER,R),E.depthBuffer){const ee=E.depthTexture,re=ee&&ee.isDepthTexture?ee.type:null,ne=S(E.stencilBuffer,re),we=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=Ie(E);Ce(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,ne,E.width,E.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ne,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ne,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,R)}else{const ee=E.textures;for(let re=0;re<ee.length;re++){const ne=ee[re],we=s.convert(ne.format,ne.colorSpace),pe=s.convert(ne.type),Se=x(ne.internalFormat,we,pe,ne.colorSpace),We=Ie(E);j&&Ce(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,Se,E.width,E.height):Ce(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,Se,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Se,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(E.depthTexture);ee.__renderTarget=E,(!ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const re=ee.__webglTexture,ne=Ie(E);if(E.depthTexture.format===$s)Ce(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===oa)Ce(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ue(R){const E=i.get(R),j=R.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==R.depthTexture){const ee=R.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const re=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",re)};ee.addEventListener("dispose",re),E.__depthDisposeCallback=re}E.__boundDepthTexture=ee}if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");se(E.__webglFramebuffer,R)}else if(j){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),$(E.__webglDepthbuffer[ee],R,!1);else{const re=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,re,t.RENDERBUFFER,ne)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),$(E.__webglDepthbuffer,R,!1);else{const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(R,E,j){const ee=i.get(R);E!==void 0&&K(ee.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&ue(R)}function Ue(R){const E=R.texture,j=i.get(R),ee=i.get(E);R.addEventListener("dispose",C);const re=R.textures,ne=R.isWebGLCubeRenderTarget===!0,we=re.length>1;if(we||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,a.memory.textures++),ne){j.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer[pe]=[];for(let Se=0;Se<E.mipmaps.length;Se++)j.__webglFramebuffer[pe][Se]=t.createFramebuffer()}else j.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){j.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)j.__webglFramebuffer[pe]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(we)for(let pe=0,Se=re.length;pe<Se;pe++){const We=i.get(re[pe]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&Ce(R)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const Se=re[pe];j.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[pe]);const We=s.convert(Se.format,Se.colorSpace),oe=s.convert(Se.type),Me=x(Se.internalFormat,We,oe,Se.colorSpace,R.isXRRenderTarget===!0),Re=Ie(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,Me,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,j.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),$(j.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),Q(t.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)K(j.__webglFramebuffer[pe][Se],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Se);else K(j.__webglFramebuffer[pe],R,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let pe=0,Se=re.length;pe<Se;pe++){const We=re[pe],oe=i.get(We);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),Q(t.TEXTURE_2D,We),K(j.__webglFramebuffer,R,We,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(We)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ee.__webglTexture),Q(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let Se=0;Se<E.mipmaps.length;Se++)K(j.__webglFramebuffer[Se],R,E,t.COLOR_ATTACHMENT0,pe,Se);else K(j.__webglFramebuffer,R,E,t.COLOR_ATTACHMENT0,pe,0);m(E)&&u(pe),n.unbindTexture()}R.depthBuffer&&ue(R)}function Ee(R){const E=R.textures;for(let j=0,ee=E.length;j<ee;j++){const re=E[j];if(m(re)){const ne=g(R),we=i.get(re).__webglTexture;n.bindTexture(ne,we),u(ne),n.unbindTexture()}}}const Fe=[],U=[];function Ve(R){if(R.samples>0){if(Ce(R)===!1){const E=R.textures,j=R.width,ee=R.height;let re=t.COLOR_BUFFER_BIT;const ne=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(R),pe=E.length>1;if(pe)for(let Se=0;Se<E.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Se=0;Se<E.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Se]);const We=i.get(E[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,j,ee,0,0,j,ee,re,t.NEAREST),l===!0&&(Fe.length=0,U.length=0,Fe.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Fe.push(ne),U.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Se=0;Se<E.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,we.__webglColorRenderbuffer[Se]);const We=i.get(E[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ie(R){return Math.min(r.maxSamples,R.samples)}function Ce(R){const E=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function he(R){const E=a.render.frame;d.get(R)!==E&&(d.set(R,E),R.update())}function ke(R,E){const j=R.colorSpace,ee=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||j!==fa&&j!==dr&&(ot.getTransfer(j)===pt?(ee!==li||re!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),E}function le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=ie,this.setTextureCube=N,this.rebindTextures=fe,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=K,this.useMultisampledRTT=Ce}function jT(t,e){function n(i,r=dr){let s;const a=ot.getTransfer(r);if(i===Ki)return t.UNSIGNED_BYTE;if(i===Cf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===zv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ov)return t.BYTE;if(i===kv)return t.SHORT;if(i===ho)return t.UNSIGNED_SHORT;if(i===Af)return t.INT;if(i===ss)return t.UNSIGNED_INT;if(i===Hi)return t.FLOAT;if(i===yo)return t.HALF_FLOAT;if(i===Bv)return t.ALPHA;if(i===Hv)return t.RGB;if(i===li)return t.RGBA;if(i===Vv)return t.LUMINANCE;if(i===Gv)return t.LUMINANCE_ALPHA;if(i===$s)return t.DEPTH_COMPONENT;if(i===oa)return t.DEPTH_STENCIL;if(i===jv)return t.RED;if(i===Rf)return t.RED_INTEGER;if(i===Wv)return t.RG;if(i===Pf)return t.RG_INTEGER;if(i===Lf)return t.RGBA_INTEGER;if(i===bl||i===Rl||i===Pl||i===Ll)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qd||i===Kd||i===Zd||i===Qd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Kd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Qd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jd||i===eh||i===th)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jd||i===eh)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===th)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===nh||i===ih||i===rh||i===sh||i===ah||i===oh||i===lh||i===ch||i===uh||i===dh||i===hh||i===fh||i===ph||i===mh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===nh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===rh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ch)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ph)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nl||i===gh||i===vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nl)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xv||i===_h||i===xh||i===yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Nl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_h)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===aa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class WT extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Dn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XT={type:"move"};class Nu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(XT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Dn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const YT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$T=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zi({vertexShader:YT,fragmentShader:$T,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ct(new Pc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KT extends us{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,v=null;const y=new qT,m=n.getContextAttributes();let u=null,g=null;const x=[],S=[],I=new $e;let A=null;const C=new Tn;C.viewport=new Rt;const L=new Tn;L.viewport=new Rt;const w=[C,L],M=new WT;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let H=x[V];return H===void 0&&(H=new Nu,x[V]=H),H.getTargetRaySpace()},this.getControllerGrip=function(V){let H=x[V];return H===void 0&&(H=new Nu,x[V]=H),H.getGripSpace()},this.getHand=function(V){let H=x[V];return H===void 0&&(H=new Nu,x[V]=H),H.getHandSpace()};function k(V){const H=S.indexOf(V.inputSource);if(H===-1)return;const K=x[H];K!==void 0&&(K.update(V.inputSource,V.frame,c||a),K.dispatchEvent({type:V.type,data:V.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",J);for(let V=0;V<x.length;V++){const H=S[V];H!==null&&(S[V]=null,x[V].disconnect(H))}D=null,F=null,y.reset(),e.setRenderTarget(u),p=null,h=null,f=null,r=null,g=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const H={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,H),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new as(p.framebufferWidth,p.framebufferHeight,{format:li,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let H=null,K=null,$=null;m.depth&&($=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,H=m.stencil?oa:$s,K=m.stencil?aa:ss);const se={colorFormat:n.RGBA8,depthFormat:$,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(se),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new as(h.textureWidth,h.textureHeight,{format:li,type:Ki,depthTexture:new s_(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function J(V){for(let H=0;H<V.removed.length;H++){const K=V.removed[H],$=S.indexOf(K);$>=0&&(S[$]=null,x[$].disconnect(K))}for(let H=0;H<V.added.length;H++){const K=V.added[H];let $=S.indexOf(K);if($===-1){for(let ue=0;ue<x.length;ue++)if(ue>=S.length){S.push(K),$=ue;break}else if(S[ue]===null){S[ue]=K,$=ue;break}if($===-1)break}const se=x[$];se&&se.connect(K)}}const W=new B,ie=new B;function N(V,H,K){W.setFromMatrixPosition(H.matrixWorld),ie.setFromMatrixPosition(K.matrixWorld);const $=W.distanceTo(ie),se=H.projectionMatrix.elements,ue=K.projectionMatrix.elements,fe=se[14]/(se[10]-1),Ue=se[14]/(se[10]+1),Ee=(se[9]+1)/se[5],Fe=(se[9]-1)/se[5],U=(se[8]-1)/se[0],Ve=(ue[8]+1)/ue[0],Ie=fe*U,Ce=fe*Ve,he=$/(-U+Ve),ke=he*-U;if(H.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(ke),V.translateZ(he),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),se[10]===-1)V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{const le=fe+he,R=Ue+he,E=Ie-ke,j=Ce+($-ke),ee=Ee*Ue/R*le,re=Fe*Ue/R*le;V.projectionMatrix.makePerspective(E,j,ee,re,le,R),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function q(V,H){H===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(H.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let H=V.near,K=V.far;y.texture!==null&&(y.depthNear>0&&(H=y.depthNear),y.depthFar>0&&(K=y.depthFar)),M.near=L.near=C.near=H,M.far=L.far=C.far=K,(D!==M.near||F!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,F=M.far),C.layers.mask=V.layers.mask|2,L.layers.mask=V.layers.mask|4,M.layers.mask=C.layers.mask|L.layers.mask;const $=V.parent,se=M.cameras;q(M,$);for(let ue=0;ue<se.length;ue++)q(se[ue],$);se.length===2?N(M,C,L):M.projectionMatrix.copy(C.projectionMatrix),P(V,M,$)};function P(V,H,K){K===null?V.matrix.copy(H.matrixWorld):(V.matrix.copy(K.matrixWorld),V.matrix.invert(),V.matrix.multiply(H.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(H.projectionMatrix),V.projectionMatrixInverse.copy(H.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=oc*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let b=null;function Q(V,H){if(d=H.getViewerPose(c||a),v=H,d!==null){const K=d.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let $=!1;K.length!==M.cameras.length&&(M.cameras.length=0,$=!0);for(let ue=0;ue<K.length;ue++){const fe=K[ue];let Ue=null;if(p!==null)Ue=p.getViewport(fe);else{const Fe=f.getViewSubImage(h,fe);Ue=Fe.viewport,ue===0&&(e.setRenderTargetTextures(g,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(g))}let Ee=w[ue];Ee===void 0&&(Ee=new Tn,Ee.layers.enable(ue),Ee.viewport=new Rt,w[ue]=Ee),Ee.matrix.fromArray(fe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(fe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ue===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),$===!0&&M.cameras.push(Ee)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const ue=f.getDepthInformation(K[0]);ue&&ue.isValid&&ue.texture&&y.init(e,ue,r.renderState)}}for(let K=0;K<x.length;K++){const $=S[K],se=x[K];$!==null&&se!==void 0&&se.update($,H,c||a)}b&&b(V,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),v=null}const ce=new i_;ce.setAnimationLoop(Q),this.setAnimationLoop=function(V){b=V},this.dispose=function(){}}}const kr=new fi,ZT=new vt;function QT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,e_(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,g,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),f(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,g,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===on&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===on&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const g=e.get(u),x=g.envMap,S=g.envMapRotation;x&&(m.envMap.value=x,kr.copy(S),kr.x*=-1,kr.y*=-1,kr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),m.envMapRotation.value.setFromMatrix4(ZT.makeRotationFromEuler(kr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,g,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*g,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,g){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const g=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function JT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,x){const S=x.program;i.uniformBlockBinding(g,S)}function c(g,x){let S=r[g.id];S===void 0&&(v(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",m));const I=x.program;i.updateUBOMapping(g,I);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function d(g){const x=f();g.__bindingPointIndex=x;const S=t.createBuffer(),I=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,I,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const x=r[g.id],S=g.uniforms,I=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,C=S.length;A<C;A++){const L=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,M=L.length;w<M;w++){const D=L[w];if(p(D,A,w,I)===!0){const F=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let J=0;J<k.length;J++){const W=k[J],ie=y(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,F+Y,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,Y),Y+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,x,S,I){const A=g.value,C=x+"_"+S;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{const L=I[C];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return I[C]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function v(g){const x=g.uniforms;let S=0;const I=16;for(let C=0,L=x.length;C<L;C++){const w=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,D=w.length;M<D;M++){const F=w[M],k=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,J=k.length;Y<J;Y++){const W=k[Y],ie=y(W),N=S%I,q=N%ie.boundary,P=N+q;S+=q,P!==0&&I-P<ie.storage&&(S+=I-P),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=ie.storage}}}const A=S%I;return A>0&&(S+=I-A),g.__size=S,g.__cache={},this}function y(g){const x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function m(g){const x=g.target;x.removeEventListener("dispose",m);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class lc{constructor(e={}){const{canvas:n=VS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const v=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const g=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gn,this.toneMapping=wr,this.toneMappingExposure=1;const S=this;let I=!1,A=0,C=0,L=null,w=-1,M=null;const D=new Rt,F=new Rt;let k=null;const Y=new Qe(0);let J=0,W=n.width,ie=n.height,N=1,q=null,P=null;const b=new Rt(0,0,W,ie),Q=new Rt(0,0,W,ie);let ce=!1;const V=new Df;let H=!1,K=!1;const $=new vt,se=new vt,ue=new B,fe=new Rt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ee=!1;function Fe(){return L===null?N:1}let U=i;function Ve(T,z){return n.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wf}`),n.addEventListener("webglcontextlost",ae,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",ve,!1),U===null){const z="webgl2";if(U=Ve(z,T),U===null)throw Ve(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ie,Ce,he,ke,le,R,E,j,ee,re,ne,we,pe,Se,We,oe,Me,Re,Be,be,Ge,He,Je,O;function ge(){Ie=new sw(U),Ie.init(),He=new jT(U,Ie),Ce=new J2(U,Ie,e,He),he=new HT(U,Ie),Ce.reverseDepthBuffer&&h&&he.buffers.depth.setReversed(!0),ke=new lw(U),le=new AT,R=new GT(U,Ie,he,le,Ce,He,ke),E=new tw(S),j=new rw(S),ee=new mM(U),Je=new Z2(U,ee),re=new aw(U,ee,ke,Je),ne=new uw(U,re,ee,ke),Be=new cw(U,Ce,R),oe=new ew(le),we=new TT(S,E,j,Ie,Ce,Je,oe),pe=new QT(S,le),Se=new bT,We=new DT(Ie),Re=new K2(S,E,j,he,ne,p,l),Me=new zT(S,ne,Ce),O=new JT(U,ke,Ce,he),be=new Q2(U,Ie,ke),Ge=new ow(U,Ie,ke),ke.programs=we.programs,S.capabilities=Ce,S.extensions=Ie,S.properties=le,S.renderLists=Se,S.shadowMap=Me,S.state=he,S.info=ke}ge();const te=new KT(S,U);this.xr=te,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Ie.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ie.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(W,ie,!1))},this.getSize=function(T){return T.set(W,ie)},this.setSize=function(T,z,X=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,ie=z,n.width=Math.floor(T*N),n.height=Math.floor(z*N),X===!0&&(n.style.width=T+"px",n.style.height=z+"px"),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(W*N,ie*N).floor()},this.setDrawingBufferSize=function(T,z,X){W=T,ie=z,N=X,n.width=Math.floor(T*X),n.height=Math.floor(z*X),this.setViewport(0,0,T,z)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(b)},this.setViewport=function(T,z,X,Z){T.isVector4?b.set(T.x,T.y,T.z,T.w):b.set(T,z,X,Z),he.viewport(D.copy(b).multiplyScalar(N).round())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,z,X,Z){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,z,X,Z),he.scissor(F.copy(Q).multiplyScalar(N).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(T){he.setScissorTest(ce=T)},this.setOpaqueSort=function(T){q=T},this.setTransparentSort=function(T){P=T},this.getClearColor=function(T){return T.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(T=!0,z=!0,X=!0){let Z=0;if(T){let G=!1;if(L!==null){const _e=L.texture.format;G=_e===Lf||_e===Pf||_e===Rf}if(G){const _e=L.texture.type,Pe=_e===Ki||_e===ss||_e===ho||_e===aa||_e===Cf||_e===bf,de=Re.getClearColor(),ye=Re.getClearAlpha(),De=de.r,Oe=de.g,xe=de.b;Pe?(v[0]=De,v[1]=Oe,v[2]=xe,v[3]=ye,U.clearBufferuiv(U.COLOR,0,v)):(y[0]=De,y[1]=Oe,y[2]=xe,y[3]=ye,U.clearBufferiv(U.COLOR,0,y))}else Z|=U.COLOR_BUFFER_BIT}z&&(Z|=U.DEPTH_BUFFER_BIT),X&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ae,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),We.dispose(),le.dispose(),E.dispose(),j.dispose(),ne.dispose(),Je.dispose(),O.dispose(),we.dispose(),te.dispose(),te.removeEventListener("sessionstart",Mt),te.removeEventListener("sessionend",Pt),Ut.stop()};function ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=ke.autoReset,z=Me.enabled,X=Me.autoUpdate,Z=Me.needsUpdate,G=Me.type;ge(),ke.autoReset=T,Me.enabled=z,Me.autoUpdate=X,Me.needsUpdate=Z,Me.type=G}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Xe(T){const z=T.target;z.removeEventListener("dispose",Xe),et(z)}function et(T){tt(T),le.remove(T)}function tt(T){const z=le.get(T).programs;z!==void 0&&(z.forEach(function(X){we.releaseProgram(X)}),T.isShaderMaterial&&we.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,X,Z,G,_e){z===null&&(z=Ue);const Pe=G.isMesh&&G.matrixWorld.determinant()<0,de=Jt(T,z,X,Z,G);he.setMaterial(Z,Pe);let ye=X.index,De=1;if(Z.wireframe===!0){if(ye=re.getWireframeAttribute(X),ye===void 0)return;De=2}const Oe=X.drawRange,xe=X.attributes.position;let qe=Oe.start*De,rt=(Oe.start+Oe.count)*De;_e!==null&&(qe=Math.max(qe,_e.start*De),rt=Math.min(rt,(_e.start+_e.count)*De)),ye!==null?(qe=Math.max(qe,0),rt=Math.min(rt,ye.count)):xe!=null&&(qe=Math.max(qe,0),rt=Math.min(rt,xe.count));const ut=rt-qe;if(ut<0||ut===1/0)return;Je.setup(G,Z,de,X,ye);let Ht,st=be;if(ye!==null&&(Ht=ee.get(ye),st=Ge,st.setIndex(Ht)),G.isMesh)Z.wireframe===!0?(he.setLineWidth(Z.wireframeLinewidth*Fe()),st.setMode(U.LINES)):st.setMode(U.TRIANGLES);else if(G.isLine){let je=Z.linewidth;je===void 0&&(je=1),he.setLineWidth(je*Fe()),G.isLineSegments?st.setMode(U.LINES):G.isLineLoop?st.setMode(U.LINE_LOOP):st.setMode(U.LINE_STRIP)}else G.isPoints?st.setMode(U.POINTS):G.isSprite&&st.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)st.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ie.get("WEBGL_multi_draw"))st.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const je=G._multiDrawStarts,en=G._multiDrawCounts,at=G._multiDrawCount,fn=ye?ee.get(ye).bytesPerElement:1,Hn=le.get(Z).currentProgram.getUniforms();for(let Vt=0;Vt<at;Vt++)Hn.setValue(U,"_gl_DrawID",Vt),st.render(je[Vt]/fn,en[Vt])}else if(G.isInstancedMesh)st.renderInstances(qe,ut,G.count);else if(X.isInstancedBufferGeometry){const je=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,en=Math.min(X.instanceCount,je);st.renderInstances(qe,ut,en)}else st.render(qe,ut)};function Ye(T,z,X){T.transparent===!0&&T.side===Ei&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,Zt(T,z,X),T.side=Cr,T.needsUpdate=!0,Zt(T,z,X),T.side=Ei):Zt(T,z,X)}this.compile=function(T,z,X=null){X===null&&(X=T),u=We.get(X),u.init(z),x.push(u),X.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights();const Z=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Pe=0;Pe<_e.length;Pe++){const de=_e[Pe];Ye(de,X,G),Z.add(de)}else Ye(_e,X,G),Z.add(_e)}),x.pop(),u=null,Z},this.compileAsync=function(T,z,X=null){const Z=this.compile(T,z,X);return new Promise(G=>{function _e(){if(Z.forEach(function(Pe){le.get(Pe).currentProgram.isReady()&&Z.delete(Pe)}),Z.size===0){G(T);return}setTimeout(_e,10)}Ie.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let St=null;function Ae(T){St&&St(T)}function Mt(){Ut.stop()}function Pt(){Ut.start()}const Ut=new i_;Ut.setAnimationLoop(Ae),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(T){St=T,te.setAnimationLoop(T),T===null?Ut.stop():Ut.start()},te.addEventListener("sessionstart",Mt),te.addEventListener("sessionend",Pt),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(z),z=te.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,z,L),u=We.get(T,x.length),u.init(z),x.push(u),se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),V.setFromProjectionMatrix(se),K=this.localClippingEnabled,H=oe.init(this.clippingPlanes,K),m=Se.get(T,g.length),m.init(),g.push(m),te.enabled===!0&&te.isPresenting===!0){const _e=S.xr.getDepthSensingMesh();_e!==null&&nt(_e,z,-1/0,S.sortObjects)}nt(T,z,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(q,P),Ee=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ee&&Re.addToRenderList(m,T),this.info.render.frame++,H===!0&&oe.beginShadows();const X=u.state.shadowsArray;Me.render(X,T,z),H===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,G=m.transmissive;if(u.setupLights(),z.isArrayCamera){const _e=z.cameras;if(G.length>0)for(let Pe=0,de=_e.length;Pe<de;Pe++){const ye=_e[Pe];Kn(Z,G,T,ye)}Ee&&Re.render(T);for(let Pe=0,de=_e.length;Pe<de;Pe++){const ye=_e[Pe];pi(m,T,ye,ye.viewport)}}else G.length>0&&Kn(Z,G,T,z),Ee&&Re.render(T),pi(m,T,z);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(S,T,z),Je.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],H===!0&&oe.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function nt(T,z,X,Z){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)u.pushLight(T),T.castShadow&&u.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||V.intersectsSprite(T)){Z&&fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Pe=ne.update(T),de=T.material;de.visible&&m.push(T,Pe,de,X,fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||V.intersectsObject(T))){const Pe=ne.update(T),de=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),fe.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),fe.copy(Pe.boundingSphere.center)),fe.applyMatrix4(T.matrixWorld).applyMatrix4(se)),Array.isArray(de)){const ye=Pe.groups;for(let De=0,Oe=ye.length;De<Oe;De++){const xe=ye[De],qe=de[xe.materialIndex];qe&&qe.visible&&m.push(T,Pe,qe,X,fe.z,xe)}}else de.visible&&m.push(T,Pe,de,X,fe.z,null)}}const _e=T.children;for(let Pe=0,de=_e.length;Pe<de;Pe++)nt(_e[Pe],z,X,Z)}function pi(T,z,X,Z){const G=T.opaque,_e=T.transmissive,Pe=T.transparent;u.setupLightsView(X),H===!0&&oe.setGlobalState(S.clippingPlanes,X),Z&&he.viewport(D.copy(Z)),G.length>0&&dn(G,z,X),_e.length>0&&dn(_e,z,X),Pe.length>0&&dn(Pe,z,X),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Kn(T,z,X,Z){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Z.id]===void 0&&(u.state.transmissionRenderTarget[Z.id]=new as(1,1,{generateMipmaps:!0,type:Ie.has("EXT_color_buffer_half_float")||Ie.has("EXT_color_buffer_float")?yo:Ki,minFilter:$r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const _e=u.state.transmissionRenderTarget[Z.id],Pe=Z.viewport||D;_e.setSize(Pe.z,Pe.w);const de=S.getRenderTarget();S.setRenderTarget(_e),S.getClearColor(Y),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),Ee&&Re.render(X);const ye=S.toneMapping;S.toneMapping=wr;const De=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),u.setupLightsView(Z),H===!0&&oe.setGlobalState(S.clippingPlanes,Z),dn(T,X,Z),R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e),Ie.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let xe=0,qe=z.length;xe<qe;xe++){const rt=z[xe],ut=rt.object,Ht=rt.geometry,st=rt.material,je=rt.group;if(st.side===Ei&&ut.layers.test(Z.layers)){const en=st.side;st.side=on,st.needsUpdate=!0,hn(ut,X,Z,Ht,st,je),st.side=en,st.needsUpdate=!0,Oe=!0}}Oe===!0&&(R.updateMultisampleRenderTarget(_e),R.updateRenderTargetMipmap(_e))}S.setRenderTarget(de),S.setClearColor(Y,J),De!==void 0&&(Z.viewport=De),S.toneMapping=ye}function dn(T,z,X){const Z=z.isScene===!0?z.overrideMaterial:null;for(let G=0,_e=T.length;G<_e;G++){const Pe=T[G],de=Pe.object,ye=Pe.geometry,De=Z===null?Pe.material:Z,Oe=Pe.group;de.layers.test(X.layers)&&hn(de,z,X,ye,De,Oe)}}function hn(T,z,X,Z,G,_e){T.onBeforeRender(S,z,X,Z,G,_e),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(S,z,X,Z,T,_e),G.transparent===!0&&G.side===Ei&&G.forceSinglePass===!1?(G.side=on,G.needsUpdate=!0,S.renderBufferDirect(X,z,Z,G,T,_e),G.side=Cr,G.needsUpdate=!0,S.renderBufferDirect(X,z,Z,G,T,_e),G.side=Ei):S.renderBufferDirect(X,z,Z,G,T,_e),T.onAfterRender(S,z,X,Z,G,_e)}function Zt(T,z,X){z.isScene!==!0&&(z=Ue);const Z=le.get(T),G=u.state.lights,_e=u.state.shadowsArray,Pe=G.state.version,de=we.getParameters(T,G.state,_e,z,X),ye=we.getProgramCacheKey(de);let De=Z.programs;Z.environment=T.isMeshStandardMaterial?z.environment:null,Z.fog=z.fog,Z.envMap=(T.isMeshStandardMaterial?j:E).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",Xe),De=new Map,Z.programs=De);let Oe=De.get(ye);if(Oe!==void 0){if(Z.currentProgram===Oe&&Z.lightsStateVersion===Pe)return _t(T,de),Oe}else de.uniforms=we.getUniforms(T),T.onBeforeCompile(de,S),Oe=we.acquireProgram(de,ye),De.set(ye,Oe),Z.uniforms=de.uniforms;const xe=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(xe.clippingPlanes=oe.uniform),_t(T,de),Z.needsLights=Zn(T),Z.lightsStateVersion=Pe,Z.needsLights&&(xe.ambientLightColor.value=G.state.ambient,xe.lightProbe.value=G.state.probe,xe.directionalLights.value=G.state.directional,xe.directionalLightShadows.value=G.state.directionalShadow,xe.spotLights.value=G.state.spot,xe.spotLightShadows.value=G.state.spotShadow,xe.rectAreaLights.value=G.state.rectArea,xe.ltc_1.value=G.state.rectAreaLTC1,xe.ltc_2.value=G.state.rectAreaLTC2,xe.pointLights.value=G.state.point,xe.pointLightShadows.value=G.state.pointShadow,xe.hemisphereLights.value=G.state.hemi,xe.directionalShadowMap.value=G.state.directionalShadowMap,xe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,xe.spotShadowMap.value=G.state.spotShadowMap,xe.spotLightMatrix.value=G.state.spotLightMatrix,xe.spotLightMap.value=G.state.spotLightMap,xe.pointShadowMap.value=G.state.pointShadowMap,xe.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Oe,Z.uniformsList=null,Oe}function Qt(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Dl.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function _t(T,z){const X=le.get(T);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Jt(T,z,X,Z,G){z.isScene!==!0&&(z=Ue),R.resetTextureUnits();const _e=z.fog,Pe=Z.isMeshStandardMaterial?z.environment:null,de=L===null?S.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:fa,ye=(Z.isMeshStandardMaterial?j:E).get(Z.envMap||Pe),De=Z.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Oe=!!X.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),xe=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,rt=!!X.morphAttributes.color;let ut=wr;Z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ut=S.toneMapping);const Ht=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,st=Ht!==void 0?Ht.length:0,je=le.get(Z),en=u.state.lights;if(H===!0&&(K===!0||T!==M)){const Sn=T===M&&Z.id===w;oe.setState(Z,T,Sn)}let at=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==en.state.version||je.outputColorSpace!==de||G.isBatchedMesh&&je.batching===!1||!G.isBatchedMesh&&je.batching===!0||G.isBatchedMesh&&je.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&je.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&je.instancing===!1||!G.isInstancedMesh&&je.instancing===!0||G.isSkinnedMesh&&je.skinning===!1||!G.isSkinnedMesh&&je.skinning===!0||G.isInstancedMesh&&je.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&je.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&je.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&je.instancingMorph===!1&&G.morphTexture!==null||je.envMap!==ye||Z.fog===!0&&je.fog!==_e||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==oe.numPlanes||je.numIntersection!==oe.numIntersection)||je.vertexAlphas!==De||je.vertexTangents!==Oe||je.morphTargets!==xe||je.morphNormals!==qe||je.morphColors!==rt||je.toneMapping!==ut||je.morphTargetsCount!==st)&&(at=!0):(at=!0,je.__version=Z.version);let fn=je.currentProgram;at===!0&&(fn=Zt(Z,z,G));let Hn=!1,Vt=!1,Qn=!1;const dt=fn.getUniforms(),yn=je.uniforms;if(he.useProgram(fn.program)&&(Hn=!0,Vt=!0,Qn=!0),Z.id!==w&&(w=Z.id,Vt=!0),Hn||M!==T){he.buffers.depth.getReversed()?($.copy(T.projectionMatrix),jS($),WS($),dt.setValue(U,"projectionMatrix",$)):dt.setValue(U,"projectionMatrix",T.projectionMatrix),dt.setValue(U,"viewMatrix",T.matrixWorldInverse);const gi=dt.map.cameraPosition;gi!==void 0&&gi.setValue(U,ue.setFromMatrixPosition(T.matrixWorld)),Ce.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,Vt=!0,Qn=!0)}if(G.isSkinnedMesh){dt.setOptional(U,G,"bindMatrix"),dt.setOptional(U,G,"bindMatrixInverse");const Sn=G.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),dt.setValue(U,"boneTexture",Sn.boneTexture,R))}G.isBatchedMesh&&(dt.setOptional(U,G,"batchingTexture"),dt.setValue(U,"batchingTexture",G._matricesTexture,R),dt.setOptional(U,G,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",G._indirectTexture,R),dt.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",G._colorsTexture,R));const Nr=X.morphAttributes;if((Nr.position!==void 0||Nr.normal!==void 0||Nr.color!==void 0)&&Be.update(G,X,fn),(Vt||je.receiveShadow!==G.receiveShadow)&&(je.receiveShadow=G.receiveShadow,dt.setValue(U,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(yn.envMap.value=ye,yn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&z.environment!==null&&(yn.envMapIntensity.value=z.environmentIntensity),Vt&&(dt.setValue(U,"toneMappingExposure",S.toneMappingExposure),je.needsLights&&mi(yn,Qn),_e&&Z.fog===!0&&pe.refreshFogUniforms(yn,_e),pe.refreshMaterialUniforms(yn,Z,N,ie,u.state.transmissionRenderTarget[T.id]),Dl.upload(U,Qt(je),yn,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Dl.upload(U,Qt(je),yn,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(U,"center",G.center),dt.setValue(U,"modelViewMatrix",G.modelViewMatrix),dt.setValue(U,"normalMatrix",G.normalMatrix),dt.setValue(U,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Sn=Z.uniformsGroups;for(let gi=0,vi=Sn.length;gi<vi;gi++){const To=Sn[gi];O.update(To,fn),O.bind(To,fn)}}return fn}function mi(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function Zn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,z,X){le.get(T.texture).__webglTexture=z,le.get(T.depthTexture).__webglTexture=X;const Z=le.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=X===void 0,Z.__autoAllocateDepthBuffer||Ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,z){const X=le.get(T);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,X=0){L=T,A=z,C=X;let Z=!0,G=null,_e=!1,Pe=!1;if(T){const ye=le.get(T);if(ye.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1;else if(ye.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(ye.__hasExternalTextures)R.rebindTextures(T,le.get(T.texture).__webglTexture,le.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const xe=T.depthTexture;if(ye.__boundDepthTexture!==xe){if(xe!==null&&le.has(xe)&&(T.width!==xe.image.width||T.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Pe=!0);const Oe=le.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[z])?G=Oe[z][X]:G=Oe[z],_e=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?G=le.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?G=Oe[X]:G=Oe,D.copy(T.viewport),F.copy(T.scissor),k=T.scissorTest}else D.copy(b).multiplyScalar(N).floor(),F.copy(Q).multiplyScalar(N).floor(),k=ce;if(he.bindFramebuffer(U.FRAMEBUFFER,G)&&Z&&he.drawBuffers(T,G),he.viewport(D),he.scissor(F),he.setScissorTest(k),_e){const ye=le.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,ye.__webglTexture,X)}else if(Pe){const ye=le.get(T.texture),De=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,X||0,De)}w=-1},this.readRenderTargetPixels=function(T,z,X,Z,G,_e,Pe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(de=de[Pe]),de){he.bindFramebuffer(U.FRAMEBUFFER,de);try{const ye=T.texture,De=ye.format,Oe=ye.type;if(!Ce.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Z&&X>=0&&X<=T.height-G&&U.readPixels(z,X,Z,G,He.convert(De),He.convert(Oe),_e)}finally{const ye=L!==null?le.get(L).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(T,z,X,Z,G,_e,Pe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=le.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(de=de[Pe]),de){const ye=T.texture,De=ye.format,Oe=ye.type;if(!Ce.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=T.width-Z&&X>=0&&X<=T.height-G){he.bindFramebuffer(U.FRAMEBUFFER,de);const xe=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xe),U.bufferData(U.PIXEL_PACK_BUFFER,_e.byteLength,U.STREAM_READ),U.readPixels(z,X,Z,G,He.convert(De),He.convert(Oe),0);const qe=L!==null?le.get(L).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,qe);const rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await GS(U,rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xe),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_e),U.deleteBuffer(xe),U.deleteSync(rt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,z=null,X=0){T.isTexture!==!0&&(Ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-X),G=Math.floor(T.image.width*Z),_e=Math.floor(T.image.height*Z),Pe=z!==null?z.x:0,de=z!==null?z.y:0;R.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Pe,de,G,_e),he.unbindTexture()},this.copyTextureToTexture=function(T,z,X=null,Z=null,G=0){T.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],z=arguments[2],G=arguments[3]||0,X=null);let _e,Pe,de,ye,De,Oe,xe,qe,rt;const ut=T.isCompressedTexture?T.mipmaps[G]:T.image;X!==null?(_e=X.max.x-X.min.x,Pe=X.max.y-X.min.y,de=X.isBox3?X.max.z-X.min.z:1,ye=X.min.x,De=X.min.y,Oe=X.isBox3?X.min.z:0):(_e=ut.width,Pe=ut.height,de=ut.depth||1,ye=0,De=0,Oe=0),Z!==null?(xe=Z.x,qe=Z.y,rt=Z.z):(xe=0,qe=0,rt=0);const Ht=He.convert(z.format),st=He.convert(z.type);let je;z.isData3DTexture?(R.setTexture3D(z,0),je=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(R.setTexture2DArray(z,0),je=U.TEXTURE_2D_ARRAY):(R.setTexture2D(z,0),je=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const en=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),fn=U.getParameter(U.UNPACK_SKIP_PIXELS),Hn=U.getParameter(U.UNPACK_SKIP_ROWS),Vt=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ut.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ut.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,De),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe);const Qn=T.isDataArrayTexture||T.isData3DTexture,dt=z.isDataArrayTexture||z.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const yn=le.get(T),Nr=le.get(z),Sn=le.get(yn.__renderTarget),gi=le.get(Nr.__renderTarget);he.bindFramebuffer(U.READ_FRAMEBUFFER,Sn.__webglFramebuffer),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let vi=0;vi<de;vi++)Qn&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,le.get(T).__webglTexture,G,Oe+vi),T.isDepthTexture?(dt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,le.get(z).__webglTexture,G,rt+vi),U.blitFramebuffer(ye,De,_e,Pe,xe,qe,_e,Pe,U.DEPTH_BUFFER_BIT,U.NEAREST)):dt?U.copyTexSubImage3D(je,G,xe,qe,rt+vi,ye,De,_e,Pe):U.copyTexSubImage2D(je,G,xe,qe,rt+vi,ye,De,_e,Pe);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(je,G,xe,qe,rt,_e,Pe,de,Ht,st,ut.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(je,G,xe,qe,rt,_e,Pe,de,Ht,ut.data):U.texSubImage3D(je,G,xe,qe,rt,_e,Pe,de,Ht,st,ut):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,xe,qe,_e,Pe,Ht,st,ut.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,xe,qe,ut.width,ut.height,Ht,ut.data):U.texSubImage2D(U.TEXTURE_2D,G,xe,qe,_e,Pe,Ht,st,ut);U.pixelStorei(U.UNPACK_ROW_LENGTH,en),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,fn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Hn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Vt),G===0&&z.generateMipmaps&&U.generateMipmap(je),he.unbindTexture()},this.copyTextureToTexture3D=function(T,z,X=null,Z=null,G=0){return T.isTexture!==!0&&(Ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],z=arguments[3],G=arguments[4]||0),Ua('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,z,X,Z,G)},this.initRenderTarget=function(T){le.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){A=0,C=0,L=null,he.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}class Ff{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=n}clone(){return new Ff(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class u_ extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Of extends Lr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cc=new B,uc=new B,e0=new vt,Ra=new wo,ul=new Eo,Iu=new B,t0=new B;class d_ extends Dt{constructor(e=new vn,n=new Of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)cc.fromBufferAttribute(n,r-1),uc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=cc.distanceTo(uc);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ul.copy(i.boundingSphere),ul.applyMatrix4(r),ul.radius+=s,e.ray.intersectsSphere(ul)===!1)return;e0.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(e0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let y=p,m=v-1;y<m;y+=c){const u=d.getX(y),g=d.getX(y+1),x=dl(this,e,Ra,l,u,g);x&&n.push(x)}if(this.isLineLoop){const y=d.getX(v-1),m=d.getX(p),u=dl(this,e,Ra,l,y,m);u&&n.push(u)}}else{const p=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let y=p,m=v-1;y<m;y+=c){const u=dl(this,e,Ra,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=dl(this,e,Ra,l,v-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function dl(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(cc.fromBufferAttribute(a,r),uc.fromBufferAttribute(a,s),n.distanceSqToSegment(cc,uc,Iu,t0)>i)return;Iu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Iu);if(!(l<e.near||l>e.far))return{distance:l,point:t0.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class h_ extends Lr{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const n0=new vt,Mh=new wo,hl=new Eo,fl=new B;class eA extends Dt{constructor(e=new vn,n=new h_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),hl.copy(i.boundingSphere),hl.applyMatrix4(r),hl.radius+=s,e.ray.intersectsSphere(hl)===!1)return;n0.copy(r).invert(),Mh.copy(e.ray).applyMatrix4(n0);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let v=h,y=p;v<y;v++){const m=c.getX(v);fl.fromBufferAttribute(f,m),i0(fl,m,l,r,e,n,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=h,y=p;v<y;v++)fl.fromBufferAttribute(f,v),i0(fl,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function i0(t,e,n,i,r,s,a){const o=Mh.distanceSqToPoint(t);if(o<n){const l=new B;Mh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class f_ extends ln{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tA{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);const d=i[r],h=i[r+1]-d,p=(a-d)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=n||(a.isVector2?new $e:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new B,r=[],s=[],a=[],o=new B,l=new vt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new B)}s[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const v=Math.acos($t(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,v))}a[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos($t(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),a[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function kf(){let t=0,e=0,n=0,i=0;function r(s,a,o,l){t=s,e=o,n=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,d,f){let h=(a-s)/c-(o-s)/(c+d)+(o-a)/d,p=(o-a)/d-(l-a)/(d+f)+(l-o)/f;h*=d,p*=d,r(a,o,h,p)},calc:function(s){const a=s*s,o=a*s;return t+e*s+n*a+i*o}}}const pl=new B,Du=new kf,Uu=new kf,Fu=new kf;class nA extends tA{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new B){const i=n,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,d;this.closed||o>0?c=r[(o-1)%s]:(pl.subVectors(r[0],r[1]).add(r[0]),c=pl);const f=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(pl.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=pl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(d),p);y<1e-4&&(y=1),v<1e-4&&(v=y),m<1e-4&&(m=y),Du.initNonuniformCatmullRom(c.x,f.x,h.x,d.x,v,y,m),Uu.initNonuniformCatmullRom(c.y,f.y,h.y,d.y,v,y,m),Fu.initNonuniformCatmullRom(c.z,f.z,h.z,d.z,v,y,m)}else this.curveType==="catmullrom"&&(Du.initCatmullRom(c.x,f.x,h.x,d.x,this.tension),Uu.initCatmullRom(c.y,f.y,h.y,d.y,this.tension),Fu.initCatmullRom(c.z,f.z,h.z,d.z,this.tension));return i.set(Du.calc(l),Uu.calc(l),Fu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new B().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class hr extends vn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],h=[],p=[];let v=0;const y=[],m=i/2;let u=0;g(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(p,2));function g(){const S=new B,I=new B;let A=0;const C=(n-e)/i;for(let L=0;L<=s;L++){const w=[],M=L/s,D=M*(n-e)+e;for(let F=0;F<=r;F++){const k=F/r,Y=k*l+o,J=Math.sin(Y),W=Math.cos(Y);I.x=D*J,I.y=-M*i+m,I.z=D*W,f.push(I.x,I.y,I.z),S.set(J,C,W).normalize(),h.push(S.x,S.y,S.z),p.push(k,1-M),w.push(v++)}y.push(w)}for(let L=0;L<r;L++)for(let w=0;w<s;w++){const M=y[w][L],D=y[w+1][L],F=y[w+1][L+1],k=y[w][L+1];(e>0||w!==0)&&(d.push(M,D,k),A+=3),(n>0||w!==s-1)&&(d.push(D,F,k),A+=3)}c.addGroup(u,A,0),u+=A}function x(S){const I=v,A=new $e,C=new B;let L=0;const w=S===!0?e:n,M=S===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,m*M,0),h.push(0,M,0),p.push(.5,.5),v++;const D=v;for(let F=0;F<=r;F++){const Y=F/r*l+o,J=Math.cos(Y),W=Math.sin(Y);C.x=w*W,C.y=m*M,C.z=w*J,f.push(C.x,C.y,C.z),h.push(0,M,0),A.x=J*.5+.5,A.y=W*.5*M+.5,p.push(A.x,A.y),v++}for(let F=0;F<r;F++){const k=I+F,Y=D+F;S===!0?d.push(Y,Y+1,k):d.push(Y+1,Y,k),L+=3}c.addGroup(u,L,S===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ya extends hr{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ya(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zf extends vn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let f=e;const h=(n-e)/r,p=new B,v=new $e;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const u=s+m/i*a;p.x=f*Math.cos(u),p.y=f*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),v.x=(p.x/n+1)/2,v.y=(p.y/n+1)/2,d.push(v.x,v.y)}f+=h}for(let y=0;y<r;y++){const m=y*(i+1);for(let u=0;u<i;u++){const g=u+m,x=g,S=g+i+1,I=g+i+2,A=g+1;o.push(x,S,A),o.push(S,I,A)}}this.setIndex(o),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Jr extends vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const d=[],f=new B,h=new B,p=[],v=[],y=[],m=[];for(let u=0;u<=i;u++){const g=[],x=u/i;let S=0;u===0&&a===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let I=0;I<=n;I++){const A=I/n;f.x=-e*Math.cos(r+A*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+A*s)*Math.sin(a+x*o),v.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(A+S,1-x),g.push(c++)}d.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const x=d[u][g+1],S=d[u][g],I=d[u+1][g],A=d[u+1][g+1];(u!==0||a>0)&&p.push(x,S,A),(u!==i-1||l<Math.PI)&&p.push(S,I,A)}this.setIndex(p),this.setAttribute("position",new Xt(v,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nn extends Lr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p_ extends Lr{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new Qe(16777215),this.specular=new Qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nf,this.normalScale=new $e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Tf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const r0={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class iA{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],v=c[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return v}return null}}}const rA=new iA;class Bf{constructor(e){this.manager=e!==void 0?e:rA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bf.DEFAULT_MATERIAL_NAME="__DEFAULT";class sA extends Bf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=r0.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=fo("img");function l(){d(),r0.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class aA extends Bf{constructor(e){super(e)}load(e,n,i,r){const s=new ln,a=new sA(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Hf extends Dt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Ou=new vt,s0=new B,a0=new B;class m_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $e(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Df,this._frameExtents=new $e(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;s0.setFromMatrixPosition(e.matrixWorld),n.position.copy(s0),a0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(a0),n.updateMatrixWorld(),Ou.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ou),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ou)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oA extends m_{constructor(){super(new Tn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const n=this.camera,i=oc*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class o0 extends Hf{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new oA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class lA extends m_{constructor(){super(new r_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class g_ extends Hf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new lA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class v_ extends Hf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const l0=new vt;class cA{constructor(e,n,i=0,r=1/0){this.ray=new wo(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new If,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return l0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l0),this}intersectObject(e,n=!0,i=[]){return Eh(e,this,i,n),i.sort(c0),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Eh(e[r],this,i,n);return i.sort(c0),i}}function c0(t,e){return t.distance-e.distance}function Eh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Eh(s[a],e,n,!0)}}class u0{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class uA extends us{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);const d0={type:"change"},Vf={type:"start"},__={type:"end"},ml=new wo,h0=new lr,dA=Math.cos(70*HS.DEG2RAD),Ft=new B,En=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ku=1e-6;class x_ extends uA{constructor(e,n=null){super(e,n),this.state=mt.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Xs.ROTATE,MIDDLE:Xs.DOLLY,RIGHT:Xs.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new os,this._lastTargetPosition=new B,this._quat=new os().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new u0,this._sphericalDelta=new u0,this._scale=1,this._panOffset=new B,this._rotateStart=new $e,this._rotateEnd=new $e,this._rotateDelta=new $e,this._panStart=new $e,this._panEnd=new $e,this._panDelta=new $e,this._dollyStart=new $e,this._dollyEnd=new $e,this._dollyDelta=new $e,this._dollyDirection=new B,this._mouse=new $e,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=fA.bind(this),this._onPointerDown=hA.bind(this),this._onPointerUp=pA.bind(this),this._onContextMenu=SA.bind(this),this._onMouseWheel=vA.bind(this),this._onKeyDown=_A.bind(this),this._onTouchStart=xA.bind(this),this._onTouchMove=yA.bind(this),this._onMouseDown=mA.bind(this),this._onMouseMove=gA.bind(this),this._interceptControlDown=MA.bind(this),this._interceptControlUp=EA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(d0),this.update(),this.state=mt.NONE}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=En:i>Math.PI&&(i-=En),r<-Math.PI?r+=En:r>Math.PI&&(r-=En),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ft.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ml.origin.copy(this.object.position),ml.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ml.direction))<dA?this.object.lookAt(this.target):(h0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ml.intersectPlane(h0,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ku||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ku||this._lastTargetPosition.distanceToSquared(this.target)>ku?(this.dispatchEvent(d0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ft.copy(r).sub(this.target);let s=Ft.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(En*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-En*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(En*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-En*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(En*this._rotateDelta.x/n.clientHeight),this._rotateUp(En*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+n.x)*.5,o=(e.pageY+n.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new $e,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function hA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function fA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function pA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(__),this.state=mt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function mA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Xs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=mt.DOLLY;break;case Xs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=mt.ROTATE}break;case Xs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Vf)}function gA(t){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function vA(t){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(t.preventDefault(),this.dispatchEvent(Vf),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(__))}function _A(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function xA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=mt.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=mt.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Vf)}function yA(t){switch(this._trackPointer(t),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=mt.NONE}}function SA(t){this.enabled!==!1&&t.preventDefault()}function MA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function EA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var un=Math.PI,wt=un*2,Oa=un/180,wA=180/un,TA=1440,AA=398600.8,Un=6378.135,Gi=60/Math.sqrt(Un*Un*Un/AA),zu=Un*Gi/60,CA=1/Gi,qr=.001082616,bA=-253881e-11,RA=-165597e-11,Kr=bA/qr,po=2/3;function PA(t,e){for(var n=[31,t%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),r=1,s=0;i>s+n[r-1]&&r<12;)s+=n[r-1],r+=1;var a=r,o=i-s,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var d=Math.floor(l),f=(l-d)*60;return{mon:a,day:o,hr:c,minute:d,sec:f}}function f0(t,e,n,i,r,s){var a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*t-Math.floor(7*(t+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+n+17210135e-1+((a/6e4+s/60+r)/60+i)/24}function Gf(t,e,n,i,r,s,a){if(t instanceof Date){var o=t;return f0(o.getUTCFullYear(),o.getUTCMonth()+1,o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds())}return f0(t,e,n,i,r,s,a)}function y_(t,e){var n=t.e3,i=t.ee2,r=t.peo,s=t.pgho,a=t.pho,o=t.pinco,l=t.plo,c=t.se2,d=t.se3,f=t.sgh2,h=t.sgh3,p=t.sgh4,v=t.sh2,y=t.sh3,m=t.si2,u=t.si3,g=t.sl2,x=t.sl3,S=t.sl4,I=t.t,A=t.xgh2,C=t.xgh3,L=t.xgh4,w=t.xh2,M=t.xh3,D=t.xi2,F=t.xi3,k=t.xl2,Y=t.xl3,J=t.xl4,W=t.zmol,ie=t.zmos,N=e.init,q=e.opsmode,P=e.ep,b=e.inclp,Q=e.nodep,ce=e.argpp,V=e.mp,H,K,$,se,ue,fe,Ue,Ee,Fe,U,Ve,Ie,Ce,he,ke,le,R,E,j,ee,re,ne=119459e-10,we=.01675,pe=.00015835218,Se=.0549;re=ie+ne*I,N==="y"&&(re=ie),ee=re+2*we*Math.sin(re),R=Math.sin(ee),U=.5*R*R-.25,Ve=-.5*R*Math.cos(ee);var We=c*U+d*Ve,oe=m*U+u*Ve,Me=g*U+x*Ve+S*R,Re=f*U+h*Ve+p*R,Be=v*U+y*Ve;re=W+pe*I,N==="y"&&(re=W),ee=re+2*Se*Math.sin(re),R=Math.sin(ee),U=.5*R*R-.25,Ve=-.5*R*Math.cos(ee);var be=i*U+n*Ve,Ge=D*U+F*Ve,He=k*U+Y*Ve+J*R,Je=A*U+C*Ve+L*R,O=w*U+M*Ve;return Ie=We+be,ke=oe+Ge,le=Me+He,Ce=Re+Je,he=Be+O,N==="n"&&(Ie-=r,ke-=o,le-=l,Ce-=s,he-=a,b+=ke,P+=Ie,se=Math.sin(b),$=Math.cos(b),b>=.2?(he/=se,Ce-=$*he,ce+=Ce,Q+=he,V+=le):(fe=Math.sin(Q),ue=Math.cos(Q),H=se*fe,K=se*ue,Ue=he*ue+ke*$*fe,Ee=-he*fe+ke*$*ue,H+=Ue,K+=Ee,Q%=wt,Q<0&&q==="a"&&(Q+=wt),E=V+ce+$*Q,Fe=le+Ce-ke*Q*se,E+=Fe,j=Q,Q=Math.atan2(H,K),Q<0&&q==="a"&&(Q+=wt),Math.abs(j-Q)>un&&(Q<j?Q+=wt:Q-=wt),V+=le,ce=E-V-$*Q)),{ep:P,inclp:b,nodep:Q,argpp:ce,mp:V}}function LA(t){var e=t.epoch,n=t.ep,i=t.argpp,r=t.tc,s=t.inclp,a=t.nodep,o=t.np,l,c,d,f,h,p,v,y,m,u,g,x,S,I,A,C,L,w,M,D,F,k,Y,J,W,ie,N,q,P,b,Q,ce,V,H,K,$,se,ue,fe,Ue,Ee,Fe,U,Ve,Ie,Ce,he,ke,le,R,E,j,ee,re,ne,we,pe,Se,We,oe,Me,Re,Be,be=.01675,Ge=.0549,He=29864797e-13,Je=47968065e-14,O=.39785416,ge=.91744867,te=.1945905,ae=-.98088458,Te=o,ve=n,Xe=Math.sin(a),et=Math.cos(a),tt=Math.sin(i),Ye=Math.cos(i),St=Math.sin(s),Ae=Math.cos(s),Mt=ve*ve,Pt=1-Mt,Ut=Math.sqrt(Pt),nt=0,pi=0,Kn=0,dn=0,hn=0,Zt=e+18261.5+r/1440,Qt=(4.523602-.00092422029*Zt)%wt,_t=Math.sin(Qt),Jt=Math.cos(Qt),mi=.91375164-.03568096*Jt,Zn=Math.sqrt(1-mi*mi),T=.089683511*_t/Zn,z=Math.sqrt(1-T*T),X=5.8351514+.001944368*Zt,Z=.39785416*_t/Zn,G=z*Jt+.91744867*T*_t;Z=Math.atan2(Z,G),Z+=X-Qt;var _e=Math.cos(Z),Pe=Math.sin(Z);D=te,F=ae,J=ge,W=O,k=et,Y=Xe,g=He;for(var de=1/Te,ye=0;ye<2;)ye+=1,l=D*k+F*J*Y,d=-F*k+D*J*Y,v=-D*Y+F*J*k,y=F*W,m=F*Y+D*J*k,u=D*W,c=Ae*v+St*y,f=Ae*m+St*u,h=-St*v+Ae*y,p=-St*m+Ae*u,x=l*Ye+c*tt,S=d*Ye+f*tt,I=-l*tt+c*Ye,A=-d*tt+f*Ye,C=h*tt,L=p*tt,w=h*Ye,M=p*Ye,Me=12*x*x-3*I*I,Re=24*x*S-6*I*A,Be=12*S*S-3*A*A,j=3*(l*l+c*c)+Me*Mt,ee=6*(l*d+c*f)+Re*Mt,re=3*(d*d+f*f)+Be*Mt,ne=-6*l*h+Mt*(-24*x*w-6*I*C),we=-6*(l*p+d*h)+Mt*(-24*(S*w+x*M)+-6*(I*L+A*C)),pe=-6*d*p+Mt*(-24*S*M-6*A*L),Se=6*c*h+Mt*(24*x*C-6*I*w),We=6*(f*h+c*p)+Mt*(24*(S*C+x*L)-6*(A*w+I*M)),oe=6*f*p+Mt*(24*S*L-6*A*M),j=j+j+Pt*Me,ee=ee+ee+Pt*Re,re=re+re+Pt*Be,he=g*de,Ce=-.5*he/Ut,ke=he*Ut,Ie=-15*ve*ke,le=x*I+S*A,R=S*I+x*A,E=S*A-x*I,ye===1&&(ie=Ie,N=Ce,q=he,P=ke,b=le,Q=R,ce=E,V=j,H=ee,K=re,$=ne,se=we,ue=pe,fe=Se,Ue=We,Ee=oe,Fe=Me,U=Re,Ve=Be,D=_e,F=Pe,J=mi,W=Zn,k=z*et+T*Xe,Y=Xe*z-et*T,g=Je);var De=(4.7199672+(.2299715*Zt-X))%wt,Oe=(6.2565837+.017201977*Zt)%wt,xe=2*ie*Q,qe=2*ie*ce,rt=2*N*se,ut=2*N*(ue-$),Ht=-2*q*H,st=-2*q*(K-V),je=-2*q*(-21-9*Mt)*be,en=2*P*U,at=2*P*(Ve-Fe),fn=-18*P*be,Hn=-2*N*Ue,Vt=-2*N*(Ee-fe),Qn=2*Ie*R,dt=2*Ie*E,yn=2*Ce*we,Nr=2*Ce*(pe-ne),Sn=-2*he*ee,gi=-2*he*(re-j),vi=-2*he*(-21-9*Mt)*Ge,To=2*ke*Re,w_=2*ke*(Be-Me),T_=-18*ke*Ge,A_=-2*Ce*We,C_=-2*Ce*(oe-Se);return{snodm:Xe,cnodm:et,sinim:St,cosim:Ae,sinomm:tt,cosomm:Ye,day:Zt,e3:dt,ee2:Qn,em:ve,emsq:Mt,gam:X,peo:nt,pgho:dn,pho:hn,pinco:pi,plo:Kn,rtemsq:Ut,se2:xe,se3:qe,sgh2:en,sgh3:at,sgh4:fn,sh2:Hn,sh3:Vt,si2:rt,si3:ut,sl2:Ht,sl3:st,sl4:je,s1:Ie,s2:Ce,s3:he,s4:ke,s5:le,s6:R,s7:E,ss1:ie,ss2:N,ss3:q,ss4:P,ss5:b,ss6:Q,ss7:ce,sz1:V,sz2:H,sz3:K,sz11:$,sz12:se,sz13:ue,sz21:fe,sz22:Ue,sz23:Ee,sz31:Fe,sz32:U,sz33:Ve,xgh2:To,xgh3:w_,xgh4:T_,xh2:A_,xh3:C_,xi2:yn,xi3:Nr,xl2:Sn,xl3:gi,xl4:vi,nm:Te,z1:j,z2:ee,z3:re,z11:ne,z12:we,z13:pe,z21:Se,z22:We,z23:oe,z31:Me,z32:Re,z33:Be,zmol:De,zmos:Oe}}function NA(t){var e=t.cosim,n=t.argpo,i=t.s1,r=t.s2,s=t.s3,a=t.s4,o=t.s5,l=t.sinim,c=t.ss1,d=t.ss2,f=t.ss3,h=t.ss4,p=t.ss5,v=t.sz1,y=t.sz3,m=t.sz11,u=t.sz13,g=t.sz21,x=t.sz23,S=t.sz31,I=t.sz33,A=t.t,C=t.tc,L=t.gsto,w=t.mo,M=t.mdot,D=t.no,F=t.nodeo,k=t.nodedot,Y=t.xpidot,J=t.z1,W=t.z3,ie=t.z11,N=t.z13,q=t.z21,P=t.z23,b=t.z31,Q=t.z33,ce=t.ecco,V=t.eccsq,H=t.emsq,K=t.em,$=t.argpm,se=t.inclm,ue=t.mm,fe=t.nm,Ue=t.nodem,Ee=t.irez,Fe=t.atime,U=t.d2201,Ve=t.d2211,Ie=t.d3210,Ce=t.d3222,he=t.d4410,ke=t.d4422,le=t.d5220,R=t.d5232,E=t.d5421,j=t.d5433,ee=t.dedt,re=t.didt,ne=t.dmdt,we=t.dnodt,pe=t.domdt,Se=t.del1,We=t.del2,oe=t.del3,Me=t.xfact,Re=t.xlamo,Be=t.xli,be=t.xni,Ge,He,Je,O,ge,te,ae,Te,ve,Xe,et,tt,Ye,St,Ae,Mt,Pt,Ut,nt,pi,Kn,dn,hn,Zt,Qt,_t,Jt,mi,Zn,T,z,X,Z=17891679e-13,G=21460748e-13,_e=22123015e-14,Pe=17891679e-13,de=73636953e-16,ye=21765803e-16,De=.0043752690880113,Oe=37393792e-14,xe=11428639e-14,qe=.00015835218,rt=119459e-10;Ee=0,fe<.0052359877&&fe>.0034906585&&(Ee=1),fe>=.00826&&fe<=.00924&&K>=.5&&(Ee=2);var ut=c*rt*p,Ht=d*rt*(m+u),st=-rt*f*(v+y-14-6*H),je=h*rt*(S+I-6),en=-rt*d*(g+x);(se<.052359877||se>un-.052359877)&&(en=0),l!==0&&(en/=l);var at=je-e*en;ee=ut+i*qe*o,re=Ht+r*qe*(ie+N),ne=st-qe*s*(J+W-14-6*H);var fn=a*qe*(b+Q-6),Hn=-qe*r*(q+P);(se<.052359877||se>un-.052359877)&&(Hn=0),pe=at+fn,we=en,l!==0&&(pe-=e/l*Hn,we+=Hn/l);var Vt=0,Qn=(L+C*De)%wt;if(K+=ee*A,se+=re*A,$+=pe*A,Ue+=we*A,ue+=ne*A,Ee!==0){if(T=Math.pow(fe/Gi,po),Ee===2){z=e*e;var dt=K;K=ce;var yn=H;H=V,X=K*H,St=-.306-(K-.64)*.44,K<=.65?(Ae=3.616-13.247*K+16.29*H,Pt=-19.302+117.39*K-228.419*H+156.591*X,Ut=-18.9068+109.7927*K-214.6334*H+146.5816*X,nt=-41.122+242.694*K-471.094*H+313.953*X,pi=-146.407+841.88*K-1629.014*H+1083.435*X,Kn=-532.114+3017.977*K-5740.032*H+3708.276*X):(Ae=-72.099+331.819*K-508.738*H+266.724*X,Pt=-346.844+1582.851*K-2415.925*H+1246.113*X,Ut=-342.585+1554.908*K-2366.899*H+1215.972*X,nt=-1052.797+4758.686*K-7193.992*H+3651.957*X,pi=-3581.69+16178.11*K-24462.77*H+12422.52*X,K>.715?Kn=-5149.66+29936.92*K-54087.36*H+31324.56*X:Kn=1464.74-4664.75*K+3763.64*H),K<.7?(Zt=-919.2277+4988.61*K-9064.77*H+5542.21*X,dn=-822.71072+4568.6173*K-8491.4146*H+5337.524*X,hn=-853.666+4690.25*K-8624.77*H+5341.4*X):(Zt=-37995.78+161616.52*K-229838.2*H+109377.94*X,dn=-51752.104+218913.95*K-309468.16*H+146349.42*X,hn=-40023.88+170470.89*K-242699.48*H+115605.82*X),Qt=l*l,Ge=.75*(1+2*e+z),He=1.5*Qt,O=1.875*l*(1-2*e-3*z),ge=-1.875*l*(1+2*e-3*z),ae=35*Qt*Ge,Te=39.375*Qt*Qt,ve=9.84375*l*(Qt*(1-2*e-5*z)+.33333333*(-2+4*e+6*z)),Xe=l*(4.92187512*Qt*(-2-4*e+10*z)+6.56250012*(1+2*e-3*z)),et=29.53125*l*(2-8*e+z*(-12+8*e+10*z)),tt=29.53125*l*(-2-8*e+z*(12+8*e-10*z)),mi=fe*fe,Zn=T*T,Jt=3*mi*Zn,_t=Jt*Pe,U=_t*Ge*St,Ve=_t*He*Ae,Jt*=T,_t=Jt*Oe,Ie=_t*O*Pt,Ce=_t*ge*Ut,Jt*=T,_t=2*Jt*de,he=_t*ae*nt,ke=_t*Te*pi,Jt*=T,_t=Jt*xe,le=_t*ve*Kn,R=_t*Xe*hn,_t=2*Jt*ye,E=_t*et*dn,j=_t*tt*Zt,Re=(w+F+F-(Qn+Qn))%wt,Me=M+ne+2*(k+we-De)-D,K=dt,H=yn}Ee===1&&(Ye=1+H*(-2.5+.8125*H),Pt=1+2*H,Mt=1+H*(-6+6.60937*H),Ge=.75*(1+e)*(1+e),Je=.9375*l*l*(1+3*e)-.75*(1+e),te=1+e,te*=1.875*te*te,Se=3*fe*fe*T*T,We=2*Se*Ge*Ye*Z,oe=3*Se*te*Mt*_e*T,Se=Se*Je*Pt*G*T,Re=(w+F+n-Qn)%wt,Me=M+Y+ne+pe+we-(D+De)),Be=Re,be=D,Fe=0,fe=D+Vt}return{em:K,argpm:$,inclm:se,mm:ue,nm:fe,nodem:Ue,irez:Ee,atime:Fe,d2201:U,d2211:Ve,d3210:Ie,d3222:Ce,d4410:he,d4422:ke,d5220:le,d5232:R,d5421:E,d5433:j,dedt:ee,didt:re,dmdt:ne,dndt:Vt,dnodt:we,domdt:pe,del1:Se,del2:We,del3:oe,xfact:Me,xlamo:Re,xli:Be,xni:be}}function p0(t){var e=(t-2451545)/36525,n=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return n=n*Oa/240%wt,n<0&&(n+=wt),n}function S_(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?p0(Gf.apply(void 0,arguments)):p0.apply(void 0,arguments)}function IA(t){var e=t.ecco,n=t.epoch,i=t.inclo,r=t.opsmode,s=t.no,a=e*e,o=1-a,l=Math.sqrt(o),c=Math.cos(i),d=c*c,f=Math.pow(Gi/s,po),h=.75*qr*(3*d-1)/(l*o),p=h/(f*f),v=f*(1-p*p-p*(1/3+134*p*p/81));p=h/(v*v),s/=1+p;var y=Math.pow(Gi/s,po),m=Math.sin(i),u=y*o,g=1-5*d,x=-g-d-d,S=1/y,I=u*u,A=y*(1-e),C="n",L;if(r==="a"){var w=n-7305,M=Math.floor(w+1e-8),D=w-M,F=.017202791694070362,k=1.7321343856509375,Y=5075514194322695e-30,J=F+wt;L=(k+F*M+J*D+w*w*Y)%wt,L<0&&(L+=wt)}else L=S_(n+24332815e-1);return{no:s,method:C,ainv:S,ao:y,con41:x,con42:g,cosio:c,cosio2:d,eccsq:a,omeosq:o,posq:I,rp:A,rteosq:l,sinio:m,gsto:L}}function DA(t){var e=t.irez,n=t.d2201,i=t.d2211,r=t.d3210,s=t.d3222,a=t.d4410,o=t.d4422,l=t.d5220,c=t.d5232,d=t.d5421,f=t.d5433,h=t.dedt,p=t.del1,v=t.del2,y=t.del3,m=t.didt,u=t.dmdt,g=t.dnodt,x=t.domdt,S=t.argpo,I=t.argpdot,A=t.t,C=t.tc,L=t.gsto,w=t.xfact,M=t.xlamo,D=t.no,F=t.atime,k=t.em,Y=t.argpm,J=t.inclm,W=t.xli,ie=t.mm,N=t.xni,q=t.nodem,P=t.nm,b=.13130908,Q=2.8843198,ce=.37448087,V=5.7686396,H=.95240898,K=1.8014998,$=1.050833,se=4.4108898,ue=.0043752690880113,fe=720,Ue=-720,Ee=259200,Fe,U,Ve,Ie,Ce,he,ke,le,R=0,E=0,j=(L+C*ue)%wt;if(k+=h*A,J+=m*A,Y+=x*A,q+=g*A,ie+=u*A,e!==0){(F===0||A*F<=0||Math.abs(A)<Math.abs(F))&&(F=0,N=D,W=M),A>0?Fe=fe:Fe=Ue;for(var ee=381;ee===381;)e!==2?(ke=p*Math.sin(W-b)+v*Math.sin(2*(W-Q))+y*Math.sin(3*(W-ce)),Ce=N+w,he=p*Math.cos(W-b)+2*v*Math.cos(2*(W-Q))+3*y*Math.cos(3*(W-ce)),he*=Ce):(le=S+I*F,Ve=le+le,U=W+W,ke=n*Math.sin(Ve+W-V)+i*Math.sin(W-V)+r*Math.sin(le+W-H)+s*Math.sin(-le+W-H)+a*Math.sin(Ve+U-K)+o*Math.sin(U-K)+l*Math.sin(le+W-$)+c*Math.sin(-le+W-$)+d*Math.sin(le+U-se)+f*Math.sin(-le+U-se),Ce=N+w,he=n*Math.cos(Ve+W-V)+i*Math.cos(W-V)+r*Math.cos(le+W-H)+s*Math.cos(-le+W-H)+l*Math.cos(le+W-$)+c*Math.cos(-le+W-$)+2*(a*Math.cos(Ve+U-K)+o*Math.cos(U-K)+d*Math.cos(le+U-se)+f*Math.cos(-le+U-se)),he*=Ce),Math.abs(A-F)>=fe?ee=381:(E=A-F,ee=0),ee===381&&(W+=Ce*Fe+ke*Ee,N+=ke*Fe+he*Ee,F+=Fe);P=N+ke*E+he*E*E*.5,Ie=W+Ce*E+ke*E*E*.5,e!==1?(ie=Ie-2*q+2*j,R=P-D):(ie=Ie-q-Y+j,R=P-D),P=D+R}return{atime:F,em:k,argpm:Y,inclm:J,xli:W,mm:ie,xni:N,nodem:q,dndt:R,nm:P}}function M_(t,e){var n,i,r,s,a,o,l,c,d,f,h,p,v,y,m,u,g,x,S,I,A,C,L,w,M,D,F,k=15e-13;t.t=e,t.error=0;var Y=t.mo+t.mdot*t.t,J=t.argpo+t.argpdot*t.t,W=t.nodeo+t.nodedot*t.t;d=J,A=Y;var ie=t.t*t.t;if(L=W+t.nodecf*ie,g=1-t.cc1*t.t,x=t.bstar*t.cc4*t.t,S=t.t2cof*ie,t.isimp!==1){l=t.omgcof*t.t;var N=1+t.eta*Math.cos(Y);o=t.xmcof*(N*N*N-t.delmo),u=l+o,A=Y+u,d=J-u,p=ie*t.t,v=p*t.t,g=g-t.d2*ie-t.d3*p-t.d4*v,x+=t.bstar*t.cc5*(Math.sin(A)-t.sinmao),S=S+t.t3cof*p+v*(t.t4cof+t.t*t.t5cof)}C=t.no;var q=t.ecco;if(I=t.inclo,t.method==="d"){y=t.t;var P={irez:t.irez,d2201:t.d2201,d2211:t.d2211,d3210:t.d3210,d3222:t.d3222,d4410:t.d4410,d4422:t.d4422,d5220:t.d5220,d5232:t.d5232,d5421:t.d5421,d5433:t.d5433,dedt:t.dedt,del1:t.del1,del2:t.del2,del3:t.del3,didt:t.didt,dmdt:t.dmdt,dnodt:t.dnodt,domdt:t.domdt,argpo:t.argpo,argpdot:t.argpdot,t:t.t,tc:y,gsto:t.gsto,xfact:t.xfact,xlamo:t.xlamo,no:t.no,atime:t.atime,em:q,argpm:d,inclm:I,xli:t.xli,mm:A,xni:t.xni,nodem:L,nm:C},b=DA(P);q=b.em,d=b.argpm,I=b.inclm,A=b.mm,L=b.nodem,C=b.nm}if(C<=0)return t.error=2,[!1,!1];var Q=Math.pow(Gi/C,po)*g*g;if(C=Gi/Math.pow(Q,1.5),q-=x,q>=1||q<-.001)return t.error=1,[!1,!1];q<1e-6&&(q=1e-6),A+=t.no*S,M=A+d+L,L%=wt,d%=wt,M%=wt,A=(M-d-L)%wt;var ce=Math.sin(I),V=Math.cos(I),H=q;if(w=I,f=d,F=L,D=A,s=ce,r=V,t.method==="d"){var K={inclo:t.inclo,init:"n",ep:H,inclp:w,nodep:F,argpp:f,mp:D,opsmode:t.operationmode},$=y_(t,K);if(H=$.ep,F=$.nodep,f=$.argpp,D=$.mp,w=$.inclp,w<0&&(w=-w,F+=un,f-=un),H<0||H>1)return t.error=3,[!1,!1]}t.method==="d"&&(s=Math.sin(w),r=Math.cos(w),t.aycof=-.5*Kr*s,Math.abs(r+1)>15e-13?t.xlcof=-.25*Kr*s*(3+5*r)/(1+r):t.xlcof=-.25*Kr*s*(3+5*r)/k);var se=H*Math.cos(f);u=1/(Q*(1-H*H));var ue=H*Math.sin(f)+u*t.aycof,fe=D+f+F+u*t.xlcof*se,Ue=(fe-F)%wt;c=Ue,m=9999.9;for(var Ee=1;Math.abs(m)>=1e-12&&Ee<=10;)i=Math.sin(c),n=Math.cos(c),m=1-n*se-i*ue,m=(Ue-ue*n+se*i-c)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),c+=m,Ee+=1;var Fe=se*n+ue*i,U=se*i-ue*n,Ve=se*se+ue*ue,Ie=Q*(1-Ve);if(Ie<0)return t.error=4,[!1,!1];var Ce=Q*(1-Fe),he=Math.sqrt(Q)*U/Ce,ke=Math.sqrt(Ie)/Ce,le=Math.sqrt(1-Ve);u=U/(1+le);var R=Q/Ce*(i-ue-se*u),E=Q/Ce*(n-se+ue*u);h=Math.atan2(R,E);var j=(E+E)*R,ee=1-2*R*R;u=1/Ie;var re=.5*qr*u,ne=re*u;t.method==="d"&&(a=r*r,t.con41=3*a-1,t.x1mth2=1-a,t.x7thm1=7*a-1);var we=Ce*(1-1.5*ne*le*t.con41)+.5*re*t.x1mth2*ee;if(we<1)return t.error=6,{position:!1,velocity:!1};h-=.25*ne*t.x7thm1*j;var pe=F+1.5*ne*r*j,Se=w+1.5*ne*r*s*ee,We=he-C*re*t.x1mth2*j/Gi,oe=ke+C*re*(t.x1mth2*ee+1.5*t.con41)/Gi,Me=Math.sin(h),Re=Math.cos(h),Be=Math.sin(pe),be=Math.cos(pe),Ge=Math.sin(Se),He=Math.cos(Se),Je=-Be*He,O=be*He,ge=Je*Me+be*Re,te=O*Me+Be*Re,ae=Ge*Me,Te=Je*Re-be*Me,ve=O*Re-Be*Me,Xe=Ge*Re,et={x:we*ge*Un,y:we*te*Un,z:we*ae*Un},tt={x:(We*ge+oe*Te)*zu,y:(We*te+oe*ve)*zu,z:(We*ae+oe*Xe)*zu};return{position:et,velocity:tt}}function UA(t,e){var n=e.opsmode,i=e.epoch,r=e.xbstar,s=e.xecco,a=e.xargpo,o=e.xinclo,l=e.xmo,c=e.xno,d=e.xnodeo,f,h,p,v,y,m,u,g,x,S,I,A,C,L,w,M,D,F,k,Y,J,W,ie,N,q,P,b,Q,ce,V,H,K,$,se,ue,fe,Ue,Ee,Fe,U,Ve,Ie,Ce,he,ke,le,R,E,j,ee,re,ne,we,pe,Se,We,oe=15e-13;t.isimp=0,t.method="n",t.aycof=0,t.con41=0,t.cc1=0,t.cc4=0,t.cc5=0,t.d2=0,t.d3=0,t.d4=0,t.delmo=0,t.eta=0,t.argpdot=0,t.omgcof=0,t.sinmao=0,t.t=0,t.t2cof=0,t.t3cof=0,t.t4cof=0,t.t5cof=0,t.x1mth2=0,t.x7thm1=0,t.mdot=0,t.nodedot=0,t.xlcof=0,t.xmcof=0,t.nodecf=0,t.irez=0,t.d2201=0,t.d2211=0,t.d3210=0,t.d3222=0,t.d4410=0,t.d4422=0,t.d5220=0,t.d5232=0,t.d5421=0,t.d5433=0,t.dedt=0,t.del1=0,t.del2=0,t.del3=0,t.didt=0,t.dmdt=0,t.dnodt=0,t.domdt=0,t.e3=0,t.ee2=0,t.peo=0,t.pgho=0,t.pho=0,t.pinco=0,t.plo=0,t.se2=0,t.se3=0,t.sgh2=0,t.sgh3=0,t.sgh4=0,t.sh2=0,t.sh3=0,t.si2=0,t.si3=0,t.sl2=0,t.sl3=0,t.sl4=0,t.gsto=0,t.xfact=0,t.xgh2=0,t.xgh3=0,t.xgh4=0,t.xh2=0,t.xh3=0,t.xi2=0,t.xi3=0,t.xl2=0,t.xl3=0,t.xl4=0,t.xlamo=0,t.zmol=0,t.zmos=0,t.atime=0,t.xli=0,t.xni=0,t.bstar=r,t.ecco=s,t.argpo=a,t.inclo=o,t.mo=l,t.no=c,t.nodeo=d,t.operationmode=n;var Me=78/Un+1,Re=42/Un,Be=Re*Re*Re*Re;t.init="y",t.t=0;var be={ecco:t.ecco,epoch:i,inclo:t.inclo,no:t.no,method:t.method,opsmode:t.operationmode},Ge=IA(be),He=Ge.ao,Je=Ge.con42,O=Ge.cosio,ge=Ge.cosio2,te=Ge.eccsq,ae=Ge.omeosq,Te=Ge.posq,ve=Ge.rp,Xe=Ge.rteosq,et=Ge.sinio;if(t.no=Ge.no,t.con41=Ge.con41,t.gsto=Ge.gsto,t.a=Math.pow(t.no*CA,-2/3),t.alta=t.a*(1+t.ecco)-1,t.altp=t.a*(1-t.ecco)-1,t.error=0,ae>=0||t.no>=0){if(t.isimp=0,ve<220/Un+1&&(t.isimp=1),b=Me,J=Be,F=(ve-1)*Un,F<156){b=F-78,F<98&&(b=20);var tt=(120-b)/Un;J=tt*tt*tt*tt,b=b/Un+1}k=1/Te,le=1/(He-b),t.eta=He*t.ecco*le,A=t.eta*t.eta,I=t.ecco*t.eta,Y=Math.abs(1-A),m=J*Math.pow(le,4),u=m/Math.pow(Y,3.5),v=u*t.no*(He*(1+1.5*A+I*(4+A))+.375*qr*le/Y*t.con41*(8+3*A*(8+A))),t.cc1=t.bstar*v,y=0,t.ecco>1e-4&&(y=-2*m*le*Kr*t.no*et/t.ecco),t.x1mth2=1-ge,t.cc4=2*t.no*u*He*ae*(t.eta*(2+.5*A)+t.ecco*(.5+2*A)-qr*le/(He*Y)*(-3*t.con41*(1-2*I+A*(1.5-.5*I))+.75*t.x1mth2*(2*A-I*(1+A))*Math.cos(2*t.argpo))),t.cc5=2*u*He*ae*(1+2.75*(A+I)+I*A),g=ge*ge,Ce=1.5*qr*k*t.no,he=.5*Ce*qr*k,ke=-.46875*RA*k*k*t.no,t.mdot=t.no+.5*Ce*Xe*t.con41+.0625*he*Xe*(13-78*ge+137*g),t.argpdot=-.5*Ce*Je+.0625*he*(7-114*ge+395*g)+ke*(3-36*ge+49*g),E=-Ce*O,t.nodedot=E+(.5*he*(4-19*ge)+2*ke*(3-7*ge))*O,R=t.argpdot+t.nodedot,t.omgcof=t.bstar*y*Math.cos(t.argpo),t.xmcof=0,t.ecco>1e-4&&(t.xmcof=-po*m*t.bstar/I),t.nodecf=3.5*ae*E*t.cc1,t.t2cof=1.5*t.cc1,Math.abs(O+1)>15e-13?t.xlcof=-.25*Kr*et*(3+5*O)/(1+O):t.xlcof=-.25*Kr*et*(3+5*O)/oe,t.aycof=-.5*Kr*et;var Ye=1+t.eta*Math.cos(t.mo);if(t.delmo=Ye*Ye*Ye,t.sinmao=Math.sin(t.mo),t.x7thm1=7*ge-1,2*un/t.no>=225){t.method="d",t.isimp=1,Ve=0,w=t.inclo;var St={epoch:i,ep:t.ecco,argpp:t.argpo,tc:Ve,inclp:t.inclo,nodep:t.nodeo,np:t.no,e3:t.e3,ee2:t.ee2,peo:t.peo,pgho:t.pgho,pho:t.pho,pinco:t.pinco,plo:t.plo,se2:t.se2,se3:t.se3,sgh2:t.sgh2,sgh3:t.sgh3,sgh4:t.sgh4,sh2:t.sh2,sh3:t.sh3,si2:t.si2,si3:t.si3,sl2:t.sl2,sl3:t.sl3,sl4:t.sl4,xgh2:t.xgh2,xgh3:t.xgh3,xgh4:t.xgh4,xh2:t.xh2,xh3:t.xh3,xi2:t.xi2,xi3:t.xi3,xl2:t.xl2,xl3:t.xl3,xl4:t.xl4,zmol:t.zmol,zmos:t.zmos},Ae=LA(St);t.e3=Ae.e3,t.ee2=Ae.ee2,t.peo=Ae.peo,t.pgho=Ae.pgho,t.pho=Ae.pho,t.pinco=Ae.pinco,t.plo=Ae.plo,t.se2=Ae.se2,t.se3=Ae.se3,t.sgh2=Ae.sgh2,t.sgh3=Ae.sgh3,t.sgh4=Ae.sgh4,t.sh2=Ae.sh2,t.sh3=Ae.sh3,t.si2=Ae.si2,t.si3=Ae.si3,t.sl2=Ae.sl2,t.sl3=Ae.sl3,t.sl4=Ae.sl4,h=Ae.sinim,f=Ae.cosim,x=Ae.em,S=Ae.emsq,W=Ae.s1,ie=Ae.s2,N=Ae.s3,q=Ae.s4,P=Ae.s5,Q=Ae.ss1,ce=Ae.ss2,V=Ae.ss3,H=Ae.ss4,K=Ae.ss5,$=Ae.sz1,se=Ae.sz3,ue=Ae.sz11,fe=Ae.sz13,Ue=Ae.sz21,Ee=Ae.sz23,Fe=Ae.sz31,U=Ae.sz33,t.xgh2=Ae.xgh2,t.xgh3=Ae.xgh3,t.xgh4=Ae.xgh4,t.xh2=Ae.xh2,t.xh3=Ae.xh3,t.xi2=Ae.xi2,t.xi3=Ae.xi3,t.xl2=Ae.xl2,t.xl3=Ae.xl3,t.xl4=Ae.xl4,t.zmol=Ae.zmol,t.zmos=Ae.zmos,D=Ae.nm,j=Ae.z1,ee=Ae.z3,re=Ae.z11,ne=Ae.z13,we=Ae.z21,pe=Ae.z23,Se=Ae.z31,We=Ae.z33;var Mt={inclo:w,init:t.init,ep:t.ecco,inclp:t.inclo,nodep:t.nodeo,argpp:t.argpo,mp:t.mo,opsmode:t.operationmode},Pt=y_(t,Mt);t.ecco=Pt.ep,t.inclo=Pt.inclp,t.nodeo=Pt.nodep,t.argpo=Pt.argpp,t.mo=Pt.mp,C=0,L=0,M=0;var Ut={cosim:f,emsq:S,argpo:t.argpo,s1:W,s2:ie,s3:N,s4:q,s5:P,sinim:h,ss1:Q,ss2:ce,ss3:V,ss4:H,ss5:K,sz1:$,sz3:se,sz11:ue,sz13:fe,sz21:Ue,sz23:Ee,sz31:Fe,sz33:U,t:t.t,tc:Ve,gsto:t.gsto,mo:t.mo,mdot:t.mdot,no:t.no,nodeo:t.nodeo,nodedot:t.nodedot,xpidot:R,z1:j,z3:ee,z11:re,z13:ne,z21:we,z23:pe,z31:Se,z33:We,ecco:t.ecco,eccsq:te,em:x,argpm:C,inclm:w,mm:M,nm:D,nodem:L,irez:t.irez,atime:t.atime,d2201:t.d2201,d2211:t.d2211,d3210:t.d3210,d3222:t.d3222,d4410:t.d4410,d4422:t.d4422,d5220:t.d5220,d5232:t.d5232,d5421:t.d5421,d5433:t.d5433,dedt:t.dedt,didt:t.didt,dmdt:t.dmdt,dnodt:t.dnodt,domdt:t.domdt,del1:t.del1,del2:t.del2,del3:t.del3,xfact:t.xfact,xlamo:t.xlamo,xli:t.xli,xni:t.xni},nt=NA(Ut);t.irez=nt.irez,t.atime=nt.atime,t.d2201=nt.d2201,t.d2211=nt.d2211,t.d3210=nt.d3210,t.d3222=nt.d3222,t.d4410=nt.d4410,t.d4422=nt.d4422,t.d5220=nt.d5220,t.d5232=nt.d5232,t.d5421=nt.d5421,t.d5433=nt.d5433,t.dedt=nt.dedt,t.didt=nt.didt,t.dmdt=nt.dmdt,t.dnodt=nt.dnodt,t.domdt=nt.domdt,t.del1=nt.del1,t.del2=nt.del2,t.del3=nt.del3,t.xfact=nt.xfact,t.xlamo=nt.xlamo,t.xli=nt.xli,t.xni=nt.xni}t.isimp!==1&&(p=t.cc1*t.cc1,t.d2=4*He*le*p,Ie=t.d2*le*t.cc1/3,t.d3=(17*He+b)*Ie,t.d4=.5*Ie*He*le*(221*He+31*b)*t.cc1,t.t3cof=t.d2+2*p,t.t4cof=.25*(3*t.d3+t.cc1*(12*t.d2+10*p)),t.t5cof=.2*(3*t.d4+12*t.cc1*t.d3+6*t.d2*t.d2+15*p*(2*t.d2+p)))}M_(t,0),t.init="n"}function m0(t,e){var n="i",i=1440/(2*un),r=0,s={};s.error=0,s.satnum=t.substring(2,7),s.epochyr=parseInt(t.substring(18,20),10),s.epochdays=parseFloat(t.substring(20,32)),s.ndot=parseFloat(t.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(t.substring(44,50),10),"E").concat(t.substring(50,52))),s.bstar=parseFloat("".concat(t.substring(53,54),".").concat(parseInt(t.substring(54,59),10),"E").concat(t.substring(59,61))),s.inclo=parseFloat(e.substring(8,16)),s.nodeo=parseFloat(e.substring(17,25)),s.ecco=parseFloat(".".concat(e.substring(26,33))),s.argpo=parseFloat(e.substring(34,42)),s.mo=parseFloat(e.substring(43,51)),s.no=parseFloat(e.substring(52,63)),s.no/=i,s.inclo*=Oa,s.nodeo*=Oa,s.argpo*=Oa,s.mo*=Oa,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var a=PA(r,s.epochdays),o=a.mon,l=a.day,c=a.hr,d=a.minute,f=a.sec;return s.jdsatepoch=Gf(r,o,l,c,d,f),UA(s,{opsmode:n,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function FA(t){return OA(t)||kA(t)||zA(t)||BA()}function OA(t){if(Array.isArray(t))return wh(t)}function kA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zA(t,e){if(t){if(typeof t=="string")return wh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wh(t,e)}}function wh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function BA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HA(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e[0],r=Array.prototype.slice.call(e,1),s=Gf.apply(void 0,FA(r)),a=(s-i.jdsatepoch)*TA;return M_(i,a)}function E_(t){return t*wA}function VA(t){if(t<-un/2||t>un/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return E_(t)}function GA(t){if(t<-un||t>un)throw new RangeError("Longitude radians must be in range [-pi; pi].");return E_(t)}function jA(t,e){for(var n=6378.137,i=6356.7523142,r=Math.sqrt(t.x*t.x+t.y*t.y),s=(n-i)/n,a=2*s-s*s,o=Math.atan2(t.y,t.x)-e;o<-un;)o+=wt;for(;o>un;)o-=wt;for(var l=20,c=0,d=Math.atan2(t.z,Math.sqrt(t.x*t.x+t.y*t.y)),f;c<l;)f=1/Math.sqrt(1-a*(Math.sin(d)*Math.sin(d))),d=Math.atan2(t.z+n*f*a*Math.sin(d),r),c+=1;var h=r/Math.cos(d)-n*f;return{longitude:o,latitude:d,height:h}}const WA="https://api.spacexdata.com/v4/starlink",XA="https://celestrak.org/NORAD/elements/gp.php?GROUP=starlink&FORMAT=json",YA="https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=json",Ii={STARLINK:{name:"SpaceX Starlink",color:"#00f0ff",category:"starlink"},STATION:{name:"Space Station (ISS/CSS)",color:"#ffd700",category:"station"},SCIENCE:{name:"Scientific & Telescopes",color:"#a855f7",category:"science"},WEATHER:{name:"Earth & Weather Obs",color:"#10b981",category:"weather"},COMMUNICATION:{name:"Commercial & Telecom",color:"#ec4899",category:"comm"}},Bu={async fetchLiveSatellites(t="starlink"){if(t==="starlink")try{const e=new AbortController,n=setTimeout(()=>e.abort(),6e3),i=await fetch(WA,{signal:e.signal});if(clearTimeout(n),i.ok){const s=(await i.json()).filter(a=>a.spaceTrack&&a.spaceTrack.TLE_LINE1&&a.spaceTrack.TLE_LINE2).slice(0,1500).map((a,o)=>this.parseSpaceTrackItem(a.spaceTrack,o));if(s.length>50)return console.log(`Loaded ${s.length} live SpaceX Starlink TLE satellites!`),s}}catch(e){console.warn("SpaceX API live stream fetch note:",e.message)}try{const e=t==="starlink"?XA:YA,n=new AbortController,i=setTimeout(()=>n.abort(),6e3),r=await fetch(e,{signal:n.signal});if(clearTimeout(i),!r.ok)throw new Error(`CelesTrak status ${r.status}`);return(await r.json()).slice(0,1500).map((a,o)=>this.parseJsonSat(a,o,t))}catch(e){return console.warn("Serving global 3D Starlink constellation telemetry stream:",e.message),this.generateSyntheticSatellites(t)}},parseSpaceTrackItem(t,e){const n=t.NORAD_CAT_ID||25e3+e,i=t.OBJECT_NAME||`STARLINK-${n}`;let r=null;if(t.TLE_LINE1&&t.TLE_LINE2)try{r=m0(t.TLE_LINE1,t.TLE_LINE2)}catch{r=null}const s=parseFloat(t.INCLINATION)||53,a=parseFloat(t.MEAN_MOTION)||15.06,o=parseFloat(t.RA_OF_ASC_NODE)||e*13.7%360,l=parseFloat(t.MEAN_ANOMALY)||e*23.4%360,c=parseFloat(t.ECCENTRICITY)||1e-4,d=parseFloat(t.ARG_OF_PERICENTER)||90,f=1440/a,h=Math.round(Math.pow(398600.4418*Math.pow(f*60/(2*Math.PI),2),1/3)-6378.137)||550;return{id:`sat-${n}`,noradId:n,name:i,type:Ii.STARLINK,inclination:s,raan:o,eccentricity:c,argPe:d,meanAnomaly:l,altitudeKm:Math.max(320,Math.min(1200,h)),periodMinutes:f.toFixed(1),satrec:r,tle1:t.TLE_LINE1,tle2:t.TLE_LINE2,launchYear:t.LAUNCH_DATE?t.LAUNCH_DATE.substring(0,4):"2023",country:"USA"}},parseJsonSat(t,e,n){const i=t.NORAD_CAT_ID||t.OBJECT_ID||2e4+e,r=t.OBJECT_NAME||`STARLINK-${i}`;let s=Ii.STARLINK;r.includes("ISS")||r.includes("TIANGONG")||r.includes("STATION")?s=Ii.STATION:r.includes("HUBBLE")||r.includes("WEBB")||r.includes("NOAA")?s=Ii.SCIENCE:r.includes("SENTINEL")||r.includes("LANDSAT")?s=Ii.WEATHER:r.includes("STARLINK")||(s=Ii.COMMUNICATION);const a=t.TLE_LINE1||null,o=t.TLE_LINE2||null;let l=null;if(a&&o)try{l=m0(a,o)}catch{l=null}const c=parseFloat(t.INCLINATION)||53,d=parseFloat(t.MEAN_MOTION)||15,f=parseFloat(t.RA_OF_ASC_NODE)||e*5.5%360,h=parseFloat(t.MEAN_ANOMALY)||e*11.2%360,p=1440/d;return{id:`sat-${i}`,noradId:i,name:r,type:s,inclination:c,raan:f,eccentricity:parseFloat(t.ECCENTRICITY)||1e-4,argPe:parseFloat(t.ARG_OF_PERICENTER)||90,meanAnomaly:h,altitudeKm:550,periodMinutes:p.toFixed(1),satrec:l,tle1:a,tle2:o,launchYear:"2023",country:"USA"}},computePosition(t,e=new Date){if(!t)return{lat:0,lng:0,altKm:550,speedKmS:7.66};if(t.satrec)try{const n=HA(t.satrec,e),i=n.position,r=n.velocity;if(i&&typeof i.x=="number"&&!isNaN(i.x)){const s=S_(e),a=jA(i,s),o=VA(a.latitude),l=GA(a.longitude),c=a.height,d=r?Math.sqrt(r.x**2+r.y**2+r.z**2):7.66,f=isNaN(o)?0:Math.max(-90,Math.min(90,o)),h=isNaN(l)?0:Math.max(-180,Math.min(180,l)),p=isNaN(c)?t.altitudeKm||550:Math.round(c);return{lat:f,lng:h,altKm:Math.max(100,Math.min(36e3,p)),speedKmS:isNaN(d)?7.66:parseFloat(d.toFixed(2))}}}catch{}try{const r=e.getTime()/1e3-17e8,s=2*Math.PI/((t.periodMinutes&&!isNaN(t.periodMinutes)?t.periodMinutes:95)*60),a=((t.meanAnomaly||0)*Math.PI/180+s*r)%(2*Math.PI),o=(t.inclination||53)*Math.PI/180,l=(t.raan||0)*Math.PI/180,c=a,d=Math.sin(o)*Math.sin(c),f=Math.asin(Math.max(-1,Math.min(1,d))),h=Math.cos(o)*Math.sin(c),p=Math.cos(c),v=Math.atan2(h,p),y=7292115e-11*r;let m=l+v-y;m=(m+Math.PI)%(2*Math.PI)-Math.PI;const u=f*(180/Math.PI),g=m*(180/Math.PI),x=isNaN(u)?0:Math.max(-90,Math.min(90,u)),S=isNaN(g)?0:Math.max(-180,Math.min(180,g));return{lat:x,lng:S,altKm:t.altitudeKm&&!isNaN(t.altitudeKm)?t.altitudeKm:550,speedKmS:parseFloat((7.66+Math.sin(c)*.12).toFixed(2))}}catch{return{lat:0,lng:0,altKm:550,speedKmS:7.66}}},generateOrbitPath(t,e=120,n=.75){const i=[],r=new Date,s=new Date(r.getTime()-45*60*1e3);for(let a=0;a<e;a++){const o=new Date(s.getTime()+a*n*60*1e3),l=this.computePosition(t,o);i.push({lat:l.lat,lng:l.lng,alt:l.altKm/6371})}return i},generateSyntheticSatellites(t="starlink"){const e=[];e.push({id:"sat-25544",noradId:25544,name:"ISS (ZARYA)",type:Ii.STATION,inclination:51.64,raan:120.5,eccentricity:5e-4,argPe:90,meanAnomaly:45,altitudeKm:418,periodMinutes:"92.9",launchYear:"1998",country:"ISS"}),e.push({id:"sat-20580",noradId:20580,name:"HST (HUBBLE)",type:Ii.SCIENCE,inclination:28.47,raan:210,eccentricity:2e-4,argPe:180,meanAnomaly:120,altitudeKm:535,periodMinutes:"95.3",launchYear:"1990",country:"USA"});const n=[{inc:53,alt:550,planes:24,satsPerPlane:25},{inc:53.2,alt:540,planes:24,satsPerPlane:20},{inc:70,alt:570,planes:12,satsPerPlane:15},{inc:97.6,alt:560,planes:8,satsPerPlane:15},{inc:43,alt:535,planes:6,satsPerPlane:10}];let i=30001;return n.forEach(r=>{for(let s=0;s<r.planes;s++){const a=s*(360/r.planes)%360;for(let o=0;o<r.satsPerPlane;o++){const l=(o*(360/r.satsPerPlane)+s*7.5)%360,c=o%4===0?"v2-Mini":"v1.5";e.push({id:`sat-${i}`,noradId:i,name:`STARLINK-${i-24e3} (${c})`,type:Ii.STARLINK,inclination:r.inc,raan:a,eccentricity:1e-4,argPe:o*12%360,meanAnomaly:l,altitudeKm:r.alt+(o%5-2)*3,periodMinutes:(95+(r.alt-550)*.02).toFixed(1),launchYear:(2020+o%5).toString(),country:"USA"}),i++}}}),e}};function $A({satellites:t,selectedSat:e,setSelectedSat:n,simSpeed:i,setSimSpeed:r}){const s=Le.useRef(null),[a,o]=Le.useState(""),[l,c]=Le.useState("all"),[d,f]=Le.useState(!1),[h,p]=Le.useState(null),[v,y]=Le.useState(0),m=Le.useRef(null),u=Le.useRef(null),g=Le.useRef(null),x=Le.useRef(null),S=Le.useRef(null),I=Le.useRef(null),A=Le.useRef([]);return Le.useEffect(()=>{if(!s.current)return;const C=s.current.clientWidth||window.innerWidth,L=s.current.clientHeight||window.innerHeight-65,w=new u_;w.background=new Qe("#030712"),m.current=w;const M=new Tn(45,C/L,.1,1e3);M.position.set(0,2,5.5),u.current=M;let D;try{D=new lc({antialias:!0,alpha:!0})}catch($){console.warn("WebGL creation fallback:",$),D=new lc({antialias:!1,failIfMajorPerformanceCaveat:!1})}D.setSize(C,L),D.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.current.appendChild(D.domElement),g.current=D;const F=new x_(M,D.domElement);F.enableDamping=!0,F.dampingFactor=.05,F.rotateSpeed=.8,F.minDistance=2.3,F.maxDistance=12,x.current=F;const k=new v_(16777215,.9);w.add(k);const Y=new g_(16777215,1.4);Y.position.set(5,3,5),w.add(Y);const J=new Jr(2,64,64),W=qA(),ie=new p_({map:W,shininess:15,specular:new Qe(2236962)}),N=new ct(J,ie);w.add(N);const q=new Jr(2.05,48,48),P=new la({color:61695,transparent:!0,opacity:.12,side:on}),b=new ct(q,P);w.add(b);const Q=new Dn;w.add(Q),S.current=Q;const ce=()=>{if(!s.current||!D||!M)return;const $=s.current.clientWidth||window.innerWidth,se=s.current.clientHeight||window.innerHeight-65;M.aspect=$/se,M.updateProjectionMatrix(),D.setSize($,se)};window.addEventListener("resize",ce);let V,H=performance.now();const K=$=>{V=requestAnimationFrame(K);const se=($-H)/1e3;H=$,N&&(N.rotation.y+=.03*se),F.update(),D.render(w,M)};return K(performance.now()),()=>{cancelAnimationFrame(V),window.removeEventListener("resize",ce),D.domElement&&s.current&&s.current.removeChild(D.domElement),D.dispose()}},[]),Le.useEffect(()=>{if(!S.current||!t)return;for(;S.current.children.length>0;){const w=S.current.children[0];S.current.remove(w),w.geometry&&w.geometry.dispose(),w.material&&w.material.dispose()}const C=t.filter(w=>{const M=!a||w.name.toLowerCase().includes(a.toLowerCase())||String(w.noradId).includes(a),D=l==="all"||w.type.category===l;return M&&D});if(y(C.length),A.current=C,C.length===0)return;const L=new Jr(.015,8,8);C.forEach(w=>{const M=w.type.color||"#00f0ff",D=new la({color:M}),F=new ct(L,D),k=2+(w.alt||550)/6371,Y=(w.lat||0)*(Math.PI/180),J=(w.lng||0)*(Math.PI/180);F.position.x=k*Math.cos(Y)*Math.cos(J),F.position.y=k*Math.sin(Y),F.position.z=k*Math.cos(Y)*Math.sin(J),F.userData=w,S.current.add(F)})},[t,l,a]),Le.useEffect(()=>{if(!g.current||!u.current||!S.current)return;const C=new cA,L=new $e,w=F=>{if(!s.current)return;const k=s.current.getBoundingClientRect();L.x=(F.clientX-k.left)/k.width*2-1,L.y=-((F.clientY-k.top)/k.height)*2+1,C.setFromCamera(L,u.current);const Y=C.intersectObjects(S.current.children);if(Y.length>0){const J=Y[0].object.userData;p(J),s.current.style.cursor="pointer"}else p(null),s.current.style.cursor="grab"},M=F=>{if(!s.current)return;const k=s.current.getBoundingClientRect();L.x=(F.clientX-k.left)/k.width*2-1,L.y=-((F.clientY-k.top)/k.height)*2+1,C.setFromCamera(L,u.current);const Y=C.intersectObjects(S.current.children);if(Y.length>0){const J=Y[0].object.userData;n(J)}},D=g.current.domElement;return D.addEventListener("mousemove",w),D.addEventListener("click",M),()=>{D.removeEventListener("mousemove",w),D.removeEventListener("click",M)}},[n]),Le.useEffect(()=>{if(!m.current||(I.current&&(m.current.remove(I.current),I.current.geometry.dispose(),I.current.material.dispose(),I.current=null),!e))return;const C=[],L=2+(e.alt||550)/6371,w=(e.inclination||53)*Math.PI/180;for(let k=0;k<=128;k++){const Y=k/128*Math.PI*2,J=L*Math.cos(Y),W=L*Math.sin(Y)*Math.sin(w),ie=L*Math.sin(Y)*Math.cos(w);C.push(new B(J,W,ie))}const M=new vn().setFromPoints(C),D=new Of({color:61695,transparent:!0,opacity:.85}),F=new d_(M,D);if(m.current.add(F),I.current=F,x.current){const k=(e.lat||0)*(Math.PI/180),Y=(e.lng||0)*(Math.PI/180),J=new B(L*Math.cos(k)*Math.cos(Y),L*Math.sin(k),L*Math.cos(k)*Math.sin(Y));x.current.target.copy(J)}},[e]),_.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[_.jsx("div",{ref:s,style:{width:"100%",height:"100%"}}),_.jsxs("div",{className:"globe-hud-overlay",children:[_.jsx("div",{className:"glass-panel",style:{padding:"10px 14px"},children:_.jsxs("div",{className:"search-input-wrapper",children:[_.jsx(Mf,{size:16,className:"search-icon"}),_.jsx("input",{type:"text",placeholder:"Search Earth Satellites or NORAD ID...",value:a,onChange:C=>o(C.target.value),style:{width:"100%"}})]})}),_.jsxs("div",{className:"glass-panel filter-pill-container",children:[_.jsx("button",{className:`filter-pill ${l==="all"?"active":""}`,onClick:()=>c("all"),children:"All Earth Orbits"}),_.jsxs("button",{className:`filter-pill ${l==="starlink"?"active":""}`,onClick:()=>c("starlink"),children:[_.jsx("span",{className:"dot-indicator",style:{background:"#00f0ff"}})," Starlink"]}),_.jsxs("button",{className:`filter-pill ${l==="station"?"active":""}`,onClick:()=>c("station"),children:[_.jsx("span",{className:"dot-indicator",style:{background:"#ffd700"}})," ISS / Station"]}),_.jsxs("button",{className:`filter-pill ${l==="science"?"active":""}`,onClick:()=>c("science"),children:[_.jsx("span",{className:"dot-indicator",style:{background:"#a855f7"}})," Science"]})]}),_.jsxs("div",{className:"glass-panel",style:{padding:"14px 18px",display:"flex",gap:"20px",alignItems:"center",justifyContent:"space-between",background:"rgba(5, 5, 8, 0.92)",borderLeft:"3px solid #00f0ff"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:"0.68rem",fontFamily:"var(--font-mono)",color:"#00f0ff",letterSpacing:"1.2px",fontWeight:"bold"},children:"EARTH ORBITS TRACKED"}),_.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:"900",color:"#ffffff",lineHeight:"1.1",marginTop:"2px"},children:v.toLocaleString()})]}),_.jsx("div",{style:{width:"1px",height:"32px",background:"rgba(255,255,255,0.15)"}}),_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:"0.68rem",fontFamily:"var(--font-mono)",color:"#ffd700",letterSpacing:"1.2px",fontWeight:"bold"},children:"SPACEX STARLINK"}),_.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.6rem",fontWeight:"900",color:"#ffd700",lineHeight:"1.1",marginTop:"2px"},children:t.filter(C=>C.type.category==="starlink").length.toLocaleString()})]})]})]}),_.jsxs("div",{className:"time-controls-bar",children:[_.jsx("button",{className:"speed-btn",onClick:()=>f(!d),children:d?_.jsx(yf,{size:14,color:"#00f0ff"}):_.jsx(C1,{size:14})}),_.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8",fontFamily:"monospace"},children:"SPEED:"}),_.jsx("button",{className:`speed-btn ${i===1?"active":""}`,onClick:()=>{r(1),f(!1)},children:"1x Live"}),_.jsx("button",{className:`speed-btn ${i===10?"active":""}`,onClick:()=>{r(10),f(!1)},children:"10x"}),_.jsx("button",{className:`speed-btn ${i===60?"active":""}`,onClick:()=>{r(60),f(!1)},children:"60x"}),_.jsx("button",{className:`speed-btn ${i===300?"active":""}`,onClick:()=>{r(300),f(!1)},children:"300x"})]}),h&&_.jsxs("div",{style:{position:"fixed",bottom:"80px",left:"24px",zIndex:50,background:"rgba(5, 5, 8, 0.94)",border:"1px solid rgba(0, 240, 255, 0.4)",padding:"12px 16px",borderRadius:"6px",fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"#ffffff",pointerEvents:"none"},children:[_.jsx("div",{style:{color:"#00f0ff",fontWeight:"bold"},children:h.name}),_.jsxs("div",{children:["NORAD ID: ",h.noradId," | Alt: ",h.alt," km"]})]})]})}function qA(){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d");e.fillStyle="#0b192c",e.fillRect(0,0,1024,512),e.fillStyle="#1e3a5f",e.beginPath(),e.ellipse(280,160,140,90,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(360,340,75,110,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(560,180,90,70,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(570,310,85,110,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(780,170,160,100,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(840,360,70,60,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(0, 240, 255, 0.15)",e.lineWidth=1;for(let i=0;i<1024;i+=64)e.beginPath(),e.moveTo(i,0),e.lineTo(i,512),e.stroke();for(let i=0;i<512;i+=64)e.beginPath(),e.moveTo(0,i),e.lineTo(1024,i),e.stroke();return new f_(t)}var jf={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var P=new OffscreenCanvas(1,1),b=P.getContext("2d");b.fillRect(0,0,1,1);var Q=P.transferToImageBitmap();b.createPattern(Q,"no-repeat")}catch{return!1}return!0}();function l(){}function c(P){var b=n.exports.Promise,Q=b!==void 0?b:e.Promise;return typeof Q=="function"?new Q(P):(P(l,l),null)}var d=function(P,b){return{transform:function(Q){if(P)return Q;if(b.has(Q))return b.get(Q);var ce=new OffscreenCanvas(Q.width,Q.height),V=ce.getContext("2d");return V.drawImage(Q,0,0),b.set(Q,ce),ce},clear:function(){b.clear()}}}(o,new Map),f=function(){var P=Math.floor(16.666666666666668),b,Q,ce={},V=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(H){var K=Math.random();return ce[K]=requestAnimationFrame(function $(se){V===se||V+P-1<se?(V=se,delete ce[K],H()):ce[K]=requestAnimationFrame($)}),K},Q=function(H){ce[H]&&cancelAnimationFrame(ce[H])}):(b=function(H){return setTimeout(H,P)},Q=function(H){return clearTimeout(H)}),{frame:b,cancel:Q}}(),h=function(){var P,b,Q={};function ce(V){function H(K,$){V.postMessage({options:K||{},callback:$})}V.init=function($){var se=$.transferControlToOffscreen();V.postMessage({canvas:se},[se])},V.fire=function($,se,ue){if(b)return H($,null),b;var fe=Math.random().toString(36).slice(2);return b=c(function(Ue){function Ee(Fe){Fe.data.callback===fe&&(delete Q[fe],V.removeEventListener("message",Ee),b=null,d.clear(),ue(),Ue())}V.addEventListener("message",Ee),H($,fe),Q[fe]=Ee.bind(null,{data:{callback:fe}})}),b},V.reset=function(){V.postMessage({reset:!0});for(var $ in Q)Q[$](),delete Q[$]}}return function(){if(P)return P;if(!i&&s){var V=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{P=new Worker(URL.createObjectURL(new Blob([V])))}catch(H){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",H),null}ce(P)}return P}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(P,b){return b?b(P):P}function y(P){return P!=null}function m(P,b,Q){return v(P&&y(P[b])?P[b]:p[b],Q)}function u(P){return P<0?0:Math.floor(P)}function g(P,b){return Math.floor(Math.random()*(b-P))+P}function x(P){return parseInt(P,16)}function S(P){return P.map(I)}function I(P){var b=String(P).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:x(b.substring(0,2)),g:x(b.substring(2,4)),b:x(b.substring(4,6))}}function A(P){var b=m(P,"origin",Object);return b.x=m(b,"x",Number),b.y=m(b,"y",Number),b}function C(P){P.width=document.documentElement.clientWidth,P.height=document.documentElement.clientHeight}function L(P){var b=P.getBoundingClientRect();P.width=b.width,P.height=b.height}function w(P){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=P,b}function M(P,b,Q,ce,V,H,K,$,se){P.save(),P.translate(b,Q),P.rotate(H),P.scale(ce,V),P.arc(0,0,1,K,$,se),P.restore()}function D(P){var b=P.angle*(Math.PI/180),Q=P.spread*(Math.PI/180);return{x:P.x,y:P.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:P.startVelocity*.5+Math.random()*P.startVelocity,angle2D:-b+(.5*Q-Math.random()*Q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:P.color,shape:P.shape,tick:0,totalTicks:P.ticks,decay:P.decay,drift:P.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:P.gravity*3,ovalScalar:.6,scalar:P.scalar,flat:P.flat}}function F(P,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var Q=b.tick++/b.totalTicks,ce=b.x+b.random*b.tiltCos,V=b.y+b.random*b.tiltSin,H=b.wobbleX+b.random*b.tiltCos,K=b.wobbleY+b.random*b.tiltSin;if(P.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-Q)+")",P.beginPath(),a&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))P.fill(ie(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(H-ce)*.1,Math.abs(K-V)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var $=Math.PI/10*b.wobble,se=Math.abs(H-ce)*.1,ue=Math.abs(K-V)*.1,fe=b.shape.bitmap.width*b.scalar,Ue=b.shape.bitmap.height*b.scalar,Ee=new DOMMatrix([Math.cos($)*se,Math.sin($)*se,-Math.sin($)*ue,Math.cos($)*ue,b.x,b.y]);Ee.multiplySelf(new DOMMatrix(b.shape.matrix));var Fe=P.createPattern(d.transform(b.shape.bitmap),"no-repeat");Fe.setTransform(Ee),P.globalAlpha=1-Q,P.fillStyle=Fe,P.fillRect(b.x-fe/2,b.y-Ue/2,fe,Ue),P.globalAlpha=1}else if(b.shape==="circle")P.ellipse?P.ellipse(b.x,b.y,Math.abs(H-ce)*b.ovalScalar,Math.abs(K-V)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):M(P,b.x,b.y,Math.abs(H-ce)*b.ovalScalar,Math.abs(K-V)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var U=Math.PI/2*3,Ve=4*b.scalar,Ie=8*b.scalar,Ce=b.x,he=b.y,ke=5,le=Math.PI/ke;ke--;)Ce=b.x+Math.cos(U)*Ie,he=b.y+Math.sin(U)*Ie,P.lineTo(Ce,he),U+=le,Ce=b.x+Math.cos(U)*Ve,he=b.y+Math.sin(U)*Ve,P.lineTo(Ce,he),U+=le;else P.moveTo(Math.floor(b.x),Math.floor(b.y)),P.lineTo(Math.floor(b.wobbleX),Math.floor(V)),P.lineTo(Math.floor(H),Math.floor(K)),P.lineTo(Math.floor(ce),Math.floor(b.wobbleY));return P.closePath(),P.fill(),b.tick<b.totalTicks}function k(P,b,Q,ce,V){var H=b.slice(),K=P.getContext("2d"),$,se,ue=c(function(fe){function Ue(){$=se=null,K.clearRect(0,0,ce.width,ce.height),d.clear(),V(),fe()}function Ee(){i&&!(ce.width===r.width&&ce.height===r.height)&&(ce.width=P.width=r.width,ce.height=P.height=r.height),!ce.width&&!ce.height&&(Q(P),ce.width=P.width,ce.height=P.height),K.clearRect(0,0,ce.width,ce.height),H=H.filter(function(Fe){return F(K,Fe)}),H.length?$=f.frame(Ee):Ue()}$=f.frame(Ee),se=Ue});return{addFettis:function(fe){return H=H.concat(fe),ue},canvas:P,promise:ue,reset:function(){$&&f.cancel($),se&&se()}}}function Y(P,b){var Q=!P,ce=!!m(b||{},"resize"),V=!1,H=m(b,"disableForReducedMotion",Boolean),K=s&&!!m(b||{},"useWorker"),$=K?h():null,se=Q?C:L,ue=P&&$?!!P.__confetti_initialized:!1,fe=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ue;function Ee(U,Ve,Ie){for(var Ce=m(U,"particleCount",u),he=m(U,"angle",Number),ke=m(U,"spread",Number),le=m(U,"startVelocity",Number),R=m(U,"decay",Number),E=m(U,"gravity",Number),j=m(U,"drift",Number),ee=m(U,"colors",S),re=m(U,"ticks",Number),ne=m(U,"shapes"),we=m(U,"scalar"),pe=!!m(U,"flat"),Se=A(U),We=Ce,oe=[],Me=P.width*Se.x,Re=P.height*Se.y;We--;)oe.push(D({x:Me,y:Re,angle:he,spread:ke,startVelocity:le,color:ee[We%ee.length],shape:ne[g(0,ne.length)],ticks:re,decay:R,gravity:E,drift:j,scalar:we,flat:pe}));return Ue?Ue.addFettis(oe):(Ue=k(P,oe,se,Ve,Ie),Ue.promise)}function Fe(U){var Ve=H||m(U,"disableForReducedMotion",Boolean),Ie=m(U,"zIndex",Number);if(Ve&&fe)return c(function(le){le()});Q&&Ue?P=Ue.canvas:Q&&!P&&(P=w(Ie),document.body.appendChild(P)),ce&&!ue&&se(P);var Ce={width:P.width,height:P.height};$&&!ue&&$.init(P),ue=!0,$&&(P.__confetti_initialized=!0);function he(){if($){var le={getBoundingClientRect:function(){if(!Q)return P.getBoundingClientRect()}};se(le),$.postMessage({resize:{width:le.width,height:le.height}});return}Ce.width=Ce.height=null}function ke(){Ue=null,ce&&(V=!1,e.removeEventListener("resize",he)),Q&&P&&(document.body.contains(P)&&document.body.removeChild(P),P=null,ue=!1)}return ce&&!V&&(V=!0,e.addEventListener("resize",he,!1)),$?$.fire(U,Ce,ke):Ee(U,Ce,ke)}return Fe.reset=function(){$&&$.reset(),Ue&&Ue.reset()},Fe}var J;function W(){return J||(J=Y(null,{useWorker:!0,resize:!0})),J}function ie(P,b,Q,ce,V,H,K){var $=new Path2D(P),se=new Path2D;se.addPath($,new DOMMatrix(b));var ue=new Path2D;return ue.addPath(se,new DOMMatrix([Math.cos(K)*V,Math.sin(K)*V,-Math.sin(K)*H,Math.cos(K)*H,Q,ce])),ue}function N(P){if(!a)throw new Error("path confetti are not supported in this browser");var b,Q;typeof P=="string"?b=P:(b=P.path,Q=P.matrix);var ce=new Path2D(b),V=document.createElement("canvas"),H=V.getContext("2d");if(!Q){for(var K=1e3,$=K,se=K,ue=0,fe=0,Ue,Ee,Fe=0;Fe<K;Fe+=2)for(var U=0;U<K;U+=2)H.isPointInPath(ce,Fe,U,"nonzero")&&($=Math.min($,Fe),se=Math.min(se,U),ue=Math.max(ue,Fe),fe=Math.max(fe,U));Ue=ue-$,Ee=fe-se;var Ve=10,Ie=Math.min(Ve/Ue,Ve/Ee);Q=[Ie,0,0,Ie,-Math.round(Ue/2+$)*Ie,-Math.round(Ee/2+se)*Ie]}return{type:"path",path:b,matrix:Q}}function q(P){var b,Q=1,ce="#000000",V='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof P=="string"?b=P:(b=P.text,Q="scalar"in P?P.scalar:Q,V="fontFamily"in P?P.fontFamily:V,ce="color"in P?P.color:ce);var H=10*Q,K=""+H+"px "+V,$=new OffscreenCanvas(H,H),se=$.getContext("2d");se.font=K;var ue=se.measureText(b),fe=Math.ceil(ue.actualBoundingBoxRight+ue.actualBoundingBoxLeft),Ue=Math.ceil(ue.actualBoundingBoxAscent+ue.actualBoundingBoxDescent),Ee=2,Fe=ue.actualBoundingBoxLeft+Ee,U=ue.actualBoundingBoxAscent+Ee;fe+=Ee+Ee,Ue+=Ee+Ee,$=new OffscreenCanvas(fe,Ue),se=$.getContext("2d"),se.font=K,se.fillStyle=ce,se.fillText(b,Fe,U);var Ve=1/Q;return{type:"bitmap",bitmap:$.transferToImageBitmap(),matrix:[Ve,0,0,Ve,-fe*Ve/2,-Ue*Ve/2]}}n.exports=function(){return W().apply(this,arguments)},n.exports.reset=function(){W().reset()},n.exports.create=Y,n.exports.shapeFromPath=N,n.exports.shapeFromText=q})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),jf,!1);const KA=jf.exports;jf.exports.create;function ZA({nextLaunch:t}){const e=Le.useRef(null),n=(t==null?void 0:t.name)||"Starlink Group 10-14",i=(t==null?void 0:t.rocketName)||"Falcon 9 Block 5",r=(t==null?void 0:t.launchpadName)||"Space Launch Complex 40 (SLC-40)",s=(t==null?void 0:t.flight_number)||388,[a,o]=Le.useState("idle"),[l,c]=Le.useState(10),[d,f]=Le.useState("auto"),[h,p]=Le.useState({timeStr:"T-00:00:10",altitude:0,velocity:0,downrange:0,mach:0,pitch:90,gForce:1,stage1Fuel:100,stage2Fuel:100,statusText:"SYSTEMS NOMINAL - TERMINAL COUNTDOWN AUTO-SEQUENCE",currentPhase:"PRE-LAUNCH"}),v=Le.useRef(null),y=Le.useRef(null),m=Le.useRef(null),u=Le.useRef(null),g=Le.useRef(null),x=Le.useRef(null),S=Le.useRef(null),I=Le.useRef(null),A=Le.useRef(null),C=Le.useRef(null),L=Le.useRef(null),w=Le.useRef([]),M=Le.useRef(null),D=Le.useRef("idle"),F=Le.useRef("auto");Le.useEffect(()=>{D.current=a},[a]),Le.useEffect(()=>{F.current=d},[d]),Le.useEffect(()=>{if(!e.current)return;const W=e.current.clientWidth||window.innerWidth,ie=e.current.clientHeight||window.innerHeight-65,N=new u_;N.background=new Qe("#02050e"),N.fog=new Ff("#02050e",.001),v.current=N;const q=new Tn(45,W/ie,.1,5e3);q.position.set(0,10,38),y.current=q;let P;try{P=new lc({antialias:!0})}catch{P=new lc({antialias:!1})}P.setSize(W,ie),P.setPixelRatio(Math.min(window.devicePixelRatio,2)),P.shadowMap.enabled=!0,e.current.appendChild(P.domElement),m.current=P;const b=new x_(q,P.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.maxPolarAngle=Math.PI/2+.05,u.current=b;const Q=new v_(16777215,.7);N.add(Q);const ce=new g_(16777215,1.6);ce.position.set(150,250,150),ce.castShadow=!0,N.add(ce);const V=new o0(61695,5,120,Math.PI/4,.4);V.position.set(-20,30,20),V.target.position.set(0,8,0),N.add(V),N.add(V.target);const H=new o0(16739072,4,120,Math.PI/4,.4);H.position.set(20,30,-20),H.target.position.set(0,8,0),N.add(H),N.add(H.target);const K=new vn,$=[];for(let de=0;de<3e3;de++){const ye=(Math.random()-.5)*4e3,De=Math.random()*2e3-400,Oe=(Math.random()-.5)*4e3;$.push(ye,De,Oe)}K.setAttribute("position",new Xt($,3));const se=new h_({color:16777215,size:1.5,transparent:!0,opacity:.85}),ue=new eA(K,se);N.add(ue);const fe=150,Ue=new Jr(fe,64,64),Ee=document.createElement("canvas");Ee.width=1024,Ee.height=512;const Fe=Ee.getContext("2d"),U=Fe.createLinearGradient(0,0,0,512);U.addColorStop(0,"#06152d"),U.addColorStop(.5,"#0b2545"),U.addColorStop(1,"#051022"),Fe.fillStyle=U,Fe.fillRect(0,0,1024,512),Fe.fillStyle="#1e3a8a",Fe.beginPath(),Fe.ellipse(250,150,110,75,-.2,0,Math.PI*2),Fe.fill();const Ve=new p_({map:new f_(Ee),shininess:35,specular:1122884}),Ie=new ct(Ue,Ve);Ie.position.set(0,-fe,0),N.add(Ie);const Ce=new Jr(fe+4,64,64),he=new Zi({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.6 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
          gl_FragColor = vec4(0.0, 0.94, 1.0, 1.0) * intensity;
        }
      `,blending:Ud,side:on,transparent:!0}),ke=new ct(Ce,he);ke.position.set(0,-fe,0),N.add(ke),new aA().load("https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",de=>{Ve.map=de,Ve.needsUpdate=!0});const le=new hr(14,14,1.2,32),R=new Nn({color:1976635,roughness:.7}),E=new ct(le,R);E.position.set(0,.6,0),N.add(E);const j=new Dn,ee=new ai(4,30,4),re=new Nn({color:3359061,metalness:.7}),ne=new ct(ee,re);ne.position.set(-8,15,0),j.add(ne);for(let de=3;de<28;de+=3.5){const ye=new ai(4.2,.4,4.2),De=new Nn({color:61695,metalness:.8}),Oe=new ct(ye,De);Oe.position.set(-8,de,0),j.add(Oe)}const we=new Dn,pe=new ai(5.5,1,1),Se=new Nn({color:61695,metalness:.9}),We=new ct(pe,Se);We.position.set(2.75,0,0),we.add(We),we.position.set(-8,20,0),j.add(we),L.current=we,N.add(j);const oe=new Dn,Me=new ai(20,1.8,40),Re=new Nn({color:1976635,roughness:.3}),Be=new ct(Me,Re);oe.add(Be);const be=new zf(4,5.2,32),Ge=new la({color:61695,side:Ei}),He=new ct(be,Ge);He.rotation.x=-Math.PI/2,He.position.y=.92,oe.add(He),oe.position.set(0,-1.8,-240),N.add(oe),M.current=oe;const O=new nA([new B(0,1.2,0),new B(0,20,-20),new B(0,60,-70),new B(0,120,-160),new B(0,200,-280)]).getPoints(100),ge=new vn().setFromPoints(O),te=new Of({color:61695,linewidth:2,transparent:!0,opacity:.65}),ae=new d_(ge,te);N.add(ae);const Te=new Dn,ve=new Dn,Xe=new hr(.9,.9,13,32),et=new Nn({color:16317180,roughness:.25}),tt=new ct(Xe,et);tt.position.y=6.5,ve.add(tt);const Ye=new hr(.91,.91,2.4,32),St=new Nn({color:988970,roughness:.4}),Ae=new ct(Ye,St);Ae.position.y=12.2,ve.add(Ae);const Mt=new Dn;for(let de=0;de<9;de++){const ye=new Ya(.2,.7,16),De=new Nn({color:3359061,metalness:.9}),Oe=new ct(ye,De);if(de===0)Oe.position.set(0,-.35,0);else{const xe=(de-1)*Math.PI/4;Oe.position.set(Math.cos(xe)*.5,-.35,Math.sin(xe)*.5)}Oe.rotation.x=Math.PI,Mt.add(Oe)}ve.add(Mt);const Pt=new ai(.09,.8,1),Ut=new Nn({color:988970,metalness:.9});for(let de=0;de<4;de++){const ye=new ct(Pt,Ut),De=de*Math.PI/2;ye.position.set(Math.cos(De)*.95,12.5,Math.sin(De)*.95),ye.rotation.y=De,ve.add(ye)}const nt=[];for(let de=0;de<4;de++){const ye=new Dn,De=new hr(.07,.07,4,16),Oe=new Nn({color:988970,metalness:.8}),xe=new ct(De,Oe);xe.position.y=-1.8,ye.add(xe);const qe=de*Math.PI/2+Math.PI/4;ye.position.set(Math.cos(qe)*.9,2,Math.sin(qe)*.9),ye.rotation.y=qe,ye.rotation.z=Math.PI-.15,ve.add(ye),nt.push(ye)}w.current=nt;const pi=new Ya(1,6,16),Kn=new la({color:16739072,transparent:!0,opacity:0}),dn=new ct(pi,Kn);dn.position.y=-3,dn.rotation.x=Math.PI,ve.add(dn),C.current=dn,x.current=ve,Te.add(ve);const hn=new Dn,Zt=new hr(.9,.9,4.8,32),Qt=new Nn({color:988970,roughness:.3}),_t=new ct(Zt,Qt);_t.position.y=15.6,hn.add(_t);const Jt=new ai(1,2.8,1),mi=new Nn({color:61695,metalness:.9}),Zn=new ct(Jt,mi);Zn.position.y=18.8,hn.add(Zn);const T=new Ya(.92,3.8,16,1,!1,0,Math.PI),z=new Nn({color:16317180,roughness:.2}),X=new ct(T,z);X.position.set(0,19.4,0),hn.add(X),I.current=X;const Z=new ct(T,z);Z.position.set(0,19.4,0),Z.rotation.y=Math.PI,hn.add(Z),A.current=Z,S.current=hn,Te.add(hn),Te.position.set(0,1.2,0),N.add(Te),g.current=Te;const G=()=>{if(!e.current||!m.current||!y.current)return;const de=e.current.clientWidth,ye=e.current.clientHeight;y.current.aspect=de/ye,y.current.updateProjectionMatrix(),m.current.setSize(de,ye)};window.addEventListener("resize",G);let _e;const Pe=()=>{_e=requestAnimationFrame(Pe);const de=D.current,ye=F.current;if(y.current&&u.current){let De=null,Oe=null;if(ye==="stage2"&&S.current){const xe=new B;S.current.getWorldPosition(xe),De=xe,Oe=new B(xe.x+6,xe.y+4,xe.z+18)}else if(ye==="stage1"&&x.current){const xe=new B;x.current.getWorldPosition(xe),De=xe,Oe=new B(xe.x+6,xe.y+6,xe.z+20)}else if(ye==="pad")De=new B(0,10,0),Oe=new B(0,7,32);else if(ye==="droneship")De=new B(0,1,-240),Oe=new B(0,14,-200);else if(ye==="auto"&&de!=="idle"&&g.current)if(de==="liftoff")De=g.current.position,Oe=new B(g.current.position.x+6,g.current.position.y+4,g.current.position.z+28);else if(de==="maxq"||de==="staging"||de==="fairing"){if(S.current){const xe=new B;S.current.getWorldPosition(xe),De=xe,Oe=new B(xe.x+8,xe.y+6,xe.z+22)}}else if(de==="landing"){if(x.current){const xe=new B;x.current.getWorldPosition(xe),De=xe,Oe=new B(xe.x+8,xe.y+8,xe.z+24)}}else de==="success"&&(De=new B(0,2,-240),Oe=new B(0,14,-195));Oe&&De&&(y.current.position.lerp(Oe,.06),u.current.target.lerp(De,.06))}u.current&&u.current.update(),m.current&&v.current&&y.current&&m.current.render(v.current,y.current)};return Pe(),()=>{window.removeEventListener("resize",G),cancelAnimationFrame(_e),e.current&&P.domElement&&e.current.removeChild(P.domElement)}},[]);const k=()=>{if(a!=="idle")return;o("countdown");let W=10;c(10);const ie=setInterval(()=>{W-=1,c(W),W<=0&&(clearInterval(ie),Y())},1e3)},Y=()=>{o("liftoff");const W=Date.now();L.current&&(L.current.rotation.y=-Math.PI/2.5),C.current&&(C.current.material.opacity=.95);const ie=setInterval(()=>{const N=(Date.now()-W)/1e3;if(N<8){const q=Math.pow(N,1.75)*.35,P=Math.round(N*195),b=N*2.8;p({timeStr:`T+00:00:${String(Math.floor(N)).padStart(2,"0")}`,altitude:parseFloat(q.toFixed(1)),velocity:P,downrange:parseFloat(b.toFixed(1)),mach:parseFloat((P/1234).toFixed(1)),pitch:Math.max(70,Math.round(90-N*2.5)),stage1Fuel:Math.max(0,Math.round(100-N*3.5)),stage2Fuel:100,gForce:parseFloat((1.1+N*.15).toFixed(1)),statusText:"LIFTOFF! FALCON 9 LAUNCHING DIRECTLY OFF PLANET EARTH SURFACE",currentPhase:"STAGE 1 ASCENT"}),g.current&&(g.current.position.y=1.2+q,g.current.position.z=-b*.4,g.current.rotation.z=-Math.min(.32,N*.028))}else if(N>=8&&N<14){o("maxq");const q=15+(N-8)*6.5,P=1560+Math.round((N-8)*480),b=22+(N-8)*14;p({timeStr:`T+00:01:${String(Math.floor(N)).padStart(2,"0")}`,altitude:parseFloat(q.toFixed(1)),velocity:P,downrange:parseFloat(b.toFixed(1)),mach:parseFloat((P/1234).toFixed(1)),pitch:58,stage1Fuel:Math.max(0,Math.round(72-(N-8)*5.2)),stage2Fuel:100,gForce:3.4,statusText:"MAX-Q: MAXIMUM DYNAMIC PRESSURE PASSING EARTH ATMOSPHERE HULL",currentPhase:"GRAVITY TURN"}),g.current&&(g.current.position.y=1.2+q,g.current.position.z=-b*.6,g.current.rotation.z=-.48)}else if(N>=14&&N<18)o("staging"),C.current&&(C.current.material.opacity=.1),p(q=>({...q,timeStr:"T+00:02:26",statusText:"MECO CONFIRMED - PNEUMATIC PUSHERS EXECUTING STAGE SEPARATION IN EARTH ORBIT",currentPhase:"STAGE SEPARATION"})),S.current&&(S.current.position.y+=.35,S.current.position.z-=.15),x.current&&(x.current.rotation.z+=.04);else if(N>=18&&N<24)o("fairing"),p(q=>({...q,timeStr:"T+00:03:10",statusText:"PAYLOAD FAIRING SEPARATION CONFIRMED - STARLINK V2 MINI STACK EXPOSED IN LEO ORBIT",currentPhase:"ORBIT INSERTION"})),I.current&&A.current&&(I.current.position.x-=.3,A.current.position.x+=.3,I.current.position.z+=.2,A.current.position.z+=.2);else if(N>=24&&N<32){o("landing");const q=Math.max(0,240-(N-24)*30),P=Math.max(1.4,52-(N-24)*6.3);w.current&&N>28&&w.current.forEach(b=>{b.rotation.z=Math.PI/2+.35}),p(b=>({...b,timeStr:"T+00:08:15",altitude:parseFloat((65-(N-24)*8).toFixed(1)),velocity:Math.max(0,2600-(N-24)*325),statusText:"STAGE 1 MERLIN ENGINE LANDING BURN - TOUCHDOWN ON ASOG DRONE SHIP",currentPhase:"BOOSTER LANDING"})),x.current&&(x.current.position.set(0,P,-q),x.current.rotation.set(0,0,0)),S.current&&(S.current.position.y+=2.8,S.current.position.z-=8)}else N>=32&&(clearInterval(ie),o("success"),p({timeStr:"T+00:08:45",altitude:220,velocity:27580,downrange:1250,mach:22.4,pitch:0,stage1Fuel:6,stage2Fuel:40,gForce:1,statusText:`MISSION SUCCESS! FALCON 9 STAGE 1 TOUCHDOWN ON ASOG & ${n.toUpperCase()} DEPLOYED IN ORBIT!`,currentPhase:"ORBIT ACHIEVED"}),x.current&&(x.current.position.set(0,-.4,-240),x.current.rotation.set(0,0,0)),KA({particleCount:220,spread:120,origin:{y:.5}}))},200)},J=()=>{o("idle"),c(10),f("auto"),L.current&&(L.current.rotation.y=0),C.current&&(C.current.material.opacity=0),w.current&&w.current.forEach(W=>{W.rotation.z=Math.PI-.15}),p({timeStr:"T-00:00:10",altitude:0,velocity:0,downrange:0,mach:0,pitch:90,stage1Fuel:100,stage2Fuel:100,gForce:1,statusText:"SYSTEMS NOMINAL - TERMINAL COUNTDOWN AUTO-SEQUENCE",currentPhase:"PRE-LAUNCH"}),g.current&&(g.current.position.set(0,1.2,0),g.current.rotation.set(0,0,0)),x.current&&(x.current.position.set(0,0,0),x.current.rotation.set(0,0,0)),S.current&&(S.current.position.set(0,0,0),S.current.rotation.set(0,0,0)),I.current&&A.current&&(I.current.position.set(0,19.4,0),A.current.position.set(0,19.4,0)),y.current&&u.current&&(y.current.position.set(0,10,38),u.current.target.set(0,10,0))};return _.jsxs("div",{style:{width:"100%",height:"100%",position:"relative"},children:[_.jsx("div",{ref:e,style:{width:"100%",height:"100%"}}),_.jsxs("div",{className:"globe-hud-overlay",style:{maxWidth:"460px"},children:[_.jsxs("div",{className:"glass-panel",style:{padding:"20px",borderLeft:"4px solid #00f0ff"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[_.jsxs("div",{children:[_.jsxs("div",{style:{fontSize:"0.72rem",color:"#00f0ff",fontFamily:"monospace",fontWeight:"bold"},children:["SPACEX MISSION PROFILE #",s]}),_.jsx("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.4rem",fontWeight:"800",marginTop:"2px"},children:n})]}),_.jsx("span",{className:"brand-badge",style:{background:a==="success"?"rgba(16,185,129,0.2)":"rgba(0,240,255,0.15)",color:a==="success"?"#10b981":"#00f0ff"},children:h.currentPhase})]}),_.jsxs("div",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginTop:"8px",display:"flex",gap:"12px"},children:[_.jsxs("span",{children:[_.jsx("strong",{children:"Vehicle:"})," ",i]}),_.jsxs("span",{children:[_.jsx("strong",{children:"Pad:"})," ",r.split(" ")[0]]})]}),_.jsx("div",{style:{fontSize:"0.8rem",color:"#ffd700",fontFamily:"monospace",marginTop:"10px",background:"rgba(3,7,18,0.75)",padding:"8px 12px",borderRadius:"6px",border:"1px solid rgba(255,215,0,0.25)"},children:h.statusText}),a==="countdown"&&_.jsxs("div",{style:{textAlign:"center",margin:"14px 0"},children:[_.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase"},children:"TERMINAL COUNTDOWN"}),_.jsxs("div",{style:{fontFamily:"monospace",fontSize:"3.6rem",fontWeight:"900",color:"#ff6b00",lineHeight:"1"},children:["T-",l,"s"]})]}),_.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"14px"},children:[_.jsxs("button",{className:"btn-primary",style:{flex:1,justifyContent:"center"},onClick:k,disabled:a!=="idle",children:[_.jsx(yf,{size:16})," EXECUTE TRAJECTORY LAUNCH"]}),_.jsx("button",{className:"btn-secondary",onClick:J,title:"Reset Flight Timeline",children:_.jsx(I1,{size:16})})]})]}),_.jsxs("div",{className:"glass-panel filter-pill-container",style:{marginTop:"8px"},children:[_.jsx("div",{style:{width:"100%",fontSize:"0.72rem",color:"#94a3b8",fontFamily:"monospace",marginBottom:"4px",textTransform:"uppercase"},children:"🎥 Stage-Based Camera Tracking Mode:"}),_.jsxs("button",{className:`filter-pill ${d==="auto"?"active":""}`,onClick:()=>f("auto"),children:[_.jsx(Ea,{size:13})," 🤖 Auto Stage Cam"]}),_.jsxs("button",{className:`filter-pill ${d==="stage2"?"active":""}`,onClick:()=>f("stage2"),children:[_.jsx(Ea,{size:13})," Track Stage 2 / Orbit"]}),_.jsxs("button",{className:`filter-pill ${d==="stage1"?"active":""}`,onClick:()=>f("stage1"),children:[_.jsx(Ea,{size:13})," Track Stage 1 Booster"]}),_.jsxs("button",{className:`filter-pill ${d==="pad"?"active":""}`,onClick:()=>f("pad"),children:[_.jsx(Ea,{size:13})," Launch Pad Cam"]}),_.jsxs("button",{className:`filter-pill ${d==="droneship"?"active":""}`,onClick:()=>f("droneship"),children:[_.jsx(Ea,{size:13})," Drone Ship Target"]})]})]}),_.jsx("div",{className:"globe-hud-right",style:{width:"340px"},children:_.jsxs("div",{className:"glass-panel",style:{padding:"18px"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[_.jsxs("div",{style:{fontFamily:"var(--font-heading)",fontSize:"1.05rem",fontWeight:"700",display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx(Dv,{size:16,color:"#ffd700"})," FLIGHT INSTRUMENTATION"]}),_.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.9rem",color:"#00f0ff",fontWeight:"bold"},children:h.timeStr})]}),_.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:[_.jsxs("div",{className:"sat-telemetry-item",children:[_.jsx("div",{className:"sat-telemetry-key",children:"ALTITUDE"}),_.jsxs("div",{className:"sat-telemetry-val",style:{color:"#00f0ff"},children:[h.altitude," km"]})]}),_.jsxs("div",{className:"sat-telemetry-item",children:[_.jsx("div",{className:"sat-telemetry-key",children:"VELOCITY"}),_.jsxs("div",{className:"sat-telemetry-val",style:{color:"#ffd700"},children:[h.velocity.toLocaleString()," km/h"]})]}),_.jsxs("div",{className:"sat-telemetry-item",children:[_.jsx("div",{className:"sat-telemetry-key",children:"DOWNRANGE"}),_.jsxs("div",{className:"sat-telemetry-val",children:[h.downrange," km"]})]}),_.jsxs("div",{className:"sat-telemetry-item",children:[_.jsx("div",{className:"sat-telemetry-key",children:"SPEED MACH"}),_.jsxs("div",{className:"sat-telemetry-val",style:{color:"#a855f7"},children:["Mach ",h.mach]})]})]}),_.jsxs("div",{style:{marginTop:"14px",display:"flex",flexDirection:"column",gap:"8px"},children:[_.jsxs("div",{children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.72rem",color:"#94a3b8",marginBottom:"3px"},children:[_.jsx("span",{children:"STAGE 1 PROPELLANT (RP-1/LOX)"}),_.jsxs("span",{children:[h.stage1Fuel,"%"]})]}),_.jsx("div",{style:{width:"100%",height:"6px",background:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"},children:_.jsx("div",{style:{width:`${h.stage1Fuel}%`,height:"100%",background:"linear-gradient(90deg, #ff6b00, #ffd700)",transition:"width 0.2s"}})})]}),_.jsxs("div",{children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.72rem",color:"#94a3b8",marginBottom:"3px"},children:[_.jsx("span",{children:"STAGE 2 PROPELLANT"}),_.jsxs("span",{children:[h.stage2Fuel,"%"]})]}),_.jsx("div",{style:{width:"100%",height:"6px",background:"rgba(255,255,255,0.1)",borderRadius:"3px",overflow:"hidden"},children:_.jsx("div",{style:{width:`${h.stage2Fuel}%`,height:"100%",background:"linear-gradient(90deg, #00f0ff, #38bdf8)",transition:"width 0.2s"}})})]})]})]})})]})}function QA({nextLaunch:t,launches:e,onSelectLaunch:n}){const[i,r]=Le.useState(""),[s,a]=Le.useState("all"),[o,l]=Le.useState({days:0,hours:0,minutes:0,seconds:0});Le.useEffect(()=>{if(!t||!t.date_unix)return;const d=()=>{const h=t.date_unix*1e3,p=Date.now(),v=Math.max(0,h-p),y=Math.floor(v/(1e3*60*60*24)),m=Math.floor(v%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(v%(1e3*60*60)/(1e3*60)),g=Math.floor(v%(1e3*60)/1e3);l({days:y,hours:m,minutes:u,seconds:g})};d();const f=setInterval(d,1e3);return()=>clearInterval(f)},[t]);const c=e.filter(d=>{var h,p,v,y,m;return d.name.toLowerCase().includes(i.toLowerCase())||((h=d.rocketName)==null?void 0:h.toLowerCase().includes(i.toLowerCase()))||((p=d.launchpadName)==null?void 0:p.toLowerCase().includes(i.toLowerCase()))?s==="starlink"?d.name.toLowerCase().includes("starlink"):s==="falcon9"?(v=d.rocketName)==null?void 0:v.toLowerCase().includes("falcon 9"):s==="falconheavy"?(y=d.rocketName)==null?void 0:y.toLowerCase().includes("falcon heavy"):s==="starship"?(m=d.rocketName)==null?void 0:m.toLowerCase().includes("starship"):!0:!1});return _.jsxs("div",{className:"launches-view-container",children:[_.jsxs("div",{className:"section-header",children:[_.jsxs("div",{children:[_.jsx("h2",{className:"section-title",children:"SpaceX Launch Operations & Manifest"}),_.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem",marginTop:"4px"},children:"Live countdowns, trajectory telemetry, rocket booster reusability & webcast archive"})]}),_.jsx("div",{className:"search-filter-bar",children:_.jsxs("div",{className:"search-input-wrapper",children:[_.jsx(Mf,{size:16,className:"search-icon"}),_.jsx("input",{type:"text",placeholder:"Search SpaceX Mission, Payload...",value:i,onChange:d=>r(d.target.value)})]})})]}),t&&_.jsxs("div",{className:"glass-panel hero-launch-banner",children:[_.jsxs("div",{className:"hero-launch-info",children:[_.jsxs("div",{children:[_.jsxs("div",{className:"launch-status-tag",children:[_.jsx("span",{className:"pulse-dot"})," NEXT SCHEDULED SPACEX MISSION"]}),_.jsx("h3",{className:"hero-launch-title",children:t.name}),_.jsxs("div",{className:"hero-launch-meta",children:[_.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx(Cc,{size:16,color:"#00f0ff"})," ",t.rocketName]}),_.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx(S1,{size:16,color:"#ff6b00"})," ",t.launchpadName]})]}),_.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.92rem",lineHeight:"1.5",maxWidth:"650px",marginTop:"8px"},children:t.details||"SpaceX Falcon 9 orbital deployment carrying next-generation payload into Low Earth Orbit with automated autonomous drone ship booster landing."})]}),_.jsxs("div",{children:[_.jsxs("div",{className:"countdown-box",children:[_.jsxs("div",{className:"countdown-unit",children:[_.jsx("div",{className:"countdown-number",children:String(o.days).padStart(2,"0")}),_.jsx("div",{className:"countdown-label",children:"DAYS"})]}),_.jsxs("div",{className:"countdown-unit",children:[_.jsx("div",{className:"countdown-number",children:String(o.hours).padStart(2,"0")}),_.jsx("div",{className:"countdown-label",children:"HOURS"})]}),_.jsxs("div",{className:"countdown-unit",children:[_.jsx("div",{className:"countdown-number",children:String(o.minutes).padStart(2,"0")}),_.jsx("div",{className:"countdown-label",children:"MINS"})]}),_.jsxs("div",{className:"countdown-unit",children:[_.jsx("div",{className:"countdown-number",children:String(o.seconds).padStart(2,"0")}),_.jsx("div",{className:"countdown-label",children:"SECS"})]})]}),_.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[_.jsxs("a",{href:t.webcastUrl&&!t.webcastUrl.includes("youtube")?t.webcastUrl:"https://x.com/SpaceX",target:"_blank",rel:"noreferrer",className:"btn-primary",style:{textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px"},children:[_.jsx(yf,{size:16})," Watch Live on X (@SpaceX)"]}),_.jsxs("a",{href:"https://www.spacex.com/launches",target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{textDecoration:"none",display:"inline-flex",alignItems:"center",gap:"8px"},children:[_.jsx(em,{size:16,color:"#00f0ff"})," Official SpaceX.com Stream"]})]})]})]}),_.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",flexShrink:0},children:[_.jsx("img",{src:t.patchUrl,alt:t.name,onError:d=>{d.target.onerror=null,d.target.src=t.defaultPatch||"/assets/starlink_patch.jpg"},style:{width:"160px",height:"160px",objectFit:"contain",borderRadius:"50%",border:"2px solid rgba(0,240,255,0.4)",filter:"drop-shadow(0 0 20px rgba(0,240,255,0.5))"}}),_.jsxs("div",{style:{fontSize:"0.75rem",fontFamily:"monospace",color:"#00f0ff",marginTop:"12px"},children:["FLIGHT #",t.flight_number||"388"]})]})]}),_.jsxs("div",{className:"filter-pill-container",style:{marginBottom:"20px"},children:[_.jsxs("button",{className:`filter-pill ${s==="all"?"active":""}`,onClick:()=>a("all"),children:["All Launches (",e.length,")"]}),_.jsx("button",{className:`filter-pill ${s==="starlink"?"active":""}`,onClick:()=>a("starlink"),children:"Starlink Missions"}),_.jsx("button",{className:`filter-pill ${s==="falcon9"?"active":""}`,onClick:()=>a("falcon9"),children:"Falcon 9"}),_.jsx("button",{className:`filter-pill ${s==="falconheavy"?"active":""}`,onClick:()=>a("falconheavy"),children:"Falcon Heavy"}),_.jsx("button",{className:`filter-pill ${s==="starship"?"active":""}`,onClick:()=>a("starship"),children:"Starship"})]}),_.jsx("div",{className:"launches-grid",children:c.map(d=>_.jsxs("div",{className:"glass-panel launch-card",children:[_.jsxs("div",{children:[_.jsxs("div",{className:"launch-card-header",children:[_.jsx("img",{src:d.patchUrl,alt:d.name,onError:f=>{f.target.onerror=null,f.target.src=d.defaultPatch||"/assets/starlink_patch.jpg"},style:{width:"56px",height:"56px",objectFit:"contain",borderRadius:"8px",border:"1px solid rgba(0,240,255,0.3)",flexShrink:0}}),_.jsxs("div",{children:[_.jsx("div",{className:"launch-name",children:d.name}),_.jsxs("div",{className:"launch-date",children:[_.jsx(l1,{size:13,style:{display:"inline",marginRight:"4px"}}),new Date(d.date_utc).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"})]})]})]}),_.jsxs("div",{style:{marginTop:"14px",fontSize:"0.85rem",color:"#94a3b8",display:"flex",flexDirection:"column",gap:"6px"},children:[_.jsxs("div",{children:[_.jsx("strong",{style:{color:"#f1f5f9"},children:"Vehicle:"})," ",d.rocketName]}),_.jsxs("div",{children:[_.jsx("strong",{style:{color:"#f1f5f9"},children:"Pad:"})," ",d.launchpadName]}),d.details&&_.jsx("div",{style:{marginTop:"4px",fontSize:"0.8rem",lineHeight:"1.4",color:"#cbd5e1",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",overflow:"hidden"},children:d.details})]})]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"12px",marginTop:"16px",borderTop:"1px solid rgba(255,255,255,0.08)"},children:[_.jsx("div",{children:d.success!==void 0&&_.jsx("span",{className:d.success?"badge-success":"badge-fail",children:d.success?"SUCCESSFUL MISSION":"LAUNCH FAILURE"})}),d.webcastUrl&&_.jsxs("a",{href:d.webcastUrl,target:"_blank",rel:"noreferrer",style:{color:"#00f0ff",fontSize:"0.8rem",textDecoration:"none",display:"flex",alignItems:"center",gap:"4px",fontWeight:"600"},children:["Webcast ",_.jsx(em,{size:14})]})]})]},d.id))})]})}function JA({satellites:t,onFilterStarlink:e}){const[n,i]=Le.useState({lat:"28.5",lng:"-80.5",city:"Cape Canaveral, FL"}),[r,s]=Le.useState(!1),[a,o]=Le.useState(null),l=t.filter(f=>f.type.category==="starlink");l.filter(f=>f.name.includes("v1.5")||f.name.includes("v1.0")).length;const c=l.filter(f=>f.name.includes("v2")||!f.name.includes("v1.5")).length,d=()=>{s(!0),setTimeout(()=>{s(!1);const f=Math.floor(Math.random()*45)+12,h=new Date(Date.now()+f*60*1e3);o({time:h.toLocaleTimeString(),elevation:(Math.random()*40+45).toFixed(1)+"°",duration:(Math.random()*4+4).toFixed(1)+" min",brightness:"Mag -1.5 (High Visibility)"})},600)};return _.jsxs("div",{className:"launches-view-container",children:[_.jsxs("div",{className:"section-header",children:[_.jsxs("div",{children:[_.jsx("h2",{className:"section-title",children:"SpaceX Starlink Constellation Telemetry"}),_.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem",marginTop:"4px"},children:"Low Earth Orbit high-speed global satellite internet network orbital shells & overpass schedule"})]}),_.jsxs("button",{className:"btn-primary",onClick:e,children:[_.jsx(sc,{size:16})," View Constellation in 3D"]})]}),_.jsxs("div",{className:"stats-grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"16px"},children:[_.jsxs("div",{className:"glass-panel stat-card",style:{padding:"16px"},children:[_.jsxs("div",{className:"stat-label",children:[_.jsx(Nv,{size:14,color:"#00f0ff"})," TOTAL STARLINKS IN LEO"]}),_.jsx("div",{className:"stat-value cyan",style:{fontSize:"1.8rem"},children:l.length?(l.length*5).toLocaleString():"6,280"}),_.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:"4px"},children:"Active Constellation Nodes"})]}),_.jsxs("div",{className:"glass-panel stat-card",style:{padding:"16px"},children:[_.jsxs("div",{className:"stat-label",children:[_.jsx(m1,{size:14,color:"#ffd700"})," STARLINK v2 MINI / DIRECT TO CELL"]}),_.jsx("div",{className:"stat-value gold",style:{fontSize:"1.8rem"},children:c?(c*5).toLocaleString():"2,140"}),_.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:"4px"},children:"E-band Laser Backhaul Enabled"})]}),_.jsxs("div",{className:"glass-panel stat-card",style:{padding:"16px"},children:[_.jsxs("div",{className:"stat-label",children:[_.jsx(X1,{size:14,color:"#10b981"})," AVERAGE ALTITUDE"]}),_.jsx("div",{className:"stat-value",style:{color:"#10b981",fontSize:"1.8rem"},children:"550 km"}),_.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:"4px"},children:"Low Orbital Latency (~20ms)"})]}),_.jsxs("div",{className:"glass-panel stat-card",style:{padding:"16px"},children:[_.jsxs("div",{className:"stat-label",children:[_.jsx(Rv,{size:14,color:"#a855f7"})," ORBITAL VELOCITY"]}),_.jsx("div",{className:"stat-value",style:{color:"#a855f7",fontSize:"1.8rem"},children:"7.66 km/s"}),_.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:"4px"},children:"27,580 km/h Orbit Speed"})]})]}),_.jsxs("div",{className:"glass-panel",style:{padding:"24px"},children:[_.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:"700",marginBottom:"16px"},children:"Starlink Orbital Shell Architecture"}),_.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px"},children:[_.jsxs("div",{style:{background:"rgba(7,10,18,0.7)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(0,240,255,0.2)"},children:[_.jsx("div",{style:{color:"#00f0ff",fontWeight:"bold",fontSize:"0.9rem"},children:"Shell 1: 53.0° Inclination"}),_.jsx("div",{style:{fontSize:"1.2rem",fontFamily:"monospace",margin:"6px 0",fontWeight:"bold"},children:"550 km"}),_.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"1,584 Satellites | 72 Planes"})]}),_.jsxs("div",{style:{background:"rgba(7,10,18,0.7)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(255,215,0,0.2)"},children:[_.jsx("div",{style:{color:"#ffd700",fontWeight:"bold",fontSize:"0.9rem"},children:"Shell 2: 53.2° Inclination"}),_.jsx("div",{style:{fontSize:"1.2rem",fontFamily:"monospace",margin:"6px 0",fontWeight:"bold"},children:"540 km"}),_.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"1,584 Satellites | 72 Planes"})]}),_.jsxs("div",{style:{background:"rgba(7,10,18,0.7)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(168,85,247,0.2)"},children:[_.jsx("div",{style:{color:"#a855f7",fontWeight:"bold",fontSize:"0.9rem"},children:"Shell 3: 70.0° Inclination"}),_.jsx("div",{style:{fontSize:"1.2rem",fontFamily:"monospace",margin:"6px 0",fontWeight:"bold"},children:"570 km"}),_.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"720 Satellites | High Latitude"})]}),_.jsxs("div",{style:{background:"rgba(7,10,18,0.7)",padding:"14px",borderRadius:"10px",border:"1px solid rgba(16,185,129,0.2)"},children:[_.jsx("div",{style:{color:"#10b981",fontWeight:"bold",fontSize:"0.9rem"},children:"Shell 4: 97.6° Polar Shell"}),_.jsx("div",{style:{fontSize:"1.2rem",fontFamily:"monospace",margin:"6px 0",fontWeight:"bold"},children:"560 km"}),_.jsx("div",{style:{fontSize:"0.78rem",color:"#94a3b8"},children:"520 Satellites | Arctic/Antarctic Coverage"})]})]})]}),_.jsxs("div",{className:"glass-panel",style:{padding:"24px",background:"linear-gradient(135deg, rgba(0,82,136,0.3), rgba(7,10,18,0.9))"},children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyBetween:"space-between",flexWrap:"wrap",gap:"16px"},children:[_.jsxs("div",{children:[_.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.3rem",fontWeight:"800"},children:"Starlink Train Visible Overpass Calculator"}),_.jsx("p",{style:{color:"#94a3b8",fontSize:"0.88rem",marginTop:"4px"},children:"Find when the next bright Starlink satellite train will pass across your night sky!"})]}),_.jsxs("button",{className:"btn-primary",onClick:d,disabled:r,children:[r?_.jsx(Sf,{className:"spin",size:16}):_.jsx(Lv,{size:16}),"Calculate Next Overpass"]})]}),a&&_.jsxs("div",{style:{marginTop:"20px",padding:"16px",background:"rgba(7,10,18,0.8)",borderRadius:"10px",border:"1px solid #00f0ff",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"14px"},children:[_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"EXPECTED TIME (LOCAL)"}),_.jsx("div",{style:{fontFamily:"monospace",fontSize:"1.3rem",color:"#00f0ff",fontWeight:"bold",marginTop:"4px"},children:a.time})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"PEAK ELEVATION"}),_.jsx("div",{style:{fontFamily:"monospace",fontSize:"1.3rem",color:"#ffd700",fontWeight:"bold",marginTop:"4px"},children:a.elevation})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"PASS DURATION"}),_.jsx("div",{style:{fontFamily:"monospace",fontSize:"1.3rem",color:"#10b981",fontWeight:"bold",marginTop:"4px"},children:a.duration})]}),_.jsxs("div",{children:[_.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"VISIBILITY"}),_.jsx("div",{style:{fontSize:"0.9rem",color:"#cbd5e1",fontWeight:"600",marginTop:"6px"},children:a.brightness})]})]})]})]})}function eC({rockets:t}){const[e,n]=Le.useState(t[0]||null);return _.jsxs("div",{className:"launches-view-container",children:[_.jsx("div",{className:"section-header",children:_.jsxs("div",{children:[_.jsx("h2",{className:"section-title",children:"SpaceX Launch Vehicles & Starship Megarocket Fleet"}),_.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem",marginTop:"4px"},children:"Next-generation orbital propulsion systems, Merlin & Raptor engine specs, payload capacities & reusability"})]})}),_.jsx("div",{className:"fleet-grid",children:t.map(i=>{var r,s,a,o;return _.jsxs("div",{className:"glass-panel fleet-card",style:{borderColor:(e==null?void 0:e.id)===i.id?"#ffffff":"var(--border-color)",boxShadow:(e==null?void 0:e.id)===i.id?"0 0 24px rgba(255, 255, 255, 0.25)":"none",cursor:"pointer"},onClick:()=>n(i),children:[_.jsxs("div",{children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[_.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.4rem",fontWeight:"800"},children:i.name}),_.jsx("span",{className:"brand-badge",style:{background:"rgba(255, 255, 255, 0.1)",color:"#ffffff"},children:i.active?"OPERATIONAL":"DEVELOPMENT"})]}),i.flickr_images&&i.flickr_images[0]&&_.jsx("img",{src:i.flickr_images[0],alt:i.name,onError:l=>{l.target.onerror=null,i.name.includes("Starship")?l.target.src="/assets/starship_patch.jpg":i.name.includes("Heavy")?l.target.src="/assets/falcon_heavy_patch.jpg":l.target.src="/assets/starlink_patch.jpg"},style:{width:"100%",height:"210px",objectFit:"cover",borderRadius:"4px",border:"1px solid rgba(255,255,255,0.1)"}}),_.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.86rem",lineHeight:"1.5",margin:"14px 0"},children:i.description}),_.jsxs("div",{className:"fleet-specs-grid",children:[_.jsxs("div",{className:"sat-telemetry-item",children:[_.jsx("div",{className:"sat-telemetry-key",children:"HEIGHT"}),_.jsxs("div",{className:"sat-telemetry-val",style:{color:"#ffffff"},children:[(r=i.height)==null?void 0:r.meters,"m (",(s=i.height)==null?void 0:s.feet," ft)"]})]}),_.jsxs("div",{className:"sat-telemetry-item",children:[_.jsx("div",{className:"sat-telemetry-key",children:"DIAMETER"}),_.jsxs("div",{className:"sat-telemetry-val",style:{color:"#00f0ff"},children:[(a=i.diameter)==null?void 0:a.meters,"m (",(o=i.diameter)==null?void 0:o.feet," ft)"]})]}),_.jsxs("div",{className:"sat-telemetry-item",children:[_.jsx("div",{className:"sat-telemetry-key",children:"STAGES"}),_.jsxs("div",{className:"sat-telemetry-val",children:[i.stages," Stage"]})]}),_.jsxs("div",{className:"sat-telemetry-item",children:[_.jsx("div",{className:"sat-telemetry-key",children:"COST / LAUNCH"}),_.jsxs("div",{className:"sat-telemetry-val",style:{color:"#ffd700"},children:["$",(i.cost_per_launch/1e6).toFixed(0),"M"]})]})]})]}),_.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:"12px",marginTop:"12px",borderTop:"1px solid rgba(255,255,255,0.08)"},children:[_.jsxs("span",{style:{fontSize:"0.78rem",color:"#00f0ff",fontFamily:"monospace"},children:["SUCCESS RATE: ",i.success_rate_pct,"%"]}),_.jsxs("span",{style:{fontSize:"0.8rem",color:"#ffffff",display:"flex",alignItems:"center",gap:"4px",fontWeight:"600"},children:["View Spec Sheet ",_.jsx(Pv,{size:14})]})]})]},i.id)})})]})}const Hu=[{id:"starship-mars",title:"Starship Mars Colonization & Base Alpha",category:"mars",targetYear:"2026 - 2028",status:"FLIGHT TEST PHASE",statusColor:"#ff6b00",tagline:"Making humanity a multi-planetary species by building a self-sustaining city on Mars.",badge:"FLAGSHIP MISSION",patchUrl:"/assets/starship_patch.jpg",description:"Starship is the fully reusable launch system designed to carry up to 100 people and 150 metric tons of cargo to Earth orbit, the Moon, Mars, and beyond. Powered by 33 Raptor 3 engines on Super Heavy.",stats:[{label:"Payload to Orbit",val:"150+ Tons"},{label:"Raptor Thrust",val:"280 Tonsf / engine"},{label:"Crew Capacity",val:"100 Humans"},{label:"Height",val:"121 meters"}],milestones:[{year:"2024 - 2025",title:"Starship Flight Tests 3-6",status:"COMPLETED",desc:"First successful hot-staging separation, catch of Super Heavy booster by Mechazilla arms at Starbase."},{year:"2026",title:"Orbital Propellant Transfer Test",status:"IN PROGRESS",desc:"Demonstrating cryogenic LOX/CH4 ship-to-ship refueling in Low Earth Orbit."},{year:"2026",title:"Uncrewed Starship Mars Cargo Mission",status:"PLANNED",desc:"Landing uncrewed Starships on Mars to verify landing integrity and local water ice extraction."},{year:"2028+",title:"First Crewed Mars Landing & Base Alpha",status:"VISION",desc:"Establishing initial human presence and solar-powered propellant synthesis plant."}]},{id:"artemis-hls",title:"NASA Artemis III & IV Lunar Human Landing System (HLS)",category:"lunar",targetYear:"2026 - 2027",status:"ACTIVE DEVELOPMENT",statusColor:"#00f0ff",tagline:"Returning American astronauts to the Lunar South Pole for the first time since 1972.",badge:"NASA CONTRACT $2.9B",patchUrl:"/assets/falcon_heavy_patch.jpg",description:"SpaceX was awarded NASA’s Human Landing System contract to develop Starship HLS. It will dock with NASA’s Orion spacecraft and Gateway station in lunar orbit before descending to the Moon’s South Pole.",stats:[{label:"Destination",val:"Moon South Pole"},{label:"Surface Stay",val:"Up to 14 Days"},{label:"Cargo Payload",val:"100+ Tons to Moon"},{label:"Elevator Bay",val:"10m Outer Lift"}],milestones:[{year:"2025",title:"Starship HLS Docking & Elevator Testing",status:"IN PROGRESS",desc:"Testing crew airlocks, lunar elevator, and thermal protection for deep space."},{year:"2026",title:"Uncrewed Lunar Landing Demonstration",status:"PLANNED",desc:"Autonomous touchdown of Starship HLS on the Moon’s South Pole."},{year:"2027",title:"Artemis III Crewed Lunar Landing",status:"PLANNED",desc:"First woman and first person of color landing on the lunar surface."}]},{id:"starlink-direct-cell",title:"Starlink Direct-to-Cell & Gen3 Satellite Constellation",category:"starlink",targetYear:"2024 - 2026",status:"COMMERCIAL ROLLOUT",statusColor:"#10b981",tagline:"Ubiquitous satellite cellular connectivity everywhere on Earth using standard LTE smartphones.",badge:"GLOBAL COVERAGE",patchUrl:"/assets/starlink_patch.jpg",description:"Starlink Direct-to-Cell satellites feature advanced eNodeB modems that act as cell towers in space, delivering seamless text, voice, and data connection to unmodified LTE mobile phones anywhere on Earth.",stats:[{label:"Target Satellites",val:"42,000 Total"},{label:"Backhaul Speed",val:"100 Gbps Laser"},{label:"Mobile Compatibility",val:"Standard LTE Phones"},{label:"Carrier Partners",val:"T-Mobile, Optus, Salt"}],milestones:[{year:"2024",title:"First Direct-to-Cell Texting Test",status:"COMPLETED",desc:"Sent first SMS text messages via Starlink satellite to unmodified cell phones."},{year:"2025",title:"Global Voice & IoT Data Launch",status:"ACTIVE ROLLOUT",desc:"Expanding to voice calls, cellular data roaming, and dead-zone elimination."},{year:"2026",title:"Starlink Gen3 V2.0 Full Deployment",status:"PLANNED",desc:"Launching 2.0-ton V2 satellites via Starship for 10x higher bandwidth."}]},{id:"starshield-defense",title:"Starshield National Security Network",category:"defense",targetYear:"2024 - 2028",status:"CLASSIFIED / ACTIVE",statusColor:"#a855f7",tagline:"Dedicated satellite bus network designed for government security, earth observation, and tactical comms.",badge:"US DOD CONTRACT",patchUrl:"/assets/starship_patch.jpg",description:"Starshield leverages Starlink technology and launch capability to support national security. While Starlink is designed for consumer and commercial use, Starshield is built for government use with high-grade cryptographic security.",stats:[{label:"Domains",val:"Comms, Sensing, Payloads"},{label:"Encryption",val:"Post-Quantum NSA"},{label:"Intersatellite",val:"Optical Laser Mesh"},{label:"Bus Modular",val:"Custom Military Bus"}],milestones:[{year:"2023",title:"$70M US Space Force Contract",status:"COMPLETED",desc:"Awarded first dedicated contract for Starshield services."},{year:"2024 - 2025",title:"Spy Satellite Constellation Deployment",status:"IN PROGRESS",desc:"Launching hundreds of earth observation and intelligence gathering satellites."}]},{id:"point-to-point",title:"Starship Earth-to-Earth Passenger Travel",category:"mars",targetYear:"2028 - 2030",status:"FEASIBILITY PHASE",statusColor:"#ffd700",tagline:"Sub-30 minute passenger flight to anywhere on Earth at Mach 25.",badge:"REVOLUTIONARY TRANSPORT",patchUrl:"/assets/falcon_heavy_patch.jpg",description:"With Starship, most international long-haul flights could be completed in under 30 minutes. Fly from New York to Shanghai in 39 minutes or London to Hong Kong in 34 minutes.",stats:[{label:"Max Speed",val:"Mach 27 (27,000 km/h)"},{label:"NY to Tokyo",val:"30 Minutes"},{label:"London to Sydney",val:"35 Minutes"},{label:"Launch Pad",val:"Floating Ocean Platforms"}],milestones:[{year:"2027",title:"Offshore Launch Platform Tests",status:"PLANNED",desc:"Converting ocean oil rigs into launch pads near major coastal cities."},{year:"2029",title:"Commercial Cargo & Passenger Trials",status:"VISION",desc:"Obtaining FAA commercial point-to-point suborbital passenger licenses."}]}];function tC(){const[t,e]=Le.useState("all"),[n,i]=Le.useState(Hu[0]),r=t==="all"?Hu:Hu.filter(s=>s.category===t);return _.jsxs("div",{style:{padding:"28px",maxWidth:"1400px",margin:"0 auto",color:"#fff"},children:[_.jsxs("div",{className:"glass-panel",style:{padding:"24px 30px",borderLeft:"4px solid #00f0ff",marginBottom:"24px"},children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"16px"},children:[_.jsxs("div",{children:[_.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",color:"#00f0ff",fontFamily:"monospace",fontSize:"0.85rem",fontWeight:"bold"},children:[_.jsx(Ef,{size:16})," SPACEX ROADMAP & NEXT-GEN INITIATIVES"]}),_.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"2.0rem",fontWeight:"800",margin:"6px 0 4px 0"},children:"SpaceX Future Plans & Active Development"}),_.jsx("p",{style:{color:"#94a3b8",fontSize:"0.95rem",margin:0},children:"From Mars Base Alpha and NASA Artemis Moon HLS to Direct-to-Cell satellite networks and Mach 25 suborbital flight."})]}),_.jsxs("div",{style:{display:"flex",gap:"12px"},children:[_.jsxs("div",{className:"stat-card",style:{minWidth:"120px"},children:[_.jsx("div",{className:"stat-label",children:"MARS GOAL"}),_.jsx("div",{className:"stat-value gold",children:"1M Humans"})]}),_.jsxs("div",{className:"stat-card",style:{minWidth:"120px"},children:[_.jsx("div",{className:"stat-label",children:"LUNAR LANDING"}),_.jsx("div",{className:"stat-value cyan",children:"2026 - 2027"})]})]})]}),_.jsxs("div",{className:"filter-pill-container",style:{marginTop:"20px"},children:[_.jsxs("button",{className:`filter-pill ${t==="all"?"active":""}`,onClick:()=>e("all"),children:[_.jsx(Lv,{size:14})," All Initiatives"]}),_.jsxs("button",{className:`filter-pill ${t==="mars"?"active":""}`,onClick:()=>e("mars"),children:[_.jsx(Cc,{size:14})," Mars & Starship"]}),_.jsxs("button",{className:`filter-pill ${t==="lunar"?"active":""}`,onClick:()=>e("lunar"),children:[_.jsx(E1,{size:14})," NASA Artemis HLS"]}),_.jsxs("button",{className:`filter-pill ${t==="starlink"?"active":""}`,onClick:()=>e("starlink"),children:[_.jsx(O1,{size:14})," Direct-to-Cell"]}),_.jsxs("button",{className:`filter-pill ${t==="defense"?"active":""}`,onClick:()=>e("defense"),children:[_.jsx(Iv,{size:14})," Starshield Defense"]})]})]}),_.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1.35fr",gap:"24px"},children:[_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:r.map(s=>{const a=n.id===s.id;return _.jsxs("div",{className:"glass-panel",style:{padding:"20px",cursor:"pointer",borderLeft:a?`4px solid ${s.statusColor}`:"1px solid rgba(255,255,255,0.08)",background:a?"rgba(0, 240, 255, 0.06)":void 0,transition:"all 0.2s ease"},onClick:()=>i(s),children:[_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"},children:[_.jsx("span",{className:"brand-badge",style:{background:`${s.statusColor}22`,color:s.statusColor},children:s.status}),_.jsxs("span",{style:{fontFamily:"monospace",fontSize:"0.78rem",color:"#94a3b8"},children:["TARGET: ",s.targetYear]})]}),_.jsx("h3",{style:{fontFamily:"var(--font-heading)",fontSize:"1.2rem",fontWeight:"700",margin:"4px 0 6px 0"},children:s.title}),_.jsx("p",{style:{fontSize:"0.86rem",color:"#cbd5e1",lineHeight:"1.45",margin:0},children:s.tagline}),_.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"14px",paddingTop:"10px",borderTop:"1px solid rgba(255,255,255,0.06)"},children:[_.jsx("span",{style:{fontSize:"0.75rem",color:"#00f0ff",fontFamily:"monospace"},children:s.badge}),_.jsxs("span",{style:{fontSize:"0.8rem",color:"#00f0ff",display:"flex",alignItems:"center",gap:"4px"},children:["View Deep Dive ",_.jsx(Pv,{size:14})]})]})]},s.id)})}),_.jsx("div",{children:n&&_.jsxs("div",{className:"glass-panel",style:{padding:"28px",borderLeft:`4px solid ${n.statusColor}`},children:[_.jsxs("div",{style:{display:"flex",gap:"20px",alignItems:"center",marginBottom:"20px"},children:[_.jsx("img",{src:n.patchUrl,alt:n.title,style:{width:"90px",height:"90px",borderRadius:"12px",objectFit:"cover",border:"2px solid rgba(0,240,255,0.3)"},onError:s=>{s.target.src="/assets/starship_patch.jpg"}}),_.jsxs("div",{children:[_.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[_.jsx("span",{className:"brand-badge",style:{background:`${n.statusColor}22`,color:n.statusColor},children:n.status}),_.jsx("span",{style:{fontFamily:"monospace",fontSize:"0.8rem",color:"#ffd700"},children:n.badge})]}),_.jsx("h2",{style:{fontFamily:"var(--font-heading)",fontSize:"1.65rem",fontWeight:"800",margin:"6px 0 2px 0"},children:n.title}),_.jsxs("div",{style:{fontSize:"0.85rem",color:"#00f0ff",fontFamily:"monospace"},children:["Target Operations Timeline: ",n.targetYear]})]})]}),_.jsx("p",{style:{fontSize:"0.94rem",color:"#e2e8f0",lineHeight:"1.6",marginBottom:"20px"},children:n.description}),_.jsxs("div",{style:{marginBottom:"24px"},children:[_.jsxs("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.0rem",color:"#00f0ff",marginBottom:"12px",display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx(Dv,{size:16})," TECHNICAL SPECIFICATIONS & CAPABILITIES"]}),_.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"12px"},children:n.stats.map((s,a)=>_.jsxs("div",{className:"sat-telemetry-item",style:{padding:"12px"},children:[_.jsx("div",{className:"sat-telemetry-key",children:s.label}),_.jsx("div",{className:"sat-telemetry-val",style:{color:"#ffd700",fontSize:"1.15rem"},children:s.val})]},a))})]}),_.jsxs("div",{children:[_.jsxs("h4",{style:{fontFamily:"var(--font-heading)",fontSize:"1.0rem",color:"#00f0ff",marginBottom:"14px",display:"flex",alignItems:"center",gap:"6px"},children:[_.jsx(B1,{size:16})," STRATEGIC ROADMAP MILESTONES"]}),_.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:n.milestones.map((s,a)=>_.jsxs("div",{style:{background:"rgba(3,7,18,0.7)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"14px",display:"flex",gap:"14px",alignItems:"flex-start"},children:[_.jsx("div",{style:{background:s.status==="COMPLETED"?"rgba(16,185,129,0.2)":s.status==="IN PROGRESS"?"rgba(0,240,255,0.2)":"rgba(255,215,0,0.15)",color:s.status==="COMPLETED"?"#10b981":s.status==="IN PROGRESS"?"#00f0ff":"#ffd700",fontFamily:"monospace",fontSize:"0.72rem",padding:"4px 8px",borderRadius:"4px",whiteSpace:"nowrap",fontWeight:"bold"},children:s.year}),_.jsxs("div",{children:[_.jsx("div",{style:{fontWeight:"700",fontSize:"0.92rem",marginBottom:"2px"},children:s.title}),_.jsx("div",{style:{fontSize:"0.84rem",color:"#94a3b8",lineHeight:"1.4"},children:s.desc})]})]},a))})]})]})})]})]})}const Di="https://api.spacexdata.com/v4",Pa=new Map;async function Ui(t,e=6e4){const n=Date.now();if(Pa.has(t)){const{data:i,timestamp:r}=Pa.get(t);if(n-r<e)return i}try{const i=new AbortController,r=setTimeout(()=>i.abort(),2500),s=await fetch(t,{signal:i.signal});if(clearTimeout(r),!s.ok)throw new Error(`HTTP ${s.status}`);const a=await s.json();return Pa.set(t,{data:a,timestamp:n}),a}catch(i){if(console.warn(`SpaceX API fetch error for ${t}:`,i),Pa.has(t))return Pa.get(t).data;throw i}}const xi={async getNextLaunch(){try{const t=await Ui(`${Di}/launches/next`);return await this.enrichLaunchDetails(t)}catch{return this.getFallbackNextLaunch()}},async getLatestLaunch(){try{const t=await Ui(`${Di}/launches/latest`);return await this.enrichLaunchDetails(t)}catch{return null}},async getUpcomingLaunches(){try{const t=await Ui(`${Di}/launches/upcoming`);return Promise.all(t.slice(0,10).map(e=>this.enrichLaunchDetails(e)))}catch{return[this.getFallbackNextLaunch()]}},async getPastLaunches(t=40){try{const n=(await Ui(`${Di}/launches`)).filter(i=>!i.upcoming).sort((i,r)=>r.date_unix-i.date_unix).slice(0,t);return Promise.all(n.map(i=>this.enrichLaunchDetails(i)))}catch{return this.getFallbackPastLaunches()}},async enrichLaunchDetails(t){var o,l,c,d,f,h,p,v,y,m,u,g;if(!t)return null;let e=null,n=null;if(t.rocket)try{e=await this.getRocketById(t.rocket)}catch{}if(t.launchpad)try{n=await this.getLaunchpadById(t.launchpad)}catch{}const i=e?e.name:typeof t.rocket=="string"?t.rocket:"Falcon 9";let r="/assets/starlink_patch.jpg";(o=t.name)!=null&&o.toLowerCase().includes("starship")||i.toLowerCase().includes("starship")?r="/assets/starship_patch.jpg":((l=t.name)!=null&&l.toLowerCase().includes("heavy")||i.toLowerCase().includes("heavy"))&&(r="/assets/falcon_heavy_patch.jpg");const s=((d=(c=t.links)==null?void 0:c.patch)==null?void 0:d.small)||((h=(f=t.links)==null?void 0:f.patch)==null?void 0:h.large),a=s&&!s.includes("imgbox.com")?s:r;return{...t,rocketName:i,rocketType:e?e.type:"rocket",rocketObject:e,launchpadName:n?n.name:"Cape Canaveral SLC-40",launchpadLocation:n?`${n.locality}, ${n.region}`:"Florida, USA",launchpadCoords:n?[n.latitude,n.longitude]:[28.5618571,-80.577366],patchUrl:a,defaultPatch:r,webcastUrl:((p=t.links)==null?void 0:p.webcast)||((v=t.links)!=null&&v.youtube_id?`https://www.youtube.com/watch?v=${t.links.youtube_id}`:"https://x.com/SpaceX"),officialLiveUrl:"https://x.com/SpaceX",spacexLaunchesUrl:"https://www.spacex.com/launches",articleUrl:(y=t.links)==null?void 0:y.article,wikipediaUrl:(m=t.links)==null?void 0:m.wikipedia,flickrImages:((g=(u=t.links)==null?void 0:u.flickr)==null?void 0:g.original)||[]}},async getRockets(){try{return await Ui(`${Di}/rockets`)}catch{return this.getFallbackRockets()}},async getRocketById(t){return t?await Ui(`${Di}/rockets/${t}`):null},async getLaunchpads(){try{return await Ui(`${Di}/launchpads`)}catch{return this.getFallbackLaunchpads()}},async getLaunchpadById(t){return t?await Ui(`${Di}/launchpads/${t}`):null},async getStarlinkData(){try{return await Ui(`${Di}/starlink`,12e4)}catch{return[]}},getFallbackNextLaunch(){const t=new Date(Date.now()+2592e5+144e5).toISOString();return{id:"fallback-next-1",name:"Starlink Group 10-14",date_utc:t,date_unix:Math.floor(new Date(t).getTime()/1e3),details:"SpaceX Falcon 9 rocket launching a batch of Starlink v2 Mini satellites into Low Earth Orbit from SLC-40 at Cape Canaveral Space Force Station.",flight_number:388,rocketName:"Falcon 9 Block 5",launchpadName:"Space Launch Complex 40 (SLC-40)",launchpadLocation:"Cape Canaveral, Florida",launchpadCoords:[28.5618571,-80.577366],patchUrl:"/assets/starlink_patch.jpg",webcastUrl:"https://x.com/SpaceX",officialLiveUrl:"https://x.com/SpaceX",spacexLaunchesUrl:"https://www.spacex.com/launches",cores:[{flight:18,reused:!0,landing_success:!0,landing_type:"ASOG"}]}},getFallbackPastLaunches(){return[{id:"past-1",name:"Starship Integrated Flight Test 4",date_utc:"2024-06-06T12:50:00.000Z",date_unix:1717678200,details:"Fourth test flight of Starship and Super Heavy. Controlled splashdown of Super Heavy in Gulf of Mexico and Starship peak heating atmospheric entry in Indian Ocean.",flight_number:350,success:!0,rocketName:"Starship",launchpadName:"Starbase Pad A",launchpadLocation:"Boca Chica, Texas",launchpadCoords:[25.997,-97.157],patchUrl:"/assets/starship_patch.jpg",webcastUrl:"https://x.com/SpaceX/status/1798670597148561845"},{id:"past-2",name:"Europa Clipper (Falcon Heavy)",date_utc:"2024-10-14T16:06:00.000Z",date_unix:1728921960,details:"NASA interplanetary mission to investigate Jupiter ocean moon Europa for potential life suitability.",flight_number:360,success:!0,rocketName:"Falcon Heavy",launchpadName:"Launch Complex 39A (LC-39A)",launchpadLocation:"Kennedy Space Center, Florida",launchpadCoords:[28.608,-80.604],patchUrl:"/assets/falcon_heavy_patch.jpg",webcastUrl:"https://www.spacex.com/launches"}]},getFallbackRockets(){return[{id:"falcon9",name:"Falcon 9",type:"rocket",active:!0,stages:2,boosters:0,cost_per_launch:67e6,success_rate_pct:99,first_flight:"2010-06-04",country:"United States",company:"SpaceX",height:{meters:70,feet:229.6},diameter:{meters:3.7,feet:12},mass:{kg:549054,lb:1207920},payload_weights:[{id:"leo",name:"Low Earth Orbit",kg:22800,lb:50265},{id:"gto",name:"Geostationary Transfer Orbit",kg:8300,lb:18300},{id:"mars",name:"Mars Orbit",kg:4020,lb:8860}],description:"Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket.",flickr_images:["https://farm1.staticflickr.com/929/28787645167_10545f448c_b.jpg","https://farm1.staticflickr.com/653/33633857502_572e9a2be7_b.jpg"]},{id:"falconheavy",name:"Falcon Heavy",type:"rocket",active:!0,stages:2,boosters:2,cost_per_launch:97e6,success_rate_pct:100,first_flight:"2018-02-06",country:"United States",company:"SpaceX",height:{meters:70,feet:229.6},diameter:{meters:12.2,feet:39.9},mass:{kg:1420788,lb:3125735},payload_weights:[{id:"leo",name:"Low Earth Orbit",kg:63800,lb:140660},{id:"gto",name:"Geostationary Transfer Orbit",kg:26700,lb:58860},{id:"mars",name:"Mars Orbit",kg:16800,lb:37040}],description:"Falcon Heavy is the most powerful operational rocket in the world by a factor of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb), Falcon Heavy can lift more than twice the payload of the next closest operational vehicle.",flickr_images:["https://farm5.staticflickr.com/4645/38583830575_37ba21778c_b.jpg","https://farm5.staticflickr.com/4709/40358807802_90ab8295b9_b.jpg"]},{id:"starship",name:"Starship & Super Heavy",type:"rocket",active:!0,stages:2,boosters:1,cost_per_launch:1e7,success_rate_pct:90,first_flight:"2023-04-20",country:"United States",company:"SpaceX",height:{meters:121,feet:397},diameter:{meters:9,feet:29.5},mass:{kg:5e6,lb:11e6},payload_weights:[{id:"leo",name:"Low Earth Orbit",kg:15e4,lb:33e4},{id:"mars",name:"Mars Payload",kg:1e5,lb:22e4}],description:"SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond.",flickr_images:["https://live.staticflickr.com/65535/52834942970_42fa955217_b.jpg"]}]},getFallbackLaunchpads(){return[{id:"5e9e4501f509094ba4566f84",name:"Vandenberg Space Launch Complex 4E",locality:"Vandenberg SFB",region:"California",latitude:34.632093,longitude:-120.610829,launch_attempts:130,launch_successes:129,status:"active",details:"SpaceX polar orbit launch site on the West Coast."},{id:"5e9e4502f509094188566f88",name:"Cape Canaveral Space Launch Complex 40",locality:"Cape Canaveral",region:"Florida",latitude:28.5618571,longitude:-80.577366,launch_attempts:210,launch_successes:208,status:"active",details:"SpaceX workhorse launchpad for Starlink and commercial satellites."},{id:"5e9e4502f509092b78566f87",name:"Kennedy Space Center Launch Complex 39A",locality:"Cape Canaveral",region:"Florida",latitude:28.6080585,longitude:-80.6039558,launch_attempts:160,launch_successes:160,status:"active",details:"Historic Saturn V & Apollo pad, used by SpaceX for Crew Dragon, Falcon Heavy, and Starship Florida launch tower."},{id:"starbase_pad_a",name:"Starbase Pad A",locality:"Boca Chica",region:"Texas",latitude:25.997,longitude:-97.157,launch_attempts:6,launch_successes:5,status:"active",details:"World’s largest rocket launch pad featuring Mechazilla tower with catch arms for Super Heavy."}]}};class nC extends Le.Component{constructor(e){super(e),this.state={hasError:!1,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,errorInfo:e?e.toString():"Unknown Error"}}componentDidCatch(e,n){console.error("React Error Boundary caught an exception:",e,n)}render(){return this.state.hasError?_.jsxs("div",{style:{padding:"40px",background:"#000000",color:"#ffffff",fontFamily:"monospace",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[_.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"16px",color:"#ff6b00"},children:"⚠️ TELEMETRY RECOVERY MODE ACTIVE"}),_.jsxs("p",{style:{color:"#94a3b8",marginBottom:"20px"},children:["WebGL 3D Context Error Recovered: ",this.state.errorInfo]}),_.jsx("button",{className:"btn-primary",onClick:()=>{this.setState({hasError:!1}),window.location.reload()},children:"Re-initialize Dashboard"})]}):this.props.children}}function iC(){const[t,e]=Le.useState("home"),[n,i]=Le.useState([]),[r,s]=Le.useState(null),[a,o]=Le.useState([]),[l,c]=Le.useState([]),[d,f]=Le.useState(null),[h,p]=Le.useState(1),[v,y]=Le.useState(!0),m=async()=>{y(!0);try{const u=await Promise.allSettled([Bu.fetchLiveSatellites("starlink"),xi.getNextLaunch(),xi.getPastLaunches(40),xi.getRockets()]),g=u[0].status==="fulfilled"&&u[0].value?u[0].value:Bu.generateSyntheticSatellites("starlink"),x=u[1].status==="fulfilled"&&u[1].value?u[1].value:xi.getFallbackNextLaunch(),S=u[2].status==="fulfilled"&&u[2].value?u[2].value:xi.getFallbackPastLaunches(),I=u[3].status==="fulfilled"&&u[3].value?u[3].value:xi.getFallbackRockets();i(g||[]),s(x||xi.getFallbackNextLaunch()),o(S||[]),c(I||[])}catch(u){console.error("Data load error:",u),i(Bu.generateSyntheticSatellites("starlink")),s(xi.getFallbackNextLaunch()),o(xi.getFallbackPastLaunches()),c(xi.getFallbackRockets())}finally{y(!1)}};return Le.useEffect(()=>{m()},[]),_.jsx(nC,{children:_.jsxs("div",{className:"app-container",children:[_.jsx($1,{activeTab:t,setActiveTab:e,totalSatellites:n?n.length:0,nextLaunch:r,onRefresh:m}),_.jsx("main",{className:"main-viewport",children:v?_.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000000",color:"#ffffff"},children:[_.jsxs("div",{style:{fontSize:"1.6rem",fontFamily:"Outfit, sans-serif",fontWeight:"800",letterSpacing:"2px",display:"flex",alignItems:"center",gap:"12px"},children:[_.jsx("span",{className:"pulse-dot",style:{width:"12px",height:"12px"}}),"INITIALIZING SPACEX ORBITAL TELEMETRY..."]}),_.jsx("div",{style:{fontFamily:"monospace",fontSize:"0.85rem",color:"#94a3b8",marginTop:"12px"},children:"Acquiring CelesTrak TLE Orbits & SpaceX Launch Manifest"})]}):_.jsxs(_.Fragment,{children:[t==="home"&&_.jsx(q1,{onNavigate:e,totalSatellites:(n==null?void 0:n.length)||0,nextLaunch:r}),t==="news"&&_.jsx("div",{style:{overflowY:"auto",height:"100%"},children:_.jsx(Q1,{})}),t==="globe"&&_.jsx($A,{satellites:n||[],selectedSat:d,setSelectedSat:f,simSpeed:h,setSimSpeed:p}),t==="simulator"&&_.jsx(ZA,{nextLaunch:r}),t==="launches"&&_.jsx(QA,{nextLaunch:r,launches:a||[],onSelectLaunch:u=>console.log("Selected launch:",u)}),t==="starlink"&&_.jsx(JA,{satellites:n||[],onFilterStarlink:()=>e("globe")}),t==="rockets"&&_.jsx(eC,{rockets:l||[]}),t==="future"&&_.jsx("div",{style:{overflowY:"auto",height:"100%"},children:_.jsx(tC,{})})]})})]})})}Vu.createRoot(document.getElementById("root")).render(_.jsx(j_.StrictMode,{children:_.jsx(iC,{})}));
