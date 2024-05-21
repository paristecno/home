import{r as i}from"./index.DhYZZe0J.js";var l={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=i,x=Symbol.for("react.element"),a=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function _(t,r,f){var e,o={},s=null,p=null;f!==void 0&&(s=""+f),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(p=r.ref);for(e in r)m.call(r,e)&&!c.hasOwnProperty(e)&&(o[e]=r[e]);if(t&&t.defaultProps)for(e in r=t.defaultProps,r)o[e]===void 0&&(o[e]=r[e]);return{$$typeof:x,type:t,key:s,ref:p,props:o,_owner:d.current}}n.Fragment=a;n.jsx=_;n.jsxs=_;l.exports=n;var y=l.exports;const E=()=>y.jsx("div",{className:"text-6xl text-red-500 font-mono flex justify-center mt-72",children:"Card"});export{E as default};
