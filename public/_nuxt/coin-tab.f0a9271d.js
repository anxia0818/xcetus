import{a as i,l as r,o as l,m as d,p as t,t as n,s}from"./entry.06eb55ea.js";const c=i({props:{direct:{type:Boolean,default:!0},formCoinSymbol:{type:String,default:""},toCoinSymbol:{type:String,default:""}}});const p={class:"coin-tab"};function m(e,o,_,f,u,v){return l(),d("div",p,[t("div",{class:s(e.direct?"active":""),onClick:o[0]||(o[0]=a=>e.$emit("changeDirect",!0))},n(e.formCoinSymbol),3),t("div",{class:s(e.direct?"":"active"),onClick:o[1]||(o[1]=a=>e.$emit("changeDirect",!1))},n(e.toCoinSymbol),3)])}const b=r(c,[["render",m],["__scopeId","data-v-8395e5db"]]);export{b as _};
