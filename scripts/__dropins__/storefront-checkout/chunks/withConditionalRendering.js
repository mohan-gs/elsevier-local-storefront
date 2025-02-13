/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as n}from"@dropins/tools/preact-jsx-runtime.js";import{c as p}from"./transform-store-config.js";import"./store-config.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/lib.js";function u(i){return i.displayName||i.name||"Component"}const g=i=>{const o=u(i),a=({hideOnEmptyCart:s=!0,hideOnVirtualCart:r=!1,...e})=>{const t=p.value.data,l=t!==void 0&&(t===null||t.isEmpty),m=!!(t!=null&&t.isVirtual),c=s&&l||r&&m,d=`conditional-${o.toLowerCase()}`;return n("div",{className:d,children:!c&&n(i,{...e})})};return a.displayName=`Conditional(${o})`,a};export{g as w};
