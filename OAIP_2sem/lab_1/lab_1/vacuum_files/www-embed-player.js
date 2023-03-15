(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var l;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ea=da(this);function p(a,b){if(b)a:{var c=ea;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
p("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
p("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ea[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return a.raw=a}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ia(a){if(!(a instanceof Array)){a=r(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ka(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ka(d,e)&&(a[e]=d[e])}return a};
p("Object.assign",function(a){return a||la});
var ma="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},na=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ma(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),pa;
if("function"==typeof Object.setPrototypeOf)pa=Object.setPrototypeOf;else{var qa;a:{var ra={a:!0},ta={};try{ta.__proto__=ra;qa=ta.a;break a}catch(a){}qa=!1}pa=qa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ua=pa;
function v(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(ua)ua(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.va=b.prototype}
function va(){this.H=!1;this.l=null;this.i=void 0;this.h=1;this.m=this.s=0;this.A=this.j=null}
function xa(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
va.prototype.X=function(a){this.i=a};
function ya(a,b){a.j={od:b,yd:!0};a.h=a.s||a.m}
va.prototype.return=function(a){this.j={return:a};this.h=this.m};
function w(a,b,c){a.h=c;return{value:b}}
va.prototype.v=function(a){this.h=a};
function za(a,b,c){a.s=b;void 0!=c&&(a.m=c)}
function Aa(a,b){a.h=b;a.s=0}
function Ba(a){a.s=0;var b=a.j.od;a.j=null;return b}
function Ca(a){a.A=[a.j];a.s=0;a.m=0}
function Da(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.yd?a.h=a.s||a.m:void 0!=b.v&&a.m<b.v?(a.h=b.v,a.j=null):a.h=a.m:a.h=0}
function Ea(a){this.h=new va;this.i=a}
function Fa(a,b){xa(a.h);var c=a.h.l;if(c)return Ga(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ha(a)}
function Ga(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.H=!1,e;var f=e.value}catch(g){return a.h.l=null,ya(a.h,g),Ha(a)}a.h.l=null;d.call(a.h,f);return Ha(a)}
function Ha(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.H=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.H=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.yd)throw b.od;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ia(a){this.next=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l.next,b,a.h.X):(a.h.X(b),b=Ha(a));return b};
this.throw=function(b){xa(a.h);a.h.l?b=Ga(a,a.h.l["throw"],b,a.h.X):(ya(a.h,b),b=Ha(a));return b};
this.return=function(b){return Fa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ja(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ja(new Ia(new Ea(a)))}
function Ka(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
p("Reflect",function(a){return a?a:{}});
p("Reflect.construct",function(){return na});
p("Reflect.setPrototypeOf",function(a){return a?a:ua?function(b,c){try{return ua(b,c),!0}catch(d){return!1}}:null});
p("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.H=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.m()})}this.h.push(g)};
var e=ea.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.m=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(m){this.l(m)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(m){return function(n){k||(k=!0,m.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.V),reject:g(this.m)}};
b.prototype.V=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.R(g):this.s(g)}};
b.prototype.R=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.ia(h,g):this.s(g)};
b.prototype.m=function(g){this.X(2,g)};
b.prototype.s=function(g){this.X(1,g)};
b.prototype.X=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.Z();this.A()};
b.prototype.Z=function(){var g=this;e(function(){if(g.L()){var h=ea.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.L=function(){if(this.H)return!1;var g=ea.CustomEvent,h=ea.Event,k=ea.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ea.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.fc(h.resolve,h.reject)};
b.prototype.ia=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(m){k.reject(m)}};
b.prototype.then=function(g,h){function k(u,t){return"function"==typeof u?function(B){try{m(u(B))}catch(D){n(D)}}:t}
var m,n,q=new b(function(u,t){m=u;n=t});
this.fc(k(g,m),k(h,n));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.fc=function(g,h){function k(){switch(m.h){case 1:g(m.j);break;case 2:h(m.j);break;default:throw Error("Unexpected state: "+m.h);}}
var m=this;null==this.i?f.i(k):this.i.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var m=r(g),n=m.next();!n.done;n=m.next())d(n.value).fc(h,k)})};
b.all=function(g){var h=r(g),k=h.next();return k.done?d([]):new b(function(m,n){function q(B){return function(D){u[B]=D;t--;0==t&&m(u)}}
var u=[],t=0;do u.push(void 0),t++,d(k.value).fc(q(u.length-1),n),k=h.next();while(!k.done)})};
return b});
p("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=r(k);for(var m;!(m=k.next()).done;)m=m.value,this.set(m[0],m[1])}}
function c(){}
function d(k){var m=typeof k;return"object"===m&&null!==k||"function"===m}
function e(k){if(!ka(k,g)){var m=new c;ba(k,g,{value:m})}}
function f(k){var m=Object[k];m&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return m(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),m=Object.seal({}),n=new a([[k,2],[m,3]]);if(2!=n.get(k)||3!=n.get(m))return!1;n.delete(k);n.set(m,4);return!n.has(k)&&4==n.get(m)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,m){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ka(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=m;return this};
b.prototype.get=function(k){return d(k)&&ka(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ka(k,g)&&ka(k[g],this.h)?delete k[g][this.h]:!1};
return b});
p("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var m=h.h;return fa(function(){if(m){for(;m.head!=h.h;)m=m.previous;for(;m.next!=m.head;)return m=m.next,{done:!1,value:k(m)};m=null}return{done:!0,value:void 0}})}
function d(h,k){var m=k&&typeof k;"object"==m||"function"==m?f.has(k)?m=f.get(k):(m=""+ ++g,f.set(k,m)):m="p_"+k;var n=h.data_[m];if(n&&ka(h.data_,m))for(h=0;h<n.length;h++){var q=n[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:m,list:n,index:h,entry:q}}return{id:m,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(r([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var m=k.entries(),n=m.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=m.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!m.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var m=d(this,h);m.list||(m.list=this.data_[m.id]=[]);m.entry?m.entry.value=k:(m.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},m.list.push(m.entry),this.h.previous.next=m.entry,this.h.previous=m.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var m=this.entries(),n;!(n=m.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
p("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
p("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
p("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
p("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
p("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
p("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
p("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
p("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
p("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
p("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
p("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
p("Array.prototype.fill",function(a){return a?a:function(b,c,d){var e=this.length||0;0>c&&(c=Math.max(0,e+c));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(c=Number(c||0);c<d;c++)this[c]=b;return this}});
function Na(a){return a?a:Array.prototype.fill}
p("Int8Array.prototype.fill",Na);p("Uint8Array.prototype.fill",Na);p("Uint8ClampedArray.prototype.fill",Na);p("Int16Array.prototype.fill",Na);p("Uint16Array.prototype.fill",Na);p("Int32Array.prototype.fill",Na);p("Uint32Array.prototype.fill",Na);p("Float32Array.prototype.fill",Na);p("Float64Array.prototype.fill",Na);p("Object.setPrototypeOf",function(a){return a||ua});
p("Set",function(a){function b(c){this.h=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
p("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push([d,b[d]]);return c}});
p("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
p("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
p("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
p("globalThis",function(a){return a||ea});
p("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ka(b,d)&&c.push(b[d]);return c}});
var Oa=Oa||{},y=this||self;function z(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function A(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Pa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Qa(a){var b=Pa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ra(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Sa(a){return Object.prototype.hasOwnProperty.call(a,Ta)&&a[Ta]||(a[Ta]=++Ua)}
var Ta="closure_uid_"+(1E9*Math.random()>>>0),Ua=0;function Va(a,b,c){return a.call.apply(a.bind,arguments)}
function Wa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Xa(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Xa=Va:Xa=Wa;return Xa.apply(null,arguments)}
function Ya(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function $a(a,b){function c(){}
c.prototype=b.prototype;a.va=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Et=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function ab(a){return a}
;function bb(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,bb);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
$a(bb,Error);bb.prototype.name="CustomError";function cb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function db(){}
function eb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var fb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},gb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},hb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},ib=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},jb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
gb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function kb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function lb(a,b){b=fb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Qa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function ob(a){var b=pb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function qb(a){for(var b in a)return!1;return!0}
function rb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function sb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function tb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ub(a){var b={},c;for(c in a)b[c]=a[c];return b}
function vb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=vb(a[c]);return b}
var xb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<xb.length;f++)c=xb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var zb;function Ab(){if(void 0===zb){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ab,createScript:ab,createScriptURL:ab})}catch(c){y.console&&y.console.error(c.message)}zb=a}else zb=a}return zb}
;function Bb(a,b){this.j=a===Cb&&b||""}
Bb.prototype.i=!0;Bb.prototype.h=function(){return this.j};
function Db(a){return new Bb(Cb,a)}
var Cb={};Db("");var Eb={};function Fb(a,b){this.j=b===Eb?a:"";this.i=!0}
Fb.prototype.toString=function(){return this.j.toString()};
Fb.prototype.h=function(){return this.j.toString()};function Gb(a,b){this.j=b===Hb?a:""}
Gb.prototype.toString=function(){return this.j+""};
Gb.prototype.i=!0;Gb.prototype.h=function(){return this.j.toString()};
function Ib(a){if(a instanceof Gb&&a.constructor===Gb)return a.j;Pa(a);return"type_error:TrustedResourceUrl"}
var Hb={};function Jb(a){var b=Ab();a=b?b.createScriptURL(a):a;return new Gb(a,Hb)}
;var Kb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Lb(a,b){return a<b?-1:a>b?1:0}
;function Mb(a,b){this.j=b===Nb?a:""}
Mb.prototype.toString=function(){return this.j.toString()};
Mb.prototype.i=!0;Mb.prototype.h=function(){return this.j.toString()};
function Ob(a){if(a instanceof Mb&&a.constructor===Mb)return a.j;Pa(a);return"type_error:SafeUrl"}
var Pb;try{new URL("s://g"),Pb=!0}catch(a){Pb=!1}var Sb=Pb,Nb={},Tb=new Mb("about:invalid#zClosurez",Nb);var Ub,Vb=A("CLOSURE_FLAGS"),Wb=Vb&&Vb[610401301];Ub=null!=Wb?Wb:!1;function Xb(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
var Yb,Zb=y.navigator;Yb=Zb?Zb.userAgentData||null:null;function $b(a){return Ub?Yb?Yb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function C(a){return-1!=Xb().indexOf(a)}
;function ac(){return Ub?!!Yb&&0<Yb.brands.length:!1}
function bc(){return ac()?!1:C("Opera")}
function cc(){return ac()?!1:C("Trident")||C("MSIE")}
function dc(){return ac()?!1:C("Edge")}
function ec(){return ac()?$b("Microsoft Edge"):C("Edg/")}
function fc(){return C("Firefox")||C("FxiOS")}
function gc(){return C("Safari")&&!(hc()||(ac()?0:C("Coast"))||bc()||dc()||ec()||(ac()?$b("Opera"):C("OPR"))||fc()||C("Silk")||C("Android"))}
function hc(){return ac()?$b("Chromium"):(C("Chrome")||C("CriOS"))&&!dc()||C("Silk")}
function ic(){return C("Android")&&!(hc()||fc()||bc()||C("Silk"))}
function jc(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function kc(a){var b=Xb();if("Internet Explorer"===a){if(cc())if((a=/rv: *([\d\.]*)/.exec(b))&&a[1])b=a[1];else{a="";var c=/MSIE +([\d\.]+)/.exec(b);if(c&&c[1])if(b=/Trident\/(\d.\d)/.exec(b),"7.0"==c[1])if(b&&b[1])switch(b[1]){case "4.0":a="8.0";break;case "5.0":a="9.0";break;case "6.0":a="10.0";break;case "7.0":a="11.0"}else a="7.0";else a=c[1];b=a}else b="";return b}var d=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");c=[];for(var e;e=d.exec(b);)c.push([e[1],e[2],e[3]||void 0]);b=jc(c);
switch(a){case "Opera":if(bc())return b(["Version","Opera"]);if(ac()?$b("Opera"):C("OPR"))return b(["OPR"]);break;case "Microsoft Edge":if(dc())return b(["Edge"]);if(ec())return b(["Edg"]);break;case "Chromium":if(hc())return b(["Chrome","CriOS","HeadlessChrome"])}return"Firefox"===a&&fc()||"Safari"===a&&gc()||"Android Browser"===a&&ic()||"Silk"===a&&C("Silk")?(b=c[2])&&b[1]||"":""}
function lc(a){if(ac()&&"Silk"!==a){var b=Yb.brands.find(function(c){return c.brand===a});
if(!b||!b.version)return NaN;b=b.version.split(".")}else{b=kc(a);if(""===b)return NaN;b=b.split(".")}return 0===b.length?NaN:Number(b[0])}
;var mc={};function pc(a){this.j=mc===mc?a:"";this.i=!0}
pc.prototype.h=function(){return this.j.toString()};
pc.prototype.toString=function(){return this.j.toString()};function qc(a,b){if(!(b instanceof Mb||b instanceof Mb)){b="object"==typeof b&&b.i?b.h():String(b);b:{var c=b;if(Sb){try{var d=new URL(c)}catch(e){c="https:";break b}c=d.protocol}else c:{d=document.createElement("a");try{d.href=c}catch(e){c=void 0;break c}c=d.protocol;c=":"===c||""===c?"https:":c}}"javascript:"!==c||(b="about:invalid#zClosurez");b=new Mb(b,Nb)}a.href=Ob(b)}
function rc(a,b){a.rel="stylesheet";a.href=Ib(b).toString();(b=sc('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function tc(){return sc("script[nonce]")}
var uc=/^[\w+/_-]+[=]{0,2}$/;function sc(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&uc.test(a)?a:"":""}
;function vc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var wc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xc(a){return a?decodeURI(a):a}
function yc(a,b){return b.match(wc)[a]||null}
function zc(a){return xc(yc(3,a))}
function Ac(a){var b=a.match(wc);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Bc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;return a[0]+(a[1]?"?"+a[1]:"")+a[2]}
function Cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Dc(a,b){var c=[];for(b=b||0;b<a.length;b+=2)Cc(a[b],a[b+1],c);return c.join("&")}
function Ec(a){var b=[],c;for(c in a)Cc(c,a[c],b);return b.join("&")}
function Fc(a,b){var c=2==arguments.length?Dc(arguments[1],0):Dc(arguments,1);return Bc(a,c)}
function Gc(a,b){b=Ec(b);return Bc(a,b)}
function Hc(a,b,c){c=null!=c?"="+encodeURIComponent(String(c)):"";return Bc(a,b+c)}
function Ic(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var Jc=/#|$/,Kc=/[?&]($|#)/;function Lc(a,b){for(var c=a.search(Jc),d=0,e,f=[];0<=(e=Ic(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(Kc,"$1")}
;function Mc(a){y.setTimeout(function(){throw a;},0)}
;function Nc(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
;function Rc(){return Ub?!!Yb&&!!Yb.platform:!1}
function Sc(){return Rc()?"Android"===Yb.platform:C("Android")}
function Tc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function Uc(){var a=Xb(),b="";if(Rc()?"Windows"===Yb.platform:C("Windows"))b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0";else if(Tc()||C("iPad")||C("iPod"))b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".");else if(Rc()?"macOS"===Yb.platform:C("Macintosh"))b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10";else if(-1!=Xb().toLowerCase().indexOf("kaios"))b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1];else if(Sc())b=/Android\s+([^\);]+)(\)|;)/,
b=(a=b.exec(a))&&a[1];else if(Rc()?"Chrome OS"===Yb.platform:C("CrOS"))b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,b=(a=b.exec(a))&&a[1];a=0;b=Kb(String(b||"")).split(".");for(var c=Kb("12").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Lb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Lb(0==f[2].length,0==
g[2].length)||Lb(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}}
;function Vc(a){Vc[" "](a);return a}
Vc[" "]=function(){};var Wc=bc(),Xc=cc(),Yc=C("Edge"),Zc=C("Gecko")&&!(-1!=Xb().toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),$c=-1!=Xb().toLowerCase().indexOf("webkit")&&!C("Edge"),ad=Sc();function bd(){var a=y.document;return a?a.documentMode:void 0}
var cd;a:{var dd="",ed=function(){var a=Xb();if(Zc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Yc)return/Edge\/([\d\.]+)/.exec(a);if(Xc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if($c)return/WebKit\/(\S+)/.exec(a);if(Wc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
ed&&(dd=ed?ed[1]:"");if(Xc){var fd=bd();if(null!=fd&&fd>parseFloat(dd)){cd=String(fd);break a}}cd=dd}var gd=cd,hd;if(y.document&&Xc){var id=bd();hd=id?id:parseInt(gd,10)||void 0}else hd=void 0;var jd=hd;var kd=Tc()||C("iPod"),ld=C("iPad");ic();hc();var md=gc()&&!(Tc()||C("iPad")||C("iPod"));var nd={},od=null;function pd(a,b){Qa(a);void 0===b&&(b=0);qd();b=nd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],m=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+m+g+h+k}m=0;k=d;switch(a.length-e){case 2:m=a[e+1],k=b[(m&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|m>>4]+k+d}return c.join("")}
function rd(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;sd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function sd(a,b){function c(k){for(;d<a.length;){var m=a.charAt(d++),n=od[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return k}
qd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function qd(){if(!od){od={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));nd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===od[f]&&(od[f]=e)}}}}
;var td="undefined"!==typeof Uint8Array,ud=!Xc&&"function"===typeof y.btoa;function vd(a){if(!ud)return pd(a);for(var b="";10240<a.length;)b+=String.fromCharCode.apply(null,a.subarray(0,10240)),a=a.subarray(10240);b+=String.fromCharCode.apply(null,a);return btoa(b)}
var wd=RegExp("[-_.]","g");function xd(a){switch(a){case "-":return"+";case "_":return"/";case ".":return"=";default:return""}}
function yd(a){return td&&null!=a&&a instanceof Uint8Array}
var zd={};var Ad;function Bd(a){if(a!==zd)throw Error("illegal external caller");}
function Cd(a,b){Bd(b);this.Aa=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Cd.prototype.Ob=function(){return null==this.Aa};
Cd.prototype.sizeBytes=function(){Bd(zd);var a=this.Aa;if(null!=a&&!yd(a))if("string"===typeof a)if(ud){wd.test(a)&&(a=a.replace(wd,xd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=rd(a);else Pa(a),a=null;return(a=null==a?a:this.Aa=a)?a.length:0};var Dd="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Ed(a,b){if(Dd)return a[Dd]|=b;if(void 0!==a.Ea)return a.Ea|=b;Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Fd(a,b){var c=E(a);(c&b)!==b&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Gd(a,c|b));return a}
function Hd(a,b){Dd?a[Dd]&&(a[Dd]&=~b):void 0!==a.Ea&&(a.Ea&=~b)}
function E(a){var b;Dd?b=a[Dd]:b=a.Ea;return null==b?0:b}
function Gd(a,b){Dd?a[Dd]=b:void 0!==a.Ea?a.Ea=b:Object.defineProperties(a,{Ea:{value:b,configurable:!0,writable:!0,enumerable:!1}})}
function Id(a){Ed(a,1);return a}
function Jd(a,b){Gd(b,(a|0)&-51)}
function Kd(a,b){Gd(b,(a|18)&-41)}
;var Pd={};function Qd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Rd,Sd,Td=[];Gd(Td,23);Sd=Object.freeze(Td);function Ud(a){if(E(a.P)&2)throw Error();}
function Vd(a){var b=a.length;(b=b?a[b-1]:void 0)&&Qd(b)?b.g=1:(b={},a.push((b.g=1,b)))}
;function Wd(a){if(null!=a&&"number"!==typeof a)throw Error("Value of float/double field must be a number|null|undefined, found "+typeof a+": "+a);return a}
function Xd(a){return a.displayName||a.name||"unknown type name"}
function Yd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Xd(b)+" but got "+(a&&Xd(a.constructor)));return a}
function Zd(a,b){var c=E(a),d=c;0===d&&(d|=b&16);d|=b&2;d!==c&&Gd(a,d)}
;function $d(a){var b=a.j+a.hb;return a.xa||(a.xa=a.P[b]={})}
function ae(a,b,c){return-1===b?null:b>=a.j?a.xa?a.xa[b]:void 0:c&&a.xa&&(c=a.xa[b],null!=c)?c:a.P[b+a.hb]}
function G(a,b,c,d){Ud(a);return be(a,b,c,d)}
function be(a,b,c,d){a.m&&(a.m=void 0);if(b>=a.j||d)return $d(a)[b]=c,a;a.P[b+a.hb]=c;(c=a.xa)&&b in c&&delete c[b];return a}
function ce(a,b,c,d,e){var f=ae(a,b,d);Array.isArray(f)||(f=Sd);var g=E(f);g&1||Id(f);if(e)g&2||Ed(f,18),c&1||Object.freeze(f);else{e=!(c&2);var h=g&2;c&1||!h?e&&g&16&&!h&&Hd(f,16):(f=Id(Array.prototype.slice.call(f)),be(a,b,f,d))}return f}
function de(a,b,c,d){Ud(a);(c=ee(a,c))&&c!==b&&null!=d&&be(a,c,void 0,!1);return be(a,b,d)}
function ee(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=ae(a,e)&&(0!==c&&be(a,c,void 0,!1),c=e)}return c}
function fe(a,b,c,d){d=void 0===d?!1:d;var e=d;var f=ae(a,c,e);var g=E(a.P),h=!1;null==f||"object"!==typeof f||(h=Array.isArray(f))||f.Lc!==Pd?h?(Zd(f,g),b=new b(f)):b=void 0:b=f;b!==f&&null!=b&&be(a,c,b,e);e=b;if(null==e)return e;E(a.P)&2||(f=ge(e),f!==e&&(e=f,be(a,c,e,d)));return e}
function he(a,b,c,d,e){var f=!!(e&2);a.i||(a.i={});var g=a.i[c],h=ce(a,c,3,void 0,f);if(!g){var k=h;g=[];f=!!(e&2);h=!!(E(k)&2);var m=k;!f&&h&&(k=Array.prototype.slice.call(k));var n=e|(h?2:0);e=h;for(var q=0;q<k.length;q++){var u=k[q];var t=b;Array.isArray(u)?(Zd(u,n),u=new t(u)):u=void 0;void 0!==u&&(e=e||!!(2&E(u.P)),g.push(u))}a.i[c]=g;b=k;e=!e;n=E(b);k=n|33;k=e?k|8:k&-9;n!=k&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Gd(b,k));k=b;m!==k&&be(a,c,k);(f||d&&h)&&Ed(g,18);d&&Object.freeze(g);
return g}f||(f=Object.isFrozen(g),d&&!f?Object.freeze(g):!d&&f&&(g=Array.prototype.slice.call(g),a.i[c]=g));return g}
function I(a,b,c,d){Ud(a);null!=d?Yd(d,b):d=void 0;return be(a,c,d)}
function ie(a,b,c,d,e){Ud(a);null!=e?Yd(e,b):e=void 0;de(a,c,d,e)}
function je(a,b,c,d,e){Ud(a);var f=null==d?Sd:Id([]);if(null!=d){for(var g=!!d.length,h=0;h<d.length;h++){var k=d[h];Yd(k,b);g=g&&!(E(k.P)&2);f[h]=k.P}f=Fd(f,(g?8:0)|1);a.i||(a.i={});a.i[c]=d}else a.i&&(a.i[c]=void 0);return be(a,c,f,e)}
function ke(a,b,c,d){var e=E(a.P);if(e&2)throw Error();e=he(a,c,b,!1,e);c=null!=d?Yd(d,c):new c;a=ce(a,b,2,void 0,!1);e.push(c);a.push(c.P);E(c.P)&2&&Hd(a,8)}
function le(){var a=new me;return G(a,1,1)}
function ne(a,b){return null==a?b:a}
function oe(a,b){return ne(ae(a,b),"")}
;var pe;function qe(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a)if(Array.isArray(a)){if(0!==(E(a)&128))return a=Array.prototype.slice.call(a),Vd(a),a}else{if(yd(a))return vd(a);if(a instanceof Cd){var b=a.Aa;return null==b?"":"string"===typeof b?b:a.Aa=vd(b)}}}return a}
;function re(a,b,c,d){if(null!=a){if(Array.isArray(a))a=se(a,b,c,void 0!==d);else if(Qd(a)){var e={},f;for(f in a)e[f]=re(a[f],b,c,d);a=e}else a=b(a,d);return a}}
function se(a,b,c,d){var e=E(a);d=d?!!(e&16):void 0;a=Array.prototype.slice.call(a);for(var f=0;f<a.length;f++)a[f]=re(a[f],b,c,d);c(e,a);return a}
function te(a){return a.Lc===Pd?a.toJSON():qe(a)}
function ue(a,b){a&128&&Vd(b)}
;function ve(a,b,c){c=void 0===c?Kd:c;if(null!=a){if(td&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=E(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Gd(a,d|18),a;a=se(a,ve,d&4?Kd:c,!0);b=E(a);b&4&&b&2&&Object.freeze(a);return a}return a.Lc===Pd?we(a):a}}
function xe(a,b,c,d,e,f,g){(a=a.i&&a.i[c])?(d=0<a.length?a[0].constructor:void 0,f=E(a),f&2||(a=ib(a,we),Kd(f,a),Object.freeze(a)),je(b,d,c,a,e)):G(b,c,ve(d,f,g),e)}
function we(a){if(E(a.P)&2)return a;a=ye(a,!0);Ed(a.P,18);return a}
function ye(a,b){var c=a.P,d=[];Ed(d,16);var e=a.constructor.h;e&&d.push(e);e=a.xa;if(e){d.length=c.length;d.fill(void 0,d.length,c.length);var f={};d[d.length-1]=f}0!==(E(c)&128)&&Vd(d);b=b||E(a.P)&2?Kd:Jd;f=a.constructor;E(d);pe=d;d=new f(d);pe=void 0;a.xd&&(d.xd=a.xd.slice());f=!!(E(c)&16);for(var g=e?c.length-1:c.length,h=0;h<g;h++)xe(a,d,h-a.hb,c[h],!1,f,b);if(e)for(var k in e)c=e[k],g=+k,Number.isNaN(g),xe(a,d,g,c,!0,f,b);return d}
function ge(a){if(!(E(a.P)&2))return a;var b=ye(a,!1);b.m=a;return b}
;function J(a,b,c,d){null==a&&(a=pe);pe=void 0;var e=this.constructor.h;if(null==a){a=e?[e]:[];var f=48;var g=!0;d&&(f|=128);Gd(a,f)}else{if(!Array.isArray(a))throw Error();if(e&&e!==a[0])throw Error();f=Ed(a,0)|32;g=0!==(16&f);if(d){if(!(f&128)&&0<a.length){var h=a[a.length-1];if(Qd(h)&&"g"in h){f|=128;delete h.g;var k=!0,m;for(m in h){k=!1;break}k&&a.pop()}else throw Error();}}else if(128&f)throw Error();Gd(a,f)}this.hb=e?0:-1;this.i=void 0;this.P=a;a:{f=this.P.length;e=f-1;if(f&&(f=this.P[e],Qd(f))){this.xa=
f;this.j=e-this.hb;break a}void 0!==b&&-1<b?(this.j=Math.max(b,e+1-this.hb),this.xa=void 0):this.j=Number.MAX_VALUE}if(!d&&this.xa&&"g"in this.xa)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(c){b=g&&!0;d=this.j;var n;for(g=0;g<c.length;g++)e=c[g],e<d?(e+=this.hb,(f=a[e])?ze(f,b):a[e]=Sd):(n||(n=$d(this)),(f=n[e])?ze(f,b):n[e]=Sd)}E(this.P)}
J.prototype.toJSON=function(){var a=this.P,b;Rd?b=a:b=se(a,te,ue);return b};
function Ae(a){Rd=!0;try{return JSON.stringify(a.toJSON(),Be)}finally{Rd=!1}}
J.prototype.clone=function(){return ye(this,!1)};
function ze(a,b){if(Array.isArray(a)){var c=E(a),d=1;!b||c&2||(d|=16);(c&d)!==d&&Gd(a,c|d)}}
J.prototype.Lc=Pd;J.prototype.toString=function(){return this.P.toString()};
function Be(a,b){return qe(b)}
;function Ce(a){this.hd=a}
;function De(a,b,c){this.i=a;this.l=b;this.h=c||[];this.sb=new Map}
l=De.prototype;l.ce=function(a){var b=Ka.apply(1,arguments),c=this.Ac(b);c?c.push(new Ce(a)):this.Ld(a,b)};
l.Ld=function(a){this.sb.set(this.qd(Ka.apply(1,arguments)),[new Ce(a)])};
l.Ac=function(){var a=this.qd(Ka.apply(0,arguments));return this.sb.has(a)?this.sb.get(a):void 0};
l.te=function(){var a=this.Ac(Ka.apply(0,arguments));return a&&a.length?a[0]:void 0};
l.clear=function(){this.sb.clear()};
l.qd=function(){var a=Ka.apply(0,arguments);return a?a.join(","):"key"};function Ee(a,b){De.call(this,a,3,b)}
v(Ee,De);Ee.prototype.j=function(a){var b=Ka.apply(1,arguments),c=0,d=this.te(b);d&&(c=d.hd);this.Ld(c+a,b)};function Fe(a,b){De.call(this,a,2,b)}
v(Fe,De);Fe.prototype.j=function(a){this.ce(a,Ka.apply(1,arguments))};function Ge(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function He(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Qa(d)?He.apply(null,d):Ge(d)}}
;function K(){this.X=this.X;this.H=this.H}
K.prototype.X=!1;K.prototype.h=function(){return this.X};
K.prototype.dispose=function(){this.X||(this.X=!0,this.M())};
function Ie(a,b){Je(a,Ya(Ge,b))}
function Je(a,b){a.X?b():(a.H||(a.H=[]),a.H.push(b))}
K.prototype.M=function(){if(this.H)for(;this.H.length;)this.H.shift()()};function Ke(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ke.prototype.stopPropagation=function(){this.j=!0};
Ke.prototype.preventDefault=function(){this.defaultPrevented=!0};function Le(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Me(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Ne[c])c=Ne[c];else{c=String(c);if(!Ne[c]){var f=/function\s+([^\(]+)/m.exec(c);Ne[c]=f?f[1]:"[Anonymous]"}c=Ne[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Me(a,b){b||(b={});b[Oe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Oe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Me(a,b));return c}
function Oe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Ne={};var Pe=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",function(){},b),y.removeEventListener("test",function(){},b)}catch(c){}return a}();function Qe(a,b){Ke.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
$a(Qe,Ke);var Re={2:"touch",3:"pen",4:"mouse"};
Qe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Zc){a:{try{Vc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Re[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Qe.va.preventDefault.call(this)};
Qe.prototype.stopPropagation=function(){Qe.va.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Qe.prototype.preventDefault=function(){Qe.va.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Se="closure_listenable_"+(1E6*Math.random()|0);var Te=0;function Ue(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.kc=e;this.key=++Te;this.Sb=this.ec=!1}
function Ve(a){a.Sb=!0;a.listener=null;a.proxy=null;a.src=null;a.kc=null}
;function We(a){this.src=a;this.listeners={};this.h=0}
We.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Xe(a,b,d,e);-1<g?(b=a[g],c||(b.ec=!1)):(b=new Ue(b,this.src,f,!!d,e),b.ec=c,a.push(b));return b};
We.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Xe(e,b,c,d);return-1<b?(Ve(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function Ye(a,b){var c=b.type;c in a.listeners&&lb(a.listeners[c],b)&&(Ve(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Xe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sb&&f.listener==b&&f.capture==!!c&&f.kc==d)return e}return-1}
;var Ze="closure_lm_"+(1E6*Math.random()|0),$e={},af=0;function bf(a,b,c,d,e){if(d&&d.once)cf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)bf(a,b[f],c,d,e);else c=jf(c),a&&a[Se]?a.Ma(b,c,Ra(d)?!!d.capture:!!d,e):kf(a,b,c,!1,d,e)}
function kf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ra(e)?!!e.capture:!!e,h=lf(a);h||(a[Ze]=h=new We(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=mf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Pe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(nf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");af++}}
function mf(){function a(c){return b.call(a.src,a.listener,c)}
var b=of;return a}
function cf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)cf(a,b[f],c,d,e);else c=jf(c),a&&a[Se]?a.l.add(String(b),c,!0,Ra(d)?!!d.capture:!!d,e):kf(a,b,c,!0,d,e)}
function pf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)pf(a,b[f],c,d,e);else(d=Ra(d)?!!d.capture:!!d,c=jf(c),a&&a[Se])?a.l.remove(String(b),c,d,e):a&&(a=lf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Xe(b,c,d,e)),(c=-1<a?b[a]:null)&&qf(c))}
function qf(a){if("number"!==typeof a&&a&&!a.Sb){var b=a.src;if(b&&b[Se])Ye(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(nf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);af--;(c=lf(b))?(Ye(c,a),0==c.h&&(c.src=null,b[Ze]=null)):Ve(a)}}}
function nf(a){return a in $e?$e[a]:$e[a]="on"+a}
function of(a,b){if(a.Sb)a=!0;else{b=new Qe(b,this);var c=a.listener,d=a.kc||a.src;a.ec&&qf(a);a=c.call(d,b)}return a}
function lf(a){a=a[Ze];return a instanceof We?a:null}
var rf="__closure_events_fn_"+(1E9*Math.random()>>>0);function jf(a){if("function"===typeof a)return a;a[rf]||(a[rf]=function(b){return a.handleEvent(b)});
return a[rf]}
;function sf(){K.call(this);this.l=new We(this);this.Zd=this;this.Qa=null}
$a(sf,K);sf.prototype[Se]=!0;sf.prototype.addEventListener=function(a,b,c,d){bf(this,a,b,c,d)};
sf.prototype.removeEventListener=function(a,b,c,d){pf(this,a,b,c,d)};
function tf(a,b){var c=a.Qa;if(c){var d=[];for(var e=1;c;c=c.Qa)d.push(c),++e}a=a.Zd;c=b.type||b;"string"===typeof b?b=new Ke(b,a):b instanceof Ke?b.target=b.target||a:(e=b,b=new Ke(c,a),yb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=uf(g,c,!0,b)&&e}b.j||(g=b.h=a,e=uf(g,c,!0,b)&&e,b.j||(e=uf(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=uf(g,c,!1,b)&&e}
sf.prototype.M=function(){sf.va.M.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ve(d[e]);delete a.listeners[c];a.h--}}this.Qa=null};
sf.prototype.Ma=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function uf(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Sb&&g.capture==c){var h=g.listener,k=g.kc||g.src;g.ec&&Ye(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function vf(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
vf.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function wf(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function xf(a,b){return a+Math.random()*(b-a)}
;function yf(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
l=yf.prototype;l.clone=function(){return new yf(this.x,this.y)};
l.equals=function(a){return a instanceof yf&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
l.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
l.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
l.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
l.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function zf(a,b){this.width=a;this.height=b}
l=zf.prototype;l.clone=function(){return new zf(this.width,this.height)};
l.aspectRatio=function(){return this.width/this.height};
l.Ob=function(){return!(this.width*this.height)};
l.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
l.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
l.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
l.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function Af(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function Bf(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function Cf(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Df;function Ef(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=Bf("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Xa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!cc()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.gd;c.gd=null;e()}};
return function(e){d.next={gd:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Ff(){this.i=this.h=null}
Ff.prototype.add=function(a,b){var c=Gf.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Ff.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Gf=new vf(function(){return new Hf},function(a){return a.reset()});
function Hf(){this.next=this.scope=this.h=null}
Hf.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Hf.prototype.reset=function(){this.next=this.scope=this.h=null};var If,Jf=!1,Kf=new Ff;function Lf(a,b){If||Mf();Jf||(If(),Jf=!0);Kf.add(a,b)}
function Mf(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);If=function(){a.then(Nf)}}else If=function(){var b=Nf;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!dc()&&y.Window.prototype.setImmediate==y.setImmediate?(Df||(Df=Ef()),Df(b)):y.setImmediate(b)}}
function Nf(){for(var a;a=Kf.remove();){try{a.h.call(a.scope)}catch(b){Mc(b)}wf(Gf,a)}Jf=!1}
;function Of(a){this.h=0;this.H=void 0;this.l=this.i=this.j=null;this.m=this.s=!1;if(a!=db)try{var b=this;a.call(void 0,function(c){Pf(b,2,c)},function(c){Pf(b,3,c)})}catch(c){Pf(this,3,c)}}
function Qf(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
Qf.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var Rf=new vf(function(){return new Qf},function(a){a.reset()});
function Sf(a,b,c){var d=Rf.get();d.j=a;d.i=b;d.context=c;return d}
function Tf(a){return new Of(function(b,c){c(a)})}
Of.prototype.then=function(a,b,c){return Uf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Of.prototype.$goog_Thenable=!0;l=Of.prototype;l.vc=function(a,b){return Uf(this,null,a,b)};
l.catch=Of.prototype.vc;l.cancel=function(a){if(0==this.h){var b=new Vf(a);Lf(function(){Wf(this,b)},this)}};
function Wf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Wf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Xf(c),Yf(c,e,3,b)))}a.j=null}else Pf(a,3,b)}
function Zf(a,b){a.i||2!=a.h&&3!=a.h||$f(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Uf(a,b,c,d){var e=Sf(null,null,null);e.h=new Of(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(m){g(m)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Vf?g(h):f(k)}catch(m){g(m)}}:g});
e.h.j=a;Zf(a,e);return e.h}
l.mf=function(a){this.h=0;Pf(this,2,a)};
l.nf=function(a){this.h=0;Pf(this,3,a)};
function Pf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.mf,f=a.nf;if(d instanceof Of){Zf(d,Sf(e||db,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(m){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ra(d))try{var k=d.then;if("function"===typeof k){ag(d,k,e,f,a);g=!0;break a}}catch(m){f.call(a,m);g=!0;break a}g=!1}}}g||(a.H=c,a.h=b,a.j=null,$f(a),3!=b||c instanceof Vf||bg(a,c))}}
function ag(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function $f(a){a.s||(a.s=!0,Lf(a.oe,a))}
function Xf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
l.oe=function(){for(var a;a=Xf(this);)Yf(this,a,this.h,this.H);this.s=!1};
function Yf(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,cg(b,c,d);else try{b.l?b.j.call(b.context):cg(b,c,d)}catch(e){dg.call(null,e)}wf(Rf,b)}
function cg(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function bg(a,b){a.m=!0;Lf(function(){a.m&&dg.call(null,b)})}
var dg=Mc;function Vf(a){bb.call(this,a)}
$a(Vf,bb);Vf.prototype.name="cancel";function eg(a,b){sf.call(this);this.j=a||1;this.i=b||y;this.m=Xa(this.kf,this);this.s=Date.now()}
$a(eg,sf);l=eg.prototype;l.enabled=!1;l.za=null;function fg(a,b){a.j=b;a.za&&a.enabled?(a.stop(),a.start()):a.za&&a.stop()}
l.kf=function(){if(this.enabled){var a=Date.now()-this.s;0<a&&a<.8*this.j?this.za=this.i.setTimeout(this.m,this.j-a):(this.za&&(this.i.clearTimeout(this.za),this.za=null),tf(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
l.start=function(){this.enabled=!0;this.za||(this.za=this.i.setTimeout(this.m,this.j),this.s=Date.now())};
l.stop=function(){this.enabled=!1;this.za&&(this.i.clearTimeout(this.za),this.za=null)};
l.M=function(){eg.va.M.call(this);this.stop();delete this.i};
function gg(a,b,c){if("function"===typeof a)c&&(a=Xa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Xa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:y.setTimeout(a,b||0)}
;function hg(a){this.H=a;this.h=new Map;this.s=new Set;this.j=0;this.l=100;this.flushInterval=3E4;this.i=new eg(this.flushInterval);this.i.Ma("tick",this.Fb,!1,this);this.m=!1}
l=hg.prototype;l.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ig(a){a.i.enabled||a.i.start();a.j++;a.j>=a.l&&a.Fb()}
l.Fb=function(){var a=this.h.values();a=[].concat(ia(a)).filter(function(b){return b.sb.size});
a.length&&this.H.flush(a,this.m);jg(a);this.j=0;this.i.enabled&&this.i.stop()};
l.cd=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new Ee(a,b))};
l.dd=function(a){var b=Ka.apply(1,arguments);this.h.has(a)||this.h.set(a,new Fe(a,b))};
function kg(a,b){return a.s.has(b)?void 0:a.h.get(b)}
l.wc=function(a){this.Xd.apply(this,[a,1].concat(ia(Ka.apply(1,arguments))))};
l.Xd=function(a,b){var c=Ka.apply(2,arguments),d=kg(this,a);d&&d instanceof Ee&&(d.j(b,c),ig(this))};
l.xc=function(a,b){var c=Ka.apply(2,arguments),d=kg(this,a);d&&d instanceof Fe&&(d.j(b,c),ig(this))};
function jg(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function lg(a){this.h=a;this.h.cd("/client_streamz/bg/fiec",{Nb:3,Mb:"rk"},{Nb:2,Mb:"ec"})}
function mg(a,b,c){a.h.wc("/client_streamz/bg/fiec",b,c)}
function ng(a){this.h=a;this.h.dd("/client_streamz/bg/fil",{Nb:3,Mb:"rk"})}
function og(a){this.h=a;this.h.cd("/client_streamz/bg/fsc",{Nb:3,Mb:"rk"})}
function pg(a){this.h=a;this.h.dd("/client_streamz/bg/fsl",{Nb:3,Mb:"rk"})}
;var qg={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function rg(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=sg(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=tg(a,h),d+=tg(a,h+4),e+=tg(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return qg.toString(e)}
function sg(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function tg(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;function ug(a){J.call(this,a)}
v(ug,J);var vg=[1,2,3];function wg(a){J.call(this,a)}
v(wg,J);var xg=[1,2,3];function yg(a){J.call(this,a,-1,zg)}
v(yg,J);var zg=[1];function Ag(a){J.call(this,a,-1,Bg)}
v(Ag,J);var Bg=[3,6,4];function Cg(a){J.call(this,a,-1,Dg)}
v(Cg,J);var Dg=[1];function Eg(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Fg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=m=0}
function b(q){for(var u=g,t=0;64>t;t+=4)u[t/4]=q[t]<<24|q[t+1]<<16|q[t+2]<<8|q[t+3];for(t=16;80>t;t++)q=u[t-3]^u[t-8]^u[t-14]^u[t-16],u[t]=(q<<1|q>>>31)&4294967295;q=e[0];var B=e[1],D=e[2],F=e[3],M=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var O=F^B&(D^F);var Q=1518500249}else O=B^D^F,Q=1859775393;else 60>t?(O=B&D|F&(B|D),Q=2400959708):(O=B^D^F,Q=3395469782);O=((q<<5|q>>>27)&4294967295)+O+M+Q+u[t]&4294967295;M=F;F=D;D=(B<<30|B>>>2)&4294967295;B=q;q=O}e[0]=e[0]+q&4294967295;e[1]=e[1]+B&4294967295;e[2]=
e[2]+D&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+M&4294967295}
function c(q,u){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var t=[],B=0,D=q.length;B<D;++B)t.push(q.charCodeAt(B));q=t}u||(u=q.length);t=0;if(0==m)for(;t+64<u;)b(q.slice(t,t+64)),t+=64,n+=64;for(;t<u;)if(f[m++]=q[t++],n++,64==m)for(m=0,b(f);t+64<u;)b(q.slice(t,t+64)),t+=64,n+=64}
function d(){var q=[],u=8*n;56>m?c(h,56-m):c(h,64-(m-56));for(var t=63;56<=t;t--)f[t]=u&255,u>>>=8;b(f);for(t=u=0;5>t;t++)for(var B=24;0<=B;B-=8)q[u++]=e[t]>>B&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var m,n;a();return{reset:a,update:c,digest:d,ke:function(){for(var q=d(),u="",t=0;t<q.length;t++)u+="0123456789ABCDEF".charAt(Math.floor(q[t]/16))+"0123456789ABCDEF".charAt(q[t]%16);return u}}}
;function Gg(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Hg(Eg(d),a,c||null)].join(" "):null}
function Hg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],gb(d,function(h){e.push(h)}),Ig(e.join(" "));
var f=[],g=[];gb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];gb(d,function(h){e.push(h)});
a=Ig(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ig(a){var b=Fg();b.update(a);return b.ke().toLowerCase()}
;var Jg={};function Kg(a){this.h=a||{cookie:""}}
l=Kg.prototype;l.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.Ob())return!0;this.set("TESTCOOKIESENABLED","1",{nc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
l.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Wt;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.nc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
l.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Kb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
l.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{nc:0,path:b,domain:c});return d};
l.Dc=function(){return Lg(this).keys};
l.Ob=function(){return!this.h.cookie};
l.clear=function(){for(var a=Lg(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function Lg(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Kb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var Mg=new Kg("undefined"==typeof document?null:document);function Ng(a){return!!Jg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Og(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Ng(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Kg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");Ng(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Pg(a,b,c,d){(a=y[a])||(a=(new Kg(document)).get(b));return a?Gg(a,c,d):null}
function Qg(a,b){b=void 0===b?!1:b;var c=Eg(String(y.location.href)),d=[];if(Og(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Kg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Gg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ng(b)&&((b=Pg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Pg("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Rg(a){J.call(this,a,-1,Sg)}
v(Rg,J);var Sg=[2];function Tg(a){this.h=this.i=this.j=a}
Tg.prototype.reset=function(){this.h=this.i=this.j};
Tg.prototype.getValue=function(){return this.i};function Ug(a){var b=[];Vg(new Wg,a,b);return b.join("")}
function Wg(){}
function Vg(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Vg(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Xg(d,c),c.push(":"),Vg(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Xg(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Yg={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Zg=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Xg(a,b){b.push('"',a.replace(Zg,function(c){var d=Yg[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Yg[c]=d);return d}),'"')}
;function $g(){}
$g.prototype.h=null;$g.prototype.getOptions=function(){var a;(a=this.h)||(a={},ah(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var bh;function ch(){}
$a(ch,$g);function dh(a){return(a=ah(a))?new ActiveXObject(a):new XMLHttpRequest}
function ah(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
bh=new ch;function eh(a){sf.call(this);this.headers=new Map;this.V=a||null;this.i=!1;this.R=this.F=null;this.m=this.ia="";this.j=this.aa=this.A=this.Z=!1;this.s=0;this.L=null;this.Ba="";this.oa=this.qa=!1}
$a(eh,sf);var fh=/^https?$/i,gh=["POST","PUT"],hh=[];function ih(a,b,c,d,e,f,g){var h=new eh;hh.push(h);b&&h.Ma("complete",b);h.l.add("ready",h.ie,!0,void 0,void 0);f&&(h.s=Math.max(0,f));g&&(h.qa=g);h.send(a,c,d,e)}
l=eh.prototype;l.ie=function(){this.dispose();lb(hh,this)};
l.send=function(a,b,c,d){if(this.F)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ia+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ia=a;this.m="";this.Z=!1;this.i=!0;this.F=this.V?dh(this.V):dh(bh);this.R=this.V?this.V.getOptions():bh.getOptions();this.F.onreadystatechange=Xa(this.Cd,this);try{this.getStatus(),this.aa=!0,this.F.open(b,String(a),!0),this.aa=!1}catch(g){this.getStatus();jh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=r(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=y.FormData&&a instanceof y.FormData;!(0<=fb(gh,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=r(c);for(d=b.next();!d.done;d=b.next())c=r(d.value),d=c.next().value,c=c.next().value,this.F.setRequestHeader(d,c);this.Ba&&(this.F.responseType=this.Ba);"withCredentials"in this.F&&this.F.withCredentials!==this.qa&&(this.F.withCredentials=this.qa);try{kh(this),0<this.s&&(this.oa=lh(this.F),this.getStatus(),this.oa?(this.F.timeout=this.s,this.F.ontimeout=Xa(this.Qd,
this)):this.L=gg(this.Qd,this.s,this)),this.getStatus(),this.A=!0,this.F.send(a),this.A=!1}catch(g){this.getStatus(),jh(this,g)}};
function lh(a){return Xc&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
l.Qd=function(){"undefined"!=typeof Oa&&this.F&&(this.m="Timed out after "+this.s+"ms, aborting",this.getStatus(),tf(this,"timeout"),this.abort(8))};
function jh(a,b){a.i=!1;a.F&&(a.j=!0,a.F.abort(),a.j=!1);a.m=b;mh(a);nh(a)}
function mh(a){a.Z||(a.Z=!0,tf(a,"complete"),tf(a,"error"))}
l.abort=function(){this.F&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.F.abort(),this.j=!1,tf(this,"complete"),tf(this,"abort"),nh(this))};
l.M=function(){this.F&&(this.i&&(this.i=!1,this.j=!0,this.F.abort(),this.j=!1),nh(this,!0));eh.va.M.call(this)};
l.Cd=function(){this.h()||(this.aa||this.A||this.j?oh(this):this.Le())};
l.Le=function(){oh(this)};
function oh(a){if(a.i&&"undefined"!=typeof Oa)if(a.R[1]&&4==ph(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==ph(a))gg(a.Cd,0,a);else if(tf(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(qh(a))tf(a,"complete"),tf(a,"success");else{try{var b=2<ph(a)?a.F.statusText:""}catch(c){b=""}a.m=b+" ["+a.getStatus()+"]";mh(a)}}finally{nh(a)}}}
function nh(a,b){if(a.F){kh(a);var c=a.F,d=a.R[0]?function(){}:null;
a.F=null;a.R=null;b||tf(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function kh(a){a.F&&a.oa&&(a.F.ontimeout=null);a.L&&(y.clearTimeout(a.L),a.L=null)}
l.isActive=function(){return!!this.F};
l.isComplete=function(){return 4==ph(this)};
function qh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=yc(1,String(a.ia)),!a&&y.self&&y.self.location&&(a=y.self.location.protocol.slice(0,-1)),b=!fh.test(a?a.toLowerCase():"");c=b}return c}
function ph(a){return a.F?a.F.readyState:0}
l.getStatus=function(){try{return 2<ph(this)?this.F.status:-1}catch(a){return-1}};
l.getLastError=function(){return"string"===typeof this.m?this.m:String(this.m)};function rh(a){J.call(this,a,-1,sh)}
v(rh,J);var sh=[1];function th(a){J.call(this,a)}
v(th,J);var uh=["platform","platformVersion","architecture","model","uaFullVersion"];new rh;function me(a){J.call(this,a)}
v(me,J);function vh(a){J.call(this,a,31,wh)}
v(vh,J);var wh=[3,20,27];function xh(a){J.call(this,a,17,yh)}
v(xh,J);var yh=[3,5];function zh(a){J.call(this,a,6,Ah)}
v(zh,J);var Ah=[5];function Bh(a){J.call(this,a)}
v(Bh,J);var Eh;Eh=new function(a,b,c){this.i=a;this.fieldName=b;this.h=c;this.isRepeated=0;this.j=fe;this.defaultValue=void 0}(175237375,{Mt:0},Bh);function Fh(a,b,c,d,e,f,g,h,k,m,n){sf.call(this);var q=this;this.Z="";this.j=[];this.Zc="";this.bd=this.gb=-1;this.Zb=!1;this.R=this.m=null;this.L=0;this.ae=1;this.timeoutMillis=0;this.Ba=!1;sf.call(this);this.ac=b||function(){};
this.A=new Gh(a,f);this.Yd=d;this.Yb=n;this.be=Ya(xf,0,1);this.ia=e||null;this.V=c||null;this.oa=g||!1;this.pageId=k||null;this.logger=null;this.withCredentials=!h;this.Hb=f||!1;!this.Hb&&(65<=lc("Chromium")||45<=lc("Firefox")||12<=lc("Safari")||(Tc()||C("iPad")||C("iPod"))&&Uc());a=le();Hh(this.A,a);this.s=new Tg(1E4);this.i=new eg(this.s.getValue());Ie(this,this.i);m=Ih(this,m);bf(this.i,"tick",m,!1,this);this.aa=new eg(6E5);Ie(this,this.aa);bf(this.aa,"tick",m,!1,this);this.oa||this.aa.start();
this.Hb||(bf(document,"visibilitychange",function(){"hidden"===document.visibilityState&&q.qa()}),bf(document,"pagehide",this.qa,!1,this))}
v(Fh,sf);function Ih(a,b){return b?function(){b().then(function(){a.flush()})}:function(){a.flush()}}
Fh.prototype.M=function(){this.qa();sf.prototype.M.call(this)};
function Jh(a){a.ia||(a.ia=.01>a.be()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true");return a.ia}
function Kh(a,b){a.s=new Tg(1>b?1:b);fg(a.i,a.s.getValue())}
Fh.prototype.log=function(a){a=a.clone();var b=this.ae++;G(a,21,b);this.Z&&G(a,26,this.Z);if(!ae(a,1)){b=a;var c=Date.now().toString();G(b,1,c)}null==ae(a,15)&&G(a,15,60*(new Date).getTimezoneOffset());this.m&&(b=this.m.clone(),I(a,Rg,16,b));for(;1E3<=this.j.length;)this.j.shift(),++this.L;this.j.push(a);tf(this,new Lh(a));this.oa||this.i.enabled||this.i.start()};
Fh.prototype.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else if(this.Ba)Mh(this);else{var d=Date.now();if(this.bd>d&&this.gb<d)b&&b("throttled");else{var e=Nh(this.A,this.j,this.L);d={};var f=this.ac();f&&(d.Authorization=f);var g=Jh(this);this.V&&(d["X-Goog-AuthUser"]=this.V,g=Hc(g,"authuser",this.V));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g=Hc(g,"pageId",this.pageId));if(f&&this.Zc===f)b&&b("stale-auth-token");else{this.j=[];this.i.enabled&&this.i.stop();this.L=0;var h=Ae(e),
k;this.R&&this.R.isSupported(h.length)&&(k=this.R.compress(h));var m={url:g,body:h,ge:1,Qc:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis},n=function(t){c.s.reset();fg(c.i,c.s.getValue());if(t){var B=null;try{var D=JSON.parse(t.replace(")]}'\n",""));B=new zh(D)}catch(F){}B&&(t=Number(ne(ae(B,1),"-1")),0<t&&(c.gb=Date.now(),c.bd=c.gb+t),B=Eh.h?Eh.j(B,Eh.h,Eh.i,!0):Eh.j(B,Eh.i,Eh.defaultValue,!0))&&(B=ne(ae(B,1),-1),-1!=B&&(c.Zb||Kh(c,B)))}a&&a()},q=function(t,
B){var D=E(e.P),F=!!(D&2);
D=he(e,vh,3,F,D);var M=ce(e,3,3,void 0,F);if(!(F||E(M)&8)){for(F=0;F<D.length;F++){var O=D[F],Q=ge(O);O!==Q&&(D[F]=Q,M[F]=Q.P)}Ed(M,8)}M=c.s;M.h=Math.min(3E5,2*M.h);M.i=Math.min(3E5,M.h+Math.round(.2*(Math.random()-.5)*M.h));fg(c.i,c.s.getValue());401===t&&f&&(c.Zc=f);void 0===B&&(B=500<=t&&600>t||401===t||0===t);B&&(c.j=D.concat(c.j),c.oa||c.i.enabled||c.i.start());b&&b("net-send-failed",t)},u=function(){c.Yb?c.Yb.send(m,n,q):c.Yd(m,n,q)};
k?k.then(function(t){m.Qc["Content-Encoding"]="gzip";m.Qc["Content-Type"]="application/binary";m.body=t;m.ge=2;u()},function(){u()}):u()}}}};
Fh.prototype.qa=function(){this.flush()};
function Mh(a){Oh(a,function(b,c){b=Hc(b,"format","json");var d=!1;try{d=window.navigator.sendBeacon(b,Ae(c))}catch(e){}a.Ba&&!d&&(a.Ba=!1);return d})}
function Oh(a,b){if(0!==a.j.length){var c=Lc(Jh(a),"format");c=Fc(c,"auth",a.ac(),"authuser",a.V||"0");for(var d=0;10>d&&a.j.length;++d){var e=a.j.slice(0,32),f=Nh(a.A,e,a.L);if(!b(c,f))break;a.L=0;a.j=a.j.slice(e.length)}a.i.enabled&&a.i.stop()}}
function Lh(){Ke.call(this,"event-logged",void 0)}
v(Lh,Ke);function Gh(a,b){this.i=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new xh;G(this.h,2,a);b||(this.locale=document.documentElement.getAttribute("lang"));Hh(this,new me)}
function Hh(a,b){I(a.h,me,1,b);ae(b,1)||G(b,1,1);a.i||(b=Ph(a),ae(b,5)||G(b,5,a.locale));a.uach&&(b=Ph(a),fe(b,rh,9)||I(b,rh,9,a.uach))}
function Qh(a,b){var c=void 0===c?uh:c;b(window,c).then(function(d){a.uach=d;d=Ph(a);I(d,rh,9,a.uach);return!0}).catch(function(){return!1})}
function Ph(a){a=fe(a.h,me,1);var b=fe(a,th,11);b||(b=new th,I(a,th,11,b));return b}
function Nh(a,b,c){c=void 0===c?0:c;a=a.h.clone();var d=Date.now().toString();a=G(a,4,d);b=je(a,vh,3,b);c&&G(b,14,c);return b}
;function Rh(a,b,c){ih(a.url,function(d){d=d.target;if(qh(d)){try{var e=d.F?d.F.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Qc,a.timeoutMillis,a.withCredentials)}
;function Sh(){this.j="https://play.google.com/log?format=json&hasfast=true";this.A=!1;this.m=Rh;this.h=""}
;function Th(){var a=void 0===a?"":a;var b=void 0===b?"":b;var c=new Sh;c.h="";""!=a&&(c.j=a);b&&(c.i=b);a=new Fh(1828,c.R?c.R:Qg,"0",c.m,c.j,c.A,!1,c.aa,void 0,void 0,c.s?c.s:void 0);c.X&&Hh(a.A,c.X);if(c.i){b=c.i;var d=Ph(a.A);G(d,7,b)}c.l&&(a.R=c.l);c.h&&(a.Z=c.h);c.H&&((b=c.H)?(a.m||(a.m=new Rg),b=Ae(b),G(a.m,4,b)):a.m&&G(a.m,4,void 0,!1));c.V&&(d=c.V,a.m||(a.m=new Rg),b=a.m,d=null==d?Sd:Fd(d,1),G(b,2,d));c.L&&(b=c.L,a.Zb=!0,Kh(a,b));c.Z&&Qh(a.A,c.Z);this.h=a}
Th.prototype.flush=function(a){var b=a||[];if(b.length){a=new Cg;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=e,g=new Ag;var h=G(g,1,f.i);var k=f;g=[];for(var m=0;m<k.h.length;m++)g.push(k.h[m].Mb);if(null==g)g=G(h,3,Sd);else{k=E(g);if(!(k&4)){if(k&2||Object.isFrozen(g))g=Array.prototype.slice.call(g);for(m=0;m<g.length;m++)g[m]=g[m];Gd(g,k|5)}g=G(h,3,g)}h=[];k=[];m=r(f.sb.keys());for(var n=m.next();!n.done;n=m.next())k.push(n.value.split(","));for(m=0;m<k.length;m++){n=k[m];var q=f.l;for(var u=
f.Ac(n)||[],t=[],B=0;B<u.length;B++){var D=u[B];D=D&&D.hd;var F=new wg;switch(q){case 3:de(F,1,xg,Number(D));break;case 2:de(F,2,xg,Wd(Number(D)))}t.push(F)}q=t;for(u=0;u<q.length;u++){t=q[u];B=new yg;t=I(B,wg,2,t);B=n;D=[];F=f;for(var M=[],O=0;O<F.h.length;O++)M.push(F.h[O].Nb);F=M;for(M=0;M<F.length;M++){O=F[M];var Q=B[M],ca=new ug;switch(O){case 3:de(ca,1,vg,String(Q));break;case 2:de(ca,2,vg,Number(Q));break;case 1:de(ca,3,vg,"true"==Q)}D.push(ca)}je(t,ug,1,D);h.push(t)}}je(g,yg,4,h);c.push(g);
e.clear()}je(a,Ag,1,c);b=this.h;a instanceof vh?b.log(a):(c=new vh,a=Ae(a),a=G(c,8,a),b.log(a));this.h.flush()}};function Uh(a){this.H=Vh();this.m=new Th;this.h=new hg(this.m);this.s=new ng(this.h);this.j=new og(this.h);this.l=new pg(this.h);this.i=new lg(this.h);this.Oa=rg(a)}
function Vh(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Wh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Xh(a){var b=this;this.i=!1;var c=a.program;var d=a.we;if(a.Pe){var e;this.ra=null!=(e=a.ra)?e:new Uh(d)}var f=new Wh;this.j=f.promise;if(y[d])if(y[d].a){var g;null!=(g=this.ra)&&mg(g.i,g.Oa,3)}else{var h;null!=(h=this.ra)&&mg(h.i,h.Oa,2);var k;null!=(k=this.ra)&&k.h.Fb()}else{var m;null!=(m=this.ra)&&mg(m.i,m.Oa,1);var n;null!=(n=this.ra)&&n.h.Fb()}this.l=r((0,y[d].a)(c,function(q,u){Promise.resolve().then(function(){var t;if(null!=(t=b.ra)){var B=Vh()-t.H;t.s.h.xc("/client_streamz/bg/fil",
B,t.Oa)}f.resolve({de:q,ff:u})})},!0)).next().value;
this.ef=f.promise.then(function(){})}
Xh.prototype.snapshot=function(a){var b=this;if(this.i)throw Error("Already disposed");var c=Vh(),d;null!=(d=this.ra)&&d.j.h.wc("/client_streamz/bg/fsc",d.Oa);return this.j.then(function(e){var f=e.de;return new Promise(function(g){f(function(h){var k;if(null!=(k=b.ra)){var m=Vh()-c;k.l.h.xc("/client_streamz/bg/fsl",m,k.Oa)}g(h)},[a.kd,
a.gf])})})};
Xh.prototype.Nd=function(a){if(this.i)throw Error("Already disposed");var b=Vh(),c;null!=(c=this.ra)&&c.j.h.wc("/client_streamz/bg/fsc",c.Oa);a=this.l([a.kd,a.gf]);null!=(c=this.ra)&&(b=Vh()-b,c.l.h.xc("/client_streamz/bg/fsl",b,c.Oa));return a};
Xh.prototype.dispose=function(){var a;null!=(a=this.ra)&&a.h.Fb();this.i=!0;this.j.then(function(b){(b=b.ff)&&b()})};
Xh.prototype.h=function(){return this.i};var Yh=window;Db("csi.gstatic.com");Db("googleads.g.doubleclick.net");Db("partner.googleadservices.com");Db("pubads.g.doubleclick.net");Db("securepubads.g.doubleclick.net");Db("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var Zh;try{new URL("s://g"),Zh=!0}catch(a){Zh=!1}var $h=Zh;var ai={};function bi(){}
function ci(a){this.h=a}
v(ci,bi);ci.prototype.toString=function(){return this.h};function di(a){var b="true".toString(),c=[new ci(ei[0].toLowerCase(),ai)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ci)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function fi(a){var b,c,d=null==(c=(b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document).querySelector)?void 0:c.call(b,"script[nonce]");(b=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",b)}
function gi(a,b){a.src=Ib(b);fi(a)}
;function hi(a){this.De=a}
function ii(a){return new hi(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ji=[ii("data"),ii("http"),ii("https"),ii("mailto"),ii("ftp"),new hi(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function ki(a){var b=li;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function mi(){var a=[];ki(function(b){a.push(b)});
return a}
var li={Af:"allow-forms",Bf:"allow-modals",Cf:"allow-orientation-lock",Df:"allow-pointer-lock",Ef:"allow-popups",Ff:"allow-popups-to-escape-sandbox",Gf:"allow-presentation",Hf:"allow-same-origin",If:"allow-scripts",Jf:"allow-top-navigation",Kf:"allow-top-navigation-by-user-activation"},ni=eb(function(){return mi()});
function oi(){var a=pi(),b={};gb(ni(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function pi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function qi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ri=(new Date).getTime();var si="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(si);"undefined"!==typeof TextDecoder&&new TextDecoder;var ti="undefined"!==typeof TextEncoder?new TextEncoder:null,ui=ti?function(a){return ti.encode(a)}:function(a){a=Nc(a);
for(var b=new Uint8Array(a.length),c=0;c<b.length;c++)b[c]=a[c];return b};function vi(a){sf.call(this);var b=this;this.A=this.j=0;this.ya=null!=a?a:{fa:function(e,f){return setTimeout(e,f)},
Da:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,wi(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||xi(this)}
v(vi,sf);function yi(){var a=zi;vi.h||(vi.h=new vi(a));return vi.h}
vi.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.ya.Da(this.A);delete vi.h};
vi.prototype.ma=function(){return this.i};
function xi(a){a.A=a.ya.fa(function(){var b;return x(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.v(3):w(c,wi(a),3):w(c,wi(a),3);xi(a);c.h=0})},3E4)}
function wi(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.ya.fa(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Ca(h);a.s=void 0;a.j&&(a.ya.Da(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?tf(a,"networkstatus-online"):tf(a,"networkstatus-offline"));c(g);Da(h);break;case 2:Ba(h),g=!1,h.v(3)}})})}
;function Ai(){this.data_=[];this.h=-1}
Ai.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.h=-1)};
Ai.prototype.get=function(a){return!!this.data_[a]};
function Bi(a){-1===a.h&&(a.h=jb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Ci(a,b){this.h=a[y.Symbol.iterator]();this.i=b}
Ci.prototype[Symbol.iterator]=function(){return this};
Ci.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Di(a,b){return new Ci(a,b)}
;function Ei(){this.blockSize=-1}
;function Fi(){this.blockSize=-1;this.blockSize=64;this.h=[];this.m=[];this.s=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
$a(Fi,Ei);Fi.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Gi(a,b,c){c||(c=0);var d=a.s;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):
(f=c^g^h,m=3395469782);f=(b<<5|b>>>27)+f+k+m+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Fi.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.i;d<b;){if(0==f)for(;d<=c;)Gi(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Gi(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Gi(this,e);f=0;break}}this.i=f;this.l+=b}};
Fi.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;Gi(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Hi(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ii(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Ji(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Hi(a).match(/\S+/g)||[],b=0<=fb(a,b));return b}
function Ki(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Ji(a,"inverted-hdpi")&&Ii(a,Array.prototype.filter.call(a.classList?a.classList:Hi(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Li(){}
Li.prototype.next=function(){return Mi};
var Mi={done:!0,value:void 0};function Ni(a){return{value:a,done:!1}}
Li.prototype.Ca=function(){return this};function Oi(a){if(a instanceof Pi||a instanceof Qi||a instanceof Ri)return a;if("function"==typeof a.next)return new Pi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Pi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Ca)return new Pi(function(){return a.Ca()});
throw Error("Not an iterator or iterable.");}
function Pi(a){this.i=a}
Pi.prototype.Ca=function(){return new Qi(this.i())};
Pi.prototype[Symbol.iterator]=function(){return new Ri(this.i())};
Pi.prototype.h=function(){return new Ri(this.i())};
function Qi(a){this.i=a}
v(Qi,Li);Qi.prototype.next=function(){return this.i.next()};
Qi.prototype[Symbol.iterator]=function(){return new Ri(this.i)};
Qi.prototype.h=function(){return new Ri(this.i)};
function Ri(a){Pi.call(this,function(){return a});
this.j=a}
v(Ri,Pi);Ri.prototype.next=function(){return this.j.next()};function Si(a,b){this.i={};this.h=[];this.Xa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Si)for(c=a.Dc(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
l=Si.prototype;l.Dc=function(){Ti(this);return this.h.concat()};
l.has=function(a){return Ui(this.i,a)};
l.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Vi;Ti(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Vi(a,b){return a===b}
l.Ob=function(){return 0==this.size};
l.clear=function(){this.i={};this.Xa=this.size=this.h.length=0};
l.remove=function(a){return this.delete(a)};
l.delete=function(a){return Ui(this.i,a)?(delete this.i[a],--this.size,this.Xa++,this.h.length>2*this.size&&Ti(this),!0):!1};
function Ti(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Ui(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],Ui(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
l.get=function(a,b){return Ui(this.i,a)?this.i[a]:b};
l.set=function(a,b){Ui(this.i,a)||(this.size+=1,this.h.push(a),this.Xa++);this.i[a]=b};
l.forEach=function(a,b){for(var c=this.Dc(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
l.clone=function(){return new Si(this)};
l.keys=function(){return Oi(this.Ca(!0)).h()};
l.values=function(){return Oi(this.Ca(!1)).h()};
l.entries=function(){var a=this;return Di(this.keys(),function(b){return[b,a.get(b)]})};
l.Ca=function(a){Ti(this);var b=0,c=this.Xa,d=this,e=new Li;e.next=function(){if(c!=d.Xa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Mi;var f=d.h[b++];return Ni(a?f:d.i[f])};
return e};
function Ui(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function Wi(a){K.call(this);this.s=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
$a(Wi,K);l=Wi.prototype;l.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.s;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.s=e+3;d.push(e);return e};
function Xi(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.Gb(b)}}
l.Gb=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&lb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
l.fb=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Yi(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.Gb(c)}}return 0!=e}return!1};
function Yi(a,b,c){Lf(function(){a.apply(b,c)})}
l.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.Gb,this),delete this.j[a])}else this.i.length=0,this.j={}};
l.M=function(){Wi.va.M.call(this);this.clear();this.l.length=0};function Zi(a){this.h=a}
Zi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Ug(b))};
Zi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Zi.prototype.remove=function(a){this.h.remove(a)};function $i(a){this.h=a}
$a($i,Zi);function aj(a){this.data=a}
function bj(a){return void 0===a||a instanceof aj?a:new aj(a)}
$i.prototype.set=function(a,b){$i.va.set.call(this,a,bj(b))};
$i.prototype.i=function(a){a=$i.va.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
$i.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function cj(a){this.h=a}
$a(cj,$i);cj.prototype.set=function(a,b,c){if(b=bj(b)){if(c){if(c<Date.now()){cj.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}cj.va.set.call(this,a,b)};
cj.prototype.i=function(a){var b=cj.va.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())cj.prototype.remove.call(this,a);else return b}};function dj(){}
;function ej(){}
$a(ej,dj);ej.prototype[Symbol.iterator]=function(){return Oi(this.Ca(!0)).h()};
ej.prototype.clear=function(){var a=Array.from(this);a=r(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function fj(a){this.h=a}
$a(fj,ej);l=fj.prototype;l.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
l.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
l.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeItem(a)};
l.Ca=function(a){var b=0,c=this.h,d=new Li;d.next=function(){if(b>=c.length)return Mi;var e=c.key(b++);if(a)return Ni(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ni(e)};
return d};
l.clear=function(){this.h.clear()};
l.key=function(a){return this.h.key(a)};function gj(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
$a(gj,fj);function hj(a,b){this.i=a;this.h=null;var c;if(c=Xc)c=!(9<=Number(jd));if(c){ij||(ij=new Si);this.h=ij.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),ij.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
$a(hj,ej);var jj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ij=null;function kj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return jj[b]})}
l=hj.prototype;l.isAvailable=function(){return!!this.h};
l.set=function(a,b){this.h.setAttribute(kj(a),b);lj(this)};
l.get=function(a){a=this.h.getAttribute(kj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
l.remove=function(a){this.h.removeAttribute(kj(a));lj(this)};
l.Ca=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Li;d.next=function(){if(b>=c.length)return Mi;var e=c[b++];if(a)return Ni(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ni(e)};
return d};
l.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);lj(this)};
function lj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function mj(a,b){this.i=a;this.h=b+"::"}
$a(mj,ej);mj.prototype.set=function(a,b){this.i.set(this.h+a,b)};
mj.prototype.get=function(a){return this.i.get(this.h+a)};
mj.prototype.remove=function(a){this.i.remove(this.h+a)};
mj.prototype.Ca=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Li;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ni(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var L={},nj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;L.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
L.Tc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var oj={rb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
pd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},pj={rb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
pd:function(a){return[].concat.apply([],a)}};
L.df=function(){nj?(L.eb=Uint8Array,L.Ga=Uint16Array,L.Wd=Int32Array,L.assign(L,oj)):(L.eb=Array,L.Ga=Array,L.Wd=Array,L.assign(L,pj))};
L.df();var qj=!0;try{new Uint8Array(1)}catch(a){qj=!1}for(var rj=new L.eb(256),sj=0;256>sj;sj++)rj[sj]=252<=sj?6:248<=sj?5:240<=sj?4:224<=sj?3:192<=sj?2:1;rj[254]=rj[254]=1;
function tj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new L.eb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var uj={};uj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var vj={},wj,xj=[],yj=0;256>yj;yj++){wj=yj;for(var zj=0;8>zj;zj++)wj=wj&1?3988292384^wj>>>1:wj>>>1;xj[yj]=wj}vj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^xj[(a^b[d])&255];return a^-1};var Aj={};Aj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Bj(a){for(var b=a.length;0<=--b;)a[b]=0}
var Cj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Dj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ej=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Fj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Gj=Array(576);Bj(Gj);var Hj=Array(60);Bj(Hj);var Ij=Array(512);Bj(Ij);var Jj=Array(256);Bj(Jj);var Kj=Array(29);Bj(Kj);var Lj=Array(30);Bj(Lj);function Mj(a,b,c,d,e){this.Od=a;this.qe=b;this.pe=c;this.le=d;this.He=e;this.td=a&&a.length}
var Nj,Oj,Pj;function Qj(a,b){this.nd=a;this.yb=0;this.Wa=b}
function Rj(a,b){a.S[a.pending++]=b&255;a.S[a.pending++]=b>>>8&255}
function Sj(a,b,c){a.ba>16-c?(a.ha|=b<<a.ba&65535,Rj(a,a.ha),a.ha=b>>16-a.ba,a.ba+=c-16):(a.ha|=b<<a.ba&65535,a.ba+=c)}
function Tj(a,b,c){Sj(a,c[2*b],c[2*b+1])}
function Uj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Vj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Uj(d[e]++,e))}
function Wj(a){var b;for(b=0;286>b;b++)a.ja[2*b]=0;for(b=0;30>b;b++)a.ib[2*b]=0;for(b=0;19>b;b++)a.ca[2*b]=0;a.ja[512]=1;a.Na=a.Bb=0;a.sa=a.matches=0}
function Xj(a){8<a.ba?Rj(a,a.ha):0<a.ba&&(a.S[a.pending++]=a.ha);a.ha=0;a.ba=0}
function Yj(a,b,c){Xj(a);Rj(a,c);Rj(a,~c);L.rb(a.S,a.window,b,c,a.pending);a.pending+=c}
function Zj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ak(a,b,c){for(var d=a.U[c],e=c<<1;e<=a.Ka;){e<a.Ka&&Zj(b,a.U[e+1],a.U[e],a.depth)&&e++;if(Zj(b,d,a.U[e],a.depth))break;a.U[c]=a.U[e];c=e;e<<=1}a.U[c]=d}
function bk(a,b,c){var d=0;if(0!==a.sa){do{var e=a.S[a.Jb+2*d]<<8|a.S[a.Jb+2*d+1];var f=a.S[a.Ic+d];d++;if(0===e)Tj(a,f,b);else{var g=Jj[f];Tj(a,g+256+1,b);var h=Cj[g];0!==h&&(f-=Kj[g],Sj(a,f,h));e--;g=256>e?Ij[e]:Ij[256+(e>>>7)];Tj(a,g,c);h=Dj[g];0!==h&&(e-=Lj[g],Sj(a,e,h))}}while(d<a.sa)}Tj(a,256,b)}
function ck(a,b){var c=b.nd,d=b.Wa.Od,e=b.Wa.td,f=b.Wa.le,g,h=-1;a.Ka=0;a.vb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.U[++a.Ka]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.Ka;){var k=a.U[++a.Ka]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.Bb-=d[2*k+1])}b.yb=h;for(g=a.Ka>>1;1<=g;g--)ak(a,c,g);k=f;do g=a.U[1],a.U[1]=a.U[a.Ka--],ak(a,c,1),d=a.U[1],a.U[--a.vb]=g,a.U[--a.vb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.U[1]=k++,ak(a,c,1);while(2<=a.Ka);a.U[--a.vb]=
a.U[1];g=b.nd;k=b.yb;d=b.Wa.Od;e=b.Wa.td;f=b.Wa.qe;var m=b.Wa.pe,n=b.Wa.He,q,u=0;for(q=0;15>=q;q++)a.Ha[q]=0;g[2*a.U[a.vb]+1]=0;for(b=a.vb+1;573>b;b++){var t=a.U[b];q=g[2*g[2*t+1]+1]+1;q>n&&(q=n,u++);g[2*t+1]=q;if(!(t>k)){a.Ha[q]++;var B=0;t>=m&&(B=f[t-m]);var D=g[2*t];a.Na+=D*(q+B);e&&(a.Bb+=D*(d[2*t+1]+B))}}if(0!==u){do{for(q=n-1;0===a.Ha[q];)q--;a.Ha[q]--;a.Ha[q+1]+=2;a.Ha[n]--;u-=2}while(0<u);for(q=n;0!==q;q--)for(t=a.Ha[q];0!==t;)d=a.U[--b],d>k||(g[2*d+1]!==q&&(a.Na+=(q-g[2*d+1])*g[2*d],g[2*
d+1]=q),t--)}Vj(c,h,a.Ha)}
function dk(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];++g<h&&m===f||(g<k?a.ca[2*m]+=g:0!==m?(m!==e&&a.ca[2*m]++,a.ca[32]++):10>=g?a.ca[34]++:a.ca[36]++,g=0,e=m,0===f?(h=138,k=3):m===f?(h=6,k=3):(h=7,k=4))}}
function ek(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var m=f;f=b[2*(d+1)+1];if(!(++g<h&&m===f)){if(g<k){do Tj(a,m,a.ca);while(0!==--g)}else 0!==m?(m!==e&&(Tj(a,m,a.ca),g--),Tj(a,16,a.ca),Sj(a,g-3,2)):10>=g?(Tj(a,17,a.ca),Sj(a,g-3,3)):(Tj(a,18,a.ca),Sj(a,g-11,7));g=0;e=m;0===f?(h=138,k=3):m===f?(h=6,k=3):(h=7,k=4)}}}
function fk(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.ja[2*c])return 0;if(0!==a.ja[18]||0!==a.ja[20]||0!==a.ja[26])return 1;for(c=32;256>c;c++)if(0!==a.ja[2*c])return 1;return 0}
var gk=!1;function hk(a,b,c){a.S[a.Jb+2*a.sa]=b>>>8&255;a.S[a.Jb+2*a.sa+1]=b&255;a.S[a.Ic+a.sa]=c&255;a.sa++;0===b?a.ja[2*c]++:(a.matches++,b--,a.ja[2*(Jj[c]+256+1)]++,a.ib[2*(256>b?Ij[b]:Ij[256+(b>>>7)])]++);return a.sa===a.Pb-1}
;function ik(a,b){a.msg=Aj[b];return b}
function jk(a){for(var b=a.length;0<=--b;)a[b]=0}
function kk(a){var b=a.state,c=b.pending;c>a.I&&(c=a.I);0!==c&&(L.rb(a.Qb,b.S,b.Rb,c,a.zb),a.zb+=c,b.Rb+=c,a.Uc+=c,a.I-=c,b.pending-=c,0===b.pending&&(b.Rb=0))}
function lk(a,b){var c=0<=a.la?a.la:-1,d=a.o-a.la,e=0;if(0<a.level){2===a.D.yc&&(a.D.yc=fk(a));ck(a,a.mc);ck(a,a.ic);dk(a,a.ja,a.mc.yb);dk(a,a.ib,a.ic.yb);ck(a,a.ed);for(e=18;3<=e&&0===a.ca[2*Fj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.Bb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Sj(a,b?1:0,3),Yj(a,c,d);else if(4===a.strategy||g===f)Sj(a,2+(b?1:0),3),bk(a,Gj,Hj);else{Sj(a,4+(b?1:0),3);c=a.mc.yb+1;d=a.ic.yb+1;e+=1;Sj(a,c-257,5);Sj(a,d-1,5);Sj(a,e-4,4);for(f=0;f<e;f++)Sj(a,a.ca[2*
Fj[f]+1],3);ek(a,a.ja,c-1);ek(a,a.ib,d-1);bk(a,a.ja,a.ib)}Wj(a);b&&Xj(a);a.la=a.o;kk(a.D)}
function N(a,b){a.S[a.pending++]=b}
function mk(a,b){a.S[a.pending++]=b>>>8&255;a.S[a.pending++]=b&255}
function nk(a,b){var c=a.zd,d=a.o,e=a.na,f=a.Bd,g=a.o>a.ea-262?a.o-(a.ea-262):0,h=a.window,k=a.Ya,m=a.Fa,n=a.o+258,q=h[d+e-1],u=h[d+e];a.na>=a.sd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===u&&h[t+e-1]===q&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.xb=b;e=t;if(t>=f)break;q=h[d+e-1];u=h[d+e]}}}while((b=m[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function ok(a){var b=a.ea,c;do{var d=a.Ud-a.u-a.o;if(a.o>=b+(b-262)){L.rb(a.window,a.window,b,b,0);a.xb-=b;a.o-=b;a.la-=b;var e=c=a.lc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Fa[--e],a.Fa[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.D.ga)break;e=a.D;c=a.window;f=a.o+a.u;var g=e.ga;g>d&&(g=d);0===g?c=0:(e.ga-=g,L.rb(c,e.input,e.lb,g,f),1===e.state.wrap?e.C=uj(e.C,c,g,f):2===e.state.wrap&&(e.C=vj(e.C,c,g,f)),e.lb+=g,e.ob+=g,c=g);a.u+=c;if(3<=a.u+a.ka)for(d=a.o-a.ka,a.G=a.window[d],
a.G=(a.G<<a.Ja^a.window[d+1])&a.Ia;a.ka&&!(a.G=(a.G<<a.Ja^a.window[d+3-1])&a.Ia,a.Fa[d&a.Ya]=a.head[a.G],a.head[a.G]=d,d++,a.ka--,3>a.u+a.ka););}while(262>a.u&&0!==a.D.ga)}
function pk(a,b){for(var c;;){if(262>a.u){ok(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);0!==c&&a.o-c<=a.ea-262&&(a.J=nk(a,c));if(3<=a.J)if(c=hk(a,a.o-a.xb,a.J-3),a.u-=a.J,a.J<=a.Jc&&3<=a.u){a.J--;do a.o++,a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o;while(0!==--a.J);a.o++}else a.o+=a.J,a.J=0,a.G=a.window[a.o],a.G=(a.G<<a.Ja^a.window[a.o+1])&a.Ia;else c=hk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(lk(a,!1),0===a.D.I))return 1}a.ka=2>a.o?a.o:2;return 4===b?(lk(a,!0),0===a.D.I?3:4):a.sa&&(lk(a,!1),0===a.D.I)?1:2}
function qk(a,b){for(var c,d;;){if(262>a.u){ok(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,c=a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);a.na=a.J;a.Ed=a.xb;a.J=2;0!==c&&a.na<a.Jc&&a.o-c<=a.ea-262&&(a.J=nk(a,c),5>=a.J&&(1===a.strategy||3===a.J&&4096<a.o-a.xb)&&(a.J=2));if(3<=a.na&&a.J<=a.na){d=a.o+a.u-3;c=hk(a,a.o-1-a.Ed,a.na-3);a.u-=a.na-1;a.na-=2;do++a.o<=d&&(a.G=(a.G<<a.Ja^a.window[a.o+3-1])&a.Ia,a.Fa[a.o&a.Ya]=a.head[a.G],a.head[a.G]=a.o);
while(0!==--a.na);a.jb=0;a.J=2;a.o++;if(c&&(lk(a,!1),0===a.D.I))return 1}else if(a.jb){if((c=hk(a,0,a.window[a.o-1]))&&lk(a,!1),a.o++,a.u--,0===a.D.I)return 1}else a.jb=1,a.o++,a.u--}a.jb&&(hk(a,0,a.window[a.o-1]),a.jb=0);a.ka=2>a.o?a.o:2;return 4===b?(lk(a,!0),0===a.D.I?3:4):a.sa&&(lk(a,!1),0===a.D.I)?1:2}
function rk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){ok(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.J=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.J=258-(e-d);a.J>a.u&&(a.J=a.u)}3<=a.J?(c=hk(a,1,a.J-3),a.u-=a.J,a.o+=a.J,a.J=0):(c=hk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(lk(a,!1),0===a.D.I))return 1}a.ka=0;return 4===b?(lk(a,!0),0===a.D.I?3:4):
a.sa&&(lk(a,!1),0===a.D.I)?1:2}
function sk(a,b){for(var c;;){if(0===a.u&&(ok(a),0===a.u)){if(0===b)return 1;break}a.J=0;c=hk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(lk(a,!1),0===a.D.I))return 1}a.ka=0;return 4===b?(lk(a,!0),0===a.D.I?3:4):a.sa&&(lk(a,!1),0===a.D.I)?1:2}
function tk(a,b,c,d,e){this.xe=a;this.Ge=b;this.Ke=c;this.Fe=d;this.se=e}
var uk;uk=[new tk(0,0,0,0,function(a,b){var c=65535;for(c>a.ta-5&&(c=a.ta-5);;){if(1>=a.u){ok(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.la+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,lk(a,!1),0===a.D.I)return 1;if(a.o-a.la>=a.ea-262&&(lk(a,!1),0===a.D.I))return 1}a.ka=0;if(4===b)return lk(a,!0),0===a.D.I?3:4;a.o>a.la&&lk(a,!1);return 1}),
new tk(4,4,8,4,pk),new tk(4,5,16,8,pk),new tk(4,6,32,32,pk),new tk(4,4,16,16,qk),new tk(8,16,32,32,qk),new tk(8,16,128,128,qk),new tk(8,32,128,256,qk),new tk(32,128,258,1024,qk),new tk(32,258,258,4096,qk)];
function vk(){this.D=null;this.status=0;this.S=null;this.wrap=this.pending=this.Rb=this.ta=0;this.B=null;this.wa=0;this.method=8;this.wb=-1;this.Ya=this.Wc=this.ea=0;this.window=null;this.Ud=0;this.head=this.Fa=null;this.Bd=this.sd=this.strategy=this.level=this.Jc=this.zd=this.na=this.u=this.xb=this.o=this.jb=this.Ed=this.J=this.la=this.Ja=this.Ia=this.Ec=this.lc=this.G=0;this.ja=new L.Ga(1146);this.ib=new L.Ga(122);this.ca=new L.Ga(78);jk(this.ja);jk(this.ib);jk(this.ca);this.ed=this.ic=this.mc=
null;this.Ha=new L.Ga(16);this.U=new L.Ga(573);jk(this.U);this.vb=this.Ka=0;this.depth=new L.Ga(573);jk(this.depth);this.ba=this.ha=this.ka=this.matches=this.Bb=this.Na=this.Jb=this.sa=this.Pb=this.Ic=0}
function wk(a,b){if(!a||!a.state||5<b||0>b)return a?ik(a,-2):-2;var c=a.state;if(!a.Qb||!a.input&&0!==a.ga||666===c.status&&4!==b)return ik(a,0===a.I?-5:-2);c.D=a;var d=c.wb;c.wb=b;if(42===c.status)if(2===c.wrap)a.C=0,N(c,31),N(c,139),N(c,8),c.B?(N(c,(c.B.text?1:0)+(c.B.Ta?2:0)+(c.B.Sa?4:0)+(c.B.name?8:0)+(c.B.comment?16:0)),N(c,c.B.time&255),N(c,c.B.time>>8&255),N(c,c.B.time>>16&255),N(c,c.B.time>>24&255),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,c.B.os&255),c.B.Sa&&c.B.Sa.length&&(N(c,
c.B.Sa.length&255),N(c,c.B.Sa.length>>8&255)),c.B.Ta&&(a.C=vj(a.C,c.S,c.pending,0)),c.wa=0,c.status=69):(N(c,0),N(c,0),N(c,0),N(c,0),N(c,0),N(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),N(c,3),c.status=113);else{var e=8+(c.Wc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;mk(c,e+(31-e%31));0!==c.o&&(mk(c,a.C>>>16),mk(c,a.C&65535));a.C=1}if(69===c.status)if(c.B.Sa){for(e=c.pending;c.wa<(c.B.Sa.length&65535)&&(c.pending!==c.ta||(c.B.Ta&&c.pending>
e&&(a.C=vj(a.C,c.S,c.pending-e,e)),kk(a),e=c.pending,c.pending!==c.ta));)N(c,c.B.Sa[c.wa]&255),c.wa++;c.B.Ta&&c.pending>e&&(a.C=vj(a.C,c.S,c.pending-e,e));c.wa===c.B.Sa.length&&(c.wa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.B.name){e=c.pending;do{if(c.pending===c.ta&&(c.B.Ta&&c.pending>e&&(a.C=vj(a.C,c.S,c.pending-e,e)),kk(a),e=c.pending,c.pending===c.ta)){var f=1;break}f=c.wa<c.B.name.length?c.B.name.charCodeAt(c.wa++)&255:0;N(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.C=vj(a.C,c.S,c.pending-
e,e));0===f&&(c.wa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.B.comment){e=c.pending;do{if(c.pending===c.ta&&(c.B.Ta&&c.pending>e&&(a.C=vj(a.C,c.S,c.pending-e,e)),kk(a),e=c.pending,c.pending===c.ta)){f=1;break}f=c.wa<c.B.comment.length?c.B.comment.charCodeAt(c.wa++)&255:0;N(c,f)}while(0!==f);c.B.Ta&&c.pending>e&&(a.C=vj(a.C,c.S,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.B.Ta?(c.pending+2>c.ta&&kk(a),c.pending+2<=c.ta&&(N(c,a.C&255),N(c,a.C>>8&255),a.C=0,
c.status=113)):c.status=113);if(0!==c.pending){if(kk(a),0===a.I)return c.wb=-1,0}else if(0===a.ga&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ik(a,-5);if(666===c.status&&0!==a.ga)return ik(a,-5);if(0!==a.ga||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?sk(c,b):3===c.strategy?rk(c,b):uk[c.level].se(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.I&&(c.wb=-1),0;if(2===d&&(1===b?(Sj(c,2,3),Tj(c,256,Gj),16===c.ba?(Rj(c,c.ha),c.ha=0,c.ba=0):8<=c.ba&&(c.S[c.pending++]=c.ha&255,
c.ha>>=8,c.ba-=8)):5!==b&&(Sj(c,0,3),Yj(c,0,0),3===b&&(jk(c.head),0===c.u&&(c.o=0,c.la=0,c.ka=0))),kk(a),0===a.I))return c.wb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(N(c,a.C&255),N(c,a.C>>8&255),N(c,a.C>>16&255),N(c,a.C>>24&255),N(c,a.ob&255),N(c,a.ob>>8&255),N(c,a.ob>>16&255),N(c,a.ob>>24&255)):(mk(c,a.C>>>16),mk(c,a.C&65535));kk(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var xk={};xk=function(){this.input=null;this.ob=this.ga=this.lb=0;this.Qb=null;this.Uc=this.I=this.zb=0;this.msg="";this.state=null;this.yc=2;this.C=0};var yk=Object.prototype.toString;
function zk(a){if(!(this instanceof zk))return new zk(a);a=this.options=L.assign({level:-1,method:8,chunkSize:16384,Za:15,Ie:8,strategy:0,K:""},a||{});a.raw&&0<a.Za?a.Za=-a.Za:a.ye&&0<a.Za&&16>a.Za&&(a.Za+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.D=new xk;this.D.I=0;var b=this.D;var c=a.level,d=a.method,e=a.Za,f=a.Ie,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ik(b,-2);else{8===e&&(e=9);var k=new vk;
b.state=k;k.D=b;k.wrap=h;k.B=null;k.Wc=e;k.ea=1<<k.Wc;k.Ya=k.ea-1;k.Ec=f+7;k.lc=1<<k.Ec;k.Ia=k.lc-1;k.Ja=~~((k.Ec+3-1)/3);k.window=new L.eb(2*k.ea);k.head=new L.Ga(k.lc);k.Fa=new L.Ga(k.ea);k.Pb=1<<f+6;k.ta=4*k.Pb;k.S=new L.eb(k.ta);k.Jb=1*k.Pb;k.Ic=3*k.Pb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ob=b.Uc=0;b.yc=2;c=b.state;c.pending=0;c.Rb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.C=2===c.wrap?0:1;c.wb=0;if(!gk){d=Array(16);for(f=g=0;28>f;f++)for(Kj[f]=g,e=0;e<1<<Cj[f];e++)Jj[g++]=
f;Jj[g-1]=f;for(f=g=0;16>f;f++)for(Lj[f]=g,e=0;e<1<<Dj[f];e++)Ij[g++]=f;for(g>>=7;30>f;f++)for(Lj[f]=g<<7,e=0;e<1<<Dj[f]-7;e++)Ij[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Gj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Gj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Gj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Gj[2*e+1]=8,e++,d[8]++;Vj(Gj,287,d);for(e=0;30>e;e++)Hj[2*e+1]=5,Hj[2*e]=Uj(e,5);Nj=new Mj(Gj,Cj,257,286,15);Oj=new Mj(Hj,Dj,0,30,15);Pj=new Mj([],Ej,0,19,7);gk=!0}c.mc=new Qj(c.ja,Nj);c.ic=new Qj(c.ib,Oj);c.ed=
new Qj(c.ca,Pj);c.ha=0;c.ba=0;Wj(c);c=0}else c=ik(b,-2);0===c&&(b=b.state,b.Ud=2*b.ea,jk(b.head),b.Jc=uk[b.level].Ge,b.sd=uk[b.level].xe,b.Bd=uk[b.level].Ke,b.zd=uk[b.level].Fe,b.o=0,b.la=0,b.u=0,b.ka=0,b.J=b.na=2,b.jb=0,b.G=0);b=c}}else b=-2;if(0!==b)throw Error(Aj[b]);a.header&&(b=this.D)&&b.state&&2===b.state.wrap&&(b.state.B=a.header);if(a.Kb){var m;"string"===typeof a.Kb?m=tj(a.Kb):"[object ArrayBuffer]"===yk.call(a.Kb)?m=new Uint8Array(a.Kb):m=a.Kb;a=this.D;f=m;g=f.length;if(a&&a.state)if(m=
a.state,b=m.wrap,2===b||1===b&&42!==m.status||m.u)b=-2;else{1===b&&(a.C=uj(a.C,f,g,0));m.wrap=0;g>=m.ea&&(0===b&&(jk(m.head),m.o=0,m.la=0,m.ka=0),c=new L.eb(m.ea),L.rb(c,f,g-m.ea,m.ea,0),f=c,g=m.ea);c=a.ga;d=a.lb;e=a.input;a.ga=g;a.lb=0;a.input=f;for(ok(m);3<=m.u;){f=m.o;g=m.u-2;do m.G=(m.G<<m.Ja^m.window[f+3-1])&m.Ia,m.Fa[f&m.Ya]=m.head[m.G],m.head[m.G]=f,f++;while(--g);m.o=f;m.u=2;ok(m)}m.o+=m.u;m.la=m.o;m.ka=m.u;m.u=0;m.J=m.na=2;m.jb=0;a.lb=d;a.input=e;a.ga=c;m.wrap=b;b=0}else b=-2;if(0!==b)throw Error(Aj[b]);
this.Bt=!0}}
zk.prototype.push=function(a,b){var c=this.D,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=tj(a):"[object ArrayBuffer]"===yk.call(a)?c.input=new Uint8Array(a):c.input=a;c.lb=0;c.ga=c.input.length;do{0===c.I&&(c.Qb=new L.eb(d),c.zb=0,c.I=d);a=wk(c,e);if(1!==a&&0!==a)return Ak(this,a),this.ended=!0,!1;if(0===c.I||0===c.ga&&(4===e||2===e))if("string"===this.options.K){var f=L.Tc(c.Qb,c.zb);b=f;f=f.length;if(65537>f&&(b.subarray&&qj||!b.subarray))b=
String.fromCharCode.apply(null,L.Tc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=L.Tc(c.Qb,c.zb),this.chunks.push(b)}while((0<c.ga||0===c.I)&&1!==a);if(4===e)return(c=this.D)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ik(c,-2):(c.state=null,a=113===d?ik(c,-3):0)):a=-2,Ak(this,a),this.ended=!0,0===a;2===e&&(Ak(this,0),c.I=0);return!0};
function Ak(a,b){0===b&&(a.result="string"===a.options.K?a.chunks.join(""):L.pd(a.chunks));a.chunks=[];a.err=b;a.msg=a.D.msg}
function Bk(a){var b=b||{};b.ye=!0;b=new zk(b);b.push(a,!0);if(b.err)throw b.msg||Aj[b.err];return b.result}
;function Ck(a){return Jb(null===a?"null":void 0===a?"undefined":a)}
;function Dk(a){this.name=a}
;var Ek=new Dk("rawColdConfigGroup");var Fk=new Dk("rawHotConfigGroup");function Gk(a){J.call(this,a)}
v(Gk,J);function Hk(a,b){return G(a,1,b)}
;function Ik(a){J.call(this,a,-1,Jk)}
v(Ik,J);var Jk=[1];function Kk(a){J.call(this,a)}
v(Kk,J);function Lk(a){J.call(this,a)}
v(Lk,J);function Mk(a){J.call(this,a)}
v(Mk,J);function Nk(a){J.call(this,a,-1,Ok)}
v(Nk,J);var Ok=[2];function Pk(a){J.call(this,a,-1,Qk)}
v(Pk,J);Pk.prototype.getPlayerType=function(){return ae(this,36)};
Pk.prototype.setHomeGroupInfo=function(a){return I(this,Nk,81,a)};
Pk.prototype.clearLocationPlayabilityToken=function(){return G(this,89,void 0,!1)};
var Qk=[9,66,24,32,86,100,101];function Rk(a){J.call(this,a)}
v(Rk,J);Rk.prototype.getKey=function(){return oe(this,1)};
Rk.prototype.getValue=function(){return oe(this,2===ee(this,Sk)?2:-1)};
var Sk=[2,3,4,5,6];function Tk(a){J.call(this,a,-1,Uk)}
v(Tk,J);var Uk=[15,26,28];function Vk(a){J.call(this,a,-1,Wk)}
v(Vk,J);var Wk=[5];function Xk(a){J.call(this,a)}
v(Xk,J);function Yk(a){J.call(this,a,-1,Zk)}
v(Yk,J);Yk.prototype.setSafetyMode=function(a){return G(this,5,a)};
var Zk=[12];function $k(a){J.call(this,a,-1,al)}
v($k,J);$k.prototype.l=function(a){return I(this,Pk,1,a)};
var al=[12];var bl=new Dk("continuationCommand");var cl=new Dk("webCommandMetadata");var dl=new Dk("signalServiceEndpoint");var el={rk:"EMBEDDED_PLAYER_MODE_UNKNOWN",nk:"EMBEDDED_PLAYER_MODE_DEFAULT",qk:"EMBEDDED_PLAYER_MODE_PFP",pk:"EMBEDDED_PLAYER_MODE_PFL"};var fl=new Dk("feedbackEndpoint");var Al={Xs:"WEB_DISPLAY_MODE_UNKNOWN",Ts:"WEB_DISPLAY_MODE_BROWSER",Vs:"WEB_DISPLAY_MODE_MINIMAL_UI",Ws:"WEB_DISPLAY_MODE_STANDALONE",Us:"WEB_DISPLAY_MODE_FULLSCREEN"};function Bl(a){J.call(this,a)}
v(Bl,J);Bl.prototype.getKey=function(){return oe(this,1)};
Bl.prototype.getValue=function(){return oe(this,2)};function Cl(a){J.call(this,a,-1,Dl)}
v(Cl,J);var Dl=[4,5];function El(a){J.call(this,a)}
v(El,J);function Fl(a){J.call(this,a)}
v(Fl,J);var Gl=[2,3,4];function Hl(a){J.call(this,a)}
v(Hl,J);Hl.prototype.getMessage=function(){return oe(this,1)};function Il(a){J.call(this,a)}
v(Il,J);function Jl(a){J.call(this,a)}
v(Jl,J);function Kl(a){J.call(this,a,-1,Ll)}
v(Kl,J);var Ll=[10,17];function Ml(a){J.call(this,a)}
v(Ml,J);function Nl(a){J.call(this,a)}
v(Nl,J);function Ol(a){J.call(this,a)}
v(Ol,J);function Pl(a){J.call(this,a)}
v(Pl,J);function Ql(a){J.call(this,a)}
v(Ql,J);function Rl(a){J.call(this,a,-1,Sl)}
v(Rl,J);Rl.prototype.getVideoData=function(){return fe(this,Ql,15)};
var Sl=[4];function Tl(a){J.call(this,a)}
v(Tl,J);function Ul(a,b){I(a,Ol,1,b)}
;function Vl(a){J.call(this,a)}
v(Vl,J);function Wl(a,b){return I(a,Ol,1,b)}
Vl.prototype.h=function(a){return G(this,2,a)};function Xl(a){J.call(this,a,-1,Yl)}
v(Xl,J);Xl.prototype.h=function(a){return G(this,1,a)};
function Zl(a,b){return I(a,Ol,2,b)}
var Yl=[3];function $l(a){J.call(this,a)}
v($l,J);$l.prototype.h=function(a){return G(this,1,a)};function am(a){J.call(this,a)}
v(am,J);am.prototype.h=function(a){return G(this,1,a)};function bm(a){J.call(this,a)}
v(bm,J);bm.prototype.h=function(a){return G(this,1,a)};function cm(a){J.call(this,a)}
v(cm,J);cm.prototype.h=function(a){return G(this,1,a)};function dm(a){J.call(this,a)}
v(dm,J);function em(a){J.call(this,a)}
v(em,J);function fm(a){var b=new em;return G(b,1,a)}
em.prototype.getId=function(){return oe(this,2)};
function gm(a,b){return G(a,2,b)}
;function hm(a){J.call(this,a)}
v(hm,J);function im(a){J.call(this,a,-1,jm)}
v(im,J);im.prototype.getPlayerType=function(){return ne(ae(this,7),0)};
im.prototype.setVideoId=function(a){return G(this,19,a)};
function km(a,b){ke(a,68,em,b)}
var jm=[83,68];function lm(a){J.call(this,a)}
v(lm,J);function mm(a){J.call(this,a)}
v(mm,J);function nm(a){J.call(this,a)}
v(nm,J);function om(a){J.call(this,a,459)}
v(om,J);
var pm=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458];var qm={xl:0,bl:1,ll:2,ml:4,sl:8,nl:16,ol:32,wl:64,vl:128,fl:256,jl:512,ql:1024,il:2048,kl:4096,dl:8192,pl:16384,ul:32768,rl:65536};function rm(a){J.call(this,a)}
v(rm,J);function sm(a){J.call(this,a)}
v(sm,J);sm.prototype.setVideoId=function(a){return de(this,1,tm,a)};
sm.prototype.getPlaylistId=function(){var a=2===ee(this,tm)?2:-1;return ae(this,a)};
var tm=[1,2];function um(a){J.call(this,a,-1,vm)}
v(um,J);var vm=[3];var wm=new Dk("webPlayerShareEntityServiceEndpoint");var xm=new Dk("playlistEditEndpoint");var ym=new Dk("modifyChannelNotificationPreferenceEndpoint");var zm=new Dk("unsubscribeEndpoint");var Am=new Dk("subscribeEndpoint");function Bm(){var a=Cm;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a)}
function Dm(a){z("yt.ads.biscotti.lastId_",a)}
;function Em(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Fm=y.window,Gm,Hm,Im=(null==Fm?void 0:null==(Gm=Fm.yt)?void 0:Gm.config_)||(null==Fm?void 0:null==(Hm=Fm.ytcfg)?void 0:Hm.data_)||{};z("yt.config_",Im);function Jm(){Em(Im,arguments)}
function P(a,b){return a in Im?Im[a]:b}
function Km(){var a=Im.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Lm=[];function Mm(a){Lm.forEach(function(b){return b(a)})}
function Nm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Om(b)}}:a}
function Om(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=P("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Jm("ERRORS",e));Mm(a)}
function Pm(a,b,c,d){var e=A("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=P("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Jm("ERRORS",e))}
;var Qm=/^[\w.]*$/,Rm={q:!0,search_query:!0};function Sm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Tm(f[0]||""),h=Tm(f[1]||"");g in c?Array.isArray(c[g])?mb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,m=f[0],n=String(Sm);k.args=[{key:m,value:f[1],query:a,method:Um==n?"unchanged":n}];Rm.hasOwnProperty(m)||Pm(k)}}return c}
var Um=String(Sm);function Vm(a){var b=[];nb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];gb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Wm(a){"?"==a.charAt(0)&&(a=a.substr(1));return Sm(a,"&")}
function Xm(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Wm(1<a.length?a[1]:a[0])):{}}
function Ym(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Wm(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return Gc(a,e)+d}
function Zm(a){if(!b)var b=window.location.href;var c=yc(1,a),d=zc(a);c&&d?(a=a.match(wc),b=b.match(wc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?zc(b)==d&&(Number(yc(4,b))||null)==(Number(yc(4,a))||null):!0;return a}
function Tm(a){return a&&a.match(Qm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function $m(a){var b=an;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ri;e.flash="0";a:{try{var f=b.h.top.location.href}catch(ja){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Yh:g;try{var h=g.history.length}catch(ja){h=0}e.u_his=h;var k;e.u_h=null==(k=Yh.screen)?void 0:k.height;var m;e.u_w=null==(m=Yh.screen)?void 0:m.width;var n;e.u_ah=null==(n=Yh.screen)?void 0:n.availHeight;var q;e.u_aw=
null==(q=Yh.screen)?void 0:q.availWidth;var u;e.u_cd=null==(u=Yh.screen)?void 0:u.colorDepth}catch(ja){}h=b.h;try{var t=h.screenX;var B=h.screenY}catch(ja){}try{var D=h.outerWidth;var F=h.outerHeight}catch(ja){}try{var M=h.innerWidth;var O=h.innerHeight}catch(ja){}try{var Q=h.screenLeft;var ca=h.screenTop}catch(ja){}try{M=h.innerWidth,O=h.innerHeight}catch(ja){}try{var X=h.screen.availWidth;var wb=h.screen.availTop}catch(ja){}t=[Q,ca,t,B,X,wb,D,F,M,O];try{var Za=(b.h.top||window).document,sa="CSS1Compat"==
Za.compatMode?Za.documentElement:Za.body;var H=(new zf(sa.clientWidth,sa.clientHeight)).round()}catch(ja){H=new zf(-12245933,-12245933)}Za=H;H={};var oa=void 0===oa?y:oa;sa=new Ai;oa.SVGElement&&oa.document.createElementNS&&sa.set(0);B=oi();B["allow-top-navigation-by-user-activation"]&&sa.set(1);B["allow-popups-to-escape-sandbox"]&&sa.set(2);oa.crypto&&oa.crypto.subtle&&sa.set(3);oa.TextDecoder&&oa.TextEncoder&&sa.set(4);oa=Bi(sa);H.bc=oa;H.bih=Za.height;H.biw=Za.width;H.brdim=t.join();b=b.i;b=(H.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,H.wgl=!!Yh.WebGLRenderingContext,H);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var an=new function(){var a=window.document;this.h=window;this.i=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Vm($m(a))});Date.now();function R(a){a=bn(a);return"string"===typeof a&&"false"===a?!1:!!a}
function cn(a,b){a=bn(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function dn(){return P("EXPERIMENTS_TOKEN","")}
function bn(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function en(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});var e=r(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var fn="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function gn(){if(!fn)return null;var a=fn();return"open"in a?a:null}
function hn(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function jn(a,b){"function"===typeof a&&(a=Nm(a));return window.setTimeout(a,b)}
;var kn={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ln="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(si)),mn=!1;
function nn(a,b){b=void 0===b?{}:b;var c=Zm(a),d=R("web_ajax_ignore_global_headers_if_set"),e;for(e in kn){var f=P(kn[e]);"X-Goog-Visitor-Id"!==e||f||(f=P("VISITOR_DATA"));!f||!c&&zc(a)||d&&void 0!==b[e]||!(R("move_vss_away_from_login_info_cookie")||"X-Goog-AuthUser"!==e&&"X-Goog-PageId"!==e)||(b[e]=f)}R("move_vss_away_from_login_info_cookie")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!zc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());
if(c||!zc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&zc(a)||(b["X-YouTube-Ad-Signals"]=Vm($m()));return b}
function on(a){var b=window.location.search,c=zc(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Zm(a)&&(c=document.location.hostname);var d=xc(yc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Wm(b),f={};gb(ln,function(g){e[g]&&(f[g]=e[g])});
return Ym(a,f||{},!1)}
function pn(a,b){var c=b.format||"JSON";a=qn(a,b);var d=rn(a,b),e=!1,f=sn(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var m=hn(k),n=null,q=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(m||q||u)n=tn(a,c,k,b.convertToSafeHtml);if(m)a:if(k&&204==k.status)m=!0;else{switch(c){case "XML":m=0==parseInt(n&&n.return_code,10);break a;case "RAW":m=!0;break a}m=!!n}n=n||{};q=b.context||y;m?b.onSuccess&&b.onSuccess.call(q,k,n):b.onError&&b.onError.call(q,k,n);b.onFinish&&b.onFinish.call(q,
k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=jn(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||y,f))},d)}return f}
function qn(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Ym(a,b||{},!0);return a}
function rn(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||zc(a)&&!b.withCredentials&&zc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Wm(e),yb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):Ec(e));f=e||f&&!qb(f);!mn&&f&&"POST"!=b.method&&(mn=!0,Om(Error("AJAX request with postData should use POST")));return e}
function tn(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Pm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?un(a):null)e={},gb(a.getElementsByTagName("*"),function(g){e[g.tagName]=vn(g)})}d&&wn(e);
return e}
function wn(a){if(Ra(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=Ab();d=e?e.createHTML(d):d;a[c]=new pc(d)}else wn(a[b])}}
function un(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function vn(a){var b="";gb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function xn(a,b){b.method="POST";b.postParams||(b.postParams={});return pn(a,b)}
function sn(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Nm(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=gn();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=on(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=nn(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var yn=kd||ld;function zn(a){var b=Xb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var An=[{Kc:function(a){return"Cannot read property '"+a.key+"'"},
oc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Kc:function(a){return"Cannot call '"+a.key+"'"},
oc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Kc:function(a){return a.key+" is not defined"},
oc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Cn={Va:[],Ra:[{callback:Bn,weight:500}]};function Bn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Dn(){this.Ra=[];this.Va=[]}
var En;function Fn(){if(!En){var a=En=new Dn;a.Va.length=0;a.Ra.length=0;Cn.Va&&a.Va.push.apply(a.Va,Cn.Va);Cn.Ra&&a.Ra.push.apply(a.Ra,Cn.Ra)}return En}
;var Gn=new Wi;function Hn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=In(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=In(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=In(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function In(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Jn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Kn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Hn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?Kn(e+".ve",f,g,h):0;d+=g;d+=Kn(e,a[e],b,c);if(500<d)break}}else c[b]=Ln(a),d+=c[b].length;else c[b]=Ln(a),d+=c[b].length;return d}
function Kn(a,b,c,d){c+="."+a;a=Ln(b);d[c]=a;return c.length+a.length}
function Ln(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Mn(){this.hf=!0}
function Nn(){Mn.h||(Mn.h=new Mn);return Mn.h}
function On(a,b){a={};var c=Qg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Im||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Im&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return a}
;var Pn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function Qn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function Rn(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Sn(a,b,c,d,e){Mg.set(""+a,b,{nc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function Tn(a,b,c){Mg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function Un(){if(!Mg.isEnabled())return!1;if(!Mg.Ob())return!0;Mg.set("TESTCOOKIESENABLED","1",{nc:60});if("1"!==Mg.get("TESTCOOKIESENABLED"))return!1;Mg.remove("TESTCOOKIESENABLED");return!0}
;var Vn=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Vn);function Wn(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Mg.get(""+this.h,void 0);a&&this.parse(a)}
var Xn;function Yn(){Xn||(Xn=new Wn);return Xn}
l=Wn.prototype;l.get=function(a,b){Zn(a);$n(a);a=void 0!==Vn[a]?Vn[a].toString():null;return null!=a?a:b?b:""};
l.set=function(a,b){Zn(a);$n(a);if(null==b)throw Error("ExpectedNotNull");Vn[a]=b.toString()};
function ao(a){return!!((bo("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
l.remove=function(a){Zn(a);$n(a);delete Vn[a]};
l.clear=function(){for(var a in Vn)delete Vn[a]};
function $n(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Zn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function bo(a){a=void 0!==Vn[a]?Vn[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
l.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Vn[d]=c.toString())}};var co={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},eo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},fo={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},go={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function ho(){var a=y.navigator;return a?a.connection:void 0}
function io(){var a=ho();if(a){var b=co[a.type||"unknown"]||"CONN_UNKNOWN";a=co[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function jo(){var a=ho();if(null!=a&&a.effectiveType)return go.hasOwnProperty(a.effectiveType)?go[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function S(a){var b=Ka.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(S,Error);function ko(){try{return lo(),!0}catch(a){return!1}}
function lo(a){if(void 0!==P("DATASYNC_ID"))return P("DATASYNC_ID");throw new S("Datasync ID not set",void 0===a?"unknown":a);}
;function mo(){}
function no(a,b){return oo(a,0,b)}
mo.prototype.fa=function(a,b){return oo(a,1,b)};
function po(a){var b=A("yt.scheduler.instance.addImmediateJob");b?b(a):a()}
;function qo(){mo.apply(this,arguments)}
v(qo,mo);function ro(){qo.h||(qo.h=new qo);return qo.h}
function oo(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):jn(a,c||0)}
qo.prototype.Da=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=A("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
qo.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
qo.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
var zi=ro();function so(a){var b=new gj;(b=b.isAvailable()?a?new mj(b,a):b:null)||(a=new hj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new cj(a):null;this.i=document.domain||window.location.hostname}
so.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Ug(b))}catch(f){return}else e=escape(b);Sn(a,e,c,this.i)};
so.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Mg.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
so.prototype.remove=function(a){this.h&&this.h.remove(a);Tn(a,"/",this.i)};var to=function(){var a;return function(){a||(a=new so("ytidb"));return a}}();
function uo(){var a;return null==(a=to())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var vo=[],wo,xo=!1;function yo(){var a={};for(wo=new zo(void 0===a.handleError?Ao:a.handleError,void 0===a.logEvent?Bo:a.logEvent);0<vo.length;)switch(a=vo.shift(),a.type){case "ERROR":wo.handleError(a.payload);break;case "EVENT":wo.logEvent(a.eventType,a.payload)}}
function Co(a){xo||(wo?wo.handleError(a):(vo.push({type:"ERROR",payload:a}),10<vo.length&&vo.shift()))}
function Do(a,b){xo||(wo?wo.logEvent(a,b):(vo.push({type:"EVENT",eventType:a,payload:b}),10<vo.length&&vo.shift()))}
;function Eo(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Fo(a){return a.substr(0,a.indexOf(":"))||a}
;var Go={},Ho=(Go.AUTH_INVALID="No user identifier specified.",Go.EXPLICIT_ABORT="Transaction was explicitly aborted.",Go.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Go.MISSING_INDEX="Index not created.",Go.MISSING_OBJECT_STORES="Object stores not created.",Go.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Go.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Go.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Go.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Go.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Go.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Go.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Go),Io={},Jo=(Io.AUTH_INVALID="ERROR",Io.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Io.EXPLICIT_ABORT="IGNORED",Io.IDB_NOT_SUPPORTED="ERROR",Io.MISSING_INDEX=
"WARNING",Io.MISSING_OBJECT_STORES="ERROR",Io.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Io.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Io.QUOTA_EXCEEDED="WARNING",Io.QUOTA_MAYBE_EXCEEDED="WARNING",Io.UNKNOWN_ABORT="WARNING",Io.INCOMPATIBLE_DB_VERSION="WARNING",Io),Ko={},Lo=(Ko.AUTH_INVALID=!1,Ko.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ko.EXPLICIT_ABORT=!1,Ko.IDB_NOT_SUPPORTED=!1,Ko.MISSING_INDEX=!1,Ko.MISSING_OBJECT_STORES=!1,Ko.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ko.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ko.QUOTA_EXCEEDED=!1,Ko.QUOTA_MAYBE_EXCEEDED=!0,Ko.UNKNOWN_ABORT=!0,Ko.INCOMPATIBLE_DB_VERSION=!1,Ko);function Mo(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Ho[a]:c;d=void 0===d?Jo[a]:d;e=void 0===e?Lo[a]:e;S.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Mo.prototype)}
v(Mo,S);function No(a,b){Mo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Ho.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,No.prototype)}
v(No,Mo);function Oo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Oo.prototype)}
v(Oo,Error);var Po=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Qo(a,b,c,d){b=Fo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Mo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new Mo("QUOTA_EXCEEDED",a);if(md&&"UnknownError"===e.name)return new Mo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Oo)return new Mo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Po.some(function(f){return e.message.includes(f)}))return new Mo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new Mo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Dd:e.name})];e.level="WARNING";return e}
function Ro(a,b,c){var d=uo();return new Mo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function So(a){if(!a)throw Error();throw a;}
function To(a){return a}
function Uo(a){this.h=a}
function Vo(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=r(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=r(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
Vo.all=function(a){return new Vo(new Uo(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={pb:0};f.pb<a.length;f={pb:f.pb},++f.pb)Vo.resolve(a[f.pb]).then(function(g){return function(h){d[g.pb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
Vo.resolve=function(a){return new Vo(new Uo(function(b,c){a instanceof Vo?a.then(b,c):b(a)}))};
Vo.reject=function(a){return new Vo(new Uo(function(b,c){c(a)}))};
Vo.prototype.then=function(a,b){var c=this,d=null!=a?a:To,e=null!=b?b:So;return new Vo(new Uo(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Wo(c,c,d,f,g)}),c.i.push(function(){Xo(c,c,e,f,g)})):"FULFILLED"===c.state.status?Wo(c,c,d,f,g):"REJECTED"===c.state.status&&Xo(c,c,e,f,g)}))};
Vo.prototype.catch=function(a){return this.then(void 0,a)};
function Wo(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Vo?Yo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Xo(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Vo?Yo(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Yo(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Vo?Yo(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Zo(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function $o(a){return new Promise(function(b,c){Zo(a,b,c)})}
function ap(a){return new Vo(new Uo(function(b,c){Zo(a,b,c)}))}
;function bp(a,b){return new Vo(new Uo(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var cp=window,T=cp.ytcsi&&cp.ytcsi.now?cp.ytcsi.now:cp.performance&&cp.performance.timing&&cp.performance.now&&cp.performance.timing.navigationStart?function(){return cp.performance.timing.navigationStart+cp.performance.now()}:function(){return(new Date).getTime()};function dp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(T());this.i=!1}
l=dp.prototype;l.add=function(a,b,c){return ep(this,[a],{mode:"readwrite",da:!0},function(d){return d.objectStore(a).add(b,c)})};
l.clear=function(a){return ep(this,[a],{mode:"readwrite",da:!0},function(b){return b.objectStore(a).clear()})};
l.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
l.count=function(a,b){return ep(this,[a],{mode:"readonly",da:!0},function(c){return c.objectStore(a).count(b)})};
function fp(a,b,c){a=a.h.createObjectStore(b,c);return new gp(a)}
l.delete=function(a,b){return ep(this,[a],{mode:"readwrite",da:!0},function(c){return c.objectStore(a).delete(b)})};
l.get=function(a,b){return ep(this,[a],{mode:"readonly",da:!0},function(c){return c.objectStore(a).get(b)})};
function hp(a,b,c){return ep(a,[b],{mode:"readwrite",da:!0},function(d){d=d.objectStore(b);return ap(d.h.put(c,void 0))})}
l.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function ep(a,b,c,d){var e,f,g,h,k,m,n,q,u,t,B,D;return x(function(F){switch(F.h){case 1:var M={mode:"readonly",da:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?M.mode=c:Object.assign(M,c);e=M;a.transactionCount++;f=e.da?3:1;g=0;case 2:if(h){F.v(3);break}g++;k=Math.round(T());za(F,4);m=a.h.transaction(b,e.mode);M=new ip(m);M=jp(M,d);return w(F,M,6);case 6:return n=F.i,q=Math.round(T()),kp(a,k,q,g,void 0,b.join(),e),F.return(n);case 4:u=Ba(F);t=Math.round(T());B=Qo(u,a.h.name,b.join(),
a.h.version);if((D=B instanceof Mo&&!B.h)||g>=f)kp(a,k,t,g,B,b.join(),e),h=B;F.v(2);break;case 3:return F.return(Promise.reject(h))}})}
function kp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Mo&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Do("QUOTA_EXCEEDED",{dbName:Fo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Mo&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),Do("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),lp(a,!1,d,f,b,g.tag),Co(e)):lp(a,!0,d,f,b,g.tag)}
function lp(a,b,c,d,e,f){Do("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
l.getName=function(){return this.h.name};
function gp(a){this.h=a}
l=gp.prototype;l.add=function(a,b){return ap(this.h.add(a,b))};
l.autoIncrement=function(){return this.h.autoIncrement};
l.clear=function(){return ap(this.h.clear()).then(function(){})};
function mp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
l.count=function(a){return ap(this.h.count(a))};
function np(a,b){return op(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
l.delete=function(a){return a instanceof IDBKeyRange?np(this,a):ap(this.h.delete(a))};
l.get=function(a){return ap(this.h.get(a))};
l.index=function(a){try{return new pp(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Oo(a,this.h.name);throw b;}};
l.getName=function(){return this.h.name};
l.keyPath=function(){return this.h.keyPath};
function op(a,b,c){a=a.h.openCursor(b.query,b.direction);return qp(a).then(function(d){return bp(d,c)})}
function ip(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=Mo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function jp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return r(d).next().value})}
ip.prototype.abort=function(){this.h.abort();this.i=!0;throw new Mo("EXPLICIT_ABORT");};
ip.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new gp(a),this.j.set(a,b));return b};
function pp(a){this.h=a}
l=pp.prototype;l.count=function(a){return ap(this.h.count(a))};
l.delete=function(a){return rp(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
l.get=function(a){return ap(this.h.get(a))};
l.getKey=function(a){return ap(this.h.getKey(a))};
l.keyPath=function(){return this.h.keyPath};
l.unique=function(){return this.h.unique};
function rp(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return qp(a).then(function(d){return bp(d,c)})}
function sp(a,b){this.request=a;this.cursor=b}
function qp(a){return ap(a).then(function(b){return b?new sp(a,b):null})}
l=sp.prototype;l.advance=function(a){this.cursor.advance(a);return qp(this.request)};
l.continue=function(a){this.cursor.continue(a);return qp(this.request)};
l.delete=function(){return ap(this.cursor.delete()).then(function(){})};
l.getKey=function(){return this.cursor.key};
l.getValue=function(){return this.cursor.value};
l.update=function(a){return ap(this.cursor.update(a))};function tp(a,b,c){return new Promise(function(d,e){function f(){u||(u=new dp(g.result,{closed:q}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.ee,k=c.blocking,m=c.jf,n=c.upgrade,q=c.closed,u;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&Do("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Fo(a)});var B=f(),D=new ip(g.transaction);
n&&n(B,function(F){return t.oldVersion<F&&t.newVersion>=F},D);
D.done.catch(function(F){e(F)})}catch(F){e(F)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Do("IDB_UNEXPECTEDLY_CLOSED",{dbName:Fo(a),dbVersion:t.version});m&&m()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function up(a,b,c){c=void 0===c?{}:c;return tp(a,b,c)}
function vp(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.ee)&&c.addEventListener("blocked",function(){e()}),w(g,$o(c),4);
if(2!=g.h)return Aa(g,0);f=Ba(g);throw Qo(f,a,"",-1);})}
;function wp(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}
wp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return up(a,b,c)};
wp.prototype.delete=function(a){a=void 0===a?{}:a;return vp(this.name,a)};
function xp(a,b){return new Mo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function yp(a,b){if(!b)throw Ro("openWithToken",Fo(a.name));return zp(a)}
function zp(a){function b(){var f,g,h,k,m,n,q,u,t,B;return x(function(D){switch(D.h){case 1:return g=null!=(f=Error().stack)?f:"",za(D,2),w(D,a.i(a.name,a.options.version,d),4);case 4:h=D.i;for(var F=a.options,M=[],O=r(Object.keys(F.Ab)),Q=O.next();!Q.done;Q=O.next()){Q=Q.value;var ca=F.Ab[Q],X=void 0===ca.Qe?Number.MAX_VALUE:ca.Qe;!(h.h.version>=ca.Ib)||h.h.version>=X||h.h.objectStoreNames.contains(Q)||M.push(Q)}k=M;if(0===k.length){D.v(5);break}m=Object.keys(a.options.Ab);n=h.objectStoreNames();
if(a.m<cn("ytidb_reopen_db_retries",0))return a.m++,h.close(),Co(new Mo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),D.return(b());if(!(a.l<cn("ytidb_remake_db_retries",1))){D.v(6);break}a.l++;return w(D,a.delete(),7);case 7:return Co(new Mo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:m,foundObjectStores:n})),D.return(b());case 6:throw new No(n,m);case 5:return D.return(h);case 2:q=Ba(D);if(q instanceof DOMException?
"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){D.v(8);break}return w(D,a.i(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:u=D.i;t=u.h.version;if(void 0!==a.options.version&&t>a.options.version+1)throw u.close(),a.j=!1,xp(a,t);return D.return(u);case 8:throw c(),q instanceof Error&&!R("ytidb_async_stack_killswitch")&&
(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),Qo(q,a.name,"",null!=(B=a.options.version)?B:-1);}})}
function c(){a.h===e&&(a.h=void 0)}
if(!a.j)throw xp(a);if(a.h)return a.h;var d={blocking:function(f){f.close()},
closed:c,jf:c,upgrade:a.options.upgrade};var e=b();a.h=e;return a.h}
;var Ap=new wp("YtIdbMeta",{Ab:{databases:{Ib:1}},upgrade:function(a,b){b(1)&&fp(a,"databases",{keyPath:"actualName"})}});
function Bp(a,b){var c;return x(function(d){if(1==d.h)return w(d,yp(Ap,b),2);c=d.i;return d.return(ep(c,["databases"],{da:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return ap(f.h.put(a,void 0)).then(function(){})})}))})}
function Cp(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,yp(Ap,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Dp(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,yp(Ap,b),2)):3!=e.h?(d=e.i,w(e,ep(d,["databases"],{da:!0,mode:"readonly"},function(f){c.length=0;return op(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function Ep(a){return Dp(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function Fp(a,b,c){return Dp(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function Gp(a){var b,c;return x(function(d){if(1==d.h)return b=lo("YtIdbMeta hasAnyMeta other"),w(d,Dp(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var Hp,Ip=new function(){}(new function(){});
function Jp(){var a,b,c,d;return x(function(e){switch(e.h){case 1:a=uo();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=yn)f=/WebKit\/([0-9]+)/.exec(Xb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Xb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Yc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Bp(d,Ip),4);case 4:return w(e,Cp("yt-idb-test-do-not-use",Ip),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Kp(){if(void 0!==Hp)return Hp;xo=!0;return Hp=Jp().then(function(a){xo=!1;var b;if(null!=(b=to())&&b.h){var c;b={hasSucceededOnce:(null==(c=uo())?void 0:c.hasSucceededOnce)||a};var d;null==(d=to())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Lp(){return A("ytglobal.idbToken_")||void 0}
function Mp(){var a=Lp();return a?Promise.resolve(a):Kp().then(function(b){(b=b?Ip:void 0)&&z("ytglobal.idbToken_",b);return b})}
;var Np=0;function Op(a,b){Np||(Np=zi.fa(function(){var c,d,e,f,g;return x(function(h){switch(h.h){case 1:return w(h,Mp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return w(h,Fp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.v(6);break}f=e[0];return w(h,vp(f.actualName),7);case 7:return w(h,Cp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Co(g),d=!1;case 4:zi.Da(Np),Np=0,d&&Op(a,b),h.h=0}})}))}
function Pp(){var a;return x(function(b){return 1==b.h?w(b,Mp(),2):(a=b.i)?b.return(Gp(a)):b.return(!1)})}
new Wh;function Qp(a){if(!ko())throw a=new Mo("AUTH_INVALID",{dbName:a}),Co(a),a;var b=lo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Rp(a,b,c,d){var e,f,g,h,k,m;return x(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",w(n,Mp(),2);case 2:g=n.i;if(!g)throw h=Ro("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Co(h),h;Eo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Qp(a);za(n,3);return w(n,Bp(k,g),5);case 5:return w(n,up(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return m=Ba(n),za(n,7),w(n,Cp(k.actualName,g),9);case 9:Aa(n,
8);break;case 7:Ba(n);case 8:throw m;}})}
function Sp(a,b,c){c=void 0===c?{}:c;return Rp(a,b,!1,c)}
function Tp(a,b,c){c=void 0===c?{}:c;return Rp(a,b,!0,c)}
function Up(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,Mp(),2);if(3!=e.h){c=e.i;if(!c)return e.return();Eo(a);d=Qp(a);return w(e,vp(d.actualName,b),3)}return w(e,Cp(d.actualName,c),0)})}
function Vp(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,vp(d.actualName,b),2):w(e,Cp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Wp(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,Mp(),2);if(3!=d.h){b=d.i;if(!b)return d.return();Eo("LogsDatabaseV2");return w(d,Ep(b),3)}c=d.i;return w(d,Vp(c,a,b),0)})}
function Xp(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,Mp(),2);if(3!=d.h){c=d.i;if(!c)return d.return();Eo(a);return w(d,vp(a,b),3)}return w(d,Cp(a,c),0)})}
;function Yp(a,b){wp.call(this,a,b);this.options=b;Eo(a)}
v(Yp,wp);function Zp(a,b){var c;return function(){c||(c=new Yp(a,b));return c}}
Yp.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.uc?Tp:Sp)(a,b,Object.assign({},c))};
Yp.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.uc?Xp:Up)(this.name,a)};
function $p(a,b){return Zp(a,b)}
;var aq={},bq=$p("ytGcfConfig",{Ab:(aq.coldConfigStore={Ib:1},aq.hotConfigStore={Ib:1},aq),uc:!1,upgrade:function(a,b){b(1)&&(mp(fp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),mp(fp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function cq(a){return yp(bq(),a)}
function dq(a,b,c){var d,e,f;return x(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:T()},w(g,cq(c),2);case 2:return e=g.i,w(g,e.clear("hotConfigStore"),3);case 3:return w(g,hp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function eq(a,b,c,d){var e,f,g;return x(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:T()},w(h,cq(d),2);case 2:return f=h.i,w(h,f.clear("coldConfigStore"),3);case 3:return w(h,hp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function fq(a){var b,c;return x(function(d){return 1==d.h?w(d,cq(a),2):3!=d.h?(b=d.i,c=void 0,w(d,ep(b,["coldConfigStore"],{mode:"readwrite",da:!0},function(e){return rp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function gq(a){var b,c;return x(function(d){return 1==d.h?w(d,cq(a),2):3!=d.h?(b=d.i,c=void 0,w(d,ep(b,["hotConfigStore"],{mode:"readwrite",da:!0},function(e){return rp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function hq(){this.h=0}
function iq(a,b,c){var d,e,f;return x(function(g){if(1==g.h){if(!R("update_log_event_config"))return g.v(0);c&&(a.i=c,z("yt.gcf.config.hotConfigGroup",a.i));a.hotHashData=b;z("yt.gcf.config.hotHashData",a.hotHashData);return(d=Lp())?c?g.v(4):w(g,gq(d),5):g.v(0)}4!=g.h&&(e=g.i,c=null==(f=e)?void 0:f.config);return w(g,dq(c,b,d),0)})}
function jq(a,b,c){var d,e,f,g;return x(function(h){if(1==h.h){if(!R("update_log_event_config"))return h.v(0);a.coldHashData=b;z("yt.gcf.config.coldHashData",a.coldHashData);return(d=Lp())?c?h.v(4):w(h,fq(d),5):h.v(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.v(0);g=c.configData;return w(h,eq(c,b,g,d),0)})}
;function kq(){return"INNERTUBE_API_KEY"in Im&&"INNERTUBE_API_VERSION"in Im}
function lq(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Fc:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ud:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ze:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),wd:P("INNERTUBE_CONTEXT_HL"),vd:P("INNERTUBE_CONTEXT_GL"),Ae:P("INNERTUBE_HOST_OVERRIDE")||"",Ce:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Be:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function mq(a){var b={client:{hl:a.wd,gl:a.vd,clientName:a.ud,clientVersion:a.innertubeContextClientVersion,configInfo:a.Fc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=dn();""!==c&&(b.client.experimentsToken=c);c=en();0<c.length&&(b.request={internalExperimentFlags:c});nq(a,void 0,b);oq(void 0,b);pq(void 0,b);qq(a,void 0,b);rq(void 0,b);R("start_sending_config_hash")&&sq(void 0,b);P("DELEGATED_SESSION_ID")&&
!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=r(Object.entries(Wm(P("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=r(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function tq(a){var b=new $k,c=new Pk;G(c,1,a.wd);G(c,2,a.vd);G(c,16,a.ze);G(c,17,a.innertubeContextClientVersion);if(a.Fc){var d=a.Fc,e=new Lk;d.coldConfigData&&G(e,1,d.coldConfigData);d.appInstallData&&G(e,6,d.appInstallData);d.coldHashData&&G(e,3,d.coldHashData);d.hotHashData&&G(e,5,d.hotHashData);I(c,Lk,62,e)}(d=y.devicePixelRatio)&&1!=d&&G(c,65,Wd(d));d=dn();""!==d&&G(c,54,d);d=en();if(0<d.length){e=new Tk;for(var f=0;f<d.length;f++){var g=new Rk;G(g,1,d[f].key);de(g,2,Sk,d[f].value);ke(e,15,
Rk,g)}I(b,Tk,5,e)}nq(a,c);oq(b);pq(c);qq(a,c);rq(c);R("start_sending_config_hash")&&sq(c);P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a=new Yk,G(a,3,P("DELEGATED_SESSION_ID")));a=r(Object.entries(Wm(P("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=r(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?G(c,12,e):"cmodel"===d?G(c,13,e):"cbr"===d?G(c,87,e):"cbrver"===d?G(c,88,e):"cos"===d?G(c,18,e):"cosver"===d?G(c,19,e):"cplatform"===d&&G(c,42,e);b.l(c);return b}
function nq(a,b,c){a=a.ud;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=fe(b,Mk,96)||new Mk;var d=Rn();d=Object.keys(Al).indexOf(d);d=-1===d?null:d;null!==d&&G(c,3,d);I(b,Mk,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Rn())}
function oq(a,b){var c=A("yt.embedded_player.embed_url");c&&(a?(b=fe(a,Vk,7)||new Vk,G(b,4,c),I(a,Vk,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function pq(a,b){var c;if(R("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?G(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function qq(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=fe(b,Lk,62))?d:new Lk;G(c,6,a.appInstallData);I(b,Lk,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function rq(a,b){var c=io();c&&(a?G(a,61,eo[c]):b&&(b.client.connectionType=c));R("web_log_effective_connection_type")&&(c=jo())&&(a?G(a,94,fo[c]):b&&(b.client.effectiveConnectionType=c))}
function uq(a,b,c){c=void 0===c?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Dt||P("AUTHORIZATION");b||(a?b="Bearer "+A("gapi.auth.getToken")().Ct:(a=On(Nn()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function sq(a,b){hq.h||(hq.h=new hq);var c=hq.h;var d=T()-c.h;if(0!==c.h&&d<cn("send_config_hash_timer"))c=void 0;else{d=A("yt.gcf.config.coldConfigData");var e=A("yt.gcf.config.hotHashData"),f=A("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=T());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=fe(a,Lk,62))?g:new Lk;G(b,1,c);G(b,3,d);G(b,5,e);I(a,Lk,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},
b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;function vq(a,b){this.version=a;this.args=b}
;function wq(a,b){this.topic=a;this.h=b}
wq.prototype.toString=function(){return this.topic};var xq=A("ytPubsub2Pubsub2Instance")||new Wi;Wi.prototype.subscribe=Wi.prototype.subscribe;Wi.prototype.unsubscribeByKey=Wi.prototype.Gb;Wi.prototype.publish=Wi.prototype.fb;Wi.prototype.clear=Wi.prototype.clear;z("ytPubsub2Pubsub2Instance",xq);var yq=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",yq);var zq=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",zq);var Aq=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",Aq);
z("ytPubsub2Pubsub2SkipSubKey",null);function Bq(a,b){var c=Cq();c&&c.publish.call(c,a.toString(),a,b)}
function Dq(a){var b=Eq,c=Cq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(yq[d])try{if(f&&b instanceof wq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Xa){var m=new h;h.Xa=m.version}var n=h.Xa}catch(F){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var q=n.construct;
var u=k.args,t=u.length;if(0<t){var B=Array(t);for(k=0;k<t;k++)B[k]=u[k];var D=B}else D=[];f=q.call(n,h,D)}catch(F){throw F.message="yt.pubsub2.Data.deserialize(): "+F.message,F;}}catch(F){throw F.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+F.message,F;}a.call(window,f)}catch(F){Om(F)}},Aq[b.toString()]?A("yt.scheduler.instance")?zi.fa(g):jn(g,0):g())});
yq[d]=!0;zq[b.toString()]||(zq[b.toString()]=[]);zq[b.toString()].push(d);return d}
function Fq(){var a=Gq,b=Dq(function(c){a.apply(void 0,arguments);Hq(b)});
return b}
function Hq(a){var b=Cq();b&&("number"===typeof a&&(a=[a]),gb(a,function(c){b.unsubscribeByKey(c);delete yq[c]}))}
function Cq(){return A("ytPubsub2Pubsub2Instance")}
;var Iq=cn("max_body_size_to_compress",5E5),Jq=cn("min_body_size_to_compress",500),Kq=!0,Lq=0,Mq=0,Nq=cn("compression_performance_threshold",250),Oq=cn("slow_compressions_before_abandon_count",10);
function Pq(a,b,c,d){var e=T(),f={startTime:e},g={startTime:e,ticks:{}};if(Kq)try{var h=Qq(b);if(!(h>Iq||h<Jq)){var k=Bk(ui(b)),m=T();f.endTime=m;g.ticks.gelc=m;Mq++;R("disable_compression_due_to_performance_degredation")&&m-e>=Nq&&(Lq++,R("abandon_compression_after_N_slow_zips")?Mq===cn("compression_disable_point")&&Lq>Oq&&(Kq=!1):Kq=!1);R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||(R("use_new_cml")?(e={sampleRate:1},e=void 0===e?{sampleRate:.1}:
e,Math.random()>Math.min(.02,e.sampleRate/100)&&Bq("meta_logging_csi_event",{timerName:"gel_compression",cu:g})):.01>=Math.random()&&Bq("gel_compression_latency_payload",f));if(Rq(k,b)||!R("only_compress_gel_if_smaller"))c.headers||(c.headers={}),c.headers["Content-Encoding"]="gzip",c.postBody=k,c.postParams=void 0}d(a,c)}catch(n){Pm(n),d(a,c)}else d(a,c)}
function Sq(a){if(!a.body)return a;try{var b="string"===typeof a.body?a.body:JSON.stringify(a.body),c=Qq(b);if(c>Iq||c<Jq)return a;var d=Bk(ui(b));if(!Rq(d,b)&&R("only_compress_gel_if_smaller"))return a;a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=d;return a}catch(e){return Pm(e),a}}
function Rq(a,b){if(!window.Blob)return!0;var c=a.length<Qq(b);c||Om(new S("Compressed req body is larger than uncompressed","original size: "+Qq(b),"compressed size: "+a.length));return c}
function Qq(a){return(new Blob(a.split(""))).size}
;function Tq(a){a=Object.assign({},a);delete a.Authorization;var b=Qg();if(b){var c=new Fi;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=pd(c.digest(),3)}return a}
;var Uq;function Vq(){Uq||(Uq=new so("yt.innertube"));return Uq}
function Wq(a,b,c,d){if(d)return null;d=Vq().get("nextId",!0)||1;var e=Vq().get("requests",!0)||{};e[d]={method:a,request:b,authState:Tq(c),requestTime:Math.round(T())};Vq().set("nextId",d+1,86400,!0);Vq().set("requests",e,86400,!0);return d}
function Xq(a){var b=Vq().get("requests",!0)||{};delete b[a];Vq().set("requests",b,86400,!0)}
function Yq(a){var b=Vq().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Tq(uq(!1));tb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Zq(a,d.method,e,{}));delete b[c]}}Vq().set("requests",b,86400,!0)}}
;function $q(a){this.dc=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.ub=function(){};
this.now=Date.now;this.Lb=!1;var b;this.Pd=null!=(b=a.Pd)?b:100;var c;this.Jd=null!=(c=a.Jd)?c:1;var d;this.Hd=null!=(d=a.Hd)?d:2592E6;var e;this.Fd=null!=(e=a.Fd)?e:12E4;var f;this.Id=null!=(f=a.Id)?f:5E3;var g;this.O=null!=(g=a.O)?g:void 0;this.jc=!!a.jc;var h;this.hc=null!=(h=a.hc)?h:.1;var k;this.pc=null!=(k=a.pc)?k:10;a.handleError&&(this.handleError=a.handleError);a.ub&&(this.ub=a.ub);a.Lb&&(this.Lb=a.Lb);a.dc&&(this.dc=a.dc);this.T=a.T;this.ya=a.ya;this.Y=a.Y;this.W=a.W;this.Pa=a.Pa;this.Nc=
a.Nc;this.Mc=a.Mc;ar(this)&&(!this.T||this.T("networkless_logging"))&&br(this)}
function br(a){ar(a)&&!a.Lb&&(a.h=!0,a.jc&&Math.random()<=a.hc&&a.Y.he(a.O),cr(a),a.W.ma()&&a.Ub(),a.W.Ma(a.Nc,a.Ub.bind(a)),a.W.Ma(a.Mc,a.fd.bind(a)))}
l=$q.prototype;l.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(ar(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.Y.set(d,this.O).then(function(e){d.id=e;c.W.ma()&&dr(c,d)}).catch(function(e){dr(c,d);
er(c,e)})}else this.Pa(a,b)};
l.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(ar(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.T&&this.T("nwl_skip_retry")&&(e.skipRetry=c);if(this.W.ma()||this.T&&this.T("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.Y.set(e,d.O).catch(function(m){er(d,m)}),2);
f(g,h);k.h=0})}}this.Pa(a,b,e.skipRetry)}else this.Y.set(e,this.O).catch(function(g){d.Pa(a,b,e.skipRetry);
er(d,g)})}else this.Pa(a,b,this.T&&this.T("nwl_skip_retry")&&c)};
l.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(ar(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.Y.tb(d.id,c.O):e=!0;c.W.kb&&c.T&&c.T("vss_network_hint")&&c.W.kb(!0);f(g,h)};
this.Pa(d.url,d.options);this.Y.set(d,this.O).then(function(g){d.id=g;e&&c.Y.tb(d.id,c.O)}).catch(function(g){er(c,g)})}else this.Pa(a,b)};
l.Ub=function(){var a=this;if(!ar(this))throw Ro("throttleSend");this.i||(this.i=this.ya.fa(function(){var b;return x(function(c){if(1==c.h)return w(c,a.Y.rd("NEW",a.O),2);if(3!=c.h)return b=c.i,b?w(c,dr(a,b),3):(a.fd(),c.return());a.i&&(a.i=0,a.Ub());c.h=0})},this.Pd))};
l.fd=function(){this.ya.Da(this.i);this.i=0};
function dr(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!ar(a))throw c=Ro("immediateSend"),c;if(void 0===b.id){e.v(2);break}return w(e,a.Y.Ee(b.id,a.O),3);case 3:(d=e.i)||a.ub(Error("The request cannot be found in the database."));case 2:if(fr(a,b,a.Hd)){e.v(4);break}a.ub(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.v(5);break}return w(e,a.Y.tb(b.id,a.O),5);case 5:return e.return();case 4:b.skipRetry||(b=gr(a,b));if(!b){e.v(0);break}if(!b.skipRetry||
void 0===b.id){e.v(8);break}return w(e,a.Y.tb(b.id,a.O),8);case 8:a.Pa(b.url,b.options,!!b.skipRetry),e.h=0}})}
function gr(a,b){if(!ar(a))throw Ro("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,m;return x(function(n){switch(n.h){case 1:g=hr(f);h=ir(f);if(!(a.T&&a.T("nwl_consider_error_code")&&g||a.T&&!a.T("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.pc)){n.v(2);break}if(!a.W.tc){n.v(3);break}return w(n,a.W.tc(),3);case 3:if(a.W.ma()){n.v(2);break}c(e,f);if(!a.T||!a.T("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.v(6);break}return w(n,a.Y.Rc(b.id,a.O,!1),6);case 6:return n.return();case 2:if(a.T&&a.T("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.pc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(m=b)?void 0:m.id)){n.v(8);break}return b.sendCount<a.Jd?w(n,a.Y.Rc(b.id,a.O,!0,h?!1:void 0),12):w(n,a.Y.tb(b.id,a.O),8);case 12:a.ya.fa(function(){a.W.ma()&&a.Ub()},a.Id);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.v(2):w(h,a.Y.tb(b.id,a.O),2);a.W.kb&&a.T&&a.T("vss_network_hint")&&a.W.kb(!0);d(e,f);h.h=0})};
return b}
function fr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function cr(a){if(!ar(a))throw Ro("retryQueuedRequests");a.Y.rd("QUEUED",a.O).then(function(b){b&&!fr(a,b,a.Fd)?a.ya.fa(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.v(2):w(c,a.Y.Rc(b.id,a.O),2);cr(a);c.h=0})}):a.W.ma()&&a.Ub()})}
function er(a,b){a.Vd&&!a.W.ma()?a.Vd(b):a.handleError(b)}
function ar(a){return!!a.O||a.dc}
function hr(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function ir(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var jr;
function kr(){if(jr)return jr();var a={};jr=$p("LogsDatabaseV2",{Ab:(a.LogsRequestsStore={Ib:2},a),uc:!1,upgrade:function(b,c,d){c(2)&&fp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),mp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return jr()}
;function lr(a){return yp(kr(),a)}
function mr(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,lr(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,hp(d,"LogsRequestsStore",e),3);f=g.i;c.lf=T();nr(c);return g.return(f)})}
function Br(a,b){var c,d,e,f,g,h,k;return x(function(m){if(1==m.h)return c={startTime:T(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(m,lr(b),2);if(3!=m.h)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,T()],h=IDBKeyRange.bound(f,g),k=void 0,w(m,ep(d,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(n){return rp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.getValue()&&(k=q.getValue(),"NEW"===a&&(k.status="QUEUED",
q.update(k)))})}),3);
c.lf=T();nr(c);return m.return(k)})}
function $r(a,b){var c;return x(function(d){if(1==d.h)return w(d,lr(b),2);c=d.i;return d.return(ep(c,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",ap(f.h.put(g,void 0)).then(function(){return g})})}))})}
function as(a,b,c,d){c=void 0===c?!0:c;var e;return x(function(f){if(1==f.h)return w(f,lr(b),2);e=f.i;return f.return(ep(e,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),ap(h.h.put(k,void 0)).then(function(){return k})):Vo.resolve(void 0)})}))})}
function bs(a,b){var c;return x(function(d){if(1==d.h)return w(d,lr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function cs(a){var b,c;return x(function(d){if(1==d.h)return w(d,lr(a),2);b=d.i;c=T()-2592E6;return w(d,ep(b,["LogsRequestsStore"],{mode:"readwrite",da:!0},function(e){return op(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function ds(){x(function(a){return w(a,Wp(),0)})}
function nr(a){R("nwl_csi_killswitch")||.01>=Math.random()&&Bq("nwl_transaction_latency_payload",a)}
;var es={},fs=$p("ServiceWorkerLogsDatabase",{Ab:(es.SWHealthLog={Ib:1},es),uc:!0,upgrade:function(a,b){b(1)&&mp(fp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function gs(a){return yp(fs(),a)}
function hs(a){var b,c;x(function(d){if(1==d.h)return w(d,gs(a),2);b=d.i;c=T()-2592E6;return w(d,ep(b,["SWHealthLog"],{mode:"readwrite",da:!0},function(e){return op(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function is(a){var b;return x(function(c){if(1==c.h)return w(c,gs(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;var js={},ks=0;function ls(a){var b=new Image,c=""+ks++;js[c]=b;b.onload=b.onerror=function(){delete js[c]};
b.src=a}
;function ms(){this.h=new Map;this.i=!1}
function ns(){if(!ms.h){var a=A("yt.networkRequestMonitor.instance")||new ms;z("yt.networkRequestMonitor.instance",a);ms.h=a}return ms.h}
ms.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
ms.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
ms.prototype.removeParams=function(a){return a.split("?")[0]};
ms.prototype.removeParams=ms.prototype.removeParams;ms.prototype.isEndpointCFR=ms.prototype.isEndpointCFR;ms.prototype.requestComplete=ms.prototype.requestComplete;ms.getInstance=ns;var os;function ps(){os||(os=new so("yt.offline"));return os}
function qs(a){if(R("offline_error_handling")){var b=ps().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);ps().set("errors",b,2592E3,!0)}}
;function rs(){sf.call(this);var a=this;this.j=!1;this.i=yi();this.i.Ma("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=ps().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new S(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Om(d)}ps().set("errors",{},2592E3,!0)}}})}
v(rs,sf);function ss(){if(!rs.h){var a=A("yt.networkStatusManager.instance")||new rs;z("yt.networkStatusManager.instance",a);rs.h=a}return rs.h}
l=rs.prototype;l.ma=function(){return this.i.ma()};
l.kb=function(a){this.i.i=a};
l.ue=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
l.me=function(){this.j=!0};
l.Ma=function(a,b){return this.i.Ma(a,b)};
l.tc=function(a){a=wi(this.i,a);a.then(function(b){R("use_cfr_monitor")&&ns().requestComplete("generate_204",b)});
return a};
rs.prototype.sendNetworkCheckRequest=rs.prototype.tc;rs.prototype.listen=rs.prototype.Ma;rs.prototype.enableErrorFlushing=rs.prototype.me;rs.prototype.getWindowStatus=rs.prototype.ue;rs.prototype.networkStatusHint=rs.prototype.kb;rs.prototype.isNetworkAvailable=rs.prototype.ma;rs.getInstance=ss;function ts(a){a=void 0===a?{}:a;sf.call(this);var b=this;this.i=this.s=0;this.j=ss();var c=A("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.sc?(this.sc=a.sc,c("networkstatus-online",function(){us(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){us(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){tf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){tf(b,"publicytnetworkstatus-offline")})))}
v(ts,sf);ts.prototype.ma=function(){var a=A("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
ts.prototype.kb=function(a){var b=A("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
ts.prototype.tc=function(a){var b=this,c;return x(function(d){c=A("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&ns().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.kb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ma())})):c?d.return(c(a)):d.return(!0)})};
function us(a,b){a.sc?a.i?(zi.Da(a.s),a.s=zi.fa(function(){a.m!==b&&(tf(a,b),a.m=b,a.i=T())},a.sc-(T()-a.i))):(tf(a,b),a.m=b,a.i=T()):tf(a,b)}
;var vs;function ws(){var a=$q.call;vs||(vs=new ts({Pt:!0,Jt:!0}));a.call($q,this,{Y:{he:cs,tb:bs,rd:Br,Ee:$r,Rc:as,set:mr},W:vs,handleError:Om,ub:Pm,Pa:xs,now:T,Vd:qs,ya:ro(),Nc:"publicytnetworkstatus-online",Mc:"publicytnetworkstatus-offline",jc:!0,hc:.1,pc:cn("potential_esf_error_limit",10),T:R,Lb:!(ko()&&ys())});this.j=new Wh;R("networkless_immediately_drop_all_requests")&&ds();Xp("LogsDatabaseV2")}
v(ws,$q);function zs(){var a=A("yt.networklessRequestController.instance");a||(a=new ws,z("yt.networklessRequestController.instance",a),R("networkless_logging")&&Mp().then(function(b){a.O=b;br(a);a.j.resolve();a.jc&&Math.random()<=a.hc&&a.O&&hs(a.O);R("networkless_immediately_drop_sw_health_store")&&As(a)}));
return a}
ws.prototype.writeThenSend=function(a,b){b||(b={});ko()||(this.h=!1);$q.prototype.writeThenSend.call(this,a,b)};
ws.prototype.sendThenWrite=function(a,b,c){b||(b={});ko()||(this.h=!1);$q.prototype.sendThenWrite.call(this,a,b,c)};
ws.prototype.sendAndWrite=function(a,b){b||(b={});ko()||(this.h=!1);$q.prototype.sendAndWrite.call(this,a,b)};
ws.prototype.awaitInitialization=function(){return this.j.promise};
function As(a){var b;x(function(c){if(!a.O)throw b=Ro("clearSWHealthLogsDb"),b;return c.return(is(a.O).catch(function(d){a.handleError(d)}))})}
function xs(a,b,c){R("use_cfr_monitor")&&Bs(a,b);if(R("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(T())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;if(a)if(e)sn(a,void 0,"POST",e);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))sn(a,void 0,"GET","",void 0,void 0,f);else{b:{try{var g=new cb({url:a});if(g.j&&g.i||
g.l){var h=xc(yc(5,a)),k;if(!(k=!h||!h.endsWith("/aclk"))){var m=a.search(Jc),n=Ic(a,0,"ri",m);if(0>n)var q=null;else{var u=a.indexOf("&",n);if(0>u||u>m)u=m;q=decodeURIComponent(a.slice(n+3,-1!==u?u:0).replace(/\+/g," "))}k="1"!==q}var t=!k;break b}}catch(D){}t=!1}if(t){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var B=!0;break b}}catch(D){}B=!1}c=B?!0:!1}else c=!1;c||ls(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),
Pq(a,b.postBody,b,pn)):Pq(a,JSON.stringify(b.postParams),b,xn):pn(a,b)}
function Bs(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){ns().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){ns().requestComplete(a,!0);d(e,f)}}
function ys(){return"www.youtube-nocookie.com"!==zc(document.location.toString())}
;var Cs=!1,Ds=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Cs};z("ytNetworklessLoggingInitializationOptions",Ds);function Es(){var a;x(function(b){if(1==b.h)return w(b,Mp(),2);a=b.i;if(!a||!ko()&&!R("nwl_init_require_datasync_id_killswitch")||!ys())return b.v(0);Cs=!0;Ds.isNwlInitialized=Cs;return w(b,zs().awaitInitialization(),0)})}
;function Fs(a){var b=this;this.config_=null;a?this.config_=a:kq()&&(this.config_=lq());no(function(){Yq(b)},5E3)}
Fs.prototype.isReady=function(){!this.config_&&kq()&&(this.config_=lq());return!!this.config_};
function Zq(a,b,c,d){function e(B){B=void 0===B?!1:B;var D;if(d.retry&&"www.youtube-nocookie.com"!=h&&(B||R("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(D=Wq(b,c,m,k)),D)){var F=g.onSuccess,M=g.onFetchSuccess;g.onSuccess=function(Q,ca){Xq(D);F(Q,ca)};
c.onFetchSuccess=function(Q,ca){Xq(D);M(Q,ca)}}try{if(B&&d.retry&&!d.Ad.bypassNetworkless)g.method="POST",d.Ad.writeThenSend?zs().writeThenSend(t,g):zs().sendAndWrite(t,g);
else if(d.compress)if(g.postBody){var O=g.postBody;"string"!==typeof O&&(O=JSON.stringify(g.postBody));Pq(t,O,g,pn)}else Pq(t,JSON.stringify(g.postParams),g,xn);else R("web_all_payloads_via_jspb")?pn(t,g):xn(t,g)}catch(Q){if("InvalidAccessError"==Q.name)D&&(Xq(D),D=0),Pm(Error("An extension is blocking network request."));else throw Q;}D&&no(function(){Yq(a)},5E3)}
!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Pm(new S("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new S("innertube xhrclient not ready",b,c,d);Om(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(B,D){if(d.onSuccess)d.onSuccess(D)},
onFetchSuccess:function(B){if(d.onSuccess)d.onSuccess(B)},
onError:function(B,D){if(d.onError)d.onError(D)},
onFetchError:function(B){if(d.onError)d.onError(B)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Ae)&&(h=f);var k=a.config_.Ce||!1,m=uq(k,h,d);Object.assign(g.headers,m);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},u=a.config_.Be&&f;u=u&&f.startsWith("Bearer");u||(q.key=a.config_.innertubeApiKey);var t=Ym(""+h+n,q||{},!0);(A("ytNetworklessLoggingInitializationOptions")?
Ds.isNwlInitialized:Cs)?Kp().then(function(B){e(B)}):e(!1)}
;var Gs=0,Hs=$c?"webkit":Zc?"moz":Xc?"ms":Wc?"o":"";z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Gs});var Is={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Js(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Is||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Ks(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Js.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Js.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Js.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var pb=y.ytEventsEventsListeners||{};z("ytEventsEventsListeners",pb);var Ls=y.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Ls);
function Ms(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ob(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ra(e[4])&&Ra(d)&&tb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Ns=eb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Os(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Ms(a,b,c,d);if(e)return e;e=++Ls.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Js(h);if(!Cf(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Js(h);
h.currentTarget=a;return c.call(a,h)};
g=Nm(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ns()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);pb[e]=[a,b,c,g,d];return e}
function Ps(a){a&&("string"==typeof a&&(a=[a]),gb(a,function(b){if(b in pb){var c=pb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ns()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete pb[b]}}))}
;function Qs(a){this.L=a;this.i=null;this.m=0;this.A=null;this.s=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.V=Os(window,"mousemove",Xa(this.Z,this));a=Xa(this.R,this);"function"===typeof a&&(a=Nm(a));this.aa=window.setInterval(a,25)}
$a(Qs,K);Qs.prototype.Z=function(a){void 0===a.h&&Ks(a);var b=a.h;void 0===a.i&&Ks(a);this.i=new yf(b,a.i)};
Qs.prototype.R=function(){if(this.i){var a=T();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.L();this.s=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Qs.prototype.M=function(){window.clearInterval(this.aa);Ps(this.V)};var Rs={};
function Ss(a){var b=void 0===a?{}:a;a=void 0===b.Ne?!1:b.Ne;b=void 0===b.ne?!0:b.ne;if(null==A("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&Ts();Os(document,"keydown",Ts);Os(document,"keyup",Ts);Os(document,"mousedown",Ts);Os(document,"mouseup",Ts);a?Os(window,"touchmove",function(){Us("touchmove",200)},{passive:!0}):(Os(window,"resize",function(){Us("resize",200)}),b&&Os(window,"scroll",function(){Us("scroll",200)}));
new Qs(function(){Us("mouse",100)});
Os(document,"touchstart",Ts,{passive:!0});Os(document,"touchend",Ts,{passive:!0})}}
function Us(a,b){Rs[a]||(Rs[a]=!0,zi.fa(function(){Ts();Rs[a]=!1},b))}
function Ts(){null==A("_lact",window)&&Ss();var a=Date.now();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function Vs(){var a=A("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Ws=y.ytPubsubPubsubInstance||new Wi,Xs=y.ytPubsubPubsubSubscribedKeys||{},Ys=y.ytPubsubPubsubTopicToKeys||{},Zs=y.ytPubsubPubsubIsSynchronous||{};function $s(a,b){var c=at();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Xs[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Zs[a]?f():jn(f,0)}catch(g){Om(g)}},void 0);
Xs[d]=!0;Ys[a]||(Ys[a]=[]);Ys[a].push(d);return d}return 0}
function bt(a){var b=at();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),gb(a,function(c){b.unsubscribeByKey(c);delete Xs[c]}))}
function ct(a,b){var c=at();c&&c.publish.apply(c,arguments)}
function dt(a){var b=at();if(b)if(b.clear(a),a)et(a);else for(var c in Ys)et(c)}
function at(){return y.ytPubsubPubsubInstance}
function et(a){Ys[a]&&(a=Ys[a],gb(a,function(b){Xs[b]&&delete Xs[b]}),a.length=0)}
Wi.prototype.subscribe=Wi.prototype.subscribe;Wi.prototype.unsubscribeByKey=Wi.prototype.Gb;Wi.prototype.publish=Wi.prototype.fb;Wi.prototype.clear=Wi.prototype.clear;z("ytPubsubPubsubInstance",Ws);z("ytPubsubPubsubTopicToKeys",Ys);z("ytPubsubPubsubIsSynchronous",Zs);z("ytPubsubPubsubSubscribedKeys",Xs);var ft=Symbol("injectionDeps");function gt(a){this.name=a}
gt.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function ht(a){this.key=a}
function jt(){this.h=new Map;this.i=new Map}
jt.prototype.resolve=function(a){return a instanceof ht?kt(this,a.key,[],!0):kt(this,a,[])};
function kt(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.i.has(b))return a.i.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(d.Sd)var e=d.Sd;else if(d.pf)e=d[ft]?lt(a,d[ft],c):[],e=d.pf.apply(d,ia(e));else if(d.Rd){e=d.Rd;var f=e[ft]?lt(a,e[ft],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ia(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.au||a.i.set(b,e);return e}
function lt(a,b,c){return b?b.map(function(d){return d instanceof ht?kt(a,d.key,c,!0):kt(a,d,c)}):[]}
;var mt;function nt(){mt||(mt=new jt);return mt}
;function ot(){this.store={};this.h={}}
ot.prototype.storePayload=function(a,b){a=pt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
ot.prototype.extractMatchingEntries=function(a){a=qt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ia(this.store[a[c]])),delete this.store[a[c]]);return b};
ot.prototype.getSequenceCount=function(a){a=qt(this,a);for(var b=0,c=0;c<a.length;c++)b+=this.store[a[c]].length||0;return b};
function qt(a,b){var c=pt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&pt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(rt(b.auth,g[0])){var h=b.isJspb;rt(void 0===h?"undefined":h?"true":"false",g[1])&&rt(b.cttAuthInfo,g[2])&&e.push(d[f])}}return a.h[c]=e}
function rt(a,b){return void 0===a||"undefined"===a?!0:a===b}
ot.prototype.getSequenceCount=ot.prototype.getSequenceCount;ot.prototype.extractMatchingEntries=ot.prototype.extractMatchingEntries;ot.prototype.storePayload=ot.prototype.storePayload;function pt(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo].join("/")}
;function st(a,b){if(a)return a[b.name]}
;var tt=cn("initial_gel_batch_timeout",2E3),ut=cn("gel_queue_timeout_max_ms",6E4),vt=Math.pow(2,16)-1,wt=void 0;function xt(){this.j=this.h=this.i=0}
var zt=new xt,At=new xt,Bt,Ct=!0,Dt=y.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",Dt);var Et=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};z("ytLoggingTransportTokensToJspbCttTargetIds_",Et);var Ft={};function Gt(){var a=A("yt.logging.ims");a||(a=new ot,z("yt.logging.ims",a));return a}
function Ht(a,b){R("web_all_payloads_via_jspb")&&Pm(new S("transport.log called for JSON in JSPB only experiment"));if("log_event"===a.endpoint){It(a);var c=Jt(a);Ft[c]=!0;var d={cttAuthInfo:c,isJspb:!1};Gt().storePayload(d,a.payload);Kt(b,c,!1,d)}}
function Lt(a,b){if("log_event"===a.endpoint){It(void 0,a);var c=Jt(a,!0);Ft[c]=!0;var d={cttAuthInfo:c,isJspb:!0};Gt().storePayload(d,a.payload.toJSON());Kt(b,c,!0,d)}}
function Kt(a,b,c,d){c=void 0===c?!1:c;a&&(wt=new a);a=cn("tvhtml5_logging_max_batch_ads_fork")||cn("tvhtml5_logging_max_batch")||cn("web_logging_max_batch")||100;var e=T(),f=c?At.j:zt.j,g=0;d&&(g=Gt().getSequenceCount(d));g>=a?Bt||(Bt=Mt(function(){Nt({writeThenSend:!0},R("flush_only_full_queue")?b:void 0,c);Bt=void 0},0)):10<=e-f&&(Ot(c),c?At.j=e:zt.j=e)}
function Pt(a,b){R("web_all_payloads_via_jspb")&&Pm(new S("transport.logIsolatedGelPayload called in JSPB only experiment"));if("log_event"===a.endpoint){It(a);var c=Jt(a),d=new Map;d.set(c,[a.payload]);b&&(wt=new b);return new Of(function(e,f){wt&&wt.isReady()?Qt(d,wt,e,f,{bypassNetworkless:!0},!0):e()})}}
function Rt(a,b){if("log_event"===a.endpoint){It(void 0,a);var c=Jt(a,!0),d=new Map;d.set(c,[a.payload.toJSON()]);b&&(wt=new b);return new Of(function(e){wt&&wt.isReady()?St(d,wt,e,{bypassNetworkless:!0},!0):e()})}}
function Jt(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new sm;c.videoId?d.setVideoId(c.videoId):c.playlistId&&de(d,2,tm,c.playlistId);Et[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Dt[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Nt(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;!c&&R("web_all_payloads_via_jspb")&&Pm(new S("transport.flushLogs called for JSON in JSPB only experiment"));new Of(function(d,e){c?(Tt(At.i),Tt(At.h),At.h=0):(Tt(zt.i),Tt(zt.h),zt.h=0);if(wt&&wt.isReady()){var f=a,g=c,h=wt;f=void 0===f?{}:f;g=void 0===g?!1:g;var k=new Map,m=new Map;if(void 0!==b)g?(e=Gt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),k.set(b,e),St(k,h,d,f)):(k=Gt().extractMatchingEntries({isJspb:g,cttAuthInfo:b}),m.set(b,
k),Qt(m,h,d,e,f));else if(g){e=r(Object.keys(Ft));for(g=e.next();!g.done;g=e.next())m=g.value,g=Gt().extractMatchingEntries({isJspb:!0,cttAuthInfo:m}),0<g.length&&k.set(m,g),delete Ft[m];St(k,h,d,f)}else{k=r(Object.keys(Ft));for(g=k.next();!g.done;g=k.next()){g=g.value;var n=Gt().extractMatchingEntries({isJspb:!1,cttAuthInfo:g});0<n.length&&m.set(g,n);delete Ft[g]}Qt(m,h,d,e,f)}}else Ot(c),d()})}
function Ot(a){a=void 0===a?!1:a;if(R("web_gel_timeout_cap")&&(!a&&!zt.h||a&&!At.h)){var b=Mt(function(){Nt({writeThenSend:!0},void 0,a)},ut);
a?At.h=b:zt.h=b}Tt(a?At.i:zt.i);b=P("LOGGING_BATCH_TIMEOUT",cn("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Ct&&(b=tt);b=Mt(function(){Nt({writeThenSend:!0},void 0,a)},b);
a?At.i=b:zt.i=b}
function Qt(a,b,c,d,e,f){e=void 0===e?{}:e;var g=Math.round(T()),h=a.size,k={};a=r(a);for(var m=a.next();!m.done;k={Vb:k.Vb,ab:k.ab,Db:k.Db,Xb:k.Xb,Wb:k.Wb},m=a.next()){var n=r(m.value);m=n.next().value;n=n.next().value;k.ab=vb({context:mq(b.config_||lq())});if(!Qa(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}k.ab.events=n;(n=Dt[m])&&Ut(k.ab,m,n);delete Dt[m];k.Db="visitorOnlyApprovedKey"===m;Vt(k.ab,g,k.Db);Wt(e);k.Xb=function(q){R("update_log_event_config")&&zi.fa(function(){return x(function(u){return w(u,
Xt(q),0)})});
h--;h||c()};
k.Vb=0;k.Wb=function(q){return function(){q.Vb++;if(e.bypassNetworkless&&1===q.Vb)try{Zq(b,"log_event",q.ab,Yt({writeThenSend:!0},q.Db,q.Xb,q.Wb,f)),Ct=!1}catch(u){Om(u),d()}h--;h||c()}}(k);
try{Zq(b,"log_event",k.ab,Yt(e,k.Db,k.Xb,k.Wb,f)),Ct=!1}catch(q){Om(q),d()}}}
function St(a,b,c,d,e){d=void 0===d?{}:d;var f=Math.round(T()),g=a.size,h=new Map([].concat(ia(a)));h=r(h);for(var k=h.next();!k.done;k=h.next()){var m=r(k.value).next().value,n=a.get(m);k=new um;var q=tq(b.config_||lq());I(k,$k,1,q);n=n?Zt(n):[];n=r(n);for(q=n.next();!q.done;q=n.next())ke(k,3,om,q.value);(n=Et[m])&&$t(k,m,n);delete Et[m];m="visitorOnlyApprovedKey"===m;au(k,f,m);Wt(d);k=Ae(k);m=Yt(d,m,function(u){R("update_log_event_config")&&zi.fa(function(){return x(function(t){return w(t,Xt(u),
0)})});
g--;g||c()},function(){g--;
g||c()},e);
m.headers["Content-Type"]="application/json+protobuf";m.postBodyFormat="JSPB";m.postBody=k;Zq(b,"log_event","",m);Ct=!1}}
function Wt(a){R("always_send_and_write")&&(a.writeThenSend=!1)}
function Yt(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Ad:a,dangerousLogToVisitorSession:b,Ft:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};bu()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(T())));return a}
function Vt(a,b,c){bu()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&(c=cu(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function au(a,b,c){bu()||G(a,2,b);if(!c&&(b=P("EVENT_ID"))){c=cu();var d=new rm;G(d,1,b);G(d,2,c);I(a,rm,5,d)}}
function cu(){var a=P("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*vt/2));a++;a>vt&&(a=1);Jm("BATCH_CLIENT_COUNTER",a);return a}
function Ut(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function $t(a,b,c){var d=1===ee(c,tm)?1:-1;if(ae(c,d))d=1;else if(c.getPlaylistId())d=2;else return;I(a,sm,4,c);a=fe(a,$k,1)||new $k;c=fe(a,Yk,3)||new Yk;var e=new Xk;G(e,2,b);G(e,1,d);ke(c,12,Xk,e);I(a,Yk,3,c)}
function Zt(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new om(a[c]))}catch(d){Om(new S("Transport failed to deserialize "+String(a[c])))}return b}
function It(a,b){if(A("yt.logging.transport.enableScrapingForTest")){var c=A("yt.logging.transport.scrapedPayloadsForTesting"),d=A("yt.logging.transport.payloadToScrape");b&&(b=A("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}z("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function bu(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function Mt(a,b){return R("transport_use_scheduler")?no(a,b):jn(a,b)}
function Tt(a){R("transport_use_scheduler")?zi.Da(a):window.clearTimeout(a)}
function Xt(a){var b,c,d,e,f,g,h,k,m,n;return x(function(q){return 1==q.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=st(d,Fk),g=null==(f=d)?void 0:f.hotHashData,h=st(d,Ek),m=null==(k=d)?void 0:k.coldHashData,(n=nt().resolve(new ht(hq)))?g?e?w(q,iq(n,g,e),2):w(q,iq(n,g),2):q.v(2):q.return()):m?h?w(q,jq(n,m,h),0):w(q,jq(n,m),0):q.v(0)})}
;var du=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",du);
function eu(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||T());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;R("enable_unknown_lact_fix_on_html5")&&Ss();a=Vs();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};R("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:fu(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete du[d.sequenceGroup]);(d.sendIsolatedPayload?Pt:Ht)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},c)}
function gu(a){Nt(void 0,void 0,void 0===a?!1:a)}
function fu(a){du[a]=a in du?du[a]+1:0;return du[a]}
;var hu=[];function Bo(a,b,c){c=void 0===c?{}:c;var d=Fs;P("ytLoggingEventsDefaultDisabled",!1)&&Fs===Fs&&(d=null);R("web_all_payloads_via_jspb")?(c.timestamp||(c.timestamp=T()),hu.push({Oc:a,payload:b,options:c})):eu(a,b,d,c)}
;var iu=y.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",iu);
function ju(a,b,c){c=void 0===c?{}:c;var d=Math.round(c.timestamp||T());G(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Vs();d=new nm;G(d,1,c.timestamp||!isFinite(e)?-1:e);if(R("log_sequence_info_on_gel_web")&&c.sequenceGroup){e=c.sequenceGroup;var f=fu(e),g=new mm;G(g,2,f);G(g,1,e);I(d,mm,3,g);c.endOfSequence&&delete iu[c.sequenceGroup]}I(a,nm,33,d);(c.sendIsolatedPayload?Rt:Lt)({endpoint:"log_event",payload:a,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},b)}
;function ku(a,b){b=void 0===b?{}:b;var c=!1;P("ytLoggingEventsDefaultDisabled",!1)&&(c=!0);ju(a,c?null:Fs,b)}
;function lu(a,b,c){var d=new om;ie(d,bm,72,pm,a);c?ju(d,c,b):ku(d,b)}
function mu(a,b,c){var d=new om;ie(d,am,73,pm,a);c?ju(d,c,b):ku(d,b)}
function nu(a,b,c){var d=new om;ie(d,$l,78,pm,a);c?ju(d,c,b):ku(d,b)}
function ou(a,b,c){var d=new om;ie(d,cm,208,pm,a);c?ju(d,c,b):ku(d,b)}
function pu(a,b,c){var d=new om;ie(d,Vl,156,pm,a);c?ju(d,c,b):ku(d,b)}
function qu(a,b,c){var d=new om;ie(d,Xl,215,pm,a);c?ju(d,c,b):ku(d,b)}
;var ru=new Set,su=0,tu=0,uu=0,vu=[],wu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ao(a){xu(a)}
function yu(a){xu(a,"WARNING")}
function xu(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=f||{},h=void 0===b?"ERROR":b;h=void 0===h?"ERROR":h;if(a){a.hasOwnProperty("level")&&a.level&&(h=a.level);if(R("console_log_js_exceptions")){var k=[];k.push("Name: "+a.name);k.push("Message: "+a.message);a.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(a.params));a.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(a.args));
k.push("File name: "+a.fileName);k.push("Stacktrace: "+a.stack);window.console.log(k.join("\n"),a)}if(!(5<=su)){var m=vu,n=Le(a),q=n.message||"Unknown Error",u=n.name||"UnknownError",t=n.stack||a.i||"Not available";if(t.startsWith(u+": "+q)){var B=t.split("\n");B.shift();t=B.join("\n")}var D=n.lineNumber||"Not available",F=n.fileName||"Not available",M=t,O=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var Q=0;Q<a.args.length&&!(O=Jn(a.args[Q],"params."+Q,g,O),500<=O);Q++);else if(a.hasOwnProperty("params")&&
a.params){var ca=a.params;if("object"===typeof a.params)for(var X in ca){if(ca[X]){var wb="params."+X,Za=Ln(ca[X]);g[wb]=Za;O+=wb.length+Za.length;if(500<O)break}}else g.params=Ln(ca)}if(m.length)for(var sa=0;sa<m.length&&!(O=Jn(m[sa],"params.context."+sa,g,O),500<=O);sa++);navigator.vendor&&!g.hasOwnProperty("vendor")&&(g["device.vendor"]=navigator.vendor);var H={message:q,name:u,lineNumber:D,fileName:F,stack:M,params:g,sampleWeight:1},oa=Number(a.columnNumber);isNaN(oa)||(H.lineNumber=H.lineNumber+
":"+oa);if("IGNORED"===a.level)var ja=0;else a:{for(var df=Fn(),ef=r(df.Va),Ld=ef.next();!Ld.done;Ld=ef.next()){var wa=Ld.value;if(H.message&&H.message.match(wa.Qt)){ja=wa.weight;break a}}for(var or=r(df.Ra),gl=or.next();!gl.done;gl=or.next()){var pr=gl.value;if(pr.callback(H)){ja=pr.weight;break a}}ja=1}H.sampleWeight=ja;for(var qr=r(An),hl=qr.next();!hl.done;hl=qr.next()){var il=hl.value;if(il.oc[H.name])for(var rr=r(il.oc[H.name]),jl=rr.next();!jl.done;jl=rr.next()){var sr=jl.value,Ch=H.message.match(sr.regexp);
if(Ch){H.params["params.error.original"]=Ch[0];for(var kl=sr.groups,tr={},Md=0;Md<kl.length;Md++)tr[kl[Md]]=Ch[Md+1],H.params["params.error."+kl[Md]]=Ch[Md+1];H.message=il.Kc(tr);break}}}H.params||(H.params={});var ur=Fn();H.params["params.errorServiceSignature"]="msg="+ur.Va.length+"&cb="+ur.Ra.length;H.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(H.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Db("sample").constructor!==
Bb&&(H.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(H);if(0!==H.sampleWeight&&!ru.has(H.message)){if("ERROR"===h){Gn.fb("handleError",H);if(R("record_app_crashed_web")&&0===uu&&1===H.sampleWeight)if(uu++,R("errors_via_jspb")){var ll=new Ml;G(ll,1,1);if(!R("report_client_error_with_app_crash_ks")){var vr=new Hl;G(vr,1,H.message);var wr=new Il;I(wr,Hl,3,vr);var xr=new Jl;I(xr,Il,5,wr);var yr=new Kl;I(yr,Jl,9,xr);I(ll,Kl,4,yr)}var zr=new om;ie(zr,Ml,20,
pm,ll);ku(zr)}else{var Ar={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};R("report_client_error_with_app_crash_ks")||(Ar.systemHealth={crashData:{clientError:{logMessage:{message:H.message}}}});Bo("appCrashed",Ar)}tu++}else"WARNING"===h&&Gn.fb("handleWarning",H);if(R("kevlar_gel_error_routing"))a:{var ff=h;if(R("errors_via_jspb")){if(zu())var Cr=void 0;else{var Nd=new El;G(Nd,1,H.stack);H.fileName&&G(Nd,4,H.fileName);var Qb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Qb.length&&(1!==
Qb.length||isNaN(Number(Qb[0]))?2!==Qb.length||isNaN(Number(Qb[0]))||isNaN(Number(Qb[1]))||(G(Nd,2,Number(Qb[0])),G(Nd,3,Number(Qb[1]))):G(Nd,2,Number(Qb[0])));var Oc=new Hl;G(Oc,1,H.message);G(Oc,3,H.name);G(Oc,6,H.sampleWeight);"ERROR"===ff?G(Oc,2,2):"WARNING"===ff?G(Oc,2,1):G(Oc,2,0);var ml=new Fl;G(ml,1,!0);ie(ml,El,3,Gl,Nd);var nc=new Cl;G(nc,3,window.location.href);for(var Dr=P("FEXP_EXPERIMENTS",[]),nl=0;nl<Dr.length;nl++){var vy=Dr[nl];Ud(nc);ce(nc,5,2,!1,!1).push(vy)}var ol=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");
if(!Km()&&ol)for(var Er=r(Object.keys(ol)),Pc=Er.next();!Pc.done;Pc=Er.next()){var Fr=Pc.value,pl=new Bl;G(pl,1,Fr);G(pl,2,String(ol[Fr]));ke(nc,4,Bl,pl)}var ql=H.params;if(ql){var Gr=r(Object.keys(ql));for(Pc=Gr.next();!Pc.done;Pc=Gr.next()){var Hr=Pc.value,rl=new Bl;G(rl,1,"client."+Hr);G(rl,2,String(ql[Hr]));ke(nc,4,Bl,rl)}}var Ir=P("SERVER_NAME"),Jr=P("SERVER_VERSION");if(Ir&&Jr){var sl=new Bl;G(sl,1,"server.name");G(sl,2,Ir);ke(nc,4,Bl,sl);var tl=new Bl;G(tl,1,"server.version");G(tl,2,Jr);ke(nc,
4,Bl,tl)}var Dh=new Il;I(Dh,Cl,1,nc);I(Dh,Fl,2,ml);I(Dh,Hl,3,Oc);Cr=Dh}var Kr=Cr;if(!Kr)break a;var Lr=new om;ie(Lr,Il,163,pm,Kr);ku(Lr)}else{if(zu())var Mr=void 0;else{var gf={stackTrace:H.stack};H.fileName&&(gf.filename=H.fileName);var Rb=H.lineNumber&&H.lineNumber.split?H.lineNumber.split(":"):[];0!==Rb.length&&(1!==Rb.length||isNaN(Number(Rb[0]))?2!==Rb.length||isNaN(Number(Rb[0]))||isNaN(Number(Rb[1]))||(gf.lineNumber=Number(Rb[0]),gf.columnNumber=Number(Rb[1])):gf.lineNumber=Number(Rb[0]));
var ul={level:"ERROR_LEVEL_UNKNOWN",message:H.message,errorClassName:H.name,sampleWeight:H.sampleWeight};"ERROR"===ff?ul.level="ERROR_LEVEL_ERROR":"WARNING"===ff&&(ul.level="ERROR_LEVEL_WARNNING");var wy={isObfuscated:!0,browserStackInfo:gf},Od={pageUrl:window.location.href,kvPairs:[]};P("FEXP_EXPERIMENTS")&&(Od.experimentIds=P("FEXP_EXPERIMENTS"));var vl=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Km()&&vl)for(var Nr=r(Object.keys(vl)),Qc=Nr.next();!Qc.done;Qc=Nr.next()){var Or=Qc.value;Od.kvPairs.push({key:Or,
value:String(vl[Or])})}var wl=H.params;if(wl){var Pr=r(Object.keys(wl));for(Qc=Pr.next();!Qc.done;Qc=Pr.next()){var Qr=Qc.value;Od.kvPairs.push({key:"client."+Qr,value:String(wl[Qr])})}}var Rr=P("SERVER_NAME"),Sr=P("SERVER_VERSION");Rr&&Sr&&(Od.kvPairs.push({key:"server.name",value:Rr}),Od.kvPairs.push({key:"server.version",value:Sr}));Mr={errorMetadata:Od,stackTrace:wy,logMessage:ul}}var Tr=Mr;if(!Tr)break a;Bo("clientError",Tr)}if("ERROR"===ff||R("errors_flush_gel_always_killswitch"))b:{if(R("web_fp_via_jspb")&&
(gu(!0),!R("web_fp_via_jspb_and_json")))break b;gu()}}if(!R("suppress_error_204_logging")){var hf=H.params||{},oc={urlParams:{a:"logerror",t:"jserror",type:H.name,msg:H.message.substr(0,250),line:H.lineNumber,level:h,"client.name":hf.name},postParams:{url:P("PAGE_NAME",window.location.href),file:H.fileName},method:"POST"};hf.version&&(oc["client.version"]=hf.version);if(oc.postParams){H.stack&&(oc.postParams.stack=H.stack);for(var Ur=r(Object.keys(hf)),xl=Ur.next();!xl.done;xl=Ur.next()){var Vr=xl.value;
oc.postParams["client."+Vr]=hf[Vr]}var yl=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(yl)for(var Wr=r(Object.keys(yl)),zl=Wr.next();!zl.done;zl=Wr.next()){var Xr=zl.value;oc.postParams[Xr]=yl[Xr]}var Yr=P("SERVER_NAME"),Zr=P("SERVER_VERSION");Yr&&Zr&&(oc.postParams["server.name"]=Yr,oc.postParams["server.version"]=Zr)}pn(P("ECATCHER_REPORT_HOST","")+"/error_204",oc)}try{ru.add(H.message)}catch(iA){}su++}}}}
function zu(){for(var a=r(wu),b=a.next();!b.done;b=a.next())if(zn(b.value.toLowerCase()))return!0;return!1}
function Au(a){var b=Ka.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ia(b))}
;function Bu(){this.register=new Map}
function Cu(a){a=r(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Ut("ABORTED")}
Bu.prototype.clear=function(){Cu(this);this.register.clear()};
var Du=new Bu;var Eu=Date.now().toString();function Fu(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Eu)for(b=1,c=0;c<Eu.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Eu.charCodeAt(c),b++;return a}
function Gu(){if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];return a}catch(d){}return Fu()}
function Hu(){for(var a=Gu(),b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;var Iu=y.ytLoggingDocDocumentNonce_;Iu||(Iu=Hu(),z("ytLoggingDocDocumentNonce_",Iu));var Ju=Iu;var Ku={ck:0,kg:1,ug:2,Nn:3,ek:4,Ks:5,No:6,Eq:7,Tp:8,rq:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};function Lu(a){this.N=a}
function Mu(a){return new Lu({trackingParams:a})}
Lu.prototype.getAsJson=function(){var a={};void 0!==this.N.trackingParams?a.trackingParams=this.N.trackingParams:(a.veType=this.N.veType,void 0!==this.N.veCounter&&(a.veCounter=this.N.veCounter),void 0!==this.N.elementIndex&&(a.elementIndex=this.N.elementIndex));void 0!==this.N.dataElement&&(a.dataElement=this.N.dataElement.getAsJson());void 0!==this.N.youtubeData&&(a.youtubeData=this.N.youtubeData);return a};
Lu.prototype.getAsJspb=function(){var a=new Ol;if(void 0!==this.N.trackingParams){var b=this.N.trackingParams;if(null!=b)if("string"===typeof b)b=b?new Cd(b,zd):Ad||(Ad=new Cd(null,zd));else if(b.constructor!==Cd)if(yd(b))b=b.length?new Cd(new Uint8Array(b),zd):Ad||(Ad=new Cd(null,zd));else throw Error();G(a,1,b)}else void 0!==this.N.veType&&G(a,2,this.N.veType),void 0!==this.N.veCounter&&G(a,6,this.N.veCounter),void 0!==this.N.elementIndex&&G(a,3,this.N.elementIndex);void 0!==this.N.dataElement&&
(b=this.N.dataElement.getAsJspb(),I(a,Ol,7,b));void 0!==this.N.youtubeData&&I(a,Kk,8,this.N.jspbYoutubeData);return a};
Lu.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Lu.prototype.isClientVe=function(){return!this.N.trackingParams&&!!this.N.veType};function Nu(a){a=void 0===a?0:a;return 0===a?"client-screen-nonce":"client-screen-nonce."+a}
function Ou(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Pu(a){return P(Ou(void 0===a?0:a))}
z("yt_logging_screen.getRootVeType",Pu);function Qu(a){return(a=Pu(void 0===a?0:a))?new Lu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function Ru(){var a=P("csn-to-ctt-auth-info");a||(a={},Jm("csn-to-ctt-auth-info",a));return a}
function Su(a){a=P(Nu(void 0===a?0:a));if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
z("yt_logging_screen.getCurrentCsn",Su);function Tu(a){for(var b=r(Object.values(Ku)),c=b.next();!c.done;c=b.next())if(Su(c.value)===a)return!0;return!1}
function Uu(a,b,c){var d=Ru();(c=Su(c))&&delete d[c];b&&(d[a]=b)}
function Vu(a){return Ru()[a]}
z("yt_logging_screen.getCttAuthInfo",Vu);function Wu(a,b,c,d){c=void 0===c?0:c;if(a!==P(Nu(c))||b!==P(Ou(c)))if(Uu(a,d,c),Jm(Nu(c),a),Jm(Ou(c),b),b=function(){setTimeout(function(){if(a)if(R("web_time_via_jspb")){var e=new Pl;G(e,1,Ju);G(e,2,a);var f=new om;ie(f,Pl,111,pm,e);ku(f)}else Bo("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ju,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
z("yt_logging_screen.setCurrentScreen",Wu);var Xu=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",Xu);function Yu(a){Em(Xu,arguments)}
;var Zu={jg:3611,qf:27686,rf:85013,sf:23462,tf:157557,uf:42016,vf:26926,wf:51236,xf:79148,yf:50160,zf:77504,Lf:153587,Mf:87907,Nf:18630,Of:54445,Pf:80935,Qf:152172,Rf:105675,Sf:150723,Tf:37521,Uf:147285,Vf:47786,Wf:98349,Xf:168271,Yf:168954,Zf:168277,ag:168273,cg:168270,dg:123695,eg:6827,fg:29434,gg:171388,hg:7282,ig:124448,mg:32276,lg:76278,ng:147868,og:147869,pg:93911,qg:106531,rg:27259,sg:27262,tg:27263,vg:21759,wg:160866,xg:171243,yg:160789,zg:171244,Ag:171241,Bg:171245,Cg:171242,Dg:38408,Eg:80637,
Fg:68727,Gg:68728,Hg:80353,Ig:80356,Jg:74610,Kg:45707,Lg:83962,Mg:83970,Ng:46713,Og:166591,Pg:89711,Qg:74612,Rg:155792,Sg:93265,Tg:74611,Ug:131380,Wg:128979,Xg:139311,Yg:128978,Vg:131391,Zg:105350,bh:139312,dh:134800,ah:131392,fh:113533,gh:93252,hh:99357,jh:94521,kh:114252,lh:113532,mh:94522,ih:94583,nh:88E3,oh:139580,ph:93253,qh:93254,rh:94387,sh:94388,th:93255,uh:97424,eh:72502,vh:110111,wh:76019,yh:117092,zh:117093,xh:89431,Ah:110466,Bh:77240,Ch:60508,Dh:148123,Eh:148124,Fh:137401,Gh:137402,Hh:137046,
Ih:73393,Jh:113534,Kh:92098,Lh:131381,Mh:84517,Nh:83759,Oh:162711,Ph:162712,Qh:80357,Rh:86113,Sh:72598,Th:168413,Uh:72733,Vh:107349,Wh:124275,Xh:118203,Yh:133275,Zh:160157,ai:152569,bi:156651,ci:133274,di:160159,fi:160158,gi:133272,hi:133273,ii:133276,ji:144507,ki:143247,li:156652,mi:143248,ni:143249,oi:143250,ri:143251,si:156653,ti:144401,wi:117431,vi:133797,xi:153964,yi:128572,zi:133405,Ai:117429,Bi:117430,Ci:174734,Di:117432,Ei:173996,Fi:173995,Gi:174953,Hi:173994,Ii:173997,Ji:120080,Ki:117259,
Li:156655,Mi:156654,Ni:121692,Oi:145656,Pi:156656,Qi:145655,Ri:145653,Si:145654,Ti:145657,Ui:132972,Vi:133051,Wi:133658,Xi:132971,Yi:97615,aj:143359,Zi:143356,cj:143361,bj:143358,ej:143360,dj:143357,fj:142303,gj:143353,hj:172859,ij:143354,jj:144479,kj:143355,lj:31402,nj:133624,oj:146477,pj:133623,qj:133622,mj:133621,rj:84774,tj:160801,sj:95117,uj:172721,vj:150497,wj:98930,xj:98931,yj:98932,zj:153320,Aj:153321,Bj:43347,Cj:129889,Dj:149123,Ej:45474,Fj:100352,Gj:84758,Hj:98443,Ij:117985,Jj:74613,Kj:155911,
Lj:74614,Mj:64502,Nj:136032,Oj:74615,Pj:74616,Qj:122224,Rj:74617,Sj:77820,Tj:74618,Uj:93278,Vj:93274,Wj:93275,Xj:93276,Yj:22110,Zj:29433,ak:133798,bk:132295,dk:120541,fk:82047,gk:113550,hk:75836,ik:75837,jk:42352,kk:84512,lk:76065,mk:75989,sk:51879,tk:16623,uk:32594,vk:27240,wk:32633,xk:74858,yk:156999,Ak:3945,zk:16989,Bk:45520,Ck:25488,Dk:25492,Ek:25494,Fk:55760,Gk:14057,Hk:18451,Ik:57204,Jk:57203,Kk:17897,Lk:57205,Mk:18198,Nk:17898,Ok:17909,Pk:43980,Qk:46220,Rk:11721,Sk:147994,Tk:49954,Uk:96369,
Vk:3854,Wk:151633,Xk:56251,Yk:159108,Zk:25624,al:152036,yl:16906,zl:99999,Al:68172,Bl:47973,Cl:72773,Dl:26970,El:26971,Fl:96805,Gl:17752,Hl:73233,Il:109512,Jl:22256,Kl:14115,Ll:22696,Ml:89278,Nl:89277,Ol:109513,Pl:43278,Ql:43459,Rl:43464,Sl:89279,Tl:43717,Ul:55764,Vl:22255,Wl:147912,Xl:89281,Yl:40963,Zl:43277,am:43442,bm:91824,cm:120137,dm:96367,em:36850,fm:72694,gm:37414,hm:36851,jm:124863,im:121343,km:73491,lm:54473,mm:166861,nm:43375,om:46674,pm:143815,qm:139095,rm:144402,sm:149968,tm:149969,um:32473,
vm:72901,wm:72906,xm:50612,ym:50613,zm:50942,Am:84938,Bm:84943,Cm:84939,Dm:84941,Em:84944,Fm:84940,Gm:84942,Hm:35585,Im:51926,Jm:79983,Km:18921,Lm:57893,Mm:41182,Nm:135732,Om:33424,Pm:22207,Qm:36229,Rm:22206,Sm:22205,Tm:44763,Um:33427,Vm:67793,Wm:22182,Xm:37091,Ym:34650,Zm:50617,an:22287,bn:25144,cn:97917,dn:62397,en:150871,fn:150874,gn:125598,hn:137935,jn:36961,kn:108035,ln:27426,mn:27857,nn:27846,pn:27854,qn:69692,rn:61411,sn:39299,tn:38696,un:62520,vn:36382,wn:108701,xn:50663,yn:36387,zn:14908,
An:37533,Bn:105443,Cn:61635,Dn:62274,En:161670,Fn:133818,Gn:65702,Hn:65703,In:65701,Jn:76256,Kn:166382,Ln:37671,Mn:49953,On:36216,Pn:28237,Qn:173718,Rn:39553,Sn:29222,Tn:26107,Un:38050,Vn:26108,Xn:120745,Wn:26109,Yn:26110,Zn:66881,ao:28236,bo:14586,co:160598,eo:57929,fo:74723,ho:44098,jo:173689,ko:44099,no:23528,oo:61699,lo:134104,mo:134103,po:59149,qo:173191,ro:173192,so:173193,uo:101951,to:171502,vo:97346,wo:118051,xo:95102,yo:64882,zo:119505,Ao:63595,Bo:63349,Co:95101,Do:75240,Eo:27039,Fo:68823,
Go:21537,Ho:83464,Io:75707,Jo:170215,Ko:83113,Lo:101952,Mo:101953,Oo:79610,Po:125755,Qo:24402,Ro:24400,So:32925,Uo:57173,To:156421,Vo:122502,Wo:145268,Xo:138480,Yo:64423,Zo:64424,ap:33986,bp:100828,cp:129089,ep:21409,ip:135155,jp:135156,kp:135157,lp:135158,mp:158225,np:135159,qp:135160,rp:167651,sp:135161,up:135162,vp:135163,tp:158226,wp:158227,xp:135164,yp:135165,zp:135166,fp:11070,gp:11074,hp:17880,Ap:30709,Bp:30707,Cp:30711,Dp:30710,Ep:30708,Fp:146143,Gp:63648,Hp:63649,Ip:111059,Jp:5754,Kp:20445,
Lp:151308,Mp:151152,Pp:130975,Op:130976,Np:167637,Qp:110386,Rp:113746,Sp:66557,Up:17310,Vp:28631,Wp:21589,Xp:164817,Yp:168011,Zp:154946,aq:68012,bq:162617,cq:60480,fq:138664,gq:141121,hq:164502,iq:31571,jq:141978,kq:150105,lq:150106,mq:150107,nq:150108,oq:76980,pq:41577,qq:45469,sq:38669,tq:13768,uq:13777,wq:141842,xq:62985,yq:4724,zq:59369,Aq:43927,Bq:43928,Cq:12924,Dq:100355,Gq:56219,Hq:27669,Iq:10337,Fq:47896,Jq:122629,Lq:139723,Kq:139722,Mq:121258,Nq:107598,Oq:127991,Pq:96639,Qq:107536,Rq:130169,
Sq:96661,Tq:145188,Uq:96658,Vq:116646,Wq:159428,Yq:168611,Zq:168612,Xq:121122,br:96660,dr:127738,er:127083,fr:155281,gr:162959,hr:163566,ir:147842,jr:104443,kr:96659,lr:147595,mr:106442,pr:162776,qr:134840,rr:63667,sr:63668,tr:63669,ur:130686,vr:147036,wr:78314,xr:147799,yr:174049,zr:148649,Ar:55761,Br:127098,Cr:134841,Dr:96368,Er:67374,Fr:48992,Gr:146176,Hr:49956,Ir:31961,Jr:26388,Kr:23811,Lr:5E4,Mr:126250,Nr:96370,Or:47355,Pr:47356,Qr:37935,Rr:45521,Sr:21760,Tr:83769,Ur:49977,Vr:49974,Wr:93497,
Xr:93498,Yr:34325,Zr:140759,bs:115803,ds:123707,es:100081,gs:35309,hs:68314,ks:25602,ls:100339,ms:170873,ns:143516,qs:59018,rs:18248,ts:50625,us:9729,vs:37168,ws:37169,xs:21667,ys:16749,zs:18635,As:39305,Bs:18046,Cs:53969,Ds:8213,Es:93926,Fs:102852,Gs:110099,Hs:22678,Is:69076,Js:137575,Ls:139224,Ms:100856,Ns:154430,Os:17736,Ps:3832,Qs:147111,Rs:55759,Ss:64031,Ys:93044,Zs:93045,bt:170701,ct:170702,gt:34388,et:167841,ft:170419,ht:17657,jt:17655,kt:39579,lt:39578,mt:170412,nt:77448,ot:8196,pt:11357,
qt:69877,rt:8197,tt:168501,ut:156512,vt:161613,wt:156509,xt:161612,zt:161614,At:82039};function $u(){var a=ub(av),b;return(new Of(function(c,d){a.onSuccess=function(e){hn(e)?c(new bv(e)):d(new cv("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new cv("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new cv("Request timed out","net.timeout",e))};
b=pn("//googleads.g.doubleclick.net/pagead/id",a)})).vc(function(c){c instanceof Vf&&b.abort();
return Tf(c)})}
function cv(a,b,c){bb.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(cv,bb);function bv(a){this.xhr=a}
;function dv(){this.h=0;this.Aa=null}
dv.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.Aa))&&"function"===typeof a.then?a:ev(a):2===this.h&&b?(a=b.call(c,this.Aa))&&"function"===typeof a.then?a:fv(a):this};
dv.prototype.getValue=function(){return this.Aa};
dv.prototype.$goog_Thenable=!0;function fv(a){var b=new dv;a=void 0===a?null:a;b.h=2;b.Aa=void 0===a?null:a;return b}
function ev(a){var b=new dv;a=void 0===a?null:a;b.h=1;b.Aa=void 0===a?null:a;return b}
;function gv(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:Zm(a)?"same-origin":"cors",credentials:Zm(a)?"same-origin":"include"};b={};for(var d=r(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function hv(){return Og()||yn&&zn("applewebkit")&&!zn("version")&&(!zn("safari")||zn("gsa/"))||ad&&zn("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function iv(a){a:{var b=a.raw_embedded_player_response;if(!b&&(a=a.embedded_player_response))try{b=JSON.parse(a)}catch(d){b="EMBEDDED_PLAYER_MODE_UNKNOWN";break a}if(b)b:{for(var c in el)if(el[c]==b.embeddedPlayerMode){b=el[c];break b}b="EMBEDDED_PLAYER_MODE_UNKNOWN"}else b="EMBEDDED_PLAYER_MODE_UNKNOWN"}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function jv(a){bb.call(this,a.message||a.description||a.name);this.isMissing=a instanceof kv;this.isTimeout=a instanceof cv&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Vf}
v(jv,bb);jv.prototype.name="BiscottiError";function kv(){bb.call(this,"Biscotti ID is missing from server")}
v(kv,bb);kv.prototype.name="BiscottiMissingError";var av={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},lv=null;function mv(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!hv())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if("1"==sb(a))return Error("Biscotti ID is not available in private embed mode");if(iv(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Cm(){var a=mv();if(void 0!==a)return Tf(a);lv||(lv=$u().then(nv).vc(function(b){return ov(2,b)}));
return lv}
function nv(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new kv;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new kv;a=a.id;Dm(a);lv=ev(a);pv(18E5,2);return a}
function ov(a,b){b=new jv(b);Dm("");lv=fv(b);0<a&&pv(12E4,a-1);throw b;}
function pv(a,b){jn(function(){$u().then(nv,function(c){return ov(b,c)}).vc(db)},a)}
function qv(){try{var a=A("yt.ads.biscotti.getId_");return a?a():Cm()}catch(b){return Tf(b)}}
;function rv(a){if("1"!=sb(P("PLAYER_VARS",{}))){a&&Bm();try{qv().then(function(){},function(){}),jn(rv,18E5)}catch(b){Om(b)}}}
;function sv(){var a=Yn(),b=ao(119),c=1<window.devicePixelRatio;if(document.body&&Ji(document.body,"exp-invert-logo"))if(c&&!Ji(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Ji(d,"inverted-hdpi")){var e=Hi(d);Ii(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Ji(document.body,"inverted-hdpi")&&Ki();if(b!=c){b="f"+(Math.floor(119/31)+1);d=bo(b)||0;d=c?d|67108864:d&-67108865;0===d?delete Vn[b]:(c=d.toString(16),Vn[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in Vn)Vn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Vn[f])));Sn(b,d.join("&"),63072E3,a.i,c)}}
;var tv=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function uv(){var a=void 0===a?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;xc(yc(5,a));try{var b=Xm(a).theme;return tv.get(b)||null}catch(c){}return null}
;function vv(){this.h={};if(this.i=Un()){var a=Mg.get("CONSISTENCY",void 0);a&&wv(this,{encryptedTokenJarContents:a})}}
vv.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.La.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=r(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];wv(this,a)}};
function wv(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&Sn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var xv=window.location.hostname.split(".").slice(-2).join(".");function yv(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.h=zv(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Av;function Bv(){Av=A("yt.clientLocationService.instance");Av||(Av=new yv,z("yt.clientLocationService.instance",Av));return Av}
l=yv.prototype;l.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
l.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===P("INNERTUBE_CLIENT_NAME")?(this.h=zv(this))&&this.h.set("yt-location-playability-token",a,15552E3):Sn("YT_CL",JSON.stringify({loctok:a}),15552E3,xv,!0))};
function zv(a){return void 0===a.h?new so("yt-client-location"):a.h}
l.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=zv(this))&&this.h.remove("yt-location-playability-token"):Tn("YT_CL")};
l.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===P("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
l.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};function Cv(a,b){var c,d=null==(c=st(a,dl))?void 0:c.signal;if(d&&b.Tb&&(c=b.Tb[d]))return c();var e;if((c=null==(e=st(a,bl))?void 0:e.request)&&b.je&&(e=b.je[c]))return e();for(var f in a)if(b.jd[f]&&(a=b.jd[f]))return a()}
;function Dv(a){return function(){return new a}}
;var Ev={},Fv=(Ev.WEB_UNPLUGGED="^unplugged/",Ev.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Ev.WEB_UNPLUGGED_OPS="^unplugged/",Ev.WEB_UNPLUGGED_PUBLIC="^unplugged/",Ev.WEB_CREATOR="^creator/",Ev.WEB_KIDS="^kids/",Ev.WEB_EXPERIMENTS="^experiments/",Ev.WEB_MUSIC="^music/",Ev.WEB_REMIX="^music/",Ev.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Ev.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Ev);
function Gv(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Fv[b];if(c){var d=new RegExp(c),e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(Fv).forEach(function(g){var h=r(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=r(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function Hv(){}
Hv.prototype.m=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Pn:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=P("INNERTUBE_CONTEXT");if(g){g=vb(g);R("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&(h.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||
1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;Yn();var m="USER_INTERFACE_THEME_LIGHT";ao(165)?m="USER_INTERFACE_THEME_DARK":ao(174)?m="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(m="USER_INTERFACE_THEME_DARK");k=k?m:uv()||m;h.userInterfaceTheme=k;if(!f){if(k=io())h.connectionType=
k;R("web_log_effective_connection_type")&&(k=jo())&&(g.client.effectiveConnectionType=k)}var n;if(R("web_log_memory_total_kbytes")&&(null==(n=y.navigator)?0:n.deviceMemory)){var q;n=null==(q=y.navigator)?void 0:q.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}q=Xm(y.location.href);!R("web_populate_internal_geo_killswitch")&&q.internalcountrycode&&(h.internalGeo=q.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:y.location.href},R("kevlar_woffle")&&Qn.h&&
(q=Qn.h,h.mainAppWebInfo.pwaInstallabilityStatus=!q.h&&q.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=Rn(),h.mainAppWebInfo.isWebNativeShareAvailable=navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!R("web_lr_app_quality_killswitch")&&(q=P("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:q})),q=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:q}));
if(!R("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var u=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(wb){}u=void 0}u&&(h.timeZone=u)}(u=dn())?h.experimentsToken=u:delete h.experimentsToken;u=en();vv.h||(vv.h=new vv);h=vv.h.h;q=[];n=0;for(var t in h)q[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:u,consistencyTokenJars:q});!R("web_prequest_context_killswitch")&&(t=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=
t);u=Yn();t=ao(58);u=u.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);u&&(g.user.lockedSafetyMode=!0);R("warm_op_csn_cleanup")?e&&(f=Su())&&(g.clientScreenNonce=f):!f&&(f=Su())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=A("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Bv().setLocationOnInnerTubeContext(g);try{var B=$m(),D=B.bid;delete B.bid;g.adSignalsInfo={params:[],bid:D};var F=r(Object.entries(B));for(var M=F.next();!M.done;M=F.next()){var O=
r(M.value),Q=O.next().value,ca=O.next().value;B=Q;D=ca;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:B,value:""+D})}}catch(wb){xu(wb)}F=g}else xu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),F={};F={context:F};if(M=this.h(a)){this.i(F,M,b);var X;b="/youtubei/v1/"+Gv(this.j());(M=null==(X=st(a.commandMetadata,cl))?void 0:X.apiUrl)&&(b=M);X=b;(b=P("INNERTUBE_HOST_OVERRIDE"))&&(X=String(b)+String(Ac(X)));b={};b.key=P("INNERTUBE_API_KEY");R("json_condensed_response")&&(b.prettyPrint=
"false");X=Ym(X,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:X,mb:gv(X),La:F,config:a};a.config.cc?a.config.cc.identity=c:a.config.cc={identity:c};return a}xu(new S("Error: Failed to create Request from Command.",a))};
ea.Object.defineProperties(Hv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});function Iv(){}
v(Iv,Hv);Iv.prototype.m=function(){return{input:"/getDatasyncIdsEndpoint",mb:gv("/getDatasyncIdsEndpoint","GET"),La:{}}};
Iv.prototype.j=function(){return[]};
Iv.prototype.h=function(){};
Iv.prototype.i=function(){};var Jv={},Kv=(Jv.GET_DATASYNC_IDS=Dv(Iv),Jv);function Lv(a){var b=Ka.apply(1,arguments);if(!Mv(a)||b.some(function(d){return!Mv(d)}))throw Error("Only objects may be merged.");
b=r(b);for(var c=b.next();!c.done;c=b.next())Nv(a,c.value);return a}
function Nv(a,b){for(var c in b)if(Mv(b[c])){if(c in a&&!Mv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Nv(a[c],b[c])}else if(Ov(b[c])){if(c in a&&!Ov(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Pv(a[c],b[c])}else a[c]=b[c];return a}
function Pv(a,b){b=r(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Mv(c)?a.push(Nv({},c)):Ov(c)?a.push(Pv([],c)):a.push(c);return a}
function Mv(a){return"object"===typeof a&&!Array.isArray(a)}
function Ov(a){return"object"===typeof a&&Array.isArray(a)}
;function Qv(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function Rv(){var a=Qv();a.info||(a.info={});return a.info}
function Sv(a){a=Qv(a);a.metadata||(a.metadata={});return a.metadata}
function Tv(a){a=Qv(a);a.tick||(a.tick={});return a.tick}
function Uv(a){a=Qv(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Vv(a){a=Uv(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Wv(a){var b=Qv(a).nonce;b||(b=Hu(),Qv(a).nonce=b);return b}
;function Xv(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function Yv(a){a=a||"";var b=A("ytcsi.reference");b||(Xv(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=Xv(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var U={},Zv=(U.auto_search="LATENCY_ACTION_AUTO_SEARCH",U.ad_to_ad="LATENCY_ACTION_AD_TO_AD",U.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",U["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",U.app_startup="LATENCY_ACTION_APP_STARTUP",U["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",U["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",U["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",U["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
U["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",U["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",U["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",U["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",U["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",U["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",U["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",U["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",
U["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",U["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",U.browse="LATENCY_ACTION_BROWSE",U.cast_splash="LATENCY_ACTION_CAST_SPLASH",U.channels="LATENCY_ACTION_CHANNELS",U.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",U["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",U["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",U["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",
U["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",U["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",U["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",U["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",U["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",U["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",U["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",U["channel.translations"]=
"LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",U["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",U["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",U.chips="LATENCY_ACTION_CHIPS",U["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",U["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",U["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",U.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",U.embed="LATENCY_ACTION_EMBED",
U.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",U.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",U.explore="LATENCY_ACTION_EXPLORE",U.home="LATENCY_ACTION_HOME",U.library="LATENCY_ACTION_LIBRARY",U.live="LATENCY_ACTION_LIVE",U.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",U.onboarding="LATENCY_ACTION_ONBOARDING",U.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",U["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",U["owner.analytics"]=
"LATENCY_ACTION_CREATOR_CMS_ANALYTICS",U["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",U["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",U["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",U["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",U["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",U["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",U["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",U["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",
U["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",U["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",U["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",U["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",U["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",U["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",U["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",U["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",U.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",
U.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",U.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",U.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",U["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",U["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",U.prebuffer="LATENCY_ACTION_PREBUFFER",U.prefetch="LATENCY_ACTION_PREFETCH",U.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",U.profile_switcher="LATENCY_ACTION_LOGIN",U.reel_watch="LATENCY_ACTION_REEL_WATCH",
U.results="LATENCY_ACTION_RESULTS",U["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",U.search_ui="LATENCY_ACTION_SEARCH_UI",U.search_suggest="LATENCY_ACTION_SUGGEST",U.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",U.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",U.seek="LATENCY_ACTION_PLAYER_SEEK",U.settings="LATENCY_ACTION_SETTINGS",U.store="LATENCY_ACTION_STORE",U.tenx="LATENCY_ACTION_TENX",U.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",U.watch="LATENCY_ACTION_WATCH",U.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",U["watch,watch7"]="LATENCY_ACTION_WATCH",U["watch,watch7_html5"]="LATENCY_ACTION_WATCH",U["watch,watch7ad"]="LATENCY_ACTION_WATCH",U["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",U.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",U.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",U["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",U["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",U["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",U["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",U["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",U["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",U["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",U["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",U["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",U["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",U["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",U["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",U["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",U.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",U.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",U.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",U.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",U),V={},$v=(V.ad_allowed="adTypesAllowed",V.yt_abt="adBreakType",V.ad_cpn="adClientPlaybackNonce",V.ad_docid="adVideoId",V.yt_ad_an="adNetworks",
V.ad_at="adType",V.aida="appInstallDataAgeMs",V.browse_id="browseId",V.p="httpProtocol",V.t="transportProtocol",V.cs="commandSource",V.cpn="clientPlaybackNonce",V.ccs="creatorInfo.creatorCanaryState",V.ctop="creatorInfo.topEntityType",V.csn="clientScreenNonce",V.docid="videoId",V.GetHome_rid="requestIds",V.GetSearch_rid="requestIds",V.GetPlayer_rid="requestIds",V.GetWatchNext_rid="requestIds",V.GetBrowse_rid="requestIds",V.GetLibrary_rid="requestIds",V.is_continuation="isContinuation",V.is_nav="isNavigation",
V.b_p="kabukiInfo.browseParams",V.is_prefetch="kabukiInfo.isPrefetch",V.is_secondary_nav="kabukiInfo.isSecondaryNav",V.nav_type="kabukiInfo.navigationType",V.prev_browse_id="kabukiInfo.prevBrowseId",V.query_source="kabukiInfo.querySource",V.voz_type="kabukiInfo.vozType",V.yt_lt="loadType",V.mver="creatorInfo.measurementVersion",V.yt_ad="isMonetized",V.nr="webInfo.navigationReason",V.nrsu="navigationRequestedSameUrl",V.pnt="performanceNavigationTiming",V.prt="playbackRequiresTap",V.plt="playerInfo.playbackType",
V.pis="playerInfo.playerInitializedState",V.paused="playerInfo.isPausedOnLoad",V.yt_pt="playerType",V.fmt="playerInfo.itag",V.yt_pl="watchInfo.isPlaylist",V.yt_pre="playerInfo.preloadType",V.yt_ad_pr="prerollAllowed",V.pa="previousAction",V.yt_red="isRedSubscriber",V.rce="mwebInfo.responseContentEncoding",V.rc="resourceInfo.resourceCache",V.scrh="screenHeight",V.scrw="screenWidth",V.st="serverTimeMs",V.ssdm="shellStartupDurationMs",V.br_trs="tvInfo.bedrockTriggerState",V.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
V.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",V.label="tvInfo.label",V.is_mdx="tvInfo.isMdx",V.preloaded="tvInfo.isPreloaded",V.aac_type="tvInfo.authAccessCredentialType",V.upg_player_vis="playerInfo.visibilityState",V.query="unpluggedInfo.query",V.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",V.yt_vst="videoStreamType",V.vph="viewportHeight",V.vpw="viewportWidth",V.yt_vis="isVisible",V.rcl="mwebInfo.responseContentLength",V.GetSettings_rid="requestIds",V.GetTrending_rid="requestIds",
V.GetMusicSearchSuggestions_rid="requestIds",V.REQUEST_ID="requestIds",V),aw="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),bw={},cw=(bw.ccs="CANARY_STATE_",bw.mver="MEASUREMENT_VERSION_",bw.pis="PLAYER_INITIALIZED_STATE_",
bw.yt_pt="LATENCY_PLAYER_",bw.pa="LATENCY_ACTION_",bw.ctop="TOP_ENTITY_TYPE_",bw.yt_vst="VIDEO_STREAM_TYPE_",bw),dw="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ew(a){return Zv[a]||"LATENCY_ACTION_UNKNOWN"}
function fw(a,b,c){c=Uv(c);if(c.gelInfos)c.gelInfos[a]=!0;else{var d={};c.gelInfos=(d[a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in $v){c=$v[a];0<=fb(aw,c)&&(b=!!b);a in cw&&"string"===typeof b&&(b=cw[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return Lv({},d)}0<=fb(dw,a)||yu(new S("Unknown label logged with GEL CSI",a))}
;var W={LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING:179,LATENCY_ACTION_KIDS_PROFILE_SWITCHER:90,LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER:100,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC:46,LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR:37,LATENCY_ACTION_SPINNER_DISPLAYED:14,LATENCY_ACTION_PLAYABILITY_CHECK:10,LATENCY_ACTION_PROCESS:9,LATENCY_ACTION_APP_STARTUP:5,LATENCY_ACTION_GEL_COMPRESSION:215,LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE:204,LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC:203,LATENCY_ACTION_COMMERCE_TRANSACTION:184,
LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC:173,LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC:172,LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC:171,LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC:170,LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC:169,LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC:168,LATENCY_ACTION_GET_OFFERS_RPC:167,LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC:166,LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC:165,LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC:164,LATENCY_ACTION_GET_OFFER_DETAILS_RPC:163,
LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC:162,LATENCY_ACTION_GET_TIP_MODULE_RPC:161,LATENCY_ACTION_HANDLE_TRANSACTION_RPC:160,LATENCY_ACTION_COMPLETE_TRANSACTION_RPC:159,LATENCY_ACTION_GET_CART_RPC:158,LATENCY_ACTION_THUMBNAIL_FETCH:156,LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK:154,LATENCY_ACTION_SHARE_VIDEO:153,LATENCY_ACTION_AD_TO_VIDEO_INT:152,LATENCY_ACTION_ABANDONED_BROWSE:151,LATENCY_ACTION_PLAYER_ROTATION:150,LATENCY_ACTION_GENERIC_WEB_VIEW:183,LATENCY_ACTION_SHOPPING_IN_APP:124,LATENCY_ACTION_PLAYER_ATTESTATION:121,
LATENCY_ACTION_PLAYER_SEEK:119,LATENCY_ACTION_SUPER_STICKER_BUY_FLOW:114,LATENCY_ACTION_DOWNLOADS_DATA_ACCESS:180,LATENCY_ACTION_BLOCKS_PERFORMANCE:148,LATENCY_ACTION_ASSISTANT_QUERY:138,LATENCY_ACTION_ASSISTANT_SETTINGS:137,LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF:129,LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF:128,LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE:127,LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION:123,LATENCY_ACTION_NETWORKLESS_PERFORMANCE:122,LATENCY_ACTION_DOWNLOADS_EXPANSION:133,LATENCY_ACTION_ENTITY_TRANSFORM:131,
LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER:96,LATENCY_ACTION_EMBEDS_SET_VIDEO:95,LATENCY_ACTION_SETTINGS:93,LATENCY_ACTION_ABANDONED_STARTUP:81,LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY:80,LATENCY_ACTION_MEDIA_BROWSER_SEARCH:79,LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE:78,LATENCY_ACTION_WHO_IS_WATCHING:77,LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH:76,LATENCY_ACTION_LITE_SWITCH_ACCOUNT:73,LATENCY_ACTION_ELEMENTS_PERFORMANCE:70,LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION:69,LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION:65,
LATENCY_ACTION_OFFLINE_STORE_START:61,LATENCY_ACTION_REEL_EDITOR:58,LATENCY_ACTION_CHANNEL_SUBSCRIBE:56,LATENCY_ACTION_CHANNEL_PREVIEW:55,LATENCY_ACTION_PREFETCH:52,LATENCY_ACTION_ABANDONED_WATCH:45,LATENCY_ACTION_LOAD_COMMENT_REPLIES:26,LATENCY_ACTION_LOAD_COMMENTS:25,LATENCY_ACTION_EDIT_COMMENT:24,LATENCY_ACTION_NEW_COMMENT:23,LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING:19,LATENCY_ACTION_EMBED:18,LATENCY_ACTION_MDX_LAUNCH:15,LATENCY_ACTION_RESOLVE_URL:13,LATENCY_ACTION_CAST_SPLASH:149,LATENCY_ACTION_MDX_CONNECT_TO_SESSION:190,
LATENCY_ACTION_MDX_STREAM_TRANSFER:178,LATENCY_ACTION_MDX_CAST:120,LATENCY_ACTION_MDX_COMMAND:12,LATENCY_ACTION_MOBILE_LIVE_NAV_MDE:231,LATENCY_ACTION_REEL_SELECT_SEGMENT:136,LATENCY_ACTION_ACCELERATED_EFFECTS:145,LATENCY_ACTION_SHORTS_LOAD_PROJECT:234,LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING:229,LATENCY_ACTION_EDIT_AUDIO_GEN:182,LATENCY_ACTION_UPLOAD_AUDIO_MIXER:147,LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING:157,LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING:146,LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK:130,
LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD:125,LATENCY_ACTION_SHORTS_VIDEO_INGESTION:155,LATENCY_ACTION_SHORTS_GALLERY:107,LATENCY_ACTION_SHORTS_TRIM:105,LATENCY_ACTION_SHORTS_EDIT:104,LATENCY_ACTION_SHORTS_CAMERA:103,LATENCY_ACTION_CREATION_MODES_MODE_SWITCH:236,LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT:235,LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA:233,LATENCY_ACTION_PRODUCER_EXPORT_PROJECT:193,LATENCY_ACTION_PRODUCER_EDITOR:192,LATENCY_ACTION_PARENT_TOOLS_DASHBOARD:102,LATENCY_ACTION_PARENT_TOOLS_COLLECTION:101,
LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS:116,LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS:115,LATENCY_ACTION_MUSIC_ALBUM_DETAIL:72,LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL:71,LATENCY_ACTION_STORE:175,LATENCY_ACTION_CHIPS:68,LATENCY_ACTION_SEARCH_ZERO_STATE:67,LATENCY_ACTION_LIVE_PAGINATION:117,LATENCY_ACTION_LIVE:20,LATENCY_ACTION_PREBUFFER:40,LATENCY_ACTION_TENX:39,LATENCY_ACTION_KIDS_PROFILE_SETTINGS:94,LATENCY_ACTION_KIDS_WATCH_IT_AGAIN:92,LATENCY_ACTION_KIDS_SECRET_CODE:91,LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS:89,
LATENCY_ACTION_KIDS_ONBOARDING:88,LATENCY_ACTION_KIDS_VOICE_SEARCH:82,LATENCY_ACTION_KIDS_CURATED_COLLECTION:62,LATENCY_ACTION_KIDS_LIBRARY:53,LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS:38,LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT:219,LATENCY_ACTION_CREATOR_VIDEO_POLICY:217,LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION:74,LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING:141,LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS:142,LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC:51,LATENCY_ACTION_CREATOR_VIDEO_EDITOR:50,
LATENCY_ACTION_CREATOR_VIDEO_EDIT:36,LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT:218,LATENCY_ACTION_CREATOR_VIDEO_COMMENTS:34,LATENCY_ACTION_CREATOR_VIDEO_CLAIMS:216,LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS:33,LATENCY_ACTION_CREATOR_SONG_ANALYTICS:176,LATENCY_ACTION_CREATOR_PROMOTION_LIST:186,LATENCY_ACTION_CREATOR_PROMOTION_EDIT:185,LATENCY_ACTION_CREATOR_POST_LIST:112,LATENCY_ACTION_CREATOR_POST_EDIT:110,LATENCY_ACTION_CREATOR_POST_COMMENTS:111,LATENCY_ACTION_CREATOR_LIVE_STREAMING:108,LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT:174,
LATENCY_ACTION_CREATOR_DIALOG_UPLOADS:86,LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES:87,LATENCY_ACTION_CREATOR_CMS_VIDEOS:202,LATENCY_ACTION_CREATOR_CMS_REPORTS:201,LATENCY_ACTION_CREATOR_CMS_RELEASES:226,LATENCY_ACTION_CREATOR_CMS_POLICIES:225,LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC:224,LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING:200,LATENCY_ACTION_CREATOR_CMS_LICENSES:223,LATENCY_ACTION_CREATOR_CMS_ISSUES:191,LATENCY_ACTION_CREATOR_CMS_DASHBOARD:199,LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY:198,
LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS:197,LATENCY_ACTION_CREATOR_CMS_CHANNELS:196,LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS:222,LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS:214,LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES:209,LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY:208,LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP:207,LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA:205,LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES:212,LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES:206,LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS:221,LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS:210,
LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION:213,LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS:211,LATENCY_ACTION_CREATOR_CMS_ASSETS:195,LATENCY_ACTION_CREATOR_CMS_ART_TRACKS:220,LATENCY_ACTION_CREATOR_CMS_ANALYTICS:194,LATENCY_ACTION_CREATOR_CMS_ALLOWLIST:227,LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS:32,LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS:48,LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS:139,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT:177,LATENCY_ACTION_CREATOR_CHANNEL_MUSIC:99,LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION:43,
LATENCY_ACTION_CREATOR_CHANNEL_EDITING:113,LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD:49,LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT:44,LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS:66,LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS:31,LATENCY_ACTION_CREATOR_ARTIST_PROFILE:85,LATENCY_ACTION_CREATOR_ARTIST_CONCERTS:84,LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS:83,LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE:140,LATENCY_ACTION_EXPERIMENTAL_WATCH_UI:181,LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS:228,LATENCY_ACTION_STORYBOARD_THUMBNAILS:118,
LATENCY_ACTION_SEARCH_THUMBNAILS:59,LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD:54,LATENCY_ACTION_VOICE_ASSISTANT:47,LATENCY_ACTION_SEARCH_UI:35,LATENCY_ACTION_SUGGEST:30,LATENCY_ACTION_AUTO_SEARCH:126,LATENCY_ACTION_DOWNLOADS:98,LATENCY_ACTION_EXPLORE:75,LATENCY_ACTION_VIDEO_LIST:63,LATENCY_ACTION_HOME_RESUME:60,LATENCY_ACTION_SUBSCRIPTIONS_LIST:57,LATENCY_ACTION_THUMBNAIL_LOAD:42,LATENCY_ACTION_FIRST_THUMBNAIL_LOAD:29,LATENCY_ACTION_SUBSCRIPTIONS_FEED:109,LATENCY_ACTION_SUBSCRIPTIONS:28,LATENCY_ACTION_TRENDING:27,
LATENCY_ACTION_LIBRARY:21,LATENCY_ACTION_VIDEO_THUMBNAIL:8,LATENCY_ACTION_SHOW_MORE:7,LATENCY_ACTION_VIDEO_PREVIEW:6,LATENCY_ACTION_AD_TO_AD:22,LATENCY_ACTION_VIDEO_TO_AD:17,LATENCY_ACTION_AD_TO_VIDEO:16,LATENCY_ACTION_DIRECT_PLAYBACK:132,LATENCY_ACTION_PREBUFFER_VIDEO:144,LATENCY_ACTION_PREFETCH_VIDEO:143,LATENCY_ACTION_STARTUP:106,LATENCY_ACTION_INLINE_TO_WATCH:232,LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH:230,LATENCY_ACTION_ONBOARDING:135,LATENCY_ACTION_LOGIN:97,LATENCY_ACTION_REEL_WATCH:41,LATENCY_ACTION_WATCH:3,
LATENCY_ACTION_RESULTS:2,LATENCY_ACTION_CHANNELS:4,LATENCY_ACTION_HOME:1,LATENCY_ACTION_BROWSE:11,LATENCY_ACTION_USER_ACTION:189,LATENCY_ACTION_INFRASTRUCTURE:188,LATENCY_ACTION_PAGE_NAVIGATION:187,LATENCY_ACTION_UNKNOWN:0};W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION_TRANSCODING";W[W.LATENCY_ACTION_KIDS_PROFILE_SWITCHER]="LATENCY_ACTION_KIDS_PROFILE_SWITCHER";W[W.LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER]="LATENCY_ACTION_OFFLINE_THUMBNAIL_TRANSFER";
W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR";W[W.LATENCY_ACTION_SPINNER_DISPLAYED]="LATENCY_ACTION_SPINNER_DISPLAYED";W[W.LATENCY_ACTION_PLAYABILITY_CHECK]="LATENCY_ACTION_PLAYABILITY_CHECK";W[W.LATENCY_ACTION_PROCESS]="LATENCY_ACTION_PROCESS";W[W.LATENCY_ACTION_APP_STARTUP]="LATENCY_ACTION_APP_STARTUP";W[W.LATENCY_ACTION_GEL_COMPRESSION]="LATENCY_ACTION_GEL_COMPRESSION";
W[W.LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE]="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE";W[W.LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC]="LATENCY_ACTION_COMMERCE_ACTION_COMMAND_RPC";W[W.LATENCY_ACTION_COMMERCE_TRANSACTION]="LATENCY_ACTION_COMMERCE_TRANSACTION";W[W.LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC]="LATENCY_ACTION_LOG_PAYMENT_SERVER_ANALYTICS_RPC";W[W.LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC]="LATENCY_ACTION_GET_PAYMENT_INSTRUMENTS_PARAMS_RPC";
W[W.LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC]="LATENCY_ACTION_GET_FIX_INSTRUMENT_PARAMS_RPC";W[W.LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC]="LATENCY_ACTION_RESUME_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC]="LATENCY_ACTION_PAUSE_SUBSCRIPTION_RPC";W[W.LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC]="LATENCY_ACTION_GET_OFFLINE_UPSELL_RPC";W[W.LATENCY_ACTION_GET_OFFERS_RPC]="LATENCY_ACTION_GET_OFFERS_RPC";W[W.LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_YT_FLOW_RPC";
W[W.LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC]="LATENCY_ACTION_GET_CANCELLATION_FLOW_RPC";W[W.LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC]="LATENCY_ACTION_UPDATE_CROSS_DEVICE_OFFLINE_STATE_RPC";W[W.LATENCY_ACTION_GET_OFFER_DETAILS_RPC]="LATENCY_ACTION_GET_OFFER_DETAILS_RPC";W[W.LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC]="LATENCY_ACTION_CANCEL_RECURRENCE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_TIP_MODULE_RPC]="LATENCY_ACTION_GET_TIP_MODULE_RPC";
W[W.LATENCY_ACTION_HANDLE_TRANSACTION_RPC]="LATENCY_ACTION_HANDLE_TRANSACTION_RPC";W[W.LATENCY_ACTION_COMPLETE_TRANSACTION_RPC]="LATENCY_ACTION_COMPLETE_TRANSACTION_RPC";W[W.LATENCY_ACTION_GET_CART_RPC]="LATENCY_ACTION_GET_CART_RPC";W[W.LATENCY_ACTION_THUMBNAIL_FETCH]="LATENCY_ACTION_THUMBNAIL_FETCH";W[W.LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK]="LATENCY_ACTION_ABANDONED_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_SHARE_VIDEO]="LATENCY_ACTION_SHARE_VIDEO";W[W.LATENCY_ACTION_AD_TO_VIDEO_INT]="LATENCY_ACTION_AD_TO_VIDEO_INT";
W[W.LATENCY_ACTION_ABANDONED_BROWSE]="LATENCY_ACTION_ABANDONED_BROWSE";W[W.LATENCY_ACTION_PLAYER_ROTATION]="LATENCY_ACTION_PLAYER_ROTATION";W[W.LATENCY_ACTION_GENERIC_WEB_VIEW]="LATENCY_ACTION_GENERIC_WEB_VIEW";W[W.LATENCY_ACTION_SHOPPING_IN_APP]="LATENCY_ACTION_SHOPPING_IN_APP";W[W.LATENCY_ACTION_PLAYER_ATTESTATION]="LATENCY_ACTION_PLAYER_ATTESTATION";W[W.LATENCY_ACTION_PLAYER_SEEK]="LATENCY_ACTION_PLAYER_SEEK";W[W.LATENCY_ACTION_SUPER_STICKER_BUY_FLOW]="LATENCY_ACTION_SUPER_STICKER_BUY_FLOW";
W[W.LATENCY_ACTION_DOWNLOADS_DATA_ACCESS]="LATENCY_ACTION_DOWNLOADS_DATA_ACCESS";W[W.LATENCY_ACTION_BLOCKS_PERFORMANCE]="LATENCY_ACTION_BLOCKS_PERFORMANCE";W[W.LATENCY_ACTION_ASSISTANT_QUERY]="LATENCY_ACTION_ASSISTANT_QUERY";W[W.LATENCY_ACTION_ASSISTANT_SETTINGS]="LATENCY_ACTION_ASSISTANT_SETTINGS";W[W.LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF";W[W.LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF]="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF";
W[W.LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE]="LATENCY_ACTION_PROOF_OF_ORIGIN_TOKEN_CREATE";W[W.LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION]="LATENCY_ACTION_EMBEDS_SDK_INITIALIZATION";W[W.LATENCY_ACTION_NETWORKLESS_PERFORMANCE]="LATENCY_ACTION_NETWORKLESS_PERFORMANCE";W[W.LATENCY_ACTION_DOWNLOADS_EXPANSION]="LATENCY_ACTION_DOWNLOADS_EXPANSION";W[W.LATENCY_ACTION_ENTITY_TRANSFORM]="LATENCY_ACTION_ENTITY_TRANSFORM";W[W.LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER]="LATENCY_ACTION_DOWNLOADS_COMPATIBILITY_LAYER";
W[W.LATENCY_ACTION_EMBEDS_SET_VIDEO]="LATENCY_ACTION_EMBEDS_SET_VIDEO";W[W.LATENCY_ACTION_SETTINGS]="LATENCY_ACTION_SETTINGS";W[W.LATENCY_ACTION_ABANDONED_STARTUP]="LATENCY_ACTION_ABANDONED_STARTUP";W[W.LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY]="LATENCY_ACTION_MEDIA_BROWSER_ALARM_PLAY";W[W.LATENCY_ACTION_MEDIA_BROWSER_SEARCH]="LATENCY_ACTION_MEDIA_BROWSER_SEARCH";W[W.LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE]="LATENCY_ACTION_MEDIA_BROWSER_LOAD_TREE";W[W.LATENCY_ACTION_WHO_IS_WATCHING]="LATENCY_ACTION_WHO_IS_WATCHING";
W[W.LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH]="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH";W[W.LATENCY_ACTION_LITE_SWITCH_ACCOUNT]="LATENCY_ACTION_LITE_SWITCH_ACCOUNT";W[W.LATENCY_ACTION_ELEMENTS_PERFORMANCE]="LATENCY_ACTION_ELEMENTS_PERFORMANCE";W[W.LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION]="LATENCY_ACTION_LOCATION_SIGNAL_COLLECTION";W[W.LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION]="LATENCY_ACTION_MODIFY_CHANNEL_NOTIFICATION";W[W.LATENCY_ACTION_OFFLINE_STORE_START]="LATENCY_ACTION_OFFLINE_STORE_START";
W[W.LATENCY_ACTION_REEL_EDITOR]="LATENCY_ACTION_REEL_EDITOR";W[W.LATENCY_ACTION_CHANNEL_SUBSCRIBE]="LATENCY_ACTION_CHANNEL_SUBSCRIBE";W[W.LATENCY_ACTION_CHANNEL_PREVIEW]="LATENCY_ACTION_CHANNEL_PREVIEW";W[W.LATENCY_ACTION_PREFETCH]="LATENCY_ACTION_PREFETCH";W[W.LATENCY_ACTION_ABANDONED_WATCH]="LATENCY_ACTION_ABANDONED_WATCH";W[W.LATENCY_ACTION_LOAD_COMMENT_REPLIES]="LATENCY_ACTION_LOAD_COMMENT_REPLIES";W[W.LATENCY_ACTION_LOAD_COMMENTS]="LATENCY_ACTION_LOAD_COMMENTS";
W[W.LATENCY_ACTION_EDIT_COMMENT]="LATENCY_ACTION_EDIT_COMMENT";W[W.LATENCY_ACTION_NEW_COMMENT]="LATENCY_ACTION_NEW_COMMENT";W[W.LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING]="LATENCY_ACTION_OFFLINE_SHARING_RECEIVER_PAIRING";W[W.LATENCY_ACTION_EMBED]="LATENCY_ACTION_EMBED";W[W.LATENCY_ACTION_MDX_LAUNCH]="LATENCY_ACTION_MDX_LAUNCH";W[W.LATENCY_ACTION_RESOLVE_URL]="LATENCY_ACTION_RESOLVE_URL";W[W.LATENCY_ACTION_CAST_SPLASH]="LATENCY_ACTION_CAST_SPLASH";W[W.LATENCY_ACTION_MDX_CONNECT_TO_SESSION]="LATENCY_ACTION_MDX_CONNECT_TO_SESSION";
W[W.LATENCY_ACTION_MDX_STREAM_TRANSFER]="LATENCY_ACTION_MDX_STREAM_TRANSFER";W[W.LATENCY_ACTION_MDX_CAST]="LATENCY_ACTION_MDX_CAST";W[W.LATENCY_ACTION_MDX_COMMAND]="LATENCY_ACTION_MDX_COMMAND";W[W.LATENCY_ACTION_MOBILE_LIVE_NAV_MDE]="LATENCY_ACTION_MOBILE_LIVE_NAV_MDE";W[W.LATENCY_ACTION_REEL_SELECT_SEGMENT]="LATENCY_ACTION_REEL_SELECT_SEGMENT";W[W.LATENCY_ACTION_ACCELERATED_EFFECTS]="LATENCY_ACTION_ACCELERATED_EFFECTS";W[W.LATENCY_ACTION_SHORTS_LOAD_PROJECT]="LATENCY_ACTION_SHORTS_LOAD_PROJECT";
W[W.LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING]="LATENCY_ACTION_SHORTS_TRIM_TO_EDITOR_TRANSCODING";W[W.LATENCY_ACTION_EDIT_AUDIO_GEN]="LATENCY_ACTION_EDIT_AUDIO_GEN";W[W.LATENCY_ACTION_UPLOAD_AUDIO_MIXER]="LATENCY_ACTION_UPLOAD_AUDIO_MIXER";W[W.LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING]="LATENCY_ACTION_SHORTS_CLIENT_SIDE_RENDERING";W[W.LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING]="LATENCY_ACTION_SHORTS_SEG_IMP_TRANSCODING";W[W.LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK]="LATENCY_ACTION_SHORTS_AUDIO_PICKER_PLAYBACK";
W[W.LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD]="LATENCY_ACTION_SHORTS_WAVEFORM_DOWNLOAD";W[W.LATENCY_ACTION_SHORTS_VIDEO_INGESTION]="LATENCY_ACTION_SHORTS_VIDEO_INGESTION";W[W.LATENCY_ACTION_SHORTS_GALLERY]="LATENCY_ACTION_SHORTS_GALLERY";W[W.LATENCY_ACTION_SHORTS_TRIM]="LATENCY_ACTION_SHORTS_TRIM";W[W.LATENCY_ACTION_SHORTS_EDIT]="LATENCY_ACTION_SHORTS_EDIT";W[W.LATENCY_ACTION_SHORTS_CAMERA]="LATENCY_ACTION_SHORTS_CAMERA";W[W.LATENCY_ACTION_CREATION_MODES_MODE_SWITCH]="LATENCY_ACTION_CREATION_MODES_MODE_SWITCH";
W[W.LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT]="LATENCY_ACTION_CREATION_MODES_GLOBAL_ENTRYPOINT";W[W.LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA]="LATENCY_ACTION_PRODUCER_IMPORT_LOCAL_MEDIA";W[W.LATENCY_ACTION_PRODUCER_EXPORT_PROJECT]="LATENCY_ACTION_PRODUCER_EXPORT_PROJECT";W[W.LATENCY_ACTION_PRODUCER_EDITOR]="LATENCY_ACTION_PRODUCER_EDITOR";W[W.LATENCY_ACTION_PARENT_TOOLS_DASHBOARD]="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD";W[W.LATENCY_ACTION_PARENT_TOOLS_COLLECTION]="LATENCY_ACTION_PARENT_TOOLS_COLLECTION";
W[W.LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_RECOMMENDED_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS]="LATENCY_ACTION_MUSIC_LOAD_MEDIA_ITEMS";W[W.LATENCY_ACTION_MUSIC_ALBUM_DETAIL]="LATENCY_ACTION_MUSIC_ALBUM_DETAIL";W[W.LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL]="LATENCY_ACTION_MUSIC_PLAYLIST_DETAIL";W[W.LATENCY_ACTION_STORE]="LATENCY_ACTION_STORE";W[W.LATENCY_ACTION_CHIPS]="LATENCY_ACTION_CHIPS";W[W.LATENCY_ACTION_SEARCH_ZERO_STATE]="LATENCY_ACTION_SEARCH_ZERO_STATE";
W[W.LATENCY_ACTION_LIVE_PAGINATION]="LATENCY_ACTION_LIVE_PAGINATION";W[W.LATENCY_ACTION_LIVE]="LATENCY_ACTION_LIVE";W[W.LATENCY_ACTION_PREBUFFER]="LATENCY_ACTION_PREBUFFER";W[W.LATENCY_ACTION_TENX]="LATENCY_ACTION_TENX";W[W.LATENCY_ACTION_KIDS_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PROFILE_SETTINGS";W[W.LATENCY_ACTION_KIDS_WATCH_IT_AGAIN]="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN";W[W.LATENCY_ACTION_KIDS_SECRET_CODE]="LATENCY_ACTION_KIDS_SECRET_CODE";W[W.LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS]="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS";
W[W.LATENCY_ACTION_KIDS_ONBOARDING]="LATENCY_ACTION_KIDS_ONBOARDING";W[W.LATENCY_ACTION_KIDS_VOICE_SEARCH]="LATENCY_ACTION_KIDS_VOICE_SEARCH";W[W.LATENCY_ACTION_KIDS_CURATED_COLLECTION]="LATENCY_ACTION_KIDS_CURATED_COLLECTION";W[W.LATENCY_ACTION_KIDS_LIBRARY]="LATENCY_ACTION_KIDS_LIBRARY";W[W.LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT";
W[W.LATENCY_ACTION_CREATOR_VIDEO_POLICY]="LATENCY_ACTION_CREATOR_VIDEO_POLICY";W[W.LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING";W[W.LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR_ASYNC";W[W.LATENCY_ACTION_CREATOR_VIDEO_EDITOR]="LATENCY_ACTION_CREATOR_VIDEO_EDITOR";
W[W.LATENCY_ACTION_CREATOR_VIDEO_EDIT]="LATENCY_ACTION_CREATOR_VIDEO_EDIT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_VIDEO_COMMENTS]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS";W[W.LATENCY_ACTION_CREATOR_VIDEO_CLAIMS]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS";W[W.LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_SONG_ANALYTICS]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS";
W[W.LATENCY_ACTION_CREATOR_PROMOTION_LIST]="LATENCY_ACTION_CREATOR_PROMOTION_LIST";W[W.LATENCY_ACTION_CREATOR_PROMOTION_EDIT]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_LIST]="LATENCY_ACTION_CREATOR_POST_LIST";W[W.LATENCY_ACTION_CREATOR_POST_EDIT]="LATENCY_ACTION_CREATOR_POST_EDIT";W[W.LATENCY_ACTION_CREATOR_POST_COMMENTS]="LATENCY_ACTION_CREATOR_POST_COMMENTS";W[W.LATENCY_ACTION_CREATOR_LIVE_STREAMING]="LATENCY_ACTION_CREATOR_LIVE_STREAMING";
W[W.LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT";W[W.LATENCY_ACTION_CREATOR_DIALOG_UPLOADS]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS";W[W.LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES";W[W.LATENCY_ACTION_CREATOR_CMS_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_REPORTS]="LATENCY_ACTION_CREATOR_CMS_REPORTS";W[W.LATENCY_ACTION_CREATOR_CMS_RELEASES]="LATENCY_ACTION_CREATOR_CMS_RELEASES";
W[W.LATENCY_ACTION_CREATOR_CMS_POLICIES]="LATENCY_ACTION_CREATOR_CMS_POLICIES";W[W.LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC";W[W.LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING";W[W.LATENCY_ACTION_CREATOR_CMS_LICENSES]="LATENCY_ACTION_CREATOR_CMS_LICENSES";W[W.LATENCY_ACTION_CREATOR_CMS_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ISSUES";W[W.LATENCY_ACTION_CREATOR_CMS_DASHBOARD]="LATENCY_ACTION_CREATOR_CMS_DASHBOARD";
W[W.LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY";W[W.LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_CHANNELS]="LATENCY_ACTION_CREATOR_CMS_CHANNELS";W[W.LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES";
W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION";W[W.LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CMS_ASSETS]="LATENCY_ACTION_CREATOR_CMS_ASSETS";
W[W.LATENCY_ACTION_CREATOR_CMS_ART_TRACKS]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS";W[W.LATENCY_ACTION_CREATOR_CMS_ANALYTICS]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_CMS_ALLOWLIST]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST";W[W.LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MUSIC]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC";W[W.LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION";W[W.LATENCY_ACTION_CREATOR_CHANNEL_EDITING]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING";W[W.LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD]="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD";W[W.LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT";
W[W.LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS";W[W.LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ARTIST_PROFILE]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE";W[W.LATENCY_ACTION_CREATOR_ARTIST_CONCERTS]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS";W[W.LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS";W[W.LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE";
W[W.LATENCY_ACTION_EXPERIMENTAL_WATCH_UI]="LATENCY_ACTION_EXPERIMENTAL_WATCH_UI";W[W.LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS]="LATENCY_ACTION_FINE_SCRUBBING_THUMBNAILS";W[W.LATENCY_ACTION_STORYBOARD_THUMBNAILS]="LATENCY_ACTION_STORYBOARD_THUMBNAILS";W[W.LATENCY_ACTION_SEARCH_THUMBNAILS]="LATENCY_ACTION_SEARCH_THUMBNAILS";W[W.LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD]="LATENCY_ACTION_ON_DEVICE_MODEL_DOWNLOAD";W[W.LATENCY_ACTION_VOICE_ASSISTANT]="LATENCY_ACTION_VOICE_ASSISTANT";
W[W.LATENCY_ACTION_SEARCH_UI]="LATENCY_ACTION_SEARCH_UI";W[W.LATENCY_ACTION_SUGGEST]="LATENCY_ACTION_SUGGEST";W[W.LATENCY_ACTION_AUTO_SEARCH]="LATENCY_ACTION_AUTO_SEARCH";W[W.LATENCY_ACTION_DOWNLOADS]="LATENCY_ACTION_DOWNLOADS";W[W.LATENCY_ACTION_EXPLORE]="LATENCY_ACTION_EXPLORE";W[W.LATENCY_ACTION_VIDEO_LIST]="LATENCY_ACTION_VIDEO_LIST";W[W.LATENCY_ACTION_HOME_RESUME]="LATENCY_ACTION_HOME_RESUME";W[W.LATENCY_ACTION_SUBSCRIPTIONS_LIST]="LATENCY_ACTION_SUBSCRIPTIONS_LIST";
W[W.LATENCY_ACTION_THUMBNAIL_LOAD]="LATENCY_ACTION_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_FIRST_THUMBNAIL_LOAD]="LATENCY_ACTION_FIRST_THUMBNAIL_LOAD";W[W.LATENCY_ACTION_SUBSCRIPTIONS_FEED]="LATENCY_ACTION_SUBSCRIPTIONS_FEED";W[W.LATENCY_ACTION_SUBSCRIPTIONS]="LATENCY_ACTION_SUBSCRIPTIONS";W[W.LATENCY_ACTION_TRENDING]="LATENCY_ACTION_TRENDING";W[W.LATENCY_ACTION_LIBRARY]="LATENCY_ACTION_LIBRARY";W[W.LATENCY_ACTION_VIDEO_THUMBNAIL]="LATENCY_ACTION_VIDEO_THUMBNAIL";W[W.LATENCY_ACTION_SHOW_MORE]="LATENCY_ACTION_SHOW_MORE";
W[W.LATENCY_ACTION_VIDEO_PREVIEW]="LATENCY_ACTION_VIDEO_PREVIEW";W[W.LATENCY_ACTION_AD_TO_AD]="LATENCY_ACTION_AD_TO_AD";W[W.LATENCY_ACTION_VIDEO_TO_AD]="LATENCY_ACTION_VIDEO_TO_AD";W[W.LATENCY_ACTION_AD_TO_VIDEO]="LATENCY_ACTION_AD_TO_VIDEO";W[W.LATENCY_ACTION_DIRECT_PLAYBACK]="LATENCY_ACTION_DIRECT_PLAYBACK";W[W.LATENCY_ACTION_PREBUFFER_VIDEO]="LATENCY_ACTION_PREBUFFER_VIDEO";W[W.LATENCY_ACTION_PREFETCH_VIDEO]="LATENCY_ACTION_PREFETCH_VIDEO";W[W.LATENCY_ACTION_STARTUP]="LATENCY_ACTION_STARTUP";
W[W.LATENCY_ACTION_INLINE_TO_WATCH]="LATENCY_ACTION_INLINE_TO_WATCH";W[W.LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH]="LATENCY_ACTION_MUSIC_IMMERSIVE_WATCH";W[W.LATENCY_ACTION_ONBOARDING]="LATENCY_ACTION_ONBOARDING";W[W.LATENCY_ACTION_LOGIN]="LATENCY_ACTION_LOGIN";W[W.LATENCY_ACTION_REEL_WATCH]="LATENCY_ACTION_REEL_WATCH";W[W.LATENCY_ACTION_WATCH]="LATENCY_ACTION_WATCH";W[W.LATENCY_ACTION_RESULTS]="LATENCY_ACTION_RESULTS";W[W.LATENCY_ACTION_CHANNELS]="LATENCY_ACTION_CHANNELS";W[W.LATENCY_ACTION_HOME]="LATENCY_ACTION_HOME";
W[W.LATENCY_ACTION_BROWSE]="LATENCY_ACTION_BROWSE";W[W.LATENCY_ACTION_USER_ACTION]="LATENCY_ACTION_USER_ACTION";W[W.LATENCY_ACTION_INFRASTRUCTURE]="LATENCY_ACTION_INFRASTRUCTURE";W[W.LATENCY_ACTION_PAGE_NAVIGATION]="LATENCY_ACTION_PAGE_NAVIGATION";W[W.LATENCY_ACTION_UNKNOWN]="LATENCY_ACTION_UNKNOWN";var gw={LATENCY_NETWORK_MOBILE:2,LATENCY_NETWORK_WIFI:1,LATENCY_NETWORK_UNKNOWN:0};gw[gw.LATENCY_NETWORK_MOBILE]="LATENCY_NETWORK_MOBILE";gw[gw.LATENCY_NETWORK_WIFI]="LATENCY_NETWORK_WIFI";
gw[gw.LATENCY_NETWORK_UNKNOWN]="LATENCY_NETWORK_UNKNOWN";var Y={CONN_INVALID:31,CONN_CELLULAR_5G_NSA:12,CONN_CELLULAR_5G_SA:11,CONN_WIFI_METERED:10,CONN_CELLULAR_5G:9,CONN_DISCO:8,CONN_CELLULAR_UNKNOWN:7,CONN_CELLULAR_4G:6,CONN_CELLULAR_3G:5,CONN_CELLULAR_2G:4,CONN_WIFI:3,CONN_NONE:2,CONN_UNKNOWN:1,CONN_DEFAULT:0};Y[Y.CONN_INVALID]="CONN_INVALID";Y[Y.CONN_CELLULAR_5G_NSA]="CONN_CELLULAR_5G_NSA";Y[Y.CONN_CELLULAR_5G_SA]="CONN_CELLULAR_5G_SA";Y[Y.CONN_WIFI_METERED]="CONN_WIFI_METERED";
Y[Y.CONN_CELLULAR_5G]="CONN_CELLULAR_5G";Y[Y.CONN_DISCO]="CONN_DISCO";Y[Y.CONN_CELLULAR_UNKNOWN]="CONN_CELLULAR_UNKNOWN";Y[Y.CONN_CELLULAR_4G]="CONN_CELLULAR_4G";Y[Y.CONN_CELLULAR_3G]="CONN_CELLULAR_3G";Y[Y.CONN_CELLULAR_2G]="CONN_CELLULAR_2G";Y[Y.CONN_WIFI]="CONN_WIFI";Y[Y.CONN_NONE]="CONN_NONE";Y[Y.CONN_UNKNOWN]="CONN_UNKNOWN";Y[Y.CONN_DEFAULT]="CONN_DEFAULT";
var Z={DETAILED_NETWORK_TYPE_NR_NSA:126,DETAILED_NETWORK_TYPE_NR_SA:125,DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED:124,DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT:123,DETAILED_NETWORK_TYPE_DISCONNECTED:122,DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN:121,DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN:120,DETAILED_NETWORK_TYPE_WIMAX:119,DETAILED_NETWORK_TYPE_ETHERNET:118,DETAILED_NETWORK_TYPE_BLUETOOTH:117,DETAILED_NETWORK_TYPE_WIFI:116,DETAILED_NETWORK_TYPE_LTE:115,DETAILED_NETWORK_TYPE_HSPAP:114,DETAILED_NETWORK_TYPE_EHRPD:113,
DETAILED_NETWORK_TYPE_EVDO_B:112,DETAILED_NETWORK_TYPE_UMTS:111,DETAILED_NETWORK_TYPE_IDEN:110,DETAILED_NETWORK_TYPE_HSUPA:109,DETAILED_NETWORK_TYPE_HSPA:108,DETAILED_NETWORK_TYPE_HSDPA:107,DETAILED_NETWORK_TYPE_EVDO_A:106,DETAILED_NETWORK_TYPE_EVDO_0:105,DETAILED_NETWORK_TYPE_CDMA:104,DETAILED_NETWORK_TYPE_1_X_RTT:103,DETAILED_NETWORK_TYPE_GPRS:102,DETAILED_NETWORK_TYPE_EDGE:101,DETAILED_NETWORK_TYPE_UNKNOWN:0};Z[Z.DETAILED_NETWORK_TYPE_NR_NSA]="DETAILED_NETWORK_TYPE_NR_NSA";
Z[Z.DETAILED_NETWORK_TYPE_NR_SA]="DETAILED_NETWORK_TYPE_NR_SA";Z[Z.DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED]="DETAILED_NETWORK_TYPE_INTERNAL_WIFI_IMPAIRED";Z[Z.DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT]="DETAILED_NETWORK_TYPE_APP_WIFI_HOTSPOT";Z[Z.DETAILED_NETWORK_TYPE_DISCONNECTED]="DETAILED_NETWORK_TYPE_DISCONNECTED";Z[Z.DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_NON_MOBILE_UNKNOWN";Z[Z.DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN]="DETAILED_NETWORK_TYPE_MOBILE_UNKNOWN";
Z[Z.DETAILED_NETWORK_TYPE_WIMAX]="DETAILED_NETWORK_TYPE_WIMAX";Z[Z.DETAILED_NETWORK_TYPE_ETHERNET]="DETAILED_NETWORK_TYPE_ETHERNET";Z[Z.DETAILED_NETWORK_TYPE_BLUETOOTH]="DETAILED_NETWORK_TYPE_BLUETOOTH";Z[Z.DETAILED_NETWORK_TYPE_WIFI]="DETAILED_NETWORK_TYPE_WIFI";Z[Z.DETAILED_NETWORK_TYPE_LTE]="DETAILED_NETWORK_TYPE_LTE";Z[Z.DETAILED_NETWORK_TYPE_HSPAP]="DETAILED_NETWORK_TYPE_HSPAP";Z[Z.DETAILED_NETWORK_TYPE_EHRPD]="DETAILED_NETWORK_TYPE_EHRPD";Z[Z.DETAILED_NETWORK_TYPE_EVDO_B]="DETAILED_NETWORK_TYPE_EVDO_B";
Z[Z.DETAILED_NETWORK_TYPE_UMTS]="DETAILED_NETWORK_TYPE_UMTS";Z[Z.DETAILED_NETWORK_TYPE_IDEN]="DETAILED_NETWORK_TYPE_IDEN";Z[Z.DETAILED_NETWORK_TYPE_HSUPA]="DETAILED_NETWORK_TYPE_HSUPA";Z[Z.DETAILED_NETWORK_TYPE_HSPA]="DETAILED_NETWORK_TYPE_HSPA";Z[Z.DETAILED_NETWORK_TYPE_HSDPA]="DETAILED_NETWORK_TYPE_HSDPA";Z[Z.DETAILED_NETWORK_TYPE_EVDO_A]="DETAILED_NETWORK_TYPE_EVDO_A";Z[Z.DETAILED_NETWORK_TYPE_EVDO_0]="DETAILED_NETWORK_TYPE_EVDO_0";Z[Z.DETAILED_NETWORK_TYPE_CDMA]="DETAILED_NETWORK_TYPE_CDMA";
Z[Z.DETAILED_NETWORK_TYPE_1_X_RTT]="DETAILED_NETWORK_TYPE_1_X_RTT";Z[Z.DETAILED_NETWORK_TYPE_GPRS]="DETAILED_NETWORK_TYPE_GPRS";Z[Z.DETAILED_NETWORK_TYPE_EDGE]="DETAILED_NETWORK_TYPE_EDGE";Z[Z.DETAILED_NETWORK_TYPE_UNKNOWN]="DETAILED_NETWORK_TYPE_UNKNOWN";var hw={LATENCY_PLAYER_RTSP:7,LATENCY_PLAYER_HTML5_INLINE:6,LATENCY_PLAYER_HTML5_FULLSCREEN:5,LATENCY_PLAYER_HTML5:4,LATENCY_PLAYER_FRAMEWORK:3,LATENCY_PLAYER_FLASH:2,LATENCY_PLAYER_EXO:1,LATENCY_PLAYER_UNKNOWN:0};hw[hw.LATENCY_PLAYER_RTSP]="LATENCY_PLAYER_RTSP";
hw[hw.LATENCY_PLAYER_HTML5_INLINE]="LATENCY_PLAYER_HTML5_INLINE";hw[hw.LATENCY_PLAYER_HTML5_FULLSCREEN]="LATENCY_PLAYER_HTML5_FULLSCREEN";hw[hw.LATENCY_PLAYER_HTML5]="LATENCY_PLAYER_HTML5";hw[hw.LATENCY_PLAYER_FRAMEWORK]="LATENCY_PLAYER_FRAMEWORK";hw[hw.LATENCY_PLAYER_FLASH]="LATENCY_PLAYER_FLASH";hw[hw.LATENCY_PLAYER_EXO]="LATENCY_PLAYER_EXO";hw[hw.LATENCY_PLAYER_UNKNOWN]="LATENCY_PLAYER_UNKNOWN";
var iw={LATENCY_AD_BREAK_TYPE_POSTROLL:3,LATENCY_AD_BREAK_TYPE_MIDROLL:2,LATENCY_AD_BREAK_TYPE_PREROLL:1,LATENCY_AD_BREAK_TYPE_UNKNOWN:0};iw[iw.LATENCY_AD_BREAK_TYPE_POSTROLL]="LATENCY_AD_BREAK_TYPE_POSTROLL";iw[iw.LATENCY_AD_BREAK_TYPE_MIDROLL]="LATENCY_AD_BREAK_TYPE_MIDROLL";iw[iw.LATENCY_AD_BREAK_TYPE_PREROLL]="LATENCY_AD_BREAK_TYPE_PREROLL";iw[iw.LATENCY_AD_BREAK_TYPE_UNKNOWN]="LATENCY_AD_BREAK_TYPE_UNKNOWN";var jw={LATENCY_ACTION_ERROR_STARTUP_TIMEOUT:1,LATENCY_ACTION_ERROR_UNSPECIFIED:0};
jw[jw.LATENCY_ACTION_ERROR_STARTUP_TIMEOUT]="LATENCY_ACTION_ERROR_STARTUP_TIMEOUT";jw[jw.LATENCY_ACTION_ERROR_UNSPECIFIED]="LATENCY_ACTION_ERROR_UNSPECIFIED";var kw={LIVE_STREAM_MODE_WINDOW:5,LIVE_STREAM_MODE_POST:4,LIVE_STREAM_MODE_LP:3,LIVE_STREAM_MODE_LIVE:2,LIVE_STREAM_MODE_DVR:1,LIVE_STREAM_MODE_UNKNOWN:0};kw[kw.LIVE_STREAM_MODE_WINDOW]="LIVE_STREAM_MODE_WINDOW";kw[kw.LIVE_STREAM_MODE_POST]="LIVE_STREAM_MODE_POST";kw[kw.LIVE_STREAM_MODE_LP]="LIVE_STREAM_MODE_LP";
kw[kw.LIVE_STREAM_MODE_LIVE]="LIVE_STREAM_MODE_LIVE";kw[kw.LIVE_STREAM_MODE_DVR]="LIVE_STREAM_MODE_DVR";kw[kw.LIVE_STREAM_MODE_UNKNOWN]="LIVE_STREAM_MODE_UNKNOWN";var lw={VIDEO_STREAM_TYPE_VOD:3,VIDEO_STREAM_TYPE_DVR:2,VIDEO_STREAM_TYPE_LIVE:1,VIDEO_STREAM_TYPE_UNSPECIFIED:0};lw[lw.VIDEO_STREAM_TYPE_VOD]="VIDEO_STREAM_TYPE_VOD";lw[lw.VIDEO_STREAM_TYPE_DVR]="VIDEO_STREAM_TYPE_DVR";lw[lw.VIDEO_STREAM_TYPE_LIVE]="VIDEO_STREAM_TYPE_LIVE";lw[lw.VIDEO_STREAM_TYPE_UNSPECIFIED]="VIDEO_STREAM_TYPE_UNSPECIFIED";
var mw={YT_IDB_TRANSACTION_TYPE_READ:2,YT_IDB_TRANSACTION_TYPE_WRITE:1,YT_IDB_TRANSACTION_TYPE_UNKNOWN:0};mw[mw.YT_IDB_TRANSACTION_TYPE_READ]="YT_IDB_TRANSACTION_TYPE_READ";mw[mw.YT_IDB_TRANSACTION_TYPE_WRITE]="YT_IDB_TRANSACTION_TYPE_WRITE";mw[mw.YT_IDB_TRANSACTION_TYPE_UNKNOWN]="YT_IDB_TRANSACTION_TYPE_UNKNOWN";var nw={PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN:2,PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT:1,PLAYER_ROTATION_TYPE_UNKNOWN:0};nw[nw.PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN]="PLAYER_ROTATION_TYPE_PORTRAIT_TO_FULLSCREEN";
nw[nw.PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT]="PLAYER_ROTATION_TYPE_FULLSCREEN_TO_PORTRAIT";nw[nw.PLAYER_ROTATION_TYPE_UNKNOWN]="PLAYER_ROTATION_TYPE_UNKNOWN";var ow="actionVisualElement spinnerInfo resourceInfo playerInfo commentInfo mdxInfo watchInfo thumbnailLoadInfo creatorInfo unpluggedInfo reelInfo subscriptionsFeedInfo requestIds mediaBrowserActionInfo musicLoadActionInfo shoppingInfo webViewInfo prefetchInfo accelerationSession commerceInfo inlineToWatchInfo webInfo tvInfo kabukiInfo mwebInfo musicInfo transcodingContext".split(" ");function pw(a,b){vq.call(this,1,arguments);this.timer=b}
v(pw,vq);var qw=new wq("aft-recorded",pw);var rw=y.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",rw);function sw(){this.h=0}
function tw(){sw.h||(sw.h=new sw);return sw.h}
sw.prototype.tick=function(a,b,c,d){uw(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},R("web_csi_via_jspb")?(d=new lm,G(d,1,a),G(d,2,b),a=new om,ie(a,lm,5,pm,d),ku(a,c)):Bo("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
sw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");uw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Bo("latencyActionInfo",a,{cttAuthInfo:c}))};
sw.prototype.jspbInfo=function(a,b,c){for(var d="",e=0;e<a.toJSON().length;e++)void 0!==a.toJSON()[e]&&(d=0===e?d.concat(""+e):d.concat("_"+e));uw(this,"info_"+d+"_"+b)||(G(a,2,b),b={cttAuthInfo:c},c=new om,ie(c,im,7,pm,a),ku(c,b))};
sw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");uw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Bo("latencyActionSpan",a,{cttAuthInfo:c}))};
function uw(a,b){rw[b]=rw[b]||{count:0};var c=rw[b];c.count++;c.time=T();a.h||(a.h=no(function(){var d=T(),e;for(e in rw)rw[e]&&6E4<d-rw[e].time&&delete rw[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new S("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||yu(c)),!0):!1}
;var vw=window;function ww(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function xw(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==yw?void 0:null==(a=yw.getEntriesByType)?void 0:null==(b=a.call(yw,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=zw(e.requestStart),e.responseEnd=zw(e.responseEnd),e.redirectStart=zw(e.redirectStart),e.redirectEnd=zw(e.redirectEnd),e.domainLookupEnd=zw(e.domainLookupEnd),e.connectStart=zw(e.connectStart),e.connectEnd=
zw(e.connectEnd),e.responseStart=zw(e.responseStart),e.secureConnectionStart=zw(e.secureConnectionStart),e.domainLookupStart=zw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=yw.timing}else a=yw.timing;return a}
function zw(a){return Math.round(Aw()+a)}
function Aw(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&yw.timeOrigin?Math.floor(yw.timeOrigin):yw.timing.navigationStart}
var yw=vw.performance||vw.mozPerformance||vw.msPerformance||vw.webkitPerformance||new ww;var Bw=!1,Cw={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Xa(yw.clearResourceTimings||yw.webkitClearResourceTimings||yw.mozClearResourceTimings||yw.msClearResourceTimings||yw.oClearResourceTimings||db,yw);function Dw(a,b,c,d){if(null!==b){if("yt_lt"===a){var e="string"===typeof b?b:""+b;Sv(c).loadType=e}(a=fw(a,b,c))&&Ew(a,c,d)}}
function Ew(a,b,c){if(!R("web_csi_via_jspb")||(void 0===c?0:c))c=Yv(b||""),Lv(c.info,a),a.loadType&&(c=a.loadType,Sv(b).loadType=c),Lv(Vv(b),a),c=Wv(b),b=Qv(b).cttAuthInfo,tw().info(a,c,b);else{c=new im;var d=Object.keys(a);a=Object.values(a);for(var e=0;e<d.length;e++){var f=d[e];try{switch(f){case "actionType":G(c,1,W[a[e]]);break;case "clientActionNonce":G(c,2,a[e]);break;case "clientScreenNonce":G(c,4,a[e]);break;case "loadType":G(c,3,a[e]);break;case "isPrewarmedLaunch":G(c,92,a[e]);break;case "isFirstInstall":G(c,
55,a[e]);break;case "networkType":G(c,5,gw[a[e]]);break;case "connectionType":G(c,26,Y[a[e]]);break;case "detailedConnectionType":G(c,27,Z[a[e]]);break;case "isVisible":G(c,6,a[e]);break;case "playerType":G(c,7,hw[a[e]]);break;case "clientPlaybackNonce":G(c,8,a[e]);break;case "adClientPlaybackNonce":G(c,28,a[e]);break;case "previousCpn":G(c,77,a[e]);break;case "targetCpn":G(c,76,a[e]);break;case "isMonetized":G(c,9,a[e]);break;case "isPrerollAllowed":G(c,16,a[e]);break;case "isPrerollShown":G(c,17,
a[e]);break;case "adType":G(c,12,a[e]);break;case "adTypesAllowed":G(c,36,a[e]);break;case "adNetworks":G(c,37,a[e]);break;case "previousAction":G(c,13,W[a[e]]);break;case "isRedSubscriber":G(c,14,a[e]);break;case "serverTimeMs":G(c,15,a[e]);break;case "videoId":c.setVideoId(a[e]);break;case "adVideoId":G(c,20,a[e]);break;case "targetVideoId":G(c,78,a[e]);break;case "adBreakType":G(c,21,iw[a[e]]);break;case "isNavigation":G(c,25,a[e]);break;case "viewportHeight":G(c,29,a[e]);break;case "viewportWidth":G(c,
30,a[e]);break;case "screenHeight":G(c,84,a[e]);break;case "screenWidth":G(c,85,a[e]);break;case "browseId":G(c,31,a[e]);break;case "isCacheHit":G(c,32,a[e]);break;case "httpProtocol":G(c,33,a[e]);break;case "transportProtocol":G(c,34,a[e]);break;case "searchQuery":G(c,41,a[e]);break;case "isContinuation":G(c,42,a[e]);break;case "availableProcessors":G(c,43,a[e]);break;case "sdk":G(c,44,a[e]);break;case "isLocalStream":G(c,45,a[e]);break;case "navigationRequestedSameUrl":G(c,64,a[e]);break;case "shellStartupDurationMs":G(c,
70,a[e]);break;case "appInstallDataAgeMs":G(c,73,a[e]);break;case "latencyActionError":G(c,71,jw[a[e]]);break;case "actionStep":G(c,79,a[e]);break;case "jsHeapSizeLimit":G(c,80,a[e]);break;case "totalJsHeapSize":G(c,81,a[e]);break;case "usedJsHeapSize":G(c,82,a[e]);break;case "sourceVideoDurationMs":G(c,90,a[e]);break;case "videoOutputFrames":G(c,93,a[e]);break;case "isResume":G(c,104,a[e]);break;case "debugTicksExcluded":G(c,105,a[e]);break;case "adPrebufferedTimeSecs":G(c,39,a[e]);break;case "isLivestream":G(c,
47,a[e]);break;case "liveStreamMode":G(c,91,kw[a[e]]);break;case "adCpn2":G(c,48,a[e]);break;case "adDaiDriftMillis":G(c,49,a[e]);break;case "videoStreamType":G(c,53,lw[a[e]]);break;case "playbackRequiresTap":G(c,56,a[e]);break;case "performanceNavigationTiming":G(c,67,a[e]);break;case "transactionType":G(c,74,mw[a[e]]);break;case "playerRotationType":G(c,101,nw[a[e]]);break;case "allowedPreroll":G(c,10,a[e]);break;case "shownPreroll":G(c,11,a[e]);break;case "getHomeRequestId":G(c,57,a[e]);break;
case "getSearchRequestId":G(c,60,a[e]);break;case "getPlayerRequestId":G(c,61,a[e]);break;case "getWatchNextRequestId":G(c,62,a[e]);break;case "getBrowseRequestId":G(c,63,a[e]);break;case "getLibraryRequestId":G(c,66,a[e]);break;case "isTransformerEnabledForFeature":G(c,106,a[e]);break;default:ow.includes(f)&&Om(new S("Codegen laipb translator asked to translate message field",""+f))}}catch(g){Om(Error("Codegen laipb translator failed to set "+f))}}Fw(c,b)}}
function Fw(a,b){var c=oe(a,3);c&&(Sv(b).loadType=c);Yv(b||"").jspbInfo.push(a);c=Wv(b);b=Qv(b).cttAuthInfo;tw().jspbInfo(a,c,b)}
function Gw(a,b,c){if(!b&&"_"!==a[0]){var d=a;yw.mark&&(0==d.lastIndexOf("mark_",0)||(d="mark_"+d),c&&(d+=" ("+c+")"),yw.mark(d))}d=Yv(c||"");d.tick[a]=b||T();if(d.callback&&d.callback[a]){d=r(d.callback[a]);for(var e=d.next();!e.done;e=d.next())e=e.value,e()}d=Uv(c);d.gelTicks&&(d.gelTicks[a]=!0);e=Tv(c);d=b||T();R("log_repeated_ytcsi_ticks")?a in e||(e[a]=d):e[a]=d;e=Wv(c);var f=Qv(c).cttAuthInfo;"_start"===a?(a=tw(),uw(a,"baseline_"+e)||(b={timestamp:b,cttAuthInfo:f},R("web_csi_via_jspb")?(a=new dm,
G(a,1,e),e=new om,ie(e,dm,6,pm,a),ku(e,b)):Bo("latencyActionBaselined",{clientActionNonce:e},b))):tw().tick(a,e,b,f);Hw(c);return d}
function Iw(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Hs+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Jw(a){var b=xw(),c=Aw(),d=P("CSI_START_TIMESTAMP_MILLIS",0);0<d&&!R("embeds_web_enable_csi_start_override_killswitch")&&(c=d);c&&(Gw("srt",b.responseStart),1!==a.prerender&&Gw("_start",c,void 0));a=Kw();0<a&&Gw("fpt",a);a=xw();a.isPerformanceNavigationTiming&&Ew({performanceNavigationTiming:!0},void 0);Gw("nreqs",a.requestStart,void 0);Gw("nress",a.responseStart,void 0);Gw("nrese",a.responseEnd,void 0);0<a.redirectEnd-a.redirectStart&&(Gw("nrs",a.redirectStart,void 0),Gw("nre",a.redirectEnd,
void 0));0<a.domainLookupEnd-a.domainLookupStart&&(Gw("ndnss",a.domainLookupStart,void 0),Gw("ndnse",a.domainLookupEnd,void 0));0<a.connectEnd-a.connectStart&&(Gw("ntcps",a.connectStart,void 0),Gw("ntcpe",a.connectEnd,void 0));a.secureConnectionStart>=Aw()&&0<a.connectEnd-a.secureConnectionStart&&(Gw("nstcps",a.secureConnectionStart,void 0),Gw("ntcpe",a.connectEnd,void 0));yw&&"getEntriesByType"in yw&&Lw()}
function Mw(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);tc()&&a.setAttribute("nonce",tc());return c?(a=yw.getEntriesByName(c))&&a[0]&&(a=a[0],c=Aw(),Gw("rsf_"+b,c+Math.round(a.fetchStart)),Gw("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Nw(){var a=[];if(document.querySelector&&yw&&yw.getEntriesByName)for(var b in Cw)if(Cw.hasOwnProperty(b)){var c=Cw[b];Mw(b,c)&&a.push(c)}return a}
function Lw(){var a=window.location.protocol,b=yw.getEntriesByType("resource");b=hb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=jb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Gw("wffs",zw(b.startTime)),Gw("wffe",zw(b.responseEnd)))}
function Ow(a){var b=Pw("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=Pw(b[d],a);if(e)return e}return NaN}
function Pw(a,b){if(a=Tv(b)[a])return"number"===typeof a?a:a[a.length-1]}
function Hw(a){var b=Pw("_start",a),c=Ow(a);b&&c&&!Bw&&(Bq(qw,new pw(Math.round(c-b),a)),Bw=!0)}
function Qw(a,b){for(var c=r(Object.keys(b)),d=c.next();!d.done;d=c.next())if(d=d.value,!Object.keys(a).includes(d)||"object"===typeof b[d]&&!Qw(a[d],b[d]))return!1;return!0}
function Kw(){if(yw.getEntriesByType){var a=yw.getEntriesByType("paint");if(a=kb(a,function(b){return"first-paint"===b.name}))return zw(a.startTime)}a=yw.timing;
return a.Je?Math.max(0,a.Je):0}
;function Rw(a,b){Nm(function(){Yv("").info.actionType=a;b&&Jm("TIMING_AFT_KEYS",b);Jm("TIMING_ACTION",a);if(R("web_csi_via_jspb")){var c=P("TIMING_INFO",{}),d=new im;c=r(Object.entries(c));for(var e=c.next();!e.done;e=c.next()){var f=r(e.value);e=f.next().value;f=f.next().value;switch(e){case "GetBrowse_rid":km(d,gm(fm(e),String(f)));break;case "GetGuide_rid":km(d,gm(fm(e),String(f)));break;case "GetHome_rid":km(d,gm(fm(e),String(f)));break;case "GetPlayer_rid":km(d,gm(fm(e),String(f)));break;case "GetSearch_rid":km(d,
gm(fm(e),String(f)));break;case "GetSettings_rid":km(d,gm(fm(e),String(f)));break;case "GetTrending_rid":km(d,gm(fm(e),String(f)));break;case "GetWatchNext_rid":km(d,gm(fm(e),String(f)));break;case "yt_red":G(d,14,!!f);break;case "yt_ad":G(d,9,!!f)}}Fw(d);d=new im;d=G(d,25,!0);d=G(d,1,W[ew(P("TIMING_ACTION"))]);(c=P("PREVIOUS_ACTION"))&&G(d,13,W[ew(c)]);(c=P("CLIENT_PROTOCOL"))&&G(d,33,c);(c=P("CLIENT_TRANSPORT"))&&G(d,34,c);(c=Su())&&"UNDEFINED_CSN"!==c&&G(d,4,c);c=Iw();1!==c&&-1!==c||G(d,6,!0);
c=Rv();Sv();G(d,3,"cold");Jw(c);c=Nw();if(0<c.length)for(c=r(c),e=c.next();!e.done;e=c.next())e=e.value,f=new hm,G(f,1,e),ke(d,83,hm,f);Fw(d)}else{d=P("TIMING_INFO",{});for(c in d)d.hasOwnProperty(c)&&Dw(c,d[c]);d={isNavigation:!0,actionType:ew(P("TIMING_ACTION"))};if(c=P("PREVIOUS_ACTION"))d.previousAction=ew(c);if(c=P("CLIENT_PROTOCOL"))d.httpProtocol=c;if(c=P("CLIENT_TRANSPORT"))d.transportProtocol=c;(c=Su())&&"UNDEFINED_CSN"!==c&&(d.clientScreenNonce=c);c=Iw();if(1===c||-1===c)d.isVisible=!0;
Sv();Rv();d.loadType="cold";Jw(Rv());c=Nw();if(0<c.length)for(d.resourceInfo=[],c=r(c),e=c.next();!e.done;e=c.next())d.resourceInfo.push({resourceCache:e.value});Ew(d)}d=Rv();c=Vv();if("cold"===Sv().loadType&&("cold"===d.yt_lt||"cold"===c.loadType)){e=Tv();f=Uv();f=f.gelTicks?f.gelTicks:f.gelTicks={};for(var g in e)if(!(g in f))if("number"===typeof e[g])Gw(g,Pw(g));else if(R("log_repeated_ytcsi_ticks"))for(var h=r(e[g]),k=h.next();!k.done;k=h.next())Gw(g.slice(1),k.value);g={};e=!1;f=r(Object.keys(d));
for(h=f.next();!h.done;h=f.next())h=h.value,(h=fw(h,d[h]))&&!Qw(Vv(),h)&&(Lv(c,h),Lv(g,h),e=!0);e&&Ew(g)}z("ytglobal.timingready_",!0);g=P("TIMING_ACTION");A("ytglobal.timingready_")&&g&&Sw()&&Ow()&&Hw()})()}
function Tw(a,b,c,d){Nm(Dw)(a,b,c,d)}
function Uw(a,b,c){return Nm(Gw)(a,b,c)}
function Sw(){return Nm(function(){return"_start"in Tv()})()}
function Vw(){Nm(function(){var a=Wv();requestAnimationFrame(function(){setTimeout(function(){a===Wv()&&Uw("ol",void 0,void 0)},0)})})()}
var Ww=window;Ww.ytcsi&&(Ww.ytcsi.info=Tw,Ww.ytcsi.tick=Uw);var Xw="tokens consistency mss client_location entities response_received_commands store PLAYER_PRELOAD".split(" "),Yw=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function Zw(a,b,c,d){this.m=a;this.W=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Tb||(a.Tb={});a.Tb=Object.assign({},Kv,a.Tb)}
function $w(a,b,c,d){if(void 0!==Zw.h){if(d=Zw.h,a=[a!==d.m,b!==d.W,c!==d.l,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new S("InnerTubeTransportService is already initialized",a);
}else Zw.h=new Zw(a,b,c,d)}
function ax(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Pn:c;var d=Cv(b,a.m);if(!d)return Tf(new S("Error: No request builder found for command.",b));var e=d.m(b,void 0,c);return e?new Of(function(f){var g,h,k;return x(function(m){if(1==m.h){h="cors"===(null==(g=e.mb)?void 0:g.mode)?"cors":void 0;if(a.l.hf){var n=e.config,q;n=null==n?void 0:null==(q=n.cc)?void 0:q.sessionIndex;q=On(0,{sessionIndex:n});k=Object.assign({},bx(h),q);return m.v(2)}return w(m,cx(e.config,
h),3)}2!=m.h&&(k=m.i);f(dx(a,e,k));m.h=0})}):Tf(new S("Error: Failed to build request for command.",b))}
function ex(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.Xt)?0:d.bu)&&a.j){d=r(Xw);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function dx(a,b,c){var d,e,f,g,h,k,m,n,q,u,t,B,D,F,M,O,Q,ca,X,wb,Za,sa,H,oa,ja,df,ef,Ld;return x(function(wa){switch(wa.h){case 1:wa.v(2);break;case 3:if((d=wa.i)&&!d.isExpired())return wa.return(Promise.resolve(d.h()));case 2:if(null==(e=b)?0:null==(f=e.La)?0:f.context)for(g=r([]),h=g.next();!h.done;h=g.next())k=h.value,k.Tt(b.La.context);if(null==(m=a.i)||!m.Yt(b.input,b.La)){wa.v(4);break}return w(wa,a.i.Ot(b.input,b.La),5);case 5:return n=wa.i,R("kevlar_process_local_innertube_responses_killswitch")||
ex(a,n,b),wa.return(n);case 4:return(t=null==(u=b.config)?void 0:u.Oa)&&a.h.has(t)&&R("web_memoize_inflight_requests")?q=a.h.get(t):(B=JSON.stringify(b.La),M=null!=(F=null==(D=b.mb)?void 0:D.headers)?F:{},b.mb=Object.assign({},b.mb,{headers:Object.assign({},M,c)}),O=Object.assign({},b.mb),"POST"===b.mb.method&&(O=Object.assign({},O,{body:B})),(null==(Q=b.config)?0:Q.Re)&&Uw(b.config.Re),ca=function(){return a.W.fetch(b.input,O,b.config)},q=ca(),t&&a.h.set(t,q)),w(wa,q,6);
case 6:if((X=wa.i)&&"error"in X&&(null==(wb=X)?0:null==(Za=wb.error)?0:Za.details))for(sa=X.error.details,H=r(sa),oa=H.next();!oa.done;oa=H.next())ja=oa.value,(df=ja["@type"])&&-1<Yw.indexOf(df)&&(delete ja["@type"],X=ja);t&&a.h.has(t)&&a.h.delete(t);(null==(ef=b.config)?0:ef.Se)&&Uw(b.config.Se);if(X||null==(Ld=a.i)||!Ld.Gt(b.input,b.La)){wa.v(7);break}return w(wa,a.i.Nt(b.input,b.La),8);case 8:X=wa.i;case 7:return ex(a,X,b),wa.return(X||void 0)}})}
function cx(a,b){var c,d,e,f;return x(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.cc)?void 0:d.sessionIndex;var h=On(0,{sessionIndex:e});if(!(h instanceof Of)){var k=new Of(db);Pf(k,2,h);h=k}return w(g,h,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},bx(b),f)))})}
function bx(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);"cors"!==a&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var fx=new gt("INNERTUBE_TRANSPORT_TOKEN");var gx=["share/get_web_player_share_panel"],hx=["feedback"],ix=["notification/modify_channel_preference"],jx=["browse/edit_playlist"],kx=["subscription/subscribe"],lx=["subscription/unsubscribe"];function mx(){}
v(mx,Hv);mx.prototype.j=function(){return kx};
mx.prototype.h=function(a){return st(a,Am)||void 0};
mx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ea.Object.defineProperties(mx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function nx(){}
v(nx,Hv);nx.prototype.j=function(){return lx};
nx.prototype.h=function(a){return st(a,zm)||void 0};
nx.prototype.i=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ea.Object.defineProperties(nx.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ox(){}
v(ox,Hv);ox.prototype.j=function(){return hx};
ox.prototype.h=function(a){return st(a,fl)||void 0};
ox.prototype.i=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ea.Object.defineProperties(ox.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function px(){}
v(px,Hv);px.prototype.j=function(){return ix};
px.prototype.h=function(a){return st(a,ym)||void 0};
px.prototype.i=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function qx(){}
v(qx,Hv);qx.prototype.j=function(){return jx};
qx.prototype.h=function(a){return st(a,xm)||void 0};
qx.prototype.i=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function rx(){}
v(rx,Hv);rx.prototype.j=function(){return gx};
rx.prototype.h=function(a){return st(a,wm)};
rx.prototype.i=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var sx=new gt("NETWORK_SLI_TOKEN");function tx(a){this.h=a}
tx.prototype.fetch=function(a,b){var c=this,d,e,f;return x(function(g){c.h&&(d=xc(yc(5,Lc(a,"key")))||"/UNKNOWN_PATH",c.h.start(d));e=b;R("wug_networking_gzip_request")&&(e=Sq(b));f=new window.Request(a,e);return R("web_fetch_promise_cleanup_killswitch")?g.return(Promise.resolve(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){yu(h)}))):g.return(fetch(f).then(function(h){return c.handleResponse(h)}).catch(function(h){yu(h)}))})};
tx.prototype.handleResponse=function(a){var b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Kt(),b=b.then(function(c){yu(new S("Error: API fetch failed",a.status,a.url,c));return Object.assign({},c,{errorMetadata:{status:a.status}})}));
return b};
tx[ft]=[new ht(sx)];var ux=new gt("NETWORK_MANAGER_TOKEN");var vx;function wx(a){a=void 0===a||a?Gu():Fu();for(var b=[],c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;function xx(a){vq.call(this,1,arguments);this.csn=a}
v(xx,vq);var Eq=new wq("screen-created",xx),yx=[],Ax=zx,Bx=0;function Cx(a,b,c,d,e,f,g,h){function k(){yu(new S("newScreen() parent element does not have a VE - rootVe",b))}
var m=Ax(),n=new Lu({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:m};e&&(f.cttAuthInfo=e);if(R("il_via_jspb")){e=Wl((new Vl).h(m),n.getAsJspb());c&&c.visualElement?(n=new Tl,c.clientScreenNonce&&G(n,2,c.clientScreenNonce),Ul(n,c.visualElement.getAsJspb()),g&&G(n,4,qm[g]),I(e,Tl,5,n)):c&&k();d&&G(e,3,d);if(R("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new Ik;h=r(h.screenCreatedLoggingExpectations.expectedParentScreens||[]);for(d=h.next();!d.done;d=h.next())d=
d.value,d.screenVeType&&(d=Hk(new Gk,d.screenVeType),ke(c,1,Gk,d));I(e,Ik,7,c)}pu(e,f,a)}else e={csn:m,pageVe:n.getAsJson()},R("expectation_logging")&&h&&h.screenCreatedLoggingExpectations&&(e.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(e.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(e.implicitGesture.gestureType=g)):c&&k(),d&&(e.cloneCsn=d),a?eu("screenCreated",e,a,f):Bo("screenCreated",e,f);Bq(Eq,new xx(m));
return m}
function Dx(a,b,c,d){var e=d.filter(function(k){k.csn!==b?(k.csn=b,k=!0):k=!1;return k}),f={cttAuthInfo:Vu(b)||void 0,
sequenceGroup:b};d=r(d);for(var g=d.next();!g.done;g=d.next())g=g.value.getAsJson(),(qb(g)||!g.trackingParams&&!g.veType)&&yu(Error("Child VE logged with no data"));if(R("il_via_jspb")){var h=Zl((new Xl).h(b),c.getAsJspb());ib(e,function(k){k=k.getAsJspb();ke(h,3,Ol,k)});
"UNDEFINED_CSN"===b?Ex("visualElementAttached",f,void 0,h):qu(h,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:ib(e,function(k){return k.getAsJson()})},"UNDEFINED_CSN"===b?Ex("visualElementAttached",f,c):a?eu("visualElementAttached",c,a,f):Bo("visualElementAttached",c,f)}
function Fx(a,b,c,d,e,f){d={cttAuthInfo:Vu(b)||void 0,sequenceGroup:b};R("il_via_jspb")?(e=(new bm).h(b),c=c.getAsJspb(),c=I(e,Ol,2,c),c=G(c,4,1),f&&I(c,Rl,3,f),"UNDEFINED_CSN"===b?Ex("visualElementShown",d,void 0,c):lu(c,d,a)):(f={csn:b,ve:c.getAsJson(),eventType:1},e&&(f.clientData=e),"UNDEFINED_CSN"===b?Ex("visualElementShown",d,f):a?eu("visualElementShown",f,a,d):Bo("visualElementShown",f,d))}
function Gx(a,b,c){var d=!0,e=(d=void 0===d?!1:d)?16:8,f={cttAuthInfo:Vu(b)||void 0,sequenceGroup:b,endOfSequence:d};R("il_via_jspb")?(e=(new am).h(b),c=c.getAsJspb(),c=I(e,Ol,2,c),G(c,4,d?16:8),"UNDEFINED_CSN"===b?Ex("visualElementHidden",f,void 0,c):mu(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Ex("visualElementHidden",f,d):a?eu("visualElementHidden",d,a,f):Bo("visualElementHidden",d,f))}
function zx(){var a;R("enable_web_96_bit_csn")?a=wx():R("enable_web_96_bit_csn_no_crypto")?a=wx(!1):a=pd(Nc(Math.random()+""),3);return a}
function Ex(a,b,c,d){yx.push({Oc:a,payload:c,Ua:d,options:b});Bx||(Bx=Fq())}
function Gq(a){if(yx){for(var b=r(yx),c=b.next();!c.done;c=b.next())if(c=c.value,R("il_via_jspb")&&c.Ua)switch(c.Ua.h(a.csn),c.Oc){case "screenCreated":pu(c.Ua,c.options);break;case "visualElementAttached":qu(c.Ua,c.options);break;case "visualElementShown":lu(c.Ua,c.options);break;case "visualElementHidden":mu(c.Ua,c.options);break;case "visualElementGestured":nu(c.Ua,c.options);break;case "visualElementStateChanged":ou(c.Ua,c.options);break;default:yu(new S("flushQueue unable to map payloadName to JSPB setter"))}else c.payload&&
(c.payload.csn=a.csn,Bo(c.Oc,c.payload,c.options));yx.length=0}Bx=0}
;function Hx(){this.j=new Set;this.i=new Set;this.m=new Map;this.client=void 0;this.csn=null}
function Ix(){Hx.h||(Hx.h=new Hx);return Hx.h}
Hx.prototype.l=function(a){this.client=a};
Hx.prototype.h=function(){this.clear();this.csn=Su()};
Hx.prototype.clear=function(){this.j.clear();this.i.clear();this.m.clear();this.csn=null};function Jx(){}
Jx.prototype.l=function(a){Nm(Ix().l).bind(Ix())(a)};
Jx.prototype.clear=function(){Nm(Ix().clear).bind(Ix())()};function Kx(){this.s=[];this.H=[];this.h=[];this.A=[];this.m=[];this.X=[];this.i=new Set;this.L=new Map}
Kx.prototype.l=function(a){this.client=a};
function Lx(){Kx.h||(Kx.h=new Kx);var a=Kx.h;var b=16623;var c=void 0===c?{}:c;Nm(function(){Object.values(Zu).includes(b)||(yu(new S("createClientScreen() called with a non-page VE",b)),b=83769);c.isHistoryNavigation||(a.A=[],a.h.push({rootVe:b,key:c.key||""}));a.s=[];a.H=[];c.md?Mx(a,b,c):Nx(a,b,c)})()}
function Ox(a,b,c){c=void 0===c?0:c;Nm(function(){b.then(function(d){a.i.has(c)&&a.j&&a.j();var e=Su(c),f=Qu(c);if(e&&f){var g;(null==d?0:null==(g=d.response)?0:g.trackingParams)&&Dx(a.client,e,f,[Mu(d.response.trackingParams)]);var h;(null==d?0:null==(h=d.playerResponse)?0:h.trackingParams)&&Dx(a.client,e,f,[Mu(d.playerResponse.trackingParams)])}})})()}
function Px(a,b,c,d){d=void 0===d?0:d;Nm(function(){if(a.i.has(d))return a.s.push([b,c]),!0;var e=Su(d),f=c||Qu(d);return e&&f?(Dx(a.client,e,f,[b]),!0):!1})()}
Kx.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=Su(void 0===c?0:c)){a=this.client;var e=Mu(d);d={cttAuthInfo:Vu(c)||void 0,sequenceGroup:c};R("il_via_jspb")?(b=(new $l).h(c),e=e.getAsJspb(),b=I(b,Ol,2,e),G(b,4,qm.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===c?Ex("visualElementGestured",d,void 0,b):nu(b,d,a)):(e={csn:c,ve:e.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},b&&(e.clientData=b),"UNDEFINED_CSN"===
c?Ex("visualElementGestured",d,e):a?eu("visualElementGestured",e,a,d):Bo("visualElementGestured",e,d));b=!0}else b=!1;else b=!1;return b};
Kx.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;0===c&&this.i.has(c)?this.H.push([a,b]):Qx(this,a,b,c)};
function Qx(a,b,c,d){d=void 0===d?0:d;var e=Su(d);d=b||Qu(d);e&&d&&(a=a.client,b={cttAuthInfo:Vu(e)||void 0,sequenceGroup:e},R("il_via_jspb")?(c=new cm,c.h(e),d=d.getAsJspb(),I(c,Ol,2,d),"UNDEFINED_CSN"===e?Ex("visualElementStateChanged",b,void 0,c):ou(c,b,a)):(c={csn:e,ve:d.getAsJson(),clientData:c},"UNDEFINED_CSN"===e?Ex("visualElementStateChanged",b,c):a?eu("visualElementStateChanged",c,a,b):Bo("visualElementStateChanged",c,b)))}
function Mx(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){Nx(a,b,c);var f=Qu(c.layer);if(f){for(var g=r(a.s),h=g.next();!h.done;h=g.next())h=h.value,Px(a,h[0],h[1]||f,c.layer);f=r(a.H);for(g=f.next();!g.done;g=f.next())g=g.value,Qx(a,g[0],g[1])}};
Su(c.layer)||a.j();if(c.md)for(var d=r(c.md),e=d.next();!e.done;e=d.next())Ox(a,e.value,c.layer);else xu(Error("Delayed screen needs a data promise."))}
function Nx(a,b,c){c=void 0===c?{}:c;var d=void 0;c.layer||(c.layer=0);d=void 0!==c.Me?c.Me:c.layer;var e=Su(d);d=Qu(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=P("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=Cx(a.client,b,f,c.ld,c.cttAuthInfo,g,c.Lt,c.loggingExpectations)}catch(q){Au(q,{Vt:b,rootVe:d,St:void 0,Ht:e,Rt:f,ld:c.ld});xu(q);
return}Wu(k,b,c.layer,c.cttAuthInfo);e&&"UNDEFINED_CSN"!==e&&d&&!Tu(e)&&Gx(a.client,e,d);a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=k||"");Nm(Ew)({clientScreenNonce:k},void 0,!1);Jx.h||(Jx.h=new Jx);Nm(Ix().h).bind(Ix())();var m=Qu(c.layer);e&&"UNDEFINED_CSN"!==e&&m&&(R("web_mark_root_visible")||R("music_web_mark_root_visible"))&&Nm(Fx)(void 0,k,m,void 0,void 0,void 0);a.i.delete(c.layer||0);a.j=void 0;var n;null==(n=a.L.get(c.layer))||n.forEach(function(q,u){q?Px(a,u,q,c.layer):
m&&Px(a,u,m,c.layer)});
Rx(a)}
function Rx(a){for(var b=0;b<a.m.length;b++){var c=a.m[b];try{c()}catch(d){xu(d)}}for(b=a.m.length=0;b<a.X.length;b++){c=a.X[b];try{c()}catch(d){xu(d)}}}
;function Sx(){var a,b,c;return x(function(d){if(1==d.h)return a=nt().resolve(fx),a?w(d,ax(a),2):(yu(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return yu(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.It;return d.return(c)}yu(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Tx=y.caches,Ux;function Vx(a){var b=a.indexOf(":");return-1===b?{Dd:a}:{Dd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Wx(){return x(function(a){if(void 0!==Ux)return a.return(Ux);Ux=new Promise(function(b){var c;return x(function(d){switch(d.h){case 1:return za(d,2),w(d,Tx.open("test-only"),4);case 4:return w(d,Tx.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Ux)})}
function Xx(a){var b,c,d,e,f,g,h;x(function(k){if(1==k.h)return w(k,Wx(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return w(k,Tx.keys(),3)}c=k.i;d=r(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Vx(f),h=g.datasyncId,!h||a.includes(h)||b.push(Tx.delete(f));return k.return(Promise.all(b).then(function(m){return m.some(function(n){return n})}))})}
function Yx(){var a,b,c,d,e,f,g;return x(function(h){if(1==h.h)return w(h,Wx(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=lo("cache contains other");return w(h,Tx.keys(),3)}b=h.i;c=r(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Vx(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Zx(){try{return!!self.localStorage}catch(a){return!1}}
;function $x(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function ay(a){if(Zx()){var b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=$x(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function by(){if(!Zx())return!1;var a=lo(),b=Object.keys(window.localStorage);b=r(b);for(var c=b.next();!c.done;c=b.next())if(c=$x(c.value),void 0!==c&&c!==a)return!0;return!1}
;function cy(){Sx().then(function(a){a&&(Op(a),Xx(a),ay(a))})}
function dy(){var a=new ts;zi.fa(function(){var b,c,d,e;return x(function(f){switch(f.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){f.v(2);break}b=lo("clear");if(b.startsWith("V")){var g=[b];Op(g);Xx(g);ay(g);return f.return()}c=by();return w(f,Yx(),3);case 3:return d=f.i,w(f,Pp(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.ma()?cy():a.l.add("publicytnetworkstatus-online",cy,!0,void 0,void 0),f.h=0}})})}
;var ei=ha(["data-"]);function ey(a){a&&(a.dataset?a.dataset[fy("loaded")]="true":di(a))}
function gy(a,b){return a?a.dataset?a.dataset[fy(b)]:a.getAttribute("data-"+b):null}
var hy={};function fy(a){return hy[a]||(hy[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var iy=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,jy=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function ky(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(iy,""),c=c.replace(jy,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ly(a,b,c)}
function ly(a,b,c){c=void 0===c?null:c;var d=my(a),e=document.getElementById(d),f=e&&gy(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=$s(d,b),b=""+Sa(b),ny[b]=f),g||(e=oy(a,d,function(){gy(e,"loaded")||(ey(e),ct(d),jn(Ya(dt,d),0))},c)))}
function oy(a,b,c,d){d=void 0===d?null:d;var e=Bf("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);gi(e,Ck(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function py(a){a=my(a);var b=document.getElementById(a);b&&(dt(a),b.parentNode.removeChild(b))}
function qy(a,b){a&&b&&(a=""+Sa(b),(a=ny[a])&&bt(a))}
function my(a){var b=document.createElement("a");qc(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+vc(a)}
var ny={};var ry=[],sy=!1;function ty(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&hv()){var a=P("PLAYER_VARS",{});if("1"!=sb(a)&&!iv(a)){var b=function(){sy=!0;"google_ad_status"in window?Jm("DCLKSTAT",1):Jm("DCLKSTAT",2)};
try{ky("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ry.push(zi.fa(function(){if(!(sy||"google_ad_status"in window)){try{qy("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}sy=!0;Jm("DCLKSTAT",3)}},5E3))}}}
function uy(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;var xy=window,yy,zy=R("web_enable_lifecycle_monitoring")&&(null==(yy=xy.performance)?void 0:yy.measure);function Ay(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?ro():d;this.l=c;this.j=d;this.i=new Wh;this.h=a;for(a={bb:0};a.bb<this.h.length;a={Eb:a.Eb,bb:a.bb},a.bb++)a.Eb=this.h[a.bb],c=function(e){return function(){e.Eb.Hc();b.h[e.bb].qc=!0;b.h.every(function(f){return!0===f.qc})&&b.i.resolve()}}(a),d=oo(c,By(this,a.Eb)),this.h[a.bb]=Object.assign({},a.Eb,{Hc:c,
jobId:d})}
function Cy(a){var b=Array.from(a.h.keys()).sort(function(d,e){return By(a,a.h[e])-By(a,a.h[d])});
b=r(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.qc||(a.j.Da(c.jobId),oo(c.Hc,10))}
Ay.prototype.cancel=function(){for(var a=r(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.qc||this.j.Da(b.jobId),b.qc=!0;this.i.resolve()};
function By(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function Dy(a){this.state=a;this.plugins=[];this.s=void 0;this.H={};zy&&window.performance.mark(this.state+"-start")}
l=Dy.prototype;l.install=function(a){this.plugins.push(a);return this};
l.uninstall=function(){var a=this;Ka.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
l.transition=function(a,b){var c=this;Ey(this);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.K===a}):f.from===c.state&&f.K===a});
if(d){this.j&&(Cy(this.j),this.j=void 0);Fy(this,a,b);this.state=a;zy&&window.performance.mark(this.state+"-start");d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Gy(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Gy(a,b){var c=b.filter(function(e){return 10===Hy(a,e)}),d=b.filter(function(e){return 10!==Hy(a,e)});
return a.H.Zt?function(){var e=Ka.apply(0,arguments);return x(function(f){if(1==f.h)return w(f,a.Te.apply(a,[c].concat(ia(e))),2);a.Md.apply(a,[d].concat(ia(e)));f.h=0})}:function(){var e=Ka.apply(0,arguments);
a.Ue.apply(a,[c].concat(ia(e)));a.Md.apply(a,[d].concat(ia(e)))}}
l.Ue=function(a){var b=Ka.apply(1,arguments);ro();for(var c={},d=r(a),e=d.next();!e.done;c={qb:c.qb},e=d.next())c.qb=e.value,po(function(f){return function(){Iy(f.qb.name);f.qb.callback.apply(f.qb,ia(b));Jy(f.qb.name)}}(c))};
l.Te=function(a){var b=Ka.apply(1,arguments),c,d,e,f;return x(function(g){1==g.h&&(ro(),c={},d=r(a),e=d.next());if(3!=g.h){if(e.done)return g.v(0);c.cb=e.value;c.Cb=void 0;f=function(h){return function(){Iy(h.cb.name);var k=h.cb.callback.apply(h.cb,ia(b));k&&(k instanceof Of||k instanceof Promise)?h.Cb=k.then(function(){Jy(h.cb.name)}):Jy(h.cb.name)}}(c);
po(f);return c.Cb?w(g,c.Cb,3):g.v(3)}c={cb:c.cb,Cb:c.Cb};e=d.next();return g.v(2)})};
l.Md=function(a){var b=Ka.apply(1,arguments),c=this,d=a.map(function(e){return{Hc:function(){Iy(e.name);e.callback.apply(e,ia(b));Jy(e.name)},
priority:Hy(c,e)}});
d.length&&(this.j=new Ay(d))};
function Hy(a,b){var c,d;return null!=(d=null!=(c=a.s)?c:b.priority)?d:0}
function Ey(a){if(zy){var b=a.state+"-start",c=a.state+"-end";window.performance.mark(c);window.performance.measure(a.state,b,c)}}
function Iy(a){zy&&a&&window.performance.mark(a+"-start")}
function Jy(a){if(zy&&a){var b=a+"-start",c=a+"-end";window.performance.mark(c);window.performance.measure(a,b,c)}}
function Fy(a,b,c){zy&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ea.Object.defineProperties(Dy.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Ky(a){Dy.call(this,void 0===a?"document_active":a);var b=this;this.s=10;this.h=new Map;this.transitions=[{from:"document_active",K:"document_disposed_preventable",action:this.X},{from:"document_active",K:"document_disposed",action:this.l},{from:"document_disposed_preventable",K:"document_disposed",action:this.l},{from:"document_disposed_preventable",K:"flush_logs",action:this.m},{from:"document_disposed_preventable",K:"document_active",action:this.i},{from:"document_disposed",K:"flush_logs",
action:this.m},{from:"document_disposed",K:"document_active",action:this.i},{from:"document_disposed",K:"document_disposed",action:function(){}},
{from:"flush_logs",K:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
v(Ky,Dy);Ky.prototype.X=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ky.prototype.l=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ky.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
Ky.prototype.i=function(){this.h=new Map};function Ly(a){Dy.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",K:"document_visible",action:this.i},{from:"document_visibility_unknown",K:"document_hidden",action:this.h},{from:"document_visibility_unknown",K:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",K:"document_backgrounded",action:this.l},{from:"document_visible",K:"document_hidden",action:this.h},{from:"document_visible",K:"document_foregrounded",
action:this.m},{from:"document_visible",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_visible",action:this.i},{from:"document_foregrounded",K:"document_hidden",action:this.h},{from:"document_foregrounded",K:"document_foregrounded",action:this.m},{from:"document_hidden",K:"document_visible",action:this.i},{from:"document_hidden",K:"document_backgrounded",action:this.l},{from:"document_hidden",K:"document_hidden",action:this.h},{from:"document_backgrounded",K:"document_hidden",
action:this.h},{from:"document_backgrounded",K:"document_backgrounded",action:this.l},{from:"document_backgrounded",K:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
v(Ly,Dy);Ly.prototype.i=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ly.prototype.h=function(a,b){a(null==b?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ly.prototype.l=function(a,b){a(null==b?void 0:b.event)};
Ly.prototype.m=function(a,b){a(null==b?void 0:b.event)};function My(){this.j=new Ky;this.l=new Ly}
My.prototype.install=function(){var a=Ka.apply(0,arguments),b=this;a.forEach(function(c){b.j.install(c)});
a.forEach(function(c){b.l.install(c)})};function Ny(){My.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));a={};this.install((a.flush_logs={callback:this.i},a))}
v(Ny,My);Ny.prototype.i=function(){if(R("web_fp_via_jspb")){var a=new Nl,b=Su();b&&G(a,1,b);b=new om;ie(b,Nl,380,pm,a);ku(b);R("web_fp_via_jspb_and_json")&&Bo("finalPayload",{csn:Su()})}else Bo("finalPayload",{csn:Su()})};
Ny.prototype.h=function(){Cu(Du)};function Oy(){}
function Py(){var a=A("ytglobal.storage_");a||(a=new Oy,z("ytglobal.storage_",a));return a}
Oy.prototype.estimate=function(){var a,b,c;return x(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(Qy()):d.return()})};
function Qy(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
z("ytglobal.storageClass_",Oy);function zo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=cn("ytidb_transaction_ended_event_rate_limit_session",.2)}
zo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Ry(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=cn("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Ry(a,b){Py().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Sy(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Sy(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Sy(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Ty(a,b,c){K.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.l=b||null;this.targetOrigin="*";this.m=c;this.sessionId=null;this.i="widget";this.R=!!a;this.L=function(e){a:if(!("*"!=d.m&&e.origin!=d.m||d.l&&e.source!=d.l||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.R&&(d.sessionId&&d.sessionId!=f.id||d.i&&d.i!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.m=d.targetOrigin=e.origin);d.l=e.source;d.sessionId=f.id;d.j&&(d.j(),d.j=null);break;case "command":d.s&&(!d.A||0<=fb(d.A,f.func))&&d.s(f.func,f.args,e.origin)}}};
this.A=this.j=this.s=null;window.addEventListener("message",this.L)}
v(Ty,K);Ty.prototype.sendMessage=function(a,b){if(b=b||this.l){this.sessionId&&(a.id=this.sessionId);this.i&&(a.channel=this.i);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){Pm(d)}}};
Ty.prototype.M=function(){window.removeEventListener("message",this.L);K.prototype.M.call(this)};function Uy(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Ty(!!P("WIDGET_ID_ENFORCE")),b=this.Oe.bind(this);a.s=b;a.A=null;this.h.i="widget";if(a=P("WIDGET_ID"))this.h.sessionId=a}
l=Uy.prototype;l.Oe=function(a,b,c){"addEventListener"===a&&b?this.Gc(b[0],c):this.Xc(a,b,c)};
l.Xc=function(){};
l.zc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
l.Gc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.zc(a,b)),this.j[a]=!0)};
l.addEventListener=function(){};
l.re=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Cc());this.sendMessage("onReady");gb(this.i,this.Kd,this);this.i=[]};
l.Cc=function(){return null};
function Vy(a,b){a.sendMessage("infoDelivery",b)}
l.Kd=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
l.sendMessage=function(a,b){this.Kd({event:a,info:void 0===b?null:b})};
l.dispose=function(){this.h=null};var Wy={},Xy=(Wy["api.invalidparam"]=2,Wy.auth=150,Wy["drm.auth"]=150,Wy["heartbeat.net"]=150,Wy["heartbeat.servererror"]=150,Wy["heartbeat.stop"]=150,Wy["html5.unsupportedads"]=5,Wy["fmt.noneavailable"]=5,Wy["fmt.decode"]=5,Wy["fmt.unplayable"]=5,Wy["html5.missingapi"]=5,Wy["html5.unsupportedlive"]=5,Wy["drm.unavailable"]=5,Wy["mrm.blocked"]=151,Wy);var Yy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Zy(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function $y(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=r(Yy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function az(a,b,c,d){if(Ra(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function bz(a){Uy.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.af.bind(this));this.addEventListener("onVolumeChange",this.bf.bind(this));this.addEventListener("onApiChange",this.Ve.bind(this));this.addEventListener("onPlaybackQualityChange",this.Xe.bind(this));this.addEventListener("onPlaybackRateChange",this.Ye.bind(this));this.addEventListener("onStateChange",this.Ze.bind(this));this.addEventListener("onWebglSettingsChanged",
this.cf.bind(this))}
v(bz,Uy);l=bz.prototype;
l.Xc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Zy(a)){var d=b;if(Ra(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=$y(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=$y(e);break;case "loadPlaylist":case "cuePlaylist":e=az(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Zy(a)&&Vy(this,this.Cc())}};
l.Gc=function(a,b){("onReady"===a||"onError"===a&&this.l)&&this.api.logApiCall(a+" invocation",b);this.api.logApiCall(a+" registration",b);Uy.prototype.Gc.call(this,a,b)};
l.zc=function(a,b){var c=this,d=Uy.prototype.zc.call(this,a,b);return function(e){c.api.logApiCall(a+" invocation",b);d(e)}};
l.onReady=function(){var a=this.re.bind(this);this.h.j=a;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var b=void 0===b?5:b;this.sendMessage("onError",(a?Xy[a]||b:b).toString())}};
l.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
l.Cc=function(){if(!this.api)return null;var a=this.api.getApiInterface();lb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
l.Ze=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Vy(this,a)};
l.Xe=function(a){Vy(this,{playbackQuality:a})};
l.Ye=function(a){Vy(this,{playbackRate:a})};
l.Ve=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],m=this.api.getOption(e,k);b[e][k]=m}}this.sendMessage("apiInfoDelivery",b)};
l.bf=function(){Vy(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
l.af=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Vy(this,a)};
l.cf=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Vy(this,a)};
l.dispose=function(){Uy.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function cz(a){K.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.Gd,this)}
v(cz,K);l=cz.prototype;l.start=function(){this.started||this.h()||(this.started=!0,this.connection.nb("RECEIVING"))};
l.nb=function(a,b){this.started&&!this.h()&&this.connection.nb(a,b)};
l.Gd=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=dz(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=ez(a,c))&&this.nb(a,c))}}};
l.addListener=function(a){if(!(a in this.i)){var b=this.We.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
l.We=function(a,b){this.started&&!this.h()&&this.connection.nb(a,this.Bc(a,b))};
l.Bc=function(a,b){if(null!=b)return{value:b}};
l.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
l.M=function(){var a=this.connection;a.h()||Xi(a.i,"command",this.Gd,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);K.prototype.M.call(this)};function fz(a,b){cz.call(this,b);this.api=a;this.start()}
v(fz,cz);fz.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
fz.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function dz(a,b){switch(a){case "loadVideoById":return a=$y(b),[a];case "cueVideoById":return a=$y(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=az(b),[a];case "cuePlaylist":return a=az(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function ez(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
fz.prototype.Bc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return cz.prototype.Bc.call(this,a,b)};
fz.prototype.M=function(){cz.prototype.M.call(this);delete this.api};function gz(a){a=void 0===a?!1:a;K.call(this);this.i=new Wi(a);Ie(this,this.i)}
$a(gz,K);gz.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
gz.prototype.m=function(a,b){this.h()||this.i.fb.apply(this.i,arguments)};function hz(a,b,c){gz.call(this);this.l=a;this.j=b;this.id=c}
v(hz,gz);hz.prototype.nb=function(a,b){this.h()||this.l.nb(this.j,this.id,a,b)};
hz.prototype.M=function(){this.j=this.l=null;gz.prototype.M.call(this)};function iz(a,b,c){K.call(this);this.i=a;this.origin=c;this.j=Os(window,"message",this.l.bind(this));this.connection=new hz(this,a,b);Ie(this,this.connection)}
v(iz,K);iz.prototype.nb=function(a,b,c,d){this.h()||a!==this.i||(a={id:b,command:c},d&&(a.data=d),this.i.postMessage(JSON.stringify(a),this.origin))};
iz.prototype.l=function(a){if(!this.h()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.h()||c.m("command",b.command,b.data,a.origin)}}}};
iz.prototype.M=function(){Ps(this.j);this.i=null;K.prototype.M.call(this)};function jz(){this.state=1;this.h=null}
l=jz.prototype;
l.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){d=a.interpreterSafeScript;Db("From proto message. b/166824318");d=d.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var f=Ab();d=f?f.createScript(d):d;d=new Fb(d,Eb)}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=a.interpreterSafeUrl,Db("From proto message. b/166824318"),e=Jb(e.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||"").toString());kz(this,d,e,
a.program,b,c)}else yu(Error("Cannot initialize botguard without program"))};
function kz(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,ky(c,function(){window[g]?lz(a,d,g,e):(a.state=3,py(c),yu(new S("Unable to load Botguard","from "+c)))},f)):b?(f=Bf("SCRIPT"),b instanceof Fb?(b instanceof Fb&&b.constructor===Fb?b=b.j:(Pa(b),b="type_error:SafeScript"),f.textContent=b,fi(f)):f.textContent=b,f.nonce=tc(),document.head.appendChild(f),document.head.removeChild(f),window[g]?lz(a,d,g,e):(a.state=4,yu(new S("Unable to load Botguard from JS")))):yu(new S("Unable to load VM; no url or JS provided"))}
function lz(a,b,c,d){a.state=5;try{var e=new Xh({program:b,we:c,Pe:R("att_web_record_metrics")});e.ef.then(function(){a.state=6;d&&d(b)});
a.Sc(e)}catch(f){a.state=7,f instanceof Error&&yu(f)}}
l.invoke=function(a){a=void 0===a?{}:a;return this.Vc()?this.Td({kd:a}):null};
l.dispose=function(){this.Yc()};
l.Yc=function(){this.Sc(null);this.state=8};
l.Vc=function(){return!!this.h};
l.Td=function(a){return this.h.Nd(a)};
l.Sc=function(a){Ge(this.h);this.h=a};function mz(){var a=A("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function nz(){jz.apply(this,arguments)}
v(nz,jz);nz.prototype.Yc=function(){this.state=8};
nz.prototype.Sc=function(a){var b;null==(b=mz())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Nd.bind(a)},z("yt.abuse.playerAttLoader",b),z("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(z("yt.abuse.playerAttLoader",null),z("yt.abuse.playerAttLoaderRun",null))};
nz.prototype.Vc=function(){return!!mz()};
nz.prototype.Td=function(a){return mz().bgvmc(a)};var oz=new nz;function pz(){return oz.Vc()}
function qz(a){a=void 0===a?{}:a;return oz.invoke(a)}
;function rz(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ub(b);this.assets=a.assets||{};this.attrs=a.attrs||ub(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
rz.prototype.clone=function(){var a=new rz,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Pa(c)?a[b]=ub(c):a[b]=c}return a};var sz=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function tz(a){a=a||"";if(window.spf){var b=a.match(sz);spf.style.load(a,b?b[1]:"",void 0)}else uz(a)}
function uz(a){var b=vz(a),c=document.getElementById(b),d=c&&gy(c,"loaded");d||c&&!d||(c=wz(a,b,function(){gy(c,"loaded")||(ey(c),ct(b),jn(Ya(dt,b),0))}))}
function wz(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ck(a);rc(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function vz(a){var b=Bf("A");qc(b,new Mb(a,Nb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+vc(a)}
;function xz(){K.call(this);this.i=[]}
v(xz,K);xz.prototype.M=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.callback,void 0)}K.prototype.M.call(this)};function yz(){xz.apply(this,arguments)}
v(yz,xz);function zz(a,b,c,d,e){K.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.Yb=e;this.Ba=!1;this.api={};this.oa=this.s=null;this.V=new Wi;this.i={};this.aa=this.qa=this.elementId=this.gb=this.config=null;this.Z=!1;this.l=this.L=null;this.Qa={};this.Zb=["onReady"];this.lastError=null;this.Hb=NaN;this.R={};this.ac=new yz(this);this.ia=0;this.j=this.m=a;Ie(this,this.V);Az(this);Bz(this);Ie(this,this.ac);c?this.ia=jn(function(){f.loadNewVideoConfig(c)},0):d&&(Cz(this),Dz(this))}
v(zz,K);l=zz.prototype;l.getId=function(){return this.A};
l.loadNewVideoConfig=function(a){if(!this.h()){this.ia&&(window.clearTimeout(this.ia),this.ia=0);var b=a||{};b instanceof rz||(b=new rz(b));this.config=b;this.setConfig(a);Dz(this);this.isReady()&&Ez(this)}};
function Cz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.j)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
l.setConfig=function(a){this.gb=a;this.config=Fz(a);Cz(this);if(!this.qa){var b;this.qa=Gz(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.j&&(this.j.style.width=qi(Number(b)||b)),(a=a.height)&&this.j&&(this.j.style.height=qi(Number(a)||a))};
function Ez(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Hz(a){var b=!0,c=Iz(a);c&&a.config&&(a=Jz(a),b=gy(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function Dz(a){if(!a.h()&&!a.Z){var b=Hz(a);if(b&&"html5"===(Iz(a)?"html5":null))a.aa="html5",a.isReady()||Kz(a);else if(Lz(a),a.aa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),Kz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.L=function(){c=!0;var d=Mz(a,"player_bootstrap_method")?A("yt.player.Application.createAlternate")||A("yt.player.Application.create"):A("yt.player.Application.create");var e=a.config?Fz(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig,a.Yb);Kz(a)};
a.Z=!0;b?a.L():(ky(Jz(a),a.L),(b=Nz(a))&&tz(b),Oz(a)&&!c&&z("yt.player.Application.create",null))}}}
function Iz(a){var b=Af(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function Kz(a){if(!a.h()){var b=Iz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Z=!1;if(!Mz(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}Pz(a)}else a.Hb=jn(function(){Kz(a)},50)}}
function Pz(a){Az(a);a.Ba=!0;var b=Iz(a);if(b){a.s=Qz(a,b,"addEventListener");a.oa=Qz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Qz(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.s&&a.s(g,a.i[g]);Ez(a);a.qa&&a.qa(a.api);a.V.fb("onReady",a.api)}
function Qz(a,b,c){var d=b[c];return function(){var e=Ka.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,yu(f))}}}
function Az(a){a.Ba=!1;if(a.oa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.oa(b,a.i[b]);for(var c in a.R)a.R.hasOwnProperty(c)&&window.clearTimeout(Number(c));a.R={};a.s=null;a.oa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.gb};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
l.isReady=function(){return this.Ba};
function Bz(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){ct("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){ct("WATCH_LATER_VIDEO_REMOVED",b)})}
l.addEventListener=function(a,b){var c=this,d=Gz(this,b);d&&(0<=fb(this.Zb,a)||this.i[a]||(b=Rz(this,a),this.s&&this.s(a,b)),this.V.subscribe(a,d),"onReady"===a&&this.isReady()&&jn(function(){d(c.api)},0))};
l.removeEventListener=function(a,b){this.h()||(b=Gz(this,b))&&Xi(this.V,a,b)};
function Gz(a,b){var c=b;if("string"===typeof b){if(a.Qa[b])return a.Qa[b];c=function(){var d=Ka.apply(0,arguments),e=A(b);if(e)try{e.apply(y,d)}catch(f){xu(f)}};
a.Qa[b]=c}return c?c:null}
function Rz(a,b){var c="ytPlayer"+b+a.A;a.i[b]=c;y[c]=function(d){var e=jn(function(){if(!a.h()){try{a.V.fb(b,null!=d?d:void 0)}catch(h){yu(new S("PlayerProxy error when creating global callback",{error:h,event:b,playerId:a.A,data:d}))}var f=a.R,g=String(e);g in f&&delete f[g]}},0);
rb(a.R,String(e))};
return c}
l.getPlayerType=function(){return this.aa||(Iz(this)?"html5":null)};
l.getLastError=function(){return this.lastError};
function Lz(a){a.cancel();Az(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=Iz(a);b&&(Hz(a)||!Oz(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
l.cancel=function(){this.L&&qy(Jz(this),this.L);window.clearTimeout(this.Hb);this.Z=!1};
l.M=function(){Lz(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){xu(b)}this.Qa=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.gb=this.config=this.api=null;delete this.m;delete this.j;K.prototype.M.call(this)};
function Oz(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function Jz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Nz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Mz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return"true"===Sm(c||"","&")[b]}
function Fz(a){for(var b={},c=r(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?ub(e):e}return b}
;var Sz={},Tz="player_uid_"+(1E9*Math.random()>>>0);function Uz(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?Af(c):c;var e=Tz+"_"+Sa(c),f=Sz[e];if(f&&d)return Vz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new zz(c,e,a,b,void 0);Sz[e]=f;ct("player-added",f.api);Je(f,function(){delete Sz[f.getId()]});
return f.api}
function Vz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Wz=null,Xz=null,Yz=null;function Zz(){$z()}
function aA(){$z()}
function $z(){var a=Wz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function bA(){Wz&&Wz.sendAbandonmentPing&&Wz.sendAbandonmentPing();P("PL_ATT")&&oz.dispose();for(var a=zi,b=0,c=ry.length;b<c;b++)a.Da(ry[b]);ry.length=0;py("//static.doubleclick.net/instream/ad_status.js");sy=!1;Jm("DCLKSTAT",0);He(Yz,Xz);Wz&&(Wz.removeEventListener("onVideoDataChange",Zz),Wz.destroy())}
;function cA(a,b,c){a="ST-"+vc(a).toString(36);b=b?Ec(b):"";c=c||5;hv()&&Sn(a,b,c)}
;function dA(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=zc(window.location.href);g&&f.push(g);g=zc(d);if(0<=fb(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),qc(f,d),d=f.href),d&&(d=Ac(d),f=d.indexOf("#"),d=0>f?d:d.slice(0,f)))if(e&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Su()},b)),h){var h=parseInt(h,10);isFinite(h)&&0<h&&
cA(d,b,h)}else cA(d,b)}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var k=void 0===k?{}:k;var m=void 0===m?"":m;var n=void 0===n?window:n;c=n.location;a=Gc(a,k)+m;var q=void 0===q?ji:q;a:{q=void 0===q?ji:q;for(k=0;k<q.length;++k)if(m=q[k],m instanceof hi&&m.De(a)){q=new Mb(a,Nb);break a}q=void 0}q=q||Tb;if(q instanceof Mb)var u=Ob(q);else{b:if($h){try{u=new URL(q)}catch(t){u="https:";break b}u=u.protocol}else c:{u=document.createElement("a");try{u.href=q}catch(t){u=void 0;break c}u=
u.protocol;u=":"===u||""===u?"https:":u}u="javascript:"!==u?q:void 0}void 0!==u&&(c.href=u)}return!0}
;z("yt.setConfig",Jm);z("yt.config.set",Jm);z("yt.setMsg",Yu);z("yt.msgs.set",Yu);z("yt.logging.errors.log",xu);
z("writeEmbed",function(){var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}rv(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);Rw("embed",["ol"]);c=P("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=Xm(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;R("embeds_web_enable_watch_on_autoplay")&&(null==(e=a.args)?0:e.autoplay)&&Rw("watch",["pbs","pbu","pbp"]);Wz=Uz(a,c);Wz.addEventListener("onVideoDataChange",Zz);Wz.addEventListener("onReady",aA);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Yz=new bz(Wz):P("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Xz=new iz(window.parent,a,b),Yz=new fz(Wz,Xz.connection));ty();R("ytidb_create_logger_embed_killswitch")||
yo();a={};Ny.h||(Ny.h=new Ny);Ny.h.install((a.flush_logs={callback:function(){Nt()}},a));
Es();R("ytidb_clear_embedded_player")&&zi.fa(function(){var f,g;if(!vx){var h=nt(),k={Pc:ux,Rd:tx};h.h.set(k.Pc,k);k={jd:{feedbackEndpoint:Dv(ox),modifyChannelNotificationPreferenceEndpoint:Dv(px),playlistEditEndpoint:Dv(qx),subscribeEndpoint:Dv(mx),unsubscribeEndpoint:Dv(nx),webPlayerShareEntityServiceEndpoint:Dv(rx)}};var m=Bv(),n={};m&&(n.client_location=m);void 0===f&&(f=Nn());void 0===g&&(g=h.resolve(ux));$w(k,g,f,n);f={Pc:fx,Sd:Zw.h};h.h.set(f.Pc,f);vx=h.resolve(fx)}dy()})});
var eA=Nm(function(){Vw();sv();R("embeds_web_enable_ve_logging_unification")||Lx()}),fA=Nm(function(a){a.persisted||(Vw(),sv())}),gA=Nm(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?bA():a.persisted||bA()}),hA=Nm(bA);
window.addEventListener?(window.addEventListener("load",eA),window.addEventListener("pageshow",fA),window.addEventListener("pagehide",gA)):window.attachEvent&&(window.attachEvent("onload",eA),window.attachEvent("onunload",hA));z("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||pz);z("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||qz);z("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||uy);
z("yt.player.exports.navigate",A("yt.player.exports.navigate")||dA);z("yt.util.activity.init",A("yt.util.activity.init")||Ss);z("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||Vs);z("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||Ts);}).call(this);
