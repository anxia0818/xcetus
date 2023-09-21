import{a6 as Y,l as z,T as G,a7 as H}from"./entry.c197059f.js";import{c as n,a as Q}from"./sha256.1edb603b.js";import{I as X,C as E,J as I,l as F,u as Z,b as K,a as T,s as q,f as J,p as D}from"./pool.567d970e.js";import{C as N,V as W}from"./index.4f467e5e.js";import{D as c}from"./decimal.0e8aa3f1.js";function C(o){const i={launchpad:n[o||"Sui"].launchpad,ido:n[o||"Sui"].ido,xcetus:n[o||"Sui"].xcetus,xcetus_dividends:n[o||"Sui"].xcetus_dividends,cetus_faucet:n[o||"Sui"].cetus_faucet,xtoken:n[o||"Sui"].xtoken,xtoken_dividends:n[o||"Sui"].xtoken_dividends,token_faucet:n[o||"Sui"].token_faucet,booster:n[o||"Sui"].booster,maker_bonus:n[o||"Sui"].maker_bonus,liquidity_stratefy:n[o||"Sui"].liquidity_stratefy,vaults:n[o||"Sui"].vaults},S={fullRpcUrl:localStorage.getItem(`${o}-currentRpclocal2`)||n[o||"Sui"].fullRpcUrl,simulationAccount:n[o||"Sui"].simulationAccount,cetus_config:n[o||"Sui"].cetus_config,clmm_pool:n[o||"Sui"].clmm_pool,integrate:n[o||"Sui"].integrate,deepbook:n[o||"Sui"].deepbook,deepbook_endpoint_v2:n[o||"Sui"].deepbook_endpoint_v2,aggregatorUrl:n[o||"Sui"].aggregatorUrl},s=new X(S),e=Y(new N(i,s)),d=Q(),b=z(()=>d);G(()=>{b.value.address&&(s.senderAddress=b.value.address)});const h=async()=>{console.log(e,"sdk###");const t=await e.Vaults.getVaultList();return t&&t.data||[]},j=async t=>await e.Vaults.getVault(t),x=async t=>{console.log(t,"###coinType");const l=await e.ClmmSDK.fullClient.getBalance({owner:s.senderAddress,coinType:t});return l&&l.totalBalance},r=t=>({transactionBlock:t,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getAutoPools:h,getLpBalance:x,deposit:async t=>{const{lowerTick:l,upperTick:a,coinAmount:y,fix_amount_a:p,slippage:_,curSqrtPrice:k,rewarder_coin_types:f}=t;console.log(t,"params###");const g=E.estLiquidityAndcoinAmountFromOneAmounts(l,a,y,p,!0,_,k),u=p?y.toString():g.tokenMaxA.toString(),m=p?g.tokenMaxB.toString():y.toString(),w=await e.Vaults.deposit({vault_id:t.id,clmm_pool:t.clmm_pool,lp_token_type:t.lp_token_type,amount_a:u,amount_b:m,fix_amount_a:p,slippage:_,coinTypeA:t.coinTypeA,coinTypeB:t.coinTypeB,rewarder_coin_types:[]});return r(w)},remove:async t=>{const{lowerSqrtPrice:l,upperSqrtPrice:a,lpTokenAmount:y,curSqrtPrice:p,slippage:_,rewarder_coin_types:k}=t;console.log(t,"params##");const f=E.getCoinAmountFromLiquidity(y,p,l,a,!0),g=I(f.coinA.toString()).mul(I(1-_)),u=I(f.coinB.toString()).mul(I(1-_));console.log(f.coinA.toString(),"##.toString()"),console.log(t.lpTokenAmount.toString(),g.toString(),u.toString(),"params##");const m=await e.Vaults.remove({vault_id:t.id,clmm_pool:t.clmm_pool,lp_token_type:t.lp_token_type,coinTypeA:t.coinTypeA,coinTypeB:t.coinTypeB,lp_token_amount:y.toString(),min_amount_a:F(g.toString(),0)||"",min_amount_b:F(u.toString(),0)||"",rewarder_coin_types:[]});return r(m)},getAutoPool:j}}const st=H("autoPool",{state:()=>({autoPoolList:[],autoPoolObj:{},positionInfoObj:{},positionInfoList:[],positionUSDObj:{},apyObj:{}}),getters:{getPoolStore(){return Z()}},actions:{async getAutoPoolList(){const i=await C("Sui").getAutoPools();console.log(i,"list###");const S=this.getPoolStore,s=i.map(e=>({...S.poolConfigObj[e.pool_id],id:e.id,lp_token_type:e.lp_token_type,autoPoolPositionInfo:e.positins[0],is_pause:e.is_pause,total_supply:e.total_supply,liquidity:e.liquidity}));this.autoPoolList=s,this.autoPoolObj=Object.fromEntries(s.map((e,d)=>[e.address,e])),this.getMyAutoPoolPosition(),console.log(s,"##autoPoolList")},async getMyAutoPoolPosition(){var d,b,h,j,x,r,v;const o=C("Sui"),i=this.autoPoolList,S=K("Sui"),s=[],{RATES:e}=this.getPoolStore;for(let A=0;A<i.length;A++){const t=i[A];console.log(t,"poolINfo###");const l=await o.getLpBalance(i[A].lp_token_type);console.log(l,"balance##");const a=(await S.getTokenListByCoinType([i[A].lp_token_type]))[0];console.log(a,"lpInfo##");const y=((d=e[t.coinA.address])==null?void 0:d.price)||"",p=((b=e[t.coinB.address])==null?void 0:b.price)||"",_=t.autoPoolPositionInfo.tick_lower_index,k=t.autoPoolPositionInfo.tick_upper_index;console.log(i[A],"list[i]"),console.log((h=t==null?void 0:t.object)==null?void 0:h.current_sqrt_price,"##poolInfo?.object?.current_sqrt_price");const f={tick_lower_index:_,tick_upper_index:k,current_sqrt_price:(j=t==null?void 0:t.object)==null?void 0:j.current_sqrt_price,liquidity:Number(l)>0?W.get_share_liquidity_by_amount({liquidity:t==null?void 0:t.liquidity,total_supply:t==null?void 0:t.total_supply},l):0};console.log(t,"##position");const g=S.getCoinAmountFromLiquidity({pool:{...t,current_sqrt_price:(x=t==null?void 0:t.object)==null?void 0:x.current_sqrt_price},position:f,roundUp:!0}),u=g.coinaAmount,m=g.coinbAmount,w=new c(y).mul(new c(u)).toNumber(),B=new c(p).mul(new c(m)).toNumber(),O=w>0&&w<.01?"<$0.01":`$${T(q(w,2))}`,$=B>0&&B<.01?"<$0.01":`$${T(q(B,2))}`;let U=0;Number(l)>0&&(U=new c(l).div(Math.pow(10,a.decimals)));const M=y&&p?q(new c(w).add(new c(B)).toString(),2):"",R=t.total_supply;let P=0;U>0&&R>0&&(P=new c(U).mul(Math.pow(10,a.decimals)).div(new c(R)).mul(100).toNumber()),console.log(P,"##myShare");const V=new c(1).div(Math.pow(10,t.decimals)).toNumber();let L=0;P>1?L=q(P,2):P>0&&P<V?L=`<${V}`:P==0?L=0:L=J(P,1),console.log(l,U.toString(),"###balance"),this.positionInfoObj[t.id]={tick_lower_index:_,tick_upper_index:k,current_sqrt_price:(r=t==null?void 0:t.object)==null?void 0:r.current_sqrt_price,myLiquidity:D(l,a.decimals),amountA:u,amountB:m,...t,lpInfo:a,myAmountAUSD:O,myAmountBUSD:$,myLiquidityUSD:M,myShare:L},s.push({tick_lower_index:_,tick_upper_index:k,current_sqrt_price:(v=t==null?void 0:t.object)==null?void 0:v.current_sqrt_price,myLiquidity:D(l,a.decimals),amountA:u,amountB:m,...t,lpInfo:a,myAmountAUSD:O,myAmountBUSD:$,myLiquidityUSD:M,myShare:L})}this.positionInfoList=s,console.log(this.positionInfoObj,"this.positionInfoObj###"),console.log(this.positionInfoList,"###this.positionInfoList")},async updatePositionItem(o){var B,O;const i=C("Sui"),S=K("Sui"),s=await i.getAutoPool(o);console.log("newPoolInfo:",s),console.log("this.positionInfoObj[id]:",this.positionInfoObj[o]);const e={...this.positionInfoObj[o],autoPoolPositionInfo:s.positins[0]},d=await i.getLpBalance(e.lp_token_type),b=(await S.getTokenListByCoinType([e.lp_token_type]))[0];console.log(d,"###balance updatePositionItem");const h=e.autoPoolPositionInfo.tick_lower_index,j=e.autoPoolPositionInfo.tick_upper_index,x={tick_lower_index:h,tick_upper_index:j,current_sqrt_price:e.object.current_sqrt_price,liquidity:W.get_share_liquidity_by_amount({liquidity:s==null?void 0:s.liquidity,total_supply:s==null?void 0:s.total_supply},d)},r=S.getCoinAmountFromLiquidity({pool:{current_sqrt_price:e.object.current_sqrt_price,...e},position:x,roundUp:!0});console.log(r,"amountInfo###");const v=r.coinaAmount,A=r.coinbAmount,{RATES:t}=this.getPoolStore,l=s.total_supply,a=((B=t[e.coinA.address])==null?void 0:B.price)||0,y=((O=t[e.coinB.address])==null?void 0:O.price)||0,p=new c(a).mul(new c(r==null?void 0:r.coinaAmount)).toNumber(),_=new c(y).mul(new c(r==null?void 0:r.coinbAmount)).toNumber(),k=p>0&&p<.01?"<$0.01":`$${T(q(p,2))}`,f=_>0&&_<.01?"<$0.01":`$${T(q(_,2))}`;let g=new c(0);Number(d)>0&&(g=new c(d).div(Math.pow(10,b.decimals)));const u=new c(g).mul(Math.pow(10,e.lpInfo.decimals)).div(new c(l)).mul(100).toNumber();let m=0;const w=new c(1).div(Math.pow(10,e.decimals)).toNumber();u>1?m=q(u,2):u>0&&u<w?m=`<${w}`:m=J(u,1),this.positionInfoObj[o]={...e,tick_lower_index:h,tick_upper_index:j,current_sqrt_price:e.object.current_sqrt_price,myLiquidity:D(d,b.decimals),amountA:v,amountB:A,myShare:m,myAmountAUSD:k,myAmountBUSD:f},console.log(this.positionInfoObj[o],"###this.positionInfoObj[id]")},async getAutoPoolAPY(){const{data:o}=await fetch(`${n.Sui.api}/v2/sui/auto_pools`).then(i=>i.json());o&&o.pools&&o.pools.length>0&&(this.apyObj=Object.fromEntries(o.pools.map((i,S)=>[i.object_id,{...i,apr:i.apr.replace("%","")>0&&i.apr.replace("%","")<.01?"<0.01%":q(i.apr.replace("%",""),2)+"%",resultApr:i.apr.replace("%","")}])),console.log(this.apyObj,"data##"))}}});export{C as a,st as u};
