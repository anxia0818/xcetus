import{a as T,M,l as O,r as _,z as E,C as V,m as L,e as U,q as z,o as a,c as C,w as u,h as s,i as c,j as w,t as g,f as i,F as D,s as F,v as h,x as m,y as j,I as q,a3 as P,B as G,p as H,k as J}from"./entry.9bbcce65.js";/* empty css              *//* empty css              */import{b as K,_ as Q,a as W}from"./icon-error_2x.a9576bf9.js";import{u as X}from"./sha256.64408122.js";const Y=T({components:{Modal:M},setup(e,o){const{t:I,locale:y}=O(),v=X(),$=["0.1","0.5","1"],p=_(v.slippage||.5),{setSlippage:S}=v,b=L();console.log(p.value,"slippage.value");const d=_(!1);function k(l,f){d.value=!1,p.value=f}function n(){localStorage.setItem("swapOrderSplit",t.value),localStorage.setItem("includeRoutes",r.value),S(p.value);const l=new Event("updateSwapParams");window.dispatchEvent(l),o.emit("onClose",!1)}const t=_(),r=_(),R=l=>{t.value=l},B=l=>{r.value=l};E(()=>{const l=localStorage.getItem("swapOrderSplit")||"open";l=="open"?t.value="open":l=="close"?t.value="close":t.value="open";const f=localStorage.getItem("includeRoutes")||"close";f=="open"?r.value="open":(f=="close",r.value="close")});const A=V(()=>v.chainName);return{settingArr:$,changeActiveIndex:k,confirm:n,emit:b,slippage:p,t:I,orderSplit:t,includeRoutes:r,setOrderSplit:R,setIncludeRoutes:B,chainName:A,isInput:d}}}),Z=""+globalThis.__publicAssetsURL("image/icon_Slippage_tolerance_aptos@2x.png"),x=""+globalThis.__publicAssetsURL("sui-image/icon_Router@2x.png");const N=e=>(H("data-v-fc04e978"),e=e(),J(),e),ee=N(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),se={class:"setting-container"},oe={class:"title"},ne={key:0,src:K,alt:""},ae={key:1,src:Z,alt:""},te={class:"tag-list"},le={key:0,src:Q,alt:""},ie={key:1,src:W,alt:""},pe={key:1,class:"line"},re={key:2,class:"swap-router-config"},ue=N(()=>s("div",{class:"title"},[s("img",{src:x,alt:""}),s("span",null," Router ")],-1)),ce={class:"swap-router-content"},de={class:"order-split"},ge=N(()=>s("span",null,"Support order split",-1)),me={class:"include-router"},ve=N(()=>s("span",null,"Include DeepBook routes",-1)),be={class:"footer"};function fe(e,o,I,y,v,$){const p=j,S=q,b=P,d=G,k=z("Modal");return a(),C(k,{title:"Settings",class:"setting",centered:"",visible:!0,width:"400px",onCancel:o[5]||(o[5]=n=>e.$emit("onClose"))},{closeIcon:u(()=>[ee]),footer:u(()=>[s("div",be,[c(d,{type:"cancel",class:"cancel-btn cancel-btn-new",onClick:o[4]||(o[4]=n=>e.$emit("onClose"))},{default:u(()=>[w(g(e.$t("button.cancel")),1)]),_:1}),c(d,{class:"confirmbtn",disabled:Number(e.slippage)==0||Number(e.slippage)>50||Number(e.slippage)<.01,onClick:e.confirm},{default:u(()=>[w(g(e.$t("button.confirm")),1)]),_:1},8,["disabled","onClick"])])]),default:u(()=>[s("div",se,[s("div",oe,[e.chainName=="Sui"?(a(),i("img",ne)):(a(),i("img",ae)),s("span",null,g(e.$t("modal.slippageTolerance")),1)]),s("div",te,[(a(!0),i(D,null,F(e.settingArr,(n,t)=>(a(),C(p,{key:t,class:h(!e.isInput&&n==e.slippage?"tag-active":""),onClick:r=>e.changeActiveIndex(t,n)},{default:u(()=>[w(g(n)+"% ",1)]),_:2},1032,["class","onClick"]))),128)),c(p,{class:h(["input-tag",e.isInput?"tag-active":""]),onClick:o[1]||(o[1]=n=>e.isInput=!0)},{default:u(()=>[c(S,{value:e.slippage,"onUpdate:value":o[0]||(o[0]=n=>e.slippage=n),placeholder:"",suffix:"%",class:h(["slippage-input",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-input-waring":Number(e.slippage)>50?"slippage-input-error":""])},null,8,["value","class"])]),_:1},8,["class"])])]),Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1||Number(e.slippage)>50?(a(),i("div",{key:0,class:h(["slippage-hint",Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?"slippage-hint-waring":Number(e.slippage)>50?"slippage-hint-error":""])},[Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?(a(),i("img",le)):m("",!0),Number(e.slippage)>50?(a(),i("img",ie)):m("",!0),s("p",null,g(Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?e.$t("tips.slippageTolerance2"):Number(e.slippage)>50?e.$t("tips.slippageTolerance1"):""),1)],2)):m("",!0),e.chainName=="Sui"&&e.$route.name=="swap"?(a(),i("div",pe)):m("",!0),e.chainName=="Sui"&&e.$route.name=="swap"?(a(),i("div",re,[ue,s("div",ce,[s("div",de,[ge,c(b,{class:"range-alerts-switch",checked:e.orderSplit=="open",onChange:o[2]||(o[2]=n=>e.setOrderSplit(e.orderSplit=="open"?"close":"open"))},null,8,["checked"])]),s("div",me,[ve,c(b,{class:"range-alerts-switch",checked:e.includeRoutes=="open",onChange:o[3]||(o[3]=n=>e.setIncludeRoutes(e.includeRoutes=="open"?"close":"open"))},null,8,["checked"])])])])):m("",!0)]),_:1})}const we=U(Y,[["render",fe],["__scopeId","data-v-fc04e978"]]);export{we as _};
