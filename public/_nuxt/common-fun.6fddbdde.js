import{c as u,k as N,a as j,l as _,d as E}from"./pool.2125f30a.js";import{p as R}from"./precision.a7a6c57b.js";const i=(r,e)=>r&&e?R.plus(_(r),_(e)):r||0,O=r=>{let e=0;return r&&r.forEach(o=>{e+=_(String(o))}),String(E(String(e),2))};function L(r,e,o){var v;const c=[],a=r?o.value.addressLpTokens[r.address]:null;let p,f,g,b,w=[],s=[];if(a&&(p=a.rewarder_apr[0]?Number(a.rewarder_apr[0].substring(0,a.rewarder_apr[0].length-1)):0,f=a.rewarder_apr[1]?Number(a.rewarder_apr[1].substring(0,a.rewarder_apr[1].length-1)):0,g=a.rewarder_apr[2]?Number(a.rewarder_apr[2].substring(0,a.rewarder_apr[2].length-1)):0,b=p+f+g),r!=null&&r.rewarder_infos||r!=null&&r.rewarderInfo?s=(r==null?void 0:r.rewarder_infos)||(r==null?void 0:r.rewarderInfo):!u(e.value.addressLpTokens)&&!u(e.value.tokensObj)&&!u(e.value.RATES)&&!u(o.value.newTopPoolsObj)&&(s=(r==null?void 0:r.address)&&e.value.addressLpTokens[r==null?void 0:r.address]&&e.value.addressLpTokens[r==null?void 0:r.address].rewarder_infos||[]),console.log(s,"###rewarderInfos"),s&&s.length>0){s.forEach((d,t)=>{var h,S,A;const T=(h=e.value.tokensObj[d.coinAddress])==null?void 0:h.decimals,l=N(d.emissionsEveryDay/Math.pow(10,T),4),k=Number(l)>0?j(l):l,I=N(Number(l)*e.value.RATES[d.coinAddress]&&e.value.RATES[d.coinAddress].price,4);c.push({...d,logoUrl:(S=e.value.tokensObj[d.coinAddress])==null?void 0:S.logoURI,day:k,dayUSD:I,symbol:(A=e.value.tokensObj[d.coinAddress])==null?void 0:A.symbol,rewarders:a?a.rewarder_apr[t].replace("%",""):"",rewarder_display:r[`rewarder_display${t+1}`],resultDay:l})});const n=c.filter(d=>d.rewarder_display);(!s||s.length<1||JSON.stringify(s)!==JSON.stringify(n))&&(w=n),console.log(w,n,JSON.stringify(s)!==JSON.stringify(n),"resultresult")}const y={...r,rewardes:w,liqidity:a?a.tvl_in_usd:"--",vol:a?a.vol_in_usd_24h:"--",apr:a&&a.apr_7day?(v=a.apr_7day)==null?void 0:v.replace("%",""):"--",fee:r&&r.fee?r.fee:"--",aprNum:a&&a.apr_7day?String(Number(a.apr_7day.substring(0,a.apr_7day.length-1))+b):"--",rewarder_apr:O(a&&a.rewarder_apr),aprTotal:i(a&&a.apr_7day,a&&O(a.rewarder_apr)),rewarders0:a&&a.rewarder_apr[0],rewarders1:a&&a.rewarder_apr[1],rewarders2:a&&a.rewarder_apr[2],labels:r!=null&&r.labels?r.labels:[],isFarming:r==null?void 0:r.isFarming,fee_24_h:a?a.fee_24_h:"--"};return e.value.setCurrentPoolMoreInfo(y),y}export{L as g};
