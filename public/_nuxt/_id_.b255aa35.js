import{_ as ae}from"./new-position-title.e289a84f.js";import{_ as ue}from"./token-warning.dbbd8992.js";import{_ as re}from"./status-block.d0f6e7e1.js";import{_ as Go}from"./auto-pool-apy-tips.99697542.js";import{u as jo,g as de,a as D,d as Do,c as ao,s as to,b as Z,p as Vo,e as Zo,T as bo,f as ce,h as me,V as Ho,C as Yo}from"./pool.a1941d40.js";import{u as Ro,a as No}from"./sha256.21b2e963.js";import{i as ko}from"./import-icon.de3e6c66.js";import{u as Lo,a as Jo}from"./autoPool.fc5df0fa.js";import{a as Co,l as d,r as q,m as So,q as x,e as wo,s as Uo,o as m,f as T,h as e,t as vo,i as Q,v as f,j as To,x as po,u as E,p as Bo,k as Oo,y as zo,z as Ko,A as Xo,c as z,w as $o,B as Qo,C as ve,L as pe,I as fe,S as xo,D as _e,b as oe,F as be,E as ge,G as ye}from"./entry.58564c79.js";import{_ as he}from"./assets-card.e3418ff7.js";import{_ as Ie}from"./coin-lock.8b1b4da2.js";import{_ as ee,a as ne}from"./auto-pool-remove-modal.ecc1fe2c.js";import{D as p}from"./decimal.0bdeb344.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./back.7de7f631.js";import"./swap-setting.36992090.js";/* empty css              */import"./icon-error_2x.98c7676c.js";/* empty css              */import"./img-lock_2x.a28135f4.js";import"./img-lock_2x.6929bf4d.js";const $e=Co({components:{AutoPoolApyTips:Go},setup(){const o=Ro(),n=d(()=>o),B=jo(),N=d(()=>B),O=d(()=>n.value.theme),$=l=>{var t;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((t=N.value.tokensObj[l==null?void 0:l.address])==null?void 0:t.logo_url)||(O.value==="default"?ko("/image/coins/unknown.png"):ko("/image/coins/sui-unknown.png"))},h=q(!0),_=Lo(),v=d(()=>_),C=So(),s=q();x(()=>[v.value.positionInfoObj,C.params.id],([l,t])=>{l&&!ao(l)&&t&&(s.value=l[t],console.log(s.value,"##positionInfo.value"))},{immediate:!0,deep:!0});const i=d(()=>{var l;return(l=s.value)==null?void 0:l.needReverse}),b=d(()=>{var l,t;return v.value.apyObj&&((t=v.value.apyObj[(l=s.value)==null?void 0:l.id])==null?void 0:t.tvl)||"--"}),c=d(()=>{var l,t;return v.value.apyObj&&((t=v.value.apyObj[(l=s.value)==null?void 0:l.id])==null?void 0:t.apr)||"--"});return{positionInfo:s,tvl:b,store:n,indexStore:o,needReverse:i,getCoinIcon:$,getExplorerUrl:de,addCommom:D,decimalUi:Do,direct:h,apy:c}}});const Ao=o=>(Bo("data-v-f35bbd0d"),o=o(),Oo(),o),ke={class:"auto-position-info"},Ce={class:"pool-info"},Se={class:"left"},we={class:"coin-a"},Ae={alt:""},Pe={class:"coin-b"},qe={alt:""},Te={class:"position-name"},Re={key:0,class:"pool-fee"},Ne=Ao(()=>e("span",null,"Fee tier",-1)),Le={class:"right"},Be={class:"price-info"},Oe={class:"current-price"},Me=Ao(()=>e("span",null,"Current Price",-1)),De={class:"coin-rate"},je=Ao(()=>e("div",null,[e("svg",{class:"icon icon-up","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_up1"})])],-1)),Ue=Ao(()=>e("div",null,[e("svg",{class:"icon icon-down","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-exchange_down1"})])],-1)),Fe=[je,Ue],Ee={key:0},We={key:1},Xe={class:"apy-and-tvl"},ze={class:"apy"},Ve=Ao(()=>e("div",{class:"apy-title"},"APY",-1)),He={class:"apy-text"},Ye={class:"tvl"},Ge=Ao(()=>e("div",{class:"tvl-title"},"TVL",-1)),Ze={class:"tvl-text"};function Je(o,n,B,N,O,$){var s,i,b,c,l,t,a,I,A,g,Y,L,S,H,W,X,R,no,oo,J,G,K,io,so,Po,uo,lo,ro,yo,fo,co,r,M;const h=ue,_=re,v=Go,C=Uo("image");return m(),T("div",ke,[e("div",Ce,[e("div",Se,[e("div",we,[vo(e("img",Ae,null,512),[[C,o.needReverse?o.getCoinIcon((i=o.positionInfo)==null?void 0:i.token_b):o.getCoinIcon((s=o.positionInfo)==null?void 0:s.token_a)]]),Q(h,{address:o.needReverse?(t=(l=o.positionInfo)==null?void 0:l.token_b)==null?void 0:t.address:(c=(b=o.positionInfo)==null?void 0:b.token_a)==null?void 0:c.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"4px"}},null,8,["address"])]),e("div",Pe,[vo(e("img",qe,null,512),[[C,o.needReverse?o.getCoinIcon((I=o.positionInfo)==null?void 0:I.token_a):o.getCoinIcon((a=o.positionInfo)==null?void 0:a.token_b)]]),Q(h,{address:o.needReverse?(L=(Y=o.positionInfo)==null?void 0:Y.token_a)==null?void 0:L.address:(g=(A=o.positionInfo)==null?void 0:A.token_b)==null?void 0:g.address,"style-params":{width:"12px",height:"12px",left:"18px",bottom:"4px"}},null,8,["address"])]),e("div",Te,f(o.needReverse?(H=(S=o.positionInfo)==null?void 0:S.token_b)==null?void 0:H.symbol:(X=(W=o.positionInfo)==null?void 0:W.token_a)==null?void 0:X.symbol)+" - "+f(o.needReverse?(no=(R=o.positionInfo)==null?void 0:R.token_a)==null?void 0:no.symbol:(J=(oo=o.positionInfo)==null?void 0:oo.token_b)==null?void 0:J.symbol),1),(G=o.positionInfo)!=null&&G.fee?(m(),T("div",Re,[Ne,To(" "+f(((K=o.positionInfo)==null?void 0:K.fee)*100)+"% ",1)])):po("",!0)]),e("div",Le,[Q(_,{"current-status":(io=o.positionInfo)==null?void 0:io.currentStatus},null,8,["current-status"])])]),e("div",Be,[e("div",Oe,[e("div",null,[Me,e("div",De,[e("div",{onClick:n[0]||(n[0]=mo=>o.direct=!o.direct)},Fe)])]),(o.needReverse?!o.direct:o.direct)?(m(),T("div",Ee,[To(f(("addCommom"in o?o.addCommom:E(D))(("decimalUi"in o?o.decimalUi:E(Do))((so=o.positionInfo)==null?void 0:so.price,6)))+"   ",1),e("span",null,f((uo=(Po=o.positionInfo)==null?void 0:Po.token_b)==null?void 0:uo.symbol)+" per "+f((ro=(lo=o.positionInfo)==null?void 0:lo.token_a)==null?void 0:ro.symbol),1)])):(m(),T("div",We,[To(f(("addCommom"in o?o.addCommom:E(D))(("decimalUi"in o?o.decimalUi:E(Do))(1/((yo=o.positionInfo)==null?void 0:yo.price),6)))+"   ",1),e("span",null,f((co=(fo=o.positionInfo)==null?void 0:fo.token_a)==null?void 0:co.symbol)+" per "+f((M=(r=o.positionInfo)==null?void 0:r.token_b)==null?void 0:M.symbol),1)]))]),e("div",Xe,[e("div",ze,[Ve,e("div",He,[To(f(o.apy)+" ",1),Q(v)])]),e("div",Ye,[Ge,e("div",Ze,"$"+f(("addCommom"in o?o.addCommom:E(D))(o.tvl,2)),1)])])])])}const te=wo($e,[["render",Je],["__scopeId","data-v-f35bbd0d"]]),Ke=Co({setup(){const o=Lo(),n=d(()=>o),B=So(),N=d(()=>(console.log(n.value.positionInfoObj[B.params.id],"autoPool.value.positionInfoObj[route.params.id]###"),n.value.positionInfoObj[B.params.id])),O=d(()=>{var v;return(v=N.value)==null?void 0:v.needReverse}),$=No(),h=d(()=>$);return{positionInfo:N,needReverse:O,addCommom:D,wallet:h,getCoinIcon:v=>(v==null?void 0:v.logoURI)||(v==null?void 0:v.logo_url)||ko("/image/coins/sui-unknown.png")}}});const go=o=>(Bo("data-v-ddd2440b"),o=o(),Oo(),o),Qe={class:"auto-position-liquidity"},xe={class:"my-liquidity"},on={class:"left"},en=go(()=>e("div",null,"My Liquidity",-1)),nn={key:0},tn={key:1},sn={class:"right"},ln=go(()=>e("div",null,"My share",-1)),an={key:0},un={key:1},rn={class:"my-liquidity-info"},dn={class:"lp-info"},cn={class:"lp-bg"},mn={alt:""},vn={key:0,class:"lp-num"},pn={key:1,class:"lp-num"},fn=go(()=>e("div",{class:"assets-pooled-title"}," Pooled Assets ",-1)),_n={class:"assets-pooled"},bn={alt:""},gn={key:0},yn={key:1},hn=go(()=>e("p",null,"--",-1)),In=go(()=>e("p",null,"--",-1)),$n=[hn,In],kn={alt:""},Cn={key:0},Sn={key:1},wn=go(()=>e("p",null,"--",-1)),An=go(()=>e("p",null,"--",-1)),Pn=[wn,An];function qn(o,n,B,N,O,$){var _,v,C,s,i,b,c,l,t,a,I,A,g,Y,L,S,H,W,X,R,no,oo,J,G,K,io,so;const h=Uo("image");return m(),T("div",Qe,[e("div",xe,[e("div",on,[en,(_=o.wallet)!=null&&_.connected?(m(),T("div",nn,"$"+f(("addCommom"in o?o.addCommom:E(D))((v=o.positionInfo)==null?void 0:v.myLiquidityUSD)),1)):(m(),T("div",tn,"--"))]),e("div",sn,[ln,(C=o.wallet)!=null&&C.connected?(m(),T("div",an,f((s=o.positionInfo)==null?void 0:s.myShare)+"%",1)):(m(),T("div",un,"--%"))])]),e("div",rn,[e("div",dn,[e("div",cn,[vo(e("img",mn,null,512),[[h,((b=(i=o.positionInfo)==null?void 0:i.lpInfo)==null?void 0:b.logo_url)||o.getCoinIcon((c=o.positionInfo)==null?void 0:c.lpInfo)]])]),(l=o.wallet)!=null&&l.connected?(m(),T("div",vn,f(("addCommom"in o?o.addCommom:E(D))((t=o.positionInfo)==null?void 0:t.myLiquidity))+" LP",1)):(m(),T("div",pn,"-- LP"))]),fn,e("div",_n,[e("div",null,[vo(e("img",bn,null,512),[[h,o.needReverse?o.getCoinIcon((a=o.positionInfo)==null?void 0:a.token_b):o.getCoinIcon((I=o.positionInfo)==null?void 0:I.token_a)]]),(A=o.wallet)!=null&&A.connected?(m(),T("div",gn,[e("p",null,f((g=o.positionInfo)==null?void 0:g.myAmountAUSD),1),e("p",null,f(("addCommom"in o?o.addCommom:E(D))((Y=o.positionInfo)==null?void 0:Y.amountA))+" "+f(o.needReverse?(S=(L=o.positionInfo)==null?void 0:L.token_b)==null?void 0:S.symbol:(W=(H=o.positionInfo)==null?void 0:H.token_a)==null?void 0:W.symbol),1)])):(m(),T("div",yn,$n))]),e("div",null,[vo(e("img",kn,null,512),[[h,o.needReverse?o.getCoinIcon((X=o.positionInfo)==null?void 0:X.token_a):o.getCoinIcon((R=o.positionInfo)==null?void 0:R.token_b)]]),(no=o.wallet)!=null&&no.connected?(m(),T("div",Cn,[e("p",null,f((oo=o.positionInfo)==null?void 0:oo.myAmountBUSD),1),e("p",null,f(("addCommom"in o?o.addCommom:E(D))((J=o.positionInfo)==null?void 0:J.amountB))+" "+f(o.needReverse?(K=(G=o.positionInfo)==null?void 0:G.token_a)==null?void 0:K.symbol:(so=(io=o.positionInfo)==null?void 0:io.token_b)==null?void 0:so.symbol),1)])):(m(),T("div",Sn,Pn))])])])])}const ie=wo(Ke,[["render",qn],["__scopeId","data-v-ddd2440b"]]),Tn=Co({components:{AutoPoolAddModal:ee},setup(){const o=No(),n=q(!1),B=Ro(),N=d(()=>B),O=d(()=>N.value.chainName),$=d(()=>o),h=Lo(),_=d(()=>h),v=jo(),C=d(()=>v),s=q(),i=So();x(()=>[_.value.positionInfoObj,i.params.id],([u,y])=>{u&&!ao(u)&&y&&(s.value=u[y],console.log(s.value,"##positionInfo.value"))},{immediate:!0,deep:!0});const b=d(()=>{var u,y;return console.log((u=s.value)==null?void 0:u.needReverse,"##positionInfo.value?.needReverse"),(y=s.value)==null?void 0:y.needReverse}),c=q(),l=q(),t=q(),a=q(),I=q(!0),A=d(()=>$.value.assets&&c.value&&$.value.assets[c.value.address]?Vo($.value.assets[c.value.address].balance,c.value.decimals):0),g=d(()=>$.value.assets&&l.value&&$.value.assets[l.value.address]?Vo($.value.assets[l.value.address].balance,l.value.decimals):0),Y=u=>{u==="fromCoin"?(I.value=!0,t.value=A.value>0?c.value.symbol=="SUI"?new p(Number(A.value)).sub(new p(.05)).lt(new p(0))?"0":new p(Number(A.value)).sub(new p(.05)).toString():String(A.value):""):(I.value=!1,a.value=g.value>0?l.value.symbol=="SUI"?new p(Number(g.value)).sub(new p(.05)).lt(new p(0))?"0":new p(Number(g.value)).sub(new p(.05)).toString():String(g.value):"")},L=u=>{u==="fromCoin"?(I.value=!0,t.value=A.value>0?to(new p(Number(A.value)).div(2).toString(),c.value.decimals).toString():""):(I.value=!1,a.value=g.value>0?to(new p(Number(g.value)).div(2).toString(),l.value.decimals).toString():"")},S=d(()=>O.value?Zo(O.value):{}),H=d(()=>N.value.slippage),W=q("--"),X=q("--"),R=u=>{const y=new p(s.value.autoPoolPositionInfo.liquidity),w=new p(u.toString());if(console.log(y.toString(),w.toString(),"getShareOfPool##"),y.toNumber()>0&&w.toNumber()>0){const k=w.add(y);console.log("totalLiquidity:",w.div(k).mul(100).toString());const U=w.div(k).mul(100).toString();console.log(U,"lp##");const P=ce(U),F=P==-1?2:P+2,eo=to(w.div(k).mul(100).toString(),F);console.log(s.value.decimals,"##positionInfo.value.decimal");const V=new p(1).div(new p(Math.pow(10,s.value.lpInfo.decimals))).toString();console.log(eo,V,"###288"),Number(eo)<Number(V)?W.value=`<${V}`:W.value=eo}else w.toNumber()>0&&y.toNumber()<=0?W.value="100":W.value="--"},no=u=>{const y=new p(u.toString());console.log(u.toString(),"##liquidityAmount.toString()");const w=y.mul(new p(H.value).div(100)),k=new p(Math.pow(10,s.value.lpInfo.decimals));console.log(y.minus(w).div(k).toString(),"##liquidity.minus(minimum).div(decimals).toString()"),X.value=to(y.minus(w).div(k).toString(),s.value.lpInfo.decimals)},oo=q(!1),J=q(!1),G=()=>{if(console.log(s.value,"238##"),!s.value)return;const u=s.value.autoPoolPositionInfo.tick_lower_index,y=s.value.autoPoolPositionInfo.tick_upper_index;console.log(s.value,"###467");const w=bo.sqrtPriceX64ToTickIndex(new Z(s.value.current_sqrt_price));console.log(u,w,y,"###324"),w<u&&(b.value?oo.value=!0:J.value=!0),w>y&&(b.value?J.value=!0:oo.value=!0);let k;if(t.value||a.value){if(I.value){const j=new p(t.value).mul(Math.pow(10,c.value.decimals)).toString();k=new Z(j)}else{const j=new p(a.value).mul(Math.pow(10,l.value.decimals)).toString();k=new Z(j)}const{liquidityAmount:U,tokenMaxA:P,tokenMaxB:F,tokenMaxAOrigin:eo,tokenMaxBOrigin:V}=S.value.estLiquidityAndcoinAmountFromOneAmounts({tokenA:c.value,tokenB:l.value,lowerTick:u,upperTick:y,coinAmount:k,iscoinA:I.value,roundUp:!0,slippage:Number(H.value)/100,curSqrtPrice:new Z(s.value.current_sqrt_price)});console.log(s.value.current_sqrt_price,"##positionInfo.value.current_sqrt_price"),console.log(F.toString(),P.toString(),s.value,"###323"),I.value?a.value=Number(F)>0?F:"":t.value=Number(P)>0?P:"",R(U),no(U)}};x(()=>s.value,u=>{u&&!ao(u)&&(c.value=u==null?void 0:u.token_a,l.value=u==null?void 0:u.token_b,oo.value=!1,J.value=!1,G())},{immediate:!0});const K=d(()=>C.value.RATES),io=d(()=>{var u,y,w,k,U,P,F,eo,V,j;if((y=K.value[(u=c.value)==null?void 0:u.address])!=null&&y.price&&((k=K.value[(w=l.value)==null?void 0:w.address])!=null&&k.price)){console.log((P=K.value[(U=c.value)==null?void 0:U.address])==null?void 0:P.price,"RATES.value[fromCoin.value?.address]?.price");const qo=new p(t.value||0).mul(new p((eo=K.value[(F=c.value)==null?void 0:F.address])==null?void 0:eo.price)),Eo=new p(a.value||0).mul(new p((j=K.value[(V=l.value)==null?void 0:V.address])==null?void 0:j.price));return Do(qo.add(Eo).toString(),2)}else return"--"});x(t,(u,y)=>{u&&G(),u==""&&(W.value="--",a.value="",X.value="--")}),x(a,(u,y)=>{u&&G(),u==""&&(t.value="",W.value="--",X.value="--")});const{t:so,locale:Po}=zo(),uo=d(()=>{const u=Number(t.value)>Number(A.value),y=Number(a.value)>Number(g.value);return!t.value&&!a.value?so("button.enterAmount"):u?so("button.insufficientBalance",{name:c.value.symbol}):y?so("button.insufficientBalance",{name:l.value.symbol}):"Add Liquidity"}),lo=d(()=>{const u=Number(t.value)>Number(A.value),y=Number(a.value)>Number(g.value);return!!(!t.value&&!a.value||u||y||t.value<=0&&a.value<=0)}),ro=q(!0),{setIsShowSuccess:yo,setIsShowRejected:fo,setIsShowWaiting:co,setTransactionDesc:r,setTransactionTxid:M,setPositiomNum:mo}=B,_o=Jo("Sui");return{wallet:$,positionInfo:s,isShowAddModal:n,needReverse:b,fromCoin:c,toCoin:l,fromCoinAmount:t,toCoinAmount:a,fromCoinBlance:A,toCoinBlance:g,fixedFromCoin:I,maxBtnSelect:Y,halfBtnSelect:L,totalAmountUSD:io,addCommom:D,shareOfPool:W,minimumReceivedLP:X,addLiquidityBtnText:uo,addLiquidityBtnDisabled:lo,toAdd:async()=>{var eo,V;n.value=!1,ro.value=!0,M("");const u=`${D(t.value)} ${(eo=c.value)==null?void 0:eo.symbol}`,y=`${D(a.value)} ${(V=l.value)==null?void 0:V.symbol}`;r(`Deposit ${t.value>0?u:""} ${a.value>0&&t.value>0?"and":""} ${a.value>0?y:""}`),co(!0);const w=I.value,k=s.value.autoPoolPositionInfo.tick_lower_index,U=s.value.autoPoolPositionInfo.tick_upper_index;let P;if(I.value){const j=new p(t.value).mul(Math.pow(10,c.value.decimals)).toString();P=new Z(j)}else{const j=new p(a.value).mul(Math.pow(10,l.value.decimals)).toString();P=new Z(j)}const F=s.value.rewarderInfo.map(j=>j.coinAddress);try{const j={lowerTick:k,upperTick:U,coinAmount:P,fix_amount_a:w,slippage:Number(H.value)/100,curSqrtPrice:new Z(s.value.current_sqrt_price),id:s.value.id,clmm_pool:s.value.autoPoolPositionInfo.pool,lp_token_type:s.value.lp_token_type,coinTypeA:s.value.autoPoolPositionInfo.coin_type_a,coinTypeB:s.value.autoPoolPositionInfo.coin_type_b,rewarder_coin_types:F},qo=await _o.deposit(j);console.log(qo,"===>payloadAdd11111");const Eo=await S.value.signAndExecuteTransactionBlock($.value.currentWallet,qo);let Io=S.value.handleTx(Eo);if(console.log("toAdd###tx###",Io),Io&&Io.hash){M(Io.hash),co(!1),yo(!0),console.log(s,"===>positionInfo");const Wo={title:"Supplied",desc:`Deposit ${t.value>0?u:""} ${a.value>0&&t.value>0?"and":""} ${a.value>0?y:""}`,hash:Io.hash,tit:"Liquidity Increased",icon:"icon-icon-Increased",text:`Deposit ${t.value>0?u:""} ${a.value>0&&t.value>0?"and":""} ${a.value>0?y:""}`};O.value!=="Aptos"&&(Wo.res=Io.res),S.value.showTransitionPending(Wo),await S.value.watchTransaction(Wo)&&setTimeout(()=>{h.updatePositionItem(s.value.id),S.value.getAccount($.value.address)},1e3),mo()}else co(!1),fo(!0);t.value="",a.value="",ro.value=!1}catch(j){t.value="",a.value="",console.log("addError###",j),ro.value=!1,co(!1),fo(!0)}},showToCoinLock:J,showFromCoinLock:oo}}});const Mo=o=>(Bo("data-v-77f1776b"),o=o(),Oo(),o),Rn={class:"auto-pool-add"},Nn={class:"auto-pool-add-content"},Ln={class:"liquidity-action-tab"},Bn=Mo(()=>e("div",{class:"increase tab-active"},"Add",-1)),On={class:"card-item"},Mn={class:"card-item"},Dn={class:"add-info"},jn={class:"total-amount"},Un=Mo(()=>e("span",null,"Total Amount",-1)),Fn={class:"total-amount"},En=Mo(()=>e("span",null,"Share of Pool",-1)),Wn={class:"total-amount"},Xn=Mo(()=>e("span",null,"Minimum Received LP",-1)),zn=Mo(()=>e("span",null,"Pool Closed",-1));function Vn(o,n,B,N,O,$){var s,i,b,c,l;const h=he,_=Ie,v=Qo,C=ee;return m(),T("div",Rn,[e("div",Nn,[e("div",Ln,[Bn,e("div",{class:"remove",onClick:n[0]||(n[0]=Ko(t=>o.$emit("changeCurrentTab"),["stop"]))},"Remove")]),e("div",{class:Xo(o.needReverse?"card-container reverse":"card-container")},[e("div",On,[Q(h,{modelValue:o.fromCoinAmount,"onUpdate:modelValue":n[1]||(n[1]=t=>o.fromCoinAmount=t),"input-value":o.fromCoinAmount,"coin-symbol":o.fromCoin?o.fromCoin.symbol:null,"coin-name":o.fromCoin?o.fromCoin.name:null,balance:o.fromCoinBlance,"coin-icon":o.fromCoin?o.fromCoin.logoURI:"",address:o.fromCoin?o.fromCoin.address:"","swap-direct":"From","import-page":"deposit","has-arrow":!1,onOnMax:n[2]||(n[2]=t=>o.maxBtnSelect("fromCoin")),onOnHalf:n[3]||(n[3]=t=>o.halfBtnSelect("fromCoin")),onOnInput:n[4]||(n[4]=t=>{o.fromCoinAmount=t}),onOnFocus:n[5]||(n[5]=()=>{o.fixedFromCoin=!0})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),o.showFromCoinLock?(m(),z(_,{key:0})):po("",!0)]),e("div",Mn,[Q(h,{modelValue:o.toCoinAmount,"onUpdate:modelValue":n[6]||(n[6]=t=>o.toCoinAmount=t),"input-value":o.toCoinAmount,"coin-symbol":o.toCoin?o.toCoin.symbol:null,"coin-name":o.toCoin?o.toCoin.name:null,balance:o.toCoinBlance,"swap-direct":"To","coin-icon":o.toCoin?o.toCoin.logoURI:"",address:o.toCoin?o.toCoin.address:"","import-page":"deposit","has-arrow":!1,onOnMax:n[7]||(n[7]=t=>o.maxBtnSelect("toCoin")),onOnHalf:n[8]||(n[8]=t=>o.halfBtnSelect("toCoin")),onOnInput:n[9]||(n[9]=t=>{o.toCoinAmount=t}),onOnFocus:n[10]||(n[10]=()=>{o.fixedFromCoin=!1})},null,8,["modelValue","input-value","coin-symbol","coin-name","balance","coin-icon","address"]),o.showToCoinLock?(m(),z(_,{key:0})):po("",!0)])],2),e("div",Dn,[e("div",jn,[Un,e("span",null,"$"+f(("addCommom"in o?o.addCommom:E(D))(o.totalAmountUSD)),1)]),e("div",Fn,[En,e("span",null,f(o.shareOfPool)+"%",1)]),e("div",Wn,[Xn,e("span",null,f(("addCommom"in o?o.addCommom:E(D))(o.minimumReceivedLP))+" "+f(o.needReverse?(s=o.toCoin)==null?void 0:s.symbol:(i=o.fromCoin)==null?void 0:i.symbol)+"-"+f(o.needReverse?(b=o.fromCoin)==null?void 0:b.symbol:(c=o.toCoin)==null?void 0:c.symbol),1)])])]),(l=o.positionInfo)!=null&&l.is_pause?(m(),z(v,{key:0,class:"big-btn liquidity-btn",disabled:!0},{default:$o(()=>[zn]),_:1})):o.wallet.connected?(m(),z(v,{key:1,class:"big-btn liquidity-btn",disabled:o.addLiquidityBtnDisabled,onClick:n[11]||(n[11]=t=>o.isShowAddModal=!0)},{default:$o(()=>[e("span",null,f(o.addLiquidityBtnText),1)]),_:1},8,["disabled"])):(m(),z(v,{key:2,class:"big-btn",onClick:n[12]||(n[12]=t=>o.wallet.setIsShowWalletModal(!0))},{default:$o(()=>[e("span",null,f(o.$t("button.connectWallet")),1)]),_:1})),o.isShowAddModal?(m(),z(C,{key:3,"pool-info":o.positionInfo,"from-coin":o.needReverse?o.positionInfo.token_b:o.positionInfo.token_a,"to-coin":o.needReverse?o.positionInfo.token_a:o.positionInfo.token_b,"from-coin-amount":o.needReverse?o.toCoinAmount:o.fromCoinAmount,"to-coin-amount":o.needReverse?o.fromCoinAmount:o.toCoinAmount,"total-amount":o.totalAmountUSD,"share-of-pool":o.shareOfPool,"minimum-received-l-p":o.minimumReceivedLP,onOnClose:n[13]||(n[13]=t=>o.isShowAddModal=!1),onToAdd:o.toAdd},null,8,["pool-info","from-coin","to-coin","from-coin-amount","to-coin-amount","total-amount","share-of-pool","minimum-received-l-p","onToAdd"])):po("",!0)])}const se=wo(Tn,[["render",Vn],["__scopeId","data-v-77f1776b"]]),Hn=Co({props:{inputValue:{type:String,default:""},balance:{type:String,default:""},lpDecimals:{type:String,default:""},fromCoin:{type:Object,default:()=>({})},toCoin:{type:Object,default:()=>({})},inputDisabled:{type:Boolean,default:!1},positionInfo:{default:()=>({})}},setup(o,n){const{t:B,locale:N}=zo(),O=Ro(),$=d(()=>O),h=d(()=>new p(Number(o.balance)).div(2)),_=ve(pe,{style:{fontSize:"12px",color:"#fff",paddingBottom:"3px"},spin:!0});function v(){this.$emit("onSelect")}const C=g=>{const Y=new RegExp(`[^\\d-]*(\\d*(?:\\.\\d{0,${o.lpDecimals&&o.lpDecimals}})?).*$`);g.target.value=g.target.value.replace(Y,"$1")},s=No(),i=d(()=>s),b=jo(),c=d(()=>b),l=d(()=>c.value.tokensWarningObj);x(()=>c.value.RATES,g=>{g&&console.log(g,"price====>")},{immediate:!0});const t=d(()=>c.value.tokensObj),a=d(()=>$.value.theme),I=So(),A=g=>(g==null?void 0:g.logoURI)||(g==null?void 0:g.logo_url)||ko("/image/coins/sui-unknown.png");return console.log(o,"props###158"),{route:I,theme:a,tokensObj:t,pool:c,halfBalance:h,t:B,addCommom:D,store:$,wallet:i,indicator:_,inputChange:C,importIcon:ko,selectCoin:v,formatNumber:me,tokensWarningObj:l,checkNullObj:ao,getCoinIcon:A}}});const Yn=o=>(Bo("data-v-afb7957e"),o=o(),Oo(),o),Gn={class:"card"},Zn={class:"top"},Jn={key:1,class:"input-div"},Kn={key:0},Qn={class:"left"},xn={class:"loading-token"},ot={class:"lp-bg"},et={key:0,alt:""},nt={class:"bottom"},tt=Yn(()=>e("div",null,null,-1)),it={class:"top"},st={class:"right"};function lt(o,n,B,N,O,$){const h=fe,_=xo,v=Uo("image");return m(),T("div",Gn,[e("div",Zn,[o.inputDisabled?(m(),T("div",Jn,[o.inputValue?(m(),T("span",Kn,f(o.inputValue),1)):(m(),z(_,{key:1,indicator:o.indicator},null,8,["indicator"]))])):(m(),z(h,{key:0,value:o.inputValue=="InsufficientLiquidity"?"":o.inputValue,placeholder:"0.0",disabled:o.inputDisabled,onChange:o.inputChange,onInput:n[0]||(n[0]=C=>o.$emit("onInput",C.target.value)),onFocus:n[1]||(n[1]=C=>o.$emit("onFocus"))},null,8,["value","disabled","onChange"])),e("div",Qn,[e("div",xn,[e("div",ot,[o.positionInfo&&!("checkNullObj"in o?o.checkNullObj:E(ao))(o.positionInfo)&&o.positionInfo.lpInfo?vo((m(),T("img",et,null,512)),[[v,o.getCoinIcon(o.positionInfo.lpInfo)]]):po("",!0)]),e("p",null,f(o.fromCoin.symbol)+" - "+f(o.toCoin.symbol),1)])])]),e("div",nt,[tt,e("div",it,[e("div",st,[To(f(o.$t("common.balance"))+" ",1),e("span",{class:"balance",onClick:n[2]||(n[2]=C=>o.$emit("onMax"))},f(o.wallet.connected?("addCommom"in o?o.addCommom:E(D))(o.balance,o.lpDecimals):"0"),1)])])])])}const at=wo(Hn,[["render",lt],["__scopeId","data-v-afb7957e"]]),ut=Co({components:{AutoPoolRemoveModal:ne},setup(){const o=No(),n=d(()=>o),B=Ro(),N=d(()=>B),O=d(()=>N.value.slippage),$=d(()=>N.value.chainName),h=[{name:"25%",value:25},{name:"50%",value:50},{name:"75%",value:75},{name:"MAX",value:100}],_=q(25),v=So(),C=Lo(),s=d(()=>C),i=d(()=>(console.log(s.value.positionInfoObj[v.params.id],"autoPool.value.positionInfoObj[route.params.id]###"),s.value.positionInfoObj[v.params.id])),b=d(()=>{var r;return(r=i.value)==null?void 0:r.needReverse}),c=q(),l=q(),t=q(!1),a=q(),I=d(()=>{var r;return(r=i.value)==null?void 0:r.myLiquidity}),A=q(!0),g=d(()=>$.value?Zo($.value):{}),Y=Jo("Sui"),L=q("--"),S=q("--"),H=q("--"),W=()=>{if(A.value||!i.value)return;if(!a.value){L.value="--",S.value="--",_.value=0;return}if(Number(a.value)>Number(I.value))return;if(Number(a.value)*Math.pow(10,i.value.decimals)==Number(I.value)){_.value=100,R({value:1}),A.value=!0;return}const r=new p(a.value).mul(Math.pow(10,i.value.lpInfo.decimals)).toString();console.log(a.value,I.value,"##lpBalance.value");const M=new p(a.value).div(new p(I.value)).mul(100);console.log(new p("0.000000001").div(new p("5.092202763")).toString(),"3333");const mo=i.value.tick_lower_index,_o=i.value.tick_upper_index,ho=i.value.token_a.decimals,u=i.value.token_b.decimals,y=bo.tickIndexToSqrtPriceX64(mo),w=bo.tickIndexToSqrtPriceX64(_o);console.log(i.value.object.current_sqrt_price,"##positionInfo.value.object.current_sqrt_price"),console.log(r.toString(),i.value.total_supply,"amount.toString");const k=Ho.get_share_liquidity_by_amount({liquidity:i.value.liquidity,total_supply:i.value.total_supply},r.toString());console.log(k,"###liquidity");const U=Yo.getCoinAmountFromLiquidity(new Z(k),new Z(i.value.object.current_sqrt_price),y,w,!1),P=new p(U.coinA.toString()).div(Math.pow(10,ho)).toString(),F=new p(U.coinB.toString()).div(Math.pow(10,u)).toString();L.value=Number(P)>0?P:"--",S.value=Number(F)>0?F:"--",console.log(M.toString(),"##ratio"),_.value=M.toString(),H.value=to(r,0),X.value=to(k,0)},X=q(),R=r=>{if(!A.value)return;A.value=!0;const M=i.value.token_a.decimals,mo=i.value.token_b.decimals,_o=i.value.tick_lower_index,ho=i.value.tick_upper_index,u=bo.tickIndexToSqrtPriceX64(_o),y=bo.tickIndexToSqrtPriceX64(ho);let w="",k;console.log(i.value,"positionInfo.value.myLiquidity###"),r.value!==1?k=new p(i.value.myLiquidity).mul(Math.pow(10,i.value.lpInfo.decimals)).mul(r.value).toString():k=new p(i.value.myLiquidity).mul(Math.pow(10,i.value.lpInfo.decimals)).toString(),a.value=new p(k).div(Math.pow(10,i.value.lpInfo.decimals)),w=Ho.get_share_liquidity_by_amount({liquidity:i.value.liquidity,total_supply:i.value.total_supply},k),H.value=to(k,0),X.value=to(w,0),console.log(i.value.myLiquidity,"##positionInfo.value.myLiquidity");const U=Yo.getCoinAmountFromLiquidity(new Z(w),new Z(i.value.object.current_sqrt_price),u,y,!1),P=new p(U.coinA.toString()).div(Math.pow(10,M)).toString(),F=new p(U.coinB.toString()).div(Math.pow(10,mo)).toString();console.log(P,F,"amountA121212"),L.value=Number(P)>0?P:"--",S.value=Number(F)>0?F:"--"};x(_,_e((r,M)=>{r!==M&&(Number(r)>100?_.value=100:r&&i.value?(console.log("687===>"),_.value=r,R({value:_.value/100})):(L.value="--",S.value="--"))},300)),x(()=>a.value,r=>{W()},{immediate:!0});const no=oe(),{setIsShowSuccess:oo,setIsShowRejected:J,setIsShowWaiting:G,setTransactionDesc:K,setTransactionTxid:io,setPositiomNum:so,setTransactionDescText:Po}=B,uo=q(!1),{t:lo}=zo(),ro=async()=>{var k,U;uo.value=!0,io("");const r=Number(L.value)>0?`${D(L.value,c.value.decimals)} ${c.value.symbol}`:"",M=Number(S.value)>0?`${D(S.value,l.value.decimals)} ${l.value.symbol}`:"";console.log(r,M,"###transactionDescTo"),K(lo("tips.removeLiquidiyText",{from:b.value?M:r,and:Number(L.value)>0&&Number(S.value)>0?"and":"",to:b.value?r:M})),G(!0);const mo=lo("modal.removeLiquidityText2");Po(mo);const _o=i.value.autoPoolPositionInfo.tick_lower_index,ho=i.value.autoPoolPositionInfo.tick_upper_index,u=bo.tickIndexToSqrtPriceX64(_o),y=bo.tickIndexToSqrtPriceX64(ho),w=i.value.rewarderInfo.map(P=>P.coinAddress);console.log(X.value,"##liquidityVal.value");try{const P={lowerSqrtPrice:u,upperSqrtPrice:y,lpTokenAmount:new Z(H.value),liquidity:new Z(X.value),curSqrtPrice:new Z(i.value.object.current_sqrt_price),slippage:Number(O.value)/100,id:i.value.id,clmm_pool:i.value.autoPoolPositionInfo.pool,lp_token_type:i.value.lp_token_type,coinTypeA:i.value.autoPoolPositionInfo.coin_type_a,coinTypeB:i.value.autoPoolPositionInfo.coin_type_b,rewarder_coin_types:w},F=await Y.remove(P),eo=await g.value.signAndExecuteTransactionBlock(n.value.currentWallet,F);let V=g.value.handleTx(eo);if(console.log("0331###remove###tx####",V),V&&V.hash){io(V.hash),G(!1),oo(!0);const j={title:lo("common.removeLiquidity"),desc:"",hash:V.hash,descTransactions:`Remove ${r} ${Number(L.value)>0&&Number(S.value)>0?"and":""} ${M} from the pool`,sender:n.value.address,chainName:"Sui",tit:"Liquidity Removed",icon:"icon-icon-Removed",text:`Withdraw ${L.value} ${(k=c.value)==null?void 0:k.symbol} and ${S.value} ${(U=l.value)==null?void 0:U.symbol}`};j.res=V.res,g.value.showTransitionPending(j),await g.value.watchTransaction(j)&&(L.value="",S.value="",a.value="",_.value=0,setTimeout(()=>{C.updatePositionItem(i.value.id),g.value.getAccount(n.value.address)},1e3),Number(_.value)==100&&v.name=="auto-pool-detail"&&no.push("/vaults"))}else G(!1),J(!0);uo.value=!1}catch(P){console.log("Remove error",P),uo.value=!1,G(!1),J(!0)}};x(()=>i.value,(r,M)=>{r&&!ao(r)&&(c.value=r==null?void 0:r.token_a,l.value=r==null?void 0:r.token_b,console.log("触发###"),(!M||M&&M.address!==r.address)&&R({value:_.value/100}))},{immediate:!0});const yo=d(()=>{const r=Number(a.value)>Number(I.value);return!a.value||a.value<=0?lo("button.enterAmount"):r?"Invalid Amount":lo("button.remove")}),fo=d(()=>{const r=Number(a.value)>Number(I.value);return!!(!a.value||a.value<=0||r)});return{removeLiquidityBtnText:yo,removeLiquidityBtnDisabled:fo,wallet:n,ratioArr:h,positionInfo:i,isShowRemoveModal:t,needReverse:b,fromCoin:c,toCoin:l,lpAmount:a,lpBalance:I,sliderVal:_,sFixD:to,isSlider:A,fromCoinAmount:L,toCoinAmount:S,setPercent:R,toRemove:ro,addCommom:D,getCoinIcon:r=>(r==null?void 0:r.logoURI)||(r==null?void 0:r.logo_url)||ko("/image/coins/sui-unknown.png")}}});const Fo=o=>(Bo("data-v-116e5aa2"),o=o(),Oo(),o),rt={class:"auto-pool-add"},dt={class:"auto-pool-add-content"},ct={class:"liquidity-action-tab"},mt=Fo(()=>e("div",{class:"remove tab-active"},"Remove",-1)),vt={class:"card-item"},pt={class:"remove-ratio"},ft=Fo(()=>e("div",{class:"remove-ratio-title"},"Amount",-1)),_t={class:"remove-ratio-select"},bt={key:0,class:"ratio"},gt={key:1,class:"ratio"},yt={class:"ratio-list"},ht=["onClick"],It={class:"est-receive"},$t=Fo(()=>e("div",{class:"est-receive-title"},"Estimated Receive",-1)),kt={class:"token-a"},Ct={alt:""},St={class:"token-a"},wt={alt:""},At=Fo(()=>e("span",null,"Pool Closed",-1));function Pt(o,n,B,N,O,$){var i,b,c,l,t,a,I,A,g,Y,L,S,H,W,X;const h=at,_=ye,v=Qo,C=ne,s=Uo("image");return m(),T("div",rt,[e("div",dt,[e("div",ct,[e("div",{class:"increase",onClick:n[0]||(n[0]=Ko(R=>o.$emit("changeCurrentTab"),["stop"]))},"Add"),mt]),e("div",{class:Xo(o.needReverse?"card-container reverse":"card-container")},[e("div",vt,[Q(h,{modelValue:o.lpAmount,"onUpdate:modelValue":n[1]||(n[1]=R=>o.lpAmount=R),"input-value":o.lpAmount,balance:o.lpBalance,"from-coin":o.needReverse?o.toCoin:o.fromCoin,"to-coin":o.needReverse?o.fromCoin:o.toCoin,"position-info":o.positionInfo,"lp-decimals":(b=(i=o.positionInfo)==null?void 0:i.lpInfo)==null?void 0:b.decimals,onOnMax:n[2]||(n[2]=()=>{o.sliderVal=100,o.setPercent({value:1})}),onOnInput:n[3]||(n[3]=R=>{o.isSlider=!1,o.lpAmount=R})},null,8,["modelValue","input-value","balance","from-coin","to-coin","position-info","lp-decimals"])])],2),e("div",pt,[ft,e("div",_t,[Number(o.lpBalance)>=Number(o.lpAmount)?(m(),T("div",bt,f(o.sliderVal>0&&Number(("sFixD"in o?o.sFixD:E(to))(o.sliderVal,2))<.01?"<0.01":("sFixD"in o?o.sFixD:E(to))(o.sliderVal,2))+"% ",1)):(m(),T("div",gt,"--")),e("div",yt,[(m(!0),T(be,null,ge(o.ratioArr,(R,no)=>(m(),T("div",{key:no,class:Xo(["ratio-item",o.sliderVal==R.value?"ratio-item-active":""]),onClick:()=>{o.isSlider=!0,o.sliderVal=R.value}},f(R.name),11,ht))),128))])]),Q(_,{value:o.sliderVal,"onUpdate:value":n[4]||(n[4]=R=>o.sliderVal=R)},null,8,["value"])]),e("div",It,[$t,e("div",kt,[e("div",null,f(("addCommom"in o?o.addCommom:E(D))(o.fromCoinAmount)),1),e("div",null,[vo(e("img",Ct,null,512),[[s,o.needReverse?o.getCoinIcon((c=o.positionInfo)==null?void 0:c.token_b):o.getCoinIcon((l=o.positionInfo)==null?void 0:l.token_a)]]),e("span",null,f(o.needReverse?(a=(t=o.positionInfo)==null?void 0:t.token_b)==null?void 0:a.symbol:(A=(I=o.positionInfo)==null?void 0:I.token_a)==null?void 0:A.symbol),1)])]),e("div",St,[e("div",null,f(("addCommom"in o?o.addCommom:E(D))(o.toCoinAmount)),1),e("div",null,[vo(e("img",wt,null,512),[[s,o.needReverse?o.getCoinIcon((g=o.positionInfo)==null?void 0:g.token_a):o.getCoinIcon((Y=o.positionInfo)==null?void 0:Y.token_b)]]),e("span",null,f(o.needReverse?(S=(L=o.positionInfo)==null?void 0:L.token_a)==null?void 0:S.symbol:(W=(H=o.positionInfo)==null?void 0:H.token_b)==null?void 0:W.symbol),1)])])])]),(X=o.positionInfo)!=null&&X.is_pause?(m(),z(v,{key:0,class:"big-btn liquidity-btn",disabled:!0},{default:$o(()=>[At]),_:1})):o.wallet.connected?(m(),z(v,{key:1,class:"big-btn liquidity-btn",disabled:o.removeLiquidityBtnDisabled,onClick:o.toRemove},{default:$o(()=>[e("span",null,f(o.removeLiquidityBtnText),1)]),_:1},8,["disabled","onClick"])):(m(),z(v,{key:2,class:"big-btn",onClick:n[5]||(n[5]=R=>o.wallet.setIsShowWalletModal(!0))},{default:$o(()=>[e("span",null,f(o.$t("button.connectWallet")),1)]),_:1})),o.isShowRemoveModal?(m(),z(C,{key:3,"pool-info":o.positionInfo,"from-coin":o.positionInfo.token_a,"to-coin":o.positionInfo.token_b,onOnClose:n[6]||(n[6]=R=>o.isShowRemoveModal=!1)},null,8,["pool-info","from-coin","to-coin"])):po("",!0)])}const le=wo(ut,[["render",Pt],["__scopeId","data-v-116e5aa2"]]),qt=Co({components:{AutoPoolAdd:se,AutoPositionInfo:te,AutoPositionLiquidity:ie,AutoPoolRemove:le},setup(){const o=q("add"),n=No(),B=d(()=>n),N=Lo(),O=d(()=>N),$=jo(),h=d(()=>$);x(()=>h.value.poolConfigList,b=>{b&&b.length>0&&N.getAutoPoolList()},{immediate:!0}),x(()=>[B.value.address,O.value.autoPoolList,h.value.poolConfigList],([b,c,l])=>{b&&c&&c.length>0&&l&&l.length>0&&N.getMyAutoPoolPosition()},{immediate:!0});const _=So(),v=d(()=>(console.log(O.value.positionInfoObj[_.params.id],"autoPool.value.positionInfoObj[route.params.id]###"),O.value.positionInfoObj[_.params.id]||{}));x(()=>_.query.action,b=>{b&&(o.value=b)},{immediate:!0}),oe(),x(()=>B.value.address,b=>{b||N.logout()},{immediate:!0});const C=Ro(),s=d(()=>C);return{currentTab:o,positionInfo:v,clickRefresh:()=>{N.getAutoPoolAPY(),N.getAutoPoolList(),$.setPoolConfigList(s.value.chainName,s.value.filterCoinsObj)},checkNullObj:ao}}});const Tt={class:"auto-increase-liquidity"},Rt={class:"auto-increase-liquidity-content pc-content"},Nt={class:"left"},Lt={class:"right"},Bt={class:"auto-increase-liquidity-content h5-content"},Ot={class:"left"},Mt={class:"right"};function Dt(o,n,B,N,O,$){const h=ae,_=te,v=ie,C=se,s=le,i=xo;return m(),T("div",Tt,[Q(h,{onClickRefresh:o.clickRefresh},null,8,["onClickRefresh"]),e("div",Rt,[e("div",Nt,[Q(_),Q(v)]),e("div",Lt,[o.currentTab=="add"?(m(),z(C,{key:0,onChangeCurrentTab:n[0]||(n[0]=b=>o.currentTab="remove")})):(m(),z(s,{key:1,onChangeCurrentTab:n[1]||(n[1]=b=>o.currentTab="add")}))]),("checkNullObj"in o?o.checkNullObj:E(ao))(o.positionInfo)?(m(),z(i,{key:0})):po("",!0)]),e("div",Bt,[e("div",Ot,[Q(_),o.currentTab=="add"?(m(),z(C,{key:0,onChangeCurrentTab:n[2]||(n[2]=b=>o.currentTab="remove")})):(m(),z(s,{key:1,onChangeCurrentTab:n[3]||(n[3]=b=>o.currentTab="add")}))]),e("div",Mt,[Q(v)]),("checkNullObj"in o?o.checkNullObj:E(ao))(o.positionInfo)?(m(),z(i,{key:0})):po("",!0)])])}const ri=wo(qt,[["render",Dt],["__scopeId","data-v-c1d813f3"]]);export{ri as default};
