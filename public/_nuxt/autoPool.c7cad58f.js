import{a6 as yo,l as wo,T as Ao,a7 as go}from"./entry.675cf4fd.js";import{c as d,a as So,b as G}from"./sha256.ee9044af.js";import{H as qo,C as eo,I as H,f as uo,u as fo,b as lo,a as oo,s as C,T as ro,J as ao,p as io}from"./pool.b1feead7.js";import{C as bo,V as J}from"./index.e17c4065.js";import{D as t}from"./decimal.0e8aa3f1.js";function to(i){const r={launchpad:d[i||"Sui"].launchpad,ido:d[i||"Sui"].ido,xcetus:d[i||"Sui"].xcetus,xcetus_dividends:d[i||"Sui"].xcetus_dividends,cetus_faucet:d[i||"Sui"].cetus_faucet,xtoken:d[i||"Sui"].xtoken,xtoken_dividends:d[i||"Sui"].xtoken_dividends,token_faucet:d[i||"Sui"].token_faucet,booster:d[i||"Sui"].booster,maker_bonus:d[i||"Sui"].maker_bonus,liquidity_stratefy:d[i||"Sui"].liquidity_stratefy,vaults:d[i||"Sui"].vaults},m={fullRpcUrl:localStorage.getItem(`${i}-currentRpclocal2`)||d[i||"Sui"].fullRpcUrl,simulationAccount:d[i||"Sui"].simulationAccount,cetus_config:d[i||"Sui"].cetus_config,clmm_pool:d[i||"Sui"].clmm_pool,integrate:d[i||"Sui"].integrate,deepbook:d[i||"Sui"].deepbook,deepbook_endpoint_v2:d[i||"Sui"].deepbook_endpoint_v2,aggregatorUrl:d[i||"Sui"].aggregatorUrl},c=new qo(m),e=yo(new bo(r,c)),y=So(),D=wo(()=>y);Ao(()=>{D.value.address&&(c.senderAddress=D.value.address)});const W=async()=>{console.log(e,"sdk###");const o=await e.Vaults.getVaultList();return o&&o.data||[]},U=async o=>await e.Vaults.getVault(o),n=async o=>{if(console.log(o,"###coinType"),c.senderAddress){const a=await e.ClmmSDK.fullClient.getBalance({owner:c.senderAddress,coinType:o});return a&&a.totalBalance}else return 0},u=o=>({transactionBlock:o,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:W,getLpBalance:n,getVault:async o=>{const a=await e.Vaults.getVault(o);return console.log(a,"vault##292"),a},deposit:async o=>{const{lowerTick:a,upperTick:p,slippage:g,rewarder_coin_types:v,isOnlyA:k,isOnlyB:R,currentTickIndex:q}=o;console.log(o,"params###");let _=o.fix_amount_a,l,h,O;if(k||R){const w=await e.Vaults.calculateDepositSwapAmount({lowerTick:a,upperTick:p,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool});console.log(w,"swapResut##211"),w?(l=new G(w.swapOutAmount),h=new G(o.curSqrtPrice),O={swap_amount:w.swapInAmount,a2b:_},_=!_):(h=new G(o.curSqrtPrice),l=new G(o.coinAmount))}else h=o.curSqrtPrice,l=new G(o.coinAmount);let j,P,x;console.log(a,q,p,"####138"),q>=a&&q<=p?(j=eo.estLiquidityAndcoinAmountFromOneAmounts(a,p,l,_,!0,g,h),P=_?l.toString():j.tokenMaxA.toString(),x=_?j.tokenMaxB.toString():l.toString()):q<a?(P=l.toNumber(),x=0):q>p&&(P=0,x=l.toNumber()),console.log({vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:P,amount_b:x,fix_amount_a:_,slippage:g,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,rewarder_coin_types:[],swapParams:O},"params171");const V=await e.Vaults.deposit({vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:P,amount_b:x,fix_amount_a:_,slippage:g,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,rewarder_coin_types:[],swapParams:O});return u(V)},remove:async o=>{const{lowerTick:a,upperTick:p,coinTypeA:g,coinTypeB:v,receiveAmount:k,clmm_pool:R,lowerSqrtPrice:q,upperSqrtPrice:_,fix_amount_a:l,curSqrtPrice:h,slippage:O,rewarder_coin_types:j,id:P,liquidity:x,swapParams:V,isOnlyA:w,isOnlyB:S,sliderVal:f,positionInfo:B}=o;console.log(f,"sliderVal##");const A=await U(P),Y=await c.Pool.getPool(A.pool_id);let L,b,Q,K,T,M,I;if(console.log(k,"##receiveAmount"),w||S){if(L=await e.Vaults.calculateRemoveSwapAmount({lowerTick:a,upperTick:p,curSqrtPrice:Y.current_sqrt_price,fix_amount_a:l,receive_amount:k,coinTypeA:g,coinTypeB:v,clmm_pool:R}),console.log(L,"swapResut###"),L){const Z=J.get_share_liquidity_by_amount(A,B.balance);b=eo.getCoinAmountFromLiquidity(new G(f==100?Z:L.liquidity),new G(Y.current_sqrt_price),q,_,!1),Q=J.get_protocol_fee_amount(A,b.coinA.toString()),K=J.get_protocol_fee_amount(A,b.coinB.toString()),T=f==100?B.balance:J.get_lp_amount_by_liquidity(A,L.liquidity),M=H(b.coinA.toString()).mul(H(1-o.slippage)),I=H(b.coinB.toString()).mul(H(1-o.slippage)),console.log(M.toString(),"##minAmountA"),console.log(I.toString(),"##minAmountA")}}else b=eo.getCoinAmountFromLiquidity(new G(x),h,q,_,!1),Q=J.get_protocol_fee_amount(A,b.coinA.toString()),K=J.get_protocol_fee_amount(A,b.coinB.toString()),T=o.lpTokenAmount,M=H(b.coinA.toString()).mul(H(1-o.slippage)),I=H(b.coinB.toString()).mul(H(1-o.slippage)),console.log(Q,K,"##protocol_fee_amount_b");console.log(T,"lpTokenAmount remove");const X={vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,lp_token_amount:T,min_amount_a:uo(M,0)||"",min_amount_b:uo(I,0)||"",rewarder_coin_types:[]};console.log(X,"##removeParams"),(w||S)&&(X.swapParams={a2b:!l,swap_amount:L==null?void 0:L.swapInAmount});const z=await e.Vaults.remove(X);return u(z)},getAutoPool:U,calculateDepositSwapAmount:async o=>{const{lowerTick:a,upperTick:p,curSqrtPrice:g,fix_amount_a:v,input_amount:k,coinTypeA:R,coinTypeB:q,clmm_pool:_}=o;return console.log(o,"params###"),await e.Vaults.calculateDepositSwapAmount({lowerTick:a,upperTick:p,curSqrtPrice:g,fix_amount_a:v,input_amount:k,coinTypeA:R,coinTypeB:q,clmm_pool:_})},calculateRemoveSwapAmount:async o=>{const{lowerTick:a,upperTick:p,curSqrtPrice:g,fix_amount_a:v,receiveAmount:k,coinTypeA:R,coinTypeB:q,clmm_pool:_}=o;console.log(o,"params###");const l=await e.Vaults.calculateRemoveSwapAmount({lowerTick:a,upperTick:p,curSqrtPrice:g,fix_amount_a:v,receive_amount:k,coinTypeA:R,coinTypeB:q,clmm_pool:_});return console.log(l,"###swapResut"),l}}}const vo=go("autoPool",{state:()=>({autoPoolList:[],autoPoolObj:{},positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{},currentAutoPoolStatus:"STATUS_RUNNING"}),getters:{getPoolStore(){return fo()}},actions:{async getAutoPoolList(){const r=await to("Sui").getAutoPools();console.log(r,"list###");const m=this.getPoolStore,c=r.map(e=>({...m.poolConfigObj[e.pool_id],id:e.id,lp_token_type:e.lp_token_type,autoPoolPositionInfo:e.positins[0],is_pause:e.is_pause,total_supply:e.total_supply,liquidity:e.liquidity,protocol_fee_rate:e.protocol_fee_rate,max_liquidity_quota:e.max_liquidity_quota}));this.autoPoolList=c,this.autoPoolObj=Object.fromEntries(c.map((e,y)=>[e.address,e])),this.getMyAutoPoolPosition(),console.log(c,"##autoPoolList")},async getMyAutoPoolPosition(){var y,D,W;const i=to("Sui"),r=this.autoPoolList,m=lo("Sui"),c=[],{RATES:e}=this.getPoolStore;for(let U=0;U<r.length;U++){const n=r[U];console.log(n,"poolINfo###");const u=await m.getPool(n.address),s=await i.getLpBalance(r[U].lp_token_type);console.log(s,"balance##");const N=(await m.getTokenListByCoinType([r[U].lp_token_type]))[0];console.log(N,"lpInfo##");const E=((y=e[n.coinA.address])==null?void 0:y.price)||"",F=((D=e[n.coinB.address])==null?void 0:D.price)||"",$=n.autoPoolPositionInfo.tick_lower_index,o=n.autoPoolPositionInfo.tick_upper_index,a={tick_lower_index:$,tick_upper_index:o,current_sqrt_price:u==null?void 0:u.current_sqrt_price,liquidity:Number(s)>0?J.get_share_liquidity_by_amount({liquidity:n==null?void 0:n.liquidity,total_supply:n==null?void 0:n.total_supply},s):0},p=await m.getCoinAmountFromLiquidity({pool:{...n,current_sqrt_price:u==null?void 0:u.current_sqrt_price},position:a,roundUp:!1});console.log(p,"##amountInfo");const g=p.coinaAmount,v=p.coinbAmount,k=g,R=v,q=n.coinA.decimals,_=n.coinB.decimals,l=m.TickMath.tickIndexToPrice(Number($),q,_).toString(),h=m.TickMath.tickIndexToPrice(Number(o),q,_).toString(),O=new t(E).mul(new t(g)).toNumber(),j=new t(F).mul(new t(v)).toNumber(),P=O>0&&O<.01?"<$0.01":`$${oo(C(O,2))}`,x=j>0&&j<.01?"<$0.01":`$${oo(C(j,2))}`,V=ro.sqrtPriceX64ToPrice(u.current_sqrt_price,q,_);let w,S;const f=await m.getCoinAmountFromLiquidity({pool:{...n,tick_lower_index:$,tick_upper_index:o,current_sqrt_price:u==null?void 0:u.current_sqrt_price},position:{...a,liquidity:n.liquidity},roundUp:!1}),B=new t(f.coinaAmount).toNumber(),A=new t(f.coinbAmount).toNumber();console.log(B,A,V.toString(),"###116");const Y=C(new t(B).mul(new t(E)).toNumber(),2),L=C(new t(A).mul(new t(F)).toNumber(),2);if(console.log(u,"newPool##"),console.log(B,A,"###131"),B>0&&A>0){const co=new t(B).mul(V).add(new t(A));w=new t(B).mul(V).div(co).mul(100).toNumber().toFixed(2),S=new t(A).div(co).mul(100).toNumber().toFixed(2)}else B>0?(w=100,S=0):A>0?(w=0,S=100):(w=50,S=50);console.log(B,A,w,S,"###147");let b=0;Number(s)>0&&(b=new t(s).div(Math.pow(10,N.decimals)));const Q=E&&F?C(new t(O).add(new t(j)).toString(),2):"",K=n.total_supply;let T=0;b>0&&K>0&&(T=new t(b).mul(Math.pow(10,N.decimals)).div(new t(K)).mul(100).toNumber()),console.log(T,"##myShare");const M=new t(1).div(Math.pow(10,n.decimals)).toNumber();let I=0;T>1?I=C(T,2):T>0&&T<M?I=`<${M}`:T==0?I=0:I=ao(T,1),console.log(s,b.toString(),"###balance");const X={tick_lower_index:$,tick_upper_index:o,current_sqrt_price:u==null?void 0:u.current_sqrt_price,liquidity:n.max_liquidity_quota},z=await m.getCoinAmountFromLiquidity({pool:{...n,current_sqrt_price:u==null?void 0:u.current_sqrt_price},position:X,roundUp:!1}),Z=new t(E).mul(new t(z.coinaAmount)),po=new t(F).mul(new t(z.coinbAmount)),_o=new t(E).mul(new t(f.coinaAmount)),mo=new t(F).mul(new t(f.coinbAmount)),no=Z.add(po).toNumber(),so=_o.add(mo).toNumber();this.positionInfoObj[n.id]={tick_lower_index:$,tick_upper_index:o,current_sqrt_price:u.current_sqrt_price,myLiquidity:io(s,N.decimals),amountA:k,amountB:R,...n,lpInfo:N,myAmountAUSD:P,myAmountBUSD:x,myLiquidityUSD:Q,myShare:I,minPrice:l,maxPrice:h,poolCoinARatio:w,poolCoinBRatio:S,poolCoinANum:B,poolCoinBNum:A,poolCoinAUSD:Y,poolCoinBUSD:L,quoteUSD:no,poolUSD:so,balance:s},c.push({tick_lower_index:$,tick_upper_index:o,current_sqrt_price:(W=n==null?void 0:n.object)==null?void 0:W.current_sqrt_price,myLiquidity:io(s,N.decimals),amountA:k,amountB:R,...n,lpInfo:N,myAmountAUSD:P,myAmountBUSD:x,myLiquidityUSD:Q,myShare:I,minPrice:l,maxPrice:h,poolCoinARatio:w,poolCoinBRatio:S,poolCoinANum:B,poolCoinBNum:A,poolCoinAUSD:Y,poolCoinBUSD:L,quoteUSD:no,poolUSD:so,balance:s})}this.positionInfoList=c,console.log(this.positionInfoObj,"this.positionInfoObj###"),console.log(this.positionInfoList,"###this.positionInfoList")},async updatePositionItem(i){var X,z;const r=to("Sui"),m=lo("Sui"),c=await r.getAutoPool(i),e=await m.getPool(c.pool_id);console.log("newPoolInfo:",c),console.log("this.positionInfoObj[id]:",this.positionInfoObj[i]);const y={...this.positionInfoObj[i],autoPoolPositionInfo:c.positins[0]},D=await r.getLpBalance(y.lp_token_type),W=(await m.getTokenListByCoinType([y.lp_token_type]))[0];console.log(D,"###balance updatePositionItem");const U=y.autoPoolPositionInfo.tick_lower_index,n=y.autoPoolPositionInfo.tick_upper_index,u={tick_lower_index:U,tick_upper_index:n,current_sqrt_price:e.current_sqrt_price,liquidity:J.get_share_liquidity_by_amount({liquidity:c==null?void 0:c.liquidity,total_supply:c==null?void 0:c.total_supply},D)},s=m.getCoinAmountFromLiquidity({pool:{current_sqrt_price:e.current_sqrt_price,...y},position:u,roundUp:!1});console.log(s,"amountInfo###"),s.coinaAmount,s.coinbAmount;const N=s.coinaAmount,E=s.coinbAmount,{RATES:F}=this.getPoolStore,$=c.total_supply,o=2,a=2,p=((X=F[y.coinA.address])==null?void 0:X.price)||0,g=((z=F[y.coinB.address])==null?void 0:z.price)||0,v=new t(p).mul(new t(s==null?void 0:s.coinaAmount)).toNumber(),k=new t(g).mul(new t(s==null?void 0:s.coinbAmount)).toNumber(),R=v>0&&v<.01?"<$0.01":`$${oo(C(v,2))}`,q=k>0&&k<.01?"<$0.01":`$${oo(C(k,2))}`;let _=new t(0);Number(D)>0&&(_=new t(D).div(Math.pow(10,W.decimals)));const l=new t(_).mul(Math.pow(10,y.lpInfo.decimals)).div(new t($)).mul(100).toNumber();let h=0;const O=new t(1).div(Math.pow(10,y.decimals)).toNumber(),j=p&&g?C(new t(v).add(new t(k)).toString(),2):"";console.log(p,g,s==null?void 0:s.coinaAmount,s==null?void 0:s.coinbAmount,"myLiquidityUSD###"),l>1?h=C(l,2):l>0&&l<O?h=`<${O}`:h=ao(l,1);let P,x;const V=ro.sqrtPriceX64ToPrice(e.current_sqrt_price,o,a),w=await m.getCoinAmountFromLiquidity({pool:{...y,tick_lower_index:U,tick_upper_index:n,current_sqrt_price:e==null?void 0:e.current_sqrt_price},position:{...u,liquidity:c.liquidity},roundUp:!1}),S=new t(w.coinaAmount).toNumber(),f=new t(w.coinbAmount).toNumber();console.log(S,f,V.toString(),"###116");const B=C(new t(S).mul(new t(p)).toNumber(),2),A=C(new t(f).mul(new t(g)).toNumber(),2);if(console.log(e,"newPool##"),console.log(S,f,"###poolCoinBNum"),S>0&&f>0){const Z=new t(S).mul(V).add(new t(f));P=new t(S).mul(V).div(Z).mul(100).toNumber().toFixed(2),x=new t(f).div(Z).mul(100).toNumber().toFixed(2)}else S>0?(P=100,x=0):f>0?(P=0,x=100):(P=50,x=50);const Y={tick_lower_index:U,tick_upper_index:n,current_sqrt_price:e==null?void 0:e.current_sqrt_price,liquidity:y.max_liquidity_quota},L=await m.getCoinAmountFromLiquidity({pool:{...y,current_sqrt_price:e==null?void 0:e.current_sqrt_price},position:Y,roundUp:!1}),b=new t(p).mul(new t(L.coinaAmount)),Q=new t(g).mul(new t(L.coinbAmount)),K=new t(p).mul(new t(w.coinaAmount)),T=new t(g).mul(new t(w.coinbAmount)),M=b.add(Q).toNumber(),I=K.add(T).toNumber();this.positionInfoObj[i]={...y,tick_lower_index:U,tick_upper_index:n,current_sqrt_price:e.current_sqrt_price,myLiquidity:io(D,W.decimals),amountA:N,amountB:E,myShare:h,myAmountAUSD:R,myAmountBUSD:q,myLiquidityUSD:j,poolCoinARatio:P,poolCoinBRatio:x,poolCoinANum:S,poolCoinBNum:f,poolCoinAUSD:B,poolCoinBUSD:A,quoteUSD:M,poolUSD:I,balance:D},console.log(this.positionInfoObj[i],"###this.positionInfoObj[id]")},async getAutoPoolAPY(){try{const{data:i}=await fetch(`${d.Sui.api}/v2/sui/auto_pools`).then(r=>r.json());i&&i.pools&&i.pools.length>0&&(this.apyObj=Object.fromEntries(i.pools.map((r,m)=>[r.object_id,{...r,apr:r.apr.replace("%","")>0&&r.apr.replace("%","")<.01?"<0.01%":C(r.apr.replace("%",""),2)+"%",resultApr:r.apr.replace("%","")}])),console.log(this.apyObj,"data##"))}catch{this.apyObj={}}},async getVault(i){const r=to("Sui"),{status:m}=await r.getVault(i);this.currentAutoPoolStatus=m,this.updatePositionItem(i),console.log(m,"status##")}}});export{to as a,vo as u};
