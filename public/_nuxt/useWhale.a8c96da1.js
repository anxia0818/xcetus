import{C as V,X as c}from"./index.4f467e5e.js";import{A,s as l}from"./pool.567d970e.js";import{c as a,a as U}from"./sha256.1edb603b.js";import{D as u}from"./decimal.0e8aa3f1.js";import{a6 as W,l as E,T as K}from"./entry.c197059f.js";function H(r){const m={launchpad:a[r||"Sui"].launchpad,ido:a[r||"Sui"].ido,xcetus:a[r||"Sui"].xcetus,xcetus_dividends:a[r||"Sui"].xcetus_dividends,cetus_faucet:a[r||"Sui"].cetus_faucet,xtoken:a[r||"Sui"].xtoken,xtoken_dividends:a[r||"Sui"].xtoken_dividends,token_faucet:a[r||"Sui"].token_faucet,booster:a[r||"Sui"].booster,maker_bonus:a[r||"Sui"].maker_bonus},w={fullRpcUrl:localStorage.getItem(`${r}-currentRpclocal2`)||a[r||"Sui"].fullRpcUrl,simulationAccount:a[r||"Sui"].simulationAccount,cetus_config:a[r||"Sui"].cetus_config,clmm_pool:a[r||"Sui"].clmm_pool,integrate:a[r||"Sui"].integrate,deepbook:a[r||"Sui"].deepbook,deepbook_endpoint_v2:a[r||"Sui"].deepbook_endpoint_v2,aggregatorUrl:a[r||"Sui"].aggregatorUrl},v=new A(w),s=W(new V(m,v)),y=U(),g=E(()=>y);K(()=>{g.value.address&&(s.ClmmSDK.senderAddress=g.value.address)});const C=async e=>{const t=await s.XCetusModule.getOwnerLockCetuss(e);return console.log(t,"===>lockWhales"),t},f=async(e,t)=>{const o=c.getAvailableXCetus(e,t);return console.log(o,"==>availableXwhale"),o},p=async e=>{const t=await s.XCetusModule.getOwnerCetusCoins(e);return console.log(t,"===>coins"),t},S=async e=>await s.XCetusModule.getOwnerVeNFT(e),M=async(e,t)=>{const o={amount:e};t&&(o.venft_id=t);const n=await s.XCetusModule.convertPayload(o);return i(n)},_=async()=>{const e=await s.XCetusModule.mintVeNFTPayload();return i(e)},D=async(e,t)=>{const o=await s.XCetusModule.redeemNum(e,t);return console.log(o,"result===>"),{amountOut:o.amountOut,percent:l(new u(o.percent).mul(new u(100)).toString(),2)}},X=async(e,t)=>{const o=await s.XCetusModule.reverseRedeemNum(e,t);return{amountOut:o.amountOut,percent:l(new u(o.percent).mul(new u(100)).toString(),2)}},k=async(e,t,o)=>{const n=await s.XCetusModule.redeemLockPayload({venft_id:t,amount:e,lock_day:o});return console.log(n,"tx===>"),i(n)},x=e=>c.getLockingCetuss(e),T=async(e,t)=>{const o=await s.XCetusModule.getLockCetus(e);if(o&&c.isLocked(o)){const n=s.XCetusModule.cancelRedeemPayload({venft_id:t,lock_id:e});return i(n)}},b=async(e,t)=>{const o=await s.XCetusModule.getLockCetus(e);if(o&&!c.isLocked(o)){const n=await s.XCetusModule.redeemPayload({venft_id:t,lock_id:e});return i(n)}},P=e=>{const t=Date.parse(new Date().toString())/1e3,o=new u(t).sub(e.start_time).div(new u(e.interval_day).mul(60)).toFixed(0,u.ROUND_UP),n=new u(e.start_time).add(new u(o).mul(60*e.interval_day));return console.log(n,"===>nextStartTime"),n.toString()},I=async()=>{const e=await s.XCetusModule.getDividendManager();console.log("dividendManager:",e);const t=P(e);return console.log(t,"===>nextStartTime"),{nextStartTime:t,...e}},O=async(e,t)=>{const o=await s.XCetusModule.getVeNFTDividendInfo(t.venft_dividends.id,e);return{rewards:o&&o.rewards||[]}},R=async e=>{const t=await s.XCetusModule.getDividendManager();if(console.log("dividendManager: ",t),t.bonus_types.length>0){const o=await s.XCetusModule.redeemDividendPayload(e,t.bonus_types);return i(o)}},h=e=>{const t=new Set;return e.forEach(o=>{o.rewards.forEach(n=>{n.amount>0&&t.add(n.coin_type)})}),Array.from(t)},F=async e=>{const t=await s.XCetusModule.getDividendManager(),o=await s.XCetusModule.getVeNFTDividendInfo(t.venft_dividends.id,e);console.log("veNFTDividendInfo: ",o);const n=h(o.rewards);console.log(n,"===>bonus_types");const d=await s.XCetusModule.redeemDividendV2Payload(e,n,[s.XCetusModule.buileXTokenCoinType()]);return i(d)},L=async e=>{console.log(e,"==>accountAddress");try{const t=await s.XCetusModule.getOwnerVeNFT(e);if(console.log("nfts: ",t),t){const o=await s.XCetusModule.getXcetusManager();console.log("xcetusManager: ",o);const n=new u(t.xcetus_balance).div(o.treasury).mul(100).toString();return console.log("rate: ",n),Number(n)>0&&Number(n)<.001?"<0.001":l(n,3)}else return 0}catch{return"--"}},i=e=>({transactionBlock:e,options:{showEffects:!0,showEvents:!0,showInput:!0,showRawInput:!0,showObjectChanges:!0,showBalanceChanges:!0}});return{getOwnerLockCetuss:C,getOwnerCetusCoins:p,getOwnerVeNFT:S,depositCetus:M,getMintVeNFTPayload:_,redeemNum:D,getRedeemLockPayload:k,getAvailableXCetus:f,getLockingCetuss:x,getCancelRedeemPayload:T,getVeNFTDividendInfo:O,reverseRedeemNum:X,getRedeemPayload:b,getRedeemDividendPayload:R,getMyShare:L,getDividendManager:I,getPeriod:e=>{const t=Date.now()/1e3,{start_time:o,interval_day:n}=e,d=Math.ceil((t-o)/(n*60));return console.log(t,"===>currentTime"),console.log(o,"===>start_time"),console.log(t-o,"===>currentTime-start_time"),console.log((t-o)/(n*60),"(currentTime - start_time) / (interval_day * 60)"),d},getRedeemDividendV2Payload:F,getPhaseDividendInfo:async e=>{const t=await s.XCetusModule.getPhaseDividendInfo(e.dividends.size);return console.log(t,"==>phaseDividendInfo"),t}}}export{H as u};
