import{_ as X}from"./upgrade-loading.279a2fab.js";import{_ as z}from"./upgrade-position-item.bc852a6b.js";import{a as Q,r as w,y as Y,b as Z,m as M,l as a,H as x,R as oo,q as R,X as eo,e as so,o as r,f as l,i as O,x as N,F as to,E as no,h as ao,v as U,w as ro,B as lo,c as uo,j as io}from"./entry.59a2cdcc.js";import{u as co,a as po,c as mo}from"./sha256.fbf47686.js";import{u as vo}from"./notifi.e156ed62.js";import{u as _o}from"./pool.acb16d99.js";import{i as q}from"./import-icon.de3e6c66.js";import{_ as go}from"./img-no-Positions_2x.fb84f178.js";import{_ as fo}from"./img-no-Positions_2x.b6d04572.js";import{_ as ho}from"./img-connect-wallet_2x.9c5c70a7.js";import{_ as yo}from"./img-connect-wallet_2x.5ca5a575.js";/* empty css              *//* empty css              */import"./icon-Amount-for-Sale_2x.b2e65df2.js";import"./status-block.bce15e4e.js";/* empty css              */import"./decimal.0bdeb344.js";import"./farms.f563d6f2.js";import"./farms.c4139862.js";import"./icon-arrow_2x.948aedb2.js";import"./icon-arrow_2x.4ffddb8e.js";import"./icon_rewards_2x.c22d4d5c.js";import"./useWhale.70f4fa69.js";const bo=Q({setup(){const s=w(!1),{t:S}=Y(),C=w(["position"]),G=Z(),E=M(),$=w(""),h=co(),c=a(()=>h),A=a(()=>{const o=E.query.poolAddress,e=n.value.poolConfigObj[o];return console.log(e,"infoinfoinfo"),e}),P=a(()=>c.value.chainName?mo[c.value.chainName]:{});let u=w([]);const y=_o(),n=a(()=>y),V=po(),b=a(()=>V),D=()=>{s.value=!0,u.value=[],b.value.address&&y.getMyPositons(b.value.address,n.value.poolsObj,c.value.chainName),setTimeout(()=>{s.value=!1},1e3)};x(()=>{u.value=[],y.setMyPositionsLoading(!0)}),oo(()=>{b.value.connected||(u.value=[])});const F=()=>{s.value=!0;let o=[];n.value.poolPositions.forEach(e=>{var L,f,T,B;let t,i;const p=e.amountA*((L=n.value.RATES[e.token_a.address])==null?void 0:L.price),m=e.amountB*((f=n.value.RATES[e.token_b.address])==null?void 0:f.price);(T=n.value.RATES[e.token_a.address])!=null&&T.price&&((B=n.value.RATES[e.token_b.address])!=null&&B.price)?(t=p+m,i=p+m):(t=" --",i=0),o.push({...e,amountUSD:t,amountUSDOrigin:i,tokenARates:p,tokenBRates:m})}),u.value=o,console.log(u.value,"list.value========>")};R(()=>[n.value.poolPositions,n.value.RATES,A.value],([o,e,t])=>{o&&e&&t&&(console.log("0605==>updateLpList9099999"),F())},{immediate:!0}),R(()=>[b.value.address,A.value,c.value.chainName],([o,e,t])=>{o&&e&&t&&y.getMyPositonsByPool(o,e,t)},{immediate:!0,deep:!0});const k=vo(),d=a(()=>k),j=a(()=>y),J=async o=>{await k.getSourceGroups();const e=d.value.sourceGroups&&d.value.sourceGroups.length>0&&d.value.sourceGroups[0]&&d.value.sourceGroups[0].sources||[];for(let t=0;t<e.length;t++){const{pool_address:i,position_index:p}=JSON.parse(e[t].blockchainAddress);let m=!1,L;for(let f=0;f<o.length;f++){const{poolAddress:T,index:B}=o[f];i==T&&Number(B)==Number(p)&&(m=!0),L={pool_address:i,position_index:p}}m||await k.subscribePosition(L,"",!1,!1)}},W=async()=>{await k.getSourceGroups();const o=d.value.sourceGroups&&d.value.sourceGroups.length>0&&d.value.sourceGroups[0]&&d.value.sourceGroups[0].sources||[];for(let e=0;e<o.length;e++){const{pool_address:t,position_index:i}=JSON.parse(o[e].blockchainAddress),{name:p}=o[e],m={pool_address:t,position_index:i};await k.subscribePosition(m,p,!1,!1)}},H=a(()=>j.value.myPositionsLoading);R(()=>j.value.poolPositions,(o,e)=>{P.value.hasNotifi&&(o&&o.length>0&&e&&e.length!==o.length?J(o):o&&o.length==0&&!H.value&&W())},{immediate:!0});const I=o=>{var e;return(o==null?void 0:o.logoURI)||(o==null?void 0:o.logo_url)||((e=n.value.tokensObj[o==null?void 0:o.address])==null?void 0:e.logo_url)||(c.value.theme==="default"?q("/image/coins/unknown.png"):q("/image/coins/sui-unknown.png"))},v=w(null),_=a(()=>v.value&&v.value.firstToken?v.value.firstToken:null),g=a(()=>v.value&&v.value.lastToken?v.value.lastToken:null),K=a(()=>{let o=[];o=u.value;const e=o.filter((t,i)=>_.value&&g.value?t.coinA.symbol==_.value.symbol&&t.coinB.symbol==g.value.symbol||t.coinA.symbol==g.value.symbol&&t.coinB.symbol==_.value.symbol:_.value?t.coinA.symbol.toLowerCase().includes(_.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(_.value.symbol.toLowerCase()):g.value?t.coinA.symbol.toLowerCase().includes(g.value.symbol.toLowerCase())||t.coinB.symbol.toLowerCase().includes(g.value.symbol.toLowerCase()):o);return n.value.myPositionsLoading||h.setPositiomAmount(e.length),e});return eo(()=>{h.setPositiomAmount("--")}),{showList:K,childTokenSelectRef:v,firstToken:_,lastToken:g,getCoinIcon:I,t:S,pools:n,store:c,wallet:b,list:u,clickRefresh:D,refresh:s,current:C,router:G,searchKey:$}}});const ko={class:"your-liquidity-container"},Lo={key:0,class:"upgrade-loading"},wo={key:1,class:"position-list"},So={key:2,class:"no-data"},Ao={key:0,src:go,alt:""},Po={key:1,src:fo,alt:""},To={key:3,class:"no-data"},Bo={key:0,src:ho,alt:""},No={key:1,src:yo,alt:""};function Ro(s,S,C,G,E,$){const h=X,c=z,A=lo;return r(),l("div",ko,[s.pools.myPositionsLoading&&s.wallet.connected?(r(),l("div",Lo,[O(h,{loading:s.pools.myPositionsLoading,type:"position"},null,8,["loading"])])):N("",!0),s.showList&&s.showList.length>0&&s.wallet.connected&&!s.pools.myPositionsLoading?(r(),l("div",wo,[(r(!0),l(to,null,no(s.showList,(P,u)=>(r(),uo(c,{key:u,"p-item":P},null,8,["p-item"]))),128))])):N("",!0),s.showList&&s.showList.length<=0&&!s.pools.myPositionsLoading&&s.wallet.connected?(r(),l("div",So,[s.store.theme=="default"?(r(),l("img",Ao)):(r(),l("img",Po)),ao("span",null,U(s.$t("common.noLiquidityPositions")),1)])):N("",!0),s.wallet.connected?N("",!0):(r(),l("div",To,[s.store.theme=="default"?(r(),l("img",Bo)):(r(),l("img",No)),O(A,{class:"connect-wallet",onClick:S[0]||(S[0]=P=>s.wallet.setIsShowWalletModal(!0))},{default:ro(()=>[io(U(s.$t("button.connectWallet")),1)]),_:1})]))])}const oe=so(bo,[["render",Ro],["__scopeId","data-v-46b7787d"]]);export{oe as default};
