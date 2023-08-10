import{u as Je,a as ia,c as Zo}from"./sha256.4e0ad719.js";import{a as Ke,m as I,e as Ye,o as S,f as $,r as F,E as xo,l as ca,D as se,Q as ea,i as ue,h as t,x as M,c as Re,w as Qo,j as we,v as Ve,I as oa,B as va,p as aa,k as ta,b as da,C as ma,q as pa,H as fa,z as Ce,t as ga,u as ka}from"./entry.3f8ec2b1.js";import{_ as Ca,b as ba}from"./new-add-or-create.1fadf38a.js";import{_ as wa}from"./lock.ecc2380c.js";import{_ as ha,a as la,b as ya,c as _a}from"./new-liquidity-title.d1970225.js";import{i as Qe}from"./import-icon.de3e6c66.js";/* empty css              */import{a as na,u as sa,p as Go,s as Jo,e as Ko,c as Yo,f as je,b as Pa,d as Sa}from"./pool.a7d2925b.js";import{_ as Na,a as Ta,s as Aa}from"./poolFee.c0d9c190.js";import{D as s}from"./decimal.0e8aa3f1.js";import{fromCoin as v,toCoin as d,fromCoinAmount as n,toCoinAmount as r,maxPrice as p,minPrice as f,createPoolInfo as c,showFromCoinLock as Z,showToCoinLock as x,amountLock as be,fixedFromCoin as A,currentPriceReverse as Ge,currentPrice as ie,initPrice as pe,direction as b,createPoolFromCoin as ee,createPoolToCoin as oe,isFullRange as ne,resetData as Ia,defaultMinPrice as He,defaultMaxPrice as Xe}from"./create-pool-data.910b53e7.js";import{_ as qa,a as Ra}from"./icon-Add-Liquidity_2x.0acb06cb.js";import{_ as $a}from"./icon-selected_3x.09e9a6f0.js";import"./token-warning.97c2beeb.js";import"./status-block.41a88655.js";/* empty css              *//* empty css              */import"./notifi.49e7d209.js";import"./useWhale.a2697ae1.js";import"./index.3a54b75f.js";/* empty css              */import"./tick.505fdad3.js";/* empty css              */import"./refresh-icon.8551e62e.js";/* empty css              */import"./swap-setting.01091c9c.js";const La=Ke({setup(){const e=Je();return{storeIndex:I(()=>e)}}});const Ba={class:"create-pool-lock"},Ma={key:0,src:Ca,alt:""},Fa={key:1,src:wa,alt:""};function Ua(e,a,he,fe,U,H){return S(),$("div",Ba,[e.storeIndex.theme=="default"?(S(),$("img",Ma)):(S(),$("img",Fa))])}const ua=Ye(La,[["render",Ua],["__scopeId","data-v-fb497971"]]),Oa=Ke({components:{NewLiquidityTile:ha,NewLiquidityDepositRatio:la},setup(e,a){const he=ia(),fe=Je(),U=I(()=>fe),H=I(()=>U.value.chainName),V=I(()=>he),w=F(!1);F(),F(),F(),F(!1);const k=xo(),{t:X,locale:ve}=ca(),L=I(()=>H.value?na(H.value):{}),E=sa(),T=I(()=>E),h=I(()=>U.value.theme),z=I(()=>V.value.assets&&v.value&&V.value.assets[v.value.address]?Go(V.value.assets[v.value.address].balance,v.value.decimals):"0"),W=I(()=>V.value.assets&&d.value&&V.value.assets[d.value.address]?Go(V.value.assets[d.value.address].balance,d.value.decimals):"0"),ye=o=>{o==="fromCoin"?(A.value=!0,H.value==="Aptos"?n.value=Number(z.value)>0?v.value.symbol=="APT"?new s(Number(z.value)).sub(new s(.1)).lt(new s(0))?"0":new s(Number(z.value)).sub(new s(.1)).toString():String(z.value):"":n.value=Number(z.value)>0?v.value.symbol=="SUI"?new s(Number(z.value)).sub(new s(.05)).lt(new s(0))?"0":new s(Number(z.value)).sub(new s(.05)).toString():String(z.value):""):(A.value=!1,H.value==="Aptos"?r.value=Number(W.value)>0?d.value.symbol=="APT"?new s(Number(W.value)).sub(new s(.1)).lt(new s(0))?"0":new s(Number(W.value)).sub(new s(.1)).toString():String(W.value):"":r.value=Number(W.value)>0?d.value.symbol=="SUI"?new s(Number(W.value)).sub(new s(.05)).lt(new s(0))?"0":new s(Number(W.value)).sub(new s(.05)).toString():String(W.value):"")},de=o=>{o==="fromCoin"?(A.value=!0,n.value=Number(z.value)>0?Jo(new s(Number(z.value)).div(2).toString(),v.value.decimals).toString():""):(A.value=!1,r.value=Number(W.value)>0?Jo(new s(Number(W.value)).div(2).toString(),d.value.decimals).toString():"")};se(()=>[T.value.tokens,k.query],async([o])=>{if(o&&o.length>0){const i=o;if(k&&k.query&&k.query.fromCoin&&(console.log("0410###deposite###watch###route.query.tokena####",k.query.fromCoin),k.query.fromCoin)){const u=await L.value.getTokenBySymbol(i,k.query.fromCoin);v.value=u,ee.value=u}if(k&&k.query&&k.query.toCoin&&k.query.toCoin){const u=await L.value.getTokenBySymbol(i,k.query.toCoin);d.value=u,oe.value=u}}},{immediate:!0});const Y=F("--"),Pe=I(()=>U.value.slippage),Ee=F(),ge=async()=>{if(!f.value&&!p.value)return!1;if(!n.value&&!r.value&&!f.value&&!p.value)return;const o=c.value;if(Yo(o))return;const{TickUtil:i,TickMath:u,getNearestTickByTick:m}=L.value,_=o==null?void 0:o.token_a.decimals,q=o==null?void 0:o.token_b.decimals;let C,R,P,g,B,D,j=o.current_tick_index,G;if(console.log(o,"==>poolInfos"),o.token_a.address.toLowerCase()===v.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===d.value.address.toLowerCase()?G=!0:G=!1,f.value==="0"&&p.value==="∞")P=i.getMinIndex(Number(o.tickSpacing)),g=i.getMaxIndex(Number(o.tickSpacing));else{console.log(G,"===>directs1866"),G?(C=Number(f.value),R=Number(p.value)):(C=new s(1).div(p.value).toString(),R=new s(1).div(f.value).toString()),console.log("0518###pre###directs###",G),console.log("0518###pre###minPrice###",f.value),console.log("0518###pre###maxPrice###",p.value),console.log("0518###pre###poolInfos###",o),console.log("0518###pre###decimalsA###",_),console.log("0518###pre###decimalsB###",q),console.log(C,R,"min max1875"),console.log(f.value,p.value,"===>maxPrice.value");try{B=C==0?-443636:u.priceToTickIndex(new s(C),_,q)}catch{B=-443636}try{D=u.priceToTickIndex(new s(R),_,q)}catch{D=443636}P=m(B,Number(o.tickSpacing)),g=m(D,Number(o.tickSpacing))}if(console.log("0518###pre###currentTickIndex###",j,P,g),p.value!=="∞"&&P>=g){Z.value=!0,n.value="",x.value=!0,r.value="";return}if(console.log(g,j,P,"1922"),p.value==="∞"||j>=P&&j<=g){Z.value=!1,x.value=!1;let te;if(n.value||r.value){if(A.value){const _e=new s(n.value).mul(Math.pow(10,v.value.decimals)).toString();te=new je(_e)}else{const _e=new s(r.value).mul(Math.pow(10,d.value.decimals)).toString();te=new je(_e)}console.log(G,"======>directs");const{liquidityAmount:J,tokenMaxA:K,tokenMaxB:le,tokenMaxAOrigin:Oe,tokenMaxBOrigin:De}=L.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:P,upperTick:g,coinAmount:te,iscoinA:G?A.value:!A.value,roundUp:!0,slippage:Number(Pe.value)/100,curSqrtPrice:new je(o.current_sqrt_price)});Ee.value={liquidityAmount:J,tokenMaxA:K,tokenMaxB:le,tokenMaxAOrigin:Oe,tokenMaxBOrigin:De},console.log(le,K,"tokenMaxB===>tokenMaxA"),G?A.value?r.value=Number(le)>0?le:"":n.value=Number(K)>0?K:"":A.value?r.value=K:n.value=le}}else j>g?(Z.value=!0,x.value=!0):j<P?(Z.value=!0,x.value=!0):(Z.value=!0,n.value="",x.value=!0,r.value="")};se(()=>pe.value,o=>{o&&ge()},{immediate:!0}),se(n,(o,i)=>{console.log(n,"===>fromCoinAmount"),o==""&&A.value&&(r.value=""),o&&A.value&&!w.value&&ge()}),se(r,(o,i)=>{console.log(o,"===>>>>newValsda"),o==""&&!A.value&&(n.value=""),o&&!A.value&&!w.value&&ge()}),se(()=>ne.value,o=>{ge()});const ze=o=>{console.log(o,"e");const i=o.replace(/[^\d.]/g,""),u="$"+Ko(i);w.value=!0,Y.value=u,o>0?ae():(n.value="",r.value="")};se([f,p],([o,i])=>{console.log(o,i,"==>minPrice,maxPrice"),Number(o)!==0&&Number(i)!==0&&!w.value?ge():Number(o)!==0&&Number(i)!==0&&w.value&&ae()},{immediate:!0});const l=()=>{const o=y.value&&y.value[v.value.address]&&y.value[v.value.address].price,i=y.value&&y.value[d.value.address]&&y.value[d.value.address].price;if(o&&i){const u=new s(n.value>0?n.value:0).mul(o),m=new s(r.value>0?r.value:0).mul(i),_=u.add(m).toNumber();Y.value=_>0&&_<.01?"$<0.01":"$"+Ko(_,2)}else Y.value="--"};se(()=>[n.value,r.value,w.value],([o,i,u])=>{(o||i)&&!u?l():(!o||!i)&&!u&&(Y.value="--")},{immediate:!0});const y=I(()=>T.value.RATES),N=F(),ae=async()=>{if(!f.value&&!p.value)return!1;if(!n.value&&!r.value&&!f.value&&!p.value)return;const o=c.value;if(Yo(o))return;const{TickUtil:i,TickMath:u,getNearestTickByTick:m}=L.value,_=o==null?void 0:o.token_a.decimals,q=o==null?void 0:o.token_b.decimals;let C,R,P,g,B,D,j;if(o.token_a.address.toLowerCase()===v.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===d.value.address.toLowerCase()?j=!0:j=!1,f.value==="0"&&p.value==="∞")P=i.getMinIndex(Number(o.tickSpacing)),g=i.getMaxIndex(Number(o.tickSpacing));else{j?(C=Number(f.value),R=Number(p.value)):(C=new s(1).div(p.value).toString(),R=new s(1).div(f.value).toString());try{B=C==0?-443636:u.priceToTickIndex(new s(C),_,q)}catch{B=-443636}try{D=u.priceToTickIndex(new s(R),_,q)}catch{D=443636}P=m(B,Number(o.tickSpacing)),g=m(D,Number(o.tickSpacing))}console.log(o.token_a,"poolInfos===>");const G=y.value[o==null?void 0:o.token_a.address].price,te=y.value[o==null?void 0:o.token_b.address].price;console.log(P,g,"####tick_lower tick_upper 889");try{const{amountA:J,amountB:K,tokenAmountsInfo:le}=await L.value.estCoinAmountsFromTotalAmount({lowerTick:P,upperTick:g,decimalsA:_,decimalsB:q,curSqrtPrice:new je(o.current_sqrt_price),totalAmount:Y.value,tokenPriceA:G,tokenPriceB:te});console.log(J,K,"###estCoinAmountsFromTotalAmount 844"),N.value=le,o.needReverse?b.value?(n.value=J,r.value=K):(n.value=K,r.value=J):(n.value=J,r.value=K)}catch(J){console.log(J,"e===>")}},O=I(()=>{var u,m,_,q,C,R,P,g;const o=(_=y.value[(m=(u=v)==null?void 0:u.value)==null?void 0:m.address])==null?void 0:_.price,i=(R=y.value[(C=(q=d)==null?void 0:q.value)==null?void 0:C.address])==null?void 0:R.price;return console.log(y.value,(g=(P=v)==null?void 0:P.value)==null?void 0:g.address,"===>fromCoin?.value?.address"),!!(o&&i)}),Q=()=>{a.emit("toggle")},re=F(!1);I(()=>{if(T.value.poolConfigList&&v.value&&d.value){const o=T.value.poolConfigList.filter(u=>{var m,_,q,C;return u.token_a.address.toUpperCase()===((m=v.value.address)==null?void 0:m.toUpperCase())&&u.token_b.address.toUpperCase()===((_=d.value.address)==null?void 0:_.toUpperCase())||u.token_b.address.toUpperCase()===((q=v.value.address)==null?void 0:q.toUpperCase())&&u.token_a.address.toUpperCase()===((C=d.value.address)==null?void 0:C.toUpperCase())});console.log(o,"===>info");const i=[];return o.forEach(u=>{i.push(Number(u.fee))}),console.log(i,"===>>result"),i}else return[]}),I(()=>{var o;return(o=U.value)==null?void 0:o.filterCreatePoolCoin});const Se=I(()=>{var o;return!v.value||!d.value?X("modal.selectTokenModalTitle"):!((o=k.query)!=null&&o.fee)&&Zo[H.value].hasCreatePool?"Select fee tier":!Number(n.value)&&!Number(r.value)?X("button.enterAmount"):Number(n.value)>Number(z.value)?X("button.insufficientBalance",{name:v.value.symbol}):Number(r.value)>Number(W.value)?X("button.insufficientBalance",{name:d.value.symbol}):p.value!=="∞"&&Number(f.value)>=Number(p.value)?X("newAdd.invalidRange"):X("newAdd.preview")}),$e=o=>{const i=new RegExp("[^\\d-]*(\\d*(?:\\.\\d{0,2})?).*$");o.target.value=o.target.value.replace(i,"$1")},Le=I(()=>{var o;return!n.value&&!r.value?(console.log("addLiquidityBtnDisabled11111"),!0):Number(n.value)>Number(z.value)||Number(r.value)>Number(W.value)?(console.log("addLiquidityBtnDisabled22222"),!0):Se.value!==X("newAdd.preview")?!0:!c.value&&!((o=c.value)!=null&&o.currentPrice)?(console.log("addLiquidityBtnDisabled55555"),!0):!!(Number(n.value)<=0&&Number(r.value)<=0||Z.value||x.value)}),{setTransactionTxid:Ne,setTransactionDesc:Be,setIsShowWaiting:ke,setIsShowSuccess:Te,setIsShowRejected:Ae,setPositiomNum:Me}=fe,Fe=()=>{H.value=="Sui"&&Ue()},Ie=F(!1),Ue=async()=>{var G,te,J,K,le,Oe,De,_e,Ze,xe,eo,oo,ao,to,lo,no,so,uo,ro,io,co,vo,mo,po,fo,go,ko,Co,bo,wo,ho,yo,_o,Po,So,No,To,Ao,Io,qo,Ro,$o,Lo,Bo,Mo,Fo,Uo,Oo,Do,jo,Vo,Eo,zo,Wo,Ho,Xo;re.value=!1,console.log("创建sui池子");let o=!1;L.value.getIsSortedSymbols(ee.value.address,oe.value.address)&&(o=!0),Ne("");const i=Z.value?"":`${n.value} ${(G=v.value)==null?void 0:G.symbol}`,u=x.value?"":`${r.value} ${(te=d.value)==null?void 0:te.symbol}`;console.log("0424###createPoolFromCoin###",ee.value),console.log("0424###createPoolToCoin###",oe.value),console.log("0424###needReverse###",o),console.log("0424###createPoolInfo?.value?.needReverse###",(K=(J=c)==null?void 0:J.value)==null?void 0:K.needReverse),Be(X("tips.increaseLiquiditySuccess",{from:!o&&!((Oe=(le=c)==null?void 0:le.value)!=null&&Oe.needReverse)||o&&((_e=(De=c)==null?void 0:De.value)!=null&&_e.needReverse)?i:u,and:!Z.value&&!x.value?"and":"",to:!o&&!((xe=(Ze=c)==null?void 0:Ze.value)!=null&&xe.needReverse)||o&&((oo=(eo=c)==null?void 0:eo.value)!=null&&oo.needReverse)?u:i})),ke(!0);let m="",_="",q="",C="",R="",P="",g=0,B=0,D=!1,j;if(o||(to=(ao=c)==null?void 0:ao.value)!=null&&to.needReverse){const me=o&&!((no=(lo=c)==null?void 0:lo.value)!=null&&no.needReverse);m=me?(vo=(co=(io=c)==null?void 0:io.value)==null?void 0:co.token_b)==null?void 0:vo.address:(ro=(uo=(so=c)==null?void 0:so.value)==null?void 0:uo.token_a)==null?void 0:ro.address,_=me?(Co=(ko=(go=c)==null?void 0:go.value)==null?void 0:ko.token_a)==null?void 0:Co.address:(fo=(po=(mo=c)==null?void 0:mo.value)==null?void 0:po.token_b)==null?void 0:fo.address,q=me?(Po=(_o=(yo=c)==null?void 0:yo.value)==null?void 0:_o.token_b)==null?void 0:Po.decimals:(ho=(wo=(bo=c)==null?void 0:bo.value)==null?void 0:wo.token_a)==null?void 0:ho.decimals,C=me?(qo=(Io=(Ao=c)==null?void 0:Ao.value)==null?void 0:Io.token_a)==null?void 0:qo.decimals:(To=(No=(So=c)==null?void 0:So.value)==null?void 0:No.token_b)==null?void 0:To.decimals,($o=(Ro=c)==null?void 0:Ro.value)!=null&&$o.needReverse?(R=b.value?n.value:r.value,P=b.value?r.value:n.value,g=b.value?Number(f.value):1/Number(p.value),B=b.value?Number(p.value):1/Number(f.value),D=b.value?A.value:!A.value,j=b.value?ie.value:1/Number(ie.value)):(R=b.value?r.value:n.value,P=b.value?n.value:r.value,g=b.value?1/Number(p.value):Number(f.value),B=b.value?1/Number(f.value):Number(p.value),D=b.value?!A.value:A.value,j=b.value?1/Number(ie.value):ie.value)}else m=(Mo=(Bo=(Lo=c)==null?void 0:Lo.value)==null?void 0:Bo.token_a)==null?void 0:Mo.address,_=(Oo=(Uo=(Fo=c)==null?void 0:Fo.value)==null?void 0:Uo.token_b)==null?void 0:Oo.address,q=(Vo=(jo=(Do=c)==null?void 0:Do.value)==null?void 0:jo.token_a)==null?void 0:Vo.decimals,C=(Wo=(zo=(Eo=c)==null?void 0:Eo.value)==null?void 0:zo.token_b)==null?void 0:Wo.decimals,R=b.value?n.value:r.value,P=b.value?r.value:n.value,g=b.value?Number(f.value):1/Number(p.value),B=b.value?Number(p.value):1/Number(f.value),D=b.value?A.value:!A.value,j=b.value?ie.value:1/Number(ie.value);try{console.log("0501###toCreatePool###params###",{coinTypeA:m,coinTypeB:_,decimalsA:q,decimalsB:C,amountA:R,amountB:P,minPrice:g,maxPrice:B,fix_amount_a:D,tick_spacing:Number(c.value.tickSpacing),slippage:Number(Pe.value)/100,price:j});const me=await L.value.getCreatPoolTransactionPayload({coinTypeA:m,coinTypeB:_,decimalsA:q,decimalsB:C,amountA:R,amountB:P,minPrice:f.value=="0"&&p.value=="∞"?"0":g,maxPrice:f.value=="0"&&p.value=="∞"?"∞":B,fix_amount_a:D,tick_spacing:Number(c.value.tickSpacing),slippage:Number(Pe.value)/100,price:j}),ra=await V.value.currentWallet.signAndExecuteTransactionBlock(me),qe=L.value.handleTx(ra);if(qe&&qe.hash){Ne(qe.hash),ke(!1),Te(!0);const We={title:"Created pool",desc:"Pool created successfully ",hash:qe.hash,tit:"Pool Created",icon:"icon-icon-Position-Created",tokenInfo:{tokena:`${(Ho=v.value)==null?void 0:Ho.address}`,numa:Z.value?"":`- ${n.value}`,logoa:T.value.tokensObj&&v.value&&v.value.address&&T.value.tokensObj[v.value.address]&&T.value.tokensObj[v.value.address].logoURI,tokenb:`${(Xo=d.value)==null?void 0:Xo.address}`,numb:x.value?"":`- ${r.value}`,logob:T.value.tokensObj&&d.value&&d.value.address&&T.value.tokensObj[d.value.address]&&T.value.tokensObj[d.value.address].logoURI},text:"Pool created successfully"};H.value!=="Aptos"&&(We.res=qe.res),L.value.showTransitionPending(We),(await L.value.watchTransaction(We,!0)).status&&(Te(!1),Ie.value=!0,setTimeout(()=>{E.setPoolConfigList(H.value,U.value.filterCoinsObj),L.value.getAccount(V.value.address)},1e3)),Me()}else ke(!1),Ae(!0);n.value="",r.value=""}catch(me){console.log("0407###createPool###error##",me),re.value=!1,E.setPoolConfigList(H.value,U.value.filterCoinsObj),n.value="",r.value="",ke(!1),Ae(!0)}};return{amountLock:be,wallet:V,inputChange:$e,fromCoinAmount:n,toCoinAmount:r,fromCoin:v,toCoin:d,maxBtnSelect:ye,halfBtnSelect:de,showFromCoinLock:Z,showToCoinLock:x,fromCoinBlance:z,toCoinBlance:W,fixedFromCoin:A,isInputTotalAmount:w,toggle:Q,theme:h,liquidityTotalAmount:Y,createPoolInfo:c,minPrice:f,maxPrice:p,currentPriceReverse:Ge,currentPrice:ie,onInput:ze,initPrice:pe,isShowtotalAmount:O,direction:b,isShowLiquidityModal:re,createPoolBtnText:Se,createPoolBtnDisabled:Le,toCreatePool:Fe,isCreateSuccess:Ie}}});const Da=e=>(aa("data-v-12eff701"),e=e(),ta(),e),ja={class:"create-pool-right"},Va={class:"card-container"},Ea={key:0,class:"lock"},za={class:"card-item"},Wa={class:"card-item"},Ha={key:0,class:"total-amount"},Xa=Da(()=>t("span",null,"Total Amount",-1));function Qa(e,a,he,fe,U,H){const V=ea("NewLiquidityTile"),w=ua,k=ya,X=oa,ve=la,L=ba,E=va,T=Na;return S(),$("div",ja,[ue(V),t("div",Va,[e.amountLock||e.showFromCoinLock||e.showToCoinLock?(S(),$("div",Ea,[ue(w)])):M("",!0),t("div",za,[ue(k,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":a[0]||(a[0]=h=>e.fromCoinAmount=h),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:a[1]||(a[1]=h=>e.maxBtnSelect("fromCoin")),onOnHalf:a[2]||(a[2]=h=>e.halfBtnSelect("fromCoin")),onOnInput:a[3]||(a[3]=h=>{e.fromCoinAmount=h,e.fixedFromCoin=!0,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),t("div",Wa,[ue(k,{modelValue:e.toCoinAmount,"onUpdate:modelValue":a[4]||(a[4]=h=>e.toCoinAmount=h),"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direct":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:a[5]||(a[5]=h=>e.maxBtnSelect("toCoin")),onOnHalf:a[6]||(a[6]=h=>e.halfBtnSelect("toCoin")),onOnInput:a[7]||(a[7]=h=>{e.toCoinAmount=h,e.fixedFromCoin=!1,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"])]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme=="default"?(S(),$("img",{key:1,class:"add",src:qa,alt:"",onClick:a[8]||(a[8]=(...h)=>e.toggle&&e.toggle(...h))})):M("",!0),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme!=="default"?(S(),$("img",{key:2,class:"add",src:Ra,alt:"",onClick:a[9]||(a[9]=(...h)=>e.toggle&&e.toggle(...h))})):M("",!0)]),e.isShowtotalAmount?(S(),$("div",Ha,[Xa,t("span",null,[ue(X,{value:e.liquidityTotalAmount,placeholder:e.isInputTotalAmount?"":e.liquidityTotalAmount,onInput:a[10]||(a[10]=h=>e.onInput(h.target.value))},null,8,["value","placeholder"])])])):M("",!0),e.initPrice?(S(),Re(ve,{key:1,"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"create-pool-info":e.createPoolInfo,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":"custom","current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","create-pool-info","min-price","max-price","current-price","current-price-reverse"])):M("",!0),e.isShowLiquidityModal?(S(),Re(L,{key:2,"pool-info":e.createPoolInfo,title:e.$t("newAdd.preview"),"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"from-coin":e.fromCoin,"to-coin":e.toCoin,"fixed-from-coin":e.fixedFromCoin,"current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse,"current-price-tab":"custom","min-price":e.minPrice,"max-price":e.maxPrice,"show-from-coin-lock":e.showFromCoinLock,"show-to-coin-lock":e.showToCoinLock,"current-direct":e.direction,"is-increase":!1,onCreatePool:e.toCreatePool,onOnClose:a[11]||(a[11]=h=>e.isShowLiquidityModal=!1)},null,8,["pool-info","title","from-coin-amount","to-coin-amount","from-coin","to-coin","fixed-from-coin","current-price","current-price-reverse","min-price","max-price","show-from-coin-lock","show-to-coin-lock","current-direct","onCreatePool"])):M("",!0),e.wallet.connected?(S(),Re(E,{key:4,class:"add-liquidity-btn",disabled:e.wallet.connected?e.createPoolBtnDisabled:!1,onClick:a[13]||(a[13]=h=>e.isShowLiquidityModal=!0)},{default:Qo(()=>[we(Ve(e.createPoolBtnText),1)]),_:1},8,["disabled"])):(S(),Re(E,{key:3,class:"add-liquidity-btn",onClick:a[12]||(a[12]=h=>e.wallet.setIsShowWalletModal(!0))},{default:Qo(()=>[we(Ve(e.$t("button.connectWallet")),1)]),_:1})),e.isCreateSuccess?(S(),Re(T,{key:5,onOnClose:a[14]||(a[14]=h=>e.isCreateSuccess=!1)})):M("",!0)])}const Ga=Ye(Oa,[["render",Qa],["__scopeId","data-v-12eff701"]]),Ja=Ke({components:{CreatePoolRight:Ga},setup(){const e=F(!0),a=F(!0),he=F(!0),fe=F(!1),U=F("1"),H=F(!0),V=F(""),w=xo(),k=da(),X=Je(),ve=I(()=>X),L=sa(),E=I(()=>L),T=F("");se(()=>[k,E.value.tokensObj],([l,y])=>{var N,ae,O;((N=k==null?void 0:k.currentRoute)==null?void 0:N.value.name)=="liquidity-creat-pool"&&y&&(v.value=E.value.tokensObj[w.query.fromCoin],d.value=E.value.tokensObj[w.query.toCoin],console.log("z"),T.value=w.query.fee!=="null"&&w.query.fee?w.query.fee:""),((ae=k==null?void 0:k.currentRoute)==null?void 0:ae.value.name)=="liquidity-creat-pool"&&((O=w==null?void 0:w.query)!=null&&O.fee)&&(pe.value="",n.value="",r.value="",ne.value=!0)},{immediate:!0,deep:!0}),se(()=>[v.value,d.value,pe.value,T.value,f.value,p.value,n.value,r.value],([l,y,N,ae,O,Q,re])=>{!l||!y?(U.value="1",e.value=!0,a.value=!0,be.value=!0):ae?N?!O||!Q?(U.value="4",e.value=!1,a.value=!1,be.value=!0):re||(U.value="5",e.value=!1,a.value=!1,be.value=!1):(U.value="3",e.value=!1,a.value=!0,be.value=!0):(U.value="2",e.value=!0,a.value=!0,be.value=!0)},{immediate:!0}),se(()=>U.value,l=>{Number(l)<5&&(n.value="",r.value="")});const h=l=>{pe.value=l},z=l=>{var y;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((y=E.value.tokensObj[l==null?void 0:l.address])==null?void 0:y.logo_url)||(ve.value.theme==="default"?Qe("/image/coins/unknown.png"):Qe("/image/coins/sui-unknown.png"))},W=l=>{switch(l){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}},ye=I(()=>ve.value.chainName),de=I(()=>ye.value?na(ye.value):{});I(()=>Zo[ye.value].hasCreatePool);const Y=l=>{var Se,$e,Le,Ne,Be,ke,Te,Ae,Me,Fe,Ie,Ue,o,i;console.log("asd"),l?(pe.value=l,ie.value=l,Ge.value=new s(1).div(new s(l)).toString()):(pe.value="",ie.value="",Ge.value="");let y,N;const ae=E.value.poolConfigList;for(let u=0;u<ae.length;u++){const m=ae[u];if(m.token_a.address.toUpperCase()===((Le=($e=(Se=ee)==null?void 0:Se.value)==null?void 0:$e.address)==null?void 0:Le.toUpperCase())&&m.token_b.address.toUpperCase()===((ke=(Be=(Ne=oe)==null?void 0:Ne.value)==null?void 0:Be.address)==null?void 0:ke.toUpperCase())){y=m.needReverse,N=m;break}else if(m.token_b.address.toUpperCase()===((Me=(Ae=(Te=ee)==null?void 0:Te.value)==null?void 0:Ae.address)==null?void 0:Me.toUpperCase())&&m.token_a.address.toUpperCase()===((Ue=(Ie=(Fe=oe)==null?void 0:Fe.value)==null?void 0:Ie.address)==null?void 0:Ue.toUpperCase())){y=m.needReverse,N=m;break}}let O=!1;de.value.getIsSortedSymbols((o=ee.value)==null?void 0:o.address,(i=oe.value)==null?void 0:i.address)&&(O=!0);let Q;console.log(O,"###changeCurrentPrice createPoolNeedReverse 289"),console.log(b.value,"####changeCurrentPrice direction.value 290"),O&&b.value?Q=!0:O&&!b.value||!O&&b.value?Q=!1:Q=!0,console.log(Q,"###changeCurrentPrice newDirect 298");const re=ye.value=="Aptos"?Ta:Aa;if(v.value&&d.value&&l){const u=N?N==null?void 0:N.token_a.decimals:O?oe.value.decimals:ee.value.decimals,m=N?N==null?void 0:N.token_b.decimals:O?ee.value.decimals:oe.value.decimals,_=l&&de.value.TickMath.priceToSqrtPriceX64(Q?new s(1/l):new s(l),u,m);console.log(_,"===>current_sqrt_price");const q=l&&de.value.TickMath.priceToSqrtPriceX64(new s(1).div(l),v.value.decimals,d.value.decimals);console.log(!Q,"===>!newDirect"),console.log(u,m,"decimalsA,decimalsB===>");const C=de.value.TickMath.priceToTickIndex(Q?new s(1).div(l):new s(l),u,m);console.log(C,"==>currentTickIndex");const R=C-re[w.query.fee]*5,P=C+re[w.query.fee]*5,g=de.value.TickMath.tickIndexToPrice(R,u,m).toString(),B=de.value.TickMath.tickIndexToPrice(P,u,m).toString();ne.value?(f.value="0",p.value="∞"):Q?(f.value=String(1/B),p.value=String(1/g),He.value=String(1/B),Xe.value=String(1/g)):(f.value=g,p.value=B,He.value=g,Xe.value=B),console.log("0518###c####createPoolFromCoin.value####",ee.value),console.log("0518###c####createPoolToCoin.value####",oe.value),console.log("0518###c####createPoolNeedReverse####",O);const D={token_a:N?N.token_a:O?oe.value:ee.value,token_b:N?N.token_b:O?ee.value:oe.value,isCreate:!0,tickSpacing:re[w.query.fee],currentPrice:l,current_sqrt_price:_,tick_lower:R,tick_upper:P,current_tick_index:C,currentPriceReverse:Pa(String(1/l),6),reverse_current_sqrt_price:q,needReverse:y,fee:w.query.fee};c.value=D,console.log("0518###c####poolInfos####",D)}else c.value=null,f.value="",p.value=""},Pe=()=>{ne.value=!ne.value,Y(c.value.currentPrice)},Ee=l=>{console.log(l,"####0731 priceRangeChangeMin"),ne.value?(ne.value=!1,Y(c.value.currentPrice)):f.value=l},ge=l=>{ne.value?(ne.value=!1,Y(c.value.currentPrice)):p.value=l},ze=()=>{var l,y;if(console.log(c.value,"==>createPoolInfo.value"),b.value=!b.value,c.value){Y(Sa(new s(1).div(c.value.currentPrice).toString(),(y=(l=d)==null?void 0:l.value)==null?void 0:y.decimals));const N=v.value;v.value=d.value,d.value=N,A.value?n.value=r.value:r.value=n.value}};return ma(()=>{Ia()}),{amountLock:be,currentStep:U,sliderStyle:W,coinAmount:fe,pricerange:V,fromCoin:v,toCoin:d,fee:T,direct:H,getCoinIcon:z,isSelectFullRange:he,onInput:h,store:ve,initPrice:pe,inputPriceLock:e,specifyPriceLock:a,changeCurrentPrice:Y,minPrice:f,maxPrice:p,defaultMinPrice:He,defaultMaxPrice:Xe,clickFullRange:Pe,createPoolInfo:c,isFullRange:ne,priceRangeChangeMin:Ee,priceRangeChangeMax:ge,fromCoinAmount:n,toggle:ze,showFromCoinLock:Z,showToCoinLock:x}}});const ce=e=>(aa("data-v-1e028c10"),e=e(),ta(),e),Ka={class:"creat-pool-container"},Ya={class:"creat-pool-left"},Za={class:"progress"},xa=ce(()=>t("div",{class:"slider-ratio-content"},null,-1)),et=[xa],ot={class:"progress-text"},at={key:0},tt={key:0},lt={key:0},nt={key:0},st={key:0},ut={class:"creat-pool-center"},rt={class:"title"},it=ce(()=>t("div",{class:"left"},"Set Initial Price",-1)),ct={class:"right"},vt={key:0,class:"token-box"},dt=ce(()=>t("div",null,[t("svg",{class:"icon icon-up","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),mt=ce(()=>t("div",null,[t("svg",{class:"icon icon-down","aria-hidden":"true"},[t("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),pt=[dt,mt],ft={class:"content top-content"},gt=ce(()=>t("div",{class:"top"},[t("span",null,"💡"),t("span",null,"Please set an initial price for this new pool to start.")],-1)),kt={class:"bottom"},Ct={class:"input-div"},bt={key:0,class:"lock"},wt={class:"title"},ht=ce(()=>t("div",{class:"left"},"Set Price Range",-1)),yt={class:"right"},_t={key:0,src:$a},Pt=ce(()=>t("span",null,"Full Range",-1)),St={class:"content bottom-content"},Nt=ce(()=>t("span",null,"💡",-1)),Tt=ce(()=>t("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),At=[Nt,Tt],It={class:"bottom"},qt={class:"set-price-box"},Rt={key:0,class:"lock"},$t={key:1,class:"create-pool-warning"},Lt={key:2,class:"position-tips"},Bt=["src"],Mt={class:"error"},Ft={class:"creat-pool-right-container"};function Ut(e,a,he,fe,U,H){var L,E;const V=oa,w=ua,k=_a,X=ea("CreatePoolRight"),ve=pa("image");return S(),$("div",Ka,[t("div",Ya,[t("div",Za,[t("div",{class:"slider-ratio",style:fa(e.sliderStyle(e.currentStep))},et,4)]),t("div",ot,[t("div",{class:Ce(["row",!e.fromCoin||!e.toCoin?"color-text":""])},[e.fromCoin&&e.toCoin?(S(),$("span",at,"✓")):M("",!0),we(" Select Pool ")],2),t("div",{class:Ce(["row",e.fee?"":"color-text"])},[e.fee?(S(),$("span",tt,"✓")):M("",!0),we(" Select Fee Tier ")],2),t("div",{class:Ce(["row",e.initPrice?"":"color-text"])},[e.initPrice?(S(),$("span",lt,"✓")):M("",!0),we(" Set Initial Price ")],2),t("div",{class:Ce(["row",e.currentStep<4||!e.minPrice||!e.maxPrice?"color-text":""])},[e.currentStep>=4&&e.minPrice&&e.maxPrice?(S(),$("span",nt,"✓")):M("",!0),we(" Select Price Range ")],2),t("div",{class:Ce(["row",e.currentStep<5||!e.fromCoinAmount?"color-text":""])},[e.currentStep>=5&&e.fromCoinAmount?(S(),$("span",st,"✓")):M("",!0),we(" Confirm Liquidity ")],2)])]),t("div",ut,[t("div",rt,[it,t("div",ct,[e.fromCoin&&e.toCoin&&e.initPrice?(S(),$("div",vt,[ga(t("img",null,null,512),[[ve,(L=e.fromCoin)==null?void 0:L.logo_url]]),t("span",null,Ve((E=e.fromCoin)==null?void 0:E.symbol),1),t("div",{class:"icon-change",onClick:a[0]||(a[0]=(...T)=>e.toggle&&e.toggle(...T))},pt)])):M("",!0)])]),t("div",ft,[gt,t("div",kt,[t("div",Ct,[ue(V,{value:e.initPrice,type:"text",placeholder:"0.0",onInput:a[1]||(a[1]=T=>e.changeCurrentPrice(T.target.value))},null,8,["value"])]),e.inputPriceLock?(S(),$("div",bt,[ue(w)])):M("",!0)])]),t("div",wt,[ht,t("div",yt,[t("div",{class:Ce(["radio",e.isFullRange?"active-radio":""]),onClick:a[2]||(a[2]=(...T)=>e.clickFullRange&&e.clickFullRange(...T))},[e.isFullRange?(S(),$("img",_t)):M("",!0)],2),Pt])]),t("div",St,[t("div",{class:Ce(["top",e.specifyPriceLock?"":"no-border"])},At,2),t("div",It,[t("div",qt,[ue(k,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(S(),$("div",Rt,[ue(w)])):M("",!0),e.currentStep>=4&&(e.showFromCoinLock||e.showToCoinLock)&&Number(e.maxPrice)>Number(e.minPrice)?(S(),$("div",$t," To create a new pool, the initial price you set must be within your price range. ")):M("",!0),e.currentStep>=4&&Number(e.minPrice)>Number(e.maxPrice)?(S(),$("div",Lt,[t("img",{src:("importIcon"in e?e.importIcon:ka(Qe))("/image/icon-tips-error@2x.png"),alt:""},null,8,Bt),t("p",Mt,Ve(e.$t("tips.positionError")),1)])):M("",!0)])])]),t("div",Ft,[ue(X,{"create-pool-info":e.createPoolInfo,onToggle:e.toggle},null,8,["create-pool-info","onToggle"])])])}const vl=Ye(Ja,[["render",Ut],["__scopeId","data-v-1e028c10"]]);export{vl as default};
