import{a as i,l,m as _,e as d,o as a,c as u,w as r,h as t,v as f,i as m,f as h,z as k,T as g,N as w,p as v,k as y}from"./entry.f6bb9ee2.js";/* empty css              *//* empty css              */import{u as B}from"./sha256.dba739f5.js";const I=i({props:{loading:{type:Boolean,default:!1},autoRefreshTime:{type:Number,default:20},countdown:{type:Number,default:0}},setup(){const{t:e,locale:o}=l(),s=B(),n=_(()=>s);return{t:e,store:n}}});const $=e=>(v("data-v-43ba3ad2"),e=e(),y(),e),C=$(()=>t("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),b=[C];function N(e,o,s,n,S,F){const c=g,p=w;return a(),u(p,{placement:"top","arrow-point-at-center":""},{title:r(()=>[t("span",null,f(e.$t("tips.refreshTips")),1)]),default:r(()=>[t("div",{class:"progress",onClick:o[0]||(o[0]=T=>e.$emit("clickRefresh"))},[m(c,{type:"circle","trail-color":"#B5B8C2","stroke-color":e.store.theme=="default"?"#68FFD8":"#76C8FF",width:16,"show-info":!1,"stroke-width":8,percent:100/e.autoRefreshTime*e.countdown},null,8,["stroke-color","percent"]),(a(),h("svg",{"aria-hidden":"true",class:k(e.loading?"refresh icon":"icon")},b,2))])]),_:1})}const V=d(I,[["render",N],["__scopeId","data-v-43ba3ad2"]]);export{V as _};
