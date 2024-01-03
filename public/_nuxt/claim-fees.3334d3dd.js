import{_ as co}from"./token-warning.2edcdfe6.js";import{_ as fo}from"./status-block.54961ebd.js";import{u as so,c as io,q,j as Io,a as _,d as P}from"./pool.7c4b57b4.js";import{a as z,y as to,r as L,l as b,e as H,s as ao,o as d,f as m,h as e,i as I,w as O,t as $,v as i,x as w,A as F,u,M as ko,p as J,k as Q,q as M,b as ho,c as lo,j as V,z as go,B as ro,a1 as vo,$ as bo,Q as _o}from"./entry.234eaa43.js";/* empty css              */import{i as j}from"./import-icon.de3e6c66.js";import{u as W}from"./sha256.405fa579.js";import{_ as uo}from"./icon-arrow_2x.948aedb2.js";import{_ as mo}from"./icon-arrow_2x.4ffddb8e.js";/* empty css              */import{u as Co}from"./notifi.a3f8f88a.js";const So=z({props:{positionInfo:{type:Object,required:!0,default:()=>({})}},setup(o){const{t:p}=to();let C=L(!1),U=L(!0);const k=W(),S=so(),n=b(()=>S);console.log(o.positionInfo,"===>props.positionInfo");const l=b(()=>{var t,r,g,v,R,N,B,T;if(io(o.positionInfo))return" --";{const E=o.positionInfo.amountA*((r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_a.address])==null?void 0:r.price),D=o.positionInfo.amountB*((v=n.value.RATES[(g=o.positionInfo)==null?void 0:g.token_b.address])==null?void 0:v.price);return(N=n.value.RATES[(R=o.positionInfo)==null?void 0:R.token_a.address])!=null&&N.price&&((T=n.value.RATES[(B=o.positionInfo)==null?void 0:B.token_b.address])!=null&&T.price)?E+D:" --"}}),h=b(()=>{var t,r,g,v;return(r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_a.name.toUpperCase()])!=null&&r.price&&l.value!=="--"?(o.positionInfo.amountA*((v=n.value.RATES[(g=o.positionInfo)==null?void 0:g.token_a.name.toUpperCase()])==null?void 0:v.price)/l.value*100).toFixed(0):" --"}),c=b(()=>{var t,r,g,v;return(r=n.value.RATES[(t=o.positionInfo)==null?void 0:t.token_b.name.toUpperCase()])!=null&&r.price&&l.value!=="--"?(o.positionInfo.amountB*((v=n.value.RATES[(g=o.positionInfo)==null?void 0:g.token_b.name.toUpperCase()])==null?void 0:v.price)/l.value*100).toFixed(0):" --"}),s=b(()=>n.value.allTokenObj&&o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.address&&n.value.allTokenObj[o.positionInfo.token_a.address]&&n.value.allTokenObj[o.positionInfo.token_a.address].logoURI),a=b(()=>n.value.allTokenObj&&o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.address&&n.value.allTokenObj[o.positionInfo.token_b.address]&&n.value.allTokenObj[o.positionInfo.token_b.address].logoURI),f=b(()=>{var t,r;return(r=(t=o.positionInfo)==null?void 0:t.poolInfo)==null?void 0:r.needReverse}),y=t=>{var r;return(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((r=n.value.tokensObj[t==null?void 0:t.address])==null?void 0:r.logo_url)||(k.theme==="default"?j("/image/coins/unknown.png"):j("/image/coins/sui-unknown.png"))};return{tokensObj:b(()=>n.value.tokensObj),fromPercent:c,toPercent:h,amountUSD:l,showNum:q,t:p,importIcon:j,indexStore:k,rateChange:U,decimalFormat:Io,fromCoinUrl:s,toCoinUrl:a,pools:n,addCommom:_,isPc:C,needReverse:f,getCoinIcon:y,decimalUi:P}}});const po=o=>(J("data-v-27ab0699"),o=o(),Q(),o),yo={key:0,class:"position-card"},wo={key:0,class:"coin-pair"},Uo={class:"coin-a"},$o={class:"coin-b"},Oo={key:1,class:"coin-pair"},Ro={class:"coin-a"},Po={key:0,class:"token-warning"},jo={class:"coin-b"},Ao={key:0,class:"token-warning"},No={class:"fee"},Bo={class:"right"},To={key:0,class:"status"},Eo={class:"min-and-max"},Do={key:0},qo={class:"text"},Lo={key:0,src:uo,alt:""},Mo={key:1,src:mo,alt:""},Fo={class:"text"},Vo={key:1},zo={class:"text"},Ho={key:0,src:uo,alt:""},Jo={key:1,src:mo,alt:""},Qo={class:"text"},Wo=po(()=>e("div",null,[e("svg",{class:"icon icon-up","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Go=po(()=>e("div",null,[e("svg",{class:"icon icon-down","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Ko=[Wo,Go],Xo={class:"liquidity"},Yo={class:"label"},Zo={class:"value"},xo={class:"item"},oe={class:"rate"},ee={class:"item"},ne={class:"rate"};function se(o,p,C,U,k,S){const n=co,l=ko,h=fo,c=ao("image");return o.positionInfo?(d(),m("div",yo,[e("div",{class:F(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[I(l,{class:"left-skeleton",loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>{var s,a,f,y;return[o.needReverse?(d(),m("div",Oo,[e("div",null,[e("div",Ro,[$(e("img",null,null,512),[[c,o.toCoinUrl||o.getCoinIcon(o.positionInfo.token_b)]]),o.tokensObj&&o.tokensObj[o.positionInfo.token_b.address]&&o.tokensObj[o.positionInfo.token_b.address].isSelfBuilt?(d(),m("div",Po)):w("",!0)]),e("div",jo,[$(e("img",null,null,512),[[c,o.fromCoinUrl||o.getCoinIcon(o.positionInfo.token_a)]]),o.tokensObj&&o.tokensObj[o.positionInfo.token_a.address]&&o.tokensObj[o.positionInfo.token_a.address].isSelfBuilt?(d(),m("div",Ao)):w("",!0)])]),e("span",null,i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(d(),m("div",wo,[e("div",null,[e("div",Uo,[$(e("img",null,null,512),[[c,o.fromCoinUrl||o.getCoinIcon(o.positionInfo.token_a)]]),I(n,{address:(a=(s=o.positionInfo)==null?void 0:s.token_a)==null?void 0:a.address,"style-params":{width:"16px",height:"16px",left:"25px",bottom:"10px"}},null,8,["address"])]),e("div",$o,[$(e("img",null,null,512),[[c,o.toCoinUrl||o.getCoinIcon(o.positionInfo.token_b)]]),I(n,{address:(y=(f=o.positionInfo)==null?void 0:f.token_b)==null?void 0:y.address,"style-params":{width:"16px",height:"16px",left:"25px",bottom:"10px"}},null,8,["address"])])]),e("span",null,i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" - "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),e("div",No,i(o.$t("common.fee"))+" "+i(o.positionInfo.fee*100)+"% ",1)]}),_:1},8,["loading"])],2),e("div",Bo,[o.pools.currentPositionLoading?w("",!0):(d(),m("div",To,[I(h,{"current-status":o.positionInfo.currentStatus||"","block-name":"detail"},null,8,["current-status"])])),I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>[e("div",Eo,[(o.needReverse?!o.rateChange:o.rateChange)?(d(),m("div",Do,[e("div",qo,i(("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(P))(String(o.positionInfo.minPrice),6))),1),o.indexStore.theme=="default"?(d(),m("img",Lo)):(d(),m("img",Mo)),e("div",Fo,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(P))(String(o.positionInfo.maxPrice),6)))+" "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(d(),m("div",Vo,[e("div",zo,i(("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(P))(String(1/Number(o.positionInfo.maxPrice)),6))),1),o.indexStore.theme=="default"?(d(),m("img",Ho)):(d(),m("img",Jo)),e("div",Qo,i(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("∞")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"∞":("addCommom"in o?o.addCommom:u(_))(("decimalUi"in o?o.decimalUi:u(P))(String(1/Number(o.positionInfo.minPrice)),6)))+" "+i(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" per "+i(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),e("div",{class:"icon-change",onClick:p[0]||(p[0]=s=>o.rateChange=!o.rateChange)},Ko)])]),_:1},8,["loading"]),e("div",Xo,[I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>[e("div",Yo,i(o.$t("common.liquidity")),1),e("div",Zo," $"+i(o.amountUSD=="--"?"--":Number(o.amountUSD)==0?0:Number(o.amountUSD)<.01?"<0.01":("addCommom"in o?o.addCommom:u(_))(o.amountUSD,2)),1)]),_:1},8,["loading"])]),e("div",{class:F(o.needReverse?"token-num reverse":"token-num")},[I(l,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:O(()=>{var s,a,f,y,A,t,r,g,v,R,N,B,T,E,D,G,K,X,Y,Z,x,oo,eo,no;return[e("div",xo,[e("div",null,[$(e("img",null,null,512),[[c,o.fromCoinUrl||o.getCoinIcon((s=o.positionInfo)==null?void 0:s.token_a)]]),I(n,{address:(f=(a=o.positionInfo)==null?void 0:a.token_a)==null?void 0:f.address,"style-params":{width:"12px",height:"12px",left:"15px",bottom:"0px"}},null,8,["address"]),e("p",null,i(("decimalUi"in o?o.decimalUi:u(P))((y=o.positionInfo)==null?void 0:y.amountA,(t=(A=o.positionInfo)==null?void 0:A.token_a)==null?void 0:t.decimals)),1),e("span",null,i((g=(r=o.positionInfo)==null?void 0:r.token_a)==null?void 0:g.symbol)+" "+i((R=(v=o.positionInfo)==null?void 0:v.token_a)!=null&&R.labels&&((B=(N=o.positionInfo)==null?void 0:N.token_a)!=null&&B.labels[0])?`(${o.positionInfo.token_a.labels[0]})`:""),1)]),e("div",oe,i(("addCommom"in o?o.addCommom:u(_))(o.positionInfo.fromPercent,0))+"% ",1)]),e("div",ee,[e("div",null,[$(e("img",null,null,512),[[c,o.toCoinUrl||o.getCoinIcon((T=o.positionInfo)==null?void 0:T.token_b)]]),I(n,{address:(D=(E=o.positionInfo)==null?void 0:E.token_b)==null?void 0:D.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"]),e("p",null,i(("decimalUi"in o?o.decimalUi:u(P))((G=o.positionInfo)==null?void 0:G.amountB,(X=(K=o.positionInfo)==null?void 0:K.token_b)==null?void 0:X.decimals)),1),e("span",null,i((Z=(Y=o.positionInfo)==null?void 0:Y.token_b)==null?void 0:Z.symbol)+" "+i((oo=(x=o.positionInfo)==null?void 0:x.token_b)!=null&&oo.labels&&((no=(eo=o.positionInfo)==null?void 0:eo.token_b)!=null&&no.labels[0])?`(${o.positionInfo.token_b.labels[0]})`:""),1)]),e("div",ne,i(("addCommom"in o?o.addCommom:u(_))(o.positionInfo.toPercent,0))+"%",1)])]}),_:1},8,["loading"])],2)])])):w("",!0)}const je=H(So,[["render",se],["__scopeId","data-v-27ab0699"]]),ie=z({props:{positionInfo:{type:Object,default:()=>({})}},setup(o){const p=Co(),C=b(()=>p),U=b(()=>C.value.status),k=W();M(()=>[C.value.targetGroups],s=>{console.log("0327###watch###newTargetGoups###",s)},{immediate:!0});const S=L(!1);M(()=>U.value,s=>{s=="authenticated",S.value=!1},{immediate:!0});const n=L(!1),l=async()=>{n.value=!n.value,console.log(n.value,"===>checked.value");const s={pool_address:o.positionInfo.poolAddress,position_index:o.positionInfo.index},a=o.positionInfo.nftHash;console.log("0529###changeSwitch###positionInfo####",o.positionInfo);try{await p.subscribePosition(s,a,n.value)}catch{n.value=!n.value}},h=s=>{const a=s.sources;n.value=a.some(f=>JSON.parse(f.blockchainAddress).pool_address==o.positionInfo.poolAddress&&Number(JSON.parse(f.blockchainAddress).position_index)==Number(o.positionInfo.index))},c=ho();return console.log(c.currentRoute.value.query.token,"===>rouyter"),M(()=>[C.value.sourceGroups,o.positionInfo],([s,a])=>{var f,y,A;console.log(s,"==>newSourceGroups169"),console.log(a,"===>positionInfo170"),n.value=!1,s&&s.length>0&&s[0]&&a&&!io(a)&&((A=(y=(f=c==null?void 0:c.currentRoute)==null?void 0:f.value)==null?void 0:y.query)==null?void 0:A.token)==(a==null?void 0:a.name)&&(console.log("触发"),console.log(s,"==>newSourceGroups"),console.log(a,"===>positionInfo"),h(s[0]))},{immediate:!0,deep:!0}),{importIcon:j,isShowSetUp:S,changeSwitch:l,checked:n,notifiStatus:U,store:k}}});const te=o=>(J("data-v-08b2ff1d"),o=o(),Q(),o),ae={class:"range-alerts"},le={class:"range-alerts-top"},de={class:"title"},re=te(()=>e("div",{class:"title-all"},[e("span",{class:"Range"},"Range Alerts")],-1)),ue={key:1,class:"h5-switch-box"},me={class:"range-alerts-bottom"},pe={key:0,class:"pc-switch-box"};function ce(o,p,C,U,k,S){const n=ro,l=vo;return d(),m("div",ae,[e("div",le,[e("div",de,[re,o.isShowSetUp||o.notifiStatus!=="authenticated"?(d(),lo(n,{key:0,class:"range-alerts-button",onClick:p[0]||(p[0]=go(h=>o.store.setIsShowNotifi(!0),["stop"]))},{default:O(()=>[V(" Set up ")]),_:1})):w("",!0),!o.isShowSetUp&&o.notifiStatus=="authenticated"?(d(),m("div",ue,[I(l,{class:"range-alerts-switch",checked:o.checked,disabled:o.notifiStatus!=="authenticated",onChange:o.changeSwitch},null,8,["checked","disabled","onChange"])])):w("",!0)])]),e("div",me,[V(" Receive alerts via Telegram, SMS, or email when this position goes out of range. "),!o.isShowSetUp&&o.notifiStatus=="authenticated"?(d(),m("div",pe,[I(l,{class:"range-alerts-switch",checked:o.checked,disabled:o.notifiStatus!=="authenticated",onChange:o.changeSwitch},null,8,["checked","disabled","onChange"])])):w("",!0)])])}const Ae=H(ie,[["render",ce],["__scopeId","data-v-08b2ff1d"]]),fe=z({components:{Modal:bo},props:{positionInfo:{type:Object,required:!0},isLoading:{type:Boolean,required:!0},needReverse:{type:Boolean,required:!1}},setup(o,p){const{t:C,locale:U}=to(),k=W(),{copy:S}=k,n=()=>{p.emit("toClaim")},l=so(),h=b(()=>l);return{showNum:q,toClaim:n,t:C,addCommom:_,importIcon:j,store:k,copy:S,getCoinIcon:s=>{var a;return(s==null?void 0:s.logoURI)||(s==null?void 0:s.logo_url)||((a=h.value.tokensObj[s==null?void 0:s.address])==null?void 0:a.logo_url)||(k.theme==="default"?j("/image/coins/unknown.png"):j("/image/coins/sui-unknown.png"))}}}});const Ie=o=>(J("data-v-aee0080d"),o=o(),Q(),o),ke=Ie(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),he={key:0,class:"pc-claim"},ge={key:1,class:"pc-claim"};function ve(o,p,C,U,k,S){const n=ro,l=_o("Modal"),h=ao("image");return d(),lo(l,{visible:!0,class:"claim-fees",centered:"",closable:!0,title:o.$t("modal.claimFees"),width:"400px",footer:null,onCancel:p[0]||(p[0]=c=>o.$emit("onClose"))},{closeIcon:O(()=>[ke]),default:O(()=>[e("div",{class:F(o.needReverse?"claim-container reverse":"claim-container")},[o.positionInfo&&o.positionInfo.token_a.symbol?(d(),m("div",he,[$(e("img",null,null,512),[[h,o.getCoinIcon(o.positionInfo.token_a)]]),e("span",null,i(("showNum"in o?o.showNum:u(q))(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals))+" "+i(o.positionInfo.token_a.symbol),1)])):w("",!0),o.positionInfo&&o.positionInfo.token_b.symbol?(d(),m("div",ge,[$(e("img",null,null,512),[[h,o.getCoinIcon(o.positionInfo.token_b)]]),e("span",null,i(("showNum"in o?o.showNum:u(q))(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals))+" "+i(o.positionInfo.token_b.symbol),1)])):w("",!0)],2),I(n,{class:"big-btn claim-btn",disabled:o.isLoading||("addCommom"in o?o.addCommom:u(_))(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals)==0&&("addCommom"in o?o.addCommom:u(_))(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals)==0||o.positionInfo.poolInfo.is_pause,onClick:o.toClaim},{default:O(()=>[V(i(o.$t("common.claim")),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["title"])}const Ne=H(fe,[["render",ve],["__scopeId","data-v-aee0080d"]]);export{je as _,Ae as a,Ne as b};
