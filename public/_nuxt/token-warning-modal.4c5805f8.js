import{i as g}from"./import-icon.de3e6c66.js";import{e as y,a as S,M as w,r as I,l as p,z as $,m as j,o as a,c as B,w as f,h as e,f as l,q as b,t as d,s as _,i as O,j as T,B as M,p as N,k as V}from"./entry.9b70370c.js";import{u as D}from"./sha256.160e359b.js";import{u as q,c as P}from"./pool.e39ccd2c.js";import{_ as z}from"./icon-selected_3x.09e9a6f0.js";const A=S({components:{Modal:w},props:{fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})}},setup(o,t){const u=D(),k=I(!1),v=p(()=>u),C=s=>{var h;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((h=n.value.tokensObj[s==null?void 0:s.address])==null?void 0:h.logo_url)||(v.value.theme==="default"?g("/image/coins/unknown.png"):g("/image/coins/sui-unknown.png"))},m=q(),n=p(()=>m),i=s=>n.value.tokensObj&&n.value.tokensObj[s.address]&&n.value.tokensObj[s.address].isSelfBuilt;return{store:u,isSelect:k,getCoinIcon:C,getTokenSource:i,clickContinue:()=>{i(o.fromCoin)&&localStorage.setItem(`${o.fromCoin.address}`,!0),i(o.toCoin)&&localStorage.setItem(`${o.toCoin.address}`,!0),t.emit("clickContinue",o.fromCoin&&!P(o.fromCoin)?o.fromCoin:o.toCoin)}}}}),c=o=>(N("data-v-4a96cc10"),o=o(),V(),o),E={class:"token-waring-conetnt"},F={class:"coin"},L={key:0,class:"coin-a"},R={class:"logo"},U={alt:""},W=c(()=>e("div",{class:"warning-img"},null,-1)),G={class:"symbol"},H={class:"coin-info"},J={class:"address"},K=c(()=>e("use",{"xlink:href":"#icon-icon-copy"},null,-1)),Q=[K],X={key:1,class:"coin-b"},Y={class:"logo"},Z={alt:""},x=c(()=>e("div",{class:"warning-img"},null,-1)),oo={class:"symbol"},eo={class:"coin-info"},so={class:"address"},to=c(()=>e("use",{"xlink:href":"#icon-icon-copy"},null,-1)),no=[to],io=c(()=>e("div",{class:"tips-text"}," The token is not on the Frequently Traded List. Please note that anyone can create a token on Sui blockchain with any name, including creating fake versions of existing tokens or tokens that claim to represent projects that do not have a token. Always conduct your own research before trading. ",-1)),ao={class:"read-text"},co={key:0,src:z},lo=c(()=>e("span",null," I acknowledge the risk ",-1));function ro(o,t,u,k,v,C){const m=M,n=$("Modal"),i=j("image");return a(),B(n,{width:"440px",visible:!0,footer:null,title:null,"mask-closable":!0,onCancel:t[3]||(t[3]=r=>o.$emit("close"))},{default:f(()=>[e("div",E,[e("div",F,[o.getTokenSource(o.fromCoin)?(a(),l("div",L,[e("div",R,[b(e("img",U,null,512),[[i,o.getCoinIcon(o.fromCoin)]]),W]),e("div",G,d(o.fromCoin.symbol),1),e("div",H,[e("div",J,d(o.fromCoin.address),1),(a(),l("svg",{class:"icon","aria-hidden":"true",onClick:t[0]||(t[0]=r=>o.store.copy(o.fromCoin&&o.fromCoin.address))},Q))])])):_("",!0),o.getTokenSource(o.toCoin)?(a(),l("div",X,[e("div",Y,[b(e("img",Z,null,512),[[i,o.getCoinIcon(o.toCoin)]]),x]),e("div",oo,d(o.toCoin.symbol),1),e("div",eo,[e("div",so,d(o.toCoin.address),1),(a(),l("svg",{class:"icon","aria-hidden":"true",onClick:t[1]||(t[1]=r=>o.store.copy(o.toCoin&&o.toCoin.address))},no))])])):_("",!0)]),io,e("div",ao,[e("div",{class:"radio",onClick:t[2]||(t[2]=r=>o.isSelect=!o.isSelect)},[o.isSelect?(a(),l("img",co)):_("",!0)]),lo]),O(m,{disabled:!o.isSelect,class:"big-btn continue",onClick:o.clickContinue},{default:f(()=>[T("Continue")]),_:1},8,["disabled","onClick"])])]),_:1})}const Co=y(A,[["render",ro],["__scopeId","data-v-4a96cc10"]]);export{Co as _};
