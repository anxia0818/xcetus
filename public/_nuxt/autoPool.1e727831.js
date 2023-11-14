import{a8 as So,C as bo,V as fo,a9 as qo}from"./entry.d8dcbfff.js";import{c as y,a as ko}from"./sha256.81632fd3.js";import{J as Po,K as go,b as N,L as G,T as uo,C as io,f as po,s as S,u as To,e as mo,a as so,j as _o,p as eo}from"./pool.8e020072.js";import{C as Bo,V as J}from"./index.fa8cb1a5.js";import{D as t}from"./decimal.0bdeb344.js";function co(e){const p={launchpad:y[e||"Sui"].launchpad,ido:y[e||"Sui"].ido,xcetus:y[e||"Sui"].xcetus,xcetus_dividends:y[e||"Sui"].xcetus_dividends,cetus_faucet:y[e||"Sui"].cetus_faucet,xtoken:y[e||"Sui"].xtoken,xtoken_dividends:y[e||"Sui"].xtoken_dividends,token_faucet:y[e||"Sui"].token_faucet,booster:y[e||"Sui"].booster,maker_bonus:y[e||"Sui"].maker_bonus,liquidity_stratefy:y[e||"Sui"].liquidity_stratefy,vaults:y[e||"Sui"].vaults},_={fullRpcUrl:localStorage.getItem(`${e}-currentRpclocal2`)||y[e||"Sui"].fullRpcUrl,simulationAccount:y[e||"Sui"].simulationAccount,cetus_config:y[e||"Sui"].cetus_config,clmm_pool:y[e||"Sui"].clmm_pool,integrate:y[e||"Sui"].integrate,deepbook:y[e||"Sui"].deepbook,deepbook_endpoint_v2:y[e||"Sui"].deepbook_endpoint_v2,aggregatorUrl:y[e||"Sui"].aggregatorUrl},c=new Po(_),n=So(new Bo(p,c)),r=ko(),j=bo(()=>r);fo(()=>{j.value.address&&(c.senderAddress=j.value.address)});const Y=async()=>{console.log(n,"sdk###");const o=await n.Vaults.getVaultList();return o&&o.data||[]},D=async o=>{const u=await n.Vaults.getVault(o);return console.log(u,"vault##"),{...u,quota_based_type:go(u.quota_based_type).full_address}},i=async o=>{if(console.log(o,"###coinType"),c.senderAddress){const u=await n.ClmmSDK.fullClient.getBalance({owner:c.senderAddress,coinType:o});return u&&u.totalBalance}else return 0},d=o=>({transactionBlock:o,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:Y,getLpBalance:i,getVault:async o=>{const u=await n.Vaults.getVault(o);return console.log(u,"vault##292"),u},deposit:async o=>{const{lowerTick:u,upperTick:b,slippage:k,rewarder_coin_types:v,isOnlyA:T,isOnlyB:I,currentTickIndex:B,decimal_b:C}=o;console.log(o,"params###");let m=o.fix_amount_a,A,s,f,x=B;if(T||I){const l=await n.Vaults.calculateDepositSwapAmount({lowerTick:u,upperTick:b,curSqrtPrice:o.curSqrtPrice,fix_amount_a:o.fix_amount_a,input_amount:o.coinAmount,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,clmm_pool:o.clmm_pool,use_route:!0,priceSplitPoint:k},!0);console.log(l,"swapResut##211"),l?(s=new N(l.afterSqrtPrice),A=l.fixAmountA===m?new N(G(o.coinAmount).sub(l.swapInAmount).toString()):new N(l.swapOutAmount),f={swap_amount:l.swapInAmount,a2b:m,input_amount:o.coinAmount,route_obj:l.routeObj},m=l.fixAmountA,x=uo.sqrtPriceX64ToTickIndex(new N(l.afterSqrtPrice))):(s=new N(o.curSqrtPrice),A=new N(o.coinAmount))}else s=o.curSqrtPrice,A=new N(o.coinAmount);let K,w,a;console.log(u,B,b,"####138"),x>=u&&x<=b?(K=io.estLiquidityAndcoinAmountFromOneAmounts(u,b,A,m,!0,k,s),w=m?A.toString():K.tokenMaxA.toString(),a=m?K.tokenMaxB.toString():A.toString()):x<u?(w=A.toNumber(),a=0):x>b&&(w=0,a=A.toNumber()),console.log({vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:w,amount_b:a,fix_amount_a:m,slippage:k,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,rewarder_coin_types:[],swapParams:f},"params171");const h=await n.Vaults.deposit({lowerTick:u,upperTick:b,vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,amount_a:w,amount_b:a,fix_amount_a:m,slippage:k,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,swapParams:f});return d(h)},remove:async o=>{const{lowerTick:u,upperTick:b,coinTypeA:k,coinTypeB:v,receiveAmount:T,clmm_pool:I,lowerSqrtPrice:B,upperSqrtPrice:C,fix_amount_a:m,curSqrtPrice:A,slippage:s,rewarder_coin_types:f,id:x,liquidity:K,swapParams:w,isOnlyA:a,isOnlyB:h,sliderVal:l,positionInfo:$}=o;console.log(l,"sliderVal##");const U=await D(x),Z=await c.Pool.getPool(U.pool_id);let L,P,R,F,M,Q,q;const X=J.get_share_liquidity_by_amount(U,l==100?$.balance:o.lpTokenAmount);if(console.log(T,"##receiveAmount"),a||h){if(L=await n.Vaults.calculateRemoveSwapAmount({lowerTick:u,upperTick:b,curSqrtPrice:Z.current_sqrt_price,fix_amount_a:m,receive_amount:T,coinTypeA:k,coinTypeB:v,clmm_pool:I,use_route:!0,priceSplitPoint:s,liquidity:l==100?X:""}),console.log(L,"swapResut###"),L){const H=J.get_share_liquidity_by_amount(U,$.balance);P=io.getCoinAmountFromLiquidity(new N(l==100?H:L.liquidity),new N(Z.current_sqrt_price),B,C,!1),R=J.get_protocol_fee_amount(U,P.coinA.toString()),F=J.get_protocol_fee_amount(U,P.coinB.toString()),M=l==100?$.balance:J.get_lp_amount_by_liquidity(U,L.liquidity),Q=G(P.coinA.toString()).mul(G(1-o.slippage)),q=G(P.coinB.toString()).mul(G(1-o.slippage)),console.log(Q.toString(),"##minAmountA"),console.log(q.toString(),"##minAmountA")}}else console.log(X,"#removeLiquidity"),P=io.getCoinAmountFromLiquidity(new N(X),A,B,C,!1),P=io.getCoinAmountFromLiquidity(new N(X),A,B,C,!1),console.log(P,"#coinAmountscoinAmounts"),M=o.lpTokenAmount,Q=G(P.coinA.toString()).mul(G(1-o.slippage)),q=G(P.coinB.toString()).mul(G(1-o.slippage)),console.log(R,F,"##protocol_fee_amount_b"),console.log(Q.toString(),"##minAmountA"),console.log(q.toString(),"##minAmountA"),console.log(o,"params###246");console.log(M,"lpTokenAmount remove");const O={vault_id:o.id,clmm_pool:o.clmm_pool,lp_token_type:o.lp_token_type,coinTypeA:o.coinTypeA,coinTypeB:o.coinTypeB,lp_token_amount:M,min_amount_a:po(Q,0)||"",min_amount_b:po(q,0)||"",rewarder_coin_types:[],slippage:o.slippage};console.log(O,"##removeParams"),(a||h)&&(O.swapParams={a2b:!m,swap_amount:L==null?void 0:L.swapInAmount,route_obj:L.routeObj});const z=await n.Vaults.remove(O);return d(z)},getAutoPool:D,calculateDepositSwapAmount:async o=>{const{lowerTick:u,upperTick:b,curSqrtPrice:k,fix_amount_a:v,input_amount:T,coinTypeA:I,coinTypeB:B,clmm_pool:C,slippage:m,decimals:A}=o;console.log(o,"params###");const s=await n.Vaults.calculateDepositSwapAmount({lowerTick:u,upperTick:b,curSqrtPrice:k,fix_amount_a:v,input_amount:T,coinTypeA:I,coinTypeB:B,clmm_pool:C,use_route:!0},!0);if(console.log(s,"##swapResut"),s){const f=new t(s.swapOutAmount);return{...s,swapOutAmountLimit:S(f.sub(f.mul(m)).toNumber(),A)}}return s},calculateRemoveSwapAmount:async o=>{const{lowerTick:u,upperTick:b,curSqrtPrice:k,fix_amount_a:v,receiveAmount:T,coinTypeA:I,coinTypeB:B,clmm_pool:C,slippage:m,decimals:A}=o;console.log(o,"params###");const s=await n.Vaults.calculateRemoveSwapAmount({lowerTick:u,upperTick:b,curSqrtPrice:k,fix_amount_a:v,receive_amount:T,coinTypeA:I,coinTypeB:B,clmm_pool:C,use_route:!0,priceSplitPoint:m});if(console.log(s,"###swapResut calculateRemoveSwapAmount"),s){const f=new t(s.swapOutAmount);return{...s,swapOutAmountLimit:S(f.sub(f.mul(m)).toNumber(),A)}}return s}}}const Lo=qo("autoPool",{state:()=>({autoPoolList:[],autoPoolObj:{},positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{},currentAutoPoolStatus:"STATUS_RUNNING",slippage:localStorage.getItem("cetus-auto-slippage")||"0.1"}),getters:{getPoolStore(){return To()}},actions:{async getAutoPoolList(){const p=await co("Sui").getAutoPools();console.log(p,"list###");const _=this.getPoolStore,c=p.map(n=>({..._.poolConfigObj[n.pool_id],id:n.id,lp_token_type:n.lp_token_type,autoPoolPositionInfo:n.positins[0],is_pause:n.is_pause,total_supply:n.total_supply,liquidity:n.liquidity,protocol_fee_rate:n.protocol_fee_rate,max_quota:n.max_quota,quota_based_type:go(n.quota_based_type).full_address}));this.autoPoolList=c,this.autoPoolObj=Object.fromEntries(c.map((n,r)=>[n.address,n])),this.getMyAutoPoolPosition(),console.log(c,"##autoPoolList")},async getMyAutoPoolPosition(){var r,j,Y;const e=co("Sui"),p=this.autoPoolList,_=mo("Sui"),c=[],{RATES:n}=this.getPoolStore;for(let D=0;D<p.length;D++){const i=p[D];console.log(i,"poolINfo###");const d=await _.getPool(i.address),g=await e.getLpBalance(p[D].lp_token_type);console.log(g,"balance##");const V=(await _.getTokenListByCoinType([p[D].lp_token_type]))[0];console.log(V,"lpInfo##");const oo=((r=n[i.coinA.address])==null?void 0:r.price)||"",W=((j=n[i.coinB.address])==null?void 0:j.price)||"",E=i.autoPoolPositionInfo.tick_lower_index,o=i.autoPoolPositionInfo.tick_upper_index,u={tick_lower_index:E,tick_upper_index:o,current_sqrt_price:d==null?void 0:d.current_sqrt_price,liquidity:Number(g)>0?J.get_share_liquidity_by_amount({liquidity:i==null?void 0:i.liquidity,total_supply:i==null?void 0:i.total_supply},g):0},b=await _.getCoinAmountFromLiquidity({pool:{...i,current_sqrt_price:d==null?void 0:d.current_sqrt_price},position:u,roundUp:!1});console.log(b,"##amountInfo");const k=b.coinaAmount,v=b.coinbAmount,T=k,I=v,B=i.coinA.decimals,C=i.coinB.decimals,m=_.TickMath.tickIndexToPrice(Number(E),B,C).toString(),A=_.TickMath.tickIndexToPrice(Number(o),B,C).toString(),s=new t(oo).mul(new t(k)).toNumber(),f=new t(W).mul(new t(v)).toNumber(),x=s>0&&s<.01?"<$0.01":`$${so(S(s,2))}`,K=f>0&&f<.01?"<$0.01":`$${so(S(f,2))}`,w=uo.sqrtPriceX64ToPrice(d.current_sqrt_price,B,C),a=await _.getCoinAmountFromLiquidity({pool:{...i,tick_lower_index:E,tick_upper_index:o,current_sqrt_price:d==null?void 0:d.current_sqrt_price},position:{...u,liquidity:i.liquidity},roundUp:!1}),h=new t(a.coinaAmount).toNumber(),l=new t(a.coinbAmount).toNumber();console.log(h,l,w.toString(),"###116");const $=S(new t(h).mul(new t(oo)).toNumber(),2),U=S(new t(l).mul(new t(W)).toNumber(),2);console.log(d,"newPool##"),console.log(h,l,"###131");const{ratioA:Z,ratioB:L}=J.calculateDepositRatio(E,o,new N.BN(d==null?void 0:d.current_sqrt_price));console.log(Z.toString(),L.toString(),"###139");const P=Number(S(Z.toString(),2))*100,R=100-P;console.log(h,l,P,R,"###147");let F=0;Number(g)>0&&(F=new t(g).div(Math.pow(10,V.decimals)));const M=oo&&W?S(new t(s).add(new t(f)).toString(),2):"--",Q=i.total_supply;let q=0;F>0&&Q>0&&(q=new t(F).mul(Math.pow(10,V.decimals)).div(new t(Q)).mul(100).toNumber()),console.log(q,"##myShare");const X=new t(1).div(Math.pow(10,i.decimals)).toNumber();let O=0;if(q>1)O=S(q,2);else if(q>0&&q<X)O=`<${X}`;else if(q==0)O=0;else{const ao=_o(q),wo=ao==-1?2:ao+2;O=S(q,wo)}console.log(g,F.toString(),"###balance");const z=(await _.getTokenListByCoinType([i.quota_based_type]))[0],H=eo(i.max_quota,z.decimals);console.log(i.quota_based_type,z,H,"##quoteCoinInfo");const to=z.address==i.coin_b_address,no=to?new t(a.coinaAmount).mul(i.price).add(a.coinbAmount):new t(a.coinaAmount).mul(1/i.price).add(a.coinbAmount),yo=no.toNumber(),lo=H,Ao=to?new t(a.coinaAmount).mul(i.price).add(a.coinbAmount):new t(a.coinaAmount).mul(1/i.price).add(a.coinbAmount),ro=new t(lo).sub(Ao).mul(W).toNumber();console.log(ro,"remainingTokenUSD##"),console.log(no.toNumber(),"#poolTokenNum"),this.positionInfoObj[i.id]={tick_lower_index:E,tick_upper_index:o,current_sqrt_price:d.current_sqrt_price,myLiquidity:eo(g,V.decimals),amountA:T,amountB:I,...i,lpInfo:V,myAmountAUSD:x,myAmountBUSD:K,myLiquidityUSD:M,myShare:O,minPrice:m,maxPrice:A,poolCoinARatio:P,poolCoinBRatio:R,poolCoinANum:h,poolCoinBNum:l,poolCoinAUSD:$,poolCoinBUSD:U,quoteUSD:lo,poolUSD:Number($)+Number(U),balance:g,quoteCoinInfo:z,remainingTokenUSD:ro},c.push({tick_lower_index:E,tick_upper_index:o,current_sqrt_price:(Y=i==null?void 0:i.object)==null?void 0:Y.current_sqrt_price,myLiquidity:eo(g,V.decimals),amountA:T,amountB:I,...i,lpInfo:V,myAmountAUSD:x,myAmountBUSD:K,myLiquidityUSD:M,myShare:O,minPrice:m,maxPrice:A,poolCoinARatio:P,poolCoinBRatio:R,poolCoinANum:h,poolCoinBNum:l,poolCoinAUSD:$,poolCoinBUSD:U,quoteUSD:lo,poolUSD:yo,balance:g})}this.positionInfoList=c,console.log(this.positionInfoObj,"this.positionInfoObj###"),console.log(this.positionInfoList,"###this.positionInfoList")},async updatePositionItem(e){var z,H;const p=co("Sui"),_=mo("Sui"),c=await p.getAutoPool(e),n=await _.getPool(c.pool_id);console.log("newPoolInfo:",c),console.log("newPool:",n),console.log("this.positionInfoObj[id]:",this.positionInfoObj[e]);const r={...this.positionInfoObj[e],autoPoolPositionInfo:c.positins[0]},j=await p.getLpBalance(r.lp_token_type),Y=(await _.getTokenListByCoinType([r.lp_token_type]))[0];console.log(j,"###balance updatePositionItem");const D=r.autoPoolPositionInfo.tick_lower_index,i=r.autoPoolPositionInfo.tick_upper_index,d={tick_lower_index:D,tick_upper_index:i,current_sqrt_price:n.current_sqrt_price,liquidity:J.get_share_liquidity_by_amount({liquidity:c==null?void 0:c.liquidity,total_supply:c==null?void 0:c.total_supply},j)},g=_.getCoinAmountFromLiquidity({pool:{current_sqrt_price:n.current_sqrt_price,...r},position:d,roundUp:!1});console.log(g,"amountInfo###");const V=g.coinaAmount,oo=g.coinbAmount,{RATES:W}=this.getPoolStore,E=c.total_supply,o=uo.sqrtPriceX64ToPrice(n.current_sqrt_price,r.coinA.decimals,r.coinB.decimals),u=2,b=2,k=((z=W[r.coinA.address])==null?void 0:z.price)||0,v=((H=W[r.coinB.address])==null?void 0:H.price)||0,T=new t(k).mul(new t(g==null?void 0:g.coinaAmount)).toNumber(),I=new t(v).mul(new t(g==null?void 0:g.coinbAmount)).toNumber(),B=T>0&&T<.01?"<$0.01":`$${so(S(T,2))}`,C=I>0&&I<.01?"<$0.01":`$${so(S(I,2))}`;let m=new t(0);Number(j)>0&&(m=new t(j).div(Math.pow(10,Y.decimals)));const A=k&&v?S(new t(T).add(new t(I)).toString(),2):"--",s=new t(m).mul(Math.pow(10,r.lpInfo.decimals)).div(new t(E)).mul(100).toNumber();console.log(s,"##myShare");const f=new t(1).div(Math.pow(10,r.decimals)).toNumber();let x=0;if(s>1)x=S(s,2);else if(s>0&&s<f)x=`<${f}`;else if(s==0)x=0;else{const to=_o(s),no=to==-1?2:to+2;x=S(s,no)}const K=uo.sqrtPriceX64ToPrice(n.current_sqrt_price,u,b),w=await _.getCoinAmountFromLiquidity({pool:{...r,tick_lower_index:D,tick_upper_index:i,current_sqrt_price:n==null?void 0:n.current_sqrt_price},position:{...d,liquidity:c.liquidity},roundUp:!1}),a=new t(w.coinaAmount).toNumber(),h=new t(w.coinbAmount).toNumber();console.log(a,h,K.toString(),"###116");const l=S(new t(a).mul(new t(k)).toNumber(),2),$=S(new t(h).mul(new t(v)).toNumber(),2);console.log(n,"newPool##"),console.log(a,h,"###poolCoinBNum");const{ratioA:U,ratioB:Z}=J.calculateDepositRatio(D,i,new N.BN(n==null?void 0:n.current_sqrt_price));console.log(U.toString(),Z.toString(),"###139");const L=Number(S(U.toString(),2))*100,P=100-L,R=(await _.getTokenListByCoinType([c.quota_based_type]))[0],F=eo(c.max_quota,R.decimals);console.log(c.quota_based_type,R,F,"##quoteCoinInfo");const M=R.address==r.coin_b_address;(M?new t(w.coinaAmount).mul(r.price).add(w.coinbAmount):new t(w.coinaAmount).mul(1/r.price).add(w.coinbAmount)).toNumber();const q=F,X=M?new t(w.coinaAmount).mul(r.price).add(w.coinbAmount):new t(w.coinaAmount).mul(1/r.price).add(w.coinbAmount),O=new t(q).sub(X).mul(v).toNumber();console.log(O,"remainingTokenUSD##"),this.positionInfoObj[e]={...r,tick_lower_index:D,tick_upper_index:i,current_sqrt_price:n.current_sqrt_price,myLiquidity:eo(j,Y.decimals),amountA:V,amountB:oo,myShare:x,myAmountAUSD:B,myAmountBUSD:C,myLiquidityUSD:A,poolCoinARatio:L,poolCoinBRatio:P,poolCoinANum:a,poolCoinBNum:h,poolCoinAUSD:l,poolCoinBUSD:$,quoteUSD:q,poolUSD:Number(l)+Number($),balance:j,price:o,quoteCoinInfo:R,remainingTokenUSD:O},console.log(this.positionInfoObj[e],"###this.positionInfoObj[id]")},async getAutoPoolAPY(){try{const{data:e}=await fetch(`${y.Sui.api}/v2/sui/auto_pools`).then(p=>p.json());e&&e.pools&&e.pools.length>0&&(this.apyObj=Object.fromEntries(e.pools.map((p,_)=>[p.object_id,{...p,apr:p.apr.replace("%","")>0&&p.apr.replace("%","")<.01?"<0.01%":S(p.apr.replace("%",""),2)+"%",resultApr:p.apr.replace("%","")}])),console.log(this.apyObj,"data##"))}catch{this.apyObj={}}},async getVault(e){const p=co("Sui"),{status:_}=await p.getVault(e);this.currentAutoPoolStatus=_,this.updatePositionItem(e),console.log(_,"status##")},setSlippage(e){console.log(e,"slippage##"),this.slippage=e,localStorage.setItem("cetus-auto-slippage",e)}}});export{co as a,Lo as u};
