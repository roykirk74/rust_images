"use strict";(self.webpackChunkimage_effects=self.webpackChunkimage_effects||[]).push([[235],{235:(e,n,t)=>{t.a(e,(async(e,r)=>{try{t.r(n),t.d(n,{__wbg_log_4b5638ad60bdc54a:()=>o.Pc,__wbindgen_object_drop_ref:()=>o.ug,__wbindgen_string_new:()=>o.h4,__wbindgen_throw:()=>o.Or,grayscale:()=>o.se});var o=t(838),c=e([o]);o=(c.then?(await c)():c)[0],r()}catch(e){r(e)}}))},838:(e,n,t)=>{t.a(e,(async(r,o)=>{try{t.d(n,{Or:()=>I,Pc:()=>E,h4:()=>A,se:()=>x,ug:()=>T});var c=t(530);e=t.hmd(e);var i=r([c]);c=(i.then?(await i)():i)[0];let a=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let _=new Uint8Array;function u(){return 0===_.byteLength&&(_=new Uint8Array(c.memory.buffer)),_}function d(e,n){return a.decode(u().subarray(e,e+n))}const f=new Array(32).fill(void 0);f.push(void 0,null,!0,!1);let g=f.length;function l(e){g===f.length&&f.push(f.length+1);const n=g;return g=f[n],f[n]=e,n}function s(e){return f[e]}function w(e){e<36||(f[e]=g,g=e)}function b(e){const n=s(e);return w(e),n}let h=0,y=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const p="function"==typeof y.encodeInto?function(e,n){return y.encodeInto(e,n)}:function(e,n){const t=y.encode(e);return n.set(t),{read:e.length,written:t.length}};function v(e,n,t){if(void 0===t){const t=y.encode(e),r=n(t.length);return u().subarray(r,r+t.length).set(t),h=t.length,r}let r=e.length,o=n(r);const c=u();let i=0;for(;i<r;i++){const n=e.charCodeAt(i);if(n>127)break;c[o+i]=n}if(i!==r){0!==i&&(e=e.slice(i)),o=t(o,r,r=i+3*e.length);const n=u().subarray(o+i,o+r);i+=p(e,n).written}return h=i,o}let m=new Int32Array;function k(){return 0===m.byteLength&&(m=new Int32Array(c.memory.buffer)),m}function x(e){try{const r=c.__wbindgen_add_to_stack_pointer(-16),o=v(e,c.__wbindgen_malloc,c.__wbindgen_realloc),i=h;c.grayscale(r,o,i);var n=k()[r/4+0],t=k()[r/4+1];return d(n,t)}finally{c.__wbindgen_add_to_stack_pointer(16),c.__wbindgen_free(n,t)}}function A(e,n){return l(d(e,n))}function T(e){b(e)}function E(e){console.log(s(e))}function I(e,n){throw new Error(d(e,n))}o()}catch(O){o(O)}}))},530:(e,n,t)=>{t.a(e,(async(r,o)=>{try{var c,i=r([c=t(838)]),[c]=i.then?(await i)():i;await t.v(n,e.id,"2b5ecabe8a102e667501",{"./index_bg.js":{__wbindgen_string_new:c.h4,__wbindgen_object_drop_ref:c.ug,__wbg_log_4b5638ad60bdc54a:c.Pc,__wbindgen_throw:c.Or}}),o()}catch(e){o(e)}}),1)}}]);