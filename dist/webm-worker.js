var n,t,r=(n="undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("webm-worker.js",document.baseURI).href,function(t){t=void 0!==(t=t||{})?t:{};var r,e,i,o,a,u={};for(r in t)t.hasOwnProperty(r)&&(u[r]=t[r]);e="object"==typeof window,i="function"==typeof importScripts,o="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node&&!e&&!i,a=!e&&!o&&!i;var s,c,l,f,p="";o?(p=__dirname+"/",s=function(n,t){var r;return l||(l=require("fs")),f||(f=require("path")),n=f.normalize(n),r=l.readFileSync(n),t?r:r.toString()},c=function(n){var t=s(n,!0);return t.buffer||(t=new Uint8Array(t)),C(t.buffer),t},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(n){if(!(n instanceof wt))throw n}),process.on("unhandledRejection",V),t.inspect=function(){return"[Emscripten Module object]"}):a?("undefined"!=typeof read&&(s=function(n){return read(n)}),c=function(n){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):(C("object"==typeof(t=read(n,"binary"))),t)},"undefined"!=typeof scriptArgs&&scriptArgs,"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(e||i)&&(i?p=self.location.href:document.currentScript&&(p=document.currentScript.src),n&&(p=n),p=0!==p.indexOf("blob:")?p.substr(0,p.lastIndexOf("/")+1):"",s=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},i&&(c=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}));var d=t.print||console.log.bind(console),y=t.printErr||console.warn.bind(console);for(r in u)u.hasOwnProperty(r)&&(t[r]=u[r]);u=null;var h,m,v={"f64-rem":function(n,t){return n%t},debugger:function(){}},g=(new Array(0),0);t.wasmBinary&&(h=t.wasmBinary),"object"!=typeof WebAssembly&&y("no native wasm support detected");var w=new WebAssembly.Table({initial:686,maximum:686,element:"anyfunc"}),b=!1;function C(n,t){n||V("Assertion failed: "+t)}var T,$,P,_,A,E,F,S,j,k="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function W(n,t,r){for(var e=t+r,i=t;n[i]&&!(i>=e);)++i;if(i-t>16&&n.subarray&&k)return k.decode(n.subarray(t,i));for(var o="";t<i;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var s=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&n[t++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function O(n,t){return n?W(P,n,t):""}function R(n,t){return n%t>0&&(n+=t-n%t),n}function I(n){T=n,t.HEAP8=$=new Int8Array(n),t.HEAP16=_=new Int16Array(n),t.HEAP32=E=new Int32Array(n),t.HEAPU8=P=new Uint8Array(n),t.HEAPU16=A=new Uint16Array(n),t.HEAPU32=F=new Uint32Array(n),t.HEAPF32=S=new Float32Array(n),t.HEAPF64=j=new Float64Array(n)}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var D=t.TOTAL_MEMORY||16777216;function U(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var e=r.func;"number"==typeof e?void 0===r.arg?t.dynCall_v(e):t.dynCall_vi(e,r.arg):e(void 0===r.arg?null:r.arg)}else r()}}(m=t.wasmMemory?t.wasmMemory:new WebAssembly.Memory({initial:D/65536}))&&(T=m.buffer),D=T.byteLength,I(T),E[21772]=5330176;var x=[],N=[],M=[],L=[],B=0,z=null;function V(n){throw t.onAbort&&t.onAbort(n),d(n+=""),y(n),b=!0,"abort("+n+"). Build with -s ASSERTIONS=1 for more info."}function H(n){return String.prototype.startsWith?n.startsWith("data:application/octet-stream;base64,"):0===n.indexOf("data:application/octet-stream;base64,")}t.preloadedImages={},t.preloadedAudios={};var q,G="webm-wasm.wasm";function Z(){try{if(h)return new Uint8Array(h);if(c)return c(G);throw"both async and sync fetching of the wasm failed"}catch(n){V(n)}}H(G)||(q=G,G=t.locateFile?t.locateFile(q,p):p+q),t.asm=function(){var n={env:Jn,wasi_unstable:Jn,global:{NaN:NaN,Infinity:Infinity},"global.Math":Math,asm2wasm:v};function r(n,r){t.asm=n.exports,function(n){if(B--,t.monitorRunDependencies&&t.monitorRunDependencies(B),0==B&&z){var r=z;z=null,r()}}()}function o(n){r(n.instance)}function a(t){return(h||!e&&!i||"function"!=typeof fetch?new Promise(function(n,t){n(Z())}):fetch(G,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+G+"'";return n.arrayBuffer()}).catch(function(){return Z()})).then(function(t){return WebAssembly.instantiate(t,n)}).then(t,function(n){y("failed to asynchronously prepare wasm: "+n),V(n)})}if(B++,t.monitorRunDependencies&&t.monitorRunDependencies(B),t.instantiateWasm)try{return t.instantiateWasm(n,r)}catch(n){return y("Module.instantiateWasm callback failed with error: "+n),!1}return function(){if(h||"function"!=typeof WebAssembly.instantiateStreaming||H(G)||"function"!=typeof fetch)return a(o);fetch(G,{credentials:"same-origin"}).then(function(t){return WebAssembly.instantiateStreaming(t,n).then(o,function(n){y("wasm streaming compile failed: "+n),y("falling back to ArrayBuffer instantiation"),a(o)})})}(),{}},N.push({func:function(){ot()}});var X={buffers:[null,[],[]],printChar:function(n,t){var r=X.buffers[n];0===t||10===t?((1===n?d:y)(W(r,0)),r.length=0):r.push(t)},varargs:0,get:function(n){return X.varargs+=4,E[X.varargs-4>>2]},getStr:function(){return O(X.get())},get64:function(){var n=X.get();return X.get(),n},getZero:function(){X.get()}};function Y(n){try{return 0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||V(n),n.errno}}function J(n,t,r,e){try{var i=X.getStreamFromFD(n),o=X.doReadv(i,t,r);return E[e>>2]=o,0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||V(n),n.errno}}function K(n,t,r,e,i){try{return 0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||V(n),n.errno}}function Q(n,t,r,e){try{for(var i=0,o=0;o<r;o++){for(var a=E[t+8*o>>2],u=E[t+(8*o+4)>>2],s=0;s<u;s++)X.printChar(n,P[a+s]);i+=u}return E[e>>2]=i,0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||V(n),n.errno}}function nn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}var tn=void 0;function rn(n){for(var t="",r=n;P[r];)t+=tn[P[r++]];return t}var en={},on={},an={};function un(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=48&&t<=57?"_"+n:n}function sn(n,t){return n=un(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)}function cn(n,t){var r=sn(t,function(n){this.name=t,this.message=n;var r=new Error(n).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))});return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var ln=void 0;function fn(n){throw new ln(n)}var pn=void 0;function dn(n){throw new pn(n)}function yn(n,t,r){function e(t){var e=r(t);e.length!==n.length&&dn("Mismatched type converter count");for(var i=0;i<n.length;++i)hn(n[i],e[i])}n.forEach(function(n){an[n]=t});var i=new Array(t.length),o=[],a=0;t.forEach(function(n,t){on.hasOwnProperty(n)?i[t]=on[n]:(o.push(n),en.hasOwnProperty(n)||(en[n]=[]),en[n].push(function(){i[t]=on[n],++a===o.length&&e(i)}))}),0===o.length&&e(i)}function hn(n,t,r){if(r=r||{},!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||fn('type "'+e+'" must have a positive integer typeid pointer'),on.hasOwnProperty(n)){if(r.ignoreDuplicateRegistrations)return;fn("Cannot register type '"+e+"' twice")}if(on[n]=t,delete an[n],en.hasOwnProperty(n)){var i=en[n];delete en[n],i.forEach(function(n){n()})}}function mn(n){fn(n.$$.ptrType.registeredClass.name+" instance already deleted")}var vn=!1;function gn(n){}function wn(n){n.count.value-=1,0===n.count.value&&function(n){n.smartPtr?n.smartPtrType.rawDestructor(n.smartPtr):n.ptrType.registeredClass.rawDestructor(n.ptr)}(n)}function bn(n){return"undefined"==typeof FinalizationGroup?(bn=function(n){return n},n):(vn=new FinalizationGroup(function(n){for(var t=n.next();!t.done;t=n.next()){var r=t.value;r.ptr?wn(r):console.warn("object already deleted: "+r.ptr)}}),gn=function(n){vn.unregister(n.$$)},(bn=function(n){return vn.register(n,n.$$,n.$$),n})(n))}var Cn=void 0,Tn=[];function $n(){for(;Tn.length;){var n=Tn.pop();n.$$.deleteScheduled=!1,n.delete()}}function Pn(){}var _n={};function An(n,t,r){if(void 0===n[t].overloadTable){var e=n[t];n[t]=function(){return n[t].overloadTable.hasOwnProperty(arguments.length)||fn("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].overloadTable+")!"),n[t].overloadTable[arguments.length].apply(this,arguments)},n[t].overloadTable=[],n[t].overloadTable[e.argCount]=e}}function En(n,t,r,e,i,o,a,u){this.name=n,this.constructor=t,this.instancePrototype=r,this.rawDestructor=e,this.baseClass=i,this.getActualType=o,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Fn(n,t,r){for(;t!==r;)t.upcast||fn("Expected null or instance of "+r.name+", got an instance of "+t.name),n=t.upcast(n),t=t.baseClass;return n}function Sn(n,t){return null===t?(this.isReference&&fn("null is not a valid "+this.name),0):(t.$$||fn('Cannot pass "'+qn(t)+'" as a '+this.name),t.$$.ptr||fn("Cannot pass deleted object as a pointer of type "+this.name),Fn(t.$$.ptr,t.$$.ptrType.registeredClass,this.registeredClass))}function jn(n,t){var r;if(null===t)return this.isReference&&fn("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==n&&n.push(this.rawDestructor,r),r):0;if(t.$$||fn('Cannot pass "'+qn(t)+'" as a '+this.name),t.$$.ptr||fn("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&t.$$.ptrType.isConst&&fn("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name),r=Fn(t.$$.ptr,t.$$.ptrType.registeredClass,this.registeredClass),this.isSmartPointer)switch(void 0===t.$$.smartPtr&&fn("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?r=t.$$.smartPtr:fn("Cannot convert argument of type "+(t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)r=t.$$.smartPtr;else{var e=t.clone();r=this.rawShare(r,Hn(function(){e.delete()})),null!==n&&n.push(this.rawDestructor,r)}break;default:fn("Unsupporting sharing policy")}return r}function kn(n,t){return null===t?(this.isReference&&fn("null is not a valid "+this.name),0):(t.$$||fn('Cannot pass "'+qn(t)+'" as a '+this.name),t.$$.ptr||fn("Cannot pass deleted object as a pointer of type "+this.name),t.$$.ptrType.isConst&&fn("Cannot convert argument of type "+t.$$.ptrType.name+" to parameter type "+this.name),Fn(t.$$.ptr,t.$$.ptrType.registeredClass,this.registeredClass))}function Wn(n){return this.fromWireType(F[n>>2])}var On={};function Rn(n,t){return t.ptrType&&t.ptr||dn("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!=!!t.smartPtr&&dn("Both smartPtrType and smartPtr must be specified"),t.count={value:1},bn(Object.create(n,{$$:{value:t}}))}function In(n,t,r,e,i,o,a,u,s,c,l){this.name=n,this.registeredClass=t,this.isReference=r,this.isConst=e,this.isSmartPointer=i,this.pointeeType=o,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=l,i||void 0!==t.baseClass?this.toWireType=jn:e?(this.toWireType=Sn,this.destructorFunction=null):(this.toWireType=kn,this.destructorFunction=null)}function Dn(n,r){var e;if(n=rn(n),void 0!==t["FUNCTION_TABLE_"+n])e=t["FUNCTION_TABLE_"+n][r];else if("undefined"!=typeof FUNCTION_TABLE)e=FUNCTION_TABLE[r];else{var i=t["dynCall_"+n];void 0===i&&void 0===(i=t["dynCall_"+n.replace(/f/g,"d")])&&fn("No dynCall invoker for signature: "+n),e=function(t){for(var e=[],i=1;i<n.length;++i)e.push("a"+i);var o="return function dynCall_"+n+"_"+r+"("+e.join(", ")+") {\n";return o+="    return dynCall(rawFunction"+(e.length?", ":"")+e.join(", ")+");\n",o+="};\n",new Function("dynCall","rawFunction",o)(t,r)}(i)}return"function"!=typeof e&&fn("unknown function pointer with signature "+n+": "+r),e}var Un=void 0;function xn(n){var t=tt(n),r=rn(t);return rt(t),r}function Nn(n,t){var r=[],e={};throw t.forEach(function n(t){e[t]||on[t]||(an[t]?an[t].forEach(n):(r.push(t),e[t]=!0))}),new Un(n+": "+r.map(xn).join([", "]))}function Mn(n,t){for(var r=[],e=0;e<n;e++)r.push(E[(t>>2)+e]);return r}function Ln(n){for(;n.length;){var t=n.pop();n.pop()(t)}}var Bn=[],zn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function Vn(n){n>4&&0==--zn[n].refcount&&(zn[n]=void 0,Bn.push(n))}function Hn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=Bn.length?Bn.pop():zn.length;return zn[t]={refcount:1,value:n},t}}function qn(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}function Gn(n,t){switch(t){case 2:return function(n){return this.fromWireType(S[n>>2])};case 3:return function(n){return this.fromWireType(j[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Zn(n,t,r){switch(t){case 0:return r?function(n){return $[n]}:function(n){return P[n]};case 1:return r?function(n){return _[n>>1]}:function(n){return A[n>>1]};case 2:return r?function(n){return E[n>>2]}:function(n){return F[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function Xn(n,t){var r=on[n];return void 0===r&&fn(t+" has unknown type "+xn(n)),r}function Yn(){return $.length}(function(){for(var n=new Array(256),t=0;t<256;++t)n[t]=String.fromCharCode(t);tn=n})(),ln=t.BindingError=cn(Error,"BindingError"),pn=t.InternalError=cn(Error,"InternalError"),Pn.prototype.isAliasOf=function(n){if(!(this instanceof Pn))return!1;if(!(n instanceof Pn))return!1;for(var t=this.$$.ptrType.registeredClass,r=this.$$.ptr,e=n.$$.ptrType.registeredClass,i=n.$$.ptr;t.baseClass;)r=t.upcast(r),t=t.baseClass;for(;e.baseClass;)i=e.upcast(i),e=e.baseClass;return t===e&&r===i},Pn.prototype.clone=function(){if(this.$$.ptr||mn(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var n,t=bn(Object.create(Object.getPrototypeOf(this),{$$:{value:(n=this.$$,{count:n.count,deleteScheduled:n.deleteScheduled,preservePointerOnDelete:n.preservePointerOnDelete,ptr:n.ptr,ptrType:n.ptrType,smartPtr:n.smartPtr,smartPtrType:n.smartPtrType})}}));return t.$$.count.value+=1,t.$$.deleteScheduled=!1,t},Pn.prototype.delete=function(){this.$$.ptr||mn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&fn("Object already scheduled for deletion"),gn(this),wn(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},Pn.prototype.isDeleted=function(){return!this.$$.ptr},Pn.prototype.deleteLater=function(){return this.$$.ptr||mn(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&fn("Object already scheduled for deletion"),Tn.push(this),1===Tn.length&&Cn&&Cn($n),this.$$.deleteScheduled=!0,this},In.prototype.getPointee=function(n){return this.rawGetPointee&&(n=this.rawGetPointee(n)),n},In.prototype.destructor=function(n){this.rawDestructor&&this.rawDestructor(n)},In.prototype.argPackAdvance=8,In.prototype.readValueFromPointer=Wn,In.prototype.deleteObject=function(n){null!==n&&n.delete()},In.prototype.fromWireType=function(n){var t=this.getPointee(n);if(!t)return this.destructor(n),null;var r=function(n,t){return t=function(n,t){for(void 0===t&&fn("ptr should not be undefined");n.baseClass;)t=n.upcast(t),n=n.baseClass;return t}(n,t),On[t]}(this.registeredClass,t);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=t,r.$$.smartPtr=n,r.clone();var e=r.clone();return this.destructor(n),e}function i(){return Rn(this.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:n}:{ptrType:this,ptr:n})}var o,a=this.registeredClass.getActualType(t),u=_n[a];if(!u)return i.call(this);var s=function n(t,r,e){if(r===e)return t;if(void 0===e.baseClass)return null;var i=n(t,r,e.baseClass);return null===i?null:e.downcast(i)}(t,this.registeredClass,(o=this.isConst?u.constPointerType:u.pointerType).registeredClass);return null===s?i.call(this):Rn(o.registeredClass.instancePrototype,this.isSmartPointer?{ptrType:o,ptr:s,smartPtrType:this,smartPtr:n}:{ptrType:o,ptr:s})},t.getInheritedInstanceCount=function(){return Object.keys(On).length},t.getLiveInheritedInstances=function(){var n=[];for(var t in On)On.hasOwnProperty(t)&&n.push(On[t]);return n},t.flushPendingDeletes=$n,t.setDelayFunction=function(n){Cn=n,Tn.length&&Cn&&Cn($n)},Un=t.UnboundTypeError=cn(Error,"UnboundTypeError"),t.count_emval_handles=function(){for(var n=0,t=5;t<zn.length;++t)void 0!==zn[t]&&++n;return n},t.get_first_emval=function(){for(var n=5;n<zn.length;++n)if(void 0!==zn[n])return zn[n];return null};var Jn={w:function(n){return et(n)},v:function(n,t,r){throw"uncaught_exception"in nt?nt.uncaught_exceptions++:nt.uncaught_exceptions=1,n},Z:function(){},s:function(n,t){X.varargs=t;try{return 0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||V(n),-n.errno}},Y:function(n,t){X.varargs=t;try{var r=X.getStr(),e=X.get(),i=X.get();return FS.open(r,e,i).fd}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||V(n),-n.errno}},X:function(n,t){X.varargs=t;try{return 0}catch(n){return"undefined"!=typeof FS&&n instanceof FS.ErrnoError||V(n),-n.errno}},u:function(){},E:function(){return Y.apply(null,arguments)},W:function(){return J.apply(null,arguments)},G:function(){return K.apply(null,arguments)},V:function(){return Q.apply(null,arguments)},U:function(n,t,r,e,i){var o=nn(r);hn(n,{name:t=rn(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===r)e=$;else if(2===r)e=_;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=E}return this.fromWireType(e[n>>o])},destructorFunction:null})},T:function(n,r,e,i,o,a,u,s,c,l,f,p,d){f=rn(f),a=Dn(o,a),s&&(s=Dn(u,s)),l&&(l=Dn(c,l)),d=Dn(p,d);var y=un(f);(function(n,r,e){t.hasOwnProperty(n)?(fn("Cannot register public name '"+n+"' twice"),An(t,n,n),t.hasOwnProperty(void 0)&&fn("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),t[n].overloadTable[void 0]=r):t[n]=r})(y,function(){Nn("Cannot construct "+f+" due to unbound types",[i])}),yn([n,r,e],i?[i]:[],function(r){var e,o;r=r[0],o=i?(e=r.registeredClass).instancePrototype:Pn.prototype;var u=sn(y,function(){if(Object.getPrototypeOf(this)!==c)throw new ln("Use 'new' to construct "+f);if(void 0===p.constructor_body)throw new ln(f+" has no accessible constructor");var n=p.constructor_body[arguments.length];if(void 0===n)throw new ln("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(p.constructor_body).toString()+") parameters instead!");return n.apply(this,arguments)}),c=Object.create(o,{constructor:{value:u}});u.prototype=c;var p=new En(f,u,c,d,e,a,s,l),h=new In(f,p,!0,!1,!1),m=new In(f+"*",p,!1,!1,!1),v=new In(f+" const*",p,!1,!0,!1);return _n[n]={pointerType:m,constPointerType:v},function(n,r,e){t.hasOwnProperty(n)||dn("Replacing nonexistant public symbol"),t[n]=r,t[n].argCount=void 0}(y,u),[h,m,v]})},S:function(n,t,r,e,i,o){var a=Mn(t,r);i=Dn(e,i),yn([],[n],function(n){var r="constructor "+(n=n[0]).name;if(void 0===n.registeredClass.constructor_body&&(n.registeredClass.constructor_body=[]),void 0!==n.registeredClass.constructor_body[t-1])throw new ln("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.registeredClass.constructor_body[t-1]=function(){Nn("Cannot construct "+n.name+" due to unbound types",a)},yn([],a,function(e){return n.registeredClass.constructor_body[t-1]=function(){arguments.length!==t-1&&fn(r+" called with "+arguments.length+" arguments, expected "+(t-1));var n=[],a=new Array(t);a[0]=o;for(var u=1;u<t;++u)a[u]=e[u].toWireType(n,arguments[u-1]);var s=i.apply(null,a);return Ln(n),e[0].fromWireType(s)},[]}),[]})},t:function(n,t,r,e,i,o,a,u){var s=Mn(r,e);t=rn(t),o=Dn(i,o),yn([],[n],function(n){var e=(n=n[0]).name+"."+t;function i(){Nn("Cannot call "+e+" due to unbound types",s)}u&&n.registeredClass.pureVirtualFunctions.push(t);var c=n.registeredClass.instancePrototype,l=c[t];return void 0===l||void 0===l.overloadTable&&l.className!==n.name&&l.argCount===r-2?(i.argCount=r-2,i.className=n.name,c[t]=i):(An(c,t,e),c[t].overloadTable[r-2]=i),yn([],s,function(i){var u=function(n,t,r,e,i){var o=t.length;o<2&&fn("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==t[1]&&null!==r,u=!1,s=1;s<t.length;++s)if(null!==t[s]&&void 0===t[s].destructorFunction){u=!0;break}var c="void"!==t[0].name,l="",f="";for(s=0;s<o-2;++s)l+=(0!==s?", ":"")+"arg"+s,f+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+un(n)+"("+l+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",y=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],h=[fn,e,i,Ln,t[0],t[1]];for(a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n"),s=0;s<o-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+t[s+2].name+"\n",y.push("argType"+s),h.push(t[s+2]);if(a&&(f="thisWired"+(f.length>0?", ":"")+f),p+=(c?"var rv = ":"")+"invoker(fn"+(f.length>0?", ":"")+f+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<t.length;++s){var m=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==t[s].destructorFunction&&(p+=m+"_dtor("+m+"); // "+t[s].name+"\n",y.push(m+"_dtor"),h.push(t[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),y.push(p+="}\n"),function(n,t){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+typeof n+" which is not a function");var r=sn(n.name||"unknownFunctionName",function(){});r.prototype=n.prototype;var e=new r,i=n.apply(e,t);return i instanceof Object?i:e}(Function,y).apply(null,h)}(e,i,n,o,a);return void 0===c[t].overloadTable?(u.argCount=r-2,c[t]=u):c[t].overloadTable[r-2]=u,[]}),[]})},R:function(n,t){hn(n,{name:t=rn(t),fromWireType:function(n){var t=zn[n].value;return Vn(n),t},toWireType:function(n,t){return Hn(t)},argPackAdvance:8,readValueFromPointer:Wn,destructorFunction:null})},D:function(n,t,r){var e=nn(r);hn(n,{name:t=rn(t),fromWireType:function(n){return n},toWireType:function(n,t){if("number"!=typeof t&&"boolean"!=typeof t)throw new TypeError('Cannot convert "'+qn(t)+'" to '+this.name);return t},argPackAdvance:8,readValueFromPointer:Gn(t,e),destructorFunction:null})},k:function(n,t,r,e,i){t=rn(t),-1===i&&(i=4294967295);var o=nn(r),a=function(n){return n};if(0===e){var u=32-8*r;a=function(n){return n<<u>>>u}}var s=-1!=t.indexOf("unsigned");hn(n,{name:t,fromWireType:a,toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+qn(r)+'" to '+this.name);if(r<e||r>i)throw new TypeError('Passing a number "'+qn(r)+'" from JS side to C/C++ side to an argument of type "'+t+'", which is outside the valid range ['+e+", "+i+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:Zn(t,o,0!==e),destructorFunction:null})},i:function(n,t,r){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function i(n){return new e(F.buffer,F[1+(n>>=2)],F[n])}hn(n,{name:r=rn(r),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},B:function(n,t){var r="std::string"===(t=rn(t));hn(n,{name:t,fromWireType:function(n){var t,e=F[n>>2];if(r){var i=P[n+4+e],o=0;0!=i&&(o=i,P[n+4+e]=0);for(var a=n+4,u=0;u<=e;++u){var s=n+4+u;if(0==P[s]){var c=O(a);void 0===t?t=c:(t+=String.fromCharCode(0),t+=c),a=s+1}}0!=o&&(P[n+4+e]=o)}else{var l=new Array(e);for(u=0;u<e;++u)l[u]=String.fromCharCode(P[n+4+u]);t=l.join("")}return rt(n),t},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e="string"==typeof t;e||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||fn("Cannot pass non-string to std::string");var i=(r&&e?function(){return function(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);e>=55296&&e<=57343&&(e=65536+((1023&e)<<10)|1023&n.charCodeAt(++r)),e<=127?++t:t+=e<=2047?2:e<=65535?3:4}return t}(t)}:function(){return t.length})(),o=et(4+i+1);if(F[o>>2]=i,r&&e)!function(n,t,r,e){if(!(e>0))return 0;for(var i=r+e-1,o=0;o<n.length;++o){var a=n.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++o)),a<=127){if(r>=i)break;t[r++]=a}else if(a<=2047){if(r+1>=i)break;t[r++]=192|a>>6,t[r++]=128|63&a}else if(a<=65535){if(r+2>=i)break;t[r++]=224|a>>12,t[r++]=128|a>>6&63,t[r++]=128|63&a}else{if(r+3>=i)break;t[r++]=240|a>>18,t[r++]=128|a>>12&63,t[r++]=128|a>>6&63,t[r++]=128|63&a}}t[r]=0}(t,P,o+4,i+1);else if(e)for(var a=0;a<i;++a){var u=t.charCodeAt(a);u>255&&(rt(o),fn("String has UTF-16 code units that do not fit in 8 bits")),P[o+4+a]=u}else for(a=0;a<i;++a)P[o+4+a]=t[a];return null!==n&&n.push(rt,o),o},argPackAdvance:8,readValueFromPointer:Wn,destructorFunction:function(n){rt(n)}})},Q:function(n,t,r){var e,i;r=rn(r),2===t?(e=function(){return A},i=1):4===t&&(e=function(){return F},i=2),hn(n,{name:r,fromWireType:function(n){for(var t=e(),r=F[n>>2],o=new Array(r),a=n+4>>i,u=0;u<r;++u)o[u]=String.fromCharCode(t[a+u]);return rt(n),o.join("")},toWireType:function(n,r){var o=r.length,a=et(4+o*t),u=e();F[a>>2]=o;for(var s=a+4>>i,c=0;c<o;++c)u[s+c]=r.charCodeAt(c);return null!==n&&n.push(rt,a),a},argPackAdvance:8,readValueFromPointer:Wn,destructorFunction:function(n){rt(n)}})},P:function(n,t){hn(n,{isVoid:!0,name:t=rn(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,t){}})},A:function(n,t,r,e){n=function(n){return n||fn("Cannot use deleted val. handle = "+n),zn[n].value}(n);for(var i=function(n,t,r){for(var e=new Array(n),i=0;i<n;++i)e[i]=Xn(E[(t>>2)+i],"parameter "+i);return e}(t,r),o=new Array(t),a=0;a<t;++a){var u=i[a];o[a]=u.readValueFromPointer(e),e+=u.argPackAdvance}return Hn(n.apply(void 0,o))},h:Vn,o:function(n){n>4&&(zn[n].refcount+=1)},r:function(n,t){return Hn((n=Xn(n,"_emval_take_value")).readValueFromPointer(t))},__memory_base:1024,__table_base:0,j:function(){V()},O:Yn,M:function(n,t,r){P.set(P.subarray(t,t+r),n)},L:function(n){var t=Yn();if(n>2147418112)return!1;for(var r=Math.max(t,16777216);r<n;)r=r<=536870912?R(2*r,65536):Math.min(R((3*r+2147483648)/4,65536),2147418112);return!!function(n){try{return m.grow(n-T.byteLength+65535>>16),I(m.buffer),1}catch(n){}}(r)},m:function(n){var t=Date.now();return E[n>>2]=t/1e3|0,E[n+4>>2]=t%1e3*1e3|0,0},q:function(n){return Math.log(n)/Math.LN10},z:function(){V("trap!")},c:function(n,t){throw it(n,t||1),"longjmp"},p:function(){return 0},n:function(){return 0},K:function(){return 6},J:function(){},I:function(n){var t=Date.now()/1e3|0;return n&&(E[n>>2]=t),t},d:V,b:function(){return g},C:function(n,t){var r=ut();try{return st(n,t)}catch(n){if(at(r),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},N:function(n){var t=ut();try{return ct(n)}catch(n){if(at(t),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},y:function(n,t){var r=ut();try{return lt(n,t)}catch(n){if(at(r),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},e:function(n,t,r){var e=ut();try{return ft(n,t,r)}catch(n){if(at(e),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},x:function(n,t,r,e,i,o,a,u,s){var c=ut();try{return pt(n,t,r,e,i,o,a,u,s)}catch(n){if(at(c),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},H:function(n,t,r,e,i,o,a,u){var s=ut();try{return dt(n,t,r,e,i,o,a,u)}catch(n){if(at(s),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},g:function(n,t){var r=ut();try{yt(n,t)}catch(n){if(at(r),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},l:function(n,t,r){var e=ut();try{ht(n,t,r)}catch(n){if(at(e),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},F:function(n,t,r,e){var i=ut();try{mt(n,t,r,e)}catch(n){if(at(i),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},f:function(n,t,r,e,i){var o=ut();try{vt(n,t,r,e,i)}catch(n){if(at(o),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},_:function(n,t,r,e,i,o){var a=ut();try{gt(n,t,r,e,i,o)}catch(n){if(at(a),n!==n+0&&"longjmp"!==n)throw n;it(1,0)}},memory:m,a:function(n){g=n},table:w},Kn=t.asm({},Jn,T);t.asm=Kn;var Qn,nt=t.__ZSt18uncaught_exceptionv=function(){return t.asm.$.apply(null,arguments)},tt=(t.___embind_register_native_and_builtin_types=function(){return t.asm.aa.apply(null,arguments)},t.___getTypeName=function(){return t.asm.ba.apply(null,arguments)}),rt=t._free=function(){return t.asm.ca.apply(null,arguments)},et=t._malloc=function(){return t.asm.da.apply(null,arguments)},it=t._setThrew=function(){return t.asm.ea.apply(null,arguments)},ot=t.globalCtors=function(){return t.asm.Ga.apply(null,arguments)},at=t.stackRestore=function(){return t.asm.Ha.apply(null,arguments)},ut=t.stackSave=function(){return t.asm.Ia.apply(null,arguments)},st=t.dynCall_dd=function(){return t.asm.fa.apply(null,arguments)},ct=t.dynCall_i=function(){return t.asm.ga.apply(null,arguments)},lt=t.dynCall_ii=function(){return t.asm.ha.apply(null,arguments)},ft=(t.dynCall_iidiiii=function(){return t.asm.ia.apply(null,arguments)},t.dynCall_iii=function(){return t.asm.ja.apply(null,arguments)}),pt=(t.dynCall_iiii=function(){return t.asm.ka.apply(null,arguments)},t.dynCall_iiiii=function(){return t.asm.la.apply(null,arguments)},t.dynCall_iiiiii=function(){return t.asm.ma.apply(null,arguments)},t.dynCall_iiiiiiii=function(){return t.asm.na.apply(null,arguments)},t.dynCall_iiiiiiiii=function(){return t.asm.oa.apply(null,arguments)}),dt=(t.dynCall_iiiiiiiiii=function(){return t.asm.pa.apply(null,arguments)},t.dynCall_iiiiiiiiiiiiiiiiii=function(){return t.asm.qa.apply(null,arguments)},t.dynCall_iiiijj=function(){return t.asm.ra.apply(null,arguments)}),yt=(t.dynCall_iiijiii=function(){return t.asm.sa.apply(null,arguments)},t.dynCall_iij=function(){return t.asm.ta.apply(null,arguments)},t.dynCall_ji=function(){return t.asm.ua.apply(null,arguments)},t.dynCall_jiji=function(){return t.asm.va.apply(null,arguments)},t.dynCall_v=function(){return t.asm.wa.apply(null,arguments)},t.dynCall_vi=function(){return t.asm.xa.apply(null,arguments)}),ht=t.dynCall_vii=function(){return t.asm.ya.apply(null,arguments)},mt=t.dynCall_viii=function(){return t.asm.za.apply(null,arguments)},vt=t.dynCall_viiii=function(){return t.asm.Aa.apply(null,arguments)},gt=t.dynCall_viiiii=function(){return t.asm.Ba.apply(null,arguments)};function wt(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function bt(n){function r(){Qn||(Qn=!0,b||(U(N),U(M),t.onRuntimeInitialized&&t.onRuntimeInitialized(),function(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)n=t.postRun.shift(),L.unshift(n);var n;U(L)}()))}B>0||(function(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)n=t.preRun.shift(),x.unshift(n);var n;U(x)}(),B>0||(t.setStatus?(t.setStatus("Running..."),setTimeout(function(){setTimeout(function(){t.setStatus("")},1),r()},1)):r()))}if(t.dynCall_viiiiii=function(){return t.asm.Ca.apply(null,arguments)},t.dynCall_viiiiiii=function(){return t.asm.Da.apply(null,arguments)},t.dynCall_viiiiiiiiiii=function(){return t.asm.Ea.apply(null,arguments)},t.dynCall_vijj=function(){return t.asm.Fa.apply(null,arguments)},t.asm=Kn,t.then=function(n){if(Qn)n(t);else{var r=t.onRuntimeInitialized;t.onRuntimeInitialized=function(){r&&r(),n(t)}}return t},z=function n(){Qn||bt(),Qn||(z=n)},t.run=bt,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();return bt(),t}),e={width:300,height:150,timebaseNum:1,timebaseDen:30,bitrate:200,realtime:!1};try{var i=require("worker_threads");t=i.parentPort}catch(n){t=self}function o(n){return new Promise(function(t){return"once"in n?n.once("message",t):n.addEventListener("message",function(n){return t(n.data)},{once:!0})})}!function(){try{Promise.resolve(o(t)).then(function(n){return Promise.resolve((i=r,a=n,new Promise(function(n){var t=i({noInitialRun:!0,locateFile:function(n){return n.endsWith(".wasm")?a:n},onRuntimeInitialized:function(){delete t.then,n(t)}})}))).then(function(n){return t.postMessage("READY"),Promise.resolve(o(t)).then(function(r){var i=Object.assign({},e,r);"kLive"in i||(i.kLive=i.realtime);var o=new n.WebmEncoder(i.timebaseNum,i.timebaseDen,i.width,i.height,i.bitrate,i.realtime,i.kLive,function(n){var r=new Uint8Array(n);t.postMessage(r.buffer,[r.buffer])});!function(n,t){if("on"in n)return n.on("message",t);n.addEventListener("message",function(n){return t(n.data)})}(t,function(n){if(!n)return o.finalize(),t.postMessage(null),void o.delete();o.addRGBAFrame(n)})})});var i,a})}catch(n){return Promise.reject(n)}}();
//# sourceMappingURL=webm-worker.js.map
