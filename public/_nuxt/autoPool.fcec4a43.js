import{l as Po,R as To,a6 as ho}from"./entry.59a2cdcc.js";import{c as d,a as xo}from"./sha256.fbf47686.js";import{P as Bo,I as vo,Q as fo,b as $,R as J,T as Ao,C as So,V as oo,q as wo,s as U,u as Lo,e as bo,a as go,f as qo,p as ao}from"./pool.acb16d99.js";import{D as e}from"./decimal.0bdeb344.js";function yo(i){const g={launchpad:d[i||"Sui"].launchpad,ido:d[i||"Sui"].ido,xcetus:d[i||"Sui"].xcetus,xcetus_dividends:d[i||"Sui"].xcetus_dividends,cetus_faucet:d[i||"Sui"].cetus_faucet,xtoken:d[i||"Sui"].xtoken,xtoken_dividends:d[i||"Sui"].xtoken_dividends,token_faucet:d[i||"Sui"].token_faucet,booster:d[i||"Sui"].booster,maker_bonus:d[i||"Sui"].maker_bonus,liquidity_stratefy:d[i||"Sui"].liquidity_stratefy,vaults:d[i||"Sui"].vaults,haedal:d[i||"Sui"].haedal,frams:d[i||"Sui"].frams},S={fullRpcUrl:localStorage.getItem(`${i}-currentRpclocal2`)||d[i||"Sui"].fullRpcUrl,simulationAccount:d[i||"Sui"].simulationAccount,cetus_config:d[i||"Sui"].cetus_config,clmm_pool:d[i||"Sui"].clmm_pool,integrate:d[i||"Sui"].integrate,deepbook:d[i||"Sui"].deepbook,deepbook_endpoint_v2:d[i||"Sui"].deepbook_endpoint_v2,aggregatorUrl:d[i||"Sui"].aggregatorUrl},m=new Bo(S),n=new vo(g,m),l=xo(),N=Po(()=>l);To(()=>{N.value.address&&(m.senderAddress=N.value.address)});const O=async()=>{console.log(n,"sdk###");const o=await n.Vaults.getVaultList();return console.log("result.data:",o.data),o&&o.data||[]},R=async o=>{const s=await n.Vaults.getVault(o);return console.log(s,"vault##"),{...s,quota_based_type:fo(s.quota_based_type).full_address}},u=async o=>{if(console.log(o,"###coinType"),m.senderAddress){const s=await n.ClmmSDK.fullClient.getBalance({owner:m.senderAddress,coinType:o});return s&&s.totalBalance}else return 0},t=o=>({transactionBlock:o,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:O,getLpBalance:u,getVault:async o=>{const s=await n.Vaults.getVault(o);return console.log(s,"vault##292"),s},deposit:async o=>{const{lowerTick:s,upperTick:y,slippage:b,rewarder_coin_types:B,isOnlyA:k,isOnlyB:h,currentTickIndex:P,decimal_b:I,request_id:T,staking_id:j,shouldRequestStake:D,farming_pool:V}=o;console.log(o,"params###");let r=o.fix_amount_a,c,a,M,q=P;if(k||h){let w;try{w=await n.Vaults.calculateDepositSwapAmount({lowerTick:s,upperTick:y,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool,use_route:!0,priceSplitPoint:b,request_id:T,staking_id:j,shouldRequestStake:D},!0)}catch{w=await n.Vaults.calculateDepositSwapAmount({lowerTick:s,upperTick:y,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool,use_route:!1,priceSplitPoint:b,request_id:T,staking_id:j,shouldRequestStake:D},!0)}console.log(w,"swapResut##211"),w?(a=new $(w.afterSqrtPrice),c=w.fixAmountA===r?new $(J(o.coinAmount).sub(w.swapInAmount).toString()):new $(w.swapOutAmount),M={swap_amount:w.swapInAmount,a2b:r,input_amount:o.coinAmount,route_obj:w.routeObj,staking_id:w.staking_id},r=w.fixAmountA,q=Ao.sqrtPriceX64ToTickIndex(new $(w.afterSqrtPrice))):(a=new $(o.curSqrtPrice),c=new $(o.coinAmount))}else a=o.curSqrtPrice,c=new $(o.coinAmount);let _,f,v;console.log(s,P,y,"####138"),q>=s&&q<=y?(_=So.estLiquidityAndcoinAmountFromOneAmounts(s,y,c,r,!0,b,a),f=r?c.toString():_.tokenMaxA.toString(),v=r?_.tokenMaxB.toString():c.toString()):q<s?(f=c.toNumber(),v=0):q>y&&(f=0,v=c.toNumber()),console.log({lowerTick:s,upperTick:y,vault_id:o.id,clmm_pool:o.clmm_pool,farming_pool:V,lp_token_type:o.lp_token_type,amount_a:f,amount_b:v,fix_amount_a:r,slippage:b,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,swapParams:M},"params171");const Q=await n.Vaults.deposit({lowerTick:s,upperTick:y,vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:f,amount_b:v,fix_amount_a:r,slippage:b,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,swapParams:M,farming_pool:V});return t(Q)},remove:async o=>{const{lowerTick:s,upperTick:y,coinTypeA:b,coinTypeB:B,receiveAmount:k,clmm_pool:h,lowerSqrtPrice:P,upperSqrtPrice:I,fix_amount_a:T,curSqrtPrice:j,slippage:D,rewarder_coin_types:V,id:r,liquidity:c,swapParams:a,isOnlyA:M,isOnlyB:q,sliderVal:_,positionInfo:f,maxLiquidity:v,request_id:Q,farming_pool:w}=o;console.log(_,"sliderVal##");const E=await R(r),Y=await m.Pool.getPool(E.pool_id);let C,x,K,to,Z,z,L;const G=oo.get_share_liquidity_by_amount(E,_==100?f.balance:o.lpTokenAmount);if(console.log(k,"##receiveAmount"),M||q){try{C=await n.Vaults.calculateRemoveSwapAmount({lowerTick:s,upperTick:y,curSqrtPrice:Y.current_sqrt_price,fix_amount_a:T,receive_amount:k,coinTypeA:b,coinTypeB:B,clmm_pool:h,use_route:!0,priceSplitPoint:D,removeLiquidity:_==100?G:"",maxLiquidity:v,request_id:Q})}catch(eo){console.log(eo,"e251"),C=await n.Vaults.calculateRemoveSwapAmount({lowerTick:s,upperTick:y,curSqrtPrice:Y.current_sqrt_price,fix_amount_a:T,receive_amount:k,coinTypeA:b,coinTypeB:B,clmm_pool:h,use_route:!1,priceSplitPoint:D,removeLiquidity:_==100?G:"",maxLiquidity:v,request_id:Q})}if(console.log(C,"swapResut###"),C){const eo=oo.get_share_liquidity_by_amount(E,f.balance);x=So.getCoinAmountFromLiquidity(new $(_==100?eo:C.liquidity),new $(Y.current_sqrt_price),P,I,!1),K=oo.get_protocol_fee_amount(E,x.coinA.toString()),to=oo.get_protocol_fee_amount(E,x.coinB.toString()),Z=_==100?f.balance:oo.get_lp_amount_by_liquidity(E,C.liquidity),z=J(x.coinA.toString()).mul(J(1-o.slippage)),L=J(x.coinB.toString()).mul(J(1-o.slippage)),console.log(z.toString(),"##minAmountA"),console.log(L.toString(),"##minAmountA")}}else console.log(G,"#removeLiquidity"),x=So.getCoinAmountFromLiquidity(new $(G),new $(Y.current_sqrt_price),P,I,!1),console.log(x,"#coinAmountscoinAmounts"),Z=o.lpTokenAmount,z=J(x.coinA.toString()).mul(J(1-o.slippage)),L=J(x.coinB.toString()).mul(J(1-o.slippage)),console.log(K,to,"##protocol_fee_amount_b"),console.log(z.toString(),"##minAmountA"),console.log(L.toString(),"##minAmountA"),console.log(o,"params###246");console.log(Z,"lpTokenAmount remove");const F={vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,lp_token_amount:Z,min_amount_a:wo(z,0)||"",min_amount_b:wo(L,0)||"",rewarder_coin_types:[],slippage:o.slippage,farming_pool:w};console.log(F,"##removeParams"),(M||q)&&(F.swapParams={a2b:!T,swap_amount:C==null?void 0:C.swapInAmount,route_obj:C.routeObj});const W=await n.Vaults.remove(F);return t(W)},getAutoPool:R,calculateDepositSwapAmount:async o=>{const{lowerTick:s,upperTick:y,curSqrtPrice:b,fix_amount_a:B,input_amount:k,coinTypeA:h,coinTypeB:P,clmm_pool:I,slippage:T,decimals:j,request_id:D,staking_id:V,shouldRequestStake:r}=o;console.log(o,"params###");let c;try{c=await n.Vaults.calculateDepositSwapAmount({lowerTick:s,upperTick:y,curSqrtPrice:b,fix_amount_a:B,input_amount:k,coinTypeA:h,coinTypeB:P,clmm_pool:I,use_route:!0,priceSplitPoint:T,request_id:D,staking_id:V,shouldRequestStake:r},!0)}catch(a){if(console.log(a,"calculateDepositSwapAmount error"),String(a)=="Error: route unavailable"&&(console.log(a,"e432"),c=await n.Vaults.calculateDepositSwapAmount({lowerTick:s,upperTick:y,curSqrtPrice:b,fix_amount_a:B,input_amount:k,coinTypeA:h,coinTypeB:P,clmm_pool:I,use_route:!1,priceSplitPoint:T,request_id:D,staking_id:V,shouldRequestStake:r},!0)),String(a)=="Error: HaedalStakeSuiAmountError")return"HaedalStakeSuiAmountError"}if(console.log(c,"##swapResut"),c){const a=new e(c.swapOutAmount);return{...c,swapOutAmountLimit:U(a.sub(a.mul(T)).toNumber(),j)}}return c},calculateRemoveSwapAmount:async o=>{const{lowerTick:s,upperTick:y,curSqrtPrice:b,fix_amount_a:B,receiveAmount:k,coinTypeA:h,coinTypeB:P,clmm_pool:I,slippage:T,decimals:j,liquidity:D,maxLiquidity:V,request_id:r}=o;console.log(o,"params###");let c;try{c=await n.Vaults.calculateRemoveSwapAmount({lowerTick:s,upperTick:y,curSqrtPrice:b,fix_amount_a:B,receive_amount:k,coinTypeA:h,coinTypeB:P,clmm_pool:I,use_route:!0,priceSplitPoint:T,removeLiquidity:D,maxLiquidity:V,request_id:r})}catch(a){String(a)=="Error: route unavailable"&&(console.log(a,"e432"),c=await n.Vaults.calculateRemoveSwapAmount({lowerTick:s,upperTick:y,curSqrtPrice:b,fix_amount_a:B,receive_amount:k,coinTypeA:h,coinTypeB:P,clmm_pool:I,use_route:!1,priceSplitPoint:T,removeLiquidity:D,maxLiquidity:V,request_id:r}))}if(console.log(c,"###swapResut calculateRemoveSwapAmount"),c){const a=new e(c.swapOutAmount);return console.log(a.toNumber(),"swapOutAmount.toNumber()"),{...c,swapOutAmountLimit:U(a.sub(a.mul(T)).toNumber(),j)}}return c}}}const Oo=ho("autoPool",{state:()=>({autoPoolList:[],autoPoolObj:{},positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{},currentAutoPoolStatus:"STATUS_RUNNING",slippage:localStorage.getItem("cetus-auto-slippage")||"0.1",autoPoolLoading:!1}),getters:{getPoolStore(){return Lo()}},actions:{async getAutoPoolList(){const g=await yo("Sui").getAutoPools();console.log(g,"list###");const S=this.getPoolStore,m=d.Sui.vaultFilter,{data:n}=await fetch(`${d.Sui.api}/v2/sui/auto_pools`).then(u=>u.json());console.log(n,"data##37");const l=(n==null?void 0:n.pools)||[],N=g.filter(u=>l.some(t=>t.object_id===u.id)),O=d.Sui.haedal.config.support_stakings;console.log("supportStakingsList:",O),console.log(N,"##openPoolList");const R=(m?N:g).map(u=>{const t=S.poolConfigObj[u.pool_id];console.log("autoPoolList map",u,t);const A=[t!=null&&t.needReverse?t==null?void 0:t.coin_b_address:t==null?void 0:t.coin_a_address,t!=null&&t.needReverse?t==null?void 0:t.coin_a_address:t==null?void 0:t.coin_b_address];return t.rewarderInfo.forEach(p=>{p.emissionsEveryDay>0&&A.push(p.coinAddress)}),t.stable_farming.stable_rewarder.forEach(p=>{p.amount_second>0&&A.push(p.coin)}),{...t,id:u.id,lp_token_type:u.lp_token_type,autoPoolPositionInfo:u.position,is_pause:u.is_pause,total_supply:u.total_supply,liquidity:u.liquidity,protocol_fee_rate:u.protocol_fee_rate,max_quota:u.max_quota,staking_id:u.staking_id,quota_based_type:fo(u.quota_based_type).full_address,supportHaedalStake:O.filter(p=>p.staking_id==u.staking_id).length>0,isTokenA:t.needReverse?t.coin_b_address=="0000000000000000000000000000000000000000000000000000000000000002::sui::SUI":t.coin_a_address=="0000000000000000000000000000000000000000000000000000000000000002::sui::SUI",rewardList:Array.from(new Set(A))}});this.autoPoolList=R,this.autoPoolObj=Object.fromEntries(R.map((u,t)=>[u.address,u])),this.getMyAutoPoolPosition(),console.log(R,"##autoPoolList")},async getMyAutoPoolPosition(){var l,N,O,R;const i=yo("Sui"),g=this.autoPoolList,S=bo("Sui"),m=[],{RATES:n}=this.getPoolStore;for(let u=0;u<g.length;u++){const t=g[u];console.log(t,"poolINfo###");const A=await S.getPool(t.address),p=await i.getLpBalance(g[u].lp_token_type);console.log(p,"balance##");const X=(await S.getTokenListByCoinType([g[u].lp_token_type]))[0];console.log(X,"lpInfo##");const io=((l=n[t.coinA.address])==null?void 0:l.price)||"",H=((N=n[t.coinB.address])==null?void 0:N.price)||"",o=t.autoPoolPositionInfo.tick_lower_index,s=t.autoPoolPositionInfo.tick_upper_index,y=Number(p)>0?oo.get_share_liquidity_by_amount({liquidity:t==null?void 0:t.liquidity,total_supply:t==null?void 0:t.total_supply},p):0,b={tick_lower_index:o,tick_upper_index:s,current_sqrt_price:A==null?void 0:A.current_sqrt_price,liquidity:y};console.log(t,"poolInfo##94");const B=await S.getCoinAmountFromLiquidity({pool:{...t,current_sqrt_price:A==null?void 0:A.current_sqrt_price},position:b,roundUp:!1});console.log(B,"##amountInfo");const k=B.coinaAmount,h=B.coinbAmount,P=k,I=h,T=t.coinA.decimals,j=t.coinB.decimals,D=S.TickMath.tickIndexToPrice(Number(o),T,j).toString(),V=S.TickMath.tickIndexToPrice(Number(s),T,j).toString(),r=new e(io).mul(new e(k)).toNumber(),c=new e(H).mul(new e(h)).toNumber(),a=r>0&&r<.01?"<$0.01":`$${go(U(r,2))}`,M=c>0&&c<.01?"<$0.01":`$${go(U(c,2))}`,q=Ao.sqrtPriceX64ToPrice(A.current_sqrt_price,T,j),_=await S.getCoinAmountFromLiquidity({pool:{...t,tick_lower_index:o,tick_upper_index:s,current_sqrt_price:A==null?void 0:A.current_sqrt_price},position:{...b,liquidity:t.liquidity},roundUp:!1}),f=new e(_.coinaAmount).toNumber(),v=new e(_.coinbAmount).toNumber();console.log(f,v,q.toString(),"###116");const Q=U(new e(f).mul(new e(io)).toNumber(),2),w=U(new e(v).mul(new e(H)).toNumber(),2);console.log(A,"newPool##"),console.log(f,v,io,H,Number(Q)+Number(w),"###poolCoinBNum");const{ratioA:E,ratioB:Y}=oo.calculateDepositRatio(o,s,new $.BN(A==null?void 0:A.current_sqrt_price));console.log(E,Y.toString(),"###139");const C=E.mul(100).toNumber().toFixed(0),x=100-Number(C);console.log(f,v,C,x,"###147");let K=0;Number(p)>0&&(K=new e(p).div(Math.pow(10,X.decimals)));const to=new e(r).add(new e(c)).toNumber(),Z=io&&H?to>0&&to<.01?"<0.01":U(new e(r).add(new e(c)).toString(),2):"--",z=t.total_supply;let L=0;K>0&&z>0&&(L=new e(K).mul(Math.pow(10,X.decimals)).div(new e(z)).mul(100).toNumber()),console.log(L,"##myShare");const G=new e(1).div(Math.pow(10,t.decimals)).toNumber();let F=0;if(L>1)F=U(L,2);else if(L>0&&L<G)F=`<${G}`;else if(L==0)F=0;else{const ro=qo(L),_o=ro==-1?2:ro+2;F=U(L,_o)}console.log(p,K.toString(),"###balance");const W=(await S.getTokenListByCoinType([t.quota_based_type]))[0],eo=ao(t.max_quota,W.decimals);console.log(t.quota_based_type,W,eo,"##quoteCoinInfo");const uo=W.address==t.coin_b_address,co=uo?new e(_.coinaAmount).mul(t.price).add(_.coinbAmount):new e(_.coinaAmount).mul(1/t.price).add(_.coinbAmount),po=((O=n[W.address])==null?void 0:O.price)||"",no=co.mul(new e(po)).toNumber();console.log(uo,no,"#isQuotaCoin");const so=eo,mo=uo?new e(_.coinaAmount).mul(t.price).add(_.coinbAmount):new e(_.coinaAmount).mul(1/t.price).add(_.coinbAmount),lo=new e(so).sub(mo).mul(H).toNumber();console.log(lo,"remainingTokenUSD##"),console.log(co.toNumber(),"#poolTokenNum"),this.positionInfoObj[t.id]={tick_lower_index:o,tick_upper_index:s,current_sqrt_price:A.current_sqrt_price,myLiquidity:ao(p,X.decimals),amountA:P,amountB:I,...t,lpInfo:X,myAmountAUSD:a,myAmountBUSD:M,myLiquidityUSD:Z,myShare:F,minPrice:D,maxPrice:V,poolCoinARatio:C,poolCoinBRatio:x,poolCoinANum:f,poolCoinBNum:v,poolCoinAUSD:Q,poolCoinBUSD:w,quoteUSD:so,poolUSD:no,balance:p,quoteCoinInfo:W,remainingTokenUSD:lo,currentDeposit:no,positionLiquidity:y},m.push({tick_lower_index:o,tick_upper_index:s,current_sqrt_price:(R=t==null?void 0:t.object)==null?void 0:R.current_sqrt_price,myLiquidity:ao(p,X.decimals),amountA:P,amountB:I,...t,lpInfo:X,myAmountAUSD:a,myAmountBUSD:M,myLiquidityUSD:Z,myShare:F,minPrice:D,maxPrice:V,poolCoinARatio:C,poolCoinBRatio:x,poolCoinANum:f,poolCoinBNum:v,poolCoinAUSD:Q,poolCoinBUSD:w,quoteUSD:so,poolUSD:no,balance:p})}this.positionInfoList=m,console.log(this.positionInfoObj,"this.positionInfoObj###"),console.log(this.positionInfoList,"###this.positionInfoList")},async updatePositionItem(i){var co,po,no,so,mo,lo,ro;const g=yo("Sui"),S=bo("Sui"),m=await g.getAutoPool(i),n=await S.getPool(m.pool_id);console.log("newPoolInfo:",m),console.log("newPool:",n),console.log("this.positionInfoObj[id]:",this.positionInfoObj[i]);const l={...this.positionInfoObj[i],autoPoolPositionInfo:m.position,...n},N=await g.getLpBalance(l.lp_token_type);console.log(N,"updatePositionItem lp balance");const O=(await S.getTokenListByCoinType([l.lp_token_type]))[0];console.log(N,"###balance updatePositionItem");const R=l.autoPoolPositionInfo.tick_lower_index,u=l.autoPoolPositionInfo.tick_upper_index;let t;m.total_supply==0?t=0:t=oo.get_share_liquidity_by_amount(m,String(N)),console.log(t,"##liquidity");const A={tick_lower_index:R,tick_upper_index:u,current_sqrt_price:n.current_sqrt_price,liquidity:t},p=S.getCoinAmountFromLiquidity({pool:{current_sqrt_price:n.current_sqrt_price,...l},position:A,roundUp:!1}),X=p.coinaAmount,io=p.coinbAmount,{RATES:H}=this.getPoolStore,o=m.total_supply,s=Ao.sqrtPriceX64ToPrice(n.current_sqrt_price,(co=l==null?void 0:l.coinA)==null?void 0:co.decimals,(po=l==null?void 0:l.coinB)==null?void 0:po.decimals),y=2,b=2,B=((so=H[(no=l==null?void 0:l.coinA)==null?void 0:no.address])==null?void 0:so.price)||0,k=((lo=H[(mo=l==null?void 0:l.coinB)==null?void 0:mo.address])==null?void 0:lo.price)||0,h=new e(B).mul(new e(p==null?void 0:p.coinaAmount)).toNumber(),P=new e(k).mul(new e(p==null?void 0:p.coinbAmount)).toNumber(),I=h>0&&h<.01?"<$0.01":`$${go(U(h,2))}`,T=P>0&&P<.01?"<$0.01":`$${go(U(P,2))}`;let j=new e(0);Number(N)>0&&(j=new e(N).div(Math.pow(10,O==null?void 0:O.decimals)));const D=new e(h).add(new e(P)).toNumber(),V=B&&k?D>0&&D<.01?"<0.01":U(new e(h).add(new e(P)).toString(),2):"--";let r=0;j.toNumber()>0&&o>0&&(r=new e(j).mul(Math.pow(10,O.decimals)).div(new e(o)).mul(100).toNumber()),console.log(r,"##myShare");const c=new e(1).div(Math.pow(10,l.decimals)).toNumber();let a=0;if(r>1)a=U(r,2);else if(r>0&&r<c)a=`<${c}`;else if(r==0)a=0;else{const _o=qo(r),ko=_o==-1?2:_o+2;a=U(r,ko)}const M=Ao.sqrtPriceX64ToPrice(n.current_sqrt_price,y,b),q=await S.getCoinAmountFromLiquidity({pool:{...l,tick_lower_index:R,tick_upper_index:u,current_sqrt_price:n==null?void 0:n.current_sqrt_price},position:{...A,liquidity:m.liquidity},roundUp:!1}),_=new e(q.coinaAmount).toNumber(),f=new e(q.coinbAmount).toNumber();console.log(_,f,M.toString(),"###116");const v=U(new e(_).mul(new e(B)).toNumber(),2),Q=U(new e(f).mul(new e(k)).toNumber(),2);console.log(n,"newPool##"),console.log(_,f,B,k,Number(v)+Number(Q),"###poolCoinBNum");const{ratioA:w,ratioB:E}=oo.calculateDepositRatio(R,u,new $.BN(n==null?void 0:n.current_sqrt_price));console.log(w,E.toString(),"###139");const Y=w.mul(100).toNumber().toFixed(0),C=100-Number(Y),x=(await S.getTokenListByCoinType([m.quota_based_type]))[0],K=ao(m.max_quota,x.decimals);console.log(m.quota_based_type,x,K,"##quoteCoinInfo");const to=x.address==l.coin_b_address,Z=to?new e(q.coinaAmount).mul(l.price).add(q.coinbAmount):new e(q.coinaAmount).mul(1/l.price).add(q.coinbAmount),z=((ro=H[x.address])==null?void 0:ro.price)||"",L=Z.mul(new e(z)).toNumber(),G=K,F=to?new e(q.coinaAmount).mul(l.price).add(q.coinbAmount):new e(q.coinaAmount).mul(1/l.price).add(q.coinbAmount),W=new e(G).sub(F).mul(k).toNumber();console.log(W,"remainingTokenUSD##");const eo=S.TickMath.tickIndexToPrice(Number(R),y,b).toString(),uo=S.TickMath.tickIndexToPrice(Number(u),y,b).toString();this.positionInfoObj[i]={...l,tick_lower_index:R,tick_upper_index:u,current_sqrt_price:n.current_sqrt_price,myLiquidity:ao(N,O==null?void 0:O.decimals),amountA:X,amountB:io,myShare:a,myAmountAUSD:I,myAmountBUSD:T,myLiquidityUSD:V,poolCoinARatio:Y,poolCoinBRatio:C,poolCoinANum:_,poolCoinBNum:f,poolCoinAUSD:v,poolCoinBUSD:Q,quoteUSD:G,balance:N,price:s,quoteCoinInfo:x,remainingTokenUSD:W,currentDeposit:L,poolUSD:L,positionLiquidity:t,liquidity:m==null?void 0:m.liquidity,minPrice:eo,maxPrice:uo},this.autoPoolLoading=!1,console.log(this.positionInfoObj[i],"###this.positionInfoObj[id]")},async getAutoPoolAPY(){try{const{data:i}=await fetch(`${d.Sui.api}/v2/sui/auto_pools`).then(g=>g.json());i&&i.pools&&i.pools.length>0&&(this.apyObj=Object.fromEntries(i.pools.map((g,S)=>[g.object_id,{...g,apr:g.apr.replace("%","")>0&&g.apr.replace("%","")<.01?"<0.01%":U(g.apr.replace("%",""),2)+"%",resultApr:g.apr.replace("%","")}])),console.log(this.apyObj,"data##"))}catch{this.apyObj={}}},async getVault(i,g){const S=yo("Sui");g||(this.autoPoolLoading=!0);const{status:m}=await S.getVault(i);this.currentAutoPoolStatus=m,this.updatePositionItem(i),console.log(m,"status##")},setSlippage(i){console.log(i,"slippage##"),this.slippage=i,localStorage.setItem("cetus-auto-slippage",i)},logout(){this.positionInfoObj={},this.positionInfoList=[],this.positionUSDObj={}}}});export{yo as a,Oo as u};
