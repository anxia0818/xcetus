import{a as _}from"./pool.ccb2d30f.js";import{e as p,x as h,r as u,b as r,A as m,o,f as a}from"./entry.555960f3.js";const g=""+globalThis.__publicAssetsURL("image/checked-active.png"),f=""+globalThis.__publicAssetsURL("image/checked-default.png");const b=h({props:{checked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,s){const n=u(!1),c=_(),i=r(()=>c),d=r(()=>i.value.chainName),t=()=>{n.value=!0,s.emit("change")};return m(()=>e.checked,l=>{console.log(l,"===>newValue"),n.value=l},{immediate:!0}),{chainName:d,changeSwitch:t,isChecked:n}}}),k={class:"switch"},v=["disabled"],w=["disabled"];function S(e,s,n,c,i,d){return o(),a("div",k,[e.isChecked?(o(),a("img",{key:0,src:g,disabled:e.disabled,alt:"",onClick:s[0]||(s[0]=(...t)=>e.changeSwitch&&e.changeSwitch(...t))},null,8,v)):(o(),a("img",{key:1,src:f,alt:"",disabled:e.disabled,onClick:s[1]||(s[1]=(...t)=>e.changeSwitch&&e.changeSwitch(...t))},null,8,w))])}const B=p(b,[["render",S],["__scopeId","data-v-9e5548c7"]]);export{B as _};
