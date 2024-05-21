import{r as u}from"./index.DhYZZe0J.js";var d={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=u,m=Symbol.for("react.element"),f=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,_=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,o){var r,s={},a=null,c=null;o!==void 0&&(a=""+o),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)x.call(e,r)&&!h.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:m,type:t,key:a,ref:c,props:s,_owner:_.current}}l.Fragment=f;l.jsx=i;l.jsxs=i;d.exports=l;var n=d.exports;const y=()=>{const[t,e]=u.useState(!1),[o,r]=u.useState(!1);return n.jsxs("div",{className:"flex justify-center items-center h-screen",children:[!t&&!o&&n.jsx("button",{onClick:()=>e(!0),className:"bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600",children:"Landing"}),t&&!o&&n.jsx("button",{onClick:()=>r(!0),className:"bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600",children:"Detalle"}),o&&n.jsx("button",{className:"bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600",children:"Checkout"})]})};export{y as default};
