import{_ as sa,a as Jo,b as Ko,c as ia,d as ca}from"./new-liquidity-title.8b13a838.js";import{i as Qe}from"./import-icon.de3e6c66.js";import{a as Yo,m as I,r as B,E as Zo,l as va,D as x,e as xo,Q as ea,o as T,f as O,i as ie,h as a,x as L,v as Re,c as qe,w as zo,j as be,B as da,p as oa,k as aa,b as ma,C as pa,q as fa,H as ga,z as ge,t as ka,u as ba,I as Ca}from"./entry.5285a120.js";/* empty css              */import{a as wa,u as la,c as ta}from"./sha256.984ae944.js";import{a as na,u as ua,p as Ho,s as Xo,e as Qo,c as Go,f as De,b as ha,d as ya}from"./pool.25100f33.js";import{b as Sa}from"./new-add-or-create.b3941035.js";import{_ as Pa,a as Na,s as Ta}from"./poolFee.2a752f7e.js";import{D as u}from"./decimal.0e8aa3f1.js";import{fromCoin as m,toCoin as p,fromCoinAmount as n,toCoinAmount as r,maxPrice as v,minPrice as g,createPoolInfo as i,showFromCoinLock as Y,showToCoinLock as Z,amountLock as ke,fixedFromCoin as _,currentPriceReverse as Ge,currentPrice as se,initPrice as me,direction as w,createPoolFromCoin as ee,createPoolToCoin as oe,isFullRange as ue,resetData as _a,defaultMinPrice as He,defaultMaxPrice as Xe}from"./create-pool-data.f2a17e84.js";import{_ as Aa,a as qa}from"./icon-Add-Liquidity_2x.0acb06cb.js";import{_ as Ra}from"./icon-selected_3x.09e9a6f0.js";import"./lock.a0c99e84.js";/* empty css              */import"./tick.505fdad3.js";import"./token-warning.900b2141.js";/* empty css              *//* empty css              */import"./refresh-icon.4de89573.js";/* empty css              */import"./swap-setting.da604599.js";/* empty css              */import"./status-block.f8a5da6f.js";import"./notifi.239fbaac.js";import"./useWhale.f68ccce4.js";import"./index.c3cd8f18.js";const Ia=Yo({components:{NewLiquidityTile:sa,NewLiquidityDepositRatio:Jo},setup(e,t){const he=wa(),Ce=la(),V=I(()=>Ce),H=I(()=>V.value.chainName),j=I(()=>he),k=B(!1);B(),B(),B(),B(!1);const h=Zo(),{t:W,locale:ve}=va(),A=I(()=>H.value?na(H.value):{}),z=ua(),s=I(()=>z),ae=I(()=>V.value.theme),$=I(()=>j.value.assets&&m.value&&j.value.assets[m.value.address]?Ho(j.value.assets[m.value.address].balance,m.value.decimals):"0"),E=I(()=>j.value.assets&&p.value&&j.value.assets[p.value.address]?Ho(j.value.assets[p.value.address].balance,p.value.decimals):"0"),Ve=o=>{o==="fromCoin"?(_.value=!0,H.value==="Aptos"?n.value=Number($.value)>0?m.value.symbol=="APT"?new u(Number($.value)).sub(new u(.1)).lt(new u(0))?"0":new u(Number($.value)).sub(new u(.1)).toString():String($.value):"":n.value=Number($.value)>0?m.value.symbol=="SUI"?new u(Number($.value)).sub(new u(.05)).lt(new u(0))?"0":new u(Number($.value)).sub(new u(.05)).toString():String($.value):""):(_.value=!1,H.value==="Aptos"?r.value=Number(E.value)>0?p.value.symbol=="APT"?new u(Number(E.value)).sub(new u(.1)).lt(new u(0))?"0":new u(Number(E.value)).sub(new u(.1)).toString():String(E.value):"":r.value=Number(E.value)>0?p.value.symbol=="SUI"?new u(Number(E.value)).sub(new u(.05)).lt(new u(0))?"0":new u(Number(E.value)).sub(new u(.05)).toString():String(E.value):"")},je=o=>{o==="fromCoin"?(_.value=!0,n.value=Number($.value)>0?Xo(new u(Number($.value)).div(2).toString(),m.value.decimals).toString():""):(_.value=!1,r.value=Number(E.value)>0?Xo(new u(Number(E.value)).div(2).toString(),p.value.decimals).toString():"")};x(()=>[s.value.tokensObj,h.query],async([o])=>{if(o){const d=o;if(h&&h.query&&h.query.fromCoin&&(console.log("0410###deposite###watch###route.query.tokena####",h.query.fromCoin,d),h.query.fromCoin)){const c=await A.value.getTokenBySymbol(d,h.query.fromCoin);console.log(c,"###fromCoinValue"),m.value=c,ee.value=c}if(h&&h.query&&h.query.toCoin&&h.query.toCoin){const c=await A.value.getTokenBySymbol(d,h.query.toCoin);p.value=c,oe.value=c}}},{immediate:!0,deep:!0});const K=B("--"),ye=I(()=>V.value.slippage),Ee=B(),pe=async()=>{if(!g.value&&!v.value)return!1;if(!n.value&&!r.value&&!g.value&&!v.value)return;const o=i.value||{};if(Go(o))return;const{TickUtil:d,TickMath:c,getNearestTickByTick:f}=A.value,N=o==null?void 0:o.token_a.decimals,F=o==null?void 0:o.token_b.decimals;let P,q,y,C,R,U,D=o.current_tick_index,Q;if(console.log(o,"==>poolInfos"),o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===p.value.address.toLowerCase()?Q=!0:Q=!1,g.value==="0"&&v.value==="∞")y=d.getMinIndex(Number(o.tickSpacing)),C=d.getMaxIndex(Number(o.tickSpacing));else{console.log(Q,"===>directs1866"),Q?(P=Number(g.value),q=Number(v.value)):(P=new u(1).div(v.value).toString(),q=new u(1).div(g.value).toString()),console.log("0518###pre###directs###",Q),console.log("0518###pre###minPrice###",g.value),console.log("0518###pre###maxPrice###",v.value),console.log("0518###pre###poolInfos###",o),console.log("0518###pre###decimalsA###",N),console.log("0518###pre###decimalsB###",F),console.log(P,q,"min max1875"),console.log(g.value,v.value,"===>maxPrice.value");try{R=P==0?-443636:c.priceToTickIndex(new u(P),N,F)}catch{R=-443636}try{U=c.priceToTickIndex(new u(q),N,F)}catch{U=443636}y=f(R,Number(o.tickSpacing)),C=f(U,Number(o.tickSpacing))}if(console.log("0518###pre###currentTickIndex###",D,y,C),v.value!=="∞"&&y>=C){Y.value=!0,n.value="",Z.value=!0,r.value="";return}if(console.log(C,D,y,"1922"),v.value==="∞"||D>=y&&D<=C){Y.value=!1,Z.value=!1;let te;if(n.value||r.value){if(_.value){const we=new u(n.value).mul(Math.pow(10,m.value.decimals)).toString();te=new De(we)}else{const we=new u(r.value).mul(Math.pow(10,p.value.decimals)).toString();te=new De(we)}console.log(Q,"======>directs");const{liquidityAmount:G,tokenMaxA:J,tokenMaxB:ne,tokenMaxAOrigin:Oe,tokenMaxBOrigin:Ue}=A.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:y,upperTick:C,coinAmount:te,iscoinA:Q?_.value:!_.value,roundUp:!0,slippage:Number(ye.value)/100,curSqrtPrice:new De(o.current_sqrt_price)});Ee.value={liquidityAmount:G,tokenMaxA:J,tokenMaxB:ne,tokenMaxAOrigin:Oe,tokenMaxBOrigin:Ue},console.log(ne,J,"tokenMaxB===>tokenMaxA"),Q?_.value?r.value=Number(ne)>0?ne:"":n.value=Number(J)>0?J:"":_.value?r.value=J:n.value=ne}}else D>C?(Y.value=!0,Z.value=!0):D<y?(Y.value=!0,Z.value=!0):(Y.value=!0,n.value="",Z.value=!0,r.value="")};x(()=>me.value,o=>{o&&pe()},{immediate:!0}),x(n,(o,d)=>{console.log(n,"===>fromCoinAmount"),o==""&&_.value&&(r.value=""),o&&_.value&&!k.value&&pe()}),x(r,(o,d)=>{console.log(o,"===>>>>newValsda"),o==""&&!_.value&&(n.value=""),o&&!_.value&&!k.value&&pe()}),x(()=>ue.value,o=>{pe()});const We=o=>{console.log(o,"e");const d=o.replace(/[^\d.]/g,""),c="$"+Qo(d);k.value=!0,K.value=c,o>0?le():(n.value="",r.value="")};x([g,v],([o,d])=>{console.log(o,d,"==>minPrice,maxPrice"),Number(o)!==0&&Number(d)!==0&&!k.value?pe():Number(o)!==0&&Number(d)!==0&&k.value&&le()},{immediate:!0});const l=()=>{const o=b.value&&b.value[m.value.address]&&b.value[m.value.address].price,d=b.value&&b.value[p.value.address]&&b.value[p.value.address].price;if(o&&d){const c=new u(n.value>0?n.value:0).mul(o),f=new u(r.value>0?r.value:0).mul(d),N=c.add(f).toNumber();K.value=N>0&&N<.01?"$<0.01":"$"+Qo(N,2)}else K.value="--"};x(()=>[n.value,r.value,k.value],([o,d,c])=>{(o||d)&&!c?l():(!o||!d)&&!c&&(K.value="--")},{immediate:!0});const b=I(()=>s.value.RATES),S=B(),le=async()=>{if(!g.value&&!v.value)return!1;if(!n.value&&!r.value&&!g.value&&!v.value)return;const o=i.value||{};if(Go(o))return;const{TickUtil:d,TickMath:c,getNearestTickByTick:f}=A.value,N=o==null?void 0:o.token_a.decimals,F=o==null?void 0:o.token_b.decimals;let P,q,y,C,R,U,D;if(o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===p.value.address.toLowerCase()?D=!0:D=!1,g.value==="0"&&v.value==="∞")y=d.getMinIndex(Number(o.tickSpacing)),C=d.getMaxIndex(Number(o.tickSpacing));else{D?(P=Number(g.value),q=Number(v.value)):(P=new u(1).div(v.value).toString(),q=new u(1).div(g.value).toString());try{R=P==0?-443636:c.priceToTickIndex(new u(P),N,F)}catch{R=-443636}try{U=c.priceToTickIndex(new u(q),N,F)}catch{U=443636}y=f(R,Number(o.tickSpacing)),C=f(U,Number(o.tickSpacing))}console.log(o.token_a,"poolInfos===>");const Q=b.value[o==null?void 0:o.token_a.address].price,te=b.value[o==null?void 0:o.token_b.address].price;console.log(y,C,"####tick_lower tick_upper 889");try{const{amountA:G,amountB:J,tokenAmountsInfo:ne}=await A.value.estCoinAmountsFromTotalAmount({lowerTick:y,upperTick:C,decimalsA:N,decimalsB:F,curSqrtPrice:new De(o.current_sqrt_price),totalAmount:K.value,tokenPriceA:Q,tokenPriceB:te});console.log(G,J,"###estCoinAmountsFromTotalAmount 844"),S.value=ne,o.needReverse?w.value?(n.value=G,r.value=J):(n.value=J,r.value=G):(n.value=G,r.value=J)}catch(G){console.log(G,"e===>")}},M=I(()=>{var c,f,N,F,P,q,y,C;const o=(N=b.value[(f=(c=m)==null?void 0:c.value)==null?void 0:f.address])==null?void 0:N.price,d=(q=b.value[(P=(F=p)==null?void 0:F.value)==null?void 0:P.address])==null?void 0:q.price;return console.log(b.value,(C=(y=m)==null?void 0:y.value)==null?void 0:C.address,"===>fromCoin?.value?.address"),!!(o&&d)}),X=()=>{t.emit("toggle")},re=B(!1),Se=I(()=>{var o;return!m.value||!p.value?W("modal.selectTokenModalTitle"):!((o=h.query)!=null&&o.fee)&&ta[H.value].hasCreatePool?"Select fee tier":!Number(n.value)&&!Number(r.value)?W("button.enterAmount"):Number(n.value)>Number($.value)?W("button.insufficientBalance",{name:m.value.symbol}):Number(r.value)>Number(E.value)?W("button.insufficientBalance",{name:p.value.symbol}):v.value!=="∞"&&Number(g.value)>=Number(v.value)?W("newAdd.invalidRange"):W("newAdd.preview")}),Ie=o=>{const d=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");o.target.value=o.target.value.replace(d,"$1")},Le=I(()=>{var o;return!n.value&&!r.value?(console.log("addLiquidityBtnDisabled11111"),!0):Number(n.value)>Number($.value)||Number(r.value)>Number(E.value)?(console.log("addLiquidityBtnDisabled22222"),!0):Se.value!==W("newAdd.preview")?!0:!i.value&&!((o=i.value)!=null&&o.currentPrice)?(console.log("addLiquidityBtnDisabled55555"),!0):!!(Number(n.value)<=0&&Number(r.value)<=0||Y.value||Z.value)}),{setTransactionTxid:Pe,setTransactionDesc:Be,setIsShowWaiting:fe,setIsShowSuccess:Ne,setIsShowRejected:Te,setPositiomNum:$e}=Ce,Me=()=>{H.value=="Sui"&&Fe()},_e=B(!1),Fe=async()=>{var Q,te,G,J,ne,Oe,Ue,we,Je,Ke,Ye,Ze,xe,eo,oo,ao,lo,to,no,uo,ro,so,io,co,vo,mo,po,fo,go,ko,bo,Co,wo,ho,yo,So,Po,No,To,_o,Ao,qo,Ro,Io,Lo,Bo,$o,Mo,Fo,Oo,Uo,Do,Vo,jo,Eo,Wo;re.value=!1,console.log("创建sui池子");let o=!1;A.value.getIsSortedSymbols(ee.value.address,oe.value.address)&&(o=!0),Pe("");const d=Y.value?"":`${n.value} ${(Q=m.value)==null?void 0:Q.symbol}`,c=Z.value?"":`${r.value} ${(te=p.value)==null?void 0:te.symbol}`;console.log("0424###createPoolFromCoin###",ee.value),console.log("0424###createPoolToCoin###",oe.value),console.log("0424###needReverse###",o),console.log("0424###createPoolInfo?.value?.needReverse###",(J=(G=i)==null?void 0:G.value)==null?void 0:J.needReverse),Be(W("tips.increaseLiquiditySuccess",{from:!o&&!((Oe=(ne=i)==null?void 0:ne.value)!=null&&Oe.needReverse)||o&&((we=(Ue=i)==null?void 0:Ue.value)!=null&&we.needReverse)?d:c,and:!Y.value&&!Z.value?"and":"",to:!o&&!((Ke=(Je=i)==null?void 0:Je.value)!=null&&Ke.needReverse)||o&&((Ze=(Ye=i)==null?void 0:Ye.value)!=null&&Ze.needReverse)?c:d})),fe(!0);let f="",N="",F="",P="",q="",y="",C=0,R=0,U=!1,D;if(o||(eo=(xe=i)==null?void 0:xe.value)!=null&&eo.needReverse){const de=o&&!((ao=(oo=i)==null?void 0:oo.value)!=null&&ao.needReverse);f=de?(so=(ro=(uo=i)==null?void 0:uo.value)==null?void 0:ro.token_b)==null?void 0:so.address:(no=(to=(lo=i)==null?void 0:lo.value)==null?void 0:to.token_a)==null?void 0:no.address,N=de?(fo=(po=(mo=i)==null?void 0:mo.value)==null?void 0:po.token_a)==null?void 0:fo.address:(vo=(co=(io=i)==null?void 0:io.value)==null?void 0:co.token_b)==null?void 0:vo.address,F=de?(ho=(wo=(Co=i)==null?void 0:Co.value)==null?void 0:wo.token_b)==null?void 0:ho.decimals:(bo=(ko=(go=i)==null?void 0:go.value)==null?void 0:ko.token_a)==null?void 0:bo.decimals,P=de?(_o=(To=(No=i)==null?void 0:No.value)==null?void 0:To.token_a)==null?void 0:_o.decimals:(Po=(So=(yo=i)==null?void 0:yo.value)==null?void 0:So.token_b)==null?void 0:Po.decimals,(qo=(Ao=i)==null?void 0:Ao.value)!=null&&qo.needReverse?(q=w.value?n.value:r.value,y=w.value?r.value:n.value,C=w.value?Number(g.value):1/Number(v.value),R=w.value?Number(v.value):1/Number(g.value),U=w.value?_.value:!_.value,D=w.value?se.value:1/Number(se.value)):(q=w.value?r.value:n.value,y=w.value?n.value:r.value,C=w.value?1/Number(v.value):Number(g.value),R=w.value?1/Number(g.value):Number(v.value),U=w.value?!_.value:_.value,D=w.value?1/Number(se.value):se.value)}else f=(Lo=(Io=(Ro=i)==null?void 0:Ro.value)==null?void 0:Io.token_a)==null?void 0:Lo.address,N=(Mo=($o=(Bo=i)==null?void 0:Bo.value)==null?void 0:$o.token_b)==null?void 0:Mo.address,F=(Uo=(Oo=(Fo=i)==null?void 0:Fo.value)==null?void 0:Oo.token_a)==null?void 0:Uo.decimals,P=(jo=(Vo=(Do=i)==null?void 0:Do.value)==null?void 0:Vo.token_b)==null?void 0:jo.decimals,q=w.value?n.value:r.value,y=w.value?r.value:n.value,C=w.value?Number(g.value):1/Number(v.value),R=w.value?Number(v.value):1/Number(g.value),U=w.value?_.value:!_.value,D=w.value?se.value:1/Number(se.value);try{console.log("0501###toCreatePool###params###",{coinTypeA:f,coinTypeB:N,decimalsA:F,decimalsB:P,amountA:q,amountB:y,minPrice:C,maxPrice:R,fix_amount_a:U,tick_spacing:Number(i.value.tickSpacing),slippage:Number(ye.value)/100,price:D});const de=await A.value.getCreatPoolTransactionPayload({coinTypeA:f,coinTypeB:N,decimalsA:F,decimalsB:P,amountA:q,amountB:y,minPrice:g.value=="0"&&v.value=="∞"?"0":C,maxPrice:g.value=="0"&&v.value=="∞"?"∞":R,fix_amount_a:U,tick_spacing:Number(i.value.tickSpacing),slippage:Number(ye.value)/100,price:D}),ra=await j.value.currentWallet.signAndExecuteTransactionBlock(de),Ae=A.value.handleTx(ra);if(Ae&&Ae.hash){Pe(Ae.hash),fe(!1),Ne(!0);const ze={title:"Created pool",desc:"Pool created successfully ",hash:Ae.hash,tit:"Pool Created",icon:"icon-icon-Position-Created",tokenInfo:{tokena:`${(Eo=m.value)==null?void 0:Eo.address}`,numa:Y.value?"":`- ${n.value}`,logoa:s.value.tokensObj&&m.value&&m.value.address&&s.value.tokensObj[m.value.address]&&s.value.tokensObj[m.value.address].logoURI,tokenb:`${(Wo=p.value)==null?void 0:Wo.address}`,numb:Z.value?"":`- ${r.value}`,logob:s.value.tokensObj&&p.value&&p.value.address&&s.value.tokensObj[p.value.address]&&s.value.tokensObj[p.value.address].logoURI},text:"Pool created successfully"};H.value!=="Aptos"&&(ze.res=Ae.res),A.value.showTransitionPending(ze),(await A.value.watchTransaction(ze,!0)).status&&(Ne(!1),_e.value=!0,setTimeout(()=>{z.setPoolConfigList(H.value,V.value.filterCoinsObj),A.value.getAccount(j.value.address)},1e3)),$e()}else fe(!1),Te(!0);n.value="",r.value=""}catch(de){console.log("0407###createPool###error##",de),re.value=!1,z.setPoolConfigList(H.value,V.value.filterCoinsObj),n.value="",r.value="",fe(!1),Te(!0)}};return x(()=>i.value,o=>{console.log(o,"===>newVal")},{immediate:!0}),{amountLock:ke,wallet:j,inputChange:Ie,fromCoinAmount:n,toCoinAmount:r,fromCoin:m,toCoin:p,maxBtnSelect:Ve,halfBtnSelect:je,showFromCoinLock:Y,showToCoinLock:Z,fromCoinBlance:$,toCoinBlance:E,fixedFromCoin:_,isInputTotalAmount:k,toggle:X,theme:ae,liquidityTotalAmount:K,createPoolInfo:i,minPrice:g,maxPrice:v,currentPriceReverse:Ge,currentPrice:se,onInput:We,initPrice:me,isShowtotalAmount:M,direction:w,isShowLiquidityModal:re,createPoolBtnText:Se,createPoolBtnDisabled:Le,toCreatePool:Me,isCreateSuccess:_e}}});const La=e=>(oa("data-v-83165d96"),e=e(),aa(),e),Ba={class:"create-pool-right"},$a={class:"card-container"},Ma={key:0,class:"lock"},Fa={class:"card-item"},Oa={class:"card-item"},Ua={key:0,class:"total-amount"},Da=La(()=>a("span",null,"Total Amount",-1));function Va(e,t,he,Ce,V,H){const j=ea("NewLiquidityTile"),k=Ko,h=ia,W=Jo,ve=Sa,A=da,z=Pa;return T(),O("div",Ba,[ie(j),a("div",$a,[e.amountLock||e.showFromCoinLock||e.showToCoinLock?(T(),O("div",Ma,[ie(k)])):L("",!0),a("div",Fa,[ie(h,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[0]||(t[0]=s=>e.fromCoinAmount=s),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:t[1]||(t[1]=s=>e.maxBtnSelect("fromCoin")),onOnHalf:t[2]||(t[2]=s=>e.halfBtnSelect("fromCoin")),onOnInput:t[3]||(t[3]=s=>{e.fromCoinAmount=s,e.fixedFromCoin=!0,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),a("div",Oa,[ie(h,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[4]||(t[4]=s=>e.toCoinAmount=s),"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direct":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:t[5]||(t[5]=s=>e.maxBtnSelect("toCoin")),onOnHalf:t[6]||(t[6]=s=>e.halfBtnSelect("toCoin")),onOnInput:t[7]||(t[7]=s=>{e.toCoinAmount=s,e.fixedFromCoin=!1,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme=="default"?(T(),O("img",{key:1,class:"add",src:Aa,alt:"",onClick:t[8]||(t[8]=(...s)=>e.toggle&&e.toggle(...s))})):L("",!0),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme!=="default"?(T(),O("img",{key:2,class:"add",src:qa,alt:"",onClick:t[9]||(t[9]=(...s)=>e.toggle&&e.toggle(...s))})):L("",!0)]),e.isShowtotalAmount?(T(),O("div",Ua,[Da,a("span",null,Re(e.liquidityTotalAmount)+" ",1)])):L("",!0),e.initPrice?(T(),qe(W,{key:1,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"create-pool-info":e.createPoolInfo,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":"custom","current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","create-pool-info","min-price","max-price","current-price","current-price-reverse"])):L("",!0),e.isShowLiquidityModal?(T(),qe(ve,{key:2,"pool-info":e.createPoolInfo,title:e.$t("newAdd.preview"),"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"current-price-tab":"custom","min-price":e.minPrice,"max-price":e.maxPrice,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"current-direct":e.direction,"is-increase":!1,onCreatePool:e.toCreatePool,onOnClose:t[10]||(t[10]=s=>e.isShowLiquidityModal=!1)},null,8,["pool-info","title","from-coin-amount","to-coin-amount","from-coin","to-coin","fixed-from-coin","current-price","current-price-reverse","min-price","max-price","show-from-coin-lock","show-to-coin-lock","current-direct","onCreatePool"])):L("",!0),e.wallet.connected?(T(),qe(A,{key:4,class:"add-liquidity-btn",disabled:e.wallet.connected?e.createPoolBtnDisabled:!1,onClick:t[12]||(t[12]=s=>e.isShowLiquidityModal=!0)},{default:zo(()=>[be(Re(e.createPoolBtnText),1)]),_:1},8,["disabled"])):(T(),qe(A,{key:3,class:"add-liquidity-btn",onClick:t[11]||(t[11]=s=>e.wallet.setIsShowWalletModal(!0))},{default:zo(()=>[be(Re(e.$t("button.connectWallet")),1)]),_:1})),e.isCreateSuccess?(T(),qe(z,{key:5,onOnClose:t[13]||(t[13]=s=>e.isCreateSuccess=!1)})):L("",!0)])}const ja=xo(Ia,[["render",Va],["__scopeId","data-v-83165d96"]]),Ea=Yo({components:{CreatePoolRight:ja},setup(){const e=B(!0),t=B(!0),he=B(!0),Ce=B(!1),V=B("1"),H=B(!0),j=B(""),k=Zo(),h=ma(),W=la(),ve=I(()=>W),A=ua(),z=I(()=>A),s=I(()=>ve.value.chainName),ae=I(()=>s.value?na(s.value):{}),$=B("");x(()=>[h,z.value.tokensObj],async([l,b])=>{var S,le,M;((S=h==null?void 0:h.currentRoute)==null?void 0:S.value.name)=="liquidity-creat-pool"&&b&&(m.value=z.value.tokensObj[k.query.fromCoin]||await ae.value.getTokenBySymbol(b,k.query.fromCoin),p.value=z.value.tokensObj[k.query.toCoin]||await ae.value.getTokenBySymbol(b,k.query.toCoin),$.value=k.query.fee!=="null"&&k.query.fee?k.query.fee:""),((le=h==null?void 0:h.currentRoute)==null?void 0:le.value.name)=="liquidity-creat-pool"&&((M=k==null?void 0:k.query)!=null&&M.fee)&&(me.value="",n.value="",r.value="",ue.value=!0)},{immediate:!0,deep:!0}),x(()=>[m.value,p.value,me.value,$.value,g.value,v.value,n.value,r.value],([l,b,S,le,M,X,re])=>{!l||!b?(V.value="1",e.value=!0,t.value=!0,ke.value=!0):le?S?!M||!X?(V.value="4",e.value=!1,t.value=!1,ke.value=!0):re||(V.value="5",e.value=!1,t.value=!1,ke.value=!1):(V.value="3",e.value=!1,t.value=!0,ke.value=!0):(V.value="2",e.value=!0,t.value=!0,ke.value=!0)},{immediate:!0}),x(()=>V.value,l=>{Number(l)<5&&(n.value="",r.value="")});const E=l=>{me.value=l},Ve=l=>{var b;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((b=z.value.tokensObj[l==null?void 0:l.address])==null?void 0:b.logo_url)||(ve.value.theme==="default"?Qe("/image/coins/unknown.png"):Qe("/image/coins/sui-unknown.png"))},je=l=>{switch(l){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}};I(()=>ta[s.value].hasCreatePool);const K=l=>{var Se,Ie,Le,Pe,Be,fe,Ne,Te,$e,Me,_e,Fe,o,d;console.log("#####emitCurrentPrice",l),l?(me.value=l,se.value=l,Ge.value=new u(1).div(new u(l)).toString()):(me.value="",se.value="",Ge.value="");let b,S;const le=z.value.poolConfigList;for(let c=0;c<le.length;c++){const f=le[c];if(f.token_a.address.toUpperCase()===((Le=(Ie=(Se=ee)==null?void 0:Se.value)==null?void 0:Ie.address)==null?void 0:Le.toUpperCase())&&f.token_b.address.toUpperCase()===((fe=(Be=(Pe=oe)==null?void 0:Pe.value)==null?void 0:Be.address)==null?void 0:fe.toUpperCase())){b=f.needReverse,S=f;break}else if(f.token_b.address.toUpperCase()===(($e=(Te=(Ne=ee)==null?void 0:Ne.value)==null?void 0:Te.address)==null?void 0:$e.toUpperCase())&&f.token_a.address.toUpperCase()===((Fe=(_e=(Me=oe)==null?void 0:Me.value)==null?void 0:_e.address)==null?void 0:Fe.toUpperCase())){b=f.needReverse,S=f;break}}let M=!1;ae.value.getIsSortedSymbols((o=ee.value)==null?void 0:o.address,(d=oe.value)==null?void 0:d.address)&&(M=!0);let X;console.log(M,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(w.value,"####changeCurrentPrice direction.value 290"),M&&w.value?X=!0:M&&!w.value||!M&&w.value?X=!1:X=!0,console.log(X,"###changeCurrentPrice newDirect 298");const re=s.value=="Aptos"?Na:Ta;if(m.value&&p.value&&l){const c=S?S==null?void 0:S.token_a.decimals:M?oe.value.decimals:ee.value.decimals,f=S?S==null?void 0:S.token_b.decimals:M?ee.value.decimals:oe.value.decimals,N=l&&ae.value.TickMath.priceToSqrtPriceX64(X?new u(1/l):new u(l),c,f);console.log(N.toString(),"===>current_sqrt_price");const F=l&&ae.value.TickMath.priceToSqrtPriceX64(new u(1).div(l),m.value.decimals,p.value.decimals);console.log(!X,"===>!newDirect"),console.log(c,f,"decimalsA,decimalsB===>");const P=ae.value.TickMath.priceToTickIndex(X?new u(1).div(l):new u(l),c,f);console.log(P,"==>currentTickIndex");const q=P-re[k.query.fee]*5,y=P+re[k.query.fee]*5,C=ae.value.TickMath.tickIndexToPrice(q,c,f).toString(),R=ae.value.TickMath.tickIndexToPrice(y,c,f).toString();ue.value?(g.value="0",v.value="∞"):X?(g.value=String(1/R),v.value=String(1/C),He.value=String(1/R),Xe.value=String(1/C)):(g.value=C,v.value=R,He.value=C,Xe.value=R),console.log("0518###c####createPoolFromCoin.value####",ee.value),console.log("0518###c####createPoolToCoin.value####",oe.value),console.log("0518###c####createPoolNeedReverse####",M);const U={token_a:S?S.token_a:M?oe.value:ee.value,token_b:S?S.token_b:M?ee.value:oe.value,isCreate:!0,tickSpacing:re[k.query.fee],currentPrice:l,current_sqrt_price:N,tick_lower:q,tick_upper:y,current_tick_index:P,currentPriceReverse:ha(String(1/l),6),reverse_current_sqrt_price:F,needReverse:b,fee:k.query.fee};i.value=U,console.log("0518###c####poolInfos####",U)}else i.value=null,g.value="",v.value=""},ye=()=>{ue.value=!ue.value,K(i.value.currentPrice)},Ee=l=>{console.log(l,"####0731 priceRangeChangeMin"),ue.value?(ue.value=!1,K(i.value.currentPrice)):g.value=l},pe=l=>{ue.value?(ue.value=!1,K(i.value.currentPrice)):l=="0"?v.value="∞":v.value=l},We=()=>{var l,b;if(console.log(i.value,"==>createPoolInfo.value"),w.value=!w.value,i.value){K(ya(new u(1).div(i.value.currentPrice).toString(),(b=(l=p)==null?void 0:l.value)==null?void 0:b.decimals));const S=m.value;m.value=p.value,p.value=S,_.value?n.value=r.value:r.value=n.value}console.log(w.value,"####toggle direction.value")};return pa(()=>{_a()}),{amountLock:ke,currentStep:V,sliderStyle:je,coinAmount:Ce,pricerange:j,fromCoin:m,toCoin:p,fee:$,direct:H,getCoinIcon:Ve,isSelectFullRange:he,onInput:E,store:ve,initPrice:me,inputPriceLock:e,specifyPriceLock:t,changeCurrentPrice:K,minPrice:g,maxPrice:v,defaultMinPrice:He,defaultMaxPrice:Xe,clickFullRange:ye,createPoolInfo:i,isFullRange:ue,priceRangeChangeMin:Ee,priceRangeChangeMax:pe,fromCoinAmount:n,toggle:We,showFromCoinLock:Y,showToCoinLock:Z}}});const ce=e=>(oa("data-v-01e1c2b7"),e=e(),aa(),e),Wa={class:"creat-pool-container"},za={class:"creat-pool-left"},Ha={class:"progress"},Xa=ce(()=>a("div",{class:"slider-ratio-content"},null,-1)),Qa=[Xa],Ga={class:"progress-text"},Ja={key:0},Ka={key:0},Ya={key:0},Za={key:0},xa={key:0},el={class:"creat-pool-center"},ol={class:"title"},al=ce(()=>a("div",{class:"left"},"Set Initial Price",-1)),ll={class:"right"},tl={key:0,class:"token-box"},nl=ce(()=>a("div",null,[a("svg",{class:"icon icon-up","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),ul=ce(()=>a("div",null,[a("svg",{class:"icon icon-down","aria-hidden":"true"},[a("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),rl=[nl,ul],sl={class:"content top-content"},il=ce(()=>a("div",{class:"top"},[a("span",null,"💡"),a("span",null,"Please set an initial price for this new pool to start.")],-1)),cl={class:"bottom"},vl={class:"input-div"},dl={key:0,class:"lock"},ml={class:"title"},pl=ce(()=>a("div",{class:"left"},"Set Price Range",-1)),fl={class:"right"},gl={key:0,src:Ra},kl=ce(()=>a("span",null,"Full Range",-1)),bl={class:"content bottom-content"},Cl=ce(()=>a("span",null,"💡",-1)),wl=ce(()=>a("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),hl=[Cl,wl],yl={class:"bottom"},Sl={class:"set-price-box"},Pl={key:0,class:"lock"},Nl={key:1,class:"create-pool-warning"},Tl={key:2,class:"position-tips"},_l=["src"],Al={class:"error"},ql={class:"creat-pool-right-container"};function Rl(e,t,he,Ce,V,H){var A,z;const j=Ca,k=Ko,h=ca,W=ea("CreatePoolRight"),ve=fa("image");return T(),O("div",Wa,[a("div",za,[a("div",Ha,[a("div",{class:"slider-ratio",style:ga(e.sliderStyle(e.currentStep))},Qa,4)]),a("div",Ga,[a("div",{class:ge(["row",Number(e.currentStep)>=1?"":"color-text"])},[e.currentStep>=1&&e.fromCoin&&e.toCoin?(T(),O("span",Ja,"✓")):L("",!0),be(" Select Tokens ")],2),a("div",{class:ge(["row",Number(e.currentStep)>=2?"":"color-text"])},[e.currentStep>=2&&e.fee?(T(),O("span",Ka,"✓")):L("",!0),be(" Select Fee Tier ")],2),a("div",{class:ge(["row",Number(e.currentStep)>=3?"":"color-text"])},[e.currentStep>=3&&e.initPrice?(T(),O("span",Ya,"✓")):L("",!0),be(" Set Initial Price ")],2),a("div",{class:ge(["row",Number(e.currentStep)>=4?"":"color-text"])},[e.currentStep>=4&&e.minPrice&&e.maxPrice?(T(),O("span",Za,"✓")):L("",!0),be(" Select Price Range ")],2),a("div",{class:ge(["row",Number(e.currentStep)>=5?"":"color-text"])},[e.currentStep>=5&&e.fromCoinAmount?(T(),O("span",xa,"✓")):L("",!0),be(" Confirm Liquidity ")],2)])]),a("div",el,[a("div",ol,[al,a("div",ll,[e.fromCoin&&e.toCoin&&e.initPrice?(T(),O("div",tl,[ka(a("img",null,null,512),[[ve,(A=e.fromCoin)==null?void 0:A.logo_url]]),a("span",null,Re((z=e.fromCoin)==null?void 0:z.symbol),1),a("div",{class:"icon-change",onClick:t[0]||(t[0]=(...s)=>e.toggle&&e.toggle(...s))},rl)])):L("",!0)])]),a("div",sl,[il,a("div",cl,[a("div",vl,[ie(j,{value:e.initPrice,type:"text",placeholder:"0.0",onInput:t[1]||(t[1]=s=>e.changeCurrentPrice(s.target.value))},null,8,["value"])]),e.inputPriceLock?(T(),O("div",dl,[ie(k)])):L("",!0)])]),a("div",ml,[pl,a("div",fl,[a("div",{class:ge(["radio",e.isFullRange?"active-radio":""]),onClick:t[2]||(t[2]=(...s)=>e.clickFullRange&&e.clickFullRange(...s))},[e.isFullRange?(T(),O("img",gl)):L("",!0)],2),kl])]),a("div",bl,[a("div",{class:ge(["top",e.specifyPriceLock?"":"no-border"])},hl,2),a("div",yl,[a("div",Sl,[ie(h,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(T(),O("div",Pl,[ie(k)])):L("",!0),e.currentStep>=4&&(e.showFromCoinLock||e.showToCoinLock)&&Number(e.maxPrice)>Number(e.minPrice)?(T(),O("div",Nl," To create a new pool, the initial price you set must be within your price range. ")):L("",!0),e.currentStep>=4&&Number(e.minPrice)>Number(e.maxPrice)?(T(),O("div",Tl,[a("img",{src:("importIcon"in e?e.importIcon:ba(Qe))("/image/icon-tips-error@2x.png"),alt:""},null,8,_l),a("p",Al,Re(e.$t("tips.positionError")),1)])):L("",!0)])])]),a("div",ql,[ie(W,{"create-pool-info":e.createPoolInfo,onToggle:e.toggle},null,8,["create-pool-info","onToggle"])])])}const tt=xo(Ea,[["render",Rl],["__scopeId","data-v-01e1c2b7"]]);export{tt as default};
