import{A as m,B as I,H as L,C as O,D as g,E as c,F as T,G as S,I as u,J as b,K as H,L as V,M as C,N as M,O as P,P as Y,Q as $,p as j,R as E,v as k,a as B,d as F}from"./runtime.Ccas-iY2.js";import{a as G,r as N,h}from"./events.CLnd4dZ-.js";import{b as J}from"./disclose-version.Bg-IVkI4.js";const K=["touchstart","touchmove"];function Q(t){return K.includes(t)}function X(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r==null?"":r+"")}function W(t,e){return A(t,e)}function Z(t,e){m(),e.intro=e.intro??!1;const r=e.target,_=E,l=u;try{for(var a=I(r);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw g;c(!0),T(a),S();const d=A(t,{...e,anchor:a});if(u===null||u.nodeType!==8||u.data!==b)throw H(),g;return c(!1),d}catch(d){if(d===g)return e.recover===!1&&V(),m(),C(r),c(!1),W(t,e);throw d}finally{c(_),T(l)}}const i=new Map;function A(t,{target:e,anchor:r,props:_={},events:l,context:a,intro:d=!0}){m();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=Q(n);e.addEventListener(n,h,{passive:f});var R=i.get(n);R===void 0?(document.addEventListener(n,h,{passive:f}),i.set(n,1)):i.set(n,R+1)}}};y(M(G)),N.add(y);var p=void 0,D=P(()=>{var o=r??e.appendChild(Y());return $(()=>{if(a){j({});var s=F;s.c=a}l&&(_.$$events=l),E&&J(o,null),p=t(o,_)||{},E&&(k.nodes_end=u),a&&B()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=i.get(s);--n===0?(document.removeEventListener(s,h),i.delete(s)):i.set(s,n)}N.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return w.set(p,D),p}let w=new WeakMap;function x(t,e){const r=w.get(t);return r?(w.delete(t),r(e)):Promise.resolve()}export{Z as h,W as m,X as s,x as u};
