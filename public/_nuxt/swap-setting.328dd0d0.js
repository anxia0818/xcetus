import{a as E,$ as T,y as O,r as _,H as M,l as V,ah as L,e as U,Q as D,o as t,c as $,w as u,h as s,i as d,j as w,v as m,f as p,F,E as j,A as f,x as v,ai as z,I as H,a1 as P,B as Q,p as q,k as G}from"./entry.2d0457a5.js";/* empty css              *//* empty css              */import{_ as J,a as K,b as W}from"./icon-error_2x.3bf3ce08.js";import{u as X}from"./sha256.86dbf6c4.js";const Y=E({components:{Modal:T},setup(e,n){const{t:C,locale:y}=O(),h=X(),I=["0.1","0.5","1"],i=_(h.slippage||.5),{setSlippage:S}=h,b=L();console.log(i.value,"slippage.value");const g=_(!1);function k(o,c){g.value=!1,i.value=c}function a(){localStorage.setItem("swapOrderSplit",l.value),localStorage.setItem("includeRoutes",r.value),S(i.value);const o=new Event("updateSwapParams");window.dispatchEvent(o),n.emit("onClose",!1)}const l=_(),r=_(),R=o=>{l.value=o},A=o=>{r.value=o};M(()=>{const o=localStorage.getItem("swapOrderSplit")||"open";o=="open"?l.value="open":o=="close"?l.value="close":l.value="open";const c=localStorage.getItem("includeRoutes")||"close";c=="open"?r.value="open":(c=="close",r.value="close")});const B=V(()=>h.chainName);return{settingArr:I,changeActiveIndex:k,confirm:a,emit:b,slippage:i,t:C,orderSplit:l,includeRoutes:r,setOrderSplit:R,setIncludeRoutes:A,chainName:B,isInput:g,inputChange:o=>{const c=new RegExp(/[^\d^\.]+/g);o.target.value=o.target.value.replace(c,""),i.value=o.target.value}}}}),Z=""+globalThis.__publicAssetsURL("image/icon_Slippage_tolerance_aptos@2x.png"),x=""+globalThis.__publicAssetsURL("sui-image/icon_Router@2x.png");const N=e=>(q("data-v-ddd06778"),e=e(),G(),e),ee=N(()=>s("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),se={class:"setting-container"},ne={class:"title"},oe={key:0,src:J,alt:""},ae={key:1,src:Z,alt:""},te={class:"tag-list"},le={key:0,src:K,alt:""},ie={key:1,src:W,alt:""},pe={key:1,class:"line"},re={key:2,class:"swap-router-config"},ue=N(()=>s("div",{class:"title"},[s("img",{src:x,alt:""}),s("span",null," Router ")],-1)),ce={class:"swap-router-content"},de={class:"order-split"},ge=N(()=>s("span",null,"Support order split",-1)),me={class:"include-router"},ve=N(()=>s("span",null,"Include DeepBook routes",-1)),he={class:"footer"};function be(e,n,C,y,h,I){const i=z,S=H,b=P,g=Q,k=D("Modal");return t(),$(k,{title:"Settings",class:"setting",centered:"",visible:!0,width:"400px",onCancel:n[5]||(n[5]=a=>e.$emit("onClose"))},{closeIcon:u(()=>[ee]),footer:u(()=>[s("div",he,[d(g,{type:"cancel",class:"cancel-btn cancel-btn-new",onClick:n[4]||(n[4]=a=>e.$emit("onClose"))},{default:u(()=>[w(m(e.$t("button.cancel")),1)]),_:1}),d(g,{class:"confirmbtn",disabled:Number(e.slippage)==0||Number(e.slippage)>50||Number(e.slippage)<.01,onClick:e.confirm},{default:u(()=>[w(m(e.$t("button.confirm")),1)]),_:1},8,["disabled","onClick"])])]),default:u(()=>[s("div",se,[s("div",ne,[e.chainName=="Sui"?(t(),p("img",oe)):(t(),p("img",ae)),s("span",null,m(e.$t("modal.slippageTolerance")),1)]),s("div",te,[(t(!0),p(F,null,j(e.settingArr,(a,l)=>(t(),$(i,{key:l,class:f(!e.isInput&&a==e.slippage?"tag-active":""),onClick:r=>e.changeActiveIndex(l,a)},{default:u(()=>[w(m(a)+"% ",1)]),_:2},1032,["class","onClick"]))),128)),d(i,{class:f(["input-tag",e.isInput?"tag-active":""]),onClick:n[1]||(n[1]=a=>e.isInput=!0)},{default:u(()=>[d(S,{value:e.slippage,"onUpdate:value":n[0]||(n[0]=a=>e.slippage=a),placeholder:"",suffix:"%",class:f(["slippage-input",Number(e.slippage)>1&&50>=Number(e.slippage)?"slippage-input-waring":Number(e.slippage)>50?"slippage-input-error":""]),onChange:e.inputChange},null,8,["value","class","onChange"])]),_:1},8,["class"])])]),Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1||Number(e.slippage)>50?(t(),p("div",{key:0,class:f(["slippage-hint",Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?"slippage-hint-waring":Number(e.slippage)>50?"slippage-hint-error":""])},[Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?(t(),p("img",le)):v("",!0),Number(e.slippage)>50?(t(),p("img",ie)):v("",!0),s("p",null,m(Number(e.slippage)>1&&50>=Number(e.slippage)||Number(e.slippage)>0&&Number(e.slippage)<.1?e.$t("tips.slippageTolerance2"):Number(e.slippage)>50?e.$t("tips.slippageTolerance1"):""),1)],2)):v("",!0),e.chainName=="Sui"&&e.$route.name=="swap"?(t(),p("div",pe)):v("",!0),e.chainName=="Sui"&&e.$route.name=="swap"?(t(),p("div",re,[ue,s("div",ce,[s("div",de,[ge,d(b,{class:"range-alerts-switch",checked:e.orderSplit=="open",onChange:n[2]||(n[2]=a=>e.setOrderSplit(e.orderSplit=="open"?"close":"open"))},null,8,["checked"])]),s("div",me,[ve,d(b,{class:"range-alerts-switch",checked:e.includeRoutes=="open",onChange:n[3]||(n[3]=a=>e.setIncludeRoutes(e.includeRoutes=="open"?"close":"open"))},null,8,["checked"])])])])):v("",!0)]),_:1})}const Ce=U(Y,[["render",be],["__scopeId","data-v-ddd06778"]]);export{Ce as _};
