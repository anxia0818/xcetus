import{_ as ts}from"./back.2f376b7b.js";import{_ as us}from"./apr-tips.767fd78f.js";import{_ as ds}from"./upgrade-loading.9db52954.js";import{_ as is}from"./token-warning.f31559d2.js";import{i as F}from"./import-icon.de3e6c66.js";import{u as vs,a as O,d as Y,s as Le,c as S,q as _e,k as me,p as Ae}from"./pool.8e4f0459.js";import{a as ps,l as E,b as _s,r as p,H as cs,q as ce,e as hs,s as fs,o as i,f as v,h as l,i as $,j as U,v as d,A as B,F as de,E as ie,x as A,a3 as gs,t as he,u as f,w as He,p as ks,k as ws,B as bs}from"./entry.aae35173.js";/* empty css              */import{u as ms}from"./sha256.f095d061.js";import{p as ys}from"./precision.a7a6c57b.js";import{_ as $e}from"./icon_on_stats.cdf13a69.js";import"./farms.88372bad.js";import"./decimal.0bdeb344.js";import"./icon_rewards_2x.cbdb4955.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const Ts=ps({setup(){const e=vs(),n=E(()=>e),ye=E(()=>n.value.tokensObj||{}),ve=ms(),L=E(()=>ve),oe=_s();let fe=p("big");const P=p(1),D=p(1);let H=p(!1);const pe=()=>{ve.getStatsData(L.value.chainName,L.value.filterCoinsObj)};cs(()=>{ve.getStatsData(L.value.chainName,L.value.filterCoinsObj);const o=document.body.clientWidth;o<750?H.value=!1:H.value=!0,window.onresize=()=>{o<750?H.value=!1:H.value=!0},H.value,te(P.value,10),ue(D.value,10)});let V=p(null);const C=E(()=>L.value.topPoolsList),s=o=>(a,r)=>{let c=a[o],t=r[o];return c-t},u=o=>(a,r)=>{let c=a[o];return r[o]-c},k=p(!1),m=p(!1),y=p(!1),w=p(!1),W=p(!1),R=p(!1),q=p(!0),M=p(!1),z=p(!1),ge=p(!1),G=p(!1),J=p(!1),K=p(!1),N=p(!1),Z=p(!1),x=p(!1),ee=p(!0),Q=p(!1),le=p(!1),ke=p("Volume (24H)"),re=p(["TVL","Volume (7D)","APR","Fees (24h)"]),Te=E(()=>L.value.chainName);ce(()=>Te.value,o=>{o=="Sui"?re.value=["TVL","Volume (7D)","APR","Fees (24h)"]:re.value=["TVL","Volume (7D)","APR"]},{immediate:!0});const ne=p(!1),we=p("Volume (24H)"),be=p(["Price","TVL","Price Change"]),Pe=o=>{const a=C;if(o=="tvl_in_usd"?(R.value?(k.value=!k.value,a.value.sort(k.value?s(o):u(o))):a.value.sort(u(o)),m.value=!1,y.value=!1,w.value=!1,R.value=!0,q.value=!1,M.value=!1,z.value=!1):o=="vol_in_usd_24h"?(q.value?(m.value=!m.value,a.value.sort(m.value?s(o):u(o))):a.value.sort(u(o)),k.value=!1,y.value=!1,w.value=!1,R.value=!1,q.value=!0,M.value=!1,z.value=!1):o=="vol_in_usd_7_day"?(M.value?(y.value=!y.value,a.value.sort(y.value?s(o):u(o))):a.value.sort(u(o)),k.value=!1,m.value=!1,w.value=!1,R.value=!1,q.value=!1,M.value=!0,z.value=!1):o=="total_apr"?(z.value?(w.value=!w.value,a.value.sort(w.value?s(o):u(o))):a.value.sort(u(o)),k.value=!1,m.value=!1,y.value=!1,R.value=!1,q.value=!1,M.value=!1,z.value=!0):o=="fee_24_h"&&(ge.value?(W.value=!W.value,a.value.sort(W.value?s(o):u(o))):a.value.sort(u(o)),k.value=!1,m.value=!1,y.value=!1,w.value=!1,R.value=!1,q.value=!1,M.value=!1,z.value=!1,ge.value=!0),console.log(a.value,"===>>>>>poolsListArray.value"),console.log(P.value,"===>>>>>currentPools.value"),a.value.length<10)V.value=a.value.slice(0,10);else{const r=P.value*10;V.value=a.value.slice(r-10,r)}},Ce=o=>{const a=ae;if(o=="price"?(Z.value?(G.value=!G.value,a.value.sort(G.value?s(o):u(o))):a.value.sort(u(o)),J.value=!1,K.value=!1,N.value=!1,Z.value=!0,x.value=!1,ee.value=!1,Q.value=!1):o=="vol_in_usd_24h"?(ee.value?(K.value=!K.value,a.value.sort(K.value?s(o):u(o))):a.value.sort(u(o)),G.value=!1,J.value=!1,N.value=!1,Z.value=!1,x.value=!1,ee.value=!0,Q.value=!1):o=="tvl_in_usd"?(Q.value?(N.value=!N.value,a.value.sort(N.value?s(o):u(o))):a.value.sort(u(o)),G.value=!1,J.value=!1,K.value=!1,Z.value=!1,x.value=!1,ee.value=!1,Q.value=!0):o=="priceHour"&&(x.value?(J.value=!J.value,a.value.sort(J.value?s(o):u(o))):a.value.sort(u(o)),G.value=!1,K.value=!1,N.value=!1,Z.value=!1,x.value=!0,ee.value=!1,Q.value=!1),console.log(a.value,"===>>>>>tokensListArray.value"),console.log(D.value,"===>>>>>tokensListArray.value"),a.value.length<10)X.value=a.value.slice(0,10);else{const r=D.value*10;X.value=a.value.slice(r-10,r)}},Ie=o=>{o=="label"?(ne.value=!ne.value,le.value=!1):o=="select"?(le.value=!le.value,ne.value=!1):(le.value=!1,ne.value=!1)},De=o=>{const a=[];a.push(ke.value),re.value.forEach((r,c)=>{r!=o&&a.push(r)}),re.value=a,ke.value=o,o=="TVL"?V.value.sort(u("tvl_in_usd")):o=="Volume (24H)"?V.value.sort(u("vol_in_usd_24h")):o=="Volume (7D)"?V.value.sort(u("vol_in_usd_7_day")):o=="APR"?V.value.sort(u("total_apr")):o=="Fees (24h)"&&V.value.sort(u("fee_24_h"))},Ve=o=>{console.log(o,"===>>>>search-select");const a=[];a.push(we.value),be.value.forEach((r,c)=>{r!=o&&a.push(r)}),be.value=a,we.value=o,o=="TVL"?X.value.sort(u("tvl_in_usd")):o=="Volume (24H)"?X.value.sort(u("vol_in_usd_24h")):o=="Price"?X.value.sort(u("price")):o=="Price Change"&&X.value.sort(u("priceHour"))};ce(C,()=>{H.value,te(P.value,10)});const te=(o,a)=>{console.log(o,"page"),P.value=o;const r=a*o-a;let c=a*o;console.log(C,"===>>>>>topPoolsList"),c=c>C.value.length?C.value.length:c;const t=C.value;if(t.length>0){R.value&&!k.value?t.sort(Se):R.value&&k.value?t.sort(je):q.value?m.value?t.sort(Re):t.sort(Ue):M.value?y.value?t.sort(Ne):t.sort(Fe):z.value&&(w.value?t.sort(Ee):t.sort(Oe));const h=t.filter((_,b)=>b>=r&&b<c);V.value=h}return t},Se=(o,a)=>a.tvl_in_usd-o.tvl_in_usd,Ue=(o,a)=>a.vol_in_usd_24h-o.vol_in_usd_24h,Fe=(o,a)=>a.vol_in_usd_7_day-o.vol_in_usd_7_day,Oe=(o,a)=>a.total_apr-o.total_apr,je=(o,a)=>o.tvl_in_usd-a.tvl_in_usd,Re=(o,a)=>o.vol_in_usd_24h-a.vol_in_usd_24h,Ne=(o,a)=>o.vol_in_usd_7_day-a.vol_in_usd_7_day,Ee=(o,a)=>o.total_apr-a.total_apr;let X=p([]);const ae=E(()=>{const o=L.value.topTokensList,a=[];for(let r=0;r<o.length;r++){const c=o[r];a.push({...c,priceHour:c?Number(c.price_rate_24h.substring(0,c.price_rate_24h.length-1)):"0"})}return a});ce(ae,()=>{H.value,ue(D.value,10)});const ue=(o,a)=>{console.log(o,"page1"),D.value=o;const r=a*o-a;let c=a*o;c=c>ae.value.length?ae.value.length:c;const t=ae.value;if(t.length>0){Q.value&&!N.value?t.sort(Be):Q.value&&N.value?t.sort(ze):Z.value?G.value?t.sort(Ge):t.sort(We):x.value?J.value?t.sort(Je):t.sort(qe):ee.value&&(K.value?t.sort(Ke):t.sort(Me));const h=t.filter((_,b)=>b>=r&&b<c);X.value=h}return t},Be=(o,a)=>a.tvl_in_usd-o.tvl_in_usd,We=(o,a)=>a.price-o.price,qe=(o,a)=>a.priceHour-o.priceHour,Me=(o,a)=>a.vol_in_usd_24h-o.vol_in_usd_24h,ze=(o,a)=>o.tvl_in_usd-a.tvl_in_usd,Ge=(o,a)=>o.price-a.price,Je=(o,a)=>o.priceHour-a.priceHour,Ke=(o,a)=>o.vol_in_usd_24h-a.vol_in_usd_24h,Qe=o=>{const a=o.swap_account;return console.log(n.value.addressLpTokens[a].rewarder_infos,"==>&pools.value.addressLpTokens[address].rewarder_infos"),n.value.addressLpTokens&&n.value.addressLpTokens[a]&&n.value.addressLpTokens[a].rewarder_infos},Xe=o=>{var a,r,c,t,h,_;if(L.value.theme=="sui"){const b=o.needReverse?((r=n.value.tokensObj[o.token_b_address])==null?void 0:r.labels)||[]:((a=n.value.tokensObj[o.token_a_address])==null?void 0:a.labels)||[],I=o.needReverse?((c=n.value.tokensObj[o.token_a_address])==null?void 0:c.labels)||[]:((t=n.value.tokensObj[o.token_b_address])==null?void 0:t.labels)||[],T=b.concat(I);return[...new Set(T)]}else{const b=((h=n.value.tokensObj[o.token_a_address])==null?void 0:h.labels)||[],I=((_=n.value.tokensObj[o.token_b_address])==null?void 0:_.labels)||[],T=b.concat(I);return[...new Set(T)]}},Ye=o=>{if(!S(o)&&!S(n.value.addressLpTokens)&&!S(n.value.tokensObj)){const a=n.value.addressLpTokens[o.swap_account];return a==null?void 0:a.is_display_rewarder}else return!1},Ze=o=>{if(!S(o)&&!S(n.value.addressLpTokens)&&!S(n.value.tokensObj)){const a=o.swap_account,r=n.value.addressLpTokens[a];let c=(r==null?void 0:r.rewarder_infos)||[];const t=[];c.forEach((_,b)=>{console.log(n.value.tokensObj,"===>tokensObj"),t.push({..._,symbol:n.value.tokensObj[_.coinAddress].symbol,rewarderApr:_e(o.rewarder_apr[b]&&o.rewarder_apr[b].replace("%",""),2),logoUrl:n.value.tokensObj[_.coinAddress].logoURI,rewarder_display:r[`rewarder_display${b+1}`]})});let h=[];return h=t.filter(_=>_.rewarder_display),h}},xe=(o,a)=>o&&a?Le(ys.plus(me(o),me(a)),2)+"%":o,es=o=>{let a=0;return o&&o.forEach(r=>{a+=me(String(r))}),String(_e(String(a),2))},ss=()=>{oe&&oe.push("/stats-pools")},os=()=>{oe&&oe.push("/stats-tokens")},as=o=>{var a;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((a=n.value.tokensObj[o==null?void 0:o.address])==null?void 0:a.logo_url)||(L.value.theme==="default"?F("/image/coins/unknown.png"):F("/image/coins/sui-unknown.png"))},ls=E(()=>n.value.tokensObj),rs=E(()=>L.value.theme),ns=E(()=>n.value.tokensWarningObj),se=p({});return ce(()=>[n.value.poolConfigObj,n.value.tokensObj,L.value.topPoolsList,L.value.chainName,n.value.addressLpTokens],([o,a,r,c,t])=>{c=="Sui"?o&&!S(o)&&r&&r.length>0&&a&&!S(a)&&(r.forEach(h=>{const _=o[h.swap_account],b=_==null?void 0:_.rewarderInfo.map((I,T)=>{const g=a[I.coinAddress];return{...I,emissionsEveryDay:Ae(I.emissionsEveryDay,g==null?void 0:g.decimals),rewarder_display:_[`rewarder_display${T+1}`],rewarders:h.rewarder_apr[T]&&h.rewarder_apr[T].replace("%",""),logoUrl:g==null?void 0:g.logo_url,symbol:g==null?void 0:g.symbol,rewarderApr:h.rewarder_apr[T]&&h.rewarder_apr[T].replace("%","")}});console.log(_,"poolInfo===>"),_!=null&&_.is_display_rewarder&&(se.value={...se.value,[h.swap_account]:b})}),console.log(se.value,"rewardObj.value")):o&&!S(o)&&r&&r.length>0&&a&&!S(a)&&t&&!S(t)&&(r.forEach(h=>{console.log(h,"ele===>");const _=t[h.swap_account];if(console.log(_,"===>poolInfo"),_){const b=_.rewarder_infos.map((I,T)=>{console.log(I,"===>reward");const g=a[I.coinAddress];return{...I,emissionsEveryDay:Ae(I.emissionsEveryDay,g==null?void 0:g.decimals),rewarder_display:_[`rewarder_display${T+1}`],rewarders:_e(h.rewarder_apr[T]&&h.rewarder_apr[T].replace("%",""),2),logoUrl:g==null?void 0:g.logo_url,symbol:g==null?void 0:g.symbol,rewarderApr:_e(h.rewarder_apr[T]&&h.rewarder_apr[T].replace("%",""),2)}});console.log(_,"poolInfo===>"),_!=null&&_.is_display_rewarder&&(se.value={...se.value,[h.swap_account]:b})}}),console.log(se.value,"rewardObj.value"))},{immediate:!0,deep:!0}),{tokensWarningObj:ns,theme:rs,tokensObj:ls,getCoinIcon:as,getRewarderInfo:Qe,addCommom:O,store:L,importIcon:F,topPoolsList:C,addressTokens:ye,showEcharts:fe,currentPools:P,onChangePools:te,currentTopPoolsList:V,onChangeTokens:ue,currentTokens:D,currentTopTokensList:X,topTokensList:ae,router:oe,isPc:H,getAprTotal:xe,getRewarderApr:es,toPoolsList:ss,toTokensList:os,changePoolsList:Pe,changeTokensList:Ce,tvlImprint:k,volHImprint:m,volDImprint:y,aprImprint:w,tokensPriceImprint:G,tokensPriceHImprint:J,tokensVolHImprint:K,tokensTvlImprint:N,fees24hImprint:W,labelToken:ne,select:le,selectValue:ke,selectList:re,reviseValue:Ie,changeSort:De,tokenValue:we,tokensList:be,changeSortLabel:Ve,tvlImprintHighlight:R,volHImprintHighlight:q,volDImprintHighlight:M,aprImprintHighlight:z,fees24hHighlight:ge,tokensPriceImprintHighlight:Z,tokensPriceHImprintHighlight:x,tokensVolHImprintHighlight:ee,tokensTvlImprintHighlight:Q,getLabel:Xe,rewardApr:Ze,getsad:pe,rewardDisplay:Ye,chainName:Te,decimalUi:Y,rewardObj:se,sFixD:Le}}});const j=e=>(ks("data-v-fa9131cd"),e=e(),ws(),e),Ls={class:"stats-container"},As={class:"title"},Hs={class:"top-pools-new"},$s={class:"sort-by"},Ps=j(()=>l("img",{src:$e,alt:""},null,-1)),Cs=j(()=>l("use",{"xlink:href":"#icon-icon_on"},null,-1)),Is=[Cs],Ds={key:0,class:"select-item"},Vs=["onClick"],Ss=j(()=>l("img",{src:$e,alt:""},null,-1)),Us={class:"content"},Fs={class:"item"},Os=j(()=>l("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),js=[Os],Rs=j(()=>l("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ns=[Rs],Es=j(()=>l("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Bs=[Es],Ws=j(()=>l("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),qs=[Ws],Ms={class:"apr-hover-content"},zs=j(()=>l("span",null," ",-1)),Gs={key:0,class:"upgrade-loading"},Js={class:"token"},Ks=["onerror"],Qs=["onerror"],Xs={class:"name"},Ys={class:"token-name"},Zs={class:"fee-tier-top"},xs={class:"label-all"},eo={key:0},so={class:"tvl"},oo={class:"volume-hour"},ao={key:0,class:"fees-24h"},lo=j(()=>l("br",null,null,-1)),ro={key:0,class:"farming-apr"},no={key:1,class:"apr-hover-content"},to={class:"btn-box"},uo={key:2,class:"upgrade-loading"},io={class:"top"},vo={class:"token"},po=["onerror"],_o=["onerror"],co={class:"name"},ho={class:"token-name"},fo={class:"label-all"},go={key:0},ko={class:"fee-tier-hint"},wo={class:"middle"},bo={class:"item-pools"},mo={class:"item-pools"},yo={class:"item-pools"},To={key:0,class:"item-pools"},Lo=j(()=>l("span",null,"Fees (24h)",-1)),Ao={key:0,class:"farming-apr"},Ho={key:0,class:"apr-hover-content"},$o={class:"bottom"},Po={class:"panation"};function Co(e,n,ye,ve,L,oe){const fe=ts,P=us,D=ds,H=is,pe=bs,V=gs,C=fs("image");return i(),v("div",Ls,[l("div",As,[$(fe),U(" "+d(e.$t("menu.pools")),1)]),l("div",Hs,[l("div",$s,[l("div",null,d(e.$t("newAdd.sortBy")),1),l("div",{class:"search-select",onClick:n[0]||(n[0]=s=>e.reviseValue("select"))},[l("div",null,[U(d(e.selectValue)+" ",1),Ps]),(i(),v("svg",{"aria-hidden":"true",class:B(e.select?"show-icon icon":"icon")},Is,2)),e.select?(i(),v("div",Ds,[(i(!0),v(de,null,ie(e.selectList,(s,u)=>(i(),v("div",{key:u,class:"select-menu-item",onClick:k=>e.changeSort(s)},[U(d(s)+" ",1),Ss],8,Vs))),128))])):A("",!0)])]),l("div",Us,[l("div",Fs,[l("span",null,d(e.$t("newAdd.pool")),1),l("span",{onClick:n[1]||(n[1]=s=>e.changePoolsList("tvl_in_usd"))},[U(d(e.$t("common.tvl"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:B(["pools-icon",e.tvlImprint?e.tvlImprintHighlight?"selected highlight":"selected":e.tvlImprintHighlight?"highlight":""])},js,2))]),l("span",{onClick:n[2]||(n[2]=s=>e.changePoolsList("vol_in_usd_24h"))},[U(d(e.$t("common.volume24H"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:B(["pools-icon",e.volHImprint?e.volHImprintHighlight?"selected highlight":"selected":e.volHImprintHighlight?"highlight":""])},Ns,2))]),e.chainName=="Sui"?(i(),v("span",{key:0,onClick:n[3]||(n[3]=s=>e.changePoolsList("fee_24_h"))},[U(" Fees (24H) "),(i(),v("svg",{"aria-hidden":"true",class:B(["pools-icon",e.fees24hImprint?e.fees24hHighlight?"selected highlight":"selected":e.fees24hHighlight?"highlight":""])},Bs,2))])):A("",!0),l("span",{onClick:n[4]||(n[4]=s=>e.changePoolsList("total_apr"))},[U(d(e.$t("common.apr"))+" ",1),(i(),v("svg",{"aria-hidden":"true",class:B(["pools-icon",e.aprImprint?e.aprImprintHighlight?"selected highlight":"selected":e.aprImprintHighlight?"highlight":""])},qs,2)),l("div",Ms,[$(P,{class:"noHover apr-hover-con"})])]),zs]),e.currentTopPoolsList?(i(!0),v(de,{key:1},ie(e.currentTopPoolsList,(s,u)=>{var k,m,y;return i(),v("div",{key:u,class:"item pc-item"},[l("div",Js,[l("div",null,[s!=null&&s.token_a_address?he((i(),v("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:f(F))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:f(F))("/image/coins/sui-unknown.png")},null,8,Ks)),[[C,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address])]]):A("",!0),$(H,{address:s.is_forward?s.token_a_address:s.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),l("div",null,[s!=null&&s.token_b_address?he((i(),v("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:f(F))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:f(F))("/image/coins/sui-unknown.png")},null,8,Qs)),[[C,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address])]]):A("",!0),$(H,{address:s.is_forward?s.token_b_address:s.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),l("div",Xs,[l("p",Ys,d(e.theme=="sui"?s.is_forward!==!1?s.token_a_reserves:s.token_b_reserves:s.token_a_reserves)+" - "+d(e.theme=="sui"?s.is_forward!==!1?s.token_b_reserves:s.token_a_reserves:s.token_b_reserves),1),l("div",Zs,d((s==null?void 0:s.fee)*100)+"%",1),l("div",xs,[(i(!0),v(de,null,ie(e.getLabel(s),(w,W)=>(i(),v("div",{key:W,class:B(["label",w])},[w!=="Native"?(i(),v("span",eo,d(w),1)):A("",!0)],2))),128))])])]),l("div",so,d(s.tvl_in_usd>0&&s.tvl_in_usd<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:f(O))(("decimalUi"in e?e.decimalUi:f(Y))(s.tvl_in_usd,2),2)}`),1),l("div",oo,d(s.vol_in_usd_24h>0&&s.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:f(O))(("decimalUi"in e?e.decimalUi:f(Y))(s.vol_in_usd_24h,2,2))}`),1),e.chainName=="Sui"?(i(),v("div",ao,d(s.fee_24_h>0&&s.fee_24_h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:f(O))(("decimalUi"in e?e.decimalUi:f(Y))(s.fee_24_h,2),2)}`),1)):A("",!0),l("div",{class:B(["apr",e.theme=="sui"&&s.isStableFarming||((k=e.rewardApr(s))==null?void 0:k.length)>0&&e.rewardDisplay(s)?"apr-mark":""])},[U(d(e.getAprTotal(s.apr_7day,e.getRewarderApr(s.rewarder_apr)))+" ",1),lo,(m=s==null?void 0:s.stable_farming)!=null&&m.stable_farming_pool?(i(),v("i",ro,d(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:f(O))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):A("",!0),e.theme=="sui"&&s.isStableFarming||((y=e.rewardApr(s))==null?void 0:y.length)!=0&&e.rewardDisplay(s)?(i(),v("div",no,[$(P,{class:"noHover apr-hover-con","l-item":{...s,apr:s.apr_7day&&s.apr_7day.replace("%",""),aprTotal:e.getAprTotal(s.apr_7day,e.getRewarderApr(s.rewarder_apr)),is_display_rewarder:e.rewardDisplay(s),rewarder_apr:e.getRewarderApr(s.rewarder_apr),isStableFarming:s.isStableFarming,stableFarmingApr:s.stableFarmingApr},"rewarder-info":e.rewardApr(s)},null,8,["l-item","rewarder-info"])])):A("",!0)],2),l("div",to,[$(pe,{class:"cancel-btn",onClick:()=>e.router.push(`/liquidity/deposit?poolAddress=${s==null?void 0:s.swap_account}`)},{default:He(()=>[U(d(e.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(i(),v("div",Gs,[$(D,{loading:!0,type:"statsTokens"})])),e.currentTopPoolsList?(i(!0),v(de,{key:3},ie(e.currentTopPoolsList,(s,u)=>{var k,m,y;return i(),v("div",{key:u,class:"item h5-item"},[l("div",io,[l("div",vo,[l("div",null,[s!=null&&s.token_a_address?he((i(),v("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:f(F))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:f(F))("/image/coins/sui-unknown.png")},null,8,po)),[[C,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address])]]):A("",!0),$(H,{address:s.is_forward?s.token_a_address:s.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),l("div",null,[s!=null&&s.token_b_address?he((i(),v("img",{key:0,onerror:e.theme=="default"?("importIcon"in e?e.importIcon:f(F))("/image/coins/unknown.png"):("importIcon"in e?e.importIcon:f(F))("/image/coins/sui-unknown.png")},null,8,_o)),[[C,e.getCoinIcon(e.theme=="sui"?s.is_forward!==!1?e.addressTokens&&e.addressTokens[s.token_b_address]:e.addressTokens&&e.addressTokens[s.token_a_address]:e.addressTokens&&e.addressTokens[s.token_b_address])]]):A("",!0),$(H,{address:s.is_forward?s.token_b_address:s.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),l("div",co,[l("p",ho,d(e.theme=="sui"?s.is_forward!==!1?s.token_a_reserves:s.token_b_reserves:s.token_a_reserves)+" - "+d(e.theme=="sui"?s.is_forward!==!1?s.token_b_reserves:s.token_a_reserves:s.token_b_reserves),1),l("div",fo,[(i(!0),v(de,null,ie(e.getLabel(s),(w,W)=>(i(),v("div",{key:W,class:B(["label",w])},[w!=="Native"?(i(),v("span",go,d(w),1)):A("",!0)],2))),128))])])]),l("div",ko,d((s==null?void 0:s.fee)*100)+"%",1)]),l("div",wo,[l("div",bo,[l("span",null,d(e.$t("common.tvl")),1),l("p",null,d(s.tvl_in_usd>0&&s.tvl_in_usd<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:f(O))(("decimalUi"in e?e.decimalUi:f(Y))(s.tvl_in_usd,2),2)}`),1)]),l("div",mo,[l("span",null,d(e.$t("common.volume24h")),1),l("p",null,d(s.vol_in_usd_24h>0&&s.vol_in_usd_24h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:f(O))(("decimalUi"in e?e.decimalUi:f(Y))(s.vol_in_usd_24h,2),2)}`),1)]),l("div",yo,[l("span",null,d(e.$t("newAdd.volume7D")),1),l("p",null,d(s.vol_in_usd_7_day>0&&s.vol_in_usd_7_day<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:f(O))(("decimalUi"in e?e.decimalUi:f(Y))(s.vol_in_usd_7_day,2),2)}`),1)]),e.chainName=="Sui"?(i(),v("div",To,[Lo,l("p",null,d(s.fee_24_h>0&&s.fee_24_h<.01?"<$0.01":`$${("addCommom"in e?e.addCommom:f(O))(("decimalUi"in e?e.decimalUi:f(Y))(s.fee_24_h,2),2)}`),1)])):A("",!0),l("div",{class:B(["item-pools",e.theme=="sui"&&s.isStableFarming||((k=e.rewardApr(s))==null?void 0:k.length)>0&&e.rewardDisplay(s)?"":"apr-mark-h5"])},[l("span",null,d(e.$t("common.apr")),1),l("p",null,[U(d(e.getAprTotal(s.apr_7day,e.getRewarderApr(s.rewarder_apr)))+" ",1),(m=s==null?void 0:s.stable_farming)!=null&&m.stable_farming_pool?(i(),v("i",Ao,d(s.stable_farming.apr>0&&s.stable_farming.apr<1e-4?"+<0.01":`+${("addCommom"in e?e.addCommom:f(O))(s.stable_farming?(s==null?void 0:s.stable_farming.apr)*100:0,2)}`)+"% ",1)):A("",!0)]),e.theme=="sui"&&s.isStableFarming||((y=e.rewardApr(s))==null?void 0:y.length)!=0&&e.rewardDisplay(s)?(i(),v("div",Ho,[$(P,{class:"noHover apr-hover-con","l-item":{...s,apr:s.apr_7day&&s.apr_7day.replace("%",""),aprTotal:e.getAprTotal(s.apr_7day,e.getRewarderApr(s.rewarder_apr)),is_display_rewarder:e.rewardDisplay(s),rewarder_apr:e.getRewarderApr(s.rewarder_apr),isStableFarming:s.isStableFarming,stableFarmingApr:s.stableFarmingApr},"rewarder-info":e.rewardApr(s)},null,8,["l-item","rewarder-info"])])):A("",!0)],2)]),l("div",$o,[$(pe,{class:"cancel-btn",onClick:()=>e.router.push(`/liquidity/deposit?poolAddress=${s==null?void 0:s.swap_account}`)},{default:He(()=>[U(d(e.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(i(),v("div",uo,[$(D,{loading:!0,type:"statsPoolH5"})]))]),l("div",Po,[$(V,{current:e.currentPools,"onUpdate:current":n[5]||(n[5]=s=>e.currentPools=s),"page-size":(e.isPc,10),simple:"",total:e.topPoolsList.length,onChange:e.onChangePools},null,8,["current","page-size","total","onChange"])])])])}const Jo=hs(Ts,[["render",Co],["__scopeId","data-v-fa9131cd"]]);export{Jo as default};
