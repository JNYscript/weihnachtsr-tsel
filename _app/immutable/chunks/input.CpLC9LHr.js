import{C as c,D as n,G as y,I as k,h as v,a0 as A,a1 as g,a2 as L,w as E,a3 as b}from"./runtime.D-ythvPE.js";let u=!1;function d(){u||(u=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function m(e){var r=y,a=k;c(null),n(null);try{return e()}finally{c(r),n(a)}}function w(e,r,a,s=a){e.addEventListener(r,()=>m(a));const _=e.__on_r;_?e.__on_r=()=>{_(),s(!0)}:e.__on_r=()=>s(!0),d()}function N(e){if(v){var r=!1,a=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var s=e.value;i(e,"value",null),e.value=s}if(e.hasAttribute("checked")){var _=e.checked;i(e,"checked",null),e.checked=_}}};e.__on_r=a,A(a),d()}}function i(e,r,a,s){var _=e.__attributes??(e.__attributes={});v&&(_[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||_[r]!==(_[r]=a)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[g]=a),e.removeAttribute(r))}function S(e,r,a=r){var s=L();w(e,"input",_=>{var f=_?e.defaultValue:e.value;if(f=l(e)?t(f):f,a(f),s&&f!==(f=r())){var h=e.selectionStart,o=e.selectionEnd;e.value=f??"",o!==null&&(e.selectionStart=h,e.selectionEnd=Math.min(o,e.value.length))}}),(v&&e.defaultValue!==e.value||E(r)==null&&e.value)&&a(l(e)?t(e.value):e.value),b(()=>{var _=r();l(e)&&_===t(e.value)||e.type==="date"&&!_&&!e.value||_!==e.value&&(e.value=_??"")})}function l(e){var r=e.type;return r==="number"||r==="range"}function t(e){return e===""?null:+e}export{S as b,N as r};
