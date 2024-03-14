import{a6 as Po,l as To,R as xo,a7 as Bo}from"./entry.6565eb4e.js";import{c as _,a as ho}from"./sha256.c0dc62e1.js";import{P as vo,I as Lo,Q as fo,b as $,R as J,T as Ao,C as So,V as oo,q as wo,s as N,u as Co,e as bo,a as go,f as qo,p as ao}from"./pool.0c3685f1.js";import{D as e}from"./decimal.0bdeb344.js";function yo(i){const d={launchpad:_[i||"Sui"].launchpad,ido:_[i||"Sui"].ido,xcetus:_[i||"Sui"].xcetus,xcetus_dividends:_[i||"Sui"].xcetus_dividends,cetus_faucet:_[i||"Sui"].cetus_faucet,xtoken:_[i||"Sui"].xtoken,xtoken_dividends:_[i||"Sui"].xtoken_dividends,token_faucet:_[i||"Sui"].token_faucet,booster:_[i||"Sui"].booster,maker_bonus:_[i||"Sui"].maker_bonus,liquidity_stratefy:_[i||"Sui"].liquidity_stratefy,vaults:_[i||"Sui"].vaults,haedal:_[i||"Sui"].haedal,frams:_[i||"Sui"].frams},y={fullRpcUrl:localStorage.getItem(`${i}-currentRpclocal2`)||_[i||"Sui"].fullRpcUrl,simulationAccount:_[i||"Sui"].simulationAccount,cetus_config:_[i||"Sui"].cetus_config,clmm_pool:_[i||"Sui"].clmm_pool,integrate:_[i||"Sui"].integrate,deepbook:_[i||"Sui"].deepbook,deepbook_endpoint_v2:_[i||"Sui"].deepbook_endpoint_v2,aggregatorUrl:_[i||"Sui"].aggregatorUrl},p=new vo(y),n=Po(new Lo(d,p)),l=ho(),U=To(()=>l);xo(()=>{U.value.address&&(p.senderAddress=U.value.address)});const I=async()=>{console.log(n,"sdk###");const o=await n.Vaults.getVaultList();return console.log("result.data:",o.data),o&&o.data||[]},O=async o=>{const s=await n.Vaults.getVault(o);return console.log(s,"vault##"),{...s,quota_based_type:fo(s.quota_based_type).full_address}},u=async o=>{if(console.log(o,"###coinType"),p.senderAddress){const s=await n.ClmmSDK.fullClient.getBalance({owner:p.senderAddress,coinType:o});return s&&s.totalBalance}else return 0},t=o=>({transactionBlock:o,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:I,getLpBalance:u,getVault:async o=>{const s=await n.Vaults.getVault(o);return console.log(s,"vault##292"),s},deposit:async o=>{const{lowerTick:s,upperTick:g,slippage:w,rewarder_coin_types:h,isOnlyA:k,isOnlyB:x,currentTickIndex:P,decimal_b:j,request_id:T,staking_id:R,shouldRequestStake:C,farming_pool:V}=o;console.log(o,"params###");let r=o.fix_amount_a,c,a,E,b=P;if(k||x){let A;try{A=await n.Vaults.calculateDepositSwapAmount({lowerTick:s,upperTick:g,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool,use_route:!0,priceSplitPoint:w,request_id:T,staking_id:R,shouldRequestStake:C},!0)}catch{A=await n.Vaults.calculateDepositSwapAmount({lowerTick:s,upperTick:g,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool,use_route:!1,priceSplitPoint:w,request_id:T,staking_id:R,shouldRequestStake:C},!0)}console.log(A,"swapResut##211"),A?(a=new $(A.afterSqrtPrice),c=A.fixAmountA===r?new $(J(o.coinAmount).sub(A.swapInAmount).toString()):new $(A.swapOutAmount),E={swap_amount:A.swapInAmount,a2b:r,input_amount:o.coinAmount,route_obj:A.routeObj,staking_id:A.staking_id},r=A.fixAmountA,b=Ao.sqrtPriceX64ToTickIndex(new $(A.afterSqrtPrice))):(a=new $(o.curSqrtPrice),c=new $(o.coinAmount))}else a=o.curSqrtPrice,c=new $(o.coinAmount);let m,q,v;console.log(s,P,g,"####138"),b>=s&&b<=g?(m=So.estLiquidityAndcoinAmountFromOneAmounts(s,g,c,r,!0,w,a),q=r?c.toString():m.tokenMaxA.toString(),v=r?m.tokenMaxB.toString():c.toString()):b<s?(q=c.toNumber(),v=0):b>g&&(q=0,v=c.toNumber()),console.log({lowerTick:s,upperTick:g,vault_id:o.id,clmm_pool:o.clmm_pool,farming_pool:V,lp_token_type:o.lp_token_type,amount_a:q,amount_b:v,fix_amount_a:r,slippage:w,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,swapParams:E},"params171");const Q=await n.Vaults.deposit({lowerTick:s,upperTick:g,vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:q,amount_b:v,fix_amount_a:r,slippage:w,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,swapParams:E,farming_pool:V});return t(Q)},remove:async o=>{const{lowerTick:s,upperTick:g,coinTypeA:w,coinTypeB:h,receiveAmount:k,clmm_pool:x,lowerSqrtPrice:P,upperSqrtPrice:j,fix_amount_a:T,curSqrtPrice:R,slippage:C,rewarder_coin_types:V,id:r,liquidity:c,swapParams:a,isOnlyA:E,isOnlyB:b,sliderVal:m,positionInfo:q,maxLiquidity:v,request_id:Q,farming_pool:A}=o;console.log(m,"sliderVal##");const F=await O(r),Y=await p.Pool.getPool(F.pool_id);let D,B,K,to,Z,z,L;const G=oo.get_share_liquidity_by_amount(F,m==100?q.balance:o.lpTokenAmount);if(console.log(k,"##receiveAmount"),E||b){try{D=await n.Vaults.calculateRemoveSwapAmount({lowerTick:s,upperTick:g,curSqrtPrice:Y.current_sqrt_price,fix_amount_a:T,receive_amount:k,coinTypeA:w,coinTypeB:h,clmm_pool:x,use_route:!0,priceSplitPoint:C,removeLiquidity:m==100?G:"",maxLiquidity:v,request_id:Q})}catch(eo){console.log(eo,"e251"),D=await n.Vaults.calculateRemoveSwapAmount({lowerTick:s,upperTick:g,curSqrtPrice:Y.current_sqrt_price,fix_amount_a:T,receive_amount:k,coinTypeA:w,coinTypeB:h,clmm_pool:x,use_route:!1,priceSplitPoint:C,removeLiquidity:m==100?G:"",maxLiquidity:v,request_id:Q})}if(console.log(D,"swapResut###"),D){const eo=oo.get_share_liquidity_by_amount(F,q.balance);B=So.getCoinAmountFromLiquidity(new $(m==100?eo:D.liquidity),new $(Y.current_sqrt_price),P,j,!1),K=oo.get_protocol_fee_amount(F,B.coinA.toString()),to=oo.get_protocol_fee_amount(F,B.coinB.toString()),Z=m==100?q.balance:oo.get_lp_amount_by_liquidity(F,D.liquidity),z=J(B.coinA.toString()).mul(J(1-o.slippage)),L=J(B.coinB.toString()).mul(J(1-o.slippage)),console.log(z.toString(),"##minAmountA"),console.log(L.toString(),"##minAmountA")}}else console.log(G,"#removeLiquidity"),B=So.getCoinAmountFromLiquidity(new $(G),new $(Y.current_sqrt_price),P,j,!1),console.log(B,"#coinAmountscoinAmounts"),Z=o.lpTokenAmount,z=J(B.coinA.toString()).mul(J(1-o.slippage)),L=J(B.coinB.toString()).mul(J(1-o.slippage)),console.log(K,to,"##protocol_fee_amount_b"),console.log(z.toString(),"##minAmountA"),console.log(L.toString(),"##minAmountA"),console.log(o,"params###246");console.log(Z,"lpTokenAmount remove");const M={vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,lp_token_amount:Z,min_amount_a:wo(z,0)||"",min_amount_b:wo(L,0)||"",rewarder_coin_types:[],slippage:o.slippage,farming_pool:A};console.log(M,"##removeParams"),(E||b)&&(M.swapParams={a2b:!T,swap_amount:D==null?void 0:D.swapInAmount,route_obj:D.routeObj});const W=await n.Vaults.remove(M);return t(W)},getAutoPool:O,calculateDepositSwapAmount:async o=>{const{lowerTick:s,upperTick:g,curSqrtPrice:w,fix_amount_a:h,input_amount:k,coinTypeA:x,coinTypeB:P,clmm_pool:j,slippage:T,decimals:R,request_id:C,staking_id:V,shouldRequestStake:r}=o;console.log(o,"params###");let c;try{c=await n.Vaults.calculateDepositSwapAmount({lowerTick:s,upperTick:g,curSqrtPrice:w,fix_amount_a:h,input_amount:k,coinTypeA:x,coinTypeB:P,clmm_pool:j,use_route:!0,priceSplitPoint:T,request_id:C,staking_id:V,shouldRequestStake:r},!0)}catch(a){if(console.log(a,"calculateDepositSwapAmount error"),String(a)=="Error: route unavailable"&&(console.log(a,"e432"),c=await n.Vaults.calculateDepositSwapAmount({lowerTick:s,upperTick:g,curSqrtPrice:w,fix_amount_a:h,input_amount:k,coinTypeA:x,coinTypeB:P,clmm_pool:j,use_route:!1,priceSplitPoint:T,request_id:C,staking_id:V,shouldRequestStake:r},!0)),String(a)=="Error: HaedalStakeSuiAmountError")return"HaedalStakeSuiAmountError"}if(console.log(c,"##swapResut"),c){const a=new e(c.swapOutAmount);return{...c,swapOutAmountLimit:N(a.sub(a.mul(T)).toNumber(),R)}}return c},calculateRemoveSwapAmount:async o=>{const{lowerTick:s,upperTick:g,curSqrtPrice:w,fix_amount_a:h,receiveAmount:k,coinTypeA:x,coinTypeB:P,clmm_pool:j,slippage:T,decimals:R,liquidity:C,maxLiquidity:V,request_id:r}=o;console.log(o,"params###");let c;try{c=await n.Vaults.calculateRemoveSwapAmount({lowerTick:s,upperTick:g,curSqrtPrice:w,fix_amount_a:h,receive_amount:k,coinTypeA:x,coinTypeB:P,clmm_pool:j,use_route:!0,priceSplitPoint:T,removeLiquidity:C,maxLiquidity:V,request_id:r})}catch(a){String(a)=="Error: route unavailable"&&(console.log(a,"e432"),c=await n.Vaults.calculateRemoveSwapAmount({lowerTick:s,upperTick:g,curSqrtPrice:w,fix_amount_a:h,receive_amount:k,coinTypeA:x,coinTypeB:P,clmm_pool:j,use_route:!1,priceSplitPoint:T,removeLiquidity:C,maxLiquidity:V,request_id:r}))}if(console.log(c,"###swapResut calculateRemoveSwapAmount"),c){const a=new e(c.swapOutAmount);return console.log(a.toNumber(),"swapOutAmount.toNumber()"),{...c,swapOutAmountLimit:N(a.sub(a.mul(T)).toNumber(),R)}}return c}}}const Oo=Bo("autoPool",{state:()=>({autoPoolList:[],autoPoolObj:{},positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{},currentAutoPoolStatus:"STATUS_RUNNING",slippage:localStorage.getItem("cetus-auto-slippage")||"0.1",autoPoolLoading:!1}),getters:{getPoolStore(){return Co()}},actions:{async getAutoPoolList(){const d=await yo("Sui").getAutoPools();console.log(d,"list###");const y=this.getPoolStore,p=_.Sui.vaultFilter,{data:n}=await fetch(`${_.Sui.api}/v2/sui/auto_pools`).then(u=>u.json());console.log(n,"data##37");const l=(n==null?void 0:n.pools)||[],U=d.filter(u=>l.some(t=>t.object_id===u.id)),I=_.Sui.haedal.config.support_stakings;console.log("supportStakingsList:",I),console.log(U,"##openPoolList");const O=(p?U:d).map(u=>{const t=y.poolConfigObj[u.pool_id];return console.log("autoPoolList map",u,t),{...t,id:u.id,lp_token_type:u.lp_token_type,autoPoolPositionInfo:u.position,is_pause:u.is_pause,total_supply:u.total_supply,liquidity:u.liquidity,protocol_fee_rate:u.protocol_fee_rate,max_quota:u.max_quota,staking_id:u.staking_id,quota_based_type:fo(u.quota_based_type).full_address,supportHaedalStake:I.filter(S=>S.staking_id==u.staking_id).length>0,isTokenA:t.needReverse?t.coin_b_address=="0000000000000000000000000000000000000000000000000000000000000002::sui::SUI":t.coin_a_address=="0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"}});this.autoPoolList=O,this.autoPoolObj=Object.fromEntries(O.map((u,t)=>[u.address,u])),this.getMyAutoPoolPosition(),console.log(O,"##autoPoolList")},async getMyAutoPoolPosition(){var l,U,I,O;const i=yo("Sui"),d=this.autoPoolList,y=bo("Sui"),p=[],{RATES:n}=this.getPoolStore;for(let u=0;u<d.length;u++){const t=d[u];console.log(t,"poolINfo###");const S=await y.getPool(t.address),f=await i.getLpBalance(d[u].lp_token_type);console.log(f,"balance##");const X=(await y.getTokenListByCoinType([d[u].lp_token_type]))[0];console.log(X,"lpInfo##");const io=((l=n[t.coinA.address])==null?void 0:l.price)||"",H=((U=n[t.coinB.address])==null?void 0:U.price)||"",o=t.autoPoolPositionInfo.tick_lower_index,s=t.autoPoolPositionInfo.tick_upper_index,g=Number(f)>0?oo.get_share_liquidity_by_amount({liquidity:t==null?void 0:t.liquidity,total_supply:t==null?void 0:t.total_supply},f):0,w={tick_lower_index:o,tick_upper_index:s,current_sqrt_price:S==null?void 0:S.current_sqrt_price,liquidity:g};console.log(t,"poolInfo##94");const h=await y.getCoinAmountFromLiquidity({pool:{...t,current_sqrt_price:S==null?void 0:S.current_sqrt_price},position:w,roundUp:!1});console.log(h,"##amountInfo");const k=h.coinaAmount,x=h.coinbAmount,P=k,j=x,T=t.coinA.decimals,R=t.coinB.decimals,C=y.TickMath.tickIndexToPrice(Number(o),T,R).toString(),V=y.TickMath.tickIndexToPrice(Number(s),T,R).toString(),r=new e(io).mul(new e(k)).toNumber(),c=new e(H).mul(new e(x)).toNumber(),a=r>0&&r<.01?"<$0.01":`$${go(N(r,2))}`,E=c>0&&c<.01?"<$0.01":`$${go(N(c,2))}`,b=Ao.sqrtPriceX64ToPrice(S.current_sqrt_price,T,R),m=await y.getCoinAmountFromLiquidity({pool:{...t,tick_lower_index:o,tick_upper_index:s,current_sqrt_price:S==null?void 0:S.current_sqrt_price},position:{...w,liquidity:t.liquidity},roundUp:!1}),q=new e(m.coinaAmount).toNumber(),v=new e(m.coinbAmount).toNumber();console.log(q,v,b.toString(),"###116");const Q=N(new e(q).mul(new e(io)).toNumber(),2),A=N(new e(v).mul(new e(H)).toNumber(),2);console.log(S,"newPool##"),console.log(q,v,io,H,Number(Q)+Number(A),"###poolCoinBNum");const{ratioA:F,ratioB:Y}=oo.calculateDepositRatio(o,s,new $.BN(S==null?void 0:S.current_sqrt_price));console.log(F,Y.toString(),"###139");const D=F.mul(100).toNumber().toFixed(0),B=100-Number(D);console.log(q,v,D,B,"###147");let K=0;Number(f)>0&&(K=new e(f).div(Math.pow(10,X.decimals)));const to=new e(r).add(new e(c)).toNumber(),Z=io&&H?to>0&&to<.01?"<0.01":N(new e(r).add(new e(c)).toString(),2):"--",z=t.total_supply;let L=0;K>0&&z>0&&(L=new e(K).mul(Math.pow(10,X.decimals)).div(new e(z)).mul(100).toNumber()),console.log(L,"##myShare");const G=new e(1).div(Math.pow(10,t.decimals)).toNumber();let M=0;if(L>1)M=N(L,2);else if(L>0&&L<G)M=`<${G}`;else if(L==0)M=0;else{const ro=qo(L),_o=ro==-1?2:ro+2;M=N(L,_o)}console.log(f,K.toString(),"###balance");const W=(await y.getTokenListByCoinType([t.quota_based_type]))[0],eo=ao(t.max_quota,W.decimals);console.log(t.quota_based_type,W,eo,"##quoteCoinInfo");const uo=W.address==t.coin_b_address,co=uo?new e(m.coinaAmount).mul(t.price).add(m.coinbAmount):new e(m.coinaAmount).mul(1/t.price).add(m.coinbAmount),po=((I=n[W.address])==null?void 0:I.price)||"",no=co.mul(new e(po)).toNumber();console.log(uo,no,"#isQuotaCoin");const so=eo,mo=uo?new e(m.coinaAmount).mul(t.price).add(m.coinbAmount):new e(m.coinaAmount).mul(1/t.price).add(m.coinbAmount),lo=new e(so).sub(mo).mul(H).toNumber();console.log(lo,"remainingTokenUSD##"),console.log(co.toNumber(),"#poolTokenNum"),this.positionInfoObj[t.id]={tick_lower_index:o,tick_upper_index:s,current_sqrt_price:S.current_sqrt_price,myLiquidity:ao(f,X.decimals),amountA:P,amountB:j,...t,lpInfo:X,myAmountAUSD:a,myAmountBUSD:E,myLiquidityUSD:Z,myShare:M,minPrice:C,maxPrice:V,poolCoinARatio:D,poolCoinBRatio:B,poolCoinANum:q,poolCoinBNum:v,poolCoinAUSD:Q,poolCoinBUSD:A,quoteUSD:so,poolUSD:no,balance:f,quoteCoinInfo:W,remainingTokenUSD:lo,currentDeposit:no,positionLiquidity:g},p.push({tick_lower_index:o,tick_upper_index:s,current_sqrt_price:(O=t==null?void 0:t.object)==null?void 0:O.current_sqrt_price,myLiquidity:ao(f,X.decimals),amountA:P,amountB:j,...t,lpInfo:X,myAmountAUSD:a,myAmountBUSD:E,myLiquidityUSD:Z,myShare:M,minPrice:C,maxPrice:V,poolCoinARatio:D,poolCoinBRatio:B,poolCoinANum:q,poolCoinBNum:v,poolCoinAUSD:Q,poolCoinBUSD:A,quoteUSD:so,poolUSD:no,balance:f})}this.positionInfoList=p,console.log(this.positionInfoObj,"this.positionInfoObj###"),console.log(this.positionInfoList,"###this.positionInfoList")},async updatePositionItem(i){var co,po,no,so,mo,lo,ro;const d=yo("Sui"),y=bo("Sui"),p=await d.getAutoPool(i),n=await y.getPool(p.pool_id);console.log("newPoolInfo:",p),console.log("newPool:",n),console.log("this.positionInfoObj[id]:",this.positionInfoObj[i]);const l={...this.positionInfoObj[i],autoPoolPositionInfo:p.position,...n},U=await d.getLpBalance(l.lp_token_type);console.log(U,"updatePositionItem lp balance");const I=(await y.getTokenListByCoinType([l.lp_token_type]))[0];console.log(U,"###balance updatePositionItem");const O=l.autoPoolPositionInfo.tick_lower_index,u=l.autoPoolPositionInfo.tick_upper_index;let t;p.total_supply==0?t=0:t=oo.get_share_liquidity_by_amount(p,String(U)),console.log(t,"##liquidity");const S={tick_lower_index:O,tick_upper_index:u,current_sqrt_price:n.current_sqrt_price,liquidity:t},f=y.getCoinAmountFromLiquidity({pool:{current_sqrt_price:n.current_sqrt_price,...l},position:S,roundUp:!1}),X=f.coinaAmount,io=f.coinbAmount,{RATES:H}=this.getPoolStore,o=p.total_supply,s=Ao.sqrtPriceX64ToPrice(n.current_sqrt_price,(co=l==null?void 0:l.coinA)==null?void 0:co.decimals,(po=l==null?void 0:l.coinB)==null?void 0:po.decimals),g=2,w=2,h=((so=H[(no=l==null?void 0:l.coinA)==null?void 0:no.address])==null?void 0:so.price)||0,k=((lo=H[(mo=l==null?void 0:l.coinB)==null?void 0:mo.address])==null?void 0:lo.price)||0,x=new e(h).mul(new e(f==null?void 0:f.coinaAmount)).toNumber(),P=new e(k).mul(new e(f==null?void 0:f.coinbAmount)).toNumber(),j=x>0&&x<.01?"<$0.01":`$${go(N(x,2))}`,T=P>0&&P<.01?"<$0.01":`$${go(N(P,2))}`;let R=new e(0);Number(U)>0&&(R=new e(U).div(Math.pow(10,I==null?void 0:I.decimals)));const C=new e(x).add(new e(P)).toNumber(),V=h&&k?C>0&&C<.01?"<0.01":N(new e(x).add(new e(P)).toString(),2):"--";let r=0;R.toNumber()>0&&o>0&&(r=new e(R).mul(Math.pow(10,I.decimals)).div(new e(o)).mul(100).toNumber()),console.log(r,"##myShare");const c=new e(1).div(Math.pow(10,l.decimals)).toNumber();let a=0;if(r>1)a=N(r,2);else if(r>0&&r<c)a=`<${c}`;else if(r==0)a=0;else{const _o=qo(r),ko=_o==-1?2:_o+2;a=N(r,ko)}const E=Ao.sqrtPriceX64ToPrice(n.current_sqrt_price,g,w),b=await y.getCoinAmountFromLiquidity({pool:{...l,tick_lower_index:O,tick_upper_index:u,current_sqrt_price:n==null?void 0:n.current_sqrt_price},position:{...S,liquidity:p.liquidity},roundUp:!1}),m=new e(b.coinaAmount).toNumber(),q=new e(b.coinbAmount).toNumber();console.log(m,q,E.toString(),"###116");const v=N(new e(m).mul(new e(h)).toNumber(),2),Q=N(new e(q).mul(new e(k)).toNumber(),2);console.log(n,"newPool##"),console.log(m,q,h,k,Number(v)+Number(Q),"###poolCoinBNum");const{ratioA:A,ratioB:F}=oo.calculateDepositRatio(O,u,new $.BN(n==null?void 0:n.current_sqrt_price));console.log(A,F.toString(),"###139");const Y=A.mul(100).toNumber().toFixed(0),D=100-Number(Y),B=(await y.getTokenListByCoinType([p.quota_based_type]))[0],K=ao(p.max_quota,B.decimals);console.log(p.quota_based_type,B,K,"##quoteCoinInfo");const to=B.address==l.coin_b_address,Z=to?new e(b.coinaAmount).mul(l.price).add(b.coinbAmount):new e(b.coinaAmount).mul(1/l.price).add(b.coinbAmount),z=((ro=H[B.address])==null?void 0:ro.price)||"",L=Z.mul(new e(z)).toNumber(),G=K,M=to?new e(b.coinaAmount).mul(l.price).add(b.coinbAmount):new e(b.coinaAmount).mul(1/l.price).add(b.coinbAmount),W=new e(G).sub(M).mul(k).toNumber();console.log(W,"remainingTokenUSD##");const eo=y.TickMath.tickIndexToPrice(Number(O),g,w).toString(),uo=y.TickMath.tickIndexToPrice(Number(u),g,w).toString();this.positionInfoObj[i]={...l,tick_lower_index:O,tick_upper_index:u,current_sqrt_price:n.current_sqrt_price,myLiquidity:ao(U,I==null?void 0:I.decimals),amountA:X,amountB:io,myShare:a,myAmountAUSD:j,myAmountBUSD:T,myLiquidityUSD:V,poolCoinARatio:Y,poolCoinBRatio:D,poolCoinANum:m,poolCoinBNum:q,poolCoinAUSD:v,poolCoinBUSD:Q,quoteUSD:G,balance:U,price:s,quoteCoinInfo:B,remainingTokenUSD:W,currentDeposit:L,poolUSD:L,positionLiquidity:t,liquidity:p==null?void 0:p.liquidity,minPrice:eo,maxPrice:uo},this.autoPoolLoading=!1,console.log(this.positionInfoObj[i],"###this.positionInfoObj[id]")},async getAutoPoolAPY(){try{const{data:i}=await fetch(`${_.Sui.api}/v2/sui/auto_pools`).then(d=>d.json());i&&i.pools&&i.pools.length>0&&(this.apyObj=Object.fromEntries(i.pools.map((d,y)=>[d.object_id,{...d,apr:d.apr.replace("%","")>0&&d.apr.replace("%","")<.01?"<0.01%":N(d.apr.replace("%",""),2)+"%",resultApr:d.apr.replace("%","")}])),console.log(this.apyObj,"data##"))}catch{this.apyObj={}}},async getVault(i,d){const y=yo("Sui");d||(this.autoPoolLoading=!0);const{status:p}=await y.getVault(i);this.currentAutoPoolStatus=p,this.updatePositionItem(i),console.log(p,"status##")},setSlippage(i){console.log(i,"slippage##"),this.slippage=i,localStorage.setItem("cetus-auto-slippage",i)}}});export{yo as a,Oo as u};
