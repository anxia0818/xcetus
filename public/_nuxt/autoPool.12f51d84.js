import{a6 as U,l as O,T as v,a7 as D}from"./entry.783534ba.js";import{c as e,a as T}from"./sha256.eeab8ed4.js";import{G as C,C as j,H as x,k as h,u as E,b as L,s as I}from"./pool.10df9fa8.js";import{C as F}from"./index.65a8995c.js";import{D as a}from"./decimal.0e8aa3f1.js";function B(o){const c={launchpad:e[o||"Sui"].launchpad,ido:e[o||"Sui"].ido,xcetus:e[o||"Sui"].xcetus,xcetus_dividends:e[o||"Sui"].xcetus_dividends,cetus_faucet:e[o||"Sui"].cetus_faucet,xtoken:e[o||"Sui"].xtoken,xtoken_dividends:e[o||"Sui"].xtoken_dividends,token_faucet:e[o||"Sui"].token_faucet,booster:e[o||"Sui"].booster,maker_bonus:e[o||"Sui"].maker_bonus,liquidity_stratefy:e[o||"Sui"].liquidity_stratefy,mirror_pool:e[o||"Sui"].mirror_pool},n={fullRpcUrl:localStorage.getItem(`${o}-currentRpclocal2`)||e[o||"Sui"].fullRpcUrl,simulationAccount:e[o||"Sui"].simulationAccount,cetus_config:e[o||"Sui"].cetus_config,clmm_pool:e[o||"Sui"].clmm_pool,integrate:e[o||"Sui"].integrate,deepbook:e[o||"Sui"].deepbook,deepbook_endpoint_v2:e[o||"Sui"].deepbook_endpoint_v2,aggregatorUrl:e[o||"Sui"].aggregatorUrl},i=new C(n),s=U(new F(c,i)),r=T(),l=O(()=>r);v(()=>{l.value.address&&(i.senderAddress=l.value.address)});const d=async()=>{console.log(s,"sdk###");const t=await s.MirrorPool.getVaultList();return t&&t.data||[]},p=async t=>{console.log(t,"###coinType");const _=await s.ClmmSDK.fullClient.getBalance({owner:i.senderAddress,coinType:t});return console.log(_,"allBalance###"),_&&_.totalBalance},m=t=>({transactionBlock:t,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:d,getLpBalance:p,deposit:async t=>{const{lowerTick:_,upperTick:y,coinAmount:f,fix_amount_a:u,slippage:k,curSqrtPrice:w}=t;console.log(t,"params###");const A=j.estLiquidityAndcoinAmountFromOneAmounts(_,y,f,u,!0,k,w),P=u?f.toString():A.tokenMaxA.toString(),q=u?A.tokenMaxB.toString():f.toString(),b=await s.MirrorPool.deposit({vault_id:t.id,clmm_pool:t.clmm_pool,lp_token_type:t.lp_token_type,amount_a:P,amount_b:q,fix_amount_a:u,slippage:k,coinTypeA:t.coinTypeA,coinTypeB:t.coinTypeB});return m(b)},remove:async t=>{const{lowerSqrtPrice:_,upperSqrtPrice:y,lpTokenAmount:f,curSqrtPrice:u,slippage:k}=t,w=j.getCoinAmountFromLiquidity(f,u,_,y,!0),A=x(w.coinA.toString()).mul(x(1-k)),P=x(w.coinB.toString()).mul(x(1-k));console.log(t.lpTokenAmount.toString(),A.toString(),P.toString(),"params##");const q=await s.MirrorPool.remove({vault_id:t.id,clmm_pool:t.clmm_pool,lp_token_type:t.lp_token_type,coinTypeA:t.coinTypeA,coinTypeB:t.coinTypeB,lp_token_amount:f.toString(),min_amount_a:h(A.toString(),0)||"",min_amount_b:h(P.toString(),0)||""});return m(q)}}}const H=D("autoPool",{state:()=>({autoPoolList:[],positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{}}),getters:{getPoolStore(){return E()}},actions:{async getAutoPoolList(){const c=await B("Sui").getAutoPools();console.log(c,"list###");const n=this.getPoolStore,i=c.map(s=>({...n.poolConfigObj[s.pool_id],id:s.id,lp_token_type:s.lp_token_type,autoPoolPositionInfo:s.positins[0]}));this.autoPoolList=i,console.log(i,"##autoPoolList")},async getMyAutoPoolPosition(){const o=B("Sui"),c=this.autoPoolList,n=L("Sui"),i=[];for(let s=0;s<c.length;s++){const r=c[s],l=await o.getLpBalance(c[s].lp_token_type);console.log(l,"###balance");const d=r.autoPoolPositionInfo.tick_lower_index,p=r.autoPoolPositionInfo.tick_upper_index,m={tick_lower_index:d,tick_upper_index:p,current_sqrt_price:r.object.current_sqrt_price,liquidity:l},S=n.getCoinAmountFromLiquidity({pool:{current_sqrt_price:r.object.current_sqrt_price,...r},position:m,roundUp:!1}),g=S.coinaAmount,t=S.coinbAmount;this.positionInfoObj[r.address]={tick_lower_index:d,tick_upper_index:p,current_sqrt_price:r.object.current_sqrt_price,myLiquidity:l,amountA:g,amountB:t,...r},i.push({tick_lower_index:d,tick_upper_index:p,current_sqrt_price:r.object.current_sqrt_price,myLiquidity:l,amountA:g,amountB:t,...r})}this.positionInfoList=i,console.log(this.positionInfoObj,"this.positionInfoObj###")},async getUserPositionUSD(){const{RATES:o}=this.getPoolStore,c=L("Sui");console.log(this.positionInfoList,"###this.positionInfoList"),this.positionInfoList.forEach(n=>{var q,b;const i=((q=o[n.coinA.address])==null?void 0:q.price)||0,s=((b=o[n.coinB.address])==null?void 0:b.price)||0,r=new a(i).mul(new a(n==null?void 0:n.amountA)).toString(),l=new a(s).mul(new a(n==null?void 0:n.amountB)).toString(),d=n.coinA.decimals,p=n.coinB.decimals,m=I(r,d),S=I(l,p),g=new a(m).add(new a(S)).toString(),t=n.myLiquidity,_=n.autoPoolPositionInfo.liquidity;console.log(t,_,"####totalLiquidity");const y=new a(t).div(new a(_)).div(100).toNumber(),f={tick_lower_index:n.tick_lower_index,tick_upper_index:n.tick_upper_index,current_sqrt_price:n.object.current_sqrt_price,liquidity:_},u=c.getCoinAmountFromLiquidity({pool:{current_sqrt_price:n.object.current_sqrt_price,...n},position:f,roundUp:!1});console.log(u,"poolAmountInfo##");const k=new a(i).mul(new a(u==null?void 0:u.coinaAmount)).toString(),w=new a(s).mul(new a(u==null?void 0:u.coinbAmount)).toString(),A=I(k,d),P=I(w,p);console.log(u,"###poolAmountInfo"),console.log(y,"###myShare"),console.log(r,l,"##myPosition"),this.positionInfoObj[n.address]={...this.positionInfoObj[n.address],myAmountAUSD:m,myAmountBUSD:S,myLiquidityUSD:g,myShare:y>0&&y<.01?"<0.01":y,poolAmoutnA:A,poolAmoutnB:P},console.log(this.positionInfoObj,"###this.positionInfoObj")})},async updatePositionItem(o){const c=B("Sui"),n=L("Sui"),i=this.positionInfoObj[o],s=await c.getLpBalance(i.lp_token_type),r=i.autoPoolPositionInfo.tick_lower_index,l=i.autoPoolPositionInfo.tick_upper_index,d={tick_lower_index:r,tick_upper_index:l,current_sqrt_price:i.object.current_sqrt_price,liquidity:s},p=n.getCoinAmountFromLiquidity({pool:{current_sqrt_price:i.object.current_sqrt_price,...i},position:d,roundUp:!1});console.log(p,"amountInfo###");const m=p.coinaAmount,S=p.coinbAmount;this.positionInfoObj[i.address]={...i,tick_lower_index:r,tick_upper_index:l,current_sqrt_price:i.object.current_sqrt_price,myLiquidity:s,amountA:m,amountB:S},this.positionInfoList.map(g=>g.address==o?{...i,tick_lower_index:r,tick_upper_index:l,current_sqrt_price:i.object.current_sqrt_price,myLiquidity:s,amountA:m,amountB:S}:g)},async getAutoPoolAPY(){const{data:o}=await fetch(`${e.Sui.api}/v2/sui/auto_pools`).then(c=>c.json());o&&o.pools&&o.pools.length>0&&(this.apyObj=Object.fromEntries(o.pools.map((c,n)=>[c.swap_address,c])),console.log(o,"data##"))}}});export{B as a,H as u};
