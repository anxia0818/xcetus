import{a6 as yo,l as wo,T as Ao,a7 as go}from"./entry.46186212.js";import{c as d,a as So}from"./sha256.334e45a8.js";import{I as qo,e as G,C as eo,J,f as uo,u as fo,b as lo,a as oo,s as C,T as ro,K as ao,p as io}from"./pool.3a9b2758.js";import{C as bo,V as Y}from"./index.bd4a0260.js";import{D as t}from"./decimal.0e8aa3f1.js";function to(i){const r={launchpad:d[i||"Sui"].launchpad,ido:d[i||"Sui"].ido,xcetus:d[i||"Sui"].xcetus,xcetus_dividends:d[i||"Sui"].xcetus_dividends,cetus_faucet:d[i||"Sui"].cetus_faucet,xtoken:d[i||"Sui"].xtoken,xtoken_dividends:d[i||"Sui"].xtoken_dividends,token_faucet:d[i||"Sui"].token_faucet,booster:d[i||"Sui"].booster,maker_bonus:d[i||"Sui"].maker_bonus,liquidity_stratefy:d[i||"Sui"].liquidity_stratefy,vaults:d[i||"Sui"].vaults},_={fullRpcUrl:localStorage.getItem(`${i}-currentRpclocal2`)||d[i||"Sui"].fullRpcUrl,simulationAccount:d[i||"Sui"].simulationAccount,cetus_config:d[i||"Sui"].cetus_config,clmm_pool:d[i||"Sui"].clmm_pool,integrate:d[i||"Sui"].integrate,deepbook:d[i||"Sui"].deepbook,deepbook_endpoint_v2:d[i||"Sui"].deepbook_endpoint_v2,aggregatorUrl:d[i||"Sui"].aggregatorUrl},c=new qo(_),e=yo(new bo(r,c)),y=So(),O=wo(()=>y);Ao(()=>{O.value.address&&(c.senderAddress=O.value.address)});const W=async()=>{console.log(e,"sdk###");const o=await e.Vaults.getVaultList();return o&&o.data||[]},U=async o=>await e.Vaults.getVault(o),n=async o=>{if(console.log(o,"###coinType"),c.senderAddress){const m=await e.ClmmSDK.fullClient.getBalance({owner:c.senderAddress,coinType:o});return m&&m.totalBalance}else return 0},u=o=>({transactionBlock:o,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:W,getLpBalance:n,getVault:async o=>await e.Vaults.getVault(o),deposit:async o=>{const{lowerTick:m,upperTick:a,slippage:S,rewarder_coin_types:T,isOnlyA:f,isOnlyB:I,currentTickIndex:q}=o;console.log(o,"params###");let p=o.fix_amount_a,l,v,D;if(f||I){const w=await e.Vaults.calculateDepositSwapAmount({lowerTick:m,upperTick:a,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool});console.log(w,"swapResut##211"),w?(l=new G(w.swapOutAmount),v=new G(o.curSqrtPrice),D={swap_amount:w.swapInAmount,a2b:p},p=!p):(v=new G(o.curSqrtPrice),l=new G(o.coinAmount))}else v=o.curSqrtPrice,l=new G(o.coinAmount);let j,b,k;console.log(m,q,a,"####138"),q>=m&&q<=a?(j=eo.estLiquidityAndcoinAmountFromOneAmounts(m,a,l,p,!0,S,v),b=p?l.toString():j.tokenMaxA.toString(),k=p?j.tokenMaxB.toString():l.toString()):q<m?(b=l.toNumber(),k=0):q>a&&(b=0,k=l.toNumber()),console.log({vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:b,amount_b:k,fix_amount_a:p,slippage:S,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,rewarder_coin_types:[],swapParams:D},"params171");const V=await e.Vaults.deposit({vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:b,amount_b:k,fix_amount_a:p,slippage:S,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,rewarder_coin_types:[],swapParams:D});return u(V)},remove:async o=>{const{lowerTick:m,upperTick:a,coinTypeA:S,coinTypeB:T,receiveAmount:f,clmm_pool:I,lowerSqrtPrice:q,upperSqrtPrice:p,fix_amount_a:l,curSqrtPrice:v,slippage:D,rewarder_coin_types:j,id:b,liquidity:k,swapParams:V,isOnlyA:w,isOnlyB:A,sliderVal:x}=o;console.log(x,"sliderVal##");const g=await U(b),B=await c.Pool.getPool(g.pool_id);let L,P,F,K,Q,h,X;console.log(f,"##receiveAmount"),w||A?(L=await e.Vaults.calculateRemoveSwapAmount({lowerTick:m,upperTick:a,curSqrtPrice:B.current_sqrt_price,fix_amount_a:l,receive_amount:f,coinTypeA:S,coinTypeB:T,clmm_pool:I}),console.log(L,"swapResut###"),L&&(P=eo.getCoinAmountFromLiquidity(new G(L.liquidity),new G(B.current_sqrt_price),q,p,!1),F=Y.get_protocol_fee_amount(g,P.coinA.toString()),K=Y.get_protocol_fee_amount(g,P.coinB.toString()),Q=Y.get_lp_amount_by_liquidity(g,L.liquidity),h=J(P.coinA.toString()).mul(J(1-o.slippage)),X=J(P.coinB.toString()).mul(J(1-o.slippage)))):(P=eo.getCoinAmountFromLiquidity(new G(k),v,q,p,!1),F=Y.get_protocol_fee_amount(g,P.coinA.toString()),K=Y.get_protocol_fee_amount(g,P.coinB.toString()),Q=o.lpTokenAmount,h=J(P.coinA.toString()).mul(J(1-o.slippage)),X=J(P.coinB.toString()).mul(J(1-o.slippage)),console.log(F,K,"##protocol_fee_amount_b"));const R={vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,lp_token_amount:Q.toString(),min_amount_a:uo(h,0)||"",min_amount_b:uo(X,0)||"",rewarder_coin_types:[]};console.log(R,"##removeParams"),(w||A)&&(R.swapParams={a2b:!l,swap_amount:L==null?void 0:L.swapInAmount});const z=await e.Vaults.remove(R);return u(z)},getAutoPool:U,calculateDepositSwapAmount:async o=>{const{lowerTick:m,upperTick:a,curSqrtPrice:S,fix_amount_a:T,input_amount:f,coinTypeA:I,coinTypeB:q,clmm_pool:p}=o;return console.log(o,"params###"),await e.Vaults.calculateDepositSwapAmount({lowerTick:m,upperTick:a,curSqrtPrice:S,fix_amount_a:T,input_amount:f,coinTypeA:I,coinTypeB:q,clmm_pool:p})},calculateRemoveSwapAmount:async o=>{const{lowerTick:m,upperTick:a,curSqrtPrice:S,fix_amount_a:T,receiveAmount:f,coinTypeA:I,coinTypeB:q,clmm_pool:p}=o;console.log(o,"params###");const l=await e.Vaults.calculateRemoveSwapAmount({lowerTick:m,upperTick:a,curSqrtPrice:S,fix_amount_a:T,receive_amount:f,coinTypeA:I,coinTypeB:q,clmm_pool:p});return console.log(l,"###swapResut"),l}}}const vo=go("autoPool",{state:()=>({autoPoolList:[],autoPoolObj:{},positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{},currentAutoPoolStatus:"STATUS_RUNNING"}),getters:{getPoolStore(){return fo()}},actions:{async getAutoPoolList(){const r=await to("Sui").getAutoPools();console.log(r,"list###");const _=this.getPoolStore,c=r.map(e=>({..._.poolConfigObj[e.pool_id],id:e.id,lp_token_type:e.lp_token_type,autoPoolPositionInfo:e.positins[0],is_pause:e.is_pause,total_supply:e.total_supply,liquidity:e.liquidity,protocol_fee_rate:e.protocol_fee_rate,max_liquidity_quota:e.max_liquidity_quota}));this.autoPoolList=c,this.autoPoolObj=Object.fromEntries(c.map((e,y)=>[e.address,e])),this.getMyAutoPoolPosition(),console.log(c,"##autoPoolList")},async getMyAutoPoolPosition(){var y,O,W;const i=to("Sui"),r=this.autoPoolList,_=lo("Sui"),c=[],{RATES:e}=this.getPoolStore;for(let U=0;U<r.length;U++){const n=r[U];console.log(n,"poolINfo###");const u=await _.getPool(n.address),s=await i.getLpBalance(r[U].lp_token_type);console.log(s,"balance##");const N=(await _.getTokenListByCoinType([r[U].lp_token_type]))[0];console.log(N,"lpInfo##");const $=((y=e[n.coinA.address])==null?void 0:y.price)||"",E=((O=e[n.coinB.address])==null?void 0:O.price)||"",M=n.autoPoolPositionInfo.tick_lower_index,o=n.autoPoolPositionInfo.tick_upper_index,m={tick_lower_index:M,tick_upper_index:o,current_sqrt_price:u==null?void 0:u.current_sqrt_price,liquidity:Number(s)>0?Y.get_share_liquidity_by_amount({liquidity:n==null?void 0:n.liquidity,total_supply:n==null?void 0:n.total_supply},s):0},a=await _.getCoinAmountFromLiquidity({pool:{...n,current_sqrt_price:u==null?void 0:u.current_sqrt_price},position:m,roundUp:!1});console.log(a,"##amountInfo");const S=a.coinaAmount,T=a.coinbAmount,f=S,I=T,q=n.coinA.decimals,p=n.coinB.decimals,l=_.TickMath.tickIndexToPrice(Number(M),q,p).toString(),v=_.TickMath.tickIndexToPrice(Number(o),q,p).toString(),D=new t($).mul(new t(S)).toNumber(),j=new t(E).mul(new t(T)).toNumber(),b=D>0&&D<.01?"<$0.01":`$${oo(C(D,2))}`,k=j>0&&j<.01?"<$0.01":`$${oo(C(j,2))}`,V=ro.sqrtPriceX64ToPrice(u.current_sqrt_price,q,p);let w,A;const x=await _.getCoinAmountFromLiquidity({pool:{...n,tick_lower_index:M,tick_upper_index:o,current_sqrt_price:u==null?void 0:u.current_sqrt_price},position:{...m,liquidity:n.liquidity},roundUp:!1}),g=new t(x.coinaAmount).toNumber(),B=new t(x.coinbAmount).toNumber();console.log(g,B,V.toString(),"###116");const L=C(new t(g).mul(new t($)).toNumber(),2),P=C(new t(B).mul(new t(E)).toNumber(),2);if(console.log(u,"newPool##"),console.log(g,B,"###131"),g>0&&B>0){const co=new t(g).mul(V).add(new t(B));w=new t(g).mul(V).div(co).mul(100).toNumber().toFixed(2),A=new t(B).div(co).mul(100).toNumber().toFixed(2)}else g>0?(w=100,A=0):B>0?(w=0,A=100):(w=50,A=50);console.log(g,B,w,A,"###147");let F=0;Number(s)>0&&(F=new t(s).div(Math.pow(10,N.decimals)));const K=$&&E?C(new t(D).add(new t(j)).toString(),2):"",Q=n.total_supply;let h=0;F>0&&Q>0&&(h=new t(F).mul(Math.pow(10,N.decimals)).div(new t(Q)).mul(100).toNumber()),console.log(h,"##myShare");const X=new t(1).div(Math.pow(10,n.decimals)).toNumber();let R=0;h>1?R=C(h,2):h>0&&h<X?R=`<${X}`:h==0?R=0:R=ao(h,1),console.log(s,F.toString(),"###balance");const z={tick_lower_index:M,tick_upper_index:o,current_sqrt_price:u==null?void 0:u.current_sqrt_price,liquidity:n.max_liquidity_quota},H=await _.getCoinAmountFromLiquidity({pool:{...n,current_sqrt_price:u==null?void 0:u.current_sqrt_price},position:z,roundUp:!1}),Z=new t($).mul(new t(H.coinaAmount)),po=new t(E).mul(new t(H.coinbAmount)),_o=new t($).mul(new t(x.coinaAmount)),mo=new t($).mul(new t(x.coinbAmount)),no=Z.add(po).toNumber(),so=_o.add(mo).toNumber();this.positionInfoObj[n.id]={tick_lower_index:M,tick_upper_index:o,current_sqrt_price:u.current_sqrt_price,myLiquidity:io(s,N.decimals),amountA:f,amountB:I,...n,lpInfo:N,myAmountAUSD:b,myAmountBUSD:k,myLiquidityUSD:K,myShare:R,minPrice:l,maxPrice:v,poolCoinARatio:w,poolCoinBRatio:A,poolCoinANum:g,poolCoinBNum:B,poolCoinAUSD:L,poolCoinBUSD:P,quoteUSD:no,poolUSD:so},c.push({tick_lower_index:M,tick_upper_index:o,current_sqrt_price:(W=n==null?void 0:n.object)==null?void 0:W.current_sqrt_price,myLiquidity:io(s,N.decimals),amountA:f,amountB:I,...n,lpInfo:N,myAmountAUSD:b,myAmountBUSD:k,myLiquidityUSD:K,myShare:R,minPrice:l,maxPrice:v,poolCoinARatio:w,poolCoinBRatio:A,poolCoinANum:g,poolCoinBNum:B,poolCoinAUSD:L,poolCoinBUSD:P,quoteUSD:no,poolUSD:so})}this.positionInfoList=c,console.log(this.positionInfoObj,"this.positionInfoObj###"),console.log(this.positionInfoList,"###this.positionInfoList")},async updatePositionItem(i){var z,H;const r=to("Sui"),_=lo("Sui"),c=await r.getAutoPool(i),e=await _.getPool(c.pool_id);console.log("newPoolInfo:",c),console.log("this.positionInfoObj[id]:",this.positionInfoObj[i]);const y={...this.positionInfoObj[i],autoPoolPositionInfo:c.positins[0]},O=await r.getLpBalance(y.lp_token_type),W=(await _.getTokenListByCoinType([y.lp_token_type]))[0];console.log(O,"###balance updatePositionItem");const U=y.autoPoolPositionInfo.tick_lower_index,n=y.autoPoolPositionInfo.tick_upper_index,u={tick_lower_index:U,tick_upper_index:n,current_sqrt_price:e.current_sqrt_price,liquidity:Y.get_share_liquidity_by_amount({liquidity:c==null?void 0:c.liquidity,total_supply:c==null?void 0:c.total_supply},O)},s=_.getCoinAmountFromLiquidity({pool:{current_sqrt_price:e.current_sqrt_price,...y},position:u,roundUp:!1});console.log(s,"amountInfo###"),s.coinaAmount,s.coinbAmount;const N=s.coinaAmount,$=s.coinbAmount,{RATES:E}=this.getPoolStore,M=c.total_supply,o=2,m=2,a=((z=E[y.coinA.address])==null?void 0:z.price)||0,S=((H=E[y.coinB.address])==null?void 0:H.price)||0,T=new t(a).mul(new t(s==null?void 0:s.coinaAmount)).toNumber(),f=new t(S).mul(new t(s==null?void 0:s.coinbAmount)).toNumber(),I=T>0&&T<.01?"<$0.01":`$${oo(C(T,2))}`,q=f>0&&f<.01?"<$0.01":`$${oo(C(f,2))}`;let p=new t(0);Number(O)>0&&(p=new t(O).div(Math.pow(10,W.decimals)));const l=new t(p).mul(Math.pow(10,y.lpInfo.decimals)).div(new t(M)).mul(100).toNumber();let v=0;const D=new t(1).div(Math.pow(10,y.decimals)).toNumber(),j=a&&S?C(new t(T).add(new t(f)).toString(),2):"";console.log(a,S,s==null?void 0:s.coinaAmount,s==null?void 0:s.coinbAmount,"myLiquidityUSD###"),l>1?v=C(l,2):l>0&&l<D?v=`<${D}`:v=ao(l,1);let b,k;const V=ro.sqrtPriceX64ToPrice(e.current_sqrt_price,o,m),w=await _.getCoinAmountFromLiquidity({pool:{...y,tick_lower_index:U,tick_upper_index:n,current_sqrt_price:e==null?void 0:e.current_sqrt_price},position:{...u,liquidity:c.liquidity},roundUp:!1}),A=new t(w.coinaAmount).toNumber(),x=new t(w.coinbAmount).toNumber();console.log(A,x,V.toString(),"###116");const g=C(new t(A).mul(new t(a)).toNumber(),2),B=C(new t(x).mul(new t(S)).toNumber(),2);if(console.log(e,"newPool##"),console.log(A,x,"###poolCoinBNum"),A>0&&x>0){const Z=new t(A).mul(V).add(new t(x));b=new t(A).mul(V).div(Z).mul(100).toNumber().toFixed(2),k=new t(x).div(Z).mul(100).toNumber().toFixed(2)}else A>0?(b=100,k=0):x>0?(b=0,k=100):(b=50,k=50);const L={tick_lower_index:U,tick_upper_index:n,current_sqrt_price:e==null?void 0:e.current_sqrt_price,liquidity:y.max_liquidity_quota},P=await _.getCoinAmountFromLiquidity({pool:{...y,current_sqrt_price:e==null?void 0:e.current_sqrt_price},position:L,roundUp:!1}),F=new t(a).mul(new t(P.coinaAmount)),K=new t(S).mul(new t(P.coinbAmount)),Q=new t(a).mul(new t(w.coinaAmount)),h=new t(a).mul(new t(w.coinbAmount)),X=F.add(K).toNumber(),R=Q.add(h).toNumber();this.positionInfoObj[i]={...y,tick_lower_index:U,tick_upper_index:n,current_sqrt_price:e.current_sqrt_price,myLiquidity:io(O,W.decimals),amountA:N,amountB:$,myShare:v,myAmountAUSD:I,myAmountBUSD:q,myLiquidityUSD:j,poolCoinARatio:b,poolCoinBRatio:k,poolCoinANum:A,poolCoinBNum:x,poolCoinAUSD:g,poolCoinBUSD:B,quoteUSD:X,poolUSD:R},console.log(this.positionInfoObj[i],"###this.positionInfoObj[id]")},async getAutoPoolAPY(){try{const{data:i}=await fetch(`${d.Sui.api}/v2/sui/auto_pools`).then(r=>r.json());i&&i.pools&&i.pools.length>0&&(this.apyObj=Object.fromEntries(i.pools.map((r,_)=>[r.object_id,{...r,apr:r.apr.replace("%","")>0&&r.apr.replace("%","")<.01?"<0.01%":C(r.apr.replace("%",""),2)+"%",resultApr:r.apr.replace("%","")}])),console.log(this.apyObj,"data##"))}catch{this.apyObj={}}},async getVault(i){const r=to("Sui"),{status:_}=await r.getVault(i);this.currentAutoPoolStatus=_,console.log(_,"status##")}}});export{to as a,vo as u};
