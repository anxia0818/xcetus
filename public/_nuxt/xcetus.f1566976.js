import{p as d,a as m,D as g,s as u,N as p}from"./pool.e2b9d385.js";import{u as h}from"./useWhale.6cd3733d.js";import{a1 as v}from"./entry.d7ab8d06.js";import{c as y}from"./index.d6d6cb40.js";const I=v("xcetus",{state:()=>({venft_id:"",xWhaleBalance:"--",venftInfo:{},pendingAmount:"--",newPendingAmount:"--",whaleBalance:"--",ownerLocks:[],availableXwhale:"--",redeemingXwhale:"--",nextStartTime:"",xcetusShare:"--",pendingCoinInfo:{},newPendingCoinInfo:{},cetusApr:"",claimLoading:"",dividendManagerInfo:{}}),actions:{async getOwnerVeNFT(n){const t=h("Sui");try{const e=await t.getOwnerVeNFT(n);console.log(e,"===>result"),e?(this.venft_id=e.id,this.xWhaleBalance=d(e.xcetus_balance,9),this.venftInfo={id:e.id,type:e.type,index:e.index,xcetus_balance:e.xcetus_balance},console.log("执行37"),this.getVeNFTDividendInfo()):(this.xWhaleBalance="0",this.availableXwhale="0",this.redeemingXwhale="0",this.pendingAmount="0",this.newPendingAmount="0")}catch{this.xWhaleBalance="0",this.availableXwhale="0",this.redeemingXwhale="0",this.pendingAmount="0",this.newPendingAmount="0"}},async getVeNFTDividendInfo(){const n=h("Sui"),t=m("Sui");try{const e=await n.getVeNFTDividendInfo(this.venft_id,this.dividendManagerInfo),l=await n.getPeriod(this.dividendManagerInfo),c=await t.getTokenList();console.log(l,"===>period"),console.log(JSON.stringify(e),"===>result");const r=[];if(e&&e.rewards&&e.rewards.length>0){for(let i=0;i<e.rewards.length;i++)if(e.rewards[i].period<l){const a=e.rewards[i].rewards;for(let s=0;s<a.length;s++){const o=a[s];r.push({...o})}}if(r&&r.length>0){const i={};for(let s=0;s<r.length;s++){const o=r[s];if(i[o.coin_type])i[o.coin_type].amount=new g(i[o.coin_type].amount).add(new g(o.amount)).toString();else{let w=c.filter(f=>f.address==o.coin_type)[0];w||(w=(await t.getTokenListByCoinType([o.coin_type]))[0]),i[o.coin_type]={...o,...w}}}const a=Object.values(i);console.log(a,"===>rewardArr"),this.pendingCoinInfo=a[0],this.pendingAmount=u(d(a[0].amount,a[0].decimals),6),this.newPendingCoinInfo=a&&a.length>1?a[1]:{},this.newPendingAmount=a&&a.length>1?u(d(a[1].amount,a[1].decimals),6):0}}else{const i=await n.getPhaseDividendInfo(this.dividendManagerInfo);console.log(i.bonus_types[0],"==>phaseDividendInfo.bonus_types[0]");const a=p(i.bonus_types[0],!1);console.log(a,"==>newPendingCoinAddress");let s=c.filter(o=>o.address==a)[0];s||(s=(await t.getTokenListByCoinType([a]))[0],console.log(s,"tokenList===>")),this.newPendingCoinInfo=s,console.log(s,"===>tokenInfo"),console.log(i,"==>phaseDividendInfo"),this.pendingAmount="0",this.newPendingAmount="0"}}catch{this.pendingAmount="0",this.newPendingAmount="0"}},async getDividendManager(){const t=await h("Sui").getDividendManager();this.nextStartTime=t.nextStartTime,this.dividendManagerInfo=t,this.getVeNFTDividendInfo()},async getAccountWhaleBalance(n){const e=await h("Sui").getOwnerCetusCoins(n);if(console.log(e,"==>assets"),e&&e.length>0){let l=new g(0);e.forEach(c=>{console.log(d(c.balance.toString(),9),"===>prettyAmount(ele.balance.toString(), 9)"),l=l.add(d(c.balance.toString(),9))}),console.log(this.whaleBalance,"===>this.whaleBalance"),this.whaleBalance=l}else this.whaleBalance="0"},async getOwnerLockCetuss(n){const e=await h("Sui").getOwnerLockCetuss(n);console.log(e,"assets===>");const l=e.sort((c,r)=>c.locked_until_time-r.locked_until_time);this.ownerLocks=l,console.log(this.ownerLocks,"===>this.ownerLocks"),this.setClaimLoading(""),this.getAvailableXCetus()},async getAvailableXCetus(){const n=h("Sui");console.log(this.ownerLocks,"==>this.ownerLocks");const t=await n.getAvailableXCetus(this.venftInfo,this.ownerLocks);console.log(t,"==>result1111"),this.availableXwhale=d(t,9),console.log(this.xWhaleBalance,"===>this.xWhaleBalance"),console.log(this.availableXwhale,"===>this.availableXwhale"),this.redeemingXwhale=this.xWhaleBalance!=="--"?new g(this.xWhaleBalance).sub(new g(this.availableXwhale)).toString():"--"},async getMyShare(n){const e=await h("Sui").getMyShare(n);this.xcetusShare=Number(e)>0&&Number(e)<.01?"<0.01":e,console.log(e,"result===>124")},async getXcetusApr(){const{data:n}=await fetch(`${y.Sui.api}/v2/sui/storm/dividend_rewards`).then(e=>e.json()),t=n.apr&&n.apr.replace("%","");this.cetusApr=Number(t)>0&&Number(t)<.01?"<0.01":t,console.log(n,"data===>")},loginOut(){this.venft_id="",this.xWhaleBalance="--",this.venftInfo={},this.pendingAmount="--",this.whaleBalance="--",this.ownerLocks=[],this.availableXwhale="--",this.redeemingXwhale="--",this.xcetusShare="--"},setClaimLoading(n){this.claimLoading=n}}});export{I as u};
