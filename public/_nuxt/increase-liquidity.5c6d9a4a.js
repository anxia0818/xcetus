import{_ as Ho}from"./back.3bdb6324.js";import{_ as zo}from"./coin-pair-name.553f523e.js";import{_ as Ko}from"./status-block.ed7ad01b.js";import{a as Fo,e as jo,o as k,f as y,h as n,v as i,A as Ze,y as Go,l as D,r as p,b as Jo,H as Qo,T as Vo,q as Ne,s as Yo,i as X,u as A,x as K,t as fe,j as ce,F as Zo,E as xo,w as en,c as xe,N as on,B as nn,S as sn,p as an,k as tn}from"./entry.34270a91.js";import{_ as ln}from"./assets-card.bc17c3ab.js";import{_ as un}from"./token-warning.9b654f29.js";import{_ as rn}from"./network-tips.d83b03ae.js";import{_ as dn}from"./coin-select.b334804c.js";import{_ as mn}from"./swap-setting.16c3df7f.js";import{a as vn}from"./new-add-or-create.95b52cf0.js";import{u as pn,o as V,p as eo,a as fn,q as Do,j as cn,d as se,s as _o,e as bn,c as $e,b as Re,r as kn,v as In}from"./pool.f82ea964.js";import{p as Te}from"./precision.a7a6c57b.js";/* empty css              */import{u as yn,a as hn}from"./sha256.3c86449e.js";import{i as oo}from"./import-icon.de3e6c66.js";import{D as v}from"./decimal.0bdeb344.js";import{_ as Eo}from"./img-lock_2x.a28135f4.js";import{_ as Wo}from"./img-lock_2x.1ddfb1d5.js";/* empty css              *//* empty css              *//* empty css              */import"./img-no-Positions_2x.ccb0cf0b.js";/* empty css              */import"./icon-error_2x.1cf862b5.js";import"./notifi.6be6f884.js";import"./useWhale.f5ac22e5.js";const wn=Fo({props:{direct:{type:Boolean,default:!0},formCoinSymbol:{type:String,default:""},toCoinSymbol:{type:String,default:""}}});const gn={class:"coin-tab"};function Cn(e,s,be,g,ke,G){return k(),y("div",gn,[n("div",{class:Ze(e.direct?"active":""),onClick:s[0]||(s[0]=ae=>e.$emit("changeDirect",!0))},i(e.formCoinSymbol),3),n("div",{class:Ze(e.direct?"":"active"),onClick:s[1]||(s[1]=ae=>e.$emit("changeDirect",!1))},i(e.toCoinSymbol),3)])}const Sn=jo(wn,[["render",Cn],["__scopeId","data-v-97284659"]]),An=Fo({setup(){const{t:e,locale:s}=Go(),be=yn(),g=D(()=>be),ke=p(20),G=p(0),ae=p(null);let Ie=p(!1);const Be=p(!1),te=p(!1),le=p("fromCoin"),ue=p(""),ye=p(""),he=p(!1),we=p(!1),q=p(!0),u=p(""),r=p(""),J=p(!1),Oe=p(!1),re=D(()=>be.slippage),qe=D(()=>{const o=Number(u.value)>Number(N.value),d=Number(r.value)>Number($.value);return ge.value?e("button.enterAmount"):o?e("button.insufficientBalance",{name:a.value.symbol}):d?e("button.insufficientBalance",{name:t.value.symbol}):e("newAdd.addMore")}),Le=D(()=>c.value&&!b.value&&r.value||b.value&&!c.value&&u.value?!1:!(!b.value&&!c.value&&r.value&&u.value)),Ue=D(()=>{const o=Number(u.value)>Number(N.value),d=Number(r.value)>Number($.value);return c.value&&!b.value&&!d||b.value&&!c.value&&!o?!1:!(!c.value&&!b.value&&!o&&!d.value)}),ge=D(()=>c.value&&!b.value&&!r.value||b.value&&!c.value&&!u.value?!0:!c.value&&!b.value&&(!u.value||!r.value)),Y=p(""),Z=p(""),x=p(""),Me=pn(),f=D(()=>Me),a=p({}),t=p({}),l=p(f.value.currentPositionInfo||{}),De=hn(),P=D(()=>De),H=Jo();Qo(()=>{Ce()}),Vo(()=>{P.value.connected||(g.value.chainName==="Aptos"?H.push("/position"):H.push("/pool/position"))});const _e=D(()=>g.value.chainName),B=D(()=>g.value.chainName?bn(g.value.chainName):{}),de=async()=>{f.value.setCurrentPositionLoading(!0);const o=H.currentRoute.value.query.token||"",d=H.currentRoute.value.query.collect||"",w=H.currentRoute.value.query.pos||"";g.value.chainName==="Aptos"?o&&d&&(Y.value=d,Z.value=H.currentRoute.value.query.address,x.value=o,f.value.setCurrentPositionInfo(Z.value,Y.value,x.value,g.value.chainName),l.value=f.value.currentPositionInfo):w&&(Y.value=d,Z.value=H.currentRoute.value.query.address,x.value=o,f.value.setCurrentPositionInfo(Z.value,Y.value,x.value,g.value.chainName,w),l.value=f.value.currentPositionInfo)};Ne(()=>f.value.addressLpTokens,o=>{$e(o)||de()},{immediate:!0}),Ne(()=>f.value.currentPositionInfo,o=>{if(o){l.value=o,a.value=l.value.token_a,t.value=l.value.token_b;let d=Number(l.value.tick_lower_index),w=Number(l.value.tick_upper_index);const I=Number(l.value.current_tick_index);(l.value.maxPrice.indexOf("+")>0||l.value.maxPrice==="∞"?"∞":l.value.maxPrice)=="∞"||I>d&&I<w?(c.value=!1,b.value=!1):I>=w?(u.value="",c.value=!0,b.value=!1):I<=d?(c.value=!1,b.value=!0,r.value=""):(c.value=!0,u.value="",b.value=!0,r.value=""),pe()}});const c=p(!1),b=p(!1),Q=p({}),me=p(),ve=p(),pe=()=>{var z;if(!l.value||!u.value&&!r.value)return;const{TickMath:o,TickUtil:d}=B.value;let w=l.value.minPrice,I=l.value.maxPrice.indexOf("+")>0?"∞":l.value.maxPrice;console.log(l.value,"positionInfo.value====>");let h=Number(l.value.tick_lower_index),R=Number(l.value.tick_upper_index);const F=Number(l.value.current_tick_index);let L,j,W=Number(w).toString(),O=l.value.maxPrice.indexOf("+")>0||l.value.maxPrice==="∞"?"∞":Number(I);if(W=="0"&&O=="∞"?(h=Number(l.value.tick_lower_index),R=Number(l.value.tick_upper_index)):(L=o.priceToSqrtPriceX64(new v(w),a.value.decimals,t.value.decimals),j=o.priceToSqrtPriceX64(new v(I),a.value.decimals,t.value.decimals)),me.value=h,ve.value=R,console.log(h,R,"tick_lowertick_lower"),I!=="∞"&&h>=R){c.value=!0,u.value="",b.value=!0,r.value="";return}if(I=="∞"||F>h&&F<R){console.log("0413###increase###11111"),c.value=!1,b.value=!1;let C;if(u.value||r.value){if(q.value){const ie=new v(u.value).mul(Math.pow(10,a.value.decimals)).toString();C=new Re(ie)}else{const ie=new v(r.value).mul(Math.pow(10,t.value.decimals)).toString();C=new Re(ie)}const{liquidityAmount:U,tokenMaxA:E,tokenMaxB:S,tokenMaxAOrigin:T,tokenMaxBOrigin:M}=B.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:a.value,tokenB:t.value,lowerTick:h,upperTick:R,coinAmount:C,iscoinA:ee.value?q.value:!q.value,roundUp:!0,slippage:Number(re.value)/100,curSqrtPrice:new Re(l.value.current_sqrt_price)});Q.value={liquidityAmount:U,tokenMaxA:E,tokenMaxB:S,tokenMaxAOrigin:T,tokenMaxBOrigin:M},ee.value?q.value?r.value=Number(S)>0?S:"":u.value=Number(E)>0?E:"":q.value?r.value=E:u.value=S}}else if(F>=R){if(console.log("0413###increase###22222"),u.value="",c.value=!0,b.value=!1,u.value||r.value){let C;const U=new v(r.value).mul(Math.pow(10,(z=t.value)==null?void 0:z.decimals)).toString();C=new Re(U),Q.value={liquidityAmount:kn(L,j,C),tokenMaxA:0,tokenMaxB:r.value}}}else if(F<=h){if(console.log("0413###increase###33333"),c.value=!1,b.value=!0,r.value="",u.value||r.value){let C;const U=new v(u.value).mul(Math.pow(10,a.value.decimals)).toString();C=new Re(U),Q.value={liquidityAmount:In(L,j,C),tokenMaxA:u.value,tokenMaxB:0}}}else console.log("0413###increase###4444"),c.value=!0,u.value="",b.value=!0,r.value=""};Ne(u,(o,d)=>{o&&pe(),o==""&&(r.value="")}),Ne(r,(o,d)=>{o&&pe(),o==""&&(u.value="")});const N=D(()=>P.value.assets&&a.value&&P.value.assets[a.value.address]?eo(P.value.assets[a.value.address].balance,a.value.decimals):0),$=D(()=>P.value.assets&&t.value&&P.value.assets[t.value.address]?eo(P.value.assets[t.value.address].balance,t.value.decimals):0),ee=p(!0);function Fe(o){ee.value=o}const je=()=>{de(),G.value=0,Ie.value=!0,setTimeout(()=>{Ie.value=!1},1e3)},Ee=()=>{const o=a.value;a.value=t.value,t.value=o,we.value=!we.value},We=o=>{var d,w,I,h;le.value=o,o==="fromCoin"?(ue.value=((d=t.value)==null?void 0:d.symbol)||"",ye.value=((w=a.value)==null?void 0:w.symbol)||""):(ue.value=((I=a.value)==null?void 0:I.symbol)||"",ye.value=((h=t.value)==null?void 0:h.symbol)||""),he.value=!0},Xe=o=>{le.value==="fromCoin"?(t.value&&o.symbol.toLowerCase()===(t==null?void 0:t.value.symbol.toLowerCase())&&(t.value=null),a.value=o):(a.value&&o.symbol.toLowerCase()===(a==null?void 0:a.value.symbol.toLowerCase())&&(a.value=null),t.value=o),he.value=!1},He=o=>{o==="fromCoin"?(q.value=!0,g.value.chainName==="Aptos"?u.value=N.value>0?a.value.symbol=="APT"?new v(Number(N.value)).sub(new v(.1)).lt(new v(0))?"0":new v(Number(N.value)).sub(new v(.1)).toString():String(N.value):"":u.value=N.value>0?a.value.symbol=="SUI"?new v(Number(N.value)).sub(new v(.05)).lt(new v(0))?"0":new v(Number(N.value)).sub(new v(.05)).toString():String(N.value):""):(q.value=!1,g.value.chainName==="Aptos"?r.value=$.value>0?t.value.symbol=="APT"?new v(Number($.value)).sub(new v(.1)).lt(new v(0))?"0":new v(Number($.value)).sub(new v(.1)).toString():String($.value):"":r.value=$.value>0?t.value.symbol=="SUI"?new v(Number($.value)).sub(new v(.05)).lt(new v(0))?"0":new v(Number($.value)).sub(new v(.05)).toString():String($.value):"")},ze=o=>{o==="fromCoin"?(q.value=!0,u.value=_o(new v(Number(N.value)).div(2).toString(),a.value.decimals).toString()):(q.value=!1,r.value=_o(new v(Number($.value)).div(2).toString(),t.value.decimals).toString())},Ce=()=>{ae.value=setInterval(()=>{Be.value||G.value<ke.value&&(G.value+=1,G.value===ke.value&&(G.value=0))},1e3)},{setIsShowSuccess:Ke,setIsShowRejected:Se,setIsShowWaiting:oe,setTransactionDesc:Ge,setTransactionTxid:Ae,setPositiomNum:Je}=be,Qe=async()=>{var R,F,L,j,W,O,z,C,U,E;J.value=!1,te.value=!0,Ae("");const o=c.value?"":`${u.value} ${(R=a.value)==null?void 0:R.symbol}`,d=b.value?"":`${r.value} ${(F=t.value)==null?void 0:F.symbol}`;Ge(e("tips.increaseLiquiditySuccess",{from:_.value?d:o,and:!c.value&&!b.value?"and":"",to:_.value?o:d})),oe(!0);const w=q.value;console.log(w,"===>fix_amount_a"),console.log(me.value,"tickLower.value===>"),console.log(ve.value,"tickUpper.value,===>"),console.log("0222###increase###positionInfo###",l);const I=ne.value;let h={};console.log(ne,"===>pendingRewarderArr"),h.coinTypeC=I[0]?I[0].coin_address:"",h.coinTypeD=I[1]?I[1].coin_address:"",h.coinTypeE=I[2]?I[2].coin_address:"";try{const S=await B.value.getAddLiquidityTransactionPayload({pool:{poolAddress:l.value.poolAddress,token_a:l.value.token_a,token_b:l.value.token_b},amount:w?Q.value.tokenMaxA:Q.value.tokenMaxB,fix_amount_a:w,tick_lower:me.value,tick_upper:ve.value,index:g.value.chainName==="Aptos"?l.value.index:l.value.pos_object_id,slippage:Number(re.value)/100,roundUp:!0,...h,collect_fee:!0});console.log(S,"===>payloadAdd11111");let T;if(g.value.chainName==="Aptos")T=await P.value.currentWallet.signAndSubmitTransaction(S);else{const M=await P.value.currentWallet.signAndExecuteTransactionBlock(S);T=B.value.handleTx(M)}if(console.log("toAdd###tx###",T),T&&T.hash){Ae(T.hash),oe(!1),Ke(!0),console.log(l,"===>positionInfo");const M={title:"Supplied",desc:e("tips.addLiquiditySuccessText",{from:c.value?"":`${u.value} ${(L=a.value)==null?void 0:L.symbol}`,and:!c.value&&!b.value?"and":"",to:b.value?"":`${r.value} ${(j=t.value)==null?void 0:j.symbol}`}),hash:T.hash,tit:"Liquidity Increased",icon:"icon-icon-Increased",tokenInfo:{tokena:_.value?`${(O=t.value)==null?void 0:O.address}`:`${(W=a.value)==null?void 0:W.address}`,numa:_.value?`- ${r.value}`:`- ${u.value}`,logoa:_.value?f.value.tokensObj&&t.value&&t.value.address&&f.value.tokensObj[t.value.address]&&f.value.tokensObj[t.value.address].logoURI:f.value.tokensObj&&a.value&&a.value.address&&f.value.tokensObj[a.value.address]&&f.value.tokensObj[a.value.address].logoURI,tokenb:_.value?`${(C=a.value)==null?void 0:C.address}`:`${(z=t.value)==null?void 0:z.address}`,numb:_.value?`- ${u.value}`:`- ${r.value}`,logob:_.value?f.value.tokensObj&&a.value&&a.value.address&&f.value.tokensObj[a.value.address]&&f.value.tokensObj[a.value.address].logoURI:f.value.tokensObj&&t.value&&t.value.address&&f.value.tokensObj[t.value.address]&&f.value.tokensObj[t.value.address].logoURI},text:`Deopsit ${c.value?"":`${u.value} ${(U=a.value)==null?void 0:U.symbol}`} ${!c.value&&!b.value?"and":""} ${b.value?"":`${r.value} ${(E=t.value)==null?void 0:E.symbol}`}`};g.value.chainName!=="Aptos"&&(M.res=T.res),B.value.showTransitionPending(M),await B.value.watchTransaction(M)&&setTimeout(()=>{de(),B.value.getAccount(P.value.address)},1e3),Je()}else oe(!1),Se(!0);u.value="",r.value="",te.value=!1}catch(S){u.value="",r.value="",console.log("addError###",S),te.value=!1,oe(!1),Se(!0)}},_=D(()=>{var o,d;return(d=(o=l.value)==null?void 0:o.poolInfo)==null?void 0:d.needReverse}),ne=p([]),Ve=p(0),Ye=o=>{var d;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((d=f.value.tokensObj[o==null?void 0:o.address])==null?void 0:d.logo_url)||(g.value.theme==="default"?oo("/image/coins/unknown.png"):oo("/image/coins/sui-unknown.png"))};return Ne(()=>[l.value,f.value.addressLpTokens,f.value.tokensObj,f.value.RATES],async([o,d,w,I])=>{if(!$e(o)&&!$e(d)&&!$e(w)&&!$e(I)){const h=d[o.poolAddress];console.log(h,"===>pool");const R=await B.value.getTickDataByIndex(h.ticks_handle,Number(o.tick_lower_index)),F=await B.value.getTickDataByIndex(h.ticks_handle,Number(o.tick_upper_index));let L={};g.value.chainName==="Aptos"?L=await B.value.getPosRewardersAmount({poolAddress:o.poolAddress,positionName:o.tokenName,tickLowerData:R,tickUpperData:F}):(console.log(o,"===>newValue"),L=await B.value.fetchPosRewardersAmount({poolAddress:o.poolAddress,positionId:o.pos_object_id,coinTypeA:o.coin_type_a,coinTypeB:o.coin_type_b,rewarderInfo:h.rewarderInfo}));const j=[];let W=new v(0);L.forEach((O,z)=>{const C=w[O.coin_address].decimals,U=w[O.coin_address],E=O.amount_owed.toString(),S=new v(E).div(Math.pow(10,C)).toString();if(l.value.poolInfo[`rewarder_display${z+1}`]||Number(S)>0){console.log(O.amount_owed.toString(),"===>element.amount_owed.toString()");const T=I[O.coin_address].price,M=new v(S).mul(T);W=new v(W).plus(M),j.push({...O,...U,amount:S,amountUSD:M.toString()})}}),ne.value=j,Ve.value=Number(Do(W.toString(),2))}},{immediate:!0}),{halfBtnSelect:ze,showNum:V,precision:Te,noEnterAmount:ge,insufficientBalance:Ue,isDisabled:Le,prettyAmount:eo,addCommom:fn,wallet:P,addLoading:te,toAdd:Qe,fromCoinBlance:N,toCoinBlance:$,storeIndex:g,showToCoinLock:b,showFromCoinLock:c,pools:f,t:e,importIcon:oo,changeDirect:Fe,fixD:Do,decimalFormat:cn,decimalUi:se,direct:ee,positionInfo:l,clickRefresh:je,refresh:Ie,autoRefreshTime:ke,countdown:G,setMarketTimer:Ce,marketTimer:ae,loading:Be,slippage:re,fromCoin:a,toCoin:t,openCoinSelect:We,onCoinSelect:Xe,existingCoins:ue,lastSelectCoin:ye,currentCoinKey:le,showCoinSelect:he,fromCoinAmount:u,toCoinAmount:r,maxBtnSelect:He,fixedFromCoin:q,change:we,toggle:Ee,addLiquidityBtnText:qe,isShowLiquidityModal:J,isShowSwapSetting:Oe,needReverse:_,pendingRewarderArr:ne,getCoinIcon:Ye,chainName:_e}}});const Pe=e=>(an("data-v-dd1d4eda"),e=e(),tn(),e),Nn={class:"increase-liquidity-container"},$n={class:"back-title"},Rn={class:"title"},Tn={class:"right title-right"},Pn=Pe(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-setslippage"})],-1)),Bn=Pe(()=>n("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),On=[Bn],qn={class:"price-range"},Ln={class:"price-range-header"},Un={class:"left"},Mn={class:"right"},Dn={class:"fee"},_n={class:"price-range-footer"},Fn={class:"select-range"},jn={class:"range-bottom"},En={key:0,class:"price"},Wn={key:1,class:"price"},Xn={class:"price-range-block"},Hn={class:"price-item"},zn={class:"title"},Kn={key:0,class:"price"},Gn={key:1,class:"price"},Jn={key:2,class:"text"},Qn={key:3,class:"text"},Vn={class:"price-item"},Yn={class:"title"},Zn={key:0,class:"price"},xn={key:1,class:"price"},ei={key:2,class:"text"},oi={key:3,class:"text"},ni={class:"text-block"},ii={class:"note"},si={class:"note"},ai={class:"card-item"},ti={key:0,class:"unilateral"},li={key:0,src:Eo,alt:""},ui={key:1,src:Wo,alt:""},ri={class:"card-item"},di={key:0,class:"unilateral"},mi={key:0,src:Eo,alt:""},vi={key:1,src:Wo,alt:""},pi={class:"remove-liquidity-bottom-box"},fi={class:"induction remove-liquidity-bottom"},ci={class:"item"},bi={class:"induction-text"},ki={class:"induction-value"},Ii={class:"text-default"},yi={class:"text-default"},hi={class:"item"},wi=Pe(()=>n("div",{class:"induction-text"},null,-1)),gi={class:"induction-value"},Ci={class:"text-default"},Si={key:0,class:"item"},Ai={class:"induction-text"},Ni={class:"induction-value"},$i={class:"text-default"},Ri={key:1,class:"item"},Ti=Pe(()=>n("div",{class:"induction-text"},null,-1)),Pi={class:"induction-value"},Bi={class:"text-default"},Oi={key:0,class:"induction-text"},qi={key:1,class:"induction-value"},Li={class:"text-default"},Ui=Pe(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-add"})],-1)),Mi={class:"loading-global"};function Di(e,s,be,g,ke,G){var Oe,re,qe,Le,Ue,ge,Y,Z,x,Me,f,a,t,l,De,P,H,_e,B,de,c,b,Q,me,ve,pe,N,$,ee,Fe,je,Ee,We,Xe,He,ze,Ce,Ke,Se,oe,Ge,Ae,Je,Qe,_,ne,Ve,Ye,o,d,w,I,h,R,F,L,j,W,O,z,C,U,E,S,T,M,ie,no,io,so,ao,to,lo,uo,ro,mo,vo,po,fo,co,bo,ko,Io,yo,ho,wo,go,Co,So,Ao,No,$o,Ro,To,Po,Bo,Oo,qo,Lo,Uo,Mo;const ae=Ho,Ie=zo,Be=Ko,te=Sn,le=ln,ue=un,ye=nn,he=rn,we=dn,q=mn,u=vn,r=sn,J=Yo("image");return k(),y("div",Nn,[n("div",$n,[X(ae),n("div",Rn,[n("p",null,i(e.$t("common.increaseLiquidity")),1),n("div",Tn,[n("div",{class:"slippage-icon",onClick:s[0]||(s[0]=m=>e.isShowSwapSetting=!0)},[Pn,n("span",null,i(e.slippage)+"%",1)]),(k(),y("svg",{"aria-hidden":"true",class:Ze(e.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:s[1]||(s[1]=(...m)=>e.clickRefresh&&e.clickRefresh(...m))},On,2))])])]),n("div",qn,[n("div",Ln,[n("div",Un,[X(Ie,{"from-coin":e.needReverse?e.positionInfo.token_b:e.positionInfo.token_a,"to-coin":e.needReverse?e.positionInfo.token_a:e.positionInfo.token_b},null,8,["from-coin","to-coin"]),n("div",Mn,[n("div",Dn,i(e.positionInfo.fee*100)+"%",1)])]),X(Be,{"current-status":e.positionInfo.currentStatus||""},null,8,["current-status"])]),n("div",_n,[n("div",Fn,[n("p",null,i(e.$t("common.selectedRange")),1),n("div",jn,[(e.needReverse?!e.direct:e.direct)?(k(),y("div",En," 1 "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" ≈ "+i(("decimalUi"in e?e.decimalUi:A(se))((Oe=e.positionInfo)==null?void 0:Oe.currentPrice,e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals))+" "+i(e.positionInfo&&e.positionInfo.token_b&&((re=e.positionInfo)==null?void 0:re.token_b.symbol)),1)):(k(),y("div",Wn," 1 "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" ≈ "+i(("decimalUi"in e?e.decimalUi:A(se))(1/((qe=e.positionInfo)==null?void 0:qe.currentPrice),e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.decimals))+" "+i(e.positionInfo&&e.positionInfo.token_a&&((Le=e.positionInfo)==null?void 0:Le.token_a.symbol)),1)),X(te,{direct:e.direct,"form-coin-symbol":e.needReverse?(Z=(Y=e.positionInfo)==null?void 0:Y.token_b)==null?void 0:Z.symbol:(ge=(Ue=e.positionInfo)==null?void 0:Ue.token_a)==null?void 0:ge.symbol,"to-coin-symbol":e.needReverse?(a=(f=e.positionInfo)==null?void 0:f.token_a)==null?void 0:a.symbol:(Me=(x=e.positionInfo)==null?void 0:x.token_b)==null?void 0:Me.symbol,onChangeDirect:s[2]||(s[2]=m=>e.direct=m)},null,8,["direct","form-coin-symbol","to-coin-symbol"])])]),n("div",Xn,[n("div",Hn,[n("div",zn,i(e.$t("common.minPrice")),1),(e.needReverse?!e.direct:e.direct)?(k(),y("p",Kn,i(((t=e.positionInfo)==null?void 0:t.minPrice)&&("decimalUi"in e?e.decimalUi:A(se))(e.positionInfo.minPrice,6)),1)):(k(),y("p",Gn,i(e.positionInfo&&e.positionInfo.minPrice&&("decimalUi"in e?e.decimalUi:A(se))(1/((l=e.positionInfo)==null?void 0:l.maxPrice),6)),1)),(e.needReverse?e.direct:!e.direct)?(k(),y("div",Jn,i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol),1)):(k(),y("div",Qn,i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol),1))]),n("div",Vn,[n("div",Yn,i(e.$t("common.maxPrice")),1),(e.needReverse?!e.direct:e.direct)?(k(),y("p",Zn,i(((P=(De=e.positionInfo)==null?void 0:De.maxPrice)==null?void 0:P.indexOf("+"))>0||((H=e.positionInfo)==null?void 0:H.maxPrice)==="∞"?"∞":("decimalUi"in e?e.decimalUi:A(se))(e.positionInfo.maxPrice,6)),1)):(k(),y("p",xn,i(((B=(_e=e.positionInfo)==null?void 0:_e.maxPrice)==null?void 0:B.indexOf("+"))>0||((de=e.positionInfo)==null?void 0:de.minPrice)=="0"?"∞":("decimalUi"in e?e.decimalUi:A(se))(1/e.positionInfo.minPrice,6)),1)),(e.needReverse?e.direct:!e.direct)?(k(),y("div",ei,i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol),1)):(k(),y("div",oi,i(e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol)+" per "+i(e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol),1))])]),n("div",ni,[n("div",ii,i(e.t("common.positionwillBe",{symbol:(e.needReverse?!e.direct:e.direct)?`${e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol}`:`${e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol}`})),1),n("div",si,i(e.t("common.positionwillBe",{symbol:(e.needReverse?!e.direct:e.direct)?`${e.positionInfo&&e.positionInfo.token_b&&e.positionInfo.token_b.symbol}`:`${e.positionInfo&&e.positionInfo.token_a&&e.positionInfo.token_a.symbol}`})),1)])])]),n("div",{class:Ze(e.needReverse?"card-container reverse":"card-container")},[n("div",ai,[X(le,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":s[3]||(s[3]=m=>e.fromCoinAmount=m),"has-arrow":!1,"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direction":"From",onOnMax:s[4]||(s[4]=m=>e.maxBtnSelect("fromCoin")),onOnHalf:s[5]||(s[5]=m=>e.halfBtnSelect("fromCoin")),onOnInput:s[6]||(s[6]=m=>e.fromCoinAmount=m),onOnFocus:s[7]||(s[7]=()=>{e.fixedFromCoin=!0}),onOnSelect:s[8]||(s[8]=m=>e.openCoinSelect("fromCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showFromCoinLock?(k(),y("div",ti,[e.storeIndex.theme=="default"?(k(),y("img",li)):(k(),y("img",ui)),n("p",null,i(e.$t("tips.marketprice")),1)])):K("",!0)]),n("div",ri,[X(le,{modelValue:e.toCoinAmount,"onUpdate:modelValue":s[9]||(s[9]=m=>e.toCoinAmount=m),"has-arrow":!1,"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direction":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"",onOnMax:s[10]||(s[10]=m=>e.maxBtnSelect("toCoin")),onOnHalf:s[11]||(s[11]=m=>e.halfBtnSelect("toCoin")),onOnInput:s[12]||(s[12]=m=>e.toCoinAmount=m),onOnFocus:s[13]||(s[13]=()=>{e.fixedFromCoin=!1}),onOnSelect:s[14]||(s[14]=m=>e.openCoinSelect("toCoin"))},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showToCoinLock?(k(),y("div",di,[e.storeIndex.theme=="default"?(k(),y("img",mi)):(k(),y("img",vi)),n("p",null,i(e.$t("tips.marketprice")),1)])):K("",!0)])],2),n("div",pi,[n("div",fi,[n("div",ci,[n("div",bi,i(e.$t("common.liquidity")),1),n("div",ki,[n("span",Ii,[fe(n("img",null,null,512),[[J,e.getCoinIcon(e.needReverse?(b=e.positionInfo)==null?void 0:b.token_b:(c=e.positionInfo)==null?void 0:c.token_a)]]),n("span",yi,i(("showNum"in e?e.showNum:A(V))(e.needReverse?e.positionInfo.amountB:e.positionInfo.amountA,e.needReverse?(pe=(ve=e.positionInfo)==null?void 0:ve.token_b)==null?void 0:pe.decimals:(me=(Q=e.positionInfo)==null?void 0:Q.token_a)==null?void 0:me.decimals))+" "+i(e.needReverse?(Fe=(ee=e.positionInfo)==null?void 0:ee.token_b)==null?void 0:Fe.symbol:($=(N=e.positionInfo)==null?void 0:N.token_a)==null?void 0:$.symbol)+" → ",1)]),n("span",null,i(("showNum"in e?e.showNum:A(V))(e.needReverse?("precision"in e?e.precision:A(Te)).plus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)):("precision"in e?e.precision:A(Te)).plus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),e.needReverse?(Xe=(We=e.positionInfo)==null?void 0:We.token_b)==null?void 0:Xe.decimals:(Ee=(je=e.positionInfo)==null?void 0:je.token_a)==null?void 0:Ee.decimals))+" "+i(e.needReverse?(Ke=(Ce=e.positionInfo)==null?void 0:Ce.token_b)==null?void 0:Ke.symbol:(ze=(He=e.positionInfo)==null?void 0:He.token_a)==null?void 0:ze.symbol),1)])]),n("div",hi,[wi,n("div",gi,[n("span",Ci,[fe(n("img",null,null,512),[[J,e.getCoinIcon(e.needReverse?(oe=e.positionInfo)==null?void 0:oe.token_a:(Se=e.positionInfo)==null?void 0:Se.token_b)]]),ce(" "+i(("showNum"in e?e.showNum:A(V))(e.needReverse?e.positionInfo.amountA:e.positionInfo.amountB,e.needReverse?(Qe=(Je=e.positionInfo)==null?void 0:Je.token_a)==null?void 0:Qe.decimals:(Ae=(Ge=e.positionInfo)==null?void 0:Ge.token_b)==null?void 0:Ae.decimals))+" "+i(e.needReverse?(Ye=(Ve=e.positionInfo)==null?void 0:Ve.token_a)==null?void 0:Ye.symbol:(ne=(_=e.positionInfo)==null?void 0:_.token_b)==null?void 0:ne.symbol)+" → ",1)]),n("span",null,i(e.needReverse?("showNum"in e?e.showNum:A(V))(("precision"in e?e.precision:A(Te)).plus(Number(e.positionInfo.amountA),Number(e.fromCoinAmount)),(I=(w=e.positionInfo)==null?void 0:w.token_a)==null?void 0:I.decimals):("showNum"in e?e.showNum:A(V))(("precision"in e?e.precision:A(Te)).plus(Number(e.positionInfo.amountB),Number(e.toCoinAmount)),(d=(o=e.positionInfo)==null?void 0:o.token_b)==null?void 0:d.decimals))+" "+i(e.needReverse?(L=(F=e.positionInfo)==null?void 0:F.token_a)==null?void 0:L.symbol:(R=(h=e.positionInfo)==null?void 0:h.token_b)==null?void 0:R.symbol),1)])]),e.chainName=="Sui"&&e.positionInfo&&(((j=e.positionInfo)==null?void 0:j.feeOwedA)>0||((W=e.positionInfo)==null?void 0:W.feeOwedB)>0)?(k(),y("div",Si,[n("div",Ai,i(e.$t("common.fees")),1),n("div",Ni,[n("span",$i,[fe(n("img",null,null,512),[[J,e.getCoinIcon(e.needReverse?(z=e.positionInfo)==null?void 0:z.token_b:(O=e.positionInfo)==null?void 0:O.token_a)]]),ce(" "+i(("showNum"in e?e.showNum:A(V))(e.needReverse?(U=e.positionInfo)==null?void 0:U.feeOwedB:(C=e.positionInfo)==null?void 0:C.feeOwedA,e.needReverse?(M=(T=e.positionInfo)==null?void 0:T.token_b)==null?void 0:M.decimals:(S=(E=e.positionInfo)==null?void 0:E.token_a)==null?void 0:S.decimals))+" ",1),X(ue,{address:e.needReverse?(so=(io=e.positionInfo)==null?void 0:io.token_b)==null?void 0:so.address:(no=(ie=e.positionInfo)==null?void 0:ie.token_a)==null?void 0:no.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),ce(" "+i(e.needReverse?(uo=(lo=e.positionInfo)==null?void 0:lo.token_b)==null?void 0:uo.symbol:(to=(ao=e.positionInfo)==null?void 0:ao.token_a)==null?void 0:to.symbol)+" → ",1)]),n("span",null," 0 "+i(e.needReverse?(po=(vo=e.positionInfo)==null?void 0:vo.token_b)==null?void 0:po.symbol:(mo=(ro=e.positionInfo)==null?void 0:ro.token_a)==null?void 0:mo.symbol),1)])])):K("",!0),e.chainName=="Sui"&&e.positionInfo&&(((fo=e.positionInfo)==null?void 0:fo.feeOwedB)>0||((co=e.positionInfo)==null?void 0:co.feeOwedA)>0)?(k(),y("div",Ri,[Ti,n("div",Pi,[n("span",Bi,[fe(n("img",null,null,512),[[J,e.getCoinIcon(e.needReverse?(ko=e.positionInfo)==null?void 0:ko.token_a:(bo=e.positionInfo)==null?void 0:bo.token_b)]]),ce(" "+i(("showNum"in e?e.showNum:A(V))(e.needReverse?(yo=e.positionInfo)==null?void 0:yo.feeOwedA:(Io=e.positionInfo)==null?void 0:Io.feeOwedB,e.needReverse?(Co=(go=e.positionInfo)==null?void 0:go.token_a)==null?void 0:Co.decimals:(wo=(ho=e.positionInfo)==null?void 0:ho.token_b)==null?void 0:wo.decimals))+" ",1),X(ue,{address:e.needReverse?($o=(No=e.positionInfo)==null?void 0:No.token_a)==null?void 0:$o.address:(Ao=(So=e.positionInfo)==null?void 0:So.token_b)==null?void 0:Ao.address,"style-params":{width:"8px",height:"8px",left:"10px",bottom:"0px"}},null,8,["address"]),ce(" "+i(e.needReverse?(Bo=(Po=e.positionInfo)==null?void 0:Po.token_a)==null?void 0:Bo.symbol:(To=(Ro=e.positionInfo)==null?void 0:Ro.token_b)==null?void 0:To.symbol)+" → ",1)]),n("span",null," 0 "+i(e.needReverse?(Uo=(Lo=e.positionInfo)==null?void 0:Lo.token_a)==null?void 0:Uo.symbol:(qo=(Oo=e.positionInfo)==null?void 0:Oo.token_b)==null?void 0:qo.symbol),1)])])):K("",!0),e.chainName=="Sui"&&e.positionInfo.is_display_rewarder?(k(!0),y(Zo,{key:2},xo(e.pendingRewarderArr,(m,Xo)=>(k(),y("div",{key:m,class:"item"},[Number(m.amount)>0?(k(),y("div",Oi,i(Xo==0?e.$t("common.rewards"):""),1)):K("",!0),m.amount>0?(k(),y("div",qi,[n("span",Li,[fe(n("img",null,null,512),[[J,e.getCoinIcon(m)]]),ce(" "+i(m.amount>1e-6?m.amount:m.amount===0?"0":"<0.000001")+" "+i(m.symbol)+" → ",1)]),n("span",null," 0 "+i(m.symbol),1)])):K("",!0)]))),128)):K("",!0)])]),X(ye,{disabled:e.wallet.connected?e.noEnterAmount||e.insufficientBalance||e.isDisabled||e.addLoading||e.addLiquidityBtnText!==e.t("newAdd.addMore"):!1,class:"big-btn",onClick:s[15]||(s[15]=m=>e.wallet.connected?e.isShowLiquidityModal=!0:e.wallet.setIsShowWalletModal(!0))},{default:en(()=>[Ui,n("span",null,i(e.wallet.connected?e.addLiquidityBtnText:e.$t("button.connectWallet")),1)]),_:1},8,["disabled"]),X(he),e.showCoinSelect?(k(),xe(we,{key:0,"existing-coins":e.existingCoins,"last-select-coin":e.lastSelectCoin,onOnSelect:e.onCoinSelect,onOnClose:s[16]||(s[16]=m=>e.showCoinSelect=!1)},null,8,["existing-coins","last-select-coin","onOnSelect"])):K("",!0),e.isShowSwapSetting?(k(),xe(q,{key:1,onOnClose:s[17]||(s[17]=m=>e.isShowSwapSetting=!1)})):K("",!0),e.isShowLiquidityModal?(k(),xe(u,{key:2,title:e.$t("button.increase"),"is-increase":!0,"from-coin":e.needReverse?e.toCoin:e.fromCoin,"to-coin":e.needReverse?e.fromCoin:e.toCoin,"from-coin-amount":e.needReverse?e.toCoinAmount:e.fromCoinAmount,"to-coin-amount":e.needReverse?e.fromCoinAmount:e.toCoinAmount,"min-price":e.positionInfo.minPrice,"max-price":e.positionInfo.maxPrice,"current-price":e.positionInfo.currentPrice,"current-price-reverse":1/e.positionInfo.currentPrice,"pool-info":(Mo=e.positionInfo)==null?void 0:Mo.poolInfo,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"position-total-amount":e.positionInfo.totalAmountUSD,"fixed-from-coin":e.fixedFromCoin,"tick-lower":e.positionInfo.tick_lower_index,"tick-upper":e.positionInfo.tick_upper_index,"current-price-tab":"custom",onToAdd:e.toAdd,onOnClose:s[18]||(s[18]=m=>e.isShowLiquidityModal=!1)},null,8,["title","from-coin","to-coin","from-coin-amount","to-coin-amount","min-price","max-price","current-price","current-price-reverse","pool-info","show-from-coin-lock","show-to-coin-lock","position-total-amount","fixed-from-coin","tick-lower","tick-upper","onToAdd"])):K("",!0),fe(n("div",Mi,[X(r)],512),[[on,e.pools.currentPositionLoading]])])}const ds=jo(An,[["render",Di],["__scopeId","data-v-dd1d4eda"]]);export{ds as default};
