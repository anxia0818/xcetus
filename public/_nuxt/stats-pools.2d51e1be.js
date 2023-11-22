import{_ as xs}from"./back.91e5d4a0.js";import{_ as se}from"./apr-tips.7c117dc2.js";import{_ as ee}from"./upgrade-loading.10e91269.js";import{_ as oe}from"./token-warning.565fcd84.js";import{i as A}from"./import-icon.de3e6c66.js";import{u as le,a as K,c as Y,s as ae,l as cs,f as re}from"./pool.1bfb3695.js";import{a as ne,C as U,b as te,r as i,z as ue,D as fs,e as de,G as ie,o as v,f as p,h as a,i as w,j as H,t as d,v as O,F as os,s as ls,x as j,a5 as ve,H as ns,u as k,w as ks,p as pe,k as _e,B as ce}from"./entry.8ba14aee.js";/* empty css              */import{u as he}from"./sha256.2591d9c6.js";import{p as fe}from"./precision.a7a6c57b.js";import{_ as gs}from"./icon_on_stats.cdf13a69.js";import{_ as ws,a as bs}from"./farms.bf4b98cc.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./decimal.0bdeb344.js";const ke=ne({setup(){const s=le(),r=U(()=>s),hs=U(()=>r.value.tokensObj||{}),as=he(),m=U(()=>as),Q=te();let ts=i("big");const b=i(1),I=i(1);let g=i(!1);const rs=()=>{as.getStatsData(m.value.chainName,m.value.filterCoinsObj)};ue(()=>{as.getStatsData(m.value.chainName,m.value.filterCoinsObj);const o=document.body.clientWidth;o<750?g.value=!1:g.value=!0,window.onresize=()=>{o<750?g.value=!1:g.value=!0},g.value,ss(b.value,10),es(I.value,10)});let C=i(null);const T=U(()=>m.value.topPoolsList),e=o=>(l,n)=>{let _=l[o],t=n[o];return _-t},u=o=>(l,n)=>{let _=l[o];return n[o]-_},c=i(!1),f=i(!1),h=i(!1),y=i(!1),N=i(!1),F=i(!0),q=i(!1),z=i(!1),R=i(!1),S=i(!1),B=i(!1),$=i(!1),G=i(!1),M=i(!1),J=i(!0),E=i(!1),Z=i(!1),us=i("Volume (24H)"),ds=i(["TVL","Volume (7D)","APR"]),x=i(!1),is=i("Volume (24H)"),vs=i(["Price","TVL","Price Change"]),Ts=o=>{const l=T;if(o=="tvl_in_usd"?(N.value?(c.value=!c.value,l.value.sort(c.value?e(o):u(o))):l.value.sort(u(o)),f.value=!1,h.value=!1,y.value=!1,N.value=!0,F.value=!1,q.value=!1,z.value=!1):o=="vol_in_usd_24h"?(F.value?(f.value=!f.value,l.value.sort(f.value?e(o):u(o))):l.value.sort(u(o)),c.value=!1,h.value=!1,y.value=!1,N.value=!1,F.value=!0,q.value=!1,z.value=!1):o=="vol_in_usd_7_day"?(q.value?(h.value=!h.value,l.value.sort(h.value?e(o):u(o))):l.value.sort(u(o)),c.value=!1,f.value=!1,y.value=!1,N.value=!1,F.value=!1,q.value=!0,z.value=!1):o=="aprNum"&&(z.value?(y.value=!y.value,l.value.sort(y.value?e(o):u(o))):l.value.sort(u(o)),c.value=!1,f.value=!1,h.value=!1,N.value=!1,F.value=!1,q.value=!1,z.value=!0),console.log(l.value,"===>>>>>poolsListArray.value"),console.log(b.value,"===>>>>>currentPools.value"),l.value.length<10)C.value=l.value.slice(0,10);else{const n=b.value*10;C.value=l.value.slice(n-10,n)}},ys=o=>{const l=X;if(o=="price"?(G.value?(R.value=!R.value,l.value.sort(R.value?e(o):u(o))):l.value.sort(u(o)),S.value=!1,B.value=!1,$.value=!1,G.value=!0,M.value=!1,J.value=!1,E.value=!1):o=="vol_in_usd_24h"?(J.value?(B.value=!B.value,l.value.sort(B.value?e(o):u(o))):l.value.sort(u(o)),R.value=!1,S.value=!1,$.value=!1,G.value=!1,M.value=!1,J.value=!0,E.value=!1):o=="tvl_in_usd"?(E.value?($.value=!$.value,l.value.sort($.value?e(o):u(o))):l.value.sort(u(o)),R.value=!1,S.value=!1,B.value=!1,G.value=!1,M.value=!1,J.value=!1,E.value=!0):o=="priceHour"&&(M.value?(S.value=!S.value,l.value.sort(S.value?e(o):u(o))):l.value.sort(u(o)),R.value=!1,B.value=!1,$.value=!1,G.value=!1,M.value=!0,J.value=!1,E.value=!1),console.log(l.value,"===>>>>>tokensListArray.value"),console.log(I.value,"===>>>>>tokensListArray.value"),l.value.length<10)W.value=l.value.slice(0,10);else{const n=I.value*10;W.value=l.value.slice(n-10,n)}},Ls=o=>{o=="label"?(x.value=!x.value,Z.value=!1):o=="select"?(Z.value=!Z.value,x.value=!1):(Z.value=!1,x.value=!1)},Ps=o=>{const l=[];l.push(us.value),ds.value.forEach((n,_)=>{n!=o&&l.push(n)}),ds.value=l,us.value=o,o=="TVL"?C.value.sort(u("tvl_in_usd")):o=="Volume (24H)"?C.value.sort(u("vol_in_usd_24h")):o=="Volume (7D)"?C.value.sort(u("vol_in_usd_7_day")):o=="APR"&&C.value.sort(u("aprNum"))},ms=o=>{console.log(o,"===>>>>search-select");const l=[];l.push(is.value),vs.value.forEach((n,_)=>{n!=o&&l.push(n)}),vs.value=l,is.value=o,o=="TVL"?W.value.sort(u("tvl_in_usd")):o=="Volume (24H)"?W.value.sort(u("vol_in_usd_24h")):o=="Price"?W.value.sort(u("price")):o=="Price Change"&&W.value.sort(u("priceHour"))};fs(T,()=>{g.value,ss(b.value,10)});const ss=(o,l)=>{console.log(o,"page"),b.value=o;const n=l*o-l;let _=l*o;console.log(T,"===>>>>>topPoolsList"),_=_>T.value.length?T.value.length:_;const t=T.value;if(t.length>0){N.value&&!c.value?t.sort(Is):N.value&&c.value?t.sort(Ds):F.value?f.value?t.sort($s):t.sort(Hs):q.value?h.value?t.sort(Vs):t.sort(As):z.value&&(y.value?t.sort(Os):t.sort(Cs));const V=t.filter((D,L)=>L>=n&&L<_);C.value=V}return t},Is=(o,l)=>l.tvl_in_usd-o.tvl_in_usd,Hs=(o,l)=>l.vol_in_usd_24h-o.vol_in_usd_24h,As=(o,l)=>l.vol_in_usd_7_day-o.vol_in_usd_7_day,Cs=(o,l)=>l.aprNum-o.aprNum,Ds=(o,l)=>o.tvl_in_usd-l.tvl_in_usd,$s=(o,l)=>o.vol_in_usd_24h-l.vol_in_usd_24h,Vs=(o,l)=>o.vol_in_usd_7_day-l.vol_in_usd_7_day,Os=(o,l)=>o.aprNum-l.aprNum;let W=i([]);const X=U(()=>{const o=m.value.topTokensList,l=[];for(let n=0;n<o.length;n++){const _=o[n];l.push({..._,priceHour:_?Number(_.price_rate_24h.substring(0,_.price_rate_24h.length-1)):"0"})}return l});fs(X,()=>{g.value,es(I.value,10)});const es=(o,l)=>{console.log(o,"page1"),I.value=o;const n=l*o-l;let _=l*o;_=_>X.value.length?X.value.length:_;const t=X.value;if(t.length>0){E.value&&!$.value?t.sort(js):E.value&&$.value?t.sort(Bs):G.value?R.value?t.sort(Es):t.sort(Ns):M.value?S.value?t.sort(Ws):t.sort(Rs):J.value&&(B.value?t.sort(Us):t.sort(Ss));const V=t.filter((D,L)=>L>=n&&L<_);W.value=V}return t},js=(o,l)=>l.tvl_in_usd-o.tvl_in_usd,Ns=(o,l)=>l.price-o.price,Rs=(o,l)=>l.priceHour-o.priceHour,Ss=(o,l)=>l.vol_in_usd_24h-o.vol_in_usd_24h,Bs=(o,l)=>o.tvl_in_usd-l.tvl_in_usd,Es=(o,l)=>o.price-l.price,Ws=(o,l)=>o.priceHour-l.priceHour,Us=(o,l)=>o.vol_in_usd_24h-l.vol_in_usd_24h,Fs=o=>{const l=o.swap_account;return console.log(r.value.addressLpTokens[l].rewarder_infos,"==>&pools.value.addressLpTokens[address].rewarder_infos"),r.value.addressLpTokens&&r.value.addressLpTokens[l]&&r.value.addressLpTokens[l].rewarder_infos},qs=o=>{var l,n,_,t,V,D;if(m.value.theme=="sui"){const L=o.needReverse?((n=r.value.tokensObj[o.token_b_address])==null?void 0:n.labels)||[]:((l=r.value.tokensObj[o.token_a_address])==null?void 0:l.labels)||[],ps=o.needReverse?((_=r.value.tokensObj[o.token_a_address])==null?void 0:_.labels)||[]:((t=r.value.tokensObj[o.token_b_address])==null?void 0:t.labels)||[],_s=L.concat(ps);return[...new Set(_s)]}else{const L=((V=r.value.tokensObj[o.token_a_address])==null?void 0:V.labels)||[],ps=((D=r.value.tokensObj[o.token_b_address])==null?void 0:D.labels)||[],_s=L.concat(ps);return[...new Set(_s)]}},zs=o=>{if(!Y(o)&&!Y(r.value.addressLpTokens)&&!Y(r.value.tokensObj)){const l=r.value.addressLpTokens[o.swap_account];return l==null?void 0:l.is_display_rewarder}else return!1},Gs=o=>{if(!Y(o)&&!Y(r.value.addressLpTokens)&&!Y(r.value.tokensObj)){const l=o.swap_account,n=r.value.addressLpTokens[l];let _=(n==null?void 0:n.rewarder_infos)||[];const t=[];_.forEach((D,L)=>{console.log(r.value.tokensObj,"===>tokensObj"),t.push({...D,symbol:r.value.tokensObj[D.coinAddress].symbol,rewarderApr:o.rewarder_apr[L],logoUrl:r.value.tokensObj[D.coinAddress].logoURI,rewarder_display:n[`rewarder_display${L+1}`]})});let V=[];return V=t.filter(D=>D.rewarder_display),V}},Ms=(o,l)=>o&&l?ae(fe.plus(cs(o),cs(l)),2)+"%":o,Js=o=>{let l=0;return o&&o.forEach(n=>{l+=cs(String(n))}),String(re(String(l),2))},Ks=()=>{Q&&Q.push("/stats-pools")},Qs=()=>{Q&&Q.push("/stats-tokens")},Xs=o=>{var l;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((l=r.value.tokensObj[o==null?void 0:o.address])==null?void 0:l.logo_url)||(m.value.theme==="default"?A("/image/coins/unknown.png"):A("/image/coins/sui-unknown.png"))},Ys=U(()=>r.value.tokensObj),Zs=U(()=>m.value.theme);return{tokensWarningObj:U(()=>r.value.tokensWarningObj),theme:Zs,tokensObj:Ys,getCoinIcon:Xs,getRewarderInfo:Fs,addCommom:K,store:m,importIcon:A,topPoolsList:T,addressTokens:hs,showEcharts:ts,currentPools:b,onChangePools:ss,currentTopPoolsList:C,onChangeTokens:es,currentTokens:I,currentTopTokensList:W,topTokensList:X,router:Q,isPc:g,getAprTotal:Ms,getRewarderApr:Js,toPoolsList:Ks,toTokensList:Qs,changePoolsList:Ts,changeTokensList:ys,tvlImprint:c,volHImprint:f,volDImprint:h,aprImprint:y,tokensPriceImprint:R,tokensPriceHImprint:S,tokensVolHImprint:B,tokensTvlImprint:$,labelToken:x,select:Z,selectValue:us,selectList:ds,reviseValue:Ls,changeSort:Ps,tokenValue:is,tokensList:vs,changeSortLabel:ms,tvlImprintHighlight:N,volHImprintHighlight:F,volDImprintHighlight:q,aprImprintHighlight:z,tokensPriceImprintHighlight:G,tokensPriceHImprintHighlight:M,tokensVolHImprintHighlight:J,tokensTvlImprintHighlight:E,getLabel:qs,rewardApr:Gs,getsad:rs,rewardDisplay:zs}}});const P=s=>(pe("data-v-a602f3ad"),s=s(),_e(),s),ge={class:"stats-container"},we={class:"title"},be={class:"top-pools-new"},Te={class:"sort-by"},ye=P(()=>a("img",{src:gs,alt:""},null,-1)),Le=P(()=>a("use",{"xlink:href":"#icon-icon_on"},null,-1)),Pe=[Le],me={key:0,class:"select-item"},Ie=["onClick"],He=P(()=>a("img",{src:gs,alt:""},null,-1)),Ae={class:"content"},Ce={class:"item"},De=P(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),$e=[De],Ve=P(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Oe=[Ve],je=P(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Ne=[je],Re=P(()=>a("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Se=[Re],Be={class:"apr-hover-content"},Ee=P(()=>a("span",null," ",-1)),We={key:0,class:"upgrade-loading"},Ue={class:"token"},Fe=["onerror"],qe=["onerror"],ze={class:"name"},Ge={class:"token-name"},Me={class:"fee-tier-top"},Je={class:"label-all"},Ke={key:0},Qe={class:"tvl"},Xe={class:"volume-hour"},Ye={class:"volume-day"},Ze=P(()=>a("img",{src:ws,class:"default-img",alt:""},null,-1)),xe=P(()=>a("img",{src:bs,class:"hover-img",alt:""},null,-1)),so={key:0,class:"apr-hover-content"},eo={class:"btn-box"},oo={key:2,class:"upgrade-loading"},lo={class:"top"},ao={class:"token"},ro=["onerror"],no=["onerror"],to={class:"name"},uo={class:"token-name"},io={class:"label-all"},vo={key:0},po={class:"fee-tier-hint"},_o={class:"middle"},co={class:"item-pools"},ho={class:"item-pools"},fo={class:"item-pools"},ko=P(()=>a("img",{src:ws,class:"default-img",alt:""},null,-1)),go=P(()=>a("img",{src:bs,class:"hover-img",alt:""},null,-1)),wo={key:0,class:"apr-hover-content"},bo={class:"bottom"},To={class:"panation"};function yo(s,r,hs,as,m,Q){const ts=xs,b=se,I=ee,g=oe,rs=ce,C=ve,T=ie("image");return v(),p("div",ge,[a("div",we,[w(ts),H(" "+d(s.$t("menu.pools")),1)]),a("div",be,[a("div",Te,[a("div",null,d(s.$t("newAdd.sortBy")),1),a("div",{class:"search-select",onClick:r[0]||(r[0]=e=>s.reviseValue("select"))},[a("div",null,[H(d(s.selectValue)+" ",1),ye]),(v(),p("svg",{"aria-hidden":"true",class:O(s.select?"show-icon icon":"icon")},Pe,2)),s.select?(v(),p("div",me,[(v(!0),p(os,null,ls(s.selectList,(e,u)=>(v(),p("div",{key:u,class:"select-menu-item",onClick:c=>s.changeSort(e)},[H(d(e)+" ",1),He],8,Ie))),128))])):j("",!0)])]),a("div",Ae,[a("div",Ce,[a("span",null,d(s.$t("newAdd.pool")),1),a("span",{onClick:r[1]||(r[1]=e=>s.changePoolsList("tvl_in_usd"))},[H(d(s.$t("common.tvl"))+" ",1),(v(),p("svg",{"aria-hidden":"true",class:O(["pools-icon",s.tvlImprint?s.tvlImprintHighlight?"selected highlight":"selected":s.tvlImprintHighlight?"highlight":""])},$e,2))]),a("span",{onClick:r[2]||(r[2]=e=>s.changePoolsList("vol_in_usd_24h"))},[H(d(s.$t("common.volume24H"))+" ",1),(v(),p("svg",{"aria-hidden":"true",class:O(["pools-icon",s.volHImprint?s.volHImprintHighlight?"selected highlight":"selected":s.volHImprintHighlight?"highlight":""])},Oe,2))]),a("span",{onClick:r[3]||(r[3]=e=>s.changePoolsList("vol_in_usd_7_day"))},[H(d(s.$t("newAdd.volume7D"))+" ",1),(v(),p("svg",{"aria-hidden":"true",class:O(["pools-icon",s.volDImprint?s.volDImprintHighlight?"selected highlight":"selected":s.volDImprintHighlight?"highlight":""])},Ne,2))]),a("span",{onClick:r[4]||(r[4]=e=>s.changePoolsList("aprNum"))},[H(" APR "),(v(),p("svg",{"aria-hidden":"true",class:O(["pools-icon",s.aprImprint?s.aprImprintHighlight?"selected highlight":"selected":s.aprImprintHighlight?"highlight":""])},Se,2)),a("div",Be,[w(b,{class:"noHover apr-hover-con"})])]),Ee]),s.currentTopPoolsList?(v(!0),p(os,{key:1},ls(s.currentTopPoolsList,(e,u)=>{var c,f;return v(),p("div",{key:u,class:"item pc-item"},[a("div",Ue,[a("div",null,[e!=null&&e.token_a_address?ns((v(),p("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:k(A))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:k(A))("/image/coins/sui-unknown.png")},null,8,Fe)),[[T,s.getCoinIcon(s.theme=="sui"?e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address])]]):j("",!0),w(g,{address:e.is_forward?e.token_a_address:e.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),a("div",null,[e!=null&&e.token_b_address?ns((v(),p("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:k(A))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:k(A))("/image/coins/sui-unknown.png")},null,8,qe)),[[T,s.getCoinIcon(s.theme=="sui"?e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address])]]):j("",!0),w(g,{address:e.is_forward?e.token_b_address:e.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),a("div",ze,[a("p",Ge,d(s.theme=="sui"?e.is_forward!==!1?e.token_a_reserves:e.token_b_reserves:e.token_a_reserves)+" - "+d(s.theme=="sui"?e.is_forward!==!1?e.token_b_reserves:e.token_a_reserves:e.token_b_reserves),1),a("div",Me,d((e==null?void 0:e.fee)*100)+"%",1),a("div",Je,[(v(!0),p(os,null,ls(s.getLabel(e),(h,y)=>(v(),p("div",{key:y,class:O(["label",h])},[h!=="Native"?(v(),p("span",Ke,d(h),1)):j("",!0)],2))),128))])])]),a("div",Qe," $"+d(e.tvl_in_usd?("addCommom"in s?s.addCommom:k(K))(e.tvl_in_usd,2):"--"),1),a("div",Xe," $"+d(e!=null&&e.vol_in_usd_24h?("addCommom"in s?s.addCommom:k(K))(e==null?void 0:e.vol_in_usd_24h,2):"--"),1),a("div",Ye," $"+d(e!=null&&e.vol_in_usd_7_day?("addCommom"in s?s.addCommom:k(K))(e==null?void 0:e.vol_in_usd_7_day,2):"--"),1),a("div",{class:O(["apr",((c=s.rewardApr(e))==null?void 0:c.length)>0&&s.rewardDisplay(e)?"apr-mark":""])},[Ze,xe,H(" "+d(s.getAprTotal(e.apr_7day,s.getRewarderApr(e.rewarder_apr)))+" ",1),((f=s.rewardApr(e))==null?void 0:f.length)!=0&&s.rewardDisplay(e)?(v(),p("div",so,[w(b,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day,aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(e.rewarder_apr)),is_display_rewarder:s.rewardDisplay(e),rewarder_apr:s.getRewarderApr(e.rewarder_apr)},"rewarder-info":s.rewardApr(e)},null,8,["l-item","rewarder-info"])])):j("",!0)],2),a("div",eo,[w(rs,{class:"cancel-btn",onClick:()=>s.router.push(`/liquidity/deposit?poolAddress=${e==null?void 0:e.swap_account}`)},{default:ks(()=>[H(d(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(v(),p("div",We,[w(I,{loading:!0,type:"statsTokens"})])),s.currentTopPoolsList?(v(!0),p(os,{key:3},ls(s.currentTopPoolsList,(e,u)=>{var c,f;return v(),p("div",{key:u,class:"item h5-item"},[a("div",lo,[a("div",ao,[a("div",null,[e!=null&&e.token_a_address?ns((v(),p("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:k(A))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:k(A))("/image/coins/sui-unknown.png")},null,8,ro)),[[T,s.getCoinIcon(s.theme=="sui"?e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address])]]):j("",!0),w(g,{address:e.is_forward?e.token_a_address:e.token_b_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),a("div",null,[e!=null&&e.token_b_address?ns((v(),p("img",{key:0,onerror:s.theme=="default"?("importIcon"in s?s.importIcon:k(A))("/image/coins/unknown.png"):("importIcon"in s?s.importIcon:k(A))("/image/coins/sui-unknown.png")},null,8,no)),[[T,s.getCoinIcon(s.theme=="sui"?e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address])]]):j("",!0),w(g,{address:e.is_forward?e.token_b_address:e.token_a_address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"0px"}},null,8,["address"])]),a("div",to,[a("p",uo,d(s.theme=="sui"?e.is_forward!==!1?e.token_a_reserves:e.token_b_reserves:e.token_a_reserves)+" - "+d(s.theme=="sui"?e.is_forward!==!1?e.token_b_reserves:e.token_a_reserves:e.token_b_reserves),1),a("div",io,[(v(!0),p(os,null,ls(s.getLabel(e),(h,y)=>(v(),p("div",{key:y,class:O(["label",h])},[h!=="Native"?(v(),p("span",vo,d(h),1)):j("",!0)],2))),128))])])]),a("div",po,d((e==null?void 0:e.fee)*100)+"%",1)]),a("div",_o,[a("div",co,[a("span",null,d(s.$t("common.tvl")),1),a("p",null," $"+d(e.tvl_in_usd?("addCommom"in s?s.addCommom:k(K))(e.tvl_in_usd,2):"--"),1)]),a("div",ho,[a("span",null,d(s.$t("common.volume24H")),1),a("p",null," $"+d(e!=null&&e.vol_in_usd_24h?("addCommom"in s?s.addCommom:k(K))(e==null?void 0:e.vol_in_usd_24h,2):"--"),1)]),a("div",fo,[a("span",null,d(s.$t("newAdd.volume7D")),1),a("p",null," $"+d(e!=null&&e.vol_in_usd_7_day?("addCommom"in s?s.addCommom:k(K))(e==null?void 0:e.vol_in_usd_7_day,2):"--"),1)]),a("div",{class:O(["item-pools",((c=s.rewardApr(e))==null?void 0:c.length)>0&&s.rewardDisplay(e)?"":"apr-mark-h5"])},[a("span",null,d(s.$t("common.apr")),1),a("p",null,[ko,go,H(" "+d(s.getAprTotal(e.apr_7day,s.getRewarderApr(e.rewarder_apr))),1)]),((f=s.rewardApr(e))==null?void 0:f.length)!=0&&s.rewardDisplay(e)?(v(),p("div",wo,[w(b,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day,aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(e.rewarder_apr)),is_display_rewarder:s.rewardDisplay(e),rewarder_apr:s.getRewarderApr(e.rewarder_apr)},"rewarder-info":s.rewardApr(e)},null,8,["l-item","rewarder-info"])])):j("",!0)],2)]),a("div",bo,[w(rs,{class:"cancel-btn",onClick:()=>s.router.push(`/liquidity/deposit?poolAddress=${e==null?void 0:e.swap_account}`)},{default:ks(()=>[H(d(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)):(v(),p("div",oo,[w(I,{loading:!0,type:"statsPoolH5"})]))]),a("div",To,[w(C,{current:s.currentPools,"onUpdate:current":r[5]||(r[5]=e=>s.currentPools=e),"page-size":(s.isPc,10),simple:"",total:s.topPoolsList.length,onChange:s.onChangePools},null,8,["current","page-size","total","onChange"])])])])}const Wo=de(ke,[["render",yo],["__scopeId","data-v-a602f3ad"]]);export{Wo as default};
