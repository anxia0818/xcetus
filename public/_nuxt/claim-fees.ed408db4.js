import{_ as ao}from"./status-block.7cadb9e0.js";import{i as v}from"./import-icon.de3e6c66.js";import{a as q,u as Z,j as O,g as j,h as b,c as x}from"./pool.ccb2d30f.js";import{x as M,a as oo,r as L,b as c,e as V,o as a,f as p,h as n,l as $,w,u as s,t as i,s as F,j as R,S as lo,p as H,m as J,A as E,y as ro,c as no,k as D,U as mo,B as eo,M as uo,K as po}from"./entry.555960f3.js";/* empty css              */import{_ as io}from"./icon-arrow_2x.948aedb2.js";import{_ as so}from"./icon-arrow_2x.4ffddb8e.js";import{_ as to}from"./c-switch.858262a0.js";import{u as fo}from"./notifi.af1216a6.js";const co=M({props:{positionInfo:{type:Object,required:!0,default:()=>({})}},setup(o){const{t:f}=oo();let g=L(!1),y=L(!0);const S=q(),_=Z(),e=c(()=>_);console.log(o.positionInfo,"===>props.positionInfo");const d=c(()=>{var l,r,k,h,U,P,N,A;if(x(o.positionInfo))return" --";{const B=o.positionInfo.amountA*((r=e.value.RATES[(l=o.positionInfo)==null?void 0:l.token_a.address])==null?void 0:r.price),T=o.positionInfo.amountB*((h=e.value.RATES[(k=o.positionInfo)==null?void 0:k.token_b.address])==null?void 0:h.price);return(P=e.value.RATES[(U=o.positionInfo)==null?void 0:U.token_a.address])!=null&&P.price&&((A=e.value.RATES[(N=o.positionInfo)==null?void 0:N.token_b.address])!=null&&A.price)?B+T:" --"}}),m=c(()=>{var l,r,k,h;return(r=e.value.RATES[(l=o.positionInfo)==null?void 0:l.token_a.name.toUpperCase()])!=null&&r.price&&d.value!=="--"?(o.positionInfo.amountA*((h=e.value.RATES[(k=o.positionInfo)==null?void 0:k.token_a.name.toUpperCase()])==null?void 0:h.price)/d.value*100).toFixed(0):" --"}),I=c(()=>{var l,r,k,h;return(r=e.value.RATES[(l=o.positionInfo)==null?void 0:l.token_b.name.toUpperCase()])!=null&&r.price&&d.value!=="--"?(o.positionInfo.amountB*((h=e.value.RATES[(k=o.positionInfo)==null?void 0:k.token_b.name.toUpperCase()])==null?void 0:h.price)/d.value*100).toFixed(0):" --"}),t=c(()=>e.value.allTokenObj&&o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.address&&e.value.allTokenObj[o.positionInfo.token_a.address]&&e.value.allTokenObj[o.positionInfo.token_a.address].logoURI),u=c(()=>e.value.allTokenObj&&o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.address&&e.value.allTokenObj[o.positionInfo.token_b.address]&&e.value.allTokenObj[o.positionInfo.token_b.address].logoURI),C=c(()=>{var l,r;return(r=(l=o.positionInfo)==null?void 0:l.poolInfo)==null?void 0:r.needReverse});return console.log(o.positionInfo,"===>positionInfo"),{fromPercent:I,toPercent:m,amountUSD:d,showNum:O,t:f,importIcon:v,indexStore:S,rateChange:y,decimalFormat:j,fromCoinUrl:t,toCoinUrl:u,pools:e,addCommom:b,isPc:g,needReverse:C}}});const Io=o=>(H("data-v-4d3d4b7e"),o=o(),J(),o),ko={key:0,class:"position-card"},ho={key:0,class:"coin-pair"},bo=["src"],vo=["src"],go={key:1,class:"coin-pair"},_o=["src"],Co=["src"],So={class:"fee"},yo={class:"right"},$o={key:0,class:"status"},wo={class:"min-and-max"},Uo={key:0},Ro={class:"text"},Oo={key:0,src:io,alt:""},Po={key:1,src:so,alt:""},No={class:"text"},Ao={key:1},jo={class:"text"},Bo={key:0,src:io,alt:""},To={key:1,src:so,alt:""},Lo={class:"text"},Eo=Io(()=>n("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),Fo=[Eo],Do={class:"liquidity"},qo={class:"label"},Mo={class:"value"},Vo={class:"item"},Ho=["src"],Jo={class:"rate"},zo={class:"item"},Ko=["src"],Go={class:"rate"};function Qo(o,f,g,y,S,_){const e=lo,d=ao;return o.positionInfo?(a(),p("div",ko,[n("div",{class:F(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[$(e,{class:"left-skeleton",loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[o.needReverse?(a(),p("div",go,[n("div",null,[n("img",{src:o.toCoinUrl||("importIcon"in o?o.importIcon:s(v))(`/image/coins/${o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,_o),n("img",{src:o.fromCoinUrl||("importIcon"in o?o.importIcon:s(v))(`/image/coins/${o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,Co)]),n("span",null,i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(a(),p("div",ho,[n("div",null,[n("img",{src:o.fromCoinUrl||("importIcon"in o?o.importIcon:s(v))(`/image/coins/${o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,bo),n("img",{src:o.toCoinUrl||("importIcon"in o?o.importIcon:s(v))(`/image/coins/${o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,vo)]),n("span",null,i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),n("div",So,i(o.$t("common.fee"))+" "+i(o.positionInfo.fee*100)+"%",1)]),_:1},8,["loading"])],2),n("div",yo,[o.pools.currentPositionLoading?R("",!0):(a(),p("div",$o,[$(d,{"current-status":o.positionInfo.currentStatus||"","block-name":"detail"},null,8,["current-status"])])),$(e,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[n("div",wo,[(o.needReverse?!o.rateChange:o.rateChange)?(a(),p("div",Uo,[n("div",Ro,i(("addCommom"in o?o.addCommom:s(b))(("decimalFormat"in o?o.decimalFormat:s(j))(String(o.positionInfo.minPrice),6),6)),1),o.indexStore.theme=="default"?(a(),p("img",Oo)):(a(),p("img",Po)),n("div",No,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:s(b))(("decimalFormat"in o?o.decimalFormat:s(j))(String(o.positionInfo.maxPrice),6),6))+" "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(a(),p("div",Ao,[n("div",jo,i(("addCommom"in o?o.addCommom:s(b))(("decimalFormat"in o?o.decimalFormat:s(j))(String(1/Number(o.positionInfo.maxPrice)),6),6)),1),o.indexStore.theme=="default"?(a(),p("img",Bo)):(a(),p("img",To)),n("div",Lo,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:s(b))(("decimalFormat"in o?o.decimalFormat:s(j))(String(1/Number(o.positionInfo.minPrice)),6),6))+" "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),(a(),p("svg",{class:"icon-change","aria-hidden":"true",onClick:f[0]||(f[0]=m=>o.rateChange=!o.rateChange)},Fo))])]),_:1},8,["loading"]),n("div",Do,[$(e,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>[n("div",qo,i(o.$t("common.liquidity")),1),n("div",Mo," $"+i(o.amountUSD=="--"?"--":Number(o.amountUSD)==0?0:Number(o.amountUSD)<.01?"<0.01":("addCommom"in o?o.addCommom:s(b))(o.amountUSD,2)),1)]),_:1},8,["loading"])]),n("div",{class:F(o.needReverse?"token-num reverse":"token-num")},[$(e,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:w(()=>{var m,I,t,u,C,l,r,k,h,U,P,N,A,B,T,z,K,G,Q,W,X,Y;return[n("div",Vo,[n("div",null,[n("img",{src:o.fromCoinUrl||("importIcon"in o?o.importIcon:s(v))(`/image/coins/${(I=(m=o.positionInfo)==null?void 0:m.token_a)==null?void 0:I.symbol.toLowerCase()}.png`)},null,8,Ho),n("p",null,i(("showNum"in o?o.showNum:s(O))((t=o.positionInfo)==null?void 0:t.amountA,(C=(u=o.positionInfo)==null?void 0:u.token_a)==null?void 0:C.decimals)),1),n("span",null,i((r=(l=o.positionInfo)==null?void 0:l.token_a)==null?void 0:r.symbol)+" "+i((h=(k=o.positionInfo)==null?void 0:k.token_a)!=null&&h.labels&&((P=(U=o.positionInfo)==null?void 0:U.token_a)!=null&&P.labels[0])?`(${o.positionInfo.token_a.labels[0]})`:""),1)]),n("div",Jo,i(("addCommom"in o?o.addCommom:s(b))(o.positionInfo.fromPercent,0))+"% ",1)]),n("div",zo,[n("div",null,[n("img",{src:o.toCoinUrl||("importIcon"in o?o.importIcon:s(v))(`/image/coins/${(A=(N=o.positionInfo)==null?void 0:N.token_b)==null?void 0:A.symbol.toLowerCase()}.png`)},null,8,Ko),n("p",null,i(("showNum"in o?o.showNum:s(O))((B=o.positionInfo)==null?void 0:B.amountB,(z=(T=o.positionInfo)==null?void 0:T.token_b)==null?void 0:z.decimals)),1),n("span",null,i((G=(K=o.positionInfo)==null?void 0:K.token_b)==null?void 0:G.symbol)+" "+i((W=(Q=o.positionInfo)==null?void 0:Q.token_b)!=null&&W.labels&&((Y=(X=o.positionInfo)==null?void 0:X.token_b)!=null&&Y.labels[0])?`(${o.positionInfo.token_b.labels[0]})`:""),1)]),n("div",Go,i(("addCommom"in o?o.addCommom:s(b))(o.positionInfo.toPercent,0))+"%",1)])]}),_:1},8,["loading"])],2)])])):R("",!0)}const Sn=V(co,[["render",Qo],["__scopeId","data-v-4d3d4b7e"]]),Wo=M({components:{CSwitch:to},props:{positionInfo:{type:Object,default:()=>({})}},setup(o){const f=fo(),g=c(()=>f),y=c(()=>g.value.status),S=q();E(()=>[g.value.targetGroups],t=>{console.log("0327###watch###newTargetGoups###",t)},{immediate:!0});const _=L(!1);E(()=>y.value,t=>{t=="authenticated",_.value=!1},{immediate:!0});const e=L(!1),d=async()=>{e.value=!e.value;const t={pool_address:o.positionInfo.poolAddress,position_index:o.positionInfo.index},u=o.positionInfo.nftHash;await f.subscribePosition(t,u,e.value)},m=t=>{const u=t.sources;e.value=u.some(C=>JSON.parse(C.blockchainAddress).pool_address==o.positionInfo.poolAddress&&Number(JSON.parse(C.blockchainAddress).position_index)==Number(o.positionInfo.index))},I=ro();return console.log(I.currentRoute.value.query.token,"===>rouyter"),E(()=>[g.value.sourceGroups,o.positionInfo],([t,u])=>{var C,l,r;console.log(t,"==>newSourceGroups169"),console.log(u,"===>positionInfo170"),e.value=!1,t&&t.length>0&&t[0]&&u&&!x(u)&&((r=(l=(C=I==null?void 0:I.currentRoute)==null?void 0:C.value)==null?void 0:l.query)==null?void 0:r.token)==(u==null?void 0:u.name)&&(console.log("触发"),console.log(t,"==>newSourceGroups"),console.log(u,"===>positionInfo"),m(t[0]))},{immediate:!0,deep:!0}),{importIcon:v,isShowSetUp:_,changeSwitch:d,checked:e,notifiStatus:y,store:S}}});const Xo=o=>(H("data-v-7a8bd083"),o=o(),J(),o),Yo={class:"range-alerts"},Zo={class:"range-alerts-top"},xo={class:"title"},on=Xo(()=>n("div",{class:"title-all"},[n("span",{class:"Range"},"Range Alerts")],-1)),nn={key:1,class:"h5-switch-box"},en={class:"range-alerts-bottom"},sn={key:0,class:"pc-switch-box"};function tn(o,f,g,y,S,_){const e=eo,d=to;return a(),p("div",Yo,[n("div",Zo,[n("div",xo,[on,o.isShowSetUp||o.notifiStatus!=="authenticated"?(a(),no(e,{key:0,class:"range-alerts-button",onClick:f[0]||(f[0]=mo(m=>o.store.setIsShowNotifi(!0),["stop"]))},{default:w(()=>[D(" Set up ")]),_:1})):R("",!0),!o.isShowSetUp&&o.notifiStatus=="authenticated"?(a(),p("div",nn,[$(d,{checked:o.checked,disabled:o.notifiStatus!=="authenticated",onChange:o.changeSwitch},null,8,["checked","disabled","onChange"])])):R("",!0)])]),n("div",en,[D(" Receive alerts via Telegram, SMS, or email when this position goes out of range. "),!o.isShowSetUp&&o.notifiStatus=="authenticated"?(a(),p("div",sn,[$(d,{checked:o.checked,disabled:o.notifiStatus!=="authenticated",onChange:o.changeSwitch},null,8,["checked","disabled","onChange"])])):R("",!0)])])}const yn=V(Wo,[["render",tn],["__scopeId","data-v-7a8bd083"]]),an=M({components:{Modal:uo},props:{positionInfo:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},needReverse:{type:Boolean,required:!1}},setup(o,f){const{t:g,locale:y}=oo(),S=q(),{copy:_}=S,e=()=>{f.emit("toClaim")},d=Z(),m=c(()=>d),I=c(()=>m.value.tokensObj&&o.positionInfo.token_a.address&&m.value.tokensObj[o.positionInfo.token_a.address]&&m.value.tokensObj[o.positionInfo.token_a.address].logoURI),t=c(()=>m.value.tokensObj&&o.positionInfo.token_b.address&&m.value.tokensObj[o.positionInfo.token_b.address]&&m.value.tokensObj[o.positionInfo.token_b.address].logoURI);return{showNum:O,fromCoinUrl:I,toCoinUrl:t,toClaim:e,t:g,addCommom:b,importIcon:v,store:S,copy:_}}});const ln=o=>(H("data-v-0d5910fb"),o=o(),J(),o),rn=ln(()=>n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),dn={key:0,class:"pc-claim"},mn=["src"],un={key:1,class:"pc-claim"},pn=["src"];function fn(o,f,g,y,S,_){const e=eo,d=po("Modal");return a(),no(d,{visible:!0,class:"claim-fees",centered:"",closable:!0,title:o.$t("modal.claimFees"),width:"400px",footer:null,onCancel:f[0]||(f[0]=m=>o.$emit("onClose"))},{closeIcon:w(()=>[rn]),default:w(()=>[n("div",{class:F(o.needReverse?"claim-container reverse":"claim-container")},[o.positionInfo&&o.positionInfo.token_a.symbol?(a(),p("div",dn,[n("img",{src:o.fromCoinUrl||("importIcon"in o?o.importIcon:s(v))(`/image/coins/${o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,mn),n("span",null,i(("showNum"in o?o.showNum:s(O))(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals))+" "+i(o.positionInfo.token_a.symbol),1)])):R("",!0),o.positionInfo&&o.positionInfo.token_b.symbol?(a(),p("div",un,[n("img",{src:o.toCoinUrl||("importIcon"in o?o.importIcon:s(v))(`/image/coins/${o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,pn),n("span",null,i(("showNum"in o?o.showNum:s(O))(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals))+" "+i(o.positionInfo.token_b.symbol),1)])):R("",!0)],2),$(e,{class:"big-btn claim-btn",disabled:o.isLoading||("addCommom"in o?o.addCommom:s(b))(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals)==0&&("addCommom"in o?o.addCommom:s(b))(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals)==0||o.positionInfo.poolInfo.is_pause,onClick:o.toClaim},{default:w(()=>[D(i(o.$t("common.claim")),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["title"])}const $n=V(an,[["render",fn],["__scopeId","data-v-0d5910fb"]]);export{Sn as _,yn as a,$n as b};
