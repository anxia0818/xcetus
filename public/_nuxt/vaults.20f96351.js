import{s as As,a as q,u as rs,d as us,c as z}from"./pool.5a864ba8.js";import{a as X,l as v,r as C,e as Z,o as t,f as n,h as o,i as h,v as g,u as I,S as Fs,p as ns,k as ls,j as T,F as M,E as as,M as Is,b as _s,s as Vs,w as is,t as E,B as vs,y as Os,z as cs,A as G,x as U,H as Bs,q as Q,K as Es,Q as Ws,c as zs}from"./entry.b4f9b211.js";/* empty css              */import{a as x,u as ps}from"./sha256.d0cba69f.js";import{_ as Ns}from"./auto-pool-apy-tips.6eedeba3.js";/* empty css              */import{u as Hs}from"./farms.e72c64d3.js";import{_ as Js}from"./upgrade-loading.134d16c5.js";import{_ as Ts}from"./token-warning.dbc1bf88.js";import{i as ts}from"./import-icon.de3e6c66.js";import{u as ds}from"./autoPool.6fb723de.js";import{_ as js}from"./img-connect-wallet_2x.97379b27.js";import{_ as Ks}from"./img-no-Positions_2x.2278d9e4.js";import"./decimal.0bdeb344.js";/* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";const Qs=X({props:{list:{type:Array,default:()=>[]},listLoading:{type:Boolean,default:!1},totalTVL:{type:Number,default:0}},setup(s){const l=x(),b=v(()=>l),m=C(!1);return{wallet:b,sFixD:As,loading:m,addCommom:q}}});const hs=s=>(ns("data-v-eb77f56f"),s=s(),ls(),s),Gs={class:"farms-banner-bg"},Xs={class:"vaults-banner"},Zs={class:"vaults-banner-center"},xs=hs(()=>o("div",{class:"title"},"Vaults",-1)),so=hs(()=>o("div",{class:"desc"},"Harvesting, compounding & rebalancing is automated.Stake your tokens to earn.",-1)),oo={class:"claim-rewards"},eo={class:"claim-title"},to=hs(()=>o("span",null,"Total Value Locked",-1)),no={key:0,class:"loading-spin"},lo={key:1};function ao(s,l,b,m,S,y){const r=Fs;return t(),n("div",Gs,[o("div",Xs,[o("div",Zs,[xs,so,o("div",oo,[o("div",eo,[to,s.listLoading?(t(),n("span",no,[h(r)])):(t(),n("span",lo,"$"+g(("addCommom"in s?s.addCommom:I(q))(("sFixD"in s?s.sFixD:I(As))(s.totalTVL||0,2))),1))])])])])])}const io=Z(Qs,[["render",ao],["__scopeId","data-v-eb77f56f"]]),co=X({setup(){const s=C(!1),l=x(),b=v(()=>l),m=Hs(),S=v(()=>m),y=v(()=>S.value.farmsPoolList);return{isShowMore:s,wallet:b,walletStore:l,farmsPoolList:y}}});const ss=s=>(ns("data-v-6c925870"),s=s(),ls(),s),ro={class:"vaults-table"},uo=ss(()=>o("th",null,"Vaults",-1)),_o=ss(()=>o("th",null,"TVL",-1)),vo=ss(()=>o("th",null,"Your Deposit",-1)),po=ss(()=>o("th",null,"Actions",-1)),ho=ss(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),go={class:"pool"},mo={class:"staked-tvl"},ko={class:"apr"},bo={class:"my-staked"},yo={class:"actions"},fo=ss(()=>o("tr",{style:{height:"8px",background:"unset !important"}},null,-1));function $o(s,l,b,m,S,y){const r=Ns,_=Is;return t(),n("div",ro,[o("table",null,[o("thead",null,[o("tr",null,[uo,_o,o("th",null,[o("span",null,[T("APY "),h(r)])]),vo,po]),ho]),o("tbody",null,[(t(),n(M,null,as(4,(f,V)=>(t(),n(M,{key:V},[o("tr",null,[o("td",null,[o("div",go,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1}),h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",mo,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",ko,[o("span",null,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),o("td",null,[o("div",bo,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])]),o("td",null,[o("div",yo,[h(_,{class:"upgrade-title-skeleton",loading:!0,active:"",paragraph:!1})])])]),fo],64))),64))])])])}const wo=Z(co,[["render",$o],["__scopeId","data-v-6c925870"]]),So=X({props:{pItem:{type:Object,default:()=>({})}},setup(s){const l=ps(),b=v(()=>l),m=rs(),S=v(()=>m),y=d=>{var i;return(d==null?void 0:d.logoURI)||(d==null?void 0:d.logo_url)||((i=S.value.tokensObj[d==null?void 0:d.address])==null?void 0:i.logo_url)||(b.value.theme==="default"?ts("/image/coins/unknown.png"):ts("/image/coins/sui-unknown.png"))},r=C(!0),_=ds(),f=v(()=>_),V=v(()=>f.value.positionInfoObj[s.pItem.id]),P=_s(),p=(d,i)=>{P.push(`/vaults-detail/${d.id}?action=${i}`)},e=d=>{const i=d.needReverse,A=i?d.token_b.address:d.token_a.address,D=i?d.token_a.address:d.token_b.address;P.push(`/swap?from=${A}&to=${D}`)},$=x(),L=v(()=>$);return console.log(s.pItem,"pItem##"),{getCoinIcon:y,direct:r,decimalUi:us,addCommom:q,autoPool:f,positionInfo:V,toAutoPoolDetail:p,toSwap:e,wallet:L}}});const H=s=>(ns("data-v-a7dd166a"),s=s(),ls(),s),Lo={class:"vaults-position-card"},Co={class:"auto-position-card-conetent"},Po={key:0,class:"no-vaults-data no-data"},Ao=H(()=>o("img",{src:js},null,-1)),Io={class:"item lp-tokens"},Vo={alt:""},Oo={class:"right"},Bo=H(()=>o("div",{class:"top"},"Your LP Tokens",-1)),No={class:"bottom"},To={key:0,class:"lp-num"},jo={key:1,class:"lp-num"},Ro={class:"item yourBanlance"},Do=H(()=>o("div",{class:"top"},"Pooled assets",-1)),qo={class:"bottom"},Uo={class:"token-info"},Mo={class:"token-num"},Yo={alt:""},Fo={key:0},Eo={key:1},Wo=H(()=>o("p",null,"--",-1)),zo=[Wo],Ho={class:"token-num"},Jo={alt:""},Ko={key:0},Qo={key:1},Go=H(()=>o("p",null,"--",-1)),Xo=[Go],Zo={class:"item share"},xo=H(()=>o("div",{class:"top"},"Share of pool",-1)),se={class:"bottom"},oe={key:0},ee={key:1},te=H(()=>o("div",{class:"action"},[o("div",null,[o("div",{class:"remove-btn"}," Details> ")])],-1));function ne(s,l,b,m,S,y){var f,V,P,p,e,$,L,d,i,A;const r=vs,_=Vs("image");return t(),n("div",Lo,[o("div",Co,[s.wallet.address?(t(),n("div",{key:1,class:"auto-position-card",onClick:l[1]||(l[1]=D=>s.toAutoPoolDetail(s.pItem,"deposit"))},[o("div",Io,[E(o("img",Vo,null,512),[[_,(V=(f=s.positionInfo)==null?void 0:f.lpInfo)==null?void 0:V.logo_url]]),o("div",Oo,[Bo,o("div",No,[(P=s.wallet)!=null&&P.connected?(t(),n("div",To,g(("addCommom"in s?s.addCommom:I(q))(("decimalUi"in s?s.decimalUi:I(us))((p=s.positionInfo)==null?void 0:p.myLiquidity),4))+" LP",1)):(t(),n("div",jo,"--"))])])]),o("div",Ro,[Do,o("div",qo,[o("div",Uo,[o("div",Mo,[E(o("img",Yo,null,512),[[_,s.pItem.needReverse?s.pItem.coinB.logo_url:s.pItem.coinA.logo_url]]),(e=s.wallet)!=null&&e.connected?(t(),n("div",Fo,[o("span",null,g(("addCommom"in s?s.addCommom:I(q))(($=s.positionInfo)==null?void 0:$.amountA)),1),T(" "+g(s.pItem.needReverse?s.pItem.coinB.symbol:s.pItem.coinA.symbol)+" ",1)])):(t(),n("div",Eo,zo))]),o("div",Ho,[E(o("img",Jo,null,512),[[_,s.pItem.needReverse?s.pItem.coinA.logo_url:s.pItem.coinB.logo_url]]),(L=s.wallet)!=null&&L.connected?(t(),n("div",Ko,[o("span",null,g(("addCommom"in s?s.addCommom:I(q))((d=s.positionInfo)==null?void 0:d.amountB)),1),T(" "+g(s.pItem.needReverse?s.pItem.coinA.symbol:s.pItem.coinB.symbol)+" ",1)])):(t(),n("div",Qo,Xo))])])])]),o("div",Zo,[xo,o("div",se,[(i=s.wallet)!=null&&i.connected?(t(),n("span",oe,g((A=s.positionInfo)==null?void 0:A.myShare)+"%",1)):(t(),n("span",ee,"--%"))])]),te])):(t(),n("div",Po,[Ao,h(r,{class:"add-liquidity-btn",onClick:l[0]||(l[0]=D=>s.wallet.setIsShowWalletModal(!0))},{default:is(()=>[T("Connect Wallet")]),_:1})]))])])}const le=Z(So,[["render",ne],["__scopeId","data-v-a7dd166a"]]),ae=X({components:{TokenWarning:Ts},props:{list:{type:Array,default:()=>[]}},setup(){const{t:s}=Os(),l=ps(),b=v(()=>l),m=rs(),S=v(()=>m),y=a=>{var O;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((O=S.value.tokensObj[a==null?void 0:a.address])==null?void 0:O.logo_url)||(b.value.theme==="default"?ts("/image/coins/unknown.png"):ts("/image/coins/sui-unknown.png"))},r=v(()=>S.value.tokensObj),_=v(()=>b.value.statsData),f=v(()=>b.value.theme),V=ds(),P=v(()=>V),p=C({}),e=a=>{p.value[a]?p.value[a]=!1:p.value[a]=!0,console.log(p.value,"##isShowPosition.value")},$=v(()=>P.value.positionInfoObj),L=x(),d=v(()=>L),i=C(!1),A=_s(),D=(a,O)=>{A.push(`/vaults-detail/${a.id}?action=${O}`)},j=a=>{const O=a.needReverse,Y=O?a.token_b.address:a.token_a.address,F=O?a.token_a.address:a.token_b.address;A.push(`/swap?from=${Y}&to=${F}`)},R=C(!0);return{router:A,getCoinIcon:y,tokensObj:r,t:s,statsData:_,checkNullObj:z,addCommom:q,importIcon:ts,theme:f,isShowPosition:p,togglePosition:e,positionInfo:$,wallet:d,isShowDetail:i,toAutoPoolDetail:D,toSwap:j,direct:R}}});const N=s=>(ns("data-v-e0b7afd4"),s=s(),ls(),s),ie={class:"vaults-table-contianer"},de={class:"table pc-pool-item"},ce={class:"table-header"},re={class:"table-tr"},ue=N(()=>o("th",null,"Vaults",-1)),_e=N(()=>o("th",null,"TVL",-1)),ve=N(()=>o("th",null,"Your Deposit",-1)),pe=N(()=>o("th",null,"Actions",-1)),he=N(()=>o("tr",{style:{height:"4px",background:"unset"}},null,-1)),ge={class:"table-body"},me=["onClick"],ke={class:"token"},be={class:"img-box"},ye={class:"img-box img-last-box"},fe={class:"name"},$e={class:"top"},we={class:"token-name"},Se={class:"tokena"},Le={class:"tokenb"},Ce={class:"fee-warning"},Pe={class:"fee-tier-top"},Ae={key:0},Ie={class:"skeleton-box"},Ve={key:1},Oe={key:2},Be={class:"skeleton-box"},Ne={key:3},Te={key:4},je={class:"skeleton-box"},Re={key:5},De={class:"show-position"},qe={class:"svg-icon"},Ue=N(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Me=[Ue],Ye={key:0,class:"table-tr view-table-tr"},Fe={colspan:"5"},Ee=N(()=>o("td",null,null,-1)),We=N(()=>o("tr",{style:{height:"8px",background:"unset"}},null,-1)),ze={class:"h5-pool-item"},He={class:"token"},Je={class:"img-box"},Ke={key:0,class:"pool-warning"},Qe={class:"img-box img-last-box"},Ge={key:0,class:"pool-warning"},Xe={class:"name"},Ze={class:"top"},xe={class:"token-name"},st={class:"tokena"},ot={class:"tokenb"},et={class:"fee-warning"},tt={class:"fee-tier-top"},nt={class:"bottom"},lt={class:"row"},at=N(()=>o("div",{class:"left"},"TVL",-1)),it={key:0,class:"right"},dt={key:1,class:"right"},ct={class:"row"},rt=N(()=>o("div",{class:"left"},"APY",-1)),ut={key:0,class:"right"},_t={key:1,class:"right theme-right"},vt={class:"row"},pt=N(()=>o("div",{class:"left"},"Your Deposit",-1)),ht={key:0,class:"right"},gt={key:1,class:"right"},mt=["onClick"],kt=N(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),bt=[kt],yt={key:0,class:"h5-auto-pool-details"},ft={class:"h5-item lp-tokens"},$t=N(()=>o("div",{class:"top"},"Your LP Tokens",-1)),wt={class:"bottom"},St={key:0,class:"lp-num"},Lt={key:1,class:"lp-num"},Ct={class:"h5-item share"},Pt=N(()=>o("div",{class:"top"},"Share",-1)),At={class:"bottom"},It={key:0},Vt={key:1},Ot={class:"h5-item yourBanlance"},Bt=N(()=>o("div",{class:"top"},"Your Balance",-1)),Nt={class:"bottom"},Tt={class:"token-info"},jt={class:"token-num"},Rt={alt:""},Dt={key:0},qt={key:1},Ut=N(()=>o("p",null,"--",-1)),Mt=[Ut],Yt={class:"token-num"},Ft={alt:""},Et={key:0},Wt={key:1},zt=N(()=>o("p",null,"--",-1)),Ht=[zt],Jt={class:"action"};function Kt(s,l,b,m,S,y){const r=Ns,_=Ts,f=Is,V=vs,P=le,p=Vs("image");return t(),n("div",ie,[o("table",de,[o("thead",ce,[o("tr",re,[ue,_e,o("th",null,[o("span",null,[T("APY "),h(r)])]),ve,pe]),he]),o("tbody",ge,[(t(!0),n(M,null,as(s.list,(e,$)=>{var L,d,i,A,D,j,R,a,O,Y,F;return t(),n(M,{key:$},[o("tr",{class:"table-tr",onClick:J=>s.togglePosition($)},[o("td",null,[o("div",ke,[o("div",be,[E(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),h(_,{address:e.needReverse?(d=e==null?void 0:e.coinB)==null?void 0:d.address:(L=e==null?void 0:e.coinA)==null?void 0:L.address,"style-params":{right:0,bottom:0,width:"14px",height:"14px"}},null,8,["address"])]),o("div",ye,[E(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),h(_,{address:e.needReverse?(A=e.coinA)==null?void 0:A.address:(i=e==null?void 0:e.coinB)==null?void 0:i.address,"style-params":{right:0,bottom:0,width:"14px",height:"14px"}},null,8,["address"])]),o("div",fe,[o("div",$e,[o("p",we,[o("span",Se,g(e.needReverse?(j=e==null?void 0:e.coinB)==null?void 0:j.symbol:(D=e==null?void 0:e.coinA)==null?void 0:D.symbol),1),T(" - "),o("span",Le,g(e.needReverse?(R=e==null?void 0:e.coinA)==null?void 0:R.symbol:(a=e==null?void 0:e.coinB)==null?void 0:a.symbol),1)]),o("div",Ce,[o("div",Pe,g((e==null?void 0:e.fee)*100)+"%",1)])])])])]),("checkNullObj"in s?s.checkNullObj:I(z))(s.statsData)?(t(),n("td",Ae,[o("div",Ie,[h(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Ve," $"+g(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:I(q))(e.poolUSD,2)),1)),("checkNullObj"in s?s.checkNullObj:I(z))(s.statsData)?(t(),n("td",Oe,[o("div",Be,[h(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Ne,g(e.apy),1)),(O=s.wallet)!=null&&O.connected&&!s.positionInfo[e.id].myLiquidityUSD?(t(),n("td",Te,[o("div",je,[h(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(t(),n("td",Re,[s.wallet.connected?(t(),n(M,{key:0},[T(g(((Y=s.positionInfo[e.id])==null?void 0:Y.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:I(q))((F=s.positionInfo[e.id])==null?void 0:F.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(M,{key:1},[T("--")],64))])),o("td",null,[o("div",De,[h(V,{class:"add-liquidity-btn",onClick:cs(J=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:is(()=>[T("Deposit")]),_:2},1032,["onClick"]),o("div",qe,[(t(),n("svg",{"aria-hidden":"true",class:G(["icon",s.isShowPosition&&s.isShowPosition[$]?"icon-open":""])},Me,2))])])])],8,me),s.isShowPosition&&s.isShowPosition[$]?(t(),n("tr",Ye,[o("td",Fe,[h(P,{"p-item":e},null,8,["p-item"])]),Ee])):U("",!0),We],64)}),128))])]),o("div",ze,[(t(!0),n(M,null,as(s.list,(e,$)=>{var L,d,i,A,D,j,R,a,O,Y,F,J;return t(),n("div",{key:e.address,class:"item"},[o("div",He,[o("div",Je,[E(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinB:e.coinA)]]),(e.needReverse?(d=s.tokensObj[e.coinB.address])!=null&&d.isSelfBuilt:(L=s.tokensObj[e.coinA.address])!=null&&L.isSelfBuilt)?(t(),n("div",Ke)):U("",!0)]),o("div",Qe,[E(o("img",null,null,512),[[p,s.getCoinIcon(e.needReverse?e.coinA:e.coinB)]]),(e.needReverse?(i=s.tokensObj[e.coinA.address])!=null&&i.isSelfBuilt:(A=s.tokensObj[e.coinB.address])!=null&&A.isSelfBuilt)?(t(),n("div",Ge)):U("",!0)]),o("div",Xe,[o("div",Ze,[o("p",xe,[o("span",st,g(e.needReverse?e.coinB.symbol:e.coinA.symbol),1),T(" - "),o("span",ot,g(e.needReverse?e.coinA.symbol:e.coinB.symbol),1)]),o("div",et,[o("div",tt,g((e==null?void 0:e.fee)*100)+"%",1)])])])]),o("div",nt,[o("div",lt,[at,("checkNullObj"in s?s.checkNullObj:I(z))(s.statsData)?(t(),n("div",it,[h(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",dt," $"+g(Number(e.poolUSD)!==0&&Number(e.poolUSD)<.01?"<0.01":("addCommom"in s?s.addCommom:I(q))(e.poolUSD,2)),1))]),o("div",ct,[rt,("checkNullObj"in s?s.checkNullObj:I(z))(s.statsData)?(t(),n("div",ut,[h(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",_t,[o("i",null,g(e.apy),1),h(r)]))]),o("div",vt,[pt,("checkNullObj"in s?s.checkNullObj:I(z))(s.positionInfo)&&((D=s.wallet)!=null&&D.connected)?(t(),n("div",ht,[h(f,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(t(),n("div",gt,[(j=s.wallet)!=null&&j.connected?(t(),n(M,{key:0},[T(g(((R=s.positionInfo[e.id])==null?void 0:R.myLiquidityUSD)!=="<0.01"?`$${("addCommom"in s?s.addCommom:I(q))((a=s.positionInfo[e.id])==null?void 0:a.myLiquidityUSD)}`:"<$0.01"),1)],64)):(t(),n(M,{key:1},[T("--")],64))]))])]),h(V,{class:"h5-add-liquidity-btn",onClick:cs(es=>s.router.push(`/vaults-detail/${e.id}?action=deposit`),["stop"])},{default:is(()=>[T("Deposit")]),_:2},1032,["onClick"]),o("div",{class:G(["details-btn",s.isShowPosition&&s.isShowPosition[$]?"details-btn-text-active":""]),onClick:es=>s.togglePosition($)},[(t(),n("svg",{"aria-hidden":"true",class:G(["icon",s.isShowPosition&&s.isShowPosition[$]?"icon-active":""])},bt,2))],10,mt),s.isShowPosition&&s.isShowPosition[$]?(t(),n("div",yt,[o("div",ft,[$t,o("div",wt,[(O=s.wallet)!=null&&O.connected?(t(),n("div",St,g(("addCommom"in s?s.addCommom:I(q))(("decimalUi"in s?s.decimalUi:I(us))(e==null?void 0:e.myLiquidity,4)))+" LP",1)):(t(),n("div",Lt,"--"))])]),o("div",Ct,[Pt,o("div",At,[(Y=s.wallet)!=null&&Y.connected?(t(),n("span",It,g(e==null?void 0:e.myShare)+"%",1)):(t(),n("span",Vt,"--%"))])]),o("div",Ot,[Bt,o("div",Nt,[o("div",Tt,[o("div",jt,[E(o("img",Rt,null,512),[[p,e.needReverse?e.coinB.logo_url:e.coinA.logo_url]]),(F=s.wallet)!=null&&F.connected?(t(),n("div",Dt,[o("span",null,g(("addCommom"in s?s.addCommom:I(q))(e==null?void 0:e.amountA)),1)])):(t(),n("div",qt,Mt))]),o("div",Yt,[E(o("img",Ft,null,512),[[p,e.needReverse?e.coinA.logo_url:e.coinB.logo_url]]),(J=s.wallet)!=null&&J.connected?(t(),n("div",Et,[o("span",null,g(("addCommom"in s?s.addCommom:I(q))(e==null?void 0:e.amountB)),1)])):(t(),n("div",Wt,Ht))])])])]),o("div",Jt,[o("div",null,[o("div",{class:"remove-btn",onClick:l[0]||(l[0]=es=>s.toAutoPoolDetail(s.pItem,"remove"))},"Details")])])])):U("",!0)])}),128))])])}const Qt=Z(ae,[["render",Kt],["__scopeId","data-v-e0b7afd4"]]),Gt=X({props:{selectValue:{type:String,default:""},showList:{type:Object,default:()=>({})}},setup(s,l){const b=["All Vaults","My Vaults"],m=C("All Vaults"),S=C(s.selectValue),y=C(!1),r=C(!1),_=x(),f=v(()=>_),V=ds(),P=v(()=>V),p=v(()=>P.value.autoPoolList),e=()=>s.showList.length,$=()=>{l.emit("clickRefresh")},L=i=>{S.value=i,l.emit("changeSort",i)},d=i=>{m.value=i,console.log(i,"itemitem"),i=="My Vaults"?l.emit("changeTab",!0):l.emit("changeTab",!1)};return Bs(()=>{document.addEventListener("click",()=>{r.value=!1})}),{isOpenList:r,wallet:f,changeSort:L,tabList:b,currentTab:m,sortValue:S,clickRefresh:$,isRefresh:y,vaultsPoolList:p,getListNum:e,changeTab:d}}});const os=s=>(ns("data-v-1d1eae2e"),s=s(),ls(),s),Xt={class:"vaults-tab"},Zt={class:"tab-left"},xt=["onClick"],sn={key:0},on={class:"tab-right"},en={class:"sort-select"},tn=os(()=>o("div",null,"Sort by",-1)),nn={class:"showSort"},ln=os(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),an=os(()=>o("use",{"xlink:href":"#icon-icon_arrow"},null,-1)),dn=[an],cn={key:0,class:"sort-list"},rn=os(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),un=os(()=>o("svg",{class:"sort-icon","aria-hidden":"true"},[o("use",{"xlink:href":"#icon-icon_on-pool"})],-1)),_n={class:"refresh"},vn=os(()=>o("use",{"xlink:href":"#icon-icon-refresh2"},null,-1)),pn=[vn];function hn(s,l,b,m,S,y){return t(),n("div",Xt,[o("div",Zt,[(t(!0),n(M,null,as(s.tabList,r=>(t(),n("div",{key:r,class:G(["tab-item",s.currentTab==r?"tab-item-active":""]),onClick:_=>s.changeTab(r)},[o("span",null,g(r),1),s.currentTab==r&&s.getListNum()?(t(),n("p",sn,g(s.currentTab=="My Vaults"&&!s.wallet.address?0:s.getListNum()),1)):U("",!0)],10,xt))),128))]),o("div",on,[o("div",en,[o("div",{class:"sort-select-box",onClick:l[0]||(l[0]=cs(r=>s.isOpenList=!s.isOpenList,["stop"]))},[tn,o("div",nn,[o("span",null,g(s.sortValue),1),ln,(t(),n("svg",{class:G(["arrow-icon",s.isOpenList?"arrow-icon-active":""]),"aria-hidden":"true"},dn,2))])]),s.isOpenList?(t(),n("div",cn,[o("div",{class:"sort-item",onClick:l[1]||(l[1]=r=>s.changeSort("APY"))},[T(" APY "),rn]),o("div",{class:"sort-item",onClick:l[2]||(l[2]=r=>s.changeSort("TVL"))},[T(" TVL "),un])])):U("",!0)]),o("div",_n,[(t(),n("svg",{"aria-hidden":"true",class:G(["refresh-icon",s.isRefresh?"refreshing":""]),onClick:l[3]||(l[3]=(...r)=>s.clickRefresh&&s.clickRefresh(...r))},pn,2))])])])}const gn=Z(Gt,[["render",hn],["__scopeId","data-v-1d1eae2e"]]),mn=X({components:{VaultsTabs:gn},setup(){Os();const s=ps(),l=v(()=>s),b=rs(),m=v(()=>b),S=ds(),y=v(()=>S),r=x(),_=v(()=>r),f=v(()=>y.value.positionInfoObj),V=v(()=>l.value.chainName),P=C(!1),p=C(!1),e=C("TVL"),$=C(["APY"]),L=C(!1),d=u=>{console.log(u,"w121");const B=[];B.push(e.value),$.value.forEach((w,c)=>{w!=u&&B.push(w)}),$.value=B,e.value=u,D(y.value.positionInfoList)};Bs(()=>{document.addEventListener("click",()=>{es("")})});const i=C([]),A=C(!0),D=u=>{console.log(u,e.value,"##poolListselectValue.valueselectValue.value");const B=[];u.filter(c=>!c.is_pause).forEach(c=>{var ms,ks,bs,ys,fs,$s,ws,Ss,Ls,Cs,Ps;const k=l.value.addressLpTokens[c.address],W=m.value.poolsObj[c.address];console.log(y.value.apyObj,"##autoPool.value.apyObj");const K=((ms=y.value.apyObj[c.id])==null?void 0:ms.apr)||"0%",Ds=((ks=y.value.apyObj[c.id])==null?void 0:ks.resultApr)||"0",qs=((bs=y.value.apyObj[c.id])==null?void 0:bs.tvl)||0;console.log(c.autoPoolPositionInfo.id,"###watchPools 246"),console.log(k,"##statsObj");const Us=c.needReverse?((ws=m.value.tokensObj[($s=c.coinB)==null?void 0:$s.address])==null?void 0:ws.labels)||[]:((fs=m.value.tokensObj[(ys=c.coinA)==null?void 0:ys.address])==null?void 0:fs.labels)||[],Ms=c.needReverse?((Ls=m.value.tokensObj[(Ss=c.coinA)==null?void 0:Ss.address])==null?void 0:Ls.labels)||[]:((Ps=m.value.tokensObj[(Cs=c.coinB)==null?void 0:Cs.address])==null?void 0:Ps.labels)||[],Ys=[...new Set(Us.concat(Ms))];B.push({...c,liqidity:qs,vol:k?k.vol_in_usd_24h:"0",fee:c.fee?c.fee:W!=null&&W.fee?W.fee:"--",labels:Ys,isFarming:c==null?void 0:c.isFarming,fee_24_h:k&&k.fee_24_h,apy:K,resultApr:Ds})});let w=[];e.value=="APY"?(console.log(e.value,"selectValue.valueselectValue.value"),w=B.sort((c,k)=>Number(k.resultApr)-Number(c.resultApr))):w=B.sort((c,k)=>Number(k.liqidity)-Number(c.liqidity)),i.value=w,A.value=!1,console.log(i.value.length,"##list.value.length"),b.setAutoPoolNum(i.value.length),console.log(i.value,"##list.value")};Q(()=>[y.value.positionInfoList,y.value.apyObj,m.value.poolConfigObj],([u,B,w])=>{console.log("执行次数###",w),u&&u.length>0&&w&&!z(w)&&(console.log(u,"###autoPoolList"),D(u))},{immediate:!0,deep:!0}),Q(()=>[_.value.address,y.value.autoPoolList,m.value.poolConfigObj],([u,B,w])=>{u&&B&&B.length>0&&w&&!z(w)&&S.getMyAutoPoolPosition()},{immediate:!0});const j=C(null),R=v(()=>j.value&&j.value.firstToken?j.value.firstToken:null),a=v(()=>j.value&&j.value.lastToken?j.value.lastToken:null),O=C(),Y=C(0),F=()=>{let u=[];u=i.value,console.log(u,"##pageList"),Y.value=u.reduce((k,W)=>Number(k)+Number(W.poolUSD),0);const B=u.filter((k,W)=>R.value&&a.value?k.coinA.address==R.value.address&&k.coinB.address==a.value.address||k.coinA.address==a.value.address&&k.coinB.address==R.value.address:R.value?k.coinA.address.toLowerCase().includes(R.value.address.toLowerCase())||k.coinB.address.toLowerCase().includes(R.value.address.toLowerCase()):a.value?k.coinA.address.toLowerCase().includes(a.value.address.toLowerCase())||k.coinB.address.toLowerCase().includes(a.value.address.toLowerCase()):u);let w=[],c=[];console.log(B,"##filterArr"),B.forEach((k,W)=>{console.log(k,"irem##");const K=f.value&&f.value[k.id];console.log(K,"##positionInfo"),P.value&&Number(K==null?void 0:K.myLiquidity)>0&&_.value.connected?c.push(k):w.push({...k})}),console.log(w,"121arrnewValnewValnewVal"),O.value=P.value&&_.value.connected?c:w,console.log(O.value,"##showList.value "),A.value||(P.value&&_.value.connected?b.setAutoPoolNum(c.length):b.setAutoPoolNum(w.length))};Q(()=>[R.value,a.value,i.value,P.value,_.value.address],([u,B,w,c])=>{(u||B||w||c)&&(console.log("newValnewValnewVal",u,B,w,JSON.stringify(w)),F())},{immediate:!0}),Es(()=>{b.setAutoPoolNum("--")});const J=v(()=>m.value.autoPoolNum),es=u=>{u=="label"?(s.setIsSelect("pools"),L.value=!L.value,p.value=!1,l.value.setIsShowMore(!1)):u=="select"?(s.setIsSelect("pools"),p.value=!p.value,L.value=!1,l.value.setIsShowMore(!1)):(p.value=!1,L.value=!1)};Q(()=>l.value.isSelect,u=>{u!=="pools"&&es("")},{immediate:!0});const Rs=_s(),gs=()=>{A.value=!0,S.getAutoPoolList(),S.getAutoPoolAPY()};return Q(()=>l.value.isRefresh,u=>{gs()},{immediate:!0}),Q(()=>V.value,u=>{u=="Aptos"&&Rs.push("/pools")},{immediate:!0}),{totalTVL:Y,clickRefresh:gs,isMyLiquidity:P,chainName:V,store:l,select:p,selectValue:e,selectList:$,label:L,changeSort:d,list:i,listLoading:A,showList:O,childTokenSelectRef:j,wallet:_,autoPoolNum:J}}});const kn={class:"vaults-container-new"},bn={class:"vaults-container-center"},yn={class:"auto-pool"},fn={key:0,class:"no-vaults-data no-data"},$n=o("img",{src:js},null,-1),wn={key:0,class:"upgrade-loading pc-loading"},Sn={key:1,class:"upgrade-loading h5-loading"},Ln={key:3,class:"no-vaults-data"},Cn=o("img",{src:Ks},null,-1),Pn=o("span",{class:"no-vaults"},"No vaults found",-1),An=[Cn,Pn];function In(s,l,b,m,S,y){const r=io,_=Ws("VaultsTabs"),f=vs,V=wo,P=Js,p=Qt;return t(),n("div",kn,[h(r,{list:s.showList,"total-t-v-l":s.totalTVL,"list-loading":s.listLoading},null,8,["list","total-t-v-l","list-loading"]),o("div",bn,[h(_,{"select-value":s.selectValue,"show-list":s.showList,onChangeSort:l[0]||(l[0]=e=>s.changeSort(e)),onChangeTab:l[1]||(l[1]=e=>{s.isMyLiquidity=e}),onClickRefresh:s.clickRefresh},null,8,["select-value","show-list","onClickRefresh"]),o("div",yn,[s.isMyLiquidity&&!s.wallet.address?(t(),n("div",fn,[$n,h(f,{class:"add-liquidity-btn",onClick:l[2]||(l[2]=e=>s.wallet.setIsShowWalletModal(!0))},{default:is(()=>[T("Connect Wallet")]),_:1})])):U("",!0),s.isMyLiquidity&&s.wallet.address&&s.listLoading||!s.isMyLiquidity&&s.listLoading?(t(),n(M,{key:1},[s.listLoading?(t(),n("div",wn,[h(V)])):U("",!0),s.listLoading?(t(),n("div",Sn,[h(P,{type:"poolsCard",loading:!0})])):U("",!0)],64)):U("",!0),s.isMyLiquidity&&s.wallet.address&&!s.listLoading||!s.isMyLiquidity&&!s.listLoading?(t(),zs(p,{key:2,list:s.showList},null,8,["list"])):U("",!0),s.autoPoolNum!=="--"&&Number(s.autoPoolNum)<=0&&!s.listLoading?(t(),n("div",Ln,An)):U("",!0)])])])}const Hn=Z(mn,[["render",In]]);export{Hn as default};
