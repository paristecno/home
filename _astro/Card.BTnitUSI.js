import{r as i}from"./index.DhYZZe0J.js";var _={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=i,u=Symbol.for("react.element"),x=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,r,f){var e,o={},s=null,p=null;f!==void 0&&(s=""+f),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)d.call(r,e)&&!c.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:u,type:t,key:s,ref:p,props:o,_owner:m.current}}n.Fragment=x;n.jsx=l;n.jsxs=l;_.exports=n;var y=_.exports;const E=()=>y.jsx("div",{className:"text-4xl text-red-500 font-mono",children:"Card"});export{E as default};
