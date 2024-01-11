import{a7 as Q}from"./entry.3bbe0de9.js";import{u as V,T as D,e as z,m as H}from"./pool.35d4df31.js";import{D as c}from"./decimal.0bdeb344.js";import{c as W}from"./sha256.fd6f2e4a.js";const to=Q("farms",{state:()=>({farmsPoolList:[],farmsPoolObj:{},farmsPoolListLoading:!1,cmmPoolInfoObj:{},farmsPositionObj:{},farmsLoadingObj:{},farmsUserUsd:{},farmsRewardObj:{},totalRwadrdUsd:"",farmsPositionList:[],farmsAllPositionLoading:!1,myFarmsPoolList:[]}),getters:{getPoolStore(){return V()}},actions:{async getFarmsPoolList(){this.farmsPoolListLoading=!0;try{const{data:P}=await fetch(`${W.Sui.api}/v2/sui/swap/count`).then(r=>r.json()),_=P.pools.filter(r=>r.stable_farming);console.log(_,"#farmsPoolsfarmsPools");let u=0;const m=_.map(r=>{console.log(r,"#farmsPool");const g=r.stable_farming,w=r.coin_a.decimals,s=r.coin_b.decimals,a=D.tickIndexToPrice(g.effective_tick_lower,w,s).toString(),l=D.tickIndexToPrice(g.effective_tick_upper,w,s).toString(),e=g.stable_rewarder.map(d=>(u+=d.amount_second,{emission_per_day:new c(d.amount_second).mul(60*60*24),reward_coin:d.coin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":d.coin,symbol:d.symbol,allocate_point:d.amount_second>0?1:0}));return{...r,clmm_pool_id:r.swap_account,effective_tick_lower:g.effective_tick_lower,effective_tick_upper:g.effective_tick_upper,fee:r.fee*100+"%",id:g.stable_farming_pool,rewarders:e,status:u>0?"Live":"Ended",minPrice:a,maxPrice:l,coinA:r.coin_a,coinB:r.coin_b}});this.farmsPoolList=m,this.farmsPoolObj=Object.fromEntries(m.map(r=>[r.clmm_pool_id,{...r,address:r.clmm_pool_id}])),this.farmsPoolListLoading=!1,console.log(_,m,"farmsPools####")}catch(P){console.log("getFarmsPoolList error:",P);const u=await z("Sui").getLpList(),m=Object.fromEntries(u.map((s,a)=>[s.address,s]));console.log(m,"cmmLpObj##");const g=await H("Sui").getFramsPoolList();console.log("getFarmsPoolList:",g);const w=g.map(s=>{const a=m[s.clmm_pool_id];let l=0;const{tokensObj:e}=this.getPoolStore,d=s.rewarders.map(n=>{const o=n.reward_coin=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":n.reward_coin,f=e[o].decimals,L=e[o].symbol;l=l+Number(n.allocate_point);const p=new c(n.allocate_point).div(new c(n.total_allocate_point));return{...n,reward_coin:o,emission_per_day:Number(n.allocate_point)>0?new c(n.emission_per_second).mul(p).div(Math.pow(10,12)).mul(60*60*24).div(Math.pow(10,f)).toString():"0",symbol:L}}),U=a.coinA.decimals,b=a.coinB.decimals,i=D.tickIndexToPrice(s.effective_tick_lower,U,b).toString(),t=D.tickIndexToPrice(s.effective_tick_upper,U,b).toString();return console.log(l,"allocatePoint##"),{...s,minPrice:i,maxPrice:t,fee:a.fee*100+"%",coinA:a.coinA,coinB:a.coinB,rewarders:d,status:l>0?"Live":"Ended"}});console.log("getFarmsPoolList",w),this.farmsPoolList=w,this.farmsPoolObj=Object.fromEntries(w.map(s=>[s.clmm_pool_id,{...s,address:s.clmm_pool_id}])),this.cmmPoolInfoObj=m,this.farmsPoolListLoading=!1}},async getPositionByPool(P,_,u){var i,t;this.farmsLoadingObj[_]=!0;const m=z("Sui"),r=H("Sui");console.log(P,_,"#account, poolAddress");const w=(await r.getOwnedFramsPositionNFTList(!0)).filter(n=>n.clmm_pool_id==_),s=await m.getPositionList(P,{address:{address:_}})||[],a=w.concat(s);console.log(w,s,"###farmingPositionList"),console.log(a,"###positionGroup");const l={},e={},d=[];for(let n=0;n<a.length;n++){const o=a[n],f=this.farmsPoolObj[o.clmm_pool_id||o.pool];console.log(f,"##poolInfo");const L=f.coinA.decimals,p=f.coinB.decimals;let v,A;o.tick_lower_index==m.TickUtil.getMinIndex(Number(f.tick_spacing))?v="0":v=m.TickMath.tickIndexToPrice(Number(o.tick_lower_index),L,p).toString(),o.tick_upper_index==m.TickUtil.getMaxIndex(Number(f.tick_spacing))?A="∞":A=m.TickMath.tickIndexToPrice(Number(o.tick_upper_index),L,p).toString(),console.log(o,"#position.clmm_pool_id");let O;const I=await m.getPool(o.clmm_pool_id||o.pool),M=D.sqrtPriceX64ToPrice(I.current_sqrt_price,L,p).toString();Number(M)>=Number(v)&&(A==="∞"||Number(M)<=Number(A))?O="Active":(Number(M)>Number(A)||Number(M)<Number(v))&&(O="Inactive");const B=m.getCoinAmountFromLiquidity({pool:I,position:o,roundUp:!1}),{RATES:x,tokensObj:k}=this.getPoolStore;console.log(x,"##cmmPoolStore");const R=((i=x[f.coin_a.address])==null?void 0:i.price)||"",N=((t=x[f.coin_a.address])==null?void 0:t.price)||"",F=new c(B.coinaAmount).div(Math.pow(10,L)),E=new c(B.coinbAmount).div(Math.pow(10,p)),G=new c(B.coinaAmount).div(Math.pow(10,L)).mul(R),T=new c(B.coinbAmount).div(Math.pow(10,p)).mul(N);let j=new c(0);o.rewards&&o.rewards.length>0?o.rewards=o.rewards.map(h=>{var J;console.log(h,o,"reward##171");const X=h.rewarder_type=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":h.rewarder_type,$=k[X];console.log(k,"##tokensObj");const S=((J=x[X])==null?void 0:J.price)||0,y=new c(h.rewarder_amount).div(new c(Math.pow(10,$.decimals)));console.log(y,S,"amount,rewardPrice");const q=y.mul(new c(S));return console.log(q.toString(),"rewarderAmountUsd"),e[o.clmm_pool_id]&&e[o.clmm_pool_id][o.id]?e[o.clmm_pool_id][o.id]=e[o.clmm_pool_id][o.id].add(q):e[o.clmm_pool_id]&&!e[o.clmm_pool_id][o.id]?(e[o.clmm_pool_id][o.id]={},e[o.clmm_pool_id][o.id]=q):(e[o.clmm_pool_id]={},e[o.clmm_pool_id][o.id]={},e[o.clmm_pool_id][o.id]=q),console.log(this.farmsRewardObj,"##farmsRewardObj"),j=j.add(q),{...h,rewarderAmount:y.toString(),rewarderAmountUsd:q.toString(),rewarderType:X}}):(o.rewards=[],this.farmsRewardObj[o.clmm_pool_id]={});let C;if(o.id){const h=G.add(T);l[o.clmm_pool_id]||(l[o.clmm_pool_id]={}),l[o.clmm_pool_id][o.id]=h}console.log(this.farmsUserUsd,"##this.farmsUserUsd"),d.push({...o,minPrice:v,maxPrice:A,positionUSD:G.add(T).toNumber(),clmmPool:o.clmm_pool_id||o.pool,positionStatus:O,positionSource:o.creator?"clmm":"farming",farmsPoolId:u,coinA:f.coinA,coinB:f.coinB,positionShare:C,amountAUsd:G,amountBUsd:T,amountA:F,amountB:E,positionRewardAmount:j})}const U={};Object.keys(e).forEach(n=>{U[n]={},U[n].amountUsd=new c(0),typeof e[n]=="object"&&Object.keys(e[n]).forEach(o=>{console.log(o,e[n][o],"#######375"),U[n].amountUsd=U[n].amountUsd.add(e[n][o])})});const b={};Object.keys(l).forEach(n=>{b[n]={},b[n].amount=new c(0),b[n].positionNum=0,typeof l[n]=="object"&&Object.keys(l[n]).forEach(o=>{b[n].amount=b[n].amount.add(l[n][o]),b[n].positionNum+=1})}),console.log("farmsUserUsd:",l),console.log(U,"##farmsRewardObjResult"),this.farmsRewardObj={...this.farmsRewardObj,...U},this.farmsUserUsd={...this.farmsUserUsd,...b},this.farmsPositionObj[_]=d,this.farmsLoadingObj[_]=!1},async getPositionByAllPool(P){var U,b;this.farmsAllPositionLoading=!0;const _=H("Sui"),u=z("Sui");this.totalRwadrdUsd=0;const m=await _.getOwnedFramsPositionNFTList(!0),r=await u.getPositionList(P,this.farmsPoolObj)||[];console.log(r,"###clmmPositionList");const g=m.concat(r);console.log(g,"##positionGroup");const w=[],s={},a={};for(let i=0;i<g.length;i++){const t=g[i],n=await u.getPool(t.clmm_pool_id||t.pool),o=u.getCoinAmountFromLiquidity({pool:n,position:t,roundUp:!1}),{RATES:f,tokensObj:L}=this.getPoolStore,p=this.farmsPoolObj[t.clmm_pool_id||t.pool],v=((U=f[p.coin_a.address])==null?void 0:U.price)||"",A=((b=f[p.coin_b.address])==null?void 0:b.price)||"",O=p.coin_a.decimals,I=p.coin_b.decimals,M=new c(o.coinaAmount).div(Math.pow(10,O)),B=new c(o.coinbAmount).div(Math.pow(10,I)),x=new c(o.coinaAmount).div(Math.pow(10,O)).mul(v),k=new c(o.coinbAmount).div(Math.pow(10,I)).mul(A);let R,N;t.tick_lower_index==u.TickUtil.getMinIndex(Number(p.tick_spacing))?R="0":R=u.TickMath.tickIndexToPrice(Number(t.tick_lower_index),O,I).toString(),t.tick_upper_index==u.TickUtil.getMaxIndex(Number(p.tick_spacing))?N="∞":N=u.TickMath.tickIndexToPrice(Number(t.tick_upper_index),O,I).toString();let F;const E=D.sqrtPriceX64ToPrice(n.current_sqrt_price,O,I).toString();Number(E)>=Number(R)&&(N==="∞"||Number(E)<=Number(N))?F="Active":(Number(E)>Number(N)||Number(E)<Number(R))&&(F="Inactive");let G;if(t.id){const j=x.add(k);a[t.clmm_pool_id]||(a[t.clmm_pool_id]={}),a[t.clmm_pool_id][t.id]=j}let T=new c(0);t.rewards&&t.rewards.length>0&&(t.rewards=t.rewards.map(j=>{var y;console.log(j,t,"#reward292");const C=j.rewarder_type=="0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI"?"0x2::sui::SUI":j.rewarder_type,h=L[C];console.log(h,C,"tokenInfo##294");const X=((y=f[C])==null?void 0:y.price)||0,$=new c(j.rewarder_amount).div(new c(Math.pow(10,h==null?void 0:h.decimals))),S=$.mul(new c(X));return console.log(S,"##rewarderAmountUsd"),s[t.clmm_pool_id]&&s[t.clmm_pool_id][t.id]?s[t.clmm_pool_id][t.id]=s[t.clmm_pool_id][t.id].add(S):s[t.clmm_pool_id]&&!s[t.clmm_pool_id][t.id]?(s[t.clmm_pool_id][t.id]={},s[t.clmm_pool_id][t.id]=S):(s[t.clmm_pool_id]={},s[t.clmm_pool_id][t.id]={},s[t.clmm_pool_id][t.id]=S),this.totalRwadrdUsd=new c(this.totalRwadrdUsd).add(S),T=T.add(S),{...j,rewarderAmount:$.toString(),rewarderAmountUsd:S.toString(),rewarderType:C}})),console.log(t.rewards,"position.rewards:"),w.push({...t,minPrice:R,maxPrice:N,positionUSD:x.add(k).toNumber(),clmmPool:t.clmm_pool_id||t.pool,positionStatus:F,positionSource:t.creator?"clmm":"farming",farmsPoolId:t.pool_id,coinA:p.coinA,coinB:p.coinB,soucrce:t.id?"farming":"clmm",positionShare:G,amountAUsd:x.toString(),amountBUsd:k.toString(),amountA:M.toString(),amountB:B.toString(),positionRewardAmount:T})}this.farmsPositionList=w;const l={};w.forEach(i=>{l[i.clmm_pool_id||i.pool]||(l[i.clmm_pool_id||i.pool]=[]),l[i.clmm_pool_id||i.pool].push(i)}),this.farmsPositionObj=l,this.farmsAllPositionLoading=!1,console.log(this.farmsPositionObj,"#farmingPositionList"),console.log(s,"##this.farmsRewardObj");const e={};Object.keys(s).forEach(i=>{console.log(s,i,"farmsRewardObj:"),e[i]={},e[i].amountUsd=new c(0),typeof s[i]=="object"&&Object.keys(s[i]).forEach(t=>{console.log(s[i][t].toString(),"#######375"),e[i].amountUsd=e[i].amountUsd.add(s[i][t]),console.log(e[i].amountUsd.toString(),"result[key].amountUsd.toString()")})});const d={};Object.keys(a).forEach(i=>{d[i]={},d[i].amount=new c(0),d[i].positionNum=0,typeof a[i]=="object"&&Object.keys(a[i]).forEach(t=>{d[i].amount=d[i].amount.add(a[i][t]),d[i].positionNum+=1})}),console.log("farmsUserUsd:",a),console.log(this.totalRwadrdUsd,"this.totalRwadrdUsd###"),this.farmsRewardObj=e,this.farmsUserUsd=d,console.log(this.farmsRewardObj,"##this.farmsRewardObj"),this.getMyFarms()},getMyFarms(){const P=[];this.farmsPoolList.forEach(_=>{console.log(this.farmsPositionObj[_.clmm_pool_id],"this.this.farmsPositionObj[##");const u=this.farmsPositionObj[_.clmm_pool_id]&&this.farmsPositionObj[_.clmm_pool_id].filter(m=>m.positionSource=="farming");console.log(u,"getMyFarmsresult##"),u&&u.length>0&&P.push(_)}),this.myFarmsPoolList=P,console.log(P,"##myFarms")},logOut(){this.farmsPositionObj={},this.farmsUserUsd={},this.farmsRewardObj={},this.totalRwadrdUsd="",this.farmsPositionList=[],this.farmsAllPositionLoading=!1,this.myFarmsPoolList=[]}}});export{to as u};
