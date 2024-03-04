import{_ as he}from"./back.a58d5ddc.js";import{_ as ge}from"./apr-tips.2bb69a9f.js";import{_ as be}from"./upgrade-loading.012a64c8.js";import{_ as we}from"./token-warning.938a4923.js";import{i as C}from"./import-icon.de3e6c66.js";import{u as ke,s as Z,a as F,d as E,L as fe,c as V,k as X,p as re,q as oe}from"./pool.801b6dc0.js";import{a as me,y as ye,l as U,b as Te,r as L,H as Ae,q as Y,e as Ne,s as Oe,o as a,f as n,h as r,v as t,i as f,j as O,z as q,A as y,F as M,E as G,x as b,a3 as Ce,t as J,u,w as ae,p as je,k as Se,B as $e}from"./entry.4af10731.js";/* empty css              */import{u as Pe}from"./sha256.6473538a.js";import{p as Le}from"./precision.a7a6c57b.js";const Fe=me({props:{isAll:{type:Boolean,default:!1}},setup(){const e=ke(),{t:v,locale:ne}=ye(),_=U(()=>e),x=U(()=>(console.log(_.value.allTokenObj,"===>pools.value.allTokenObj"),_.value.allTokenObj||{})),ee=U(()=>(console.log(_.value.tokensObj,"===>pools.value.tokensObj"),_.value.tokensObj||{})),K=Pe(),m=U(()=>K),z=Te(),S=L(1),$=L("vol"),R=L("desc");let T=L(!1);Ae(()=>{const o=document.body.clientWidth;o<750?T.value=!1:T.value=!0,window.onresize=()=>{o<750?T.value=!1:T.value=!0}});let s=L(null);const h=U(()=>Array.from(m.value.topPoolsList).sort((o,d)=>Number(d.vol_in_usd_24h)-Number(o.vol_in_usd_24h))),D=L(!1),I=L("Volume (24H)"),A=L(["TVL","Volume (24H)","APR","Fees (24h)"]),w=U(()=>m.value.chainName);Y(()=>w.value,o=>{o=="Sui"?A.value=["TVL","Volume (24H)","APR","Fees (24h)"]:A.value=["TVL","Volume (24H)","APR"]},{immediate:!0});const se=o=>{console.log(o,w.value,h.value,"6243column");const d=Array.from(h.value).sort((l,i)=>{if(o==$.value)if(R.value=="desc"){if(o=="tvl")return Number(i.tvl_in_usd)-Number(l.tvl_in_usd);if(o=="vol")return Number(i.vol_in_usd_24h)-Number(l.vol_in_usd_24h);if(o=="fees")return Number(i.fee_24_h)-Number(l.fee_24_h);if(o=="apr"&&w.value=="Sui")return Number(i.total_apr)-Number(l.total_apr);if(o=="apr"&&w.value=="Aptos")return Number(i.aprNum)-Number(l.aprNum)}else{if(o=="tvl")return Number(l.tvl_in_usd)-Number(i.tvl_in_usd);if(o=="vol")return Number(l.vol_in_usd_24h)-Number(i.vol_in_usd_24h);if(o=="fees")return Number(l.fee_24_h)-Number(i.fee_24_h);if(o=="apr"&&w.value=="Sui")return Number(l.total_apr)-Number(i.total_apr);if(o=="apr"&&w.value=="Aptos")return Number(l.aprNum)-Number(i.aprNum)}else{if(o=="tvl")return Number(l.tvl_in_usd)-Number(i.tvl_in_usd);if(o=="vol")return Number(l.vol_in_usd_24h)-Number(i.vol_in_usd_24h);if(o=="fees")return Number(l.fee_24_h)-Number(i.fee_24_h);if(o=="apr"&&w.value=="Sui")return Number(l.total_apr)-Number(i.total_apr);if(o=="apr"&&w.value=="Aptos")return Number(l.aprNum)-Number(i.aprNum)}});if(d.length<10)s.value=d.slice(0,10);else{const l=S.value*10;s.value=d.slice(l-10,l)}console.log(s.value,"currentTopPoolsList.valuecurrentTopPoolsList.value")},le=o=>{console.log(o,w.value,$.value,R.value,h.value," currentSortOrder.value"),o==$.value?R.value=R.value=="desc"?"asc":"desc":($.value=o,R.value="desc"),se(o)},Q=(o,d)=>{console.log(o,"page"),S.value=o,h.value&&h.value.length>0&&se($.value)};Y(h,o=>{T.value,Q(S.value)},{immediate:!0});const de=o=>{var d,l,i,W,c,p;if(m.value.theme=="sui"){const B=o.needReverse?((l=_.value.tokensObj[o.token_b_address])==null?void 0:l.labels)||[]:((d=_.value.tokensObj[o.token_a_address])==null?void 0:d.labels)||[],N=o.needReverse?((i=_.value.tokensObj[o.token_a_address])==null?void 0:i.labels)||[]:((W=_.value.tokensObj[o.token_b_address])==null?void 0:W.labels)||[],k=B.concat(N);return[...new Set(k)]}else{const B=((c=_.value.tokensObj[o.token_a_address])==null?void 0:c.labels)||[],N=((p=_.value.tokensObj[o.token_b_address])==null?void 0:p.labels)||[],k=B.concat(N);return[...new Set(k)]}},te=o=>{if(!V(o)&&!V(_.value.addressLpTokens)&&!V(_.value.tokensObj)){const d=_.value.addressLpTokens[o.swap_account];return console.log("0419###stats###poolInfo###",d),d==null?void 0:d.is_display_rewarder}else return!1},ue=(o,d)=>o&&d?Le.plus(X(o),X(d)):o>0&&o<.01?"<0.01":0,ie=o=>{let d=0;return o&&o.forEach(l=>{console.log(l,"===>ele"),l.rewarder_display&&(d+=X(String(l.rewarders)))}),String(d)},pe=()=>{z&&z.push("/stats-pools")},H=L({});Y(()=>[_.value.poolConfigObj,_.value.tokensObj,m.value.topPoolsList,m.value.chainName,_.value.addressLpTokens],([o,d,l,i,W])=>{i=="Sui"?o&&!V(o)&&l&&l.length>0&&d&&!V(d)&&(l.forEach(c=>{var N;const p=o[c.swap_account],B=(N=p==null?void 0:p.rewarderInfo)==null?void 0:N.map((k,g)=>{const P=d[k.coinAddress];return{...k,emissionsEveryDay:re(k.emissionsEveryDay,P==null?void 0:P.decimals),rewarder_display:p[`rewarder_display${g+1}`],rewarders:c.rewarder_apr[g]&&c.rewarder_apr[g].replace("%",""),logoUrl:P==null?void 0:P.logo_url,symbol:P==null?void 0:P.symbol,rewarderApr:c.rewarder_apr[g]&&c.rewarder_apr[g].replace("%","")}});console.log(p,"poolInfo===>"),p!=null&&p.is_display_rewarder&&(H.value={...H.value,[c.swap_account]:B})}),console.log(H.value,"rewardObj.value")):o&&!V(o)&&l&&l.length>0&&d&&!V(d)&&W&&!V(W)&&(l.forEach(c=>{console.log(c,"ele===>");const p=W[c.swap_account];if(console.log(p,"===>poolInfo"),p){const B=p.rewarder_infos.map((N,k)=>{console.log(N,"===>reward");const g=d[N.coinAddress];return{...N,emissionsEveryDay:re(N.emissionsEveryDay,g==null?void 0:g.decimals),rewarder_display:p[`rewarder_display${k+1}`],rewarders:oe(c.rewarder_apr[k]&&c.rewarder_apr[k].replace("%",""),2),logoUrl:g==null?void 0:g.logo_url,symbol:g==null?void 0:g.symbol,rewarderApr:oe(c.rewarder_apr[k]&&c.rewarder_apr[k].replace("%",""),2)}});console.log(p,"poolInfo===>"),p!=null&&p.is_display_rewarder&&(H.value={...H.value,[c.swap_account]:B})}}),console.log(H.value,"rewardObj.value"))},{immediate:!0,deep:!0});const _e=o=>{var d;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((d=_.value.tokensObj[o==null?void 0:o.address])==null?void 0:d.logo_url)||(m.value.theme==="default"?C("/image/coins/unknown.png"):C("/image/coins/sui-unknown.png"))},ce=U(()=>m.value.theme),ve=U(()=>_.value.tokensWarningObj);return{sFixD:Z,currentSortColumn:$,currentSortOrder:R,sortTable:le,tokensWarningObj:ve,theme:ce,getCoinIcon:_e,addCommom:F,store:m,importIcon:C,topPoolsList:h,addressTokens:x,currentPools:S,onChangePools:Q,currentTopPoolsList:s,router:z,isPc:T,getAprTotal:ue,getRewarderApr:ie,toPoolsList:pe,select:D,selectValue:I,selectList:A,getLabel:de,tokensObj:ee,rewardDisplay:te,rewardObj:H,t:v,decimalUi:E,chainName:w,formatNumberAddCommom:fe}}});const j=e=>(je("data-v-95dcf94d"),e=e(),Se(),e),Re={key:0,class:"title"},Ve={key:1,class:"title view-all-title"},Ue={class:"sort-by"},De=j(()=>r("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ie=[De],He=j(()=>r("use",{"xlink:href":"#icon-icon_on"},null,-1)),Be=[He],Ee={key:0,class:"select-item"},ze=["onClick"],We=j(()=>r("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),qe=[We],Me={class:"table-contianer"},Ge={class:"pools-table"},Je={class:"table-header"},Ke=j(()=>r("th",null,"Pools",-1)),Qe=j(()=>r("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Xe=[Qe],Ye=j(()=>r("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ze=[Ye],xe={key:0},es=j(()=>r("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),ss=[es],rs=j(()=>r("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),os=[rs],as={class:"apr-hover-content"},ns=j(()=>r("th",null,null,-1)),ls={class:"table-body"},ds={key:0},ts={colspan:"6"},us={class:"upgrade-loading"},is={class:"token"},ps=["onerror"],_s=["onerror"],cs={class:"name"},vs={class:"token-name"},hs={class:"fee-tier-top"},gs={class:"label-all"},bs={key:0},ws={class:"tvl"},ks={class:"volume-hour"},fs={key:0},ms={class:"fees-24h"},ys=j(()=>r("br",null,null,-1)),Ts={key:0,class:"farming-apr"},As={key:1,class:"apr-hover-content"},Ns={class:"btn-box"},Os={class:"h5-item-container"},Cs={key:0,class:"upgrade-loading"},js={class:"top"},Ss={class:"token"},$s=["onerror"],Ps=["onerror"],Ls={class:"name"},Fs={class:"token-name"},Rs={class:"label-all"},Vs={key:0},Us={class:"fee-tier-hint"},Ds={class:"middle"},Is={class:"item-pools"},Hs={class:"item-pools"},Bs={key:0,class:"item-pools"},Es=j(()=>r("span",null,"Fees (24h)",-1)),zs={key:0,class:"farming-apr"},Ws={key:0,class:"apr-hover-content"},qs={class:"bottom"},Ms={class:"panation"};function Gs(e,v,ne,_,x,ee){const K=he,m=ge,z=be,S=we,$=$e,R=Ce,T=Oe("image");return a(),n("div",{class:y(["top-pools-new-table",e.isAll?"top-pools-new-table-all":""])},[e.isAll?(a(),n("div",Ve,[f(K),O(" Pools ")])):(a(),n("div",Re,[r("div",null,t(e.$t("common.topPools")),1),r("div",{class:"view-all",onClick:v[0]||(v[0]=(...s)=>e.toPoolsList&&e.toPoolsList(...s))},t(e.$t("newAdd.viewAll"))+"   > ",1)])),r("div",Ue,[r("div",null,t(e.$t("newAdd.sortBy")),1),r("div",{class:"search-select",onClick:v[1]||(v[1]=q(s=>e.select=!e.select,["stop"]))},[r("div",null,[O(t(e.selectValue)+" ",1),(a(),n("svg",{"aria-hidden":"true",class:y(["pools-icon",e.currentSortOrder=="desc"?"desc-svg":"asc-svg"])},Ie,2))]),(a(),n("svg",{"aria-hidden":"true",class:y(e.select?"show-icon icon":"icon")},Be,2))]),e.select?(a(),n("div",Ee,[(a(!0),n(M,null,G(e.selectList,(s,h)=>(a(),n("div",{key:h,class:"select-menu-item",onClick:q(()=>{e.select=!1,e.selectValue=s,e.sortTable(s=="TVL"?"tvl":s=="Volume (24H) "?"vol":s=="APR"?"apr":"fees")},["stop"])},[O(t(s)+" ",1),(a(),n("svg",{"aria-hidden":"true",class:y(["pools-icon",e.currentSortColumn=="tvl"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},qe,2))],8,ze))),128))])):b("",!0)]),r("div",Me,[r("table",Ge,[r("thead",Je,[r("tr",null,[Ke,r("th",null,[r("span",{onClick:v[2]||(v[2]=q(s=>e.sortTable("tvl"),["stop"]))},[O(" TVL "),(a(),n("svg",{"aria-hidden":"true",class:y(["pools-icon",e.currentSortColumn=="tvl"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},Xe,2))])]),r("th",null,[r("span",{onClick:v[3]||(v[3]=q(s=>e.sortTable("vol"),["stop"]))},[O(" Volume (24H) "),(a(),n("svg",{"aria-hidden":"true",class:y(["pools-icon",e.currentSortColumn=="vol"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},Ze,2))])]),e.chainName=="Sui"?(a(),n("th",xe,[r("span",{onClick:v[4]||(v[4]=q(s=>e.sortTable("fees"),["stop"]))},[O(" Fees (24H) "),(a(),n("svg",{"aria-hidden":"true",class:y(["pools-icon",e.currentSortColumn=="fees"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},ss,2))])])):b("",!0),r("th",null,[r("span",{class:"hover-box",onClick:v[5]||(v[5]=q(s=>e.sortTable("apr"),["stop"]))},[O(" APR "),(a(),n("svg",{"aria-hidden":"true",class:y(["pools-icon",e.currentSortColumn=="apr"?e.currentSortOrder=="desc"?"desc-svg active-svg":"asc-svg active-svg":""])},os,2)),r("div",as,[f(m,{class:"noHover apr-hover-con"})])])]),ns])]),r("tbody",ls,[e.currentTopPoolsList?b("",!0):(a(),n("tr",ds,[r("td",ts,[r("div",us,[f(z,{loading:!0,type:"statsPools"})])])])),(a(!0),n(M,null,G(e.currentTopPoolsList,s=>{var h,D,I;return a(),n("tr",{key:s.swap_account},[r("td",null,[r("div",is,[r("div",null,[s!=null&&s.token_a_address?J((a(),n("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:u(C))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:u(C))("/image/coins/sui-unknown.png")},null,8,ps)),[[T,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address])]]):b("",!0),f(S,{address:s.is_forward?s.token_a_address:s.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",null,[s!=null&&s.token_b_address?J((a(),n("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:u(C))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:u(C))("/image/coins/sui-unknown.png")},null,8,_s)),[[T,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address])]]):b("",!0),f(S,{address:s.is_forward?s.token_b_address:s.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",cs,[r("p",vs,t(e.theme=="sui"?s.is_forward!==!1?s.token_a_reserves:s.token_b_reserves:s.token_a_reserves)+" - "+t(e.theme=="sui"?s.is_forward!==!1?s.token_b_reserves:s.token_a_reserves:s.token_b_reserves),1),r("div",hs,t((s==null?void 0:s.fee)*100)+"%",1),r("div",gs,[(a(!0),n(M,null,G(e.getLabel(s),(A,w)=>(a(),n("div",{key:w,class:y(["label",A])},[A!=="Native"?(a(),n("span",bs,t(A),1)):b("",!0)],2))),128))])])])]),r("td",null,[r("div",ws,t(s.tvl_in_usd>0&&s.tvl_in_usd<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:u(F))(("decimalUi"in e?e.decimalUi:u(E))(s.tvl_in_usd,2),2)}`),1)]),r("td",null,[r("div",ks,t(s.vol_in_usd_24h>0&&s.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:u(F))(("decimalUi"in e?e.decimalUi:u(E))(s.vol_in_usd_24h,2),2)}`),1)]),e.chainName=="Sui"?(a(),n("td",fs,[r("div",ms,t(s.fee_24_h>0&&s.fee_24_h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:u(F))(("decimalUi"in e?e.decimalUi:u(E))(s.fee_24_h,2),2)}`),1)])):b("",!0),r("td",null,[r("div",{class:y(["apr",e.theme=="sui"&&s.isStableFarming||e.rewardObj&&((h=e.rewardObj[s.swap_account])==null?void 0:h.length)>0?"apr-mark":""])},[O(t(e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account]))>0&&e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account]))<.01?"<0.01":e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account]))==0?0:("sFixD"in e?e.sFixD:u(Z))(e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account])),2))+"% ",1),ys,(D=s==null?void 0:s.stable_farming)!=null&&D.stable_farming_pool?(a(),n("i",Ts,t(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:u(F))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):b("",!0),e.theme=="sui"&&s.isStableFarming||e.rewardObj&&((I=e.rewardObj[s.swap_account])==null?void 0:I.length)>0&&e.rewardObj&&e.rewardObj[s.swap_account]?(a(),n("div",As,[f(m,{class:"noHover apr-hover-con","l-item":{apr:s.apr_7day&&s.apr_7day.replace("%",""),aprTotal:e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account])),is_display_rewarder:e.rewardObj&&e.rewardObj[s.swap_account],rewarder_apr:e.getRewarderApr(e.rewardObj[s.swap_account]),isStableFarming:s.isStableFarming,stableFarmingApr:s.stableFarmingApr},"rewarder-info":e.rewardObj&&e.rewardObj[s.swap_account]},null,8,["l-item","rewarder-info"])])):b("",!0)],2)]),r("td",null,[r("div",Ns,[f($,{class:"cancel-btn",onClick:()=>e.router.push(`/liquidity/deposit?poolAddress=${s==null?void 0:s.swap_account}`)},{default:ae(()=>[O(t(e.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])])}),128))])])]),r("div",Os,[e.currentTopPoolsList?(a(!0),n(M,{key:1},G(e.currentTopPoolsList,s=>{var h,D,I;return a(),n("div",{key:s.swap_account,class:"item h5-item"},[r("div",js,[r("div",Ss,[r("div",null,[s!=null&&s.token_a_address?J((a(),n("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:u(C))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:u(C))("/image/coins/sui-unknown.png")},null,8,$s)),[[T,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address])]]):b("",!0),f(S,{address:s.is_forward?s.token_a_address:s.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",null,[s!=null&&s.token_b_address?J((a(),n("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:u(C))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:u(C))("/image/coins/sui-unknown.png")},null,8,Ps)),[[T,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address])]]):b("",!0),f(S,{address:s.is_forward?s.token_b_address:s.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),r("div",Ls,[r("p",Fs,t(e.theme=="sui"?s.is_forward!==!1?s.token_a_reserves:s.token_b_reserves:s.token_a_reserves)+" - "+t(e.theme=="sui"?s.is_forward!==!1?s.token_b_reserves:s.token_a_reserves:s.token_b_reserves),1),r("div",Rs,[(a(!0),n(M,null,G(e.getLabel(s),(A,w)=>(a(),n("div",{key:w,class:y(["label",A])},[A!=="Native"?(a(),n("span",Vs,t(A),1)):b("",!0)],2))),128))])])]),r("div",Us,t((s==null?void 0:s.fee)*100)+"%",1)]),r("div",Ds,[r("div",Is,[r("span",null,t(e.$t("common.tvl")),1),r("p",null,t(s.tvl_in_usd>0&&s.tvl_in_usd<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:u(F))(("decimalUi"in e?e.decimalUi:u(E))(s.tvl_in_usd,2),2)}`),1)]),r("div",Hs,[r("span",null,t(e.$t("common.volume24h")),1),r("p",null,t(s.vol_in_usd_24h>0&&s.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:u(F))(("decimalUi"in e?e.decimalUi:u(E))(s.vol_in_usd_24h,2),2)}`),1)]),e.chainName=="Sui"?(a(),n("div",Bs,[Es,r("p",null,t(s.fee_24_h>0&&s.fee_24_h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:u(F))(("decimalUi"in e?e.decimalUi:u(E))(s.fee_24_h,2),2)}`),1)])):b("",!0),r("div",{class:y(["item-pools",e.theme=="sui"&&s.isStableFarming||e.rewardObj&&((h=e.rewardObj[s.swap_account])==null?void 0:h.length)>0?"":"apr-mark-h5"])},[r("span",null,t(e.$t("common.apr")),1),r("p",null,[O(t(e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account]))>0&&e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account]))<.01?"<0.01":e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account]))==0?0:("sFixD"in e?e.sFixD:u(Z))(e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account])),2))+"% ",1),(D=s==null?void 0:s.stable_farming)!=null&&D.stable_farming_pool?(a(),n("i",zs,t(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:u(F))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):b("",!0)]),e.theme=="sui"&&s.isStableFarming||e.rewardObj&&((I=e.rewardObj[s.swap_account])==null?void 0:I.length)>0&&e.rewardObj&&e.rewardObj[s.swap_account]?(a(),n("div",Ws,[f(m,{class:"noHover apr-hover-con","l-item":{apr:s.apr_7day&&s.apr_7day.replace("%",""),aprTotal:e.getAprTotal(s.apr_7day,e.getRewarderApr(e.rewardObj[s.swap_account])),is_display_rewarder:e.rewardDisplay(s),rewarder_apr:e.getRewarderApr(e.rewardObj[s.swap_account]),isStableFarming:s.isStableFarming,stableFarmingApr:s.stableFarmingApr},"rewarder-info":e.rewardObj&&e.rewardObj[s.swap_account]},null,8,["l-item","rewarder-info"])])):b("",!0)],2)]),r("div",qs,[f($,{class:"cancel-btn",onClick:()=>e.router.push(`/liquidity/deposit?poolAddress=${s==null?void 0:s.swap_account}`)},{default:ae(()=>[O(t(e.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(a(),n("div",Cs,[f(z,{loading:!0,type:"statsPoolH5"})]))]),r("div",Ms,[f(R,{current:e.currentPools,"onUpdate:current":v[6]||(v[6]=s=>e.currentPools=s),"page-size":(e.isPc,10),simple:"",total:e.isAll?e.topPoolsList.length:e.topPoolsList.length>20?20:e.topPoolsList.length,onChange:e.onChangePools},null,8,["current","page-size","total","onChange"])])],2)}const or=Ne(Fe,[["render",Gs],["__scopeId","data-v-95dcf94d"]]);export{or as T};
