import{a6 as yo,l as wo,T as Ao,a7 as go}from"./entry.2d67ce8e.js";import{c as w,a as So,b as X}from"./sha256.72e94f94.js";import{H as qo,C as io,I as z,f as ro,u as fo,b as ao,a as eo,s as U,T as so,i as bo,p as uo,J as ko}from"./pool.cf5dc5d9.js";import{C as Po,V as G}from"./index.222d21ed.js";import{D as t}from"./decimal.0e8aa3f1.js";function no(n){const l={launchpad:w[n||"Sui"].launchpad,ido:w[n||"Sui"].ido,xcetus:w[n||"Sui"].xcetus,xcetus_dividends:w[n||"Sui"].xcetus_dividends,cetus_faucet:w[n||"Sui"].cetus_faucet,xtoken:w[n||"Sui"].xtoken,xtoken_dividends:w[n||"Sui"].xtoken_dividends,token_faucet:w[n||"Sui"].token_faucet,booster:w[n||"Sui"].booster,maker_bonus:w[n||"Sui"].maker_bonus,liquidity_stratefy:w[n||"Sui"].liquidity_stratefy,vaults:w[n||"Sui"].vaults},m={fullRpcUrl:localStorage.getItem(`${n}-currentRpclocal2`)||w[n||"Sui"].fullRpcUrl,simulationAccount:w[n||"Sui"].simulationAccount,cetus_config:w[n||"Sui"].cetus_config,clmm_pool:w[n||"Sui"].clmm_pool,integrate:w[n||"Sui"].integrate,deepbook:w[n||"Sui"].deepbook,deepbook_endpoint_v2:w[n||"Sui"].deepbook_endpoint_v2,aggregatorUrl:w[n||"Sui"].aggregatorUrl},u=new qo(m),e=yo(new Po(l,u)),p=So(),D=wo(()=>p);Ao(()=>{D.value.address&&(u.senderAddress=D.value.address)});const H=async()=>{console.log(e,"sdk###");const o=await e.Vaults.getVaultList();return o&&o.data||[]},I=async o=>await e.Vaults.getVault(o),i=async o=>{if(console.log(o,"###coinType"),u.senderAddress){const r=await e.ClmmSDK.fullClient.getBalance({owner:u.senderAddress,coinType:o});return r&&r.totalBalance}else return 0},c=o=>({transactionBlock:o,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:H,getLpBalance:i,getVault:async o=>{const r=await e.Vaults.getVault(o);return console.log(r,"vault##292"),r},deposit:async o=>{const{lowerTick:r,upperTick:k,slippage:q,rewarder_coin_types:B,isOnlyA:x,isOnlyB:h,currentTickIndex:f}=o;console.log(o,"params###");let d=o.fix_amount_a,y,a,A;if(x||h){const g=await e.Vaults.calculateDepositSwapAmount({lowerTick:r,upperTick:k,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool});console.log(g,"swapResut##211"),g?(y=new X(g.swapOutAmount),a=new X(g.afterSqrtPrice),A={swap_amount:g.swapInAmount,a2b:d},d=!d):(a=new X(o.curSqrtPrice),y=new X(o.coinAmount))}else a=o.curSqrtPrice,y=new X(o.coinAmount);let R,j,T;console.log(r,f,k,"####138"),f>=r&&f<=k?(R=io.estLiquidityAndcoinAmountFromOneAmounts(r,k,y,d,!0,q,a),j=d?y.toString():R.tokenMaxA.toString(),T=d?R.tokenMaxB.toString():y.toString()):f<r?(j=y.toNumber(),T=0):f>k&&(j=0,T=y.toNumber()),console.log({vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:j,amount_b:T,fix_amount_a:d,slippage:q,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,rewarder_coin_types:[],swapParams:A},"params171");const N=await e.Vaults.deposit({vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:j,amount_b:T,fix_amount_a:d,slippage:q,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,rewarder_coin_types:[],swapParams:A});return c(N)},remove:async o=>{const{lowerTick:r,upperTick:k,coinTypeA:q,coinTypeB:B,receiveAmount:x,clmm_pool:h,lowerSqrtPrice:f,upperSqrtPrice:d,fix_amount_a:y,curSqrtPrice:a,slippage:A,rewarder_coin_types:R,id:j,liquidity:T,swapParams:N,isOnlyA:g,isOnlyB:L,sliderVal:P,positionInfo:_}=o;console.log(P,"sliderVal##");const S=await I(j),J=await u.Pool.getPool(S.pool_id);let O,b,Q,K,v,M,C;if(console.log(x,"##receiveAmount"),g||L){if(O=await e.Vaults.calculateRemoveSwapAmount({lowerTick:r,upperTick:k,curSqrtPrice:J.current_sqrt_price,fix_amount_a:y,receive_amount:x,coinTypeA:q,coinTypeB:B,clmm_pool:h}),console.log(O,"swapResut###"),O){const Z=G.get_share_liquidity_by_amount(S,_.balance);b=io.getCoinAmountFromLiquidity(new X(P==100?Z:O.liquidity),new X(J.current_sqrt_price),f,d,!1),Q=G.get_protocol_fee_amount(S,b.coinA.toString()),K=G.get_protocol_fee_amount(S,b.coinB.toString()),v=P==100?_.balance:G.get_lp_amount_by_liquidity(S,O.liquidity),M=z(b.coinA.toString()).mul(z(1-o.slippage)),C=z(b.coinB.toString()).mul(z(1-o.slippage)),console.log(M.toString(),"##minAmountA"),console.log(C.toString(),"##minAmountA")}}else b=io.getCoinAmountFromLiquidity(new X(T),a,f,d,!1),Q=G.get_protocol_fee_amount(S,b.coinA.toString()),K=G.get_protocol_fee_amount(S,b.coinB.toString()),v=o.lpTokenAmount,M=z(b.coinA.toString()).mul(z(1-o.slippage)),C=z(b.coinB.toString()).mul(z(1-o.slippage)),console.log(Q,K,"##protocol_fee_amount_b");console.log(v,"lpTokenAmount remove");const W={vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,lp_token_amount:v,min_amount_a:ro(M,0)||"",min_amount_b:ro(C,0)||"",rewarder_coin_types:[]};console.log(W,"##removeParams"),(g||L)&&(W.swapParams={a2b:!y,swap_amount:O==null?void 0:O.swapInAmount});const Y=await e.Vaults.remove(W);return c(Y)},getAutoPool:I,calculateDepositSwapAmount:async o=>{const{lowerTick:r,upperTick:k,curSqrtPrice:q,fix_amount_a:B,input_amount:x,coinTypeA:h,coinTypeB:f,clmm_pool:d,slippage:y}=o;console.log(o,"params###");const a=await e.Vaults.calculateDepositSwapAmount({lowerTick:r,upperTick:k,curSqrtPrice:q,fix_amount_a:B,input_amount:x,coinTypeA:h,coinTypeB:f,clmm_pool:d});console.log(a,"##swapResut");const A=new t(a.swapOutAmount);return{...a,swapOutAmount:A.sub(A.mul(y)).toNumber()}},calculateRemoveSwapAmount:async o=>{const{lowerTick:r,upperTick:k,curSqrtPrice:q,fix_amount_a:B,receiveAmount:x,coinTypeA:h,coinTypeB:f,clmm_pool:d,slippage:y}=o;console.log(o,"params###");const a=await e.Vaults.calculateRemoveSwapAmount({lowerTick:r,upperTick:k,curSqrtPrice:q,fix_amount_a:B,receive_amount:x,coinTypeA:h,coinTypeB:f,clmm_pool:d});console.log(a,"###swapResut");const A=new t(a.swapOutAmount);return{...a,swapOutAmount:A.sub(A.mul(y)).toNumber()}}}}const Lo=go("autoPool",{state:()=>({autoPoolList:[],autoPoolObj:{},positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{},currentAutoPoolStatus:"STATUS_RUNNING"}),getters:{getPoolStore(){return fo()}},actions:{async getAutoPoolList(){const l=await no("Sui").getAutoPools();console.log(l,"list###");const m=this.getPoolStore,u=l.map(e=>({...m.poolConfigObj[e.pool_id],id:e.id,lp_token_type:e.lp_token_type,autoPoolPositionInfo:e.positins[0],is_pause:e.is_pause,total_supply:e.total_supply,liquidity:e.liquidity,protocol_fee_rate:e.protocol_fee_rate,max_liquidity_quota:e.max_liquidity_quota}));this.autoPoolList=u,this.autoPoolObj=Object.fromEntries(u.map((e,p)=>[e.address,e])),this.getMyAutoPoolPosition(),console.log(u,"##autoPoolList")},async getMyAutoPoolPosition(){var p,D,H;const n=no("Sui"),l=this.autoPoolList,m=ao("Sui"),u=[],{RATES:e}=this.getPoolStore;for(let I=0;I<l.length;I++){const i=l[I];console.log(i,"poolINfo###");const c=await m.getPool(i.address),s=await n.getLpBalance(l[I].lp_token_type);console.log(s,"balance##");const V=(await m.getTokenListByCoinType([l[I].lp_token_type]))[0];console.log(V,"lpInfo##");const E=((p=e[i.coinA.address])==null?void 0:p.price)||"",F=((D=e[i.coinB.address])==null?void 0:D.price)||"",$=i.autoPoolPositionInfo.tick_lower_index,o=i.autoPoolPositionInfo.tick_upper_index,r={tick_lower_index:$,tick_upper_index:o,current_sqrt_price:c==null?void 0:c.current_sqrt_price,liquidity:Number(s)>0?G.get_share_liquidity_by_amount({liquidity:i==null?void 0:i.liquidity,total_supply:i==null?void 0:i.total_supply},s):0},k=await m.getCoinAmountFromLiquidity({pool:{...i,current_sqrt_price:c==null?void 0:c.current_sqrt_price},position:r,roundUp:!1});console.log(k,"##amountInfo");const q=k.coinaAmount,B=k.coinbAmount,x=q,h=B,f=i.coinA.decimals,d=i.coinB.decimals,y=m.TickMath.tickIndexToPrice(Number($),f,d).toString(),a=m.TickMath.tickIndexToPrice(Number(o),f,d).toString(),A=new t(E).mul(new t(q)).toNumber(),R=new t(F).mul(new t(B)).toNumber(),j=A>0&&A<.01?"<$0.01":`$${eo(U(A,2))}`,T=R>0&&R<.01?"<$0.01":`$${eo(U(R,2))}`,N=so.sqrtPriceX64ToPrice(c.current_sqrt_price,f,d);let g,L;const P=await m.getCoinAmountFromLiquidity({pool:{...i,tick_lower_index:$,tick_upper_index:o,current_sqrt_price:c==null?void 0:c.current_sqrt_price},position:{...r,liquidity:i.liquidity},roundUp:!1}),_=new t(P.coinaAmount).toNumber(),S=new t(P.coinbAmount).toNumber();console.log(_,S,N.toString(),"###116");const J=U(new t(_).mul(new t(E)).toNumber(),2),O=U(new t(S).mul(new t(F)).toNumber(),2);if(console.log(c,"newPool##"),console.log(_,S,"###131"),_>0&&S>0){const oo=new t(_).mul(N).add(new t(S));g=new t(_).mul(N).div(oo).mul(100).toNumber().toFixed(2),L=new t(S).div(oo).mul(100).toNumber().toFixed(2)}else _>0?(g=100,L=0):S>0?(g=0,L=100):(g=50,L=50);console.log(_,S,g,L,"###147");let b=0;Number(s)>0&&(b=new t(s).div(Math.pow(10,V.decimals)));const Q=E&&F?U(new t(A).add(new t(R)).toString(),2):"",K=i.total_supply;let v=0;b>0&&K>0&&(v=new t(b).mul(Math.pow(10,V.decimals)).div(new t(K)).mul(100).toNumber()),console.log(v,"##myShare");const M=new t(1).div(Math.pow(10,i.decimals)).toNumber();let C=0;if(v>1)C=U(v,2);else if(v>0&&v<M)C=`<${M}`;else if(v==0)C=0;else{const oo=bo(v),mo=oo==-1?2:oo+2;C=U(v,mo)}console.log(s,b.toString(),"###balance");const W={tick_lower_index:$,tick_upper_index:o,current_sqrt_price:c==null?void 0:c.current_sqrt_price,liquidity:i.max_liquidity_quota},Y=await m.getCoinAmountFromLiquidity({pool:{...i,current_sqrt_price:c==null?void 0:c.current_sqrt_price},position:W,roundUp:!1}),Z=new t(E).mul(new t(Y.coinaAmount)),to=new t(F).mul(new t(Y.coinbAmount)),po=new t(E).mul(new t(P.coinaAmount)),_o=new t(F).mul(new t(P.coinbAmount)),co=Z.add(to).toNumber(),lo=po.add(_o).toNumber();this.positionInfoObj[i.id]={tick_lower_index:$,tick_upper_index:o,current_sqrt_price:c.current_sqrt_price,myLiquidity:uo(s,V.decimals),amountA:x,amountB:h,...i,lpInfo:V,myAmountAUSD:j,myAmountBUSD:T,myLiquidityUSD:Q,myShare:C,minPrice:y,maxPrice:a,poolCoinARatio:g,poolCoinBRatio:L,poolCoinANum:_,poolCoinBNum:S,poolCoinAUSD:J,poolCoinBUSD:O,quoteUSD:co,poolUSD:lo,balance:s},u.push({tick_lower_index:$,tick_upper_index:o,current_sqrt_price:(H=i==null?void 0:i.object)==null?void 0:H.current_sqrt_price,myLiquidity:uo(s,V.decimals),amountA:x,amountB:h,...i,lpInfo:V,myAmountAUSD:j,myAmountBUSD:T,myLiquidityUSD:Q,myShare:C,minPrice:y,maxPrice:a,poolCoinARatio:g,poolCoinBRatio:L,poolCoinANum:_,poolCoinBNum:S,poolCoinAUSD:J,poolCoinBUSD:O,quoteUSD:co,poolUSD:lo,balance:s})}this.positionInfoList=u,console.log(this.positionInfoObj,"this.positionInfoObj###"),console.log(this.positionInfoList,"###this.positionInfoList")},async updatePositionItem(n){var Y,Z;const l=no("Sui"),m=ao("Sui"),u=await l.getAutoPool(n),e=await m.getPool(u.pool_id);console.log("newPoolInfo:",u),console.log("newPool:",e),console.log("this.positionInfoObj[id]:",this.positionInfoObj[n]);const p={...this.positionInfoObj[n],autoPoolPositionInfo:u.positins[0]},D=await l.getLpBalance(p.lp_token_type),H=(await m.getTokenListByCoinType([p.lp_token_type]))[0];console.log(D,"###balance updatePositionItem");const I=p.autoPoolPositionInfo.tick_lower_index,i=p.autoPoolPositionInfo.tick_upper_index,c={tick_lower_index:I,tick_upper_index:i,current_sqrt_price:e.current_sqrt_price,liquidity:G.get_share_liquidity_by_amount({liquidity:u==null?void 0:u.liquidity,total_supply:u==null?void 0:u.total_supply},D)},s=m.getCoinAmountFromLiquidity({pool:{current_sqrt_price:e.current_sqrt_price,...p},position:c,roundUp:!1});console.log(s,"amountInfo###"),s.coinaAmount,s.coinbAmount;const V=s.coinaAmount,E=s.coinbAmount,{RATES:F}=this.getPoolStore,$=u.total_supply,o=so.sqrtPriceX64ToPrice(e.current_sqrt_price,p.coinA.decimals,p.coinB.decimals),r=2,k=2,q=((Y=F[p.coinA.address])==null?void 0:Y.price)||0,B=((Z=F[p.coinB.address])==null?void 0:Z.price)||0,x=new t(q).mul(new t(s==null?void 0:s.coinaAmount)).toNumber(),h=new t(B).mul(new t(s==null?void 0:s.coinbAmount)).toNumber(),f=x>0&&x<.01?"<$0.01":`$${eo(U(x,2))}`,d=h>0&&h<.01?"<$0.01":`$${eo(U(h,2))}`;let y=new t(0);Number(D)>0&&(y=new t(D).div(Math.pow(10,H.decimals)));const a=new t(y).mul(Math.pow(10,p.lpInfo.decimals)).div(new t($)).mul(100).toNumber();let A=0;const R=new t(1).div(Math.pow(10,p.decimals)).toNumber(),j=q&&B?U(new t(x).add(new t(h)).toString(),2):"";console.log(q,B,s==null?void 0:s.coinaAmount,s==null?void 0:s.coinbAmount,"myLiquidityUSD###"),a>1?A=U(a,2):a>0&&a<R?A=`<${R}`:A=ko(a,1);let T,N;const g=so.sqrtPriceX64ToPrice(e.current_sqrt_price,r,k),L=await m.getCoinAmountFromLiquidity({pool:{...p,tick_lower_index:I,tick_upper_index:i,current_sqrt_price:e==null?void 0:e.current_sqrt_price},position:{...c,liquidity:u.liquidity},roundUp:!1}),P=new t(L.coinaAmount).toNumber(),_=new t(L.coinbAmount).toNumber();console.log(P,_,g.toString(),"###116");const S=U(new t(P).mul(new t(q)).toNumber(),2),J=U(new t(_).mul(new t(B)).toNumber(),2);if(console.log(e,"newPool##"),console.log(P,_,"###poolCoinBNum"),P>0&&_>0){const to=new t(P).mul(g).add(new t(_));T=new t(P).mul(g).div(to).mul(100).toNumber().toFixed(2),N=new t(_).div(to).mul(100).toNumber().toFixed(2)}else P>0?(T=100,N=0):_>0?(T=0,N=100):(T=50,N=50);const O={tick_lower_index:I,tick_upper_index:i,current_sqrt_price:e==null?void 0:e.current_sqrt_price,liquidity:p.max_liquidity_quota},b=await m.getCoinAmountFromLiquidity({pool:{...p,current_sqrt_price:e==null?void 0:e.current_sqrt_price},position:O,roundUp:!1}),Q=new t(q).mul(new t(b.coinaAmount)),K=new t(B).mul(new t(b.coinbAmount)),v=new t(q).mul(new t(L.coinaAmount)),M=new t(B).mul(new t(L.coinbAmount)),C=Q.add(K).toNumber(),W=v.add(M).toNumber();this.positionInfoObj[n]={...p,tick_lower_index:I,tick_upper_index:i,current_sqrt_price:e.current_sqrt_price,myLiquidity:uo(D,H.decimals),amountA:V,amountB:E,myShare:A,myAmountAUSD:f,myAmountBUSD:d,myLiquidityUSD:j,poolCoinARatio:T,poolCoinBRatio:N,poolCoinANum:P,poolCoinBNum:_,poolCoinAUSD:S,poolCoinBUSD:J,quoteUSD:C,poolUSD:W,balance:D,price:o},console.log(this.positionInfoObj[n],"###this.positionInfoObj[id]")},async getAutoPoolAPY(){try{const{data:n}=await fetch(`${w.Sui.api}/v2/sui/auto_pools`).then(l=>l.json());n&&n.pools&&n.pools.length>0&&(this.apyObj=Object.fromEntries(n.pools.map((l,m)=>[l.object_id,{...l,apr:l.apr.replace("%","")>0&&l.apr.replace("%","")<.01?"<0.01%":U(l.apr.replace("%",""),2)+"%",resultApr:l.apr.replace("%","")}])),console.log(this.apyObj,"data##"))}catch{this.apyObj={}}},async getVault(n){const l=no("Sui"),{status:m}=await l.getVault(n);this.currentAutoPoolStatus=m,this.updatePositionItem(n),console.log(m,"status##")}}});export{no as a,Lo as u};
