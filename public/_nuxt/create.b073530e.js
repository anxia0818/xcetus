import{_ as ca,a as Yo,b as Zo,c as va,d as da}from"./new-liquidity-title.e7d6576f.js";import{i as Ke}from"./import-icon.de3e6c66.js";import{a as xo,C as L,r as B,E as ea,l as ma,D as x,a6 as pa,O as De,e as oa,q as aa,o as N,f as D,i as se,h as l,x as $,t as qe,c as Ae,w as Xo,B as fa,j as be,p as la,k as ta,b as ga,A as ka,G as ba,K as Ca,v as ge,H as wa,u as ha,I as ya}from"./entry.61679925.js";/* empty css              */import{a as Sa,u as na,c as ua}from"./sha256.7649f183.js";import{u as ia,s as Go,a as Ko,c as Jo,b as Ve,e as ra,p as Qo,k as Pa,d as Na}from"./pool.2125f30a.js";import{a as Ta}from"./new-add-or-create.f053f369.js";import{_ as _a,a as Aa,s as qa}from"./poolFee.305aedf9.js";import{D as u}from"./decimal.0bdeb344.js";import{amountLock as ke,fromCoinAmount as n,toCoinAmount as i,fromCoin as m,toCoin as p,showFromCoinLock as Y,showToCoinLock as Z,fixedFromCoin as T,createPoolInfo as s,minPrice as g,maxPrice as v,currentPriceReverse as Je,currentPrice as ue,initPrice as pe,direction as b,createPoolFromCoin as ee,createPoolToCoin as oe,isFullRange as ne,resetData as Ra,defaultMinPrice as Xe,defaultMaxPrice as Ge}from"./create-pool-data.27df955f.js";import{_ as Ia,a as La}from"./icon-Add-Liquidity_2x.0acb06cb.js";import{_ as $a}from"./icon-selected_3x.09e9a6f0.js";import"./img-lock_2x.a28135f4.js";import"./lock.42f5a23e.js";/* empty css              */import"./token-warning.2b300c6d.js";/* empty css              *//* empty css              */import"./refresh-icon.e816fd6d.js";/* empty css              */import"./swap-setting.ac5c0ac5.js";/* empty css              */import"./icon-error_2x.090087e0.js";import"./status-block.e280855c.js";import"./notifi.87426c8e.js";import"./useWhale.de3da365.js";import"./index.dbba6340.js";const Ba=xo({components:{NewLiquidityTile:ca,NewLiquidityDepositRatio:Yo},setup(e,t){const he=Sa(),Ce=na(),V=L(()=>Ce),X=L(()=>V.value.chainName),j=L(()=>he),C=B(!1);B(),B(),B(),B(!1);const h=ea(),{t:H,locale:ve}=ma(),_=L(()=>X.value?ra(X.value):{}),z=ia(),r=L(()=>z),ae=L(()=>V.value.theme),M=L(()=>j.value.assets&&m.value&&j.value.assets[m.value.address]?Qo(j.value.assets[m.value.address].balance,m.value.decimals):"0"),E=L(()=>j.value.assets&&p.value&&j.value.assets[p.value.address]?Qo(j.value.assets[p.value.address].balance,p.value.decimals):"0"),je=o=>{o==="fromCoin"?(T.value=!0,X.value==="Aptos"?n.value=Number(M.value)>0?m.value.symbol=="APT"?new u(Number(M.value)).sub(new u(.1)).lt(new u(0))?"0":new u(Number(M.value)).sub(new u(.1)).toString():String(M.value):"":n.value=Number(M.value)>0?m.value.symbol=="SUI"?new u(Number(M.value)).sub(new u(.05)).lt(new u(0))?"0":new u(Number(M.value)).sub(new u(.05)).toString():String(M.value):""):(T.value=!1,X.value==="Aptos"?i.value=Number(E.value)>0?p.value.symbol=="APT"?new u(Number(E.value)).sub(new u(.1)).lt(new u(0))?"0":new u(Number(E.value)).sub(new u(.1)).toString():String(E.value):"":i.value=Number(E.value)>0?p.value.symbol=="SUI"?new u(Number(E.value)).sub(new u(.05)).lt(new u(0))?"0":new u(Number(E.value)).sub(new u(.05)).toString():String(E.value):"")},Ee=o=>{o==="fromCoin"?(T.value=!0,n.value=Number(M.value)>0?Go(new u(Number(M.value)).div(2).toString(),m.value.decimals).toString():""):(T.value=!1,i.value=Number(E.value)>0?Go(new u(Number(E.value)).div(2).toString(),p.value.decimals).toString():"")};x(()=>[r.value.tokensObj,h.query],async([o])=>{if(o){const d=o;if(h&&h.query&&h.query.fromCoin&&(console.log("0410###deposite###watch###route.query.tokena####",h.query.fromCoin,d),h.query.fromCoin)){const c=await _.value.getTokenBySymbol(d,h.query.fromCoin);console.log(c,"###fromCoinValue"),m.value=c,ee.value=c}if(h&&h.query&&h.query.toCoin&&h.query.toCoin){const c=await _.value.getTokenBySymbol(d,h.query.toCoin);p.value=c,oe.value=c}}},{immediate:!0,deep:!0});const Q=B("--"),ye=L(()=>V.value.slippage),We=B(),de=async()=>{if(!g.value&&!v.value)return!1;if(!n.value&&!i.value&&!g.value&&!v.value)return;const o=s.value||{};if(Jo(o))return;const{TickUtil:d,TickMath:c,getNearestTickByTick:f}=_.value,P=o==null?void 0:o.token_a.decimals,O=o==null?void 0:o.token_b.decimals;let S,A,y,k,R,U,I=o.current_tick_index,G;if(console.log(o,"==>poolInfos"),o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===p.value.address.toLowerCase()?G=!0:G=!1,g.value==="0"&&v.value==="∞")y=d.getMinIndex(Number(o.tickSpacing)),k=d.getMaxIndex(Number(o.tickSpacing));else{console.log(G,"===>directs1866"),G?(S=Number(g.value),A=Number(v.value)):(S=new u(1).div(v.value).toString(),A=new u(1).div(g.value).toString()),console.log("0518###pre###directs###",G),console.log("0518###pre###minPrice###",g.value),console.log("0518###pre###maxPrice###",v.value),console.log("0518###pre###poolInfos###",o),console.log("0518###pre###decimalsA###",P),console.log("0518###pre###decimalsB###",O),console.log(S,A,"min max1875"),console.log(g.value,v.value,"===>maxPrice.value");try{R=S==0?-443636:c.priceToTickIndex(new u(S),P,O)}catch{R=-443636}try{U=c.priceToTickIndex(new u(A),P,O)}catch{U=443636}console.log(R,U,"#####minTick maxTick"),y=f(R,Number(o.tickSpacing)),k=f(U,Number(o.tickSpacing))}if(console.log("0518###pre###currentTickIndex###",I,y,k),v.value!=="∞"&&y>=k){Y.value=!0,n.value="",Z.value=!0,i.value="";return}if(I==k||I==y){Y.value=!0,Z.value=!0;return}if(console.log(k,I,y,"1922"),v.value==="∞"||I>=y&&I<=k){Y.value=!1,Z.value=!1;let le;if(n.value||i.value){if(T.value){const we=new u(n.value).mul(Math.pow(10,m.value.decimals)).toString();le=new Ve(we)}else{const we=new u(i.value).mul(Math.pow(10,p.value.decimals)).toString();le=new Ve(we)}console.log(G,"======>directs");const{liquidityAmount:K,tokenMaxA:J,tokenMaxB:te,tokenMaxAOrigin:Oe,tokenMaxBOrigin:Ue}=_.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:y,upperTick:k,coinAmount:le,iscoinA:G?T.value:!T.value,roundUp:!0,slippage:Number(ye.value)/100,curSqrtPrice:new Ve(o.current_sqrt_price)});We.value={liquidityAmount:K,tokenMaxA:J,tokenMaxB:te,tokenMaxAOrigin:Oe,tokenMaxBOrigin:Ue},console.log(te,J,"tokenMaxB===>tokenMaxA"),G?T.value?i.value=Number(te)>0?te:"":n.value=Number(J)>0?J:"":T.value?i.value=J:n.value=te}}else I>k?(Y.value=!0,Z.value=!0):I<y?(Y.value=!0,Z.value=!0):(Y.value=!0,n.value="",Z.value=!0,i.value="")};x(()=>pe.value,o=>{o&&de()},{immediate:!0}),x(n,(o,d)=>{console.log(n,"===>fromCoinAmount"),o==""&&T.value&&(i.value=""),o&&T.value&&!C.value&&de()}),x(i,(o,d)=>{console.log(o,"===>>>>newValsda"),o==""&&!T.value&&(n.value=""),o&&!T.value&&!C.value&&de()}),x(()=>ne.value,o=>{console.log(o,"###newValue"),de()},{immediate:!0});const He=o=>{console.log(o,"e");const d=o.replace(/[^\d.]/g,""),c="$"+Ko(d);C.value=!0,Q.value=c,o>0?w():(n.value="",i.value="")};x([g,v],([o,d])=>{console.log(o,d,"==>minPrice,maxPrice"),Number(o)!==0&&Number(d)!==0&&!C.value?de():Number(o)!==0&&Number(d)!==0&&C.value?w():de()},{immediate:!0});const Qe=()=>{const o=a.value&&a.value[m.value.address]&&a.value[m.value.address].price,d=a.value&&a.value[p.value.address]&&a.value[p.value.address].price;if(o&&d){const c=new u(n.value>0?n.value:0).mul(o),f=new u(i.value>0?i.value:0).mul(d),P=c.add(f).toNumber();Q.value=P>0&&P<.01?"$<0.01":"$"+Ko(P,2)}else Q.value="--"};x(()=>[n.value,i.value,C.value],([o,d,c])=>{(o||d)&&!c?Qe():(!o||!d)&&!c&&(Q.value="--")},{immediate:!0});const a=L(()=>r.value.RATES),q=B(),w=async()=>{if(!g.value&&!v.value)return!1;if(!n.value&&!i.value&&!g.value&&!v.value)return;const o=s.value||{};if(Jo(o))return;const{TickUtil:d,TickMath:c,getNearestTickByTick:f}=_.value,P=o==null?void 0:o.token_a.decimals,O=o==null?void 0:o.token_b.decimals;let S,A,y,k,R,U,I;if(o.token_a.address.toLowerCase()===m.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===p.value.address.toLowerCase()?I=!0:I=!1,g.value==="0"&&v.value==="∞")y=d.getMinIndex(Number(o.tickSpacing)),k=d.getMaxIndex(Number(o.tickSpacing));else{I?(S=Number(g.value),A=Number(v.value)):(S=new u(1).div(v.value).toString(),A=new u(1).div(g.value).toString());try{R=S==0?-443636:c.priceToTickIndex(new u(S),P,O)}catch{R=-443636}try{U=c.priceToTickIndex(new u(A),P,O)}catch{U=443636}y=f(R,Number(o.tickSpacing)),k=f(U,Number(o.tickSpacing))}console.log(o.token_a,"poolInfos===>");const G=a.value[o==null?void 0:o.token_a.address].price,le=a.value[o==null?void 0:o.token_b.address].price;console.log(y,k,"####tick_lower tick_upper 889");try{const{amountA:K,amountB:J,tokenAmountsInfo:te}=await _.value.estCoinAmountsFromTotalAmount({lowerTick:y,upperTick:k,decimalsA:P,decimalsB:O,curSqrtPrice:new Ve(o.current_sqrt_price),totalAmount:Q.value,tokenPriceA:G,tokenPriceB:le});console.log(K,J,"###estCoinAmountsFromTotalAmount 844"),q.value=te,o.needReverse?b.value?(n.value=K,i.value=J):(n.value=J,i.value=K):(n.value=K,i.value=J)}catch(K){console.log(K,"e===>")}},ie=L(()=>{var c,f,P,O,S,A,y,k;const o=(P=a.value[(f=(c=m)==null?void 0:c.value)==null?void 0:f.address])==null?void 0:P.price,d=(A=a.value[(S=(O=p)==null?void 0:O.value)==null?void 0:S.address])==null?void 0:A.price;return console.log(a.value,(k=(y=m)==null?void 0:y.value)==null?void 0:k.address,"===>fromCoin?.value?.address"),!!(o&&d)}),F=()=>{t.emit("toggle")},W=B(!1),me=L(()=>{var o;return!m.value||!p.value?H("modal.selectTokenModalTitle"):!((o=h.query)!=null&&o.fee)&&ua[X.value].hasCreatePool?"Select fee tier":!Number(n.value)&&!Number(i.value)?H("button.enterAmount"):Number(n.value)>Number(M.value)?H("button.insufficientBalance",{name:m.value.symbol}):Number(i.value)>Number(E.value)?H("button.insufficientBalance",{name:p.value.symbol}):v.value!=="∞"&&Number(g.value)>=Number(v.value)?H("newAdd.invalidRange"):H("newAdd.preview")}),Re=o=>{const d=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");o.target.value=o.target.value.replace(d,"$1")},Ie=L(()=>{var o;return!n.value&&!i.value?(console.log("addLiquidityBtnDisabled11111"),!0):Number(n.value)>Number(M.value)||Number(i.value)>Number(E.value)?(console.log("addLiquidityBtnDisabled22222"),!0):me.value!==H("newAdd.preview")?!0:!s.value&&!((o=s.value)!=null&&o.currentPrice)?(console.log("addLiquidityBtnDisabled55555"),!0):!!(Number(n.value)<=0&&Number(i.value)<=0||Y.value||Z.value)}),{setTransactionTxid:Se,setTransactionDesc:Le,setIsShowWaiting:fe,setIsShowSuccess:Pe,setIsShowRejected:Ne,setPositiomNum:$e}=Ce,Be=()=>{X.value=="Sui"&&Fe()},{$notify:Me}=pa(),Te=B(!1),Fe=async()=>{var G,le,K,J,te,Oe,Ue,we,Ye,Ze,xe,eo,oo,ao,lo,to,no,uo,io,ro,so,co,vo,mo,po,fo,go,ko,bo,Co,wo,ho,yo,So,Po,No,To,_o,Ao,qo,Ro,Io,Lo,$o,Bo,Mo,Fo,Oo,Uo,Do,Vo,jo,Eo,Wo,Ho,zo;W.value=!1,console.log("创建sui池子");let o=!1;_.value.getIsSortedSymbols(ee.value.address,oe.value.address)&&(o=!0),Se("");const d=Y.value?"":`${n.value} ${(G=m.value)==null?void 0:G.symbol}`,c=Z.value?"":`${i.value} ${(le=p.value)==null?void 0:le.symbol}`;console.log("0424###createPoolFromCoin###",ee.value),console.log("0424###createPoolToCoin###",oe.value),console.log("0424###needReverse###",o),console.log("0424###createPoolInfo?.value?.needReverse###",(J=(K=s)==null?void 0:K.value)==null?void 0:J.needReverse),Le(H("tips.increaseLiquiditySuccess",{from:!o&&!((Oe=(te=s)==null?void 0:te.value)!=null&&Oe.needReverse)||o&&((we=(Ue=s)==null?void 0:Ue.value)!=null&&we.needReverse)?d:c,and:!Y.value&&!Z.value?"and":"",to:!o&&!((Ze=(Ye=s)==null?void 0:Ye.value)!=null&&Ze.needReverse)||o&&((eo=(xe=s)==null?void 0:xe.value)!=null&&eo.needReverse)?c:d})),fe(!0);let f="",P="",O="",S="",A="",y="",k=0,R=0,U=!1,I;if(o||(ao=(oo=s)==null?void 0:oo.value)!=null&&ao.needReverse){const re=o&&!((to=(lo=s)==null?void 0:lo.value)!=null&&to.needReverse);f=re?(co=(so=(ro=s)==null?void 0:ro.value)==null?void 0:so.token_b)==null?void 0:co.address:(io=(uo=(no=s)==null?void 0:no.value)==null?void 0:uo.token_a)==null?void 0:io.address,P=re?(ko=(go=(fo=s)==null?void 0:fo.value)==null?void 0:go.token_a)==null?void 0:ko.address:(po=(mo=(vo=s)==null?void 0:vo.value)==null?void 0:mo.token_b)==null?void 0:po.address,O=re?(So=(yo=(ho=s)==null?void 0:ho.value)==null?void 0:yo.token_b)==null?void 0:So.decimals:(wo=(Co=(bo=s)==null?void 0:bo.value)==null?void 0:Co.token_a)==null?void 0:wo.decimals,S=re?(qo=(Ao=(_o=s)==null?void 0:_o.value)==null?void 0:Ao.token_a)==null?void 0:qo.decimals:(To=(No=(Po=s)==null?void 0:Po.value)==null?void 0:No.token_b)==null?void 0:To.decimals,(Io=(Ro=s)==null?void 0:Ro.value)!=null&&Io.needReverse?(A=b.value?n.value:i.value,y=b.value?i.value:n.value,k=b.value?Number(g.value):1/Number(v.value),R=b.value?Number(v.value):1/Number(g.value),U=b.value?T.value:!T.value,I=b.value?ue.value:1/Number(ue.value)):(A=b.value?i.value:n.value,y=b.value?n.value:i.value,k=b.value?1/Number(v.value):Number(g.value),R=b.value?1/Number(g.value):Number(v.value),U=b.value?!T.value:T.value,I=b.value?1/Number(ue.value):ue.value)}else f=(Bo=($o=(Lo=s)==null?void 0:Lo.value)==null?void 0:$o.token_a)==null?void 0:Bo.address,P=(Oo=(Fo=(Mo=s)==null?void 0:Mo.value)==null?void 0:Fo.token_b)==null?void 0:Oo.address,O=(Vo=(Do=(Uo=s)==null?void 0:Uo.value)==null?void 0:Do.token_a)==null?void 0:Vo.decimals,S=(Wo=(Eo=(jo=s)==null?void 0:jo.value)==null?void 0:Eo.token_b)==null?void 0:Wo.decimals,A=b.value?n.value:i.value,y=b.value?i.value:n.value,k=b.value?Number(g.value):1/Number(v.value),R=b.value?Number(v.value):1/Number(g.value),U=b.value?T.value:!T.value,I=b.value?ue.value:1/Number(ue.value);try{console.log("0501###toCreatePool###params###",{coinTypeA:f,coinTypeB:P,decimalsA:O,decimalsB:S,amountA:A,amountB:y,minPrice:k,maxPrice:R,fix_amount_a:U,tick_spacing:Number(s.value.tickSpacing),slippage:Number(ye.value)/100,price:I});const re=await _.value.getCreatPoolTransactionPayload({coinTypeA:f,coinTypeB:P,decimalsA:O,decimalsB:S,amountA:A,amountB:y,minPrice:g.value=="0"&&v.value=="∞"?"0":k,maxPrice:g.value=="0"&&v.value=="∞"?"∞":R,fix_amount_a:U,tick_spacing:Number(s.value.tickSpacing),slippage:Number(ye.value)/100,price:I}),sa=await j.value.currentWallet.signAndExecuteTransactionBlock(re),_e=_.value.handleTx(sa);if(_e&&_e.hash){Se(_e.hash),fe(!1),Pe(!0);const ze={title:"Created pool",desc:"Pool created successfully ",hash:_e.hash,tit:"Pool Created",icon:"icon-icon-Position-Created",tokenInfo:{tokena:`${(Ho=m.value)==null?void 0:Ho.address}`,numa:Y.value?"":`- ${n.value}`,logoa:r.value.tokensObj&&m.value&&m.value.address&&r.value.tokensObj[m.value.address]&&r.value.tokensObj[m.value.address].logoURI,tokenb:`${(zo=p.value)==null?void 0:zo.address}`,numb:Z.value?"":`- ${i.value}`,logob:r.value.tokensObj&&p.value&&p.value.address&&r.value.tokensObj[p.value.address]&&r.value.tokensObj[p.value.address].logoURI},text:"Pool created successfully"};X.value!=="Aptos"&&(ze.res=_e.res),_.value.showTransitionPending(ze),(await _.value.watchTransaction(ze,!0)).status&&(Pe(!1),Te.value=!0,setTimeout(()=>{z.setPoolConfigList(X.value,V.value.filterCoinsObj),_.value.getAccount(j.value.address)},1e3)),$e()}else fe(!1),Ne(!0);n.value="",i.value=""}catch(re){console.log("0407###createPool###error##",String(re)),String(re).indexOf('Some("create_pool_internal") }, 1')>-1&&Me.error({icon:De("svg",{class:{icon:!0},"aria-hidden":!0},[De("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:De("div",{class:"notification-title"},[De("span",{innerHTML:"Pool already exists"},null)]),duration:4.5,description:"Something went wrong",class:"ant-notification-copy ant-notification-error"}),W.value=!1,z.setPoolConfigList(X.value,V.value.filterCoinsObj),n.value="",i.value="",fe(!1),Ne(!0)}};return x(()=>s.value,o=>{console.log(o,"===>newVal")},{immediate:!0}),{amountLock:ke,wallet:j,inputChange:Re,fromCoinAmount:n,toCoinAmount:i,fromCoin:m,toCoin:p,maxBtnSelect:je,halfBtnSelect:Ee,showFromCoinLock:Y,showToCoinLock:Z,fromCoinBlance:M,toCoinBlance:E,fixedFromCoin:T,isInputTotalAmount:C,toggle:F,theme:ae,liquidityTotalAmount:Q,createPoolInfo:s,minPrice:g,maxPrice:v,currentPriceReverse:Je,currentPrice:ue,onInput:He,initPrice:pe,isShowtotalAmount:ie,direction:b,isShowLiquidityModal:W,createPoolBtnText:me,createPoolBtnDisabled:Ie,toCreatePool:Be,isCreateSuccess:Te}}});const Ma=e=>(la("data-v-d7487599"),e=e(),ta(),e),Fa={class:"create-pool-right"},Oa={class:"card-container"},Ua={key:0,class:"lock"},Da={class:"card-item"},Va={class:"card-item"},ja={key:0,class:"total-amount"},Ea=Ma(()=>l("span",null,"Total Amount",-1));function Wa(e,t,he,Ce,V,X){const j=aa("NewLiquidityTile"),C=Zo,h=va,H=Yo,ve=Ta,_=fa,z=_a;return N(),D("div",Fa,[se(j),l("div",Oa,[e.amountLock||e.showFromCoinLock||e.showToCoinLock?(N(),D("div",Ua,[se(C)])):$("",!0),l("div",Da,[se(h,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[0]||(t[0]=r=>e.fromCoinAmount=r),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:t[1]||(t[1]=r=>e.maxBtnSelect("fromCoin")),onOnHalf:t[2]||(t[2]=r=>e.halfBtnSelect("fromCoin")),onOnInput:t[3]||(t[3]=r=>{e.fromCoinAmount=r,e.fixedFromCoin=!0,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),l("div",Va,[se(h,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[4]||(t[4]=r=>e.toCoinAmount=r),"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direct":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:t[5]||(t[5]=r=>e.maxBtnSelect("toCoin")),onOnHalf:t[6]||(t[6]=r=>e.halfBtnSelect("toCoin")),onOnInput:t[7]||(t[7]=r=>{e.toCoinAmount=r,e.fixedFromCoin=!1,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme=="default"?(N(),D("img",{key:1,class:"add",src:Ia,alt:"",onClick:t[8]||(t[8]=(...r)=>e.toggle&&e.toggle(...r))})):$("",!0),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme!=="default"?(N(),D("img",{key:2,class:"add",src:La,alt:"",onClick:t[9]||(t[9]=(...r)=>e.toggle&&e.toggle(...r))})):$("",!0)]),e.isShowtotalAmount?(N(),D("div",ja,[Ea,l("span",null,qe(e.liquidityTotalAmount)+" ",1)])):$("",!0),e.initPrice?(N(),Ae(H,{key:1,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"create-pool-info":e.createPoolInfo,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":"custom","current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","create-pool-info","min-price","max-price","current-price","current-price-reverse"])):$("",!0),e.isShowLiquidityModal?(N(),Ae(ve,{key:2,"pool-info":e.createPoolInfo,title:e.$t("newAdd.preview"),"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"current-price-tab":"custom","min-price":e.minPrice,"max-price":e.maxPrice,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"current-direct":e.direction,"is-increase":!1,"is-create":!0,onCreatePool:e.toCreatePool,onOnClose:t[10]||(t[10]=r=>e.isShowLiquidityModal=!1)},null,8,["pool-info","title","from-coin-amount","to-coin-amount","from-coin","to-coin","fixed-from-coin","current-price","current-price-reverse","min-price","max-price","show-from-coin-lock","show-to-coin-lock","current-direct","onCreatePool"])):$("",!0),e.wallet.connected?(N(),Ae(_,{key:4,class:"add-liquidity-btn",disabled:e.wallet.connected?e.createPoolBtnDisabled:!1,onClick:t[12]||(t[12]=r=>e.isShowLiquidityModal=!0)},{default:Xo(()=>[be(qe(e.createPoolBtnText),1)]),_:1},8,["disabled"])):(N(),Ae(_,{key:3,class:"add-liquidity-btn",onClick:t[11]||(t[11]=r=>e.wallet.setIsShowWalletModal(!0))},{default:Xo(()=>[be(qe(e.$t("button.connectWallet")),1)]),_:1})),e.isCreateSuccess?(N(),Ae(z,{key:5,onOnClose:t[13]||(t[13]=r=>e.isCreateSuccess=!1)})):$("",!0)])}const Ha=oa(Ba,[["render",Wa],["__scopeId","data-v-d7487599"]]),za=xo({components:{CreatePoolRight:Ha},setup(){const e=B(!0),t=B(!0),he=B(!0),Ce=B(!1),V=B("1"),X=B(!0),j=B(""),C=ea(),h=ga(),H=na(),ve=L(()=>H),_=ia(),z=L(()=>_),r=L(()=>ve.value.chainName),ae=L(()=>r.value?ra(r.value):{}),M=B("");x(()=>[h,z.value.tokensObj],async([a,q])=>{var w,ie,F;((w=h==null?void 0:h.currentRoute)==null?void 0:w.value.name)=="liquidity-create"&&q&&(m.value=z.value.tokensObj[C.query.fromCoin]||await ae.value.getTokenBySymbol(q,C.query.fromCoin),p.value=z.value.tokensObj[C.query.toCoin]||await ae.value.getTokenBySymbol(q,C.query.toCoin),M.value=C.query.fee!=="null"&&C.query.fee?C.query.fee:""),((ie=h==null?void 0:h.currentRoute)==null?void 0:ie.value.name)=="liquidity-create"&&((F=C==null?void 0:C.query)!=null&&F.fee)&&(pe.value="",n.value="",i.value="",ne.value=!0)},{immediate:!0,deep:!0}),x(()=>[m.value,p.value,pe.value,M.value,g.value,v.value,n.value,i.value],([a,q,w,ie,F,W,me])=>{!a||!q?(V.value="1",e.value=!0,t.value=!0,ke.value=!0):ie?w?!F||!W?(V.value="4",e.value=!1,t.value=!1,ke.value=!0):me||(V.value="5",e.value=!1,t.value=!1,ke.value=!1):(V.value="3",e.value=!1,t.value=!0,ke.value=!0):(V.value="2",e.value=!0,t.value=!0,ke.value=!0)},{immediate:!0}),x(()=>V.value,a=>{Number(a)<5&&(n.value="",i.value="")});const E=a=>{pe.value=a},je=a=>{var q;return(a==null?void 0:a.logoURI)||(a==null?void 0:a.logo_url)||((q=z.value.tokensObj[a==null?void 0:a.address])==null?void 0:q.logo_url)||(ve.value.theme==="default"?Ke("/image/coins/unknown.png"):Ke("/image/coins/sui-unknown.png"))},Ee=a=>{switch(a){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}};L(()=>ua[r.value].hasCreatePool);const Q=async a=>{var Re,Ie,Se,Le,fe,Pe,Ne,$e,Be,Me,Te,Fe,o,d;console.log("#####emitCurrentPrice",a),a?(pe.value=a,ue.value=a,Je.value=new u(1).div(new u(a)).toString()):(pe.value="",ue.value="",Je.value="");let q,w;const ie=z.value.poolConfigList;for(let c=0;c<ie.length;c++){const f=ie[c];if(f.token_a.address.toUpperCase()===((Se=(Ie=(Re=ee)==null?void 0:Re.value)==null?void 0:Ie.address)==null?void 0:Se.toUpperCase())&&f.token_b.address.toUpperCase()===((Pe=(fe=(Le=oe)==null?void 0:Le.value)==null?void 0:fe.address)==null?void 0:Pe.toUpperCase())){q=f.needReverse,w=f;break}else if(f.token_b.address.toUpperCase()===((Be=($e=(Ne=ee)==null?void 0:Ne.value)==null?void 0:$e.address)==null?void 0:Be.toUpperCase())&&f.token_a.address.toUpperCase()===((Fe=(Te=(Me=oe)==null?void 0:Me.value)==null?void 0:Te.address)==null?void 0:Fe.toUpperCase())){q=f.needReverse,w=f;break}}let F=!1;await ae.value.getIsSortedSymbols((o=ee.value)==null?void 0:o.address,(d=oe.value)==null?void 0:d.address)&&(F=!0);let W;console.log(F,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(b.value,"####changeCurrentPrice direction.value 290"),F&&!b.value?W=!0:F&&b.value||!F&&b.value?W=!1:W=!0,console.log(W,"###changeCurrentPrice newDirect 298");const me=r.value=="Aptos"?Aa:qa;if(m.value&&p.value&&a){const c=w?w==null?void 0:w.token_a.decimals:F?oe.value.decimals:ee.value.decimals,f=w?w==null?void 0:w.token_b.decimals:F?ee.value.decimals:oe.value.decimals,P=a&&ae.value.TickMath.priceToSqrtPriceX64(W?new u(1/a):new u(a),c,f);console.log(P.toString(),"===>current_sqrt_price");const O=a&&ae.value.TickMath.priceToSqrtPriceX64(new u(1).div(a),m.value.decimals,p.value.decimals);console.log(!W,a,"===>!newDirect"),console.log(c,f,"decimalsA,decimalsB===>");const S=ae.value.TickMath.priceToTickIndex(W?new u(1).div(a):new u(a),c,f);console.log(S,"==>currentTickIndex");const A=S-me[C.query.fee]*5,y=S+me[C.query.fee]*5,k=ae.value.TickMath.tickIndexToPrice(A,c,f).toString(),R=ae.value.TickMath.tickIndexToPrice(y,c,f).toString();ne.value?(g.value="0",v.value="∞"):W?(g.value=String(1/R),v.value=String(1/k),Xe.value=String(1/R),Ge.value=String(1/k)):(g.value=k,v.value=R,Xe.value=k,Ge.value=R),console.log("0518###c####createPoolFromCoin.value####",ee.value),console.log("0518###c####createPoolToCoin.value####",oe.value),console.log("0518###c####createPoolNeedReverse####",F);const U={token_a:w?w.token_a:F?oe.value:ee.value,token_b:w?w.token_b:F?ee.value:oe.value,isCreate:!0,tickSpacing:me[C.query.fee],currentPrice:a,current_sqrt_price:P,tick_lower:A,tick_upper:y,current_tick_index:S,currentPriceReverse:Pa(String(1/a),6),reverse_current_sqrt_price:O,needReverse:q,fee:C.query.fee};s.value=U,console.log("0518###c####poolInfos####",U)}else s.value=null,g.value="",v.value=""},ye=()=>{ne.value=!ne.value,Q(s.value.currentPrice)},We=a=>{console.log(a,"####0731 priceRangeChangeMin"),ne.value?(ne.value=!1,Q(s.value.currentPrice)):g.value=a},de=a=>{ne.value?(ne.value=!1,Q(s.value.currentPrice)):a=="0"?v.value="∞":v.value=a},He=()=>{var q,w;console.log(s.value,"==>createPoolInfo.value"),b.value=!b.value;const a=m.value;m.value=p.value,p.value=a,s.value&&(Q(Na(new u(1).div(s.value.currentPrice).toString(),(w=(q=p)==null?void 0:q.value)==null?void 0:w.decimals)),T.value?n.value=i.value:i.value=n.value),console.log(b.value,"####toggle direction.value")};return ka(()=>{Ra()}),{amountLock:ke,currentStep:V,sliderStyle:Ee,coinAmount:Ce,pricerange:j,fromCoin:m,toCoin:p,fee:M,direct:X,getCoinIcon:je,isSelectFullRange:he,onInput:E,store:ve,initPrice:pe,inputPriceLock:e,specifyPriceLock:t,changeCurrentPrice:Q,minPrice:g,maxPrice:v,defaultMinPrice:Xe,defaultMaxPrice:Ge,clickFullRange:ye,createPoolInfo:s,isFullRange:ne,priceRangeChangeMin:We,priceRangeChangeMax:de,fromCoinAmount:n,toggle:He,showFromCoinLock:Y,showToCoinLock:Z,inputChange:a=>{const q=b.value?p.value.decimals:m.value.decimals,w=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${q}})?).*$`);a.target.value=a.target.value.replace(w,"$1")},currentPrice:ue}}});const ce=e=>(la("data-v-1e7d0016"),e=e(),ta(),e),Xa={class:"creat-pool-container"},Ga={class:"creat-pool-left"},Ka={class:"progress"},Ja=ce(()=>l("div",{class:"slider-ratio-content"},null,-1)),Qa=[Ja],Ya={class:"progress-text"},Za={key:0},xa={key:0},el={key:0},ol={key:0},al={key:0},ll={class:"creat-pool-center"},tl={class:"title"},nl=ce(()=>l("div",{class:"left"},"Set Initial Price",-1)),ul={class:"right"},il={key:0,class:"token-box"},rl=ce(()=>l("div",null,[l("svg",{class:"icon icon-up","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),sl=ce(()=>l("div",null,[l("svg",{class:"icon icon-down","aria-hidden":"true"},[l("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),cl=[rl,sl],vl={class:"content top-content"},dl=ce(()=>l("div",{class:"top"},[l("span",null,"💡"),l("span",null,"Please set an initial price for this new pool to start.")],-1)),ml={class:"bottom"},pl={class:"input-div"},fl={key:0,class:"lock"},gl={class:"title"},kl=ce(()=>l("div",{class:"left"},"Set Price Range",-1)),bl={class:"right"},Cl={key:0,src:$a},wl=ce(()=>l("span",null,"Full Range",-1)),hl={class:"content bottom-content"},yl=ce(()=>l("span",null,"💡",-1)),Sl=ce(()=>l("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),Pl=[yl,Sl],Nl={class:"bottom"},Tl={class:"set-price-box"},_l={key:0,class:"lock"},Al={key:1,class:"create-pool-warning"},ql={key:2,class:"position-tips"},Rl=["src"],Il={class:"error"},Ll={class:"creat-pool-right-container"};function $l(e,t,he,Ce,V,X){var _,z;const j=ya,C=Zo,h=da,H=aa("CreatePoolRight"),ve=ba("image");return N(),D("div",Xa,[l("div",Ga,[l("div",Ka,[l("div",{class:"slider-ratio",style:Ca(e.sliderStyle(e.currentStep))},Qa,4)]),l("div",Ya,[l("div",{class:ge(["row",Number(e.currentStep)>=1?"":"color-text"])},[e.currentStep>=1&&e.fromCoin&&e.toCoin?(N(),D("span",Za,"✓")):$("",!0),be(" Select Tokens ")],2),l("div",{class:ge(["row",Number(e.currentStep)>=2?"":"color-text"])},[e.currentStep>=2&&e.fee?(N(),D("span",xa,"✓")):$("",!0),be(" Select Fee Tier ")],2),l("div",{class:ge(["row",Number(e.currentStep)>=3?"":"color-text"])},[e.currentStep>=3&&e.initPrice?(N(),D("span",el,"✓")):$("",!0),be(" Set Initial Price ")],2),l("div",{class:ge(["row",Number(e.currentStep)>=4?"":"color-text"])},[e.currentStep>=4&&e.minPrice&&e.maxPrice?(N(),D("span",ol,"✓")):$("",!0),be(" Select Price Range ")],2),l("div",{class:ge(["row",Number(e.currentStep)>=5?"":"color-text"])},[e.currentStep>=5&&e.fromCoinAmount?(N(),D("span",al,"✓")):$("",!0),be(" Confirm Liquidity ")],2)])]),l("div",ll,[l("div",tl,[nl,l("div",ul,[e.fromCoin&&e.toCoin?(N(),D("div",il,[wa(l("img",null,null,512),[[ve,(_=e.fromCoin)==null?void 0:_.logo_url]]),l("span",null,qe((z=e.fromCoin)==null?void 0:z.symbol),1),l("div",{class:"icon-change",onClick:t[0]||(t[0]=(...r)=>e.toggle&&e.toggle(...r))},cl)])):$("",!0)])]),l("div",vl,[dl,l("div",ml,[l("div",pl,[se(j,{value:e.initPrice,type:"text",placeholder:"0.0",onChange:e.inputChange,onInput:t[1]||(t[1]=r=>e.changeCurrentPrice(r.target.value))},null,8,["value","onChange"])]),e.inputPriceLock?(N(),D("div",fl,[se(C)])):$("",!0)])]),l("div",gl,[kl,l("div",bl,[l("div",{class:ge(["radio",e.isFullRange?"active-radio":""]),onClick:t[2]||(t[2]=(...r)=>e.clickFullRange&&e.clickFullRange(...r))},[e.isFullRange?(N(),D("img",Cl)):$("",!0)],2),wl])]),l("div",hl,[l("div",{class:ge(["top",e.specifyPriceLock?"":"no-border"])},Pl,2),l("div",Nl,[l("div",Tl,[se(h,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(N(),D("div",_l,[se(C)])):$("",!0),e.currentStep>=4&&(e.showFromCoinLock||e.showToCoinLock)&&Number(e.maxPrice)>Number(e.minPrice)?(N(),D("div",Al," To create a new pool, the initial price you set must be within your price range. ")):$("",!0),e.currentStep>=4&&Number(e.minPrice)>Number(e.maxPrice)?(N(),D("div",ql,[l("img",{src:("importIcon"in e?e.importIcon:ha(Ke))("/image/icon-tips-error@2x.png"),alt:""},null,8,Rl),l("p",Il,qe(e.$t("tips.positionError")),1)])):$("",!0)])])]),l("div",Ll,[se(H,{"create-pool-info":e.createPoolInfo,onToggle:e.toggle},null,8,["create-pool-info","onToggle"])])])}const rt=oa(za,[["render",$l],["__scopeId","data-v-1e7d0016"]]);export{rt as default};
