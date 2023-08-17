import{_ as ao}from"./upgrade-chart.07f91e1f.js";import{u as to,a as ro,p as Y,d as m,v as W,w as H,e as y,r as co,c as d,q as Z}from"./pool.5e02e1cf.js";import{a as uo,r as U,m as b,E as ho,D as x,y as po,T as mo,e as vo,q as fo,o as n,f as l,i as u,x as k,h as e,F as B,s as L,z as A,v as a,K as J,u as i,t as _,J as ko,S as go,j as oo,G as K,p as bo,k as yo}from"./entry.76d0f1e9.js";/* empty css              *//* empty css              */import{u as _o,a as Io,c as No}from"./sha256.cb7ec708.js";import{i as eo}from"./import-icon.de3e6c66.js";import{D as O}from"./decimal.0e8aa3f1.js";import{g as jo}from"./common-fun.82f75d81.js";import{_ as Ao,a as Oo}from"./img-no-Positions_2x.63348b0a.js";import"./index.7d47b1d5.js";import"./lodash.3d4a174f.js";import"./precision.a7a6c57b.js";const Co=uo({setup(){const o=U(!0),g=U(!1),T=U([]),P=U("vol"),V=_o(),h=b(()=>V),R=Io();b(()=>R);const F=to(),c=b(()=>F),v=ho();b(()=>No[h.value.chainName]);const N=b(()=>h.value.chainName),q=N.value=="Sui"?[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"}]:[{label:"Volume",value:"vol"},{label:"TVL",value:"tvl"},{label:"Fees",value:"fee"}],$=t=>{P.value=t.value},w=U(0),E=()=>{g.value=!0,w.value=w.value+1,h.value.getTransactionList(N.value,v.query.poolAddress,w.value)},S=U(!1),M=()=>{S.value=!0,o.value=!0,T.value=[],c.value.setPoolConfigList(h.value.chainName,h.value.filterCoinsObj),h.value.getTransactionList(N.value,v.query.poolAddress,0),V.getStatsData(h.value.chainName,h.value.filterCoinsObj),setTimeout(()=>{S.value=!1},1e3)},s=b(()=>{const t=v.query.poolAddress;return c.value.poolConfigObj[t]}),p=U({}),C=b(()=>jo(s.value,c,h));x(()=>v,t=>{o.value=!0,T.value=[],h.value.getTransactionList(N.value,v.query.poolAddress,0)},{immediate:!0,deep:!0});const I=ro(h.value.chainName);x(()=>[h.value.liquiditytransactionList,s.value],async([t,f])=>{t&&f&&(h.value.chainName&&h.value.chainName.includes("Aptos")&&(p.value=await I.getPool(f.address)),T.value=t,o.value=!1,g.value=!1)},{immediate:!0,deep:!0}),po(()=>{o.value=!0}),mo(()=>{h.value.setClearLiquiditytransactionList()});const D=t=>{var j;let f;return(t==null?void 0:t.address)=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?f="0x2::sui::SUI":f=t==null?void 0:t.address,(t==null?void 0:t.logoURI)||(t==null?void 0:t.logo_url)||((j=c.value.tokensObj[f])==null?void 0:j.logo_url)||(h.value.theme==="default"?eo("/image/coins/unknown.png"):eo("/image/coins/sui-unknown.png"))},so=t=>{switch(t){case"add_liquidity_event":return"Add liquidity";case"swap_event":return"Swap";case"remove_liquidity_event":return"Remove liquidity";case"collect_reward_event":return"Claim Rewards";case"collect_fee_event":return"Claim Fees"}},Q=b(()=>{let t;return h.value.chainName=="Sui"?t=(s==null?void 0:s.value)&&(s==null?void 0:s.value.object)&&(s==null?void 0:s.value.object.coin_a):t=(p==null?void 0:p.value)&&(p==null?void 0:p.value.coinAmountA),Y(t,(s==null?void 0:s.value)&&(s==null?void 0:s.value.coinA)&&(s==null?void 0:s.value.coinA.decimals))}),X=b(()=>{let t;return h.value.chainName=="Sui"?t=(s==null?void 0:s.value)&&(s==null?void 0:s.value.object)&&(s==null?void 0:s.value.object.coin_b):t=(p==null?void 0:p.value)&&(p==null?void 0:p.value.coinAmountB),Y(t,(s==null?void 0:s.value)&&(s==null?void 0:s.value.coinB)&&(s==null?void 0:s.value.coinB.decimals))}),z=b(()=>{var t;if(c.value.RATES){const f=new O(Q.value),j=new O(((t=c.value.RATES[(s==null?void 0:s.value)&&(s==null?void 0:s.value.coinA)&&s.value.coinA.address])==null?void 0:t.price)||0);return f.mul(j).toString()}else return"--"}),G=b(()=>{var t;if(c.value.RATES){const f=new O(X.value),j=new O(((t=c.value.RATES[(s==null?void 0:s.value)&&(s==null?void 0:s.value.coinB)&&s.value.coinB.address])==null?void 0:t.price)||0);return f.mul(j).toString()}else return"--"}),no=b(()=>{const t=new O(z.value),f=new O(G.value);return m(t.div(t.plus(f)).toNumber().toFixed(2),2)}),lo=b(()=>{const t=new O(z.value),f=new O(G.value);return m(f.div(t.plus(f)).toNumber().toFixed(2),2)});return{formatNumberDecimal:W,getTimeDifferenceString:H,isTracitionLoading:g,poolStatsInfo:C,chainName:N,loadMore:E,poolMoreInfo:p,addCommom:y,decimalUi:m,route:v,timeFormat:co,amountAUSD:z,amountBUSD:G,amountA:Q,amountB:X,tokena_ratio:no,tokenb_ratio:lo,poolInfo:s,getType:so,getCoinIcon:D,transactionList:T,refresh:S,clickRefresh:M,changeMode:$,modeList:q,mode:P,checkNullObj:d,store:h,isLoading:o}}});const r=o=>(bo("data-v-a082fd18"),o=o(),yo(),o),Uo={key:0,class:"loading-spin-liquidity loading-global"},wo={class:"analytics-container"},So={class:"mode-tab"},Bo=["onClick"],To=r(()=>e("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),Do=[To],Lo={class:"poolInfo"},Ro={class:"info"},qo=r(()=>e("div",{class:"page-tit"},"Pool Info",-1)),$o={class:"info-detail"},Eo={class:"top"},Mo=r(()=>e("p",null,"Pool Address",-1)),Po={class:"copy-address"},Vo=r(()=>e("use",{"xlink:href":"#icon-icon-copy1"},null,-1)),Fo=[Vo],zo={class:"center"},Go={class:"item"},Jo=r(()=>e("p",null,"Pool ID",-1)),Ko={class:"item"},Wo=r(()=>e("p",null,"Tick Sapcing",-1)),Ho={class:"item"},Qo=r(()=>e("p",null,"Fee Tier",-1)),Xo={key:0},Yo={key:1},Zo={class:"item"},xo={class:"left"},oe={alt:""},ee={class:"right"},se=r(()=>e("use",{"xlink:href":"#icon-icon-copy1"},null,-1)),ne=[se],le={class:"item"},ie={class:"left"},ae={alt:""},te={class:"right"},de=r(()=>e("use",{"xlink:href":"#icon-icon-copy1"},null,-1)),re=[de],ce={class:"composition"},ue=r(()=>e("div",{class:"page-tit"},"Pool Composition",-1)),he={class:"table-info table-composition"},pe={class:"table"},me=r(()=>e("thead",{class:"table-header"},[e("tr",{class:"table-tr"},[e("th",null,"Token"),e("th",null,"Amount"),e("th",null,"Amount (USD)"),e("th",null,"Token Ratio")])],-1)),ve={key:0,class:"table-tr"},fe={key:0},ke={class:"skeleton-box"},ge={key:1},be={alt:""},ye={key:2},_e={class:"skeleton-box"},Ie={key:3},Ne={key:4},je={class:"skeleton-box"},Ae={key:5},Oe={key:6},Ce={class:"skeleton-box"},Ue={key:7},we={class:"table-tr"},Se={key:0},Be={class:"skeleton-box"},Te={key:1},De={alt:""},Le={key:2},Re={class:"skeleton-box"},qe={key:3},$e={key:4},Ee={class:"skeleton-box"},Me={key:5},Pe={key:6},Ve={class:"skeleton-box"},Fe={key:7},ze={key:1,class:"table-tr"},Ge={key:0},Je={class:"skeleton-box"},Ke={key:1},We={alt:""},He={key:2},Qe={class:"skeleton-box"},Xe={key:3},Ye={key:4},Ze={class:"skeleton-box"},xe={key:5},os={key:6},es={class:"skeleton-box"},ss={key:7},ns={class:"card"},ls={class:"token"},is={alt:""},as={class:"name"},ts={class:"symbol"},ds={class:"label"},rs={class:"bottom"},cs={class:"row"},us=r(()=>e("div",{class:"left"},"Amount",-1)),hs={key:0,class:"skeleton-box"},ps={key:1,class:"right"},ms={class:"row"},vs=r(()=>e("div",{class:"left"},"Amount (USD)",-1)),fs={key:0,class:"skeleton-box"},ks={key:1,class:"right"},gs={class:"row"},bs=r(()=>e("div",{class:"left"},"Token Ratio",-1)),ys={key:0,class:"skeleton-box"},_s={key:1,class:"right"},Is={class:"card"},Ns={class:"token"},js={alt:""},As={class:"name"},Os={class:"symbol"},Cs={class:"label"},Us={class:"bottom"},ws={class:"row"},Ss=r(()=>e("div",{class:"left"},"Amount",-1)),Bs={key:0,class:"skeleton-box"},Ts={key:1,class:"right"},Ds={class:"row"},Ls=r(()=>e("div",{class:"left"},"Amount (USD)",-1)),Rs={key:0,class:"skeleton-box"},qs={key:1,class:"right"},$s={class:"row"},Es=r(()=>e("div",{class:"left"},"Token Ratio",-1)),Ms={key:0,class:"skeleton-box"},Ps={key:1,class:"right"},Vs={class:"transactions"},Fs=r(()=>e("div",{class:"page-tit"},"Transactions",-1)),zs={class:"table-info table-transactions"},Gs=r(()=>e("thead",{class:"table-header"},[e("tr",{class:"table-tr"},[e("th",null,"Event"),e("th",null,"Amounts"),e("th",null,"Transactions"),e("th",null,"Time")])],-1)),Js={key:0,class:"loading-global"},Ks={key:1,class:"table-body"},Ws={key:0,class:"icon swap-icon","aria-hidden":"true"},Hs=r(()=>e("use",{"xlink:href":"#icon-tx_swap"},null,-1)),Qs=[Hs],Xs={key:1,class:"icon add-icon","aria-hidden":"true"},Ys=r(()=>e("use",{"xlink:href":"#icon-tx_add"},null,-1)),Zs=[Ys],xs={key:2,class:"icon remove-icon","aria-hidden":"true"},on=r(()=>e("use",{"xlink:href":"#icon-tx_remove"},null,-1)),en=[on],sn={alt:""},nn={key:0,class:"jiantou"},ln=["href"],an={key:2,class:"noData"},tn={key:0,src:Ao},dn={key:1,src:Oo},rn={class:"h5-table-info h5-transactions-table-info"},cn={class:"row"},un=r(()=>e("div",{class:"left"},"Event",-1)),hn={class:"right"},pn={key:0,class:"icon swap-icon","aria-hidden":"true"},mn=r(()=>e("use",{"xlink:href":"#icon-tx_swap"},null,-1)),vn=[mn],fn={key:1,class:"icon add-icon","aria-hidden":"true"},kn=r(()=>e("use",{"xlink:href":"#icon-tx_add"},null,-1)),gn=[kn],bn={key:2,class:"icon remove-icon","aria-hidden":"true"},yn=r(()=>e("use",{"xlink:href":"#icon-tx_remove"},null,-1)),_n=[yn],In={class:"row"},Nn=r(()=>e("div",{class:"left"},"Amounts",-1)),jn={class:"right"},An={alt:""},On={key:0,class:"jiantou"},Cn={class:"row"},Un=r(()=>e("div",{class:"left"},"Transactions",-1)),wn={class:"right"},Sn=["href"],Bn={class:"row"},Tn=r(()=>e("div",{class:"left"},"Time (UTC)",-1)),Dn={class:"right"};function Ln(o,g,T,P,V,h){var N,q,$,w,E,S,M;const R=ko,F=ao,c=go,v=fo("image");return n(),l(B,null,[o.isLoading?(n(),l("div",Uo,[u(R)])):k("",!0),e("div",wo,[e("div",So,[e("div",null,[(n(!0),l(B,null,L(o.modeList,s=>(n(),l("div",{key:s,class:A(["title",o.mode==s.value?"title-active":""]),onClick:p=>o.changeMode(s)},a(s.label),11,Bo))),128))]),(n(),l("svg",{"aria-hidden":"true",class:A(o.refresh?"refresh refresh-icon":"refresh-icon"),onClick:g[0]||(g[0]=(...s)=>o.clickRefresh&&o.clickRefresh(...s))},Do,2))]),e("div",Lo,[u(F,{"pool-info":o.poolStatsInfo,mode:o.mode,address:o.route.query.poolAddress},null,8,["pool-info","mode","address"]),e("div",Ro,[qo,e("div",$o,[e("div",Eo,[Mo,e("div",Po,[e("span",null,a(o.poolInfo&&o.poolInfo.address),1),(n(),l("svg",{class:"icon","aria-hidden":"true",onClick:g[1]||(g[1]=J(s=>o.store.copy(o.poolInfo&&o.poolInfo.address),["stop"]))},Fo))])]),e("div",zo,[e("div",Go,[Jo,e("span",null,"#"+a(o.poolInfo&&o.poolInfo.object&&((N=o.poolInfo)==null?void 0:N.object.index)),1)]),e("div",Ko,[Wo,e("span",null,a(o.poolInfo&&((q=o.poolInfo)==null?void 0:q.tick_spacing)),1)]),e("div",Ho,[Qo,("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("span",Xo,"--%")):(n(),l("span",Yo,a(o.poolInfo&&(($=o.poolInfo)==null?void 0:$.fee)*100)+"%",1))])]),e("div",{class:A(["bottom",(w=o.poolInfo)!=null&&w.needReverse?"bottom-reserve":""])},[e("div",Zo,[e("div",xo,[_(e("img",oe,null,512),[[v,o.getCoinIcon(o.poolInfo&&o.poolInfo.coinA)]]),e("span",null,a(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.symbol),1)]),e("div",ee,[e("span",null,a(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.address),1),(n(),l("svg",{class:"icon","aria-hidden":"true",onClick:g[2]||(g[2]=J(s=>o.store.copy(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.address),["stop"]))},ne))])]),e("div",le,[e("div",ie,[_(e("img",ae,null,512),[[v,o.getCoinIcon(o.poolInfo&&o.poolInfo.coinB)]]),e("span",null,a(o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.symbol),1)]),e("div",te,[e("span",null,a(o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.address),1),(n(),l("svg",{class:"icon","aria-hidden":"true",onClick:g[3]||(g[3]=J(s=>o.store.copy(o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.address),["stop"]))},re))])])],2)])])]),e("div",ce,[ue,e("div",he,[e("table",pe,[me,e("tbody",{class:A(["table-body",o.poolInfo&&o.poolInfo.needReverse?"reserve-th":""])},[(E=o.poolInfo)!=null&&E.needReverse?k("",!0):(n(),l("tr",ve,[("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("td",fe,[e("div",ke,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",ge,[_(e("img",be,null,512),[[v,o.getCoinIcon(o.poolInfo&&o.poolInfo.coinA)]]),e("div",null,[e("p",null,a(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.symbol),1),e("span",null,a(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.name),1)])])),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",ye,[e("div",_e,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",Ie,a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountA,o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.decimals))),1)),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",Ne,[e("div",je,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",Ae,"$"+a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountAUSD,2))),1)),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",Oe,[e("div",Ce,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",Ue,a(("decimalUi"in o?o.decimalUi:i(m))(o.tokena_ratio*100,2))+"%",1))])),e("tr",we,[("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("td",Se,[e("div",Be,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",Te,[_(e("img",De,null,512),[[v,o.getCoinIcon(o.poolInfo&&o.poolInfo.coinB)]]),e("div",null,[e("p",null,a(o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.symbol),1),e("span",null,a(o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.name),1)])])),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",Le,[e("div",Re,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",qe,a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountB,o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.decimals))),1)),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",$e,[e("div",Ee,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",Me,"$"+a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountBUSD,2))),1)),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",Pe,[e("div",Ve,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",Fe,a(("decimalUi"in o?o.decimalUi:i(m))(o.tokenb_ratio*100,2))+"%",1))]),(S=o.poolInfo)!=null&&S.needReverse?(n(),l("tr",ze,[("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("td",Ge,[e("div",Je,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",Ke,[_(e("img",We,null,512),[[v,o.getCoinIcon(o.poolInfo&&o.poolInfo.coinA)]]),e("div",null,[e("p",null,a(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.symbol),1),e("span",null,a(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.name),1)])])),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",He,[e("div",Qe,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",Xe,a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountA,o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.decimals))),1)),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",Ye,[e("div",Ze,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",xe,"$"+a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountAUSD,2))),1)),(o.store.theme=="default"?("checkNullObj"in o?o.checkNullObj:i(d))(o.poolMoreInfo||{}):("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{}))?(n(),l("td",os,[e("div",es,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])])):(n(),l("td",ss,a(("decimalUi"in o?o.decimalUi:i(m))(o.tokena_ratio*100,2))+"%",1))])):k("",!0)],2)])]),e("div",{class:A(["h5-table-info",(M=o.poolInfo)!=null&&M.needReverse?"h5-table-info-reserve":""])},[e("div",ns,[e("div",ls,[_(e("img",is,null,512),[[v,o.getCoinIcon(o.poolInfo&&o.poolInfo.coinA)]]),e("div",as,[e("div",ts,a(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.symbol),1),e("div",ds,a(o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.name),1)])]),e("div",rs,[e("div",cs,[us,("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("div",hs,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),l("div",ps,a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountA,o.poolInfo&&o.poolInfo.coinA&&o.poolInfo.coinA.decimals))),1))]),e("div",ms,[vs,("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("div",fs,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),l("div",ks,"$"+a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountAUSD,2))),1))]),e("div",gs,[bs,("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("div",ys,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),l("div",_s,a(("decimalUi"in o?o.decimalUi:i(m))(o.tokena_ratio*100,2))+"%",1))])])]),e("div",Is,[e("div",Ns,[_(e("img",js,null,512),[[v,o.getCoinIcon(o.poolInfo&&o.poolInfo.coinB)]]),e("div",As,[e("div",Os,a(o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.symbol),1),e("div",Cs,a(o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.name),1)])]),e("div",Us,[e("div",ws,[Ss,("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("div",Bs,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),l("div",Ts,a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountB,o.poolInfo&&o.poolInfo.coinB&&o.poolInfo.coinB.decimals))),1))]),e("div",Ds,[Ls,("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("div",Rs,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),l("div",qs,"$"+a(("addCommom"in o?o.addCommom:i(y))(("decimalUi"in o?o.decimalUi:i(m))(o.amountBUSD,2))),1))]),e("div",$s,[Es,("checkNullObj"in o?o.checkNullObj:i(d))(o.poolInfo||{})?(n(),l("div",Ms,[u(c,{class:"upgrade-text-skeleton",loading:!0,active:"",paragraph:!1})])):(n(),l("div",Ps,a(("decimalUi"in o?o.decimalUi:i(m))(o.tokenb_ratio*100,2))+"%",1))])])])],2)]),e("div",Vs,[Fs,e("div",zs,[e("table",{class:A(["table",o.transactionList&&o.transactionList.length>0?"":"no-date-table"])},[Gs,o.isTracitionLoading?(n(),l("div",Js,[u(R)])):k("",!0),o.transactionList&&o.transactionList.length>0?(n(),l("tbody",Ks,[(n(!0),l(B,null,L(o.transactionList,(s,p)=>{var C;return n(),l("tr",{key:p,class:"table-tr"},[e("td",null,[s.type=="swap_event"?(n(),l("svg",Ws,Qs)):k("",!0),s.type=="add_liquidity_event"?(n(),l("svg",Xs,Zs)):k("",!0),s.type=="remove_liquidity_event"||s.type=="collect_reward_event"||s.type=="collect_fee_event"?(n(),l("svg",xs,en)):k("",!0),oo(" "+a(o.getType(s.type)),1)]),e("td",null,[e("div",{class:A(["item-box",(s.type=="add_liquidity_event"||s.type=="remove_liquidity_event")&&((C=o.poolInfo)!=null&&C.needReverse)?"reserve-item-box":""])},[(n(!0),l(B,null,L(s.items,(I,D)=>_((n(),l("div",{key:D,class:"item"},[_(e("img",sn,null,512),[[v,o.getCoinIcon(I)]]),e("p",null,a(("addCommom"in o?o.addCommom:i(y))(("formatNumberDecimal"in o?o.formatNumberDecimal:i(W))(I.amount,2))),1),e("span",null,a(I.symbol),1),s.type=="swap_event"?(n(),l("p",nn,"→")):k("",!0)])),[[K,Number(I.amount)!==0]])),128))],2)]),e("td",null,[e("a",{href:("getExplorerUrl"in o?o.getExplorerUrl:i(Z))("tx",s.tx),target:"_blank"},[e("span",null,a(s.tx.substr(0,6))+" ... "+a(s.tx.substr(s.tx.length-4,4)),1)],8,ln)]),e("td",null,a(("getTimeDifferenceString"in o?o.getTimeDifferenceString:i(H))(Date.parse(s.block_time))),1)])}),128))])):k("",!0),o.transactionList&&o.transactionList.length<=0&&!o.isLoading?(n(),l("div",an,[o.store.theme=="default"?(n(),l("img",tn)):(n(),l("img",dn)),e("p",null,a(o.$t("newAdd.noTransactions")),1)])):k("",!0)],2)]),e("div",rn,[(n(!0),l(B,null,L(o.transactionList,(s,p)=>{var C;return _((n(),l("div",{key:p,class:"card"},[e("div",cn,[un,e("div",hn,[s.type=="swap_event"?(n(),l("svg",pn,vn)):k("",!0),s.type=="add_liquidity_event"?(n(),l("svg",fn,gn)):k("",!0),s.type=="remove_liquidity_event"||s.type=="collect_reward_event"||s.type=="collect_fee_event"?(n(),l("svg",bn,_n)):k("",!0),oo(" "+a(o.getType(s.type)),1)])]),e("div",In,[Nn,e("div",jn,[e("div",{class:A(["item-box",(s.type=="add_liquidity_event"||s.type=="remove_liquidity_event")&&((C=o.poolInfo)!=null&&C.needReverse)?"reserve-item-box":""])},[(n(!0),l(B,null,L(s.items,(I,D)=>_((n(),l("div",{key:D,class:"item"},[e("div",null,[e("div",null,[_(e("img",An,null,512),[[v,o.getCoinIcon(I)]]),e("p",null,a(("addCommom"in o?o.addCommom:i(y))(("formatNumberDecimal"in o?o.formatNumberDecimal:i(W))(I.amount,2))),1),e("span",null,a(I.symbol),1)]),s.type=="swap_event"?(n(),l("p",On,"→")):k("",!0)])])),[[K,Number(I.amount)!==0]])),128))],2)])]),e("div",Cn,[Un,e("div",wn,[e("a",{href:("getExplorerUrl"in o?o.getExplorerUrl:i(Z))("tx",s.tx),target:"_blank"},[e("span",null,a(s.tx.substr(0,6))+" ... "+a(s.tx.substr(s.tx.length-4,4)),1)],8,Sn)])]),e("div",Bn,[Tn,e("div",Dn,a(("getTimeDifferenceString"in o?o.getTimeDifferenceString:i(H))(Date.parse(s.block_time))),1)])])),[[K,o.transactionList&&o.transactionList.length>0]])}),128))]),o.transactionList&&o.transactionList.length>=10&&!o.isLoading?(n(),l("div",{key:0,class:"load-more",onClick:g[4]||(g[4]=s=>o.loadMore())}," Load More ")):k("",!0)])])],64)}const Hn=vo(Co,[["render",Ln],["__scopeId","data-v-a082fd18"]]);export{Hn as default};
