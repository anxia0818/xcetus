import{s as Ps,a as q,u as rs,d as us,c as z}from"./pool.980bfa1b.js";import{a as X,l as p,r as C,e as Z,o as t,f as n,h as o,i as h,v as g,u as I,S as Fs,p as ns,k as ls,j as T,F as M,E as as,M as As,b as _s,s as Is,w as is,t as E,B as ps,y as Vs,z as cs,A as G,x as U,H as Os,q as Q,K as Es,Q as Ws,c as zs}from"./entry.e8589ef7.js";/* empty css              */import{a as x,u as vs}from"./sha256.7ca00e36.js";import{_ as Bs}from"./auto-pool-apy-tips.cc37a3b0.js";/* empty css              */import{u as Hs}from"./farms.489bb402.js";import{_ as Js}from"./upgrade-loading.46c1fb8a.js";import{_ as Ns}from"./token-warning.15beffe0.js";import{i as ts}from"./import-icon.de3e6c66.js";import{u as ds}from"./autoPool.ead65c12.js";import{_ as Ts}from"./img-connect-wallet_2x.c9614b24.js";import{_ as Ks}from"./img-no-Positions_2x.b498cc2e.js";import"./decimal.0bdeb344.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const Qs=X({props:{list:{type:Array,default:()=>[]},listLoading:{type:Boolean,default:!1},totalTVL:{type:Number,default:0}},setup(s){const l=x(),b=p(()=>l),m=C(!1);return{wallet:b,sFixD:Ps,loading:m,addCommom:q}}});const js=s=>(ns("data-v-6b833861"),s=s(),ls(),s),Gs={class:"farms-banner-bg"},Xs={class:"vaults-banner"},Zs={class:"vaults-banner-center"},xs=js(()=>o("div",{class:"title"},"Vaults",-1)),so={class:"claim-rewards"},oo={class:"claim-title"},eo=js(()=>o("span",null,"Total Value Locked",-1)),to={key:0,class:"loading-spin"},no={key:1};function lo(s,l,b,m,S,y){const r=Fs;return t(),n("div",Gs,[o("div",Xs,[o("div",Zs,[xs,o("div",so,[o("div",oo,[eo,s.listLoading?(t(),n("span",to,[h(r)])):(t(),n("span",no,"$"+g(("addCommom"in s?s.addCommom:I(q))(("sFixD"in s?s.sFixD:I(Ps))(s.totalTVL||0,2))),1))])])])])])}const ao=Z(Qs,[["render",lo],["__scopeId","data-v-6b833861"]]),io=X({setup(){const s=C(!1),l=x(),b=p(()=>l),m=Hs(),S=p(()=>m),y=p(()=>S.value.farmsPoolList);return{isShowMore:s,wallet:b,walletStore:l,farmsPoolList:y}}});const ss=s=>(ns("data-v-6c925870"),s=s(),ls(),s),co={class:"vaults-table"},ro=ss(()=>o("th",null,"Vaults",-1)),uo=ss(()=>o("th",null,"TVL",-1)),_o=ss(()=>o("th",null,"Your Deposit",-1)),po=ss(()=>o("th",null,"Actions",-1)),vo=ss(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),ho={class:"pool"},go={class:"staked-tvl"},mo={class:"apr"},ko={class:"my-staked"},bo={class:"actions"},yo=ss(()=>o("tr",{style:{height:"8px",background:"unset !important"}},null,-1));function $o(s,l,b,m,S,y){const r=Bs,_=As;return t(),n("div",co,[o("table",null,[o("thead",null,[o("tr",null,[ro,uo,o("th",null,[o("span",null,[T("APY "),h(r)])]),_o,po]),vo]),o("tbody",null,[(t(),n(M,null,as(4,($,V)=>(t(),n(M,{key:V},[o("tr",null,[o("td",null,[o("div",ho,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1}),h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",go,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",mo,[o("span",null,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),o("td",null,[o("div",ko,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",bo,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),yo],64))),64))])])])}const fo=Z(io,[["render",$o],["__scopeId","data-v-6c925870"]]),wo=X({props:{pItem:{type:Object,default:()=>({})}},setup(s){const l=vs(),b=p(()=>l),m=rs(),S=p(()=>m),y=d=>{var i;return(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||((i=S.value.tokensObj[d==null?void 0:d.address])==null?void 0:i.logo_url)||(b.value.theme==="default"?ts("/image/coins/unknown.png"):ts("/image/coins/sui-unknown.png"))},r=C(!0),_=ds(),$=p(()=>_),V=p(()=>$.value.positionInfoObj[s.pItem.id]),P=_s(),v=(d,i)=>{P.push(`/vaults-detail/${d.id}?action=${i}`)},e=d=>{const i=d.needReverse,A=i?d.token_b.address:d.token_a.address,D=i?d.token_a.address:d.token_b.address;P.push(`/swap?from=${A}&to=${D}`)},f=x(),L=p(()=>f);return console.log(s.pItem,"pItem##"),{getCoinIcon:y,direct:r,decimalUi:us,addCommom:q,autoPool:$,positionInfo:V,toAutoPoolDetail:v,toSwap:e,wallet:L}}});const H=s=>(ns("data-v-a7dd166a"),s=s(),ls(),s),So={class:"vaults-position-card"},Lo={class:"auto-position-card-conetent"},Co={key:0,class:"no-vaults-data no-data"},Po=H(()=>o("img",{src:Ts},null,-1)),Ao={class:"item lp-tokens"},Io={alt:""},Vo={class:"right"},Oo=H(()=>o("div",{class:"top"},"Your LP Tokens",-1)),Bo={class:"bottom"},No={key:0,class:"lp-num"},To={key:1,class:"lp-num"},jo={class:"item yourBanlance"},Ro=H(()=>o("div",{class:"top"},"Pooled assets",-1)),Do={class:"bottom"},qo={class:"token-info"},Uo={class:"token-num"},Mo={alt:""},Yo={key:0},Fo={key:1},Eo=H(()=>o("p",null,"--",-1)),Wo=[Eo],zo={class:"token-num"},Ho={alt:""},Jo={key:0},Ko={key:1},Qo=H(()=>o("p",null,"--",-1)),Go=[Qo],Xo={class:"item share"},Zo=H(()=>o("div",{class:"top"},"Share of pool",-1)),xo={class:"bottom"},se={key:0},oe={key:1},ee=H(()=>o("div",{class:"action"},[o("div",null,[o("div",{class:"remove-btn"}," Details> ")])],-1));function te(s,l,b,m,S,y){var $,V,P,v,e,f,L,d,i,A;const r=ps,_=Is("image");return t(),n("div",So,[o("div",Lo,[s.wallet.address?(t(),n("div",{key:1,class:"auto-position-card",onClick:l[1]||(l[1]=D=>s.toAutoPoolDetail(s.pItem,"deposit"))},[o("div",Ao,[E(o("img",Io,null,512),[[_,(V=($=s.positionInfo)==null?void 0:$.lpInfo)==null?void 0:V.logo_url]]),o("div",Vo,[Oo,o("div",Bo,[(P=s.wallet)!=null&&P.connected?(t(),n("div",No,g(("addCommom"in s?s.addCommom:I(q))(("decimalUi"in s?s.decimalUi:I(us))((v=s.positionInfo)==null?void 0:v.myLiquidity),4))+" LP",1)):(t(),n("div",To,"--"))])])]),o("div",jo,[Ro,o("div",Do,[o("div",qo,[o("div",Uo,[E(o("img",Mo,null,512),[[_,s.pItem.needReverse?s.pItem.coinB.logo_url:s.pItem.coinA.logo_url]]),(e=s.wallet)!=null&&e.connected?(t(),n("div",Yo,[o("span",null,g(("addCommom"in s?s.addCommom:I(q))((f=s.positionInfo)==null?void 0:f.amountA)),1),T(" "+g(s.pItem.needReverse?s.pItem.coinB.symbol:s.pItem.coinA.symbol)+" ",1)])):(t(),n("div",Fo,Wo))]),o("div",zo,[E(o("img",Ho,null,512),[[_,s.pItem.needReverse?s.pItem.coinA.logo_url:s.pItem.coinB.logo_url]]),(L=s.wallet)!=null&&L.connected?(t(),n("div",Jo,[o("span",null,g(("addCommom"in s?s.addCommom:I(q))((d=s.positionInfo)==null?void 0:d.amountB)),1),T(" "+g(s.pItem.needReverse?s.pItem.coinA.symbol:s.pItem.coinB.symbol)+" ",1)])):(t(),n("div",Ko,Go))])])])]),o("div",Xo,[Zo,o("div",xo,[(i=s.wallet)!=null&&i.connected?(t(),n("span",se,g((A=s.positionInfo)==null?void 0:A.myShare)+"%",1)):(t(),n("span",oe,"--%"))])]),ee])):(t(),n("div",Co,[Po,h(r,{class:"add-liquidity-btn",onClick:l[0]||(l[0]=D=>s.wallet.setIsShowWalletModal(!0))},{default:is(()=>[T("Connect Wallet")]),_:1})]))])])}const ne=Z(wo,[["render",te],["__scopeId","data-v-a7dd166a"]]),le=X({components:{TokenWarning:Ns},props:{list:{type:Array,default:()=>[]}},setup(){const{t:s}=Vs(),l=vs(),b=p(()=>l),m=rs(),S=p(()=>m),y=a=>{var O;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((O=S.value.tokensObj[a==null?void 0:a.address])==null?void 0:O.logo_url)||(b.value.theme==="default"?ts("/image/coins/unknown.png"):ts("/image/coins/sui-unknown.png"))},r=p(()=>S.value.tokensObj),_=p(()=>b.value.statsData),$=p(()=>b.value.theme),V=ds(),P=p(()=>V),v=C({}),e=a=>{v.value[a]?v.value[a]=!1:v.value[a]=!0,console.log(v.value,"##isShowPosition.value")},f=p(()=>P.value.positionInfoObj),L=x(),d=p(()=>L),i=C(!1),A=_s(),D=(a,O)=>{A.push(`/vaults-detail/${a.id}?action=${O}`)},j=a=>{const O=a.needReverse,Y=O?a.token_b.address:a.token_a.address,F=O?a.token_a.address:a.token_b.address;A.push(`/swap?from=${Y}&to=${F}`)},R=C(!0);return{router:A,getCoinIcon:y,tokensObj:r,t:s,statsData:_,checkNullObj:z,addCommom:q,importIcon:ts,theme:$,isShowPosition:v,togglePosition:e,positionInfo:f,wallet:d,isShowDetail:i,toAutoPoolDetail:D,toSwap:j,direct:R}}});const N=s=>(ns("data-v-e0b7afd4"),s=s(),ls(),s),ae={class:"vaults-table-contianer"},ie={class:"table pc-pool-item"},de={class:"table-header"},ce={class:"table-tr"},re=N(()=>o("th",null,"Vaults",-1)),ue=N(()=>o("th",null,"TVL",-1)),_e=N(()=>o("th",null,"Your Deposit",-1)),pe=N(()=>o("th",null,"Actions",-1)),ve=N(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),he={class:"table-body"},ge=["onClick"],me={class:"token"},ke={class:"img-box"},be={class:"img-box img-last-box"},ye={class:"name"},$e={class:"top"},fe={class:"token-name"},we={class:"tokena"},Se={class:"tokenb"},Le={class:"fee-warning"},Ce={class:"fee-tier-top"},Pe={key:0},Ae={class:"skeleton-box"},Ie={key:1},Ve={key:2},Oe={class:"skeleton-box"},Be={key:3},Ne={key:4},Te={class:"skeleton-box"},je={key:5},Re={class:"show-position"},De={class:"svg-icon"},qe=N(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Ue=[qe],Me={key:0,class:"table-tr view-table-tr"},Ye={colspan:"5"},Fe=N(()=>o("td",null,null,-1)),Ee=N(()=>o("tr",{style:{height:"8px",background:"unset"}},null,-1)),We={class:"h5-pool-item"},ze={class:"token"},He={class:"img-box"},Je={key:0,class:"pool-warning"},Ke={class:"img-box img-last-box"},Qe={key:0,class:"pool-warning"},Ge={class:"name"},Xe={class:"top"},Ze={class:"token-name"},xe={class:"tokena"},st={class:"tokenb"},ot={class:"fee-warning"},et={class:"fee-tier-top"},tt={class:"bottom"},nt={class:"row"},lt=N(()=>o("div",{class:"left"},"TVL",-1)),at={key:0,class:"right"},it={key:1,class:"right"},dt={class:"row"},ct=N(()=>o("div",{class:"left"},"APY",-1)),rt={key:0,class:"right"},ut={key:1,class:"right theme-right"},_t={class:"row"},pt=N(()=>o("div",{class:"left"},"Your Deposit",-1)),vt={key:0,class:"right"},ht={key:1,class:"right"},gt=["onClick"],mt=N(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),kt=[mt],bt={key:0,class:"h5-auto-pool-details"},yt={class:"h5-item lp-tokens"},$t=N(()=>o("div",{class:"top"},"Your LP Tokens",-1)),ft={class:"bottom"},wt={key:0,class:"lp-num"},St={key:1,class:"lp-num"},Lt={class:"h5-item share"},Ct=N(()=>o("div",{class:"top"},"Share",-1)),Pt={class:"bottom"},At={key:0},It={key:1},Vt={class:"h5-item yourBanlance"},Ot=N(()=>o("div",{class:"top"},"Your Balance",-1)),Bt={class:"bottom"},Nt={class:"token-info"},Tt={class:"token-num"},jt={alt:""},Rt={key:0},Dt={key:1},qt=N(()=>o("p",null,"--",-1)),Ut=[qt],Mt={class:"token-num"},Yt={alt:""},Ft={key:0},Et={key:1},Wt=N(()=>o("p",null,"--",-1)),zt=[Wt],Ht={class:"action"};function Jt(s,l,b,m,S,y){const r=Bs,_=Ns,$=As,V=ps,P=ne,v=Is("image");return t(),n("div",ae,[o("table",ie,[o("thead",de,[o("tr",ce,[re,ue,o("th",null,[o("span",null,[T("APY "),h(r)])]),_e,pe]),ve]),o("tbody",he,[(t(!0),n(M,null,as(s.list,(e,f)=>{var L,d,i,A,D,j,R,a,O,Y,F;return t(),n(M,{key:f},[o("tr",{class:"table-tr",onClick:J=>s.togglePosition(f)},[o("td",null,[o("div",me,[o("div",ke,[E(o("img",null,null,512),[[v,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),h(_,{address:e.needReverse?(d=e==null?void 0:e.coinB)==null?void 0:d.address:(L=e==null?void 0:e.coinA)==null?void 0:L.address,"style-params":{right:0,bottom:0,width:"14px",height:"14px"}},null,8,["address"])]),o("div",be,[E(o("img",null,null,512),[[v,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),h(_,{address:e.needReverse?(A=e.coinA)==null?void 0:A.address:(i=e==null?void 0:e.coinB)==null?void 0:i.address,"style-params":{right:0,bottom:0,width:"14px",height:"14px"}},null,8,["address"])]),o("div",ye,[o("div",$e,[o("p",fe,[o("span",we,g(e.needReverse?(j=e==null?void 0:e.coinB)==null?void 0:j.symbol:(D=e==null?void 0:e.coinA)==null?void 0:D.symbol),1),T(" - "),o("span",Se,g(e.needReverse?(R=e==null?void 0:e.coinA)==null?void 0:R.symbol:(a=e==null?void 0:e.coinB)==null?void 0:a.symbol),1)]),o("div",Le,[o("div",Ce,g((e==null?void 0:e.fee)*100)+"%",1)])])])])]),("checkNullObj"in s?s.checkNullObj:I(z))(s.statsData)?(t(),n("td",Pe,[o("div",Ae,[h($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Ie," $"+g(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:I(q))(e.poolUSD,2)),1)),("checkNullObj"in s?s.checkNullObj:I(z))(s.statsData)?(t(),n("td",Ve,[o("div",Oe,[h($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Be,g(e.apy),1)),(O=s.wallet)!=null&&O.connected&&!s.positionInfo[e.id].myLiquidityUSD?(t(),n("td",Ne,[o("div",Te,[h($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",je,[s.wallet.connected?(t(),n(M,{key:0},[T(g(((Y=s.positionInfo[e.id])==null?void 0:Y.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:I(q))((F=s.positionInfo[e.id])==null?void 0:F.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(M,{key:1},[T("--")],64))])),o("td",null,[o("div",Re,[h(V,{class:"add-liquidity-btn",onClick:cs(J=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:is(()=>[T("Deposit")]),_:2},1032,["onClick"]),o("div",De,[(t(),n("svg",{"aria-hidden":"true",class:G(["icon",s.isShowPosition&&s.isShowPosition[f]?"icon-open":""])},Ue,2))])])])],8,ge),s.isShowPosition&&s.isShowPosition[f]?(t(),n("tr",Me,[o("td",Ye,[h(P,{"p-item":e},null,8,["p-item"])]),Fe])):U("",!0),Ee],64)}),128))])]),o("div",We,[(t(!0),n(M,null,as(s.list,(e,f)=>{var L,d,i,A,D,j,R,a,O,Y,F,J;return t(),n("div",{key:e.address,class:"item"},[o("div",ze,[o("div",He,[E(o("img",null,null,512),[[v,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),(e.needReverse?(d=s.tokensObj[e.coinB.address])!=null&&d.isSelfBuilt:(L=s.tokensObj[e.coinA.address])!=null&&L.isSelfBuilt)?(t(),n("div",Je)):U("",!0)]),o("div",Ke,[E(o("img",null,null,512),[[v,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),(e.needReverse?(i=s.tokensObj[e.coinA.address])!=null&&i.isSelfBuilt:(A=s.tokensObj[e.coinB.address])!=null&&A.isSelfBuilt)?(t(),n("div",Qe)):U("",!0)]),o("div",Ge,[o("div",Xe,[o("p",Ze,[o("span",xe,g(e.needReverse?e.coinB.symbol:e.coinA.symbol),1),T(" - "),o("span",st,g(e.needReverse?e.coinA.symbol:e.coinB.symbol),1)]),o("div",ot,[o("div",et,g((e==null?void 0:e.fee)*100)+"%",1)])])])]),o("div",tt,[o("div",nt,[lt,("checkNullObj"in s?s.checkNullObj:I(z))(s.statsData)?(t(),n("div",at,[h($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",it," $"+g(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:I(q))(e.poolUSD,2)),1))]),o("div",dt,[ct,("checkNullObj"in s?s.checkNullObj:I(z))(s.statsData)?(t(),n("div",rt,[h($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",ut,[o("i",null,g(e.apy),1),h(r)]))]),o("div",_t,[pt,("checkNullObj"in s?s.checkNullObj:I(z))(s.positionInfo)&&((D=s.wallet)!=null&&D.connected)?(t(),n("div",vt,[h($,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",ht,[(j=s.wallet)!=null&&j.connected?(t(),n(M,{key:0},[T(g(((R=s.positionInfo[e.id])==null?void 0:R.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:I(q))((a=s.positionInfo[e.id])==null?void 0:a.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(M,{key:1},[T("--")],64))]))])]),h(V,{class:"h5-add-liquidity-btn",onClick:cs(es=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:is(()=>[T("Deposit")]),_:2},1032,["onClick"]),o("div",{class:G(["details-btn",s.isShowPosition&&s.isShowPosition[f]?"details-btn-text-active":""]),onClick:es=>s.togglePosition(f)},[(t(),n("svg",{"aria-hidden":"true",class:G(["icon",s.isShowPosition&&s.isShowPosition[f]?"icon-active":""])},kt,2))],10,gt),s.isShowPosition&&s.isShowPosition[f]?(t(),n("div",bt,[o("div",yt,[$t,o("div",ft,[(O=s.wallet)!=null&&O.connected?(t(),n("div",wt,g(("addCommom"in s?s.addCommom:I(q))(("decimalUi"in s?s.decimalUi:I(us))(e==null?void 0:e.myLiquidity,4)))+" LP",1)):(t(),n("div",St,"--"))])]),o("div",Lt,[Ct,o("div",Pt,[(Y=s.wallet)!=null&&Y.connected?(t(),n("span",At,g(e==null?void 0:e.myShare)+"%",1)):(t(),n("span",It,"--%"))])]),o("div",Vt,[Ot,o("div",Bt,[o("div",Nt,[o("div",Tt,[E(o("img",jt,null,512),[[v,e.needReverse?e.coinB.logo_url:e.coinA.logo_url]]),(F=s.wallet)!=null&&F.connected?(t(),n("div",Rt,[o("span",null,g(("addCommom"in s?s.addCommom:I(q))(e==null?void 0:e.amountA)),1)])):(t(),n("div",Dt,Ut))]),o("div",Mt,[E(o("img",Yt,null,512),[[v,e.needReverse?e.coinA.logo_url:e.coinB.logo_url]]),(J=s.wallet)!=null&&J.connected?(t(),n("div",Ft,[o("span",null,g(("addCommom"in s?s.addCommom:I(q))(e==null?void 0:e.amountB)),1)])):(t(),n("div",Et,zt))])])])]),o("div",Ht,[o("div",null,[o("div",{class:"remove-btn",onClick:l[0]||(l[0]=es=>s.toAutoPoolDetail(s.pItem,"remove"))},"Details")])])])):U("",!0)])}),128))])])}const Kt=Z(le,[["render",Jt],["__scopeId","data-v-e0b7afd4"]]),Qt=X({props:{selectValue:{type:String,default:""},showList:{type:Object,default:()=>({})}},setup(s,l){const b=["All Vaults","My Vaults"],m=C("All Vaults"),S=C(s.selectValue),y=C(!1),r=C(!1),_=x(),$=p(()=>_),V=ds(),P=p(()=>V),v=p(()=>P.value.autoPoolList),e=()=>s.showList.length,f=()=>{l.emit("clickRefresh")},L=i=>{S.value=i,l.emit("changeSort",i)},d=i=>{m.value=i,console.log(i,"itemitem"),i=="My Vaults"?l.emit("changeTab",!0):l.emit("changeTab",!1)};return Os(()=>{document.addEventListener("click",()=>{r.value=!1})}),{isOpenList:r,wallet:$,changeSort:L,tabList:b,currentTab:m,sortValue:S,clickRefresh:f,isRefresh:y,vaultsPoolList:v,getListNum:e,changeTab:d}}});const os=s=>(ns("data-v-1d1eae2e"),s=s(),ls(),s),Gt={class:"vaults-tab"},Xt={class:"tab-left"},Zt=["onClick"],xt={key:0},sn={class:"tab-right"},on={class:"sort-select"},en=os(()=>o("div",null,"Sort by",-1)),tn={class:"showSort"},nn=os(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),ln=os(()=>o("use",{"xlink:href":"#icon-icon_arrow"},null,-1)),an=[ln],dn={key:0,class:"sort-list"},cn=os(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),rn=os(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),un={class:"refresh"},_n=os(()=>o("use",{"xlink:href":"#icon-icon-refresh2"},null,-1)),pn=[_n];function vn(s,l,b,m,S,y){return t(),n("div",Gt,[o("div",Xt,[(t(!0),n(M,null,as(s.tabList,r=>(t(),n("div",{key:r,class:G(["tab-item",s.currentTab==r?"tab-item-active":""]),onClick:_=>s.changeTab(r)},[o("span",null,g(r),1),s.currentTab==r&&s.getListNum()?(t(),n("p",xt,g(s.currentTab=="My Vaults"&&!s.wallet.address?0:s.getListNum()),1)):U("",!0)],10,Zt))),128))]),o("div",sn,[o("div",on,[o("div",{class:"sort-select-box",onClick:l[0]||(l[0]=cs(r=>s.isOpenList=!s.isOpenList,["stop"]))},[en,o("div",tn,[o("span",null,g(s.sortValue),1),nn,(t(),n("svg",{class:G(["arrow-icon",s.isOpenList?"arrow-icon-active":""]),"aria-hidden":"true"},an,2))])]),s.isOpenList?(t(),n("div",dn,[o("div",{class:"sort-item",onClick:l[1]||(l[1]=r=>s.changeSort("APY"))},[T(" APY "),cn]),o("div",{class:"sort-item",onClick:l[2]||(l[2]=r=>s.changeSort("TVL"))},[T(" TVL "),rn])])):U("",!0)]),o("div",un,[(t(),n("svg",{"aria-hidden":"true",class:G(["refresh-icon",s.isRefresh?"refreshing":""]),onClick:l[3]||(l[3]=(...r)=>s.clickRefresh&&s.clickRefresh(...r))},pn,2))])])])}const hn=Z(Qt,[["render",vn],["__scopeId","data-v-1d1eae2e"]]),gn=X({components:{VaultsTabs:hn},setup(){Vs();const s=vs(),l=p(()=>s),b=rs(),m=p(()=>b),S=ds(),y=p(()=>S),r=x(),_=p(()=>r),$=p(()=>y.value.positionInfoObj),V=p(()=>l.value.chainName),P=C(!1),v=C(!1),e=C("TVL"),f=C(["APY"]),L=C(!1),d=u=>{console.log(u,"w121");const B=[];B.push(e.value),f.value.forEach((w,c)=>{w!=u&&B.push(w)}),f.value=B,e.value=u,D(y.value.positionInfoList)};Os(()=>{document.addEventListener("click",()=>{es("")})});const i=C([]),A=C(!0),D=u=>{console.log(u,e.value,"##poolListselectValue.valueselectValue.value");const B=[];u.filter(c=>!c.is_pause).forEach(c=>{var gs,ms,ks,bs,ys,$s,fs,ws,Ss,Ls,Cs;const k=l.value.addressLpTokens[c.address],W=m.value.poolsObj[c.address];console.log(y.value.apyObj,"##autoPool.value.apyObj");const K=((gs=y.value.apyObj[c.id])==null?void 0:gs.apr)||"0%",Ds=((ms=y.value.apyObj[c.id])==null?void 0:ms.resultApr)||"0",qs=((ks=y.value.apyObj[c.id])==null?void 0:ks.tvl)||0;console.log(c.autoPoolPositionInfo.id,"###watchPools 246"),console.log(k,"##statsObj");const Us=c.needReverse?((fs=m.value.tokensObj[($s=c.coinB)==null?void 0:$s.address])==null?void 0:fs.labels)||[]:((ys=m.value.tokensObj[(bs=c.coinA)==null?void 0:bs.address])==null?void 0:ys.labels)||[],Ms=c.needReverse?((Ss=m.value.tokensObj[(ws=c.coinA)==null?void 0:ws.address])==null?void 0:Ss.labels)||[]:((Cs=m.value.tokensObj[(Ls=c.coinB)==null?void 0:Ls.address])==null?void 0:Cs.labels)||[],Ys=[...new Set(Us.concat(Ms))];B.push({...c,liqidity:qs,vol:k?k.vol_in_usd_24h:"0",fee:c.fee?c.fee:W!=null&&W.fee?W.fee:"--",labels:Ys,isFarming:c==null?void 0:c.isFarming,fee_24_h:k&&k.fee_24_h,apy:K,resultApr:Ds})});let w=[];e.value=="APY"?(console.log(e.value,"selectValue.valueselectValue.value"),w=B.sort((c,k)=>Number(k.resultApr)-Number(c.resultApr))):w=B.sort((c,k)=>Number(k.liqidity)-Number(c.liqidity)),i.value=w,A.value=!1,console.log(i.value.length,"##list.value.length"),b.setAutoPoolNum(i.value.length),console.log(i.value,"##list.value")};Q(()=>[y.value.positionInfoList,y.value.apyObj,m.value.poolConfigObj],([u,B,w])=>{console.log("执行次数###",w),u&&u.length>0&&w&&!z(w)&&(console.log(u,"###autoPoolList"),D(u))},{immediate:!0,deep:!0}),Q(()=>[_.value.address,y.value.autoPoolList,m.value.poolConfigObj],([u,B,w])=>{u&&B&&B.length>0&&w&&!z(w)&&S.getMyAutoPoolPosition()},{immediate:!0});const j=C(null),R=p(()=>j.value&&j.value.firstToken?j.value.firstToken:null),a=p(()=>j.value&&j.value.lastToken?j.value.lastToken:null),O=C(),Y=C(0),F=()=>{let u=[];u=i.value,console.log(u,"##pageList"),Y.value=u.reduce((k,W)=>Number(k)+Number(W.poolUSD),0);const B=u.filter((k,W)=>R.value&&a.value?k.coinA.address==R.value.address&&k.coinB.address==a.value.address||k.coinA.address==a.value.address&&k.coinB.address==R.value.address:R.value?k.coinA.address.toLowerCase().includes(R.value.address.toLowerCase())||k.coinB.address.toLowerCase().includes(R.value.address.toLowerCase()):a.value?k.coinA.address.toLowerCase().includes(a.value.address.toLowerCase())||k.coinB.address.toLowerCase().includes(a.value.address.toLowerCase()):u);let w=[],c=[];console.log(B,"##filterArr"),B.forEach((k,W)=>{console.log(k,"irem##");const K=$.value&&$.value[k.id];console.log(K,"##positionInfo"),P.value&&Number(K==null?void 0:K.myLiquidity)>0&&_.value.connected?c.push(k):w.push({...k})}),console.log(w,"121arrnewValnewValnewVal"),O.value=P.value&&_.value.connected?c:w,console.log(O.value,"##showList.value "),A.value||(P.value&&_.value.connected?b.setAutoPoolNum(c.length):b.setAutoPoolNum(w.length))};Q(()=>[R.value,a.value,i.value,P.value,_.value.address],([u,B,w,c])=>{(u||B||w||c)&&(console.log("newValnewValnewVal",u,B,w,JSON.stringify(w)),F())},{immediate:!0}),Es(()=>{b.setAutoPoolNum("--")});const J=p(()=>m.value.autoPoolNum),es=u=>{u=="label"?(s.setIsSelect("pools"),L.value=!L.value,v.value=!1,l.value.setIsShowMore(!1)):u=="select"?(s.setIsSelect("pools"),v.value=!v.value,L.value=!1,l.value.setIsShowMore(!1)):(v.value=!1,L.value=!1)};Q(()=>l.value.isSelect,u=>{u!=="pools"&&es("")},{immediate:!0});const Rs=_s(),hs=()=>{A.value=!0,S.getAutoPoolList(),S.getAutoPoolAPY()};return Q(()=>l.value.isRefresh,u=>{hs()},{immediate:!0}),Q(()=>V.value,u=>{u=="Aptos"&&Rs.push("/pools")},{immediate:!0}),{totalTVL:Y,clickRefresh:hs,isMyLiquidity:P,chainName:V,store:l,select:v,selectValue:e,selectList:f,label:L,changeSort:d,list:i,listLoading:A,showList:O,childTokenSelectRef:j,wallet:_,autoPoolNum:J}}});const mn={class:"vaults-container-new"},kn={class:"vaults-container-center"},bn={class:"auto-pool"},yn={key:0,class:"no-vaults-data no-data"},$n=o("img",{src:Ts},null,-1),fn={key:0,class:"upgrade-loading pc-loading"},wn={key:1,class:"upgrade-loading h5-loading"},Sn={key:3,class:"no-vaults-data"},Ln=o("img",{src:Ks},null,-1),Cn=o("span",{class:"no-vaults"},"No vaults found",-1),Pn=[Ln,Cn];function An(s,l,b,m,S,y){const r=ao,_=Ws("VaultsTabs"),$=ps,V=fo,P=Js,v=Kt;return t(),n("div",mn,[h(r,{list:s.showList,"total-t-v-l":s.totalTVL,"list-loading":s.listLoading},null,8,["list","total-t-v-l","list-loading"]),o("div",kn,[h(_,{"select-value":s.selectValue,"show-list":s.showList,onChangeSort:l[0]||(l[0]=e=>s.changeSort(e)),onChangeTab:l[1]||(l[1]=e=>{s.isMyLiquidity=e}),onClickRefresh:s.clickRefresh},null,8,["select-value","show-list","onClickRefresh"]),o("div",bn,[s.isMyLiquidity&&!s.wallet.address?(t(),n("div",yn,[$n,h($,{class:"add-liquidity-btn",onClick:l[2]||(l[2]=e=>s.wallet.setIsShowWalletModal(!0))},{default:is(()=>[T("Connect Wallet")]),_:1})])):U("",!0),s.isMyLiquidity&&s.wallet.address&&s.listLoading||!s.isMyLiquidity&&s.listLoading?(t(),n(M,{key:1},[s.listLoading?(t(),n("div",fn,[h(V)])):U("",!0),s.listLoading?(t(),n("div",wn,[h(P,{type:"poolsCard",loading:!0})])):U("",!0)],64)):U("",!0),s.isMyLiquidity&&s.wallet.address&&!s.listLoading||!s.isMyLiquidity&&!s.listLoading?(t(),zs(v,{key:2,list:s.showList},null,8,["list"])):U("",!0),s.autoPoolNum!=="--"&&Number(s.autoPoolNum)<=0&&!s.listLoading?(t(),n("div",Sn,Pn)):U("",!0)])])])}const zn=Z(gn,[["render",An]]);export{zn as default};
