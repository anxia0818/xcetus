import{a as p,aw as f,f as m,e as d,a9 as _,l as w,o as s,m as o,q as C,w as k,p as h,ad as y,ae as v,B,M as $,t as S}from"./entry.06eb55ea.js";import{c as g}from"./index.73e79fd4.js";const x=p({setup(){const t=[new f],a=m(g({adapters:t})),r=d(()=>a.getState()),c=d(()=>r.value.wallets||[]),l=()=>{},i=async n=>{try{const e=await a.connect(n)}catch{}};return _(()=>{}),{testFun:l,wallets:c,toConnect:i}}}),F={class:"wallet-list"},N=["onClick"];function V(t,a,r,c,l,i){const n=B;return s(),o("div",null,[C(n,{type:"primary",onClick:t.testFun},{default:k(()=>[$("test")]),_:1},8,["onClick"]),h("ul",F,[(s(!0),o(y,null,v(t.wallets,(e,u)=>(s(),o("li",{key:u,onClick:E=>t.toConnect(e.name)},S(e.name),9,N))),128))])])}const b=w(x,[["render",V]]);export{b as default};
