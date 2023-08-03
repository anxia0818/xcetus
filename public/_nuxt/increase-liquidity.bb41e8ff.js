import{_ as zo}from"./back.3064b005.js";import{_ as Ho}from"./coin-pair-name.1a6dbc4e.js";import{_ as Go}from"./status-block.610ef37e.js";import{a as _o,e as jo,o as k,f as y,h as n,v as i,z as Ze,l as Jo,m as D,r as p,b as Ko,y as Qo,O as Vo,D as Ne,q as Yo,i as X,u as A,x as G,t as fe,j as ce,F as Zo,s as xo,w as en,c as xe,G as on,B as nn,J as sn,p as an,k as tn}from"./entry.5440afb7.js";import{_ as ln}from"./assets-card.9a8439d8.js";import{_ as un}from"./token-warning.1a01d3f2.js";import{_ as rn}from"./network-tips.d13dcbb6.js";import{_ as dn}from"./coin-select.b9781358.js";import{_ as vn}from"./swap-setting.39d74992.js";import{_ as Eo,a as Wo,c as mn}from"./new-add-or-create.14161977.js";import{u as pn,a as fn,p as eo,i as V,e as cn,j as Do,b as bn,d as se,c as $e,D as m,f as Re,k as kn,l as In,s as Fo}from"./pool.85ddb2f4.js";import{p as Pe}from"./precision.a7a6c57b.js";/* empty css              */import{u as yn,a as hn}from"./sha256.f397484d.js";import{i as oo}from"./import-icon.de3e6c66.js";/* empty css              *//* empty css              *//* empty css              */import"./img-no-Positions_2x.5d87a9e0.js";/* empty css              */import"./notifi.8219d829.js";import"./useWhale.85d7ef7e.js";import"./index.5d8a7888.js";const wn=_o({props:{direct:{type:Boolean,default:!0},formCoinSymbol:{type:String,default:""},toCoinSymbol:{type:String,default:""}}});const gn={class:"coin-tab"};function Cn(e,s,be,g,ke,J){return k(),y("div",gn,[n("div",{class:Ze(e.direct?"active":""),onClick:s[0]||(s[0]=ae=>e.$emit("changeDirect",!0))},i(e.formCoinSymbol),3),n("div",{class:Ze(e.direct?"":"active"),onClick:s[1]||(s[1]=ae=>e.$emit("changeDirect",!1))},i(e.toCoinSymbol),3)])}const Sn=jo(wn,[["render",Cn],["__scopeId","data-v-97284659"]]),An=_o({setup(){const{t:e,locale:s}=Jo(),be=yn(),g=D(()=>be),ke=p(20),J=p(0),ae=p(null);let Ie=p(!1);const Be=p(!1),te=p(!1),le=p("fromCoin"),ue=p(""),ye=p(""),he=p(!1),we=p(!1),L=p(!0),u=p(""),r=p(""),K=p(!1),Oe=p(!1),re=D(()=>be.slippage),Le=D(()=>{const o=Number(u.value)>Number(N.value),d=Number(r.value)>Number($.value);return ge.value?e("button.enterAmount"):o?e("button.insufficientBalance",{name:a.value.symbol}):d?e("button.insufficientBalance",{name:t.value.symbol}):e("newAdd.addMore")}),qe=D(()=>c.value&&!b.value&&r.value||b.value&&!c.value&&u.value?!1:!(!b.value&&!c.value&&r.value&&u.value)),Ue=D(()=>{const o=Number(u.value)>Number(N.value),d=Number(r.value)>Number($.value);return c.value&&!b.value&&!d||b.value&&!c.value&&!o?!1:!(!c.value&&!b.value&&!o&&!d.value)}),ge=D(()=>c.value&&!b.value&&!r.value||b.value&&!c.value&&!u.value?!0:!c.value&&!b.value&&(!u.value||!r.value)),Y=p(""),Z=p(""),x=p(""),Me=pn(),f=D(()=>Me),a=p({}),t=p({}),l=p(f.value.currentPositionInfo||{}),De=hn(),T=D(()=>De),z=Ko();Qo(()=>{Ce()}),Vo(()=>{T.value.connected||(g.value.chainName==="Aptos"?z.push("/position"):z.push("/pool/position"))});const Fe=D(()=>g.value.chainName),B=D(()=>g.value.chainName?fn(g.value.chainName):{}),de=async()=>{f.value.setCurrentPositionLoading(!0);const o=z.currentRoute.value.query.token||"",d=z.currentRoute.value.query.collect||"",w=z.currentRoute.value.query.pos||"";g.value.chainName==="Aptos"?o&&d&&(Y.value=d,Z.value=z.currentRoute.value.query.address,x.value=o,f.value.setCurrentPositionInfo(Z.value,Y.value,x.value,g.value.chainName),l.value=f.value.currentPositionInfo):w&&(Y.value=d,Z.value=z.currentRoute.value.query.address,x.value=o,f.value.setCurrentPositionInfo(Z.value,Y.value,x.value,g.value.chainName,w),l.value=f.value.currentPositionInfo)};Ne(()=>f.value.addressLpTokens,o=>{$e(o)||de()},{immediate:!0}),Ne(()=>f.value.currentPositionInfo,o=>{if(o){l.value=o,a.value=l.value.token_a,t.value=l.value.token_b;let d=Number(l.value.tick_lower_index),w=Number(l.value.tick_upper_index);const I=Number(l.value.current_tick_index);(l.value.maxPrice.indexOf("+")>0||l.value.maxPrice==="∞"?"∞":l.value.maxPrice)=="∞"||I>d&&I<w?(c.value=!1,b.value=!1):I>=w?(u.value="",c.value=!0,b.value=!1):I<=d?(c.value=!1,b.value=!0,r.value=""):(c.value=!0,u.value="",b.value=!0,r.value=""),pe()}});const c=p(!1),b=p(!1),Q=p({}),ve=p(),me=p(),pe=()=>{var H;if(!l.value||!u.value&&!r.value)return;const{TickMath:o,TickUtil:d}=B.value;let w=l.value.minPrice,I=l.value.maxPrice.indexOf("+")>0?"∞":l.value.maxPrice;console.log(l.value,"positionInfo.value====>");let h=Number(l.value.tick_lower_index),R=Number(l.value.tick_upper_index);const _=Number(l.value.current_tick_index);let q,j,W=Number(w).toString(),O=l.value.maxPrice.indexOf("+")>0||l.value.maxPrice==="∞"?"∞":Number(I);if(W=="0"&&O=="∞"?(h=Number(l.value.tick_lower_index),R=Number(l.value.tick_upper_index)):(q=o.priceToSqrtPriceX64(new m(w),a.value.decimals,t.value.decimals),j=o.priceToSqrtPriceX64(new m(I),a.value.decimals,t.value.decimals)),ve.value=h,me.value=R,console.log(h,R,"tick_lowertick_lower"),I!=="∞"&&h>=R){c.value=!0,u.value="",b.value=!0,r.value="";return}if(I=="∞"||_>h&&_<R){console.log("0413###increase###11111"),c.value=!1,b.value=!1;let C;if(u.value||r.value){if(L.value){const ie=new m(u.value).mul(Math.pow(10,a.value.decimals)).toString();C=new Re(ie)}else{const ie=new m(r.value).mul(Math.pow(10,t.value.decimals)).toString();C=new Re(ie)}const{liquidityAmount:U,tokenMaxA:E,tokenMaxB:S,tokenMaxAOrigin:P,tokenMaxBOrigin:M}=B.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:a.value,tokenB:t.value,lowerTick:h,upperTick:R,coinAmount:C,iscoinA:ee.value?L.value:!L.value,roundUp:!0,slippage:Number(re.value)/100,curSqrtPrice:new Re(l.value.current_sqrt_price)});Q.value={liquidityAmount:U,tokenMaxA:E,tokenMaxB:S,tokenMaxAOrigin:P,tokenMaxBOrigin:M},ee.value?L.value?r.value=Number(S)>0?S:"":u.value=Number(E)>0?E:"":L.value?r.value=E:u.value=S}}else if(_>=R){if(console.log("0413###increase###22222"),u.value="",c.value=!0,b.value=!1,u.value||r.value){let C;const U=new m(r.value).mul(Math.pow(10,(H=t.value)==null?void 0:H.decimals)).toString();C=new Re(U),Q.value={liquidityAmount:kn(q,j,C),tokenMaxA:0,tokenMaxB:r.value}}}else if(_<=h){if(console.log("0413###increase###33333"),c.value=!1,b.value=!0,r.value="",u.value||r.value){let C;const U=new m(u.value).mul(Math.pow(10,a.value.decimals)).toString();C=new Re(U),Q.value={liquidityAmount:In(q,j,C),tokenMaxA:u.value,tokenMaxB:0}}}else console.log("0413###increase###4444"),c.value=!0,u.value="",b.value=!0,r.value=""};Ne(u,(o,d)=>{o&&pe(),o==""&&(r.value="")}),Ne(r,(o,d)=>{o&&pe(),o==""&&(u.value="")});const N=D(()=>T.value.assets&&a.value&&T.value.assets[a.value.address]?eo(T.value.assets[a.value.address].balance,a.value.decimals):0),$=D(()=>T.value.assets&&t.value&&T.value.assets[t.value.address]?eo(T.value.assets[t.value.address].balance,t.value.decimals):0),ee=p(!0);function _e(o){ee.value=o}const je=()=>{de(),J.value=0,Ie.value=!0,setTimeout(()=>{Ie.value=!1},1e3)},Ee=()=>{const o=a.value;a.value=t.value,t.value=o,we.value=!we.value},We=o=>{var d,w,I,h;le.value=o,o==="fromCoin"?(ue.value=((d=t.value)==null?void 0:d.symbol)||"",ye.value=((w=a.value)==null?void 0:w.symbol)||""):(ue.value=((I=a.value)==null?void 0:I.symbol)||"",ye.value=((h=t.value)==null?void 0:h.symbol)||""),he.value=!0},Xe=o=>{le.value==="fromCoin"?(t.value&&o.symbol.toLowerCase()===(t==null?void 0:t.value.symbol.toLowerCase())&&(t.value=null),a.value=o):(a.value&&o.symbol.toLowerCase()===(a==null?void 0:a.value.symbol.toLowerCase())&&(a.value=null),t.value=o),he.value=!1},ze=o=>{o==="fromCoin"?(L.value=!0,g.value.chainName==="Aptos"?u.value=N.value>0?a.value.symbol=="APT"?new m(Number(N.value)).sub(new m(.1)).lt(new m(0))?"0":new m(Number(N.value)).sub(new m(.1)).toString():String(N.value):"":u.value=N.value>0?a.value.symbol=="SUI"?new m(Number(N.value)).sub(new m(.05)).lt(new m(0))?"0":new m(Number(N.value)).sub(new m(.05)).toString():String(N.value):""):(L.value=!1,g.value.chainName==="Aptos"?r.value=$.value>0?t.value.symbol=="APT"?new m(Number($.value)).sub(new m(.1)).lt(new m(0))?"0":new m(Number($.value)).sub(new m(.1)).toString():String($.value):"":r.value=$.value>0?t.value.symbol=="SUI"?new m(Number($.value)).sub(new m(.05)).lt(new m(0))?"0":new m(Number($.value)).sub(new m(.05)).toString():String($.value):"")},He=o=>{o==="fromCoin"?(L.value=!0,u.value=Fo(new m(Number(N.value)).div(2).toString(),a.value.decimals).toString()):(L.value=!1,r.value=Fo(new m(Number($.value)).div(2).toString(),t.value.decimals).toString())},Ce=()=>{ae.value=setInterval(()=>{Be.value||J.value<ke.value&&(J.value+=1,J.value===ke.value&&(J.value=0))},1e3)},{setIsShowSuccess:Ge,setIsShowRejected:Se,setIsShowWaiting:oe,setTransactionDesc:Je,setTransactionTxid:Ae,setPositiomNum:Ke}=be,Qe=async()=>{var R,_,q,j,W,O,H,C,U,E;K.value=!1,te.value=!0,Ae("");const o=c.value?"":`${u.value} ${(R=a.value)==null?void 0:R.symbol}`,d=b.value?"":`${r.value} ${(_=t.value)==null?void 0:_.symbol}`;Je(e("tips.increaseLiquiditySuccess",{from:F.value?d:o,and:!c.value&&!b.value?"and":"",to:F.value?o:d})),oe(!0);const w=L.value;console.log(w,"===>fix_amount_a"),console.log(ve.value,"tickLower.value===>"),console.log(me.value,"tickUpper.value,===>"),console.log("0222###increase###positionInfo###",l);const I=ne.value;let h={};console.log(ne,"===>pendingRewarderArr"),h.coinTypeC=I[0]?I[0].coin_address:"",h.coinTypeD=I[1]?I[1].coin_address:"",h.coinTypeE=I[2]?I[2].coin_address:"";try{const S=await B.value.getAddLiquidityTransactionPayload({pool:{poolAddress:l.value.poolAddress,token_a:l.value.token_a,token_b:l.value.token_b},amount:w?Q.value.tokenMaxA:Q.value.tokenMaxB,fix_amount_a:w,tick_lower:ve.value,tick_upper:me.value,index:g.value.chainName==="Aptos"?l.value.index:l.value.pos_object_id,slippage:Number(re.value)/100,roundUp:!0,...h,collect_fee:!0});console.log(S,"===>payloadAdd11111");let P;if(g.value.chainName==="Aptos")P=await T.value.currentWallet.signAndSubmitTransaction(S);else{const M=await T.value.currentWallet.signAndExecuteTransactionBlock(S);P=B.value.handleTx(M)}if(console.log("toAdd###tx###",P),P&&P.hash){Ae(P.hash),oe(!1),Ge(!0),console.log(l,"===>positionInfo");const M={title:"Supplied",desc:e("tips.addLiquiditySuccessText",{from:c.value?"":`${u.value} ${(q=a.value)==null?void 0:q.symbol}`,and:!c.value&&!b.value?"and":"",to:b.value?"":`${r.value} ${(j=t.value)==null?void 0:j.symbol}`}),hash:P.hash,tit:"Liquidity Increased",icon:"icon-icon-Increased",tokenInfo:{tokena:F.value?`${(O=t.value)==null?void 0:O.address}`:`${(W=a.value)==null?void 0:W.address}`,numa:F.value?`- ${r.value}`:`- ${u.value}`,logoa:F.value?f.value.tokensObj&&t.value&&t.value.address&&f.value.tokensObj[t.value.address]&&f.value.tokensObj[t.value.address].logoURI:f.value.tokensObj&&a.value&&a.value.address&&f.value.tokensObj[a.value.address]&&f.value.tokensObj[a.value.address].logoURI,tokenb:F.value?`${(C=a.value)==null?void 0:C.address}`:`${(H=t.value)==null?void 0:H.address}`,numb:F.value?`- ${u.value}`:`- ${r.value}`,logob:F.value?f.value.tokensObj&&a.value&&a.value.address&&f.value.tokensObj[a.value.address]&&f.value.tokensObj[a.value.address].logoURI:f.value.tokensObj&&t.value&&t.value.address&&f.value.tokensObj[t.value.address]&&f.value.tokensObj[t.value.address].logoURI},text:`Deopsit ${c.value?"":`${u.value} ${(U=a.value)==null?void 0:U.symbol}`} ${!c.value&&!b.value?"and":""} ${b.value?"":`${r.value} ${(E=t.value)==null?void 0:E.symbol}`}`};g.value.chainName!=="Aptos"&&(M.res=P.res),B.value.showTransitionPending(M),await B.value.watchTransaction(M)&&setTimeout(()=>{de(),B.value.getAccount(T.value.address)},1e3),Ke()}else oe(!1),Se(!0);u.value="",r.value="",te.value=!1}catch(S){u.value="",r.value="",console.log("addError###",S),te.value=!1,oe(!1),Se(!0)}},F=D(()=>{var o,d;return(d=(o=l.value)==null?void 0:o.poolInfo)==null?void 0:d.needReverse}),ne=p([]),Ve=p(0),Ye=o=>{var d;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((d=f.value.tokensObj[o==null?void 0:o.address])==null?void 0:d.logo_url)||(g.value.theme==="default"?oo("/image/coins/unknown.png"):oo("/image/coins/sui-unknown.png"))};return Ne(()=>[l.value,f.value.addressLpTokens,f.value.tokensObj,f.value.RATES],async([o,d,w,I])=>{if(!$e(o)&&!$e(d)&&!$e(w)&&!$e(I)){const h=d[o.poolAddress];console.log(h,"===>pool");const R=await B.value.getTickDataByIndex(h.ticks_handle,Number(o.tick_lower_index)),_=await B.value.getTickDataByIndex(h.ticks_handle,Number(o.tick_upper_index));let q={};g.value.chainName==="Aptos"?q=await B.value.getPosRewardersAmount({poolAddress:o.poolAddress,positionName:o.tokenName,tickLowerData:R,tickUpperData:_}):(console.log(o,"===>newValue"),q=await B.value.fetchPosRewardersAmount({poolAddress:o.poolAddress,positionId:o.pos_object_id,coinTypeA:o.coin_type_a,coinTypeB:o.coin_type_b,rewarderInfo:h.rewarderInfo}));const j=[];let W=new m(0);q.forEach((O,H)=>{const C=w[O.coin_address].decimals,U=w[O.coin_address],E=O.amount_owed.toString(),S=new m(E).div(Math.pow(10,C)).toString();if(l.value.poolInfo[`rewarder_display${H+1}`]||Number(S)>0){console.log(O.amount_owed.toString(),"===>element.amount_owed.toString()");const P=I[O.coin_address].price,M=new m(S).mul(P);W=new m(W).plus(M),j.push({...O,...U,amount:S,amountUSD:M.toString()})}}),ne.value=j,Ve.value=Number(Do(W.toString(),2))}},{immediate:!0}),{halfBtnSelect:He,showNum:V,precision:Pe,noEnterAmount:ge,insufficientBalance:Ue,isDisabled:qe,prettyAmount:eo,addCommom:cn,wallet:T,addLoading:te,toAdd:Qe,fromCoinBlance:N,toCoinBlance:$,storeIndex:g,showToCoinLock:b,showFromCoinLock:c,pools:f,t:e,importIcon:oo,changeDirect:_e,fixD:Do,decimalFormat:bn,decimalUi:se,direct:ee,positionInfo:l,clickRefresh:je,refresh:Ie,autoRefreshTime:ke,countdown:J,setMarketTimer:Ce,marketTimer:ae,loading:Be,slippage:re,fromCoin:a,toCoin:t,openCoinSelect:We,onCoinSelect:Xe,existingCoins:ue,lastSelectCoin:ye,currentCoinKey:le,showCoinSelect:he,fromCoinAmount:u,toCoinAmount:r,maxBtnSelect:ze,fixedFromCoin:L,change:we,toggle:Ee,addLiquidityBtnText:Le,isShowLiquidityModal:K,isShowSwapSetting:Oe,needReverse:F,pendingRewarderArr:ne,getCoinIcon:Ye,chainName:Fe}}});const Te=e=>(an("data-v-dd1d4eda"),e=e(),tn(),e),Nn={class:"increase-liquidity-container"},$n={class:"back-title"},Rn={class:"title"},Pn={class:"right title-right"},Tn=Te(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Bn=Te(()=>n("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),On=[Bn],Ln={class:"price-range"},qn={class:"price-range-header"},Un={class:"left"},Mn={class:"right"},Dn={class:"fee"},Fn={class:"price-range-footer"},_n={class:"select-range"},jn={class:"range-bottom"},En={key:0,class:"price"},Wn={key:1,class:"price"},Xn={class:"price-range-block"},zn={class:"price-item"},Hn={class:"title"},Gn={key:0,class:"price"},Jn={key:1,class:"price"},Kn={key:2,class:"text"},Qn={key:3,class:"text"},Vn={class:"price-item"},Yn={class:"title"},Zn={key:0,class:"price"},xn={key:1,class:"price"},ei={key:2,class:"text"},oi={key:3,class:"text"},ni={class:"text-block"},ii={class:"note"},si={class:"note"},ai={class:"card-item"},ti={key:0,class:"unilateral"},li={key:0,src:Eo,alt:""},ui={key:1,src:Wo,alt:""},ri={class:"card-item"},di={key:0,class:"unilateral"},vi={key:0,src:Eo,alt:""},mi={key:1,src:Wo,alt:""},pi={class:"remove-liquidity-bottom-box"},fi={class:"induction remove-liquidity-bottom"},ci={class:"item"},bi={class:"induction-text"},ki={class:"induction-value"},Ii={class:"text-default"},yi={class:"text-default"},hi={class:"item"},wi=Te(()=>n("div",{class:"induction-text"},null,-1)),gi={class:"induction-value"},Ci={class:"text-default"},Si={key:0,class:"item"},Ai={class:"induction-text"},Ni={class:"induction-value"},$i={class:"text-default"},Ri={key:1,class:"item"},Pi=Te(()=>n("div",{class:"induction-text"},null,-1)),Ti={class:"induction-value"},Bi={class:"text-default"},Oi={key:0,class:"induction-text"},Li={key:1,class:"induction-value"},qi={class:"text-default"},Ui=Te(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-add"})],-1)),Mi={class:"loading-global"};function Di(e,s,be,g,ke,J){var Oe,re,Le,qe,Ue,ge,Y,Z,x,Me,f,a,t,l,De,T,z,Fe,B,de,c,b,Q,ve,me,pe,N,$,ee,_e,je,Ee,We,Xe,ze,He,Ce,Ge,Se,oe,Je,Ae,Ke,Qe,F,ne,Ve,Ye,o,d,w,I,h,R,_,q,j,W,O,H,C,U,E,S,P,M,ie,no,io,so,ao,to,lo,uo,ro,vo,mo,po,fo,co,bo,ko,Io,yo,ho,wo,go,Co,So,Ao,No,$o,Ro,Po,To,Bo,Oo,Lo,qo,Uo,Mo;const ae=zo,Ie=Ho,Be=Go,te=Sn,le=ln,ue=un,ye=nn,he=rn,we=dn,L=vn,u=mn,r=sn,K=Yo("image");return k(),y("div",Nn,[n("div",$n,[X(ae),n("div",Rn,[n("p",null,i(e.$t("common.increaseLiquidity")),1),n("div",Pn,[n("div",{class:"slippage-icon",onClick:s[0]||(s[0]=v=>e.isShowSwapSetting=!0)},[Tn,n("span",null,i(e.slippage)+"%",1)]),(k(),y("svg",{"aria-hidden":"true",class:Ze(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:s[1]||(s[1]=(...v)=>e.clickRefresh&&e.clickRefresh(...v))},On,2))])])]),n("div",Ln,[n("div",qn,[n("div",Un,[X(Ie,{"from-coin":e.needReverse?e.positionInfo.token_b:e.positionInfo.token_a,"to-coin":e.needReverse?e.positionInfo.token_a:e.positionInfo.token_b},null,8,["from-coin","to-coin"]),n("div",Mn,[n("div",Dn,i(e.positionInfo.fee*100)+"%",1)])]),X(Be,{"current-status":e.positionInfo.currentStatus||""},null,8,["current-status"])]),n("div",Fn,[n("div",_n,[n("p",null,i(e.$t("common.selectedRange")),1),n("div",jn,[(e.needReverse?!e.direct:e.direct)?(k(),y("div",En," 1 "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" ≈ "+i(("decimalUi"in e?e.decimalUi:A(se))((Oe=e.positionInfo)==null?void 0:Oe.currentPrice,e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals))+" "+i(e.positionInfo&&e.positionInfo.token_b&&((re=e.positionInfo)==null?void 0:re.token_b.symbol)),1)):(k(),y("div",Wn," 1 "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" ≈ "+i(("decimalUi"in e?e.decimalUi:A(se))(1/((Le=e.positionInfo)==null?void 0:Le.currentPrice),e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals))+" "+i(e.positionInfo&&e.positionInfo.token_a&&((qe=e.positionInfo)==null?void 0:qe.token_a.symbol)),1)),X(te,{direct:e.direct,"form-coin-symbol":e.needReverse?(Z=(Y=e.positionInfo)==null?void 0:Y.token_b)==null?void 0:Z.symbol:(ge=(Ue=e.positionInfo)==null?void 0:Ue.token_a)==null?void 0:ge.symbol,"to-coin-symbol":e.needReverse?(a=(f=e.positionInfo)==null?void 0:f.token_a)==null?void 0:a.symbol:(Me=(x=e.positionInfo)==null?void 0:x.token_b)==null?void 0:Me.symbol,onChangeDirect:s[2]||(s[2]=v=>e.direct=v)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])]),n("div",Xn,[n("div",zn,[n("div",Hn,i(e.$t("common.minPrice")),1),(e.needReverse?!e.direct:e.direct)?(k(),y("p",Gn,i(((t=e.positionInfo)==null?void 0:t.minPrice)&&("decimalUi"in e?e.decimalUi:A(se))(e.positionInfo.minPrice,6)),1)):(k(),y("p",Jn,i(e.positionInfo&&e.positionInfo.minPrice&&("decimalUi"in e?e.decimalUi:A(se))(1/((l=e.positionInfo)==null?void 0:l.maxPrice),6)),1)),(e.needReverse?e.direct:!e.direct)?(k(),y("div",Kn,i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol),1)):(k(),y("div",Qn,i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol),1))]),n("div",Vn,[n("div",Yn,i(e.$t("common.maxPrice")),1),(e.needReverse?!e.direct:e.direct)?(k(),y("p",Zn,i(((T=(De=e.positionInfo)==null?void 0:De.maxPrice)==null?void 0:T.indexOf("+"))>0||((z=e.positionInfo)==null?void 0:z.maxPrice)==="∞"?"∞":("decimalUi"in e?e.decimalUi:A(se))(e.positionInfo.maxPrice,6)),1)):(k(),y("p",xn,i(((B=(Fe=e.positionInfo)==null?void 0:Fe.maxPrice)==null?void 0:B.indexOf("+"))>0||((de=e.positionInfo)==null?void 0:de.minPrice)=="0"?"∞":("decimalUi"in e?e.decimalUi:A(se))(1/e.positionInfo.minPrice,6)),1)),(e.needReverse?e.direct:!e.direct)?(k(),y("div",ei,i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol),1)):(k(),y("div",oi,i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol),1))])]),n("div",ni,[n("div",ii,i(e.t("common.positionwillBe",{symbol:(e.needReverse?!e.direct:e.direct)?`${e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol}`:`${e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol}`})),1),n("div",si,i(e.t("common.positionwillBe",{symbol:(e.needReverse?!e.direct:e.direct)?`${e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol}`:`${e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol}`})),1)])])]),n("div",{class:Ze(e.needReverse?"card-container reverse":"card-container")},[n("div",ai,[X(le,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":s[3]||(s[3]=v=>e.fromCoinAmount=v),"has-arrow":!1,"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direction":"From",onOnMax:s[4]||(s[4]=v=>e.maxBtnSelect("fromCoin")),onOnHalf:s[5]||(s[5]=v=>e.halfBtnSelect("fromCoin")),onOnInput:s[6]||(s[6]=v=>e.fromCoinAmount=v),onOnFocus:s[7]||(s[7]=()=>{e.fixedFromCoin=!0}),onOnSelect:s[8]||(s[8]=v=>e.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showFromCoinLock?(k(),y("div",ti,[e.storeIndex.theme=="default"?(k(),y("img",li)):(k(),y("img",ui)),n("p",null,i(e.$t("tips.marketprice")),1)])):G("",!0)]),n("div",ri,[X(le,{modelValue:e.toCoinAmount,"onUpdate:modelValue":s[9]||(s[9]=v=>e.toCoinAmount=v),"has-arrow":!1,"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direction":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"",onOnMax:s[10]||(s[10]=v=>e.maxBtnSelect("toCoin")),onOnHalf:s[11]||(s[11]=v=>e.halfBtnSelect("toCoin")),onOnInput:s[12]||(s[12]=v=>e.toCoinAmount=v),onOnFocus:s[13]||(s[13]=()=>{e.fixedFromCoin=!1}),onOnSelect:s[14]||(s[14]=v=>e.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showToCoinLock?(k(),y("div",di,[e.storeIndex.theme=="default"?(k(),y("img",vi)):(k(),y("img",mi)),n("p",null,i(e.$t("tips.marketprice")),1)])):G("",!0)])],2),n("div",pi,[n("div",fi,[n("div",ci,[n("div",bi,i(e.$t("common.liquidity")),1),n("div",ki,[n("span",Ii,[fe(n("img",null,null,512),[[K,e.getCoinIcon(e.needReverse?(b=e.positionInfo)==null?void 0:b.token_b:(c=e.positionInfo)==null?void 0:c.token_a)]]),n("span",yi,i(("showNum"in e?e.showNum:A(V))(e.needReverse?e.positionInfo.amountB:e.positionInfo.amountA,e.needReverse?(pe=(me=e.positionInfo)==null?void 0:me.token_b)==null?void 0:pe.decimals:(ve=(Q=e.positionInfo)==null?void 0:Q.token_a)==null?void 0:ve.decimals))+" "+i(e.needReverse?(_e=(ee=e.positionInfo)==null?void 0:ee.token_b)==null?void 0:_e.symbol:($=(N=e.positionInfo)==null?void 0:N.token_a)==null?void 0:$.symbol)+" → ",1)]),n("span",null,i(("showNum"in e?e.showNum:A(V))(e.needReverse?("precision"in e?e.precision:A(Pe)).plus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)):("precision"in e?e.precision:A(Pe)).plus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),e.needReverse?(Xe=(We=e.positionInfo)==null?void 0:We.token_b)==null?void 0:Xe.decimals:(Ee=(je=e.positionInfo)==null?void 0:je.token_a)==null?void 0:Ee.decimals))+" "+i(e.needReverse?(Ge=(Ce=e.positionInfo)==null?void 0:Ce.token_b)==null?void 0:Ge.symbol:(He=(ze=e.positionInfo)==null?void 0:ze.token_a)==null?void 0:He.symbol),1)])]),n("div",hi,[wi,n("div",gi,[n("span",Ci,[fe(n("img",null,null,512),[[K,e.getCoinIcon(e.needReverse?(oe=e.positionInfo)==null?void 0:oe.token_a:(Se=e.positionInfo)==null?void 0:Se.token_b)]]),ce(" "+i(("showNum"in e?e.showNum:A(V))(e.needReverse?e.positionInfo.amountA:e.positionInfo.amountB,e.needReverse?(Qe=(Ke=e.positionInfo)==null?void 0:Ke.token_a)==null?void 0:Qe.decimals:(Ae=(Je=e.positionInfo)==null?void 0:Je.token_b)==null?void 0:Ae.decimals))+" "+i(e.needReverse?(Ye=(Ve=e.positionInfo)==null?void 0:Ve.token_a)==null?void 0:Ye.symbol:(ne=(F=e.positionInfo)==null?void 0:F.token_b)==null?void 0:ne.symbol)+" → ",1)]),n("span",null,i(e.needReverse?("showNum"in e?e.showNum:A(V))(("precision"in e?e.precision:A(Pe)).plus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),(I=(w=e.positionInfo)==null?void 0:w.token_a)==null?void 0:I.decimals):("showNum"in e?e.showNum:A(V))(("precision"in e?e.precision:A(Pe)).plus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)),(d=(o=e.positionInfo)==null?void 0:o.token_b)==null?void 0:d.decimals))+" "+i(e.needReverse?(q=(_=e.positionInfo)==null?void 0:_.token_a)==null?void 0:q.symbol:(R=(h=e.positionInfo)==null?void 0:h.token_b)==null?void 0:R.symbol),1)])]),e.chainName=="Sui"&&e.positionInfo&&(((j=e.positionInfo)==null?void 0:j.feeOwedA)>0||((W=e.positionInfo)==null?void 0:W.feeOwedB)>0)?(k(),y("div",Si,[n("div",Ai,i(e.$t("common.fees")),1),n("div",Ni,[n("span",$i,[fe(n("img",null,null,512),[[K,e.getCoinIcon(e.needReverse?(H=e.positionInfo)==null?void 0:H.token_b:(O=e.positionInfo)==null?void 0:O.token_a)]]),ce(" "+i(("showNum"in e?e.showNum:A(V))(e.needReverse?(U=e.positionInfo)==null?void 0:U.feeOwedB:(C=e.positionInfo)==null?void 0:C.feeOwedA,e.needReverse?(M=(P=e.positionInfo)==null?void 0:P.token_b)==null?void 0:M.decimals:(S=(E=e.positionInfo)==null?void 0:E.token_a)==null?void 0:S.decimals))+" ",1),X(ue,{address:e.needReverse?(so=(io=e.positionInfo)==null?void 0:io.token_b)==null?void 0:so.address:(no=(ie=e.positionInfo)==null?void 0:ie.token_a)==null?void 0:no.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),ce(" "+i(e.needReverse?(uo=(lo=e.positionInfo)==null?void 0:lo.token_b)==null?void 0:uo.symbol:(to=(ao=e.positionInfo)==null?void 0:ao.token_a)==null?void 0:to.symbol)+" → ",1)]),n("span",null," 0 "+i(e.needReverse?(po=(mo=e.positionInfo)==null?void 0:mo.token_b)==null?void 0:po.symbol:(vo=(ro=e.positionInfo)==null?void 0:ro.token_a)==null?void 0:vo.symbol),1)])])):G("",!0),e.chainName=="Sui"&&e.positionInfo&&(((fo=e.positionInfo)==null?void 0:fo.feeOwedB)>0||((co=e.positionInfo)==null?void 0:co.feeOwedA)>0)?(k(),y("div",Ri,[Pi,n("div",Ti,[n("span",Bi,[fe(n("img",null,null,512),[[K,e.getCoinIcon(e.needReverse?(ko=e.positionInfo)==null?void 0:ko.token_a:(bo=e.positionInfo)==null?void 0:bo.token_b)]]),ce(" "+i(("showNum"in e?e.showNum:A(V))(e.needReverse?(yo=e.positionInfo)==null?void 0:yo.feeOwedA:(Io=e.positionInfo)==null?void 0:Io.feeOwedB,e.needReverse?(Co=(go=e.positionInfo)==null?void 0:go.token_a)==null?void 0:Co.decimals:(wo=(ho=e.positionInfo)==null?void 0:ho.token_b)==null?void 0:wo.decimals))+" ",1),X(ue,{address:e.needReverse?($o=(No=e.positionInfo)==null?void 0:No.token_a)==null?void 0:$o.address:(Ao=(So=e.positionInfo)==null?void 0:So.token_b)==null?void 0:Ao.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),ce(" "+i(e.needReverse?(Bo=(To=e.positionInfo)==null?void 0:To.token_a)==null?void 0:Bo.symbol:(Po=(Ro=e.positionInfo)==null?void 0:Ro.token_b)==null?void 0:Po.symbol)+" → ",1)]),n("span",null," 0 "+i(e.needReverse?(Uo=(qo=e.positionInfo)==null?void 0:qo.token_a)==null?void 0:Uo.symbol:(Lo=(Oo=e.positionInfo)==null?void 0:Oo.token_b)==null?void 0:Lo.symbol),1)])])):G("",!0),e.chainName=="Sui"&&e.positionInfo.is_display_rewarder?(k(!0),y(Zo,{key:2},xo(e.pendingRewarderArr,(v,Xo)=>(k(),y("div",{key:v,class:"item"},[Number(v.amount)>0?(k(),y("div",Oi,i(Xo==0?e.$t("common.rewards"):""),1)):G("",!0),v.amount>0?(k(),y("div",Li,[n("span",qi,[fe(n("img",null,null,512),[[K,e.getCoinIcon(v)]]),ce(" "+i(v.amount>1e-6?v.amount:v.amount===0?"0":"<0.000001")+" "+i(v.symbol)+" → ",1)]),n("span",null," 0 "+i(v.symbol),1)])):G("",!0)]))),128)):G("",!0)])]),X(ye,{disabled:e.wallet.connected?e.noEnterAmount||e.insufficientBalance||e.isDisabled||e.addLoading||e.addLiquidityBtnText!==e.t("newAdd.addMore"):!1,class:"big-btn",onClick:s[15]||(s[15]=v=>e.wallet.connected?e.isShowLiquidityModal=!0:e.wallet.setIsShowWalletModal(!0))},{default:en(()=>[Ui,n("span",null,i(e.wallet.connected?e.addLiquidityBtnText:e.$t("button.connectWallet")),1)]),_:1},8,["disabled"]),X(he),e.showCoinSelect?(k(),xe(we,{key:0,"existing-coins":e.existingCoins,"last-select-coin":e.lastSelectCoin,onOnSelect:e.onCoinSelect,onOnClose:s[16]||(s[16]=v=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):G("",!0),e.isShowSwapSetting?(k(),xe(L,{key:1,onOnClose:s[17]||(s[17]=v=>e.isShowSwapSetting=!1)})):G("",!0),e.isShowLiquidityModal?(k(),xe(u,{key:2,title:e.$t("button.increase"),"is-increase":!0,"from-coin":e.needReverse?e.toCoin:e.fromCoin,"to-coin":e.needReverse?e.fromCoin:e.toCoin,"from-coin-amount":e.needReverse?e.toCoinAmount:e.fromCoinAmount,"to-coin-amount":e.needReverse?e.fromCoinAmount:e.toCoinAmount,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice,"current-price":e.positionInfo.currentPrice,"current-price-reverse":1/e.positionInfo.currentPrice,"pool-info":(Mo=e.positionInfo)==null?void 0:Mo.poolInfo,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"position-total-amount":e.positionInfo.totalAmountUSD,"fixed-from-coin":e.fixedFromCoin,"tick-lower":e.positionInfo.tick_lower_index,"tick-upper":e.positionInfo.tick_upper_index,"current-price-tab":"custom",onToAdd:e.toAdd,onOnClose:s[18]||(s[18]=v=>e.isShowLiquidityModal=!1)},null,8,["title","from-coin","to-coin","from-coin-amount","to-coin-amount","min-price","max-price","current-price","current-price-reverse","pool-info","show-from-coin-lock","show-to-coin-lock","position-total-amount","fixed-from-coin","tick-lower","tick-upper","onToAdd"])):G("",!0),fe(n("div",Mi,[X(r)],512),[[on,e.pools.currentPositionLoading]])])}const ls=jo(An,[["render",Di],["__scopeId","data-v-dd1d4eda"]]);export{ls as default};
