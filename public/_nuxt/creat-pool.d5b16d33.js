import{u as Ie,a as Ke}from"./sha256.dba739f5.js";import{a as qe,m as S,e as $e,o as C,f as T,r as g,E as Oe,D as x,K as Ve,i as j,h as n,c as Me,x as V,j as le,w as We,I as De,B as Ge,p as je,k as Ee,b as Je,C as Qe,H as Ye,z as ae,u as Ze}from"./entry.f6bb9ee2.js";import{_ as xe}from"./img-lock_2x.cafd1244.js";import{_ as eo}from"./lock.d8e2143f.js";import{_ as oo,a as ze,b as no,c as to}from"./new-liquidity-title.294f8168.js";import{i as Ae}from"./import-icon.de3e6c66.js";/* empty css              */import{a as He,u as Xe,p as Be,s as Fe,c as Ue,f as _e,b as ao}from"./pool.35fd4e00.js";import{_ as lo,a as io,b as so}from"./icon-Add-Liquidity_2x.02e24302.js";import{D as a}from"./decimal.0e8aa3f1.js";import{fromCoin as k,toCoin as _,fromCoinAmount as v,toCoinAmount as f,fixedFromCoin as P,toggle as ro,createPoolInfo as ie,minPrice as m,maxPrice as u,currentPriceReverse as Pe,currentPrice as Ne,createPoolFromCoin as J,createPoolToCoin as Q,initPrice as me,isFullRange as fe,direction as Ce,resetData as uo,defaultMinPrice as Se,defaultMaxPrice as Te}from"./create-pool-data.b6a365f5.js";import{a as co,s as vo}from"./poolFee.fc11ddd4.js";import{_ as mo}from"./icon-selected_3x.09e9a6f0.js";/* empty css              */import"./tick.505fdad3.js";import"./token-warning.1111f41b.js";/* empty css              */import"./refresh-icon.ff90eb0a.js";/* empty css              *//* empty css              */import"./swap-setting.5f3ca5d0.js";/* empty css              */const po=qe({setup(){const e=Ie();return{storeIndex:S(()=>e)}}});const fo={class:"create-pool-lock"},go={key:0,src:xe,alt:""},ko={key:1,src:eo,alt:""};function _o(e,t,se,re,N,G){return C(),T("div",fo,[e.storeIndex.theme=="default"?(C(),T("img",go)):(C(),T("img",ko))])}const Co=$e(po,[["render",_o],["__scopeId","data-v-fb497971"]]),wo=qe({components:{NewLiquidityTile:oo,NewLiquidityDepositRatio:ze},setup(e,t){const se=Ke(),re=Ie(),N=S(()=>re),G=S(()=>N.value.chainName),U=S(()=>se),c=g(!1),w=g(!1),O=g(!1);g(),g(),g(),g(!1);const i=Oe(),z=S(()=>G.value?He(G.value):{}),s=Xe(),ue=S(()=>s),we=S(()=>N.value.theme),I=S(()=>U.value.assets&&k.value&&U.value.assets[k.value.address]?Be(U.value.assets[k.value.address].balance,k.value.decimals):"0"),q=S(()=>U.value.assets&&_.value&&U.value.assets[_.value.address]?Be(U.value.assets[_.value.address].balance,_.value.decimals):"0"),pe=o=>{o==="fromCoin"?(P.value=!0,G.value==="Aptos"?v.value=Number(I.value)>0?k.value.symbol=="APT"?new a(Number(I.value)).sub(new a(.1)).lt(new a(0))?"0":new a(Number(I.value)).sub(new a(.1)).toString():String(I.value):"":v.value=Number(I.value)>0?k.value.symbol=="SUI"?new a(Number(I.value)).sub(new a(.05)).lt(new a(0))?"0":new a(Number(I.value)).sub(new a(.05)).toString():String(I.value):""):(P.value=!1,G.value==="Aptos"?f.value=Number(q.value)>0?_.value.symbol=="APT"?new a(Number(q.value)).sub(new a(.1)).lt(new a(0))?"0":new a(Number(q.value)).sub(new a(.1)).toString():String(q.value):"":f.value=Number(q.value)>0?_.value.symbol=="SUI"?new a(Number(q.value)).sub(new a(.05)).lt(new a(0))?"0":new a(Number(q.value)).sub(new a(.05)).toString():String(q.value):"")},Y=o=>{o==="fromCoin"?(P.value=!0,v.value=Number(I.value)>0?Fe(new a(Number(I.value)).div(2).toString(),k.value.decimals).toString():""):(P.value=!1,f.value=Number(q.value)>0?Fe(new a(Number(q.value)).div(2).toString(),_.value.decimals).toString():"")};x(()=>[ue.value.tokens,i.query],async([o])=>{if(o&&o.length>0){const r=o;if(i&&i.query&&i.query.fromCoin&&(console.log("0410###deposite###watch###route.query.tokena####",i.query.fromCoin),i.query.fromCoin)){const h=await z.value.getTokenBySymbol(r,i.query.fromCoin);k.value=h,J.value=h}if(i&&i.query&&i.query.toCoin&&i.query.toCoin){const h=await z.value.getTokenBySymbol(r,i.query.toCoin);_.value=h,Q.value=h}}},{immediate:!0});const ce=g("--"),he=S(()=>N.value.slippage),be=g(),ee=async()=>{var ne,A;if(!m.value&&!u.value)return!1;if(!v.value&&!f.value&&!m.value&&!u.value)return;const o=ie.value;if(Ue(o))return;const{TickUtil:r,TickMath:h,getNearestTickByTick:Z}=z.value,H=o==null?void 0:o.token_a.decimals,X=o==null?void 0:o.token_b.decimals;let R,D,b,y,K,W,L=o.current_tick_index,M;if(o.token_a.address.toLowerCase()===k.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===_.value.address.toLowerCase()?M=!0:M=!1,m.value==="0"&&u.value==="∞")b=r.getMinIndex(Number(o.tickSpacing)),y=r.getMaxIndex(Number(o.tickSpacing));else{console.log(M,"===>directs1866"),M?(R=Number(m.value),D=Number(u.value)):(R=new a(1).div(u.value).toString(),D=new a(1).div(m.value).toString()),console.log("0518###pre###directs###",M),console.log("0518###pre###minPrice###",m.value),console.log("0518###pre###maxPrice###",u.value),console.log("0518###pre###poolInfos###",o),console.log("0518###pre###decimalsA###",H),console.log("0518###pre###decimalsB###",X),console.log("0518###pre###currentTickIndex###",L),console.log(R,D,"min max1875"),console.log(m.value,u.value,"===>maxPrice.value");try{K=R==0?-443636:h.priceToTickIndex(new a(R),H,X)}catch{K=-443636}try{W=h.priceToTickIndex(new a(D),H,X)}catch{W=443636}b=Z(K,Number(o.tickSpacing)),y=Z(W,Number(o.tickSpacing))}if(u.value!=="∞"&&b>=y){c.value=!0,v.value="",w.value=!0,f.value="";return}if(console.log(y,L,b,"1922"),u.value==="∞"||L>=b&&L<=y){c.value=!1,w.value=!1;let B;if(v.value||f.value){if(P.value){const ve=new a(v.value).mul(Math.pow(10,k.value.decimals)).toString();B=new _e(ve)}else{const ve=new a(f.value).mul(Math.pow(10,_.value.decimals)).toString();B=new _e(ve)}console.log(M,"======>directs");const{liquidityAmount:F,tokenMaxA:p,tokenMaxB:te,tokenMaxAOrigin:ye,tokenMaxBOrigin:de}=z.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:o.token_a,tokenB:o.token_b,lowerTick:b,upperTick:y,coinAmount:B,iscoinA:M?P.value:!P.value,roundUp:!0,slippage:Number(he.value)/100,curSqrtPrice:new _e(o.current_sqrt_price)});be.value={liquidityAmount:F,tokenMaxA:p,tokenMaxB:te,tokenMaxAOrigin:ye,tokenMaxBOrigin:de},M?P.value?f.value=Number(te)>0?te:"":v.value=Number(p)>0?p:"":P.value?f.value=p:v.value=te}}else L>y?(ne=i==null?void 0:i.query)!=null&&ne.action&&(c.value=!0,w.value=!0):L<b?(A=i==null?void 0:i.query)!=null&&A.action&&(c.value=!0,w.value=!0):(c.value=!0,v.value="",w.value=!0,f.value="")};x(()=>me,o=>{o&&ee()}),x(v,(o,r)=>{console.log(v,"===>fromCoinAmount"),o==""&&P.value&&(f.value=""),o&&P.value&&!O.value&&ee()}),x(f,(o,r)=>{console.log(o,"===>>>>newValsda"),o==""&&!P.value&&(v.value=""),o&&!P.value&&!O.value&&ee()}),x(()=>fe.value,o=>{ee()});const l=o=>{console.log(o,"e"),O.value=!0,ce.value=o,o>0?oe():(v.value="",f.value="")};x([m,u],([o,r])=>{console.log(o,r,"==>minPrice,maxPrice"),Number(o)!==0&&Number(r)!==0&&!O.value?ee():Number(o)!==0&&Number(r)!==0&&O.value&&oe()},{immediate:!0});const $=S(()=>ue.value.RATES),d=g(),oe=async()=>{if(!m.value&&!u.value)return!1;if(!v.value&&!f.value&&!m.value&&!u.value)return;const o=ie.value;if(Ue(o))return;const{TickUtil:r,TickMath:h,getNearestTickByTick:Z}=z.value,H=o==null?void 0:o.token_a.decimals,X=o==null?void 0:o.token_b.decimals;let R,D,b,y,K,W,L;if(o.token_a.address.toLowerCase()===k.value.address.toLowerCase()&&o.token_b.address.toLowerCase()===_.value.address.toLowerCase()?L=!0:L=!1,m.value==="0"&&u.value==="∞")b=r.getMinIndex(Number(o.tickSpacing)),y=r.getMaxIndex(Number(o.tickSpacing));else{L?(R=Number(m.value),D=Number(u.value)):(R=new a(1).div(u.value).toString(),D=new a(1).div(m.value).toString());try{K=R==0?-443636:h.priceToTickIndex(new a(R),H,X)}catch{K=-443636}try{W=h.priceToTickIndex(new a(D),H,X)}catch{W=443636}b=Z(K,Number(o.tickSpacing)),y=Z(W,Number(o.tickSpacing))}const M=$.value[o==null?void 0:o.token_a.address].price,ne=$.value[o==null?void 0:o.token_b.address].price;console.log(o,"poolInfos===>"),console.log(b,y,"####tick_lower tick_upper 889");try{const{amountA:A,amountB:B,tokenAmountsInfo:F}=await z.value.estCoinAmountsFromTotalAmount({lowerTick:b,upperTick:y,decimalsA:H,decimalsB:X,curSqrtPrice:new _e(o.current_sqrt_price),totalAmount:ce.value,tokenPriceA:M,tokenPriceB:ne});console.log(A,B,"###estCoinAmountsFromTotalAmount 844"),d.value=F,o.needReverse?Ce.value?(v.value=A,f.value=B):(v.value=B,f.value=A):(v.value=A,f.value=B)}catch(A){console.log(A,"e===>")}};return{fromCoinAmount:v,toCoinAmount:f,fromCoin:k,toCoin:_,maxBtnSelect:pe,halfBtnSelect:Y,showFromCoinLock:c,showToCoinLock:w,fromCoinBlance:I,toCoinBlance:q,fixedFromCoin:P,isInputTotalAmount:O,toggle:ro,theme:we,liquidityTotalAmount:ce,createPoolInfo:ie,minPrice:m,maxPrice:u,currentPriceReverse:Pe,currentPrice:Ne,onInput:l}}});const ho=e=>(je("data-v-16772142"),e=e(),Ee(),e),bo={class:"create-pool-right"},yo={class:"card-container"},So={class:"card-item"},To={class:"card-item"},Ao={class:"total-amount"},Po=ho(()=>n("span",null,"Total Amount",-1));function No(e,t,se,re,N,G){const U=Ve("NewLiquidityTile"),c=no,w=so,O=De,i=ze,z=Ge;return C(),T("div",bo,[j(U),n("div",yo,[n("div",So,[j(c,{modelValue:e.fromCoinAmount,"onUpdate:modelValue":t[0]||(t[0]=s=>e.fromCoinAmount=s),"input-value":e.fromCoinAmount,"coin-symbol":e.fromCoin?e.fromCoin.symbol:null,"coin-name":e.fromCoin?e.fromCoin.name:null,balance:e.fromCoinBlance,"coin-icon":e.fromCoin?e.fromCoin.logoURI:"",address:e.fromCoin?e.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:t[1]||(t[1]=s=>e.maxBtnSelect("fromCoin")),onOnHalf:t[2]||(t[2]=s=>e.halfBtnSelect("fromCoin")),onOnInput:t[3]||(t[3]=s=>{e.fromCoinAmount=s,e.fixedFromCoin=!0,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showFromCoinLock?(C(),Me(w,{key:0,"from-coin":e.fromCoin,"to-coin":e.toCoin},null,8,["from-coin","to-coin"])):V("",!0)]),n("div",To,[j(c,{modelValue:e.toCoinAmount,"onUpdate:modelValue":t[4]||(t[4]=s=>e.toCoinAmount=s),"input-value":e.toCoinAmount,"coin-symbol":e.toCoin?e.toCoin.symbol:null,"coin-name":e.toCoin?e.toCoin.name:null,balance:e.toCoinBlance,"swap-direct":"To","coin-icon":e.toCoin?e.toCoin.logoURI:"",address:e.toCoin?e.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:t[5]||(t[5]=s=>e.maxBtnSelect("toCoin")),onOnHalf:t[6]||(t[6]=s=>e.halfBtnSelect("toCoin")),onOnInput:t[7]||(t[7]=s=>{e.toCoinAmount=s,e.fixedFromCoin=!1,e.isInputTotalAmount=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),e.showToCoinLock?(C(),Me(w,{key:0,"from-coin":e.fromCoin,"to-coin":e.toCoin},null,8,["from-coin","to-coin"])):V("",!0)]),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme=="default"?(C(),T("img",{key:0,class:"add",src:lo,alt:"",onClick:t[8]||(t[8]=(...s)=>e.toggle&&e.toggle(...s))})):V("",!0),e.fromCoin&&e.toCoin&&!e.showToCoinLock&&!e.showFromCoinLock&&e.theme!=="default"?(C(),T("img",{key:1,class:"add",src:io,alt:"",onClick:t[9]||(t[9]=(...s)=>e.toggle&&e.toggle(...s))})):V("",!0)]),n("div",Ao,[Po,n("span",null,[le("$ "),j(O,{value:e.liquidityTotalAmount,placeholder:e.isInputTotalAmount?"":e.liquidityTotalAmount,onInput:t[10]||(t[10]=s=>e.onInput(s.target.value))},null,8,["value","placeholder"])])]),j(i,{"from-coin":e.fromCoin,"to-coin":e.toCoin,"from-coin-amount":e.fromCoinAmount,"to-coin-amount":e.toCoinAmount,"fixed-from-coin":e.fixedFromCoin,"is-input-total-amount":e.isInputTotalAmount,"create-pool-info":e.createPoolInfo,"min-price":e.minPrice,"max-price":e.maxPrice,"current-price-tab":"custom","current-price":e.currentPrice,"current-price-reverse":e.currentPriceReverse},null,8,["from-coin","to-coin","from-coin-amount","to-coin-amount","fixed-from-coin","is-input-total-amount","create-pool-info","min-price","max-price","current-price","current-price-reverse"]),j(z,{class:"add-liquidity-btn"},{default:We(()=>[le("Preview")]),_:1})])}const Io=$e(wo,[["render",No],["__scopeId","data-v-16772142"]]),qo=qe({components:{CreatePoolRight:Io},setup(){const e=g(!0),t=g(!0),se=g(!0),re=g(!1),N=g("1"),G=g(!0),U=g(""),c=Oe(),w=Je(),O=Ie(),i=S(()=>O),z=Xe(),s=S(()=>z),ue=g("");x(()=>[w,s.value.tokensObj],([l,$])=>{var d;((d=w==null?void 0:w.currentRoute)==null?void 0:d.value.name)=="liquidity-creat-pool"&&$&&(k.value=s.value.tokensObj[c.query.fromCoin],_.value=s.value.tokensObj[c.query.toCoin],ue.value=c.query.fee!=="null"&&c.query.fee?c.query.fee:"")},{immediate:!0,deep:!0}),x(()=>[k.value,_.value,me.value,ue.value,v.value,f.value],([l,$,d,oe,o])=>{!l||!$?(N.value="1",e.value=!0,t.value=!0):oe?d?!m.value||!u.value?(N.value="4",e.value=!1,t.value=!1):(N.value="5",e.value=!1,t.value=!1):(N.value="3",e.value=!1,t.value=!0):(N.value="2",e.value=!0,t.value=!0)},{immediate:!0});const we=l=>{me.value=l},I=l=>{var $;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||(($=s.value.tokensObj[l==null?void 0:l.address])==null?void 0:$.logo_url)||(i.value.theme==="default"?Ae("/image/coins/unknown.png"):Ae("/image/coins/sui-unknown.png"))},q=l=>{switch(l){case"1":return{top:"10%"};case"2":return{top:"29%"};case"3":return{top:"48%"};case"4":return{top:"67%"};case"5":return{top:"87%"}}},pe=S(()=>i.value.chainName),Y=S(()=>pe.value?He(pe.value):{}),ce=l=>{var Z,H,X,R,D,b,y,K,W,L,M,ne,A,B;l?(me.value=l,Ne.value=l,Pe.value=new a(1).div(new a(l)).toString()):(me.value="",Ne.value="",Pe.value="");let $,d;const oe=s.value.poolConfigList;for(let F=0;F<oe.length;F++){const p=oe[F];if(p.token_a.address.toUpperCase()===((X=(H=(Z=J)==null?void 0:Z.value)==null?void 0:H.address)==null?void 0:X.toUpperCase())&&p.token_b.address.toUpperCase()===((b=(D=(R=Q)==null?void 0:R.value)==null?void 0:D.address)==null?void 0:b.toUpperCase())){$=p.needReverse,d=p;break}else if(p.token_b.address.toUpperCase()===((W=(K=(y=J)==null?void 0:y.value)==null?void 0:K.address)==null?void 0:W.toUpperCase())&&p.token_a.address.toUpperCase()===((ne=(M=(L=Q)==null?void 0:L.value)==null?void 0:M.address)==null?void 0:ne.toUpperCase())){$=p.needReverse,d=p;break}}let o=!1;Y.value.getIsSortedSymbols((A=J.value)==null?void 0:A.address,(B=Q.value)==null?void 0:B.address)&&(o=!0);let r;o&&!Ce.value?r=!0:o&&Ce.value||!o&&Ce.value?r=!1:r=!0;const h=pe.value=="Aptos"?co:vo;if(k.value&&_.value&&l){const F=d?d==null?void 0:d.token_a.decimals:o?Q.value.decimals:J.value.decimals,p=d?d==null?void 0:d.token_b.decimals:o?J.value.decimals:Q.value.decimals,te=l&&Y.value.TickMath.priceToSqrtPriceX64(r?new a(1/l):new a(l),F,p);console.log(te,"===>current_sqrt_price");const ye=l&&Y.value.TickMath.priceToSqrtPriceX64(new a(1).div(l),k.value.decimals,_.value.decimals);console.log(!r,"===>!newDirect"),console.log(F,p,"decimalsA,decimalsB===>");const de=Y.value.TickMath.priceToTickIndex(r?new a(1).div(l):new a(l),F,p);console.log(de,"==>currentTickIndex");const ve=de-h[c.query.fee]*5,Re=de+h[c.query.fee]*5,ge=Y.value.TickMath.tickIndexToPrice(ve,F,p).toString(),ke=Y.value.TickMath.tickIndexToPrice(Re,F,p).toString();fe.value?(m.value="0",u.value="∞"):r?(m.value=String(1/ke),u.value=String(1/ge),Se.value=String(1/ke),Te.value=String(1/ge)):(m.value=ge,u.value=ke,Se.value=ge,Te.value=ke),console.log("0518###c####createPoolFromCoin.value####",J.value),console.log("0518###c####createPoolToCoin.value####",Q.value),console.log("0518###c####createPoolNeedReverse####",o);const Le={token_a:d?d.token_a:o?Q.value:J.value,token_b:d?d.token_b:o?J.value:Q.value,isCreate:!0,tickSpacing:h[c.query.fee],currentPrice:l,current_sqrt_price:te,tick_lower:ve,tick_upper:Re,current_tick_index:de,currentPriceReverse:ao(String(1/l),6),reverse_current_sqrt_price:ye,needReverse:$,fee:c.query.fee};ie.value=Le,console.log("0518###c####poolInfos####",Le)}else ie.value=null,m.value="",u.value=""},he=()=>{fe.value=!fe.value,ce(ie.value.currentPrice)},be=l=>{console.log(l,"####0731 priceRangeChangeMin"),m.value=l},ee=l=>{u.value=l};return Qe(()=>{uo()}),{currentStep:N,sliderStyle:q,coinAmount:re,pricerange:U,fromCoin:k,toCoin:_,fee:ue,direct:G,getCoinIcon:I,isSelectFullRange:se,onInput:we,store:i,initPrice:me,inputPriceLock:e,specifyPriceLock:t,changeCurrentPrice:ce,minPrice:m,maxPrice:u,defaultMinPrice:Se,defaultMaxPrice:Te,clickFullRange:he,createPoolInfo:ie,isFullRange:fe,priceRangeChangeMin:be,priceRangeChangeMax:ee,fromCoinAmount:v}}});const E=e=>(je("data-v-c712ef49"),e=e(),Ee(),e),$o={class:"creat-pool-container"},Ro={class:"creat-pool-left"},Lo={class:"progress"},Mo=E(()=>n("div",{class:"slider-ratio-content"},null,-1)),Bo=[Mo],Fo={class:"progress-text"},Uo={key:0},Oo={key:0},Vo={key:0},Do={key:0},jo={key:0},Eo={class:"creat-pool-center"},zo={class:"title"},Ho=E(()=>n("div",{class:"left"},"Set Initial Price",-1)),Xo={class:"right"},Ko={class:"token-box"},Wo=["src"],Go=E(()=>n("span",null,"USDC",-1)),Jo=E(()=>n("div",null,[n("svg",{class:"icon icon-up","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Qo=E(()=>n("div",null,[n("svg",{class:"icon icon-down","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Yo=[Jo,Qo],Zo={class:"content top-content"},xo=E(()=>n("div",{class:"top"},[n("span",null,"💡"),n("span",null,"Please set an initial price for this new pool to start.")],-1)),en={class:"bottom"},on={class:"input-div"},nn={key:0,class:"lock"},tn={class:"title"},an=E(()=>n("div",{class:"left"},"Set Initial Price",-1)),ln={class:"right"},sn={key:0,src:mo},rn=E(()=>n("span",null,"Full Range",-1)),un={class:"content bottom-content"},cn=E(()=>n("span",null,"💡",-1)),dn=E(()=>n("span",null,"Please specify a price range that you want to provide your liquidity within.",-1)),vn=[cn,dn],mn={class:"bottom"},pn={class:"set-price-box"},fn={key:0,class:"lock"},gn=E(()=>n("div",{class:"create-pool-warning"}," To create a new pool, the initial price you set must be within your price range. ",-1)),kn={class:"creat-pool-right"};function _n(e,t,se,re,N,G){const U=De,c=Co,w=to,O=Ve("CreatePoolRight");return C(),T("div",$o,[n("div",Ro,[n("div",Lo,[n("div",{class:"slider-ratio",style:Ye(e.sliderStyle(e.currentStep))},Bo,4)]),n("div",Fo,[n("div",{class:ae(["row",!e.fromCoin||!e.toCoin?"color-text":""])},[e.fromCoin&&e.toCoin?(C(),T("span",Uo,"✓")):V("",!0),le(" Select Pool ")],2),n("div",{class:ae(["row",e.fee?"":"color-text"])},[e.fee?(C(),T("span",Oo,"✓")):V("",!0),le(" Select Fee Tier ")],2),n("div",{class:ae(["row",e.initPrice?"":"color-text"])},[e.initPrice?(C(),T("span",Vo,"✓")):V("",!0),le(" Set Initial Price ")],2),n("div",{class:ae(["row",!e.minPrice||!e.maxPrice?"color-text":""])},[e.minPrice&&e.maxPrice?(C(),T("span",Do,"✓")):V("",!0),le(" Select Price Range ")],2),n("div",{class:ae(["row",e.fromCoinAmount?"":"color-text"])},[e.fromCoinAmount?(C(),T("span",jo,"✓")):V("",!0),le(" Confirm Liquidity ")],2)])]),n("div",Eo,[n("div",zo,[Ho,n("div",Xo,[n("div",Ko,[n("img",{src:("importIcon"in e?e.importIcon:Ze(Ae))("/image/coins/sui-unknown.png")},null,8,Wo),Go,n("div",{class:"icon-change",onClick:t[0]||(t[0]=i=>e.direct=!e.direct)},Yo)])])]),n("div",Zo,[xo,n("div",en,[n("div",on,[j(U,{type:"text",placeholder:"0.0",value:e.initPrice,onInput:t[1]||(t[1]=i=>e.changeCurrentPrice(i.target.value))},null,8,["value"])]),e.inputPriceLock?(C(),T("div",nn,[j(c)])):V("",!0)])]),n("div",tn,[an,n("div",ln,[n("div",{class:ae(["radio",e.isFullRange?"active-radio":""]),onClick:t[2]||(t[2]=(...i)=>e.clickFullRange&&e.clickFullRange(...i))},[e.isFullRange?(C(),T("img",sn)):V("",!0)],2),rn])]),n("div",un,[n("div",{class:ae(["top",e.specifyPriceLock?"":"no-border"])},vn,2),n("div",mn,[n("div",pn,[j(w,{min:e.minPrice,max:e.maxPrice,"from-coin":e.fromCoin,"to-coin":e.toCoin,direct:e.direct,"default-min-price":e.defaultMinPrice,"default-max-price":e.defaultMaxPrice,"pool-info":e.createPoolInfo,loading:!1,"current-price-tab":"custom",onOnChangeMinPrice:e.priceRangeChangeMin,onOnChangeMaxPrice:e.priceRangeChangeMax},null,8,["min","max","from-coin","to-coin","direct","default-min-price","default-max-price","pool-info","onOnChangeMinPrice","onOnChangeMaxPrice"])]),e.specifyPriceLock?(C(),T("div",fn,[j(c)])):V("",!0),gn])])]),n("div",kn,[j(O,{"create-pool-info":e.createPoolInfo},null,8,["create-pool-info"])])])}const jn=$e(qo,[["render",_n],["__scopeId","data-v-c712ef49"]]);export{jn as default};
